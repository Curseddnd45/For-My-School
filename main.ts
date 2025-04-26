namespace SpriteKind {
    export const npc = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile2`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    if (otherSprite == mySprite2 && miss_hyde_talk1 == true) {
        story.startCutscene(function () {
            story.printCharacterText("Oh, Hello!", "Miss Hyde")
            story.printCharacterText("Erm, who are you?", "Miss Hyde")
            story.printCharacterText("Are you the great sorcerer I heard about?", "Miss Hyde")
            story.printCharacterText("Yup!", "You")
            story.printCharacterText("What is your name?", "Miss Hyde")
            story.printCharacterText("" + name + "!", "You")
            story.cancelCurrentCutscene()
        })
        miss_hyde_talk1 = false
    } else if (otherSprite == mySprite3) {
        if (Mrs_Anderson_Tlak1 == 2 && Key == true) {
            story.printCharacterText("*Gasp* You have it!", "Mrs Anderson")
            story.printCharacterText("Thankyou so much!", "Mrs Anderson")
            info.changeScoreBy(1)
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
            Mrs_Anderson_Tlak1 = 3
        } else if (Mrs_Anderson_Tlak1 == 1) {
            story.startCutscene(function () {
                story.printCharacterText("Hiya!", "Mrs Anderson")
                story.printCharacterText("Your the great sorcerer arnt you?", "Mrs Anderson")
                story.printCharacterText("You know me?", "You")
                story.printCharacterText("No. What is your name?", "Mrs Anderson")
                story.printCharacterText("" + name + "!", "You")
                story.printCharacterText("Well, " + name + " I need your help!", "Mrs Anderson")
                story.printCharacterText("I was going to get out my " + list._pickRandom() + "and found that I have lost my keys to that section.", "Mrs Anderson")
                story.printCharacterText("Please help!", "Mrs Anderson")
                story.printCharacterText("Of course!", "You")
            })
            Mrs_Anderson_Tlak1 = 2
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f f e . . . 
        . . e b f b 5 b b 5 b c b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e b e e f f f f b b e . . 
        . . . e b b e b b 5 5 f e e . . 
        . . . . c e e 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f e e . . . 
        . . e b c b 5 b b 5 b f b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f e e f . . . 
        . . e b b f e e e e e b e . . . 
        . . e e f 5 5 b b e b b e . . . 
        . . . f 5 5 5 5 5 e e c . . . . 
        . . . . f f f f f f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door0, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    tiles.placeOnRandomTile(mySprite, tileUtil.door0)
    if (tileUtil.currentTilemap() == tilemap1) {
        mySprite.x += 16
    } else {
        mySprite.x += -16
        game.showLongText("Mississippi", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tileUtil.setTileAt(tilemap2, location, assets.tile`myTile26`)
        tileUtil.setWallAt(tilemap2, location, true)
        Key = true
    }
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door2, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door3)
    tiles.placeOnRandomTile(mySprite, tileUtil.door2)
    if (tileUtil.currentTilemap() == tilemap3) {
        mySprite.x += 16
    } else {
        mySprite.x += -16
        game.showLongText("The Library", DialogLayout.Bottom)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 5 b b e b b e . . . 
        . . . . f 5 5 5 5 e b b e . . . 
        . . . . c b 5 5 5 5 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c c 5 c . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b e e f f . . . 
        . . . . . f e e e b b e f . . . 
        . . . . f 5 b b e b b e . . . . 
        . . . . c 5 5 5 5 e e f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 5 b b e b b e . . . 
        . . . . f 5 5 5 5 e b b e . . . 
        . . . . c b 5 5 5 5 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c c 5 c . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e e b b e . . 
        . . . . f 5 5 b b b e b b e . . 
        . . . . c 5 5 5 5 5 e e e . . . 
        . . . . . f f f f f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
info.onScore(2, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door1, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door2)
    tiles.placeOnRandomTile(mySprite, tileUtil.door1)
    if (tileUtil.currentTilemap() == tilemap1) {
        mySprite.x += -16
    } else {
        mySprite.x += 16
        game.showLongText("The Office and Corridor", DialogLayout.Bottom)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . . e e f e e e e f . . . . . 
        . . . e b b e b b 5 f . . . . . 
        . . . e b b e 5 5 5 5 f . . . . 
        . . . . e e 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f e e b b b b f . . . . 
        . . . f e b b e e e f . . . . . 
        . . . . e b b e b b 5 f . . . . 
        . . . . f e e 5 5 5 5 c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . . e e f e e e e f . . . . . 
        . . . e b b e b b 5 f . . . . . 
        . . . e b b e 5 5 5 5 f . . . . 
        . . . . e e 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . e b b e e e e e f . . . . . 
        . . e b b e b b b 5 5 f . . . . 
        . . . e e e 5 5 5 5 5 c . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
tileUtil.onMapLoaded(function (tilemap6) {
    if (tileUtil.currentTilemap() == tilemap1) {
        sprites.destroy(mySprite2)
        tileUtil.coverAllTiles(tileUtil.door0, assets.tile`myTile17`)
        tileUtil.coverAllTiles(tileUtil.door1, assets.tile`myTile24`)
    } else if (tileUtil.currentTilemap() == tilemap2) {
        tileUtil.coverAllTiles(tileUtil.door0, assets.tile`myTile14`)
        tileUtil.coverAllTiles(tileUtil.object1, assets.tile`myTile15`)
        mySprite2 = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f c c c c f f . . . 
            . f f c c c c c c f f . . 
            f f c c c c c c c c f f . 
            f f c c f c c c c c c f . 
            f f f f f c c c f c c f . 
            f f f f c c c f c c f f . 
            f f f f f f f f f f f f . 
            f f f f f f f f f f f f . 
            . f f f f f f f f f f . . 
            . f f f f f f f f f f . . 
            f e f f f f f f f f e f . 
            e 4 f 2 2 2 2 2 2 c 4 e . 
            e e f 4 4 4 4 4 4 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.npc)
        tiles.placeOnRandomTile(mySprite2, tileUtil.object1)
    } else if (tileUtil.currentTilemap() == tilemap3) {
        tileUtil.coverAllTiles(tileUtil.door1, assets.tile`myTile23`)
        tileUtil.coverAllTiles(tileUtil.door2, assets.tile`myTile23`)
    } else if (tileUtil.currentTilemap() == tilemap42) {
        tileUtil.coverAllTiles(tileUtil.door2, assets.tile`myTile23`)
        tileUtil.coverAllTiles(tileUtil.door3, assets.tile`myTile27`)
    } else if (tileUtil.currentTilemap() == tilemap5) {
        mySprite3 = sprites.create(img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f d 5 e 4 4 4 4 e 5 d f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 e d 5 e e 5 d e 5 5 f . 
            . f 5 5 f f e e e e f f 5 5 f . 
            . f d d f b f e e f b f d d f . 
            . f d d e 1 f 4 4 f 1 e d d f . 
            f f d d f 4 4 4 4 4 4 f d d f f 
            f d d f f f e e e e f f f d d f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `, SpriteKind.npc)
        tiles.placeOnRandomTile(mySprite3, tileUtil.object3)
        tileUtil.coverAllTiles(tileUtil.door3, assets.tile`myTile23`)
        tileUtil.coverAllTiles(tileUtil.object3, assets.tile`myTile27`)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 5 b b 5 b f b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b e e e f . . . 
        . . e b b f e e e e b b e . . . 
        . . e e f 5 5 b b e b b e . . . 
        . . . f 5 5 5 5 5 e e c . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 5 b b 5 b c b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 5 5 f e e . . 
        . . . . c e e 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door3, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door4)
    tiles.placeOnRandomTile(mySprite, tileUtil.door3)
    if (tileUtil.currentTilemap() == tilemap42) {
        mySprite.x += 16
    } else {
        mySprite.x += -16
    }
})
let Key = false
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let Mrs_Anderson_Tlak1 = 0
let mySprite: Sprite = null
let tilemap5: tiles.TileMapData = null
let tilemap42: tiles.TileMapData = null
let tilemap3: tiles.TileMapData = null
let tilemap2: tiles.TileMapData = null
let tilemap1: tiles.TileMapData = null
let miss_hyde_talk1 = false
let name = ""
let list: string[] = []
list = ["Evil Sorcery Books "]
name = game.askForString("What is your name?")
miss_hyde_talk1 = true
tilemap1 = tilemap`level2`
tilemap2 = tilemap`level3`
tilemap3 = tilemap`level0`
tilemap42 = tilemap`level1`
tilemap5 = tilemap`level`
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f e e e b b b b f f . . . 
    . . . e b b e e e e f b b e . . 
    . . . e b b e b b 5 5 f e e . . 
    . . . . c e e 5 5 5 5 5 f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Player)
Mrs_Anderson_Tlak1 = 1
tiles.setCurrentTilemap(tilemap1)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tileUtil.connectMaps(tilemap1, tilemap2, MapConnectionKind.Door1)
tileUtil.connectMaps(tilemap1, tilemap3, MapConnectionKind.Door2)
tileUtil.connectMaps(tilemap3, tilemap42, MapConnectionKind.Door3)
tileUtil.connectMaps(tilemap42, tilemap5, MapConnectionKind.Door4)
tileUtil.createSpritesOnTiles(assets.tile`tilePath5`, img`
    . . . . . f f f f . . . . . . . 
    . . . f f e e e e f f . . . . . 
    . . f e e e f f e e e f . . . . 
    . f f f f f 8 8 f f f f f . . . 
    . f f e 8 e 8 8 e 8 e f f . . . 
    . f e 8 f 8 f f 8 f 8 e f . . . 
    . f f f 8 8 e e 8 8 f f f . . . 
    f f e f 8 f e e f 8 f e f f . . 
    f e e f f e e e e f e e e f . . 
    . f e e e e e e e e e e f . . . 
    . . f e e e e e e e e f . . . . 
    . e 4 f f f f f f f f 4 e . . . 
    . 4 d f 8 8 8 8 8 8 f d 4 . . . 
    . 4 4 f 8 8 8 8 8 8 f 4 4 . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    `, SpriteKind.npc)
story.printCharacterText("Move with arrow buttons.")
