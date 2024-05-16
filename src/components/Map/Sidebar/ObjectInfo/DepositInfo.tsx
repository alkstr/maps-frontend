import { Deposit } from "@/domain";

export const DepositInfo = (props: { deposit: Deposit }) => {
    return (
        <div>
            <h3 className="text-lg border-b-2">Название</h3>
            {props.deposit.name}
            <h3 className="text-lg border-b-2">Код ОКАТО</h3>
            {props.deposit.okato_code}
        </div>
    );
}