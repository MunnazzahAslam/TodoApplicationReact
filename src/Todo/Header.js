import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
           <h1>Todo Application</h1>
           <Link style={{color:'#333',textDecoration:'none'}} to="/home">Home</Link> |  
           <Link style={{color:'#333' ,textDecoration:'none'}} to="/about"> About</Link>
        </header>
    )
}

const headerStyle={
    color:'#333',
    background:'#ffb8a1',
    textAlign:'center',
    padding:'10px',
}

