blocks.onBlockPlaced(GRASS, function () {
    mobs.applyEffect(BLINDNESS, mobs.target(LOCAL_PLAYER), 10, 1)
    mobs.applyEffect(HUNGER, mobs.target(LOCAL_PLAYER), 10, 1)
})
player.onDied(function () {
	
})
player.onTravelled(SWIM_WATER, function () {
    rollerCoasterBuilder.setNormalPowerInterval(8)
    rollerCoasterBuilder.placeTrackStart(player.position(), NORTH)
    for (let index = 0; index < 10; index++) {
        rollerCoasterBuilder.addPoweredRail()
    }
    rollerCoasterBuilder.addRamp(RcbVerticalDirection.Up, 50)
    rollerCoasterBuilder.addFreeFall(60)
    rollerCoasterBuilder.addSpiral(
    RcbVerticalDirection.Up,
    LEFT_TURN,
    10,
    3
    )
    rollerCoasterBuilder.addRamp(RcbVerticalDirection.Down, 20)
    rollerCoasterBuilder.addStraightLine(2)
    rollerCoasterBuilder.addTurn(RIGHT_TURN)
    rollerCoasterBuilder.addPoweredRail()
    rollerCoasterBuilder.addRamp(RcbVerticalDirection.Up, 99)
    rollerCoasterBuilder.addRamp(RcbVerticalDirection.Down, 999)
    mobs.spawn(mobs.monster(WARDEN), player.position())
})
player.onTravelled(CLIMB, function () {
    for (let index = 0; index < randint(20, 100); index++) {
        music.playSound(Sound.LightningImpact)
    }
})
blocks.onBlockBroken(GRASS, function () {
    mobs.spawn(mobs.monster(ENDERMAN), player.position())
    mobs.applyEffect(WITHER, mobs.target(LOCAL_PLAYER), 105, 1)
    gameplay.xp(-100000000, mobs.target(ALL_PLAYERS))
})
player.onItemInteracted(WOODEN_SWORD, function () {
    mobs.spawn(HAPPY_GHAST, player.position())
})
player.onArrowShot(function () {
    mobs.give(
    mobs.target(ALL_PLAYERS),
    AIR,
    64
    )
    gameplay.setWeather(THUNDER)
})
player.onTravelled(WALK, function () {
    agent.teleportToPlayer()
    agent.collect(DIAMOND)
})
events.onEndOfDay(function () {
    for (let index = 0; index < 20; index++) {
        music.playSound(Sound.PlayerHurt)
    }
    for (let index = 0; index < 20; index++) {
        music.playSound(Sound.PlayerDie)
    }
})
player.onChat("start", function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
    player.say("You will now face your doom!")
    mobs.spawn(mobs.monster(WITHER_MONSTER_MOB), pos(0, 0, 0))
})
player.onTravelled(FALL, function () {
    castles.buildSimpleCastle(BEDROCK)
})
blocks.onBlockBroken(LOG_OAK, function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(CREAKING), player.position())
    }
})
loops.forever(function () {
    music.playSound(Sound.PlayerHurt)
})
player.onChat("spawn ender dragon", function () {
    mobs.spawn(mobs.monster(ENDER_DRAGON), player.position())
})
player.onTravelled(SNEAK, function () {
    castles.growBeanStalk(9999999999, posCamera(0, 0, 0))
})
player.onChat("chicken", function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
player.onItemInteracted(WOODEN_PICKAXE, function () {
    castles.buildCastleTower(
    1000,
    1000,
    BEDROCK,
    posCamera(-8, 0, 8)
    )
})
