import React from 'react'
import {wilaya} from "@/app/file_json/wilaya"
import style from "./enter.module.css"
export default function search() {
  return (
    <div className={style.search_bar}>
    <input type="text" name="search-bar" placeholder="nom d'enterprise" />
    <input type="text" name='secteur' placeholder="secteur d'activite" />
    <select name="wilaia" id="wilaia">
        <option value="" >wilaya</option>
        {wilaya.map((wilaya) =>  (<option key={wilaya.id} value={wilaya.name}> {wilaya.name}</option>))}
    </select>
    <button>search</button>
</div>
  )
}

