const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://corona.lmao.ninja/all';

//  XMLHttpRequest: a very useful JavaScript object that allows us to make network requests to retrieve 
// resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets)
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const summary = request.response;
  populateHeader(summary);
  // showCountries(countries);
}

function populateHeader(jsonObj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['cases'];
  console.log(myH1.textContent);
  header.appendChild(myH1);
}      

