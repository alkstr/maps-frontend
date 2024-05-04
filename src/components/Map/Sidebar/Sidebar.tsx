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
        <div>
            <div className={"absolute w-96 h-full p-4 bg-white border-r-2 border-gray-300 " + (isSidebarVisible ? "" : "-translate-x-full")} style={{ zIndex: 1 }}>
                {stateMap[sidebarState]}
            </div>
            {
                isSidebarVisible ?
                    <button
                        className="absolute ml-96 mt-2 text-5xl"
                        style={{ zIndex: 2 }}
                        onClick={() => setIsSidebarVisible(false)}>
                        ⬅️
                    </button> :
                    <button
                        className="absolute mt-2 text-5xl"
                        style={{ zIndex: 2 }}
                        onClick={() => setIsSidebarVisible(true)}>
                        ➡️
                    </button>
            }
        </div>
    )
}

