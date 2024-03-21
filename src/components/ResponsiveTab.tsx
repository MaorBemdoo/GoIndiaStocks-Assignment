import { getDiscussionForumData } from "@/utils/getDiscusssionForumData"
import DiscussionForum from "./DiscussionForum"
import MarketStories from "./MarketStories"
import { getMarketStoriesData } from "@/utils/getMarketStoriesData"

const ResponsiveTab = async() => {

    const discussionForumData = await getDiscussionForumData()
    const marketStoriesData = await getMarketStoriesData()

    return (
        <div role="tablist" className="responsive-tabs">
            <input type="radio" name="discussion-forum-tab" role="tab" className="tab uppercase" aria-label="Discussion Forum" />
            <DiscussionForum discussionForumData={discussionForumData}/>

            <input type="radio" name="market-stories-tab" role="tab" className="tab uppercase" aria-label="Market Stories" />
            <MarketStories marketStoriesData={marketStoriesData}/>
        </div>
    )
}
export default ResponsiveTab