"use server"

import axios from "axios";


export const getDiscussionForumData = async() => {
    let reqOptions = {
        url: "https://raw.githubusercontent.com/MaorBemdoo/GoIndiaStocks-Assignment-Data/main/discussion-forum.json",
        method: "GET",
    }
    try{
        let response = await axios.request(reqOptions);
        return {
            success: true,
            data: response.data
        }
    }catch(err){
        console.log(err)
        return {
            success: false,
            data: err
        }
    }
}

