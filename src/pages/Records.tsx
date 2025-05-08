
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data - more detailed than the dashboard version
const mockRecords = {
  strength: [
    { id: 1, exercise: "Bench Press", value: "225 lbs", previousValue: "215 lbs", date: "2023-04-15" },
    { id: 2, exercise: "Squat", value: "315 lbs", previousValue: "305 lbs", date: "2023-04-10" },
    { id: 3, exercise: "Deadlift", value: "405 lbs", previousValue: "385 lbs", date: "2023-05-02" },
    { id: 4, exercise: "Overhead Press", value: "135 lbs", previousValue: "130 lbs", date: "2023-03-25" },
    { id: 5, exercise: "Pull-ups", value: "15 reps", previousValue: "12 reps", date: "2023-04-22" },
    { id: 6, exercise: "Dips", value: "20 reps", previousValue: "18 reps", date: "2023-05-01" },
    { id: 7, exercise: "Barbell Row", value: "185 lbs", previousValue: "175 lbs", date: "2023-04-28" },
    { id: 8, exercise: "Leg Press", value: "450 lbs", previousValue: "430 lbs", date: "2023-04-18" },
  ],
  cardio: [
    { id: 1, exercise: "5K Run", value: "22:45", previousValue: "23:30", date: "2023-04-30" },
    { id: 2, exercise: "10K Run", value: "48:12", previousValue: "49:45", date: "2023-03-18" },
    { id: 3, exercise: "1 Mile Run", value: "6:30", previousValue: "6:45", date: "2023-05-06" },
    { id: 4, exercise: "Cycling 20km", value: "45:10", previousValue: "46:22", date: "2023-04-08" },
    { id: 5, exercise: "Swimming 1km", value: "18:24", previousValue: "19:10", date: "2023-03-29" },
    { id: 6, exercise: "Rowing 2000m", value: "7:50", previousValue: "8:05", date: "2023-04-12" },
  ],
  bodyweight: [
    { id: 1, exercise: "Push-ups", value: "50 reps", previousValue: "45 reps", date: "2023-04-25" },
    { id: 2, exercise: "Sit-ups", value: "75 reps", previousValue: "70 reps", date: "2023-04-20" },
    { id: 3, exercise: "Plank", value: "3:30", previousValue: "3:15", date: "2023-05-04" },
    { id: 4, exercise: "Burpees", value: "30 reps", previousValue: "25 reps", date: "2023-04-15" },
    { id: 5, exercise: "Mountain Climbers", value: "100 reps", previousValue: "90 reps", date: "2023-04-10" },
  ]
};

const Records = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Personal Records</h2>
        <p className="text-muted-foreground">
          Track your achievements and personal bests across different exercises.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Personal Records</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="strength" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="strength">Strength</TabsTrigger>
              <TabsTrigger value="cardio">Cardio</TabsTrigger>
              <TabsTrigger value="bodyweight">Bodyweight</TabsTrigger>
            </TabsList>
            
            {Object.entries(mockRecords).map(([category, records]) => (
              <TabsContent key={category} value={category} className="p-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {records.map((record) => (
                    <div key={record.id} className="border rounded-lg p-4 animate-enter">
                      <h3 className="font-semibold">{record.exercise}</h3>
                      <div className="mt-2 flex justify-between items-baseline">
                        <span className="text-2xl font-bold text-fitness-purple">{record.value}</span>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Previous: </span>
                          <span>{record.previousValue}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Achieved on {new Date(record.date).toLocaleDateString()}
                      </p>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                        <div className="h-full bg-fitness-purple rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Records;
