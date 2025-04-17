import Link from "next/link";
import Style from "./profile.module.css"
export default function statistiq(){
    return(
        <div className={Style.main}>
            <section>
                <div className={Style.block}>
                    <h2>les post cree :</h2>
                    <span>0</span>
                </div>
                <div className={Style.block}>
                    <h2>Les post actives :</h2>
                    <span>0</span>
                </div>
                <div className={Style.block}>
                    <h2>Nombers des candidat :</h2>
                    <span>0</span>
                </div>
            </section>

            <section><Link href={"./Enterprise/anonnce-cree"}><button>cree une annonce</button></Link></section>

        </div>
    );
}