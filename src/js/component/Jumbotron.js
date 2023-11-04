
import React from "react";

const Jumbotron = () => {
    let styleText = {
        fontSize: "70px"
    }
    let styleJum = {
        color: "white"
    }
    return (
        <div className="p-5 my-4 bg-dark rounded-3">
            <div className="container-fluid py-3" style={styleJum}>
                <h1 className="display-5 fw-normal" style={styleText}>Unearth the Wonders of Stone Mountains</h1>
                <p className="col-md-12 fs-6">Welcome to our Stone Mountains landing page, where the ancient and awe-inspiring beauty of nature meets the intrigue of geological wonders. Here, you'll find everything you need to know about these majestic formations of rock that have captivated explorers, scientists, and adventurers for centuries. </p>
                <button className="btn btn-warning btn-lg" type="button">Find out more!</button>
            </div>
        </div>
    );
};

export default Jumbotron;
