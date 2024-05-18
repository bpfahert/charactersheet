export interface Character {
    details: Details,
    money: Currency,
    notes?: string[],
    proficiencies: Proficiencies,
    stats: {
        level: number,
        ability_scores: Abilities,
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
    }
}