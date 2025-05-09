import { Poppins } from "next/font/google";
const font= Poppins({ subsets: ["latin"] ,weight:["100","200","300","400","600","700","800","900"] });
import style from "./page.module.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";

export default function RootLayout({children}) {
  return (
   
   <div className={font.className}>
      <Navbar/>
      <section className={style.section} >
      {children}
      </section>
      <Footer/>
       </div> 
      
  );
}