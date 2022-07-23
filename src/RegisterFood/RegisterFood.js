import React, {useState} from 'react'
import "./RegisterFood.css"
import {useNavigate} from "react-router-dom";
export default function RegisterFood(props)
{
    const [foodName, setFoodName] = useState("")
    const [code, setCode] = useState("")
    const [unit, setUnit] = useState("")
    const [restock, setRestock] = useState("")

    let navigate = useNavigate()
    const { zone, barcode, setBarcode, store, setStore } = props
    function addItem() {
        if(barcode.includes(code))
        {
            alert("duplicate barcode")
        }
        else
        {
            setStore([...store, {
                food: foodName,
                code: code,
                unit: unit,
                restock: restock,
                amount: "0"
            }])
            setBarcode([...barcode, code])
        }
    }
    function goPrevious() {
        navigate('/zone')
    }

    function goNext() {
        navigate('/search')
    }

    return(
        <div className='show'>
            <h1 className='title'>Register Food</h1>
            <div className='border'>
                <ul className='list'>
                    <li className='inner-list'>
                        <label className='label'>Food Name
                            <input
                                type='text'
                                value={foodName}
                                onChange={newValue => {
                                    setFoodName(newValue.target.value)
                                }}
                            />
                        </label>
                    </li>
                    <li className='inner-list'>
                        <label>Barcode
                            <input
                                type='text'
                                value={code}
                                onChange={newValue => {
                                    setCode(newValue.target.value)
                                }}
                            />
                        </label>
                    </li>
                    <li className='inner-list'>
                        <label>Unit
                            <select value={unit} onChange={newUnit => setUnit(newUnit.target.value)}>
                                <option>gram</option>
                                <option>kg</option>
                                <option>pound</option>
                                <option>ounce</option>
                            </select>
                        </label>
                    </li>
                    <li className='inner-list'>
                        <label>Restock
                            <input
                                type='number'
                                value={restock}
                                onChange={newValue => {
                                    setRestock(newValue.target.value)
                                }}
                            />
                        </label>
                    </li>
                </ul>
                <div className='button-set'>
                    <button onClick={addItem} className='food-register'>Register</button>
                    <button className='button-2'>Cancel</button>
                </div>
            </div>
            <div className='navigation-button'>
                <button className='register-previous-button' onClick={goPrevious} style={{width: "200px", borderRadius: "10px", backgroundColor: "bisque"}}>Zone - Previous</button>
                <button className='button-next' onClick={goNext} style={{width: "200px", borderRadius: "10px", backgroundColor: "bisque"}}>Next - Search Food</button>
            </div>
        </div>
    )
}