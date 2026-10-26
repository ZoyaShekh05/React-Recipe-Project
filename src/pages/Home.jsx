
import axios from 'axios';
import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import useLoading from '../hooks/UseLoading';
import UseErrorMessage from '../hooks/UseErrorMessage';


function Home() {
    const [recipes, setRecipes] = useState([]);
    const [total, setToatal] = useState(0);
    const { loading, startLoading, stopLoading } = useLoading();
    const { errorMsg, showError, clearError } = UseErrorMessage("")
    const [searchQuery, setSearchQuery] = useState("")


    async function fetchRecipes(skipCount, query) {
        startLoading()
        try {
            let url = `https://dummyjson.com/recipes?limit=6&skip=${skipCount}`

            if (query) {
                url = `https://dummyjson.com/recipes/search?limit=6&skip=${skipCount}&q=${query}`
            }
            const { data } = await axios.get(url);

            setRecipes((prev) => skipCount === 0 ? data.recipes : [...prev, ...data.recipes]);
            setToatal(data.total)
        } catch (error) {
            showError("Please try again later.")
        }

        stopLoading()
    }



    useEffect(() => {
        fetchRecipes(0)
    }, [])

    function handleSearch(e) {
        e.preventDefault()
        //    console.log(e.target);

        const form = new FormData(e.target);
        let query = form.get("query").trim()
        setSearchQuery(query)

        // if (query) {
        // console.log(query);
        fetchRecipes(0, query)
        // }
    }

    if (errorMsg) {
        return (
            <main className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
                <div className="max-w-md mx-auto text-center rounded-2xl border border-border bg-card px-8 py-10">
                    <p className="font-display text-2xl text-text mb-2">Something went wrong</p>
                    <p className="text-accent">{errorMsg || "Recipe not found."}</p>
                </div>
            </main>
        )
    }
    

    return (
        <main className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
            {/* Hero + search */}
            <section className="pt-14 pb-12 sm:pt-20 sm:pb-16 border-b border-border">
                <h1 className="font-display text-4xl sm:text-6xl leading-[1.08] text-text max-w-2xl">
                    What are we cooking today?
                </h1>
                <p className="mt-4 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
                    Browse simple, tested recipes from around the world, or search by dish, ingredient or cuisine.
                </p>

                <form
                    onSubmit={handleSearch}
                    className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl"
                >
                    <div className="relative flex-1">
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" />
                        </svg>
                        <input
                            type="text"
                            name="query"
                            placeholder="Search recipes..."
                            className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-card text-text placeholder:text-muted outline-none transition-colors focus:border-accent focus:ring-4 focus:ring-accent/15"
                        />
                    </div>
                    <button
                        type="submit"
                        className="h-12 px-7 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        Search
                    </button>
                </form>
            </section>

            {/* Results */}
            <section className="pt-10">
                <div className="flex items-baseline justify-between mb-6">
                    <h2 className="font-display text-2xl sm:text-3xl text-text">
                        {searchQuery ? `Results for "${searchQuery}"` : "All recipes"}
                    </h2>
                    {total > 0 && (
                        <p className="text-sm text-muted">
                            Showing {recipes.length} of {total}
                        </p>
                    )}
                </div>

                {loading && (
                    <div className="flex items-center justify-center gap-3 py-10 text-muted">
                        <span className="w-5 h-5 rounded-full border-2 border-border border-t-accent animate-spin" aria-hidden="true" />
                        <p>Loading...</p>
                    </div>
                )}
                {!loading && recipes.length === 0 && (
                    <div className="text-center py-16">
                        <p className="font-display text-xl text-text mb-1">Nothing here yet</p>
                        <p className="text-muted">{`No recipes found for '${searchQuery}'`}</p>
                    </div>
                )}

                {<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>}

                {recipes.length < total && <div className="text-center mt-14">
                    <button
                        type="button"
                        onClick={() => fetchRecipes(recipes.length, searchQuery)}
                        className="px-8 h-12 rounded-xl border border-accent text-accent hover:bg-accent hover:text-white font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        Load more recipes
                    </button>
                </div>}
            </section>
        </main>
    );
}

export default Home;