import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination"
import { VehicleCard } from "../../components/VehicleCard/VehicleCard"
import { api } from '../../services/api';
import {getRole, logout, isAuthenticated} from '../../services/auth';

import { useNavigate } from "react-router-dom";


type VehicleProps = {
    
    id: string,
    name: string,
    model:string,
    brand:string,
    value: number,
    urlPhoto: string,
    
}



export const Home = () => {

    const navigate = useNavigate();
    const auth = isAuthenticated();
    const user_role = getRole();

    const [data, setData] = useState<Array<VehicleProps>>([]);

    useEffect(() => {
        api.get('/veiculos/').then((response) => {
            setData(response.data)
            console.log(auth);
        })
    },[]);
    

    // const vehicle = {
    //     id: "1",
    //     name: "Uno",
    //     brand: "Fiat",
    //     value: 3000.0,
    //     model: "2009",
    //     urlImg: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    // };

    const userLogout = () =>{
        logout();
        localStorage.removeItem("ROLE")
        navigate('/login')
    }

    

    return (
        <> 
         <div className="d-flex justify-content-around">
            {(user_role) === "ROLE_ADMIN" && (auth) && (
               
                    <Link to="/veiculos/add">
                        <button className="btn btn-secondary">Adicionar</button>
                    </Link>
                  
             )}
             {(auth) ?
            
                (<button className="btn btn-info" onClick={userLogout}>Logout</button>) :

                <div>
                    <p>Você não está logado</p>
                </div>
                }

             </div>
            
            ,
            <div className="container">
                <div className="row">
                    {data.map((d,idx) => {
                        return (
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <VehicleCard id={d.id} name={d.name} brand= {d.brand} value={d.value} model= {d.model} urlPhoto={d.urlPhoto} />
                            </div>
                        )
                    })}
                    
                </div>
               
                
                
                
        
        
               
            
            </div>
            
            
        </>
        )
}