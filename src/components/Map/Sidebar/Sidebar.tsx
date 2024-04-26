import { Area } from "@/domain";
import { Filters } from "./Filters";
import { ObjectInfo } from "./ObjectInfo/ObjectInfo";

export enum SidebarState {
    Filters,
    ObjectInfo,
}

interface SidebarProps {
    state: SidebarState;
    setAreas: Function;
    area: Area | null;
    closeObjectInfo: Function;
    isHidden: Function;
    setIsHidden: Function;
}

export const Sidebar = (props: SidebarProps) => {
    return (
        props.isHidden() ?
            <div>
                <button
                    className="absolute ml-2 mt-2 text-5xl"
                    style={{ zIndex: 2 }}
                    onClick={() => props.setIsHidden(false)}
                >➡️
                </button>
            </div> :
            <div>
                <div className="absolute w-96 h-full p-4 bg-white border-r-2 border-gray-300 " style={{ zIndex: 1 }}>
                    {
                        {
                            [SidebarState.Filters]: <Filters setAreas={props.setAreas} />,
                            [SidebarState.ObjectInfo]: <ObjectInfo area={props.area} closePopup={props.closeObjectInfo}></ObjectInfo>,
                        }[props.state]
                    }
                </div>
                <button className="absolute ml-96 mt-2 text-5xl" style={{ zIndex: 2 }} onClick={() => props.setIsHidden(true)}>⬅️</button>
            </div>
    )
}

