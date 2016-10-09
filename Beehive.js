/* global Deck */
var prefix = Deck.prefix;
var transform = prefix('transform');
var translate = Deck.translate;
var $container = document.getElementById('container');
var $topbar = document.getElementById('topbar');
var $Beehive = document.createElement('button');
$Beehive.textContent = 'Beehive';
$topbar.appendChild($Beehive);
var deck = Deck();
$Beehive.addEventListener('click', function () {
  deck.queue(function (next) {
    deck.cards.forEach(function (card, i) {
      setTimeout(function () {
        card.setSide('back')
      }, i * 7.5)
    })
    next()
  })
  deck.shuffle()
  deck.shuffle()
  deck.sort()
  deck.Beehive()
});
deck.mount($container);
deck.intro();
