# Macro Calculator Plan

This plan outlines the steps to build a macro calculator on the homepage for users aiming for muscle gain.

## Phase 1: UI Components

### 1. Create Input Form

- **Component:** Create a new React component at `src/components/macro/MacroCalculatorForm.tsx`.
- **Location:** This form will be placed on the main index page (`src/routes/(marketing)/index.tsx`).
- **Framework:** Utilize `shadcn/ui` components, which are already part of the project.
- **Form Library:** We will use `react-hook-form` with `zod` for robust validation.
- **Input Fields:**
    - **Age:** Number input.
    - **Gender:** Select dropdown (Male, Female).
    - **Height:** Number input with a unit toggle for `cm` and `inches`.
    - **Weight:** Number input with a unit toggle for `kg` and `lbs`.
    - **Activity Level:** Select dropdown (Sedentary, Lightly Active, Moderately Active, Very Active, Extra Active).
    - **Goal:** Select dropdown (defaulting to "Muscle Gain").

### 2. Create Results Display

- **Component:** Create `src/components/macro/MacroResults.tsx`.
- **Display Details:**
    - Total Daily Calories.
    - Macronutrient breakdown in grams (Protein, Carbohydrates, Fat).
- **Visualization:** Use `recharts` to display the macro split in a visually appealing pie chart.

## Phase 2: Calculation Logic

### 1. Create a Utility Module

- **File:** Create a new utility file at `src/lib/macro-calculator.ts`.
- **BMR Calculation:** Implement the Mifflin-St Jeor equation for Basal Metabolic Rate.
    - **Men:** `BMR = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) + 5`
    - **Women:** `BMR = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) - 161`
- **TDEE Calculation:** Calculate Total Daily Energy Expenditure by multiplying BMR by activity level multipliers.
    - **Sedentary:** 1.2
    - **Lightly Active:** 1.375
    - **Moderately Active:** 1.55
    - **Very Active:** 1.725
    - **Extra Active:** 1.9
- **Goal Adjustment:** For the "Muscle Gain" goal, we will add a 500-calorie surplus to the TDEE.
- **Macro Split:**
    - Use a 40% Protein, 30% Carbohydrates, and 30% Fat ratio, which is optimal for muscle gain.
    - Convert calorie percentages to grams using their caloric values (Protein: 4 cal/g, Carbs: 4 cal/g, Fat: 9 cal/g).

## Phase 3: State Management & Integration

- **State:** Use `react-hook-form` to manage the form's state and validation within the `MacroCalculatorForm` component. The main page component will hold the state for the calculation results.
- **Integration:**
    1. In `src/routes/(marketing)/index.tsx`, render the `MacroCalculatorForm`.
    2. The form will handle its own state and, upon successful submission, will call a function passed down via props from the index page.
    3. This function will trigger the calculations using the utility module and update the state on the index page with the results.
    4. The `MacroResults` component will be conditionally rendered with the new results.

## Phase 4: Styling & Dependencies

- **Styling:** Use Tailwind CSS to ensure the new components are responsive and match the existing site design.
- **New Dependencies:**
    - `pnpm add recharts @types/recharts`
    - `pnpm add react-hook-form @hookform/resolvers zod`

By following this plan, we will create a comprehensive and user-friendly macro calculator. 