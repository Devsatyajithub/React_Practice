//import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import React from 'react'

function Github() {
    const data = useLoaderData()
    //  const [data, setData] = useState([])
    //  useEffect(() => {
    //   fetch('https://api.github.com/users/hiteshchoudhary')
    //   .then(response => response.json())
    //   .then(data => {
    //      console.log(data);
    //      setData(data)
    //   })
    //  }, [])
     if (!data) {
         return <div>Loading...</div>; // or any loading indicator/message
       }
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}