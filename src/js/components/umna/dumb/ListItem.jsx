import React from 'react'

const ListItem = (props) => {

    return (
        <li className="schedule_item">
            <h2>
                {props.item[0]}
            </h2>
            <p>{props.item[1]} <a href={props.item[3]} target="_blank" className="list_item_link">{props.item[2]}</a></p>

        </li>
    )
}

export default ListItem
