import React, { useState} from 'react';

export default function ShopTopBar({ setColumnNum }) {
    const [arrangeNum, setArrangeNum] = useState('4')

    const handleArrange = (e => {
        setColumnNum(e.currentTarget.name)
        setArrangeNum(e.currentTarget.name)
    })
    return (
        <div className="shop-tab">
            <button name='6' className={arrangeNum == 6 ? 'active' : ''} onClick={handleArrange}>
                <i className="fa fa-th-large"></i>
            </button>
            <button name='4' className={arrangeNum == 4 ? 'active' : ''} onClick={handleArrange}>
                <i className="fa fa-th"></i>
            </button>
            <button name='12' className={arrangeNum == 12 ? 'active' : ''} onClick={handleArrange}>
                <i className="fa fa-list-ul">
                </i></button>
        </div>
    );
}