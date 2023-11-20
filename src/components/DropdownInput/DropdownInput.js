
import "./DropdownInput.css"

const DropdownInput = (props) => {
    return(
        <div className="dropdown-input">
            <label>{props.label}</label>
            <select onChange={(event) => props.onChanged((event.target.value))} required = {props.required} value={props.value}>
                {props.universe.map(item => <option key={item.name}> {item.name} </option>)}
            </select>
        </div>
    )
}

export default DropdownInput