import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json")
.then(res => res.json());


const Categories = () => {

    // console.log(categoryPromise);
    const categories = use(categoryPromise);

    return (
        <div>
            <h2 className='font-bold'>All Categories ({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(category =><NavLink key={category.id} className={({isActive})=> isActive ? " btn border-0 shadow-none bg-base-100 text-secondary font-bold w-[35%]" : " btn border-0 shadow-none bg-base-100 text-accent hover:text-secondary hover:font-bold w-[35%]"} to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;



" btn border-0 shadow-none bg-base-100 hover:text-secondary hover:font-bold w-[35%]"