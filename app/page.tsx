import { Check, Coins, Shield, Zap, Calendar, ArrowRight, RefreshCw } from "lucide-react"
import { JourneyTimeline } from "@/components/journey-timeline"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        {/* Hero Section with Scroll Animation */}
        <HeroScrollDemo />

        {/* Problem Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">The Problem With Chore Charts</h2>
              <p className="text-lg text-gray-300">
                Most chore charts get ignored after a few days because they lack real incentives. Stars and checkmarks
                aren't enough when kids lose interest. We've created something different that actually motivates children.
              </p>
            </div>
          </div>
        </section>

        {/* Core Components Section */}
        <section className="py-24 bg-black/50">
          <div className="container px-4 md:px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl">Core Components</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
                  <Coins className="h-6 w-6 text-[#2ec293]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Allowance Pool</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Parents set aside a small weekly allowance ($5-20)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Money serves as both potential reward and motivation tool</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>All funds remain under parent control until earned</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
                  <Zap className="h-6 w-6 text-[#2ec293]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Reward System</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Completing chores unlocks portions of weekly allowance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Consistent performance increases rewards (5% → 10% → 15%)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Missed chores reduce potential earnings, not punishments</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
                  <Calendar className="h-6 w-6 text-[#2ec293]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Kid-Friendly Flexibility</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Built-in "Off Days" (1-2 per week) without losing progress</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Performance streak protection for occasional forgetfulness</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>"Catch-up bonus" makes getting back on track exciting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey Section */}
        <JourneyTimeline />

        {/* Social Layer Section */}
        <section className="py-24 bg-black/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Sibling Competition Layer</h2>
              <div className="overflow-hidden rounded-2xl bg-gray-900 p-8 border border-gray-800">
                <div className="mb-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-[#2ec293]">Create Sibling Challenges</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>Set up friendly competitions between siblings</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>Top performers earn bonus allowance from shared pool</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>Every child has a chance to earn with minimum effort</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-[#2ec293]">Earn Family Rewards</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>90%+ chore completion: Earn bonus 50% allowance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>80-89% completion: Get full weekly allowance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>Below 80%: Partial allowance based on completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-400">
                  Friendly competition motivates siblings to do their best, creating real incentives to complete chores consistently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Principles Section */}
        <section className="py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Key Principles</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                  <h3 className="mb-4 flex items-center text-xl font-semibold">
                    <Shield className="mr-3 h-5 w-5 text-[#2ec293]" />
                    No Punishment System
                  </h3>
                  <p className="text-gray-300">
                    No taking things away or grounding. The system is designed to motivate through positive reinforcement, not punishment.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                  <h3 className="mb-4 flex items-center text-xl font-semibold">
                    <RefreshCw className="mr-3 h-5 w-5 text-[#2ec293]" />
                    Kid-Friendly Flexibility
                  </h3>
                  <p className="text-gray-300">
                    System balances responsibility with understanding, recognizing that kids need flexibility and occasional second chances.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                  <h3 className="mb-4 flex items-center text-xl font-semibold">
                    <Coins className="mr-3 h-5 w-5 text-[#2ec293]" />
                    Parent-Controlled
                  </h3>
                  <p className="text-gray-300">
                    Parents maintain full control over allowance funds, with complete visibility into chore completion and reward distribution.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                  <h3 className="mb-4 flex items-center text-xl font-semibold">
                    <ArrowRight className="mr-3 h-5 w-5 text-[#2ec293]" />
                    Progress Visualization
                  </h3>
                  <p className="text-gray-300">
                    Kids see their progress with fun, interactive visuals that celebrate achievements and motivate consistent effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-black/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="rounded-xl bg-gray-900 p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold">What if my child forgets to do a chore?</h3>
                  <p className="mt-3 text-gray-300">
                    We incorporate a forgiveness system similar to popular learning apps. The first miss is free. For subsequent
                    misses, they'll have options to protect their streak and progress by doing make-up chores.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-900 p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold">
                    What will happen if my child has been doing well for a few days but then stops?
                  </h3>
                  <p className="mt-3 text-gray-300">
                    As they miss more consecutive chores, the allowance they can earn gradually decreases. However, they never lose
                    everything—our system is designed to encourage them to get back on track, not to discourage them after a setback.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-900 p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold">What happens when my child completes all their chores?</h3>
                  <p className="mt-3 text-gray-300">
                    Great job! They've established a good chore routine and earned their full allowance. Plus, they can earn bonus
                    rewards for consistent performance! The real win is the responsibility habits they're building, with the
                    allowance as their well-deserved reward.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-900 p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold">How do we verify if my child actually did their chores?</h3>
                  <p className="mt-3 text-gray-300">
                    We offer multiple verification methods: take a photo of the completed chore, parent verification codes,
                    task timers, and more. Our verification system is flexible yet effective to ensure chores are genuinely completed.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-900 p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold">
                    How does the sibling competition work?
                  </h3>
                  <p className="mt-3 text-gray-300">
                    Let's say you have 3 children. Each has their own chore list, and you set an additional family bonus pool.
                    After a week or month, rewards are distributed based on performance:
                    <br />
                    <br />
                    <span className="font-medium text-[#2ec293]">90%+ Completion rate</span> = Extra bonus allowance
                    <br />
                    <span className="font-medium text-[#2ec293]">80%-89% Completion rate</span> = Full weekly allowance
                    <br />
                    <span className="font-medium text-[#2ec293]">&lt;79% Completion rate</span> = Partial allowance
                  </p>
                </div>

                <div className="rounded-xl bg-gray-900 p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold">What makes Sprout different from regular chore charts?</h3>
                  <p className="mt-3 text-gray-300">
                    Regular chore charts get ignored after a few days. They don't offer real incentives for kids to actually
                    complete tasks. Sprout gamifies chores with immediate rewards and friendly competition, creating a system
                    where kids are genuinely motivated to participate without constant parent nagging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Line Section (formerly CTA) */}
        <section className="bg-[#2ec293] py-24 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">The Bottom Line</h2>
              <p className="mb-8 text-lg">
                You're already trying to get your kids to do chores. You're already considering giving them an allowance.
                Why not combine the two in a way that actually motivates them to participate willingly?
              </p>
              <p className="mb-8 text-lg font-medium">
                Turn nagging into excitement. Make chores a habit they look forward to. Help them earn rewards while learning responsibility.
              </p>
              <p className="text-2xl font-bold">Sprout: Where chores become opportunities.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 py-8 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-[#2ec293] p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 2v8" />
                  <path d="M4.93 10.93 8.5 14.5" />
                  <path d="M2 18h12" />
                  <path d="M19.07 10.93 15.5 14.5" />
                  <path d="M22 18h-4" />
                  <path d="M16 18a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <span className="text-sm font-medium">SPROUT</span>
            </div>
            <div className="text-sm text-gray-400 ml-2">© 2025 Sprout. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { HeroScrollDemo } from "@/components/hero-scroll-demo"
