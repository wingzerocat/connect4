import React from 'react';

const Line = (props) => (
    <tr>
        <td className={"1 col" + props.line[0]} onClick={(e) => props.placePiece(e)}>{props.line[0]}</td>
        <td className={"2 col" + props.line[1]} onClick={(e) => props.placePiece(e)}>{props.line[1]}</td>
        <td className={"3 col" + props.line[2]} onClick={(e) => props.placePiece(e)}>{props.line[2]}</td>
        <td className={"4 col" + props.line[3]} onClick={(e) => props.placePiece(e)}>{props.line[3]}</td>
        <td className={"5 col" + props.line[4]} onClick={(e) => props.placePiece(e)}>{props.line[4]}</td>
        <td className={"6 col" + props.line[5]} onClick={(e) => props.placePiece(e)}>{props.line[5]}</td>
    </tr>
);

export default Line;