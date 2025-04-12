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
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">The Problem With Habit Apps</h2>
              <p className="text-lg text-gray-300">
                Most habit trackers get deleted after a few weeks because they lack real stakes. Streaks and badges
                aren't enough when motivation fades. We've created something different.
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
                <h3 className="mb-3 text-xl font-semibold">Personal Stake Pool</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Users deposit their own funds ($5-20)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Money serves as both potential reward and accountability mechanism</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>All transactions happen within user's own account</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
                  <Zap className="h-6 w-6 text-[#2ec293]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Unlock Mechanism</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Daily habit completion unlocks portions of user's own stake</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Consecutive streaks increase unlock percentages (5% → 10% → 15%)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Missed days re-lock small portions of already unlocked funds</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                <div className="mb-6 inline-flex rounded-full bg-[#2ec293]/10 p-3">
                  <Calendar className="h-6 w-6 text-[#2ec293]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Flexibility System</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Pre-scheduled "Flex Days" (1-2 per week) with no penalties</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Streak protection for occasional misses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-[#2ec293] mt-1 flex-shrink-0" />
                    <span>Easy re-entry after breaks with "comeback bonus"</span>
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
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Optional Social Layer</h2>
              <div className="overflow-hidden rounded-2xl bg-gray-900 p-8 border border-gray-800">
                <div className="mb-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-[#2ec293]">Create a Group Challenge</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>Create challenges with friends using pooled stakes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>Top performers earn larger shares of group pool</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>Minimum completion threshold ensures everyone has a chance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-[#2ec293]">Earn Rewards</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>90%+ completion: Earn 1.5× your stake</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>80-89% completion: Get your money back</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-[#2ec293]" />
                        <span>Below 80%: Better luck next time!</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-400">
                  The underperformers fund the overachievers, creating real motivation to stay consistent.
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
                    Your Money Stays Yours
                  </h3>
                  <p className="text-gray-300">
                    All "penalties" stay within user's own account (never lost). The system is designed to motivate, not
                    punish.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                  <h3 className="mb-4 flex items-center text-xl font-semibold">
                    <RefreshCw className="mr-3 h-5 w-5 text-[#2ec293]" />
                    Balance
                  </h3>
                  <p className="text-gray-300">
                    System balances accountability with forgiveness, understanding that building habits is a journey
                    with ups and downs.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                  <h3 className="mb-4 flex items-center text-xl font-semibold">
                    <Coins className="mr-3 h-5 w-5 text-[#2ec293]" />
                    Self-Sustainable
                  </h3>
                  <p className="text-gray-300">
                    Rewards come from user's own funds, creating a sustainable system that doesn't rely on external
                    incentives.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-900 p-8 border border-gray-800">
                  <h3 className="mb-4 flex items-center text-xl font-semibold">
                    <ArrowRight className="mr-3 h-5 w-5 text-[#2ec293]" />
                    Progress Over Punishment
                  </h3>
                  <p className="text-gray-300">
                    Focus on progress visualization over punishment, helping users see their growth and stay motivated.
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
                  <h3 className="text-xl font-semibold">What if they fail to do a habit once?</h3>
                  <p className="mt-3 text-gray-300">
                    We incorporate a freeze streak system similar to Duolingo. Your first miss is free. For subsequent
                    misses, you'll have options to protect your streak and progress.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-900 p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold">
                    What will happen if they had a streak of more than 2 days then ultimately ended up failing a day?
                  </h3>
                  <p className="mt-3 text-gray-300">
                    With more consecutive days you miss, the unlocked amount gets progressively reduced. However, you
                    never lose everything—our system is designed to encourage you to get back on track, not punish you
                    for life's inevitable disruptions.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-900 p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold">What happens if we complete it?</h3>
                  <p className="mt-3 text-gray-300">
                    Great job! You've formed a good habit. Plus! You get money as a reward too! (your money back, of
                    course). The real win is the habit you've built, with the financial incentive as a bonus.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-900 p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold">How do we verify if you actually did the habit?</h3>
                  <p className="mt-3 text-gray-300">
                    We offer multiple verification methods: take a photo, connect with Strava, sync with Apple Health,
                    and more. Our verification system is flexible yet effective to ensure accountability.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-900 p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold">
                    How about competition? Let's say I want to bring a group of friends?
                  </h3>
                  <p className="mt-3 text-gray-300">
                    Let's say 5 people enter, each puts money into it equally into a grouped pool stake. After 21 days,
                    we split the winnings!
                    <br />
                    <br />
                    <span className="font-medium text-[#2ec293]">90%+ Completion rate</span> = 1.5x your deposit
                    <br />
                    <span className="font-medium text-[#2ec293]">80%-89% Completion rate</span> = 1x your deposit (money
                    back)
                    <br />
                    <span className="font-medium text-[#2ec293]">&lt;79% Completion rate</span> = No return
                  </p>
                </div>

                <div className="rounded-xl bg-gray-900 p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold">What makes us different from a regular Habit Tracker?</h3>
                  <p className="mt-3 text-gray-300">
                    After a few weeks, you'll delete most habit trackers. They don't offer incentives nor penalties for
                    you to actually feel the habits. We gamify the habit building approach with real stakes and rewards
                    that keep you motivated long-term.
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
                You're going to pay for that gym membership anyway. You're going to buy that language learning app
                regardless. Why not put some skin in the game and get paid to follow through?
              </p>
              <p className="mb-8 text-lg font-medium">
                Turn intention into action. Make habits that stick. Get your money back (and then some) when you
                succeed.
              </p>
              <p className="text-2xl font-bold">Sprout: Where habits pay dividends.</p>
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
