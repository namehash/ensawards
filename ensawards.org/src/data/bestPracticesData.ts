export interface BestPractice {
    name: string;
    description: string;
    technicalDetails: {
        main: {
            header: string;
            content: string;
        },
        sides: {
            header: string;
            content: string;
        }[],
        card: {
            header: string;
            content: string;
            additionalData: {
                name: string;
                value: string;
                valueStyles: string;
                link?: URL;
            }[]
        }
    }
}


export interface BestPracticeCategory {
    name: string;
    description: string;
    bestPractices: BestPractice[];
}

export const bestPracticesCategoryCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //temporary placeholder before we have data
