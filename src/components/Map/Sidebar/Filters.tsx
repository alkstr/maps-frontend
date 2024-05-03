import { fetchAreas } from "@/api";
import { Area } from "@/domain";
import { FormEvent } from "react";
import { useMapState } from "../MapStateProvider";

export const Filters = () => {
    const { setAreas } = useMapState();
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const params = {
            is_not_license: formData.get("is_not_license") ? "True" : "",
            opi: formData.get("opi")!.toString() ?? "",
        };

        fetchAreas(params)
            .then((areas: Area[]) => setAreas(areas))
            .catch(() => alert("Не удалось загрузить данные карты с сервера"));
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <section className="text-2xl font-semibold border-b-2">Поиск участков</section>

            <TextFilter label="ОПИ" name="opi" />
            <CheckBoxFilter label="Не распределён" name="is_not_license" />

            <button className="bg-gray-200 rounded p-1 hover:bg-gray-300 active:bg-gray-400" type="submit">Найти</button>
        </form>
    )
}

interface FilterProps {
    label: string;
    name: string;
}

const CheckBoxFilter = (props: FilterProps) => {
    return (
        <label htmlFor={props.name + "_input"} className="flex flex-row gap-3 items-center">
            <div className="float-left">{props.label}</div>
            <input className="size-5" name={props.name} type="checkbox" id={props.name + "_input"} />
        </label>
    )
}

const TextFilter = (props: FilterProps) => {
    return (
        <label htmlFor={props.name + "_input"} className="flex flex-col gap-1">
            <div className="float-left">{props.label}</div>
            <input className="w-full px-1 border-[1px] border-gray-500 rounded" name={props.name} type="text" id={props.name + "_input"} />
        </label>
    )
}