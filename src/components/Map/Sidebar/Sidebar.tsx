import { Filters } from "./Filters";
import { ObjectInfo } from "./ObjectInfo/ObjectInfo";
import { useMapState } from "../MapStateProvider";

export const Sidebar = () => {
    const { isSidebarVisible, setIsSidebarVisible } = useMapState();

    return (
        <div>
            <Filters />
            <ObjectInfo />
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
    );
}

