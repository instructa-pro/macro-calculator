'use client';

import { Check, Star } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with your fitness journey',
    features: [
      'Basic macro calculator',
      'One-time calculations',
      'Standard muscle gain formulas',
      'Email support',
    ],
    isPopular: false,
    buttonText: 'Get Started Free',
    buttonVariant: 'outline' as const,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'Advanced features for serious fitness enthusiasts',
    features: [
      'Advanced macro calculator',
      'Multiple goal tracking',
      'Custom activity levels',
      'Progress tracking & analytics',
      'Meal planning suggestions',
      'Priority email support',
      'Export your data',
    ],
    isPopular: true,
    buttonText: 'Start Pro Trial',
    buttonVariant: 'default' as const,
  },
  {
    name: 'Premium',
    price: '$19.99',
    period: 'per month',
    description: 'Everything you need for professional-level nutrition',
    features: [
      'Everything in Pro',
      'Personalized coaching insights',
      'Advanced body composition tracking',
      'Supplement recommendations',
      'Custom macro adjustments',
      'Direct coach consultations',
      'API access for integrations',
      '24/7 priority support',
    ],
    isPopular: false,
    buttonText: 'Go Premium',
    buttonVariant: 'outline' as const,
  },
];

export function PricingSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free, upgrade when you're ready to take your nutrition to the next level
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.isPopular ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                <CardDescription className="mt-4">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required for the free plan.
          </p>
        </div>
      </div>
    </section>
  );
}