import axios from "axios";
import { useEffect, useState } from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag = ${tag}`;


const useGif = (tag) => {
    // const [tag, setTag] = useState("Car")
    const [gif, setGif] = useState("")
    const [showSpinner, setShowSpinner] = useState(false)

    async function fetchData(tag) {
        setShowSpinner(true)
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url)
        const imageSource = data.data.images.downsized_large.url
        setGif(imageSource)
        console.log(imageSource)
        setShowSpinner(false);
    }

    useEffect(() => {
        fetchData('Car');
    }, [])

    return{gif,showSpinner,fetchData}

};

export default useGif;
