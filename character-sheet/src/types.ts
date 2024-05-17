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
        experience_points?: number,
    
    }    
}