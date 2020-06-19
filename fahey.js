//initialize canvas
var canvas = document.getElementById('canvas')
canvas.clear = function(){
  var ctx = canvas.getContext('2d')
  ctx.clearRect(0,0,600,400)
}
//constants
{
var dressingRoom = true
var practiced = false
var freeStyle = true
var sitting = false
var note1
var note2
var note3
var count
var strikes = 0
var tempoStrikes = 0
var frameCounter = 0
var tempo = 420
var playing = false
var notes = []
var keys = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
var songIndex = 0
var songs = [
  {
    name: 'On the Sunny Side of the Ocean',
    filePath: './sounds/sunnySide.m4a',
    tempo: 530,
    length: 358
  },
  {
    name: 'Sunflower River Blues',
    filePath: './sounds/sunflower.m4a',
    tempo: 666,
    length: 237
  },
  {
    name: 'Dance Of The Inhabitants Of The Palace Of King Philip Of Spain',
    filePath: './sounds/inhabitants.m4a',
    tempo: 454,
    length: 413
  }
]
var turtleIndex = false
var failure = false
var turtleToggle = setInterval(()=>{
  turtleIndex = !turtleIndex
  console.log('turtle')
},500)
var coke = false
var clock
var talking = false
var stopTalking
var visiting = false
var wait = false
var timeOut
var fadeOut
var fadeIn
var update
var opacity = 0
var volume = 1.0
var backgroundMusic
var soundtrack = new Sound('poorBoy.wav')
var knockSound = new Sound('knockSound.mp3')
var faheyNoise = new Sound('uhh1.m4a')
var applause = new Sound('applause.m4a')
var boo = new Sound('boo.m4a')
applause.sound.volume = .6
faheyNoise.sound.volume = 0.2
var spotlight = false
var components = []
var fahey
var chair
var guitar
var couch
var machine
var bin
var sounds = {}
var blink
var doorBool = false
var sligo = false
var performed = false
var knock = false
var seaman = 15
}
//declare string objects
{
var EString
var aString
var dString
var gString
var bString
var eString
}
//low e, a, d string frets
{
  var xSound1
  var xSound2
  var xSound3
  var cSound1
  var cSound2
  var cSound3
  var vSound1
  var vSound2
  var vSound3
  var bSound1
  var bSound2
  var bSound3
  }
//initialize images
{
  var goober = createImage('./images/goober.png')
  var flowerImage = createImage('./images/flower.png')
  var drinkCoke = createImage('./images/drinkCoke.png')
  var recycle = createImage('./images/recycle.png')
  var turtle1 = createImage('./images/turtle1.png')
  var turtle2 = createImage('./images/turtle2.png')
  var cloud = createImage('./images/cloud.png')
  var seat = createImage('./images/seat.png')
  var stoolSit = createImage('./images/stoolSit.png')
  var stoolImage = createImage('./images/stool.png')
  var wood = createImage('./images/wood.png')
  var door = createImage('./images/door.png')
  var couchImage = createImage('./images/couchImage.png')
  var couchImageSit = createImage('./images/couchImageSit.png')
  var chairImage = createImage('./images/chair.png')
  var idleFront = createImage('./images/stand.png')
  var idleBack= createImage('./images/standR.png')
  var idleLeft = createImage('./images/standLeft.png')
  var idleRight = createImage('./images/standRight.png')
  var walkDownLeft = createImage('./images/walkDownLeft.png')
  var walkDownRight = createImage('./images/walkDownRight.png')
  var walkUpLeft = createImage('./images/walkUpLeft.png')
  var strumOpen = createImage('./images/strumOpen.png')
  var strumClosed = createImage('./images/strumClosed.png')
  var walkUpRight = createImage('./images/walkUpRight.png')
  var walkLeftLeft = createImage('./images/walkLeftLeft.png')
  var walkLeftRight = createImage('./images/walkLeftRight.png')
  var walkRightRight = createImage('./images/walkRightRight.png')
  var walkRightLeft = createImage('./images/walkRightLeft.png')
  var idleFrontCoke = createImage('./images/idleFrontCoke.png')
  var idleBackCoke = createImage('./images/idleBackCoke.png')
  var walkDownLeftCoke = createImage('./images/walkDownLeftCoke.png')
  var walkDownRightCoke = createImage('./images/walkDownRightCoke.png')
  var walkUpLeftCoke = createImage('./images/walkUpLeftCoke.png')
  var walkUpRightCoke = createImage('./images/walkUpRightCoke.png')
  var walkLeftLeftCoke = createImage('./images/walkLeftLeftCoke.png')
  var walkLeftRightCoke = createImage('./images/walkLeftRightCoke.png')
  var idleLeftCoke = createImage('./images/idleLeftCoke.png')
  var vend = createImage('./images/vend.png')
  var guitarImage = createImage('./images/guitar.png')
  var stagewood = createImage('./images/stagewood.png')
  var seamen = []
  var Jackson = createImage('./images/Jackson.png')
  seamen.push(Jackson)
  var Aidan = createImage('./images/Aidan.png')
  seamen.push(Aidan)
  var Aman = createImage('./images/Aman.png')
  seamen.push(Aman)
  var Connor = createImage('./images/Connor.png')
  seamen.push(Connor)
  var Eli = createImage('./images/Eli.png')
  seamen.push(Eli)
  var Elliot = createImage('./images/Elliot.png')
  seamen.push(Elliot)
  var George = createImage('./images/George.png')
  seamen.push(George)
  var Jacob = createImage('./images/Jacob.png')
  seamen.push(Jacob)
  var Kian = createImage('./images/Kian.png')
  seamen.push(Kian)
  var Kyden = createImage('./images/Kyden.png')
  seamen.push(Kyden)
  var Luke = createImage('./images/Luke.png')
  seamen.push(Luke)
  var Nikhil = createImage('./images/Nikhil.png')
  seamen.push(Nikhil)
  var Noah = createImage('./images/Noah.png')
  seamen.push(Noah)
  var Reece = createImage('./images/Reece.png')
  seamen.push(Reece)
  var Seth = createImage('./images/Seth.png')
  seamen.push(Seth)
}

//var aKey = new Fret(gString, 'a', 'a2')
function play(){
  if(!EString){
    EString = new String(sounds['d1'])
    aString = new String(sounds['a1'])
    dString = new String(sounds['d2'])
    gString = new String(sounds['g2'])
    bString = new String(sounds['b2'])
    eString = new String(sounds['e3'])
  }
  document.getElementById('credits').style.display = 'none'
  document.onkeydown = checkNoteDown
  document.onkeyup = checkNoteUp
}
function playGuitarHero(){
  if(!EString){
    EString = new String(sounds['d1'])
    aString = new String(sounds['a1'])
    dString = new String(sounds['d2'])
    gString = new String(sounds['g2'])
    bString = new String(sounds['b2'])
    eString = new String(sounds['e3'])
  }
  document.onkeydown = null
  document.onkeyup = null
  pointer = 0
  note1 = keys[Math.floor(Math.random()*26)]
  note2 = keys[Math.floor(Math.random()*26)]
  note3 = keys[Math.floor(Math.random()*26)]
  document.getElementById('credits').style.display = 'flex'
  document.getElementById('credits').innerHTML = 
  `<div id="notes">
    <h1 id="note1" class="note">${note1}</h1>
    <h1 id="note2" class="note">${note2}</h1>
    <h1 id="note3" class="note">${note3}</h1>
  </div>
    <div id="meter">
      <h4 class="label">Slow</h4><div id="white-line"></div><h4 class="label">Fast</h4>
    </div>
    <div id="yellow"></div>`
  frameCounter = 0
  beeping = true
  clearInterval(count)
  count = setInterval(()=>{
    if(frameCounter < 4){
      speak('./sounds/beep.m4a')
      talking = false
      frameCounter++
    }
    else{
      document.onkeydown = checkTempo
      frameCounter = 0
      clearInterval(count)
      clock = setInterval(()=>{
        if(!playing){
          tempoStrikes++
          if(tempoStrikes > 3){
            fail('Too slow!')
          }
        }
        playing = false
        pointer++
      },songs[songIndex].tempo)
      soundtrack.sound.src = songs[songIndex].filePath
      soundtrack.changeTime(0)
      soundtrack.sound.volume = 1
      soundtrack.sound.play()
    }
  },songs[songIndex].tempo)
}
function checkTempo(e){
  clearInterval(count)
  if(e.keyCode === 32){
    fail('Keep practicing!')
  }
  if(e.key !== note1){
    strikes++
    if(strikes > 20){
      fail('Too many wrong notes!')
    }
  }
  else{
    if(playing){
      tempoStrikes--
      if(tempoStrikes < -3){
        fail('Too fast')
      }
    }
    else{
      if(tempoStrikes > 0){
        tempoStrikes -= 0.1
      }
      else if(tempoStrikes < 0){
        tempoStrikes += 0.1
      }
    }
    playing = true
    if(note2 === ''){
      fail('Bravo!')
      practiced = true
    }
    note1 = note2
    note2 = note3
    if(pointer < songs[songIndex].length){
      note3 = keys[Math.floor(Math.random()*26)]
    }
    else{
      note3 = ''
    }
    document.getElementById('note1').innerHTML = note1
    document.getElementById('note2').innerHTML = note2
    document.getElementById('note3').innerHTML = note3
  }
}
function fail(message){
  clearInterval(clock)
  pointer = 0
  document.onkeydown = null
  document.onkeyup = null
  document.getElementById('credits').innerHTML = message
  clearTimeout(timeOut)
  timeOut = setTimeout(()=>{
    document.getElementById('credits').style.display = 'none'
    if(performed && !dressingRoom){
      standShow()
      if(message === 'Bravo!'){
        applause.sound.volume = 1
        applause.changeTime(0)
        applause.sound.play()
        failure = false
      }
      else{
        soundtrack.sound.pause()
        soundtrack.changeTime(0)
        boo.sound.volume = 1
        boo.changeTime(0)
        boo.sound.play()
        failure = true
      }
    }
    else{
      stand()
    }
  },1500)
  strikes = 0
  tempoStrikes = 0
}
function spaceScreen(){
  if(!performed || dressingRoom){
    document.getElementById('credits').style.marginLeft = '-80px'
    document.getElementById('credits').style.marginTop = '30px'
  }
  else{
    document.getElementById('credits').style.marginLeft = '-180px'
    document.getElementById('credits').style.marginTop = '100px'
  }
  document.getElementById('credits').style.display = 'flex'
  document.getElementById('credits').innerHTML = `<div id="spaceScreen">
  <h3>${songs[songIndex].name}</h3>
  <h5>Press space to begin</h5>
</div>`
  document.onkeydown = null
  document.onkeydown = pressSpace
}
function pressSpace(e){
  if(e.keyCode === 32){
    playGuitarHero()
  }
}
function changeSong(){
  var song = Number.parseInt(document.getElementById('song').value)
  if(song === -1){
    play()
    freeStyle = true
    document.getElementById('tune-content').style.display = 'block'
  }
  else{
    songIndex = song
    spaceScreen()
    document.getElementById('tune-content').style.display = 'none'
    document.getElementById('tuningScreen').style.display = 'none'
    freeStyle = false
  }
}
function checkArrowDown(e){
  if(e.keyCode === 37){
    fahey.left = true
    fahey.right = false
    fahey.up = false
    fahey.down = false
  }
  else if(e.keyCode === 39){
    fahey.right = true
    fahey.left = false
    fahey.up = false
    fahey.down = false
  }
  else if(e.keyCode === 38){
    fahey.up = true
    fahey.down = false
    fahey.left = false
    fahey.right = false
  }
  else if(e.keyCode === 40){
    fahey.down = true
    fahey.up = false
    fahey.left = false
    fahey.right = false
  }
  else if(e.keyCode === 32){
    if(coke && !fahey.walking){
      fahey.image = drinkCoke
      speak('./sounds/sip.mp3')
    }
  }
}
function checkArrowUp(e){
  if(e.keyCode === 37){
    fahey.left = false
  }
  else if(e.keyCode === 39){
    fahey.right = false
  }
  else if(e.keyCode === 38){
    fahey.up = false
  }
  else if(e.keyCode === 40){
    fahey.down = false
  }
  else if(e.keyCode === 32){
    if(coke){
      fahey.image = idleFrontCoke
      fahey.idleImage = idleFrontCoke
      faheyNoise.stop()
    }
  }
}
function checkNoteDown (e) {
  switch(e.key){
    case ',':{ 
      if(!EString.pressed){
        if(EString.newPitch){
          EString.oldSound.sound.pause()
          EString.newPitch = false
        }
        EString.sound.changeTime(0)
        EString.sound.play()
        EString.pressed = true
      }
      break
    }
    case 'm':{ 
      if(!aString.pressed){
        if(aString.newPitch){
          aString.oldSound.sound.pause()
          aString.newPitch = false
        }
        aString.sound.changeTime(0)
        aString.sound.play()
        aString.pressed = true
      }
      break
    }
    case 'n':{ 
      if(!dString.pressed){
        if(dString.newPitch){
          dString.oldSound.sound.pause()
          dString.newPitch = false
        }
        dString.sound.changeTime(0)
        dString.sound.play()
        dString.pressed = true
      }
      break
    }
    case 'k':{
      if(!gString.pressed){
        if(gString.newPitch){
          gString.oldSound.sound.pause()
          gString.newPitch = false
        }
        gString.sound.changeTime(0)
        gString.sound.play()
        gString.pressed = true
      }
      break
    }
    case 'o':{
      if(!bString.pressed){
        if(bString.newPitch){
          bString.oldSound.sound.pause()
          bString.newPitch = false
        }
        bString.sound.changeTime(0)
        bString.sound.play()
        bString.pressed = true
      }
      break
    }
    case '0':{
      if(!eString.pressed){
        if(eString.newPitch){
          eString.oldSound.sound.pause()
          eString.newPitch = false
        }
        eString.sound.changeTime(0)
        eString.sound.play()
        eString.pressed = true
      }
      break
    }
    case 'z':{
      EString.changeSound(EString.default)
      aString.changeSound(aString.default)
      dString.changeSound(dString.default)
      break
    }
    case 'x':{
      EString.changeSound(xSound1)
      aString.changeSound(xSound2)
      dString.changeSound(xSound3)
      break
    }
    case 'c':{
      EString.changeSound(cSound1)
      aString.changeSound(cSound2)
      dString.changeSound(cSound3)
      break
    }
    case 'v':{
      EString.changeSound(vSound1)
      aString.changeSound(vSound2)
      dString.changeSound(vSound3)
      break
    }
    case 'b':{
      EString.changeSound(bSound1)
      aString.changeSound(bSound2)
      dString.changeSound(bSound3)
      break
    }


    case 'a':{
      gString.changeSound(gString.default)
      break
    }
    case 's':{
      gString.changeSound(sSound)
      break
    }
    case 'd':{
      gString.changeSound(dSound)
      break
    }
    case 'f':{
      gString.changeSound(fSound)
      break
    }
    case 'g':{
      gString.changeSound(gSound)
      break
    }
    case 'q':{
      bString.changeSound(bString.default)
      break
    }
    case 'w':{
      bString.changeSound(wSound)
      break
    }
    case 'e':{
      bString.changeSound(eSound)
      break
    }
    case 'r':{
      bString.changeSound(rSound)
      break
    }
    case 't':{
      bString.changeSound(tSound)
      break
    }

    case '1':{
      eString.changeSound(eString.default)
      break
    }
    case '2':{
      eString.changeSound(sound2)
      break
    }
    case '3':{
      eString.changeSound(sound3)
      break
    }
    case '4':{
      eString.changeSound(sound4)
      break
    }
    case '5':{
      eString.changeSound(sound5)
      break
    }
  }
  if(e.keyCode === 32){
    if(performed && !dressingRoom){
      standShow()
    }
    else{
      stand()
    }
  }
}
function checkNoteUp (e) {
  switch(e.key){
    case ',':{ 
      EString.pressed = false
      break
    }
    case 'm':{ 
      aString.pressed = false
      break
    }
    case 'n':{ 
      dString.pressed = false
      break
    }
    case 'k':{
      gString.pressed = false
      break
    }
    case 'o':{
      bString.pressed = false
      break
    }
    case '0':{
      eString.pressed = false
      break
    }
  }
}
function drawWood(){
  var ctx = canvas.getContext('2d')
  for(let i = 0; i < 12; i++){
    for(let j = 3; j < 9; j++){
      ctx.drawImage(wood, i*50, j*50, 50, 50);
    }
  }
  ctx.fillStyle = 'white'
  ctx.fillRect(0,0,600,150)
  ctx.drawImage(goober, 543,30,40,60)
  if(!doorBool){
    if(knock && visiting){
      ctx.fillStyle = 'black'
      ctx.fillRect(450, 30, 75, 120)
      ctx.drawImage(seamen[seaman],450, 30, 75, 120)
    }
    else{    
      ctx.drawImage(door, 450, 30, 75, 120)
    }
  }
  else{
    ctx.fillStyle = 'black'
    ctx.fillRect(450, 30, 75, 120)
  }
}
function sit(){
  sitting = true
  frameCounter = 0
  fahey.invisible = true
  guitar.invisible = true
  chair.image = strumOpen
  document.getElementById('tune-button').style.display = 'block'
  stopMusic()
  if(freeStyle){
    play()
  }
  else{
    spaceScreen()
  }
}
function lay(){
  fahey.invisible = true
  couch.image = couchImageSit
  document.onkeydown = null
  if(!performed){
    document.onkeydown = function(e){
      if(e.keyCode === 32){
        awaken()
        speak('./sounds/hmm1.m4a')
      }
    }
  }
  else{
    document.getElementById('credits').style.display = 'flex'
    document.getElementById('credits').innerHTML = '<h1>Thanks for playing!</h1>'
    document.getElementById('credits').style.marginLeft = '-170px'
    document.getElementById('controls-button').style.display = 'none'
    chair.invisible = true
    guitar.invisible = true
  }
  stopMusic()
  playSligo()
}
function stand(){
  sitting = false
  document.getElementById('tuningScreen').style.display = 'none'
  document.getElementById('tune-button').style.display = 'none'
  fahey.invisible = false
  if(coke){
    fahey.image = idleFrontCoke
  }
  else{
    fahey.image = idleFront
  }
  guitar.invisible = false
  document.onkeydown = checkArrowDown
  document.onkeyup = checkArrowUp
  fahey.move('right', 260 - fahey.border.left)
  fahey.move('down', 305 - fahey.border.top)
  chair.image = chairImage
  clearTimeout(blink)
  playMusic()
}
function awaken(){
  sligo = false
  fahey.invisible = false
  if(coke){
    fahey.image = idleFrontCoke
  }
  else{
    fahey.image = idleFront
  }
  couch.image = couchImage
  document.onkeydown = checkArrowDown
  document.onkeyup = checkArrowUp
  fahey.move('right', 300 - fahey.border.left)
  fahey.move('down', 200 - fahey.border.top)
  stopMusic()
  playMusic()
}
function enterDoor(){
  clearTimeout(timeOut)
  if(practiced){
    if(!performed){
      talking = false
      speak('./sounds/door.mp3')
      document.onkeydown = null
      document.onkeyup = null
      doorBool = true
      fahey.move('left', fahey.x - 443)
      fahey.move('up', 5)
    }
  }
  else{
    document.getElementById('message').style.display = 'block'
    document.getElementById('message').innerHTML = 'You must practice before the show!'
    speak('./sounds/uhh1.m4a')
    clearTimeout(timeOut)
    timeOut = setTimeout(()=>{
      document.getElementById('message').style.display = 'none'
    },1500)
  }
}
function doorClose(){
  doorBool = false
  fahey.invisible = true
  fahey.up = false
  clearInterval(update)
  update = setInterval(()=>{
    canvas.clear()
      var ctx = canvas.getContext('2d')
      drawWood()
      fahey.newPos()
      components.sort(compare)
      for(let i = 0; i < 7; i++){
        components[i].update()
      }
      if(opacity === 10){
        ctx.fillStyle = 'rgba(0,0,0,1.0)'
        ctx.fillRect(0,0,600,450)
        clearInterval(update)
        setTimeout(()=>{
          setStage()
          clearTimeout(timeOut)
        },1000)
      }
      else{
        ctx.fillStyle = `rgba(0,0,0,0.${opacity})`
        ctx.fillRect(0,0,600,450)
        opacity++
        if(soundtrack.sound.volume > 0){
          soundtrack.sound.volume = soundtrack.sound.volume - 0.1
        }
        else{
          stopMusic()
        }
      }
  },100)
}
function isColliding(direction, border1, border2) {
  if(border1.top > border2.bottom){
    return false
  }
  else if(border1.bottom < border2.top){
    return false
  }
  else if(border1.left > border2.right){
    return false
  }
  else if(border1.right < border2.left){
    return false
  }
  else if(direction === 'up'){
    if(border1.bottom > border2.bottom && border1.top <= border2.bottom && border1.right > border2.left && border1.left < border2.right){
      return true
    }
    return false
  }
  else if(direction === 'down'){
    if(border1.top < border2.top && border1.bottom >= border2.top && border1.right > border2.left && border1.left < border2.right){
      return true
    }
    return false
  }
  else if(direction === 'left'){
    if(border1.right > border2.right && border1.left <= border2.right && border1.bottom > border2.top && border1.top < border2.bottom){
      return true
    }
    return false
  }
  else{
    if(border1.left < border2.left && border1.right >= border2.left && border1.bottom > border2.top && border1.top < border2.bottom){
      return true
    }
    return false
  }
}
function changeFret(id,key){
    if(key.default != null){
      key.default = sounds[document.getElementById(id).value]
      key.sound = sounds[document.getElementById(id).value]
    }
    else{
      key.sound.src = sounds[document.getElementById(id).value].sound.src
    }
}
function tune(){
  document.getElementById('tuningScreen').style.display = 'block'
  document.getElementById('credits').style.display = 'none'
}
function closeTuneDisplay(){
  document.getElementById('tuningScreen').style.display = 'none'
}
function compare(a, b){
  if(a.border.bottom > b.border.bottom){
    return 1
  }
  else if(a.border.bottom < b.border.bottom){
    return -1
  }
  return 0
}
function setStage(){
  dressingRoom = false
  fahey.invisible = false
  fahey.move('right', 20 - fahey.border.left)
  fahey.move('down', 350 - fahey.border.top)
  fahey.resize(2)
  document.onkeydown = checkArrowDown
  document.onkeyup = checkArrowUp
  fadeIn = setInterval(()=>{
    if(opacity > 0){
      opacity--
    }
    else{
      clearInterval(fadeIn)
    }
  },100)
  update = setInterval(()=>{
    var ctx = canvas.getContext('2d')
    canvas.clear()
      //drawBackground
      ctx.fillStyle = 'rgb(30,30,30)'
      ctx.fillRect(0,0,600,450)
      ctx.fillStyle = 'rgb(70,0,0)'
      ctx.beginPath()
      ctx.moveTo(0,370)
      ctx.lineTo(150,200)
      ctx.lineTo(600,200)
      ctx.lineTo(600,450)
      ctx.lineTo(0,450)
      ctx.fill()
      ctx.fillStyle = 'black'
      ctx.fillRect(150,0,3,200)
      //alternate between drawing seats and seamen
      drawSeamen()
      //draw stage
      ctx.drawImage(stagewood,-600, 320, 1500, 300)
      if(fahey.y < 200){
        if(spotlight === false){
          spotlight = true
          applause.sound.play()
        }
        //draw fahey
        stool.update()
        if(!fahey.invisible){
          ctx.drawImage(guitarImage, 300,240,65,150)
        }
        stagePos()
        fahey.update()
        //tint screen
        ctx.fillStyle = 'rgba(0,0,0,.3)'
        ctx.beginPath()
        ctx.moveTo(550,0)
        ctx.lineTo(0,0)
        ctx.lineTo(0,450)
        ctx.lineTo(600,450)
        ctx.lineTo(600,50)
        ctx.lineTo(375,380)
        ctx.lineTo(150,380)
        ctx.fill()
        //spotlight
        ctx.fillStyle = 'rgba(255,255,255,0.5)'
        ctx.beginPath()
        ctx.moveTo(550,0)
        ctx.lineTo(150, 380)
        ctx.lineTo(375,380)
        ctx.lineTo(600,50)
        ctx.lineTo(600,0)
        ctx.fill()
      }
      // else if(spotlight){
      //   //spotlight
      //   ctx.fillStyle = 'rgba(255,255,255,0.5)'
      //   ctx.beginPath()
      //   ctx.moveTo(550,0)
      //   ctx.lineTo(150, 380)
      //   ctx.lineTo(375,380)
      //   ctx.lineTo(600,50)
      //   ctx.lineTo(600,0)
      //   ctx.fill()
      //   stool.update()
      //   stagePos()
      //   fahey.update()
      //   //tint screen
      //   ctx.fillStyle = 'rgba(0,0,0,.3)'
      //   ctx.fillRect(0,0,600,450)
      //}
      else{
        stool.update()
        ctx.drawImage(guitarImage, 300,240,65,150)
        stagePos()
        fahey.update()
        //tint screen
        ctx.fillStyle = 'rgba(0,0,0,.3)'
        ctx.fillRect(0,0,600,450)
      }
        ctx.fillStyle = 'rgba(0,0,0,.3)'
        ctx.fillRect(0,0,600,450)
      if(opacity === 10){
        ctx.fillStyle = 'rgba(0,0,0,1.0)'
        ctx.fillRect(0,0,600,450)
        if(performed){
          clearInterval(fadeOut)
          clearInterval(update)
          opacity = 9
          fadeIn = setInterval(()=>{
            if(opacity > 0){
              opacity--
            }
            else{
              clearInterval(fadeIn)
            }
          },100)
          startGame()
          clearInterval(timeOut)
          // timeOut = setTimeout(()=>{
          //   knockSound.changeTime(0)
          //   knockSound.sound.play()
          //   clearTimeout(timeOut)
          //   timeOut = setTimeout(()=>{
          //     knock = true
          //   },1000)
          // },5000)
        }
      }
      else{
        ctx.fillStyle = `rgba(0,0,0,0.${opacity})`
        ctx.fillRect(0,0,600,450)
        if(opacity === 0){
          clearInterval(fadeIn)
        }
      }
      if(sitting){
        if(tempoStrikes < 0.2 && tempoStrikes > -0.2){
          document.getElementById('yellow').style.marginLeft = '-4px'
        }
        else{
          document.getElementById('yellow').style.marginLeft = `${(tempoStrikes*(-35)) - 4}px`
        }
      }
  },1000/30)
}
function stagePos() {
  if(fahey.right){
    if(fahey.border.right < 600){
        fahey.move('right', 5)
    }
  }
  else if(fahey.left){
    if(fahey.border.left > 0){
      fahey.move('left', 5)
    }
    else{
      if(performed){
        document.onkeydown = null
        document.onkeyup = null
        fadeOut = setInterval(()=>{
          opacity += 1
        },400)
      }
    }
  }
  else if(fahey.up){
    if(fahey.border.top > 300){fahey.move('up', 2)
      fahey.resize(.99)
    }
  }
  else if(fahey.down){
    if(fahey.border.bottom < 450){
      fahey.move('down', 2)
      fahey.resize(1.01)
    }
  }
  if(fahey.y < 200 && fahey.x > 250 && fahey.x < 370){
    if(!sitting){
      if(failure){
        boo.sound.pause()
        applause.changeTime(5)
        boo.sound.play()
      }
      else{
        applause.sound.pause()
        applause.changeTime(20)
        applause.sound.play()
      }
      performed = true
      sit()
      fahey.up = false
      fahey.left = false
      fahey.right = false
      fahey.down = false
      stool.image = stoolSit
    }
        
  }
  if(document.onkeydown === null){
    fahey.move('left',2)
    if(!sitting){
      dressingRoom = true
    }
  }
}
function drawSeamen(){
  var ctx = canvas.getContext('2d')
  var x = 150
  var y = 150
  var width = 72
  var height = 96
  var seamenIndex = 0
  var seaWidth = 88
  var seaHeight = 120
  var seay = 80
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 5; j++){
      ctx.drawImage(seat, x + 90*j, y, width, height)
      ctx.drawImage(seamen[i*5+j], x - 10 + 90*j, y-50, seaWidth, seaHeight)
    }
    y += 60
    x -= 30
  }
}
function createImage(src){
  var image = new Image()
  image.src = src
  return image
}
function playMusic(){
  clearInterval(backgroundMusic)
  soundtrack.sound.src = './sounds/poorBoy.wav'
  soundtrack.changeTime(0)
  soundtrack.sound.play()
  backgroundMusic = setInterval(()=>{
    soundtrack.changeTime(0)
    soundtrack.sound.play()
  },12*4*1000/1.5)
}
function playSligo(){
  sligo = true
  soundtrack.sound.src = './sounds/sligo.m4a'
  soundtrack.changeTime(0)
  soundtrack.sound.play()
}
function stopMusic(){
  clearInterval(backgroundMusic)
  soundtrack.sound.pause()
  soundtrack.changeTime(0)
}
function startGame(){
  if(performed){
    applause.sound.pause()
  }
  document.getElementById('header').style.display = 'flex'
  document.getElementById('start-button').style.display = 'none'
  //detect keypresses and canvas update
  {
    document.onkeydown = checkArrowDown
    document.onkeyup = checkArrowUp
    update = setInterval(() => {
        canvas.clear()
        var ctx = canvas.getContext('2d')
        drawWood()
        fahey.newPos()
        components.sort(compare)
        for(let i = 0; i < 7; i++){
          components[i].update()
        }
        if(sligo){
          ctx.fillStyle = 'rgba(0,0,0,.3)'
          ctx.fillRect(0,0,600,450)
          if(turtleIndex){
            ctx.drawImage(turtle1,325,20,90,90)
          }
          else{
            ctx.drawImage(turtle2,325,20,90,90)
          }
        }
        if(sitting){
          if(tempoStrikes < 0.2 && tempoStrikes > -0.2){
            document.getElementById('yellow').style.marginLeft = '-4px'
          }
          else{
            document.getElementById('yellow').style.marginLeft = `${(tempoStrikes*(-35)) - 4}px`
          }
        }
    },1000/30)
    //initialize sound objects
  {
    const letters = [
        'c',
        'cs',
        'd',
        'ds',
        'e',
        'f',
        'fs',
        'g',
        'gs',
        'a',
        'as',
        'b'
    ]
    for (let i = 1; i < 5; i++) {
      letters.forEach((value, index)=>{
        if(i !== 4){
          sounds[`${value}${i}`] = new Sound(`${value}${i}.m4a`)
        }
        else{
          if(index < 5){
            sounds[`${value}${i}`] = new Sound(`${value}${i}.m4a`)
          }
        }
      })
    }
    
  }
    {
      xSound1 = new Sound(sounds['e1'].srcText)
      xSound2 = new Sound(sounds['b1'].srcText)
      xSound3 = new Sound(sounds['e2'].srcText)
      cSound1 = new Sound(sounds['g1'].srcText)
      cSound2 = new Sound(sounds['d2'].srcText)
      cSound3 = new Sound(sounds['g2'].srcText)
      vSound1 = new Sound(sounds['a1'].srcText)
      vSound2 = new Sound(sounds['e2'].srcText)
      vSound3 = new Sound(sounds['a2'].srcText)
      bSound1 = new Sound(sounds['c2'].srcText)
      bSound2 = new Sound(sounds['g2'].srcText)
      bSound3 = new Sound(sounds['c3'].srcText)
      //g string frets
{
  sSound = new Sound(sounds['a2'].srcText)
  dSound = new Sound(sounds['b2'].srcText)
  fSound = new Sound(sounds['d3'].srcText)
  gSound = new Sound(sounds['e3'].srcText)
}
//b string frets
{
wSound = new Sound(sounds['c3'].srcText)
eSound = new Sound(sounds['d3'].srcText)
rSound = new Sound(sounds['e3'].srcText)
tSound = new Sound(sounds['fs3'].srcText)
}
//high e string frets
{
sound2 = new Sound(sounds['fs3'].srcText)
sound3 = new Sound(sounds['g3'].srcText)
sound4 = new Sound(sounds['a3'].srcText)
sound5 = new Sound(sounds['b3'].srcText)
}
      }
  }
  //initialize components
  {
    //initialize john
    {fahey = new component(
      90, //width
      105, //height
      coke? idleFrontCoke : idleFront, //image
      442, //x
      100, //y
      60, //border width
      20, //border height
      0 //border offset
    )
    }
    //initialize chair
    {
    chair = new component(
      90, //width
      105, //height
      chairImage, //image
      110, //x
      230, //y
      70, //border width
      50, //border height
      5 //border offset
    )
    }
    //initialize guitar
    {
      guitar = new component(
        45, //width
        90, //height
        guitarImage, //image
        200, //x
        245, //y
        30, //border width
        20, //border height
        0 //border offset
      )
    }
    //initialize couch
    {
      couch = new component(
        180, //width
        150, //height
        couchImage, //image
        180, //x
        40, //y
        160, //border width
        70, //border height
        10 //border offset
      )
      }
    //initialize stool
    {
      stool = new component(
        200, //width
        200, //height
        stoolImage, //image
        300, //x
        180, //y
        30, //border width
        5, //border height
        0 //border offset
      )
      }
      //initialize vending machine
    {
      machine = new component(
        90, //width
        120, //height
        vend, //image
        30, //x
        60, //y
        150, //border width
        0, //border height
        0 //border offset
      )
      }
      //recycle bin
      {
        bin = new component(
          40, //width
          40, //height
          recycle, //image
          550, //x
          400, //y
          20, //border width
          15, //border height
          0 //border offset
        )
        }
        {
          flower = new component(
            40, //width
            40, //height
            flowerImage, //image
            380, //x
            130, //y
            20, //border width
            15, //border height
            0 //border offset
          )
          }
    components[0] = fahey
    components[1] = chair
    components[2] = guitar
    components[3] = couch
    components[4] = machine
    components[5] = bin
    components[6] = flower
  }
  soundtrack.sound.volume = 1
  playMusic()
}
function standShow(){
  sitting = false
  fahey.invisible = false
  fahey.image = idleFront
  guitar.invisible = false
  document.onkeydown = checkArrowDown
  document.onkeyup = checkArrowUp
  fahey.move('left',fahey.x - 200)
  stool.image = stoolImage
  document.getElementById('tune-button').style.display = 'none'
}
function showControls(){
  document.getElementById('controls-screen').style.display = 'block'
  document.getElementById('tuningScreen').style.display = 'none'
}
function hideControls(){
  document.getElementById('controls-screen').style.display = 'none'
}
function speak(src){
  if(!talking){
    faheyNoise.sound.src = src
    faheyNoise.changeTime(0)
    faheyNoise.sound.play()
    talking = true
    stopTalking = setTimeout(()=>{
      talking = false
    },2000)
  }
}
function Sound(src){
  this.sound = document.createElement("audio");
  this.sound.src = `./sounds/${src}`
  this.srcText = src
  this.sound.setAttribute('preload','auto');
  this.sound.setAttribute('controls','none');
  this.sound.style.display = 'none'
  document.body.appendChild(this.sound);
  this.play = async function(){
      this.sound.play();
      chair.image = strumClosed
      clearTimeout(blink)
      blink = setTimeout(()=>{
        chair.image = strumOpen
      },1500)
  }
  this.stop = function(){
      this.sound.pause();
  }
  this.changeTime = function(n){
      this.sound.currentTime = n;
  }
}
function String(sound){
  this.sound = sound
  this.oldSound
  this.pressed = false
  this.newPitch = false
  this.default = sound
  this.changeSound = function(sound){
    this.oldSound = this.sound
    this.sound = sound
    this.newPitch = true
  }
}
function component(width, height, image, x, y, borderWidth, borderHeight, borderOffset) {
  this.border = {
    right: x + (width + borderWidth)/2 + borderOffset,
    left: x + (width - borderWidth)/2 + borderOffset,
    top: (y + height) - borderHeight,
    bottom: y + height
  }
  this.idleImage = idleFront
  this.invisible = false
  this.direction = 'forward'
  this.frameCounter = 0
  this.width = width;
  this.height = height;
  this.right = false
  this.left = false
  this.up = false
  this.down = false
  this.walking = false
  this.x = x;
  this.y = y;
  this.image = image
  this.resize = function(factor){
    var offsety = (this.height*factor - this.height)/2
    var offsetx = (this.width*factor - this.width)/2
    this.width *= factor
    this.height *= factor
    this.x -= offsetx
    this.y -= offsety
  }
  this.move = function(direction, value){
    if(direction === 'up'){
      this.y -= value
      this.border.top-= value
      this.border.bottom-= value
    }
    else if(direction === 'down'){
      this.y += value
      this.border.top += value
      this.border.bottom += value
    }
    else if(direction === 'right'){
      this.x += value
      this.border.left+= value
      this.border.right+= value
    }
    else if(direction === 'left'){
      this.x -= value
      this.border.left -= value
      this.border.right -= value
    }
  }
  this.update = function() {
    if(this.down){
      if(!this.walking || this.direction != 'forward'){
        this.frameCounter = 0
        if(coke){
          this.image = walkDownLeftCoke
        }
        else{
          this.image = walkDownLeft
        }
        this.frameCounter++
        this.walking = true;
      }
      else{
        if(this.frameCounter >= 4){
          if(this.frameCounter < 8){
            if(coke){
              this.image = idleFrontCoke
            }
            else{
              this.image = idleFront
            }
          }
          else if(this.frameCounter < 12){
            if(coke){
              this.image = walkDownRightCoke
            }
            else{
              this.image = walkDownRight
            }
          }
          else if(this.frameCounter < 16){
            if(coke){
              this.image = idleFrontCoke
            }
            else{
              this.image = idleFront
            }
          }
          else{
            this.frameCounter = 0
            if(coke){
              this.image = walkDownLeftCoke
            }
            else{
              this.image = walkDownLeft
            }
          }
        }
        this.frameCounter++
      }
      if(coke){
        this.idleImage = idleFrontCoke
      }
      else{
        this.idleImage = idleFront
      }
      this.direction = 'forward'
    }
    else if(this.up){
      if(!this.walking || this.direction != 'backward'){
        this.frameCounter = 0
        if(coke){
          this.image = walkUpLeftCoke
        }
        else{
          this.image = walkUpLeft
        }
        this.frameCounter++
        this.walking = true;
      }
      else{
        if(this.frameCounter >= 4){
          if(this.frameCounter < 8){
            if(coke){
              this.image = idleBackCoke
            }
            else{
              this.image = idleBack
            }
          }
          else if(this.frameCounter < 12){
            if(coke){
              this.image = walkUpRightCoke
            }
            else{
              this.image = walkUpRight
            }
          }
          else if(this.frameCounter < 16){
            if(coke){
              this.image = idleBackCoke
            }
            else{
              this.image = idleBack
            }
          }
          else{
            this.frameCounter = 0
            if(coke){
              this.image = walkUpLeftCoke
            }
            else{
              this.image = walkUpLeft
            }
          }
        }
        this.frameCounter++
      }
      if(coke){
        this.idleImage = idleBackCoke
      }
      else{
        this.idleImage = idleBack
      }
      this.direction = 'backward'
    }
    else if(this.left){
      if(!this.walking || this.direction != 'left'){
        this.frameCounter = 0
        if(coke){
          this.image = walkLeftLeftCoke
        }
        else{
          this.image = walkLeftLeft
        }
        this.frameCounter++
        this.walking = true;
      }
      else{
        if(this.frameCounter >= 4){
          if(this.frameCounter < 8){
            if(coke){
              this.image = idleLeftCoke
            }
            else{
              this.image = idleLeft
            }
          }
          else if(this.frameCounter < 12){
            if(coke){
              this.image = walkLeftRightCoke
            }
            else{
              this.image = walkLeftRight
            }
          }
          else if(this.frameCounter < 16){
            if(coke){
              this.image = idleLeftCoke
            }
            else{
              this.image = idleLeft
            }
          }
          else{
            this.frameCounter = 0
            this.image = walkLeftLeft
            if(coke){
              this.image = walkLeftLeftCoke
            }
            else{
              this.image = walkLeftLeft
            }
          }
        }
        this.frameCounter++
      }
      if(coke){
        this.idleImage = idleLeftCoke
      }
      else{
        this.idleImage = idleLeft
      }
      this.direction = 'left'
    }
    else if(this.right){
      if(!this.walking || this.direction != 'right'){
        this.frameCounter = 0
        this.image = walkRightLeft
        this.frameCounter++
        this.walking = true;
      }
      else{
        if(this.frameCounter >= 4){
          if(this.frameCounter < 8){
            this.image = idleRight
          }
          else if(this.frameCounter < 12){
            this.image = walkRightRight
          }
          else if(this.frameCounter < 16){
            this.image = idleRight
          }
          else{
            this.frameCounter = 0
            this.image = walkRightLeft
          }
        }
        this.frameCounter++
      }
      this.idleImage = idleRight
      this.direction = 'right'
    }
    else{
      if(this.walking){
        this.image = this.idleImage
        this.frameCounter = 0
        this.walking = false;
      }
    }
    if(!this.invisible){
      var ctx = canvas.getContext('2d')
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
  this.newPos = function() {
    if(this.right){
      if(this.border.right < 600){
        if(isColliding('right', this.border, chair.border)){
          this.move('left', this.border.right - chair.border.left)
        }
        else if(isColliding('right', this.border, guitar.border)){
          this.move('left', this.border.right - guitar.border.left)
        }
        else if(isColliding('right', this.border, couch.border)){
          this.move('left', this.border.right - couch.border.left)
        }
        else if(isColliding('right', this.border, machine.border)){
          this.move('left', this.border.right - machine.border.left)
        }
        else if(isColliding('right', this.border, bin.border)){
          if(coke){
            coke = false
            speak('./sounds/trash.m4a')
          }
        }
        else{
          this.move('right', 5)
        }
      }
    }
    else if(this.left){
      if(this.border.left > 0){
        if(isColliding('left', this.border, chair.border)){
          this.move('right', chair.border.right - this.border.left)
        }
        else if(isColliding('left', this.border, guitar.border)){
          this.move('right', guitar.border.right - this.border.left)
        }
        else if(isColliding('left', this.border, couch.border)){
          this.move('right', couch.border.right - this.border.left)
        }
        else if(isColliding('left', this.border, machine.border)){
          this.move('right', machine.border.right - this.border.left)
        }
        else if(isColliding('left', this.border, flower.border)){
          this.move('right', flower.border.right - this.border.left)
        }
        else if(isColliding('left', this.border, bin.border)){
          if(coke){
            coke = false
            speak('./sounds/trash.m4a')
          }
        }
        else{
          this.move('left', 5)
        }
      }
    }
    else if(this.up){
      if(this.border.top > 150){
        if(isColliding('up', this.border, chair.border)){
          this.up = false
          sit()
        }
        else if(isColliding('up', this.border, guitar.border)){
          this.move('down', guitar.border.bottom - this.border.top)
        }
        else if(isColliding('up', this.border, couch.border)){
          this.up = false
          lay()
        }
        else if(isColliding('up', this.border, machine.border)){
          coke = true
        }
        else if(isColliding('up', this.border, flower.border)){
          this.move('down', flower.border.bottom - this.border.top)
        }
        else if(isColliding('up', this.border, bin.border)){
          if(coke){
            coke = false
            speak('./sounds/trash.m4a')
          }
        }
        else{
          this.move('up', 5)
        }
      }
      else if(this.border.top > 145){
        if(this.border.left > 420 && this.border.right < 560){
          if(!performed){
            enterDoor()
          }
          else{
            if(!knock){
              speak('./sounds/uhh1.m4a')
            }
          }
        }
      }
      else{
          if(this.border.top > 120){
            this.move('up', 2)
          }
          else{
            doorClose()
          }
      }
    }
    else if(this.down){
      if(this.border.bottom < 450){
        if(isColliding('down', this.border, chair.border)){
          this.move('up', this.border.bottom - chair.border.top)
        }
        else if(isColliding('down', this.border, guitar.border)){
          this.border.bottom - guitar.border.top
        }
        else if(isColliding('down', this.border, couch.border)){
          this.border.bottom - couch.border.top
        }
        else if(isColliding('down', this.border, machine.border)){
          this.border.bottom - machine.border.top
        }
        else if(isColliding('down', this.border, bin.border)){
          if(coke){
            coke = false
            speak('./sounds/trash.m4a')
          }
        }
        else{
          this.move('down', 5)
        }
      }
    }
    if(knock){
      if(this.border.left > 350 && this.border.top < 230){
        if(!visiting){
          talking = false
          speak('./sounds/door.mp3')
        }
        visiting = true
        document.getElementById('message').innerHTML = `<b>${birthdayMessages[seaman-1].name}: </b>${birthdayMessages[seaman-1].message}`
        document.getElementById('message').style.display = 'block'
        if(!wait){
          timeOut = setTimeout(()=>{
            knock = false
            talking = false
            speak('./sounds/door.mp3')
            wait = false
              visiting = false
              seaman++
              document.getElementById('message').style.display = 'none'
              if(seaman < 15){
                timeOut = setTimeout(()=>{
                  knockSound.changeTime(0)
                  knockSound.sound.play()
                  clearTimeout(timeOut)
                  timeOut = setTimeout(()=>{
                    knock = true
                  },1000)
                },5000)
              }
          },3000 + (birthdayMessages[seaman-1].message.length+1)*35)
          wait = true
        }
      }
      // else{
      //   if(visiting){
      //     knock = false
      //     visiting = false
      //     seaman++
      //     document.getElementById('message').style.display = 'none'
      //     if(seaman < 15){
      //       timeOut = setTimeout(()=>{
      //         knockSound.changeTime(0)
      //         knockSound.sound.play()
      //         clearTimeout(timeOut)
      //         timeOut = setTimeout(()=>{
      //           knock = true
      //         },1000)
      //       },5000)
      //     }
      //   }
      // }
    }
  }
}
