import style from "./search.module.css";

import   Photo from "./photo";
import Title from "./post-title";
export default function search(){
    return(
        <div className={style.search}>
           
            <Title />
            <Photo/>
            
            

        </div>
    );
}