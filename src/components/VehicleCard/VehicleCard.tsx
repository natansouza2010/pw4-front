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
    <div>
        <img className="image" src={props.urlImg} />
        <div className="container">
            <h3>{props.brand} {props.name} {props.model}</h3>
            <h2>{props.value}</h2>
            <div className="btn btn-primary dsmovie-btn">Editar</div>
        </div>
    </div>)
}