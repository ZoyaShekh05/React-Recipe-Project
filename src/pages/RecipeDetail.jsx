// import axios from 'axios';
// import { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router'
// import useLoading from '../hooks/UseLoading';
// import UseErrorMessage from '../hooks/useErrorMessage';

// function RecipeDetail() {
//   const { id } = useParams();

//   const [recipe, setRecipe] = useState({});
//   const { errorMsg, showError, clearError } = UseErrorMessage("")
//   const { loading, startLoading, stopLoading } = useLoading();


//   async function fetchRecipe(params) {
//     startLoading()
//     try {
//       const { data } = await axios.get(`https://dummyjson.com/recipes/${id}`)
//       console.log(data);
//       setRecipe(data)
//     } catch (error) {
//       showError("Could not load recipe details . Please try again.")
//     }

//     stopLoading()
//   }

//   useEffect(() => {
//     fetchRecipe()
//   }, [])


//   if (loading) {
//     return <p className='text-center py-6 text-muted'>Loading...</p>
//   }

//   if (errorMsg) {
//     return (
//       <main className="max-w-6xl mx-auto px-4 py-8">
//         <Link
//           to="/"
//           className="text-accent hover:underline inline-flex items-center gap-1 mb-4"
//         >
//           <svg
//             className="w-4 h-4 stroke-current fill-none"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <line x1="19" y1="12" x2="5" y2="12" />
//             <polyline points="12 19 5 12 12 5" />
//           </svg>
//           Back to Home
//         </Link>
//         <p className="text-accent">{errorMsg || "Recipe not found."}</p>
//       </main>
//     )
//   }
//   return (
//     <main className="max-w-6xl mx-auto px-4 py-8">
//       { }
//       <Link to={"/"} className="text-accent hover:underline inline-flex items-center gap-1 mb-6">
//         <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
//           <line x1="19" y1="12" x2="5" y2="12" />
//           <polyline points="12 19 5 12 12 5" />
//         </svg>
//         Back to Home
//       </Link>

//       <div className="flex flex-col md:flex-row gap-8 mb-8">
//         <img
//           src={recipe.image}
//           alt={recipe.name}
//           className="w-full md:w-1/2 h-80 object-cover rounded-md border border-border"
//         />
//         <div className="md:w-1/2 flex flex-col justify-center">
//           <h1 className="font-serif text-3xl font-bold text-text mb-2">{recipe.name}</h1>
//           <p className="text-muted mb-4">{recipe.cuisine} - {recipe.difficulty}</p>
//           <div className="flex items-center gap-1 mb-4 font-medium">
//             <svg className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <span>{recipe.rating} ({recipe.reviewCount} reviews)</span>
//           </div>
//           <div className="grid grid-cols-2 gap-2 text-sm border-t border-border pt-4 mb-4">
//             <p><strong>Prep time:</strong> {recipe.prepTimeMinutes} mins</p>
//             <p><strong>Cook time:</strong> {recipe.cookTimeMinutes} mins</p>
//             <p><strong>Servings:</strong> {recipe.servings}</p>
//             <p><strong>Calories:</strong> {recipe.caloriesPerServing} kcal</p>
//           </div>
//           <p className="text-sm text-muted mb-1">
//             <strong>Meal Type:</strong> {recipe?.mealType?.join(', ')}
//           </p>
//           <p className="text-sm text-muted">
//             <strong>Tags:</strong> {recipe?.tags?.join(', ')}
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
//         <div>
//           <h2 className="font-serif text-xl font-bold mb-4">Ingredients</h2>
//           <ul className="list-disc pl-5 space-y-1">
//             {recipe.ingredients?.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h2 className="font-serif text-xl font-bold mb-4">Instructions</h2>
//           <ol className="list-decimal pl-5 space-y-2">
//             {recipe.instructions?.map((step, index) => (
//               <li key={index}>{step}</li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     </main>
//   )
// }

// export default RecipeDetail




import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import useLoading from '../hooks/UseLoading';
import UseErrorMessage from '../hooks/UseErrorMessage';

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});
  const { errorMsg, showError, clearError } = UseErrorMessage("")
  const { loading, startLoading, stopLoading } = useLoading();


  async function fetchRecipe(params) {
    startLoading()
    try {
      const { data } = await axios.get(`https://dummyjson.com/recipes/${id}`)
      console.log(data);
      setRecipe(data)
    } catch (error) {
      showError("Could not load recipe details . Please try again.")
    }

    stopLoading()
  }

  useEffect(() => {
    fetchRecipe()
  }, [])


  if (loading) {
    return (
      <div className="flex items-center justify-center gap-3 py-32 text-muted">
        <span className="w-5 h-5 rounded-full border-2 border-border border-t-accent animate-spin" aria-hidden="true" />
        <p>Loading...</p>
      </div>
    )
  }

  if (errorMsg) {
    return (
      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <Link
          to="/"
          className="text-muted hover:text-accent transition-colors inline-flex items-center gap-2 mb-8 font-medium"
        >
          <svg
            className="w-4 h-4 stroke-current fill-none"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Home
        </Link>
        <div className="max-w-md mx-auto text-center rounded-2xl border border-border bg-card px-8 py-10">
          <p className="font-display text-2xl text-text mb-2">Something went wrong</p>
          <p className="text-accent">{errorMsg || "Recipe not found."}</p>
        </div>
      </main>
    )
  }
  return (
    <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10 pb-20">
      <Link
        to={"/"}
        className="text-muted hover:text-accent transition-colors inline-flex items-center gap-2 mb-8 font-medium"
      >
        <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Home
      </Link>

      {/* Top: image + title + quick facts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full aspect-[4/3] md:aspect-square object-cover rounded-3xl bg-border"
        />

        <div className="flex flex-col justify-center">
          <p className="text-muted mb-3">{recipe.cuisine} - {recipe.difficulty}</p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] text-text mb-5">
            {recipe.name}
          </h1>

          <div className="flex items-center gap-2 mb-8 font-medium text-text">
            <svg className="w-5 h-5 fill-accent" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>{recipe.rating}</span>
            <span className="text-muted font-normal">({recipe.reviewCount} reviews)</span>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl border border-border bg-card divide-x divide-y sm:divide-y-0 divide-border overflow-hidden mb-8">
            <div className="px-4 py-4">
              <dt className="text-sm text-muted">Prep time</dt>
              <dd className="mt-1 font-semibold text-text">{recipe.prepTimeMinutes} mins</dd>
            </div>
            <div className="px-4 py-4">
              <dt className="text-sm text-muted">Cook time</dt>
              <dd className="mt-1 font-semibold text-text">{recipe.cookTimeMinutes} mins</dd>
            </div>
            <div className="px-4 py-4">
              <dt className="text-sm text-muted">Servings</dt>
              <dd className="mt-1 font-semibold text-text">{recipe.servings}</dd>
            </div>
            <div className="px-4 py-4">
              <dt className="text-sm text-muted">Calories</dt>
              <dd className="mt-1 font-semibold text-text">{recipe.caloriesPerServing} kcal</dd>
            </div>
          </dl>

          <div className="space-y-3 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted w-20">Meal type</span>
              {recipe?.mealType?.map((type) => (
                <span key={type} className="px-3 py-1 rounded-full bg-accent text-white">
                  {type}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted w-20">Tags</span>
              {recipe?.tags?.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-border bg-card text-text">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: ingredients + instructions */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 border-t border-border pt-12">
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6 md:sticky md:top-6">
            <h2 className="font-display text-2xl text-text mb-5">Ingredients</h2>
            <ul className="divide-y divide-border">
              {recipe.ingredients?.map((item, index) => (
                <li key={index} className="py-3 first:pt-0 last:pb-0 text-text">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-2xl text-text mb-6">Instructions</h2>
          <ol className="space-y-6">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-accent text-white text-sm font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <p className="text-text leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  )
}

export default RecipeDetail