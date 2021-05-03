import {useState} from 'react'
import axios from 'axios'

const CreatePost = (props) =>{

    const[title,setTitle] = useState('')
    const[content,setContent] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts`, {title,content},{
            headers: {
                Authorization: props.user.id  
            }
        })
    }       


    return(
        <div>
            <form className='createpostform' onSubmit={submitHandler}>
                <div>
                    <label htmlFor='title'>Title:</label>
                    <input id='title' vlaue={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor='content'>Content</label>
                    <input id='content' value={content} onChange={(e)=>{setContent(e.target.value)}} />
                </div>
                <div>
                    <input type='submit' value="Create the personal post"/>
                </div>
            </form>
        </div>
    )
}

export default CreatePost