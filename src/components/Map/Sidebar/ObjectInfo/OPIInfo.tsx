import { Mineral } from "@/domain";

export const MineralsInfo = (props: { minerals: Mineral[] }) => {
    return (
        <div>
            <h2 className="text-xl font-medium">ОПИ</h2>
            {
                props.minerals.length == 0 ?
                    <div className="mt-2 mr-4 p-2 rounded border-2">На данном участке ничего не добывается</div> :
                    props.minerals.map((o: Mineral, i: number) => <MineralCard key={i} number={i} mineral={o} />)
            }
        </div>
    );
}

const MineralCard = (props: { mineral: Mineral, number: number }) => {
    return (
        <div className="mt-2 mr-4 p-2 rounded border-2">
            <div className="absolute right-10 text-gray-500">{`#${props.number + 1}`}</div>
            <h3 className="text-lg border-b-2">Вид</h3>
            {props.mineral.name}
            <h3 className="text-lg border-b-2">Код</h3>
            {props.mineral.code}
        </div>
    );
}