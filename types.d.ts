interface DiscussionForumDataType{
    name: string
    image: string
    time: number
    sector: string
    content: string
    stats:{
        likes: number
        views: number
        comments: number
    }
}

interface MarketStoriesDataType{
    image: string
    title: string
    content: string
}