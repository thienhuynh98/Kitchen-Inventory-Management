import React, {useState} from "react";
import "./Search.css"
import { useNavigate } from 'react-router-dom';
export default function Search(props)
{
    const [searchFood, setSearchFood] = useState("")
    const [visibilitySearch, setVisibilitySearch] = useState(false)
    const [visibilityManage, setVisibilityManage] = useState(false)
    const {food, setFood, store, setStore, result, setResult} = props

    let navigate = useNavigate()
    function showResult() {
        const tempResult = []
        const regex = /\d/;
        const doesItHaveNumber = regex.test(food);
        if(doesItHaveNumber === true)
        {
            {store.map((value) => {
                if(value.code.includes(searchFood)){
                    tempResult.push(value)
                }
            })}
        }
        else
        {
            {store.map((value) => {
                if(value.food.includes(searchFood)){
                    tempResult.push(value)
                }
            })}
        }
        setResult(tempResult)
    }

    function handleManage() {
        navigate('/manage')
    }

    function goBack() {
        navigate("/register")
    }

    return(
        <div>
            <h1 style={{textAlign: "center"}}>Search Food</h1>
            <div style={{textAlign: "center"}}>
                <button
                    style={{width: "200px", borderRadius: "10px", backgroundColor: "bisque"}}
                    onClick={() => {
                        setVisibilitySearch(true)
                    }}
                >
                    Search</button>
                <button
                    style={{width: "200px", borderRadius: "10px", backgroundColor: "bisque"}}
                    onClick={() => {
                        setVisibilityManage(true)
                    }}
                >
                    Manage
                </button>
            </div>
            {visibilitySearch && (
                <div className='search-border'>
                    <ul className='search-list'>
                        <li className='search-list-inner'>
                            <label>Enter Food
                                <input
                                    type='text'
                                    value={searchFood}
                                    onChange={newValue => {
                                        setSearchFood(newValue.target.value)
                                    }}
                                >
                                </input>
                            </label>
                        </li>
                    </ul>
                    <div className='search-button'>
                        <button onClick={showResult} style={{width: "100px", borderRadius: "10px", backgroundColor: "bisque"}}>Search</button>
                        <button
                            style={{width: "100px", borderRadius: "10px", backgroundColor: "bisque"}}
                            onClick={() => {
                                setVisibilitySearch(false)
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            {visibilityManage && (
                <div className='search-border' >
                    <ul className='search-list'>
                        <li className='search-list-inner'>
                            <label>Manage Food
                                <input
                                    type='text'
                                    value={food}
                                    onChange={newValue => {
                                        setFood(newValue.target.value)
                                    }}
                                >
                                </input>
                            </label>
                        </li>
                    </ul>
                    <div className='search-button'>
                        <button
                            onClick={handleManage}
                            style={{width: "100px", borderRadius: "10px", backgroundColor: "bisque"}}
                        >
                            Manage
                        </button>
                        <button
                            style={{width: "100px", borderRadius: "10px", backgroundColor: "bisque"}}
                            onClick={() => {
                                setVisibilityManage(false)
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            <div>
                <p style={{textAlign: "center"}}>There is found {result.length} results</p>
                {result.map((value) => {
                    return(
                        <ul>
                            <li
                            key={value}
                            style={{
                                backgroundColor: "burlywood",
                                border: "5px solid",
                                borderRadius: "10px",
                                listStyle: "none",
                                textAlign: "center",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "10px",
                                width: "500px",
                                padding: "8px 0px 8px 0px",
                                marginBottom: "10px"}}
                            >
                            {value.food}
                            </li>
                        </ul>
                    )
                })}
            </div>
            <div style={{textAlign: "center"}}>
                <button onClick={goBack} style={{width: "200px", borderRadius: "10px", backgroundColor: "bisque"}}>Register Food - Previous</button>
            </div>
        </div>
    )
}