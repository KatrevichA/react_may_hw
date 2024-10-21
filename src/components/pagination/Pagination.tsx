import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
type IProps ={
    flag:boolean
}
const Pagination:FC<IProps> = ({flag}) => {

    const [query, setQuery] = useSearchParams({page:'1'});


    const onClickPrevHandler = ()=> {
        const page = query.get('page');
        if (page && +page > 1) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()})
        }
    };
    const onClickNextHandler = () =>{
        const page = query.get('page');
        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()})
        }
    };

    return (
        <div>
            <button onClick={onClickPrevHandler}>Prev</button>
            <button onClick={onClickNextHandler} disabled={flag}>Next</button>
        </div>
    );
};

export default Pagination;