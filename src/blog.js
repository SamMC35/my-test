import React from "react";
import './Blog.css'
import { useParams } from "react-router-dom";
import Axios from'axios'
import ReactMarkdown from "react-markdown"



function Blog(){

    const[data, setData] = React.useState('');
    const{post} = useParams();
    React.useEffect(() => {
        fetchData(post);
    }, []);
    
    const fetchData = async(post) =>{
      
        
          try{
            const response = await Axios.get('http://localhost:3001/blogs/'+post, {responseType: Blob});
          
           console.log(response.data);
           setData(response.data)

        }catch(error){
            console.error('Error in loading posts: ',error)
        }
      }
      

    console.log(data)
   
    return (<ReactMarkdown>{data}</ReactMarkdown>)
}

export default Blog;