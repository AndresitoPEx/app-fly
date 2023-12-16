import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <div className='flex-col '>
      <Header />
      <div className="flex-col items-center w-full">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
