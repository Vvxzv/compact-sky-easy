ServerEvents.recipes(event =>{
    event.replaceInput({mod:'mekanism'},'#forge:ingots/steel','kubejs:compositesteel_ingot')
    

    //锡粉
    event.recipes.mekanism.crushing('thermal:tin_dust','thermal:tin_ingot').id('mekanism:crushing/tin_dust')

    //钢制机壳
    event.recipes.mekanism.compressing('mekanism:steel_casing','create:shadow_steel_casing',{
        gas:'mekanism:osmium', amount:5
    }).id('mekanism:compressing/steel_casing')

    //粉碎锇矿石
    event.recipes.mekanism.crushing('create:crushed_raw_osmium','minecraft:end_stone')
    .id('mekanism:crushing/crushed_raw_osmium')

    //硅
    event.recipes.mekanism.smelting('refinedstorage:silicon','minecraft:quartz')
    .id('mekanism:smelting/silicon')

    //灌注合金
    event.replaceInput({id:'mekanism:metallurgic_infusing/alloy/infused'},'minecraft:iron_ingot','minecraft:copper_ingot')

    //冶金灌装机
    event.shaped('mekanism:metallurgic_infuser',[
        'aba',
        'cdc',
        'aea'
    ],{
        a:'minecraft:iron_ingot',
        b:'mekanism:ingot_osmium',
        c:'minecraft:redstone',
        d:'mekanism:steel_casing',
        e:'minecraft:furnace'
    }).id('mekanism:metallurgic_infuser')

    //灌注：木炭
    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {tag:"forge:dusts/charcoal"},
                {item:"minecraft:charcoal"}
            ]
        },
        output:{
            amount:20,
            infuse_type:"kubejs:charcoal"
        }
    }).id('mekanism:infusion_conversion/charcoal_from_charcoal')

    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {tag:"forge:storage_blocks/charcoal"}
            ]
        },
        output:{
            amount:180,
            infuse_type:"kubejs:charcoal"
        }
    }).id('mekanism:infusion_conversion/charcoal_from_charcoal_block')

    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {item:"kubejs:enriched_charcoal"}
            ]
        },
        output:{
            amount:80,
            infuse_type:"kubejs:charcoal"
        }
    }).id('mekanism:infusion_conversion/charcoal_from_enriched_charcoal')

    //灌注：青金石
    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {tag:'forge:dusts/lapis'},
                {item:'minecraft:lapis_lazuli'}
            ]
        },
        output:{
            amount:1,
            infuse_type:"kubejs:lapis"
        }
    }).id('mekanism:infusion_conversion/lapis_from_lapis_lazuli')

    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {tag:'forge:storage_blocks/lapis'}
            ]
        },
        output:{
            amount:10,
            infuse_type:"kubejs:lapis"
        }
    }).id('mekanism:infusion_conversion/lapis_from_lapis_block')

    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {item:'kubejs:enriched_lapis'}
            ]
        },
        output:{
            amount:80,
            infuse_type:"kubejs:lapis"
        }
    }).id('mekanism:infusion_conversion/lapis_from_enriched_lapis')

    //灌注：下界之星
    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {item:'minecraft:nether_star'}
            ]
        },
        output:{
            amount:40,
            infuse_type:"kubejs:nether_star"
        }
    }).id('mekanism:infusion_conversion/nether_star_from_nether_star')

    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {item:'kubejs:enriched_nether_star'}
            ]
        },
        output:{
            amount:640,
            infuse_type:"kubejs:nether_star"
        }
    }).id('mekanism:infusion_conversion/nether_star_from_enriched_nether_star')

    //富集木炭
    event.recipes.mekanism.enriching('kubejs:enriched_charcoal','minecraft:charcoal')
    .id('mekanism:enriching/enriched_charcoal')

    //富集下界之星
    event.recipes.mekanism.enriching('kubejs:enriched_nether_star','4x minecraft:nether_star')
    .id('mekanism:enriching/enriched_nether_star')

    //富集青金石
    event.recipes.mekanism.enriching('kubejs:enriched_lapis','#forge:storage_blocks/lapis')
    .id('mekanism:enriching/enriched_lapis')

    //富集碳
    event.recipes.mekanism.enriching('mekanism:enriched_carbon','minecraft:coal')
    .id('mekanism:enriching/enriched/carbon')

    //钢锭
    event.recipes.mekanism.enriching('mekanism:ingot_steel', 'mekanism:dust_steel')
    .id('mekanism:enriching/ingot_steel_0')
    event.recipes.mekanism.enriching('mekanism:ingot_steel', 'kubejs:pig_iron')
    .id('mekanism:enriching/ingot_steel_1')

    //钢粉
    event.recipes.mekanism.metallurgic_infusing('mekanism:dust_steel','mekanism:enriched_iron',{infuse_type:'kubejs:charcoal', amount:10})
    .id('mekanism:processing/steel/enriched_iron_to_dust')

    //富集铁
    event.recipes.mekanism.metallurgic_infusing('mekanism:enriched_iron','minecraft:iron_ingot',{infuse_type:'kubejs:charcoal', amount:10})
    .id('mekanism:processing/iron/enriched_0')

    event.recipes.mekanism.metallurgic_infusing('mekanism:enriched_iron','kubejs:cast_iron',{infuse_type:'kubejs:charcoal', amount:10})
    .id('mekanism:processing/iron/enriched_1')

    //强化合金
    event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_reinforced','mekanism:alloy_infused',{infuse_type:'kubejs:lapis', amount:20}).id('mekanism:metallurgic_infusing/alloy/reinforced')

    //原子合金
    event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_atomic','mekanism:alloy_reinforced',{infuse_type:'kubejs:nether_star', amount:40}).id('mekanism:metallurgic_infusing/alloy/atomic')

    //污浊下界合金碎片
    event.recipes.mekanism.purifying('mekanism:dirty_netherite_scrap','kubejs:dcompressed_dirt',{gas:'mekanism:oxygen',amount:5}).id('mekanism:purifying/dirty_netherite_scrap')

    event.recipes.mekanism.injecting('mekanism:dirty_netherite_scrap','kubejs:andesite_dirt',{gas:'mekanism:oxygen',amount:2}).id('mekanism:injecting/dirty_netherite_scrap')

    //氧气
    event.custom({
        type:"mekanism:gas_conversion",
        input:{
            ingredient:{
                item:"botania:white_petal"
            }
        },
        output:{
            amount:20,
            gas:"mekanism:oxygen"
        }
    }).id('mekanism:gas_conversion/white_petal')

    //骨粉
    event.recipes.mekanism.crushing('4x minecraft:bone_meal','minecraft:calcite').id('mekanism:crushing/calcite')

    //凋零骷髅头
    event.recipes.mekanism.metallurgic_infusing('minecraft:wither_skeleton_skull','minecraft:skeleton_skull',{infuse_type:'mekanism:carbon', amount:10}).id('mekanism:metallurgic_infusing/wither_skeleton_skull')

    //钻石粉
    event.recipes.mekanism.crushing('mekanism:dust_diamond','botania:mana_diamond').id('mekanism:crushing/dust_diamond')

    //精密锯木机
    event.replaceInput({id:'mekanism:precision_sawmill'},'mekanism:alloy_infused','mekanism:alloy_atomic')
    event.replaceInput({id:'mekanism:precision_sawmill'},'mekanism:basic_control_circuit','mekanism:ultimate_control_circuit')

    //热力蒸馏
    event.replaceInput({id:'mekanism:thermal_evaporation/controller'},'mekanism:advanced_control_circuit','mekanism:ultimate_control_circuit')

    //盐水
    event.custom({
        type:"mekanism:evaporating",
        input:{amount:100, fluid:"minecraft:water"},
        output:{amount:1, fluid:"mekanism:brine"}
    }).id('mekanism:evaporating/brine')

    //液态锂
    event.custom({
        type:"mekanism:evaporating",
        input:{amount:100, tag:"forge:brine"},
        output:{amount:1, fluid:"mekanism:lithium"}
    }).id('mekanism:evaporating/lithium')

    event.custom({
        type:"mekanism:evaporating",
        input:{amount:1, fluid:'exnihilosequentia:sea_water'},
        output:{amount:1, fluid:"mekanism:lithium"}
    }).id('mekanism:evaporating/lithium_1')

    //复合钢
    event.recipes.mekanism.injecting('kubejs:compositesteel_ingot','mekanism:ingot_steel',{gas:'kubejs:soul',amount:1})
    .id('mekanism:injecting/compositesteel_ingot')

    //灵魂 气液转化
    event.custom({
        type:"mekanism:rotary",
        fluidInput:{amount:5,fluid:"kubejs:soul"},
        fluidOutput:{amount:5,fluid:"kubejs:soul"},
        gasInput:{amount:1,gas:"kubejs:soul"},
        gasOutput:{amount:1,gas:"kubejs:soul"}
    }).id('mekanism:rotary/soul')

    //强化萤石粉
    event.recipes.mekanism.metallurgic_infusing('kubejs:dust_refined_glowstone','4x minecraft:glowstone_dust',{infuse_type:'mekanism:diamond',amount:10}).id('mekanism:metallurgic_infusing/dust_refined_glowstone')

    //强化荧石锭
    event.replaceInput({id:'mekanism:processing/refined_glowstone/ingot/from_dust'},'minecraft:glowstone_dust','kubejs:dust_refined_glowstone')

    //化学氧化机
    event.replaceInput({id:'mekanism:chemical_oxidizer'},'mekanism:alloy_infused','mekanism:ingot_refined_glowstone')
    event.replaceInput({id:'mekanism:chemical_oxidizer'},'mekanism:basic_control_circuit','mekanism:advanced_control_circuit')

    //氢氟酸
    event.recipes.mekanism.dissolution({gas:'mekanism:hydrofluoric_acid',amount:1000},{gas:'mekanism:hydrogen_chloride', amount:2},'mekanism:dust_fluorite').id('mekanism:dissolution/hydrofluoric_acid')

    //基础能量立方
    event.shaped('mekanism:basic_energy_cube',[
        'aba',
        'cdc',
        'aba'
    ],{
        a:'minecraft:redstone',
        b:'thermal:rf_potato',
        c:'minecraft:iron_ingot',
        d:'thermal:machine_frame'
    }).id('mekanism:basic_energy_cube')

    //盖亚机
    event.custom({
        type:"mekanism:nucleosynthesizing",
        duration:500,
        gasInput:{amount:100, gas:"mekanism:antimatter"},
        itemInput:{
            ingredient:{
                item:'create:refined_radiance_casing'
            }
        },
        output:{item:'kubejs:gaia_machine'}
    }).id('mekanism:nucleosynthesizing/gaia_machine')

    //盖亚水晶
    event.custom({
        type:"mekanism:nucleosynthesizing",
        duration:500,
        gasInput:{amount:100, gas:"mekanism:antimatter"},
        itemInput:{
            ingredient:{
                item:'botania:natura_pylon'
            }
        },
        output:{item:'botania:gaia_pylon'}
    }).id('mekanism:nucleosynthesizing/gaia_pylon')

    //铁锭
    event.recipes.mekanism.enriching('minecraft:iron_ingot','kubejs:cast_iron').id('mekanism:enriching/iron_ingot')

    //紫珀粉
    event.recipes.mekanism.crushing('kubejs:purpur_dust','minecraft:popped_chorus_fruit').id('mekanism:crushing/purpur_dust')

    //处理器
    event.recipes.mekanism.metallurgic_infusing('refinedstorage:improved_processor','refinedstorage:basic_processor',{infuse_type:'mekanism:gold', amount:10})
    event.recipes.mekanism.metallurgic_infusing('refinedstorage:advanced_processor','refinedstorage:improved_processor',{infuse_type:'mekanism:diamond', amount:10})

    //富集紫水晶
    event.recipes.mekanism.enriching('kubejs:enriched_amethyst','minecraft:amethyst_shard').id('kubejs:enriching/enriched_amethyst')

    //充能赛特斯石英
    event.recipes.mekanism.metallurgic_infusing('ae2:charged_certus_quartz_crystal','ae2:certus_quartz_crystal',{
        infuse_type:'mekanism:redstone',amount:10
    }).id('mekanism:metallurgic_infusing/charged_certus_quartz_crystal')

    //福鲁伊克斯
    event.recipes.mekanism.metallurgic_infusing('3x ae2:fluix_crystal','ae2:charged_certus_quartz_crystal',{
        infuse_type:'kubejs:amethyst', amount:30
    }).id('mekanism:metallurgic_infusing/fluix_crystal')

    //灌注 紫水晶
    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {item:'minecraft:amethyst_shard'}
            ]
        },
        output:{
            amount:10,
            infuse_type:'kubejs:amethyst'
        }
    }).id('mekanism:infusion_conversion/amethyst_from_amethyst_shard')

    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {item:'minecraft:amethyst_block'}
            ]
        },
        output:{
            amount:40,
            infuse_type:'kubejs:amethyst'
        }
    }).id('mekanism:infusion_conversion/amethyst_from_amethyst_block')

    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {item:'kubejs:enriched_amethyst'}
            ]
        },
        output:{
            amount:80,
            infuse_type:'kubejs:amethyst'
        }
    }).id('mekanism:infusion_conversion/amethyst_from_enriched_amethyst')

    //紫颂锭
    event.recipes.mekanism.smelting('kubejs:purpur_ingot','kubejs:purpur_dust').id('mekanism:smelting/purpur_ingot')

    //热力蒸馏方块
    event.shaped('4x mekanism:thermal_evaporation_block',[
        ' a ',
        'aba',
        ' a '
    ],{
        a:'minecraft:copper_ingot',
        b:'kubejs:compositesteel_ingot'
    }).id('mekanism:thermal_evaporation/block')

    //四氯化硅气液转换
    event.custom({
        type:"mekanism:rotary",
        fluidInput:{amount:1,fluid:"kubejs:silicon_tetrachloride"},
        fluidOutput:{amount:1,fluid:"kubejs:silicon_tetrachloride"},
        gasInput:{amount:1,gas:"kubejs:silicon_tetrachloride"},
        gasOutput:{amount:1,gas:"kubejs:silicon_tetrachloride"}
    }).id('mekanism:rotary/silicon_tetrachloride')

    //硅
    event.custom({
        type:"mekanism:reaction",
        duration:60,
        energyRequired:1000,
        gasInput:{
            amount:20,
            gas: "mekanism:chlorine"
        },
        fluidInput:{
            amount:50,
            fluid:"minecraft:water"
        },
        itemInput:{
            ingredient:{
                item:'refinedstorage:silicon'
            }
        },
        gasOutput:{
            amount:10,
            gas: "kubejs:silicon_tetrachloride"
        }
    }).id('mekanism:reaction/silicon_tetrachloride')

    event.custom({
        type:"mekanism:reaction",
        duration:60,
        energyRequired:1000,
        fluidInput:{
            amount:10,
            fluid:"kubejs:silicon_tetrachloride"
        },
        gasInput:{
            amount:20,
            gas: "mekanism:hydrogen"
        },
        itemInput:{
            ingredient:{
                item:'refinedstorage:silicon'
            }
        },
        itemOutput:{
            item:'ae2:silicon',
            count:1
        },
        gasOutput:{
            amount:40,
            gas: "mekanism:hydrogen_chloride"
        }
    }).id('mekanism:reaction/silicon')

    //暴雪立方
    event.recipes.mekanism.enriching('thermal:blizz_rod','4x minecraft:blue_ice')
    .id('mekanism:enriching/blizz_rod')

    // 钚靶丸
    event.custom({
        "type": "mekanism:reaction",
        "duration": 200,
        "fluidInput": {
            "amount": 1000,
            "tag": "minecraft:water"
        },
        "gasInput": {
            "amount": 200,
            "gas": "mekanism:plutonium"
        },
        "gasOutput": {
            "amount": 200,
            "gas": "mekanism:spent_nuclear_waste"
        },
        "itemInput": {
            "ingredient": {
                "tag": "forge:dusts/fluorite"
            }
        },
        "itemOutput": {
            "item": "mekanism:pellet_plutonium"
        }
    }).id('mekanism:processing/lategame/plutonium_pellet/from_reaction')

    // 钋靶丸
    event.custom({
        "type": "mekanism:reaction",
        "duration": 200,
        "fluidInput": {
            "amount": 1000,
            "tag": "minecraft:water"
        },
        "gasInput": {
            "amount": 200,
            "gas": "mekanism:polonium"
        },
        "gasOutput": {
            "amount": 200,
            "gas": "mekanism:spent_nuclear_waste"
        },
        "itemInput": {
            "ingredient": {
                "tag": "forge:dusts/fluorite"
            }
        },
        "itemOutput": {
            "item": "mekanism:pellet_polonium"
        }
    }).id('mekanism:processing/lategame/polonium_pellet/from_reaction')

    //反物质靶丸
    event.recipes.mekanism.crystallizing('mekanism:pellet_antimatter',{amount:200,gas:'mekanism:antimatter'})
    .id('mekanism:processing/lategame/antimatter_pellet/from_gas')

    event.custom({
        "type":"mekanism:oxidizing",
        "input":{
            "ingredient":{
                "tag":"forge:pellets/antimatter"
            }
        },
        "output":{
            "amount":200,
            "gas":"mekanism:antimatter"}
        })
    .id('mekanism:processing/lategame/antimatter/from_pellet')

    //富集赛特斯石英
    event.recipes.mekanism.enriching('kubejs:enriched_certus_quartz','ae2:certus_quartz_crystal').id('kubejs:enriching/enriched_certus_quartz')

    //灌注 赛特斯石英
    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {item:'ae2:certus_quartz_crystal'}
            ]
        },
        output:{
            amount:10,
            infuse_type:'kubejs:certus_quartz'
        }
    }).id('mekanism:infusion_conversion/certus_quartz_from_certus_quartz_crystal')
    event.custom({
        type:"mekanism:infusion_conversion",
        input:{
            ingredient:[
                {item:'kubejs:enriched_certus_quartz'}
            ]
        },
        output:{
            amount:80,
            infuse_type:'kubejs:certus_quartz'
        }
    }).id('mekanism:infusion_conversion/certus_quartz_from_enriched_certus_quartz')

    //逻辑处理器
    event.recipes.mekanism.metallurgic_infusing('refinedstorage:basic_processor','refinedstorage:quartz_enriched_iron',{infuse_type:'kubejs:certus_quartz', amount:20}).id('mekanism:metallurgic_infusing/basic_processor')

    //氘氚燃料
    event.custom({
        type:"mekanism:reaction",
        duration:60,
        energyRequired:1000,
        fluidInput:{
            amount:10,
            fluid:"minecraft:water"
        },
        gasInput:{
            amount:10,
            gas: "mekanism:water_vapor"
        },
        itemInput:{
            ingredient:{
                item:'ae2:purple_lumen_paint_ball'
            }
        },
        itemOutput:{
            item:'ae2:purple_paint_ball',
            count:1
        },
        gasOutput:{
            amount:4000,
            gas: "mekanismgenerators:fusion_fuel"
        }
    }).id('mekanism:reaction/fusion_fuel')

    //光通染色球
    event.recipes.mekanism.purifying('ae2:purple_lumen_paint_ball','ae2:purple_paint_ball',{gas:'kubejs:matter',amount:5}).id('mekanism:purifying/purple_lumen_paint_ball')
    event.recipes.mekanism.injecting('ae2:purple_lumen_paint_ball','ae2:purple_paint_ball',{gas:'kubejs:matter',amount:5}).id('mekanism:injecting/purple_lumen_paint_ball')

    //物质
    event.custom({
        type:"mekanism:gas_conversion",
        input:{
            ingredient:{
                item:'ae2:matter_ball'
            }
        },
        output:{
            amount:100,
            gas:"kubejs:matter"
        }
    }).id('mekanism:gas_conversion/matter_ball')

    event.custom({
        type:"mekanism:gas_conversion",
        input:{
            ingredient:{
                item:'kubejs:matter_group'
            }
        },
        output:{
            amount:1000,
            gas:"kubejs:matter"
        }
    }).id('mekanism:gas_conversion/matter_group')

})