import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./menu.module.css"

const Menu = ({active, setActive}) => {

    const handleMenu = () => {
        setActive(false)
    }
    
  return (
    <div  className={styles.overlay} style={{width: active ? "100%" : "0"}}>
        <span className={styles.closebtn} onClick={handleMenu}>&times;</span>

        <div className={styles.overlay_content}>
            <Link href="/" onClick={handleMenu}>Bosh sahifa</Link>
            <a href="#biz-haqimizda" onClick={handleMenu}>Biz haqimizda</a>
            <a href="#mahsulotlar" onClick={handleMenu}>Mahsulotlar</a>
            <a href="#izohlar" onClick={handleMenu}>Izohlar</a>
            <a href="#bog'lanish" onClick={handleMenu}>Bog’lanish</a>
        </div>
    </div>
  )
}

export default Menu