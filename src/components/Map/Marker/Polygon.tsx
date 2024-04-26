import { Area } from "@/domain";
import { useMapsAPI } from "../YMapsAPIProvider";

interface PolygonProps {
    area: Area;
    openPopup: Function;
}

export const Polygon = (props: PolygonProps) => {
    const { ymaps } = useMapsAPI();

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
        onClick={() => props.openPopup()}
        properties={{ hint: props.area.name }}
    />
}