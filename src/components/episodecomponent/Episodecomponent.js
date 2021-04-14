import React from 'react'

function Episodecomponent(props) {
    return (
        <div className="list-group">
            {props.data.map(record => (
                <div>
                    <a href="#"
                        className="d-flex align-items-center list-group-item list-group-item-action c-bg-dark justify-content-start">
                        {/* <div className="h3 mr-4">{props.data.findIndex()}</div> */}
                        <div className="btn-img-wrapper w-25">
                            <img src={record.image} className="w-100"/>
                            <i className="far fa-play-circle"></i>
                        </div>
                        <div className="w-100 ml-2">
                            <div className="d-flex w-100 justify-content-between p-0">
                                <h5 className="mb-1">{record.name}</h5>
                                <small>{record.time}</small>
                            </div>
                            <p className="mb-1">{record.description}</p>
                        </div>
                    </a>
                    <hr className="light w-100"></hr>
            </div>

            ))}   
        </div>
    )
}

export default Episodecomponent
