import { SkillProficiencies} from "../types";
import { AbilityModProps } from "../types";

interface SkillProps {
    skills: SkillProficiencies,
}

function Skills({skills, abilityMods}: SkillProps & AbilityModProps) {
    
    return(
        <>
            <h3>Skills</h3>
            <h5>Acrobatics: {abilityMods.dexterity + (skills.acrobatics ? abilityMods.proficiency : 0)}</h5>
            <h5>Animal Handling: {abilityMods.wisdom + (skills.animal_handling ? abilityMods.proficiency : 0)}</h5>
            <h5>Arcana: {abilityMods.intelligence + (skills.arcana ? abilityMods.proficiency : 0)}</h5>
            <h5>Athletics: {abilityMods.strength + (skills.athletics ? abilityMods.proficiency : 0)}</h5>
            <h5>Deception: {abilityMods.charisma + (skills.deception ? abilityMods.proficiency : 0)}</h5>
            <h5>History: {abilityMods.intelligence + (skills.history ? abilityMods.proficiency : 0)}</h5>
            <h5>Insight: {abilityMods.wisdom + (skills.insight ? abilityMods.proficiency : 0)}</h5>
            <h5>Intimidation: {abilityMods.charisma + (skills.intimidation ? abilityMods.proficiency : 0)}</h5>
            <h5>Investigation: {abilityMods.intelligence + (skills.investigation ? abilityMods.proficiency : 0)}</h5>
            <h5>Medicine: {abilityMods.wisdom + (skills.medicine ? abilityMods.proficiency : 0)}</h5>
            <h5>Nature: {abilityMods.intelligence + (skills.nature ? abilityMods.proficiency : 0)}</h5>
            <h5>Perception: {abilityMods.wisdom + (skills.perception ? abilityMods.proficiency : 0)}</h5>
            <h5>Performance: {abilityMods.charisma + (skills.performance ? abilityMods.proficiency : 0)}</h5>
            <h5>Persuasion: {abilityMods.charisma + (skills.persuasion ? abilityMods.proficiency : 0)}</h5>
            <h5>Religion: {abilityMods.intelligence + (skills.religion ? abilityMods.proficiency : 0)}</h5>
            <h5>Sleight of Hand: {abilityMods.dexterity + (skills.sleight_of_hand ? abilityMods.proficiency : 0)}</h5>
            <h5>Stealh: {abilityMods.dexterity + (skills.stealh ? abilityMods.proficiency : 0)}</h5>
            <h5>Survival: {abilityMods.wisdom + (skills.survival ? abilityMods.proficiency : 0)}</h5>
        </>
    )
}

export default Skills;