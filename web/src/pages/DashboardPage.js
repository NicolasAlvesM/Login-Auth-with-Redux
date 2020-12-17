import {useDispatch, useSelector} from 'react-redux'
import { logoutAction} from '../actions/userAction'
import { useEffect } from "react"
import {getInfo} from '../actions/dashboardAction'
import api from "../services/api";
import {Button} from 'react-bootstrap'
import '../styles/pages/dashboard.css'
import DualCounter from './Teste';
function DashboardPage(){
    const dispatch = useDispatch()

    const handleLogout = ()=>{
        dispatch(logoutAction())
    }

    useEffect(()=>{
        api.get('/').then(({data})=>{
            console.log(data)
            dispatch(getInfo(data))
        }).catch(err=>{
            dispatch(logoutAction())
        })
    },[dispatch])

    const info = useSelector(status=>status.info)
    return(
        <div id="dashboard-page" className="d-flex flex-column justify-content-between p-5 align-items-center">
            <p className="h1">DASHBOARD</p>
            <span>{info.info}</span>
            <Button onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}
export default DashboardPage