import "./Form.css"
import {useState} from "react"
import TextField from '../TextField/TextField';
import DropdownInput from "../DropdownInput/DropdownInput";
import { universeItems } from "../../utils/Constants";
import Button from "../Button/Button";

const Form = (props) =>{


    const [name, setName] = useState("")
    const [power, setPower] = useState("")
    const [image, setImage] = useState("")
    const [universe, setUniverse] = useState("DC")

    const onSave = (event) => {
        event.preventDefault()
        props.onHeroSubmitted({
            name,
            power,
            image,
            universe
        })

        setName("") 
        setPower("") 
        setUniverse("DC") 
        setImage("") 
    }

    return(
        <section className = "formulario">
            <form onSubmit = {onSave}>
                <h2>Preencha os campos para cadastrar seu herói</h2>
                <TextField required = {true} label = "Nome" placeholder = "Digite o Nome" value={name} onChanged = {value => setName(value)}/>
                <TextField label = "Poderes" placeholder = "Digite os Poderes" value={power} onChanged = {value => setPower(value)}/>
                <TextField required = {true} label = "Imagem" placeholder = "Digite o endereço da imagem" value={image} onChanged = {value => setImage(value)}/>
                <DropdownInput required = {true}  label = "Universo" universe = {universeItems()} value={universe} onChanged = {value => setUniverse(value)}/>
                <Button>
                    Adicionar personagem
                </Button>
            </form>
        </section>
    )
}

export default Form

