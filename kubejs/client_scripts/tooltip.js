ItemEvents.tooltip(event=>{
    event.addAdvanced('kubejs:machine_magnet_block',(item, advanced, text)=>{
        text.add(Text.translate('item.tooltip.kubejs.shift'))
        if(event.shift){
            text.remove(Text.translate('item.tooltip.kubejs.shift'))
            text.add(Text.translate('item.tooltip.kubejs.machine_magnet_block1'))
            text.add(Text.translate('item.tooltip.kubejs.machine_magnet_block2'))
            text.add(Text.translate('item.tooltop.kubejs.machine_magnet_block3'))
        }
    })
    event.add('kubejs:dirt',Text.translate('block.kubejs.dirt.item.tooltip'))

    event.add('kubejs:encased_shaft',Text.translate('block.kubejs.encased_shaft.item.tooltip'))

    event.add('kubejs:dirt_stick',Text.translate('item.kubejs.dirt_stick.tooltip'))

    event.add('kubejs:upgrade_creative_vend',Text.translate('item.kubejs.upgrade_creative_vend.tooltip'))
/*
    event.addAdvanced('kubejs:golden_hand',(item, advanced, text)=>{
        text.add(Text.translate('item.tooltip.kubejs.shift'))
        if(event.shift){
            text.remove(Text.translate('item.tooltip.kubejs.shift'))
            text.add(Text.translate('item.tooltip.kubejs.golden_hand'))
        }
    })*/

    event.add('botania:orechid',Text.translate('tooltip.placed_cancel'))
    event.add('botania:orechid_ignem',Text.translate('tooltip.placed_cancel'))

    //余烬面粉
    event.addAdvanced('create:cinder_flour',(item, advanced, text) => {
        text.add(Text.translate('item.tooltip.kubejs.shift'))
        if(event.shift){
            text.remove(Text.translate('item.tooltip.kubejs.shift'))
            text.add(Text.translate('item.tooltip.create.cinder_flour'))
        }
    })
    //天使手杖
    event.addAdvanced('kubejs:angel_wand',(item, advanced, text) => {
        text.add(Text.translate('item.tooltip.kubejs.shift'))
        if(event.shift){
            text.remove(Text.translate('item.tooltip.kubejs.shift'))
            text.add(Text.translate('item.tooltip.angel_wand'))
        }
    })
    
    //黄铜机壳
    event.addAdvanced('create:brass_casing',(item, advanced, text) => {
        text.add(Text.translate('item.tooltip.kubejs.shift'))
        if(event.shift){
            text.remove(Text.translate('item.tooltip.kubejs.shift'))
            text.add(Text.translate('item.tooltip.create.brass_casing'))
        }
    })
    //黄铜工作台
    event.addAdvanced('kubejs:brass_crafting_table',(item, advanced, text) => {
        text.add(Text.translate('item.tooltip.kubejs.shift'))
        if(event.shift){
            text.remove(Text.translate('item.tooltip.kubejs.shift'))
            text.add(Text.translate('item.tooltip.kubejs.brass_crafting_table'))
        }
    })
    /*event.addAdvanced('kubejs:cracked_magnet_block',(item, advanced, text)=>{
        text.add(Text.translate('item.tooltip.kubejs.shift'))
        if(event.shift){
            text.remove(Text.translate('item.tooltip.kubejs.shift'))
            text.add(Text.translate('item.tooltip.kubejs.cracked_magnet_block'))
        }
    })*/

    //灵魂设置手杖
    event.add('kubejs:soul_vein_setter',Text.translate('item.kubejs.soul_vein_setter.tooltip'))
    event.add('kubejs:soul_vein_setter',Text.translate('item.kubejs.tooltip.consume'))
    //下界金矿矿脉设置手杖
    event.add('kubejs:nether_gold_vein_setter',Text.translate('item.kubejs.nether_gold_vein_setter.tooltip'))
    event.add('kubejs:nether_gold_vein_setter',Text.translate('item.kubejs.tooltip.consume'))
    //氟石矿脉设置手杖
    event.add('kubejs:fluorite_vein_setter',Text.translate('item.kubejs.fluorite_vein_setter.tooltip'))
    event.add('kubejs:fluorite_vein_setter',Text.translate('item.kubejs.tooltip.consume'))


    //深层矿生成机
    /*
    event.addAdvanced('kubejs:deepore_gen',(item, advanced, text) => {
        text.add(Text.translate('item.tooltip.kubejs.shift'))
        if(event.shift){
            text.remove(Text.translate('item.tooltip.kubejs.shift'))
            text.add(Text.translate('item.tooltip.kubejs.deepore_gen'))
        }
    })
        */
    //暗影机壳
    event.addAdvanced('create:shadow_steel_casing',(item, advanced, text) => {
        text.add(Text.translate('item.tooltip.kubejs.shift'))
        if(event.shift){
            text.remove(Text.translate('item.tooltip.kubejs.shift'))
            text.add(Text.translate('item.tooltip.create.shadow_steel_casing'))
        }
    })

    //光辉机壳
    event.addAdvanced('create:refined_radiance_casing',(item, advanced, text) => {
        text.add(Text.translate('item.tooltip.kubejs.shift'))
        if(event.shift){
            text.remove(Text.translate('item.tooltip.kubejs.shift'))
            text.add(Text.translate('item.tooltip.create.refined_radiance_casing'))
        }
    })

    //盖亚机
    event.add('kubejs:gaia_machine',Text.translate('item.tooltip.gaia_machine'))

    //潜影盒
    event.add(/minecraft:.*shulker_box/,Text.translate('item.tooltip.shulker_box_0'))
    event.add(/minecraft:.*shulker_box/,Text.translate('item.tooltip.shulker_box_1'))

    //投影仪
    event.add('compactcrafting:field_projector', Text.translate('item.tooltip.field_projector'))

    //抽屉升级
    /*
    event.add('storagedrawers:iron_storage_upgrade', Text.translate('item.tooltip.iron_storage_upgrade'))
    event.add('storagedrawers:gold_storage_upgrade', Text.translate('item.tooltip.gold_storage_upgrade'))
    event.add('storagedrawers:diamond_storage_upgrade', Text.translate('item.tooltip.diamond_storage_upgrade'))
    event.add('storagedrawers:emerald_storage_upgrade', Text.translate('item.tooltip.emerald_storage_upgrade'))
    */
    //event.add('functionalstorage:copper_upgrade', Text.translate('item.tooltip.copper_upgrade'))
})