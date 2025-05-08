
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";

// Mock data for various metrics
const weightData = [
  { date: '1/1', weight: 185 },
  { date: '1/15', weight: 183 },
  { date: '2/1', weight: 181 },
  { date: '2/15', weight: 182 },
  { date: '3/1', weight: 180 },
  { date: '3/15', weight: 179 },
  { date: '4/1', weight: 177 },
  { date: '4/15', weight: 176 },
  { date: '5/1', weight: 175 },
  { date: '5/15', weight: 173 },
  { date: '6/1', weight: 172 },
];

const strengthData = [
  { month: 'Jan', squat: 265, bench: 175, deadlift: 305 },
  { month: 'Feb', squat: 275, bench: 180, deadlift: 315 },
  { month: 'Mar', squat: 285, bench: 185, deadlift: 325 },
  { month: 'Apr', squat: 295, bench: 195, deadlift: 335 },
  { month: 'May', squat: 305, bench: 200, deadlift: 350 },
  { month: 'Jun', squat: 315, bench: 210, deadlift: 365 },
];

const workoutFrequencyData = [
  { month: 'Jan', workouts: 12 },
  { month: 'Feb', workouts: 14 },
  { month: 'Mar', workouts: 10 },
  { month: 'Apr', workouts: 16 },
  { month: 'May', workouts: 18 },
  { month: 'Jun', workouts: 20 },
];

const bodyMeasurementsData = [
  { date: 'Jan', chest: 42, waist: 34, arms: 15 },
  { date: 'Feb', chest: 42.5, waist: 33.5, arms: 15.2 },
  { date: 'Mar', chest: 43, waist: 33, arms: 15.5 },
  { date: 'Apr', chest: 43.2, waist: 32.5, arms: 15.7 },
  { date: 'May', chest: 43.5, waist: 32, arms: 16 },
  { date: 'Jun', chest: 44, waist: 31.5, arms: 16.2 },
];

const Progress = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Progress Tracking</h2>
        <p className="text-muted-foreground">
          Visualize your fitness journey with detailed progress charts.
        </p>
      </div>
      
      {/* Weight Progress */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Weight Progress</CardTitle>
          <Select defaultValue="6months">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">Last 3 months</SelectItem>
              <SelectItem value="6months">Last 6 months</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={weightData}
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
                <Area 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="#6E59A5" 
                  fill="#D6BCFA" 
                  strokeWidth={2}
                  activeDot={{ stroke: '#6E59A5', strokeWidth: 2, fill: '#6E59A5', r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Strength Progress */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Strength Progress</CardTitle>
          <Select defaultValue="6months">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">Last 3 months</SelectItem>
              <SelectItem value="6months">Last 6 months</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={strengthData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#6E59A5" />
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
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Workout Frequency */}
      <Card>
        <CardHeader>
          <CardTitle>Workout Frequency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={workoutFrequencyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#6E59A5" />
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
                <Bar dataKey="workouts" fill="#6E59A5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Body Measurements */}
      <Card>
        <CardHeader>
          <CardTitle>Body Measurements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={bodyMeasurementsData}
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
                <Line
                  type="monotone"
                  dataKey="chest"
                  stroke="#6E59A5"
                  strokeWidth={2}
                  dot={{ stroke: '#6E59A5', strokeWidth: 2, fill: 'white', r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="waist"
                  stroke="#D6BCFA"
                  strokeWidth={2}
                  dot={{ stroke: '#D6BCFA', strokeWidth: 2, fill: 'white', r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="arms"
                  stroke="#4A3B7F"
                  strokeWidth={2}
                  dot={{ stroke: '#4A3B7F', strokeWidth: 2, fill: 'white', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Progress;
