import { Deposit } from "@/domain";

export const DepositInfo = (props: { deposit: Deposit }) => {
    return (
        <div>
            <h2 className="text-xl font-medium">Месторождение</h2>
            <div className="mt-2 mr-4 p-2 rounded border-2">
                <h3 className="text-lg border-b-2">Название</h3>
                {props.deposit.name}
                <h3 className="text-lg border-b-2">Код ОКАТО</h3>
                {props.deposit.okatoCode}
            </div>
        </div>
    );
}