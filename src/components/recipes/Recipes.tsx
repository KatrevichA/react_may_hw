import React, {FC} from 'react';
import {IRecipe} from "../../models/IRecipe";
import Recipe from "../recipe/Recipe";
type IProps ={
    recipes:IRecipe[]
}
const Recipes:FC<IProps> = ({recipes}) => {
    return (
        <div>
            {
                recipes.map(value => <Recipe key={value.id} recipe={value}/>)
            }
        </div>
    );
};

export default Recipes;