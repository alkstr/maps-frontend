import { LngLat } from "@yandex/ymaps3-types";

export class Area {
    name!: String;
    coordinates!: LngLat[];
    owners!: Owner[];
    opiList!: OPI[];
}

export class Owner {
    address!: String;
    name!: String;
    registrationDate!: Date;
    registrationEndDate!: Date;
}

export class OPI {
    code!: Number;
    name!: String;
}

export class Reserves {
    A!: Number;
    B!: Number;
    C!: Number;
    C1!: Number;
}