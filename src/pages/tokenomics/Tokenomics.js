import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Tokenomics.css'
export default class Tokenomics extends Component {
    render() {
        return (
            <div className="tokenomics_panel">
                <Link to="/public/tokenomics.pdf" target="_blank" download className="downloadButton">Download Tokenomics</Link>
            </div>
        )
    }
}
