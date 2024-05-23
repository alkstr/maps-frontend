import { Area, Deposit, License, Mineral, Reserves } from "./domain";

type areasGetSchema = {
    name: string;
    coordinates: { long: string, lat: string }[];
    deposit: { name: string, okato: string };
    owners: { name: string, address: string, registration: string, end_date: string, }[];
    opi: { code: number, name: string }[];
    category_a: number;
    category_b: number;
    category_c1: number;
    category_c2: number;
    year_estimation: string;
};

export type areasGetParams = {
    is_not_license: string;
    opi: string;
    deposit_name: string;
    okato_name: string;
}

function parse(obj: areasGetSchema): Area {
    const licenses = obj.owners.map((o: { name: string, address: string, registration: string, end_date: string, }) =>
        new License(o.name, o.address, new Date(o.registration), new Date(o.end_date))
    );

    return new Area(
        obj.name,
        obj.coordinates.map((c: { long: string, lat: string }) => [Number(c.long), Number(c.lat)]),
        new Deposit(obj.deposit.name, obj.deposit.okato),
        licenses,
        obj.opi.map((m: { code: number, name: string }) => new Mineral(m.code.toString(), m.name)),
        new Reserves(obj.category_a, obj.category_b, obj.category_c1, obj.category_c2)
    )
}

export async function fetchAreas(params: areasGetParams =
    { is_not_license: "", opi: "", deposit_name: "", okato_name: "" }):
    Promise<Area[]> {
    const queryParams = new URLSearchParams(params);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/area/?${queryParams}`, {
        method: "GET",
    });

    const data = await response.json();
    return data.map((obj: areasGetSchema) => parse(obj));
}

export async function fetchAreasMock(params: areasGetParams =
    { is_not_license: "", opi: "", deposit_name: "", okato_name: "" }):
    Promise<Area[]> {
    const data = MOCK_DATA.filter((obj: areasGetSchema) => {
        if (params.is_not_license == 'True' && obj.owners.length != 0) {
            return false;
        }
        if (obj.opi.filter((o: { name: string }) => o.name.includes(params.opi)).length == 0) {
            return false;
        }
        if (!obj.deposit.name.includes(params.deposit_name)) {
            return false;
        }
        if (!obj.deposit.okato.includes(params.okato_name)) {
            return false;
        }

        return true;
    });

    return data.map((obj: areasGetSchema) => parse(obj));
}

const MOCK_DATA: areasGetSchema[] = [

];