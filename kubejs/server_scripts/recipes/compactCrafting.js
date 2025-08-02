ServerEvents.recipes(event =>{
    //压缩泥土
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 1,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "C"
            }
        ],
        catalyst: {
            id: "dirt",
            Count: 1
        },
        components: {
            C: {
                type: "compactcrafting:block",
                block: "dirt"
            }
        },
        outputs: [
            {
                id: "kubejs:compressed_dirt",
                Count: 1
            }
        ]
    })
    .id("compactcrafting:compressed_dirt")

    //二重压缩泥土
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 2,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "C"
            },
            {
                type: "compactcrafting:filled",
                component: "C"
            }
        ],
        catalyst: {
            id: "kubejs:compressed_dirt",
            Count: 1
        },
        components: {
            C: {
                type: "compactcrafting:block",
                block: "dirt"
            }
        },
        outputs: [
            {
                id: "kubejs:dcompressed_dirt",
                Count: 1
            }
        ]
    })
    .id("compactcrafting:dcompressed_dirt")
    //粘土桶
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:hollow",
                wall: "C"
            },
            {
                type: "compactcrafting:filled",
                component: "C"
            }
        ],
        catalyst: {
            id: "stick",
            Count: 1
        },
        components: {
            C: {
                type: "compactcrafting:block",
                block: "dirt"
            }
        },
        outputs: [
            {
                id: 'ceramicbucket:ceramic_bucket',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:ceramicbucket/ceramic_bucket")

    //工作台面板
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "C"
            }
        ],
        catalyst: {
            id: "stick",
            Count: 1
        },
        components: {
            C: {
                type: "compactcrafting:block",
                block: "kubejs:fake_oak_log"
            }
        },
        outputs: [
            {
                id: 'kubejs:crafting_table_pannel',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:crafting_table_pannel")

    //仿真橡木原木
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["A","A","A"],
                    ["A","B","A"],
                    ["A","A","A"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["A","A","A"],
                    ["A","B","A"],
                    ["A","A","A"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["A","A","A"],
                    ["A","B","A"],
                    ["A","A","A"]
                ]
            }
        ],
        catalyst: {
            id: "minecraft:oak_planks",
            Count: 1
        },
        components: {
            A: {
                type: "compactcrafting:block",
                block: "kubejs:oak_bark_block"
            },
            B:{
                type: "compactcrafting:block",
                block: "minecraft:oak_planks"
            }
        },
        outputs: [
            {
                id: 'kubejs:fake_oak_log',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:fake_oak_log")

    //橡木桶
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:hollow",
                wall: "a"
            },
            {
                type: "compactcrafting:hollow",
                wall: "a"
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: "minecraft:oak_planks",
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: "minecraft:oak_planks"
            }
        },
        outputs: [
            {
                id: 'exnihilosequentia:oak_barrel',
                Count: 4
            }
        ]
    })
    .id("compactcrafting:exnihilosequentia/oak_barrel")

    //橡树树苗
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 5,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["a","a","b","a","a"],
                    ["a","b","b","b","a"],
                    ["a","a","b","a","a"],
                    ["a","a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["a","b","b","b","a"],
                    ["a","b","c","b","a"],
                    ["a","b","b","b","a"],
                    ["a","a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","b","b","b","b"],
                    ["b","b","b","b","b"],
                    ["b","b","c","b","b"],
                    ["b","b","b","b","b"],
                    ["b","b","b","b","b"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","b","b","b","b"],
                    ["b","b","b","b","b"],
                    ["b","b","c","b","b"],
                    ["b","b","b","b","b"],
                    ["b","b","b","b","b"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["a","a","a","a","a"],
                    ["a","a","c","a","a"],
                    ["a","a","a","a","a"],
                    ["a","a","a","a","a"]
                ]
            }
        ],
        catalyst: {
            id: "kubejs:fake_oak_log",
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: "minecraft:air"
            },
            b:{
                type: "compactcrafting:block",
                block: "minecraft:dark_oak_leaves"
            },
            c:{
                type: "compactcrafting:block",
                block: 'kubejs:fake_oak_log'
            }
        },
        outputs: [
            {
                id: 'minecraft:oak_sapling',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:oak_sapling")
    //橡木坩埚
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:hollow",
                wall: "a"
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a"],
                    ["a","b","a"],
                    ["a","a","a"]
                ]
            }
        ],
        catalyst: {
            id: "minecraft:oak_planks",
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: "minecraft:oak_planks"
            },
            b: {
                type: "compactcrafting:block",
                block: "kubejs:fake_oak_log"
            }
        },
        outputs: [
            {
                id: 'exnihilosequentia:oak_crucible',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:exnihilosequentia/oak_crucible")

    //草 草皮
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 2,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: "minecraft:grass",
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: "minecraft:grass"
            }
        },
        outputs: [
            {
                id: 'kubejs:sod',
                Count: 4
            }
        ]
    })
    .id("compactcrafting:sod")

    //压缩
    let compress = (i ,mod, o) => (
        event.custom({
            type: "compactcrafting:miniaturization",
            recipeSize: 2,
            layers: [
                {
                    type: "compactcrafting:filled",
                    component: "a"
                },
                {
                    type: "compactcrafting:filled",
                    component: "a"
                }
            ],
            catalyst: {
                id: i,
                Count: 1
            },
            components: {
                a: {
                    type: "compactcrafting:block",
                    block: i
                }
            },
            outputs: [
                {
                    id: mod+ ':' + o,
                    Count: 1
                }
            ]
        })
        .id("compactcrafting:" + o)
    )

    compress('cobblestone','cyclic','compressed_cobblestone')
    compress('gravel','kubejs','compressed_gravel')
    compress('sand','kubejs','compressed_sand')

    //花药台
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a"],
                    ["a","b","a"],
                    ["a","a","a"]
                ]
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","b","b"],
                    ["b","a","b"],
                    ["b","b","b"]
                ]
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'botania:white_double_flower',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: "minecraft:cobblestone"
            },
            b:{
                type: "compactcrafting:block",
                block: "minecraft:air"
            }
        },
        outputs: [
            {
                id: 'botania:apothecary_default',
                Count: 1
            }
        ]
    })
    .id('compactcrafting:botania/pothecary_default')

    //魔力发射器
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "a"
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","c","b"],
                    ["a"," ","a"]
                ]
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'botania:white_double_flower',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'botania:livingwood_planks'
            },
            b: {
                type: "compactcrafting:block",
                block: 'botania:lime_petal_block'
            },
            c: {
                type: "compactcrafting:block",
                block: 'botania:yellow_petal_block'
            }
        },
        outputs: [
            {
                id: 'botania:mana_spreader',
                Count: 2
            }
        ]
    })
    .id('compactcrafting:botania/mana_spreader')

    //稀释魔力池
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a"],
                    ["a"," ","a"],
                    ["a","a","a"]
                ]
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'kubejs:livingdirt',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'kubejs:livingdirt'
            }
        },
        outputs: [
            {
                id: 'botania:diluted_pool',
                Count: 1
            }
        ]
    })
    .id('compactcrafting:botania/diluted_pool')

    //筛子
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 5,
        layers: [
            {
                type: "compactcrafting:hollow",
                wall: "b"
            },
            {
                type: "compactcrafting:hollow",
                wall: "b"
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a"," "," "," ","a"],
                    [" "," "," "," "," "],
                    [" "," "," "," "," "],
                    [" "," "," "," "," "],
                    ["a"," "," "," ","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a"," "," "," ","a"],
                    [" "," "," "," "," "],
                    [" "," "," "," "," "],
                    [" "," "," "," "," "],
                    ["a"," "," "," ","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a"," "," "," ","a"],
                    [" "," "," "," "," "],
                    [" "," "," "," "," "],
                    [" "," "," "," "," "],
                    ["a"," "," "," ","a"]
                ]
            }
        ],
        catalyst: {
            id: 'minecraft:oak_planks',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'minecraft:stripped_oak_log'
            },
            b: {
                type: "compactcrafting:block",
                block: 'minecraft:oak_planks'
            }
        },
        outputs: [
            {
                id: 'exnihilosequentia:oak_sieve',
                Count: 4
            }
        ]
    })
    .id('compactcrafting:oak_sieve')

    //篝火
    event.custom({
        type:"compactcrafting:miniaturization",
        recipeSize:3,
        layers:[
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["c","c","c"],
                    ["c","b","c"],
                    ["c","c","c"]
                ]
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'minecraft:flint_and_steel',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'minecraft:oak_log'
            },
            b: {
                type: "compactcrafting:block",
                block: 'minecraft:fire'
            },
            c:{
                type: "compactcrafting:block",
                block: 'minecraft:air'
            }
        },
        outputs: [
            {
                id: 'campfire',
                Count: 1
            }
        ]
    })
    .id('compactcrafting:campfire')

    //熔炉
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 5,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "a"
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a","a","a"],
                    ["a"," "," "," "," "," ","a"],
                    ["a"," "," "," "," "," ","a"],
                    ["a"," "," "," "," "," ","a"],
                    ["a"," "," "," "," "," ","a"],
                    ["a"," "," "," "," "," ","a"],
                    ["a","a"," "," "," ","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a","a","a"],
                    ["a"," "," "," "," "," ","a"],
                    ["a"," "," "," "," "," ","a"],
                    ["a"," "," "," "," "," ","a"],
                    ["a"," "," "," "," "," ","a"],
                    ["a"," "," "," "," "," ","a"],
                    ["a"," "," "," "," "," ","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","b","b","b","b","b","b"],
                    ["b"," ","a"," ","a"," ","b"],
                    ["b","a","a","a","a","a","b"],
                    ["b"," ","a"," ","a"," ","b"],
                    ["b","a","a","a","a","a","b"],
                    ["b"," ","a"," ","a"," ","b"],
                    ["b","b","b","b","b","b","b"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","b","b","b","b","b","b"],
                    ["b"," "," "," "," "," ","b"],
                    ["b"," "," "," "," "," ","b"],
                    ["b"," "," "," "," "," ","b"],
                    ["b"," "," "," "," "," ","b"],
                    ["b"," "," "," "," "," ","b"],
                    ["b","b"," "," "," ","b","b"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","b","b","b","b","b","b"],
                    ["b"," "," "," "," "," ","b"],
                    ["b"," "," "," "," "," ","b"],
                    ["b"," "," "," "," "," ","b"],
                    ["b"," "," "," "," "," ","b"],
                    ["b"," "," "," "," "," ","b"],
                    ["b"," "," "," "," "," ","b"]
                ]
            },
            {
                type: "compactcrafting:filled",
                component: "b"
            }
        ],
        catalyst: {
            id: 'campfire',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'minecraft:cobblestone'
            },
            b: {
                type: "compactcrafting:block",
                block: 'minecraft:smooth_stone'
            }
        },
        outputs: [
            {
                id: 'furnace',
                Count: 16
            }
        ]
    })
    .id('compactcrafting:furnace')

    //高炉
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 5,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","b","b","a"],
                    ["b","b","b","b","b"],
                    ["b","b","b","b","b"],
                    ["b","b","b","b","b"],
                    ["a","b","b","b","a"]
                ]
            },
            {
                type: "compactcrafting:hollow",
                wall: "b"
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","b","b","b","b"],
                    ["c"," "," "," ","b"],
                    ["c"," "," "," ","b"],
                    ["c"," "," "," ","b"],
                    ["b","b","b","b","b"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["c"," "," "," ","a"],
                    ["c"," "," "," ","a"],
                    ["c"," "," "," ","a"],
                    ["a","a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'campfire',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'minecraft:smooth_stone'
            },
            b: {
                type: "compactcrafting:block",
                block: 'minecraft:blackstone'
            },
            c: {
                type: "compactcrafting:block",
                block: 'minecraft:furnace'
            }
        },
        outputs: [
            {
                id: 'minecraft:blast_furnace',
                Count: 6
            }
        ]
    })
    .id('compactcrafting:blast_furnace')

    //魔力池
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 4,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a"],
                    ["a","b","b","a"],
                    ["a","b","b","a"],
                    ["a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'botania:livingrock',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'botania:livingrock'
            },
            b: {
                type: "compactcrafting:block",
                block: 'botania:diluted_pool'
            }
        },
        outputs: [
            {
                id: 'botania:mana_pool',
                Count: 1
            }
        ]
    })
    .id('compactcrafting:mana_pool')


// @marker
    //符文祭坛
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 5,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["a","a","a","a","a"],
                    ["a","a","b","a","a"],
                    ["a","a","a","a","a"],
                    ["a","a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["e","e","e","e","e"],
                    ["e","c","c","c","e"],
                    ["e","c","d","c","e"],
                    ["e","c","c","c","e"],
                    ["e","e","e","e","e"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["e","e","e","e","e"],
                    ["e","a","a","a","e"],
                    ["e","a","a","a","e"],
                    ["e","a","a","a","e"],
                    ["e","e","e","e","e"]
                ]
            }
        ],
        catalyst: {
            id: 'botania:mana_powder',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'botania:livingrock'
            },
            b: {
                type: "compactcrafting:block",
                block: 'botania:manasteel_block'
            },
            c: {
                type: "compactcrafting:block",
                block: 'kubejs:livingdirt'
            },
            d: {
                type: "compactcrafting:block",
                block: 'minecraft:obsidian'
            },
            e:{
                type: "compactcrafting:block",
                block: 'minecraft:air'
            }
        },
        outputs: [
            {
                id: 'botania:runic_altar',
                Count: 1
            }
        ]
    })
    .id('compactcrafting:runic_altar')

    //暗黑莲花方块
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 2,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "a"
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'botania:black_lotus',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'botania:cell_block'
            }
        },
        outputs: [
            {
                id: 'kubejs:blacker_lotus_block',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:blacker_lotus_block")

// @marker
    //焦炉砖
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","c","b"],
                    ["a","b","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","c","b"],
                    ["c","c","c"],
                    ["b","c","b"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","c","b"],
                    ["a","b","a"]
                ]
            }
        ],
        catalyst: {
            id: 'furnace',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'minecraft:clay'
            },
            b: {
                type: "compactcrafting:block",
                block: 'minecraft:bricks'
            },
            c: {
                type: "compactcrafting:block",
                block: 'kubejs:compressed_sand'
            }
        },
        outputs: [
            {
                id: 'immersiveengineering:cokebrick',
                Count: 27
            }
        ]
    })
    .id("compactcrafting:cokebrick")


    //焦炉砖
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","c","b"],
                    ["a","b","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","c","b"],
                    ["c","c","c"],
                    ["b","c","b"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","c","b"],
                    ["a","b","a"]
                ]
            }
        ],
        catalyst: {
            id: 'blast_furnace',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'minecraft:nether_bricks'
            },
            b: {
                type: "compactcrafting:block",
                block: 'minecraft:bricks'
            },
            c: {
                type: "compactcrafting:block",
                block: 'kubejs:red_dust_block'
            }
        },
        outputs: [
            {
                id: 'immersiveengineering:blastbrick',
                Count: 27
            }
        ]
    })
    .id("compactcrafting:blastbrick")

    //轻型框架
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 2,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "a"
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'copper_block',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'immersiveengineering:sheetmetal_iron'
            }
        },
        outputs: [
            {
                id: 'kubejs:light_frame',
                Count: 8
            }
        ]
    })
    .id("compactcrafting:light_frame")

    //重型框架
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 2,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "a"
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'gold_block',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'immersiveengineering:sheetmetal_steel'
            }
        },
        outputs: [
            {
                id: 'kubejs:heavy_frame',
                Count: 8
            }
        ]
    })
    .id("compactcrafting:heavy_frame")

    //压缩空间墙
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 1,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "a"
            },
            {
                type: "compactcrafting:filled",
                component: "b"
            }
        ],
        catalyst: {
            id: 'kubejs:compositesteel_ingot',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'redstone_block'
            },
            b: {
                type: "compactcrafting:block",
                block: 'iron_block'
            }
        },
        outputs: [
            {
                id: 'compactmachines:wall',
                Count: 32
            }
        ]
    })
    .id("compactcrafting:wall")

    //磁铁机
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 2,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "a"
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'redstone_block',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'kubejs:magnet_block'
            }
        },
        outputs: [
            {
                id: 'kubejs:machine_magnet_block',
                Count: 1
            }
        ]
    })
    .id('compactcrafting:machine_magnet_block')

    //安山机壳
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 2,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "a"
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'create:andesite_alloy',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'thermal:stripped_rubberwood_log'
            }
        },
        outputs: [
            {
                id: 'create:andesite_casing',
                Count: 1
            }
        ]
    })
    .id('compactcrafting:andesite_casing')

    //安山产魔机
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a','a','a'],
                    ['a','b','a'],
                    ['a','a','a']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a','a','a'],
                    ['a','c','a'],
                    ['a','a','a']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a','a','a'],
                    ['a','d','a'],
                    ['a','a','a']
                ]
            }
        ],
        catalyst: {
            id: 'create:andesite_alloy_block',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'create:andesite_casing'
            },
            b: {
                type: "compactcrafting:block",
                block: 'create:andesite_encased_shaft'
            },
            c: {
                type: "compactcrafting:block",
                block: 'kubejs:blacker_lotus_block'
            },
            d: {
                type: "compactcrafting:block",
                block: 'botania:diluted_pool'
            }
        },
        outputs: [
            {
                id: 'kubejs:andesite_mana_generator',
                Count: 1
            }
        ]
    })
    .id('compactcrafting:andesite_mana_generator')

    //金制手部件
    /*
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['','b','']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a','a','a']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a','a','a']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['','','a']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['','','a']
                ]
            }
        ],
        catalyst: {
            id: 'create:shaft',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'kubejs:golden_frame'
            },
            b: {
                type: "compactcrafting:block",
                block: 'create:andesite_casing'
            }
        },
        outputs: [
            {
                id: 'kubejs:golden_hand',
                Count: 1
            }
        ]
    })
    .id('compactcrafting:golden_hand')
    */

    //搅拌器
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['d','d','d'],
                    ['d','b','d'],
                    ['d','d','d']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['d','a','d'],
                    ['a','c','a'],
                    ['d','a','d']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['d','a','d'],
                    ['a','a','a'],
                    ['d','a','d']
                ]
            }
        ],
        catalyst: {
            id: 'create:andesite_alloy',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'minecraft:iron_bars'
            },
            b: {
                type: "compactcrafting:block",
                block: 'create:andesite_encased_shaft'
            },
            c: {
                type: "compactcrafting:block",
                block: 'immersiveengineering:sheetmetal_iron'
            },
            d:{
                type: "compactcrafting:block",
                block: 'minecraft:air'
            }
        },
        outputs: [
            {
                id: 'create:whisk',
                Count: 1
            }
        ]
    })
    .id('compactcrafting:create/whisk')

    //base
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 5,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a','a','a','a','a'],
                    ['a','a','a','a','a'],
                    ['a','a','b','a','a'],
                    ['a','a','a','a','a'],
                    ['a','a','a','a','a']
                ]
            }
        ],
        catalyst: {
            id: 'minecraft:redstone_block',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'compactmachines:wall'
            },
            b: {
                type: "compactcrafting:block",
                block: 'minecraft:lapis_block'
            }
        },
        outputs: [
            {
                id: 'compactcrafting:base',
                Count: 4
            }
        ]
    })
    .id('compactcrafting:base')

    //屏
    event.replaceInput({id:'compactcrafting:projector_dish'},'ender_eye','redstone_block')

    //压缩空间
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a','a','a'],
                    ['a','b','a'],
                    ['a','a','a']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a','b','a'],
                    ['b','c','b'],
                    ['a','b','a']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a','a','a'],
                    ['a','b','a'],
                    ['a','a','a']
                ]
            }
        ],
        catalyst: {
            id: 'minecraft:redstone_block',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'compactmachines:wall'
            },
            b: {
                type: "compactcrafting:block",
                block: 'kubejs:wall'
            },
            c: {
                type: "compactcrafting:block",
                block: 'create:brass_casing'
            }
        },
        outputs: [
            {
                id: 'compactmachines:machine_maximum',
                Count: 1
            }
        ]
    })
    .id('compactcrafting:machine_maximum')


//@marker
    //空烈焰人燃烧室
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 5,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a','a','a','a','a'],
                    ['a',' ',' ',' ','a'],
                    ['a',' ',' ',' ','a'],
                    ['a',' ',' ',' ','a'],
                    ['a','a','a','a','a']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a',' ',' ',' ','a'],
                    [' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' '],
                    ['a',' ',' ',' ','a']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a',' ',' ',' ','a'],
                    [' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' '],
                    ['a',' ',' ',' ','a']
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ['a',' ',' ',' ','a'],
                    [' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' '],
                    ['a',' ',' ',' ','a']
                ]
            },
            {
                type: "compactcrafting:filled",
                component: "b"
            }
        ],
        catalyst: {
            id: 'immersiveengineering:storage_steel',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'minecraft:iron_block'
            },
            b: {
                type: "compactcrafting:block",
                block: 'minecraft:netherrack'
            }
        },
        outputs: [
            {
                id: 'create:empty_blaze_burner',
                Count: 5
            }
        ]
    })
    .id('compactcrafting:empty_blaze_burner')

    //黄铜机壳
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 2,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "a"
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'create:incomplete_precision_mechanism',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'create:brass_block'
            }
        },
        outputs: [
            {
                id: 'create:brass_casing',
                Count: 1
            }
        ]
    }).id('compactcrafting:brass_casing')

    //坩埚
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 4,
        layers: [
            {
                type: "compactcrafting:hollow",
                wall: "a"
            },
            {
                type: "compactcrafting:hollow",
                wall: "a"
            },
            {
                type: "compactcrafting:filled",
                component: "b"
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b"," "," ","b"],
                    [" "," "," "," "],
                    [" "," "," "," "],
                    ["b"," "," ","b"]
                ]
            }
        ],
        catalyst: {
            id: 'botania:rune_fire',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'kubejs:livingdirt'
            },
            b: {
                type: "compactcrafting:block",
                block: 'botania:livingrock'
            }
        },
        outputs: [
            {
                id: 'exnihilosequentia:fired_crucible',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:exnihilosequentia/fired_crucible")

    //机器外壳
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","c","b"],
                    ["a","b","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","c","b"],
                    ["c"," ","c"],
                    ["b","c","b"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","c","b"],
                    ["a","b","a"]
                ]
            }
        ],
        catalyst: {
            id: 'refinedstorage:basic_processor',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'refinedstorage:quartz_enriched_iron_block'
            },
            b: {
                type: "compactcrafting:block",
                block: 'kubejs:light_frame'
            },
            c: {
                type: "compactcrafting:block",
                block: 'kubejs:heavy_frame'
            }
        },
        outputs: [
            {
                id: 'refinedstorage:machine_casing',
                Count: 8
            }
        ]
    })
    .id("compactcrafting:machine_casing")

    //创造控制器
    /*
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","c","b"],
                    ["a","b","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","c","b"],
                    ["c","d","c"],
                    ["b","c","b"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","c","b"],
                    ["a","b","a"]
                ]
            }
        ],
        catalyst: {
            id: 'refinedstorage:advanced_processor',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'refinedstorage:machine_casing'
            },
            b: {
                type: "compactcrafting:block",
                block: 'refinedstorage:quartz_enriched_iron_block'
            },
            c: {
                type: "compactcrafting:block",
                block: 'refinedstorage:controller'
            },
            d: {
                type: "compactcrafting:block",
                block: 'botania:terrasteel_block'
            }
        },
        outputs: [
            {
                id: 'refinedstorage:creative_controller',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:creative_controller")*/

    //黄铜产魔机
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 5,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["a","a","a","a","a"],
                    ["a","a","b","a","a"],
                    ["a","a","a","a","a"],
                    ["a","a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["a","d","c","d","a"],
                    ["a","c","c","c","a"],
                    ["a","d","c","d","a"],
                    ["a","a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["a","d","e","d","a"],
                    ["a","e","f","e","a"],
                    ["a","d","e","d","a"],
                    ["a","a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["a","d","c","d","a"],
                    ["a","c","c","c","a"],
                    ["a","d","c","d","a"],
                    ["a","a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["a","a","a","a","a"],
                    ["a","a","b","a","a"],
                    ["a","a","a","a","a"],
                    ["a","a","a","a","a"]
                ]
            }
        ],
        catalyst: {
            id: 'create:precision_mechanism',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'create:brass_casing'
            },
            b: {
                type: "compactcrafting:block",
                block: 'create:brass_encased_shaft'
            },
            c: {
                type: "compactcrafting:block",
                block: 'kubejs:andesite_mana_generator'
            },
            d: {
                type: "compactcrafting:block",
                block: 'kubejs:blacker_lotus_block'
            },
            e: {
                type: "compactcrafting:block",
                block: 'create:encased_chain_drive'
            },
            f: {
                type: "compactcrafting:block",
                block: 'botania:mana_pool'
            }
        },
        outputs: [
            {
                id: 'kubejs:brass_mana_generator',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:brass_mana_generator")

    //机器框架
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 4,
        layers: [
            {
                type: "compactcrafting:hollow",
                wall: "a"
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a"," "," ","a"],
                    [" "," "," "," "],
                    [" "," "," "," "],
                    ["a"," "," ","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a"," "," ","a"],
                    [" "," "," "," "],
                    [" "," "," "," "],
                    ["a"," "," ","a"]
                ]
            },
            {
                type: "compactcrafting:hollow",
                wall: "a"
            }
        ],
        catalyst: {
            id: 'refinedstorage:advanced_processor',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'refinedstorage:machine_casing'
            }
        },
        outputs: [
            {
                id: 'thermal:machine_frame',
                Count: 16
            }
        ]
    })
    .id("compactcrafting:machine_frame")

    //红石熔炼炉
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a"],
                    ["a","b","a"],
                    ["a","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["d","e","b"],
                    ["a","b","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a"],
                    ["c","b","a"],
                    ["a","a","a"]
                ]
            }
        ],
        catalyst: {
            id: 'minecraft:redstone_block',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'thermal:machine_frame'
            },
            b: {
                type: "compactcrafting:block",
                block: 'minecraft:glass'
            },
            c: {
                type: "compactcrafting:block",
                block: 'minecraft:blast_furnace'
            },
            d: {
                type: "compactcrafting:block",
                block: 'minecraft:furnace'
            },
            e: {
                type: "compactcrafting:block",
                block: 'thermal:tin_block'
            }
        },
        outputs: [
            {
                id: 'thermal:machine_furnace',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:machine_furnace")

    //感应炉
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a"],
                    ["a","b","a"],
                    ["a","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["d","b","a"],
                    ["d","c","b"],
                    ["d","b","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a"],
                    ["e","b","a"],
                    ["a","a","a"]
                ]
            }
        ],
        catalyst: {
            id: 'minecraft:redstone_block',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'thermal:machine_frame'
            },
            b: {
                type: "compactcrafting:block",
                block: 'minecraft:glass'
            },
            c: {
                type: "compactcrafting:block",
                block: 'thermal:tin_block'
            },
            d: {
                type: "compactcrafting:block",
                block: 'thermal:machine_furnace'
            },
            e: {
                type: "compactcrafting:block",
                block: 'minecraft:blast_furnace'
            }
        },
        outputs: [
            {
                id: 'thermal:machine_smelter',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:machine_smelter")

    //黄铜十字齿轮箱
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a"],
                    ["a","b","a"],
                    ["a","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","b","b"],
                    ["a","b","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a"],
                    ["a","b","a"],
                    ["a","a","a"]
                ]
            }
        ],
        catalyst: {
            id: 'create:precision_mechanism',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'create:brass_casing'
            },
            b: {
                type: "compactcrafting:block",
                block: 'kubejs:mana_andesite_gearbox_p'
            }
        },
        outputs: [
            {
                id: 'kubejs:mana_brass_gearbox_p',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:mana_brass_gearbox_p")

    //钢制机壳
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","a","b"],
                    ["a","b","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["b","a","b"],
                    ["a","c","a"],
                    ["b","a","b"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","b","a"],
                    ["b","a","b"],
                    ["a","b","a"]
                ]
            }
        ],
        catalyst: {
            id: 'create:refined_radiance',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'thermal:machine_frame'
            },
            b: {
                type: "compactcrafting:block",
                block: 'create:shadow_steel_casing'
            },
            c: {
                type : "compactcrafting:block",
                block: 'mekanism:block_osmium'
            }
        },
        outputs: [
            {
                id: 'mekanism:steel_casing',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:steel_casing")

    
    //盖亚头
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 1,
        layers: [
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'botania:life_essence',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'minecraft:wither_skeleton_skull'
            }
        },
        outputs: [
            {
                id: 'botania:gaia_head',
                Count: 1
            }
        ]
    })
    .id("compactcrafting:gaia_head")
})