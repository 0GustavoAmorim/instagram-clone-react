import React from "react";
import "./Stories.css";


function Stories({username, profImg}) {
    return(
        <div className="story">
            <div className="p-[4px]">
                <img className="w-14 h-14 border border-red-500 cursor-pointer p-[2px] rounded-full" src={profImg}/>
                <h5 class="nome__usuario" className="text-xs w-16 truncate text-center flex">{username}</h5>
            </div>
        </div>
    );
}
export default Stories;