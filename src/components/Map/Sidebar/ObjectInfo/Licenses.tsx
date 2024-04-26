import { Owner } from "@/domain";

export interface LicensesProps {
    owners: Owner[];
}

export const Licenses = (props: LicensesProps) => {
    return (
        <div>
            <h2 className="text-xl font-medium">Лицензии</h2>
            {
                props.owners.length == 0 ?
                <div className="mt-2 mr-4 p-2 rounded border-2">Лицензии отсутствуют</div> :
                    props.owners.map(o => <LicenseCard owner={o} />)
            }
        </div>
    )
}

interface LicenseCardProps {
    owner: Owner;
}

const LicenseCard = (props: LicenseCardProps) => {
    return (
        <div className="mt-2 mr-4 p-2 rounded border-2">
            <h3 className="text-lg border-b-2">Адрес</h3>
            {props.owner.address}
            <h3 className="text-lg border-b-2">Имя</h3>
            {props.owner.name}
            <h3 className="text-lg border-b-2">Начало действия лицензии</h3>
            {props.owner.registrationDate.toLocaleDateString()}
            <h3 className="text-lg border-b-2">Конец действия лицензии</h3>
            {props.owner.registrationEndDate.toLocaleDateString()}
        </div>
    )
}