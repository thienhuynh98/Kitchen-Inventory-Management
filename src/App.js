import Zone from "./Zone/Zone"
import RegisterFood from "./RegisterFood/RegisterFood";
import Home from "./Home/Home";
import Search from "./Search/Search";
import Manage from "./Manage/Manage";
import Shopping from "./Shopping/Shopping";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from "react";

function App() {
  const [inputZone, setInputZone] = useState("")
  const [barcode, setBarcode] = useState([])
  const [zone, setZone] = useState([])
  const [color, setColor] = useState('#fff')
  const [temp, setTemp] = useState([])
  const [removeZone, setRemoveZone] = useState("")
  const [verifyColor, setVerifyColor] = useState([]);
  const [store, setStore] = new useState([])
  const [food, setFood] = useState("")
  const [result, setResult] = useState([])
  return (
      <div>
          <Router>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path='/zone'
                         element={<Zone
                             inputZone={inputZone}
                             setInputZone={setInputZone}
                             zone={zone}
                             setZone={setZone}
                             color={color}
                             setColor={setColor}
                             temp={temp}
                             setTemp={setTemp}
                             removeZone={removeZone}
                             setRemoveZone={setRemoveZone}
                             verifyColor={verifyColor}
                             setVerifyColor={setVerifyColor}
                             store={store}
                             setStore={setStore}
                         />}
                  />
                  <Route path='/register'
                         element={<RegisterFood
                             inputZone={inputZone}
                             setInputZone={setInputZone}
                             zone={zone}
                             setZone={setZone}
                             barcode={barcode}
                             setBarcode={setBarcode}
                             store={store}
                             setStore={setStore}
                         />}
                  />
                  <Route path="/search"
                         element={<Search
                             store={store}
                             setStore={setStore}
                             food={food}
                             setFood={setFood}
                             result={result}
                             setResult={setResult}
                         />}
                  />
                  <Route path="/manage"
                         element={<Manage
                             store={store}
                             setStore={setStore}
                             food={food}
                             setFood={setFood}
                             zone={zone}
                             setZone={setZone}
                             result={result}
                             setResult={setResult}
                         />}
                  />
                  <Route
                      path="/shopping"
                      element={<Shopping
                          store={store}
                          setStore={setStore}
                      />}
                  />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
