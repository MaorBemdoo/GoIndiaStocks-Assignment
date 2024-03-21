import { getDiscussionForumData } from "@/actions/getDiscusssionForumData"
import Image from "next/image"
import { CgEye } from "react-icons/cg"
import { FaRegHeart } from "react-icons/fa6"
import { FiMessageSquare, FiShare2 } from "react-icons/fi"

const DiscussionForum = async() => {

  const data = await getDiscussionForumData()

  return (
    <div>
      {
        data.success ?
          data.data.map(({ name, image, time, sector, content, stats }: DiscussionForumDataType) => {
            <div className="p-2 flex justify-between gap-2">
              <Image src={image} alt={`${name} profile picture`} className="w-24 rounded-full"/>
              <div>
                <div>
                  <p>{name}</p>
                  <div>Sector {sector}</div>
                </div>
                <div>{content}</div>
                <div>
                  <div>
                    <FaRegHeart />
                    {stats.likes}k
                  </div>
                  <div>
                    <CgEye />
                    {stats.views}k
                  </div>
                  <div>
                    <FiMessageSquare />
                    {stats.comments}k Comments
                  </div>
                  <div>
                    <FiShare2 />
                    Share
                  </div>
                </div>
              </div>
              <p className="text-blue-500">{time} min ago</p>
            </div>
          })
        : 
        <div className="text-2xl grid place-items-center text-center">
          An Error Occured
          <button className="btn">Try Again</button>
        </div>
      }
    </div>
  )
}
export default DiscussionForum