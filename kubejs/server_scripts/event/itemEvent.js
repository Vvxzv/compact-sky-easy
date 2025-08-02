ItemEvents.rightClicked(event => {
    function itemRightClick(outputItem, handItem, dimension){
        dimension = typeof dimension != "undefined"?dimension:false
        const {player, hand, item} = event
        if(hand.name() != 'MAIN_HAND') return
        if(player.block.getDimension() != dimension && dimension != false) return
        if(item.id == handItem){
            item.setCount(item.count - 1)
            player.give(outputItem)
        }
    }

    itemRightClick('kubejs:nether_air_bottle','minecraft:glass_bottle','minecraft:the_nether')



    function angelBlock(setBlock, returnItem, handItem){
        const {player, hand, item, level} = event
        const block = player.block.down.id
        const x = player.x
        const y = player.y - 1
        const z = player.z
        const pos = [Math.floor(x), Math.floor(y), Math.floor(z)]
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != handItem) return
        if(block != 'minecraft:air') return player.tell(Text.translate('angel.block.cant.place'))
        item.setCount(item.count - 1)
        player.give(returnItem)
        level.getBlock(pos).set(setBlock)
    }

    angelBlock('minecraft:glass','constructionwand:infinity_wand','kubejs:angel_wand')


    function ore_setter(isFluid, oreName, handItem, dimension, biome){
        biome = typeof biome != "undefined"?biome:false
        const {player, hand, item, server} = event
        const {x,y,z} = player.block.getPos()
        if(hand.name() != 'MAIN_HAND') return
        if(player.block.dimension != dimension) return
        if(player.block.biomeId != biome && biome != false) return
        if(item.id == handItem){
            if(isFluid == true) isFluid = 'createoreexcavation:extracting/'
            else isFluid = 'createoreexcavation:drilling/'
            item.setCount(item.count - 1)
            server.runCommandSilent(`execute in ${dimension} positioned ${x} ${y} ${z} run coe setvein ~ ~ ~ ${isFluid}${oreName}`)
            player.tell(Text.translate('ore_setter_success'))
        }
    }
    //灵魂
    ore_setter(
        true, 
        'soul',
        'kubejs:soul_vein_setter',
        'minecraft:the_nether',
        'minecraft:soul_sand_valley'
    )
    //下界金矿
    ore_setter(
        false, 
        'nether_gold_ore',
        'kubejs:nether_gold_vein_setter',
        'minecraft:the_nether',
        'minecraft:nether_wastes'
    )
    //氟石
    ore_setter(
        false,
        'fluorite_ore',
        'kubejs:fluorite_vein_setter',
        'minecraft:the_end'
    )

    function finder(){
        const {player, hand, item} = event
        if(hand.name() != 'MAIN_HAND') return
        if(player.block.getDimension() != 'minecraft:overworld') return
        if(item.id == 'createoreexcavation:vein_finder'){
            player.tell(Text.translate('itemevent.finder.player.tell'))
            event.cancel()
        }
    }
    finder()

})