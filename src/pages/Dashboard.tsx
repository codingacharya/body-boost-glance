
import React from "react";
import { ArrowUp, Calendar, Dumbbell, FlameIcon } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import WorkoutHistory from "@/components/dashboard/WorkoutHistory";
import PersonalRecords from "@/components/dashboard/PersonalRecords";
import ProgressChart from "@/components/dashboard/ProgressChart";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Your fitness at a glance. Keep track of your progress.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Weekly Workouts"
          value="5"
          description="Last 7 days"
          icon={<Dumbbell className="h-4 w-4" />}
          trend="up"
          trendValue="2"
        />
        <StatCard
          title="Calories Burned"
          value="4,320"
          description="Last 7 days"
          icon={<FlameIcon className="h-4 w-4" />}
          trend="up"
          trendValue="12%"
        />
        <StatCard
          title="Workout Minutes"
          value="280"
          description="Last 7 days"
          icon={<Calendar className="h-4 w-4" />}
          trend="up"
          trendValue="18%"
        />
        <StatCard
          title="Active Days"
          value="5/7"
          description="Weekly goal: 5 days"
          icon={<ArrowUp className="h-4 w-4" />}
          trend="neutral"
          trendValue="On track"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <WorkoutHistory />
        <PersonalRecords />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ProgressChart type="weight" />
        <ProgressChart type="strength" className="col-span-3 md:col-span-2" />
      </div>
    </div>
  );
};

export default Dashboard;
