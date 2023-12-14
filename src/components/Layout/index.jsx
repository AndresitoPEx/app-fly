import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
