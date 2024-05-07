import { LngLat } from "@yandex/ymaps3-types";

export class Area {
    name!: string;
    coordinates!: LngLat[];
    owners!: Owner[];
    opiList!: OPI[];
}

export class Owner {
    address!: string;
    name!: string;
    registrationDate!: Date;
    registrationEndDate!: Date;
}

export class OPI {
    code!: number;
    name!: string;
}

export class Reserves {
    A!: number;
    B!: number;
    C!: number;
    C1!: number;
}