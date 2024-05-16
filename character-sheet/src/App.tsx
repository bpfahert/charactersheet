import { useState } from "react";
import AbilityScores from "./components/AbilityScores";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  const [characterDetails, setCharacterDetails] = useState({name: "Caleb", class_one: {class: "wizard", level: 4}, race: "human", background: "student"});
  const [abilityScores, setAbilityScores] = useState({strength: 8, dexterity: 12, constitution: 14, intelligence: 16, wisdom: 12, charisma: 12});

  return (
    <>
      <div>D&D Character sheet</div>
      <CharacterDetails details={characterDetails}/>
      <AbilityScores scoreset={abilityScores} />
    </>
  )
}

export default App;