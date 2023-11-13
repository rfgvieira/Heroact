import "./TextField.css"


const TextField = (props) => {
    const  interpolatePlaceholder = `${props.placeholder}...`
    return(
        <div className = "textfield">
            <label>{props.label}</label>
            <input placeholder = {interpolatePlaceholder}></input>
        </div>
    )
}

export default TextField