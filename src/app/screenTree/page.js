//import styles from './page.module.css'
import Link from 'next/link';

//className={styles.main}

export default function Home() {

  return (
    <div>
      <h1>Screen 3</h1>
      <Link href={'/'}>
        <button>Retorne a Tela 1</button>
      </Link>
      <Link href={'./screenTwo'}>
        <button>Retorne a  Tela 2</button>
      </Link>
    </div>
  )
}
