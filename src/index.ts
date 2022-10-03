import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

let dateEntery: string
let dateExit: string

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Leyla Weder', '/img/avatar.png', 0)

  renderSearchFormBlock(dateEntery, dateExit)
  const innerDate = (<HTMLInputElement>document.querySelector('#check-in-date'))
  innerDate.addEventListener('change', () => {
    dateEntery = innerDate.value
  })
  const outDate = (<HTMLInputElement>document.querySelector('#check-out-date'))
  outDate.addEventListener('change', () => {
    dateExit = outDate.value
  })

  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
