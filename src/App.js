import React, { useState } from "react";
import Post from "./components/posts/Post";
import './App.css';
import Stories from "./components/storie/Stories";
import {BiChevronRight, BiChevronLeft} from "react-icons/bi";
import {useRef} from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Perfil from "./components/sidebar/images/fotoperfilschernos.jpg";


function App() {
  const [posts, setPosts] = useState([
    {
      perfil: "https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_200_200/0/1591018493674?e=2147483647&v=beta&t=OCAyyAl2Oaj5nbyvxltzVwjGHBg1RJlwI3zQlBZnvu4",
      username: "instituto.proa",
      caption: "Transforme seu futuro, acesse: www.proa.org.br e venha ser um Proane!",
      imageUrl:
        "https://www.proa.org.br/wp-content/uploads/2022/01/Proa_Carrossel30_Story_1.jpg",
    },
    {
      perfil: "https://media-exp1.licdn.com/dms/image/C4D03AQFp2_Y7qRq2Ng/profile-displayphoto-shrink_200_200/0/1517465523742?e=1657152000&v=beta&t=pZUT_r03FQx06-DP5ZJOyTtj6NvY1d_tGfewySlxaYs",
      username: "gab.augusto",
      caption: "Huuuuum, olhem esse bolo de cenoura maravilhoso que fiz para os meus alunos da equipe 3.",
      imageUrl:
        "https://www.tecnonutrireceitas.com.br/central/Content/handlers/Receita.ashx?id=80707&tipo=r&default=s",
    },
    {
      perfil: "https://pbs.twimg.com/profile_images/1308736588755726336/TP9_M6oV_400x400.jpg",
      username: "wanted_ind",
      caption: "Novas estampas das nossas camisetas classic clica no link na bio e garanta a sua, corre que o estoque é limitado!",
      imageUrl:
        "https://wantedind.com/wp-content/uploads/2021/06/HOLOG-PRETA-5-scaled.jpg",
    },
    {
      perfil: "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/08/legiao_5BscVaJ_S6p7.jpg.jpeg",
      username: "MARVEL",
      caption: "Acompanhe o estranho nessa nova fase, Doutor Estranho no Multiverso da Loucura já está disponivel nos cinemas",
      imageUrl:
        "https://pbs.twimg.com/media/FQEiiBGWYAYJyPD?format=jpg&name=900x900",
    },
  ]);

  const storiesRef = useRef(null);
  const [showLeft, setShowleft ] = useState(false);
  const [showRight, setShowright ] = useState(true);

  const onScroll = ()=> {
    if (storiesRef.current.scrollLeft == 
        storiesRef.current.scrollWidth - 
        storiesRef.current.clientWidth) {
          setShowright(false);
    }
    else{
      setShowleft(true);
    }
    if(storiesRef.current.scrollLeft > 0){
      setShowleft(true);
    }
    else{
      setShowleft(false);
    }
  };

  const [stories, setStories] = useState([
  {
    id: 1,
    username: "carrot_cake",
    profImg: "https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg"
  },
  {
    id: 1,
    username: "mk_b_jordan",
    profImg: "https://i.pinimg.com/originals/04/6d/07/046d074e20c0e30312d7ea7ae3b77798.jpg"
  },
  {
    id: 1,
    username: "instituto.pro...",
    profImg: "https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_200_200/0/1591018493674?e=2147483647&v=beta&t=OCAyyAl2Oaj5nbyvxltzVwjGHBg1RJlwI3zQlBZnvu4"
  },
  {
    id: 1,
    username: "wanted_ind",
    profImg: "https://pbs.twimg.com/profile_images/1308736588755726336/TP9_M6oV_400x400.jpg"
  },
  {
    id: 1,
    username: "cortes.cu...",
    profImg: "https://yt3.ggpht.com/j3VNPaAZbHJnHATDYtqjMNW21HbYGvwYXXPehQF1BBvNAXyEO5GIZssbQDj79UARVSvE-Utb1Q=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 1,
    username: "gustavo__a...",
    profImg: "https://cdn.discordapp.com/attachments/710371433657925673/969110720258129940/unknown.png"
  },
  {
    id: 1,
    username: "MARVEL",
    profImg: "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/08/legiao_5BscVaJ_S6p7.jpg.jpeg"
  },
  {
    id: 1,
    username: "kingjames",
    profImg: "https://res.cloudinary.com/teepublic/image/private/s--Oy-7hOZl--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1616331885/production/designs/20428149_0.jpg"
  },
  {
    id: 1,
    username: "gab.augustoz",
    profImg: "https://media-exp1.licdn.com/dms/image/C4D03AQFp2_Y7qRq2Ng/profile-displayphoto-shrink_200_200/0/1517465523742?e=1657152000&v=beta&t=pZUT_r03FQx06-DP5ZJOyTtj6NvY1d_tGfewySlxaYs"
  },
  {
    id: 1,
    username: "leagueoflegendsbrasil",
    profImg: "https://pbs.twimg.com/profile_images/1520037599800434688/lwQyiyRi_400x400.jpg"
  },
  {
    id: 1,
    username: "netflixbrasil",
    profImg: "https://yt3.ggpht.com/ytc/AKedOLSGvtkTBgaXkmMgyvSy10FiiI2ld6B98OUgmoL6Aw=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 1,
    username: "casimiro",
    profImg: "https://s2.glbimg.com/7XjkpAoAQJAn5wdoXQzBpJHYBpU=/0x0:1024x683/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/D/b/46ilqtRYKn5Dxqn3asig/casimiro-miguel-1024x683.jpg"
  },
  {
    id: 1,
    username: "offduzz",
    profImg: "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/9/9/b/2/99b2cf9117f703f6bb080a213574c4dc.jpg"
  },
  {
    id: 1,
    username: "sidokapriv",
    profImg: "https://portalpopline.com.br/wp-content/uploads/2021/10/sidoka.jpg"
  },
  {
    id: 1,
    username: "yunkvino",
    profImg: "https://images.genius.com/81f053f6a4e6f9154304c67338c6e1a2.1000x1000x1.png"
  },
  {
    id: 1,
    username: "igorkuwahara",
    profImg: "https://i.scdn.co/image/ab6761610000e5eb8a1f9b900d52db57740b2b4e"
  },
  {
    id: 1,
    username: "raffa_moreira",
    profImg: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO2F9hQt-large.jpg"
  },
  {
    id: 1,
    username: "filipedeschamps",
    profImg: "https://yt3.ggpht.com/ytc/AKedOLTnTjoDN70zAxQqnSOBfj9RxVQ5H0HMZXciBQHY=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 1,
    username: "gabrielpato",
    profImg: "https://yt3.ggpht.com/ytc/AKedOLQUcQS1mTniDVrcZNsWLr15VwPCc-VGVPEXZVaaBA=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 1,
    username: "gustavoguanabara",
    profImg: "https://pbs.twimg.com/profile_images/961605799830347776/Oy9Amu3w_400x400.jpg"
  },
  {
    id: 1,
    username: "cursoemvideo",
    profImg: "https://yt3.ggpht.com/ytc/AKedOLRIYqffphLkoTlUA-hlcySXppGOpDgcAFjLaiB2gg=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 1,
    username: "aluraonline",
    profImg: "https://www.alura.com.br/assets/img/alura-share.1647533642.png"
  },
  {
    id: 1,
    username: "coisadenerd",
    profImg: "https://pbs.twimg.com/profile_images/1171681163259215872/aCs2RBTX_400x400.jpg"
  },
  {
    id: 1,
    username: "nilmoretto",
    profImg: "https://storage.googleapis.com/ares-profile-pictures/hd/nilmoretto-7c2f229daef01421210f30a12de03614_hd.jpg"
  },
  {
    id: 1,
    username: "jovemnerd",
    profImg: "https://pbs.twimg.com/profile_images/572815283417407488/dpENC2FJ_400x400.jpeg"
  },
  {
    id: 1,
    username: "manualdomundo",
    profImg: "https://criadoresid.com/wp-content/uploads/2016/10/criadoresid_manual-do-mundo_canal-1.jpg"
  },
  {
    id: 1,
    username: "petjordan",
    profImg: "https://img.analisa.io/instagram/profpic/194418811_969875543782421_8378710368309012837_n.jpg"
  },
  {
    id: 1,
    username: "dankicodeoficial",
    profImg: "https://media-exp1.licdn.com/dms/image/C4E0BAQGAb7NJOVCboA/company-logo_200_200/0/1618322236178?e=2147483647&v=beta&t=YogwVJ9H_amP_HnOIOMkyoyUmBPPiV9I6GfsBKgW4wg"
  },
  ]);

  return (
    <div className="app">
      
      <div className="app__header">
        <div className="app__headerWrapper">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo" title="Instagram original logo"
          />
            
            <input className="search" type="text" placeholder=" Pesquisar"></input>
          <div className="app__headerButtons">
            <a href="#" className="header__home"><svg height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path></svg></a>
            <a href="#" className="header__home"><svg height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path><path d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z" fill-rule="evenodd"></path></svg></a>
            <a href="#" className="header__home"><svg height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg></a>
            <a href="#" className="header__home"><svg height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg></a>
            <a href="#" className="header__home"><svg height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></a>
            <a href="#"><img className="header__home rounded-full" src={Perfil}/></a>
          </div>
        </div>
      </div>
        <div>
          <Sidebar />
        </div>
        
        <div className="relative pt-2">
          <div className="flex bg-white scrollbar-hide scroll-smooth overflow-x-scroll"
            onScroll={onScroll}
            ref={storiesRef}
          >
          {stories.map((stories) => (
            <Stories 
              username={stories.username}
              profImg={stories.profImg}
            />
          ))}
          </div>
            <div className=" absolute w-full top-5 p-4 z-10 flex items-center justify-between">
                <button 
                  onClick={() => {
                      (storiesRef.current.scrollLeft = 
                      storiesRef.current.scrollLeft - 400 )
                    }}
                  >
                  <BiChevronLeft className={`cursor-pointer drop-shadow-lg bg-white
                   tex-gray-400 w-7 h-7 rounded-full 
                   ${showLeft ? "visible" : "invisible"}`}
                  />
                </button>
                <button 
                  onClick={() => {
                      (storiesRef.current.scrollLeft = 
                      storiesRef.current.scrollLeft + 400 )
                  }}
                >
                 <BiChevronRight className={`cursor-pointer drop-shadow-lg bg-white 
                 tex-gray-400 w-7 h-7 rounded-full ${showRight ? "visible" : "invisible"}`}  />
              </button>
            </div>
        </div>  

        <div className="timeline">
          {posts.map((post) => (
            <Post
              perfil={post.perfil}
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
    </div>
  );
}

export default App;
