import Sidebar from "../sidebar/SIdebar"
import "./navbar.scss"
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                PK Dev
            </motion.span>
            <div className="social">
                <a href="#"><img src="/github-btn.png" alt='' /></a>
                <a href="#"><img src="/email-btn.png" alt='' /></a>
                <a href="#"><img src="/linkedin-btn.png" alt='' /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
