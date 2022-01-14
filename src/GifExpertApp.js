import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {
    // const categories = ['one Piece', 'dragol Ball', 'one punch']
    const [categories, setCategories] = useState(['one Piece'])

    // const handleAdd = (s) => {
    //     //setCategories((c)=>categories)
    //     // setCategories([...categories],'popeye')// al final de la lista (arreglo de categories)
    //     // setCategories(['popeye',...categories])// al inicio de la lista (arreglo de categories)
    //     setCategories(cats=>[...cats,'popeye'])// permite defirnir un nuevo arreglo sin sobreescribir necesariamente
    //     //sobreescribirlo
    // }


    return (
        <>
            <h2>gitExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map(category => (
                            <GifGrid 
                            category={category}
                            key={category}
                            />
                        ))
                    
                }
            </ol>
        </>
    )
}
export default GifExpertApp