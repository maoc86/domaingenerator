/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

window.onload = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const ext = [".com", ".es"];

  let domain = [];

  pronoun.forEach(pron => {
    adj.forEach(ad => {
      noun.forEach(nou => {
        ext.forEach(ex => {
          if (ex == ".com") domain.push(`${pron}${ad}${nou}${ex}`);
        });
      });
    });
  });

  document.querySelector("#domain").innerHTML = domain
    .map(x => `<li>${x}</li>`)
    .join("");
};
