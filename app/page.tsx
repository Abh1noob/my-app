import "./globals.css";
import { Inter } from "next/font/google";
import Image from 'next/image'
import logo from '@/public/assets/codechef_logo.svg';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rocket Panda Replica",
  description: "by Rujal and Abhinav",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-[#2c0ac4]`}>
          {/* <Image src = {logo} alt='logo' className='absolute left-[50%]'/> */}
          {children}
      </body>
    </html>
  );
}
