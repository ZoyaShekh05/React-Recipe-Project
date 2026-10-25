
// import { Link } from 'react-router';

// function RecipeCard({ recipe }) {
//     const { id, prepTimeMinutes, cookTimeMinutes, image, cuisine, name, difficulty, rating } = recipe
//     const totalTime = prepTimeMinutes + cookTimeMinutes;

//     return (
//         <Link
//             to={`/recipe/${id}`}
//             className="bg-card border border-border rounded-md hover:border-accent overflow-hidden flex flex-col"
//         >
//             <img
//                 src={image}
//                 alt={name}
//                 className="h-48 w-full object-cover"
//             />
//             <div className="p-4 flex flex-col flex-1">
//                 <h3 className="font-serif font-bold text-lg text-text mb-1">
//                     {name}
//                 </h3>
//                 <p className="text-sm text-muted mb-3">
//                     {cuisine} - {difficulty}
//                 </p>
//                 <div className="mt-auto flex justify-between items-center text-sm">
//                     <span className="flex items-center gap-1 font-medium">
//                         <svg className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
//                             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                         </svg>
//                         {rating}
//                     </span>
//                     <span className="flex items-center gap-1 text-muted">
//                         <svg className="w-4 h-4 stroke-muted fill-none" strokeWidth="2" viewBox="0 0 24 24">
//                             <circle cx="12" cy="12" r="10" />
//                             <polyline points="12 6 12 12 16 14" />
//                         </svg>
//                         {totalTime} mins
//                     </span>
//                 </div>
//             </div>
//         </Link>
//     );
// }

// export default RecipeCard;



import { Link } from 'react-router';

function RecipeCard({ recipe }) {
    const { id, prepTimeMinutes, cookTimeMinutes, image, cuisine, name, difficulty, rating } = recipe
    const totalTime = prepTimeMinutes + cookTimeMinutes;

    return (
        <Link
            to={`/recipe/${id}`}
            className="group flex flex-col rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
            <div className="overflow-hidden rounded-3xl bg-border">
                <img
                    src={image}
                    alt={name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="pt-4 flex flex-col flex-1">
                <h3 className="font-display text-xl leading-snug text-text mb-1 transition-colors group-hover:text-accent">
                    {name}
                </h3>
                <p className="text-sm text-muted mb-4">
                    {cuisine} - {difficulty}
                </p>
                <div className="mt-auto flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5 font-medium text-text">
                        <svg className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {rating}
                    </span>
                    <span className="w-px h-3 bg-border" aria-hidden="true" />
                    <span className="flex items-center gap-1.5 text-muted">
                        <svg className="w-4 h-4 stroke-muted fill-none" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {totalTime} mins
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default RecipeCard;