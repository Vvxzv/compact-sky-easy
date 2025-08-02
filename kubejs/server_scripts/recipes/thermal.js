ServerEvents.recipes(event =>{
    //真空箱子
    event.shaped('thermal:device_collector',[
        'aea',
        'cbc',
        'ada'
    ],{
        a:'thermal:tin_ingot',
        b:'minecraft:hopper',
        c:'minecraft:glass',
        d:'thermal:redstone_servo',
        e:'minecraft:copper_block'
    })
    .id('thermal:device_collector')

    //物品过滤规则
    event.shaped('thermal:item_filter_augment',[
        'aaa',
        'aba',
        'aaa'
    ],{
        a:'botania:manasteel_nugget',
        b:'botania:livingrock'
    })
    .id('thermal:item_filter_augment')

    //锭铸模
    event.replaceInput({id:'thermal:chiller_ingot_cast'},'thermal:bronze_plate','#forge:plates/copper')

    //植物胶乳
    event.custom({
        type: "thermal:tree_extractor",
        trunk: "thermal:rubberwood_log",
        leaves: "thermal:rubberwood_leaves",
        result: {
            fluid: "thermal:latex",
            amount: 200
        }
    })
    .id('thermal:devices/tree_extractor/tree_extractor_rubberwood')

    event.custom({
        type: "thermal:tree_extractor",
        trunk: "jungle_log",
        leaves: "jungle_leaves",
        result: {
            fluid: "thermal:latex",
            amount: 100
        }
    })
    .id('thermal:devices/tree_extractor/tree_extractor_jungle')

    //红石熔炼炉
    event.recipes.thermal.smelter([Item.of('thermal:machine_furnace').withChance(1)],[
        'thermal:machine_frame',
        'minecraft:furnace',
        'thermal:rf_coil'
    ])
    .energy(1000)
    .id('thermal:smelter/machine_furnace')

    //感应炉
    event.recipes.thermal.smelter([Item.of('thermal:machine_smelter').withChance(1)],[
        'thermal:machine_frame',
        '3x thermal:machine_furnace',
        'thermal:rf_coil'
    ])
    .energy(3000)
    .id('thermal:smelter/machine_smelter')

    //机器框架
    event.recipes.thermal.smelter([Item.of('thermal:machine_frame').withChance(1)],[
        'refinedstorage:machine_casing',
        '4x immersiveengineering:ingot_aluminum'
    ])
    .energy(1000)
    .id('thermal:smelter/machine_frame1')

    event.recipes.thermal.smelter([Item.of('thermal:machine_frame').withChance(1)],[
        '2x refinedstorage:machine_casing'
    ])
    .energy(1000)
    .id('thermal:smelter/machine_frame')

    //机器外壳
    event.recipes.thermal.smelter([Item.of('refinedstorage:machine_casing', 4).withChance(1)],[
        '6x kubejs:light_frame',
        '4x refinedstorage:quartz_enriched_iron_block',
        '3x kubejs:heavy_frame'
    ])
    .energy(1000)
    .id('thermal:smelter/machine_casing')

    event.recipes.thermal.smelter([Item.of('refinedstorage:machine_casing', 2).withChance(1)],[
        'refinedstorage:quartz_enriched_iron_block',
        'immersiveengineering:storage_aluminum'
    ])
    .energy(1000)
    .id('thermal:smelter/machine_casing1')

    //轻型框架
    event.recipes.thermal.smelter([Item.of('kubejs:light_frame')],[
        'immersiveengineering:sheetmetal_iron',
        'minecraft:copper_ingot'
    ])
    .energy(1000)
    .id('thermal:smelter/light_frame')

    //重型框架
    event.recipes.thermal.smelter([Item.of('kubejs:heavy_frame')],[
        'immersiveengineering:sheetmetal_steel',
        'minecraft:gold_ingot'
    ])
    .energy(1000)
    .id('thermal:smelter/heavy_frame')

    //潜影壳
    event.recipes.thermal.smelter(['2x minecraft:shulker_shell'],[
        'thermal:machine_frame',
        '2x minecraft:purple_dye'
    ])
    .energy(1000)
    .id('thermal:smelter/shulker_shell')

    //磨粉机
    event.replaceInput({id:'thermal:machine_pulverizer'},'thermal:copper_gear','thermal:constantan_gear')

    //紫珀粉
    event.recipes.thermal.pulverizer([Item.of('kubejs:purpur_dust').withChance(1.0)],[
        'minecraft:shulker_shell'
    ])
    .energy(1000)
    .id('thermal:pulverizer/purpur_dust')

    //紫珀锭
    event.recipes.thermal.furnace('kubejs:purpur_ingot','kubejs:purpur_dust')
    .energy(1000)
    .id('thermal:furnace/purpur_ingot')

    //安山岩
    event.recipes.thermal.rock_gen("minecraft:andesite","compactmachines:solid_wall","minecraft:water",20).id('thermal:rock_gen/andesite')

    //齿轮模具
    event.replaceInput({id:'thermal:press_gear_die'},'thermal:diamond_gear','immersiveengineering:mold_gear')

    //锡粉
    event.recipes.thermal.pulverizer(['thermal:tin_dust'],['thermal:tin_ingot'])
    .energy(3000)
    .id('thermal:pulverizer/tin_dust')

    //方解石
    event.recipes.thermal.insolator([Item.of('minecraft:calcite').withChance(1.0)],['minecraft:stone'])
    .energy(1000)
    .id('thermal:insolator/calcite')

    //紫颂液
    event.recipes.thermal.crucible([Fluid.of('kubejs:chorus')],['kubejs:purpur_ingot'])
    .energy(4000)
    .id('thermal:crucible/chorus')

    //爆裂紫颂果
    event.recipes.thermal.pulverizer([Item.of('minecraft:popped_chorus_fruit').withChance(0.5)],['minecraft:purpur_block']).energy(4000).id('thermal:pulverizer/popped_chorus_fruit')

    //氟石
    event.recipes.thermal.pulverizer([Item.of('mekanism:dust_fluorite').withChance(0.5)],['mekanism:fluorite_gem'])
    .energy(4000).id('thermal:pulverizer/dust_fluorite')

    //紫水晶
    event.recipes.thermal.crystallizer(['minecraft:amethyst_shard'],['kubejs:purpur_dust',Fluid.of('water',1000)])
    .energy(5000).id('thermal:crystallizer/amethyst_shard')

    //离心机
    event.shaped('thermal:machine_centrifuge',[
        ' a ',
        'bcb',
        'ded'
    ],{
        a:'kubejs:mana_centrifuge',
        b:'thermal:lumium_plate',
        c:'thermal:machine_frame',
        d:'thermal:signalum_gear',
        e:'thermal:rf_coil'
    }).id('thermal:machine_centrifuge')
    
    //福鲁伊克斯粉
    event.recipes.thermal.pulverizer([Item.of('2x ae2:fluix_dust').withChance(1)],['ae2:fluix_crystal'])
    .energy(4000).id('thermal:pulverizer/fluix_dust')

    //钻石粉
    event.recipes.thermal.pulverizer(['thermal:diamond_dust'],['botania:mana_diamond'])
    .energy(8000)
    .id('thermal:pulverizer/diamond_dust')

    //安山齿轮
    event.recipes.thermal.press(['kubejs:andesite_gear'],['4x create:andesite_alloy','thermal:press_gear_die'])
    .energy(2400)
    .id('thermal:press/andesite_gear')

    //搅拌器
    event.recipes.thermal.smelter(['create:whisk'],['minecraft:iron_ingot','2x create:andesite_alloy'])
    .energy(3200)
    .id('thermal:smelter/whsik')

    

    //末地石
    event.recipes.thermal.rock_gen('minecraft:end_stone',false,'minecraft:end_stone',200)
    .id('thermal:rock_gen/end_stone')

    //工业大麻
    event.recipes.thermal.insolator([Item.of('immersiveengineering:hemp_fiber',2).withChance(1.0),Item.of('immersiveengineering:seed').withChance(1.0)],['immersiveengineering:seed']).energy(2000).id('thermal:insolator/hemp_fiber')

    //锇矿
    event.recipes.thermal.pulverizer([Item.of('create:crushed_raw_osmium').withChance(0.25)],'minecraft:end_stone')
    .energy(2500)
    .id('thermal:pulverizer/crushed_raw_osmium')

    //谐振末影液
    event.recipes.thermal.centrifuge([Fluid.of('thermal:ender',250),'minecraft:dragon_egg'],['minecraft:dragon_egg'])
    .energy(8000)
    .id('thermal:centrifuge/ender')
    
    /*
    //下界之星
    event.recipes.thermal.centrifuge([
        Item.of('minecraft:nether_star').withChance(0.01),
        Item.of('create:refined_radiance').withChance(0.30)
    ],[
        'create:refined_radiance'
    ]).energy(2000).id('thermal:centrifuge/nether_star')
    */

    //红石酸
    event.recipes.thermal.pyrolyzer([Fluid.of('immersiveengineering:redstone_acid', 250)],[
        'minecraft:redstone'
    ]).energy(500).id('thermal:pyrolyzer/redstone_acid')

    //不稳定红石
    event.recipes.thermal.refinery([Fluid.of('thermal:redstone', 900)],[Fluid.of('immersiveengineering:redstone_acid', 1000)]).energy(2500).id('thermal:refinery/redstone')
    
    //硅
    event.recipes.thermal.furnace(['refinedstorage:silicon'],['minecraft:quartz'])
    .energy(1000)
    .id('thermal:furnace/silicon')

    //绿宝石
    event.recipes.thermal.crystallizer(['2x minecraft:emerald'],['thermal:emerald_dust','thermal:lapis_dust',Fluid.of('water', 2000)]).energy(10000).id('thermal:machines/crystallizer/crystallizer_emerald')

    //二重压缩泥土
    event.recipes.thermal.bottler(['kubejs:dcompressed_dirt'],['kubejs:compressed_dirt',Fluid.of('kubejs:mud', 2000)])
    .energy(2000).id('thermal:bottler/dcompressed_dirt')

    //熔岩
    event.recipes.thermal.crucible([Fluid.of('lava',1000)],['minecraft:netherrack'])
    .energy(4000)
    .id('thermal:machines/crucible/crucible_netherrack_to_lava')

    //末影玻璃
    event.recipes.thermal.smelter(['2x thermal:enderium_glass'],[
        'thermal:enderium_dust',
        'thermal:signalum_glass',
        'thermal:lumium_glass'
    ]).energy(5000)
    .id('thermal:machines/smelter/smelter_glass_enderium_0')
    event.recipes.thermal.smelter(['2x thermal:enderium_glass'],[
        'thermal:enderium_ingot',
        'thermal:signalum_glass',
        'thermal:lumium_glass'
    ]).energy(5000)
    .id('thermal:machines/smelter/smelter_glass_enderium_1')

    //骨粉
    event.recipes.thermal.pulverizer([Item.of('minecraft:bone_meal', 4).withChance(1.0)],['minecraft:calcite'])
    .energy(2000)
    .id('thermal:pulverizer/calcite')

    //煤粉
    event.recipes.thermal.pyrolyzer(['8x mekanism:dust_coal'],['#forge:dusts/diamond'])
    .energy(10000)
    .id('thermal:pyrolyzer/dust_coal')

    //复合钢
    event.recipes.thermal.bottler(['kubejs:compositesteel_ingot'],['mekanism:ingot_steel',Fluid.of('kubejs:soul',1000)])
    .energy(1000)
    .id('thermal:bottler/compositesteel_ingot')

    //流体精炼机出硫磺
    event.recipes.thermal.refinery([Fluid.of('cyclic:magma',500), '12x thermal:sulfur'],[Fluid.of('lava', 1000)])
    .energy(5000)
    .id('thermal:refinery/lava')

    //六氟化铀
    event.recipes.thermal.centrifuge([Fluid.of('mekanism:uranium_hexafluoride', 4000),'ae2:lime_paint_ball'],['ae2:lime_lumen_paint_ball']).energy(30000).id('thermal:centrifuge/uranium_hexafluoride')

    //重水
    event.recipes.thermal.centrifuge([Fluid.of('mekanism:heavy_water', 4000)],['ae2:cyan_paint_ball']).energy(8000).id('thermal:centrifuge/heavy_water')

    //铁锭
    event.recipes.thermal.smelter(['minecraft:iron_ingot'],['kubejs:cast_iron'])
    .energy(2500)
    .id('thermal:smelter/iron_ingot')

    //镍
    event.recipes.thermal.smelter([Item.of('iron_ingot').withChance(1.0),Item.of('thermal:nickel_ingot').withChance(1.0),Item.of('thermal:nickel_ingot').withChance(0.5)],[
        'minecraft:iron_ore'
    ]).energy(3200).id('thermal:machines/smelter/smelter_iron_ore')

    event.recipes.thermal.smelter([Item.of('iron_ingot').withChance(1.0),Item.of('thermal:nickel_ingot')],[
        'minecraft:deepslate_iron_ore'
    ]).energy(3200).id('thermal:machines/smelter/smelter_deepslate_iron_ore')

    //烈焰血
    event.recipes.thermal.centrifuge([Fluid.of('kubejs:blaze_blood', 1000),'create:empty_blaze_burner'],['create:blaze_burner']).energy(3000).id('thermal:centrifuge/blaze_blood')

    //微光菇
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
    colors.forEach(color => {
        event.recipes.thermal.bottler([`botania:${color}_mushroom`],[`botania:${color}_petal`,Fluid.of('thermal:glowstone', 1000)])
        .energy(2000)
        .id(`thermal:bottler/${color}_mushroom`)
        event.recipes.thermal.insolator([Item.of(`2x botania:${color}_double_flower`).withChance(1.0)],[`botania:${color}_double_flower`])
        .energy(2000)
        .id(`thermal:insolator/${color}_double_flower`)
    })

    //生物柴油
    event.recipes.thermal.centrifuge([Fluid.of('immersiveengineering:biodiesel', 100)],['createaddition:biomass'])
    .energy(1600)
    .id('thermal:centrifuge/biodiesel')

    //红石块
    event.recipes.thermal.chiller(['minecraft:redstone_block'],[Fluid.of('thermal:redstone', 900)])
    .energy(2500)
    .id('thermal:machines/chiller/chiller_redstone_to_redstone_block')

    //苹果树
    event.recipes.thermal.insolator([Item.of('minecraft:apple').withChance(1.0),'kubejs:apple_sapling'],['kubejs:apple_sapling'])
    .energy(20000)
    .id('thermal:insolator/apple')

    //序列组装机
    event.replaceInput({id:'thermal:machine_crafter'},'thermal:machine_frame','create:brass_casing')

    //粉碎轮
    event.recipes.create.mechanical_crafting('create:crushing_wheel',[
        ' aaa ',
        'aabaa',
        'abbba',
        'aabaa',
        ' aaa '
    ],{
        a:'create:andesite_alloy',
        b:'#minecraft:planks'
    }).id('create:mechanical_crafting/crushing_wheel')

    //末影珍珠
    event.recipes.thermal.chiller(['ender_pearl'],[Fluid.of('thermal:ender',250),'thermal:chiller_ball_cast'])
    .energy(6000)
    .id('thermal:machines/chiller/chiller_ender_to_ender_pearl')

    //紫颂果
    event.recipes.thermal.insolator([Item.of('minecraft:chorus_fruit').withChance(1.1),Item.of('minecraft:chorus_flower').withChance(1.1)],['minecraft:chorus_flower'])
    .energy(10000)
    .id('thermal:machines/insolator/insolator_chorus_flower')

    //光帽
    event.recipes.thermal.insolator([Item.of('thermal:glowstone_mushroom_spores', 2).withChance(1.0)],'thermal:glowstone_mushroom_spores')
    .energy(16000)
    .id('thermal:machines/insolator/insolator_glowstone_mushroom')

    //紫色染色球
    event.recipes.thermal.smelter(['ae2:purple_lumen_paint_ball'],[
        '64x kubejs:matter_group',
        Item.of('mekanism:ultimate_chemical_tank', '{mekData:{GasTanks:[{stored:{amount:8192000L,gasName:"mekanismgenerators:fusion_fuel"}}]}}').weakNBT(),
        Item.of('mekanism:ultimate_fluid_tank', '{mekData:{FluidTanks:[{stored:{Amount:256000,FluidName:"mekanismgenerators:fusion_fuel"}}]}}').weakNBT()
    ])
    .energy(32000)
    .id('thermal:smelter/purple_lumen_paint_ball')

    //安山岩合泥
    event.recipes.thermal.smelter(['2x kubejs:andesite_dirt',],['2x kubejs:dcompressed_dirt','minecraft:andesite'])
    .energy(3200)
    .id('thermal:smelter/andesite_dirt')

    //
    event.recipes.thermal.smelter(Item.of('kubejs:mana_centrifuge').withChance(1.0),[
        'minecraft:cauldron',
        'botania:rune_earth',
        'exnihilosequentia:iron_mesh'
    ]).energy(3200)
    .id('thermal:smelter/mana_centrifuge')

    //
    event.recipes.thermal.smelter(Item.of('minecraft:cauldron').withChance(1.0),[
        '3x kubejs:cauldron_plate'
    ]).energy(1600)
    .id('thermal:smelter/cauldron')

    //
    event.recipes.thermal.smelter('kubejs:mana_andesite_gearbox_p',[
        'botania:diluted_pool',
        '4x create:gearbox',
        '4x botania:manasteel_block'
    ]).energy(3200)
    .id('thermal:smelter/mana_andesite_gearbox_p')

    //
    event.recipes.thermal.smelter(Item.of('minecraft:furnace').withChance(1.0),[
        '3x minecraft:smooth_stone',
        '5x minecraft:cobblestone'
    ]).energy(3200)
    .id('thermal:smelter/furnace')
    
    //
    event.recipes.thermal.smelter(Item.of('minecraft:blast_furnace').withChance(1.0),[
        'minecraft:furnace',
        '3x minecraft:smooth_stone',
        '5x minecraft:blackstone'
    ]).energy(3200)
    .id('thermal:smelter/blast_furnace')
    
    //
    event.recipes.thermal.smelter('botania:diluted_pool',[
        '5x kubejs:livingdirt'
    ]).energy(1600)
    .id('thermal:smelter/diluted_pool')
    
    //
    event.recipes.thermal.smelter('botania:mana_pool',[
        'botania:diluted_pool',
        '5x botania:livingrock'
    ]).energy(1600)
    .id('thermal:smelter/mana_pool')
})