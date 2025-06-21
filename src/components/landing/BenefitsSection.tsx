'use client';

import { BarChart, Dna, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

const benefits = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: 'Achieve Goals Faster',
    description:
      "Tailor your nutrition to your specific goal, whether it's building muscle, losing fat, or maintaining your weight.",
  },
  {
    icon: <Dna className="w-8 h-8 text-primary" />,
    title: 'Science-Backed',
    description:
      'Our calculations are based on the well-established Mifflin-St Jeor equation, a gold standard for estimating calorie needs.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: 'Simple & Quick',
    description:
      'No more complicated spreadsheets. Get your personalized macro breakdown in under 60 seconds.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Use Our Macro Calculator?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Unlock your fitness potential with a plan that's made for you.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <CardHeader className="flex items-center gap-4">
                {benefit.icon}
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
