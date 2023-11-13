import "./Form.css"
import TextField from '../TextField/TextField';

const Form = () =>{
    return(
        <section className = "formulario">
            <form>
                <h2>Preencha os campos para cadastrar seu herói</h2>
                <TextField label = "Nome" placeholder = "Digite o Nome"/>
                <TextField label = "Poderes" placeholder = "Digite os Poderes"/>
                <TextField label = "Imagem" placeholder = "Digite o endereço da imagem"/>
                <TextField label = "Equipe" placeholder = "Digite a Equipe"/>
            </form>
        </section>
    )
}

export default Form

