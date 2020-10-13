import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/beers">Beers</Link>
                </li>
                <li>
                    <Link to="/pizzas">Pizzas</Link>
                </li>
                <li>
                    <Link to="/slicemasters">Slice Masters</Link>
                </li>
                <li>
                    <Link to="/orders">Order Pizza!</Link>
                </li>
            </ul>
        </nav>
    )
}