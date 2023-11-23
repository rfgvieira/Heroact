import "./HeroCard.css"


const HeroCard = (props) => {
    const css = {backgroundColor: props.color}
    return(
        <div className="hero-card">
            <div className="header" style={css}>
                <img src={props.image} alt={`Imagem do ${props.name}`} />
            </div>

            <div className="footer">
                <h4>{props.name}</h4>
                <h5>{props.power}</h5>
            </div>
        </div>
    )
}

export default HeroCard