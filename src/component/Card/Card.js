import React from "react";
import PropTypes from "prop-types";
import "./Card.css"

const Card = ({title,description}) => {

    return (
        <div className="w-25">
            <div className="p-5">
                <div className="card-item ">
                    <img className="card-image" src="https://images.unsplash.com/photo-1616096219198-452584a402f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                    <div className="card-body">
                        <h1 className="card-title">{title}</h1>
                        <hr />
                        <p className="card-description">
                           {description}
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )


}

Card.propTypes={

    title: PropTypes.string,
    description: PropTypes.string

}


export default Card;