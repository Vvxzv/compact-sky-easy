ServerEvents.recipes(event => {

    event.shaped('4x laserio:logic_chip',[
        'ab',
        'cd'
    ],{
        a:'minecraft:redstone',
        b:'botania:manasteel_ingot',
        c:'minecraft:clay_ball',
        d:'minecraft:copper_ingot'
    }).id('laserio:logic_chip')

    event.replaceInput({mod:'laserio'},'minecraft:iron_ingot','botania:manasteel_ingot')

    event.shapeless('laserio:card_holder',['laserio:logic_chip','#forge:chests','thermal:tin_ingot']).id('laserio:card_holder')

    event.shapeless('laserio:card_item',['laserio:logic_chip','botania:manasteel_ingot','thermal:tin_ingot']).id('laserio:card_item')
    
    event.shapeless('laserio:card_fluid',['laserio:logic_chip','minecraft:bucket','thermal:tin_ingot']).id('laserio:card_fluid')

    event.shapeless('laserio:card_energy',['laserio:logic_chip','minecraft:redstone_block','thermal:tin_ingot']).id('laserio:card_energy')

    event.shapeless('laserio:card_redstone',['laserio:logic_chip','minecraft:redstone','thermal:tin_ingot']).id('laserio:card_redstone')

})