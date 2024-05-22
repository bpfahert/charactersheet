import { useEffect } from "react";
import { AttacksAndSpells } from "../types";
import { AbilityModProps } from "../types";


interface AttackProps {
    attacks: AttacksAndSpells[],
}

function AttacksBox({attacks, abilityMods}: AttackProps & AbilityModProps) {

    function calculateAttackBonus (attackType: string) {
        if (attackType === "Ranged" || (attackType === "Finesse" && abilityMods.dexterity > abilityMods.strength)) {
            return abilityMods.dexterity
        }
        else {
            return abilityMods.strength;
        }
    }

    const attackElements = attacks.map((attack) => {
        const bonus = calculateAttackBonus(attack.attack_type) + (attack.proficient ?  abilityMods.proficiency : 0);

        return(
            <div key={attack.id}>
                <div>{attack.name}</div>
                <div>Attack Bonus: {bonus}</div>
                <div>Damage: {attack.damage} {attack.damage_type} damage</div>        
            </div>
        )
    })


    return(
        <>
            <h3>Attacks and Spells</h3>
            {attackElements}
        </>
    )
}

export default AttacksBox;