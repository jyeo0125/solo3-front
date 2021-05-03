import axios from 'axios'
import {Link} from 'react-router-dom'
import{useEffect,useState} from 'react'



const AllPost = (props)=>{

    const [allpost, setAllpost] = useState([])

    const fetchPosts = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts/${props.user.id}`,{
            headers:{
                Authorization:props.user.id
            }
        })
        .then((response)=>{
            // console.log(response.data.post);
            setAllpost(response.data.post)
        })
    }
    
    useEffect(fetchPosts,[])

    return(
        <ul>
        {/* {allpost.map((post)=>{
            return <li key ={post.id}>
                <Link to ='/'>
                {post.title}
                </Link>
            </li> */}
        })}
        </ul>
    )
}

export default AllPost