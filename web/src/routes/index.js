import AppRoutes from './appRoutes'
import AuthRoutes from './authRoutes'
import {useSelector} from 'react-redux'
function Routes(){
    const {token}=useSelector(status=>status.login)
    return (token ? <AppRoutes/> : <AuthRoutes/>)

}
export default Routes