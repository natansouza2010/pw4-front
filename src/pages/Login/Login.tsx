
import {api} from '../../services/api';
import { useState } from 'react';
import {login} from '../../services/auth';
import './index.scss';
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const LogIn = (event:any) => {
        event.preventDefault();
        const data= {
            email : email,
            password : password, 
        }
        api.post("/user/login",data).then(response =>{
            if(response.data){
                login(response.data);
                
                navigate('/');
            }
        })
    }


    return (
        <div className="login-form">
            <form className="form">
                <div className="container-Form">
                    <h2 className="text-center">Log in</h2>       
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                    </div>
                    <div className="form-group">
                        <button type="submit" onClick={LogIn} className="btn btn-primary btn-block">Log in</button>
                    </div>
                </div>
                     
            </form>
    </div>
    );
}