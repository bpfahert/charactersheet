import { Details } from "../types";

function CharacterDetails({details}: Details) {
    
    return(
        <>
            <h3>Character Details</h3>
            <div>Name: {details.name}</div>
            <div>Class/Level: {details.class_one.class} Level {details.class_one.level}</div>
            <div>Race: {details.race}</div>
            <div>Background: {details.background}</div>
            <div>Experience Points(optional): {details.experience_points}</div>
        </>
    )
}

export default CharacterDetails;