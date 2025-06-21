'use client';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Card, CardContent } from '~/components/ui/card';

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'Fitness Enthusiast',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: "This macro calculator is a game-changer! It's so simple to use, and the results have helped me stay on track with my muscle gain goals. Highly recommended!",
  },
  {
    name: 'Mike P.',
    role: 'Bodybuilder',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: "As a competitor, precision is key. This tool gives me the exact numbers I need to dial in my nutrition. The best free macro calculator I've found online.",
  },
  {
    name: 'Jessica L.',
    role: 'Personal Trainer',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'I recommend this calculator to all my clients. It takes the guesswork out of nutrition and provides a solid, science-based starting point for their fitness journey.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Users Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Thousands of users are reaching their goals with our help.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">"{testimonial.text}"</p>
                <div className="mt-4 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
