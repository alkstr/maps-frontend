import { useContext } from "react";
import { useMapsAPI } from "../YMapsAPIProvider";

export const Hint = () => {
    const { hint } = useMapsAPI();

    if (!hint) return <></>;

    const { YMapHintContext } = hint;
    const hintContext = useContext(YMapHintContext);

    return (
        hintContext &&
        <div className="-translate-y-full bg-white p-1 border-black border-[1px]">
            { /* @ts-ignore */}
            {hintContext.hint}
        </div>
    )
}