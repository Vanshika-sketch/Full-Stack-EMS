import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <p>sidebar</p>
        <main>
            <div>
                <Outlet/>
            </div>
            
        </main>
        
    </div>
    
  )
}

export default Layout