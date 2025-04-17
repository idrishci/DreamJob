import Profile from "./monprofile/profile"

import style from "./page.module.css"
export default function Home() {
  return (
    <section className={style.home} >
      <Profile/>
       
     </section>
  );
}
