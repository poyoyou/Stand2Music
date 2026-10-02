const audio = new Audio()
const stand = ['20cb', '200-balloons', 'aerosmith', 'aqua-necklace', 'babyface', 'bad-company', 'bags-groove', 'ballbreaker', 'beach-boy', 'bigmouth-strikes-again', 'black-sabbath', 'blue-hawaii', 'bohemian-rhapsody', 'born-this-way', 'boy-II-man', 'brain-storm', 'burning-down-the-house', 'california-king-bed', 'catch-the-rainbow', 'cat-size', 'cheap-trick', 'chocolate-disco', 'cinderella', 'civil-war', 'clash', 'c-moon', 'cream', 'd4c', 'diver-down', 'doctor-wu', 'doggy-style', 'doobie-wah', 'earth-wind-and-fire', 'enigma', 'foo-fighters', 'fun-fun-fun', 'glory-days', 'golden-experience', 'goo-goo-dolls', 'grateful-dead', 'green-day', 'green-green-grass-of-home', 'harvest', 'heavens-door', 'hey-ya', 'highway-star', 'highway-to-hell', 'i-am-a-rock', 'in-a-silent-way', 'jumpin-jack-flash', 'killer-queen', 'king-crimson', 'king-nothing', 'kiss', 'kraft-work', 'limp-bizkit', 'little-feet', 'lying-eyes', 'made-in-heaven', 'mandom', 'manhattan-transfer', 'man-in-the-mirror', 'marilyn-manson', 'metallica', 'milagroman', 'moody-blues', 'mr-president', 'notorious-b.i.g', 'november-rain', 'nut-king-call', 'oasis', 'oh-lonesome-me', 'oingo-boingo', 'boku-no-rhythm-wo-kiitekure', 'ozone-baby', 'paisley-park', 'paper-moon-king', 'pearl-jam', 'point-blank-seal', 'purple-haze', 'ratt', 'red-hot-chilli-peppers', 'rolling-stones', 'scary-monster', 'sex-pistols', 'sky-high', 'smooth-operator', 'soft-and-wet', 'soft-machine', 'space-trucking', 'speed-king', 'spice-girl', 'standless', 'stone-free', 'superfly', 'surface', 'survivor', 'talking-head', 'tattoo-you', 'the-hand', 'the-hustle', 'the-mattekudasai', 'ticket-to-ride', 'tomb-of-the-boom-1-2-3', 'tusk', 'under-world', 'vitamin-c', 'weather-report', 'west-end-girl', 'white-album', 'whitesnake', 'wired', 'wonder-of-u', 'yo-yo-ma']
function random(x) {
    return Math.floor(Math.random()*x)
}

document.getElementById('reroll').addEventListener('click', () => {
    const random_save = random(114)
    audio.src = './musics/' + stand[random_save] + '.mp3'
    const standpic = './stands/' + stand[random_save] + '.png'
    document.getElementById("StandName").innerText= stand[random_save]
    document.getElementById("stand").src= standpic
    audio.play()
})

document.getElementById('replay').addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
    audio.play()
})