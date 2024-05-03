import { Area } from "@/domain";
import { useMapsAPI } from "../YMapsAPIProvider";
import { SidebarState, useMapState } from "../MapStateProvider";

interface PolygonProps {
    area: Area;
}

export const Polygon = (props: PolygonProps) => {
    const { ymaps } = useMapsAPI();
    const { setSelectedArea, setSidebarState, setIsSidebarVisible } = useMapState();

    if (!ymaps) return <></>;

    const { YMapFeature } = ymaps;

    return <YMapFeature
        geometry={{ type: "Polygon", coordinates: [props.area.coordinates] }}
        style={{
            stroke: [{ color: '#006efc', width: 4 }],
            fill: 'rgba(56, 56, 219, 0.5)',
            cursor: "pointer",
            zIndex: 1
        }}
        onClick={() => {
            setSelectedArea(props.area);
            setIsSidebarVisible(true);
            setSidebarState(SidebarState.ObjectInfo)
        }}
        properties={{ hint: props.area.name }} />
}