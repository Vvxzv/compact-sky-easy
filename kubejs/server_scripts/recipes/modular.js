ServerEvents.recipes(event =>{
    //物品路由器
    event.shaped('modularrouters:modular_router',[
        'aba',
        'bcb',
        'aba'
    ],{
        a:'botania:manasteel_ingot',
        b:'minecraft:iron_bars',
        c:'modularrouters:blank_module'
    }).id('modularrouters:modular_router')

    //执行模块
    event.shapeless('2x modularrouters:activator_module',['modularrouters:blank_module','cyclic:user','minecraft:lever']).id('modularrouters:activator_module')

    //破坏模块
    event.shapeless('modularrouters:breaker_module',['modularrouters:blank_module','iron_pickaxe','create:brass_ingot']).id('modularrouters:breaker_module')

    //放置模块
    event.shapeless('2x modularrouters:placer_module',['modularrouters:blank_module','cyclic:user','kubejs:dcompressed_dirt']).id('modularrouters:placer_module')

    //真空模块
    event.shapeless('2x modularrouters:vacuum_module',['modularrouters:blank_module','thermal:item_filter_augment','thermal:device_collector']).id('modularrouters:vacuum_module')

    //检测模块
    event.shapeless('modularrouters:detector_module',['modularrouters:blank_module','minecraft:comparator']).id('modularrouters:detector_module')

    //空白模块
    event.shaped('2x modularrouters:blank_module',[
        'dad',
        'dbd',
        'ccc'
    ],{
        a:'minecraft:redstone',
        b:'minecraft:paper',
        c:'minecraft:gold_nugget',
        d:'botania:manasteel_nugget'
    }).id('modularrouters:blank_module')

})