import react from "react"
import {useState, useEffect} from "react";

function App (){
 const [post, setPost]= useState([])
  useEffect(
    ()=>{

      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response=>response.json())
      .then(data=> setPost(data))
      .catch((err)=>{
          console.log(err)
      })

    }
  )

  return(
    <>
     <section>
      {
        post.map((post)=>(
          <>
           <div key={post.id} className="">
             <h1>{post.title}</h1>
             <p>{post.body}</p>
           </div>
          </>
        ))
      }
     </section>
    </>
  )
}

export default App;