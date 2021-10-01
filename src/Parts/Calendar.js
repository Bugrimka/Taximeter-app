import {Card, Calendar as AndtCalendar} from "antd";

export const Calendar = (props) => {
    const {onDateChange} = props
    const onChange = (v) => {
        onDateChange(v)
    }
    return (
        <Card title="Calendar">
            <AndtCalendar onChange={onChange} fullscreen={false}/>
        </Card>
    )
}