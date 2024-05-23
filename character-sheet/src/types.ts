export interface Character {
    details: Details,
    features_and_traits: string[],
    money: Currency,
    attacks: Attack[],
    spells: Spell[],
    equipment: string[],
    notes?: string[],
    saving_throw_proficiencies: SavingThrowProficiencies,
    skill_proficiencies: SkillProficiencies,
    other_proficiencies: string[],
    languages: string[],
    stats: {
        level: number,
        ability_scores: Abilities,
        battle_stats: BattleStats,
        proficiency_modifier: number,
        experience_points? : number,
    },
    ability_modifiers: AbilityMods,
}

export interface Abilities {
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
}

export interface AbilityMods {
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
    proficiency: number,
}

export interface AbilityModProps {
    abilityMods: AbilityMods,
}

export interface Attack {
        name: string,
        damage: string,
        damage_type: string,
        proficient: boolean,
        id: string,
        attack_type: string,
}


export interface BattleStats {
    armor_class: number,
    initiative_bonus: number,
    speed: {
        walking: number,
        climbing?: number,
        flying?: number,
    },
    hit_points: {
        current_hp: number,
        max_hp: number,
        temp_hp: number,
    }
    hit_dice: {
        total_hit_dice: number,
        current_hit_dice: number,
    },
    death_saves: {
        successes: number,
        failures: number,
    }
}

export interface Currency {
    platinum: number,
    gold: number,
    electrum: number,
    silver: number,
    copper: number
}

export interface Details {
    name: string,
    class_one: {
        class: string,
        level: number,        
    },
    class_two?: {
        class: string,
        level: number,
    },
    class_three?: {
        class: string,
        level: number,
    }
    race: string,
    background: string,    
}

export interface SavingThrowProficiencies {
    strength: boolean,
    dexterity: boolean,
    constitution: boolean,
    intelligence: boolean,
    wisdom: boolean,
    charisma: boolean,
}

export interface SkillProficiencies {
    acrobatics: boolean,
    animal_handling: boolean,
    arcana: boolean,
    athletics: boolean,
    deception: boolean,
    history: boolean,
    insight: boolean,
    intimidation: boolean,
    investigation: boolean,
    medicine: boolean,
    nature: boolean,
    perception: boolean,
    performance: boolean,
    persuasion: boolean,
    religion: boolean,
    sleight_of_hand: boolean,
    stealh: boolean,
    survival: boolean,
}

export interface Spell {
    name: string,
    level: number,
    type: string,
    school: string,
    range: string,
    target: string,
    components: string,
    classes: string,
    description: string,
    higher_levels?: string,

}