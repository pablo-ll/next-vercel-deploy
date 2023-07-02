
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      
      <h2>Home</h2>

        <h1 className={styles.title}> ir a la pagina  <Link href="/abaut">About</Link></h1>
  
   
        <p className={styles.description}>
          Find in-depth information about Next.js features and&nbsp;API.
        </p>
    
    </MainLayout>
   
  )
}
