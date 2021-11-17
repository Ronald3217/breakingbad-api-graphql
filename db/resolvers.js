const axios = require('axios');
const Nicknames = [
  {
    "id": "S01E01#1",
    "time": "",
    "season": "1",
    "episode": "1",
    "nickname": "SuperSmeller/SuperSniffer",
    "for": "Burton Guster",
    "givenby": "(given by Gus to his nose)"
  },
  {
    "id": "S01E03#1",
    "time": "0:18:54",
    "season": "1",
    "episode": "3",
    "nickname": "Peter Panic",
    "for": "Burton Guster",
    "givenby": "Shawn"
  },
  {
    "id": "S02E15#1",
    "time": "0:37:26",
    "season": "2",
    "episode": "15",
    "nickname": "Tangus",
    "for": "Burton Guster",
    "givenby": "Given by him"
  },
  {
    "id": "S02E16#1",
    "time": "0:11:30",
    "season": "2",
    "episode": "16",
    "nickname": "Bruton Gaster",
    "for": "Burton Guster",
    "givenby": "Shawn"
  },
  {
    "id": "S03E06#1",
    "time": "0:11:30",
    "season": "3",
    "episode": "6",
    "nickname": "Chesterfield McMillan and wife",
    "for": "Burton Guster",
    "givenby": "Shawn"
  },
  {
    "id": "S03E07#1",
    "time": "0:13:10",
    "season": "3",
    "episode": "7",
    "nickname": "ManiacManiac19, president pro temp of the Manic Fanclub",
    "for": "Shawn Spencer",
    "givenby": "Given by him"
  },
  {
    "id": "S03E07#2",
    "time": "0:13:10",
    "season": "3",
    "episode": "7",
    "nickname": "Longbranch Pennywhistle",
    "for": "Burton Guster",
    "givenby": "Shawn"
  },
  {
    "id": "S03E16#1",
    "time": "0:00:05",
    "season": "3",
    "episode": "16",
    "nickname": "Trapezious Milkington",
    "for": "Burton Guster",
    "givenby": "Shawn"
  },
  {
    "id": "S03E16#2",
    "time": "0:05:30",
    "season": "3",
    "episode": "16",
    "nickname": "Sterling Cooper",
    "for": "Burton Guster",
    "givenby": "Shawn"
  },
  {
    "id": "S04E04#1",
    "time": "0:04:39",
    "season": "4",
    "episode": "4",
    "nickname": "Scepty ",
    "for": "Shawn Spencer",
    "givenby": "Given by him"
  },
  {
    "id": "S04E04#2",
    "time": "0:16:55",
    "season": "4",
    "episode": "4",
    "nickname": "Shawn  ( No relation )",
    "for": "Burton Guster",
    "givenby": "Shawn"
  },
  {
    "id": "S04E05#1",
    "time": "0:07:05",
    "season": "4",
    "episode": "5",
    "nickname": "Enorme Papa Gorila",
    "for": "Henry Spencer",
    "givenby": "Shawn"
  },
  {
    "id": "S05E12#1",
    "time": "0:02:11",
    "season": "5",
    "episode": "12",
    "nickname": "Frederick Douglass",
    "for": "Burton Guster",
    "givenby": ""
  },
  {
    "id": "S05E12#2",
    "time": "0:06:35",
    "season": "5",
    "episode": "12",
    "nickname": "Lodge Blackmunn",
    "for": "Burton Guster",
    "givenby": "Shawn"
  },
  {
    "id": "S05E15#1",
    "time": "0:03:47",
    "season": "5",
    "episode": "15",
    "nickname": "RadioStar",
    "for": "Burton Guster",
    "givenby": "Shawn"
  },
  {
    "id": "S05E15#2",
    "time": "0:25:55",
    "season": "5",
    "episode": "15",
    "nickname": "Gusjay Gupta",
    "for": "Burton Guster",
    "givenby": "Shawn"
  },
  {
    "id": "S06E16#1",
    "time": "0:08:50",
    "season": "6",
    "episode": "16",
    "nickname": "Sh'Dynasty",
    "for": "Burton Guster",
    "givenby": "Shawn"
  },
  {
    "id": "S06E16#2",
    "time": "0:12:18",
    "season": "6",
    "episode": "16",
    "nickname": "Snoopy",
    "for": "Shawn Spencer",
    "givenby": ""
  },
  {
    "id": "S06E16#3",
    "time": "0:12:18",
    "season": "6",
    "episode": "16",
    "nickname": "Hammertime",
    "for": "Shawn Spencer",
    "givenby": "Given by him"
  },
  {
    "id": "S06E16#4",
    "time": "0:15:09",
    "season": "6",
    "episode": "16",
    "nickname": "Candyman ",
    "for": "Burton Guster",
    "givenby": "Shawn"
  }
];

const getCharacters = async () => {
  const respuesta = await axios('https://breakingbadapi.com/api/characters');
  return respuesta.data.map(character => {
    return {
      id: character.char_id,
      name: character.name,
      birthday: character.birthday,
      occupation: character.occupation,
      img: character.img,
      status: character.status,
      nickname: character.nickname,
      appearance: character.appearance,
      portrayed: character.portrayed,
      category: character.category,
      better_call_saul_appearance: character.better_call_saul_appearance,
    }
  })
}

const getCharacter = async (id) => {
  if (!id) {
    console.log('no hay id')
    return;
  }
  const respuesta = await axios(`https://breakingbadapi.com/api/characters/${id}`);
  console.log(respuesta.data[0]);
  return {
    id: respuesta.data[0].char_id,
    name: respuesta.data[0].name,
    birthday: respuesta.data[0].birthday,
    occupation: respuesta.data[0].occupation,
    img: respuesta.data[0].img,
    status: respuesta.data[0].status,
    nickname: respuesta.data[0].nickname,
    appearance: respuesta.data[0].appearance,
    portrayed: respuesta.data[0].portrayed,
    category: respuesta.data[0].category,
    better_call_saul_appearance: respuesta.data[0].better_call_saul_appearance,
  }
}

const resolvers = {
  Query: {
    Characters: (parent, args, context) => {
      return getCharacters();
    },
    Character: (parent, args, context) => {
      if (args.id) {
        return getCharacter(args.id);
      }
    }
  }
}

module.exports = resolvers