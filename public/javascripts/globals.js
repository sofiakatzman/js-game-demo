const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // used for drawing
const animate = window.requestAnimationFrame; // used for animating

//game window details 
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

let player;

const UP_KEY = 38; //87 = w
const DOWN_KEY = 40; //83 = s
const LEFT_KEY = 37; //65 = a
const RIGHT_KEY = 39; //68 = d
const SPACE_BAR = 32;

