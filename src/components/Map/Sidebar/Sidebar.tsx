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
                    className={"absolute flex justify-center items-center size-10 bg-white rounded-lg ml-2 mt-2 drop-shadow transition duration-500 ease-in-out rotate-180 " + (isSidebarVisible ? "translate-x-[950%]" : "")}
                    style={{ zIndex: 2 }}
                    onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                    {isSidebarVisible ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4d4d4d" className="size-5">
                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4d4d4d" className="size-7">
                            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                        </svg>
                    }
                </button>
            }
        </div>
    );
}

