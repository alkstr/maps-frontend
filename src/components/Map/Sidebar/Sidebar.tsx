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
                <button
                    className={"absolute mt-2 text-5xl transition duration-500 ease-in-out " + (isSidebarVisible ? "translate-x-[585%] rotate-180" : "")}
                    style={{ zIndex: 2 }}
                    onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                    ➡️
                </button>
            }
        </div>
    );
}

