"use client";

import { YMapsAPIProvider } from "@/components/Map/YMapsAPIProvider";
import { Map } from "@/components/Map/Map"

export default function Home() {
  return (
    <main className="relative w-full h-full">
      <div className="relative w-full h-[48rem] border-2 border-gray-300">
        <YMapsAPIProvider>
          <Map />
        </YMapsAPIProvider>
      </div>
    </main>
  );
}
