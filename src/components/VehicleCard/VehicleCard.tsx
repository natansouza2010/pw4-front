import { Link } from 'react-router-dom';
import './index.scss'; 


type VehicleProps = {
    id: string,
    name: string,
    model:string,
    brand:string,
    value: number,
    urlImg: string,
}


export const VehicleCard = (props:VehicleProps) => {
    return(
        <Link style={{ textDecoration: 'none'}} to={`/veiculos/edit/${props.id}`}>
            <div className="card">
                <img className="image" src={props.urlImg} />
                <div className="container">
                    <h4>{props.brand} {props.name} {props.model}</h4>
                    <h3>R$ {props.value}</h3>               
                                      
                </div>
            </div>
        </Link>)
}