'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group';
import { type UserStats, type MacroResults, calculateAllMetrics } from '~/lib/macro-calculator';

const formSchema = z.object({
  age: z.coerce.number().min(15, { message: 'Must be at least 15 years old' }),
  gender: z.enum(['male', 'female']),
  height: z.coerce.number().min(1, { message: 'Height is required' }),
  weight: z.coerce.number().min(1, { message: 'Weight is required' }),
  activityLevel: z.enum(['sedentary', 'lightly', 'moderately', 'very', 'extra']),
  goal: z.enum(['fat-loss', 'maintenance', 'muscle-gain']),
});

type FormValues = z.infer<typeof formSchema>;

interface MacroCalculatorFormProps {
  onFormSubmit: (results: MacroResults) => void;
}

const CM_PER_INCH = 2.54;
const KG_PER_LB = 0.453592;

export function MacroCalculatorForm({ onFormSubmit }: MacroCalculatorFormProps) {
  const [heightUnit, setHeightUnit] = useState<'cm' | 'in'>('cm');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 25,
      gender: 'male',
      activityLevel: 'moderately',
      goal: 'muscle-gain',
    },
  });

  function onSubmit(values: FormValues) {
    const heightInCm = heightUnit === 'in' ? values.height * CM_PER_INCH : values.height;
    const weightInKg = weightUnit === 'lbs' ? values.weight * KG_PER_LB : values.weight;

    const userStats: UserStats = {
      ...values,
      gender: values.gender as UserStats['gender'],
      activityLevel: values.activityLevel as UserStats['activityLevel'],
      goal: values.goal as UserStats['goal'],
      height: heightInCm,
      weight: weightInKg,
    };

    const results = calculateAllMetrics(userStats);
    onFormSubmit(results);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g. 25" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder={`e.g. ${heightUnit === 'cm' ? 180 : 71}`}
                      {...field}
                    />
                    <ToggleGroup
                      type="single"
                      defaultValue={heightUnit}
                      onValueChange={(value: 'cm' | 'in') => value && setHeightUnit(value)}
                    >
                      <ToggleGroupItem value="cm">cm</ToggleGroupItem>
                      <ToggleGroupItem value="in">in</ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder={`e.g. ${weightUnit === 'kg' ? 80 : 176}`}
                      {...field}
                    />
                    <ToggleGroup
                      type="single"
                      defaultValue={weightUnit}
                      onValueChange={(value: 'kg' | 'lbs') => value && setWeightUnit(value)}
                    >
                      <ToggleGroupItem value="kg">kg</ToggleGroupItem>
                      <ToggleGroupItem value="lbs">lbs</ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="activityLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Activity Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your activity level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (office job)</SelectItem>
                  <SelectItem value="lightly">
                    Lightly Active (light exercise 1-3 days/wk)
                  </SelectItem>
                  <SelectItem value="moderately">
                    Moderately Active (moderate exercise 3-5 days/wk)
                  </SelectItem>
                  <SelectItem value="very">Very Active (heavy exercise 6-7 days/wk)</SelectItem>
                  <SelectItem value="extra">
                    Extra Active (very heavy exercise, physical job)
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="goal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Goal</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary goal" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="fat-loss">Fat Loss</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Your daily calorie target will be adjusted based on your goal.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Calculate Macros</Button>
      </form>
    </Form>
  );
}
