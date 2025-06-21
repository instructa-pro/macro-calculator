;
import GradientOrb from '~/components/gradient-orb';
import { PricingSection } from '~/components/landing/PricingSection';
import { TestimonialsSection } from '~/components/landing/TestimonialsSection';
import { FaqSection } from '~/components/landing/FaqSection';

export const Route = createFileRoute({
  component: RouteComponent,  
});

function RouteComponent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="container relative z-0 mx-auto flex flex-col items-center px-4 pt-20 text-center md:pt-32">
        <GradientOrb className="-translate-x-1/2 absolute top-0 left-1/2 z-[-1] transform" />

        <h1 className="max-w-4xl font-medium text-4xl text-foreground md:text-6xl lg:text-7xl">
          Simple, Transparent Pricing
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Start your fitness journey for free, then unlock advanced features as you grow. 
          No hidden fees, no complicated contracts.
        </p>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}