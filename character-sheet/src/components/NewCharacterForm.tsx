import { useState } from "react";

function NewCharacterForm() {
    const [newCharacter, setNewCharacter] = useState({name: "", classone: "", classonelevel: 1, race: "", background: "", languages: ""})

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
            }
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
            <div className="row"></div>
            <input type="text" id="newcharactername" name="name" required maxLength={60} onChange={handleChange}></input>
            <label htmlFor="name">Character Name</label>
            <input type="text" id="newcharacterclassone" name="classone" required maxLength={15} onChange={handleChange}></input>
            <label htmlFor="classone">Class</label>
            <input type="text" id="newcharacterlevel" name="classonelevel" required maxLength={2} onChange={handleChange}></input>
            <label htmlFor="classonelevel">Class Level</label>
            <input type="text" id="newcharacterlevel" name="race" required maxLength={60} onChange={handleChange}></input>
            <label htmlFor="race">Race</label>
            <input type="text" id="newcharacterlevel" name="background" maxLength={30} onChange={handleChange}></input>
            <label htmlFor="background">Background</label>
            <input type="text" id="newcharacterlevel" name="languages" maxLength={200} onChange={handleChange}></input>
            <label htmlFor="languages">Languages</label>
            <button type="button" onClick={() => createCharacter(newCharacter)}>Submit</button>
        </form>
    )
}


export default NewCharacterForm;