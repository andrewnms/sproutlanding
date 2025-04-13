"use client"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { RetroGrid } from "@/components/ui/retro-grid"

export function HeroScrollDemo() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-black text-white">
      {/* Add RetroGrid as background */}
      <RetroGrid className="z-0" />

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl z-10">
              Chore Tracking That <br />
              <span className="text-[#2ec293]">Motivates Kids</span>
            </h1>
            <p className="mb-10 text-lg text-gray-300 md:text-xl max-w-2xl mx-auto z-10">
              Turn your children's chores into daily achievements with the only chore system that uses bonus incentives.
            </p>
          </>
        }
      >
        {/* Logo centered in the card */}
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#2ec293] p-8 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
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
            <h2 className="text-4xl font-bold text-[#2ec293] mb-4">SPROUT</h2>
            <p className="text-xl text-gray-300 text-center max-w-md">Where bonus incentives create daily results</p>
          </div>
        </div>
      </ContainerScroll>
    </div>
  )
}
