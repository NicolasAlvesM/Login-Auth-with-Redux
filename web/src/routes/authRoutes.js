import {Switch,BrowserRouter,Route, Redirect} from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
function AuthRoutes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" component={LoginPage}/>
            <Route path="/dashboard">
                <Redirect to="login"/>
        </Route>
        </Switch>
        </BrowserRouter>
    )
}
export default AuthRoutes