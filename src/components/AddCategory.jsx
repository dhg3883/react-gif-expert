import { useState } from "react";

export const AddCategory = function ( {onNewCategory}) {
  
    const [inputv, setInputValue] = useState("OnePunch");
  
    const onInputChange = function({target}) {
        setInputValue(target.value)
    }
    const onSubmit = function(event){
        event.preventDefault() 
        if(inputv.trim().length <= 1) return  
            onNewCategory(inputv.trim())
            setInputValue('');
        
    }

    return(
    <form onSubmit={(event)=> onSubmit(event)}> 
        <input 
            type="text" 
            placeholder="Buscar Gif" 
            onChange={onInputChange} 
        />
    </form>
    )

}
