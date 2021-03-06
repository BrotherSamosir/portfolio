import  { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './navbar'
import Footer from './footer'
import bg from '../assets/home-bg.png'
import { motion, AnimateSharedLayout } from "framer-motion";
import layoutCss from '../styles/components/layout.module.css'
import 'animate.css';



export default function Layout({ children }) {
  const [screenHeight, setScreenHeight] = useState(0)
  
  useEffect(() => {
    setScreenHeight(window.innerHeight)
  }, []);

  return (
    <>
      <AnimateSharedLayout>
      <div style={{
        backgroundImage: `url(${bg.src})`
      }} 
      className={layoutCss.main_banner} >
        <div className={layoutCss.bg_drop} >
        <Navbar />
        <main className='animate__fadeInLeft w-full'>{children}</main>
        <Footer />
        </div>
      </div>
      </AnimateSharedLayout>
    </>
  )
}