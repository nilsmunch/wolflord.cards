// cardData.ts
interface CardData {
    title: string;
    url: string;
    faction: string;
    type: string;
}

const cardData: CardData[] = [
    {
        title: 'Villager',
        url: '/villager',
        faction: 'town',
        type: 'crowd',
    },
    {
        title: 'Werewolf',
        url: '/werewolf',
        faction: 'wolf',
        type: 'attacker',
    }
    // Add more links as needed
];
export default cardData;
