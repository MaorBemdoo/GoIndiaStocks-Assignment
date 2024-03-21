export const getDiscussionForumData = async() => {
    try{
        let response = await fetch("https://raw.githubusercontent.com/MaorBemdoo/GoIndiaStocks-Assignment-Data/main/discussion-forum.json")
        return response.json()
    }catch(err){
        console.log(err)
    }
}

