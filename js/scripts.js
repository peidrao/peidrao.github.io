$('nav a').click(function (e) {
    e.preventDefault();
    let id = $(this).attr('href')
    let targetOffset = $(id).offset().top; // Retorna o top e o left do elemento
    let menuHeight = $('nav').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 1000)

    console.log(targetOffset)
})

// Função que diminui a quantidade de eventos a cada scroll
debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};