import styles from "./navbar.module.css"
import Link from "next/link";

export default function Navbar(){
    return(

        // <div className={styles.navBar}>
        <div className={styles.navBar}>

            <div className={styles.navBarTitle}>
                <h2>Anaerobic Digestion</h2>
            </div>

            <div className={styles.navBarItemHolder}>
               
                <div className={styles.navBarItem}>
                        <Link 
                        className=" text-body-emphasis text-decoration-none"
                        href={"/about"}>
                        <h4>About Me</h4>
                        </Link>
                </div>

                <div className={styles.navBarItem}>
                    <Link 
                        className=" text-body-emphasis text-decoration-none" 
                        href={"/welcome"}>
                    <h4>Home</h4>
                    </Link>
                </div>
                
                <div className={styles.navBarItem}>
                    <Link 
                        className=" text-body-emphasis text-decoration-none"
                        href={"/profile"}>
                    <h4>Profile</h4>
                    </Link>
                </div>


            </div>

        </div>

    );
}
