ServerEvents.recipes(event =>{
    //粉碎矿
    let orestone = (i,o1,o2) => (
        event.custom({
            type: "create:crushing",
            ingredients: i,
            processingTime: 250,
            results: [
                {
                    chance: 0.8,
                    item: o1
                },
                {
                    chance: 0.8,
                    item: o2
                }
            ]
        })
    )


    orestone([{item:'thermal:raw_tin_block'}],'create:crushed_raw_tin','thermal:tin_nugget').id('create:crushing/raw_tin_block')
    orestone([{tag: "create:stone_types/crimsite"}],"create:crushed_raw_iron","minecraft:iron_nugget").id('create:crushing/crimsite')
    orestone([{tag: "create:stone_types/ochrum"}],"create:crushed_raw_gold","minecraft:gold_nugget").id('create:crushing/ochrum')
    orestone([{tag: "create:stone_types/veridium"}],"create:crushed_raw_copper","create:copper_nugget").id('create:crushing/veridium')

    //海带改为硫化橡胶
    event.replaceInput({mod:'create'},'minecraft:dried_kelp','thermal:cured_rubber')

    //橡胶
    let rub = (i,o) => (
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    amount: 250,
                    fluid: i,
                    nbt: {}
                }
            ],
            results: [
                {
                    item: o
                }
            ]
        })
    )
    rub('thermal:latex','thermal:rubber').id('create:compacting/rubber')
    rub('kubejs:cured_rubber','thermal:cured_rubber').id('create:compacting/cured_rubber')

    //安山合金
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "minecraft:andesite"
            },
            {
                item: "minecraft:andesite"
            },
            {
                item: 'kubejs:compositesteel_nugget'
            }
        ],
        results: [
            {
                item: "create:andesite_alloy",
                count:2
            }
        ]
    })
    .id('create:mixing/andesite_alloy')

    //序列组装
        //传动杆
    event.recipes.create.sequenced_assembly(
        ['8x create:shaft'],
        'create:andesite_alloy',
        [
            event.recipes.create.pressing('create:andesite_alloy',['create:andesite_alloy']),
            event.recipes.create.cutting('create:andesite_alloy',['create:andesite_alloy'])
        ],
        'create:andesite_alloy', 3
    )
    .id('create:sequenced_assembly/shaft')

    let pressing_sequenced_assembly = (output, input, loop) => (
        event.recipes.create.sequenced_assembly(
            [output],
            input,
            [
                event.recipes.create.pressing(input, [input])
            ],
            input,
            loop
        )
    )
/*
        //金属板
    pressing_sequenced_assembly('create:iron_sheet','iron_ingot',3).id('create:pressing/iron_ingot')
    pressing_sequenced_assembly('create:copper_sheet','copper_ingot',2).id('create:pressing/copper_ingot')
    pressing_sequenced_assembly('create:golden_sheet','gold_ingot',2).id('create:pressing/gold_ingot')
    pressing_sequenced_assembly('immersiveengineering:plate_steel','mekanism:ingot_steel',4).id('createaddition:pressing/steel_ingot')
    
*/
    //传送带
    pressing_sequenced_assembly('create:belt_connector','thermal:cured_rubber',3).id('create:pressing/belt_connector')
    
    //铁栏杆
    event.recipes.create.pressing('minecraft:iron_bars',['minecraft:iron_nugget']).id('create:pressing/iron_bars')

    //动力搅拌器
    event.recipes.create.sequenced_assembly(
        ['create:mechanical_mixer'],
        'create:andesite_casing',
        [
            event.recipes.create.cutting('kubejs:incomplete_mixer',['kubejs:incomplete_mixer']),
            event.recipes.create.deploying('kubejs:incomplete_mixer',['kubejs:incomplete_mixer','create:cogwheel']),
            event.recipes.create.deploying('kubejs:incomplete_mixer',['kubejs:incomplete_mixer','create:whisk'])
        ],
        'kubejs:incomplete_mixer', 1
    ).id('create:sequenced_assembly/mechanical_mixer')

    //安山机壳
    event.recipes.create.deploying('create:andesite_casing',['thermal:stripped_rubberwood_log','create:andesite_alloy'])
    .id('create:deploying/andesite_casing')

    //铜机壳
    event.recipes.create.deploying('create:copper_casing',['thermal:stripped_rubberwood_log','minecraft:copper_ingot'])
    .id('create:deploying/copper_casing')

    //注液器
    event.recipes.create.sequenced_assembly(
        ['create:spout'],
        'create:copper_casing',
        [
            event.recipes.create.cutting('create:copper_casing',['create:copper_casing']),
            event.recipes.create.deploying('create:copper_casing',['create:copper_casing','#forge:glass']),
            event.recipes.create.deploying('create:copper_casing',['create:copper_casing','thermal:cured_rubber'])
        ],
        'create:copper_casing', 1
    ).id('create:sequenced_assembly/spout')

    event.replaceInput({id:'create:crafting/kinetics/spout'},'create:copper_casing','kubejs:copper_mechanism')

    //软管滑轮
    event.recipes.create.sequenced_assembly(
        ['create:hose_pulley'],
        'create:copper_casing',
        [
            event.recipes.create.cutting('create:copper_casing',['create:copper_casing']),
            event.recipes.create.deploying('create:copper_casing',['create:copper_casing','thermal:cured_rubber']),
            event.recipes.create.deploying('create:copper_casing',['create:copper_casing','#forge:plates/copper'])
        ],
        'create:copper_casing', 4
    ).id('create:sequenced_assembly/hose_pulley')

    event.replaceInput({id:'create:crafting/kinetics/hose_pulley'},'create:copper_casing','kubejs:copper_mechanism')
    event.replaceInput({id:'create:crafting/kinetics/hose_pulley'},'minecraft:dried_kelp_block','thermal:cured_rubber_block')

    //齿轮箱
    event.recipes.create.sequenced_assembly(
        ['create:gearbox'],
        'create:andesite_casing',
        [
            event.recipes.create.deploying('kubejs:incomplete_gearbox',['kubejs:incomplete_gearbox','create:cogwheel'])
        ],
        'kubejs:incomplete_gearbox', 4
    ).id('create:sequenced_assembly/gearbox')

    //粉碎铁矿
    pressing_sequenced_assembly('10x kubejs:crushed_magnet','kubejs:cracked_magnet_block',3)
    .id('create:sequenced_assembly/crushed_magnet')

    event.recipes.create.crushing([
        '8x kubejs:crushed_magnet',
        Item.of('4x kubejs:crushed_magnet').withChance(.50)
        ,Item.of('4x kubejs:crushed_magnet').withChance(.50)
    ],[
        'kubejs:magnet_block'
    ]).id('create:crushing/crushed_magnet')

    event.recipes.create.milling([
        '8x kubejs:crushed_magnet',
        Item.of('4x kubejs:crushed_magnet').withChance(.50)
    ],[
        'kubejs:cracked_magnet_block'
    ]).id('create:milling/crushed_magnet')

    //粉碎铁洗涤
    event.recipes.create.splashing(['4x minecraft:iron_nugget','minecraft:redstone'],['create:crushed_raw_iron'])
    .id('create:splashing/crushed_raw_iron')

    //水车
    event.recipes.create.sequenced_assembly(
        ['create:water_wheel'],
        'create:shaft',
        [
            event.recipes.create.deploying(['create:shaft'],['create:shaft','minecraft:stripped_oak_log']),
            event.recipes.create.cutting(['create:shaft'],['create:shaft']),
            event.recipes.create.cutting(['create:shaft'],['create:shaft'])
        ],
        'create:shaft', 2
    ).id('create:crafting/kinetics/water_wheel')

    event.recipes.create.sequenced_assembly(
        ['create:large_water_wheel'],
        'create:water_wheel',
        [
            event.recipes.create.deploying(['create:water_wheel'],['create:water_wheel','minecraft:stripped_oak_log']),
            event.recipes.create.cutting(['create:water_wheel'],['create:water_wheel']),
            event.recipes.create.cutting(['create:water_wheel'],['create:water_wheel'])
        ],
        'create:water_wheel', 2
    ).id('create:crafting/kinetics/large_water_wheel')

    //木炭粉
    event.recipes.create.pressing(['mekanism:dust_charcoal'],['minecraft:charcoal'])
    .id('create:pressing/dust_charcoal')

    //深层铁矿
    event.recipes.create.mixing(
        ['minecraft:deepslate_iron_ore'],
        [
            Fluid.of('minecraft:lava',100),
            'kubejs:compressed_dirt',
            'kubejs:crushed_magnet'
        ]
    ).id('create:mixing/deepslate_iron_ore')

    //铁矿
    event.recipes.create.milling(['minecraft:iron_ore'],['minecraft:deepslate_iron_ore']).id('create:milling/iron_ore')

    //粗铁
    event.recipes.create.sequenced_assembly(
        ['2x minecraft:raw_iron'],
        'minecraft:iron_ore',
        [
            event.recipes.create.pressing(['minecraft:iron_ore'],['minecraft:iron_ore']),
            event.recipes.create.filling(['minecraft:iron_ore'],['minecraft:iron_ore',Fluid.of('lava',100)]),
            event.recipes.create.filling(['minecraft:iron_ore'],['minecraft:iron_ore',Fluid.of('water',100)])
        ],
        'minecraft:iron_ore', 1
    ).id('create:sequenced_assembly/raw_iron')

    //铁锭
    pressing_sequenced_assembly('iron_ingot','kubejs:cast_iron',3).id('create:pressing_sequenced_assembly/iron_ingot')
    
    //钢锭
    pressing_sequenced_assembly('mekanism:ingot_steel','kubejs:pig_iron',3)
    .id('create:pressing_sequenced_assembly/ingot_steel')

    //链式传动箱
    event.recipes.create.sequenced_assembly(
        ['create:encased_chain_drive'],
        'create:andesite_casing',
        [
            event.recipes.create.deploying(['kubejs:incomplete_chain_drive'],['kubejs:incomplete_chain_drive','minecraft:iron_nugget'])
        ],
        'kubejs:incomplete_chain_drive', 3
    ).id('create:sequenced_assembly/encased_chain_drive')


    //反转齿轮箱
    event.recipes.create.sequenced_assembly(
        ['create:gearshift'],
        'create:andesite_casing',
        [
            event.recipes.create.deploying(['kubejs:incomplete_gearshift'],['kubejs:incomplete_gearshift','minecraft:redstone']),
            event.recipes.create.deploying(['kubejs:incomplete_gearshift'],['kubejs:incomplete_gearshift','create:cogwheel'])
        ],
        'kubejs:incomplete_gearshift', 1
    ).id('create:sequenced_assembly/gearshift')

    //离合器
    event.recipes.create.sequenced_assembly(
        ['create:clutch'],
        'create:andesite_casing',
        [
            event.recipes.create.deploying(['kubejs:incomplete_clutch'],['kubejs:incomplete_clutch','create:shaft']),
            event.recipes.create.deploying(['kubejs:incomplete_clutch'],['kubejs:incomplete_clutch','minecraft:redstone'])
        ],
        'kubejs:incomplete_clutch', 1
    ).id('create:sequenced_assembly/clutch')


    //可调链式传动箱
    event.recipes.create.deploying(['create:adjustable_chain_gearshift'],['create:encased_chain_drive','create:electron_tube'])
    .id('create:crafting/kinetics/adjustable_chain_gearshift')

    //青金石粉
    event.recipes.create.milling(['thermal:lapis_dust'],['minecraft:lapis_lazuli']).id('create:milling/lapis_dust')

    //石英粉
    event.recipes.create.splashing(['thermal:quartz_dust'],['thermal:lapis_dust']).id('create:splashing/quartz_dust')

    //玫瑰石英
    event.shaped('create:rose_quartz',[
        'abb',
        'bbb',
        'bbb'
    ],{
        a:'thermal:quartz_dust',
        b:'redstone'
    }).id('create:rose_quartz')

    //智能流体管道
    event.shaped('create:smart_fluid_pipe',[
        'a',
        'b',
        'c'
    ],{
        a:'#forge:plates/gold',
        b:'create:fluid_pipe',
        c:'create:electron_tube'
    }).id('create:smart_fluid_pipe')


    //尘土
    event.recipes.create.milling(['exnihilosequentia:dust'],['minecraft:sand']).id('create:milling/dust')

    //精灵门核心
    event.recipes.create.sequenced_assembly(
        ['botania:alfheim_portal'],
        'botania:livingwood_log',
        [
            event.recipes.create.deploying(['botania:livingwood_log'],['botania:livingwood_log','botania:terrasteel_nugget'])
        ],
        'botania:livingwood_log',3
    ).id('create:sequenced_assembly/alfheim_portal')

    //碎锌矿
    event.recipes.create.milling([
        Item.of('2x exnihilosequentia:zinc_pieces'),
        Item.of('2x exnihilosequentia:zinc_pieces').withChance(0.5)
    ],[
        'botania:livingrock'
    ]).id('create:milling/zinc_pieces')

    //深层锌矿石
    event.recipes.create.mixing(['create:deepslate_zinc_ore'],[Fluid.of('lava',100),'create:asurine','kubejs:dcompressed_dirt']).id('create:mixing/deepslate_zinc_ore')

    //锌矿石
    event.recipes.create.milling(['create:zinc_ore'],['create:deepslate_zinc_ore']).id('create:milling/zinc_ore')

    //粗锌
    event.recipes.create.sequenced_assembly(
        ['4x create:raw_zinc'],
        'create:zinc_ore',
        [
            event.recipes.create.pressing(['create:zinc_ore'],['create:zinc_ore']),
            event.recipes.create.filling(['create:zinc_ore'],['create:zinc_ore',Fluid.of('water',100)]),
            event.recipes.create.filling(['create:zinc_ore'],['create:zinc_ore',Fluid.of('lava',100)])
        ],
        'create:zinc_ore', 1
    ).id('create:sequenced_assembly/raw_zinc')

    //水洗粉碎锌
    event.recipes.create.splashing(['4x create:zinc_nugget','minecraft:gunpowder'],['create:crushed_raw_zinc']).id('create:splashing/crushed_raw_zinc')

    //半成品精密构件
    event.recipes.create.sequenced_assembly(
        ['create:incomplete_precision_mechanism'],
        'create:brass_sheet',
        [
            event.recipes.create.deploying(['create:brass_sheet'],['create:brass_sheet','create:cogwheel']),
            event.recipes.create.deploying(['create:brass_sheet'],['create:brass_sheet','create:large_cogwheel']),
            event.recipes.create.deploying(['create:brass_sheet'],['create:brass_sheet','minecraft:iron_nugget'])
        ],
        'create:brass_sheet', 5
    ).id('create:sequenced_assembly/incomplete_precision_mechanism')

    //岩浆膏
    event.recipes.create.filling([
        'minecraft:magma_cream'
    ],[
        '#forge:slimeballs',
        Fluid.of('minecraft:lava', 250)
    ]).id('create:filling/magma_cream')

    //岩浆
    event.recipes.create.mixing([
        Fluid.of('cyclic:magma',1000)
    ],[
        '4x minecraft:magma_cream',
        Fluid.of('minecraft:lava',1000)
    ]).id('create:mixing/magma')

    //鼓风机
    event.recipes.create.sequenced_assembly(
        ['create:encased_fan'],
        'create:andesite_casing',
        [
            event.recipes.create.deploying('kubejs:incomplete_fan',['kubejs:incomplete_fan','create:propeller']),
            event.recipes.create.deploying('kubejs:incomplete_fan',['kubejs:incomplete_fan','create:shaft'])
        ],
        'kubejs:incomplete_fan',1
    ).id('create:sequenced_assembly/encased_fan')

    //布谷鸟闹钟
    event.recipes.create.sequenced_assembly(
        ['create:cuckoo_clock'],
        'create:andesite_casing',
        [
            event.recipes.create.deploying('kubejs:incomplete_cuckoo',['kubejs:incomplete_cuckoo','minecraft:oak_planks']),
            event.recipes.create.deploying('kubejs:incomplete_cuckoo',['kubejs:incomplete_cuckoo','minecraft:clock'])
        ],
        'kubejs:incomplete_cuckoo',1
    ).id('create:sequenced_assembly/cuckoo_clock')

    //辊压机
    event.recipes.create.sequenced_assembly(
        ['create:mechanical_press'],
        'create:andesite_casing',
        [
            event.recipes.create.deploying('kubejs:incomplete_press',['kubejs:incomplete_press','minecraft:iron_block']),
            event.recipes.create.deploying('kubejs:incomplete_press',['kubejs:incomplete_press','create:shaft'])
        ],
        'kubejs:incomplete_press',1
    ).id('create:sequenced_assembly/mechanical_press')

    //动力臂
    event.recipes.create.mechanical_crafting('create:mechanical_arm',[
        'aab',
        'a  ',
        'cd '
    ],{
        a:'create:brass_sheet',
        b:'create:andesite_alloy',
        c:'create:precision_mechanism',
        d:'create:brass_casing'
    }).id('create:mechanical_crafting/mechanical_arm')

    //富石英铁 富石英铁块
    /*
    event.recipes.create.compacting(['refinedstorage:quartz_enriched_iron'],[
        'thermal:quartz_dust','minecraft:iron_ingot'
    ]).id('create:compacting/quartz_enriched_iron')
    */

    event.recipes.create.compacting(['refinedstorage:quartz_enriched_iron_block'],[
        '9x refinedstorage:quartz_enriched_iron'
    ]).id('create:compacting/quartz_enriched_iron_block')

    event.recipes.create.mechanical_crafting('refinedstorage:quartz_enriched_iron_block',[
        'aaa','aaa','aaa'
    ],{
        a:'refinedstorage:quartz_enriched_iron'
    }).id('create:mechanical_crafting/quartz_enriched_iron_block')

    event.recipes.create.mechanical_crafting('9x refinedstorage:quartz_enriched_iron',[
        'a'
    ],{
        a:'refinedstorage:quartz_enriched_iron_block'
    }).id('create:mechanical_crafting/quartz_enriched_iron')

    //处理器粘合物
    event.recipes.create.mechanical_crafting('8x refinedstorage:processor_binding',[
        'aba'
    ],{
        a:'minecraft:string',
        b:'myrtrees:latex'
    }).id('create:mechanical_crafting/processor_binding')

    //烈焰血
    event.recipes.create.mixing([Fluid.of('kubejs:blaze_blood',1000)],[
        'exnihilosequentia:blaze_doll',
        Fluid.of('minecraft:lava',1000)
    ]).id('create:mixing/blaze_blood')

    //烈焰棒
    event.recipes.create.filling(['minecraft:blaze_rod'],['minecraft:stick',Fluid.of('kubejs:blaze_blood',250)])
    .id('create:filling/blaze_rod')

    //烈焰蛋糕
    event.recipes.create.compacting('create:blaze_cake_base',[
        'minecraft:netherrack',
        'minecraft:sugar'
    ]).id('create:compacting/blaze_cake')

    event.recipes.create.filling('create:blaze_cake',[
        'create:blaze_cake_base',
        Fluid.of('kubejs:blaze_blood',1000)
    ]).id('create:filling/blaze_cake')

    //压缩沙子
    event.recipes.create.compacting('kubejs:compressed_sand',[
        '9x minecraft:sand'
    ]).id('create:compacting/sand')

    //压缩砂砾
    event.recipes.create.compacting('kubejs:compressed_gravel',[
        '9x minecraft:gravel'
    ]).id('create:compacting/gravel')

    //压缩圆石
    event.recipes.create.compacting('cyclic:compressed_cobblestone',[
        '9x minecraft:cobblestone'
    ]).id('create:compacting/cobblestone')

    //灵魂沙
    event.recipes.create.mixing('minecraft:soul_sand',[
        'kubejs:compressed_sand',
        Fluid.of('kubejs:soul',1000)
    ]).id('create:mixing/soul_sand')

    //石英块
    event.recipes.create.compacting('minecraft:quartz_block',[
        '5x #kubejs:quartz',
        Fluid.of('kubejs:soul', 1000)
    ]).id('create:compacting/quartz_block')

    //石英
    event.recipes.create.pressing('4x minecraft:quartz','minecraft:quartz_block').id('create:pressing/quartz')

    //逻辑处理器
    event.recipes.create.sequenced_assembly(
        ['refinedstorage:basic_processor'],
        'refinedstorage:quartz_enriched_iron',
        [
            event.recipes.create.deploying(['refinedstorage:raw_basic_processor'],[
                'refinedstorage:raw_basic_processor',
                'minecraft:redstone'
            ]),
            event.recipes.create.deploying(['refinedstorage:raw_basic_processor'],[
                'refinedstorage:raw_basic_processor',
                'refinedstorage:silicon'
            ]),
            event.recipes.create.deploying(['refinedstorage:raw_basic_processor'],[
                'refinedstorage:raw_basic_processor',
                'refinedstorage:processor_binding'
            ])
        ],
        'refinedstorage:raw_basic_processor',1
    ).id('create:sequenced_assembly/basic_processor')

    //运算处理器
    /*
    event.recipes.create.sequenced_assembly(
        ['refinedstorage:improved_processor'],
        'minecraft:gold_ingot',
        [
            event.recipes.create.deploying(['refinedstorage:raw_basic_processor'],[
                'refinedstorage:raw_basic_processor',
                'refinedstorage:basic_processor'
            ]),
            event.recipes.create.deploying(['refinedstorage:raw_basic_processor'],[
                'refinedstorage:raw_basic_processor',
                'refinedstorage:basic_processor'
            ])
        ],
        'refinedstorage:raw_improved_processor',1
    ).id('create:sequenced_assembly/improved_processor')
    */
    //模块处理器
    event.recipes.create.sequenced_assembly(
        ['2x refinedstorage:advanced_processor'],
        'botania:mana_diamond',
        [
            event.recipes.create.deploying(['refinedstorage:raw_basic_processor'],[
                'refinedstorage:raw_basic_processor',
                'refinedstorage:improved_processor'
            ]),
            event.recipes.create.deploying(['refinedstorage:raw_basic_processor'],[
                'refinedstorage:raw_basic_processor',
                'refinedstorage:improved_processor'
            ]),
            event.recipes.create.deploying(['refinedstorage:raw_basic_processor'],[
                'refinedstorage:raw_basic_processor',
                'create:electron_tube'
            ])
        ],
        'refinedstorage:raw_advanced_processor',1
    ).id('create:sequenced_assembly/advanced_processor')

    //蛋糕底座
    event.recipes.create.compacting(['createaddition:cake_base'],[
        '2x minecraft:sugar',
        'create:dough'
    ]).id('createaddition:compacting/cake_base')

    //赛特斯石英粉
    event.recipes.create.filling(['ae2:certus_quartz_dust'],['#forge:silicon',Fluid.of('kubejs:soul',250)])

    //深层矿深层机
    event.recipes.create.mechanical_crafting('kubejs:deepore_gen',[
        'abbba',
        'acdca',
        'eeeee'
    ],{
        a:'minecraft:deepslate',
        b:'minecraft:magma_block',
        c:'minecraft:bucket',
        d:'botania:diluted_pool',
        e:'minecraft:end_stone',
    }).id('create:mechanical_crafting/deepore_gen')

    //紫珀粉
    event.recipes.create.crushing(['kubejs:purpur_dust'],['minecraft:popped_chorus_fruit'])
    .id('create:crushing/purpur_dust')

    //复合钢锭
    event.recipes.create.filling(['kubejs:compositesteel_ingot'],['mekanism:ingot_steel',Fluid.of('kubejs:soul',1000)])
    .id('create:filling/compositesteel_ingot')

    //硫化橡胶液
    event.recipes.create.mixing([Fluid.of('kubejs:cured_rubber',1000)],[Fluid.of('thermal:latex',1000),'#kubejs:sulfur'])
    .id('create:mixing/cured_rubber')

    //安山构件
    event.recipes.create.mechanical_crafting('kubejs:andesite_mechanism',[
        'abc'
    ],{
        a:'minecraft:oak_planks',
        b:'kubejs:andesite_gear',
        c:'create:andesite_alloy'
    }).id('create:mechanical_crafting/andesite_mechanism')

    //铜构件
    event.recipes.create.mechanical_crafting('kubejs:copper_mechanism',[
        'abc'
    ],{
        a:'kubejs:andesite_mechanism',
        b:'kubejs:andesite_gear',
        c:'minecraft:copper_ingot'
    }).id('create:mechanical_crafting/copper_mechanism')

    //安山机器
    const machine = [
        'create:encased_fan',
        'create:mechanical_press',
        'create:mechanical_mixer',
        'create:deployer',
        'create:mechanical_saw',
        'create:mechanical_drill',
        'create:mechanical_harvester',
        'create:mechanical_plough',
        'create:millstone',
        'create:rope_pulley',
        'create:encased_chain_drive',
        'create:gearshift',
        'create:mysterious_cuckoo_clock',
        'create:clutch',
        'create:gearbox',
        'create:vertical_gearbox'
    ]
    function replaceCasing(arr){
        let n = arr.length
        for(let i = 0; i < n; i++){
            let id = arr[i].split(':')[1]
            event.replaceInput({id:`create:crafting/kinetics/${id}`}, 'create:andesite_casing', 'kubejs:andesite_mechanism')
        }
    }
    replaceCasing(machine)

    //轧机
    event.replaceInput({id:'createaddition:crafting/rolling_mill'}, 'create:andesite_casing', 'kubejs:andesite_mechanism')

    //钻头
    event.replaceInput({id:'create:crafting/kinetics/mechanical_drill'}, 'create:andesite_alloy','botania:manasteel_ingot')

    //收割
    event.replaceInput({id:'create:crafting/kinetics/mechanical_harvester'}, 'create:andesite_alloy','botania:manasteel_ingot')

    //犁
    event.replaceInput({id:'create:crafting/kinetics/mechanical_plough'}, 'create:andesite_alloy','botania:manasteel_ingot')


    //染液
    event.recipes.create.emptying([Fluid.of('kubejs:red',250).withChance(0.5)],['ae2:red_lumen_paint_ball']).id('create:emptying/red')
    event.recipes.create.emptying([Fluid.of('kubejs:green',250).withChance(0.5)],['ae2:green_lumen_paint_ball']).id('create:emptying/green')
    event.recipes.create.emptying([Fluid.of('kubejs:blue',250).withChance(0.5)],['ae2:blue_lumen_paint_ball']).id('create:emptying/blue')

    //异彩液
    /*
    event.recipes.create.mixing([Fluid.of('kubejs:chromatic',750)],[
        Fluid.of('kubejs:red',250),
        Fluid.of('kubejs:green',250),
        Fluid.of('kubejs:blue',250)
    ]).id('create:mixing/chromatic')
    */

    //red + green
    event.recipes.create.mixing([Fluid.of('kubejs:orange',500)],[
        Fluid.of('kubejs:red',250),
        Fluid.of('kubejs:green',250),
    ]).id('create:mixing/orange')
    //red + blue
    event.recipes.create.mixing([Fluid.of('kubejs:magenta',500)],[
        Fluid.of('kubejs:red',250),
        Fluid.of('kubejs:blue',250)
    ]).id('create:mixing/magenta')
    //green + blue
    event.recipes.create.mixing([Fluid.of('kubejs:aqua',500)],[
        Fluid.of('kubejs:green',250),
        Fluid.of('kubejs:blue',250)
    ]).id('create:mixing/aqua')

    //异彩液
    event.recipes.create.mixing([Fluid.of('kubejs:chromatic',750)],[
        Fluid.of('kubejs:orange',500),
        Fluid.of('kubejs:blue',250)
    ]).id('create:mixing/chromatic_1')

    event.recipes.create.mixing([Fluid.of('kubejs:chromatic',750)],[
        Fluid.of('kubejs:magenta',500),
        Fluid.of('kubejs:green',250)
    ]).id('create:mixing/chromatic_2')

    event.recipes.create.mixing([Fluid.of('kubejs:chromatic',750)],[
        Fluid.of('kubejs:red',250),
        Fluid.of('kubejs:aqua',500)
    ]).id('create:mixing/chromatic_3')

    //异彩化合物
    event.recipes.create.mixing(['create:chromatic_compound'],['create:polished_rose_quartz',Fluid.of('kubejs:chromatic',1000)]).superheated().id('create:mixing/chromatic_compound')

    //骨粉
    event.recipes.create.milling(['4x minecraft:bone_meal'],['minecraft:calcite'])
    .id('create:milling/calcite')

    //硫酸
    event.recipes.create.mixing([Fluid.of('mekanism:sulfuric_acid',500)],[Fluid.of('kubejs:diluted_sulfuric_acid',1000)])
    .superheated()
    .id('create:mixing/sulfuric_acid')

    //盖亚魂锭
    event.recipes.create.mechanical_crafting('botania:gaia_ingot',[
        'aaaaa',
        'a b a',
        'a c a',
        'adefa',
        'a g a',
        'a h a',
        'aaaaa'
    ],{
        a:'botania:life_essence',
        b:'botania:terrasteel_helmet',
        c:'botania:gaia_head',
        d:'botania:terra_sword',
        e:'botania:terrasteel_chestplate',
        f:'botania:terra_pick',
        g:'botania:terrasteel_leggings',
        h:'botania:terrasteel_boots'
    }).id('create:mechanical_crafting/gaia_ingot')

    //橡胶木去皮
    event.recipes.create.cutting(['thermal:stripped_rubberwood_log'],['thermal:rubberwood_log'])
    .id('create:cutting/stripped_rubberwood_log')
    event.recipes.create.cutting(['thermal:stripped_rubberwood_wood'],['thermal:rubberwood_wood'])
    .id('create:cutting/stripped_rubberwood_wood')

    //硫粉
    event.recipes.create.milling(['thermal:sulfur_dust'],['thermal:sulfur'])
    .id('create:milling/sulfur_dust')

    //洗涤 石英粉
    event.replaceOutput({type:'create:splashing'},'minecraft:quartz','thermal:quartz_dust')

    //粉碎 石英粉
    event.replaceOutput({type:'create:crushing'},'minecraft:quartz','thermal:quartz_dust')

    //复合钢
    event.recipes.create.mixing([Fluid.of('kubejs:composite_steel', 1000)],[Fluid.of('thermal:latex', 1000),'botania:terrasteel_ingot'])
    .heated()
    .id('create:mixing/composite_steel')

    event.recipes.create.compacting(['kubejs:compositesteel_ingot'],[Fluid.of('kubejs:composite_steel', 1000)])
    .id('create:compacting/compositesteel_ingot')

    //智能侦测器 存量转信器 编程齿轮箱
    event.replaceInput({id:'create:crafting/logistics/stockpile_switch'},'create:brass_casing','create:precision_mechanism')

    event.replaceInput({id:'create:crafting/logistics/content_observer'},'create:brass_casing','create:precision_mechanism')

    event.replaceInput({id:'create:crafting/kinetics/sequenced_gearshift'},'create:brass_casing','create:precision_mechanism')

    //吸管
    event.custom({
        type:"createaddition:rolling",
        input: {
            item: 'thermal:rubber'
        },
        result: {
            item: "createaddition:straw",
            count: 1
        }
    }).id('createaddition:rolling/straw')

    //下界岩 粉碎 余烬面粉
    event.recipes.create.crushing(['4x create:cinder_flour'],['minecraft:netherrack'])
    .id('create:crushing/cinder_flour')

    //粉碎轮粉碎铁矿石
    event.recipes.create.crushing(['2x create:crushed_raw_iron'],['#minecraft:iron_ores'])
    .id('create:crushing/crushed_raw_iron')

    //粉碎轮粉碎锌矿石
    event.recipes.create.crushing(['2x create:crushed_raw_zinc'],['#forge:ores/zinc'])
    .id('create:crushing/crushed_raw_zinc')

    //粉碎轮粉碎下界金矿
    event.recipes.create.crushing(['18x minecraft:gold_nugget','create:cinder_flour',Item.of('create:cinder_flour').withChance(0.5)],['minecraft:nether_gold_ore'])
    .id('create:crushing/nether_gold_ore')

    //植物胶乳
    event.recipes.create.mixing([Fluid.of('thermal:latex',1000)],['4x thermal:rubber'])
    .heated()
    .id('create:mixing/latex')

    //硫化橡胶
    event.recipes.create.mixing([Fluid.of('kubejs:cured_rubber',1000)],['thermal:cured_rubber_block'])
    .heated()
    .id('create:mixing/cured_rubber_from_cured_rubber_block')

    //粘土
    event.recipes.create.splashing(['minecraft:clay_ball',Item.of('minecraft:clay_ball').withChance(0.5)],['exnihilosequentia:dust'])
    .id('create:splashing/clay_ball')

    //暴雪立方
    event.recipes.create.compacting(['thermal:blizz_rod'],['4x minecraft:blue_ice'])
    .id('create:compacting/blizz_rod')

    //哭泣黑曜石
    event.recipes.create.filling(['minecraft:crying_obsidian'],['minecraft:obsidian',Fluid.of('water', 1000)])
    .id('create:filling/crying_obsidian')

    //铜锭
    event.recipes.create.mixing([Fluid.of('kubejs:ferrous_sulfate_solution',1000),'4x minecraft:copper_ingot'],['minecraft:iron_ingot',Fluid.of('kubejs:rich_copper_sulfate_solution',1000)]).id('create:mixing/copper_ingot_from_rich_copper_sulfate_solution')
    event.recipes.create.mixing([Fluid.of('kubejs:ferrous_sulfate_solution',1000),'2x minecraft:copper_ingot'],['minecraft:iron_ingot',Fluid.of('kubejs:copper_sulfate_solution',1000)]).id('create:mixing/copper_ingot_from_copper_sulfate_solution')

    //附魔金苹果
    event.recipes.create.sequenced_assembly(
        ['minecraft:enchanted_golden_apple'],
        'minecraft:apple',
        [
            event.recipes.create.deploying("create_new_age:incomplete_enchanted_golden_apple",["create_new_age:incomplete_enchanted_golden_apple",'minecraft:gold_block']),
            event.recipes.create.deploying("create_new_age:incomplete_enchanted_golden_apple",["create_new_age:incomplete_enchanted_golden_apple",'minecraft:gold_block']),
            event.custom({
                type: "create_new_age:energising",
                energy_needed: 8000,
                ingredients: [
                    {
                        item: "create_new_age:incomplete_enchanted_golden_apple"
                    }
                ],
                results: [
                    {
                        item: "create_new_age:incomplete_enchanted_golden_apple"
                    }
                ]
            })
        ],
        "create_new_age:incomplete_enchanted_golden_apple", 4
    ).id('create_new_age:enchanted_golden_apple')

    event.recipes.create.mixing(['3x ae2:fluix_crystal'],[Fluid.of('water',250),'ae2:charged_certus_quartz_crystal','minecraft:amethyst_shard']).id('create:mixing/fluix_crystal')

})