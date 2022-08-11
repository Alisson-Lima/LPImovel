import "./style.css"
import PlacePhoto from "../../assets/img/Paris.png"
export function Place(){
    return <div className="place-image"><img src={PlacePhoto} alt="Imagem do lugar"/></div>
}