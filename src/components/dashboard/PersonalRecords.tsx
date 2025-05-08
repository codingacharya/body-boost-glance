
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// Mock data - will be replaced with real data from Supabase later
const mockRecords = {
  strength: [
    { id: 1, exercise: "Bench Press", value: "225 lbs", date: "2023-04-15" },
    { id: 2, exercise: "Squat", value: "315 lbs", date: "2023-04-10" },
    { id: 3, exercise: "Deadlift", value: "405 lbs", date: "2023-05-02" },
    { id: 4, exercise: "Overhead Press", value: "135 lbs", date: "2023-03-25" },
    { id: 5, exercise: "Pull-ups", value: "15 reps", date: "2023-04-22" },
  ],
  cardio: [
    { id: 1, exercise: "5K Run", value: "22:45", date: "2023-04-30" },
    { id: 2, exercise: "10K Run", value: "48:12", date: "2023-03-18" },
    { id: 3, exercise: "1 Mile Run", value: "6:30", date: "2023-05-06" },
    { id: 4, exercise: "Cycling 20km", value: "45:10", date: "2023-04-08" },
    { id: 5, exercise: "Swimming 1km", value: "18:24", date: "2023-03-29" },
  ],
};

interface PersonalRecordsProps {
  className?: string;
}

const PersonalRecords: React.FC<PersonalRecordsProps> = ({ className }) => {
  return (
    <Card className={cn("col-span-2", className)}>
      <CardHeader>
        <CardTitle>Personal Records</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="strength" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="strength">Strength</TabsTrigger>
            <TabsTrigger value="cardio">Cardio</TabsTrigger>
          </TabsList>
          <TabsContent value="strength" className="p-4">
            <ScrollArea className="h-[300px]">
              {mockRecords.strength.map((record) => (
                <div key={record.id} className="mb-4 animate-enter">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h3 className="font-medium">{record.exercise}</h3>
                      <p className="text-sm text-muted-foreground">
                        Achieved on {new Date(record.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-fitness-purple">{record.value}</span>
                    </div>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                    <div className="h-full bg-fitness-purple rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="cardio" className="p-4">
            <ScrollArea className="h-[300px]">
              {mockRecords.cardio.map((record) => (
                <div key={record.id} className="mb-4 animate-enter">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h3 className="font-medium">{record.exercise}</h3>
                      <p className="text-sm text-muted-foreground">
                        Achieved on {new Date(record.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-fitness-purple">{record.value}</span>
                    </div>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                    <div className="h-full bg-fitness-purple rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PersonalRecords;
