import "./TextField.css"


const TextField = (props) => {
    const  interpolatePlaceholder = `${props.placeholder}...`




    const onType = (event) => {
        props.onChanged(event.target.value)
    }


    return(
        <div className = "textfield">
            <label>{props.label}</label>
            <input value = {props.value} onChange = {onType} required = {props.required} placeholder = {interpolatePlaceholder}></input>
        </div>
    )
}

export default TextField