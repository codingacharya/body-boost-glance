
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// Mock data - will be replaced with real data from Supabase later
const mockWorkouts = [
  {
    id: 1,
    date: "2023-05-07",
    title: "Upper Body Strength",
    duration: "45 min",
    exercises: ["Bench Press", "Pull-ups", "Shoulder Press"],
    intensity: "high"
  },
  {
    id: 2,
    date: "2023-05-05",
    title: "Leg Day",
    duration: "60 min",
    exercises: ["Squats", "Deadlifts", "Lunges"],
    intensity: "high"
  },
  {
    id: 3,
    date: "2023-05-03",
    title: "Cardio Session",
    duration: "30 min",
    exercises: ["Running", "Cycling"],
    intensity: "medium"
  },
  {
    id: 4,
    date: "2023-05-01",
    title: "Core Workout",
    duration: "25 min",
    exercises: ["Planks", "Sit-ups", "Russian Twists"],
    intensity: "medium"
  },
  {
    id: 5,
    date: "2023-04-28",
    title: "Full Body Circuit",
    duration: "50 min",
    exercises: ["Burpees", "Push-ups", "Mountain Climbers"],
    intensity: "high"
  }
];

interface WorkoutHistoryProps {
  className?: string;
  limit?: number;
}

const WorkoutHistory: React.FC<WorkoutHistoryProps> = ({ className, limit = 5 }) => {
  const displayWorkouts = limit ? mockWorkouts.slice(0, limit) : mockWorkouts;
  
  return (
    <Card className={cn("col-span-3", className)}>
      <CardHeader>
        <CardTitle>Recent Workouts</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[350px] pr-4">
          {displayWorkouts.map((workout) => (
            <div 
              key={workout.id}
              className="mb-4 p-4 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer animate-enter"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{workout.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(workout.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })} · {workout.duration}
                  </p>
                </div>
                <div 
                  className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    workout.intensity === "high" && "bg-fitness-red/20 text-fitness-red",
                    workout.intensity === "medium" && "bg-warning/20 text-warning",
                    workout.intensity === "low" && "bg-fitness-green/20 text-fitness-green"
                  )}
                >
                  {workout.intensity.charAt(0).toUpperCase() + workout.intensity.slice(1)}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {workout.exercises.map((exercise, i) => (
                  <span 
                    key={i}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-secondary text-secondary-foreground"
                  >
                    {exercise}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default WorkoutHistory;
