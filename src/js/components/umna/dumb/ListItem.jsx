import React from 'react'
import MediaQuery from 'react-responsive'

const ListItem = (props) => {

    return (
        <div>
            <MediaQuery maxWidth={991}>
                <li>
                    <h3>
                        {props.item[0]}
                    </h3>
                    <p className="text_mobile">{props.item[1]} <a href={props.item[3]} target="_blank" className="list_item_link">{props.item[2]}</a></p>

                </li>
            </MediaQuery>

            <MediaQuery minWidth={992}>
                <li>
                    <h2>
                        {props.item[0]}
                    </h2>
                    <p>{props.item[1]} <a href={props.item[3]} target="_blank" className="list_item_link">{props.item[2]}</a></p>

                </li>
            </MediaQuery>
        </div>
    )
}

export default ListItem
