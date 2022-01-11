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
    <div className="card">
        <img className="image" src={props.urlImg} />
        <div className="container">
            <h4>{props.brand} {props.name} {props.model}</h4>
            <h3>R$ {props.value}</h3>
            <div className="btn btn-primary dsmovie-btn">Editar</div>
        </div>
    </div>)
}