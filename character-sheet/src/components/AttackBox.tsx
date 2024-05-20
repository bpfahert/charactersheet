import { AttacksAndSpells } from "../types";

function AttacksBox({attacks}: AttacksAndSpells) {

    return(
        <>
            <h3>Attacks and Spells</h3>
            <div>{attacks[0].name}</div>
            <div>{attacks[0].attack_bonus}</div>
            <div>{attacks[0].damage}</div>
            <div>{attacks[0].damage_type}</div>        
        </>
    )
}

export default AttacksBox;