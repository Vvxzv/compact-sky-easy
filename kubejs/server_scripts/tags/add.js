ServerEvents.tags('block', event => {
    const blocks = [
        '#minecraft:anvil',
        'minecraft:stonecutter',
        'minecraft:grindstone',
        'minecraft:cauldron',
        'flopper:flopper',
        'woodenhopper:wooden_hopper',
        'compactcrafting:field_projector',
        'minecraft:iron_trapdoor',
        'enderstorage:ender_chest',
        'enderstorage:ender_tank'
    ]
    blocks.forEach(block => {
        event.add('create:wrench_pickup', block)
    })
    event.add('exnihilosequentia:barrel', /exnihilosequentia:.*_barrel/)
    event.add('storagedrawers:drawers', /_drawers/)

    const gearboxes = [
        'kubejs:mana_brass_gearbox_p',
        'kubejs:mana_brass_gearbox_s',
        'kubejs:mana_andesite_gearbox_p',
        'kubejs:mana_andesite_gearbox_s'
    ]
    gearboxes.forEach(gearbox => {
        event.add('kubejs:gearbox', gearbox)
    })

    const drawers = [
        'functionalstorage:oak_1',
        'functionalstorage:oak_2',
        'functionalstorage:oak_4',
        'functionalstorage:framed_1',
        'functionalstorage:framed_2',
        'functionalstorage:framed_4',
        'functionalstorage:compacting_drawer',
        'functionalstorage:compacting_framed_drawer',
        'functionalstorage:simple_compacting_drawer',
        'functionalstorage:framed_simple_compacting_drawer'
    ]
    drawers.forEach(drawer => {
        event.add('kubejs:drawers', drawer)
    })
    
})

ServerEvents.tags('item', event => {
    const items = [
        "minecraft:oak_leaves",
        "minecraft:dark_oak_leaves",
        "kubejs:sod"
    ]
    items.forEach(item => {
        event.add('kubejs:can_craft_water',item)
    })

    const sulfur = [
        'thermal:sulfur_dust',
        'immersiveengineering:dust_sulfur',
        'mekanism:dust_sulfur',
        'thermal:sulfur'
    ]
    sulfur.forEach(item => {
        event.add('kubejs:sulfur', item)
    })

    const quartz = [
        'thermal:quartz_dust',
        'mekanism:dust_quartz',
        'minecraft:quartz'
    ]
    quartz.forEach(item =>{
        event.add('kubejs:quartz', item)
    })

    const hammers = [
        'exnihilosequentia:wooden_hammer',
        'exnihilosequentia:stone_hammer',
        'exnihilosequentia:iron_hammer'
    ]
    hammers.forEach(hammer =>{
        event.add('kubejs:hammers', hammer)
    })

})