$(function () {
    var cardToggle = $('#cardToggle').hammer(),
        navTitle   = $('#navTitle'),
        cards      = $('.content'),
        animDelay  = 300;

    // Advance Card
    cardToggle.on('tap', function () {
        var cardIndex   = cards.index(cards.filter('.content.is-visible')),
            nextIndex   = (cardIndex === (cards.length - 1)) ? 0 : cardIndex + 1,
            currentCard = $(cards[cardIndex]),
            nextCard    = $(cards[nextIndex]);

        // update title
        navTitle.text(nextCard.data('title'));

        // hide current card
        currentCard.removeClass('slideInUp').addClass('scaleOutBack');
        setTimeout(function () {
            currentCard.removeClass('is-visible');
        }, animDelay);

        // show next card
        nextCard.addClass('slideInUp is-visible').removeClass('scaleOutBack');
    });
});
