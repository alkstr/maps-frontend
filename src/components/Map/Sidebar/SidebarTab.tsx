import { ReactNode } from "react";
import { SidebarState, useMapState } from "../MapStateProvider";

interface SidebarTabProps {
    state: SidebarState;
    header: string;
    children: ReactNode;
}

export const SidebarTab = (props: SidebarTabProps) => {
    const { sidebarState, isSidebarVisible } = useMapState();
    return (
        <div className={"absolute w-96 h-full p-4 bg-white border-r-2 border-gray-300 flex flex-col gap-2 overflow-y-auto " +
            (sidebarState == props.state && isSidebarVisible ? "" : "-translate-x-full")}
            style={{ zIndex: 1 }}>
            <div className="border-b-2 mr-12 text-2xl font-semibold">{props.header}</div>
            {props.children}
        </div>
    );
}