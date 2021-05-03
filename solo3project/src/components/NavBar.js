import {Link} from 'react-router-dom'
// import { useContext } from 'react'
// import { UserContext } from '../contexts/UserContext'


const NavBar = (props) => {
    // const [user, setUser] = useContext(UserContext)

  

    return(
        <div className='navBar'> 
        <Link to ='/'>Home</Link>
        {'    |    '}
        
        {/* {props.user ? */}
        <>
            <span 
            className='logout'
            onClick={()=>{
                localStorage.removeItem('userId')
                props.setUser({})
            }}
            >Logout</span>
        
            {'    |    '}
            <Link to ='/profile'>Profile</Link>
            {'    |    '}
            <Link to='/posts'>Create Post</Link>
        </>
        : 
        <>
            <Link to ='/login'>Login</Link>
            {'    |    '}
            <Link to='/singup'>Sing-Up</Link>
            {'    |    '}
        </>
     } 
        </div>

    )
}

export default NavBar