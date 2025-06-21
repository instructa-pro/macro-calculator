'use client';

;
import { 
  Heart, 
  Target, 
  Users, 
  Lightbulb,
  Apple,
  Dumbbell,
  Scale,
  Clock,
  Zap,
  Brain,
  ChefHat,
  Trophy
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import GradientOrb from '~/components/gradient-orb';

export const Route = createFileRoute({
  component: AboutPage,
});

const nutritionTips = [
  {
    icon: <Apple className="w-6 h-6 text-green-500" />,
    title: 'Prioritize Whole Foods',
    description: 'Focus on nutrient-dense, minimally processed foods. They provide better satiety and more micronutrients per calorie.',
  },
  {
    icon: <Scale className="w-6 h-6 text-blue-500" />,
    title: 'Track Your Intake',
    description: 'Use a food scale and tracking app for the first few weeks to understand portion sizes and macro content.',
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-500" />,
    title: 'Meal Timing Matters',
    description: 'Spread protein intake throughout the day and consider pre/post-workout nutrition for optimal results.',
  },
  {
    icon: <ChefHat className="w-6 h-6 text-orange-500" />,
    title: 'Meal Prep Success',
    description: 'Prepare meals in advance to stay consistent with your macro targets and avoid impulsive food choices.',
  },
];

const fitnessTips = [
  {
    icon: <Dumbbell className="w-6 h-6 text-red-500" />,
    title: 'Progressive Overload',
    description: 'Gradually increase weight, reps, or sets to continuously challenge your muscles and promote growth.',
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: 'Consistency Over Perfection',
    description: 'Regular workouts with proper form beat sporadic intense sessions. Aim for 3-4 workouts per week.',
  },
  {
    icon: <Brain className="w-6 h-6 text-indigo-500" />,
    title: 'Mind-Muscle Connection',
    description: 'Focus on feeling the target muscle work during each exercise. Quality over quantity always wins.',
  },
  {
    icon: <Trophy className="w-6 h-6 text-amber-500" />,
    title: 'Recovery is Key',
    description: 'Allow 48-72 hours between training the same muscle groups. Growth happens during rest, not just workouts.',
  },
];

const teamValues = [
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: 'Health First',
    description: 'We believe sustainable health habits are built on science, not fads. Our approach prioritizes long-term wellness over quick fixes.',
  },
  {
    icon: <Target className="w-8 h-8 text-blue-500" />,
    title: 'Precision Matters',
    description: 'Accurate macro calculations are the foundation of successful body composition changes. We use proven formulas and methods.',
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: 'Community Driven',
    description: 'Your feedback shapes our tool. We continuously improve based on real user experiences and success stories.',
  },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <GradientOrb className="-translate-x-1/2 absolute top-0 left-1/2 z-[-1] transform" />
          
          <div className="relative z-10 text-center">
            <h1 className="max-w-4xl mx-auto font-medium text-4xl text-foreground md:text-6xl lg:text-7xl">
              About Our Mission
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
              We're on a mission to make nutrition science accessible to everyone. 
              Your fitness journey deserves the right fuel, calculated precisely for your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-center text-xl leading-relaxed">
                Born from frustration with complex nutrition advice and conflicting information, 
                our macro calculator cuts through the noise. We combine decades of nutritional 
                science with modern technology to deliver personalized macro targets that actually work.
              </p>
              <p className="text-center text-lg leading-relaxed mt-6">
                Whether you're a beginner starting your fitness journey or an experienced athlete 
                fine-tuning your nutrition, our tool provides the precision you need to reach your goals efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {teamValues.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader className="flex flex-col items-center gap-4">
                  {value.icon}
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Lightbulb className="w-12 h-12 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pro Tips for Success
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Expert advice to maximize your results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Nutrition Tips */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center gap-3">
                <Apple className="w-8 h-8 text-green-500" />
                Nutrition Mastery
              </h3>
              <div className="space-y-6">
                {nutritionTips.map((tip) => (
                  <Card key={tip.title} className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        {tip.icon}
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Fitness Tips */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center gap-3">
                <Dumbbell className="w-8 h-8 text-red-500" />
                Training Excellence
              </h3>
              <div className="space-y-6">
                {fitnessTips.map((tip) => (
                  <Card key={tip.title} className="border-l-4 border-l-red-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        {tip.icon}
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
              Remember: The Fundamentals Always Win
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Caloric Balance</h3>
                <p className="text-muted-foreground">Energy in vs energy out determines weight change. Macros optimize body composition.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Consistency</h3>
                <p className="text-muted-foreground">Small daily actions compound into remarkable results over time.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Patience</h3>
                <p className="text-muted-foreground">Sustainable changes take time. Trust the process and celebrate small wins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Transform Your Nutrition?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start with accurate macros calculated specifically for your body and goals.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Calculate My Macros
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}