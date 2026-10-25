

// function NotFound() {
//   return (
//      <main className="max-w-6xl mx-auto px-4 py-16 text-center">
//       <h1 className="font-serif text-5xl font-bold text-accent mb-2">404</h1>
//       <h2 className="text-xl font-semibold mb-3">Page Not Found</h2>
//       <p className="text-muted mb-6">The page you are looking for does not exist.</p>
//       <a
//         href="#"
//         className="bg-accent hover:bg-accent-hover text-white rounded px-4 py-2 inline-block font-medium"
//       >
//         Back to Home
//       </a>
//     </main>
//   )
// }

import { Link } from "react-router"

// export default NotFound



function NotFound() {
  return (
    <main className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-md mx-auto text-center">
        <p className="font-display text-8xl sm:text-9xl leading-none text-border mb-6">404</p>
        <h1 className="font-display text-3xl text-text mb-3">Page not found</h1>
        <p className="text-muted leading-relaxed mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          to={"/"}
          className="inline-flex items-center h-12 px-7 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound