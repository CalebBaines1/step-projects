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

/** Adds set greeting to the DOM. */
function addGreetingToDom(greeting) {
  console.log('Adding greeting to dom: ' + greeting);

  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/**
 * Handles response by converting it to text and passing the result to
 * addQuoteToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addGreetingToDom() function.
  textPromise.then(addGreetingToDom);
}

/**
 * Fetches a set greeting from the server and adds it to the DOM.
 */
function getIntroduction() {
  console.log('Fetching greeting.');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

