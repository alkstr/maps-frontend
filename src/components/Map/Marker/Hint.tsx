import { useContext } from "react";
import { HintModule } from "../YMapsAPIProvider";

interface HintProps {
    hint: HintModule;
}

export const Hint = (props: HintProps) => {
    const { YMapHintContext } = props.hint;
    const hintContext = useContext<any>(YMapHintContext);

    return (
        hintContext ?
            <div className="-translate-y-full bg-white p-1 border-black border-[1px]">
                {hintContext.hint}
            </div> :
            <></>
    )
}