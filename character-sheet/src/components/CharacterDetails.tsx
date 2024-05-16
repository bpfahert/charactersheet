import { Details } from "../types";

function CharacterDetails({details}: Details) {
    
    return(
        <>
            <div>
                Name: {details.name}
                Class/Level: {details.class_one.class} Level {details.class_one.level}
                Race: {details.race}
                Background: {details.background}
                Experience Points(optional): {details.experience_points}
            </div>
        </>
    )
}

export default CharacterDetails;