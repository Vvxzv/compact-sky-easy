ServerEvents.recipes(event =>{
    //相互合成函数
    function sw(array){
        let n = array.length
        for(let i = 0; i < n; i++){
            let input = array[i]
            let output = array[(i+1)%n]
            let inputId = input.replace(/:/g, '_')
            let outputId = output.split(':')[0]
            event.shapeless(output, [input]).id('kubejs:' + outputId + '_from_' + inputId)
        }
    }

    //压缩泥土合成泥土
    event.shaped('27x minecraft:dirt', [
        'a'
    ], 
    {
        a: 'kubejs:compressed_dirt'
    })
    .id('kubejs:dirt')
    
    //泥棒
    event.shaped('4x kubejs:dirt_stick', [
        "a",
        "a"
    ],
    {
        a: 'dirt'
    })
    .id('kubejs:dirt_stick')

    //木棒合成木板
    event.shaped('oak_planks', [
        "aa",
        "aa"
    ],
    {
        a: 'stick'
    })
    .id('kubejs:oak_planks')

    //木板
    event.shapeless('4x oak_planks',['#oak_logs','#forge:tools/axes'])
    .damageIngredient({tag:'#forge:tools/axes'},1)
    .id('kubejs:oak_planks_from_oak_logs')

    //工作台
    event.shaped('crafting_table', [
        "a",
        "b"
    ],
    {
        a: 'kubejs:crafting_table_pannel',
        b: '#minecraft:logs'
    })
    .id('kubejs:crafting_table')

    //合成面板
    event.shaped('kubejs:crafting_table_pannel', [
        "aaa",
        "aaa",
        "aaa"
    ],
    {
        a: '#minecraft:logs'
    })
    .id('kubejs:crafting_table_pannel')

    //树皮方块
    event.shaped('3x kubejs:oak_bark_block', [
        "aaa",
        "aaa",
        "aaa"
    ],
    {
        a: 'stick'
    })
    .id('kubejs:oak_bark_block')

    //树皮方块合成木棍
    event.shaped('3x stick', [
        "a"
    ],
    {
        a: 'kubejs:oak_bark_block'
    })
    .id('kubejs:stick')

    //灌木
    event.shaped('dead_bush', [
        "a a",
        "aaa",
        " a "
    ],
    {
        a: 'stick'
    })
    .id('kubejs:dead_bush')

    //草皮
    event.shaped('kubejs:sod', [
        "aa",
        "aa"
    ],
    {
        a: 'grass'
    })
    .id('kubejs:sod')

    //木剪刀
    event.shaped('woodenshears:wshears_oak', [
        " a ",
        "baa",
        " b "
    ],
    {
        a: '#oak_logs',
        b: 'stick'
    })
    .id('kubejs:wshears_oak')

    //混合石
    event.shapeless('kubejs:mixtone',[
        'exnihilosequentia:andesite_pebble',
        'exnihilosequentia:basalt_pebble',
        'exnihilosequentia:diorite_pebble',
        'exnihilosequentia:granite_pebble'
    ])
    .id('kubejs:mixtone')

    //打火石
    event.replaceInput({id:'minecraft:flint_and_steel'},'minecraft:iron_ingot','minecraft:iron_nugget')

    //平滑石
    event.custom({
        type: "minecraft:campfire_cooking",
        cookingtime: 600,
        ingredient: {
          item: 'kubejs:mixtone'
        },
        result: 'minecraft:smooth_stone'
      })
      .id('kubejs:campfire_cooking/smooth_stone')

    event.smelting('minecraft:smooth_stone','kubejs:mixtone')
    .id('kubejs:smelting/smooth_stone')

    //冶炼普通矿岩
    event.blasting('3x iron_nugget','create:crimsite',1).id('kubejs:blasting/iron_nugget')
    event.blasting('3x gold_nugget','create:ochrum',1).id('kubejs:blasting/gold_nugget')
    event.blasting('3x thermal:tin_nugget','thermal:raw_tin_block',1).id('kubejs:blasting/tin_nugget')
    event.blasting('3x create:copper_nugget','create:veridium',1).id('kubejs:blasting/copper_nugget')

    //燧石
    event.shapeless('flint',['gravel','gravel','gravel']).id('kubejs:flint')

    //红尘块
    event.shaped('kubejs:red_dust_block',['aaa','aaa','aaa'],{a:'kubejs:red_dust'}).id('kubejs:red_dust_block')

    //防腐木板
    event.shaped('8x immersiveengineering:treated_wood_horizontal',[
        'aaa',
        'aba',
        'aaa'
    ],{
        a:'botania:livingwood_planks',
        b:'immersiveengineering:creosote_bucket'
    })
    .id('kubejs:treated_wood_horizontal')

    //钢脚手架
    event.shaped('4x immersiveengineering:steel_scaffolding_standard',[
        'aa',
        'bb'
    ],{
        a:'mekanism:ingot_steel',
        b:'immersiveengineering:stick_steel'
    })
    .id('kubejs:steel_scaffolding_standard')

    //人造皮革
    event.shapeless('immersiveengineering:ersatz_leather',['immersiveengineering:hemp_fabric'])
    .id('kubejs:ersatz_leather')    

    //硫化橡胶
    event.shapeless('3x thermal:cured_rubber',['kubejs:cured_rubber_bucket'])
    .replaceIngredient({item:'kubejs:cured_rubber_bucket'},'minecraft:bucket')
    .id('kubejs:cured_rubber')
    
    //砂轮
    event.replaceInput({id:'minecraft:grindstone'},'stone_slab','iron_ingot')

    //漏斗
    event.replaceInput({id:'minecraft:hopper'},'iron_ingot','botania:manasteel_ingot')

    //真空箱子 与 物品收集器 相互合成
    event.shapeless('thermal:device_collector',['cyclic:collector'])
    .id('kubejs:thermal_device_collector_form_cyclic_collector')
    event.shapeless('cyclic:collector',['thermal:device_collector'])
    .id('kubejs:cyclic_collector_collector_form_thermal_device')

    //桶
    event.replaceInput({id:'minecraft:bucket'},'iron_ingot','botania:manasteel_ingot')

    //流体漏斗
    event.replaceInput({id:'flopper:recipes/flopper'},'iron_ingot','botania:manasteel_ingot')

    //铁箱子
    event.shaped('ironchest:iron_chest',[
        'aaa',
        'aba',
        'aaa'
    ],{
        a:'botania:manasteel_ingot',
        b:'ironchest:copper_chest'
    })
    .id('kubejs:iron_chest')

    //安山合金块 合成 安山合金
    event.shapeless('9x create:andesite_alloy',['create:andesite_alloy_block']).id('kubejs:andesite_alloy')

    //传动杆
    event.shaped('4x create:shaft',[
        'a',
        'a'
    ],{
        a:'create:andesite_alloy'
    }).id('kubejs:shaft')

    //安山漏斗
    event.shaped('create:andesite_funnel',[
        'aaa',
        'aba',
        'aba'
    ],{
        a:'minecraft:andesite',
        b:'kubejs:gray_leather'
    })
    .id('kubejs:andesite_funnel')

    //溜槽
    event.shaped('create:chute',[
        'a',
        'b',
        'a'
    ],{
        a:'kubejs:cauldron_plate',
        b:'minecraft:iron_ingot'
    }).id('kubejs:chute')

    //传动箱
    event.shapeless('create:andesite_encased_shaft',['create:andesite_casing','create:shaft'])
    .keepIngredient({item:'create:andesite_casing'})
    .id('kubejs:andesite_encased_shaft')
    event.shapeless('create:brass_encased_shaft',['create:brass_casing','create:shaft'])
    .keepIngredient({item:'create:brass_casing'})
    .id('kubejs:brass_encased_shaft')

    //传动箱合成传动杆
    event.shapeless('create:shaft',['create:andesite_encased_shaft'])
    .id('kubejs:shaft_from_andesite_encased_shaft')
    event.shapeless('create:shaft',['create:brass_encased_shaft'])
    .id('kubejs:shaft_from_brass_encased_shaft')

    //魔力安山齿轮箱
    sw(['kubejs:mana_andesite_gearbox_s','kubejs:mana_andesite_gearbox_p'])

    //压缩物品分解
    event.shapeless('9x cobblestone','cyclic:compressed_cobblestone').id('kubejs:cobblestone_from_compressed')
    event.shapeless('9x gravel','kubejs:compressed_gravel').id('kubejs:gravel_from_compressed')
    event.shapeless('9x sand','kubejs:compressed_sand').id('kubejs:sand_from_compressed')

    //安山工作台
    event.shaped('kubejs:andesite_crafting_table',[
        ' a ',
        'bcb',
        ' d '
    ],{
        a:'kubejs:crafting_table_pannel',
        b:'create:shaft',
        c:'create:andesite_casing',
        d:'create:wrench'
    }).keepIngredient({item:'create:wrench'})
    .id('kubejs:andesite_crafting_table')

    //粉碎磁铁
    event.shapeless('kubejs:cracked_magnet_block',['kubejs:magnet_block','#exnihilosequentia:hammer'])
    .keepIngredient({item:'exnihilosequentia:golden_hammer'})
    .damageIngredient({tag:'#kubejs:hammers'}, 1)
    .id('kubejs:cracked_magnet_block')

    //木炭粉
    event.shapeless('mekanism:dust_charcoal',['minecraft:charcoal','#exnihilosequentia:hammer'])
    .keepIngredient({item:'exnihilosequentia:golden_hammer'})
    .damageIngredient({tag:'#kubejs:hammers'}, 1)
    .id('kubejs:dust_charcoal')

    //铸铁锭
    event.replaceOutput({type:'blasting'},'iron_ingot','kubejs:cast_iron')
    event.replaceOutput({type:'smelting'},'iron_ingot','kubejs:cast_iron')

    //生铁锭
    event.replaceOutput({type:'blasting'},'mekanism:ingot_steel','kubejs:pig_iron')
    event.replaceOutput({type:'smelting'},'mekanism:ingot_steel','kubejs:pig_iron')

    //锌粒
    event.blasting('3x create:zinc_nugget','create:asurine',1).id('kubejs:blasting/zinc_nugget')

    //鱼竿
    event.replaceInput({id:'minecraft:fishing_rod'},'minecraft:string','botania:mana_string')

    //导电接线柱
    event.shaped('create_new_age:electrical_connector',[
        'ab',
        'ba',
        'ab'
    ],{
        a:'create:copper_nugget',
        b:'minecraft:redstone'
    }).id('kubejs:electrical_connector_0')

    event.shaped('create_new_age:electrical_connector',[
        'ba',
        'ab',
        'ba'
    ],{
        a:'create:copper_nugget',
        b:'minecraft:redstone'
    }).id('kubejs:electrical_connector_1')

    //石手杖
    event.replaceInput({id:'constructionwand:stone_wand'},'cobblestone','kubejs:compressed_dirt')

    //铁手杖
    event.replaceInput({id:'constructionwand:iron_wand'},'iron_ingot','botania:manasteel_ingot')

    //钻石手杖
    event.replaceInput({id:"constructionwand:diamond_wand"},'minecraft:diamond','mekanism:ingot_steel')

    //无尽手杖
    event.replaceInput({id:"constructionwand:infinity_wand"},'minecraft:nether_star','botania:terrasteel_ingot')
    event.shapeless('constructionwand:infinity_wand',['kubejs:angel_wand']).id('kubejs:infinity_wand')

    //天使手杖
    event.shapeless('kubejs:angel_wand',['constructionwand:infinity_wand','minecraft:glass']).id('kubejs:angel_wand')

    //侦测器
    event.shaped('minecraft:observer',[
        'aaa',
        'bbc',
        'aaa'
    ],{
        a:'cyclic:compressed_cobblestone',
        c:'create:electron_tube',
        b:'thermal:quartz_dust'
    }).id('kubejs:observer')

    //抽屉
    sw(['storagedrawers:drawer_key','storagedrawers:quantify_key','storagedrawers:shroud_key','functionalstorage:configuration_tool','functionalstorage:linking_tool'])
    sw(['functionalstorage:oak_1','storagedrawers:oak_full_drawers_1'])
    sw(['functionalstorage:oak_2','storagedrawers:oak_full_drawers_2'])
    sw(['functionalstorage:oak_4','storagedrawers:oak_full_drawers_4'])

    //黄铜齿轮箱
    /*
    event.shaped('kubejs:mana_brass_gearbox_p',[
        'aba',
        'bcb',
        'aba'
    ],{
        a:'create:brass_casing',
        b:'kubejs:mana_andesite_gearbox_p',
        c:'botania:terrasteel_ingot'
    }).id('kubejs:mana_brass_gearbox_p')

    sw(['kubejs:mana_brass_gearbox_p','kubejs:mana_brass_gearbox_s'])
    */
   sw(['kubejs:mana_brass_gearbox_p','kubejs:mana_brass_gearbox_s'])

    //紫珀块
    event.shaped('minecraft:purpur_block',[
        'aaa','aaa','aaa'
    ],{
        a:'kubejs:purpur_ingot'
    }).id('kubejs:purpur_block')

    //末地蛋糕
    event.shaped('exnihilosequentia:end_cake',[
        'aaa',
        'aba'
    ],{
        a:'minecraft:chorus_fruit',
        b:'createaddition:cake_base_baked'
    }).id('kubejs:end_cake')

    //冰爆弹
    event.shapeless('thermal:ice_charge',['#minecraft:coals','minecraft:gunpowder','mekanism:dust_fluorite'])
    .id('kubejs:ice_charge')

    //高级青金石结晶控制器
    event.shaped('kubejs:advanced_lapis_crystallize_controller',[
        'aba',
        'bcb',
        'aba'
    ],{
        a:'create:brass_casing',
        c:'kubejs:liquid_mana_bucket',
        b:'minecraft:lapis_block'
    }).replaceIngredient({item:'kubejs:liquid_mana_bucket'},'minecraft:bucket')
    .id('kubejs:advanced_lapis_crystallize_controller')

    //凋零机
    event.shaped('kubejs:wither_machine',[
        'aba',
        'cde',
        'aba'
    ],{
        a:'mekanism:steel_casing',
        b:'mekanism:elite_control_circuit',
        c:'minecraft:netherite_sword',
        d:'minecraft:nether_star',
        e:'minecraft:netherite_axe'
    }).id('kubejs:wither_machine')

    //骷髅头
    event.shaped('minecraft:skeleton_skull',[
        'aaa',
        'a a',
        'aaa'
    ],{
        a:'minecraft:bone_block'
    }).id('kubejs:skeleton_skull')

    //光通黄绿色染色球
    event.shaped('ae2:lime_lumen_paint_ball',[
        'aaa',
        'aba',
        'aaa'
    ],{
        a:Item.of('mekanism:basic_fluid_tank', '{mekData:{FluidTanks:[{stored:{Amount:32000,FluidName:"mekanism:uranium_hexafluoride"}}]}}').weakNBT(),
        b:'ae2:matter_ball'
    }).id('kubejs:lime_lumen_paint_ball_0')

    event.shaped('ae2:lime_lumen_paint_ball',[
        'aaa',
        'aba',
        'aaa'
    ],{
        b:'ae2:lime_paint_ball',
        a:'ae2:matter_ball'
    }).id('kubejs:lime_lumen_paint_ball_1')

    //潜影壳
    event.shaped('minecraft:shulker_shell',[
        'aaa',
        'a a'
    ],{
        a:'kubejs:purpur_ingot'
    }).id('kubejs:shulker_shell')

    //通量
    event.shapeless('fluxnetworks:flux_core',[
        'minecraft:obsidian',
        'fluxnetworks:flux_dust',
        'botania:pixie_dust'
    ]).id('kubejs:flux_core')

    //蘑菇
    event.shapeless('minecraft:brown_mushroom','botania:brown_mushroom').id('kubejs:brown_mushroom')
    event.shapeless('minecraft:red_mushroom','botania:red_mushroom').id('kubejs:red_mushroom')

    //火焰弹
    event.shapeless('minecraft:fire_charge',['minecraft:coal','minecraft:blaze_powder','minecraft:gunpowder'])
    .id('minecraft:fire_charge')

    //水槽
    event.shaped('cookingforblockheads:sink',[
        'aaa',
        'bcb',
        'ddd'
    ],{
        a:'minecraft:iron_ingot',
        b:'minecraft:water_bucket',
        c:'thermal:device_water_gen',
        d:'minecraft:terracotta'
    }).id('cookingforblockheads:sink')

    //抽屉升级
    event.replaceInput({id:'storagedrawers:obsidian_storage_upgrade'},'obsidian','cyclic:compressed_cobblestone')

    event.replaceInput({id:'storagedrawers:iron_storage_upgrade'},'iron_ingot','botania:manasteel_ingot')
    event.replaceInput({id:'storagedrawers:iron_storage_upgrade'},'storagedrawers:upgrade_template','storagedrawers:obsidian_storage_upgrade')

    event.replaceInput({id:'storagedrawers:gold_storage_upgrade'},'storagedrawers:upgrade_template','storagedrawers:iron_storage_upgrade')

    event.replaceInput({id:'storagedrawers:diamond_storage_upgrade'},'storagedrawers:upgrade_template','storagedrawers:gold_storage_upgrade')
    event.replaceInput({id:'storagedrawers:diamond_storage_upgrade'},'diamond', 'minecraft:lapis_block')

    event.replaceInput({id:'storagedrawers:emerald_storage_upgrade'},'storagedrawers:upgrade_template','storagedrawers:diamond_storage_upgrade')

    //流体抽屉
    //sw(['fluiddrawerslegacy:fluiddrawer','functionalstorage:fluid_1'])

    //磁铁
    event.shaped('2x create_new_age:netherite_magnet',[
        'aca',
        'cbc',
        'aca'
    ],{
        c:'create_new_age:layered_magnet',
        b:'create_new_age:overcharged_diamond',
        a:'kubejs:magnet_block'
    }).id('create_new_age:shaped/netherite_magnet')

    event.replaceInput({id:'create_new_age:shaped/fluxuated_magnetite'},'create_new_age:magnetite_block','kubejs:magnet_block')

    //充电钻石
    event.custom({
        "type": "create_new_age:energising",
        "energy_needed": 10000,
        "ingredients": [
            {
                "item": 'botania:mana_diamond'
            }
        ],
        "results": [
            {
                "item": "create_new_age:overcharged_diamond"
            }
        ]
    })

    //抽屉控制器
    event.replaceInput({id:'storagedrawers:controller'},'diamond','botania:terrasteel_ingot')
    event.replaceInput({id:'storagedrawers:controller'},'minecraft:comparator','minecraft:redstone_torch')

    //控制器传动
    event.replaceInput({id:'storagedrawers:controller_slave'},'minecraft:comparator','minecraft:redstone_torch')

    //存储控制器
    event.replaceInput({id:'functionalstorage:storage_controller'},'minecraft:comparator','botania:terrasteel_ingot')
    event.replaceInput({id:'functionalstorage:storage_controller'},'quartz_block','minecraft:redstone_torch')

    event.replaceInput({id:'functionalstorage:controller_extension'},'quartz_block','minecraft:gold_ingot')

    //抽屉升级 抽取 输出 收集 红石
    event.shaped('functionalstorage:collector_upgrade',[
        'a',
        'b',
        'a'
    ],{
        a:'minecraft:hopper',
        b:'#functionalstorage:drawer'
    }).id('functionalstorage:collector_upgrade')

    event.shaped('functionalstorage:puller_upgrade',[
        'a',
        'b'
    ],{
        a:'minecraft:hopper',
        b:'#functionalstorage:drawer'
    }).id('functionalstorage:puller_upgrade')

    event.shaped('functionalstorage:pusher_upgrade',[
        'b',
        'a'
    ],{
        a:'minecraft:hopper',
        b:'#functionalstorage:drawer'
    }).id('functionalstorage:pusher_upgrade')

    event.shaped('functionalstorage:redstone_upgrade',[
        'a',
        'b'
    ],{
        a:'minecraft:redstone_block',
        b:'#functionalstorage:drawer'
    }).id('functionalstorage:redstone_upgrade')

    //苹果树苗
    event.shaped('kubejs:apple_sapling',[
        'aaa',
        'aba',
        'aaa'
    ],{
        a:'apple',
        b:'oak_sapling'
    }).id('kubejs:apple_sapling')

    //纠缠
    event.replaceInput({mod:'entangled'},'minecraft:ender_pearl','fluxnetworks:flux_dust')
    event.replaceInput({id:'entangled:item'},'diamond','botania:terrasteel_ingot')

    //石英
    event.shapeless('4x minecraft:quartz',['minecraft:quartz_bricks']).id('kubejs:quartz')

    //微光蘑菇，染料
    event.replaceInput({id:'botania:dye_red'},'botania:red_mushroom','minecraft:red_mushroom')
    event.replaceInput({id:'botania:dye_brown'},'botania:brown_mushroom','minecraft:brown_mushroom')

    event.shapeless('minecraft:brown_dye','botania:brown_petal').id('kubejs:brown_dye')
    event.shapeless('minecraft:red_dye','botania:red_petal').id('kubejs:red_dye')

    //书
    event.replaceInput({id:'minecraft:book'},'minecraft:leather','#forge:leather')

    //铜升级
    event.shaped('functionalstorage:copper_upgrade',[
        'aaa',
        'aba',
        'aaa'
    ],{
        a:'minecraft:copper_ingot',
        b:'storagedrawers:diamond_storage_upgrade'
    }).id('kubejs:copper_upgrade')

    //物质团 物质球
    event.shaped('kubejs:matter_group',[
        'aaa',
        'aaa',
        'aaa'
    ],{
        a:'ae2:matter_ball'
    }).id('kubejs:matter_group')

    event.shapeless('9x ae2:matter_ball','kubejs:matter_group').id('kubejs:matter_ball')

})