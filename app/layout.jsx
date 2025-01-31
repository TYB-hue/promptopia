import '@styles/globals.css';
import Nav from "@component/Nav"
import Provider from '@component/Provider'

export const metadata = {
    title : 'Promptopia',
    description: "Discover & share AI prompts"
}
const RootLayout = ({ children }) => {
  return(<html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
         <main className='app'>
          <Nav />
           {children}
         </main>
       </body>
      </html>)
  
}

export default RootLayout;
