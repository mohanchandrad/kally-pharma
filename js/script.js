

const item = document.getElementById('menu');

const toggleMenu = () => {
        item.style.transform = 'translate(0%)';
}

const hideMenu = () => {
        item.style.transform = 'translate(110%)';
}



$(document).ready(() => {
        $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                }, {
                        duration: 1500,
                        easing: 'swing',
                        step: function (now) {
                                $(this).text(Math.ceil(now));
                        }
                });
        });
})