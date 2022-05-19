import React from 'react'
import Navbar from './Navbar'

const View = () => {

    var newList=[{"_id":"6285a2a31887dc001619415c","courseTitle":"Python Django Internship","courseDescription":"Internship programme","courseDuration":"3 months","courseVenue":"ONLINE","courseDate":"02/01/2023"},{"_id":"6285a2c21887dc001619415d","courseTitle":"MERN Stack","courseDescription":"Internship programme","courseDuration":"6 months","courseVenue":"ONLINE","courseDate":"02/06/2022"}]
  return (
    <div>
        <Navbar/>



<div class="container">
    <div class="row">
        <div class="col col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">





        <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Duration</th>
      <th scope="col">Description</th>
      <th scope="col">Venue</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
      {newList.map((value,key)=>{
          return <tr>
          <th scope="row">1</th>
          <td>{value.courseTitle}</td>
          <td>{value.courseDuration}</td>
          <td>{value.courseDescription}</td>
          <td>{value.courseVenue}</td>
          <td>{value.courseDate}</td>
         
        </tr>
      })}
    
  </tbody>
</table>
    </div>
    </div>
    </div>
    </div>
  )
}

export default View