import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>11.02.2025 - </span>
            <span className={styles.category}>CULTURE</span>
          </div>
          <Link href="/"> 
            <h1>Lorem asdjmaskdaksdkas askdnasl laksdna alskdn</h1>
          </Link>
         
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima libero deleniti aliquid sed earum, optio nulla perspiciatis consectetur cum eius labore odit asperiores, facilis iusto. Eius unde aperiam quisquam ratione?</p>
        </div>

        <Link href="/" className={styles.link}>Read More</Link>
    </div>
  )
}

export default Card