import React, { Component } from 'react'
import Nav from "./Nav"

export class Footer extends Component {
    render() {
        const {links} = this.props
        return (
            <footer>
                <p>&copy; Copyright 2021</p>
                <Nav links={links}/>
            </footer>
        )
    }
}

export default Footer
