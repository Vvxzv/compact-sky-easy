JEIEvents.hideItems(event => {
    const colors =[
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]
    
    const itemid =[
        'kubejs:upgrade_creative_vend',
        'kubejs:anvil',
        'kubejs:chipped_anvil',
        'kubejs:damaged_anvil',
    
        'exnihilosequentia:unfired_crucible',
    
        'botanypots:terracotta_botany_pot',
    
        'cyclic:hopper_fluid',
        'cyclic:fluid_pipe',
        'cyclic:hopper',
        'cyclic:energy_pipe',
        'cyclic:item_pipe',
        'cyclic:cable_wrench',
        'cyclic:shape_data',
        'cyclic:computer_shape',
        'cyclic:structure',
    
        'create:sail_frame',
        'create:white_sail',
        'create:windmill_bearing',
        'create:schematicannon',
        'create:schematic_and_quill',
        'create:empty_schematic',
        'create:schematic',
        'create:schematic_table',
    
        'immersiveengineering:slab_alloybrick',
        
        'compactmachines:solid_wall',
        'compactmachines:machine_tiny',
        'compactmachines:machine_small',
        'compactmachines:machine_normal',
        'compactmachines:machine_large',
        'compactmachines:machine_giant',
    
        'botania:alchemy_catalyst',
        'botania:conjuration_catalyst',
    
        'functionalstorage:gold_upgrade',
        //'functionalstorage:copper_upgrade',
        'functionalstorage:diamond_upgrade',
        'functionalstorage:netherite_upgrade',
        'functionalstorage:creative_vending_upgrade',
        'functionalstorage:fluid_2',
        'functionalstorage:fluid_4',

        'fluiddrawerslegacy:fluiddrawer',
    
        'ae2:charger',
        
        /.*thermalily/,
        // /.*rosa_arcana/,
        /.*entropinnyum/,
        /.*kekimurus/,
        /.*gourmaryllis/,
        /.*narslimmus/,
        /.*spectrolus/,
        /.*dandelifeon/,
        /.*rafflowsia/,
        /.*shulk_me_not/
    ]
    
    const woodTypes = [
        'acacia',
        'birch',
        'dark_oak',
        'jungle',
        'spruce',
        'crimson',
        'warped',
        'mangrove'
    ]

    const materialTypes = [
        'andesite',
        'blackstone',
        'basalt',
        'bone',
        'calcite',
        'deepslate',
        'diorite',
        'dripstone',
        'granite',
        'nether_brick',
        'red_nether_brick',
        'terracotta',
        'tuff',
        'diamond',
        'netherite'
    ]

    colors.forEach(color =>{
        event.hide('botanypots:'+color+'_terracotta_botany_pot')
        event.hide('botanypots:'+color+'_terracotta_hopper_botany_pot')
        event.hide('botanypots:'+color+'_glazed_terracotta_botany_pot')
        event.hide('botanypots:'+color+'_glazed_terracotta_hopper_botany_pot')
        event.hide('botanypots:'+color+'_concrete_botany_pot')
        event.hide('botanypots:'+color+'_concrete_hopper_botany_pot')
    })
    
    itemid.forEach(item =>{
        event.hide(item)
    })

    woodTypes.forEach(type =>{
        event.hide('exnihilosequentia:' + type + '_crucible')
        event.hide('exnihilosequentia:' + type + '_barrel')
        event.hide('exnihilosequentia:' + type + '_sieve')
    })

    materialTypes.forEach(type=>{
        event.hide('exnihilosequentia:' + type + '_crook')
        event.hide('exnihilosequentia:' + type + '_hammer')
    })
    event.hide(/exnaturae:*/)
    event.hide(/botania:.*_floating_flower/)
})
