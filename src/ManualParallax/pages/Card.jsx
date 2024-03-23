import "../pages/Card.css"

const Card =({title, description, image}) =>{
    
    return(
        <div className="Card">
            <h2>{title}</h2>
            <img src={image} className="imagenes"/>
            <p>{description}</p>
        </div>
    );

}

export default Card