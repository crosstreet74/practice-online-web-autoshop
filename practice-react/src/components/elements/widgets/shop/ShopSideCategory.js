import React, { useEffect, useState } from 'react';

export default function ShopSideCategory({ id, name, category, setCategory }) {
    const [selected, setSelected] = useState(false)

    const handleSelected = () => {
        setSelected(!selected)
        let arr = category
        if (selected)
            arr.push(name)
        else
            arr = arr.filter(e => e !== name);
        setCategory(arr)
    }
    return (
        <li key={id}>
            <div className="sidebar-widget-list-left">
                <button onClick={() => handleSelected(name)}>
                    <span className={selected ? 'mark' : 'checkmark'}></span> {name}
                </button>
            </div>
        </li>
    );
}