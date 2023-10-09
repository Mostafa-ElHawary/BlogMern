import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { ThemeContextProvider } from "../context/ThemeContext";
import "./globals.scss";
import { Inter } from "next/font/google";
import ThemeProvider from "@/provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "You will find a good news on this blog ",
  authors: [
    { name: "Mostafa El Hawary", url: "https://github.com/Mostafa-ElHawary" },
  ],
  keywords: "Blog, Write artical , read news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth relative ">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
