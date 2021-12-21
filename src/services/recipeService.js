const mainUrl = 'http://localhost:3030/jsonstore';

export const getAllRecipes = () => {
return    fetch(`${mainUrl}/pastaRecipes`).then(res => res.json())
}