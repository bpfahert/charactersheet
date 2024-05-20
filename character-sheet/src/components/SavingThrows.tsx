import { SavingThrowProficiencies} from "../types";
import { AbilityMods } from "../types";

function SavingThrows({savingThrows, abilityMods}: SavingThrowProficiencies & AbilityMods) {
    

    return(
        <>
            <h3>Saving Throws</h3>
            <h5>Strength: {abilityMods.strength + (savingThrows.strength ? abilityMods.proficiency : 0)}</h5>
            <h5>Dexterity: {abilityMods.dexterity + (savingThrows.dexterity ? abilityMods.proficiency : 0)}</h5>
            <h5>Constitution: {abilityMods.constitution + (savingThrows.constitution ? abilityMods.proficiency : 0)}</h5>
            <h5>Intelligence: {abilityMods.intelligence + (savingThrows.intelligence ? abilityMods.proficiency : 0)}</h5>
            <h5>Wisdom: {abilityMods.wisdom + (savingThrows.wisdom ? abilityMods.proficiency : 0)}</h5>
            <h5>Charisma: {abilityMods.charisma + (savingThrows.charisma ? abilityMods.proficiency : 0)}</h5>
        </>
    )
}

export default SavingThrows;