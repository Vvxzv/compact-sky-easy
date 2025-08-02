StartupEvents.registry("block", (event) => {
    //压缩泥土
    event.create('compressed_dirt')
    .material('dirt')
    .hardness(1.5)
    .gravelSoundType()

    //二重压缩泥土
    event.create('dcompressed_dirt')
    .material('dirt')
    .hardness(2)
    .gravelSoundType()

    //树皮方块
    event.create('oak_bark_block')
    .material('wood')
    .hardness(0.1)
    .textureAll('minecraft:block/oak_log')
    .woodSoundType()

    //仿真橡木原木
    event.create('fake_oak_log')
    .material('wood')
    .hardness(1.0)
    .model('minecraft:block/oak_log')
    .tagBlock('minecraft:logs')
    .tagBlock('minecraft:oak_logs')
    .woodSoundType()

    //活泥
    event.create('livingdirt')
    .material('dirt')
    .hardness(0.8)
    .gravelSoundType()

    //弱磁铁
    event.create('magnet_block')
    .material('metal')
    .hardness(5.0)
    .model('kubejs:block/magnet_block')
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('metal')

    //铁砧 （被吸附状态）
    event.create('anvil','cardinal')
    .material('metal')
    .hardness(5.0)
    .model('minecraft:block/anvil')
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('anvil')
    .box(2,0,2,14,4,14,true)
    .box(3,10,0,13,16,16,true)
    .box(4,4,3,12,5,13,true)
    .box(6,5,4,10,10,12,true)

    event.create('chipped_anvil','cardinal')
    .material('metal')
    .hardness(5.0)
    .model('minecraft:block/chipped_anvil')
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('anvil')
    .box(2,0,2,14,4,14,true)
    .box(3,10,0,13,16,16,true)
    .box(4,4,3,12,5,13,true)
    .box(6,5,4,10,10,12,true)

    event.create('damaged_anvil','cardinal')
    .material('metal')
    .hardness(5.0)
    .model('minecraft:block/damaged_anvil')
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('anvil')
    .box(2,0,2,14,4,14,true)
    .box(3,10,0,13,16,16,true)
    .box(4,4,3,12,5,13,true)
    .box(6,5,4,10,10,12,true)

    //混合石
    event.create('mixtone')
    .material('stone')
    .hardness(3.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()

    //压缩砂砾
    event.create('compressed_gravel')
    .material('sand')
    .hardness(1.5)
    .gravelSoundType()

    //压缩沙子
    event.create('compressed_sand')
    .material('sand')
    .hardness(1.5)
    .sandSoundType()

    //暗黑莲花方块
    event.create('blacker_lotus_block')
    .material('leaves')
    .hardness(0.5)
    .grassSoundType()

    //红尘块
    event.create('red_dust_block','falling')
    .material('sand')
    .hardness(1.2)
    .sandSoundType()

    //疏魔铁块
    event.create('dilute_mana_iron_block')
    .material('metal')
    .hardness(5.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('metal')
    .redstoneConductor(false)

    //轻型框架
    event.create('light_frame')
    .material('metal')
    .hardness(5.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('metal')

    //重型框架
    event.create('heavy_frame')
    .material('metal')
    .hardness(5.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('metal')

    //复合钢块
    event.create('compositesteel_block')
    .material('metal')
    .hardness(6.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('metal')
    .tagItem('forge:storage_blocks/compositesteel')

    //压缩墙壁
    event.create('wall')
    .material('metal')
    .hardness(5.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('metal')

    //泥土（显示配方用）
    event.create('dirt').material('dirt').hardness(1.0).model('minecraft:block/dirt')

    //金制框架
    event.create('golden_frame')
    .material('metal')
    .hardness(5.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('metal')

    //开裂磁铁
    event.create('cracked_magnet_block')
    .material('metal')
    .hardness(3.0)
    .model('kubejs:block/cracked_magnet_block')
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('metal')

    //炼金催化剂
    event.create('alchemy_catalyst')
    .material('stone')
    .hardness(2.5)
    .model('botania:block/alchemy_catalyst')
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('stone')

    //青金石结晶
    event.create('lapis_crystallize')
    .material('stone')
    .hardness(2.0)
    .model('minecraft:block/lapis_block')
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('stone')
    .blockEntity(entity=>{
        entity.inventory(9,3)
        entity.rightClickOpensInventory()
        entity.serverTick(400, 0, entityevent=>{
            entityevent.inventory.insertItem('minecraft:lapis_lazuli', false)
        })
    })

    //安山岩合泥
    event.create('andesite_dirt')
    .material('dirt')
    .hardness(2.5)
    .gravelSoundType()

    //序列组装中间产物
    event.create('incomplete_gearbox').model('create:block/andesite_casing')
    event.create('incomplete_fan').model('create:block/andesite_casing')
    event.create('incomplete_press').model('create:block/andesite_casing')
    event.create('incomplete_cuckoo').model('create:block/andesite_casing')
    event.create('incomplete_mixer').model('create:block/andesite_casing')
    event.create('incomplete_chain_drive').model('create:block/andesite_casing')
    event.create('incomplete_clutch').model('create:block/andesite_casing')
    event.create('incomplete_gearshift').model('create:block/andesite_casing')


    //机器
        //魔力离心机
    event.create('mana_centrifuge','custommachinery')
    .renderType("translucent")

        //磁铁机
    event.create('machine_magnet_block','custommachinery')

        //魔力灌装机
    event.create('mana_bottler','custommachinery')
    .renderType("translucent")
    
        //魔力发电机
    event.create('mana_electric_generator','custommachinery')
    .renderType("translucent")

        //魔力工作台
    event.create('mana_crafting_table','custommachinery')
    .renderType("translucent")

        //安山魔力机
    event.create('andesite_mana_generator','custommachinery')
    event.create('andesite_mana_gen').model('kubejs:machine/andesite_mana_generator').noItem()

        //黄铜魔力机
    event.create('brass_mana_generator','custommachinery')

        //魔力安山齿轮箱(水平)
    event.create('mana_andesite_gearbox_p','custommachinery')
    .renderType("translucent")
    event.create('mana_andesite_gearbox').model('kubejs:machine/mana_andesite_gearbox_p').noItem()
    
        //魔力安山齿轮箱(垂直)
    event.create('mana_andesite_gearbox_s','custommachinery')
    .renderType("translucent")
    
        //魔力黄铜齿轮箱(水平)
    event.create('mana_brass_gearbox_p','custommachinery')
    .renderType("translucent")
    
        //魔力黄铜齿轮箱(垂直)
    event.create('mana_brass_gearbox_s','custommachinery')
    .renderType("translucent")

        //安山合成台
    event.create('andesite_crafting_table','custommachinery')
        //黄铜合成台
    event.create('brass_crafting_table','custommachinery')

        //深层矿生成机
    event.create('deepore_gen','custommachinery')
    event.create('deeporegen','cardinal').model('kubejs:machine/deepore_gen').noItem()


        //高级青金石结晶控制器
    event.create("advanced_lapis_crystallize_controller", 'custommachinery')
    event.create("advanced_lapis_crystallize",'cardinal').model('kubejs:machine/advanced_lapis_crystallize_controller').noItem()

        //凋零机
    event.create('wither_machine','custommachinery')
    event.create("wither_m",'cardinal').model('kubejs:machine/wither_machine').noItem()

        //盖亚机
    event.create('gaia_machine','custommachinery')
    event.create("gaia_m",'cardinal').model('kubejs:machine/gaia_machine').noItem()

})