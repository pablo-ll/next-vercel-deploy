import Link from 'next/link';
import { useRouter } from 'next/router';
import {FC} from 'react'
const style = {
    color: '#0070f3',
    textDecoration: 'underline',
}

interface Props{
  text:string;
  href:string;
}


export const ActiveLink: FC<Props> = ({href, text}) => {

    const {asPath} = useRouter();
    
  return (

    <Link href={href} style={ asPath === href ? style : {}}>
        {text}</Link>
  )
}
