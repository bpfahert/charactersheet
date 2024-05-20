export interface Character {
    details: Details,
    features_and_traits: string[],
    money: Currency,
    attacks: AttacksAndSpells,
    equipment: string[],
    notes?: string[],
    proficiencies: Proficiencies,
    stats: {
        level: number,
        ability_scores: Abilities,
        battle_stats: BattleStats,
        proficiency_modifier: number,
        experience_points? : number,
    }
}

export interface Abilities {
    scoreset: {
        strength: number,
        dexterity: number,
        constitution: number,
        intelligence: number,
        wisdom: number,
        charisma: number,
    }
}

export interface AttacksAndSpells {
    attack: {
        name: string,
        attack_bonus: number,
        damage: string,
        damage_type: string,
    }[],
    notes: string,
}


export interface BattleStats {
    armor_class: number,
    initiative: number,
    speed: {
        walking: number,
        climbing: number,
        flying: number,
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
    },
}

export interface Currency {
    coins: {
        platinum: number,
        gold: number,
        electrum: number,
        silver: number,
        copper: number
    }
}

export interface Details {
    details: {
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
}

export interface Proficiencies {
    saving_throws: {
        strength: boolean,
        dexterity: boolean,
        constituion: boolean,
        intelligence: boolean,
        wisdom: boolean,
        charisma: boolean,
    },
    skills: {
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
    },
    other_proficiencies: string[],
    languages: string[],
}