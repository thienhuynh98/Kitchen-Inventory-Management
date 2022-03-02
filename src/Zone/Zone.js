import React, {useState} from "react";
import {CirclePicker} from "react-color";
import "./Zone.css"
import { useNavigate } from 'react-router-dom';

export default function Zone(props)
{
    let navigate = useNavigate();
    const {inputZone, setInputZone, zone, setZone, color, setColor, temp, setTemp, removeZone, setRemoveZone, verifyColor, setVerifyColor, store, setStore} = props
    function addItem() {
        setZone([...zone, inputZone])
        setTemp([...temp, {
            color: color,
            zone: inputZone
        }])
    }

    function handleRemove() {
        const tempArr = [...zone]
        const ind = zone.indexOf(removeZone)
        if (ind !== -1) {
            tempArr.splice(ind, 1);
        }
        setZone(tempArr)
        const tempArr1 = [...temp]
        if (ind !== -1) {
            tempArr1.splice(ind, 1);
        }
        setTemp(tempArr1)
        store.forEach((value) => {
            if(value.zones[Object.keys(value.zones)[0]].zone === removeZone)
            {
                value.zones[Object.keys(value.zones)[0]].zone = "unassigned"
            }
        })
    }
    function goPrevious() {
       navigate('/')
    }

    function goNext() {
        navigate('/register')
    }

    function handleColor(newColor) {
        if(verifyColor.includes(newColor.hex))
        {
            alert("error")
        }
        else
        {
            setVerifyColor([...verifyColor, newColor.hex])
            setColor(newColor)
        }
    }

    return(
        <div>
            <h1 className='zone-title'>Zone</h1>
            {temp.map((value, index) => {
                return(
                    <li
                        key={index}
                        style={{
                            border: "5px solid",
                            borderRadius: "10px",
                            borderColor: `${value.color.hex}`,
                            backgroundColor: `${value.color.hex}`,
                            listStyle: "none",
                            textAlign: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "10px",
                            width: "500px",
                            marginBottom: "10px"}}
                    >
                        {value.zone}
                    </li>
                )
            })}
            <div className='zone-border'>
                <ul className='zone-list'>
                    <li className='zone-inner-list'>
                        <label>Add Your Zone
                            <input
                                type='text'
                                value={inputZone}
                                onChange={newValue => {
                                    setInputZone(newValue.target.value)
                                }}
                            />
                        </label>
                    </li>
                    <li>
                        <label>Choose Your Color
                            <div className='color-choose'>
                                <CirclePicker
                                    color={color}
                                    onChange={newColor => handleColor(newColor)}
                                />
                            </div>
                        </label>
                    </li>
                </ul>
                <div className='add-cancel-remove'>
                    <button onClick={addItem} className='zone-add'>Add</button>
                    <button className='cancel'>Cancel</button>
                </div>
            </div>
            <div className='zone-border'>
                <ul className='zone-list'>
                    <li className='zone-inner-list'>
                        <label>Remove Your Zone</label>
                        <input
                            type='text'
                            value={removeZone}
                            onChange={value => {
                                setRemoveZone(value.target.value)
                            }}
                        />
                    </li>
                </ul>
                <div className='add-cancel-remove'>
                    <button onClick={handleRemove} className='remove'>Remove</button>
                </div>
            </div>
            <div className='zone-navigation-button'>
                <button className='zone-button-previous' onClick={goPrevious}>Previous</button>
                <button className='zone-button-next' onClick={goNext}>Next</button>
            </div>
        </div>
    )
}