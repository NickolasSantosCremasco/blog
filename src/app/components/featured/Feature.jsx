import React from "react";
import styles from "./featured.module.css"
import Image from "next/image";
const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b className={styles.bold}>Ola, Nickolas aqui!</b> Descubra minha história e minhas ideias nesse blog
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid provident minima officia consectetur fugiat exercitationem, aliquam qui sit dolorum saepe commodi. Expedita veritatis animi eos laboriosam porro at excepturi amet.
                    </h1>
                    <p className={styles.postDesc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic repellendus ut ea iusto inventore similique quidem sequi a, voluptas voluptate, doloribus necessitatibus id magnam blanditiis tempore minima magni sit.
                    </p>
                    <button>Leia Mais!</button>
                </div>
            </div>
        </div>
    )
}

export default Featured