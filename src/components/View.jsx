import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
    const [photoData,changePhotoData]=useState(
        [
  
]
    )
        const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(
            (response) => {
                changePhotoData(response.data)

            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Nav/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            
                          {photoData.map(
                            (value,index) =>{
                              return (
                              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src={value.url} class="card-img-top" alt="url"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.title}</h5>
                                            <h5 class="card-title">{value.id}</h5>
                                            <img src={value.thumbnailUrl} class="card-img-top" alt="thumbnail"></img>
                                            <p class="card-text">{value.description}</p>
                                        </div>
                                </div>
                            </div>)}
                          )}
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default View