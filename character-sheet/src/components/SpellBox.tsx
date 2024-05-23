import { Spell } from "../types";

interface SpellBoxProps {
    spell: Spell,
}


function SpellBox({spell}: SpellBoxProps) {

    return(
        <>
            <h5>{spell.name}</h5>
            <h6>Level {spell.level} {spell.school} spell</h6>
            <h4>Type: {spell.type}</h4>
            <div>Range: {spell.range}</div>
            <div>Target: {spell.target}</div>
            <div>Components: {spell.components}</div>
            <div>Classes: {spell.classes}</div>
            <div>Description: {spell.description}</div>
        </>
    )
}


export default SpellBox;