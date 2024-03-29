import { getDiscussionForumData } from "@/utils/getDiscusssionForumData"
import DiscussionForum from "./DiscussionForum"
import MarketStories from "./MarketStories"
import { getMarketStoriesData } from "@/utils/getMarketStoriesData"

const ResponsiveTab = async() => {

    const discussionForumData = await getDiscussionForumData()
    const marketStoriesData = await getMarketStoriesData()

    return (
        <div role="tablist" className="responsive-tabs">
            <input type="radio" name="tab" role="tab" className="tab mobile:before:left-0" aria-label="Discussion Forum" defaultChecked/>
            <DiscussionForum discussionForumData={discussionForumData}/>

            <input type="radio" name="tab" role="tab" className="tab mobile:before:right-0" aria-label="Market Stories" />
            <MarketStories marketStoriesData={marketStoriesData}/>
        </div>
    )
}
export default ResponsiveTab