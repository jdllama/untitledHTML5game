import React from 'react';
import './GameMap.css';
import Cell from "./Cell";
export default class GameMap extends React.Component {
    render() {
        /*
        let players = this.props.players;
        let renders = players.map(player => {
            return (<Player nickname={player.nickname} isMe={player.isMe} isMod={player.isMod} amIMod={player.isMe === true && player.isMod === true}/>);
        })
        return (
            <div>{renders}</div>
        )
        */
       let map = this.props.map;
       let renders = [];
       //console.log(map);
        map.forEach(row => {
            let cells = [];

            row.forEach(cell => {
                console.log(cell.cellType)
                //cells.push(<Cell row={cell.row} col={cell.col} currentObject={cell.currentObject} />);
                cells.push(<Cell {...cell} />);
            })
            let flexBasis = 100 / row.length;
            let actualRow = (<div style={{display: "flex",justifyContent: "space-evenly", flexDirection: "row", flexBasis: flexBasis + "%"}}>
                {cells}
            </div>);
            renders.push(actualRow);
        });
       return (
            <div className="MapHolder">
                <div style={{display: "flex", flexDirection: "column",justifyContent: "space-evenly", width: "100%", height: "100%"}}>
                    {renders}
                </div>
            </div>
       )
    }
}