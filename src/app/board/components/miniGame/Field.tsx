import {setFieldValue} from '../../functions/setFieldValue'

interface FieldAttributes {
    i: Number
}

export function Field(i: FieldAttributes){
    return(
        <a onClick={event => setFieldValue(event)}>
            <div className={"column"+i} id={"field"+i.i}></div>
        </a>
    )
}