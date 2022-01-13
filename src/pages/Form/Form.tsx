
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import './index.scss'

export const Form = () => {

    const {id} = useParams();
    
    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputBrand, setInputBrand] = useState('');
    const [inputModel, setInputModel] = useState('');
    const [inputValue, setInputValue] = useState('');
    
    useEffect(()=>{
        if(id){
            api.get('/veiculos/'+ id).then((response)=>{
                const vehicle = response.data;
                setName(vehicle.name);
                setModel(vehicle.model);
                setInputName(vehicle.name);
                setInputBrand(vehicle.brand);
                setInputModel(vehicle.model);
                setInputValue(vehicle.value);
            })
        }
        
    },[id])
    

    const vehicle = {
        id: "1",
        name: "Uno",
        brand: "Fiat",
        model: "2009",
        value: 100000,
        urlImg: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    };

    const put = (event:any) =>{
        event.preventDefault();
        const data = {
            id: id,
            name: inputName,
            brand: inputBrand,
            value: Number(inputValue),
            model: inputModel,
        
        }
        console.log(data);
    }

    const post = (event:any) =>{
        event.preventDefault();
        const data = {
            name: inputName,
            brand: inputBrand,
            value: Number(inputValue),
            model: inputModel,
        
        }
        console.log(data);
    }
         
              

    return (
    <div className="form-container">
        <img className="imageCar" src={vehicle.urlImg} />
        <div className="container">
            {(id) ? (
            <h3>{name} - {model} </h3>
            ) :
            (<h3>Adicionar novo Veículo</h3>)
            }
            
            <form className="form">
                {(id) && (
                    <div className="group-id">
                    <label htmlFor="id">Id</label>
                    <input type="text" id="id" readOnly className="form-control" defaultValue={id}/>
                    </div> 
                )  
                    
                }
                 
                <div className="group-name">
                    <label htmlFor="name">Nome</label>
                    <input id="name" required className="form-control" value={inputName} onChange={(e)=>{setInputName(e.target.value)}}/>
                </div>
                <div className="group-brand">
                    <label htmlFor="brand">Marca</label>
                    <input id="brand" className="form-control" value={inputBrand} onChange={(e)=>{setInputBrand(e.target.value)}}/>
                </div>

                <div className="group-model">
                    <label htmlFor="brand">Modelo</label>
                    <input type="text" id="model" className="form-control"  value={inputModel} onChange={(e)=>{setInputModel(e.target.value)}}/>
                </div>

                <div className="group-value">
                    <label htmlFor="brand">Valor</label>
                    <input type="number" id="valor" className="form-control" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
                </div>


                <div className="btn-container">
                    {(id) ? 
                        (<button onClick={put}type="submit" className="btn btn-primary">Salvar</button>)

                        : (<button onClick={post}type="submit" className="btn btn-primary">Salvar</button>) 
                    }
                    
                    <Link to="/">
                        <button className="btn btn-primary">Cancelar</button>
                    </Link>
                </div>
            </form >
            
        </div >
    </div >)
}
