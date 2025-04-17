import { Poppins } from "next/font/google";
const font= Poppins({ subsets: ["latin"] ,weight:["100","200","300","400","600","700","800","900"] });
export default function RootLayout({children}) {
  return (
    <html lang="en">
       <head>
        <title>hi</title>
      </head>
      <body className={font.className}>
fgdiog[dfdfgiofdfpo[sdfodssdpfo]]
      {children}
      </body>
    </html>
  );
}