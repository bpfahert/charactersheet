import { SkillProficiencies} from "../types";


function Skills({skills}: SkillProficiencies) {
    
    return(
        <>
            <h3>Skills</h3>
            <h5>Acrobatics: {skills.acrobatics ? "Yes" : "No"}</h5>
            <h5>Animal Handling: {skills.animal_handling ? "Yes" : "No"}</h5>
            <h5>Arcana: {skills.arcana ? "Yes" : "No"}</h5>
            <h5>Athletics: {skills.athletics ? "Yes" : "No"}</h5>
            <h5>Deception: {skills.deception ? "Yes" : "No"}</h5>
            <h5>History: {skills.history ? "Yes" : "No"}</h5>
            <h5>Insight: {skills.insight ? "Yes" : "No"}</h5>
            <h5>Intimidation: {skills.intimidation ? "Yes" : "No"}</h5>
            <h5>Investigation: {skills.investigation ? "Yes" : "No"}</h5>
            <h5>Medicine: {skills.medicine ? "Yes" : "No"}</h5>
            <h5>Nature: {skills.nature ? "Yes" : "No"}</h5>
            <h5>Perception: {skills.perception ? "Yes" : "No"}</h5>
            <h5>Performance: {skills.performance ? "Yes" : "No"}</h5>
            <h5>Persuasion: {skills.persuasion ? "Yes" : "No"}</h5>
            <h5>Religion: {skills.religion ? "Yes" : "No"}</h5>
            <h5>Sleight of Hand: {skills.sleight_of_hand ? "Yes" : "No"}</h5>
            <h5>Stealh: {skills.stealh ? "Yes" : "No"}</h5>
            <h5>Survival: {skills.survival ? "Yes" : "No"}</h5>
        </>
    )
}

export default Skills;