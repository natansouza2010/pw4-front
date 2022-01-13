import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination/Pagination"
import { VehicleCard } from "../../components/VehicleCard/VehicleCard"
import { api } from '../../services/api';


type VehicleProps = {
    
    id: string,
    name: string,
    model:string,
    brand:string,
    value: number,
    urlImg: string,
    
}



export const Home = () => {
    const [data, setData] = useState<Array<VehicleProps>>([]);

    useEffect(() => {
        api.get('/veiculos/').then((response) => {
            setData(response.data)
        })
    },[]);
    

    const vehicle = {
        id: "1",
        name: "Uno",
        brand: "Fiat",
        value: 3000.0,
        model: "2009",
        urlImg: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    };

    const printData = () =>{
        console.log(data);
    }



    return (
        <>  
            <Pagination/>,
            <div className="container">
                <div className="row">
                    {data.map((d,idx) => {
                        return (
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <VehicleCard id={d.id} name={d.name} brand= {d.brand} value={d.value} model= {d.model} urlImg={d.urlImg} />
                            </div>
                        )
                    })}
                    
                </div>
                <button onClick={printData}>Adicionar</button>
            </div>
            
            
        </>
        )
}