import DiscussionForum from "./DiscussionForum"
import MarketStories from "./MarketStories"

const ResponsiveTab = () => {
    return (
        <div role="tablist" className="responsive-tabs">
            <input type="radio" name="discussion-forum-tab" role="tab" className="tab uppercase" aria-label="Discussion Forum" />
            <DiscussionForum />

            <input type="radio" name="market-stories-tab" role="tab" className="tab uppercase" aria-label="Market Stories" />
            <MarketStories />
        </div>
    )
}
export default ResponsiveTab