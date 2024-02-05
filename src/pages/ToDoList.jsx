import React, { useState } from 'react'

export const ToDoList = () => {

    const [item, setitem] = useState("");
    const [todoItem, setToDoItem] = useState([]);

    const itemHandler = (e) => {
        setitem(e.target.value);
    }
    const addHandler = () => {

        if (item != "") {
            setToDoItem([...todoItem, item])
            setitem("")
        }
    }

    const editHandler = (id) => {

        console.log("edit index" + id)
        const editItem = todoItem.filter((item, index) => index === id)
        const newText = window.prompt('Edit text ', editItem)

        if (newText) {
            const upItem = todoItem.map((item, index) =>
                index === id ? newText : item)
            setToDoItem(upItem);
        }
    }

    return (
        <>
            <div>

                <hr /><br />
                <h1>TODO LISTS</h1>
                <hr />
                <br />


                <input type="text" placeholder='add item...' className='input-type' value={item} onChange={itemHandler} />
                <br />
                <button type="button" className='btn__additem' onClick={addHandler} >Add</button>



                <div className="section">

                    {
                        todoItem.map((item, index) =>

                            <div className="section__one" key={index}>

                                <h3>{item}</h3>

                                <div className="btn__section">

                                    <button className='btn__section--de' onClick={() => editHandler(index)}>Edit</button>
                                    <button className='btn__section--de'>Delete</button>
                                </div>

                            </div>

                        )
                    }




                </div>

            </div>

        </>
    )
}
