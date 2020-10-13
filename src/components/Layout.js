import React from 'react';
import Footer from './footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
