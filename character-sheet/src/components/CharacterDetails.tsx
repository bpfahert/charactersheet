import { Details } from "../types";

interface DetailsProp {
    details: Details,
}

function CharacterDetails({details}: DetailsProp) {
    
    return(
        <>
            <h3>Character Details</h3>
            <div>Name: {details.name}</div>
            <div>Class/Level: {details.class_one.class} Level {details.class_one.level}</div>
            <div>Race: {details.race}</div>
            <div>Background: {details.background}</div>
        </>
    )
}

export default CharacterDetails;