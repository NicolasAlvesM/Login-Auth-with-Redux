import { useRef } from 'react'
import {useDispatch} from 'react-redux'
import {loginAction} from '../actions/userAction'
import api from '../services/api'
import '../styles/pages/loginPage.css'
function LoginPage(){

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const dispatch = useDispatch()
    
    const handleLogin = async e=>{
        e.preventDefault()
        const {data}=await api.post('/login',{
            username:usernameRef.current.value,
            password:passwordRef.current.value
        })
        
        api.defaults.headers['Authorization']=`Bearer ${data.token}`

        localStorage.setItem('user',JSON.stringify(data))
        dispatch(loginAction(data))
    }
    return (
        <div id="login-page">
            <main className="form-signin">
            <form onSubmit={handleLogin}>
            <img className="mb-4" src="https://static.tildacdn.com/tild3832-6266-4965-b635-373937303531/Chammas_Logo_-_Reduc.svg" alt="" width="100%" height="72"/>
            <h1 className="h2 mb-3 fw-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
            <input ref={usernameRef} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
            <label htmlFor="inputPassword" className="visually-hidden">Password</label>
            <input ref={passwordRef}  type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3">&copy; 2017-2020</p>
            </form>
        </main>
      </div>
    )
}
export default LoginPage