import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        
        const {links} = this.props

        return (
            <nav>
                {links.map((link)=>{
                    return <a key={link} href={link}>{link}</a>
                })}
            </nav>
        )
    }
}

export default Nav
