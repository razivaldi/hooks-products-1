import React, { useEffect, useState } from "react";

function List({getItems}) {
    const [items,setItems] = useState([])
    

    useEffect(()=>{
        console.log("Rendering List")
        setItems(getItems())
    },[getItems])

    return items.map((item) => <div key={item}>{item}</div>)
}

export default List