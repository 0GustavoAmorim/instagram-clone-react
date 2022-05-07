import React from "react";
import "./Post.css";
import Coracao from "./images/coracao.png"
import Comentario from "./images/comentario.png"
import Aviao from "./images/dm.png"
import Fav from "./images/fav.png"
import MenuItem from "./images/menuitem.png"
import Toggle from "./Like";


function Post({perfil, username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <img className="foto_perfil_post" src={perfil} />
        <h3>{username}</h3>
        <div>
          <picture>
              <a href="#"><img className="menuItem" src={MenuItem} /></a>
          </picture>
        </div>
      </div>
      {/*  */}
      <img className="post__image" src={imageUrl} alt={caption} title={caption} />
      {/* */}
      <div className="icones" >
        <div className="icons">
          <Toggle />
          <img className="icons-post hover:opacity-50 cursor-pointer" src={Comentario} alt="" />
          <img className="icons-post hover:opacity-50 cursor-pointer" src={Aviao} alt="" />
        </div>
        <div className="icon-fav hover:opacity-50 cursor-pointer">
          <img src={Fav} alt=""/>
        </div>
      </div>
     
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>   
      <a href="#" className="post__vercoments">Ver todos os 30 comentários...</a>

      <div className="post__horas">
          HÁ 3 HORAS
      </div>
      <hr></hr>
      <div className="post__comentar">
        <form action="#" method="post" className="form__coments">
          <svg aria-label="Emoji" className="post__iconComent" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
          <input className="post__coments" type="text" placeholder="Adicionar um comentário..."  />
          <a href="#" className="btn__publicar__escuro">Publicar</a>  
        </form>
      </div>
    </div>
  );
}

export default Post;