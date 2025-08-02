ServerEvents.recipes(event =>{
    //泥棒 水 木棍
    event.custom({
        type:"lychee:item_inside",
        item_in: { item: "kubejs:dirt_stick" },
        block_in: { blocks: ["minecraft:water"] },
        post:  {  type: "drop_item",  item: "minecraft:stick"}   
    })
    .id('lychee:item_inside/stick')

    //灌木 水 草
    event.custom({
        type:"lychee:item_inside",
        item_in: { item: "minecraft:dead_bush" },
        block_in: { blocks: ["minecraft:water"] },
        post:  {  type: "drop_item",  item: "minecraft:grass"}
    })
    .id('lychee:item_inside/grass')


    //树皮方块
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            item: "stick"
        },
        block_in: 'oak_planks',
        post: [
            {
                type: "place",
                block: "kubejs:oak_bark_block"
            }
        ]
    })
    .id('lychee:block_interacting/oak_bark_block')

    //去皮树皮方块
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            tag: "forge:axes"
        },
        block_in: 'kubejs:oak_bark_block',
        post: [
            {
                type: "place",
                block: "air"
            },
            {
                type: "damage_item"
            }
        ]
    })
    .id('lychee:block_interacting/axe_on_oak_bark_block')

    //去皮仿真橡木
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            tag: "forge:axes"
        },
        block_in: 'kubejs:fake_oak_log',
        post: [
            {
                type: "place",
                block: "oak_planks"
            },
            {
                type: "damage_item"
            }
        ]
    })
    .id('lychee:axe_on_fake_oak_log')

    //铁砧挖掘
    let anvilcrush= (i, o) => (
        event.custom({
            type:"lychee:block_crushing",
            landing_block: {
                blocks:i
            },
            contextual: {
                type: "location",
                offsetY: -2,
                predicate: {
                    block: {
                        blocks: [ "stonecutter" ]
                    }
                }
            },
            post: [
                {
                    type: "place",
                    block: "*"
                },
                {
                    type: "drop_item",
                    item: o
                }
            ]
        })
    )

    //铁砧粉碎
    let stonecutter = (i,o) =>(
        event.custom({
            type:"lychee:block_crushing",
            landing_block: {
                blocks:i
            },
            contextual: {
                type: "location",
                offsetY: -2,
                predicate: {
                    block: {
                        blocks: [ "grindstone" ]
                    }
                }
            },
            post: [
                {
                    type: "place",
                    block: "*"
                },
                {
                    type: "drop_item",
                    item: o
                }
            ]
        })
    )

    stonecutter(['minecraft:stone'], 'minecraft:cobblestone').id('lychee:stone/cobblestone')

    stonecutter(['cobblestone'], "gravel").id('lychee:cobblestone/gravel')

    stonecutter(['gravel'], "sand").id('lychee:gravel/sand')

    stonecutter(['sand'], "exnihilosequentia:dust").id('lychee:sand/dust')


    anvilcrush(["stone","cobblestone"],"cobblestone").id('lychee:anvilcrush/cobblestone')

    anvilcrush(["obsidian"],"obsidian").id('lychee:anvilcrush/obsidian')


    //铁砧合成炼药锅
    event.custom({
        type:"lychee:block_crushing",
            item_in: [
                {item:'kubejs:cauldron_plate'},
                {item:'kubejs:cauldron_plate'},
                {item:'kubejs:cauldron_plate'},
                {item:'kubejs:cauldron_plate'},
                {item:'kubejs:cauldron_plate'}
            ],
            post: [
                {
                    type: "drop_item",
                    item: 'minecraft:cauldron',
                    count:1
                }
            ]
    })
    .id('lychee:block_crushing/auldron')

    //铁活板门
    event.custom({
        type:"lychee:block_crushing",
        item_in: [
            {item:'create:iron_sheet'}
        ],
        contextual: {
            type: "location",
            offsetY: -1,
            predicate: {
                block: {
                    blocks: [ "cauldron" ]
                }
            }
        },
        post:[
            {
                type:"drop_item",
                item:'iron_trapdoor'
            }
        ]
    })
    .id('lychee:block_crushing/iron_trapdoor')


    //黑莲花
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            tag: "forge:tools/hoes"
        },
        block_in: 'kubejs:blacker_lotus_block',
        post: [
            {
                type: "drop_item",
                item: "botania:black_lotus",
                count:4
            },
            {
                type: "place",
                block: "*"
            },
            {
                type: "damage_item"
            }
        ]
    })
    .id('lychee:block_interacting/black_lotus')

    //红石块
    event.custom({
        type: "lychee:block_crushing",
        landing_block: "kubejs:red_dust_block",
        contextual: {
            type: "location",
            offsetY: -2,
            predicate: {
                block: {
                    blocks: [ "stone" ]
                }
            }
        },
        post: [
            {
                type: "place",
                block: "*"
            },
            {
                type: "place",
                offsetY: -1,
                block: "redstone_block"
            }
        ]
    })
    .id('lychee:block_crushing/redstone_block')

    //去魔铁块
    event.custom({
        type: "lychee:block_crushing",
        landing_block: "botania:manasteel_block",
        post: [
            {
                type: "place",
                block: "kubejs:dilute_mana_iron_block"
            }
        ]
    })
    .id('lychee:block_crushing/dilute_mana_iron_block')

    //金属板
    let plate = (i,o,c) =>(
        event.custom({
            type: "lychee:block_crushing",
            landing_block: i,
            post: [
                {
                    type: "drop_item",
                    item: o,
                    count:c
                },
                {
                    type: "place",
                    block: "*"
                }
            ]
        })
    )
    //铁板
    plate('iron_block','create:iron_sheet',3).id('lychee:block_crushing/iron_sheet')
    //钢板
    plate('immersiveengineering:storage_steel','immersiveengineering:plate_steel',3).id('lychee:block_crushing/plate_steel')


    //工程块
    let engineer = (item,block,output) =>(
        event.custom({
            type: "lychee:block_interacting",
            item_in: {
                item:item
            },
            block_in: block,
            post: [
                {
                    type: "place",
                    block: output
                }
            ]
        })
    )

    engineer('minecraft:redstone','kubejs:light_frame','immersiveengineering:rs_engineering')
    .id('lychee:block_interacting/rs_engineering')

    engineer('immersiveengineering:component_iron','kubejs:light_frame','immersiveengineering:light_engineering')
    .id('lychee:block_interacting/light_engineering')

    engineer('immersiveengineering:component_steel','kubejs:heavy_frame','immersiveengineering:heavy_engineering')
    .id('lychee:block_interacting/heavy_engineering')

    //钢棒
    event.custom({
        type:"lychee:block_crushing",
            item_in: [
                {
                    item:'immersiveengineering:mold_rod'
                },
                {
                    item:'mekanism:ingot_steel'
                }
            ],
            post: [
                {
                    type: "drop_item",
                    item: 'immersiveengineering:mold_rod',
                    count:1
                },
                {
                    type: "drop_item",
                    item: 'immersiveengineering:stick_steel',
                    count:2
                }
            ]
    }).id('lychee:stick_steel')

    //锭 塑型
    let chiller_ingot_cast = (fluid_bucket,ingot,count) =>(
        event.custom({
            type:"lychee:block_crushing",
                item_in: [
                    {
                        item:'thermal:chiller_ingot_cast'
                    },
                    {
                        item:fluid_bucket
                    }
                ],
                contextual: {
                    type: "location",
                    offsetY: -1,
                    predicate: {
                        block: {
                            blocks: [ "cauldron" ]
                        }
                    }
                },
                post: [
                    {
                        type: "drop_item",
                        item: 'thermal:chiller_ingot_cast',
                        count:1
                    },
                    {
                        type: "drop_item",
                        item: ingot,
                        count:count
                    },
                    {
                        type: "drop_item",
                        item: 'bucket',
                        count:1
                    }
                ]
        })
    )

    chiller_ingot_cast('kubejs:composite_steel_bucket','kubejs:compositesteel_ingot',1)
    .id('lychee:block_crushing/compositesteel_ingot')

    chiller_ingot_cast('kubejs:andesite_alloy_bucket','create:andesite_alloy',10)
    .id('lychee:block_crushing/andesite_alloy')


    //灰色皮革
    event.custom({
        type: "lychee:item_inside",
        item_in: [
            {tag: 'forge:leather'},
            {item: 'gray_dye'}
        ],
        block_in: {
            blocks: ["water_cauldron"],
            state: {
                level: 3
            }
        },
        post: [
            {
                type: "drop_item",
                item: "kubejs:gray_leather"
            },
            {
                type: "place",
                block: "cauldron"
            }
        ]
    }).id('lychee:item_inside/gray_leather')

    //铁砧压合
    let cauldronCraft = (i,o) =>(
        event.custom({
            type:"lychee:block_crushing",
            item_in: i,
            contextual: {
                type: "location",
                offsetY: -1,
                predicate: {
                    block: {
                        blocks: [ "cauldron" ]
                    }
                }
            },
            post:[
                {
                    type:"drop_item",
                    item:o
                }
            ]
        })
    )

    cauldronCraft([
        {item:'minecraft:cobblestone'},{item:'minecraft:cobblestone'},{item:'minecraft:cobblestone'},
        {item:'minecraft:cobblestone'},{item:'minecraft:cobblestone'},{item:'minecraft:cobblestone'},
        {item:'minecraft:cobblestone'},{item:'minecraft:cobblestone'},{item:'minecraft:cobblestone'}
    ],'cyclic:compressed_cobblestone').id('lychee:block_crushing/compressed_cobblestone')

    cauldronCraft([
        {item:'minecraft:gravel'},{item:'minecraft:gravel'},{item:'minecraft:gravel'},
        {item:'minecraft:gravel'},{item:'minecraft:gravel'},{item:'minecraft:gravel'},
        {item:'minecraft:gravel'},{item:'minecraft:gravel'},{item:'minecraft:gravel'}
    ],'kubejs:compressed_gravel').id('lychee:block_crushing/compressed_gravel')

    cauldronCraft([
        {item:'minecraft:sand'},{item:'minecraft:sand'},{item:'minecraft:sand'},
        {item:'minecraft:sand'},{item:'minecraft:sand'},{item:'minecraft:sand'},
        {item:'minecraft:sand'},{item:'minecraft:sand'},{item:'minecraft:sand'}
    ],'kubejs:compressed_sand').id('lychee:block_crushing/compressed_sand')
/*
    //金制手部件
    event.custom({
        type:'lychee:block_interacting',
        item_in:{
            item:'create:shaft'
        },
        block_in:'create:andesite_casing',
        contextual:[
            {
                type:'and',
                contextual:[
                    {type:'execute', command:'execute if block ~ ~-1 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~1 ~-1 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~-1 ~-1 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-2 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~1 ~-2 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~-1 ~-2 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~1 ~-3 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~1 ~-4 ~ kubejs:golden_frame'}
                ]
            }
        ],
        post:[
            {
                type:'drop_item',
                item:'kubejs:golden_hand'
            },
            {type:'place', block:'*'},
            {type:'place', block:'*', offsetY:-1},
            {type:'place', block:'*', offsetY:-1, offsetX:1},
            {type:'place', block:'*', offsetY:-1, offsetX:-1},
            {type:'place', block:'*', offsetY:-2},
            {type:'place', block:'*', offsetY:-2, offsetX:1},
            {type:'place', block:'*', offsetY:-2, offsetX:-1},
            {type:'place', block:'*', offsetY:-3, offsetX:1},
            {type:'place', block:'*', offsetY:-4, offsetX:1},
        ]
    }).id('lychee:golden_hand_0')
    event.custom({
        type:'lychee:block_interacting',
        item_in:{
            item:'create:shaft'
        },
        block_in:'create:andesite_casing',
        contextual:[
            {
                type:'and',
                contextual:[
                    {type:'execute', command:'execute if block ~ ~-1 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~1 ~-1 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~-1 ~-1 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-2 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~1 ~-2 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~-1 ~-2 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~-1 ~-3 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~-1 ~-4 ~ kubejs:golden_frame'}
                ]
            }
        ],
        post:[
            {
                type:'drop_item',
                item:'kubejs:golden_hand'
            },
            {type:'place', block:'*'},
            {type:'place', block:'*', offsetY:-1},
            {type:'place', block:'*', offsetY:-1, offsetX:1},
            {type:'place', block:'*', offsetY:-1, offsetX:-1},
            {type:'place', block:'*', offsetY:-2},
            {type:'place', block:'*', offsetY:-2, offsetX:1},
            {type:'place', block:'*', offsetY:-2, offsetX:-1},
            {type:'place', block:'*', offsetY:-3, offsetX:-1},
            {type:'place', block:'*', offsetY:-4, offsetX:-1},
        ]
    }).id('lychee:golden_hand_1')
    event.custom({
        type:'lychee:block_interacting',
        item_in:{
            item:'create:shaft'
        },
        block_in:'create:andesite_casing',
        contextual:[
            {
                type:'and',
                contextual:[
                    {type:'execute', command:'execute if block ~ ~-1 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-1 ~1 kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-1 ~-1 kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-2 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-2 ~1 kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-2 ~-1 kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-3 ~1 kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-4 ~1 kubejs:golden_frame'}
                ]
            }
        ],
        post:[
            {
                type:'drop_item',
                item:'kubejs:golden_hand'
            },
            {type:'place', block:'*'},
            {type:'place', block:'*', offsetY:-1},
            {type:'place', block:'*', offsetY:-1, offsetZ:1},
            {type:'place', block:'*', offsetY:-1, offsetZ:-1},
            {type:'place', block:'*', offsetY:-2},
            {type:'place', block:'*', offsetY:-2, offsetZ:1},
            {type:'place', block:'*', offsetY:-2, offsetZ:-1},
            {type:'place', block:'*', offsetY:-3, offsetZ:1},
            {type:'place', block:'*', offsetY:-4, offsetZ:1},
        ]
    }).id('lychee:golden_hand_2')
    event.custom({
        type:'lychee:block_interacting',
        item_in:{
            item:'create:shaft'
        },
        block_in:'create:andesite_casing',
        contextual:[
            {
                type:'and',
                contextual:[
                    {type:'execute', command:'execute if block ~ ~-1 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-1 ~1 kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-1 ~-1 kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-2 ~ kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-2 ~1 kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-2 ~-1 kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-3 ~-1 kubejs:golden_frame'},
                    {type:'execute', command:'execute if block ~ ~-4 ~-1 kubejs:golden_frame'}
                ]
            }
        ],
        post:[
            {
                type:'drop_item',
                item:'kubejs:golden_hand'
            },
            {type:'place', block:'*'},
            {type:'place', block:'*', offsetY:-1},
            {type:'place', block:'*', offsetY:-1, offsetZ:1},
            {type:'place', block:'*', offsetY:-1, offsetZ:-1},
            {type:'place', block:'*', offsetY:-2},
            {type:'place', block:'*', offsetY:-2, offsetZ:1},
            {type:'place', block:'*', offsetY:-2, offsetZ:-1},
            {type:'place', block:'*', offsetY:-3, offsetZ:-1},
            {type:'place', block:'*', offsetY:-4, offsetZ:-1},
        ]
    }).id('lychee:golden_hand_3')
*/
    //稀硫酸
    event.custom({
        type:"lychee:item_inside",
        item_in: { tag: "kubejs:sulfur" },
        block_in: { blocks: ["minecraft:water"] },
        contextual: {
            type: "location",
            offsetY: -1,
            predicate: {
                block: {
                    blocks: [ 'kubejs:alchemy_catalyst' ]
                }
            }
        },
        post:  {  type: "place",  block: 'kubejs:diluted_sulfuric_acid'}
    })
    .id('lychee:item_inside/diluted_sulfuric_acid')

    //微光活木与活木
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            item: 'botania:twig_wand'
        },
        block_in: 'botania:livingwood_log',
        post: [
            {
                type: "place",
                block: 'botania:glimmering_livingwood_log'
            },
            {
                type: "prevent_default"
            }
        ]
    }).id('lychee:block_interacting/glimmering_livingwood_log')
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            item: 'botania:twig_wand'
        },
        block_in: 'botania:glimmering_livingwood_log',
        post: [
            {
                type: "place",
                block: 'botania:livingwood_log'
            },
            {
                type: "prevent_default"
            }
        ]
    }).id('lychee:block_interacting/livingwood_log')

    //青金石结晶
    event.custom({
        type:"lychee:item_inside",
        item_in: { item: 'thermal:lapis_dust' },
        block_in: { blocks: ['kubejs:liquid_mana'] },
        post:  [
            {type: "place",  block: 'kubejs:lapis_crystallize'},
            {type: "execute",command:"summon minecraft:lightning_bolt ~ ~ ~",hide:true}
        ]
    }).id('lychee:item_inside/lapis_crystallize')

    //硫酸铜溶液
    event.custom({
        type:"lychee:item_inside",
        item_in: { item: 'minecraft:deepslate_copper_ore' },
        block_in: { blocks: ['kubejs:diluted_sulfuric_acid'] },
        post:  [
            {type: "place",  block: 'kubejs:rich_copper_sulfate_solution'}
        ]
    }).id('lychee:item_inside/rich_copper_sulfate_solution')
    event.custom({
        type:"lychee:item_inside",
        item_in: { item: 'minecraft:copper_ore' },
        block_in: { blocks: ['kubejs:diluted_sulfuric_acid'] },
        post:  [
            {type: "place",  block: 'kubejs:copper_sulfate_solution'}
        ]
    }).id('lychee:item_inside/copper_sulfate_solution')

    //铜锭
    /*
    event.custom({
        type:"lychee:item_inside",
        item_in: { item: 'minecraft:iron_ingot' },
        block_in: { blocks: ['kubejs:rich_copper_sulfate_solution'] },
        post:  [
            {type: "drop_item",  item: 'minecraft:copper_ingot', count:4},
            {type: "place",  block: 'kubejs:ferrous_sulfate_solution'}
        ]
    }).id('lychee:item_inside/copper_ingot_from_rich_copper_sulfate_solution')
    event.custom({
        type:"lychee:item_inside",
        item_in: { item: 'minecraft:iron_ingot' },
        block_in: { blocks: ['kubejs:copper_sulfate_solution'] },
        post:  [
            {type: "drop_item",  item: 'minecraft:copper_ingot', count:2},
            {type: "place",  block: 'kubejs:ferrous_sulfate_solution'}
        ]
    }).id('lychee:item_inside/copper_ingot_from_copper_sulfate_solution')
*/
    //富石英铁
    event.custom({
        type:"lychee:block_crushing",
        item_in: [
            {item:'minecraft:iron_ingot'},
            {item:'thermal:quartz_dust'}
        ],
        contextual: {
            type: "location",
            offsetY: -1,
            predicate: {
                block: {
                    blocks: [ "cauldron" ]
                }
            }
        },
        post:[
            {
                type:"drop_item",
                item:'refinedstorage:quartz_enriched_iron'
            }
        ]
    }).id('lychee:block_crushing/cauldron/quartz_enriched_iron')

})