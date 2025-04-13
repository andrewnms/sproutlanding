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
            Parents set up the system by depositing a weekly bonus amount on top of the regular allowance.
            This creates clear daily earning opportunities without risking base allowance.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>Set a weekly bonus amount (e.g., 500 PHP) on top of base allowance</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>System automatically divides it by 7 days (≈70 PHP bonus per day)</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>Clear daily incentives with guaranteed base allowance</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Coins className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Weekly Bonus System</h3>
            <p className="text-gray-300">
              Parents add a weekly bonus pool that gets automatically divided into daily incentives. 
              Kids earn bonus amounts each day by completing all assigned tasks, on top of their regular allowance.
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
            Each day, children complete all their assigned chores to receive that day's bonus amount on top of their regular allowance. 
            It's simple - finish all tasks, get extra money that day.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>Complete all tasks to earn that day's bonus (e.g., 70 PHP)</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>All-or-nothing bonus approach encourages completing everything</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>Immediate rewards keep motivation high without risking base allowance</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Zap className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Daily Bonus Rewards</h3>
            <p className="text-gray-300">
              Children receive immediate bonus payments for completing all tasks each day, while still receiving their base allowance. 
              This positive approach teaches the value of work while maintaining financial security.
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
            At the end of each week, parents deposit the next week's bonus amount and review progress
            with their children, creating a chance to celebrate successes.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>Review which days the child earned their bonus rewards</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>Deposit next week's bonus amount (e.g., another 500 PHP)</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>Discuss any chore or bonus adjustments for the coming week</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Calendar className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Weekly Bonus Refresh</h3>
            <p className="text-gray-300">
              The weekly cycle creates natural opportunities for progress reviews and recognition. 
              Children can see how much bonus they earned on top of their allowance, what they missed, and set goals for the coming week.
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
            Over time, both parents and children see the benefits of this simple but effective system. 
            Chores get done consistently, and kids learn financial responsibility through immediate bonus rewards.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Children earn their base allowance plus up to 500 PHP in weekly bonuses</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Parents enjoy a consistently clean and organized home</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Daily bonus model creates strong positive reinforcement</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <ArrowRight className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Bonus System Success</h3>
            <p className="text-gray-300">
              The daily bonus system proves far more effective than traditional approaches.
              Children maintain financial security with their base allowance while being motivated by immediate bonus rewards - creating a positive approach to responsibility.
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
