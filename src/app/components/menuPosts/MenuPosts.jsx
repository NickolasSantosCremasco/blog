import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./menuPosts.module.css"

const MenuPosts = ({withImage}) => {
  return (
      <div className={styles.items}>
                 <Link href="/" className={styles.item}>
                   {withImage &&  (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
                    </div>
                    )
                }
                 <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}` }>Viagem</span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Nickolas Cremasco</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                 </div>
                 </Link>
                 <Link href="/" className={styles.item}>
                {withImage &&  (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
                    </div>
                    )
                }
                 <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}` }>Cultura</span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Nickolas Cremasco</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                 </div>
                 </Link>
                 <Link href="/" className={styles.item}>
                {withImage &&  (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
                    </div>
                    )
                }
                 <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.technology}` }>Tecnologia</span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Nickolas Cremasco</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                 </div>
                 </Link>
                 <Link href="/" className={styles.item}>
                 {withImage &&  (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
                    </div>
                    )
                }
                 <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.enterprenourship}` }>Empreendedorismo</span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Nickolas Cremasco</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                 </div>
                 </Link>
            </div>
  )
}

export default MenuPosts