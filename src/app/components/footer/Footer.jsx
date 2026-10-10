import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            {/* LADO ESQUERDO: Info */}
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="nickolas blog" width={50} height={50} />
                    <h1 className={styles.logoText}>nickolasdevBlog</h1>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quibusdam aspernatur, dolorum suscipit saepe ad libero dolor odio eveniet velit fugiat cumque molestias eius, soluta rem numquam, ea reprehenderit voluptatem!
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </div>
            </div> {/* <-- A div .info DEVE ser fechada aqui! */}

            {/* LADO DIREITO: Links */}
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Empreendedorismo</Link>
                    <Link href="/">Código</Link>
                    <Link href="/">Tecnologia</Link>
                    <Link href="/">Cultura</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Redes Sociais</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Twitter</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;