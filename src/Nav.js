import React, { Component } from 'react'
import {Link,NavLink} from "react-router-dom"

export class Nav extends Component {
    render() {
        
        const {links} = this.props

        return (
            <nav>
                {links.map((link)=>{
                    return <NavLink key={link} to={link}>{link}</NavLink>
                })}
            </nav>
        )
    }
}

export default Nav
