import React from "react";
import styles from "./menu.module.css"
import MenuCategories from "../menuCategories/MenuCategories"
import MenuPosts from "../menuPosts/MenuPosts"  
const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"Só o mais importante"}</h2>
            <h1 className={styles.title}>Mais Popular</h1>
            <MenuPosts withImage={false}/>

            <h2 className={styles.subtitle}>Descoberta Por Tópico</h2>
            <h1 className={styles.title}>Categorias</h1>

            <MenuCategories/>

            <h2 className={styles.subtitle}>{"Melhores do Editor"}</h2>
            <h1 className={styles.title}>Escolhas do Editor</h1>
            <MenuPosts withImage={true}/>
        </div>
    )
}

export default Menu