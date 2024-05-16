import { Abilities } from "../types";

function AbilityScores({scoreset}: Abilities) {


    return(
        <>
            <div>
                Strength: {scoreset.strength}
                Dexterity: {scoreset.dexterity}
                Constitution: {scoreset.constitution}
                Intelligence: {scoreset.intelligence}
                Wisdom: {scoreset.wisdom}
                Charisma: {scoreset.charisma}
            </div>
        </>
    )

}


export default AbilityScores;