"use client"

import { getDiscussionForumData } from "@/utils/getDiscusssionForumData"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { CgEye } from "react-icons/cg"
import { FaRegHeart } from "react-icons/fa6"
import { FiMessageSquare, FiShare2 } from "react-icons/fi"

const DiscussionForum = ({ discussionForumData }: {discussionForumData: DiscussionForumDataType[]}) => {
  
  const {data, isSuccess, isLoading, refetch} = useQuery({
    queryKey: ["discussionForum"],
    queryFn: getDiscussionForumData,
    initialData: discussionForumData
  })

  return (
    <div className="relative w-full mobile:tab-content mobile:col-end-3 mobile:bg-base-100 mobile:border-base-300 mobile:rounded-box mobile:p-6" role="tabpanel">
      {
        isSuccess ?
          data.data.map(({ name, image, time, sector, content, stats }: DiscussionForumDataType) => {
            <div className="p-2 flex justify-between gap-2 w-full">
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
        : isLoading ? 
        <div className="loading loading-spinner loading-lg"></div>
        :
        <div className="text-2xl grid desktop:justify-start mobile:place-items-center text-center">
          An Error Occured
          <button className="btn" onClick={() => refetch()}>Try Again</button>
        </div>
      }
    </div>
  )
}
export default DiscussionForum