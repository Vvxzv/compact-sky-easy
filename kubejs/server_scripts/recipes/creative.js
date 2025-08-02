ServerEvents.recipes(event=>{
    const {mechanical_crafting, deploying} = event.recipes.create
    const {smelter} = event.recipes.thermal

    let anti = Item.of('minecraft:shulker_box', '{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:1b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:2b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:3b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:4b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:5b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:6b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:7b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:8b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:9b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:10b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:11b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:12b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:13b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:14b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:15b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:16b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:17b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:18b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:19b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:20b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:21b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:22b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:23b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:24b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:25b,id:"mekanism:pellet_antimatter"},{Count:64b,Slot:26b,id:"mekanism:pellet_antimatter"}],id:"minecraft:shulker_box"}}').weakNBT()
    
    //魔力池
    mechanical_crafting('botania:creative_pool',[
        'abcccccba',
        'abcccccba',
        'abbbbbbba',
        'aaaaaaaaa'
    ],{
        a:'botania:fabulous_pool',
        b:'botania:gaia_ingot',
        c:'kubejs:singularity_mana'
    }).id('creative:mechanical_crafting/creative_pool')

    //存储
    /*
    event.smithing('storagedrawers:creative_storage_upgrade','storagedrawers:upgrade_template','kubejs:ultimate_singularity')
    .id('creative:creative_storage_upgrade')*/
    mechanical_crafting('storagedrawers:creative_storage_upgrade',[
        'aaaaaaaaa',
        'addddddda',
        'adbbbbbda',
        'adbeeebda',
        'adbecebda',
        'adbeeebda',
        'adbbbbbda',
        'addddddda',
        'aaaaaaaaa'
    ],{
        a:'storagedrawers:emerald_storage_upgrade',
        b:'botania:gaia_ingot',
        c:'kubejs:ultimate_singularity',
        d:'ironchest:crystal_chest',
        e:'ironchest:obsidian_chest'
    }).id('creative:creative_storage_upgrade')


    //烈焰蛋糕
    mechanical_crafting('create:creative_blaze_cake',[
        'abba',
        'aaaa'
    ],{
        a:Item.of('minecraft:red_shulker_box', '{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:"minecraft:netherrack"},{Count:64b,Slot:1b,id:"minecraft:netherrack"},{Count:64b,Slot:2b,id:"minecraft:netherrack"},{Count:64b,Slot:3b,id:"minecraft:netherrack"},{Count:64b,Slot:4b,id:"minecraft:netherrack"},{Count:64b,Slot:5b,id:"minecraft:netherrack"},{Count:64b,Slot:6b,id:"minecraft:netherrack"},{Count:64b,Slot:7b,id:"minecraft:netherrack"},{Count:64b,Slot:8b,id:"minecraft:netherrack"},{Count:64b,Slot:9b,id:"minecraft:netherrack"},{Count:64b,Slot:10b,id:"minecraft:netherrack"},{Count:64b,Slot:11b,id:"minecraft:netherrack"},{Count:64b,Slot:12b,id:"minecraft:netherrack"},{Count:64b,Slot:13b,id:"minecraft:netherrack"},{Count:64b,Slot:14b,id:"minecraft:netherrack"},{Count:64b,Slot:15b,id:"minecraft:netherrack"},{Count:64b,Slot:16b,id:"minecraft:netherrack"},{Count:64b,Slot:17b,id:"minecraft:netherrack"},{Count:64b,Slot:18b,id:"minecraft:netherrack"},{Count:64b,Slot:19b,id:"minecraft:netherrack"},{Count:64b,Slot:20b,id:"minecraft:netherrack"},{Count:64b,Slot:21b,id:"minecraft:netherrack"},{Count:64b,Slot:22b,id:"minecraft:netherrack"},{Count:64b,Slot:23b,id:"minecraft:netherrack"},{Count:64b,Slot:24b,id:"minecraft:netherrack"},{Count:64b,Slot:25b,id:"minecraft:netherrack"},{Count:64b,Slot:26b,id:"minecraft:netherrack"}],id:"minecraft:shulker_box"}}').weakNBT(),
        b:Item.of('minecraft:shulker_box', '{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:"create:blaze_cake"},{Count:64b,Slot:1b,id:"create:blaze_cake"},{Count:64b,Slot:2b,id:"create:blaze_cake"},{Count:64b,Slot:3b,id:"create:blaze_cake"},{Count:64b,Slot:4b,id:"create:blaze_cake"},{Count:64b,Slot:5b,id:"create:blaze_cake"},{Count:64b,Slot:6b,id:"create:blaze_cake"},{Count:64b,Slot:7b,id:"create:blaze_cake"},{Count:64b,Slot:8b,id:"create:blaze_cake"},{Count:64b,Slot:9b,id:"create:blaze_cake"},{Count:64b,Slot:10b,id:"create:blaze_cake"},{Count:64b,Slot:11b,id:"create:blaze_cake"},{Count:64b,Slot:12b,id:"create:blaze_cake"},{Count:64b,Slot:13b,id:"create:blaze_cake"},{Count:64b,Slot:14b,id:"create:blaze_cake"},{Count:64b,Slot:15b,id:"create:blaze_cake"},{Count:64b,Slot:16b,id:"create:blaze_cake"},{Count:64b,Slot:17b,id:"create:blaze_cake"},{Count:64b,Slot:18b,id:"create:blaze_cake"},{Count:64b,Slot:19b,id:"create:blaze_cake"},{Count:64b,Slot:20b,id:"create:blaze_cake"},{Count:64b,Slot:21b,id:"create:blaze_cake"},{Count:64b,Slot:22b,id:"create:blaze_cake"},{Count:64b,Slot:23b,id:"create:blaze_cake"},{Count:64b,Slot:24b,id:"create:blaze_cake"},{Count:64b,Slot:25b,id:"create:blaze_cake"},{Count:64b,Slot:26b,id:"create:blaze_cake"}],id:"minecraft:shulker_box"}}').weakNBT()
    })
    .id('creative:creative_blaze_cake')

    
    //能量
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
                    ["a","a","a","a","a"],
                    ["a","b","b","b","a"],
                    ["a","b","b","b","a"],
                    ["a","b","b","b","a"],
                    ["a","a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["a","b","b","b","a"],
                    ["a","b","b","b","a"],
                    ["a","b","b","b","a"],
                    ["a","a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:mixed",
                pattern:[
                    ["a","a","a","a","a"],
                    ["a","c","c","c","a"],
                    ["a","c","c","c","a"],
                    ["a","c","c","c","a"],
                    ["a","a","a","a","a"]
                ]
            },
            {
                type: "compactcrafting:filled",
                component: "a"
            }
        ],
        catalyst: {
            id: 'kubejs:ultimate_singularity',
            Count: 1
        },
        components: {
            a: {
                type: "compactcrafting:block",
                block: 'mekanism:induction_casing'
            },
            b: {
                type: "compactcrafting:block",
                block: 'mekanism:ultimate_induction_provider'
            },
            c: {
                type: "compactcrafting:block",
                block: 'mekanism:ultimate_induction_cell'
            }
        },
        outputs: [
            {
                id: 'mekanism:creative_energy_cube',
                Count: 1
            }
        ]
    })
    .id("creative:creative_energy_cube")

    event.shapeless(Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}'),[Item.of('mekanism:creative_energy_cube', '{mekData:{componentConfig:{config0:{side0:1,side1:1,side2:1,side3:1,side4:1,side5:1}}}}').weakNBT()]).id("creative:creative_energy_cube_1")
    event.shapeless(Item.of('mekanism:creative_energy_cube', '{mekData:{componentConfig:{config0:{side0:1,side1:1,side2:1,side3:1,side4:1,side5:1}}}}'),[Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}').weakNBT()]).id("creative:creative_energy_cube_2")

    //马达
    event.smithing('create:creative_motor','createaddition:electric_motor','kubejs:ultimate_singularity')
    .id('creative:creative_motor')

    //组件
    mechanical_crafting('kubejs:creative_cell_component',[
        '  a a  ',
        ' aeeea ',
        'aebcbea',
        ' ecdce ',
        'aebcbea',
        ' aeeea ',
        '  a a  '
    ],{
        a:'botania:gaia_ingot',
        b:'kubejs:ultimate_singularity',
        c:'storagedrawers:creative_storage_upgrade',
        d:'ae2additions:cell_component_65536',
        e:'mekanism:pellet_antimatter'
    }).id('creative:creative_cell_component')

    event.shapeless('ae2:creative_item_cell',['storagedrawers:creative_vending_upgrade','ae2:item_cell_housing'])
    .id('creative:creative_item_cell')

    event.shapeless('ae2:creative_fluid_cell',['mekanism:creative_fluid_tank','ae2:fluid_cell_housing'])
    .id('creative:creative_fluid_cell')

    event.shapeless('appmek:creative_chemical_cell',['mekanism:creative_chemical_tank','appmek:chemical_cell_housing'])
    .id('creative:creative_chemical_cell')

    event.shapeless('appbot:creative_mana_cell',['botania:creative_pool','appbot:mana_cell_housing'])
    .id('creative:creative_mana_cell')

    event.shapeless('ae2:creative_fluid_cell','refinedstorage:creative_fluid_storage_disk')
    .id('creative:creative_fluid_cell_from_creative_fluid_storage_disk')
    event.shapeless('refinedstorage:creative_fluid_storage_disk','ae2:creative_fluid_cell')
    .id('creative:creative_fluid_storage_disk_from_creative_fluid_cell')

    event.shapeless('ae2:creative_item_cell','refinedstorage:creative_storage_disk')
    .id('creative:creative_item_cell_from_creative_storage_disk')
    event.shapeless('refinedstorage:creative_storage_disk','ae2:creative_item_cell')
    .id('creative:creative_storage_disk_from_creative_item_cell')

    //控制器
    event.smithing('refinedstorage:creative_controller','refinedstorage:controller','kubejs:ultimate_singularity')
    .id('creative:creative_controller')

    //流体储罐
    event.shaped('mekanism:creative_fluid_tank',[
        'abc',
        'def',
        'ghi'
    ],{
        a:Item.of('mekanism:ultimate_fluid_tank', '{mekData:{FluidTanks:[{stored:{Amount:256000,FluidName:"kubejs:chorus"}}]}}').weakNBT(),
        b:Item.of('mekanism:ultimate_fluid_tank', '{mekData:{FluidTanks:[{stored:{Amount:256000,FluidName:"kubejs:liquid_mana"}}]}}').weakNBT(),
        c:Item.of('mekanism:ultimate_fluid_tank', '{mekData:{FluidTanks:[{stored:{Amount:256000,FluidName:"kubejs:soul"}}]}}').weakNBT(),
        d:Item.of('mekanism:ultimate_fluid_tank', '{mekData:{FluidTanks:[{stored:{Amount:256000,FluidName:"mekanism:sodium"}}]}}').weakNBT(),
        e:'storagedrawers:creative_storage_upgrade',
        f:Item.of('mekanism:ultimate_fluid_tank', '{mekData:{FluidTanks:[{stored:{Amount:256000,FluidName:"thermal:redstone"}}]}}').weakNBT(),
        g:Item.of('mekanism:ultimate_fluid_tank', '{mekData:{FluidTanks:[{stored:{Amount:256000,FluidName:"kubejs:mud"}}]}}').weakNBT(),
        h:Item.of('mekanism:ultimate_fluid_tank', '{mekData:{FluidTanks:[{stored:{Amount:256000,FluidName:"thermal:ender"}}]}}').weakNBT(),
        i:Item.of('mekanism:ultimate_fluid_tank', '{mekData:{FluidTanks:[{stored:{Amount:256000,FluidName:"thermal:glowstone"}}]}}').weakNBT()
    }).id('creative:creative_fluid_tank')
    event.shapeless('mekanism:creative_fluid_tank','mekanism:creative_fluid_tank').id('creative:creative_fluid_tank_1')

    //化学品储罐
    event.shaped('mekanism:creative_chemical_tank',[
        ' a ',
        'bcd',
        ' e '
    ],{
        a:Item.of('mekanism:ultimate_chemical_tank', '{mekData:{GasTanks:[{stored:{amount:8192000L,gasName:"kubejs:soul"}}]}}').weakNBT(),
        b:Item.of('mekanism:ultimate_chemical_tank', '{mekData:{GasTanks:[{stored:{amount:8192000L,gasName:"mekanism:ethene"}}]}}').weakNBT(),
        c:'storagedrawers:creative_storage_upgrade',
        d:Item.of('mekanism:ultimate_chemical_tank', '{mekData:{GasTanks:[{stored:{amount:8192000L,gasName:"mekanismgenerators:deuterium"}}]}}').weakNBT(),
        e:Item.of('mekanism:ultimate_chemical_tank', '{mekData:{GasTanks:[{stored:{amount:8192000L,gasName:"mekanism:hydrofluoric_acid"}}]}}').weakNBT()
    }).id('creative:creative_chemical_tank')
    event.shapeless('mekanism:creative_chemical_tank','mekanism:creative_chemical_tank').id('creative:creative_chemical_tank_1')

    //箱柜
    event.smithing('mekanism:creative_bin','mekanism:ultimate_bin','storagedrawers:creative_vending_upgrade')
    .id('creative:creative_bin')

    //能源元件
    event.smithing('ae2:creative_energy_cell','ae2:dense_energy_cell','kubejs:ultimate_singularity')
    .id('creative:creative_energy_cell')

    //模块
    deploying('modularrouters:creative_module',['modularrouters:blank_module','storagedrawers:creative_vending_upgrade'])
    .id('creative:creative_module')

    //通量线圈
    event.shaped('thermal:rf_coil_creative_augment',[
        'aba',
        'cdc',
        'ebe'
    ],{
        a:'thermal:rf_coil_xfer_augment',
        b:anti,
        //b:'mekanism:pellet_antimatter',
        c:'thermal:rf_coil_augment',
        d:'kubejs:ultimate_singularity',
        e:'thermal:rf_coil_storage_augment'
    }).id('creative:rf_coil_creative_augment')

    //回收
    event.shaped('thermal:machine_catalyst_creative_augment',[
        'aba',
        'bcb',
        'aba'
    ],{
        a:anti,
        //a:'mekanism:pellet_antimatter',
        b:'thermal:machine_catalyst_augment',
        c:'kubejs:ultimate_singularity'
    }).id('creative:machine_catalyst_creative_augment')

    //提效
    event.shaped('thermal:machine_efficiency_creative_augment',[
        'ada',
        'bcb',
        'ada'
    ],{
        a:anti,
        //a:'mekanism:pellet_antimatter',
        b:'thermal:machine_speed_augment',
        c:'kubejs:ultimate_singularity',
        d:'thermal:machine_efficiency_augment'
    }).id('creative:machine_efficiency_creative_augment')

    //储罐
    event.shaped('thermal:fluid_tank_creative_augment',[
        'aba',
        'bcb',
        'aba'
    ],{
        a:anti,
        //a:'mekanism:pellet_antimatter',
        b:'thermal:fluid_tank_augment',
        c:'kubejs:ultimate_singularity'
    }).id('creative:fluid_tank_creative_augment')

    //创造抽屉
    smelter(['storagedrawers:creative_vending_upgrade'],[
        'storagedrawers:creative_storage_upgrade',
        'kubejs:creative_cell_component',
        Item.of('mekanism:ultimate_chemical_tank', '{mekData:{GasTanks:[{stored:{amount:8192000L,gasName:"mekanism:antimatter"}}]}}').weakNBT()
    ]).energy(100000000)
    .id('creative:creative_vending_upgrade')


})