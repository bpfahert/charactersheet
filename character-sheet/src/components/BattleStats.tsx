import { BattleStats } from "../types";

interface BattleStatsProp {
    stats: BattleStats,

}

function Stats({stats}: BattleStatsProp) {

    return(
        <>
            <h3>Battle Stats</h3>
            <div>
                <h4>Armor Class: {stats.armor_class}</h4>
                <h4>Initiative: {stats.initiative_bonus}</h4>
                <h4>Speed: {stats.speed.walking}</h4>
            </div>
            <div>Current HP: {stats.hit_points.current_hp}</div>
            <div>Max HP: {stats.hit_points.max_hp}</div>
            <div>Temp HP: {stats.hit_points.temp_hp}</div>
            <div>Current Hit Dice: {stats.hit_dice.current_hit_dice}</div>
            <div>Max Hit Dice: {stats.hit_dice.total_hit_dice}</div>
            <div>Death Saves: </div>
            <div>Successes: {stats.death_saves.successes}</div>
            <div>Failures: {stats.death_saves.failures}</div>
        </>
    )
}



export default Stats;