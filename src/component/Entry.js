import React, { useState } from 'react'
import Navbar from './Navbar'

const Entry = () => {

    var[courseTitle,setTitle]=useState("")
    var[courseDuration,setDuration]=useState("")
    var[courseDescription,setDescription]=useState("")
    var[courseVenue,setVenue]=useState("")
    var[courseDate,setdate]=useState("")

    const newCourse=()=>
    {
        const data={"courseTitle":courseTitle,"courseDuration":courseDuration,"courseDescription":courseDescription,"courseVenue":courseVenue,"courseDate":courseDate}
        console.log(data)
    }


  return (
    <div>
        <Navbar/>
        



        <div className="container">
    <div className="row">
        <div className="col col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Title</label>
                    <input onChange={(x)=>{setTitle(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Duration</label>
                    <input onChange={(x)=>{setDuration(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Description</label>
                    <input onChange={(x)=>{setDescription(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Venue</label>
                    <input onChange={(x)=>{setVenue(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Duration</label>
                    <input onChange={(x)=>{setdate(x.target.value)}} type="date" className="form-control"/>
                </div>
                <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button  onClick={newCourse} className="btn btn-danger">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Entry