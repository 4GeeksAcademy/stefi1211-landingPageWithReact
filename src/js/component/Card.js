
import React from "react";


const Card = (props) => {
    return (
        <div className="card text-center mb-4 border border-warning" style={{ width: "16rem" }}>
            <img src={props.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer border-top border-warning bg-warning">
                <a href="#" className="btn btn-warning">Keep reading!</a>
            </div>
        </div>
    );
};

export default Card;
