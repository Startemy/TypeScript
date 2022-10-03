import { renderBlock } from './lib.js'

export function renderSearchFormBlock() {
  const dateTomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
  const tomorrow = `${dateTomorrow.getFullYear()}-${String(dateTomorrow.getMonth() + 1).padStart(2, '0')}-${String(dateTomorrow.getDate()).padStart(2, '0')}`;

  const dateAfterTomorrow = new Date(new Date().setDate(new Date().getDate() + 3));
  const afterTomorrow = `${dateAfterTomorrow.getFullYear()}-${String(dateAfterTomorrow.getMonth() + 1).padStart(2, '0')}-${String(dateAfterTomorrow.getDate()).padStart(2, '0')}`;

  const dateNexMonth = new Date(new Date().setMonth(new Date().getMonth() + 2));
  const nextMonth = `${dateNexMonth.getFullYear()}-${String(dateNexMonth.getMonth() + 1).padStart(2, '0')}-${String(dateNexMonth.getDate()).padStart(2, '0')}`;

  document.addEventListener('DOMContentLoaded', function() {
    const valueDate = (dateEntery: Date | string, dateExit: Date | string) => {
      if (dateEntery && dateExit) {
        console.log(dateEntery)
      }
    }

    const btnFind = document.querySelector('form')
    if (btnFind) {
      btnFind?.addEventListener('submit', evnt => {
        evnt.preventDefault()
        const dateEntery = (<HTMLInputElement>document.querySelector('#check-in-date')).value
        const dateExit = (<HTMLInputElement>document.querySelector('#check-out-date')).value
        console.log(dateEntery)
        console.log(dateExit)
        valueDate(dateEntery, dateExit)
        console.log('OK')
      })
    } else {
      console.log('Nothing')
    }
  }, false)

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${tomorrow}" min="${tomorrow}" max="${nextMonth}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${afterTomorrow}" min="${afterTomorrow}" max="${nextMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
