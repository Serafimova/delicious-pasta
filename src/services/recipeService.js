const mainUrl = 'http://localhost:3030/jsonstore';

export const getAllRecipes = () => {
    return fetch(`${mainUrl}/pastaRecipes`).then(res => res.json())
}




export const createRecipe = (recipeData, token) => {
     return fetch(`${mainUrl}/pastaRecipes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({
            ...recipeData
        })
    }).then(res => res.json())
}