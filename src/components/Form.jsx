import './Form.css';
import React, { useState, useRef, useEffect } from 'react';
import Recipe from './Recipe';
import Ingredent from './Ingredent';
import {getRecipeFromMistral} from '../ai';



export default function Form() {
    const [ingredients, setIngredients] = React.useState([]);

    function addIngredent(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    const [recipe, setRecipe] = useState("");
    const recipeSection = useRef(null)
    
    useEffect(() => {
        if(recipeSection !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown)
    }
    
    return(
        <main>
            <form action={addIngredent} className='form'>
                <input 
                    type="text" 
                    placeholder='e.g oregano' 
                    name='ingredient' 
                />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length > 0 && 
            <Ingredent
                ref={recipeSection}
                ingredients={ingredients}
                getRecipe={getRecipe}
            />}

            {recipe && <Recipe recipe={recipe} />}
        </main>
        
    );
}

