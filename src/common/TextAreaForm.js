import {Input, Form} from "antd";
import {useField} from "react-final-form";

const {TextArea} = Input

export const TextAreaForm =(props) => {
    const {name, label, placeholder, initialValue} = props
    const {input: {value, onChange}} = useField(name, {
        initialValue: initialValue
    })
    return <Form.Item label={label}>
        <TextArea rows={3} value={value} onChange={onChange} placeholder={placeholder}/>
    </Form.Item>
}

TextAreaForm.defaultProps = {
    name: "",
    label: "",
    placeholder: "",
    initialValue: ""
}