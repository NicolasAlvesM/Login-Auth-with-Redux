import {BrowserRouter,Redirect,Route} from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
function AppRoutes(){
    return(
        <BrowserRouter>
        <Route path='/dashboard' component={DashboardPage}/>
        <Route path="/login">
                <Redirect to="dashboard"/>
        </Route>
        </BrowserRouter>
    )
}
export default AppRoutes