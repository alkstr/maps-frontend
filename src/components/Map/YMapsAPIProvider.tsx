"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import Script from "next/script";
import { ReactifiedModule } from "@yandex/ymaps3-types/reactify";

export type YMapsModule = ReactifiedModule<
  typeof import("@yandex/ymaps3-types")
>;

export type HintModule = ReactifiedModule<
  typeof import("@yandex/ymaps3-types/packages/hint")
>;

export type ControlsModule = ReactifiedModule<
  typeof import("@yandex/ymaps3-types/packages/controls")
>;

type YMapsContextType = {
  ymaps: YMapsModule | null;
  hint: HintModule | null;
  controls: ControlsModule | null;
};

export const YMapsContext = createContext<YMapsContextType>({
  ymaps: null,
  hint: null,
  controls: null,
});

export const YMapsAPIProvider: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  const [ymaps, setYMaps] = useState<YMapsModule | null>(null);
  const [hint, setHint] = useState<HintModule | null>(null);
  const [controls, setControls] = useState<ControlsModule | null>(null);

  const contextValue = useMemo(() => ({ ymaps, hint, controls }), [ymaps, hint, controls]);

  return <YMapsContext.Provider value={contextValue}>
    <Script
      src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&lang=ru_RU`}
      onLoad={async () => {
        const [ymaps3React] = await Promise.all([
          ymaps3.import("@yandex/ymaps3-reactify"),
          ymaps3.ready,
        ]);

        const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
        setYMaps(reactify.module(ymaps3));
        setHint(reactify.module(await ymaps3.import("@yandex/ymaps3-hint@0.0.1")));
        setControls(reactify.module(await ymaps3.import("@yandex/ymaps3-controls@0.0.1")));
      }}
    />
    {props.children}
  </YMapsContext.Provider>
};

export const useMapsAPI = () => useContext(YMapsContext);