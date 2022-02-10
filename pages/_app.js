import '../styles/globals.scss'
import Notification  from '../components/Notification'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return(
  <> 
    <Notification/>
    <Navbar/>
    <Component {...pageProps} />
    <Features/>
    <Footer/>
    </>)
}

export default MyApp
