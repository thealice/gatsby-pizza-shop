import React from 'react';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/beers">Beers</a>
                </li>
                <li>
                    <a href="/pizzas">Pizzas</a>
                </li>
                <li>
                    <a href="/slicemasters">Slice Masters</a>
                </li>
                <li>
                    <a href="/orders">Order Pizza!</a>
                </li>
            </ul>
        </nav>
    )
}