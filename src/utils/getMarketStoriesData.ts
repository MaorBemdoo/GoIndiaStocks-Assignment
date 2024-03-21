export const getMarketStoriesData = async() => {
    try{
        let response = await fetch("https://raw.githubusercontent.com/MaorBemdoo/GoIndiaStocks-Assignment-Data/main/market-stories.json")
        return response.json()
    }catch(err){
        console.log(err)
    }
}