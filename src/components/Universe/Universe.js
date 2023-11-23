import HeroCard from "../HeroCard/HeroCard"
import "./Universe.css"

const Universe = (props) =>{
    const css = {backgroundColor: props.secondaryColor}

  

    return(
        (props.heroes.length > 0) && <section className="universe" style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className="heroes">
                {props.heroes.map(heroes => <HeroCard key = {heroes.name} name = {heroes.name} power = {heroes.power} image = {heroes.image} color = {props.primaryColor}/>)}
            </div>
            
        </section>
    )
}


export default Universe