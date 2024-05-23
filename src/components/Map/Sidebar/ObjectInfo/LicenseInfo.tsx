import { License } from "@/domain";

export const LicenseInfo = (props: { licenses: License[] }) => {
    return (
        <div>
            <h2 className="text-xl font-medium">Лицензии</h2>
            {
                props.licenses.length == 0 ?
                    <div className="mt-2 mr-4 p-2 rounded border-2">Лицензии отсутствуют</div> :
                    props.licenses.map((lic: License, i: number) => <LicenseCard key={i} number={i} license={lic} />)
            }
        </div>
    );
}

const LicenseCard = (props: { license: License, number: number }) => {
    return (
        <div className="mt-2 mr-4 p-2 rounded border-2">
            <div className="absolute right-10 text-gray-500">{`#${props.number + 1}`}</div>
            <h3 className="text-lg border-b-2">Недропользователь</h3>
            {props.license.ownerName}
            <h3 className="text-lg border-b-2">Адрес</h3>
            {props.license.address}
            <h3 className="text-lg border-b-2">Начало действия</h3>
            {props.license.registrationDate.toLocaleDateString()}
            <h3 className="text-lg border-b-2">Конец действия</h3>
            {props.license.registrationEndDate.toLocaleDateString()}
        </div>
    );
}