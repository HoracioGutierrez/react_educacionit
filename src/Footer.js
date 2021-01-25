import React, { Component } from 'react'
import Nav from "./Nav"

export class Footer extends Component {
    render() {
        return (
            <footer>
                <p>&copy; Copyright 2021</p>
                <Nav/>
            </footer>
        )
    }
}

export default Footer
