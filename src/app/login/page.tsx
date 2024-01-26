'use client'
import styles from '../page.module.css'
import React, {useState} from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login(){


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const router = useRouter();

    function attemptLogin(email:String ,password:String){
    
        let info = true;
        if(info){
           router.push('/welcome');
        } else {
            alert("Login Failed! Try a different username and password");

        }
    
    }

  return (
    <div className={styles.homeStyle}>
        <div className={styles.homeMainText}>
          <h1>Login</h1>
          <div className={styles.divSpacer}></div>

        </div>

        <div className={styles.loginHolder}>

            <div className={styles.loginHolder}>
                <p> Email </p>
                <input 
                    className={styles.loginInput}
                    id="email" 
                    type="email" 
                    placeholder=" Enter Email "
                    onChange={(value)=>{
                        setEmail(value.target.value);
                    }}
                />        
            </div>
            

            <div className={styles.loginHolder}>
                <p> Password </p>
                <input
                    className={styles.loginInput}
                    id="password" 
                    type="password" 
                    placeholder=" Enter Password "
                    onChange={(value)=>{
                        setPassword(value.target.value);
                    }}

                />
            </div>
            <div className={styles.loginHolder}> 
             <button className={styles.loginBtn} onClick={()=>{
                console.log("Logging in: "+email+" \n password: "+password);
                attemptLogin(email,password);
            }}>
                Login
            </button>
            </div>


           
            <div>
                <button className={styles.loginBtn} onClick={()=>{
                    router.push('/register');
                }}>
                    New User? Register
                </button>   
            </div>


        </div>

    </div>
  );
}