BlockEvents.rightClicked(event=>{
    //无中生有，木桶做压缩泥土(可以做多个，原版无中生有配方只能做出1个
    function barrelClicked(output, handItem, BarrelFluid){
        const {block, item, hand} = event
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != handItem) return
        if(!block.hasTag('exnihilosequentia:barrel')) return
        let barrelData = block.getEntityData()['tank']
        let FluidName = barrelData['FluidName']
        let FluidAmount = barrelData['Amount']
        if(FluidName == BarrelFluid && FluidAmount >= 1000){
            let result = block.createEntity('item')
            result.item = output
            result.x += 0.5
            result.y += 1
            result.z += 0.5
            block.mergeEntityData('{tank:{FluidName:"minecraft:empty",Amount:0},barrelMode:"empty"}')
            item.setCount(item.count - 1)
            result.spawn()
        }
    }

    barrelClicked('4x kubejs:compressed_dirt', 'minecraft:dirt', 'kubejs:mud')

    //抽屉
    function drawerClick(handItem){
        const {hand,block,item,server,player} = event
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != handItem) return
        if(player.shiftKeyDown) return
        if(block.hasTag('storagedrawers:drawers')){
            const {x,y,z} = block.getPos()
            const dim = block.getDimension()
            item.setCount(item.count - 1)
            block.set('minecraft:air')
            server.runCommandSilent(`execute in ${dim} positioned ${x} ${y} ${z} run playsound kubejs:never_gonna_give_you_up ambient @a[distance=..10]`)
            server.runCommandSilent(`tellraw @a [{"translate":"fake_item"}]`)
        }
    }
    drawerClick('kubejs:upgrade_creative_vend')

    //物品对方块右键生成物品
    function itemClick(outputItem, outputBlock, blockId, handItem, dimension, biome, sound ){
        biome = typeof biome != "undefined"?biome:false
        sound = typeof sound != "undefined"?sound:false
        const {hand, block, item, server} = event
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != handItem) return
        if(block.getDimension() != dimension) return
        if(block.getBiomeId() != biome && biome != false) return
        if(block.getId() == blockId){
            const {x,y,z} = block.getPos()
            const dim = block.getDimension()
            let result = block.createEntity('item')
            block.set(outputBlock)
            result.item = outputItem
            result.x += 0.5
            result.z += 0.5
            item.setCount(item.count - 1)
            result.spawn()
            if(sound != false){
                server.runCommandSilent(
                    `execute in ${dim} positioned ${x} ${y} ${z} run playsound ${sound} ambient @a[distance=..10]`
                )
            }
        }
    }
    //余烬面粉
    itemClick('create:cinder_flour','minecraft:air','minecraft:nether_bricks','botania:pixie_dust','minecraft:the_nether','minecraft:nether_wastes','botania:altar_craft')
    
    //黄铜机壳
    itemClick(
        'minecraft:air',
        'create:brass_casing',
        'thermal:stripped_rubberwood_log',
        'create:brass_ingot',
        'compactmachines:compact_world',
        false,
        'create:crafter_click'
    )

    itemClick(
        'minecraft:air',
        'create:brass_casing',
        'thermal:stripped_rubberwood_wood',
        'create:brass_ingot',
        'compactmachines:compact_world',
        false,
        'create:crafter_click'
    )
    
    //黄铜工作台
    itemClick(
        'kubejs:brass_crafting_table',
        'minecraft:air',
        'kubejs:andesite_crafting_table',
        'create:brass_ingot',
        'compactmachines:compact_world',
        false,
        'create:crafter_click'
    )

    function clickedAnvil(anvil){
        const {block, hand, item, server} = event
        const blockdown1 = block.down.id
        const blockdown2 = block.down.down.id
        const blockdown3 = block.down.down.down.id
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != 'minecraft:air') return
        if(blockdown1 != 'minecraft:air') return
        if(blockdown1 == 'minecraft:air' && blockdown2 == 'minecraft:air' && blockdown3 == 'minecraft:air') return
        if(block.id == anvil){
            const {x,y,z} = block.up.pos
            const dim = block.dimension
            server.runCommandSilent(`execute in ${dim} positioned ${x} ${y} ${z} run function kubejs:magnet/do`)
            event.cancel()
        }
    }
    clickedAnvil('kubejs:anvil')
    clickedAnvil('kubejs:chipped_anvil')
    clickedAnvil('kubejs:damaged_anvil')

    function wrench_pick(giveItem, pickblock){
        const {block, hand, item, player} = event
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != 'create:wrench') return
        if(block.id == pickblock && player.shiftKeyDown){
            block.set('air')
            player.give(giveItem)
        }
    }

    wrench_pick('minecraft:anvil','kubejs:anvil')
    wrench_pick('minecraft:chipped_anvil','kubejs:chipped_anvil')
    wrench_pick('minecraft:damaged_anvil','kubejs:damaged_anvil')

    //暗影机壳
    function shadow_steel_casing(){
        const {item, block, hand, server} = event
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != 'create:shadow_steel') return
        if(block.id != 'create:railway_casing') return
        if(block.up.skyLight == 0
            &&
            block.down.skyLight==0
            &&
            block.north.skyLight==0
            &&
            block.west.skyLight==0
            &&
            block.south.skyLight==0
            &&
            block.east.skyLight==0
        ){
            const {x,y,z} = block.getPos()
            const dim = block.getDimension()
            item.setCount(item.count - 1)
            block.set('create:shadow_steel_casing')
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run playsound create:crafter_click ambient @a[distance=..10]`
            )
        }
    }
    shadow_steel_casing()

    //光辉机壳
    function refined_radiance_casing(){
        const {item, block, hand, server} = event
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != 'create:refined_radiance') return
        if(block.id != 'create:railway_casing') return
        if(block.up.skyLight > 12
            &&
            block.down.skyLight > 12
            &&
            block.north.skyLight > 12
            &&
            block.west.skyLight > 12
            &&
            block.south.skyLight > 12
            &&
            block.east.skyLight > 12
        ){
            const {x,y,z} = block.getPos()
            const dim = block.getDimension()
            item.setCount(item.count - 1)
            block.set('create:refined_radiance_casing')
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run playsound create:crafter_click ambient @a[distance=..10]`
            )
        }
    }
    refined_radiance_casing()

    //金制手部件
    function golden_hand(){
        const {item, block, hand, server} = event
        const {x,y,z} = block.getPos()
        const dim = block.getDimension()
        const frame = 'kubejs:golden_frame'
        let result = block.createEntity('item')
        result.item = 'kubejs:golden_hand'
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != 'create:shaft') return
        if(block.id != 'create:andesite_casing') return
        if(!block.down == frame && !block.down.down == frame) return
        if(block.north.down == frame
            && block.north.down.down == frame
            && block.north.down.down.down == frame
            && block.north.down.down.down.down == frame

            && block.south.down == frame
            && block.south.down.down == frame
        ){
            item.setCount(item.count - 1)

            block.set('minecraft:air')
            block.down.set('minecraft:air')
            block.down.down.set('minecraft:air')

            block.north.down.set('minecraft:air')
            block.north.down.down.set('minecraft:air')
            block.north.down.down.down.set('minecraft:air')
            block.north.down.down.down.down.set('minecraft:air')

            block.south.down.down.set('minecraft:air')
            block.south.down.set('minecraft:air')

            result.spawn()
            
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run playsound create:crafter_click ambient @a[distance=..10]`
            )

            event.cancel()
        }
        else if(block.south.down == frame
            && block.south.down.down == frame
            && block.south.down.down.down == frame
            && block.south.down.down.down.down == frame

            && block.north.down == frame
            && block.north.down.down == frame
        ){
            item.setCount(item.count - 1)

            block.set('minecraft:air')
            block.down.set('minecraft:air')
            block.down.down.set('minecraft:air')

            block.south.down.set('minecraft:air')
            block.south.down.down.set('minecraft:air')
            block.south.down.down.down.set('minecraft:air')
            block.south.down.down.down.down.set('minecraft:air')

            block.north.down.down.set('minecraft:air')
            block.north.down.set('minecraft:air')

            result.spawn()
            
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run playsound create:crafter_click ambient @a[distance=..10]`
            )

            event.cancel()
        }
        else if(block.west.down == frame
            && block.west.down.down == frame
            && block.west.down.down.down == frame
            && block.west.down.down.down.down == frame

            && block.east.down == frame
            && block.east.down.down == frame
        ){
            item.setCount(item.count - 1)

            block.set('minecraft:air')
            block.down.set('minecraft:air')
            block.down.down.set('minecraft:air')

            block.west.down.set('minecraft:air')
            block.west.down.down.set('minecraft:air')
            block.west.down.down.down.set('minecraft:air')
            block.west.down.down.down.down.set('minecraft:air')

            block.east.down.down.set('minecraft:air')
            block.east.down.set('minecraft:air')

            result.spawn()
            
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run playsound create:crafter_click ambient @a[distance=..10]`
            )

            event.cancel()
        }
        else if(block.east.down == frame
            && block.east.down.down == frame
            && block.east.down.down.down == frame
            && block.east.down.down.down.down == frame

            && block.west.down == frame
            && block.west.down.down == frame
        ){
            item.setCount(item.count - 1)

            block.set('minecraft:air')
            block.down.set('minecraft:air')
            block.down.down.set('minecraft:air')

            block.east.down.set('minecraft:air')
            block.east.down.down.set('minecraft:air')
            block.east.down.down.down.set('minecraft:air')
            block.east.down.down.down.down.set('minecraft:air')

            block.west.down.down.set('minecraft:air')
            block.west.down.set('minecraft:air')

            result.spawn()
            
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run playsound create:crafter_click ambient @a[distance=..10]`
            )

            event.cancel()
        }
    }
    golden_hand()

    //电梯
    function elevator(){
        const {item, block, hand, server} = event
        const {x,y,z} = block.getPos()
        const dim = block.getDimension()
        let casing = 'create:brass_casing'
        let result = block.createEntity('item')
        result.item = '4x elevatorid:elevator_orange'
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != 'create:precision_mechanism') return
        if(block.id != 'create:elevator_pulley') return
        if(!block.down == casing
            && !block.north.down == casing && !block.south.down == casing
            && !block.east.down == casing && !block.west.down == casing
            && !block.north.west.down == casing && !block.north.east.down == casing
            && !block.south.west.down == casing && !block.south.east.down == casing
        ) return
        if(!block.down.down.down.down == casing
            && !block.north.down.down.down.down == casing && !block.south.down.down.down.down == casing
            && !block.east.down.down.down.down == casing && !block.west.down.down.down.down == casing
            && !block.north.west.down.down.down.down == casing && !block.north.east.down.down.down.down == casing
            && !block.south.west.down.down.down.down == casing && !block.south.east.down.down.down.down == casing
        ) return
        if(!block.north.west.down.down == casing && !block.north.east.down.down == casing
            && !block.south.west.down.down == casing && !block.south.east.down.down == casing
            && !block.north.west.down.down.down  == casing && !block.north.east.down.down.down  == casing
            && !block.south.west.down.down.down  == casing && !block.south.east.down.down.down  == casing
        ) return
        if(block.north.down.down == 'minecraft:glass_pane' && block.north.down.down.down == 'create:contraption_controls'
            && block.east.down.down == 'minecraft:glass' && block.west.down.down == 'minecraft:glass'
            && block.east.down.down.down == 'minecraft:glass' && block.west.down.down.down == 'minecraft:glass'
            && block.south.down.down == 'create:brass_door'
        ){
            block.set('minecraft:air')
            item.setCount(item.count - 1)
            result.spawn()
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run fill ~1 ~-1 ~1 ~-1 ~-4 ~-1 air`
            )
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run playsound create:crafter_click ambient @a[distance=..10]`
            )
        }
        else if(block.south.down.down == 'minecraft:glass_pane' && block.south.down.down.down == 'create:contraption_controls'
            && block.east.down.down == 'minecraft:glass' && block.west.down.down == 'minecraft:glass'
            && block.east.down.down.down == 'minecraft:glass' && block.west.down.down.down == 'minecraft:glass'
            && block.north.down.down == 'create:brass_door'
        ){
            block.set('minecraft:air')
            item.setCount(item.count - 1)
            result.spawn()
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run fill ~1 ~-1 ~1 ~-1 ~-4 ~-1 air`
            )
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run playsound create:crafter_click ambient @a[distance=..10]`
            )
        }
        else if(block.east.down.down == 'minecraft:glass_pane' && block.east.down.down.down == 'create:contraption_controls'
            && block.north.down.down == 'minecraft:glass' && block.south.down.down == 'minecraft:glass'
            && block.north.down.down.down == 'minecraft:glass' && block.south.down.down.down == 'minecraft:glass'
            && block.west.down.down == 'create:brass_door'
        ){
            block.set('minecraft:air')
            item.setCount(item.count - 1)
            result.spawn()
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run fill ~1 ~-1 ~1 ~-1 ~-4 ~-1 air`
            )
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run playsound create:crafter_click ambient @a[distance=..10]`
            )
        }
        else if(block.west.down.down == 'minecraft:glass_pane' && block.west.down.down.down == 'create:contraption_controls'
            && block.north.down.down == 'minecraft:glass' && block.south.down.down == 'minecraft:glass'
            && block.north.down.down.down == 'minecraft:glass' && block.south.down.down.down == 'minecraft:glass'
            && block.east.down.down == 'create:brass_door'
        ){
            block.set('minecraft:air')
            item.setCount(item.count - 1)
            result.spawn()
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run fill ~1 ~-1 ~1 ~-1 ~-4 ~-1 air`
            )
            server.runCommandSilent(
                `execute in ${dim} positioned ${x} ${y} ${z} run playsound create:crafter_click ambient @a[distance=..10]`
            )
        }
    }
    elevator()
/*
    function drawerUpgrades(){
        const {block, hand, item} = event
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != 'functionalstorage:copper_upgrade') return
        if(block.hasTag('kubejs:drawers')){
            event.cancel()
        }
    }
    drawerUpgrades()*/

    function tool(){
        const {hand, item, player} = event
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != 'morphtool:tool') return
        if(player.shiftKeyDown){
            event.cancel()
        }
    }
    tool()

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

    //新月锤 禁止旋转沉浸多方块机器
    function rmachine(machineblockid){
        const {hand, item, block} = event
        if(hand.name() != 'MAIN_HAND') return
        if(item.id != 'thermal:wrench') return
        if(block.id == machineblockid){
            event.cancel()
        }
    }
    const machines = [
        'immersiveengineering:metal_press',
        'immersiveengineering:crusher',
        'immersiveengineering:sawmill',
        'immersiveengineering:tank',
        'immersiveengineering:excavator',
        'immersiveengineering:diesel_generator',
        'immersiveengineering:refinery',
        'immersiveengineering:fermenter',
        'immersiveengineering:squeezer',
        'immersiveengineering:auto_workbench',
        'immersiveengineering:bottling_machine',
        'immersiveengineering:mixer',
        'immersiveengineering:lightning_rod',
        'immersiveengineering:arc_furnace',
        'immersiveengineering:bucket_wheel',
        'immersiveengineering:assembler',
        'immersiveengineering:silo'
    ]
    machines.forEach(machine => {
        rmachine(machine)
    })
})


BlockEvents.placed(event=>{
    
    //取消放置方块
    function placedCancel(blockName){
        const {block} = event
        if(block.getId()==blockName)
            event.cancel()
    }
    placedCancel('botania:orechid')
    placedCancel('botania:orechid_ignem')
    placedCancel('kubejs:incomplete_gearbox')
    placedCancel('kubejs:incomplete_fan')
    placedCancel('kubejs:incomplete_press')
    placedCancel('kubejs:incomplete_cuckoo')
    placedCancel('kubejs:incomplete_mixer')
    placedCancel('kubejs:incomplete_chain_drive')
    placedCancel('kubejs:incomplete_clutch')
    placedCancel('kubejs:incomplete_gearshift')

    function gearbox(){
        const {block, player} = event
        let speed_controller = 'create:rotation_speed_controller'
        if(!block.hasTag('kubejs:gearbox')) return
        if(block.north.id == speed_controller
            ||
            block.south.id == speed_controller
            ||
            block.east.id == speed_controller
            ||
            block.west.id == speed_controller
        ){
            player.tell(Text.translate('gearbox.speed_controller'))
            event.cancel()
        }
    }
    gearbox()

    function speed_controller(){
        const {block, player} = event
        if(block.id != 'create:rotation_speed_controller') return
        if(block.north.hasTag('kubejs:gearbox')
            ||
            block.south.hasTag('kubejs:gearbox')
            ||
            block.east.hasTag('kubejs:gearbox')
            ||
            block.west.hasTag('kubejs:gearbox')
        ){
            player.tell(Text.translate('speed_controller.gearbox'))
            event.cancel()
        }
    }
    speed_controller()

    function createore(id){
        const {block, player} = event
        if(block.id == id && player.block.dimension == 'minecraft:overworld'){
            player.tell(Text.translate('itemevent.finder.player.tell'))
            event.cancel()
        }
    }
    createore('createoreexcavation:extractor')
    createore('createoreexcavation:drilling_machine')
})

BlockEvents.broken(event => {
    function fluidDrawer(){
        const {block} = event
        if(block.id != 'fluiddrawerslegacy:fluiddrawer') return
        let drawerUpgrades = block.getEntityData()['Upgrades']
        let upgradesName = []
        for(let i = 0; i < drawerUpgrades.length; i++){
            upgradesName.push(drawerUpgrades[i]['id'])
        }
        for(let i = 0; i < drawerUpgrades.length; i++){
            let result = block.createEntity('item')
            result.item = upgradesName[i]
            result.x += 0.5
            result.z += 0.5
            result.spawn()
        }
        block.mergeEntityData('{Upgrades:[]}')
    }
    fluidDrawer()
})