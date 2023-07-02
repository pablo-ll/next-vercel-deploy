
import Link from 'next/link';
import {MainLayout} from '../../components/layout/MainLayout';
import styles from '../../styles/Home.module.css'; 



export default function Pricing  ()  {
  return (
   
    <MainLayout>
        <h2>Pricing</h2>

            <h1 className={styles.title}> ir a la pagina  <Link href="/abaut">Home</Link></h1>
        <p className={styles.description}>
        Find in-depth information about Next.js features and&nbsp;API.
        </p>
            
    
    
    </MainLayout>

  );
};
