export type Gender = 'male' | 'female';

export type ActivityLevel = 'sedentary' | 'lightly' | 'moderately' | 'very' | 'extra';

export interface UserStats {
  age: number;
  gender: Gender;
  height: number; // in cm
  weight: number; // in kg
  activityLevel: ActivityLevel;
  goal: 'fat-loss' | 'maintenance' | 'muscle-gain';
}

export interface MacroResults {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  lightly: 1.375,
  moderately: 1.55,
  very: 1.725,
  extra: 1.9,
};

const goalModifiers: Record<UserStats['goal'], number> = {
  'fat-loss': -500,
  maintenance: 0,
  'muscle-gain': 500,
};

// Using Mifflin-St Jeor Equation
function calculateBMR(stats: Omit<UserStats, 'activityLevel' | 'goal'>): number {
  const { age, gender, height, weight } = stats;
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  // female
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  return bmr * activityMultipliers[activityLevel];
}

function calculateGoalCalories(tdee: number, goal: UserStats['goal']): number {
  return tdee + goalModifiers[goal];
}

function calculateMacros(calories: number): Omit<MacroResults, 'calories'> {
  // 40% protein, 30% carbs, 30% fat for muscle gain
  const proteinCalories = calories * 0.4;
  const carbCalories = calories * 0.3;
  const fatCalories = calories * 0.3;

  return {
    protein: Math.round(proteinCalories / 4),
    carbs: Math.round(carbCalories / 4),
    fat: Math.round(fatCalories / 9),
  };
}

export function calculateAllMetrics(stats: UserStats): MacroResults {
  const bmr = calculateBMR(stats);
  const tdee = calculateTDEE(bmr, stats.activityLevel);
  const goalCalories = calculateGoalCalories(tdee, stats.goal);
  const macros = calculateMacros(goalCalories);

  return {
    calories: Math.round(goalCalories),
    ...macros,
  };
}
