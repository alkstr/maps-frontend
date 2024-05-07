import { OPI } from "@/domain";

export interface OPIListProps {
    opiList: OPI[];
}

export const OPIList = (props: OPIListProps) => {
    return (
        <div>
            <h2 className="text-xl font-medium">ОПИ</h2>
            {
                props.opiList.length == 0 ?
                    <div className="mt-2 mr-4 p-2 rounded border-2">На данном участке ничего не добывается</div> :
                    props.opiList.map((o: OPI, i: number) => <OPICard key={i} opi={o} />)
            }
        </div>
    );
}

interface OPICardProps {
    opi: OPI;
}

const OPICard = (props: OPICardProps) => {
    return (
        <div className="mt-2 mr-4 p-2 rounded border-2">
            <h3 className="text-lg border-b-2">Название</h3>
            {props.opi.name}
            <h3 className="text-lg border-b-2">Код</h3>
            {props.opi.code.toString()}
        </div>
    );
}