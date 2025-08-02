ServerEvents.recipes(event=>{
    //手持工作台
    event.shaped('cyclic:crafting_stick', [
        "  a",
        " b ",
        "b  "
    ],
    {
        a: 'kubejs:crafting_table_pannel',
        b: 'stick'
    })
    .id('cyclic:crafting_stick')

    //自动玩家模拟器
    event.shaped('cyclic:user',[
        'aba',
        'cdc',
        'eee'
    ],{
        a:'minecraft:gold_ingot',
        b:'minecraft:dispenser',
        c:'redstone_block',
        d:'kubejs:dilute_mana_iron_block',
        e:'minecraft:obsidian'
    })
    .id('cyclic:user_0')

    event.shaped('cyclic:user',[
        'aba',
        'cdc',
        'eee'
    ],{
        a:'minecraft:gold_ingot',
        b:'minecraft:dispenser',
        c:'minecraft:copper_block',
        d:'minecraft:quartz_block',
        e:'thermal:cured_rubber_block'
    })
    .id('cyclic:user_1')

    //金漏斗
    event.replaceInput({id:'cyclic:hopper_gold'},'cyclic:hopper','woodenhopper:wooden_hopper')

    //熔岩炉
    event.replaceInput({id:'cyclic:melter'},'furnace','thermal:machine_furnace')
    //结晶机
    event.replaceInput({id:'cyclic:solidifier'},'quartz','thermal:quartz_dust')
    event.replaceInput({id:'cyclic:solidifier'},'cyclic:obsidian_pressure_plate','minecraft:obsidian')

    //末影灌注之翼
    event.replaceInput({id:'cyclic:charm_home'},'minecraft:ender_eye','cyclic:charm_world')

    //灌注之翼
    event.shaped('cyclic:charm_world',[
        'aab',
        'cca',
        'dca'
    ],{
        a:'minecraft:feather',
        b:'botania:terrasteel_ingot',
        c:'minecraft:gold_ingot',
        d:'cyclic:gem_amber'
    }).id('cyclic:charm_world')

    //琥珀结晶
    event.custom({
        type: "cyclic:solidifier",
        ingredients:[
            {
                item: 'botania:rune_fire'
            },
            {
                tag: "forge:storage_blocks/redstone"
            },
            {
                tag: "forge:ingots/gold"
            }
        ],
        mix: {
            tag: "forge:magma",
            count: 1000
        },
        energy: {
            rfpertick: 100,
            ticks: 120
        },
        result: {
            item: "cyclic:gem_amber",
            count: 2
        }
      }).id("cyclic:solidifier/solidifier_amberalt")

      //物质发电
      event.custom({
        "type": "cyclic:generator_item",
        "fuel": {
            "item": 'botania:mana_pearl'
        },
        "energy": {
            "ticks": 300,
            "rfpertick": 1600
        },
        "conditions": [
            {
                "values": [
                    {
                        "modid": "cyclic",
                        "type": "forge:mod_loaded"
                    },
                    {
                        "item": "cyclic:generator_item",
                        "type": "forge:item_exists"
                    }
                ],
                "type": "forge:and"
            }
        ]
    }).id('cyclic:generator_item/mana_pearl')

    //蒸发发电
    event.custom({
        "type": "cyclic:generator_fluid",
        "fuel": {
            "fluid": 'kubejs:chorus',
            "count": 1000
        },
        "energy": {
            "ticks": 100,
            "rfpertick": 600
        },
        "conditions": [
            {
                "values": [
                    {
                        "modid": "cyclic",
                        "type": "forge:mod_loaded"
                    },
                    {
                        "item": "cyclic:generator_fluid",
                        "type": "forge:item_exists"
                    }
                ],
                "type": "forge:and"
            }
        ]
    }).id('cyclic:generator_fluid/chorus')

    //健体苹果
    event.replaceInput({id:'cyclic:apple_lofty_stature'},'minecraft:egg', 'minecraft:brown_mushroom')
})