import {Calendar} from "./Calendar";
import {Form} from "./Form";
import {Statistic} from "./Statistic";
import {useState} from "react";

export const Content = (props) => {
    const {db} = props
    const [date, setDate] = useState('')
    const onDataChange = (d) => {
        setDate(d)
    }
    const getCalendar = () => <Calendar onDateChange={onDataChange}/>
    const getForm = () => <Form date={date} db={db}/>
    const getStat = () => <Statistic/>
    return <div className="tx-layout">
        <div className="tx-row">
            {getCalendar()}
            {getForm()}
        </div>
        <div className="tx-row">
            {getStat()}
        </div>
    </div>
}