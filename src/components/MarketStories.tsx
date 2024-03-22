"use client"

import { getMarketStoriesData } from "@/utils/getMarketStoriesData"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

const MarketStories = ({ marketStoriesData }: {marketStoriesData: MarketStoriesDataType[]}) => {
  const {data, isSuccess, isLoading, refetch} = useQuery({
    queryKey: ["marketStories"],
    queryFn: getMarketStoriesData,
    initialData: marketStoriesData
  })

  return (
    <div className="relative mobile:tab-content mobile:col-end-3 mobile:bg-base-100 mobile:border-base-300 mobile:rounded-box mobile:p-6" role="tabpanel">
      {
        isSuccess ?
          data.data.map(({ image, title, content}: MarketStoriesDataType) => {
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