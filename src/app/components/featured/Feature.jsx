import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b className={styles.bold}>Olá, Nickolas aqui!</b> Descubra minha história e minhas ideias nesse blog
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Entre linhas de código, ideias de negócios e boas leituras: um espaço para pensar em voz alta.
                    </h1>
                    <p className={styles.postDesc}>
                        Mais do que tutoriais técnicos, este blog reúne anotações reais sobre engenharia de software, empreendedorismo, economia e cultura. Um arquivo vivo das minhas experiências, erros, descobertas e projetos em evolução.
                    </p>
                    {/* Faltava a classe no botão aqui */}
                    <button className={styles.button}>Leia Mais!</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;