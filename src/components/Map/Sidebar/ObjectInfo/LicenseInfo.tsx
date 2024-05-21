import { Owner } from "@/domain";

export interface LicenseInfoProps {
    owners: Owner[];
}

export const LicenseInfo = (props: LicenseInfoProps) => {
    return (
        <div>
            <h2 className="text-xl font-medium">Лицензии</h2>
            {
                props.owners.length == 0 ?
                    <div className="mt-2 mr-4 p-2 rounded border-2">Лицензии отсутствуют</div> :
                    props.owners.map((o: Owner, i: number) => <LicenseCard key={i} number={i} owner={o} />)
            }
        </div>
    );
}

const LicenseCard = (props: { owner: Owner, number: number }) => {
    return (
        <div className="mt-2 mr-4 p-2 rounded border-2">
            <div className="absolute right-10 text-gray-500">{`#${props.number + 1}`}</div>
            <h3 className="text-lg border-b-2">Недропользователь</h3>
            {props.owner.name}
            <h3 className="text-lg border-b-2">Адрес</h3>
            {props.owner.address}
            <h3 className="text-lg border-b-2">Начало действия</h3>
            {props.owner.registrationDate.toLocaleDateString()}
            <h3 className="text-lg border-b-2">Конец действия</h3>
            {props.owner.registrationEndDate.toLocaleDateString()}
        </div>
    );
}