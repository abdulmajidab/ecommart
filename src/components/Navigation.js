import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <nav className="container mx-auto flex ">
                    <Link to='/' exact>
                        <img src="/images/logo.png" alt="logo" style={{height:20}}/>
                    </Link>
                    <ul>
                        <li><Link /></li>
                    </ul>
            </nav>
        </>
    )
}
export default Navigation

