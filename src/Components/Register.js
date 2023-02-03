import {useState} from 'react'
import {useAuth} from '../context/authContext'
import {Link, useNavigate} from 'react-router-dom';
import { Alert } from './Alert';

export function Register() {

  const [user, setUser] = useState({
    email:'',
    password:'',
  });

  const {singup} = useAuth() //De ese objeto quiero obtener el signup
  const navigate = useNavigate()
  const [error, setError] = useState();

  const handleChange = ({target:{name,value}})=>
    setUser({...user,[name]:value})
  
  const handleSubmit = async (e) => {
    e.preventDefault() 
    setError('')
    try {
      console.log('Paso el register')
      await singup(user.email, user.password)
      navigate("/")
    } catch (error) {
      console.log('No paso el register')
      setError(error.message)
    } 
  }
    return (
      <div className='w-full max-w-xs m-auto'>
       {error && <Alert message={error}/>}
        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>

            <label htmlFor="email" className='block text-gray-700 text-sm font-bold my-2'>Email</label>
            <input type='email' name='email' placeholder="yourEmail@gmail.com" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>

          </div>

          <div className='mb-4'>
            <label htmlFor="password" className='block text-gray-700 text-sm font-bold my-2'>Password</label>
            <input type='password' name='password' id='password' placeholder='******' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
          </div>

          <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Register</button>
      </form>
      <p className='my-4 text-sm flex justify-between px-3'>Have an Account? <Link to="/login">Login</Link> </p>

      </div>
    )
  }
  