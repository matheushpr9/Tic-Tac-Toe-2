import { Field } from "./Field";

interface LineAttributes{
    initial:number
}

export function Line(initial:LineAttributes){

    function renderFields () {
        const fields = [];

        const init = initial.initial;

        for(let i = initial.initial; i < (init + 3); i++) {
            fields.push(<Field i={i} />)
        }

        //return fields.map((field) => field);
        return fields
    }

    return(
        <div className="line">
            {renderFields()}
        </div>
    )
}