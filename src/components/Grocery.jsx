import { nanoid } from "nanoid";
import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export const Grocery = () => {
    const [list, setList] = useState([]);

    const handleClick = (data) => {
        //data
        console.log("Data in Parents", data)
        const payload = {
            title: data,
            status: false,
            id: nanoid(7),            
        }
        setList([...list, payload])
    };
    const handleToggle = (id) => {
     //Delete thid ID from main list
     //hint; list.filter()   
    }
    return (
        <>
            <GroceryInput getData={handleClick} />
                {list.map((e) => (
                    <GroceryList key={e.id} {...e} handleToggle={handleToggle} />
                
            ))}
        </>
    );
}