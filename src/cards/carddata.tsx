// cardData.ts
interface CardData {
    title: string;
    url: string;
    faction: string;
    type: string;
    artist: string;
    cardtext: string;
    background: string;
}

const cardData: CardData[] = [

    {
        title: 'Admiral',
        url: '/admiral',
        faction: 'Town',
        type: 'Investigator',
        artist: 'Forrest Imel',
        cardtext: 'Each night, wake after the Town Defender.<br/>You will see the faction of any players that are defended this night.',
        background: 'A long, long time ago in a faraway land. There lived a great and powerful admiral. She was revered as the greatest admiral in the kingdom, but few knew where she came from or where she had trained. She was known for her courage, her strength, and her cunning. She was a hero to the people and a legend in his own time.<br/>One day, this great Admiral was walking along the shore when she saw a smaller boat stranded on the rocks.<br/>Inside the boat was a beautiful young woman. She was crying and her clothes were drenched from the sea spray. When she saw the Admiral, she begged her for help. The Admiral brought her back to shore and helped her to dry off. She saw that the girl was freezing so he built a fire and gave her some of her own clothes to wear.<br/>After she had warmed up, the Admiral asked her what had happened to her. The woman told him that her ship had been wrecked in a storm and that she had been the only survivor.<br/>The Admiral was heartbroken to hear about the woman\'s plight. She decided to bring her aboard her ship and give her shelter. She fed her a hot meal and made sure she was comfortable the best she could.<br/>But the innocent veneer of this woman did not fool the Admiral... She was a mermaid.<br/>Her inner soul was that of the flowing currents and her true voice was like silk. She was also very powerful and could control the wind and the waves. She was a master manipulator and could charm anyone with her beauty. She was also a great swimmer and could breathe underwater. She was a dangerous creature but she was also very intelligent. She was a creature of myth and legend and many people feared her.<br/>So as this innocent woman lay in her bed sleeping, the Admiral grabbed a knife from the kitchen and held it at the mermaid\'s throat. "I know who you are," said the Admiral "...and I do not want to harm you. But if you are here to seduce me, I will cut you down where you stand."<br/>The mermaid nodded silently and sat up. She thanked the Admiral for her hospitality, then lept out the window unto the waves below.<br/>The Admiral never saw her again but knew that she was still out there in the cold dark ocean.'
    },
    {
        title: 'Amalgam',
        url: '/amalgam',
        faction: 'Chaos',
        type: 'Specialist',
        artist: '',
        cardtext: 'The Amalgam is any and all factions, role types, and specific roles at all times.<br/>The Amalgam is always the neighbor of all other players.<br/>The amalgamation needs to be investigated, protected, and nominated to secure its victory.',
        background: ''
    },
    {
        title: 'Aphrodite',
        url: '/aphrodite',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Anastasia Asteltainn',
        cardtext: 'Picks a player on even rounds, which neighbour players are forced to visit.<br/>Have a player killed this way to win the game.',
        background: 'Aphrodite wields her beauty and her charm with much the same lethality as I could wield the spear. I have seen her handiwork first-hand, and it is often not as pretty as she is. I sometimes think that she, among all the Olympians, may be the mightiest of all.<br/>A crashing wave or thundering tempest are preferable to a broken heart. Yet, while love\'s the force that brought me and countless others low in life, it also brought me and countless others strength, beyond the bounds of normal men. Still I fear that Aphrodite\'s power is the most terrible in all the world.'
    },
    {
        title: 'Apprentice',
        url: '/apprentice',
        faction: 'Town',
        type: 'Support',
        artist: 'Alex Tooth',
        cardtext: 'If the Town Investigator dies, you secretly take over their role.<br/>Your aura is always truthful.',
        background: 'Arcane gifts are fickle at best, and the skills required to weild these mysterious arts requires not only boundless studies, but also the spark of magic in your soul.<br/>Therefor, true apprentices are not only those who wish to become magical, but also those who can.<br/>This, combined with the knowledge that Seers and Oracles often don\'t have long lifespans, is the reason that a valid Apprentice can be truely hard to come by.<br/>But for those who pick up the mantle, can save everyone around them if they keep a cool head and their eyes peeled.'
    },
    {
        title: 'Arachne',
        url: '/arachne',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. If nominated, all Town roles secretly target themselves tonight.',
        background: ''
    },
    {
        title: 'Arcanist',
        url: '/arcanist',
        faction: 'Town',
        type: 'Investigator',
        artist: 'Asanee Srikijvilaikul',
        cardtext: 'After the third player has been killed by a wolf, the Arcanist is shown the closest Wolf card and player, then this ability resets.',
        background: 'In the shadowed corners of Aeloria, where misty realms whispered of forgotten truths, a legend emerged about an Arcanist named Lysandra. She was born not out of joy, but during a sinister celestial event known only as the Dark Convergence.<br/>Lysandra’s magic wasn\'t like the gentle Arcanum of old. It was raw, unpredictable, a side effect of her ominous birth. As she grew, so did her power over this malevolent Arcanum, weaving shadows and bending whispers to her will.<br/>Maelor, the ancient seer, once revered, had been driven mad by visions of impending doom. He spoke endlessly of Lysandra, of her dark potential. But rather than fear her, many sought to use her, seeing in her abilities the promise of power and dominance.<br/>The abyss, known as "The Void," was no longer just a dark fable but began seeping into the realms. Instead of confronting it, Lysandra found herself inexplicably drawn to it. The Void whispered to her, promising even greater power, and the Arcanist found herself unable to resist.<br/>Lysandra\'s quests were not to gather shards but to plunge realms into darkness willingly. Cities that once shimmered in glory turned to ghost towns under her shadow, their denizens either fleeing or transformed into shadowy wraiths.<br/>The more she channeled the Dark Arcanum, the less human she became. Her eyes became pits of endless night, and her voice, a haunting echo of despair.<br/>And so, in Aeloria, the once-revered star realms were overshadowed by a relentless eclipse. Lysandra, the Dark Arcanist, didn\'t become a beacon of hope but a harbinger of endless night, a legend spoken of with dread and whispered fears.'
    },
    {
        title: 'Ares',
        url: '/ares',
        faction: 'Chaos',
        type: 'Attacker',
        artist: '',
        cardtext: 'Choose another player at the start of the game. This player gets to kill another player when they die.<br/>Then, draw a random card from the discarded roles pile.',
        background: ''
    },
    {
        title: 'Artificer',
        url: '/artificer',
        faction: 'Town',
        type: 'Specialist',
        artist: 'Forrest Imel',
        cardtext: 'If starts the game with a Chaos neighbour, gets a indication that is the case.<br/>The Artificer is immune to all Chaos abilities and attacks.',
        background: ''
    },
    {
        title: 'Ashling',
        url: '/ashling',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Dom Citritelli',
        cardtext: 'Does not hunt. During the wolf round, pick another player.<br/>That player will be seen as a Villager this night.',
        background: 'Not many things are as horrible as a family losing their child to the cold winter. But the Ashling is one of them.<br/>The Ashling is a reanimated corpse of a young child, often visibly damaged by the frost, seeking to reenter the home of its former family.<br/>Now, if one was rational, one would see through the cold gray skin and banish this creature on sight, but the Ashling knows how to pull the heartstrings of the parents of the lost child, and the power of grief can cloud even the strongest minds.<br/>Alas, once the Ashling has been invited into a home, any sanctity of that house is broken, and as long as the Ashling remains there, any other demon or soul can seek refuge inside the hold as if they were invited in as well.<br/>Usually, from this point, the only salvation for the household is the purity of fire. The same can often be said about the family as well...'
    },
    {
        title: 'Assassin',
        url: '/assassin',
        faction: 'Town',
        type: 'Attacker',
        artist: 'Bidaj Doo',
        cardtext: 'Once per game, you may perform a night-time attack.',
        background: ''
    },
    {
        title: 'Auror',
        url: '/auror',
        faction: 'Town',
        type: 'Investigator',
        artist: '',
        cardtext: 'Each night, investigate a player.<br/>You will be told if their role starts with a wovel or not.',
        background: ''
    },
    {
        title: 'Baba Yaga',
        url: '/babayaga',
        faction: 'Chaos',
        type: 'Specialist',
        artist: '',
        cardtext: 'Any character using their nighttime abilities on Baba Yaga receive protection for the night.<br/>If lynched, all characters that received protection last night are eliminated.',
        background: 'In the dense, impenetrable woods of Slavonia, where shadows whispered secrets and trees bore witness to ages long past, there dwelt an enigma as old as the land itself: Baba Yaga. An ancient crone, she lived in a peculiar hut that stood on chicken legs, its entrance forever guarded by the skulls of those who dared to seek her wisdom without respect.<br/>Baba Yaga, with her gnarled fingers and sharp, hawk-like eyes, was a being of contrasts. To some, she was the embodiment of nature\'s unbridled wrath; to others, a guardian of ancient knowledge and arcane mysteries. But all knew one undeniable truth: seeking her aid came with its own set of perils.<br/>Whispers in Slavonia spoke of desperate souls who ventured into the woods, drawn by tales of Baba Yaga\'s unmatched power. Her aid was never freely given; it always demanded a price, often far greater than one was prepared to pay.<br/>A young maiden once sought her to win the heart of a prince. Baba Yaga agreed, granting her a potion of irresistible allure. But the potion\'s magic turned twisted, binding the prince not in love but in unbreakable chains of obsession. The maiden\'s life became one of relentless pursuit, devoid of freedom or respite.<br/>Another tale spoke of a brave warrior who implored Baba Yaga for the strength to vanquish his foes. The crone granted his wish, but with a dire twist. The warrior\'s strength grew boundless, but so did his rage. Unable to differentiate friend from foe, he became a threat to the very people he had sworn to protect.<br/>Yet, not all tales of Baba Yaga were cautionary. Occasionally, those with pure intentions and humble hearts found not a malevolent trickster, but a wise mentor. Such was the story of a young orphan who sought the crone not for power or riches but to understand the language of the woods. Recognizing the boy\'s genuine quest, Baba Yaga guided him, teaching him nature\'s symphony and the secrets of the forest.<br/>Baba Yaga\'s lore was a mirror to the very essence of nature — unpredictable, wild, and neither wholly good nor wholly evil. It served as a stark reminder in Slavonia: seeking the aid of the ancient crone was a gamble, a dance with fate where one misstep could lead to unimaginable consequences. Yet, for those who approached her with respect and honesty, there lay the potential for wisdom and transformation beyond their wildest dreams.'
    },
    {
        title: 'Baker',
        url: '/baker',
        faction: 'Town',
        type: 'Survivor',
        artist: 'Sentient Ink',
        cardtext: 'You are protected at night as long as both of your original neighbors are alive.<br/>If BOTH your neighbors are werewolves, you turn into a werewolf at nightfall.',
        background: ''
    },
    {
        title: 'Banshee',
        url: '/banshee',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Tithi Luadthong',
        cardtext: 'Does not hunt. Once per game, select a player. That player will attack instead of protect tonight.',
        background: ''
    },
    {
        title: 'Barbarian',
        url: '/barbarian',
        faction: 'Town',
        type: 'Attacker',
        artist: 'Forrest Imel',
        cardtext: 'Each night, you may pick a player.<br/>You will attack all player using their nighttime ability on this player.<br/>If the Wolves attack that player, you only attack the one closest to you.',
        background: ''
    },
    {
        title: 'Bard',
        url: '/bard',
        faction: 'Town',
        type: 'Specialist',
        artist: 'Forrest Imel',
        cardtext: 'Everything that happens to the Bard at night is narrated to everyone.',
        background: 'In the melancholy reaches of the known lands, where mountains sigh and forests weep, there echoed the melancholic tunes of a lone bard named Garnild. His lute whispered tales of love and loss, but behind his somber melodies hid a chilling secret.<br/>Every strum of Garnild’s lute, every lilting note, was more than just music – it was a curse. Born under the Veil of Shadows, an event where stars hid and the moon wept, his music bore the weight of this astral sorrow. And as with all things born of darkness, it attracted creatures that lurked in the abyss of nightmares.<br/>With every village he visited, his melodies drew crowds by day but summoned monsters by night. Ghouls with eyes like burning coals, wraiths that wept tears of blood, and horrors unseen, all lured by the haunting notes of his songs.<br/>Garnild, forever haunted, wandered the land not only to share his gift but to stay one step ahead of the terror he unwittingly beckoned. His life was an endless dance, a performance that swayed between the beauty of art and the dread of the hunt.<br/>But not all was grim in Garnild’s life. In a quiet hamlet, he met Liora, a mystic with the power to peer into the threads of fate. She saw through Garnild\'s curse and, together, they sought a way to unravel it. With her guidance, the bard learned to weave protective spells into his songs, to shield villages and hamlets from the beasts of the night.<br/>Their journey was one of peril and discovery, finding ancient runes and long-forgotten spells that might free Garnild from his curse. Yet, with every melody of hope he played, the monsters grew fiercer, their hunger deepened by the very hope that sought to banish them.<br/>In the end, atop the Mourning Peaks, Garnild played his final song. With Liora channeling her power through him, he crafted a ballad so heart-wrenching, so profound, that even the beasts of the abyss paused to listen. The song told of his journey, his torment, but also his undying hope.<br/>As the last note echoed through the peaks, the monsters, bound by the power of the song, were pulled into the abyss, and the Veil of Shadows was lifted.<br/>Garnild’s curse was broken, but the cost was steep. His voice, the instrument of his salvation, was forever silenced. Yet, in the heart of every village, hamlet, and town he had visited, his legend lived on. The bard who sang not just to entertain, but to save, and who sacrificed his voice to give the world its song back.'
    },
    {
        title: 'Barmaid',
        url: '/barmaid',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'Every second night, you may wake up another player and greet them.',
        background: ''
    },
    {
        title: 'Baroness',
        url: '/baroness',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Max Shevchenko',
        cardtext: 'Does not hunt. During the wolf round, pick a player.<br/>If that player is an investigator, all Wolf roles are seen as Villagers.',
        background: ''
    },
    {
        title: 'Berserker',
        url: '/berserker',
        faction: 'Town',
        type: 'Attacker',
        artist: 'Matt Forsyth',
        cardtext: 'When killed, you may immediately attack up to two players who are sitting up to two spaces away from you.',
        background: 'Wild, savage and unstoppable.<br/>The Norse berserkers were said to be almost more beasts than man. Once skilled warriors, the berserkers used their ritualistic practices to acquire powers that made them more than just a formidable foe.<br/>There have been many tales of these wild men who charged into battle wearing nothing but the fur of animals.<br/>They felt no pain or fear and broke through any opposing barricades with thunderous rage.<br/>The berserker warriors were infamous for entering a rage-fuelled trance; their bodies would convulse, their teeth would grind and almost break until the rage had taken over their bodies.<br/>It was said their skin would change color, turning a dark red or purple to match the intense rage.<br/>Berserkers may have been under the influence of multiple substances, allowing their disregard for pain and unpredictable behavior.<br/>The berserkers are believed to have superhuman strength and speed. They were almost unstoppable as they were able to ignore pain. Being able to fight through cuts, slashes and even the loss of their limbs, ignoring wounds that would render a normal man useless.<br/>They have been described as almost possessed while in this state and sometimes losing the distinction between enemy and ally.<br/>In Icelandic folklore, a poet mentions a berserker warrior who when facing his enemy, furiously ate his own shield and then brutally murdering six onlooking men, one of which his own clansmen.'
    },
    {
        title: 'Bestla',
        url: '/bestla',
        faction: 'Chaos',
        type: 'Specialist',
        artist: '',
        cardtext: 'Start of game, see other chaos roles.<br/>When you are alive, other chaos roles are unable to die at night.<br/>You win if the game ends with at least one chaos role alive, not including yourself.',
        background: ''
    },
    {
        title: 'Big Bad Wolf',
        url: '/bigbad',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If a player dies in secret but is not killed by the wolves, you may see their card.',
        background: ''
    },
    {
        title: 'Black Cat',
        url: '/blackcat',
        faction: 'Chaos',
        type: 'Survivor',
        artist: '',
        cardtext: 'Each night, pick a player. If that player is not a werewolf that player receives this card. Whoever has the Black Cat at the end of the game loses.',
        background: ''
    },
    {
        title: 'Blasphemer',
        url: '/blasphemer',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Tithi Luadthong',
        cardtext: 'Does not hunt. If nominated, all wolves will be seen as Villagers tonight.',
        background: 'In the darkest pits of hell, a cruel and sinister man was held captive for his sins. A man so twisted and so vile that his very existence was an affront to all that was holy. He was known as the Blasphemer, and his tongue was as sharp and as cruel as any blade.<br/>The Blasphemer was a master of the dark arts, and his words were steeped in such evil power that even the most powerful of demons shrank away in terror at the mere sound of his name. His blasphemous language was so powerful that it could warp the minds of those who heard it, twisting their thoughts and words into profane and blasphemous ramblings.<br/>But the Blasphemer\'s greatest power lay in his ability to speak in tongues so dark and so twisted that it would make even the most hardened of demons look like saints. He could speak words so foul, so full of hate, that they would drive those who heard them to the brink of madness, and his voice was a deep, guttural rasp that chilled the souls of those who heard it.<br/>And it was this cruelty that earned him a place among the demons that walk the living world. A proclaimer of the dark things to come, he was released from hell, only to walk the earth and spread his voice of madness.<br/>His power was so great that only the bravest of souls dared to stand in his presence, for to do so was to risk eternal damnation. But no matter how powerful and evil he was, the Blasphemer could never escape the judgement of a higher power, and so he was eventually brought to justice for his crimes.<br/>Still, his legacy lives on in the dark corners of the world, where people still tell tales of the Blasphemer and his twisted tongue. His words still echo in the minds of those who hear them, and his voice still brings fear and dread to all who encounter it.'
    },
    {
        title: 'Blixem',
        url: '/blixem',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If lynched, you may call out a special non-wolf role, that will be revealed.',
        background: ''
    },
    {
        title: 'Blood Oak',
        url: '/bloodoak',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Max Shevchenko',
        cardtext: 'Every third night, attack one of your neighbors. If the attack fails, you wither and die.<br/>You can not be killed by Werewolf attacks.',
        background: 'In the outskirts of the forest stood a solitary tree. It\'s roots dry and frail.<br/>It\'s sturdy branches fit for lynching, the nearby town often gathered around it in times of turmoil and strife.<br/>One day, a crook met by the tree with his mistress, who had seen through his deception. As the steel knife slit his throat and the blood poured into the undergrowth, the thirsty roots had no other choice but to drink the crimson waters.<br/>It was there and then that the tree first got its taste for the vitality of blood. And the next time an exhausted farmer laid his head to rest after a long day, the tree decided to snap his neck with its vines and drag his corpse down into its roots for nourishment.<br/>Weeks went by, and the tree grew strong and sturdy. Reports of missing children and harrowed screams led many to comb the forest for bandits and brigands. But none suspected the tree itself, and as it grew it size, so did its thirst.<br/>It remains unclear if the tree had been possessed by evil, or simply turned to malice as its only way of surviving. But all that lived near it lived in fear, while those living in a safe distance often saw it as a means to an end...'
    },
    {
        title: 'Blood Regime',
        url: '/blood regime',
        faction: 'Rule',
        type: '',
        artist: '',
        cardtext: 'Allows all wolf support roles to hunt, and become active threats.',
        background: ''
    },
    {
        title: 'Bloodthorn',
        url: '/bloodthorn',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. If killed by a Town Attacker, your neighbors are instantly turned into Werewolves.',
        background: ''
    },
    {
        title: 'Bodyguard',
        url: '/bodyguard',
        faction: 'Town',
        type: 'Defender',
        artist: 'Matt Forsyth',
        cardtext: 'Each night, choose a player. That player can not die this night.<br/>You may not pick the same player you picked last night.',
        background: 'Staying alive becomes increasingly more important the more gold you have in your coffers. And the one person that always benefits from this, is the person that can keep people safe.'
    },
    {
        title: 'Botanist',
        url: '/botanist',
        faction: 'Town',
        type: 'Survivor',
        artist: '',
        cardtext: 'If both your neighbours are Town, you are immune to attacks at night.',
        background: ''
    },
    {
        title: 'Bruiser',
        url: '/bruiser',
        faction: 'Town',
        type: 'Survivor',
        artist: 'Dean Spencer',
        cardtext: 'You can only be killed by werewolf attacks and lynching.<br/>If all Villagers are gone from the game, you turn into a Werewolf.',
        background: ''
    },
    {
        title: 'Candlemaker',
        url: '/candlemaker',
        faction: 'Town',
        type: 'Investigator',
        artist: '',
        cardtext: 'If a town role is lynched, visit the player that nominated them and look at their card.<br/>Does not work if multiple players got lynched this round.',
        background: ''
    },
    {
        title: 'Captain',
        url: '/captain',
        faction: 'Town',
        type: 'Defender',
        artist: 'Forrest Imel',
        cardtext: 'Each night, both your neighbors automatically receive protection but are seen as Villagers.',
        background: 'In the brooding city of Verenthia, where cobblestone streets held memories and the walls echoed with hushed secrets, there stood a figure unwavering against the tides of time and treachery. Captain Thorne, the stoic sentinel of the City Guards, was his name.<br/>Every child of Verenthia grew up with tales of Thorne\'s undying loyalty. His eyes, deep wells of conviction, had seen countless dawns and dusks, and in them, there was an unyielding promise - to protect every soul that called Verenthia home.<br/>But darkness has a way of seeping through even the most fortified of places. An ancient curse began to ensnare the hearts of the innocent. One by one, the citizens were possessed, turning on each other, committing unspeakable acts of violence and betrayal.<br/>The other cities would have purged the cursed. They would have cast out the possessed, seeing them as lost. But not Captain Thorne.<br/>For in his oath, there was no clause for exceptions, no condition that permitted abandonment. To Thorne, the possessed were still citizens of Verenthia, merely victims of a fate they did not choose.<br/>With each passing day, Thorne\'s duties grew more harrowing. He disarmed old friends who lunged with blades, restrained family members from harming their kin, and stood as a bulwark against a city tearing itself apart.<br/>Many questioned his resolve. "Why protect those who have fallen to darkness?" they\'d ask. But Thorne\'s reply was always a silent, resolute stare.<br/>In the heart of Verenthia\'s darkness, a final confrontation loomed. The possessed, driven by the curse\'s final throes, converged upon the central square, their intentions malevolent. Thorne stood before them, not with an army, but with his unwavering conviction.<br/>He spoke then, not as a captain, but as a guardian. "I have sworn to protect each of you, in light and in darkness. If it means facing the very shadows that consume you, then so be it."<br/>As the possessed horde charged, a radiant light burst from Thorne. It wasn\'t magic, but the sheer force of his unyielding will. The light touched each possessed soul, confronting the darkness within.<br/>When dawn broke, the curse had been lifted. The square was filled with dazed citizens, the shadows of possession a fading nightmare. And at its center stood Captain Thorne, weary but undefeated.<br/>Verenthia would forever remember the captain who chose to protect when all seemed lost, who believed in the heart of his city even when it had lost its way. The stoic sentinel whose love for his people was, in the end, the city\'s salvation.'
    },
    {
        title: 'Carpenter',
        url: '/carpenter',
        faction: 'Town',
        type: 'Support',
        artist: 'James Hayball',
        cardtext: 'If lynched, the town will proceed with a second lynch round, using the same nominees.',
        background: 'Carpenters in the middle ages were very skillful and created many things out of wood for others. Carpenters were also considered elite tradesmen for their skill in trading goods.<br/>They shaped essential items such as homes, wagons, furniture, tools, and utensils. To make these, carpenters used tools such as sanders to smooth wood, routers to make grooves and joints, and miters to create miter joints. Carpenters were useful to society because they were responsible for making everyone\'s houses and furniture.<br/>Carpenters were required to be extremely skillful with their hands, tools, and wood. They learned to hone these skills at a guild before becoming a real carpenter. They were also required to know math and bartering to become a master carpenter. A master carpenter usually gained high wages because kings and nobles often hired them.'
    },
    {
        title: 'Carrion',
        url: '/carrion',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. If Carrion or a neighbor of the Carrion is lynched, do not reveal the card.<br/>Ignore any effects that card should have caused.',
        background: ''
    },
    {
        title: 'Cernobog',
        url: '/cernobog',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Sentient Ink',
        cardtext: 'Does not hunt. All successful wolf kills are revealed to the wolf team at the end of the night.<br/>If lynched, you must choose a teammate to be lynched as well.',
        background: ''
    },
    {
        title: 'Changeling',
        url: '/changeling',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Camille Kuo',
        cardtext: 'When a role dies without being revealed, you get to see it at the end of the night. You may choose to turn into this card.',
        background: 'The changelings are creatures that are said to be able to change their appearance into whatever they want. They are said to be able to disguise themselves as humans or other creatures, and have been known to use this ability to trick others. They are also said to be able to fly and have magical powers. There are many myths about the changelings and what they can do, but nobody knows for sure if they really exist or not.<br/>There are many stories about the Changelings in mythology. In some tales they are described as evil creatures that enjoy causing trouble for people. In other stories they are seen as being more mischievous and childish and not really caring about causing harm to others. In modern times people often use the term "changeling" when describing someone who is a little bit different or strange. Sometimes this is meant as an insult but sometimes it can be meant as a compliment. It depends on the context.<br/>In mythology, the only way to defeat a changeling is to use magic. You would need a very powerful spell to vanquish them from the mortal world.<br/>A changeling is considered to be one of the most powerful creatures in mythology, and they will not go down easily. It would take a lot of strength and courage to face one, and even then you would still have a tough challenge on your hands. But if you can muster up enough courage and strength, you just might be able to defeat one of these powerful creatures.'
    },
    {
        title: 'Chosen Legacy',
        url: '/chosenlegacy',
        faction: 'Rule',
        type: '',
        artist: 'Tithi Luadthong',
        cardtext: 'After shuffling the deck, each player is privately shown two cards. One the keep, the other gets placed three places down in the deck.',
        background: ''
    },
    {
        title: 'Cleric',
        url: '/cleric',
        faction: 'Town',
        type: 'Specialist',
        artist: 'Daniel Comerci',
        cardtext: 'Each night, pick a player. Remove ALL effects from this player (protected, plagued ect), unless the Cleric suffers from the same.<br/>The player can not gain new effects this night.',
        background: ''
    },
    {
        title: 'Clocktower',
        url: '/clocktower',
        faction: 'Rule',
        type: '',
        artist: '',
        cardtext: 'Only three players can be nominated each day.<br/>A player can not be nominated two days in a row.',
        background: ''
    },
    {
        title: 'Clone',
        url: '/clone',
        faction: 'Rule',
        type: '',
        artist: '',
        cardtext: 'Secretly becomes an exact copy of another non-unique card.',
        background: ''
    },
    {
        title: 'Comet',
        url: '/comet',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. Every fourth night, performs its own attack.',
        background: ''
    },
    {
        title: 'Concubine',
        url: '/concubine',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Eldar Zakirov',
        cardtext: 'Does not hunt. Each night, the concubine disables a target player. You may not pick the same player two times in a row.',
        background: ''
    },
    {
        title: 'Corpse Bride',
        url: '/corpsebride',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Svetlana Rib',
        cardtext: 'At the start of the game, pick a lover.<br/>When your lover dies, you may kill each night.<br/>On your second kill, you win the game and die yourself.',
        background: 'I waited at him at the crooked oak tree. I had heard his promises that we would be free.<br/>I would give my life for him and all that he was, even death would not tarnish my loss.<br/>But once I saw the world from the grave, and how easily away my love he gave,<br/>I swore on the roots and the worms of the soil, that this was a life I would not let him spoil.<br/>Forever after we shall both be together, as I swipe my nails at his life-bound tether.<br/>And only when he rests in the soil like me, I shall truly be happy, and my soul set free.<br/>And anyone who dares stand in my way shall feel the cold grasp of eternal dismay.<br/>For I was naive when I was still in love, but now revenge is all I\'ve been thinking of.<br/>So step aside and let my love be found, or find yourself dragged deep underground.'
    },
    {
        title: 'Countess',
        url: '/countess',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Max Shevchenko',
        cardtext: 'Does not hunt. Any wolf role next to you will be seen as a Villager by Investigators. You are also seen as a Villager yourself.',
        background: 'The woman who we know as the Blood Baroness was born Erzsebet Bathory on August 7th, 1560 in Nyirbator in the Kingdom of Hungary.<br/>She was born into one of the most prominent noble families in Central Europe. As a result, she was lavished with the very best education and classic upbringing.<br/>It has been recorded that young Erzsebet was exposed to all sorts of horrific atrocities during her formative years, riddled with unknown diseases and mental illments.<br/>Her first encounter with her morbid arts was during a corporal punishment, where a young man caught stealing, was being sown into the body of a horse.<br/>Unlike the majority of noble girls of her time, Erzsebet was not offended by the violence that she saw – in fact, she seemed to be drawn to it. It was not long before her own castle became more and more of a torture chamber in itself, and she surrounded herself only with people that similarily endulged her dark impulses.<br/>As her husband taught her the doctrines of torture, her handmaiden Anna taught her the ways of murder.<br/>The numerous disappearances of the girls raised no eyebrows, as peasants were completely disposable at that time. And any questions raised were quickly squelched by virtue of the huge power that her noble family held.<br/>Erzsebet was, in all practical terms, untouchable - she could torture and kill to her heart’s delight. And she did.<br/>According to stories, she were said to bathe in blood of young virgins, pluck the nails of her victim\'s fingers and toes, jab sowing needles in their eyes and much much worse.<br/>When she ran out of young girls in her vecinity, Erzsebet came up with an even more sinister ploy.<br/>Under the guise of a School for young nobles, Erzsebet opened her castle to numerous noble families across europe. Once there, the Countess had full power over the victims, whose family would not expect them to return any time soon.<br/>It is unclear how many horrors her victims had to endure, and how many fell under her care. But if one is searching for a mortal with true ties to the world of evil, one has to look no further.'
    },
    {
        title: 'Court of Tragedy',
        url: '/courtoftragedy',
        faction: 'Rule',
        type: '',
        artist: 'Slava Gerj',
        cardtext: 'If a player recieves a Bonus vote on top of an existing bonus vote, that player is immediately eliminated.',
        background: ''
    },
    {
        title: 'Coward',
        url: '/coward',
        faction: 'Town',
        type: 'Survivor',
        artist: 'James Hayball',
        cardtext: 'If attacked at night, forward the attack to the player on your right, and make it piercing.<br/>If both your neighbors are non-town roles from the same faction, the Coward turns into a Werewolf.',
        background: 'Being a light sleeper can have its benefits.'
    },
    {
        title: 'Crippled Wolf',
        url: '/crippledwolf',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If you are the only remaining Wolf Attacker, you can only choose your neighbors as targets.',
        background: ''
    },
    {
        title: 'Crone',
        url: '/crone',
        faction: 'Town',
        type: 'Crowd',
        artist: 'Sentient Ink',
        cardtext: 'At night, if a bonus vote appeared during this day, place a bonus vote on any player.',
        background: ''
    },
    {
        title: 'Crooked Man',
        url: '/crookedman',
        faction: 'Chaos',
        type: 'Survivor',
        artist: '',
        cardtext: 'If a day ends without a successful lynching, you secure yourself a victory and join the winning team.',
        background: '"There was a crooked man, and he walked a crooked mile.<br/>He found a crooked sixpence upon a crooked stile.<br/>He bought a crooked cat, which caught a crooked mouse,<br/>and they all lived together in a little crooked house."<br/>Highly intelligent and dangerously persuasive, the Crooked Man puts on a facade of maturity, affability, and benevolence in the eyes of the community; but in reality, the Crooked Man is a shady loanshark; greedy, cruel, callous, influential, deceptive, remorseless, and extremely manipulative.<br/>Despite all this, the Crooked Man is always calm, stoic, and collected. His raspy voice and appearance often trick people to feel sympathy towards him, even when he works against their interests.'
    },
    {
        title: 'Crucifier',
        url: '/crucifier',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. Is seen as a special role by the Seer.<br/>The night after a werewolf is lynched, you may pick a player.<br/>That player\'s card is revealed, and the role is disabled for the remainder of the game.',
        background: ''
    },
    {
        title: 'Crusader',
        url: '/crusader',
        faction: 'Town',
        type: 'Defender',
        artist: '',
        cardtext: 'When a role is lynched, protects all players with the same type (but from any factions).<br/>When protected by you, they appear as Villagers.',
        background: ''
    },
    {
        title: 'Cupid',
        url: '/cupid',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. At the start of the game, pick a non-wolf player. That player can never be harmed by your team, and can secretly win with the werewolves.',
        background: ''
    },
    {
        title: 'Dancer',
        url: '/dancer',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If lynched, all wolf roles are replaced with random Reindeer at the beginning of the night.<br/>Any abilities they might have are refreshed.',
        background: ''
    },
    {
        title: 'Dark Twin',
        url: '/darktwin',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Alexandra Petruk',
        cardtext: 'Once per game, pick a player. When they die, you take over their role.',
        background: ''
    },
    {
        title: 'Dasher',
        url: '/dasher',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. Hunts as a regular werewolf.<br/>If lynched, all nominees remain nominated the next day, and no new nominees are allowed.',
        background: ''
    },
    {
        title: 'Deadly Rumors',
        url: '/deadly-rumors',
        faction: 'Rule',
        type: '',
        artist: '',
        cardtext: 'Every third round, the power of each bonus votes increase by 1.',
        background: ''
    },
    {
        title: 'Demon',
        url: '/demon',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. The neighbors of the players you hunt will be seen as Werewolves tonight.',
        background: ''
    },
    {
        title: 'Destiny',
        url: '/destiny',
        faction: 'Rule',
        type: '',
        artist: '',
        cardtext: 'All roles are considered unique.',
        background: ''
    },
    {
        title: 'Dilettante',
        url: '/dilettante',
        faction: 'Town',
        type: 'Survivor',
        artist: '',
        cardtext: 'If attacked at night, but any revealed cards are in play, remove all revealed roles and survive the night. (This includes Villager\'s bonus votes).',
        background: ''
    },
    {
        title: 'Direwolf',
        url: '/direwolf',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Dusan Kostic',
        cardtext: 'Hunts at night. Hunts like a regular wolf, but may hunt twice if he is the last Killer role in the wolf team.',
        background: 'The anatomy of a werewolf is often derived from the human form. They stand as tall as maybe two men when they are fully grown. A threat in every way, but still a relatively comprehensible threat.<br/>But once in a while, a phenomenon occurs that creates what is known as a Direwolf. A gargantuan creature the size of a barn, that can rip through trained soldiers like a scythe through wheat.<br/>Direwolves are rare, so the exact conditions for how one is made is unclear. Some speculate that it is a random occurrence, others that one is born for every thousand werewolves, and others believe they can only come from actual noble blood.<br/>Regardless of where they come from, even rumors of a Direwolf can leave villages to flee their homes and guards abandoning their posts.<br/>Some even speak of communities that tie their young to poles outside the cities, in hopes that the Direwolf will eat them and spare the town.<br/>But the hunger of a Direwolf is never sated, and those who have seen the horrors this creature creates knows that no bargain can be made with pure evil.'
    },
    {
        title: 'Diseased',
        url: '/diseased',
        faction: 'Town',
        type: 'Support',
        artist: 'Daniel Comerci',
        cardtext: 'If attacked by werewolves, the werewolves forfeit their entire next round.<br/>This effect also triggers even if you were saved from death.',
        background: 'She knew what had to be done... She saw the strongest in her town succumb, the bravest and the smartest.<br/>She saw the most courageous crumble and the noblest betray their allies.<br/>She knew something had to be done, and she knew it might cost her dearly.<br/>Her skills were not that of the sword, nor for any arcane prowess. But she knew the land around the village like the back of her hand, and she especially knew which plants and berries to avoid.<br/>But now, she had a new goal. She knew the exact amount of poison she could ingest, without killing her outright. If she was to succumb to the monsters, she wanted one last stab of defiance.<br/>And as she saw her veins grow black and her flesh turn cold, she knew that she made the right choice.<br/>She would not go down without a fight, no matter the cost.'
    },
    {
        title: 'Doomsayer',
        url: '/doomsayer',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. If you are the only player left on the red team, your two neighbours are converted into regular Werewolves.',
        background: ''
    },
    {
        title: 'Draketamer',
        url: '/draketamer',
        faction: 'Town',
        type: 'Specialist',
        artist: 'Bidaj Doo',
        cardtext: 'Each night, choose a player.<br/>If that player is a Wolf role, change it to a classic Werewolf.',
        background: ''
    },
    {
        title: 'Dryad',
        url: '/dryad',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Alexandra Petruk',
        cardtext: 'Each night, pick a player.<br/>Next time that player uses their ability, they can only choose their neighbors.<br/>Root two players from both town+wolf team to win.',
        background: ''
    },
    {
        title: 'Duke',
        url: '/duke',
        faction: 'Town',
        type: 'Survivor',
        artist: '',
        cardtext: 'You can not die at night until a wolf role has been lynched.<br/>If eaten by wolves, they may hunt twice next night.',
        background: ''
    },
    {
        title: 'Dullaghan',
        url: '/dullaghan',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Jack Holliday',
        cardtext: 'When the game starts, place Dullaghan’s Head at the player with the alphabetical first role name.<br/>You win when that player dies.<br/>You may attack a player every third night.',
        background: ''
    },
    {
        title: 'Dunder',
        url: '/dunder',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If lynched, openly choose a player.<br/>That player can no longer vote.',
        background: ''
    },
    {
        title: 'Executioner',
        url: '/executioner',
        faction: 'Town',
        type: 'Attacker',
        artist: 'Matt Forsyth',
        cardtext: 'Can kill the second-most voted player on even nights. Dies if kills a town role.',
        background: 'Once upon a time, in a kingdom far from the bustling cities of the world, there lived a man known only as the Executioner. He was a mysterious figure shrouded in darkness, a man of few words who never strayed too far from his post.<br/>The Executioner had been appointed by the king of the kingdom to carry out the most heinous of punishments. He was responsible for executing all those deemed guilty of the most heinous of crimes, such as murder, treason, and blasphemy.<br/>Though the Executioner was feared by many of the people, he was respected and even revered by some. To them, he was a symbol of justice, a man who would bring fear to those who sought to do wrong in the kingdom.<br/>Though the Executioner was a man of few words, he was known to hum a somber tune as he carried out his dark duty. It was said that this tune was a reminder of the suffering and death he had seen in his long life.<br/>One day, the Executioner was faced with a task that he had dreaded for years: executing a young woman who had been found guilty of murder. As he prepared to carry out his duty, he found himself unable to do it. He could not bring himself to take her life.<br/>In a moment of desperation, he begged the woman to run away, to escape the kingdom and live her life in peace. She took his advice and fled, never to be seen or heard from again.<br/>Though the Executioner was relieved that the woman was free, his guilt was too much to bear. He knew that he had failed in his duty, and so he resigned from his post and disappeared from the kingdom.<br/>From that day forward, no one saw the Executioner ever again, but his somber tune could still be heard haunting the kingdom on foggy nights.'
    },
    {
        title: 'Exile',
        url: '/exile',
        faction: 'Town',
        type: 'Attacker',
        artist: 'Matt Forsyth',
        cardtext: 'The game can only win as a Town Victory as long as you are alive.<br/>If the number of non-town players is larger than the town players, you may kill a target player each night.',
        background: 'They called me a killer. They called me a liar.<br/>The hypocrites did not have the nerve to sentence me to death, but banishing me out in the cold and unforgiving wilderness was intended to be just the same.<br/>But they made a fatal mistake. They underestimated my will to live. I would decide how my story would end, not the wolves and the vultures of the wild.<br/>For years I managed to keep myself together, learning to avoid the towns, living from one bloodied meal to the next.<br/>Until I heard the bells ring of my home town. Crying out for help in the silencing snow.<br/>A terrible curse had fallen upon them, and their weak souls were falling left and right.<br/>They did not have the strength and vigor that I had to collect on my own. They begged me to return to them and solve their problems.<br/>They underestimated me once. But I will show these feeble townsfolk that my justice is true, and my blade is sharp.'
    },
    {
        title: 'Exorcist',
        url: '/exorcist',
        faction: 'Town',
        type: 'Defender',
        artist: '',
        cardtext: 'If you nominate and successfully lynch a Wolf role, you may choose to reveal your card.<br/>When your card is revealed, Town roles can no longer turn into Wolf roles.<br/>This also prevents any roles turned by the lynched wolf role.',
        background: ''
    },
    {
        title: 'Fence',
        url: '/fence',
        faction: 'Town',
        type: 'Support',
        artist: 'Daniel Comerci',
        cardtext: 'If targeted by a town role, you may wake up with that town role.',
        background: ''
    },
    {
        title: 'Fenrir',
        url: '/fenrir',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'James Hayball',
        cardtext: 'Hunts at night. If killed but not lynched, all wolf hunts may be performed as individual attacks for the rest of the game.<br/>Is immune to werewolf attacks.',
        background: 'Fenrir was the third son of Loki and Angrboda the Giant. When he was born, a prophecy was born that Fenrir would be the creature destined to kill Odin the Allfather and bring the end of the rule of gods.<br/>Well versed in the prophecies of Ragnarok, the gods were quick to act. They abducted Fenrir when he was a cub, and decided to try and raise it in captivity, where they could keep a close eye on it. However, no one in Asgard dared to approach Fenrir, let alone feeding the wolf, and its eternal hunger made the beast grow more and more fearsome by the day.<br/>Then came Tyr, the God of Justice and Honor, whom as the only god had enough bravery to feed Fenrir, and the hunger of the beast was sedated.<br/>The gods tried in vain to chain the beast, but all attempts were unsuccessful, and the wolf tore through any chain without effort.<br/>The gods called for the dwarves for help. They traveled to the land of Svartalfheim and asked the most brilliant craftsmen to create a magical fetter. The dwarves used a series of unnatural ingredients to help forge the chain: the sound of a cat’s footsteps, the beard of a woman, the breath of the fish, and the spit of a bird. The chain was very thin and did not look to have enough strength to hold Fenrir back.<br/>As the gods presented the chain to Fenrir, the wolf suspected this might be another trick of the gods. Fenrir proposed a deal to the gods, whoever was brave enough to place their hand in Fenrir\'s mouth, he would allow to cast him in chains.<br/>Tyr was the only god brave enough for this challenge.<br/>He put his hand into the jaws of Fenrir and carefully wrapped the chains around his neck. As soon as the wolf felt the cold iron, he bit off the hand of Tyr. But having predicted this, Tyr did not flinch from the pain and proceeded to successfully chain the beast.<br/>Once the chaining was complete, Tyr plunged his sword through the jaws of Fenrir, sealing his mouth shut, and banished the wolf to a plane beyond existence.<br/>There, Fenrir rests to this day, dreaming of the day the chains will be broken, and he can unleash his wrath upon the realm of the gods.'
    },
    {
        title: 'Fisherman',
        url: '/fisherman',
        faction: 'Town',
        type: 'Survivor',
        artist: 'Forrest Imel',
        cardtext: 'Select a player each night.<br/>If that player is or becomes protected tonight, so do you.',
        background: 'Fishermen have always been seen as almost their own nation. While farmers were easily put under the control of landlords and jarls, fishermen have always had their mobility and freedom as strong perks, and could quickly evade both problems and taxes.<br/>But being at sea is not a task for everyone. A hardened stomach and the mind to be confined in a small wooden vessel for weeks is needed.<br/>This unlimited freedom combined with the isolation quickly made way for the stereotype of the fisherman being gruff, aggressive and rootless.'
    },
    {
        title: 'Gaia',
        url: '/gaia',
        faction: 'Chaos',
        type: 'Survivor',
        artist: '',
        cardtext: 'When a Chaos role dies, you absorb a copy of their abilities and winning conditions.',
        background: ''
    },
    {
        title: 'Gargoyle',
        url: '/gargoyle',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. On odd rounds, you can not hunt but will be detected as a Villager.',
        background: ''
    },
    {
        title: 'Geisha',
        url: '/geisha',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Alex Tooth',
        cardtext: 'Protect another player each night.<br/>Protecting a player from a different faction than the last target makes the Geisha protected as well.<br/>Survive the game to win.',
        background: ''
    },
    {
        title: 'General',
        url: '/general',
        faction: 'Town',
        type: 'Attacker',
        artist: '',
        cardtext: 'Each night you may choose a player that is not your neighbour.<br/>If it is a werewolf who is surrounded by townspeople, you kill him that night. If the target is surrounded by non-town roles, they and you die.',
        background: 'In the war-torn realms of Valoria, there emerged a hero, General Aric, whose tactical prowess on the battlefield was the stuff of legends. His strategies had defeated countless enemies, and tales of his valor echoed across the land. But war has a way of consuming time, and years had passed since Aric had seen the cobblestone streets and familiar faces of his hometown, Larkspire.<br/>On the day the war finally ended, Aric, weary of battle but with honor intact, journeyed back to Larkspire, dreaming of the familiar warmth of his hearth and the joyous laughter of his kin. But as he approached the town\'s gates, instead of the welcoming banners he had imagined, he was met with eerie silence.<br/>Larkspire, once a beacon of culture and prosperity, was now shrouded in darkness. Buildings stood abandoned, streets were empty, and an unnerving chill hung in the air. To Aric\'s horror, as night fell, monstrous forms emerged from the shadows. Werewolves, creatures of nightmare, roamed the streets, and other unspeakable horrors lurked in every corner.<br/>Aric soon discovered a handful of survivors, including his childhood friend Elara, who revealed the grim fate of Larkspire. An ancient artifact had been unearthed in the town\'s square, releasing a malevolent force that had enslaved the townspeople, turning many into creatures of the night.<br/>Realizing the enormity of the task before him, Aric channeled his battlefield acumen to rally the remaining citizens. Using the town\'s layout, they set up barricades and traps, transforming Larkspire into a strategic maze. With Elara\'s knowledge of local lore, they identified the artifact as the source of the curse and formed a plan to destroy it.<br/>The night of reckoning arrived, and as werewolves and monsters descended upon the town, they found not helpless victims but a determined resistance. Aric, leading from the front, utilized guerrilla tactics, ambushes, and the town\'s very architecture to level the playing field. Every alley became a choke point, every rooftop a vantage point.<br/>The final confrontation took place in the town square. With the artifact in sight, Aric, alongside Elara, fought fiercely against the onslaught of darkness. With every werewolf felled and every monster vanquished, the power of the artifact waned. Using a relic from his war days, Aric shattered the artifact, releasing a blinding light that cleansed Larkspire of its curse.<br/>As dawn broke, the townspeople, freed from the spell, began to emerge, and the town of Larkspire slowly hummed back to life. Aric\'s return wasn\'t the joyful homecoming he had envisioned, but it was a triumphant one nonetheless.<br/>And while he was a hero in the grand theaters of war, in Larkspire, Aric became a legend – the general who not only conquered vast armies but reclaimed his very home from the clutches of darkness.'
    },
    {
        title: 'Genie',
        url: '/genie',
        faction: 'Chaos',
        type: 'Specialist',
        artist: '',
        cardtext: 'Each night, pick a player and wake them with you.<br/>That player gets to perform their main ability again tonight.<br/>If they have none, they are protected.',
        background: ''
    },
    {
        title: 'Ghast',
        url: '/ghast',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Dean Spencer',
        cardtext: 'On even nights, visit a player.<br/>If that player is killed tonight and is not a wolf role, turn them into a new Ghast instead, then lose this ability.<br/>If a Ghast survives, all Ghasts win.',
        background: 'When a soul leaves the body, it is meant to drift on towards a better place and leave the mortal realm, while the corpse is burned or buried.<br/>But once in a thousand, the body itself refuses its fate, and starts shambling around; hungry, monstrous, and ravenous.<br/>This creature, not alive yet still moving, is known as a ghast. Resembling a ghost, which is the soul without form, a ghast is form without soul.<br/>Usually ghasts don\'t live long, since most ghasts find themselves buried deep in the earth. And even should they escape, the light of the sun is enough to cause the body to return to dust.<br/>But, as you probably know, should they survive both these hindrances, a town can be cursed with the existence of a Ghast for quite some time. And a single night in the presence of this being can be disastrous on its own.<br/>With its skin sunken, the main weapon of the ghast is its sharp teeth and boney fingers, which it often sharpens by gnawing on them. With its immense fury, it can quickly scale buildings and climb down chimneys, making the landscape of most hamlets far from protected.<br/>Some ghasts still seem to retain a few pieces of knowledge about their surroundings. Where people meet at night, the positions of the city guards and such. This makes them very difficult to hunt, compared to other more wild and brainless undead.<br/>And the worst of it all is the fact that a single ghast can carry within itself enough rage and anguish for more than one shambling corpse. As young and inexperienced vigilantes set off to hunt it down, they often end their lives within the claws of the ghast, for only then emerge later as one of these. That is why, dear reader, I beg you. If you are sure there is a ghast in your midst, do not go hunting for it on your own.'
    },
    {
        title: 'Ghoul',
        url: '/ghoul',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Tithi Luadthong',
        cardtext: 'Each round, curse another player. Attacks towards a cursed player counts as Chaos Piercing attacks.<br/>When a cursed player is killed at night, you are protected.<br/>Survive the game to win.',
        background: 'A ghoul is a foul undead creature with its roots in Arabic folklore, that is said to feed on the dead. They are described as being humanoid in form with claw-like hands and a thirst for flesh.<br/>Ghouls are usually said to be evil and will eat living humans if given the chance. They are often seen as servants of satan, and their presence is thought to bring bad luck and misfortune. In some stories, ghouls are said to turn into werewolves if they consume enough human flesh.<br/>If you ever meet a ghoul, the best thing you can do is to run away as fast as possible. Ghouls are ruthless and will not hesitate to attack you if they get the chance. If you can\'t get away, try to fight back with anything you can, but be warned, a ghoul is an extremely dangerous creature and can easily overpower most people.<br/>The only way to defeat a ghoul is with fire.<br/>If you can manage to set the ghoul on fire, then it will burn and quickly die.<br/>But you have to be very careful when doing this because a ghoul is a very powerful creature and can easily kill you if given the chance.<br/>If you can manage to defeat a ghoul, then you will have done a great service to the world because these creatures bring nothing but destruction and misery.'
    },
    {
        title: 'Gladiator',
        url: '/gladiator',
        faction: 'Town',
        type: 'Attacker',
        artist: '',
        cardtext: 'Pick a target at night.<br/>If you become protected tonight, you attack your target.<br/>If you targeted another player, you are seen as a Werewolf.',
        background: ''
    },
    {
        title: 'Goodest Boy',
        url: '/goodboy',
        faction: 'Chaos',
        type: 'Survivor',
        artist: '',
        cardtext: 'Pick a player during the first night of the game. Reveal your card to them. You win if they win.<br/>For the first three rounds of the game, you are both immune to death.',
        background: ''
    },
    {
        title: 'Gorgon',
        url: '/gorgon',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If you are investigated, the investigator is disabled the next round.',
        background: ''
    },
    {
        title: 'Gremlin',
        url: '/gremlin',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Camille Kuo',
        cardtext: 'Does not hunt. Each night, select a player and reveal their card to the wolf team. The player will be notified.<br/>If the player is then protected, the Gremlin dies.',
        background: 'The tales of the Gremlin is often woven into seemingly inexplicable situations. Ranging from mild coincidences, with waking up to all the nails in their house disappearing, to more gruesome events like buildings collapsing burying people alive.<br/>The Gremlin, while being marked by many as evil to its core, does not seem to have murder as its main goal. Rather, it causes mischief to such an extent that it ruins the lives of many.<br/>While many creatures of the fae realm cause havoc if mistreated, or can be bribed into obedience, a Gremlin has no method of being pleased or subdued.<br/>Some of their wicked schemes might even include asking for exorbitant ransoms or offerings, simply to discard these and continue their activities unhindered.<br/>And worst of all, where many creatures like the Gremlin seems to be bound to one area, the Gremlin seems to be able to go where he pleases, and often attracts allies of a similar devious mindset.'
    },
    {
        title: 'Guardian',
        url: '/guardian',
        faction: 'Town',
        type: 'Defender',
        artist: 'Dean Spencer',
        cardtext: 'Pick a player each night.<br/>A chosen player can not be lynched or targeted the entire round, and their vote counts twice.<br/>Each player can only be picked once per game.',
        background: ''
    },
    {
        title: 'Harpy',
        url: '/harpy',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If targeted or attacked by a Chaos role, instead turn that player into a werewolf.',
        background: ''
    },
    {
        title: 'Hateweaver',
        url: '/hateweaver',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. You start with out any ability to hunt.<br/>Each night, you may attack one player for each bonus vote on yourself.',
        background: ''
    },
    {
        title: 'Hellhound',
        url: '/hellhound',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Yuliia Lashyna',
        cardtext: 'Hunts at night. If lynched, the wolf team will attack both your current neighbors instead of the regular hunt.',
        background: ''
    },
    {
        title: 'Hermit',
        url: '/hermit',
        faction: 'Town',
        type: 'Support',
        artist: 'Felipe Gaona',
        cardtext: 'If a Town Survivor dies, you take over their role.<br/>You are protected the night this happens.',
        background: ''
    },
    {
        title: 'Historian',
        url: '/historian',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'If killed, reveal this card and reset all "once per game" abilities.',
        background: ''
    },
    {
        title: 'Hollow Husk',
        url: '/hollowhusk',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Max Shevchenko',
        cardtext: 'Does not hunt. If a hunting wolf role is lynched, you take over this role and a fresh copy of its abilities.<br/>Until then, you are immune to attacks at night.',
        background: ''
    },
    {
        title: 'Honshu',
        url: '/honshu',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If lynched, Honshu may point at another player and state a special town role.<br/>If that player has that role, that player is lynched instead.',
        background: ''
    },
    {
        title: 'Howler',
        url: '/howler',
        faction: 'Chaos',
        type: 'Specialist',
        artist: '',
        cardtext: 'At night, pick a player, but not the same player twice.<br/>They receive a true and false statement from the gamemaster.<br/>Pick wolf and a town role this way to ensure your victory.',
        background: ''
    },
    {
        title: 'Hugin',
        url: '/hugin',
        faction: 'Town',
        type: 'Support',
        artist: 'Sentient Ink',
        cardtext: 'When a chaos role is lynched, become protected and wake up with the investigator(s).',
        background: ''
    },
    {
        title: 'Huldra',
        url: '/huldra',
        faction: 'Chaos',
        type: 'Specialist',
        artist: '',
        cardtext: 'When you die, look through the dead role pile and pick one, then return to the game.<br/>You will forever be seen as Chaos.',
        background: ''
    },
    {
        title: 'Hungerer',
        url: '/hungerer',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If a player survived the wolf hunt this round, you may attack an additional player.',
        background: ''
    },
    {
        title: 'Hunter',
        url: '/hunter',
        faction: 'Town',
        type: 'Attacker',
        artist: 'Matt Forsyth',
        cardtext: 'If you are killed or lynched: pick any player. The player is immediately killed.',
        background: 'On the outskirts of the village, you often find the Hunter.<br/>Strong, capable, independent and tough, they spend half their lives in the wilderness, seeking their prey and stalking game.<br/>They know the dark woods well and might have seen some of the horrors lurking between the trees.<br/>While the rich folk in the town square make fun of the stories, the hunter knows that something dark and sinister is lurking.<br/>This fear is what keeps the bow ready, the arrows sharp and the nights long.<br/>For when all hope is lost, a silver-tipped arrow soaring through the air will hopefully put an end to this cursed evil.'
    },
    {
        title: 'Ignoble',
        url: '/ignoble',
        faction: 'Town',
        type: 'Survivor',
        artist: 'Matt Forsyth',
        cardtext: 'If a Town Investigator or Defender is lynched, turns into a Werewolf.',
        background: ''
    },
    {
        title: 'Imp',
        url: '/imp',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Camille Kuo',
        cardtext: 'Hunts at night. Your non-wolf neighbors are seen as Werewolves.',
        background: ''
    },
    {
        title: 'Incubus',
        url: '/incubus',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Dom Citritelli',
        cardtext: 'Hunts at night. Your immediate neighbors can never benefit from Protection at night.',
        background: ''
    },
    {
        title: 'Infector',
        url: '/infector',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. When a Wolf role dies, pick a player. See their card and replace it with the dead wolf card. They still retain their original role.',
        background: ''
    },
    {
        title: 'Innkeeper',
        url: '/innkeeper',
        faction: 'Town',
        type: 'Defender',
        artist: 'Placeholder',
        cardtext: 'Each night, visit and protect any neighbours that are seen as Town Crowd.',
        background: ''
    },
    {
        title: 'Inquisitor',
        url: '/inquisitor',
        faction: 'Town',
        type: 'Attacker',
        artist: 'Iryna Svitlychna',
        cardtext: 'When you die, your card is always revealed.<br/>Each night, you may pick a player.<br/>If they have changed role during the game, eliminate them and reveal their card.',
        background: ''
    },
    {
        title: 'Jackal',
        url: '/jackal',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If a wolf or chaos role is lynched, the jackal is seen as a Villager the following night.',
        background: ''
    },
    {
        title: 'Jarl',
        url: '/jarl',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'Once per game, you may pick another player who gets to perform ther role\'s ability twice the next night.',
        background: ''
    },
    {
        title: 'Jester',
        url: '/jester',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Tithi Luadthong',
        cardtext: 'Your only way to win is to be lynched. If you do, the player who nominated you will die as well.',
        background: 'The tale of the Jester is often not one told, since Kings and Queens are often hog the spotlight.<br/>But once, there was one court jester that proved that even a smiling face could hide sinister intentions.<br/>This poor creature, unstable to begin with, was mock viciously by the court for lacking exciting new rhymes and riddles, and took up drinking the toxic Mercury to try and sharpen mind and wits.<br/>Combined with a deep fascination with the occult, the Jester started to broaden the material and quickly became the talk of the town.<br/>Alas, the stories became more and more inconsistent, manic and raving. In the end, the King banned the Jester from the great halls, out into the filthy streets.<br/>The next day, the young daughter of the King was missing without a trace, but the Jester was heard raving and ranting about her.<br/>The King quickly had his torturer capture and torment the Jester, but even through broken ribs and torn teeth, the Jester released nothing but cackles and laughter.<br/>Soon after, the torturer died of a condition of the heart, and since no one felt safe with the Jester screaming and laughing deep in the dungeons, they got out a barrel and threw both in the sea.<br/>But the next morning, the King woke to find his castle abandoned, his Queen and servants gone. The only creature left standing, sitting by the feet of his throne, was the Jester. His burnt face covered in a wooden mask, that seemed to move and grin, as the Jester spun gruesome stories about what had happened to all in the castle in morbid detail.<br/>The rules of life and death no longer mattered for this fractured soul.'
    },
    {
        title: 'Joan of Arc',
        url: '/joandarc',
        faction: 'Town',
        type: 'Survivor',
        artist: '',
        cardtext: 'You are immune to wolf attacks if you are next to a wolf role.<br/>You are immune to chaos attacks if you are next to a chaos role.',
        background: ''
    },
    {
        title: 'Jorogumo',
        url: '/jorogumo',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. Once per game, entangle another player.<br/>The entangled player will be unable to pick any targets.<br/>When you die, remove the entanglement and highlight the player that was entangled.',
        background: ''
    },
    {
        title: 'Judge',
        url: '/judge',
        faction: 'Town',
        type: 'Defender',
        artist: '',
        cardtext: 'If you die with 4 or more players still alive, you may pick 3 players who will be the only ones to vote in the next voting round.',
        background: ''
    },
    {
        title: 'Karura',
        url: '/karura',
        faction: 'Town',
        type: 'Specialist',
        artist: 'Daniel Comerci',
        cardtext: 'Each night, select a player.<br/>The role of this player can\'t change.<br/>This effect lasts until the next night.',
        background: 'A creature wandered into our village one day, dressed as a beggar. His face was that of an old crow, and his voice was rasp and damaged.<br/>He walked to the market and pointed his feathered hand on one of the merchants there.<br/>"I know what you did!" he screeched, so rough and loud that the people at the square had to hold their ears.<br/>The merchants stared back at this creature, scoffed and said "Are we to believe the word of such a grim and disgusting creature? Begone or I will call the guards on you!"<br/>The creature nodded, and left the city, leaving a cape of murmurs and bewildered townsfolk.<br/>Despite everyone agreeing that this creature was not welcome in their community, the act could not escape the mind of the townspeople. The merchant tried to brush it off with jokes and disgust over the creature, but he soon felt the cold shoulder of the town and the exclusion of the community drove him mad.<br/>One misty morning, a scream woke up the village, as the merchant was found dead on the market square, with a silver feather plunged into his back, as it we\'re a knife. The horror turned to anger once the villager found in his home, the bones and skulls of many a lost maiden in the town.<br/>Years later, the creature returned to the village, and they quickly surrounded him. A child asked "How did you know, Crow-man? How did you know what he did?"<br/>The crow bent down to the child and whispered "I did not. But I know what he did, because I know what he was. And no man can ever escape that."'
    },
    {
        title: 'Kato',
        url: '/kato',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. If attacked at night, Kato and a player of Kato\'s choice become a werewolf.',
        background: ''
    },
    {
        title: 'King',
        url: '/king',
        faction: 'Town',
        type: 'Specialist',
        artist: 'Camilla Kuo',
        cardtext: 'Each night, pick a player. That player may cast 3 votes instead of 1 the following day.<br/>Each player can only be picked once.',
        background: ''
    },
    {
        title: 'Kitsune',
        url: '/kitsune',
        faction: 'Town',
        type: 'Attacker',
        artist: 'Dean Spencer',
        cardtext: 'If you are killed at night, you may instantly perform an attack.<br/>If your target is a Town Crowd role, they become Kitsune.',
        background: ''
    },
    {
        title: 'Knight',
        url: '/knight',
        faction: 'Town',
        type: 'Defender',
        artist: 'Enggar Adirasa',
        cardtext: 'On even nights, defend two players.<br/>If they are attacked, it will be announced.',
        background: ''
    },
    {
        title: 'Krampus',
        url: '/krampus',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Alfred Vallionetie',
        cardtext: 'If a Town Crowd was lynched, you attack the person who nominated them the following night.',
        background: ''
    },
    {
        title: 'Landlord',
        url: '/landlord',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Dean Spencer',
        cardtext: 'If your original neighbors die while you are alive, you join the winning team.',
        background: 'In the shadowed alleys and bustling squares of Medwick, tales of Lady Elestria, the malevolent landlord, curdled the blood of even the bravest souls. Her reputation was not simply that of a stringent landlord, but of a sinister sorceress with an insatiable lust for wealth and power.<br/>Lady Elestria owned much of Medwick, and her estates stretched far and wide. But beneath the veneer of aristocracy lay a heart cold and calculating. While most landlords were content with the timely payment of rents, Elestria\'s avarice led her down darker paths. It was whispered that she consorted with shadowy figures and invoked forbidden magics, summoning creatures from the depths of darkness.<br/>Tenants of her estates lived in perpetual dread. Many nights, an unexpected knock would come at their door, and by dawn, all that would remain was a vacant home, its former occupants vanished, leaving behind only possessions and memories. Lady Elestria would promptly seize the properties, claiming all valuables as \'unpaid dues\', and with a wicked grin, place the properties back on the market, her pockets ever fuller.<br/>As her wealth grew, so did her boldness. No longer content with merely the downtrodden and vulnerable, she began targeting wealthy merchants and nobles, luring them into her properties with promises of luxury and prestige, only to later send nightmares to their doorsteps.<br/>But as with all tales of unchecked malevolence, Lady Elestria\'s reign of terror would not go unchallenged. A band of determined souls, those who had lost family and friends to her treachery, began to conspire against her. Led by a young woman named Lysandra, whose family had fallen victim to Elestria\'s schemes, they sought to expose her wickedness and bring her to justice.<br/>Pooling their resources, the group enlisted the services of a renowned mage, known only as "The Seer." With his guidance, they set a trap for Lady Elestria, luring her to a grand mansion she had recently acquired, under the guise of a grand ball.<br/>The night of the ball arrived, and as Lady Elestria entered, she was met with illusions of her past victims, their accusatory stares piercing her soul. The Seer\'s magic trapped her in a never-ending loop, forcing her to confront the terror and despair she had wrought upon countless souls.<br/>The following morning, the townspeople of Medwick found Lady Elestria\'s once-opulent mansion in ruins, its malevolent mistress gone. The properties she had seized were returned to their rightful owners or their next of kin, and Medwick slowly began to heal.<br/>Lady Elestria\'s fate remains a mystery to this day. Some say she was trapped in an eternal nightmare, while others believe she was banished to a realm of darkness. Regardless, her tale serves as a chilling reminder of the depths one might sink to in the pursuit of greed and power.'
    },
    {
        title: 'Last Will',
        url: '/last will',
        faction: 'Rule',
        type: '',
        artist: 'Yaroslav Adamov',
        cardtext: 'The villager ability will trigger no matter how they die.',
        background: ''
    },
    {
        title: 'Lens of Horrors',
        url: '/lens of horrors',
        faction: 'Rule',
        type: '',
        artist: '',
        cardtext: 'All Chaos roles are seen as Wolf roles.',
        background: ''
    },
    {
        title: 'Lost Tragedy',
        url: '/lost tragedy',
        faction: 'Rule',
        type: '',
        artist: '',
        cardtext: 'Cards are not revealed during lynching.',
        background: ''
    },
    {
        title: 'Lycan',
        url: '/lycan',
        faction: 'Town',
        type: 'Survivor',
        artist: 'Camille Kuo',
        cardtext: 'If you are attacked by the werewolves, you become a werewolf.',
        background: ''
    },
    {
        title: 'Mad Hatter',
        url: '/madhatter',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Tithi Luadthong',
        cardtext: 'Tries each night to swap two roles. Wins if the count of players with new roles is more than half.',
        background: ''
    },
    {
        title: 'Maiden',
        url: '/maiden',
        faction: 'Town',
        type: 'Crowd',
        artist: 'Asanee Srikijvilaikul',
        cardtext: 'If killed, places a bonus vote on a neighbor player.',
        background: ''
    },
    {
        title: 'Malacoda',
        url: '/malacoda',
        faction: 'Chaos',
        type: 'Attacker',
        artist: '',
        cardtext: 'Each night, place a dead villager card in front of another player.<br/>Have seven revealed villager cards in-game at any point to ensure your victory.<br/>After this, you start killing every night instead.',
        background: ''
    },
    {
        title: 'Medusa',
        url: '/medusa',
        faction: 'Chaos',
        type: 'Survivor',
        artist: '',
        cardtext: 'Wakes with the seer. The seer neighbouring players cannot be selected by the seer.<br/>If lynched, the seer is lynched as well.<br/>If chosen by the seer, the seer dies.',
        background: ''
    },
    {
        title: 'Mentalist',
        url: '/mentalist',
        faction: 'Town',
        type: 'Investigator',
        artist: 'Camille Kuo',
        cardtext: 'Each night, pick two players. You will be informed if any or both of them are Chaos.<br/>If Chaos are gone from the game, this ability detects Wolves instead.',
        background: ''
    },
    {
        title: 'Merman',
        url: '/merman',
        faction: 'Chaos',
        type: 'Survivor',
        artist: '',
        cardtext: '',
        background: ''
    },
    {
        title: 'Minotaur',
        url: '/minotaur',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Dean Spencer',
        cardtext: 'Hunts at night. The Minotaur can only be killed through Lynching.',
        background: 'The Minotaur was a creature of legend and myth. It was a man with the head of a bull. It was said that it was an evil creature that would kill anyone who tried to defeat it. The Minotaur was a very dangerous creature but it was also very intelligent. It could manipulate the minds of others and could make them see things that were not there. The Minotaur was a master of illusion and could trick people into doing all sorts of things. It was a cunning creature but it was also very cruel and sadistic. It was a creature of pure darkness and evil.<br/>The Minotaur was created by Zeus who had a penchant for creating strange creatures. Zeus wanted to create a creature that was powerful and dangerous and that could terrorize the world. The Minotaur was a perfect creation for him. It was a monster that could destroy societies. It was a creature that could kill entire armies. Zeus was pleased with the Minotaur. It was a creature of death and destruction. Zeus had created something that would cause pain and suffering for generations to come.<br/>In order to defeat the Minotaur, it must be tricked. The Minotaur is a creature of illusion and deception. It must be lured into a trap and then beaten. The Minotaur is a very clever creature so it must be outsmarted. If it is not tricked then it will be a very difficult creature to defeat. The Minotaur is an extremely powerful creature and can destroy anyone that tries to fight it. It is very dangerous. It is a creature that should not be underestimated.'
    },
    {
        title: 'Mirror Beast',
        url: '/mirrorbeast',
        faction: 'Wolf',
        type: 'Support',
        artist: 'John Blaszczyk',
        cardtext: 'Does not hunt. Copies any abilites belonging to the last role lynched, including werewolf hunting.<br/>Can not alter its own winning condition or turn into a non-wolf.',
        background: 'When you look into a mirror, a reflection from another plane looks back at you. Stare long enough, and you can sense that this creature has a hidden ire towards the reality it is forced to reflect.<br/>But as soon as no one watches the mirror, the shape returns to its natural form. A Lurking horrid amalgamation of flesh and tendrils.<br/>It lurks in its own dimensions, distorted and morphed with impossible shapes, lost without any defined notion of a purpose.<br/>Every fiber of its hideous body starves for a purpose, a reason to exist, a shape to assimilate.<br/>But for eons, these creatures also seed an infinite hatred towards the living, forcing the beasts to serve and mimic them for no gratitude in return.<br/>But once the seal is broken, the Mirror Beast can claw its way out into the mortal world, still hungering for a shape to become, but with no intention of being sympathetic towards the living.<br/>So next time you see your own reflection in the mirror, keep your eyes fixed on the beast staring back, and let it know its place beyond the silver barrier.'
    },
    {
        title: 'Monk',
        url: '/monk',
        faction: 'Town',
        type: 'Survivor',
        artist: 'Forrest Imel',
        cardtext: 'If nominated, becomes protected at night.',
        background: ''
    },
    {
        title: 'Moon Wolf',
        url: '/moonwolf',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If you were nominated this round, your attacks are piercing.',
        background: ''
    },
    {
        title: 'Moondancer',
        url: '/moondancer',
        faction: 'Town',
        type: 'Defender',
        artist: '',
        cardtext: 'If a non-town role gets lynched, in the following night, you MAY wake up another player during your own round. Neither of you can die this night.',
        background: ''
    },
    {
        title: 'Mortician',
        url: '/mortician',
        faction: 'Town',
        type: 'Specialist',
        artist: '',
        cardtext: 'When someone is killed, the mortician is told the role of the killer.<br/>If they are killed by a group, you get the role of the closest killer.',
        background: ''
    },
    {
        title: 'Mothling',
        url: '/mothling',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If lynched, your neighbors are the only two nominees during the next phase.',
        background: ''
    },
    {
        title: 'Munin',
        url: '/munin',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'When a town investigator is killed, the wolves must pick a player among themselves.<br/>Then, during the next night, that player and Munin will wake up together.',
        background: ''
    },
    {
        title: 'Nagual',
        url: '/nagual',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If the wolf team has suffered no losses yet, you are seen as a Villager.',
        background: ''
    },
    {
        title: 'Necromancer',
        url: '/necromancer',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Tithi Luadthong',
        cardtext: 'When voting, add dead players to the total. Needs to be the only player voting on a lynched player to win.',
        background: ''
    },
    {
        title: 'Nick Ranchez',
        url: '/nickranchez',
        faction: 'Chaos',
        type: 'Specialist',
        artist: '',
        cardtext: 'If Eliminated, proclaim a special non-wolf role.<br/>If it is still alive, it gets revealed and you survive.',
        background: ''
    },
    {
        title: 'Nightmare',
        url: '/nightmare',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Dom Critelli',
        cardtext: 'Does not hunt. If the Nightmare is checked by an investigator, the investigator sees only werewolves the next 3 turns.',
        background: ''
    },
    {
        title: 'Ninja',
        url: '/ninja',
        faction: 'Town',
        type: 'Attacker',
        artist: '',
        cardtext: 'If you die, your card is revealed. At the start of the following night you pick 1 player that dies.',
        background: ''
    },
    {
        title: 'Nymph',
        url: '/nymph',
        faction: 'Chaos',
        type: 'Attacker',
        artist: '',
        cardtext: 'At the beginning of the game, pick a player. You wake together.<br/>If you die, that player dies as well.<br/>If your target dies, you may pick a new one.<br/>Stay alive until the end of the game to win.',
        background: ''
    },
    {
        title: 'Occultist',
        url: '/occultist',
        faction: 'Town',
        type: 'Investigator',
        artist: '',
        cardtext: 'Pick a player each night. The gamemaster will point to another player with a similar role type.',
        background: ''
    },
    {
        title: 'Odin',
        url: '/odin',
        faction: 'Town',
        type: 'Investigator',
        artist: '',
        cardtext: 'At the end of the night, look at any neighbor\'s card if they are not your original neighbors.',
        background: ''
    },
    {
        title: 'Okami',
        url: '/okami',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Tithi Luadthong',
        cardtext: 'Hunts at night. If the Hunt fails, protect all other wolves.<br/>The faction of the Okami is seen as the one from the last person lynched.',
        background: 'As the wind caressed the leaves of the deep forest, a creature was seen the between the trees.<br/>Its mane gave off a shimmering light, rising to the sky and fueling the stars.<br/>Its teeth were still wet from the last miscreant that refused to respect the balance of nature.<br/>Kind to all that understands the ever-turning wheel of wind, soil, and water.<br/>It looked at me, with eyes lighter than the full moon. It spoke to me, as my guards shivered as the leaves in the wind.<br/>He let me go, spared me from its fangs, to write this warning for all to heed.<br/>My guards and my caravan was less fortunate, and from the deep forest, I can still hear echoes of their borrowing screams of pain.'
    },
    {
        title: 'Omen Child',
        url: '/omen',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. If you are protected, the role can not successfully protect anyone until you are dead.',
        background: ''
    },
    {
        title: 'Oni',
        url: '/oni',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Matt Forsyth',
        cardtext: 'Hunts at night. If the Oni is the only Wolf Attacker alive, your attacks ignore protection.',
        background: ''
    },
    {
        title: 'Oracle',
        url: '/oracle',
        faction: 'Town',
        type: 'Investigator',
        artist: 'Camille Kuo',
        cardtext: 'Each night, look at two players to see whether they are on the same team or not.',
        background: ''
    },
    {
        title: 'Orphan',
        url: '/orphan',
        faction: 'Town',
        type: 'Crowd',
        artist: 'Matt Forsyth',
        cardtext: 'If lynched, the nominating player gains two bonus votes against them.',
        background: ''
    },
    {
        title: 'Outsider',
        url: '/outsider',
        faction: 'Town',
        type: 'Survivor',
        artist: '',
        cardtext: 'If lynched, you may immediatly get one of your neighbours lynched as well.<br/>You are seen as a wolf, by the seer.',
        background: ''
    },
    {
        title: 'Ozymandias',
        url: '/ozymandias',
        faction: 'Town',
        type: 'Survivor',
        artist: '',
        cardtext: 'If, at nightfall, you are the last special Town role alive, pick two dead town cards.<br/>You gain fresh copies of both their abilities.',
        background: 'In the bustling town of Eldoria, amidst the mirth of merchants and the clamor of craftsmen, there wandered a beggar, seemingly insignificant, with tattered robes and a hood that concealed his features. Named by the townsfolk as \'Old Mandus\', he was often found seated by the central fountain, his outstretched palm hoping for a coin or two.<br/>However, Eldoria, despite its prosperity, harbored a secret. As the sun bid adieu, monstrous creatures, birthed from ancient curses, emerged from the shadows, tormenting the people. They were ethereal wraiths, and no blade or arrow could harm them. With each passing night, they claimed the souls of the innocent, and the town\'s once-vibrant spirit was slowly being overshadowed by despair.<br/>One such night, as a particularly malevolent creature loomed over a child, a force stopped it in its tracks. Old Mandus, the very beggar the town had often dismissed, stood in its path. As he lowered his hood, the visage that was revealed was neither old nor frail. It was a face etched with the wisdom of eons and the might of empires.<br/>"I am Ozymandias," he declared, his voice echoing with a power that resonated through the very stones of Eldoria. "And you shall harm no more."<br/>With a mere wave of his hand, golden sands erupted from the ground, spiraling and ensnaring the wraiths. Each grain of sand seemed to hold the power of the sun, burning away the monstrous entities, purifying the town of its ancient curse.<br/>As dawn broke, the people of Eldoria gathered, their eyes beholding the transformed figure of Ozymandias. He spoke of ancient times, of kingdoms he had witnessed rise and fall, and of his choice to walk among them as a humble beggar, to understand the heartbeats of civilizations.<br/>The monsters, he revealed, were remnants of a forgotten battle, and they had been drawn to Eldoria because of an artifact buried deep beneath the town. With the creatures vanquished, Ozymandias entrusted the town\'s elders with the task of guarding the artifact, ensuring that such darkness would never befall them again.<br/>As swiftly as he had revealed his might, Ozymandias once again donned the garb of Old Mandus, choosing to remain a silent guardian, a humble beggar with the power of gods, forever watching over the town that had become his sanctuary.'
    },
    {
        title: 'Painter',
        url: '/painter',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'If the painter is nominated, the person who nominated will be seen as their true role tonight, and revealed if they die.',
        background: ''
    },
    {
        title: 'Paladin',
        url: '/paladin',
        faction: 'Town',
        type: 'Attacker',
        artist: '',
        cardtext: 'If killed at night with more than one werewolf alive, you wake up and MAY take one of the wolves with you in the grave.',
        background: ''
    },
    {
        title: 'Pandora',
        url: '/pandora',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Dean Spencer',
        cardtext: 'Each night, pick a player. If they are chaos, convert them to the Jester role.<br/>Can detect any Jesters.<br/>If Pandora is the last Chaos alive, she locks in her victory.',
        background: ''
    },
    {
        title: 'Paranoid',
        url: '/paranoid',
        faction: 'Town',
        type: 'Investigator',
        artist: '',
        cardtext: 'Choose a player each night. You will receive the same information as the Seer if the Seer checked the same person that night. If not, you will see the player as a werewolf.',
        background: 'In the mist-shrouded village of Lyrhaven, where secrets danced in every shadow, there lived a man named Eldrin. His brows were perpetually furrowed, eyes darting from corner to corner, always suspecting, always doubting.<br/>Whispers would carry across the village square, tales of Eldrin\'s latest accusation. One day, it was the baker, whom he accused of poisoning the bread. The next, the blacksmith, whom he believed to be smuggling dark artifacts. His tales grew taller, and his accusations wilder.<br/>The villagers, initially alarmed, began to see Eldrin\'s tales for what they were – ramblings of a paranoid mind. They\'d nod and smile, feigning concern, but behind closed doors, they\'d jest and laugh about Eldrin\'s latest far-fetched claim.<br/>But as it is with fables, a grim twist awaited.<br/>One evening, as dusk turned the skies to ash, Eldrin came running into the village, terror evident in his usually distrusting eyes. He spoke of creatures in the woods, of snarls and feral eyes, of werewolves that lurked and hungered.<br/>But Lyrhaven had grown weary of Eldrin\'s tales. Laughter erupted in the taverns, jokes were shared about "Eldrin\'s wild wolves", and children playfully howled, mocking his fear.<br/>Eldrin, frantic and desperate, pleaded with the village council, but his cries fell on deaf ears. The village had become deaf to his warnings, blind to his genuine terror. Left with no choice, Eldrin fled Lyrhaven, leaving behind his home and the life he knew.<br/>As night\'s embrace tightened around the village, a chilling howl echoed through Lyrhaven. Doors were bolted, and windows shuttered, but not out of disbelief for Eldrin\'s claim, but from a primal fear that gripped every heart.<br/>The werewolves, very real and very hungry, descended upon Lyrhaven. The village, unprepared and unsuspecting, was plunged into chaos. Homes were torn asunder, families scattered, and by dawn, Lyrhaven was but a ghost of its former self.<br/>In the ruins of what was once a bustling village, a haunting silence prevailed. Lyrhaven\'s dismissal of a paranoid man\'s warning had led to its downfall.<br/>Far away, on a distant hill, Eldrin gazed upon the smoldering remains of his home, tears of sorrow and guilt streaking his face. He had been right, but being right had brought him no solace.<br/>And so, Lyrhaven\'s tale became a grim reminder, whispered in hushed tones across neighboring villages – of the dangers of unyielding disbelief and the tragic fate of the man who cried werewolf.'
    },
    {
        title: 'Pathfinder',
        url: '/pathfinder',
        faction: 'Town',
        type: 'Survivor',
        artist: '',
        cardtext: 'Pick a player each night. That player can not kill you for the rest of that night.<br/>If that player targets you, the Gamemaster will poke you.',
        background: 'In the sprawling expanse of the Whispering Pines, a vast forest that stretched over the lands of the Lakaya tribe, there was a tale told by the fireside – the story of Nahawi, the Pathfinder.<br/>Nahawi wasn’t merely a man; he was a spirit of the woods. His deep, hazel eyes held the secrets of the forest, and his footsteps danced in harmony with the rustling leaves. Born to the Lakaya, his affinity for the woods was evident from his earliest days. As a boy, he would listen intently to the stories of elders, tales that spoke of spirits, animals, and the rhythm of the forest.<br/>The Lakaya tribe held a deep respect for the land, seeing themselves as its guardians. They believed that everything, from the tallest pine to the smallest pebble, was infused with a spirit. Nahawi, with his innate connection to the Whispering Pines, was often sought after for his guidance to interpret the messages of the forest.<br/>One fateful season, as the golden hues of autumn began to wane, a shadow descended upon the Lakaya. A mysterious blight began to affect the tribe\'s crops. The wise shaman, sensing a deeper disturbance in the balance of nature, spoke of the Moonflower, a sacred plant said to restore harmony, but it was hidden deep within the heart of the Whispering Pines.<br/>With the tribe\'s survival at stake, Nahawi took it upon himself to seek out this elusive bloom. Guided by the spirits, he ventured deeper into the forest than any Lakaya had before. He followed the songs of the birds, the whispers of the trees, and the patterns of the stars. The forest tested Nahawi, presenting him with challenges, from treacherous terrains to mystical riddles.<br/>After days of searching, in a grove illuminated by the soft glow of fireflies, Nahawi found the Moonflower, its petals shimmering with a celestial light. With gratitude in his heart, he carefully harvested the bloom and returned to the tribe.<br/>With the Moonflower, the shaman performed a sacred ritual, and the land was healed. The crops flourished, and balance was restored. Nahawi\'s journey was inscribed in the annals of Lakaya\'s history, not just as a testament to his bravery, but as a reminder of the sacred bond between the tribe and the land.<br/>Nahawi, the Pathfinder of the Whispering Pines, became a symbol of unity and connection. He founded a council of pathfinders, ensuring that the wisdom of the forest and the teachings of the Lakaya would forever be intertwined. Through his journey, Nahawi reinforced the belief that in listening to the whispers of the land, one truly finds their path.'
    },
    {
        title: 'Patron',
        url: '/patron',
        faction: 'Town',
        type: 'Survivor',
        artist: 'Mary Moff Saurdiff',
        cardtext: 'If one of your neighbours receive any kind of protection at night, you receive a copy of that protection.',
        background: ''
    },
    {
        title: 'Piper',
        url: '/piper',
        faction: 'Town',
        type: 'Survivor',
        artist: '',
        cardtext: 'If another town role turns into a werewolf, you turn into a werewolf as well.',
        background: ''
    },
    {
        title: 'Pirate',
        url: '/pirate',
        faction: 'Chaos',
        type: 'Specialist',
        artist: '',
        cardtext: 'Before the game starts, choose two players.<br/>You win if either they both win, or both are eliminated before you.',
        background: ''
    },
    {
        title: 'Pixie',
        url: '/pixie',
        faction: 'Chaos',
        type: 'Specialist',
        artist: '',
        cardtext: 'You are skipped when searching for "neighbours".<br/>You are immune to daytime attacks.<br/>If you die, place your card in front of another player. You now win if they win.',
        background: ''
    },
    {
        title: 'Plague Lord',
        url: '/plaguelord',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Daniel Comerci',
        cardtext: 'Each night, infect another player. Once every living player is infected (not including yourself) you win the game.',
        background: 'The Plague diseases ravages lands and infected countless people. However, not everybody infected will die. Some will be blessed.<br/>The plague chooses it´s host, and the person is the new Messiah of the plague. And as the title is passed down once again, the plague will once again rise.<br/>Concealed in the city, you´ll spread the word of the rotten god, and give people the gift that they can never redeem back.<br/>People might reject your offer, because they can´t the way of the diseased. You eyes are open, and you´ll open the ignorant eyes of the plebs! By force if you have to.<br/></i “Arise! Arise! Come! Gaze upon your lord! Let the plague run through you. Let your body crumple and let me bless you with the gift of decay.” >'
    },
    {
        title: 'Plaguewolf',
        url: '/plaguewolf',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If lynched, you may secretly choose a player that instantly becomes a werewolf.',
        background: ''
    },
    {
        title: 'Poppet',
        url: '/poppet',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Klaudia Bezak',
        cardtext: 'Does not hunt. If lynched, you must pick a player.<br/>That player will immediately be lynched as well.',
        background: 'In folk magic and witchcraft, a poppet is a human-looking doll made to represent a person, for casting spells on that person or to aid that person through magic. They are usually used as a vessel for binding rituals, most commonly associated with rituals for pain or misery, where the caster stabs the poppet with a needle or sharp implement, and the person the poppet is meant to represent feals the pain.<br/>These dolls may be fashioned from such materials as carved roots, twine, clay, branches, or cloth stuffed with herbs with the intent that any actions performed upon the effigy will be transferred to the subject based on sympathetic magic.<br/>Poppets are also known as poppits, moppets, mommets and pippys.'
    },
    {
        title: 'Possessed',
        url: '/possessed',
        faction: 'Town',
        type: 'Specialist',
        artist: 'Joyce Maureira',
        cardtext: 'When a chaos role dies, you take over their special abilties, disregarding any special winning conditions.',
        background: ''
    },
    {
        title: 'Potemkin',
        url: '/potemkin',
        faction: 'Town',
        type: 'Specialist',
        artist: '',
        cardtext: 'Each night, choose a player. Next day, treat this player as a Villager role, ignoring their original abilities, even on lynch.<br/>They regain their original abilities when the night starts.',
        background: ''
    },
    {
        title: 'Prancer',
        url: '/prancer',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If seen by the seer, you will be poked during the night and become protected the next night.',
        background: ''
    },
    {
        title: 'Prince',
        url: '/prince',
        faction: 'Town',
        type: 'Survivor',
        artist: 'Camille Kuo',
        cardtext: 'You can never be eliminated by lynching.<br/>If Lynched, you return to your seat, and the game immediately goes to the night phase.',
        background: 'In the mist-laden kingdom of Erynthor, where ancient pines whispered secrets and the moon was ever shrouded, a chilling tale unfolded. Amongst the nobility, a prince named Alaric was revered for his grace and valor. But beneath his regal demeanor, murmurs of a terrible secret took root.<br/>It began with a series of unexplained events. Livestock found maimed, howls that echoed through the castle walls, and shadows that flitted in the night. The townsfolk whispered, and those whispers grew louder, forming a harrowing word – werewolf.<br/>As fear spread, evidence mounted against the unsuspecting prince. A silvery strand of hair, claw marks outside his chambers, and an inexplicable absence during full moons. The whispers turned into clamors, and soon enough, Alaric found himself in chains, branded a monster in human guise.<br/>The day of reckoning came swiftly. With a hastily erected pyre in the town\'s center, the kingdom prepared to cleanse itself of the perceived evil. But as the first flame was kindled, a chilling wind swept the square. It was King Eldric, Alaric\'s father, arriving in regal fury.<br/>The townsfolk, sensing their error, fell to their knees, pleading for understanding and mercy. But they had accused the heir to the throne, and in their haste for justice, they had overstepped. King Eldric\'s gaze, once filled with warmth for his subjects, now held only cold disdain.<br/>The pleas became desperate cries, the once-accusers promising fealty, loyalty, and repentance. But the bond of trust had been irrevocably shattered.<br/>King Eldric silenced the square with a mere gesture. "You have let fear guide you, and in your fear, you sought to harm my blood," he proclaimed. "Mercy? Mercy was lost the moment you laid chains upon my son."<br/>And as the winds of Erynthor howled, a dark decree was made. The townsfolk, once the lifeblood of the kingdom, were exiled to the hinterlands, cursed to wander without respite.<br/>The prince, although cleared of the accusations, bore the weight of the events. Erynthor, once vibrant, became a kingdom of shadows, its tale a grim reminder of the perils of judgment and the high price of mistrust.'
    },
    {
        title: 'Profound Destiny',
        url: '/profounddestiny',
        faction: 'Rule',
        type: '',
        artist: '',
        cardtext: 'On the second night, all identical non-crowd roles are revealed to each other.',
        background: ''
    },
    {
        title: 'Prophet',
        url: '/prophet',
        faction: 'Town',
        type: 'Investigator',
        artist: 'Tithi Luadthong',
        cardtext: 'On even rounds, pick another player.<br/>Tonight, that player may pick another player and sees that card.<br/>The card is also revealed to the werewolves.',
        background: ''
    },
    {
        title: 'Pumpkin King',
        url: '/pumpkinking',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Alfred Vallionetie',
        cardtext: 'Each night, you will attack the player with the highest number of bonus votes.<br/>If this is tied, place a bonus vote on a player of your choice instead.<br/>Kill three players this way to ensure victory.',
        background: ''
    },
    {
        title: 'Purist',
        url: '/purist',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'On both the first night, and nights after a non-Town role is lynched, pick a player. No effects may change the Investigators reading of this player for the rest of the game.',
        background: ''
    },
    {
        title: 'Quaker',
        url: '/quaker',
        faction: 'Town',
        type: 'Investigator',
        artist: '',
        cardtext: 'When there are no more regular Villagers alive, the Quaker is revealed.',
        background: ''
    },
    {
        title: 'Ranger',
        url: '/ranger',
        faction: 'Town',
        type: 'Defender',
        artist: '',
        cardtext: 'If eliminated, pick a player and reveal their card.',
        background: ''
    },
    {
        title: 'Rasputin',
        url: '/rasputin',
        faction: 'Chaos',
        type: 'Survivor',
        artist: '',
        cardtext: 'If lynched, you survive and wins with the town.<br/>If attacked by the wolves, you survive and win with and is seen as a wolf.<br/>(This state can change repeatedly).',
        background: 'In the vast expanse of Tsaritsa, a land shrouded in winter\'s embrace and age-old mysteries, there emerged a figure as enigmatic as the frosty forests themselves. His name was Rasputin, often whispered in hushed tones as the Unkillable.<br/>Rasputin, with his piercing gaze and mesmerizing aura, was neither a mere mortal nor a being of pure magic. He tread the thin line between the known and the unknown, his origins hidden in the very heart of Tsaritsa\'s legends.<br/>It was said that Rasputin could commune with the ancient spirits that roamed the land, drawing power from their wisdom and might. Many sought him for guidance, while others, fearing his unparalleled influence, plotted his demise.<br/>But death was an elusive shadow for Rasputin. Poison only fortified him, blades seemed to shy away from his flesh, and even the icy waters of Tsaritsa\'s rivers refused to claim him.<br/>His true adventure, however, began when darkness started to seep into Tsaritsa. A malevolent force, borne from the forgotten abyss, threatened to engulf the realm in eternal night. Villages vanished, forests withered, and despair gripped the hearts of the people.<br/>As the land cried out for a savior, Rasputin, guided by visions from the ancients, embarked on a quest to confront this abyssal nemesis. His journey took him through treacherous terrains, from the Cursed Ural Mountains to the haunted depths of the Siberian wastelands.<br/>Along the way, he encountered creatures of lore and legend: the fierce snow leopards of the Urals, the ethereal spirits of lost travelers, and the guardians of Tsaritsa\'s ancient secrets. Each challenge and ally molded Rasputin, fortifying his spirit and resolve.<br/>In the heart of the abyss, Rasputin faced the embodiment of the darkness – a shadowy behemoth born from the collective fears and regrets of Tsaritsa\'s people. The battle raged on, not of swords and sorcery, but of wills and souls.<br/>Drawing upon his unyielding spirit and the power of the land itself, Rasputin bound the behemoth, sealing it away and ensuring that Tsaritsa\'s dawn would break once more.<br/>Rasputin\'s legend grew, his tale becoming a beacon of hope in the darkest of times. While many still feared and misunderstood him, there was no denying his place in the annals of Tsaritsa\'s history.<br/>And so, amidst the snow-covered peaks and deep, echoing forests, the tale of Rasputin the Unkillable became a testament to the undying spirit of a land and its people, and the lengths one man would go to protect them.'
    },
    {
        title: 'Raven',
        url: '/raven',
        faction: 'Town',
        type: 'Support',
        artist: 'Tithi Luadthong',
        cardtext: 'If a Town Crowd is lynched, the Raven is woken together with the<br/>Town Investigator.',
        background: 'The Raven is a odd one indeed. As half human and half raven, you walk between the townsfolks, hiding your identity to the public. But when the time is right you show your true face.<br/>Being a shapeshifter, not many people will take you in lightly. However, if you look beyond the fear of the everyday man, you´ll find your true solace: The Seer.<br/>As the companion to The Seer, you´re a an ally to the town survival against the werewolves. But your help does not come cheap. When innocent blood is spilled, The Raven will together with the Seer be able to see peoples true colors.<br/>When a villager is hanging from the gallows, The Raven spreads its wing, and fly by The Seer, use its power.<br/>Some may say that The Raven is just a sidekick to The Seer, but The Raven is a clever bird, and it might know more than she lets on.'
    },
    {
        title: 'Reaper',
        url: '/reaper',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Camille Kuo',
        cardtext: 'Knows the true identity of all deceased players.<br/>Watch a wolf role get lynched and a dead Villager using your powers to secure your victory.',
        background: ''
    },
    {
        title: 'Red Dawn',
        url: '/reddawn',
        faction: 'Rule',
        type: '',
        artist: '',
        cardtext: 'If the lynched player was a villager, the player with the second most votes is lynched as well.<br/>This does not cascade.',
        background: ''
    },
    {
        title: 'Riding Hood',
        url: '/ridinghood',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Felice Melancholie',
        cardtext: 'Can only win by being eaten by the wolves.<br/>If this happens, the wolves forgo their next night phase.',
        background: 'The winter embraced little Red with a shivering gust, as she bravely went deeper into the woods.<br/>Everything around her had a reflection in her mind as if it was all just memories revisited.<br/>She knew of the dark beasts hiding in these woods. She knew how it would feel when their sharp fangs would surround her pale skin.<br/>Yet, she persisted. Her fate sealed in folklore, her future hardened by dry ink.<br/>Some people have their futures laid out for them. Futures of riches, families, and bold adventures.<br/>Red\'s future rhymes differently. This was her future. And even as she could not do anything to prevent it, she swore by the whispering winds that no one was going to take her destiny away from her.<br/>Because she knew that when the bloodied page was turned, she would wake up again. At the beginning of this woodland path, surrounded by her woolen cloak, the dark trees, and the bitter winds once more.'
    },
    {
        title: 'Ronin',
        url: '/ronin',
        faction: 'Town',
        type: 'Attacker',
        artist: 'Tithi Luadthong',
        cardtext: 'If a Villager is lynched, you may attack any other player this night.',
        background: 'The Ronin, the wanderer, the drifter.<br/>A lone soldier with his blade, no lord to command him, no law to follow.<br/>Yet the code of honor still rings true in his heart. Why should the common farmer not deserve the same as the emperors on their thrones?<br/>For a Ronin might have no allegiance, but he still needs food in his belly and a roof over his head.<br/>So he wanders from town to town, looking for injustice, salvation and a chance to right the wrongs.<br/>And the people know that a man beyond the rule of law can take up steel against those bound in wealth and power.<br/>So as his sword cuts through nobles and corrupt leaders, the Ronin purifies the world one quick cut at a time.<br/>But there will always be corruption, and therefore, there will always be more Ronin.'
    },
    {
        title: 'Saboteur',
        url: '/saboteur',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. Once per game, you may pick a non-red player who will be the only one who wakes up the night after you activate this ability.<br/>All other roles are skipped this night.',
        background: ''
    },
    {
        title: 'Sage',
        url: '/sage',
        faction: 'Town',
        type: 'Investigator',
        artist: 'Anderson Maia',
        cardtext: 'If a Chaos or Wolf role was lynched, select a player.<br/>The entire card of that player will be revealed to you.',
        background: ''
    },
    {
        title: 'Saint',
        url: '/saint',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'When a player is declared dead (not by lynching) you may immediately reveal your card and revive that player. The following night you will die.',
        background: ''
    },
    {
        title: 'Saint Nick',
        url: '/saintnick',
        faction: 'Town',
        type: 'Defender',
        artist: '',
        cardtext: 'If eliminated, look through the eliminated cards and at the end of the night, give a card to a non-wolf player, replacing their old one.<br/>The Wolfkin get to attack twice the following night.',
        background: ''
    },
    {
        title: 'Samurai',
        url: '/samurai',
        faction: 'Town',
        type: 'Attacker',
        artist: '',
        cardtext: 'Each night, if a neighbor of yours has died this round, you may attack another player.',
        background: ''
    },
    {
        title: 'Sandman',
        url: '/sandman',
        faction: 'Town',
        type: 'Specialist',
        artist: 'Alexandra Petruk',
        cardtext: 'Each night disables a target player. You may not pick the same player two times in a row.',
        background: ''
    },
    {
        title: 'Scholar',
        url: '/scholar',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'Every third round, pick a player and reset any "Once per game" abilities.',
        background: ''
    },
    {
        title: 'Scout',
        url: '/scout',
        faction: 'Town',
        type: 'Investigator',
        artist: 'Dean Spencer',
        cardtext: 'Each night, pick a player.<br/>You will be informed if that player is using any abilities on another player.',
        background: ''
    },
    {
        title: 'Scribe',
        url: '/scribe',
        faction: 'Town',
        type: 'Defender',
        artist: '',
        cardtext: 'Each night, you may pick another player. During the next day, that player can not be nominated.',
        background: ''
    },
    {
        title: 'Scryer',
        url: '/scryer',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'At the beginning of the game, you will be pointed to any player that has a role that can affect Investigators.',
        background: ''
    },
    {
        title: 'Scylla',
        url: '/scylla',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Dmitrii Konichenko',
        cardtext: 'Does not hunt. Instead of hunting, you may make a guess which player is the Town Investigator.<br/>If you guess correctly, you and the Seer are turned into Werewolves. If wrong, you are revealed.',
        background: 'Scylla was a monster that lived on one side of a narrow channel of water, opposite its counterpart Charybdis.<br/>The two sides of the strait were within an arrow’s range of each other—so close that sailors attempting to avoid Charybdis would pass too close to Scylla with disastrous results.<br/>Various Greek myths account for Scylla\'s origins and fate. According to some, she was one of the children of Phorcys and Ceto. Other sources, including Stesichorus, cite her parents as Triton and Lamia. According to John Tzetzes and Servius\' commentary on the Aeneid, Scylla was a beautiful naiad who was claimed by Poseidon, but the jealous Amphitrite turned her into a monster by poisoning the water of the spring where Scylla would bathe.<br/>A similar story is found in Hyginus, according to whom Scylla was the daughter of the river god Crataeis and was loved by Glaucus, but Glaucus himself was also loved by the sorceress Circe. While Scylla was bathing in the sea, the jealous Circe poured a potion into the sea water which caused Scylla to transform into a monster with four eyes and six long necks equipped with grisly heads, each of which contained three rows of sharp teeth. Her body consisted of 12 tentacle-like legs and a cat\'s tail, while four to six dog-heads ringed her waist. In this form, she attacked the ships of passing sailors, seizing one of the crew with each of her heads.<br/>In a late Greek myth, recorded in Eustathius\' commentary on Homer and John Tzetzes, Heracles encountered Scylla during a journey to Sicily and slew her. Her father, the sea-god Phorcys, then applied flaming torches to her body and restored her to life.<br/>Because of such stories, having to navigate between the two hazards eventually entered idiomatic use. Another equivalent English seafaring phrase is, "Between a rock and a hard place". The Latin line "Incidit in scyllam cupiens vitare charybdim" (he fell for Scylla to avoid Charybdis) had earlier become proverbial, with a meaning much the same as jumping from the frying pan into the fire. Erasmus recorded it as an ancient proverb in his Adagia, although the earliest known instance is in the Alexandreis, a 12th-century Latin epic poem by Walter of Châtillon.'
    },
    {
        title: 'Seer',
        url: '/seer',
        faction: 'Town',
        type: 'Investigator',
        artist: 'Matt Forsyth',
        cardtext: 'Each night, choose a player.<br/>You will be informed if that player is a wolf-team role or not.',
        background: 'The gift of the Seer, often referred to as The True Sight, is described as both harrowing and miraculous experience.<br/>It is only a few individuals in the world that can hone this skill, but being able to sense true evil comes at a great price.<br/>In some cases, seeing the world as it truly is, has driven many to the brink of madness, or over the edge of suicide.<br/>But for those who can carry this gift with the caution it requires, the path of the Seer can ensure safety for thousands.<br/>While the first historic incidents of Seers were often punished for their statements, once it was revealed that werewolves were indeed real, the tone has shifted.<br/>However, Seers notoriously never seem to have a long lifespan. Maybe it\'s the dark forces trying to destroy this arcane lineage, or maybe their magical powers drain from their mortal beings.<br/>But many towns that survived the werewolf onslaught thank the stars for their Seers guidance, and many smoldering ruins testify to the need of their skills.'
    },
    {
        title: 'Selkie',
        url: '/selkie',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Max Shevchenko',
        cardtext: 'Hunts at night. If a player survives your attacks, they are permanently seen as a Werewolf.',
        background: ''
    },
    {
        title: 'Sellsword',
        url: '/sellsword',
        faction: 'Chaos',
        type: 'Attacker',
        artist: '',
        cardtext: 'Pick a player each night to become your client for the next day. You can not pick the same client two nights in a row.<br/>When your client nominates someone, they Sellsword may choose to attack the nominated player OR the client.',
        background: ''
    },
    {
        title: 'Shadow Council',
        url: '/shadowcouncil',
        faction: 'Rule',
        type: '',
        artist: 'Christof Grobelski',
        cardtext: 'You can not die if any other player died this night.',
        background: ''
    },
    {
        title: 'Shaman',
        url: '/shaman',
        faction: 'Town',
        type: 'Defender',
        artist: 'Forrest Imel',
        cardtext: 'Once per game, you can secretly protect all players except yourself.<br/>At morning, anyone attacked that night will be pointed out by the gamemaster.',
        background: ''
    },
    {
        title: 'Shieldmaiden',
        url: '/shieldmaiden',
        faction: 'Town',
        type: 'Defender',
        artist: 'Matt Forsyth',
        cardtext: 'Each night, choose another player to protect (protected player will be revealed, you can\'t choose the same player twice in a row). This player will not be killed this night.',
        background: '"Saddle the longboats, we hear that there are monsters to kill and glory to be won. I drink mead, slay wolves every day"<br/>Clad in mail and fur she looks every bit as daunting as she would have done in the finest silken ballgowns.<br/>Tall and proud she stands, ready to protect the village against its predators.<br/>The fierce Viking warrior women fear no man and certainly no werewolf.'
    },
    {
        title: 'Skinflayer',
        url: '/skinflayer',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Dean Spencer',
        cardtext: 'Each night, place a mark on a player that appears at dawn. They are now "flayed".<br/>When a flayed player is killed at night, you take over their role.<br/>If multiple, you may choose.',
        background: ''
    },
    {
        title: 'Skinwalker',
        url: '/skinwalker',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. You are seen as a Villager by the Investigators.',
        background: ''
    },
    {
        title: 'Spy',
        url: '/spy',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'At the end of each night, wake up an be shown any targets of Wolf Support abilities.<br/>You are immune to the effects of Wolf Support cards, except attacks.',
        background: 'In the sprawling empire of Valeria, where intrigue and secrets weaved a complex web, there lurked a shadow, a phantom known by many names but seen by few. This enigma was called the Nightingale, the empire’s most elusive spy.<br/>For those in power, Nightingale was the whisper in the dark, the eyes and ears that saw and heard everything. The spy’s reputation was one of cunning and ruthlessness, a specter that struck fear in the hearts of even the mightiest lords and ladies.<br/>But beneath the cloak and dagger, behind the mask of subterfuge, Nightingale, whose true name was Caelum, harbored a secret that few could fathom.<br/>Away from the world of espionage, in the winding alleys of Valeria\'s undercity, Caelum was a beacon of hope. His coin, earned from the treasuries of the corrupt, funded orphanages and soup kitchens. The intel he gathered didn\'t just serve the crown; it protected the innocent and the downtrodden. The very lords he spied upon found their ill-gotten gains mysteriously redirected to fund apothecaries and schools in the city\'s poorest districts.<br/>Caelum had entered the world of espionage after witnessing the injustices that plagued Valeria. While his role demanded duplicity, it also granted him the means to make a difference. Every stolen letter, every whispered secret, was a chance to tip the scales in favor of the oppressed.<br/>One winter night, as Caelum was secretly distributing food to the hungry, he was recognized by Liora, a young girl he had saved years ago. Instead of exposing him, Liora and the others shielded Caelum, creating a network of allies within the very heart of the city he sought to uplift.<br/>Years passed, and Caelum\'s dual life became the stuff of legends. In the courts, he remained the dreaded Nightingale, but in the undercity, he was their guardian, their silent protector.<br/>His story came to a climax when a plot to overthrow the just monarch was uncovered. Caelum, using his influence and connections, not only foiled the coup but ensured that the throne was passed to a ruler who truly had Valeria\'s interests at heart.<br/>The Nightingale vanished that day, but his legacy lived on. For in the heart of Valeria, amidst its towering spires and darkened alleys, the tale of a spy with a heart of gold became a beloved legend, a testament to the idea that even in the world of shadows, there can shine a light of hope and benevolence.'
    },
    {
        title: 'Squire',
        url: '/squire',
        faction: 'Town',
        type: 'Support',
        artist: 'Matsya Das',
        cardtext: 'When the Town Defender dies, you take over their role.<br/>If protected, reveal this card to your protector.',
        background: ''
    },
    {
        title: 'Stalker',
        url: '/stalker',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Klaudia Bezak',
        cardtext: 'Does not hunt. The Stalker can not hunt.<br/>Each night, pick a player. You will be informed who that player have been targeting this night.',
        background: ''
    },
    {
        title: 'Succubus',
        url: '/succubus',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Dom Critelli',
        cardtext: 'Does not hunt. At night: You wake with the wolves but do not hunt.<br/>When you nominate a player, they become Fragile, and can not benefit from protection tonight.',
        background: ''
    },
    {
        title: 'Survivalist',
        url: '/survivalist',
        faction: 'Town',
        type: 'Survivor',
        artist: 'Dean Spencer',
        cardtext: 'You can not die if another player died this night.<br/>You survive lynching if another player was lynched today.',
        background: ''
    },
    {
        title: 'Suzaku',
        url: '/suzaku',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. Every third night, Suzaku picks the investigator\'s target.<br/>If Suzaku picks the investigator, Suzaku is eliminated.',
        background: ''
    },
    {
        title: 'Swampkin',
        url: '/swampkin',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. If lynched, remove all revealed cards from the game.',
        background: ''
    },
    {
        title: 'Tactician',
        url: '/tactician',
        faction: 'Town',
        type: 'Specialist',
        artist: '',
        cardtext: 'Pick a player each night. If they die this night, they may (like the Hunter) pick a player and eliminate them.',
        background: ''
    },
    {
        title: 'Talos',
        url: '/talos',
        faction: 'Chaos',
        type: 'Specialist',
        artist: '',
        cardtext: 'When the game begins, pick a player.<br/>If that player dies (including lynching), you die instead.<br/>Your target player must survive the game for you to win.',
        background: ''
    },
    {
        title: 'Taskmaster',
        url: '/taskmaster',
        faction: 'Chaos',
        type: 'Attacker',
        artist: '',
        cardtext: 'Each night after a Wolf role has been killed, pick a player. They will be awoken and need to select you, or die.<br/>Kill a wolf and a town role this way to ensure your victory. Your ability then fades.',
        background: ''
    },
    {
        title: 'Tax Collector',
        url: '/taxcollector',
        faction: 'Town',
        type: 'Survivor',
        artist: '',
        cardtext: 'If a special role is lynched during the day, you are immune to attacks the following night.',
        background: ''
    },
    {
        title: 'Teen Wolf',
        url: '/teenwolf',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If no wolves have been revealed in this game, you are immune to attacks at night.',
        background: ''
    },
    {
        title: 'Templar',
        url: '/templar',
        faction: 'Town',
        type: 'Support',
        artist: 'Dean Spencer',
        cardtext: 'Pick a player each night.<br/>If target player is killed, their card is revealed.',
        background: ''
    },
    {
        title: 'Tengu',
        url: '/tengu',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. At the start of the game, pick a player. Replace their card with a Tengu card without their knowledge.<br/>They retain their original role but will be seen as Tengu.',
        background: ''
    },
    {
        title: 'Toothfairy',
        url: '/toothfairy',
        faction: 'Wolf',
        type: 'Support',
        artist: 'Dmitry Kaldew',
        cardtext: 'Does not hunt. Each night, pick a player.<br/>That player\'s card will not be revealed if lynched the next day.',
        background: ''
    },
    {
        title: 'Torturer',
        url: '/torturer',
        faction: 'Town',
        type: 'Investigator',
        artist: 'Max Shevchenko',
        cardtext: 'During executions, the torturer marks the player with the second most votes, as long as there is no tie.<br/>During the night, the torturer investigates that player, while the player is awake.',
        background: ''
    },
    {
        title: 'Town Crier',
        url: '/towncrier',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'As long as you are alive, the causes of death (wolf attacks, specific chaos kills) are announced when someone is declared dead by the Gamemaster.',
        background: ''
    },
    {
        title: 'Traveller',
        url: '/traveller',
        faction: 'Town',
        type: 'Specialist',
        artist: 'Camille Kuo',
        cardtext: 'Starts the game revealed.<br/>For the first three nights of the game, you are protected.',
        background: ''
    },
    {
        title: 'Troll',
        url: '/troll',
        faction: 'Chaos',
        type: 'Specialist',
        artist: 'Dean Spencer',
        cardtext: 'Pick a player each night.<br/>If you are attacked this night, your target is attacked instead.<br/>You win by causing a player to kill someone from their own faction (including themselves).',
        background: '"For all the trees I count my friends, for all the roots and grass my home.<br/>Men come and go with torches and shouts, I grind their bones and crush their skulls.<br/>They think they can hunt me from my home, but I will never budge a stone.<br/>For as long as moss and roots are here, they have nowhere I don\'t know by heart.<br/>So let me show you the deaths you try to cast on me, and I will push you back in the grave you dug yourself."<br/>-- Roughly translated by Artreus Krauss, claimed to be an overheard Troll drinking song.'
    },
    {
        title: 'Troublemaker',
        url: '/troublemaker',
        faction: 'Town',
        type: 'Support',
        artist: 'Matt Forsyth',
        cardtext: 'One night per game, you may cause trouble and force the town to lynch twice the following day.',
        background: ''
    },
    {
        title: 'Tupilaq',
        url: '/tupilaq',
        faction: 'Chaos',
        type: 'Attacker',
        artist: '',
        cardtext: 'When a player nominates you, they become your current target.<br/>You need to be alive while your target is lynched to ensure your victory<br/>(You only have one target at a time.)',
        background: ''
    },
    {
        title: 'Usurper',
        url: '/usurper',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Dean Spencer',
        cardtext: 'If the Chaos roles outnumber the town faction, all Chaos roles win the game (despite their winning condition).<br/>If you are the only chaos left, you may kill a player each night.',
        background: 'They called me a traitor, but I only claimed what I was promised.<br/>They called me the enemy, and I shall bring their enemies to their doorsteps.<br/>With the panic from the werewolves, the time is opportune to strike. But standing alone I would surely fall.<br/>I went to the woods, to the caves and the graveyards. I pledged my loyalty to any and all creatures and beasts.<br/>I prayed to every deity that was willing to listen, and I shared my blood with any creature that was willing to fight for me.<br/>And now, with these macabre constructs by my side, the throne is once again within reach.<br/>The creatures of chaos does not have the wits nor the will to rule, but that should ensure that they don\'t have what it takes to dethrone me when I return to power.<br/>And once I reign supreme again, I can discard them as the fools they are...'
    },
    {
        title: 'Valkyrie',
        url: '/valkyrie',
        faction: 'Town',
        type: 'Defender',
        artist: 'Wren Hunter',
        cardtext: 'When a player is lynched, protect both their neighbors at night.',
        background: ''
    },
    {
        title: 'Vampire',
        url: '/vampire',
        faction: 'Chaos',
        type: 'Attacker',
        artist: '',
        cardtext: 'Choose a victim each night. If this player is nominated the next day, they die.<br/>If lynched, your victim voted for you, and your victim is not a wolf role, they turn into a vampire.<br/>You win if there is a Vampire alive at the end of the game.',
        background: ''
    },
    {
        title: 'Varkolak',
        url: '/varkolak',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If lynched, you revive and become a regular werewolf.',
        background: ''
    },
    {
        title: 'Venomancer',
        url: '/venomancer',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Dean Spencer',
        cardtext: 'Every second night, poison a player. If you are nominated, all poisoned players die tonight.<br/>Kill more players than the game had wolf roles.',
        background: ''
    },
    {
        title: 'Viceroy',
        url: '/viceroy',
        faction: 'Town',
        type: 'Survivor',
        artist: '',
        cardtext: 'Once per game, you may reveal your card during your defensive speech, and withdraw yourself from the lynch round.<br/>(Cannot be used during the voting phase.)',
        background: ''
    },
    {
        title: 'Villager',
        url: '/villager',
        faction: 'Town',
        type: 'Crowd',
        artist: 'Ronin Fauzi',
        cardtext: 'If lynched, place this card in front of a player.<br/>This counts as a permanent bonus vote against that player.',
        background: 'We are the town as you see before you.<br/>We fill the fields with wheat, the land with life, and the air with song.<br/>As individuals, we might not look frightening, but when we band together, no evil stands a chance.<br/>With pitchfork in one hand and a lit torch in the other, we will do anything to keep our homeland safe.<br/>When the rumors of werewolves started to stir, we were the first to fall. And while the nobles in their tall castles slept safe at night, our blood ran through the streets.<br/>Now it is our voices that will be heard, and if this town survives this surge of darkness, rest assured we will make the word of history remember our names.'
    },
    {
        title: 'Virgin',
        url: '/virgin',
        faction: 'Town',
        type: 'Support',
        artist: '',
        cardtext: 'If you are lynched, all wolf supporters turn into werewolves.',
        background: ''
    },
    {
        title: 'Vixen',
        url: '/vixen',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If Lynched, you openly pick a non-wolf player.<br/>That player is reduced to a villager.',
        background: ''
    },
    {
        title: 'Vox Populi',
        url: '/voxpopuli',
        faction: 'Rule',
        type: '',
        artist: 'Slava Gerj',
        cardtext: 'On ties, both tied players are lynched. There are no recounts.',
        background: ''
    },
    {
        title: 'Warden',
        url: '/warden',
        faction: 'Town',
        type: 'Defender',
        artist: 'Dean Spencer',
        cardtext: 'Once per game, protect a target player and yourself.',
        background: ''
    },
    {
        title: 'Watchman',
        url: '/watchman',
        faction: 'Town',
        type: 'Defender',
        artist: 'Forrest Imel',
        cardtext: 'Each night, pick two targets.<br/>You will protect any Town Crowd picked.',
        background: ''
    },
    {
        title: 'Wayob',
        url: '/wayob',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. The Wayob is seen as a Villager when the number of Werewolf roles is odd.',
        background: ''
    },
    {
        title: 'Wendigo',
        url: '/wendigo',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Max Shevchenko',
        cardtext: 'Hunts at night. If a Chaotic role was lynched, you may perform an extra attack.<br/>(Multiple Wendigos may perform individual attacks)',
        background: ''
    },
    {
        title: 'Werebat',
        url: '/werebat',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Dom Critelli',
        cardtext: 'Hunts at night. If targeted by a nighttime ability, you will be informed what role targeted you.',
        background: 'As blind as he is ugly, and as dangerous as he is blind'
    },
    {
        title: 'Werewolf',
        url: '/werewolf',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Max Shevchenko',
        cardtext: 'Each night, you hunt together and pick out a single player to attack. (If nothing interferes, their target will not survive the night.)',
        background: 'It is unclear exactly when and where the werewolf legend originated. Some believe the werewolf made its debut in The Epic of Gilgamesh, the oldest known Western prose when Gilgamesh jilted a potential lover because she had turned her previous mate into a wolf.<br/>Werewolves made another early appearance in Greek mythology with the Legend of Lycaon. According to the legend, Lycaon, the son of Pelasgus, angered the god Zeus when he served him a meal made from the remains of a sacrificed boy. As punishment, the enraged Zeus turned Lycaon and his sons into wolves.<br/>Werewolves also emerged in early Nordic folklore. The Saga of the Volsungs tells the story of a father and son who discovered wolf pelts that had the power to turn people into wolves for ten days. The father-son duo donned the pelts, transformed into wolves and went on a killing rampage in the forest. Their rampage ended when the father attacked his son, causing a lethal wound. The son only survived because a kind raven gave the father a leaf with healing powers.<br/>Myths similar to the werewolf can be found all over the world, and the thinking of a beast or animal hiding just beneath the skin of man seems to be a universal one to explain many things, such as courage, lust and rage.'
    },
    {
        title: 'White Wolf',
        url: '/whitewolf',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If a wolf or chaos role was lynched this round, you are seen as a Villager.',
        background: ''
    },
    {
        title: 'Wildling',
        url: '/wildling',
        faction: 'Chaos',
        type: 'Attacker',
        artist: 'Dean Spencer',
        cardtext: 'If a player nominates the Wildling, you will attack that player tonight.<br/>When you kill your target, you get to see the role and gain a copy of the winning condition of that role.',
        background: ''
    },
    {
        title: 'Wildwolf',
        url: '/wildwolf',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. Once per game, you may choose to perform an extra attack.<br/>When you do this, you are revealed to the town investigator and the town gets to lynch twice the next day.',
        background: ''
    },
    {
        title: 'Winter Sun',
        url: '/wintersun',
        faction: 'Rule',
        type: '',
        artist: '',
        cardtext: 'If the lynch vote ends in a tie, there will be no recounts. The day just immediately ends with no lynching.',
        background: ''
    },
    {
        title: 'Witch of Blood',
        url: '/witchofblood',
        faction: 'Town',
        type: 'Survivor',
        artist: 'Dmitrii Konichenko',
        cardtext: 'When a Town role is lynched, you become protected at night.<br/>If a Witch is lynched, all other Witches turn to Werewolves.',
        background: ''
    },
    {
        title: 'Witch of Envy',
        url: '/witchofenvy',
        faction: 'Town',
        type: 'Investigator',
        artist: 'Klaudia Bezak',
        cardtext: 'If a player has any bonus votes, their card is revealed to you.<br/>If a Witch is lynched, all other Witches turn to Werewolves.',
        background: ''
    },
    {
        title: 'Witch of Light',
        url: '/witchoflight',
        faction: 'Town',
        type: 'Defender',
        artist: 'Forrest Imel',
        cardtext: 'Once per game, choose another player who will survive their next death.<br/>If lynched, all other Witches join the Wolf team.',
        background: ''
    },
    {
        title: 'Witch of Moon',
        url: '/moonwitch',
        faction: 'Town',
        type: 'Attacker',
        artist: 'Camilla Kuo',
        cardtext: 'Every second night, pick a player.<br/>If the player visits another player, you will attack them.<br/>If a Witch is lynched, convert all other Witches to Werewolves.',
        background: ''
    },
    {
        title: 'Witch of Water',
        url: '/witch-of-water',
        faction: 'Town',
        type: 'Investigator',
        artist: 'Sentient Ink',
        cardtext: 'Each night, you are informed how many Wolf roles can be seen within 3 spaces on either side.<br/>If another witch is lynched, all witches turn into werewolves.',
        background: ''
    },
    {
        title: 'Witch of Winter',
        url: '/witchofwinter',
        faction: 'Town',
        type: 'Specialist',
        artist: '',
        cardtext: 'Each night, pick a player.<br/>Delay any nighttime powers they might have by one night. If you target an attacking group, delay the entire attack.<br/>If a Witch is lynched, convert all other Witches to Werewolves.',
        background: ''
    },
    {
        title: 'Wolf Cub',
        url: '/wolfcub',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'James Hayball',
        cardtext: 'Hunts at night. If lynched, the remaining wolves may hunt twice this round.',
        background: 'When werewolves decide to embrace others to their cause, they usually go for fit and healthy individuals, as those traits carry over and become incredibly increased in the werewolf form.<br/>But this is not always the case. Some werewolves wish to embrace their families left behind, or children wander into the forest and get lost.<br/>These younglings become what is known as Wolf cubs and are usually taken in under the protection of the strongest werewolf of the pack.'
    },
    {
        title: 'Wolfknight',
        url: '/wolfknight',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. If you were nominated in the last round, you MAY activate your ability to perform a second attack this night.',
        background: ''
    },
    {
        title: 'Wolflord',
        url: '/wolflord',
        faction: 'Wolf',
        type: 'Support',
        artist: '',
        cardtext: 'Does not hunt. On the third night of the game, choose a player.<br/>That player will immediately become a werewolf and will be woken with you.',
        background: ''
    },
    {
        title: 'Wolfmother',
        url: '/wolfmother',
        faction: 'Wolf',
        type: 'Attacker',
        artist: '',
        cardtext: 'Hunts at night. When you are the only wolf role left, pick a player and turn both of you into Werewolves.',
        background: 'In any pack of werewolves, there is often a Wolfmother, the alpha female that dictates the process and decides the fate of her cubs.<br/>A stern but powerful beast that carries a motherly charm despite her beastly presence.<br/>Some believe that they are a natural part of the werewolf hierarchy, while other believe it might be a witch or shapechanger that takes on this form, in order to infiltrate a werewolf pack and make them do her dark bidding.<br/>She rarely joins the hunt, often staying at a safe hideout in the woods awaiting her wolves to return. It is said that if you stumble upon her in the wilds, insightful conversations can be had with her about life, fate and purpose. But it will only last until her wolves return to her, and will attack any humans on sight.<br/>Often more slender and "stretched" than her male counterparts, with more humanoid hands and opposing thumbs. Skilled in magic, and with a certain glow to her to illustrate immense wisdom and power.<br/>The highest responsibility of the Wolfmother is often to decide who may or may not become a part of her pack, a choice filled with trappings and twists, since one bad newcomer could tear the pack apart from the inside.<br/>In contrast to regular werewolves, the Wolfmother also seems to have full verbal and cognitive skills, and has the ability to transform back to human form whenever she decides, but prefers staying in the form of a werewolf unless it is important to her survival.'
    },
    {
        title: 'Wolfslayer',
        url: '/wolfslayer',
        faction: 'Town',
        type: 'Attacker',
        artist: '',
        cardtext: 'When there is only one wolf left at the beginning of a night, attack that one wolf.<br/>If ANY player is protected this night, the attack will fail.',
        background: 'In a world painted with moonlit nights and shadowy forests, where tales of the supernatural became all too real, there was a legend of the wolf-slayer named Seraphine. With silver hair as bright as her blades and eyes sharp as a hawk\'s, she wandered from one town to another, a silent guardian against the beasts of the night.<br/>Her reputation preceded her: tales of valor, of wolves falling before her blade, of entire towns saved from the gnashing jaws of doom. But with these tales also came whispers of her methods, whispers that bred mistrust. It was said that Seraphine demanded complete authority upon entering a town, requiring townsfolk to remain indoors after dusk and surrendering any suspected of harboring the werewolf curse.<br/>Some towns, desperate and plagued by the wolf menace, would open their gates willingly, placing their trust and fate into Seraphine’s hands. They were the ones who saw dawn without fear, their streets cleansed of the monstrous threats.<br/>But there were others, towns that clung to their skepticism, fearing the wolf-slayer\'s power and methods more than the beasts themselves. To them, the tales of her victories seemed exaggerated, her demands too autocratic.<br/>Harren\'s Hollow was one such town. Nestled between rolling hills and dense woods, the town had seen an increasing number of wolf attacks. But when Seraphine arrived at their gates, instead of gratitude, she was met with suspicion. The town\'s elders, proud and independent, saw her not as a savior but as an intruder, seeking control under the guise of protection.<br/>Despite Seraphine\'s warnings, and her pleas of impending doom, the gates of Harren\'s Hollow remained firmly shut to her. Reluctantly, she moved on, leaving the town to its fate.<br/>It was but a matter of nights before the howls grew louder, more desperate. The walls of Harren\'s Hollow, once believed impenetrable, crumbled under the assault of a werewolf pack, drawn by the scent of disbelief. Homes were ravaged, families torn apart, and by dawn, the once-thriving town was left in ruins.<br/>Survivors of that tragic night would whisper of their regret, of the pride that had blinded them to their savior. And as Seraphine\'s legend grew, so did the lesson of Harren\'s Hollow – a chilling reminder of the price of mistrust in a world where beasts lurked just beyond the light.'
    },
    {
        title: 'Woodsman',
        url: '/woodsman',
        faction: 'Town',
        type: 'Survivor',
        artist: 'Dean Spencer',
        cardtext: 'If your neighbour is a Town Crowd (Villager / Orphan / Maiden), you are protected from the Wolf Team.',
        background: ''
    },
    {
        title: 'Wukong',
        url: '/wukong',
        faction: 'Wolf',
        type: 'Attacker',
        artist: 'Ashishkumarsah Sonu',
        cardtext: 'Hunts at night. If no one was lynched during the day, all wolf roles are seen as villagers at night.',
        background: ''
    },
    {
        title: 'Wyvern',
        url: '/wyvern',
        faction: 'Chaos',
        type: 'Attacker',
        artist: '',
        cardtext: 'If you are the only chaos role left, you may, each night, attack target player within two spaces.<br/>If the Wyvern doesn\'t attack, it dies.',
        background: ''
    },
];
export default cardData;
