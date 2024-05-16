import { LicenseInfo } from "./LicenseInfo";
import { OPIInfo } from "./OPIInfo";
import { SidebarState, useMapState } from "../../MapStateProvider";
import { SidebarTab } from "../SidebarTab";
import { DepositInfo } from "./DepositInfo";
import { Deposit } from "@/domain";

export const ObjectInfo = () => {
    const { selectedArea } = useMapState();
    return (
        <SidebarTab state={SidebarState.ObjectInfo} header={selectedArea?.name ?? ""}>
            <div className="flex flex-col h-full gap-2">
                <CloseButton />
                <div className="flex flex-col gap-2 overflow-y-auto">
                    <OPIInfo opiList={selectedArea?.opiList ?? []} />
                    <DepositInfo deposit={selectedArea?.deposit ?? new Deposit()} />
                    <LicenseInfo owners={selectedArea?.owners ?? []} />
                </div>
            </div>
        </SidebarTab>
    );
}

const CloseButton = () => {
    const { setSidebarState } = useMapState();
    return (
        <button
            className="absolute right-4 top-4 border-2 border-gray-300 rounded drop-shadow-sm select-none 
            hover:bg-gray-200 active:bg-gray-300"
            onClick={() => setSidebarState(SidebarState.Filters)}>
            ❌
        </button>
    );
}