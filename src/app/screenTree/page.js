"use client"
import styles from '../page.module.css'
import Link from 'next/link';

function ScreenTree() {

  return (
    <div className={styles.container}>
      <div className={styles.divh1}>
        <h1 className={styles.h1}>Tela 3</h1>
      </div>
      <div className={styles.divbutton}>
        <Link href={'/'}>
          <button className={styles.button}>Retornar Tela 1</button>
        </Link>
        <Link href={'./screenTwo'}>
          <button className={styles.button}>Retornar Tela 2</button>
        </Link>
      </div>
    </div>
  )
}

export default ScreenTree;
