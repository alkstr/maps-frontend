import { LngLat } from "@yandex/ymaps3-types";

export class Area {
    name!: string;
    coordinates!: LngLat[];
    deposit!: Deposit;
    owners!: Owner[];
    opiList!: OPI[];
    reserves!: Reserves;
}

export class Deposit {
    name!: string;
    okato_code!: string;
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
    C1!: number;
    C2!: number;
}