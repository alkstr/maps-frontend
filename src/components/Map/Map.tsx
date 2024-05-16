"use client";

import { YMap } from "@yandex/ymaps3-types";
import React, { useCallback, useEffect, useRef } from "react";
import { useMapsAPI } from "./YMapsAPIProvider";
import { Loader } from "../Loader";
import { Area } from "@/domain";
import { Marker } from "./Marker/Marker";
import { Hint } from "./Marker/Hint";
import { Sidebar } from "./Sidebar/Sidebar";
import { fetchAreas } from "@/api";
import { useMapState } from "./MapStateProvider";

export const Map = () => {
  const mapRef = useRef<(YMap & { container: HTMLElement }) | null>(null);
  const { ymaps, hint, controls } = useMapsAPI();
  const { location, setLocation, areas, setAreas, setOPINames } = useMapState();
  const getHint = useCallback((object: any) => object?.properties?.hint, []);

  useEffect(
    () => {
      if (ymaps && hint && controls && setAreas) {
        fetchAreas()
          .then((ars: Area[]) => {
            setAreas(ars);
            const names = new Set<string>();
            ars.forEach(a => a.opiList.forEach(o => names.add(o.name)));
            setOPINames(Array.from(names));
          })
          .catch(() => alert("Не удалось загрузить данные карты с сервера"));
      }
    }, [ymaps, hint, controls, setAreas, setOPINames]);

  if (!ymaps || !hint || !controls) {
    return <Loader />;
  }

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapListener,
    YMapControls,
  } = ymaps;

  const {
    YMapHint
  } = hint;

  const {
    YMapGeolocationControl,
    YMapZoomControl,
  } = controls;

  return (
    <YMap location={location} ref={mapRef} showScaleInCopyrights={true}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapListener onUpdate={() => setLocation({
        center: mapRef.current?.center,
        zoom: mapRef.current?.zoom,
      })} />
      {/*@ts-ignore*/}
      <YMapHint hint={getHint}><Hint hint={hint} /></YMapHint>

      <YMapControls position="left">
        <Sidebar />
      </YMapControls>
      <YMapControls position="right">
        <YMapZoomControl />
        <YMapGeolocationControl />
      </YMapControls>

      {areas.map((a, i) => <Marker key={i} area={a} />)}
    </YMap>
  );
};