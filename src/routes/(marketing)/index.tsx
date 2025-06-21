'use client';

import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import GradientOrb from '~/components/gradient-orb';
import { TopBanner } from '~/components/TopBanner';
import { BenefitsSection } from '~/components/landing/BenefitsSection';
import { FaqSection } from '~/components/landing/FaqSection';
import { HowItWorksSection } from '~/components/landing/HowItWorksSection';
import { TestimonialsSection } from '~/components/landing/TestimonialsSection';
import { MacroCalculatorForm } from '~/components/macro/MacroCalculatorForm';
import { MacroResultsDisplay } from '~/components/macro/MacroResults';
import { type MacroResults } from '~/lib/macro-calculator';

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const [macroResults, setMacroResults] = useState<MacroResults | null>(null);

  const handleFormSubmit = (results: MacroResults) => {
    setMacroResults(results);
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <TopBanner />
      {/* Hero Section */}
      <main className="container relative z-0 mx-auto flex flex-col items-center px-4 pt-20 text-center md:pt-32">
        <GradientOrb className="-translate-x-1/2 absolute top-0 left-1/2 z-[-1] transform" />

        <h1 className="max-w-4xl font-medium text-4xl text-foreground md:text-6xl lg:text-7xl">
          Macro Calculator
        </h1>

        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Enter your stats to calculate your daily macros for muscle gain.
        </p>

        <div className="mt-12 w-full max-w-2xl">
          <MacroCalculatorForm onFormSubmit={handleFormSubmit} />
        </div>

        {macroResults && (
          <div id="results" className="mt-12 w-full max-w-2xl">
            <MacroResultsDisplay results={macroResults} />
          </div>
        )}
      </main>
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
}
