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
            <ul>
                {spellListElements}
            </ul>
        </>
    )
}

export default SpellList;