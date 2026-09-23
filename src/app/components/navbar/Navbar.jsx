import React from "react";
import styles from "./navbar.module.css"
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24}></Image>
                <Image src="/instagram.png" alt="facebook" width={24} height={24}></Image>
                <Image src="/tiktok.png" alt="facebook" width={24} height={24}></Image>
                <Image src="/youtube.png" alt="facebook" width={24} height={24}></Image>
            </div>
            <div className={styles.logo}>Nickolas Blog</div>
            <div className={styles.links}></div>
            <div className={styles.links}></div>
        </div>
    )
}

export default Navbar