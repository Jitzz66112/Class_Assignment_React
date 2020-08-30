import React from 'react'
import Navbar from "./Navbar"
import pdf from './11703882_CV_new.pdf'
import Pic from "./download.jfif";






const Resume = () => {

    return ( <
        div >
        <
        Navbar / >
        <
        div className = "container"
        style = {
            { textAlign: "center" } } >
        <
        img src = { Pic }
        style = {
            { height: "240px", width: "300px" } } > < /img><br / > < br / >
        <
        a href = { pdf }
        className = "btn btn-lg btn-primary"
        style = {
            { justifyContent: "center", background: "black" } } > View My Resume < /a> <
        /div> <
        /div>




    )
}
export default Resume;