import React from 'react'
import alternateImage from '../assets/alternateImage.jpg'

const NewsItems = (props) => {
    return (
        <div className={`${props.mode}` === "light" ? "card h-[25rem] bg-blue-100 w-full min-[525px]:w-2/3 md:w-72 lg:w-72 mb-4 shadow-xl shadow-slate-900 border rounded-lg border-gray-200" : "card h-[25rem] bg-gray-800 w-full min-[525px]:w-2/3 md:w-72 lg:w-72 mb-4 border shadow-xl shadow-purple-900 rounded-lg border-gray-200"}>
            <div className="bg-cover bg-no-repeat img-area rounded-lg h-1/2 hover:scale-95" style={{ backgroundImage: props.imageUrl ? `url(${props.imageUrl})` : `url(${alternateImage})` }}></div>
            <div className={`${props.mode}` === "light" ? "title text-black font-bold m-2" : "title text-white font-bold m-2"}><h2>{props.title ? props.title.split(" ").slice(0, 7).join(" ") + "..." : props.title}</h2></div>
            <div className={`${props.mode}` === "light" ? "max-[325px]:hidden description text-black m-2 text-sm" : "max-[325px]:hidden description text-white m-2 text-sm"}><h3>{props.description ? props.description.split(" ").slice(0, 10).join(" ") + "..." : props.description}</h3></div>
            <p className='text-xs m-2 text-gray-400'>Published by {props.author ? props.author : "Unknown"} on {new Date(props.date).toDateString()}</p>
            <a href={props.url} target='_blank'><button className={`${props.mode}` === "light" ? 'text-white button rounded-lg p-2 font-mono bg-blue-400 hover:bg-blue-300 mx-2' : 'text-white button rounded-lg p-2 font-mono bg-purple-900 hover:bg-purple-700 mx-2'}>Read More</button></a>
        </div>
    )
}

export default NewsItems
