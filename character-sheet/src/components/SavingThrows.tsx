import { SavingThrowProficiencies} from "../types";


function SavingThrows({saving_throws}: SavingThrowProficiencies) {
    

    return(
        <>
            <h3>Saving Throws</h3>
            <h5>Strength: {saving_throws.strength ? "Yes" : "No"}</h5>
            <h5>Dexterity: {saving_throws.dexterity ? "Yes" : "No"}</h5>
            <h5>Constitution: {saving_throws.constitution ? "Yes" : "No"}</h5>
            <h5>Intelligence: {saving_throws.intelligence ? "Yes" : "No"}</h5>
            <h5>Wisdom: {saving_throws.wisdom ? "Yes" : "No"}</h5>
            <h5>Charisma: {saving_throws.charisma ? "Yes" : "No"}</h5>
        </>
    )
}

export default SavingThrows;