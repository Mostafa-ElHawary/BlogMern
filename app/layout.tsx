// import "./globals.css";
// import { Inter } from "next/font/google";
// import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Portfolio | Mostafa El Hawary ",
//   description: "An Expert Fullstack Javascript Developer",
//   authors: [
//     { name: "Mostafa El Hawary", url: "https://github.com/Mostafa-ElHawary" },
//   ],
//   keywords: "portfolio, web development, react developer",
// };
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="!scroll-smooth relative  ">
//       <body
//         className={`${inter.className} pl-5 pr-5 bg-gray-50 text-gray-950  relative dark:bg-[#0a192f] dark:text-gray-50 dark:text-opacity-90 `}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ThemeContextProvider } from "@/components/context/ThemeContext";
import ThemeProvider from "@/components/provider/ThemeProvider";

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
      <body className={`${inter.className}  pl-5 pr-5   bg-gray-50 text-gray-950  relative pt-28 sm:pt-36 dark:bg-[#0a192f] dark:text-gray-50 dark:text-opacity-90` }>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="h-screen bg-white text-gray-700 dark:text-[#ddd] dark:bg-[#0a192f]">
              <div className="max-w-screen-xl mx-auto px-20">
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
