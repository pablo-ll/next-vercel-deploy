import { FC } from "react"

interface MyComponentProps {
  children: React.ReactNode;
}


export const DarkLayout: React.FC<MyComponentProps> = ({children}) => {
  return (

    <div style={{
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius:'5px',
        padding:'10px'


    }}>
        <h3>DarkLayout</h3>
        {children}
        




    </div>
  )
}
