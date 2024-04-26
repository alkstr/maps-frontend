"use client";

import { LngLat, YMap, YMapCenterLocation, YMapZoomLocation } from "@yandex/ymaps3-types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMapsAPI } from "./YMapsAPIProvider";
import { Loader } from "../Loader";
import { Area } from "@/domain";
import { Marker } from "./Marker/Marker";
import { Hint } from "./Marker/Hint"
import { Sidebar, SidebarState } from "./Sidebar/Sidebar";
import { fetchAreas } from "@/api";

const INITIAL_CENTER: LngLat = [50.229762, 55.289311];
const INITIAL_ZOOM: number = 5;

export const Map = () => {
  const mapRef = useRef<(YMap & { container: HTMLElement }) | null>(null);
  const { ymaps, hint } = useMapsAPI();

  const [location, setLocation] = useState<YMapCenterLocation & YMapZoomLocation>(
    { center: INITIAL_CENTER, zoom: INITIAL_ZOOM }
  );
  const [areas, setAreas] = useState<Area[]>([]);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const getHint = useCallback((object: any) => object?.properties?.hint, []);

  useEffect(
    () => {
      fetchAreas({ is_not_license: "", opi: "" })
        .then((a: Area[]) => setAreas(a))
    }, []);

  if (!ymaps || !hint) return <Loader />

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapListener,
    YMapControls
  } = ymaps;

  const {
    YMapHint
  } = hint;

  return (
    <YMap location={location} ref={mapRef}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapListener onUpdate={() => setLocation({
        //@ts-ignore
        center: mapRef.current?.center ?? INITIAL_CENTER,
        zoom: mapRef.current?.zoom ?? INITIAL_ZOOM,
      })} />
      {/* @ts-ignore */}
      <YMapHint hint={getHint}><Hint /></YMapHint>
      <YMapControls position="left">
        <Sidebar
          setAreas={setAreas}
          state={selectedArea ? SidebarState.ObjectInfo : SidebarState.Filters}
          area={selectedArea}
          closeObjectInfo={() => setSelectedArea(null)}
          isHidden={() => isSidebarHidden}
          setIsHidden={setIsSidebarHidden} />
      </YMapControls>

      {areas.map((a, i) =>
        <Marker
          key={i}
          getMapLocation={() => location}
          area={a}
          setSelectedArea={(a: Area) => {
            setIsSidebarHidden(false);
            setSelectedArea(a);
          }} />
      )}
    </YMap>
  );
};