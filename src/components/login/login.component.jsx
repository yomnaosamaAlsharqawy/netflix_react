import React from 'react'
import { useForm } from 'react-hook-form'
import './login.component.css'
export default function Login({loggedIn, setloggedIn}) {


const {register, handleSubmit } = useForm();



 async function  onSubmit(data) {

    const formData1 = new FormData()
    formData1.append('username', data.username)
    formData1.append('password', data.password)
    console.log(formData1)

    let httpResponse =  await fetch("http://localhost:8000/api/songs/login/",{
                method:"POST",
                body:formData1
            });

    let jsonObj = await httpResponse.json()
        if (jsonObj.token){
            console.log(jsonObj.token)
            localStorage.token = jsonObj.token
            setloggedIn(true)
            alert('Login Successful')
            
        }
        else {
            console.log(jsonObj)
            alert('Login Error')
        }
         }
    if (loggedIn){
        return (<div className='flexContainerLogin'> Already Logged in!</div>)
    }
    else return (
        <div className='flexContainerLogin'>
            <form className='formContainerLogin' action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <h2 className='titleLogin'>Login</h2>
                <div className="formContainerSmall">
                    <div className='subtitleContainer'>
                        <label className='subtitle'>Username:</label>
                        <label className='subtitle'>Password:</label>
                    </div>

                    <div className='inputContainer'>
                        <input className='inputField' type="text" ref={register} name="username"  placeholder=  'Enter Username' />
                        <input className='inputField' type="password" ref={register} name="password"  placeholder=  'Enter Password' />
                    </div>
                </div>
                <button className="submitLogin" type="submit" value="Submit"> Login</button>
            </form>
        </div>
    )
}
