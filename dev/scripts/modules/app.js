// import 'popper.js';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap-select';

// //offcanavas
// import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/dist/js/bootstrap'

class global {
    constructor() {
        // this.myModal = document.getElementById('exampleModal')
        this.stickyHeader();
        // this.megamenuPopup();
        // this.toggleContent();
        // this.readMore();
    }

    stickyHeader() {

        // const selected = document.getElementById('js-selected');
        // console.log(selected , 'sele')
        // const optionsContainer = document.getElementById('options-container');
    
        // const optionsList = document.querySelectorAll('.option');
    
        // selected.addEventListener('click', function(e) {
        //     console.log(e)
        //     e.preventDefault();
        //     optionsContainer.classList.add('active');
        //     console.log('click')
        //     console.log(optionsContainer , "op")
        // });


        var elemBody = $('body');
        var pageHeader = $('.theme-header');
        if ($(elemBody).hasClass('home')) {
            $(pageHeader).addClass('theme-header--dark');
        }

        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.theme-header').addClass('sticky');
            } else {
                $('.theme-header').removeClass('sticky');
            }
        });
    }

    megamenuPopup() {
        var toggleBar = $('.navbar-toggle');
        var popupMenu = $('.megamenu-popup');
        var closePopup = $('.close-menu');
        $(toggleBar).click(function () {
            $(popupMenu).addClass('active');
        });
        $(closePopup).click(function () {
            $(popupMenu).removeClass('active');
        });
    }

    toggleContent() {
        var toggleContent = $('.toggle-text');
        var viewBtn = $('.toggleRead');
        $(viewBtn).click(function () {
            $(this).toggleClass('active');
            $(toggleContent).toggleClass('active');
        });
    }

    readMore() {
        $('.readmore').click(function () {
            $('.collapse-text').addClass('expand');
            $(this).hide();
        });
    }

}

export default global;
new global();
