import { Spell } from "../types";
import SpellBox from "./SpellBox";

interface SpellListProps {
    spells: Spell[],
}

function SpellList({spells}: SpellListProps) {
    const spellListElements = spells.map((spellElement) => {
        return(
            <SpellBox spell={spellElement}/>
        )
    })

    
    return(
        <>
            <h3>Spells:</h3>
            <ul>
                {spellListElements}
            </ul>
        </>
    )
}

export default SpellList;