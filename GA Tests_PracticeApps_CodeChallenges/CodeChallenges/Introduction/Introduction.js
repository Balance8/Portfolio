function add(a, b) {
  return a + b;
}
var x = add(4, 3);
console.log(x);

var cat = "cute";
console.log(cat);

function arrayLength(array) {
  if (array instanceof Array) {
    return array.length;
  } else {
    return 0;
  }
}
var myArray = [1, 2, 3];
console.log(arrayLength(myArray));
var myString = "test";
console.log(arrayLength(myString));

function keys(obj) {
  let keys = [];

  for (let key in obj) {
    keys.push(key);
  }

  return keys;
}
var myKey = { a: "cat", b: "dog" };
console.log(keys(myKey));



function getChall() {
  var challData = {};
  return new Promise(function (resolve) {
    requestP(
      `https://na1.api.riotgames.com/lol/league/v3/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${KEY}`
    )
      .then(body => {
        var players = JSON.parse(body).entries;

        challData = players.map(body => ({
          playerId: body.playerOrTeamId,
          name: body.playerOrTeamName,
          lp: body.leaguePoints,
          win: body.wins,
          loss: body.losses,
          wl: ((body.wins / (body.wins + body.losses)) * 100).toFixed() + "%",
          tier: "Challenger"
        }));
        challData = challData.sort((a, b) => b.lp - a.lp);
        var iconIdArr = [];
        for (let i = 0; i < pullNum; i++) {
          iconIdArr.push(
            requestP(
              `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${
              challData[i].name
              }?api_key=${KEY}`
            )
          );
        }
        return Promise.all(iconIdArr);
        // resolve(challData);
      })
      .then(results => {
        results.forEach((result, idx) => {
          var players = JSON.parse(result);
          challData[idx].iconId = players.profileIconId;
          challData[idx].level = players.summonerLevel;
          challData[idx].accountId = players.accountId;
        });
        var versionId = "8.11.1";
        return versionId;
      })
      .then(versionId => {
        var iconPicArr = [];
        for (let i = 0; i < pullNum; i++) {
          iconPicArr.push(
            `http://ddragon.leagueoflegends.com/cdn/${versionId}/img/profileicon/${
            challData[i].iconId
            }.png`
          );
        }
        return Promise.all(iconPicArr);
      })
      .then(results => {
        results.forEach((result, idx) => {
          challData[idx].iconPng = result;
        });
        resolve(challData);
      });
  });
}
