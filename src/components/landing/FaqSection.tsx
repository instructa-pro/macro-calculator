'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

const faqs = [
  {
    question: 'What are macronutrients?',
    answer:
      'Macronutrients, or "macros," are the three main nutrients your body needs in large amounts: protein, carbohydrates, and fat. Each plays a unique and vital role in your body\'s functions.',
  },
  {
    question: 'Why is protein important for muscle gain?',
    answer:
      'Protein is essential for repairing and building muscle tissue. When you work out, you create micro-tears in your muscles. Protein provides the amino acids necessary to heal these tears and build the muscle back stronger.',
  },
  {
    question: 'How often should I recalculate my macros?',
    answer:
      "It's a good idea to recalculate your macros every 4-6 weeks, or whenever your weight changes by a significant amount (e.g., 5-10 lbs). As your body changes, your energy needs will change too.",
  },
  {
    question: 'Can I use this calculator for fat loss?',
    answer:
      'Absolutely! Simply select "Fat Loss" as your goal. The calculator will create a moderate calorie deficit to help you lose weight sustainably while preserving muscle mass.',
  },
];

export function FaqSection() {
  return (
    <section className="py-12 bg-muted sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Have questions? We've got answers.</p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
