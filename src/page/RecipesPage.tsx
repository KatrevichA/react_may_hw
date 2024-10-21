import React, {useEffect, useState} from 'react';
import Pagination from "../components/pagination/Pagination";
import {apiDummy} from "../services/api.DummyJSON";
import {useSearchParams} from "react-router-dom";
import Recipes from "../components/recipes/Recipes";
import {IRecipe} from "../models/IRecipe";

const RecipesPage = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [query, setQuery] = useSearchParams({page:'1'});
    // disable next button
    const [flag, setFlag] = useState<boolean>(false);
    useEffect(() => {
        const page = query.get('page')
        console.log(query.get('page'));

        if (page){
            apiDummy.recipes.getAll(+page).then(value => {
                    setRecipes(value.recipes);
                    // const lastID = value.recipes[29].id;
                    // or
                    const lastID = value.recipes[value.recipes.length - 1].id;
                    if (lastID >= value.total){
                        setFlag(true)
                    } else {
                        setFlag(false)
                    }
                }
            )
        }

    }, [query]);

    return (
        <div>
            <Recipes recipes={recipes}/>
            RecipesPage
            <Pagination flag={flag}/>
        </div>
    );
};

export default RecipesPage;