import $ from 'jquery'

export const accordion = $(() => {
  $('.js-accordion').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('open')
    $(this).next('.js-accordion-content').stop(true, false).slideToggle(300)
  })
})
