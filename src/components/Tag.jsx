import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// 0arhVfsb3YlMiO45otY4PBfuGqcfGvWS

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

export default function Tag() {

  const [tag, setTag] = useState("Car")
  // const [gif, setGif] = useState("")
  // const [showSpinner, setShowSpinner] = useState(false)

  // async function fetchData(){
  //   setShowSpinner(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag = ${tag}`;
  //   const {data} = await axios.get(url)
  //   const imageSource = data.data.images.downsized_large.url
  //   setGif(imageSource)
  //   console.log(imageSource)
  //   setShowSpinner(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])

  const {gif, showSpinner, fetchData} = useGif(tag);

  function clickHandler(){
    fetchData(tag);
  }

  function changeHandler(e){
    setTag(e.target.value)
  }

  return(
    <div className="w-1/2 bg-blue-300 rounded-lg border border-black flex flex-col mt-[15px] items-center gap-y-5">
      <h1 className="text-2xl uppercase underline font-bold mt-[15px]">Random GIF</h1>

      {showSpinner ? (<Spinner/>) : <img src={gif} alt="" width={450}/>}

      <input 
        type="text" 
        className="w-10/12 py-5 mb-[3px] text-center text-lg"
        onChange={changeHandler} 
        value={tag}
      />

      <button className="w-10/12 bg-yellow-50 py-5 mb-[20px] text-lg" onClick={clickHandler}>Generate</button>
    </div>

  ) ;
}
