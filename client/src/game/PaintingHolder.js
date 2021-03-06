import React from 'react';
const HTMLtoReact = require("html-to-react").Parser;

export default class PaintingHolder extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let renders = [];
        renders = this.props.unusedPaintings.map(painting => {
            let parser = new HTMLtoReact();
            return <span draggable="true">{parser.parse(painting)}</span>
        });
        return (
        <>
            {renders}
        </>)
    }
}