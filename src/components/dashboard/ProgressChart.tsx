
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { cn } from "@/lib/utils";

// Mock data - will be replaced with real data from Supabase later
const mockWeightData = [
  { date: '5/1', weight: 185 },
  { date: '5/8', weight: 183 },
  { date: '5/15', weight: 181 },
  { date: '5/22', weight: 182 },
  { date: '5/29', weight: 180 },
  { date: '6/5', weight: 179 },
  { date: '6/12', weight: 177 },
];

const mockStrengthData = [
  { date: '5/1', squat: 275, bench: 185, deadlift: 315 },
  { date: '5/8', squat: 285, bench: 190, deadlift: 325 },
  { date: '5/15', squat: 290, bench: 195, deadlift: 335 },
  { date: '5/22', squat: 295, bench: 200, deadlift: 345 },
  { date: '5/29', squat: 305, bench: 205, deadlift: 355 },
  { date: '6/5', squat: 315, bench: 210, deadlift: 365 },
  { date: '6/12', squat: 320, bench: 215, deadlift: 375 },
];

interface ProgressChartProps {
  className?: string;
  type?: 'weight' | 'strength';
}

const ProgressChart: React.FC<ProgressChartProps> = ({ className, type = 'weight' }) => {
  const data = type === 'weight' ? mockWeightData : mockStrengthData;
  
  return (
    <Card className={cn("col-span-3", className)}>
      <CardHeader>
        <CardTitle>
          {type === 'weight' ? 'Weight Progress' : 'Strength Progress'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" stroke="#6E59A5" />
              <YAxis stroke="#6E59A5" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderColor: '#e2e8f0',
                  borderRadius: '0.375rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              />
              <Legend />
              {type === 'weight' ? (
                <Line 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="#6E59A5" 
                  strokeWidth={2}
                  dot={{ stroke: '#6E59A5', strokeWidth: 2, fill: 'white', r: 4 }}
                  activeDot={{ stroke: '#6E59A5', strokeWidth: 2, fill: '#6E59A5', r: 6 }}
                />
              ) : (
                <>
                  <Line
                    type="monotone"
                    dataKey="squat"
                    stroke="#6E59A5"
                    strokeWidth={2}
                    dot={{ stroke: '#6E59A5', strokeWidth: 2, fill: 'white', r: 4 }}
                    activeDot={{ stroke: '#6E59A5', strokeWidth: 2, fill: '#6E59A5', r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="bench"
                    stroke="#D6BCFA"
                    strokeWidth={2}
                    dot={{ stroke: '#D6BCFA', strokeWidth: 2, fill: 'white', r: 4 }}
                    activeDot={{ stroke: '#D6BCFA', strokeWidth: 2, fill: '#D6BCFA', r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="deadlift"
                    stroke="#4A3B7F"
                    strokeWidth={2}
                    dot={{ stroke: '#4A3B7F', strokeWidth: 2, fill: 'white', r: 4 }}
                    activeDot={{ stroke: '#4A3B7F', strokeWidth: 2, fill: '#4A3B7F', r: 6 }}
                  />
                </>
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
