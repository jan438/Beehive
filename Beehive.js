/* global Deck */
var prefix = Deck.prefix;
var transform = prefix('transform');
var translate = Deck.translate;
var $container = document.getElementById('container');
var $topbar = document.getElementById('topbar');
$("#topbar").hide();
var deck = Deck();
deck.mount($container);
deck.intro();
