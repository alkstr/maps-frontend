import { useMapsAPI } from "../YMapsAPIProvider";
import { Area } from "@/domain";
import { Polygon } from "./Polygon";
import { LngLat } from "@yandex/ymaps3-types";
import { SidebarState, useMapState } from "../MapStateProvider";

const ZOOM_THRESHOLD = 10;

function getPolygonCenter(polygon: LngLat[]): LngLat {
    const sum = polygon.reduce((a: LngLat, b: LngLat) => [a[0] + b[0], a[1] + b[1]]);
    return [sum[0] / polygon.length, sum[1] / polygon.length];
}

interface MarkerProps {
    area: Area;
}

export const Marker = (props: MarkerProps) => {
    const { ymaps } = useMapsAPI();
    const { location } = useMapState();

    if (!ymaps) return <></>;

    const {
        YMapMarker,
    } = ymaps;

    return (
        <YMapMarker coordinates={getPolygonCenter(props.area.coordinates)} properties={{ hint: props.area.name }}>
            <div className="relative w-4 h-2">
                {location.zoom <= ZOOM_THRESHOLD ? <MarkerImage area={props.area} /> : <Polygon area={props.area} />}
                {/* Название снизу */}
                {/* <div className={"absolute w-48 top-0 -translate-x-1/2 text-base text-center " + styles.stroked}>{props.area.name}</div> */}
            </div>
        </YMapMarker>
    );
}

interface MarkerImageProps {
    area: Area;
}

export const MarkerImage = (props: MarkerImageProps) => {
    const { setSidebarState, setSelectedArea, setIsSidebarVisible } = useMapState();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#363636"
            className="size-10 -translate-x-1/2 -translate-y-full  cursor-pointer hover:size-12 active:size-10"
            onClick={() => {
                setSelectedArea(props.area);
                setIsSidebarVisible(true);
                setSidebarState(SidebarState.ObjectInfo)
            }}>
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
        </svg>
    );
}