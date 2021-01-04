import {useDispatch, useSelector} from 'react-redux'
import { logoutAction} from '../actions/userAction'
import { useCallback, useEffect, useState } from "react"
import {fetchCompanies} from '../actions/dashboardAction'
import api from "../services/api";
import {Button} from 'react-bootstrap'
import '../styles/pages/dashboard.css'
// import DualCounter from './Teste';
import { useHistory } from 'react-router-dom';
import Modal from '../components/Modal'

function DashboardPage(){
    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = useCallback(()=>{
        localStorage.clear()
        api.defaults.headers['Authorization']=''
        dispatch(logoutAction())
        history.push('/login')
    },[dispatch,history]) 

    useEffect(()=>{
        dispatch(fetchCompanies())
    },[dispatch])

    const companies = useSelector( status => status.companies )

    const [modalShow, setModalShow] = useState(false);


    return(
        <div id="dashboard-page" className="d-flex flex-column justify-content-between p-5 align-items-center">
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
            <p className="h1">DASHBOARD</p>
            <Button variant="primary" onClick={() => setModalShow(true)}>Add</Button>
            <div className="d-flex container flex-wrap justify-content-between">
            {companies.map((item,i)=>{
                return <div key={i} className="p-1 rounded m-3 bg-info d-flex flex-column align-items-center" style={{width:'30%'}}>
                    <p className="text-wrap">{item.name}</p>
                    <p>{item.cnpj}</p>
                    <p>{item.description}</p>
                </div>
            })}

            </div>
            <Button onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}
export default DashboardPage