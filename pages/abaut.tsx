import { MainLayout } from '@/components/layout/MainLayout';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { DarkLayout } from '../components/layout/DarkLayout';
import React, { FC } from 'react';

export default function Abaut  ()  {
  return (
   
     <>
     <h2>Abaut</h2>

        <h1 className={styles.title}> ir a la pagina  <Link href="/abaut">About</Link></h1>


        <p className={styles.description}>
          Find in-depth information about Next.js features and&nbsp;API.
        </p>

      </>
    
  )
}


  Abaut.getLayout = function getLayout (page : React.ReactNode)  {
    return (
      <MainLayout>
        <DarkLayout>
          {page}
        </DarkLayout>
      </MainLayout>
    );
  }

