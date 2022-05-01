const button = $('#btn')
const overlay = $('#overlay')
overlay.scrollableOverlay()

const close = $('#close')
const body = $('body')
button.on('click', () => {
    overlay.removeClass('hidden');
    overlay.trigger('show')
})

close.on('click', () => {
    overlay.addClass('hidden');
    overlay.trigger('hide')
})