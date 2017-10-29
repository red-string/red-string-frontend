import React from "react";


const ItemList = (props) => {
    return (
        <ul className="itemList" >
            {props.data}
        </ul>
    )
}

export default ItemList