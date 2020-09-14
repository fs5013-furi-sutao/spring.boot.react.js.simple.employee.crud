import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const today = new Date;
        const year = today.getFullYear();
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">All Rights Reserved {year} @furi.sutao</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
