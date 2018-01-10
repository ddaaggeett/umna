import React from 'react'
import ListItem from './ListItem'

const List = (props) => {

    return (
        <ul id="list">
            {props.list.map((item) => {
                return (
                    <ListItem item={item} />
                )
            })}
        </ul>
    )
}

export default List
