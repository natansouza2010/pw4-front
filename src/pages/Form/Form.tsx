
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import './index.scss'
import {getRole} from '../../services/auth'

export const Form = () => {
    const user_role = getRole();
   
    const {id} = useParams();
    
    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [image, setImage] = useState();
    const [inputName, setInputName] = useState('');
    const [inputBrand, setInputBrand] = useState('');
    const [inputModel, setInputModel] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [inputImage, setInputImage] = useState('');
    
    
    useEffect(()=>{
        if(id){
            api.get('/veiculos/'+ id).then((response)=>{
                const vehicle = response.data;
                setName(vehicle.name);
                setModel(vehicle.model);
                setImage(vehicle.urlPhoto);
                setInputName(vehicle.name);
                setInputBrand(vehicle.brand);
                setInputModel(vehicle.model);
                setInputValue(vehicle.value);
                setInputImage(vehicle.urlPhoto);
            })
        }
        
    },[id])
    

    const put = (event:any) =>{
        event.preventDefault();
        const data = {
            name: inputName,
            brand: inputBrand,
            value: Number(inputValue),
            model: inputModel,
            urlPhoto:inputImage,
        
        }
       
        api.put(`/veiculos/${id}`, data).then(response=>{
            
            console.log(response);
        })
    }

    const post = (event:any) =>{
        event.preventDefault();
        const data = {
            name: inputName,
            brand: inputBrand,
            value: Number(inputValue),
            model: inputModel,
            urlPhoto: inputImage,
        }
        api.post("/veiculos/",data).then(response =>{
            console.log(response);
     })
        
    }
         
    const deleteData = (event:any)=>{
        event.preventDefault();
        api.delete(`/veiculos/${id}`).then(response=>{
            console.log(response);
        })
    }
              

    return (
    <div className="form-container">
        <img className="imageCar" src={image} />
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
                    <input id="brand" required className="form-control" value={inputBrand} onChange={(e)=>{setInputBrand(e.target.value)}}/>
                </div>

                <div className="group-model">
                    <label htmlFor="brand">Modelo</label>
                    <input type="text" required id="model" className="form-control"  value={inputModel} onChange={(e)=>{setInputModel(e.target.value)}}/>
                </div>

                <div className="group-value">
                    <label htmlFor="brand">Valor</label>
                    <input type="number" required id="valor" className="form-control" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
                </div>

                <div className="group-value">
                    <label htmlFor="brand">URl Imagem</label>
                    <input type="text" placeholder="URL da Imagem" id="valor" className="form-control"  value= {inputImage} onChange={(e)=>{setInputImage(e.target.value)}} />
                </div>

                
                <div className="btn-container">
                {(user_role) === 'ROLE_ADMIN' &&
                    <>
                    {(id)  ? 
                        (
                        <><button onClick={put} type="submit" className="btn btn-primary">Salvar</button>
                        <button onClick={deleteData} type="submit" className="btn btn-danger">Deletar</button>
                        </>)

                        : (<button onClick={post}type="submit" className="btn btn-primary">Salvar</button>) 
                    }
                    </>
                }
                    <Link to="/">
                        <button className="btn btn-primary">Cancelar</button>
                    </Link>
                </div>
            </form >
            
        </div >
    </div >)
}
