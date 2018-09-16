import React, { Component, Fragment } from 'react';
import mockQuoteGenerator from '../utilities/mockQuoteGenerator';

class QuoteGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: ''
        };
    }

    async componentWillMount() {
        try {
            let quote = await mockQuoteGenerator();
            this.setState({ quote });
        } catch (error) {
            console.log(`Failed to Generate/Fetch Random Quote: ${error}`);
        }
    }

    render() {
        return (
            <Fragment>
                <p>" {this.state.quote} "</p>
                <p style={{ fontStyle: 'italic' }}>- Scott Stapp, Creed</p>
            </Fragment>
        );
    }
};

export { QuoteGenerator }