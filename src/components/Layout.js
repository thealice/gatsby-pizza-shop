import React from 'react'
import Footer from './footer'
import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <>
        <Nav />
        {children}
        <Footer />
        </>
    )
}