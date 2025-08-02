ServerEvents.recipes(event => {
    //锤
    let crafthammer = (m, o) =>(
        event.shaped(Item.of('exnihilosequentia:' + o, '{Damage:0}'), [
            " a ",
            " ba",
            "b  "
        ],
        {
            a: m,
            b: 'stick'
        }).id('exnihilosequentia:' + o))

    crafthammer('oak_planks','wooden_hammer')
    crafthammer('#forge:stone','stone_hammer')
    crafthammer('iron_ingot','iron_hammer')

    event.shaped(Item.of('exnihilosequentia:golden_hammer', '{Unbreakable:1b}'),[
        " a ",
        " ba",
        "b  "
    ],{
        a:'gold_block',
        b:'stick'
    }).id('exnihilosequentia:golden_hammer')

    
    //钩子
    let craftcrook = (input, output) =>(
        event.shaped(Item.of(output, '{Damage:0}'), [
            "aa ",
            " a ",
            " a "
        ],
        {
            a: input
        })
        .id(output)
    )
    
    craftcrook('#logs','exnihilosequentia:wooden_crook')
    craftcrook('cobblestone','exnihilosequentia:stone_crook')

    //黑石石子
    event.shaped('8x exnihilosequentia:blackstone_pebble',[
        'aaa',
        'aba',
        'aaa'
    ],{
        a:'exnihilosequentia:stone_pebble',
        b:'#coals'
    })
    .id('exnihilosequentia:blackstone_pebble')

    //滴水石子
    event.shaped('8x exnihilosequentia:dripstone_pebble',[
        'aaa',
        'aba',
        'aaa'
    ],{
        a:'exnihilosequentia:andesite_pebble',
        b:'water_bucket'
    })
    .id('exnihilosequentia:dripstone_pebble')

    //矿
    function compressOrePiece(array){
        let n = array.length
        for(let i = 0; i<n;){
            let input = array[i]
            let output = array[i+1]
            let outputId = output.split(':')[1]
            event.shaped(output,['aa','aa'],{a:input}).id('exnihilosequentia:' + outputId)
            i=i+2
        }
    }
    var ore = [
        'exnihilosequentia:iron_pieces','create:crimsite',
        'exnihilosequentia:gold_pieces','create:ochrum',
        'exnihilosequentia:copper_pieces','create:veridium',
        'exnihilosequentia:zinc_pieces','create:asurine',
        'exnihilosequentia:tin_pieces','thermal:raw_tin_block'
    ]
    compressOrePiece(ore)


    //线筛网
    event.shaped('exnihilosequentia:string_mesh', [
        "aaa",
        "aaa",
        "aaa"
    ],
    {
        a: 'botania:mana_string',
    })
    .id('exnihilosequentia:string_mesh')

    //燧石筛网
    event.shaped('exnihilosequentia:flint_mesh', [
        "aca",
        "aba",
        "aca"
    ],
    {
        a: 'flint',
        b:'exnihilosequentia:string_mesh',
        c:'iron_nugget'
    })
    .id('exnihilosequentia:flint_mesh')

    //铁筛网
    event.shaped('exnihilosequentia:iron_mesh', [
        "aca",
        "aba",
        "aca"
    ],
    {
        a: 'iron_nugget',
        b: 'exnihilosequentia:flint_mesh',
        c: 'botania:manasteel_ingot'
    })
    .id('exnihilosequentia:iron_mesh')

    //加热
    event.custom({
        type:"exnihilosequentia:heat",
        amount:10,
        block:"kubejs:dcompressed_dirt"
    })
    .id('exnihilosequentia:heat/dcompressed_dirt')

    //泥浆
    event.custom({
        type:"exnihilosequentia:fluid_transform",
        catalyst:{item:"kubejs:dcompressed_dirt"},
        fluidInTank:{fluid:"minecraft:water"},
        result:{fluid:"kubejs:mud"}
    })
    .id('exnihilosequentia:fluid_transform/mud')

    //海水
    event.custom({
        type:"exnihilosequentia:fluid_transform",
        catalyst:{item:'kubejs:compressed_sand'},
        fluidInTank:{fluid:"minecraft:water"},
        result:{fluid:"exnihilosequentia:sea_water"}
    })
    .id('exnihilosequentia:fluid_transform/sea_water')

    //泥浆做压缩泥土
    event.custom({
        type:"exnihilosequentia:fluid_item",
        fluid:{fluid:"kubejs:mud"},
        input:{item:"minecraft:dirt"},
        result:{item:"kubejs:compressed_dirt",count:1}
    })
    .id('exnihilosequentia:fluid_item/compressed_dirt')

    event.custom({
        type:"exnihilosequentia:fluid_item",
        fluid:{fluid:"kubejs:mud"},
        input:{item:"kubejs:dirt"},
        result:{item:"kubejs:compressed_dirt",count:4}
    })
    .id('exnihilosequentia:fluid_item/compressed_dirt_1')

    //草皮 木桶(水) 仿真橡树树叶
    event.custom({
        type:"exnihilosequentia:fluid_item",
        fluid:{"fluid":"water"},
        input:{"item":"kubejs:sod"},
        result:{"item":"minecraft:dark_oak_leaves"}
    })
    .id('exnihilosequentia:fluid_item/dark_oak_leaves')

    //草皮 木坩埚 水
    event.custom({
        type:"exnihilosequentia:crucible",
        amount:250,
        crucibleType:"wood",
        fluidResult:{"fluid":"minecraft:water"},
        input:{"tag":"kubejs:can_craft_water"}
    })
    .id('exnihilosequentia:crucible/water')

    //圆石石子
    event.custom({
        type:"exnihilosequentia:crook",
        input:{
            item:"kubejs:compressed_dirt"
        },
        results:[
            {
                chance:0.1,
                count:1,
                item:"sugar_cane"
            },
            {
                chance:0.25,
                count:1,
                item:'minecraft:cactus'
            },
            {
                chance:0.1,
                count:1,
                item:'minecraft:beetroot'
            },
            {
                chance:0.1,
                count:1,
                item:'minecraft:carrot'
            },
            {
                chance:0.1,
                count:1,
                item:'minecraft:potato'
            },
            {
                chance:0.9,
                count:2,
                item:"exnihilosequentia:stone_pebble"
            },
            {
                chance:0.9,
                count:2,
                item:"exnihilosequentia:stone_pebble"
            },
            {
                chance:0.9,
                count:2,
                item:"exnihilosequentia:stone_pebble"
            },
            {
                chance:0.9,
                count:2,
                item:"exnihilosequentia:stone_pebble"
            }
        ]
    })
    .id('exnihilosequentia:crook/compressed_dirt')

    //粉碎
    let hammerCrushBlock = (inputBlock, outputItem, count) =>(
        event.custom({
            type:"exnihilosequentia:hammer",
            input:{
                item:inputBlock
            },
            results:[
                {
                    chance:1.0,
                    count:count,
                    item:outputItem
                }
            ]
        })
    )
    hammerCrushBlock('cyclic:compressed_cobblestone','gravel',9).id('exnihilosequentia:hammer/gravel')
    hammerCrushBlock('kubejs:compressed_gravel','sand',9).id('exnihilosequentia:hammer/sand')
    hammerCrushBlock('gravel','flint',1).id('exnihilosequentia:hammer/flint')
    hammerCrushBlock('dripstone_block','pointed_dripstone',4).id('exnihilosequentia:hammer/pointed_dripstone')

    //筛子
    let sieve = (inputItem, outputItem, stringChance, flintChance, ironChance) =>(
        event.custom({
            type:"exnihilosequentia:sieve",
            input:{
                item:inputItem
            },
            result:{
                item:outputItem
            },
            rolls:[
                {
                    chance:stringChance,
                    mesh:"string"
                },
                {
                    chance:flintChance,
                    mesh:"flint"
                },
                {
                    chance:ironChance,
                    mesh:"iron"
                }
            ]
        })
    )

    sieve('gravel', 'iron_nugget',0.05,0.08,0.1).id('exnihilosequentia:sieve/iron_nugget')
    sieve('gravel', 'gold_nugget',0.02,0.05,0.08).id('exnihilosequentia:sieve/gold_nugget')
    sieve('gravel', 'exnihilosequentia:stone_pebble',1,0,0).id('exnihilosequentia:sieve/stone_pebble')
    sieve('gravel', 'exnihilosequentia:andesite_pebble',0.8,1,1).id('exnihilosequentia:sieve/andesite_pebble')
    sieve('gravel', 'exnihilosequentia:basalt_pebble',0.4,1,1).id('exnihilosequentia:sieve/basalt_pebble')
    sieve('gravel', 'exnihilosequentia:diorite_pebble',0.8,1,1).id('exnihilosequentia:sieve/diorite_pebble')
    sieve('gravel', 'exnihilosequentia:granite_pebble',0.4,1,1).id('exnihilosequentia:sieve/granite_pebble')
    sieve('gravel', 'exnihilosequentia:iron_pieces',0,0.5,0.5).id('exnihilosequentia:sieve/iron_pieces')
    sieve('gravel', 'exnihilosequentia:gold_pieces',0,0,0.1).id('exnihilosequentia:sieve/gold_pieces')
    sieve('gravel', 'exnihilosequentia:tin_pieces', 0,0,0.3).id('exnihilosequentia:sieve/tin_pieces')
    sieve('gravel', 'exnihilosequentia:copper_pieces',0,0,1).id('exnihilosequentia:sieve/copper_pieces')

    //外置加热器加热
    event.custom({
        type:"exnihilosequentia:heat",
        amount:250,
        block:'immersiveengineering:furnace_heater',
        state:{active:true}
    })
    .id('exnihilosequentia:heat/furnace_heater')

    //坩埚造熔岩
    event.custom({
        type:"exnihilosequentia:crucible",
        amount:250,
        crucibleType:"fired",
        fluidResult:{fluid:"minecraft:lava"},
        input:{item:"minecraft:stone"}
    }).id('exnihilosequentia:crucible/stone')

    //石头拆分为石子
    hammerCrushBlock('minecraft:andesite','exnihilosequentia:andesite_pebble',4).id('exnihilosequentia:andesite_pebble')
    hammerCrushBlock('minecraft:basalt','exnihilosequentia:basalt_pebble',4).id('exnihilosequentia:basalt_pebble')
    hammerCrushBlock('minecraft:diorite','exnihilosequentia:diorite_pebble',4).id('exnihilosequentia:diorite_pebble')
    hammerCrushBlock('minecraft:granite','exnihilosequentia:granite_pebble',4).id('exnihilosequentia:granite_pebble')

})