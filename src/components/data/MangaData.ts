import type { TManga } from "../../Types";

export const popularMangas: TManga[] = [];

export const favoriteMangas: TManga[] = [
  {
    id: crypto.randomUUID(),
    titleEnglish: "Berserk",
    titleJapanese: "ベルセルク",
    synopsis:
      "Guts, a former mercenary now known as the Black Swordsman, is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings. Setting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his loved one—of their humanity. Included one-shot: Volume 14: Berserk: The Prototype",
    imgWEBP: "https://cdn.myanimelist.net/images/manga/1/157897l.webp",
    imgJPG: "https://cdn.myanimelist.net/images/manga/1/157897l.jpg",
    authors: ["Miura, Kentarou", "Studio Gaga"],
    score: 9.47,
    genres: [
      "Action",
      "Adventure",
      "Award Winning",
      "Drama",
      "Fantasy",
      "Horror",
    ],
  },
  {
    id: crypto.randomUUID(),
    titleEnglish: "JoJo's Bizarre Adventure Part 5: Golden Wind",
    titleJapanese: "ジョジョの奇妙な冒険 黄金の風",
    synopsis: `Naples, 2001. Giorno Giovanna is a small-time crook with one big dream—to become a "Gang-Star." No ordinary thief, Giorno has a connection to the remarkable Joestar bloodline, and possesses a Stand named Gold Experience. His dream starts to become reality when he meets Bruno Bucciarati, a mobster from the gang Passione and a fellow Stand user himself. Realizing that they share similar ideals, and both disagree with the gang's harmful affairs, Giorno reveals his goal to Bruno: with Bruno's help, he will reform Passione by overthrowing the boss. As Giorno becomes a member of Passione, and is inducted into Bruno's squad, he discovers that it is no simple gang; its numbers are teeming with Stand users. Now confronted by other squads of differing loyalties and unpredictable caliber, their goal to change the gang from the inside out will be a tough one. Taking on these adversaries, Giorno attempts to rise through the ranks and inch closer to the boss, a man who is shrouded in mystery.`,
    imgWEBP: "https://cdn.myanimelist.net/images/manga/1/269912.webp",
    imgJPG: "https://cdn.myanimelist.net/images/manga/1/269912.jpg",
    authors: ["Araki, Hirohiko"],
    score: 8.18,
    genres: ["Action", "Adventure"],
  },
  {
    id: crypto.randomUUID(),
    titleEnglish: "Witch Hat Atelier",
    titleJapanese: "とんがり帽子のアトリエ",
    synopsis: `Coco, a humble dressmaker's daughter, has always been fascinated by magic and the witches who cast it, despite the strict precautions they take to hide their methods from the public. However, when Coco takes advantage of a golden chance to spy on the skilled witch Qifrey, she realizes that her favorite picture book was a disguised magic book all along! In her excitement, she immediately starts testing out the various spells. When a spell causes a disaster in her home, Qifrey rescues her just in time and decides to train her, realizing that she is the first lead he has found that could help him track down the Brimmed Caps—a dangerous group of heretics who experiment with forbidden body-altering magic and spread magical artifacts among the commoners. But before Coco and Qifrey can confront the Brimmed Caps, she is going to have to improve her magical skills and learn to get along with Qifrey's other apprentices.`,
    imgWEBP: "https://cdn.myanimelist.net/images/manga/3/190005.webp",
    imgJPG: "https://cdn.myanimelist.net/images/manga/3/190005.jpg",
    authors: ["Shirahama, Kamome"],
    score: 8.66,
    genres: ["Fantasy"],
  },
  {
    id: crypto.randomUUID(),
    titleEnglish: "The Climber",
    titleJapanese: "孤高の人",
    synopsis: `Through pain and arduous effort, one can reach the top of the world. Standing where no man has ever set foot before, there is an exhilarating feeling of success. This is what Mori Buntarou trains, works, and lives for. His climb to the top starts when he transfers to a new high school. Despite his lonesome and solitary nature, Mori's classmates persuade him to climb the school building. Without a harness or hesitation, he begins his scale to reach the top. Edging past the point of no return, he halts when he is faced with a final intimidating obstacle—a horizontal overhang. Adrenaline courses through him, and Mori jumps for the final hold at the summit. From there, he casts his eyes upon something that he normally would not have seen—another peak, another goal. With an awakened passion and newfound purpose in life, Mori explores the breathtaking sport of rock climbing.`,
    imgWEBP: "https://cdn.myanimelist.net/images/manga/1/324690.webp",
    imgJPG: "https://cdn.myanimelist.net/images/manga/1/324690.jpg",
    authors: ["Sakamoto, Shinichi"],
    score: 8.82,
    genres: ["Award Winning", "Drama", "Sports"],
  },
  {
    id: crypto.randomUUID(),
    titleEnglish: "Otr of the Flame",
    titleJapanese: "灯火のオテル",
    synopsis: `The world is encased in winter due to the advances of the Ice Kingdom. Kind-hearted Otr, who dreams of being a warrior like his dad, has been entrusted with keeping the fires burning as a cook in the fortress. But when the fortress is attacked by the demonic army of the Ice Kingdom, the people and the flame are in danger of being snuffed out. Can Otr awaken a power that can turn the tide? A hero's journey of fire and ice now begins!`,
    imgWEBP: "https://cdn.myanimelist.net/images/manga/1/324626.webp",
    imgJPG: "https://cdn.myanimelist.net/images/manga/1/324626.jpg",
    authors: ["Kawaguchi, Yuuki"],
    score: 8.82,
    genres: ["Action", "Adventure", "Fantasy"],
  },
];

export const mangaData: TManga[] = [...favoriteMangas];
