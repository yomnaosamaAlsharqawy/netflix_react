import React from 'react'
import { useForm } from 'react-hook-form'
import './add-song.component.css'
export default function AddSong() {


const {register, handleSubmit } = useForm();



 async function  onSubmit(data) {

    const formData1 = new FormData()
    formData1.append('title', data.title)
    formData1.append('artist', data.artist)
    formData1.append('poster', data.poster[0])
    formData1.append('src', data.src[0])
    console.log(formData1)

    let httpResponse =  await fetch("http://localhost:8000/api/songs/create/",{
                method:"POST",
                headers: new Headers({
                    'Authorization': `Token ${localStorage.token}`
                }),
                body:formData1
            });

    let jsonObj = await httpResponse.json()
        if (jsonObj.success === false){
            console.log(jsonObj)
            alert(jsonObj.error)
        }
        else {
            console.log(jsonObj)
            alert(jsonObj.message)
        }
         }
    if (localStorage.token){

        return (
            <div className='flexContainerAddSong'>
                <form className='formContainerAddSong' action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='titleAddSong'>Add a new song</h2>
                    <div className="formContainerSmall">
                        <div className='subtitleContainer'>
                            <label className='subtitleSong'>Title:</label>
                            <label className='subtitleSong'>Artist:</label>
                            <label className='subtitleSong'>Add Picture:</label>
                            <label className='subtitleSong'>Add Song:</label>
                        </div>
                        <div className='inputContainer'>
                            <input className='inputFieldSong' type="text" ref={register} name="title"  placeholder=  'Add Title' />
                            <input className='inputFieldSong' type="text" ref={register} name="artist"  placeholder=  'Add Artist' />
                            <input className='inputFieldFile' type="file" ref={register} name="poster" />
                            <input className='inputFieldFile' type="file" ref={register} name="src" />
                        </div>
                    </div>
                    <button className="submitSong" type="submit" value="Submit"> Add Song</button>
                </form>
            </div>
        )
    }

    else{
        return ( 
            <div className='flexContainerAddSong'>
                <h1>Please Login to Add music!</h1>
            </div>
        )
    }
}
