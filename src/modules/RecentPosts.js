import React, {useState, useEffect} from "react";

function RecentPosts(){
    const[data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async() =>{
      
        if(data == null){
          try{
            const response = await fetch('http://pi.samthings.xyz/api/recentPosts');
            if(!response.ok){
                console.error('Error in loading posts: ');
            }
            const jsonData = await response.json();
            setData(jsonData)
        }catch(error){
            console.error('Error in loading posts: ',error)
        }
      }
    }   

    return(<div>
        {data ? (
          <ul>
            {data.map((item) => (<div key={item.id}><p><h3><a href={item.post_link}>  {item.post_title} </a></h3></p><i> {item.category} </i></div>))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}

export default RecentPosts;

