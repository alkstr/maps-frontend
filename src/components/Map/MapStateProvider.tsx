"use client";

import React, { createContext, useContext, useState } from "react";
import { YMapCenterLocation, YMapZoomLocation } from "@yandex/ymaps3-types";
import { Area } from "@/domain";

export const INITIAL_LOCATION: YMapCenterLocation & YMapZoomLocation = { center: [50.229762, 55.289311], zoom: 5 };

export enum SidebarState {
    Filters,
    ObjectInfo,
}

type MapStateContextType = {
    location: YMapCenterLocation & YMapZoomLocation;
    setLocation: Function;

    areas: Area[];
    setAreas: Function;
    selectedArea: Area | null;
    setSelectedArea: Function;

    sidebarState: SidebarState
    setSidebarState: Function;
    isSidebarVisible: Boolean;
    setIsSidebarVisible: Function;

    opiNames: string[];
    setOPINames: Function;
};

export const MapStateContext = createContext<MapStateContextType>({
    location: INITIAL_LOCATION,
    setLocation: () => { },

    areas: [],
    setAreas: () => { },
    selectedArea: null,
    setSelectedArea: () => { },

    sidebarState: SidebarState.Filters,
    setSidebarState: () => { },
    isSidebarVisible: true,
    setIsSidebarVisible: () => { },

    opiNames: [],
    setOPINames: () => { },
});

export const MapStateProvider: React.FC<{
    children?: React.ReactNode;
}> = (props) => {
    const [location, setLocation] = useState<YMapCenterLocation & YMapZoomLocation>(INITIAL_LOCATION);

    const [areas, setAreas] = useState<Area[]>([]);
    const [selectedArea, setSelectedArea] = useState<Area | null>(null);

    const [sidebarState, setSidebarState] = useState<SidebarState>(SidebarState.Filters);
    const [isSidebarVisible, setIsSidebarVisible] = useState<Boolean>(true);

    const [opiNames, setOPINames] = useState<string[]>([]);

    return (
        <MapStateContext.Provider value={{
            location, setLocation,
            areas, setAreas,
            selectedArea, setSelectedArea,
            sidebarState, setSidebarState,
            isSidebarVisible, setIsSidebarVisible,
            opiNames, setOPINames,
        }}>
            {props.children}
        </MapStateContext.Provider>
    );
};

export const useMapState = () => useContext(MapStateContext);