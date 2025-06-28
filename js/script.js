document.addEventListener(`DOMContentLoaded`, () => {
    // Получаю кнопки меню
    const drinksbutton = document.getElementById(`drinks_button`)
    const dessertsbutton = document.getElementById(`desserts_button`)
    const bakerybutton = document.getElementById(`bakery_button`)
    const toastsbutton = document.getElementById(`toasts_button`)

    // Получаю секции с самими блюдАми
    const drinks = document.getElementById(`drinks`)
    const desserts = document.getElementById(`desserts`)
    const bakery = document.getElementById(`bakery`)
    const toasts = document.getElementById(`toasts`)

    drinksbutton.addEventListener(`click`, () => {
        drinks.style.display = `flex`
        desserts.style.display = `none`
        bakery.style.display = `none`
        toasts.style.display = `none`
    })
    dessertsbutton.addEventListener(`click`, () => {
        drinks.style.display = `none`
        desserts.style.display = `flex`
        bakery.style.display = `none`
        toasts.style.display = `none`
    })
    bakerybutton.addEventListener(`click`, () => {
        drinks.style.display = `none`
        desserts.style.display = `none`
        bakery.style.display = `flex`
        toasts.style.display = `none`
    })
    toastsbutton.addEventListener(`click`, () => {
        drinks.style.display = `none`
        desserts.style.display = `none`
        bakery.style.display = `none`
        toasts.style.display = `flex`
    })
})
    