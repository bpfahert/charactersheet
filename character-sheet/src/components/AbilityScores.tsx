import { Abilities } from "../types";

interface AbilityScoreProp {
    scoreset: Abilities,
}

function AbilityScores({scoreset}: AbilityScoreProp) {


    return(
        <>
            <h3>Ability Scores</h3>
            <div>Strength: {scoreset.strength}</div>
            <div>Dexterity: {scoreset.dexterity}</div>
            <div>Constitution: {scoreset.constitution}</div>
            <div>Intelligence: {scoreset.intelligence}</div>
            <div>Wisdom: {scoreset.wisdom}</div>
            <div> Charisma: {scoreset.charisma}</div>
        </>
    )

}


export default AbilityScores;