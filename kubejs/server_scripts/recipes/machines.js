ServerEvents.recipes(event => {
    //磁铁机
    event.recipes.custommachinery.custom_machine("kubejs:machine_magnet_block",30)
    .runCommandOnStart("/function kubejs:magnet/magnet")


    //魔力离心机
    event.recipes.custommachinery.custom_machine('kubejs:mana_centrifuge',200)
    .requireMana(100)
    .requireItem('minecraft:gunpowder')
    .produceItem('thermal:niter_dust').chance(0.75)
    .produceItem('mekanism:dust_charcoal').chance(0.15)
    .produceItem('thermal:sulfur_dust').chance(0.1)

    event.recipes.custommachinery.custom_machine('kubejs:mana_centrifuge',100)
    .requireMana(100)
    .requireItem('minecraft:gravel')
    .produceItem('minecraft:sand').chance(0.5)
    .produceItem('minecraft:flint').chance(0.1)
    .produceItem('4x exnihilosequentia:iron_pieces').chance(0.8)
    .produceItem('exnihilosequentia:gold_pieces').chance(0.6)
    .produceItem('2x exnihilosequentia:copper_pieces').chance(0.5)
    .produceItem('exnihilosequentia:tin_pieces').chance(0.3)

    event.recipes.custommachinery.custom_machine('kubejs:mana_centrifuge',100)
    .requireMana(100)
    .requireItem('exnihilosequentia:dust')
    .produceItem('minecraft:bone_meal').chance(0.2)
    .produceItem('thermal:apatite_dust').chance(0.4)
    .produceItem('thermal:lapis_dust').chance(0.01)
    .produceItem('thermal:emerald_dust').chance(0.005)

    event.recipes.custommachinery.custom_machine('kubejs:mana_centrifuge',100)
    .requireMana(100)
    .requireItem('create:blaze_burner')
    .produceItem('exnihilosequentia:blaze_doll').chance(0.5)
    .produceItem('create:empty_blaze_burner')

    event.recipes.custommachinery.custom_machine('kubejs:mana_centrifuge',20)
    .requireMana(1500)
    .requireItem('create:refined_radiance')
    .produceItem('minecraft:nether_star').chance(0.01)
    .produceItem('create:refined_radiance').chance(0.9)


    //魔力灌装机
        //橡胶树苗
    event.recipes.custommachinery.custom_machine('kubejs:mana_bottler',400)
    .requireMana(2000)
    .requireFluid(Fluid.of('thermal:latex', 1000))
    .requireItem('jungle_sapling')
    .produceItem('thermal:rubberwood_sapling')

        //粘土
    event.recipes.custommachinery.custom_machine('kubejs:mana_bottler',100)
    .requireMana(200)
    .requireFluid(Fluid.of('minecraft:water', 1000))
    .requireItem('exnihilosequentia:dust')
    .produceItem('clay')

        //魔力钢锭
    event.recipes.custommachinery.custom_machine('kubejs:mana_bottler',20)
    .requireMana(1000)
    .requireItem('iron_nugget')
    .produceItem('botania:manasteel_ingot')

        //泰拉钢
    event.recipes.custommachinery.custom_machine('kubejs:mana_bottler',200)
    .requireMana(10000)
    .requireFluid(Fluid.of('kubejs:ferrous_sulfate_solution', 100))
    .requireItem('mekanism:ingot_steel')
    .produceItem('botania:terrasteel_ingot')

        //硫磺
    event.recipes.custommachinery.custom_machine('kubejs:mana_bottler',20)
    .requireMana(1000)
    .requireFluid(Fluid.of('lava', 1000))
    .requireItem('minecraft:charcoal')
    .produceItem('10x thermal:sulfur')

        //液态魔力
    event.recipes.custommachinery.custom_machine('kubejs:mana_bottler',200)
    .requireMana(5000)
    .requireItem('minecraft:bucket')
    .produceItem('kubejs:liquid_mana_bucket')
    
        //树叶
    event.recipes.custommachinery.custom_machine('kubejs:mana_bottler', 20)
    .requireMana(100)
    .requireFluid(Fluid.of('water', 500))
    .requireItem('minecraft:oak_leaves')
    .produceItem('16x minecraft:oak_leaves')

        //瓶装末地空气
    event.recipes.custommachinery.custom_machine('kubejs:mana_bottler', 20)
    .requireMana(5000)
    .requireItem('minecraft:glass_bottle')
    .dimensionWhitelist('minecraft:the_end')
    .produceItem('botania:ender_air_bottle')

        //瓶装下界空气
    event.recipes.custommachinery.custom_machine('kubejs:mana_bottler', 20)
    .requireMana(5000)
    .requireItem('minecraft:glass_bottle')
    .dimensionWhitelist('minecraft:the_nether')
    .produceItem('kubejs:nether_air_bottle')


    //魔力发电机
    event.recipes.custommachinery.custom_machine('kubejs:mana_electric_generator',100)
    .requireMana(100)
    .produceEnergyPerTick(10)


    //魔力合成台
        //稀释的魔力池
    event.recipes.custommachinery.custom_machine('kubejs:mana_crafting_table',100)
    .requireMana(1000)
    .requireItem('kubejs:livingdirt',"slot4").requireItem('kubejs:livingdirt',"slot6")
    .requireItem('kubejs:livingdirt',"slot7").requireItem('kubejs:livingdirt',"slot8").requireItem('kubejs:livingdirt',"slot9")
    .produceItem('botania:diluted_pool',"slot10")

        //魔力池
    event.recipes.custommachinery.custom_machine('kubejs:mana_crafting_table',100)
    .requireMana(1000)
    .requireItem('botania:livingrock',"slot4").requireItem('botania:diluted_pool',"slot5").requireItem('botania:livingrock',"slot6")
    .requireItem('botania:livingrock',"slot7").requireItem('botania:livingrock',"slot8").requireItem('botania:livingrock',"slot9")
    .produceItem('botania:mana_pool',"slot10")

        //炼药锅
    event.recipes.custommachinery.custom_machine('kubejs:mana_crafting_table',100)
    .requireMana(1000)
    .requireItem('kubejs:cauldron_plate',"slot4").requireItem('kubejs:cauldron_plate',"slot6").requireItem('kubejs:cauldron_plate',"slot8")
    .produceItem('minecraft:cauldron',"slot10")

        //窑砖
    event.recipes.custommachinery.custom_machine('kubejs:mana_crafting_table',100)
    .requireMana(500)
    .requireItem('kubejs:red_dust',"slot5").requireItem('minecraft:sandstone',"slot8")
    .produceItem('immersiveengineering:alloybrick',"slot10")

        //魔力离心机
    event.recipes.custommachinery.custom_machine('kubejs:mana_crafting_table',100)
    .requireMana(1000)
    .requireItem('botania:manasteel_ingot',"slot1").requireItem('botania:rune_earth',"slot2").requireItem('botania:manasteel_ingot',"slot3")
    .requireItem('botania:manasteel_ingot',"slot4").requireItem('exnihilosequentia:iron_mesh',"slot5").requireItem('botania:manasteel_ingot',"slot6")
    .requireItem('botania:manasteel_ingot',"slot7").requireItem('cauldron',"slot8").requireItem('botania:manasteel_ingot',"slot9")
    .produceItem('kubejs:mana_centrifuge',"slot10")

        //魔力灌装机
    event.recipes.custommachinery.custom_machine('kubejs:mana_crafting_table',100)
    .requireMana(1000)
    .requireItem('botania:manasteel_ingot',"slot1").requireItem('botania:rune_water',"slot2").requireItem('botania:manasteel_ingot',"slot3")
    .requireItem('botania:manasteel_ingot',"slot4").requireItem('bucket',"slot5").requireItem('botania:manasteel_ingot',"slot6")
    .requireItem('botania:manasteel_ingot',"slot7").requireItem('botania:diluted_pool',"slot8").requireItem('botania:manasteel_ingot',"slot9")
    .produceItem('kubejs:mana_bottler',"slot10")

        //魔力发电机
    event.recipes.custommachinery.custom_machine('kubejs:mana_crafting_table',100)
    .requireMana(1000)
    .requireItem('botania:manasteel_ingot',"slot1").requireItem('thermal:rf_coil',"slot2").requireItem('botania:manasteel_ingot',"slot3")
    .requireItem('botania:manasteel_ingot',"slot4").requireItem('furnace',"slot5").requireItem('botania:manasteel_ingot',"slot6")
    .requireItem('botania:manasteel_ingot',"slot7").requireItem('botania:diluted_pool',"slot8").requireItem('botania:manasteel_ingot',"slot9")
    .produceItem('kubejs:mana_electric_generator',"slot10")

        //熔炉
    event.recipes.custommachinery.custom_machine('kubejs:mana_crafting_table',100)
    .requireMana(1000)
    .requireItem('minecraft:cobblestone',"slot1")
    .requireItem('minecraft:cobblestone',"slot2")
    .requireItem('minecraft:cobblestone',"slot3")
    .requireItem('minecraft:cobblestone',"slot4")
    .requireItem('minecraft:cobblestone',"slot6")
    .requireItem('minecraft:smooth_stone',"slot7")
    .requireItem('minecraft:smooth_stone',"slot8")
    .requireItem('minecraft:smooth_stone',"slot9")
    .produceItem('minecraft:furnace',"slot10")

        //高炉
    event.recipes.custommachinery.custom_machine('kubejs:mana_crafting_table',100)
    .requireMana(1000)
    .requireItem('minecraft:blackstone',"slot1")
    .requireItem('minecraft:blackstone',"slot2")
    .requireItem('minecraft:blackstone',"slot3")
    .requireItem('minecraft:blackstone',"slot4")
    .requireItem('minecraft:furnace',"slot5")
    .requireItem('minecraft:blackstone',"slot6")
    .requireItem('minecraft:smooth_stone',"slot7")
    .requireItem('minecraft:smooth_stone',"slot8")
    .requireItem('minecraft:smooth_stone',"slot9")
    .produceItem('minecraft:blast_furnace',"slot10")

        //魔力安山齿轮箱
    event.recipes.custommachinery.custom_machine('kubejs:mana_crafting_table',100)
    .requireMana(1000)
    .requireItem('botania:manasteel_block',"slot1")
    .requireItem('create:gearbox',"slot2")
    .requireItem('botania:manasteel_block',"slot3")
    .requireItem('create:gearbox',"slot4")
    .requireItem('botania:diluted_pool',"slot5")
    .requireItem('create:gearbox',"slot6")
    .requireItem('botania:manasteel_block',"slot7")
    .requireItem('create:gearbox',"slot8")
    .requireItem('botania:manasteel_block',"slot9")
    .produceItem('kubejs:mana_andesite_gearbox_p',"slot10")

        //桶
    event.recipes.custommachinery.custom_machine('kubejs:mana_crafting_table',100)
    .requireMana(1000)
    .requireItem('minecraft:iron_nugget',"slot1")
    .requireItem('minecraft:iron_nugget',"slot3")
    .requireItem('minecraft:iron_nugget',"slot4")
    .requireItem('minecraft:iron_nugget',"slot6")
    .requireItem('minecraft:iron_nugget',"slot7")
    .requireItem('minecraft:iron_nugget',"slot8")
    .requireItem('minecraft:iron_nugget',"slot9")
    .produceItem('minecraft:bucket',"slot10")


    //安山产魔机
    event.recipes.custommachinery.custom_machine('kubejs:andesite_mana_generator',1)
    .requireSU(32,8)
    .produceMana(50)

    //黄铜产魔机
    event.recipes.custommachinery.custom_machine('kubejs:brass_mana_generator',1)
    .requireSU(256,8)
    .produceMana(1200)

    //魔力安山齿轮箱
    event.recipes.custommachinery.custom_machine('kubejs:mana_andesite_gearbox_p',1)
    .requireMana(20)
    .produceSU(16,256)

    event.recipes.custommachinery.custom_machine('kubejs:mana_andesite_gearbox_s', 1)
    .requireMana(20)
    .produceSU(16,256)

    //魔力黄铜齿轮箱
    event.recipes.custommachinery.custom_machine('kubejs:mana_brass_gearbox_p', 1)
    .requireMana(60)
    .produceSU(256,256)

    event.recipes.custommachinery.custom_machine('kubejs:mana_brass_gearbox_s', 1)
    .requireMana(60)
    .produceSU(256,256)

    //安山工作台
        //传动杆
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',100)
    .requireSU(32,8)
    .requireItem('create:andesite_alloy',"slot5")
    .requireItem('create:andesite_alloy',"slot8")
    .produceItem('8x create:shaft','slot10')

        //小齿轮
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',100)
    .requireSU(32,8)
    .requireItem('create:shaft',"slot1")
    .requireItem('minecraft:oak_planks',"slot2")
    .produceItem('create:cogwheel','slot10')

        //大齿轮
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',100)
    .requireSU(32,8)
    .requireItem('create:shaft',"slot1")
    .requireItem('minecraft:oak_planks',"slot2")
    .requireItem('minecraft:oak_planks',"slot3")
    .produceItem('create:large_cogwheel','slot10')
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',100)
    .requireSU(32,8)
    .requireItem('create:cogwheel',"slot1")
    .requireItem('minecraft:oak_planks',"slot2")
    .produceItem('create:large_cogwheel','slot10')

        //动力辊压机
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',600)
    .requireSU(32,8)
    .requireItem('create:shaft',"slot2")
    .requireItem('create:andesite_casing',"slot5")
    .requireItem('minecraft:iron_block',"slot8")
    .produceItem('create:mechanical_press','slot10')

        //金制框架
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table', 600)
    .requireSU(32,8)
    .requireItem('create:golden_sheet',"slot2")
    .requireItem('create:golden_sheet',"slot4")
    .requireItem('create:golden_sheet',"slot6")
    .requireItem('create:golden_sheet',"slot8")
    .produceItem('4x kubejs:golden_frame','slot10')

        //机械手
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',600)
    .requireSU(32,8)
    .requireItem('create:shaft',"slot2")
    .requireItem('create:andesite_casing',"slot5")
    .requireItem('kubejs:golden_hand',"slot8")
    .produceItem('create:deployer','slot10')

        //动力锯
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',600)
    .requireSU(32,8)
    .requireItem('create:iron_sheet',"slot2")
    .requireItem('create:iron_sheet',"slot4")
    .requireItem('minecraft:iron_ingot',"slot5")
    .requireItem('create:iron_sheet',"slot6")
    .requireItem('create:andesite_casing',"slot8")
    .produceItem('create:mechanical_saw','slot10')

        //齿轮箱
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',100)
    .requireSU(32,8)
    .requireItem('create:cogwheel',"slot2")
    .requireItem('create:cogwheel',"slot4")
    .requireItem('create:andesite_casing',"slot5")
    .requireItem('create:cogwheel',"slot6")
    .requireItem('create:cogwheel',"slot8")
    .produceItem('create:gearbox','slot10')

        //离合器
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',100)
    .requireSU(32,8)
    .requireItem('create:andesite_casing',"slot1")
    .requireItem('create:shaft',"slot2")
    .requireItem('minecraft:redstone',"slot3")
    .produceItem('create:clutch','slot10')

        //反转齿轮箱
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',100)
    .requireSU(32,8)
    .requireItem('create:andesite_casing',"slot1")
    .requireItem('create:cogwheel',"slot2")
    .requireItem('minecraft:redstone',"slot3")
    .produceItem('create:gearshift','slot10')

        //链式传动箱
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',100)
    .requireSU(32,8)
    .requireItem('create:andesite_casing',"slot1")
    .requireItem('minecraft:iron_nugget',"slot2")
    .requireItem('minecraft:iron_nugget',"slot3")
    .requireItem('minecraft:iron_nugget',"slot4")
    .produceItem('create:encased_chain_drive','slot10')

        //石磨
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',600)
    .requireSU(32,8)
    .requireItem('create:cogwheel',"slot2")
    .requireItem('create:andesite_casing',"slot5")
    .requireItem('minecraft:smooth_stone',"slot8")
    .produceItem('create:millstone','slot10')

        //钻头
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',600)
    .requireSU(32,8)
    .requireItem('create:andesite_alloy',"slot2")
    .requireItem('create:andesite_casing',"slot8")
    .requireItem('create:andesite_alloy',"slot4")
    .requireItem('create:andesite_alloy',"slot6")
    .requireItem('botania:manasteel_block',"slot5")
    .produceItem('create:mechanical_drill','slot10')

        //动力犁
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',600)
    .requireSU(32,8)
    .requireItem('botania:manasteel_ingot',"slot1")
    .requireItem('botania:manasteel_ingot',"slot2")
    .requireItem('botania:manasteel_ingot',"slot3")
    .requireItem('create:andesite_alloy',"slot4")
    .requireItem('create:andesite_alloy',"slot5")
    .requireItem('create:andesite_alloy',"slot6")
    .requireItem('create:andesite_casing',"slot8")
    .produceItem('create:mechanical_plough','slot10')

        //收割机
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',600)
    .requireSU(32,8)
    .requireItem('botania:manasteel_ingot',"slot5")
    .requireItem('botania:manasteel_ingot',"slot2")
    .requireItem('create:andesite_alloy',"slot1")
    .requireItem('create:andesite_alloy',"slot3")
    .requireItem('create:andesite_alloy',"slot4")
    .requireItem('create:andesite_alloy',"slot6")
    .requireItem('create:andesite_casing',"slot8")
    .produceItem('create:mechanical_harvester','slot10')

        //安山漏斗
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',100)
    .requireSU(32,8)
    .requireItem('create:andesite_alloy',"slot1")
    .requireItem('create:andesite_alloy',"slot2")
    .requireItem('thermal:cured_rubber',"slot4")
    .requireItem('thermal:cured_rubber',"slot5")
    .produceItem('6x create:andesite_funnel','slot10')

        //鼓风机
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',600)
    .requireSU(32,8)
    .requireItem('create:shaft',"slot2")
    .requireItem('create:andesite_casing',"slot5")
    .requireItem('create:propeller',"slot8")
    .produceItem('create:encased_fan','slot10')

        //布谷鸟闹钟
    event.recipes.custommachinery.custom_machine('kubejs:andesite_crafting_table',600)
    .requireSU(32,8)
    .requireItem('minecraft:oak_planks',"slot2")
    .requireItem('create:andesite_casing',"slot5")
    .requireItem('minecraft:clock',"slot8")
    .produceItem('create:cuckoo_clock','slot10')


    //黄铜工作台
        //智能溜槽
    event.recipes.custommachinery.custom_machine('kubejs:brass_crafting_table',100)
    .requireSU(64,8)
    .requireItem('create:brass_sheet',"slot2")
    .requireItem('create:chute',"slot5")
    .requireItem('create:electron_tube',"slot8")
    .produceItem('create:smart_chute','slot10')
    .id('create:crafting/kinetics/smart_chute')

        //升降机
    event.recipes.custommachinery.custom_machine('kubejs:brass_crafting_table',100)
    .requireSU(64,8)
    .requireItem('create:brass_casing',"slot2")
    .requireItem('thermal:cured_rubber_block',"slot5")
    .requireItem('create:iron_sheet',"slot8")
    .produceItem('create:elevator_pulley','slot10')
    .id('create:crafting/kinetics/elevator_pulley')

        //动力合成器
    event.recipes.custommachinery.custom_machine('kubejs:brass_crafting_table',100)
    .requireSU(64,8)
    .requireItem('kubejs:brass_crafting_table',"slot5")
    .requireItem('create:electron_tube',"slot2")
    .requireItem('create:cogwheel',"slot8")
    .produceItem('9x create:mechanical_crafter','slot10')
    .id('create:crafting/kinetics/mechanical_crafter')

        //黄铜漏斗
    event.recipes.custommachinery.custom_machine('kubejs:brass_crafting_table',100)
    .requireSU(64,8)
    .requireItem('create:electron_tube',"slot2")
    .requireItem('create:brass_ingot',"slot5")
    .requireItem('thermal:cured_rubber',"slot8")
    .produceItem('4x create:brass_funnel','slot10')
    .id('create:crafting/kinetics/brass_funnel')

        //黄铜隧道
    event.recipes.custommachinery.custom_machine('kubejs:brass_crafting_table',100)
    .requireSU(64,8)
    .requireItem('create:electron_tube',"slot1")
    .requireItem('create:brass_ingot',"slot4")
    .requireItem('create:brass_ingot',"slot5")
    .requireItem('thermal:cured_rubber',"slot7")
    .requireItem('thermal:cured_rubber',"slot8")
    .produceItem('4x create:brass_tunnel','slot10')
    .id('create:crafting/kinetics/brass_tunnel')

        //智能侦测器
    event.recipes.custommachinery.custom_machine('kubejs:brass_crafting_table',100)
    .requireSU(64,8)
    .requireItem('create:electron_tube',"slot2")
    .requireItem('create:brass_casing',"slot5")
    .requireItem('minecraft:observer',"slot8")
    .produceItem('create:content_observer','slot10')
    .id('create:crafting/kinetics/content_observer')

        //存量转信器
    event.recipes.custommachinery.custom_machine('kubejs:brass_crafting_table',100)
    .requireSU(64,8)
    .requireItem('create:electron_tube',"slot2")
    .requireItem('create:brass_casing',"slot5")
    .requireItem('minecraft:comparator',"slot8")
    .produceItem('create:stockpile_switch','slot10')
    .id('create:crafting/kinetics/stockpile_switch')


    //深层矿生成机
    event.recipes.custommachinery.custom_machine('kubejs:deepore_gen',200)
    .requirePosition("", "(,0)", "")
    .requireBlock('minecraft:deepslate',true,0,1,0,0,1,0)
    .requireMana(2000)
    .requireFluid(Fluid.of('minecraft:water',1000))
    .requireFluid(Fluid.of('minecraft:lava',500))
    .runCommandOnEnd('/function kubejs:deeporegen')

    //青金石结晶机
    event.recipes.custommachinery.custom_machine('kubejs:advanced_lapis_crystallize_controller',600)
    .requireStructure([
        [
            'aaa',
            'aaa',
            'aaa'
        ],
        [
            'aea',
            'ece',
            'ama'
        ],
        [
            'aaa',
            'ada',
            'aaa'
        ],
        [
            '   ',
            ' b ',
            '   '
        ]
    ],{
        a:'create:brass_casing',
        b:'minecraft:water',
        c:'kubejs:lapis_crystallize',
        d:'flopper:flopper',
        e:'minecraft:glass'
    })
    .runCommandOnEnd('/function kubejs:lapis/lapis')
    .produceItem('minecraft:lapis_block')

    //凋零机
    event.recipes.custommachinery.custom_machine('kubejs:wither_machine', 200)
    .requireStructure([
        [
            'aaaaa',
            'abbba',
            'abbba',
            'abbba',
            'aamaa'
        ],
        [
            'abbba',
            'b   b',
            'b c b',
            'b   b',
            'abbba'
        ],
        [
            'abbba',
            'b   b',
            'bcccb',
            'b   b',
            'abbba'
        ],
        [
            'abbba',
            'b   b',
            'bdddb',
            'b   b',
            'abbba'
        ],
        [
            'aaaaa',
            'abbba',
            'abbba',
            'abbba',
            'aaaaa'
        ]
    ],{
        a:'mekanism:steel_casing',
        b:'thermal:enderium_glass',
        c:'minecraft:soul_sand',
        d:'minecraft:wither_skeleton_skull'
    })
    .dimensionWhitelist('compactmachines:compact_world')
    .requireEnergyPerTick(10000)
    .runCommandOnEnd('/function kubejs:wither/wither')
    .produceItem('minecraft:nether_star')

    //盖亚机
    event.recipes.custommachinery.custom_machine('kubejs:gaia_machine', 100)
    .requireStructure([
        [
            '         ',
            '         ',
            '         ',
            '   aaa   ',
            '   aaa   ',
            '   aaa   ',
            '         ',
            '         ',
            '         '
        ],
        [
            '         ',
            '         ',
            '         ',
            '         ',
            '    b    ',
            '    m    ',
            '         ',
            '         ',
            '         '
        ],
        [
            'c       c',
            '         ',
            '         ',
            '         ',
            '         ',
            '         ',
            '         ',
            '         ',
            'c       c'
        ]
    ],{
        a:'minecraft:iron_block',
        b:'minecraft:beacon',
        c:'botania:gaia_pylon'
    })
    .requireEnergyPerTick(100000000)
    .requireItem('create:refined_radiance')
    .produceItem('botania:life_essence')

})