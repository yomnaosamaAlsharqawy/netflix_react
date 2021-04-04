import React from 'react'
import { useForm } from 'react-hook-form'
import './register.component.css'

export default function Register() {


const {register, handleSubmit } = useForm();



 async function  onSubmit(data) {

    const formData1 = new FormData()
    formData1.append('email', data.email)
    formData1.append('username', data.username)
    formData1.append('password', data.password)
    formData1.append('password2', data.password2)
    // console.log(formData1)
    console.log('user:' + data.username)
    console.log('password:' + data.password)
    console.log('password2:' + data.password2)
    console.log('email:' + data.email)


    let httpResponse =  await fetch("http://localhost:8000/api/songs/sign_up/",{
                method:"POST",
                body:formData1
            });

    let jsonObj = await httpResponse.json()
        if (jsonObj.success === false ){
            console.log(jsonObj)
            alert('Sign Up Error!')
        }
        else {
            console.log(jsonObj)
            alert(jsonObj.message)
        }
         }

    return (
        <div className='flexContainerRegister'>
            <form className='formContainerRegister' action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <h2 className='titleRegister'>Register</h2>
                <div className="formContainerSmall">
                    <div className='subtitleContainer'>
                        <label className='subtitleRegister'>Email: </label>
                        <label className='subtitleRegister'>Username: </label>
                        <label className='subtitleRegister'>Password:</label>
                        <label className='subtitleRegister'>Re-Enter Password: </label>
                    </div>

                    <div className='inputContainer'>
                        <input className='inputRegister' type="email" ref={register} name="email"  placeholder=  'Enter Email' />
                        <input className='inputRegister' type="text" ref={register} name="username"  placeholder=  'Enter Username' />
                        <input className='inputRegister' type="password" ref={register} name="password"  placeholder=  'Enter Password' />
                        <input className='inputRegister' type="password" ref={register} name="password2" placeholder=  'Re-Enter Password'/>
                    </div>
                </div>
                <button className="submitRegister" type="submit" value="Submit"> Register</button>
            </form>
        </div>
    )
}
