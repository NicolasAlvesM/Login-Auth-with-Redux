import {  useRef } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {loginAction} from '../actions/userAction'
import Input from '../components/Input'
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
                    <Input ref={usernameRef}  label='Email address' name='inputEmail' type='email' required/>
                    <Input ref={passwordRef}  label='Password' name='inputPassword' type='password' required/>
                    <div className="checkbox mb-3 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <input type="checkbox" value="remember-me"/>  
                            <span className="small ml-2"> Remember me </span>
                        </div>
                        <Link to="/newAccount" className="small">Create an account</Link>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3">&copy; 1500-2020</p>
                </form>
        </main>
      </div>
    )
}
export default LoginPage