// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fact about Caleb to the page.
 */
function addRandomFact() {
  const facts = [
    'I like to read.',
    'Ping pong is one of my favorite sports.',
    'I ran track in high school.',
    'My favorite flavor of ice cream is blue moon.',
  ];

  // Pick a random fact about Caleb.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}

/**
 * Creates an <li> element containing text.
 */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

/**
 * Fetches json from the server.
 */
function getComments() {
  fetch('/data').then(response => response.json()).then((result) => {
  console.log(result);

  const commentContainer = document.getElementById('comment-container');
  commentContainer.innerHtml = '';

  var index;
  var topList;
  // Format comments.
  for (index in result.comments){
    topList = document.createElement('ul');
    topList.innerText = result.comments[index].name;
    topList.appendChild(createListElement(result.comments[index].text));
    topList.appendChild(createListElement(((result.comments[index].like) ? "Like":"Dislike")));
    commentContainer.appendChild(topList);
  }

  });
}
