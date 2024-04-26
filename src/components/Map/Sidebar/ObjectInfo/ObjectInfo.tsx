import { Area } from "@/domain";
import { Licenses } from "./Licenses";
import { OPIList } from "./OPIList";

interface ObjectInfoProps {
    area: Area | null;
    closePopup: Function;
}

export const ObjectInfo = (props: ObjectInfoProps) => {
    return (
        <div className="flex flex-col h-full gap-2">
            <CloseButton closeObjectInfo={props.closePopup} />
            <div className="border-b-2 text-2xl font-semibold">{props.area?.name}</div>
            <div className="flex flex-col gap-2 overflow-y-auto">
                <OPIList opiList={props.area!.opiList} />
                <Licenses owners={props.area!.owners} />
            </div>
        </div>
    )
}

interface CloseButtonProps {
    closeObjectInfo: Function;
}

const CloseButton = (props: CloseButtonProps) => {
    return (
        <button
            className="absolute right-1 top-1 border-2 border-gray-300 rounded drop-shadow-sm select-none 
            hover:bg-gray-200 active:bg-gray-300"
            onClick={() => props.closeObjectInfo()}
        >❌
        </button>
    )
}