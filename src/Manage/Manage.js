import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import randomColor from "randomcolor";
import "./Manage.css"
export default function Manage(props)
{
    const [chooseZone, setChooseZone] = useState("")
    const [quantity, setQuantity] = useState("")
    const [manage, setManage] = useState([])
    const {food, setFood, store, setStore, setZone, zone} = props
    let navigate = useNavigate()
    function goBack() {
        navigate("/search")
    }

    function goNext() {
        navigate("/shopping")
    }

    function addQuantity() {
        let tempStore = [...store]
        {tempStore.map((value) => {
            if(value.food === food)
            {
                if(value.zones === undefined)
                {
                    value["zones"] = [{zone: chooseZone, quantity: quantity}]
                    let tempAmount = value.amount
                    let total = (parseInt(tempAmount) + parseInt(quantity)).toString()
                    value.amount = total
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
                    let tempAmount = value.amount
                    let total = (parseInt(tempAmount) + parseInt(quantity)).toString()
                    value.amount = total
                }
                setManage(value.zones)
            }
        })}
        setStore(tempStore)
    }
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Manage Quantity</h1>
            {manage.map((value, index) => {
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
                        <div>Zone: {value.zone}</div>
                        <div>Quantity: {value.quantity}</div>
                    </li>
                )
            })}

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
                        <div className='manage-add'>
                            <button onClick={addQuantity} className='manage-add-button'>Add</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='manage-direction'>
                <button onClick={goBack} style={{width: "200px", borderRadius: "10px", backgroundColor: "bisque"}} className='manage-previous'> Search Food - Previous</button>
                <button onClick={goNext} style={{width: "200px", borderRadius: "10px", backgroundColor: "bisque"}} className="manage-next">Next - Shopping List</button>
            </div>
        </div>
    )
}