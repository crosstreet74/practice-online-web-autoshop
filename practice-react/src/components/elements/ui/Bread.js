import React from 'react';
import { Link } from 'react-router-dom'

export default function Bread(props) {
    return (
        <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <span>
                        <span className="mx-3">
                            <Link aria-current="page" className="active" to="/">Home</Link>
                        </span>
                        <span>/</span>
                        <span className="mx-3">
                            {props.breadName}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}