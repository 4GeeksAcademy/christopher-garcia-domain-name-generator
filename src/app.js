/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const at = [".com", ".eu", ".us"];

  function domainNameGenerator() {
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < at.length; l++) {
            console.log(concatString(pronoun[i], adj[j], noun[k], at[l]));
          }
        }
      }
    }
  }

  function concatString(str1, str2, str3, str4) {
    return `${str1}${str2}${str3}${str4}`;
  }

  domainNameGenerator();
};
