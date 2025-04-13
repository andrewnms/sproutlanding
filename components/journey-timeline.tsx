import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Coins, Calendar, Zap, ArrowRight } from "lucide-react";

export function JourneyTimeline() {
  const data = [
    {
      title: "Setup",
      content: (
        <div>
          <p className="text-gray-300 text-xs md:text-sm font-normal mb-4">
            Parents set up the system by creating a dedicated allowance pool for their children.
            This establishes clear expectations from the start.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>Set aside a small weekly allowance ($5-$20 per child)</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>Create customized chore lists for each child</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>Establish meaningful incentives without extra cost</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Coins className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Allowance Pool</h3>
            <p className="text-gray-300">
              Parents maintain full control over allowance funds while providing children with clear goals. 
              Kids know exactly what they need to do to earn their rewards.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Daily",
      content: (
        <div>
          <p className="text-gray-300 text-xs md:text-sm font-normal mb-4">
            Children complete their assigned chores to earn portions of their allowance. 
            Consistent performance is rewarded with increasing bonuses.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>Day 1: Earn base portion of weekly allowance</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>Days 3-7: Earn increased rewards for consistency</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>Visual progress bar keeps kids engaged and motivated</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Zap className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Reward System</h3>
            <p className="text-gray-300">
              Chore completion directly impacts how much allowance children earn each week.
              As they build consistency, they're rewarded with increasing bonuses, creating
              a powerful positive feedback loop.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Weekly",
      content: (
        <div>
          <p className="text-gray-300 text-xs md:text-sm font-normal mb-4">
            We know kids aren't perfect. That's why Sprout includes kid-friendly flexibility
            built right into the system. Plan for busy school days or special events.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>Schedule 1-2 "Off Days" per week without penalties</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>Performance protection for forgetful moments</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>"Catch-up bonus" makes getting back on track exciting</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Calendar className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Kid-Friendly Flexibility</h3>
            <p className="text-gray-300">
              We understand children need flexibility. Our system balances responsibility 
              with understanding, creating sustainable motivation that works with your family's
              schedule, not against it.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Results",
      content: (
        <div>
          <p className="text-gray-300 text-xs md:text-sm font-normal mb-4">
            Children see tangible rewards for their responsibility and consistent chore completion.
            Parents see cleaner homes and more responsible kids.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Kids receive earned allowance weekly or monthly</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Parents enjoy a tidier home without constant nagging</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Children learn valuable responsibility and financial skills</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <ArrowRight className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Progress Visualization</h3>
            <p className="text-gray-300">
              The real win is the responsibility habits children develop, with financial rewards as their
              well-earned bonus. Colorful charts and achievement badges keep kids motivated and excited.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
