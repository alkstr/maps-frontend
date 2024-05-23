import { fetchAreas } from "@/api";
import { Area } from "@/domain";
import { FormEvent } from "react";
import { SidebarState, useMapState } from "../MapStateProvider";
import { SidebarTab } from "./SidebarTab";

export const Filters = () => {
    const { areas, setAreas, opiNames } = useMapState();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const params = {
            is_not_license: formData.get("is_not_license") ? "True" : "",
            opi: formData.get("opi")?.toString() ?? "",
            deposit_name: formData.get("deposit_name")?.toString() ?? "",
            okato_name: formData.get("okato_name")?.toString() ?? "",
        };

        fetchAreas(params)
            .then((areas: Area[]) => setAreas(areas))
            .catch(() => alert("Не удалось загрузить данные карты с сервера"));
    }

    return (
        <SidebarTab state={SidebarState.Filters} header="Поиск участков">
            <form className="flex flex-col gap-3" onSubmit={onSubmit}>
                {/* <TextFilter label="Название участка" name="name"/> */}
                <TextSelectFilter label="Полезное ископаемое" name="opi" choices={opiNames} />
                <CheckBoxFilter label="Скрыть распределённые участки" name="is_not_license" />
                <TextFilter label="Название месторождения" name="deposit_name" />
                <TextFilter label="Код ОКАТО" name="okato_name" />

                <button className="bg-gray-200 rounded p-1 hover:bg-gray-300 active:bg-gray-400" type="submit">Найти</button>
            </form>
            <div className="border-2 p-2 rounded  border-gray-200">
                Количество найденных участков: {areas.length}
            </div>
        </SidebarTab>
    );
}

interface FilterProps {
    label: string;
    name: string;
}

const CheckBoxFilter = (props: FilterProps) => {
    return (
        <label htmlFor={props.name + "_input"} className="flex flex-row gap-4 items-center">
            <div className="float-left">{props.label}</div>
            <input className="size-5" name={props.name} type="checkbox" id={props.name + "_input"} />
        </label>
    );
}

const TextFilter = (props: FilterProps) => {
    return (
        <label htmlFor={props.name + "_input"}>
            <div className="float-left">{props.label}</div>
            <input className="w-full h-8 px-1 border-[1px] border-gray-500 rounded" name={props.name} type="text" id={props.name + "_input"} />
        </label>
    );
}

const TextSelectFilter = (props: { label: string, name: string, choices: string[], }) => {
    return (
        <label htmlFor={props.name + "_input"}>
            <div className="float-left">{props.label}</div>
            <input className="w-full h-8 px-1 border-[1px] border-gray-500 rounded"
                name={props.name}
                type="text"
                id={props.name + "_input"}
                list={props.name + "_list"} />

            <datalist id={props.name + "_list"} >
                {props.choices.map(n => <option key={n} value={n} />)}
            </datalist>
        </label>
    );
}