import { OPI } from "@/domain";

export interface OPIInfoProps {
    opiList: OPI[];
}

export const OPIInfo = (props: OPIInfoProps) => {
    return (
        <div>
            <h2 className="text-xl font-medium">ОПИ</h2>
            {
                props.opiList.length == 0 ?
                    <div className="mt-2 mr-4 p-2 rounded border-2">На данном участке ничего не добывается</div> :
                    props.opiList.map((o: OPI, i: number) => <OPICard key={i} number={i} opi={o} />)
            }
        </div>
    );
}

const OPICard = (props: { opi: OPI, number: number}) => {
    return (
        <div className="mt-2 mr-4 p-2 rounded border-2">
            <div className="absolute right-10 text-gray-500">{`#${props.number + 1}`}</div>
            <h3 className="text-lg border-b-2">Вид</h3>
            {props.opi.name}
            <h3 className="text-lg border-b-2">Код</h3>
            {props.opi.code}
        </div>
    );
}