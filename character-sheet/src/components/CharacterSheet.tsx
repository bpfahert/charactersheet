import { useState, useEffect } from "react";
import AbilityScores from "./AbilityScores";
import CharacterDetails from "./CharacterDetails";
import Coins from "./Coins";
import AttacksBox from "./AttackBox";
import Stats from "./BattleStats";
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";
import EquipmentBox from "./EquipmentBox";
import { Character } from "../types";

function CharacterSheet({character} : {character : Character}) {

    return (
        <>
          <div>D&D Character sheet</div>
          <CharacterDetails details={character.details}/>
          <Stats stats={character.stats.battle_stats}/>
          <AbilityScores scoreset={character.stats.ability_scores} />
          <Skills skills={character.skill_proficiencies} abilityMods={character.ability_modifiers}/>
          <SavingThrows savingThrows={character.saving_throw_proficiencies} abilityMods={character.ability_modifiers}/>
          <AttacksBox attacks={character.attacks} />
          <Coins coins={character.money} />
          <EquipmentBox equipment={character.equipment}/>
        </>
      )
}

export default CharacterSheet;
