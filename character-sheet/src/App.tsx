import { useState, useEffect } from "react";
import AbilityScores from "./components/AbilityScores";
import CharacterDetails from "./components/CharacterDetails";
import Coins from "./components/Coins";
import AttacksBox from "./components/AttackBox";
import Stats from "./components/BattleStats";
import SavingThrows from "./components/SavingThrows";
import Skills from "./components/Skills";
import EquipmentBox from "./components/EquipmentBox";

function App() {
  const [level, setLevel] = useState(4);
  const [characterDetails, setCharacterDetails] = useState({name: "Caleb", class_one: {class: "wizard", level: 4}, race: "human", background: "student"});
  const [abilityScores, setAbilityScores] = useState({strength: 8, dexterity: 12, constitution: 14, intelligence: 16, wisdom: 13, charisma: 11});
  const [abilityModifiers, setAbilityModifiers] = useState({strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0, proficiency: 0});
  const [playerCoins, setPlayerCoins] = useState({platinum: 0, gold: 50, electrum: 0, silver: 12, copper: 5});
  const [equipmentList, setEquipmentList] = useState(["Adventurer's kit", "Rope", "Thieve's Tools"]);
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

  useEffect(() => {
    setAbilityModifiers({
      strength: Math.floor((abilityScores.strength - 10) / 2),
      dexterity: Math.floor((abilityScores.dexterity - 10) / 2),
      constitution: Math.floor((abilityScores.constitution - 10) / 2),
      intelligence: Math.floor((abilityScores.intelligence - 10) / 2),
      wisdom: Math.floor((abilityScores.wisdom - 10) / 2),
      charisma: Math.floor((abilityScores.charisma - 10) / 2),
      proficiency: Math.ceil(1 + (0.25 * level)),
    });
  },[abilityScores, level])


  return (
    <>
      <div>D&D Character sheet</div>
      <CharacterDetails details={characterDetails}/>
      <Stats stats={stats}/>
      <AbilityScores scoreset={abilityScores} />
      <Skills skills={skillset} abilityMods={abilityModifiers}/>
      <SavingThrows savingThrows={savingThrows} abilityMods={abilityModifiers}/>
      <AttacksBox attacks={attackList} />
      <Coins coins={playerCoins} />
      <EquipmentBox equipment={equipmentList}/>
      <h3>Ability Mods:</h3>
      <div>Strength mod: {abilityModifiers.strength}</div>
      <div>Dexterity mod: {abilityModifiers.dexterity}</div>
      <div>Constitution mod: {abilityModifiers.constitution}</div>
      <div>Intelligence mod: {abilityModifiers.intelligence}</div>
      <div>Wisdom mod: {abilityModifiers.wisdom}</div>
      <div>Charisma mod: {abilityModifiers.charisma}</div>
    </>
  )
}

export default App;