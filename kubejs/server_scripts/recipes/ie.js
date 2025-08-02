ServerEvents.recipes(event =>{
    //下界砖块
    event.custom({
        type:"immersiveengineering:coke_oven",
        input:{item:'kubejs:nether_charcoal'},
        result:{item:'minecraft:nether_brick'},
        creosote:250,
        time:20
    })
    .id('immersiveengineering:coke_oven/nether_brick')

    //钢粒
    event.custom({
        type:"immersiveengineering:blast_furnace",
        input:{item:"botania:manasteel_nugget"},
        result:{item:'mekanism:nugget_steel'},
        time:60
    })
    .id('immersiveengineering:blast_furnace/nugget_steel')

    //钢锭
    event.custom({
        type:"immersiveengineering:blast_furnace",
        input:{item:'kubejs:cast_iron'},
        result:{item:'kubejs:pig_iron'},
        time:100
    })
    .id('immersiveengineering:blast_furnace/pig_iron')

    //锡齿轮
    event.recipes.immersiveengineering.metal_press('thermal:tin_gear','thermal:tin_ingot',"immersiveengineering:mold_gear",2400).id('immersiveengineering:metal_press/tin_gear')

    //硫化橡胶
    event.recipes.immersiveengineering.mixer('kubejs:cured_rubber',"#minecraft:water",['3x thermal:rubber','#forge:dusts/sulfur'],1000).id('immersiveengineering:mixer/cured_rubber')

    //液态复合钢
    event.recipes.immersiveengineering.mixer('kubejs:composite_steel','#forge:latex',['botania:terrasteel_ingot'],1000).id('immersiveengineering:mixer/composite_steel')

    //液态安山合金
    event.recipes.immersiveengineering.mixer('kubejs:andesite_alloy','#kubejs:composite_steel',['10x minecraft:andesite'],10000).id('immersiveengineering:mixer/andesite_alloy')

    //红尘块
    event.recipes.immersiveengineering.alloy('kubejs:red_dust_block','redstone','exnihilosequentia:dust',200)
    .id('immersiveengineering:alloy/red_dust_block')

    //坚韧布料
    event.replaceInput({id:'immersiveengineering:crafting/hemp_fabric'},'#balm:wooden_rods','botania:livingwood_twig')

    //工程师锤
    event.replaceInput({id:'immersiveengineering:crafting/hammer'},'iron_ingot','iron_nugget')

    //工程师工作台
    event.replaceInput({id:'immersiveengineering:crafting/workbench'},'iron_ingot','gold_ingot')

    //粉碎磁铁
    event.recipes.immersiveengineering.crusher('16x kubejs:crushed_magnet','kubejs:magnet_block',[],1000)
    .id('immersiveengineering:crusher/crushed_magnet')

    //工程师锤金属板
    /*
    function hammer(ingot, plate){
        let plateId = plate.replace(/:/g, '_')
        event.shaped(plate,[
            ' a ',
            'bbb'
        ],{
            a:'immersiveengineering:hammer',
            b:ingot
        })
        .damageIngredient({item:'immersiveengineering:hammer'},25)
        .id(`immersiveengineering:hammer/${plateId}`)
    }

    hammer('minecraft:iron_ingot','create:iron_sheet')
    hammer('mekanism:ingot_steel','immersiveengineering:plate_steel')
    */

    //粉碎机粉碎压缩泥土，铝，铁，沙
    event.recipes.immersiveengineering.crusher('minecraft:sand','kubejs:compressed_dirt',
        [
            Item.of('create:crushed_raw_aluminum', 4).withChance(0.5),
            Item.of('create:crushed_raw_iron').withChance(0.5),
        ],1000
    ).id('immersiveengineering:crusher/sand')

    //铝锭
    event.recipes.immersiveengineering.arc_furnace(['immersiveengineering:ingot_aluminum'],'create:crushed_raw_aluminum',[]).energy(2000).id('immersiveengineering:arc_furnace/ingot_aluminum')

    //石墨粉
    event.recipes.immersiveengineering.squeezer('immersiveengineering:dust_hop_graphite','32x mekanism:dust_charcoal',2000).id('immersiveengineering:squeezer/dust_hop_graphite_from_dust_charcoal')

    //石墨锭
    event.recipes.immersiveengineering.alloy('immersiveengineering:ingot_hop_graphite','immersiveengineering:dust_hop_graphite','immersiveengineering:dust_hop_graphite',200)
    .id('immersiveengineering:alloy/ingot_hop_graphite')

    //石墨电极蓝图
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'),[
        ' a ',
        'bbb',
        'ccc'
    ],{
        a:'immersiveengineering:graphite_electrode',
        b:'minecraft:blue_dye',
        c:'minecraft:paper'
    }).id('immersiveengineering:blueprint_electrode')

    //安山齿轮
    event.recipes.immersiveengineering.metal_press('kubejs:andesite_gear','4x create:andesite_alloy','immersiveengineering:mold_gear',2400).id('immersiveengineering:metal_press/andesite_gear')

    //硅
    event.recipes.immersiveengineering.arc_furnace(['refinedstorage:silicon'],'minecraft:quartz',[]).energy(1000).id('immersiveengineering:arc_furnace/silicon')


})