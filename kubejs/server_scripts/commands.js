ServerEvents.command(event =>{
    let command = event.getParseResults().getReader().getString()
    var fly= /fly/, sp= /spawn/
    if(fly.exec(command)!=null){
        event.cancel()
    }
    if(sp.exec(command)!=null){
        event.cancel()
    }
})

LevelEvents.loaded(event =>{
    //keepInventory
    event.server.runCommandSilent(`gamerule keepInventory true`)
    //day
    event.server.runCommandSilent(`gamerule doDaylightCycle false`)
    event.server.runCommandSilent(`time set noon`)
    //weather
    event.server.runCommandSilent(`gamerule doWeatherCycle false`)
    event.server.runCommandSilent(`weather clear`)
})

LevelEvents.tick(event =>{
    //doTraderSpawning
    if(event.getLevel().getGameRules().get('doTraderSpawning')==='true'){
        event.server.runCommandSilent(`gamerule doTraderSpawning false`)
    }

    //doMobSpawning
    if(event.getLevel().getGameRules().get('doMobSpawning')==='true'){
        event.server.runCommandSilent(`gamerule doMobSpawning false`)
    }

    //mobloot
    if(event.getLevel().getGameRules().get('doMobLoot')==='true'){
        event.server.runCommandSilent(`gamerule doMobLoot false`)
    }

    //fire
    if(event.getLevel().getGameRules().get('doMobLoot')==='true'){
        event.server.runCommandSilent(`gamerule doFireTick false`)
    }

    //difficulty
    if(event.getLevel().getDifficulty() != 'peaceful'){
        event.server.runCommandSilent(`tellraw @a [{"translate":"command.difficulty"}]`)
        event.server.runCommandSilent(`difficulty peaceful`)
    }
})
