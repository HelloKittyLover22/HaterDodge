sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(Glitter)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.showLongText("\"You really thought you ATE\"", DialogLayout.Top)
    info.changeLifeBy(-1)
    game.setGameOverEffect(false, effects.slash)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
let Hater: Sprite = null
let Glitter: Sprite = null
scene.setBackgroundColor(3)
let Baddie = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f e e e e 9 9 e e f . . . 
    . . f e e 3 3 3 9 a a 9 e f . . 
    . . f e 3 3 e e e e 9 9 e f . . 
    . f e 3 3 e e 4 4 e e 3 3 e f . 
    . f e 3 f f 4 4 4 4 f f 3 e f . 
    . f e e f b f 4 4 f b f e e f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    f f e e f d d d d d d f e e f f 
    f e e f f f 4 4 4 4 f f f e e f 
    . f f 4 f a 3 3 3 3 a f 4 f f . 
    . . 4 d 9 3 3 3 3 3 3 9 d 4 . . 
    . . 4 f a 3 a 3 a 3 a a f 4 . . 
    . . . f f 1 3 1 3 1 3 f f . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Baddie)
Baddie.setStayInScreen(true)
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(500, function () {
    Hater = sprites.create(img`
        . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . 
        . . f e e e e e e 1 e f . . 
        . f e e 8 9 8 9 1 5 1 e f . 
        . f e 8 9 e e e e 1 9 e f . 
        f e e 9 e 4 4 4 4 e 8 e e f 
        f e 9 8 f 4 4 4 4 f 9 8 e f 
        f e 8 f d f 4 4 f d f 9 e f 
        f e e e 1 f d d f 1 e e e f 
        . f e f d d d d d d f e f . 
        . f e f f 4 4 4 4 f f f f . 
        . f 4 f 6 9 9 9 9 6 f 4 f . 
        . 4 d 8 9 9 9 9 9 9 8 d 4 . 
        . 4 f a 3 a 3 a 3 a a f 4 . 
        . . f f 3 a 3 a 3 3 f f . . 
        . . . . f f f f f f . . . . 
        `, SpriteKind.Enemy)
    Hater.setVelocity(-80, 0)
    Hater.setPosition(160, randint(0, 120))
    Hater.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(10000, function () {
    Glitter = sprites.create(img`
        . . . . . . . . c . . . . . . . 
        . . . . . 8 . . . . . . . . . . 
        . . . . . . . . c . . . . 4 . . 
        . . . . . 8 . . a . . . . 5 . . 
        . . . . . 6 . c a c . 4 5 5 5 4 
        . . . . 8 6 8 a b a . . . 5 . . 
        . . . . 6 9 6 a b a c . . 4 . . 
        . . . 8 6 9 6 8 1 b a a c . c . 
        . 8 6 6 9 1 9 6 6 8 c 8 . . . . 
        . . . 8 6 9 6 8 b a . . . . . . 
        . . . . 6 9 6 c a c . . . 2 . . 
        . . . . 8 6 8 . a . . . . 3 . . 
        . . . . . 6 . . c . . 2 3 3 3 2 
        . . . . . 8 . . . . . . . 3 . . 
        . . . . . . . . c . . . . 2 . . 
        . . . . . 8 . . . . . . . . . . 
        `, SpriteKind.Food)
    Glitter.setPosition(randint(0, 160), randint(0, 120))
})
