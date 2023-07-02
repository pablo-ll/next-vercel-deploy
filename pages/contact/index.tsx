
import { MainLayout } from '@/components/layout/MainLayout';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Contact()  {
 

return (
   <MainLayout>
    <h2>Contact</h2>

        <h1 className={styles.title}> ir a la pagina  <Link href="/abaut">About</Link></h1>
    <p className={styles.description}>
      Find in-depth information about Next.js features and&nbsp;API.
    </p>
          
   
 
   </MainLayout>
    
)




  }