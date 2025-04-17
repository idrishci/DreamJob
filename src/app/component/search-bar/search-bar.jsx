import style from "./search.module.css"
import  {wilaya} from "../../file_json/wilaya.js"

export default function page(){
    return (
        <div className={style.search_bar}>
        <input type="text" name="search-bar" placeholder="motcle,post" />
        <select name="wilaia" id="wilaia">
            <option value="" >wilaya</option>
            {wilaya.map((wilaya) =>  (<option key={wilaya.id} value={wilaya.name}> {wilaya.name}</option>))}
        </select>
        <button>search</button>
    </div>
        // <div className={style.search_bar}>
        //     <input type="text" name="search-bar" placeholder="motcle,post" />

        //     {/* <select name="wilaia" id="wilaia">
        //         <option value="" >wilaya</option>
        //         {wilaya.map((wilaya) =>  (<option key={wilaya.id} value={wilaya.name}> {wilaya.name}</option>))}
        //     </select> */}

        //        <select name="wilaya" id="" onChange={handlelechange}>
        //                 <option value="">Region</option>
        //                  {wilaya.map((wilaya) =>  (<option key={wilaya.id}  > {wilaya.name}</option>))}
        //             </select>

        //     <button>search</button>
        // </div>
    );
}