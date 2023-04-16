import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
    const [Categories, setCategories] = useState(['One Punch'])
    const onAddCategory= function( newCategory){
        if (Categories.includes(newCategory))return 
        setCategories([newCategory ,...Categories])
    }
    return (
        <>
            <h1>GifApp</h1>

        <AddCategory 

            onNewCategory={(event) => onAddCategory(event)}

        />
            {
            Categories.map((category) => (
                <GifGrid key={category} category={category}/>
                ))
            }

        </>
    ) 
    
}