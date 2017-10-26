import React, { Component } from "react";
import { Link } from 'react-router-dom'

const ItemList = (props) => {
    return (
        <ul className="itemList" >
            {/*props.data.map((item)=>{
                if(item.file_name){
                    return <li key={item.file_id} onClick={() => props._setParentAndChildNodes( props.case, item.file_id )} >{item.file_name}</li>
                } else {
                    return <li key={item.tag_id}  >{item.tag}</li>
                }
            })*/}
        </ul>
    )
}

export default ItemList