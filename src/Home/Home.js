import "./Home.css"
import { useNavigate } from 'react-router-dom';
export default function Home()
{
    let navigate = useNavigate();
    function navigateZone() {
        navigate('/zone')
    }

    function navigateRegister() {
        navigate('/register')
    }

    function navigateSearch() {
        navigate('/search')
    }

    return(
        <div>
            <h1 className='home-title'>Kitchen Inventory Management</h1>
            <div className='home-button-set'>
                <button className='home-button1' onClick={navigateZone}>Zone</button>
                <button className='home-button1' onClick={navigateRegister}>Food Register</button>
                <button className='home-button1' onClick={navigateSearch}>Food Search</button>
            </div>
        </div>
    )
}