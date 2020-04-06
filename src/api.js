import axios from "axios";

const URL =
  "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";

export function wikipediaSearch(value) {
  return axios
    .get(URL + value)
    .then(response => {
      if (!response.data.query) {
        return;
      }
      return response.data.query.pages;
    })
    .then(list => {
      return Promise.resolve(list);
    })
    .catch(error => {
      console.error(error);
    });
}

export function getSomething() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(["data1", "data2", "data3"]);
    });
  });
}
