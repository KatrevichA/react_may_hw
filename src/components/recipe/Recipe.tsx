import React, {FC} from 'react';
import {IRecipe} from "../../models/IRecipe";
type IProps ={
    recipe:IRecipe
}
const Recipe:FC<IProps> = ({recipe}) => {
    return (
        <div>
            <ul>
                <li>{recipe.name}</li>
            </ul>
        </div>
    );
};

export default Recipe;