import { Filters } from "./Filters";
import { ObjectInfo } from "./ObjectInfo/ObjectInfo";
import { SidebarState, useMapState } from "../MapStateProvider";

export const Sidebar = () => {
    const { sidebarState, isSidebarVisible, setIsSidebarVisible } = useMapState();
    const stateMap = {
        [SidebarState.Filters]: <Filters />,
        [SidebarState.ObjectInfo]: <ObjectInfo />,
    }

    return (
        isSidebarVisible ?
            <div>
                <div className="absolute w-96 h-full p-4 bg-white border-r-2 border-gray-300 " style={{ zIndex: 1 }}>
                    {stateMap[sidebarState]}
                </div>
                <button
                    className="absolute ml-96 mt-2 text-5xl"
                    style={{ zIndex: 2 }}
                    onClick={() => setIsSidebarVisible(false)}>
                    ⬅️
                </button>
            </div> :
            <div>
                <button
                    className="absolute ml-2 mt-2 text-5xl"
                    style={{ zIndex: 2 }}
                    onClick={() => setIsSidebarVisible(true)}>
                    ➡️
                </button>
            </div>
    )
}

