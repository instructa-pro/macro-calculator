'use client';

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { type MacroResults } from '~/lib/macro-calculator';

interface MacroResultsProps {
  results: MacroResults;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function MacroResultsDisplay({ results }: MacroResultsProps) {
  const data = [
    { name: 'Protein', value: results.protein * 4 },
    { name: 'Carbs', value: results.carbs * 4 },
    { name: 'Fat', value: results.fat * 9 },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Daily Macros</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-lg font-semibold">Total Daily Calories</p>
          <p className="text-4xl font-bold text-primary">{results.calories}</p>
        </div>
        <div className="grid grid-cols-3 text-center divide-x">
          <div>
            <p className="font-semibold">Protein</p>
            <p>{results.protein}g</p>
          </div>
          <div>
            <p className="font-semibold">Carbs</p>
            <p>{results.carbs}g</p>
          </div>
          <div>
            <p className="font-semibold">Fat</p>
            <p>{results.fat}g</p>
          </div>
        </div>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
