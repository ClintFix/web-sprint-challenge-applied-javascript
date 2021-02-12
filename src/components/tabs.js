import axios from 'axios'

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // create container element & add class
  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');

  // Loop over passed array and create, add classes to, and append elements with expected content
  topics.forEach(topic => {
    const newTopic = document.createElement('div'); // create new tab
    newTopic.classList.add('tab'); //add '.tab" class to element
    newTopic.textContent = topic; // populate tab with content from passed array
    topicsDiv.appendChild(newTopic); //append newly created tab to the topics div
  })

  return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //  
  
  axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
      document.querySelector(selector).appendChild(Tabs(res.data.topics));
    })
    .catch(err => {
      alert('There was an error with the tabsAppender function api call')
    })
}


export { Tabs, tabsAppender }
