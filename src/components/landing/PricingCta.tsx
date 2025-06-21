'use client';

import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '~/components/ui/button';

export function PricingCta() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Nutrition?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of users who have achieved their fitness goals with our macro calculator. 
            Start free or unlock advanced features with our Pro plans.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/pricing">
              <Button size="lg" className="gap-2">
                View Pricing Plans
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Start Free Calculator
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            14-day free trial on all paid plans • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}