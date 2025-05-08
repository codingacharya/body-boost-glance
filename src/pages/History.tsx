
import React from "react";
import WorkoutHistory from "@/components/dashboard/WorkoutHistory";

const History = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Workout History</h2>
        <p className="text-muted-foreground">
          Review your past workouts and track your consistency.
        </p>
      </div>
      
      <WorkoutHistory limit={100} className="col-span-1" />
    </div>
  );
};

export default History;
