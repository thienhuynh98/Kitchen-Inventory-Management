import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Manage.css"
export default function Manage(props)
{
    const [chooseZone, setChooseZone] = useState("")
    const [quantity, setQuantity] = useState("")
    const {food, setFood, store, setStore, setZone, zone, result, setResult} = props
    let navigate = useNavigate()
    function goBack() {
        navigate("/search")
    }

    function addQuantity() {
        {result.map((value) => {
            if(value.food === food)
            {
                if(value.zones === undefined)
                {
                    value["zones"] = [{zone: chooseZone, quantity: quantity}]
                }
                else
                {
                    let index = value.zones.findIndex(x => x.zone === chooseZone);
                    if(index !== -1)
                    {
                        let tempNum = value.zones[index].quantity
                        let tempResult = (parseInt(tempNum) + parseInt(quantity)).toString()
                        value.zones[index].quantity = tempResult
                    }
                    else
                    {
                        value.zones.push({zone: chooseZone, quantity: quantity})
                    }
                }
            }
        })}
        setResult(result)
        console.log(result)
    }
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Manage Quantity</h1>
            {/*{result.map((value, index) => {*/}
            {/*    if(value.food === food)*/}
            {/*    {*/}
            {/*        value.zones.map((val, ind) => {*/}
            {/*            console.log(val)*/}
            {/*        })*/}
            {/*        // console.log(value)*/}
            {/*    }*/}
            {/*})}*/}
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
                        <label>Enter Zone
                            <select value={chooseZone} onChange={newPlace => setChooseZone(newPlace.target.value)}>
                                {zone.map((value) => {
                                    return(
                                        <option key={value}>{value}</option>
                                    )
                                })}
                            </select>
                        </label>
                    </li>
                    <li>
                        <button onClick={addQuantity}>Add</button>
                    </li>
                </ul>
            </div>
            <button onClick={goBack}>back</button>
        </div>
    )
}