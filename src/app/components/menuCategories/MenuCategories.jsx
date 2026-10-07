import React from 'react'
import Link from 'next/link'
import styles from "./menuCategories.module.css"

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
                <Link href="/blog?cat=technology" className={`${styles.categoryItem} ${styles.technology}`}>Tecnologia</Link>
                <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>Viagem</Link>
                <Link href="/blog?cat=enterprenourship" className={`${styles.categoryItem} ${styles.enterprenourship}`}>Empreendedorismo</Link>
                <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>Culture</Link>
                
    </div>
  )
}

export default MenuCategories