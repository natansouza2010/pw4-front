
import './index.scss'

export const Form = () => {

    const vehicle = {
        id: "1",
        name: "Uno",
        brand: "Fiat",
        model: "2009",
        urlImg: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    };

    return (
    <div className="form-container">
        <img className="imageCar" src={vehicle.urlImg} />
        <div className="container">
            <h3>{vehicle.name} - {vehicle.model} </h3>
            <form className="form">
                <div className="group-id">
                    <label htmlFor="id">Id</label>
                    <input type="text" id="id" readOnly className="form-control" defaultValue={vehicle.id}/>
                </div>
                <div className="group-name">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" className="form-control" defaultValue={vehicle.name}/>
                </div>
                <div className="group-brand">
                    <label htmlFor="brand">Marca</label>
                    <input type="text" id="brand" className="form-control" defaultValue={vehicle.brand}/>
                </div>

                <div className="group-model">
                    <label htmlFor="brand">Model</label>
                    <input type="text" id="model" className="form-control" defaultValue={vehicle.model}/>
                </div>


                <div className="btn-container">
                    <button type="submit" className="btn btn-primary">Salvar</button>
                    <button className="btn btn-primary">Cancelar</button>
                </div>
            </form >
            
        </div >
    </div >)
}
