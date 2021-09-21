import React , {useState}from 'react'
import axios from 'axios';

function Comments(props) {
    
    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }
    
    const onSubmit = (e) => {
        e.preventDefault();

        const variables = { 
            content: Comment,           
            videoId: props.videoId   
         }

         axios.post('', variables)
        .then(response=> {
            if(response.data.success) {
                console.log('Comment posted successfuly')
            } else {
                alert('Failed to save Comment')
            }
           
        })
    }
    return (
        <div>
     <Video  onSubmit={onSubmit} onClick={onSubmit} onChange={handleChange} />  
            

        </div>
    )
}

export default Comments

