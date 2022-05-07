import React from "react";

function Recomendados({fotoRecomendados, userRecomendados}){

        return( 
            <div className="recomendados flex pl-5 pt-">
                <div className="flex pt-2 items-center w-11/12">
                    <img className="rounded-full w-8 h-8" src={fotoRecomendados}/>
                    <a href="#" className="username pl-3 w-2/3 pr-32 font-medium">{userRecomendados}</a>
                    <div className="no-underline text-sky-400 pl-12 font-bold text-xs z-1">
                        <a href="#" className="seguir">Seguir</a>
                    </div>
                </div>
            </div> 
        );
    }
export default Recomendados;
