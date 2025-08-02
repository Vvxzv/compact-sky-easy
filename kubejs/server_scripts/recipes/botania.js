ServerEvents.recipes(event =>{
    //采花袋
    event.shaped('botania:flower_bag',[
        'a a',
        'a a',
        ' a '
    ],{
        a:'#wool'
    })
    .id('botania:flower_bag')

    //浮空水绣球
    event.shaped('botania:floating_hydroangeas',[
        "a",
        "b"
    ],{
        a:'botania:hydroangeas',
        b:'dirt'
    }).id('botania:floating_hydroangeas')

    //浮空火红莲
    event.shaped('botania:floating_endoflame',[
        "a",
        "b"
    ],{
        a:'botania:endoflame',
        b:'dirt'
    }).id('botania:floating_endoflame')

    //浮空白雏菊
    event.shaped('botania:floating_pure_daisy',[
        "a",
        "b"
    ],{
        a:'botania:pure_daisy',
        b:'dirt'
    }).id('botania:floating_pure_daisy')

    //浮空咀叶花
    event.shaped('botania:floating_munchdew',[
        "a",
        "b"
    ],{
        a:'botania:munchdew',
        b:'dirt'
    }).id('botania:floating_munchdew')

    //白雏菊
        //活泥
    event.recipes.botania.pure_daisy('kubejs:livingdirt','kubejs:compressed_dirt',10).id('botania:pure_daisy/livingdirt')
        //弱磁铁
    event.recipes.botania.pure_daisy('kubejs:magnet_block','kubejs:dilute_mana_iron_block',10).id('botania:pure_daisy/magnet_block')
        //活石
    event.recipes.botania.pure_daisy('botania:livingrock','stone',10).id('botania:pure_daisy/livingrock')
        //活木
    event.recipes.botania.pure_daisy('botania:livingwood_log','#logs',10).id('botania:pure_daisy/livingwood')
        //雪块
    event.recipes.botania.pure_daisy('snow_block','water',10).id('botania:pure_daisy/snow_block')
        //陨石
    event.recipes.botania.pure_daisy('ae2:sky_stone_block','minecraft:end_stone',10).id('botania:pure_daisy/sky_stone_block')


    //魔力灌注
        //魔力钢
    event.recipes.botania.mana_infusion('botania:manasteel_ingot','iron_nugget',10001).id('botania:mana_infusion/manasteel_ingot')

        //熔岩桶
    event.recipes.botania.mana_infusion('lava_bucket','water_bucket',25000).id('botania:mana_infusion/lava_bucket')

        //魔力丝
    event.recipes.botania.mana_infusion('botania:mana_string','string',500).id('botania:mana_infusion/mana_string')
    
        //黑莲花样板
    event.recipes.botania.mana_infusion('kubejs:black_lotus','botania:black_double_flower',1000).id('botania:mana_infusion/kubejs_black_lotus')

        //二重压缩泥土
    event.recipes.botania.mana_infusion('kubejs:dcompressed_dirt','kubejs:compressed_dirt',2500).id('botania:mana_infusion/dcompressed_dirt')

        //下界煤
    event.recipes.botania.mana_infusion('kubejs:nether_charcoal','charcoal',1000).id('botania:mana_infusion/nether_charcoal')

        //丛林树苗
    event.recipes.botania.mana_infusion('minecraft:jungle_sapling','minecraft:oak_sapling',2500,'immersiveengineering:treated_wood_horizontal').id('botania:mana_infusion/jungle_sapling')

        //火药
    event.recipes.botania.mana_infusion('minecraft:gunpowder','minecraft:flint',1000,'thermal:rubber_block').id('botania:mana_infusion/gunpowder')

        //泰拉钢
    event.recipes.botania.mana_infusion('botania:terrasteel_ingot','mekanism:ingot_steel',50000,'thermal:cured_rubber_block').id('botania:mana_infusion/terrasteel_ingot_0')
    event.recipes.botania.mana_infusion('botania:terrasteel_ingot','kubejs:compositesteel_ingot',1000).id('botania:mana_infusion/terrasteel_ingot_1')

        //魔力尘
    event.recipes.botania.mana_infusion('botania:mana_powder','minecraft:sugar',100).id('botania:mana_infusion/mana_powder')


    //符文祭坛
        //水
    event.recipes.botania.runic_altar('botania:rune_water',[
        'botania:manasteel_ingot',
        'botania:mana_powder',
        'minecraft:fishing_rod',
        'snow_block'
    ],5000).id('botania:runic_altar/rune_water')

        //火
    event.recipes.botania.runic_altar('botania:rune_fire',[
        'botania:manasteel_ingot',
        'botania:mana_powder',
        'flint_and_steel',
        'kubejs:nether_charcoal'
    ],5000).id('botania:runic_altar/rune_fire')

        //地
    event.recipes.botania.runic_altar('botania:rune_earth',[
        'botania:manasteel_ingot',
        'botania:mana_powder',
        'kubejs:livingdirt',
        'minecraft:smooth_stone'
    ],5000).id('botania:runic_altar/rune_earth')

        //风
    event.recipes.botania.runic_altar('botania:rune_air',[
        'botania:manasteel_ingot',
        'botania:mana_powder',
        'botania:mana_string',
        'minecraft:feather'
    ],5000).id('botania:runic_altar/rune_air')

        //红尘
    event.recipes.botania.runic_altar('kubejs:red_dust',[
        'minecraft:red_dye',
        'botania:mana_powder'
    ],500).id('botania:runic_altar/red_dust_1')

    event.recipes.botania.runic_altar('2x kubejs:red_dust',[
        'minecraft:red_dye',
        'minecraft:red_dye',
        'botania:mana_powder'
    ],1150).id('botania:runic_altar/red_dust_2')

    event.recipes.botania.runic_altar('3x kubejs:red_dust',[
        'minecraft:red_dye',
        'minecraft:red_dye',
        'minecraft:red_dye',
        'botania:mana_powder'
    ],1800).id('botania:runic_altar/red_dust_3')

    event.recipes.botania.runic_altar('4x kubejs:red_dust',[
        'minecraft:red_dye',
        'minecraft:red_dye',
        'minecraft:red_dye',
        'minecraft:red_dye',
        'botania:mana_powder'
    ],2450).id('botania:runic_altar/red_dust_4')

        //炼药锅板
    event.recipes.botania.runic_altar('kubejs:cauldron_plate',[
        'botania:manasteel_ingot',
        'minecraft:gold_nugget',
        'minecraft:gold_nugget',
        'minecraft:gold_nugget',
        'minecraft:charcoal'
    ],500).id('botania:runic_altar/cauldron_plate')
    
        //铁砧
    event.recipes.botania.runic_altar('minecraft:anvil',[
        'botania:manasteel_block','botania:manasteel_block','botania:manasteel_block',
        'botania:manasteel_ingot','botania:manasteel_ingot','botania:manasteel_ingot',
        'botania:manasteel_ingot'
    ],5000).id('botania:runic_altar/anvil0')

    event.recipes.botania.runic_altar('minecraft:anvil',[
        'minecraft:chipped_anvil',
        'botania:manasteel_block'
    ],5000).id('botania:runic_altar/anvil1')

    event.recipes.botania.runic_altar('minecraft:chipped_anvil',[
        'minecraft:damaged_anvil',
        'botania:manasteel_block'
    ],5000).id('botania:runic_altar/chipped_anvil')

        //魔力工作台
    event.recipes.botania.runic_altar('kubejs:mana_crafting_table',[
        'crafting_table',
        'iron_ingot',
        'botania:manasteel_ingot',
        'botania:diluted_pool'
    ],5000).id('botania:runic_altar/mana_crafting_table')

        //羽毛
    event.recipes.botania.runic_altar('minecraft:feather',[
        'minecraft:string','minecraft:string','minecraft:string',
        'minecraft:string','minecraft:string','minecraft:string',
        'minecraft:stick','minecraft:stick','minecraft:stick'
    ],500).id('botania:runic_altar/feather')


    //花药台
        //火红莲
    event.recipes.botania.petal_apothecary('botania:endoflame',["#botania:petals/brown","#botania:petals/brown","#botania:petals/red","#botania:petals/light_gray",'botania:rune_fire'],"#botania:seed_apothecary_reagent").id('botania:petal_apothecary/endoflame')

        //黑莲花
    event.recipes.botania.petal_apothecary('botania:black_lotus',[
        'botania:white_double_flower',
        'botania:orange_double_flower',
        'botania:magenta_double_flower',
        'botania:light_blue_double_flower',
        'botania:yellow_double_flower',
        'botania:lime_double_flower',
        'botania:pink_double_flower',
        'botania:gray_double_flower',
        'botania:light_gray_double_flower',
        'botania:cyan_double_flower',
        'botania:purple_double_flower',
        'botania:blue_double_flower',
        'botania:brown_double_flower',
        'botania:green_double_flower',
        'botania:red_double_flower',
        'kubejs:black_lotus'],
        '#botania:seed_apothecary_reagent')
    .id('botania:petal_apothecary/black_lotus')


    //火花
    event.replaceInput({id:'botania:spark'},'blaze_powder','thermal:niter_dust')
    event.replaceInput({id:'botania:spark'},'gold_nugget','gold_ingot')

    //火花升级
    event.replaceInput({id:/botania:spark_upgrade_*/},'botania:pixie_dust','botania:mana_powder')

    //魔法水晶
    event.replaceInput({id:'botania:mana_pylon'},'botania:mana_diamond','botania:mana_powder')

    //自然水晶
    event.replaceInput({id:'botania:natura_pylon'},'ender_eye','kubejs:dilute_mana_iron_block')

    //泰拉凝聚板
    event.replaceInput({id:'botania:terra_plate'},'botania:manasteel_block','botania:terrasteel_ingot')

    //魔力符文
    event.replaceInput({id:'botania:runic_altar/mana'},'botania:mana_pearl','botania:mana_powder')

    //炼金催化剂
    event.recipes.botania.elven_trade(
        ['kubejs:alchemy_catalyst'],
        ['botania:mana_powder','minecraft:copper_ingot','minecraft:gold_ingot','botania:manasteel_ingot','botania:livingrock']
    ).id('botania:elven_trade/alchemy_catalyst')

    //精灵尘
    event.recipes.botania.elven_trade(
        ['botania:pixie_dust'],
        ['botania:mana_powder','botania:mana_powder','botania:mana_powder','botania:mana_powder','botania:mana_powder']
    ).id('botania:elven_trade/pixie_dust')

    //凝矿兰
    event.recipes.botania.terra_plate('botania:orechid',[
        'botania:rune_spring',
        'botania:rune_summer',
        'botania:rune_autumn',
        'botania:rune_winter',
        'kubejs:blacker_lotus_block',
        'botania:elementium_ingot'
    ],10000).id('botania:terra_plate/orechid')

    //源质钢
    event.recipes.botania.elven_trade(
        ['botania:elementium_ingot'],
        ['botania:manasteel_block','kubejs:compositesteel_ingot']
    ).id('botania:elven_trade/elementium')

    //春之符文
    event.replaceInput({id:'botania:runic_altar/spring'},'minecraft:oak_sapling','#logs')

    //夏之符文
    event.replaceInput({id:'botania:runic_altar/summer'},'minecraft:melon_slice','myrtrees:latex')

    //秋之符文
    event.replaceInput({id:'botania:runic_altar/autumn'},'spider_eye','#forge:wool')

    //冬至符文
    event.replaceInput({id:'botania:runic_altar/winter'},'cake','botania:pixie_dust')

    //超大型压缩空间墙
    event.recipes.botania.elven_trade(
        ['kubejs:wall'],
        [
            'compactmachines:wall','compactmachines:wall','compactmachines:wall',
            'botania:terrasteel_ingot',
            'compactmachines:wall','compactmachines:wall','compactmachines:wall'
        ]
    ).id('botania:elven_trade/wall')

    //咀叶花
    event.recipes.botania.runic_altar('botania:munchdew',
        [
            'botania:lime_double_flower','botania:green_double_flower','botania:red_double_flower',
            'botania:endoflame','botania:endoflame','#minecraft:leaves',
            '#minecraft:leaves','botania:rune_autumn','botania:rune_air'
        ],2500).id('botania:runic_altar/munchdew')

    //天翼族
    event.replaceInput({id:'botania:flighttiara_0'},'botania:life_essence','botania:terrasteel_ingot')
    event.replaceInput({id:'botania:flighttiara_0'},'botania:ender_air_bottle','kubejs:nether_air_bottle')

    //飞行戒指
    event.shaped('ringsofascension:ring_flight',[
        ' a ',
        'aba',
        ' a '
    ],{
        a:'cyclic:charm_home',
        b:'botania:flight_tiara'
    }).id('kubejs:ring_flight')

    //精灵魔力发射器
    event.shaped('2x botania:elven_spreader',[
        'aaa',
        'bc ',
        'aaa'
    ],{
        a:"#botania:dreamwood_logs",
        b:'botania:elementium_ingot',
        c:'botania:mana_spreader'
    }).id('botania:elven_spreader')

    //魔力钻石
    event.recipes.botania.terra_plate('botania:mana_diamond',[
        'botania:terrasteel_ingot',
        'botania:manasteel_ingot',
        'botania:quartz_mana',
        'botania:pixie_dust'
    ],100000).id('botania:terra_plate/mana_diamond_0')

    event.recipes.botania.terra_plate('botania:mana_diamond',[
        'botania:terrasteel_ingot',
        'botania:manasteel_ingot',
        'botania:mana_pearl'
    ],5000).id('botania:terra_plate/mana_diamond_1')

    //盖亚魔力发射器
    event.shapeless('botania:gaia_spreader',['botania:elven_spreader','botania:dragonstone'])
    .id('botania:gaia_spreader')

    //泰拉凝聚 黑曜石结晶
    event.recipes.botania.terra_plate('cyclic:gem_obsidian',['minecraft:crying_obsidian','minecraft:crying_obsidian','minecraft:crying_obsidian'],10000).id('botania:terra_plate/gem_obsidian')

    //缩小花
    event.recipes.botania.mana_infusion('botania:agricarnation_chibi','botania:agricarnation',2500,'kubejs:alchemy_catalyst').id('botania:mana_infusion/agricarnation_chibi')

    event.recipes.botania.mana_infusion('botania:bellethorn_chibi','botania:bellethorn',2500,'kubejs:alchemy_catalyst').id('botania:mana_infusion/bellethorn_chibi')

    event.recipes.botania.mana_infusion('botania:bubbell_chibi','botania:bubbell',2500,'kubejs:alchemy_catalyst').id('botania:mana_infusion/bubbell_chibi')

    event.recipes.botania.mana_infusion('botania:clayconia_chibi','botania:clayconia',2500,'kubejs:alchemy_catalyst').id('botania:mana_infusion/clayconia_chibi')

    event.recipes.botania.mana_infusion('botania:hopperhock_chibi','botania:hopperhock',2500,'kubejs:alchemy_catalyst').id('botania:mana_infusion/hopperhock_chibi')

    event.recipes.botania.mana_infusion('botania:jiyuulia_chibi','botania:jiyuulia',2500,'kubejs:alchemy_catalyst').id('botania:mana_infusion/jiyuulia_chibi')

    event.recipes.botania.mana_infusion('botania:marimorphosis_chibi','botania:marimorphosis',2500,'kubejs:alchemy_catalyst').id('botania:mana_infusion/marimorphosis_chibi')

    event.recipes.botania.mana_infusion('botania:rannuncarpus_chibi','botania:rannuncarpus',2500,'kubejs:alchemy_catalyst').id('botania:mana_infusion/rannuncarpus_chibi')

    event.recipes.botania.mana_infusion('botania:solegnolia_chibi','botania:solegnolia',2500,'kubejs:alchemy_catalyst').id('botania:mana_infusion/solegnolia_chibi')
    
    event.recipes.botania.mana_infusion('botania:tangleberrie_chibi','botania:tangleberrie',2500,'kubejs:alchemy_catalyst').id('botania:mana_infusion/tangleberrie_chibi')

    //阿卡纳
    event.shaped('botania:floating_rosa_arcana',[
        'a',
        'b'
    ],{
        a:'botania:rosa_arcana',
        b:'minecraft:dirt'
    }).id('botania:floating_rosa_arcana')

    event.recipes.botania.petal_apothecary('botania:rosa_arcana',[
        '#botania:petals/pink',
        '#botania:petals/pink',
        '#botania:petals/purple',
        '#botania:petals/purple',
        '#botania:petals/lime',
        'minecraft:glass'
    ]).id('botania:petal_apothecary/rosa_arcana')

    //奥秘平台
    event.replaceInput({id:'botania:abstruse_platform'},'botania:mana_pearl','botania:terrasteel_ingot')

    //魔力棱镜
    event.replaceInput({id:'botania:prism'},'minecraft:prismarine_crystals','botania:elementium_ingot')

})