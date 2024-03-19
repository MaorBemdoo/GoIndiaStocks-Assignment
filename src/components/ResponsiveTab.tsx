import DiscussionForum from "./DiscussionForum"
import MarketStories from "./MarketStories"

const ResponsiveTab = () => {
    return (
        <div role="tablist">
            <input type="radio" name="discussion-forum-tab" role="tab" className="tab desktop:cursor-text" aria-label="Discussion Forum" />
            <DiscussionForum />

            <input type="radio" name="market-stories-tab" role="tab" className="tab desktop:cursor-text" aria-label="Market Stories" />
            <MarketStories />
        </div>
    )
}
export default ResponsiveTab