StartupEvents.registry("item", (event) => {
    //泥棒
    event.create('dirt_stick')
    
    //草皮
    event.create('sod').texture('minecraft:block/grass_block_top').color(0x32CD32)

    //创造取出
    event.create('upgrade_creative_vend')

    //黑莲花样板
    event.create('black_lotus').texture('botania:item/black_lotus')

    //红尘
    event.create('red_dust')

    //下界煤
    event.create('nether_charcoal').burnTime(3200)

    //复合钢锭
    event.create('compositesteel_ingot').tag('forge:ingots/compositesteel')

    //复合钢粒
    event.create('compositesteel_nugget').tag('forge:nuggets/compositesteel')

    //工作台面板
    event.create('crafting_table_pannel')

    //炼药锅板
    event.create('cauldron_plate')

    //灰色皮革
    event.create('gray_leather')

    //金制手部件
    event.create('golden_hand').texture('create:item/brass_hand')

    //铸铁
    event.create('cast_iron')

    //生铁
    event.create('pig_iron')

    //粉碎磁铁
    event.create('crushed_magnet')

    //铜矿兰
    event.create('copper_orechid')

    //序列组装用的过渡 凝矿兰
    event.create('incomplete_copper_orechid', "create:sequenced_assembly").texture('kubejs:item/copper_orechid')

    //瓶装下界空气
    event.create('nether_air_bottle')

    //天使之杖
    event.create('angel_wand').modelJson({
        parent: "minecraft:item/handheld",
        textures: {
            layer0: "kubejs:item/angel_wand"
        },
        overrides: [
            {
            predicate: {
                "constructionwand:using_core": 1.0
            },
            model: "kubejs:item/angel_wand_core"
            }
        ]
    }).maxStackSize(1)

    //设矿杖
        //灵魂流体
    event.create('soul_vein_setter').texture('kubejs:item/ore_setter/soul_vein_setter').maxStackSize(1)

        //下界金矿
    event.create('nether_gold_vein_setter').texture('kubejs:item/ore_setter/nether_gold_vein_setter').maxStackSize(1)

        //氟石
    event.create('fluorite_vein_setter').texture('kubejs:item/ore_setter/fluorite_vein_setter').maxStackSize(1)

    //紫珀粉
    event.create('purpur_dust')

    //紫珀锭
    event.create('purpur_ingot')

    //安山合金齿轮
    event.create('andesite_gear')

    //安山构件
    event.create('andesite_mechanism')

    //铜构件
    event.create('copper_mechanism')

    //富集木炭
    event.create('enriched_charcoal')

    //富集青金石
    event.create('enriched_lapis')

    //富集下界之星
    event.create('enriched_nether_star')

    //富集紫水晶
    event.create('enriched_amethyst')

    //强化荧石粉
    event.create('dust_refined_glowstone')

    //创造存储组件
    event.create('creative_cell_component')

    //苹果树
    event.create('apple_sapling')

    //富集石英
    event.create('enriched_certus_quartz')

    //物质团
    event.create('matter_group')

    //奇点
        
    let singularity = (name, color) => (
        event.create(`singularity_${name}`).texture('kubejs:item/singularity_overlay').color(0, color)
    )
    //魔力奇点
    //event.create('singularity_mana').texture('kubejs:item/singularity_overlay').color(0, 0x33efff)
    singularity('mana', 0x33efff)
    //铁
    singularity('iron', 0xd3d1cb)
    //铜
    singularity('copper',0xbf5935)
    //金
    singularity('gold', 0xf7d349)
    //下界合金
    singularity('netherite', 0x302829)
    //下界之星
    singularity('nether_star', 0xd3cdff)
    //信素
    singularity('signalum', 0xec3606)
    //流明
    singularity('lumium', 0xfceea8)
    //末影
    singularity('enderium', 0x2ba6ad)
    //锡
    singularity('tin', 0x9fc4c0)
    //铅
    singularity('lead', 0xbed5d2)
    //银
    singularity('silver', 0x9dabb2)
    //青铜
    singularity('bronze', 0xd77d29)
    //琥珀金
    singularity('electrum', 0xf5f494)
    //殷钢
    singularity('invar', 0xc3cac1)
    //康铜
    singularity('constantan', 0xecbf62)
    //铝
    singularity('aluminum', 0xc4cccf)
    //紫珀
    singularity('purpur', 0xc69dc5)
    //强化黑曜石
    singularity('refined_obsidian', 0x8067aa)
    //强化荧石
    singularity('refined_glowstone', 0xfcea99)
    //锇
    singularity('osmium', 0xb5c4c3)
    //安山合金
    singularity('andeside_alloy', 0xa7ad9f)
    //锌
    singularity('zinc', 0xb7e6bf)
    //黄铜
    singularity('brass', 0xf8ca67)
    //复合钢
    singularity('compositesteel', 0xb2b2a7)
    //福鲁伊克斯水晶
    singularity('fluix', 0x8f5ccb)
    //青金石
    singularity('lapis', 0x335dc1)
    //奇点
    singularity('singularity', 0x5460bb)


    //硅
    singularity('silicon', 0x645c5f)
    //末影珍珠
    singularity('enchanted_golden_apple', 0xfff196)
    //白色羊毛
    singularity('wool', 0xf4f4f5)
    //烈焰
    singularity('blaze', 0xefe563)
    //菌丝
    singularity('mycelium', 0x896f70)
    //活木
    singularity('living_wood', 0x390c04)
    //活石
    singularity('living_rock', 0xd0caba)


    //灌注合金
    singularity('alloy_infused', 0xff0302)
    //强化合金
    singularity('alloy_reinforced', 0x0bcfff)
    //原子合金
    singularity('alloy_atomic',0x7e3779)
    //钚
    singularity('plutonium',0x82bfa9)
    //钋
    singularity('polonium',0x55b8cd)
    //乙烯片
    singularity('hdpe',0xe9e8e2)
    //布谷
    singularity('cuckoo',0xc3a568)

    //轨道
    singularity('track',0xb9b9b9)
    //光辉石
    singularity('radiance',0xffffff)
    //暗影钢
    singularity('shadow', 0x4e4a61)
    //下界空气
    singularity('nether_air',0xa94925)
    //末地空气
    singularity('end_air',0x030600)
    //暴雪立方
    singularity('blizz',0xa7f4f2)
    //黑曜石结晶
    singularity('gem_obsidian',0x3a195e)



    //终极奇点
    event.create('ultimate_singularity').modelJson({
        parent: "item/generated",
        textures: {
            layer0: "kubejs:item/ultimate_singularity",
            layer1: "kubejs:item/ultimate_singularity_overlay"
        }
    })

})