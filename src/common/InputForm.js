import {Input, Form} from "antd";
import {useField} from "react-final-form";

export const InputForm =(props) => {
    const {name, label, placeholder, initialValue} = props
    const {input: {value, onChange}} = useField(name, {
        initialValue: initialValue
    })
    return <Form.Item label={label}>
        <Input value={value} onChange={onChange} placeholder={placeholder}/>
    </Form.Item>
}

InputForm.defaultProps = {
    name: "",
    label: "",
    placeholder: "",
    initialValue: ""
}