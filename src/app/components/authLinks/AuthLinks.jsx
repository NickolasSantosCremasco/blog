"use client"
import { useState } from "react";
import styles from "./authLinks.module.css"; // Corrigido de autoLinks para authLinks
import Link from "next/link";

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const status = "notauthenticated";

    return (
        <>
            {/* Links do Desktop (A classe styles.link faz eles sumirem no celular) */}
            {status === "notauthenticated" ? (
                <Link href="/login" className={styles.link}>Login</Link>
            ) : (
                <>
                    <Link href="/write" className={styles.link}>Write</Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}

            {/* Botão Hambúrguer */}
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>

            {/* Menu Responsivo (Mobile) */}
            {open && (
                <div className={styles.responsiveMenu}>
                    {/* REMOVIDO o className={styles.link} daqui para eles não sumirem */}
                    <Link href="/">Inicial</Link>
                    <Link href="/">Contato</Link>
                    <Link href="/">Sobre mim</Link>
                    
                    {status === "notauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span>Logout</span> {/* Removido styles.link daqui também */}
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default AuthLinks;