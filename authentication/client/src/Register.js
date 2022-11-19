import React,{useState} from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Register = () => {
    const [data,setData] = useState({
        firstname:'',
        secondname:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/register',data).then(
            res => {alert(res.data);
                setData({
                    firstname:'',
                secondname:'',
                email:'',
                password:'',
                confirmpassword:''
            })}
        )
        // try{
        //     if(!setData){
        //         return <h3>user Already exists</h3>
        //     }
        // }catch(err){
        //     console.log(err)
        //     return <h4>Internel Server Error'</h4>
        // }

    }
    return (
        <div>
            <center>
            <form onSubmit={submitHandler} autoComplete="off">
                <h3>Register</h3>
                <input type="text" onChange={changeHandler} name="firstname" placeholder="First Name" /><br />
                <input type="text" onChange={changeHandler} name="secondname" placeholder="Second Name" /><br />
                <input type="email" onChange={changeHandler} name="email" placeholder="Email" /><br />
                <input type="password" onChange={changeHandler} name="password" placeholder="Password" /><br />
                <input type="password" onChange={changeHandler} name="confirmpassword" placeholder="Confirm Password" /><br />
                <input type="submit" value="Register" /><br />
            </form>
            </center>
        </div>
    )
}

export default Register