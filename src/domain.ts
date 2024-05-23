import { LngLat } from "@yandex/ymaps3-types";

export class Area {
    readonly name: string;
    readonly polygon: LngLat[];
    readonly deposit: Deposit;
    readonly licenses: License[];
    readonly minerals: Mineral[];
    readonly reserves: Reserves;

    constructor(name: string, polygon: LngLat[], deposit: Deposit, licenses: License[], minerals: Mineral[], reserves: Reserves) {
        this.name = name;
        this.polygon = polygon;
        this.deposit = deposit;
        this.licenses = licenses;
        this.minerals = minerals;
        this.reserves = reserves;
    }
}

export class Deposit {
    readonly name: string;
    readonly okatoCode: string;

    constructor(name: string, okatoCode: string) {
        this.name = name;
        this.okatoCode = okatoCode;
    }
}

export class License {
    readonly ownerName: string;
    readonly address: string;
    readonly registrationDate: Date;
    readonly registrationEndDate: Date;

    constructor(ownerName: string, address: string, registrationDate: Date, registrationEndDate: Date) {
        this.ownerName = ownerName;
        this.address = address;
        this.registrationDate = registrationDate;
        this.registrationEndDate = registrationEndDate;
    }
}

export class Mineral {
    readonly code: string;
    readonly name: string;

    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }
}

export class Reserves {
    readonly a: number;
    readonly b: number;
    readonly c1: number;
    readonly c2: number;

    constructor(a: number, b: number, c1: number, c2: number) {
        this.a = a;
        this.b = b;
        this.c1 = c1;
        this.c2 = c2;
    }
}