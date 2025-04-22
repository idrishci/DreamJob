
import style from "./profile.module.css"
import Profile from "./profile"

export default function Home() {
const id=1;
  return (
    <section className={style.home} >
      <Profile id={id}/>
       
     </section>
  );
}
