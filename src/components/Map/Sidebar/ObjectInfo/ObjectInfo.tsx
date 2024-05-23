import { LicenseInfo } from "./LicenseInfo";
import { MineralsInfo } from "./OPIInfo";
import { SidebarState, useMapState } from "../../MapStateProvider";
import { SidebarTab } from "../SidebarTab";
import { DepositInfo } from "./DepositInfo";
import { Deposit, Reserves } from "@/domain";
import { ReservesInfo } from "./ReservesInfo";

export const ObjectInfo = () => {
    const { selectedArea } = useMapState();
    return (
        <SidebarTab state={SidebarState.ObjectInfo} header={selectedArea?.name ?? ""}>
            <div className="flex flex-col h-full gap-2 mb-4">
                <CloseButton />
                <div className="flex flex-col gap-2">
                    <MineralsInfo minerals={selectedArea?.minerals ?? []} />
                    <DepositInfo deposit={selectedArea?.deposit ?? new Deposit("", "")} />
                    <LicenseInfo licenses={selectedArea?.licenses ?? []} />
                    <ReservesInfo reserves={selectedArea?.reserves ?? new Reserves(0, 0, 0, 0)} />
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="size-6">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>

        </button>
    );
}