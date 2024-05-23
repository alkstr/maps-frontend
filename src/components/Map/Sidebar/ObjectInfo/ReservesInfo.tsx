import { Reserves } from "@/domain";

export const ReservesInfo = (props: { reserves: Reserves }) => {
    return (
        <div>
            <h2 className="text-xl font-medium">Запасы</h2>
            <div className="mt-2 mr-4 p-2 rounded border-2">
                <h3 className="text-lg border-b-2">Категория A</h3>
                {props.reserves.a} т.
                <h3 className="text-lg border-b-2">Категория B</h3>
                {props.reserves.b} т.
                <h3 className="text-lg border-b-2">Категория C1</h3>
                {props.reserves.c1} т.
                <h3 className="text-lg border-b-2">Категория C2</h3>
                {props.reserves.c2} т.
            </div>
        </div>
    );
}