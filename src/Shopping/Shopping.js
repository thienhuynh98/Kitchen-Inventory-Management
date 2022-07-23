import React, {useState} from "react";
import randomColor from "randomcolor";
import {useNavigate} from "react-router-dom";
export default function Shopping(props)
{
    let navigate = useNavigate()
    const {store, setStore} = props

    function shoppingDirection() {
        navigate("/")
    }

    return(
        <div>
            <h1 style={{textAlign: "center"}}>Food need to refill</h1>
            {store.map((value, index) => {
                if(parseInt(value.amount) < parseInt(value.restock))
                {
                    return(
                        <li
                            key={index}
                            style={{
                                border: "5px solid",
                                borderRadius: "10px",
                                backgroundColor: randomColor.randomColor(),
                                listStyle: "none",
                                textAlign: "center",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "10px",
                                width: "300px",
                                marginBottom: "10px"}}
                        >
                            {value.food}
                        </li>
                    )
                }
            })}
            <div style={{textAlign: "center"}}>
                <button style={{width: "100px", borderRadius: "10px", backgroundColor: "bisque"}} onClick={shoppingDirection}>Home</button>
            </div>
        </div>
    )
}