import { Pagination } from "../../components/Pagination/Pagination"
import { VehicleCard } from "../../components/VehicleCard/VehicleCard"


export const Home = () => {

    const vehicle = {
        id: "1",
        name: "Uno",
        brand: "Fiat",
        value: 3000.0,
        model: "2009",
        urlImg: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    };



    return (
        <>
            <Pagination/>,
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <VehicleCard id={vehicle.id} name={vehicle.name} brand= {vehicle.brand} value={vehicle.value} model= {vehicle.model} urlImg={vehicle.urlImg} />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <VehicleCard id={vehicle.id} name={vehicle.name} brand= {vehicle.brand} value={vehicle.value} model= {vehicle.model} urlImg={vehicle.urlImg} />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <VehicleCard id={vehicle.id} name={vehicle.name} brand= {vehicle.brand} value={vehicle.value} model= {vehicle.model} urlImg={vehicle.urlImg} />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <VehicleCard id={vehicle.id} name={vehicle.name} brand= {vehicle.brand} value={vehicle.value} model= {vehicle.model} urlImg={vehicle.urlImg} />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <VehicleCard id={vehicle.id} name={vehicle.name} brand= {vehicle.brand} value={vehicle.value} model= {vehicle.model} urlImg={vehicle.urlImg} />
                    </div>
                    
                </div>
            </div>
            
            
        </>
        )
}