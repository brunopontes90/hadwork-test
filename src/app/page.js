"use client"
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.divh1}>
        <h1 className={styles.h1}>Tela 1</h1>
      </div>
      <div className={styles.divbutton}>
        <Link href={'./screenTwo'}>
          <button className={styles.button}>Ir para Tela 2</button>
        </Link>
        <Link href={'./screenTree'}>
          <button className={styles.button}>Ir para Tela 3</button>
        </Link>
        <button
          className={styles.button}
          onClick={() => alert('Botão 3 clicado')}
        >
          Botão 3
        </button>
        <button
          className={styles.button}
          onClick={() => alert('Botão 4 clicado')}
        >
          Botão 4
        </button>
      </div>
    </div>
  )
}
