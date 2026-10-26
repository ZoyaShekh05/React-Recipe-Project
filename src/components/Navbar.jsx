
import { Link } from 'react-router'


function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card/95 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex justify-between items-center">
        <Link
          to="/"
          className="font-display text-2xl text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded"
        >
          RecipeFinder
        </Link>
        <Link
          to="/"
          className="text-muted hover:text-text font-medium transition-colors underline-offset-8 hover:underline decoration-accent decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded"
        >
          Home
        </Link>
      </nav>
    </header>
  )
}

export default Navbar