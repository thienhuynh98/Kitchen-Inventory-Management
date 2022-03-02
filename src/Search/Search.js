import {useState} from "react";
import "./Search.css"
import { useNavigate } from 'react-router-dom';
export default function Search(props)
{
    const [searchFood, setSearchFood] = useState("")

    const {food, setFood, store, setStore, result, setResult} = props

    let navigate = useNavigate()
    function showResult() {
        const tempResult = []
        const regex = /\d/;
        const doesItHaveNumber = regex.test(food);
        if(doesItHaveNumber === true)
        {
            {store.map((value) => {
                if(value.food.includes(searchFood)){
                    tempResult.push(value)
                }
            })}
        }
        else
        {
            {store.map((value) => {
                if(value.code.includes(searchFood)){
                    tempResult.push(value)
                }
            })}
        }
        setResult(tempResult)
    }

    function handleManage() {
        navigate('/manage')
    }

    return(
        <div>
            <h1 style={{textAlign: "center"}}>Search Food</h1>
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
                    <button onClick={showResult}>Search</button>
                </div>
            </div>
            <div className='search-border'>
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
                    <button onClick={handleManage}>Manage</button>
                </div>
            </div>
            <div>
                <p style={{textAlign: "center"}}>There is found {result.length} results</p>
                {result.map((value, index) => {
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
        </div>
    )
}