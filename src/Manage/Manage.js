import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Manage.css"
export default function Manage(props)
{
    const [chooseZone, setChooseZone] = useState("")
    const [quantity, setQuantity] = useState("")
    const {food, setFood, store, setStore, setZone, zone, result, setResult} = props
    console.log(zone)
    let navigate = useNavigate()
    function goBack() {
        navigate("/search")
    }
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Manage Quantity</h1>
            <div className='manage-border'>
                <ul className='manage-list'>
                    <li className='manage-list-inner'>
                        <label>Enter Quantity
                            <input
                                type='number'
                                value={quantity}
                                onChange={newQuantity => setQuantity(newQuantity.target.value)}
                            />
                        </label>
                    </li>
                    <li>
                        <label>Enter Quantity
                            <select value={chooseZone} onChange={newPlace => setChooseZone(newPlace.target.value)}>
                                {zone.map((value) => {
                                    return(
                                        <option key={value}>{value}</option>
                                    )
                                })}
                            </select>
                        </label>
                    </li>
                </ul>
            </div>
            <div>
                {result.map((value, index) => {
                    return(
                        <li
                            key={index}
                            style={{
                                border: "5px solid",
                                borderRadius: "10px",
                                listStyle: "none",
                                textAlign: "center",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "10px",
                                width: "500px",
                                marginBottom: "10px"}}
                        >
                            {value.food}
                        </li>
                    )
                })}
            </div>
            <button onClick={goBack}>back</button>
        </div>
    )
}