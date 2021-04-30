import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return(
        <div className='navBar'> 
        <Link to ='/'>Home</Link>
        {'    |    '}
        {props.user.id ?
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