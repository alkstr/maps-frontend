import { Area, OPI, Owner, Reserves } from "./domain";

type fetchAreasResponse = {
    name: string;
    coordinates: { long: string, lat: string }[];
    owners: { name: string, address: string, registration: string, end_date: string, }[];
    opi: OPI[];
    category_a: number;
    category_b: number;
    category_c1: number;
    category_c2: number;
};

export async function fetchAreas(params: { is_not_license: string, opi: string }): Promise<Area[]> {
    const queryParams = new URLSearchParams(params);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/area/?${queryParams}`, {
        method: "GET",
    });

    const data = await response.json();

    return data.map((obj: fetchAreasResponse) => {
        const area = new Area();

        area.name = obj.name;

        area.coordinates = obj.coordinates.map((c: { long: string, lat: string }) => [Number(c.long), Number(c.lat)]);

        area.owners = obj.owners.map((o: { name: string, address: string, registration: string, end_date: string, }) => {
            const owner = new Owner();
            owner.name = o.name;
            owner.address = o.address;
            owner.registrationDate = new Date(o.registration);
            owner.registrationEndDate = new Date(o.end_date);
            return owner;
        })

        area.opiList = obj.opi;

        area.reserves = new Reserves();
        area.reserves.A = obj.category_a;
        area.reserves.B = obj.category_b;
        area.reserves.C1 = obj.category_c1;
        area.reserves.C2 = obj.category_c2;

        return area;
    })
}


// MOCK
// export async function fetchAreas(params: { is_not_license: string, opi: string }): Promise<Area[]> {
//     const data = MOCK_DATA.filter((obj: any) => {
//         if (params.is_not_license == 'True' && obj.owners.length != 0) {
//             return false;
//         }
//         if (obj.opi.filter((o: any) => o.name.includes(params.opi)).length == 0) {
//             return false;
//         }
//         return true;
//     });

//     return data.map((obj: any) => {
//         const area = new Area();

//         area.name = obj.name;
//         area.coordinates = obj.coordinates.map((c: {long: string, lat: string}) => [c.long, c.lat]);
//         area.owners = obj.owners;
//         area.opiList = obj.opi;

//         return area;
//     })
// }

const MOCK_DATA = [

];