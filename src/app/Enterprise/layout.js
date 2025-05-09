// "use client"
import { Poppins } from "next/font/google";
const font= Poppins({ subsets: ["latin"] ,weight:["100","200","300","400","600","700","800","900"] });
// import "./globals.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import style from "./page.module.css"
// import { useEffect } from "react";
export default function RootLayout({children}) {
  

  return (
    <html lang="en" className={font.className}>
      <head>
        <title>Dream Job</title>
      </head>
      <body >
      <Navbar/>
       <section className={style.section} >
      {children}
      </section>
      <Footer/>
        
      </body>
    </html>
  );
}