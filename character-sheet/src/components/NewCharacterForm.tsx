import { useState } from "react";

function NewCharacterForm() {
    const [newCharacter, setNewCharacter] = useState({
        name: "", classone: "", classonelevel: 1, race: "", background: "", languages: "",
        features_and_traits: [],
        level: 1,
        strscore: 10,
        dexscore: 10,
        conscore: 10,
        intscore: 10,
        wisscore: 10,
        chascore: 10,
        proficiency_modifier: 1,
        ac: 12,
        initiative: 1,
        speed: 30,
        max_hp: 10,
        current_hp: 10,
        temp_hp: 0,
        max_hit_dice: "1 d8",
        current_hit_dice: "1d8",
        death_save_successes: 0,
        death_save_fails: 0,
    })
        

    const createCharacter = (character: any) => {
        const finalCharacter = {
            details: {
                name: newCharacter.name,
                race: newCharacter.race,
                background: newCharacter.background,
                languages: newCharacter.languages,
                class_one: {
                    class: newCharacter.classone,
                    level: newCharacter.classonelevel,
                }
            },
            features_and_traits: [newCharacter.features_and_traits],
            stats: {
                level: 1, 
                ability_scores: {strength: newCharacter.strscore, dexterity: newCharacter.dexscore, constitution: newCharacter.conscore, intelligence: newCharacter.intscore, wisdom: newCharacter.wisscore, charisma: newCharacter.chascore}, 
                battle_stats: {ac: newCharacter.ac, initiative_bonus: newCharacter.initiative, speed: {walking: newCharacter.speed}, hit_points: {max_hp: newCharacter.max_hp, current_hp: newCharacter.current_hp, temp_hp: newCharacter.temp_hp}, hit_dice: {total_hit_dice: newCharacter.max_hit_dice, current_hit_dice: newCharacter.current_hit_dice}, death_saves: {successes: newCharacter.death_save_successes, failures: newCharacter.death_save_fails}},
            }, 
                proficiency_modifier: newCharacter.proficiency_modifier,
        }
    }

        
    const handleChange = (e: any) => {
        setNewCharacter((prevState) => ({
            ...prevState,
            [e.target.getAttribute('name')]: e.target.value,
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        createCharacter(newCharacter);
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <div className="row">
                <input type="text" id="newcharactername" name="name" required maxLength={60} onChange={handleChange}></input>
                <label htmlFor="name">Character Name</label>
                <input type="text" id="newcharacterlevel" name="level" required maxLength={2} onChange={handleChange}></input>
                <label htmlFor="level">Level</label>
                <input type="text" id="newcharacterproficiencymod" name="proficiencymod" maxLength={1} onChange={handleChange}></input>
                <label htmlFor="proficiencymod">Proficiency Modifier</label>
            </div>
            <div className="row battlestats">
                <input type="text" id="newcharacterac" name="ac" maxLength={2} onChange={handleChange}></input>
                <label htmlFor="ac">Armor Class</label>
                <input type="text" id="newcharacterinitiative" name="initiative" maxLength={2} onChange={handleChange}></input>
                <label htmlFor="initiative">Initiative Bonus</label>
                <input type="text" id="newcharacterwalkspeed" name="walkspeed" maxLength={2} onChange={handleChange}></input>
                <label htmlFor="walkspeed">Speed</label>
                <input type="text" id="newcharactermaxhp" name="maxhp" maxLength={4} onChange={handleChange}></input>
                <label htmlFor="maxhp">Max Hit Points</label>
                <input type="text" id="newcharactercurrenthp" name="currenthp" maxLength={4} onChange={handleChange}></input>
                <label htmlFor="currenthp">Current Hit Points</label>
                <input type="text" id="newcharactertemphp" name="temphp" maxLength={4} onChange={handleChange}></input>
                <label htmlFor="temphp">Temporary Hit Points</label>
                <input type="text" id="newcharactermaxhitdice" name="maxhitdice" maxLength={10} onChange={handleChange}></input>
                <label htmlFor="maxhitdice">Total Hit Dice</label>
                <input type="text" id="newcharactercurrenthitdice" name="currenthitdice" maxLength={10} onChange={handleChange}></input>
                <label htmlFor="currenthitdice">Current Hit Dice</label>
                <input type="text" id="newcharacterdeathsavesuccesses" name="dssuccesses" maxLength={1} onChange={handleChange}></input>
                <label htmlFor="dssuccesses">Death Save Successes</label>
                <input type="text" id="newcharacterdeathsavefails" name="dsfails" maxLength={1} onChange={handleChange}></input>
                <label htmlFor="dsfails">Death Save Fails</label>
            </div>
            <input type="text" id="newcharacterclassone" name="classone" required maxLength={15} onChange={handleChange}></input>
            <label htmlFor="classone">Class</label>
            <input type="text" id="newcharacterclassonelevel" name="classonelevel" required maxLength={2} onChange={handleChange}></input>
            <label htmlFor="classonelevel">Class Level</label>
            <input type="text" id="newcharacterrace" name="race" required maxLength={60} onChange={handleChange}></input>
            <label htmlFor="race">Race</label>
            <input type="text" id="newcharacterbackground" name="background" maxLength={30} onChange={handleChange}></input>
            <label htmlFor="background">Background</label>
            <input type="text" id="newcharacterfeatures" name="features" maxLength={300} onChange={handleChange}></input>
            <label htmlFor="languages">Features and Traits</label>
            <div className="row">
                <input type="text" id="newcharacterstrscore" name="strscore" maxLength={2} onChange={handleChange}></input>
                <label htmlFor="strscore">Strength</label>
                <input type="text" id="newcharacterdexscore" name="dexscore" maxLength={2} onChange={handleChange}></input>
                <label htmlFor="dexscore">Dexterity</label>
                <input type="text" id="newcharacterconscore" name="conscore" maxLength={2} onChange={handleChange}></input>
                <label htmlFor="conscore">Constution</label>
                <input type="text" id="newcharacterintscore" name="intscore" maxLength={2} onChange={handleChange}></input>
                <label htmlFor="intscore">Intelligence</label>
                <input type="text" id="newcharacterwisscore" name="wisscore" maxLength={2} onChange={handleChange}></input>
                <label htmlFor="wisscore">Wisdom</label>
                <input type="text" id="newcharacterchascore" name="chascore" maxLength={2} onChange={handleChange}></input>
                <label htmlFor="chascore">Charisma</label>
            </div>
            <input type="text" id="newcharacterlanguages" name="languages" maxLength={200} onChange={handleChange}></input>
            <label htmlFor="languages">Languages</label>
            <button type="button" onClick={() => createCharacter(newCharacter)}>Submit</button>
        </form>
    )
}


export default NewCharacterForm;