import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Coins, Calendar, Zap, ArrowRight } from "lucide-react";

export function JourneyTimeline() {
  const data = [
    {
      title: "Start",
      content: (
        <div>
          <p className="text-gray-300 text-xs md:text-sm font-normal mb-4">
            Begin your habit-building journey by depositing funds into your personal stake pool.
            This creates real accountability from day one.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>Deposit between $5-$20 (you choose the amount)</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>Money stays in your account, never lost to third parties</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Coins className="h-4 w-4 text-[#2ec293]" />
              <span>Creates meaningful stakes for habit completion</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Coins className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Personal Stake Pool</h3>
            <p className="text-gray-300">
              Your deposit serves as both potential reward and accountability mechanism. 
              The money is always yours - it's used to motivate consistency, not as a penalty.
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
            Complete your daily habit to unlock portions of your stake. 
            The longer your streak, the bigger the rewards.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>Day 1: Unlock 5% of your stake</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>Days 3-7: Unlock 10% of your stake</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Zap className="h-4 w-4 text-[#2ec293]" />
              <span>Days 8+: Unlock 15% of your stake</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Zap className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Unlock Mechanism</h3>
            <p className="text-gray-300">
              Your habit completion directly impacts how much of your money becomes available.
              As you build consistency, you're rewarded with increased unlocks, creating a
              powerful feedback loop.
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
            Life happens. That's why Sprout includes flexibility built right into the system.
            Plan ahead for days when you know you'll need a break.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>Schedule 1-2 "Flex Days" per week with no penalties</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>Streak protection prevents progress loss for occasional misses</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <Calendar className="h-4 w-4 text-[#2ec293]" />
              <span>"Comeback bonus" makes restarting easier after breaks</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <Calendar className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Flexibility System</h3>
            <p className="text-gray-300">
              We understand habit-building isn't always linear. Our system balances accountability 
              with forgiveness, creating sustainable motivation that works with your life, not against it.
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
            See tangible rewards for your consistency and habit formation.
            You've earned it - now decide how to use your unlocked funds.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Withdraw unlocked funds as a self-reward</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Reinvest in new habit challenges</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
              <ArrowRight className="h-4 w-4 text-[#2ec293]" />
              <span>Join group challenges with friends</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
            <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
              <ArrowRight className="h-6 w-6 text-[#2ec293]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Progress Over Punishment</h3>
            <p className="text-gray-300">
              The real win is the habit you've built, with the financial incentive as your well-earned bonus.
              Seeing your progress visualized helps reinforce your success and keeps you motivated.
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
