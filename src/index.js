// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
import 'regenerator-runtime'
import { worker } from './mocks/browser'

import { cardAppender } from './components/card'
import { tabsAppender } from './components/tabs'
import { headerAppender } from './components/header'

worker.start()

headerAppender('.header-container')
tabsAppender('.tabs-container')
cardAppender('.cards-container')

// const tabsArray = Array.from(document.querySelectorAll('.tab'))


// function filter(topic) {
//     const articleArray = Array.from(document.querySelectorAll(`.card .${topic}`));
//     console.log(articleArray)
// }

// export { filter }