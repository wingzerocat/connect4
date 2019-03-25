import React from 'react';
import Line from './Line.jsx';

const Board = (props) => (
    <div> 
        <table>
            <thead>
                <tr>
                    <th className={"1 " + props.player} onClick={(e) => props.placePiece(e)}></th>
                    <th className={"2 " + props.player} onClick={(e) => props.placePiece(e)}></th>
                    <th className={"3 " + props.player} onClick={(e) => props.placePiece(e)}></th>
                    <th className={"4 " + props.player} onClick={(e) => props.placePiece(e)}></th>
                    <th className={"5 " + props.player} onClick={(e) => props.placePiece(e)}></th>
                    <th className={"6 " + props.player} onClick={(e) => props.placePiece(e)}></th>
                </tr>
            </thead>
            <tbody>
                {props.cols.map(col => 
                    <Line line={col} placePiece={props.placePiece} />
                )}
            </tbody>
        </table>
    </div>
);

export default Board;