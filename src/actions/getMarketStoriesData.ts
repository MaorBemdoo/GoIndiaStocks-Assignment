"use server"

import axios from "axios";


export const getMarketStoriesData = async() => {
    let reqOptions = {
        url: "https://raw.githubusercontent.com/MaorBemdoo/GoIndiaStocks-Assignment-Data/main/market-stories.json",
        method: "GET",
    }
    let response = await axios.request(reqOptions);
    return response.data;
}