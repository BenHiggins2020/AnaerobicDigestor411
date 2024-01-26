'use client'

import styles from '../page.module.css'
import React, {useState} from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import Login from './page';


export default function Layout({ children }: { children: React.ReactNode }) {

    return(
        <Login />
    )
}


