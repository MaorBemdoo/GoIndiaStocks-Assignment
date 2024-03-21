"use client"

import { getMarketStoriesData } from "@/utils/getMarketStoriesData"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

const MarketStories = ({ marketStoriesData }: {marketStoriesData: MarketStoriesDataType[]}) => {
  const {data, isSuccess, isLoading, refetch} = useQuery({
    queryKey: ["discussionForum"],
    queryFn: getMarketStoriesData,
    initialData: marketStoriesData
  })

  return (
    <div>
      {
        isSuccess ?
          data.map(({ image, title, content}: MarketStoriesDataType) => {
            <div className="card">
              <figure><Image src={image} alt={`${title} image`}/></figure>
              <div className="card-body">
                <p className="card-title">{title}</p>
                <p>{content}</p>
              </div>
            </div>
          })
        : isLoading ? 
        <div className="loading loading-spinner loading-lg"></div>
        :
        <div className="text-2xl grid place-items-center text-center">
          An Error Occured
          <button className="btn" onClick={() => refetch()}>Try Again</button>
        </div>
      }
    </div>
  )
}
export default MarketStories