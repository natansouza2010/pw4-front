
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import './index.scss'
import { getRole } from '../../services/auth'

export const Form = () => {
    const user_role = getRole();
    const navigate = useNavigate();

    const { id } = useParams();

    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState();
    const [inputName, setInputName] = useState('');
    const [inputBrand, setInputBrand] = useState('');
    const [inputYear, setInputYear] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [inputImage, setInputImage] = useState('');


    useEffect(() => {
        console.log(id)
        if (id) {
            api.get('/api/vehicle/' + id).then((response) => {
                const vehicle = response.data.existingVehicle;
                console.log(vehicle)
                setName(vehicle.name);
                setYear(vehicle.year);
                setImage(vehicle.urlPhoto);
                setInputName(vehicle.name);
                setInputBrand(vehicle.brand);
                setInputYear(vehicle.year);
                setInputValue(vehicle.value);
                setInputImage(vehicle.urlPhoto);
            })
        }

    }, [id])


    const put = (event: any) => {
        navigate('/')
    }

    const post = (event: any) => {
        event.preventDefault();
        console.log("aqui")
        const data = {
            name: inputName,
            brand: inputBrand,
            value: Number(inputValue),
            year: inputYear,
            status: "AVAILABLE",
        }

        api.post("api/vehicle/create/", data).then(response => {
            console.log("--------------------");
            console.log(response);
        })
        navigate('/')

    }

    const deleteData = (event: any) => {
        event.preventDefault();
        api.delete(`api/vehicle/${id}`).then(response => {
            console.log(response);
        })
        navigate('/')
    }


    return (
        <div className="form-container">
            <img className="imageCar" src={image} />
            <div className="container">
                {(id) ? (
                    <h3>{name} - {year} </h3>
                ) :
                    (<h3>Adicionar novo Veículo</h3>)
                }

                <form className="form">
                    {(id) && (
                        <div className="group-id">
                            <label htmlFor="id">Id</label>
                            <input type="text" id="id" readOnly className="form-control" defaultValue={id} />
                        </div>
                    )

                    }

                    <div className="group-name">
                        <label htmlFor="name">Nome</label>
                        <input id="name" required className="form-control" value={inputName} onChange={(e) => { setInputName(e.target.value) }} />
                    </div>
                    <div className="group-brand">
                        <label htmlFor="brand">Marca</label>
                        <input id="brand" required className="form-control" value={inputBrand} onChange={(e) => { setInputBrand(e.target.value) }} />
                    </div>

                    <div className="group-model">
                        <label htmlFor="brand">Ano</label>
                        <input type="text" required id="model" className="form-control" value={inputYear} onChange={(e) => { setInputYear(e.target.value) }} />
                    </div>

                    <div className="group-value">
                        <label htmlFor="brand">Valor</label>
                        <input type="number" required id="valor" className="form-control" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                    </div>




                    <div className="btn-container">
                        {(user_role) === 'ADMIN' &&
                            <>
                                {(id) ?
                                    (
                                        <><button onClick={put} type="submit" className="btn btn-primary">Salvar</button>
                                            <button onClick={deleteData} type="submit" className="btn btn-danger">Deletar</button>
                                        </>)

                                    : (<button onClick={post} type="submit" className="btn btn-primary">Salvar</button>)
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
