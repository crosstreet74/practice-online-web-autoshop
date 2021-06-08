import React, { Fragment, useState } from "react";

export default function Item(props) {
    let [value, setValue] = useState(0);

    const handleClick = () => {
        setValue(++value);
    }

    return (
        <Fragment>
            <div>
                {/* <img></img> */}
            </div>
            <h3>{props.model}</h3>
            <h4>{props.brand}</h4>
            <p>Likes: {value}</p>
            <button onClick={handleClick}>Click to Like</button>
        </Fragment>
    )
}