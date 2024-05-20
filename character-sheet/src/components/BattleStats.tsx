import { BattleStats } from "../types";

function Stats(BattleStats: BattleStats) {

    return(
        <>
            <h3>Battle Stats</h3>
            <div>
                <h4>Armor Class: {BattleStats.armor_class}</h4>
                <h4>Initiative: {BattleStats.initiative}</h4>
                <h4>Speed: {BattleStats.speed.walking}</h4>
            </div>
            <div>Current HP: {BattleStats.hit_points.current_hp}</div>
            <div>Max HP: {BattleStats.hit_points.max_hp}</div>
            <div>Temp HP: {BattleStats.hit_points.temp_hp}</div>
            <div>Current Hit Dice: {BattleStats.hit_dice.current_hit_dice}</div>
            <div>Max Hit Dice: {BattleStats.hit_dice.total_hit_dice}</div>
            <div>Death Saves: </div>
            <div>Successes: {BattleStats.death_saves.successes}</div>
            <div>Failures: {BattleStats.death_saves.failures}</div>
        </>
    )
}



export default Stats;