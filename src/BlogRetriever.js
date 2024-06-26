import React from "react";
import './App.css'
import { useParams } from "react-router-dom";
import Axios from'axios'
import ReactMarkdown from "react-markdown"

function BlogRetriever(){
    const[data, setData] = React.useState('');
    const{post} = useParams();
    React.useEffect(() => {
        fetchData(post);
    }, []);
    
    const fetchData = async(post) =>{
      
        
          try{
            const response = await Axios.get('https://pi.samthings.xyz/api/blogs/'+post, {responseType: Blob});
            // const response = await Axios.get('http://localhost:3001/blogs/'+post, {responseType: Blob});
          
           console.log(response.data);
          //  const markdownContent = response.data.replace(/\n/g, '<br>\n');
           setData(response.data)

        }catch(error){
            console.error('Error in loading posts: ',error)
        }
      }
      
      // const result = remark().use(remarkReact).processSync(data).result;

    // console.log(data)

  
   
    return (<div dangerouslySetInnerHTML={{__html: data}} />)
}

export default BlogRetriever;