const data = [];

const levels = {
  "5M": 5000000,
  "2M": 2000000,
  "1M": 1000000,
  "500K": 500000,
  "100K": 100000,
};

const insertContinent = () => {
  const levelData = data.map((item) => {
    return (item.continent = "Europe");
  });
};

const orderArrayByLevels = () => {
  const levelData = data.map((item) => {
    if (item.population > levels["5M"]) {
      item.level = 0;
    } else if (
      item.population < levels["5M"] &&
      item.population > levels["2M"]
    ) {
      item.level = 1;
    } else if (
      item.population < levels["2M"] &&
      item.population > levels["1M"]
    ) {
      item.level = 2;
      //todo
    } else if (
      item.population < levels["1M"] &&
      item.population > levels["500K"]
    ) {
      item.level = 3;
      //todo
    } else if (
      item.population < levels["500K"] &&
      item.population > levels["100K"]
    ) {
      item.level = 4;
      //todo
    } else if (item.population < levels["100K"]) {
      item.level = 5;
      //todo
    }
    return item;
  });
  return levelData;
};

//console.log(orderArrayByLevels());
