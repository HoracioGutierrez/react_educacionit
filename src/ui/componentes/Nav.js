import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"

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


const mapStateToProps = (store) => {
    return {
        links : store.links
    }
}


export default connect(mapStateToProps)(Nav)
