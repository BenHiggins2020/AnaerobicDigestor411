'use client'
import styles from '../page.module.css'
import React, {useState} from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from './navbar/navbar';
import Blog from './page';


export default function Layout({ children }: { children: React.ReactNode }) {
    
  return (
   <div>
    <Navbar />
    <Blog />
   </div> 
  )
}


