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
            Parents set up the system by depositing a weekly allowance that gets divided by the days of the week.
            This creates clear daily earning opportunities for children.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>Deposit the full weekly allowance once (e.g., 1000 PHP)</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>System automatically divides it by 7 days (≈143 PHP per day)</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>Clear daily goals and rewards with no extra work</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Coins className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Weekly Deposit System</h3>
            <p className="text-gray-300">
              Parents make a single weekly deposit that gets automatically divided into daily rewards. 
              Kids earn a portion of their allowance each day by completing all assigned tasks.
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
            Each day, children complete all their assigned chores to receive that day's portion of their weekly allowance. 
            It's simple - finish all tasks, get paid that day.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>Complete all tasks to earn that day's payment (e.g., 143 PHP)</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>All-or-nothing approach encourages completing everything</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>Immediate rewards keep motivation high every single day</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Zap className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Daily Completion Rewards</h3>
            <p className="text-gray-300">
              Children receive immediate payment for completing all tasks each day. No partial payments for
              partial work - this clear approach teaches the value of finishing what they start.
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
            At the end of each week, parents deposit the next week's allowance and review progress
            with their children, creating a chance to celebrate successes.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>Review which days the child earned their rewards</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>Deposit next week's amount (e.g., another 1000 PHP)</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>Discuss any chore adjustments for the coming week</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Calendar className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Weekly Refresh</h3>
            <p className="text-gray-300">
              The weekly cycle creates natural opportunities for progress reviews and recognition. 
              Children can see how much they earned, what they missed, and set goals for the coming week.
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
            Chores get done consistently, and kids learn financial responsibility through immediate rewards.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Children could earn up to 1000 PHP weekly if they complete all tasks</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Parents enjoy a consistently clean and organized home</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Daily payment model creates strong cause-and-effect understanding</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <ArrowRight className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Daily Payment Success</h3>
            <p className="text-gray-300">
              The immediate daily payment system proves far more effective than traditional weekly allowances.
              Children connect actions with rewards directly, strengthening positive behaviors through instant gratification.
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
