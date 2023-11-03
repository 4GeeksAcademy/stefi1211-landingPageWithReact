
import React from "react";


const Card = (props) => {
    return (
        <div className="card text-center mb-4" style={{ width: "16rem" }}>
            <img src={props.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer ">
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    );
};

export default Card;
