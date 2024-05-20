import { useState } from "react";
import AbilityScores from "./components/AbilityScores";
import CharacterDetails from "./components/CharacterDetails";
import Coins from "./components/Coins";
import AttacksBox from "./components/AttackBox";
import Stats from "./components/BattleStats";
import SavingThrows from "./components/SavingThrows";
import Skills from "./components/Skills";

function App() {
  const [characterDetails, setCharacterDetails] = useState({name: "Caleb", class_one: {class: "wizard", level: 4}, race: "human", background: "student"});
  const [abilityScores, setAbilityScores] = useState({strength: 8, dexterity: 12, constitution: 14, intelligence: 16, wisdom: 12, charisma: 12});
  const [playerCoins, setPlayerCoins] = useState({platinum: 0, gold: 50, electrum: 0, silver: 12, copper: 5});
  const [attackList, setAttackList] = useState([{name: "Scimitar", attack_bonus: 3, damage: "1d8", damage_type: "Slashing"}]);
  const [stats, setStats] = useState({armor_class: 12, initiative_bonus: 2, speed: {walking: 30}, hit_points: {current_hp: 32, max_hp: 35, temp_hp: 0}, hit_dice: {total_hit_dice: 4, current_hit_dice: 2}, death_saves: {successes: 1, failures: 2}});
  const [savingThrows, setSavingThrows] = useState({strength: false, dexterity: false, constitution: true, intelligence: true, wisdom: true, charisma: false});
  const [skillset, setSkillset] = useState({
  acrobatics: false,
  animal_handling: false,
  arcana: true,
  athletics: false,
  deception: false,
  history: true,
  insight: true,
  intimidation: false,
  investigation: false,
  medicine: true,
  nature: false,
  perception: true,
  performance: false,
  persuasion: false,
  religion: true,
  sleight_of_hand: false,
  stealh: false,
  survival: true,
  })
  


  return (
    <>
      <div>D&D Character sheet</div>
      <CharacterDetails details={characterDetails}/>
      <Stats stats={stats}/>
      <AbilityScores scoreset={abilityScores} />
      <Skills skills={skillset} />
      <SavingThrows saving_throws={savingThrows} />
      <AttacksBox attacks={attackList} />
      <Coins coins={playerCoins} />
    </>
  )
}

export default App;