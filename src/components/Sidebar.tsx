"use client"

import { useState } from "react";
import { BiSolidDollarCircle, BiSolidMessageDetail } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

const Sidebar = () => {

    const [checkedId, setCheckedId] = useState("discussion-forum")

    return (
        <aside className="bg-slate-300 h-screen text-white w-[30%]">
            <div className="relative h-full bg-blue-950">
                <div className="flex justify-between items-center border-b border-slate-300 px-8 py-4">
                    <div className="flex items-center gap-3">
                        <FaUser className="w-[35px] h-[35px] rounded-b-full" />
                        <h4>Hello, User</h4>
                    </div>
                    <div className="indicator">
                        <span className="indicator-item right-2 top-1 badge-xs badge badge-error"></span>
                        <IoIosNotifications className="w-[35px] h-[35px] cursor-pointer" />
                    </div>
                </div>
                <div className="pt-4 *:cursor-pointer *:py-2 hover:*:bg-slate-600">
                    <div id="discussion-forum" className={`flex items-center justify-between px-2 ${checkedId == "discussion-forum" ? "!bg-slate-900" : ""}`} onClick={(e) => setCheckedId((e.target as HTMLDivElement).id)}>
                        <div className="flex items-center gap-2">
                            <BiSolidMessageDetail className="w-[25px] h-[25px]"/>
                            Discussion Forum
                        </div>
                        ▾
                    </div>

                    <div id="market-stories" className={`flex items-center gap-2 px-2 ${checkedId == "market-stories" ? "!bg-slate-900" : ""}`} onClick={(e) => setCheckedId((e.target as HTMLDivElement).id)}>
                        <BiSolidDollarCircle className="w-[25px] h-[25px]"/>
                        Market Stories
                    </div>

                    <div className="px-4">Sentiment</div>
                    <div className="px-4">Market</div>
                    <div className="px-4">Sector</div>
                    <div className="px-4">Watchlist</div>
                    <div className="px-4">Events</div>
                    <div className="px-4">News/Interview</div>
                </div>
            </div>
            <div className="h-full w-6"></div>
        </aside>
    );
};
export default Sidebar;
