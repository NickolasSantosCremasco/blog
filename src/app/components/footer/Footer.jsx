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
          <Image src="/logo.png" alt="nickolasdevBlog" width={50} height={50} />
          <h1 className={styles.logoText}>nickolasdevBlog</h1>
        </div>
        <p className={styles.desc}>
          Espaço dedicado a compartilhar artigos práticos sobre engenharia de
          software, inteligência artificial, desenvolvimento full-stack,
          empreendedorismo e finanças. Construindo projetos reais e documentando
          cada aprendizado pelo caminho.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
          <Image src="/tiktok.png" alt="TikTok" width={18} height={18} />
          <Image src="/youtube.png" alt="YouTube" width={18} height={18} />
        </div>
      </div>

      {/* LADO DIREITO: Links */}
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Início</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">Sobre mim</Link>
          <Link href="/contact">Contato</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=empreendedorismo">Empreendedorismo</Link>
          <Link href="/blog?cat=codigo">Código</Link>
          <Link href="/blog?cat=tecnologia">Tecnologia</Link>
          <Link href="/blog?cat=cultura">Cultura</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Redes Sociais</span>
          <Link href="https://youtube.com" target="_blank">YouTube</Link>
          <Link href="https://instagram.com" target="_blank">Instagram</Link>
          <Link href="https://tiktok.com" target="_blank">TikTok</Link>
          <Link href="https://facebook.com" target="_blank">Facebook</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;