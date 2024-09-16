import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: {
    default: 'Next Hero',
    template: '%s | Next Hero'
  },
  description: "Supper powerful Next website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar/>
        
        <div className="min-h-screen">
        {children}
        </div>
        
        <Footer/>
      </body>
    </html>
  );
}
