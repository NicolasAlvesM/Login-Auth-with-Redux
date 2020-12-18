import AppRoutes from './appRoutes'
import AuthRoutes from './authRoutes'
import {useDispatch, useSelector} from 'react-redux'
import api from '../services/api'
import {loginAction} from '..//actions/userAction'
import { useEffect } from 'react'
function Routes(){
    const dispatch = useDispatch()
    useEffect(()=>{
        const dados = JSON.parse(localStorage.getItem('user'))

        if(dados){
            const {token} = dados
            api.defaults.headers['Authorization']=`Bearer ${token}`
            dispatch(loginAction(dados))
        }

    },[dispatch])

    const {token}=useSelector(status=>status.login)
    return (token ? <AppRoutes/> : <AuthRoutes/>)

}
export default Routes