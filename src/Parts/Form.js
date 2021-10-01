import {Button, Card, Form as AntdForm} from 'antd';
import {Form as FinalForm} from 'react-final-form';
import {InputForm} from "../common/InputForm";
import {TextAreaForm} from "../common/TextAreaForm";
import {addDoc, collection} from "firebase/firestore";
import {useSelector} from "react-redux";
import {getUserState} from "../store/user/selectors";


export const Form = (props) => {
    const {date, db} = props
    const userData = useSelector(getUserState)
    console.log(date.valueOf())
    const handleSubmit = () => {
        document.getElementById('pf').dispatchEvent(
            new Event("submit", {cancelable: true, bubbles: true})
        )
    }
    const getSubmitButton = () => <Button onClick={handleSubmit} type={"primary"}>Submit</Button>
    const getContent = () => {
        return (<FinalForm
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit}) => (
                <form id="pf" onSubmit={handleSubmit}>
                    <AntdForm layout={"vertical"}>
                        <InputForm name={"distance"} label={"Distance"}/>
                        <InputForm name={"price"} label={"Price"}/>
                        <InputForm name={"taxiPrice"} label={"Taxi Price"}/>
                        <TextAreaForm name={"comment"} label={"Comment"}/>
                    </AntdForm>
                </form>
            )}
        />)
    }
    const getNoData = () => <div><span>Please select date on calendar</span></div>
    const onSubmit = (d) => {
        console.log(d)
        addDoc(collection(db, "data"), {
            distance: d.distance,
            price: d.price,
            taxPrice: d.taxiPrice,
            comment: d.comment,
            date: date.valueOf(),
            userId: userData.uid
        })
    }
    const validate = () => {
        return ([])
    }
    return (
        <Card title="Form" extra={getSubmitButton()}>
            {date ? getContent() : getNoData()}
        </Card>
    )
}