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
            <div className="-translate-y-full bg-black rounded bg-opacity-70 p-2 text-white">
                {hintContext.hint}
            </div> :
            <></>
    );
}