'use client';

import { ListChecks, Target, Presentation } from 'lucide-react';

const steps = [
  {
    icon: <ListChecks className="w-12 h-12 text-primary" />,
    name: 'Step 1: Enter Your Details',
    description: 'Provide your age, gender, height, weight, and activity level to get started.',
  },
  {
    icon: <Target className="w-12 h-12 text-primary" />,
    name: 'Step 2: Define Your Goal',
    description: 'Select whether you want to lose fat, maintain, or build muscle.',
  },
  {
    icon: <Presentation className="w-12 h-12 text-primary" />,
    name: 'Step 3: Get Your Results',
    description: 'Receive your personalized daily calorie and macronutrient targets instantly.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-12 bg-muted sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get your personalized macros in just three simple steps.
          </p>
        </div>
        <div className="relative mt-12">
          <div aria-hidden="true" className="absolute inset-0 hidden items-center md:flex">
            <div className="w-full border-t border-dashed border-gray-300" />
          </div>
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 bg-background rounded-full border shadow-sm">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold">{step.name}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
