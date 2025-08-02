ServerEvents.recipes(event=>{
    event.replaceInput({id:'pipez:item_pipe'},'minecraft:dropper','create:belt_connector')
    event.replaceInput({id:'pipez:fluid_pipe'},'minecraft:bucket','create:mechanical_pump')
    event.replaceInput({id:'thermal:rf_coil'},'minecraft:redstone_block','thermal:rf_coil')
    event.replaceInput({mod:"pipez"},'iron_ingot','create:brass_ingot')

    event.shaped('2x pipez:item_pipe',[
        'aba',
        'cdc',
        'aba'
    ],{
        a:'minecraft:iron_ingot',
        b:'minecraft:gold_ingot',
        c:'minecraft:dropper',
        d:'minecraft:redstone'
    }).id('pipez:addons/item_pipe')

    event.shaped('2x pipez:fluid_pipe',[
        'aba',
        'cdc',
        'aba'
    ],{
        a:'minecraft:iron_ingot',
        b:'botania:manasteel_ingot',
        c:'minecraft:bucket',
        d:'minecraft:redstone'
    }).id('pipez:addons/fluid_pipe')

    event.shaped('2x pipez:energy_pipe',[
        'aaa',
        'ddd',
        'aaa'
    ],{
        a:'minecraft:redstone_block',
        d:'minecraft:redstone'
    }).id('pipez:addons/energy_pipe')

    event.replaceInput({id:'pipez:advanced_upgrade'},'minecraft:diamond','minecraft:lapis_block')

    event.replaceInput({id:'pipez:ultimate_upgrade'},'netherite_ingot','create:shadow_steel')
    
})