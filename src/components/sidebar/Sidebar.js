import React, {useState} from "react";
import './Sidebar.css';
import Foto from'./images/fotoperfilschernos.jpg';
import Recomendados from './Recomends';


function Sidebar({}) {
    const [sidebar, setSidebar] = useState ([
        {
          fotoRecomendados: "https://miro.medium.com/fit/c/176/176/0*PBlCNCw6YheDhO-o.",
          userRecomendados: "auroraseles",
        },
        {
          fotoRecomendados: "http://www.martaroberta.com.br/treinamentos_webdesign/wp-content/uploads/2022/03/marta-roberta.jpg",
          userRecomendados: "martarobertadev",
        },
        {
        fotoRecomendados: "https://media-exp1.licdn.com/dms/image/C5603AQFr0oLzwT4szA/profile-displayphoto-shrink_200_200/0/1516585380823?e=1654732800&v=beta&t=hr7AL9FO0xR_2Jw53yV2sXsXQT_Ydejlu4rvwf4SMVE",
        userRecomendados: "rosanibertelliamat",
        },
        {
        fotoRecomendados: "https://media-exp1.licdn.com/dms/image/C4E03AQEMFO6yMCYjaQ/profile-displayphoto-shrink_200_200/0/1639491349201?e=1657152000&v=beta&t=4_6Lmc0WcJ9i3Prg3hESaSIgHOL6x3axkrorGWE27Oo",
        userRecomendados: "alinidalmagro",
        },
        {
        fotoRecomendados: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnKkUc26om2LF18JhRJ4_SEgNQpOHqfmy74w8FAdhQfC_sja3TBMiGkRLAe7Gxxws&usqp=CAU",
        userRecomendados: "adrianaparravano",
        }
        ]);
    return(
        <div className="birijon">
            <div className="flex h-15 justify-around  p-[5px] pt-[30px]">
                <img className="w-14 h-14 rounded-full" src={Foto} />
                <div className="pt-[10px]">
                    <a>gustavoo__amorim</a>
                    <p className="nome">Gustavo Amorim</p>
                </div>
                <div className="pt-[20px] w-9 h-9 pl-8 text-sky-400 font-bold text-xs">
                    <a href="#">Mudar</a>
                </div>
            </div>
            <div className="flex justify-between w-80 p-[15px] pt-[20px]">
                <p className="text-[#8e8e8e] font-semibold">Sugestões para você</p>
                <a className="text-xs text-[#262626] pl-15 font-semibold">Ver Tudo</a>
            </div>
            <div>
            {sidebar.map((sidebar) => (
                    <Recomendados 
                    fotoRecomendados={sidebar.fotoRecomendados}
                    userRecomendados={sidebar.userRecomendados}
                    />
                ))}
            </div>
            <div className="flex w-80 justify-start pt-10 pl-5 h-32">
                <div className="flex">
                    <a href="#" className="text-xs text-[#C7C7C7] font-normal">Sobre . Ajuda . Imprensa . API . Carreiras <br />
                        Privacidade . Termos . Localizações . Contas Principais <br />
                        Hashtags . Idioma <br /><br /><br />
                        © 2022 INSTAGRAM FROM GUTÓLA MANEIRO

                    </a> 
                </div>
            </div>
        </div> 
    );
}

export default Sidebar;

