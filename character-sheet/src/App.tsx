import { useState, useEffect } from "react";
import CharacterSheet from "./components/CharacterSheet";
import { Character } from "./types";
import AbilityScores from "./components/AbilityScores";

function App() {
  const [characterOne, setCharacterOne] = useState<Character>({
    details: {name: "Caleb", class_one: {class: "wizard", level: 4}, race: "human", background: "student"},
    features_and_traits: ["Feat - Keen Mind - Always know true north and the time of day.", "Darkvision - Can see in darkness up to 60 feet"],
    money: {platinum: 0, gold: 50, electrum: 0, silver: 12, copper: 5},
    attacks: [{name: "Scimitar", attack_bonus: 3, damage: "1d8", damage_type: "Slashing"}, {name: "Quarterstaff", attack_bonus: 2, damage: "1d6", damage_type: "Bludgeoning"}],
    equipment: ["Adventurer's kit", "Rope", "Thieve's Tools"],
    saving_throw_proficiencies: {strength: false, dexterity: false, constitution: true, intelligence: true, wisdom: true, charisma: false},
    skill_proficiencies: {acrobatics: false, animal_handling: false,arcana: true, athletics: false, deception: false, history: true, insight: true, intimidation: false, investigation: false, medicine: true, nature: false, perception: true, performance: false, persuasion: false, religion: true, sleight_of_hand: false, stealh: false, survival: true},
    other_proficiencies: ["Thieves Tools", "Quarterstaffs", "Scimitars", "Gaming set"],
    languages: ["Common", "Dwarven", "Elvish"],
    stats: {
        level: 4,
        ability_scores: {strength: 8, dexterity: 12, constitution: 14, intelligence: 16, wisdom: 13, charisma: 11},
        battle_stats: {armor_class: 12, initiative_bonus: 2, speed: {walking: 30}, hit_points: {current_hp: 32, max_hp: 35, temp_hp: 0}, hit_dice: {total_hit_dice: 4, current_hit_dice: 2}, death_saves: {successes: 1, failures: 2}},
        proficiency_modifier: 2,
    },
    ability_modifiers: {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0, proficiency: 0},
 })

 useEffect(() => {
  setCharacterOne({
    ...characterOne,
    ability_modifiers: {
      strength: Math.floor((characterOne.stats.ability_scores.strength - 10) / 2),
      dexterity: Math.floor((characterOne.stats.ability_scores.dexterity - 10) / 2),
      constitution: Math.floor((characterOne.stats.ability_scores.constitution - 10) / 2),
      intelligence: Math.floor((characterOne.stats.ability_scores.intelligence - 10) / 2),
      wisdom: Math.floor((characterOne.stats.ability_scores.wisdom - 10) / 2),
      charisma: Math.floor((characterOne.stats.ability_scores.charisma - 10) / 2),
      proficiency: Math.ceil(1 + (0.25 * characterOne.stats.level))},
  })
 }, [characterOne.stats.ability_scores, characterOne.stats.level]);

  return (
    <>
      <div>D&D Character sheet</div>
      <CharacterSheet character={characterOne} />
    </>
  )
}

export default App;