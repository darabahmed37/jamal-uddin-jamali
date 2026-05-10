import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-10 sm:px-6 lg:px-8 bg-[#fdfaf5]">
      <SEO 
        title="404 - Page Not Found" 
        description="The page you are looking for does not exist." 
        robots="noindex, nofollow" 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <h1 className="text-8xl font-black text-[#c0392b] tracking-tight">404</h1>
        <p className="text-xl font-semibold text-[#1a1a2e] uppercase tracking-widest">
          Page Not Found
        </p>
        <p className="text-base text-[#5f5e5a] max-w-md mx-auto">
          We couldn't find the page you were looking for. It might have been removed, renamed, or did not exist in the first place.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#1a1a2e] px-8 py-3.5 text-sm font-semibold text-[#e8c468] transition hover:opacity-80 shadow-lg"
          >
            Return to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound
