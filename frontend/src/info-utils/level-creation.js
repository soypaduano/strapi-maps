const levels = {
  "5M": 5000000,
  "2M": 2000000,
  "1M": 1000000,
  "500K": 500000,
  "100K": 100000,
};

const insertActive = (data) => {
  const levelData = data.map((item) => {
    item.active = true;
  });
  return levelData;
};

const removeKey = (data) => {
  const levelData = data.map((item) => {
    delete item["points"];
    return item;
  });
  return levelData;
};

const insertLevel = (data) => {
  let levelData = data.map((item) => {
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

const getListOfNames = (data) => {
  const list = data.map((element) => {
    return element.name;
  });
  return list;
};

const orderArrayByLevel = (data) => {

}

export default insertActive;
