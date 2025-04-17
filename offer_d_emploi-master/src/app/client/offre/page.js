import Offre from "./offre";
import style from "./offre.module.css"
import Search from "@/app/component/search-bar/search-bar"
import SearchAV from "./search_av"
export default function page(){
    return (
      <>
        <div className={style.page}>

          {/* <Search/> */}
        {/* <SearchAV/> */}

        
          <Offre/>
        </div>
       </> 
      
    );
}