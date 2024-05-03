import { Licenses } from "./Licenses";
import { OPIList } from "./OPIList";
import { SidebarState, useMapState } from "../../MapStateProvider";

export const ObjectInfo = () => {
    const { selectedArea } = useMapState();
    return (
        <div className="flex flex-col h-full gap-2">
            <CloseButton />
            <div className="border-b-2 text-2xl font-semibold">{selectedArea?.name}</div>
            <div className="flex flex-col gap-2 overflow-y-auto">
                <OPIList opiList={selectedArea!.opiList} />
                <Licenses owners={selectedArea!.owners} />
            </div>
        </div>
    )
}

const CloseButton = () => {
    const { setSidebarState } = useMapState();
    return (
        <button
            className="absolute right-1 top-1 border-2 border-gray-300 rounded drop-shadow-sm select-none 
            hover:bg-gray-200 active:bg-gray-300"
            onClick={() => setSidebarState(SidebarState.Filters)}>
            ❌
        </button>
    )
}