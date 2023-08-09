//import styles from './page.module.css'
import Link from 'next/link';

//className={styles.main}

export default function Home() {

  return (
    <div>
      <h1>Tela 1</h1>
      <Link href={'./screenTwo'}>
        <button>Ir para Tela 2</button>
      </Link>
      <Link href={'./screenTree'}>
        <button>Ir para Tela 3</button>
      </Link>
      <Link href={'/'}>
        <button>Botão 3</button>
      </Link>
      <Link href={'/'}>
        <button>Bitão 4</button>
      </Link>
    </div>
  )
}
