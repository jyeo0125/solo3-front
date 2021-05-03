import {Link} from 'react-router-dom'
// import { useContext } from 'react'
// import { UserContext } from '../contexts/UserContext'


const NavBar = (props) => {
    // const [user, setUser] = useContext(UserContext)

    console.log(props);

    return(
        <div className='navBar'> 
            <Link to ='/'>Home</Link>
            {'    |    '}
        
        {props.user.id ?
        
            <>
                <span 
             className='logout'
                onClick={()=>{
                props.setUser({})
                localStorage.removeItem('userId')
                }}
               >Logout</span>
        
                {'    |    '}
                <Link to ='/profile'>Profile</Link>
                {'    |    '}
                <Link to='/posts'>Create Post</Link>
                {'    |    '}
                <Link to='/allpost'>All post!</Link>
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