ServerEvents.recipes(event =>{
    //植物盆
    event.shaped('botanypots:terracotta_hopper_botany_pot',[
        "aba",
        "aaa"
    ],
    {
        a:'minecraft:terracotta',
        b:'minecraft:hopper'
    })
    .id('botanypots:hopper_botany_pot')

    //base
    let base = (item, displayBlock, categories, growthModifier) =>(
        event.custom({
            type:"botanypots:soil",
            input:{
                item:item
            },
            display:{
                block:displayBlock
            },
            categories:categories,
            growthModifier:growthModifier
        })
    )

    base('dirt','dirt',['dirt'],1)
    base('sand','sand',['sand'],1)
    base('botania:terrasteel_block','botania:terrasteel_block',['terrasteel_block'],1)
    base('thermal:phytosoil','thermal:phytosoil',['thermal:phytosoil'],1)

    //仙人掌
    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:cactus"},
        "categories":["sand"],
        "growthTicks":400,
        "display":{"block":"minecraft:cactus"},
        "drops":[{"chance":1.00,"output":{"item":"minecraft:cactus"}}]
    })

    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:cactus"},
        "categories":['thermal:phytosoil'],
        "growthTicks":100,
        "display":{"block":"minecraft:cactus"},
        "drops":[{"chance":1.00,"output":{"item":"minecraft:cactus"}}]
    })

    //甘蔗
    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:sugar_cane"},
        "categories":["sand","dirt"],
        "growthTicks":400,
        "display":[{"block":"minecraft:sugar_cane"},{"block":"minecraft:sugar_cane"}],
        "drops":[{"chance":1.00,"output":{"item":"minecraft:sugar_cane"}}]
    })

    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:sugar_cane"},
        "categories":['thermal:phytosoil'],
        "growthTicks":100,
        "display":[{"block":"minecraft:sugar_cane"},{"block":"minecraft:sugar_cane"}],
        "drops":[{"chance":1.00,"output":{"item":"minecraft:sugar_cane"}}]
    })

    //胡萝卜
    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:carrot"},
        "categories":["dirt"],
        "growthTicks":400,
        "display":{"type":"botanypots:aging","block":"minecraft:carrots"},
        "drops":[{"chance":1.00,"output":{"item":"minecraft:carrot"}}]
    })

    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:carrot"},
        "categories":['thermal:phytosoil'],
        "growthTicks":100,
        "display":{"type":"botanypots:aging","block":"minecraft:carrots"},
        "drops":[{"chance":1.00,"output":{"item":"minecraft:carrot"}}]
    })


    //马铃薯
    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:potato"},
        "categories":["dirt"],
        "growthTicks":400,
        "display":{"type":"botanypots:aging","block":"minecraft:potatoes"},
        "drops":[{"chance":1.00,"output":{"item":"minecraft:potato"}}]
    })

    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:potato"},
        "categories":['thermal:phytosoil'],
        "growthTicks":100,
        "display":{"type":"botanypots:aging","block":"minecraft:potatoes"},
        "drops":[{"chance":1.00,"output":{"item":"minecraft:potato"}}]
    })


    //甜菜根
    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:beetroot"},
        "categories":["dirt"],
        "growthTicks":800,
        "display":{"type":"botanypots:aging","block":"minecraft:beetroots"},
        "drops":[{"chance":1.00,"output":{"item":"minecraft:beetroot"}}]
    })
    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:beetroot_seeds"},
        "categories":["dirt"],
        "growthTicks":400,
        "display":{"type":"botanypots:aging","block":"minecraft:beetroots"},
        "drops":[{"chance":1.00,"output":{"item":"minecraft:beetroot"}}]
    })

    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:beetroot"},
        "categories":['thermal:phytosoil'],
        "growthTicks":200,
        "display":{"type":"botanypots:aging","block":"minecraft:beetroots"},
        "drops":[{"chance":1.00,"output":{"item":"minecraft:beetroot"}}]
    })
    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:beetroot_seeds"},
        "categories":['thermal:phytosoil'],
        "growthTicks":100,
        "display":{"type":"botanypots:aging","block":"minecraft:beetroots"},
        "drops":[{"chance":1.00,"output":{"item":"minecraft:beetroot"}}]
    })

    //橡胶树
    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":'thermal:rubberwood_sapling'},
        "categories":["dirt"],
        "growthTicks":600,
        "display":{"block":'thermal:rubberwood_sapling'},
        "drops":[
            {"chance":1.00,"output":{"item":'thermal:rubberwood_log'},"minRolls":1,"maxRolls":2},
            {"chance":0.10,"output":{"item":"minecraft:stick"},"minRolls":1,"maxRolls":2},
            {"chance":0.05,"output":{"item":'myrtrees:latex'}},
            {"chance":0.15,"output":{"item":'thermal:rubberwood_sapling'}}
        ]
    })

    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":'thermal:rubberwood_sapling'},
        "categories":['thermal:phytosoil'],
        "growthTicks":100,
        "display":{"block":'thermal:rubberwood_sapling'},
        "drops":[
            {"chance":1.00,"output":{"item":'thermal:rubberwood_log'},"minRolls":1,"maxRolls":2},
            {"chance":0.05,"output":{"item":'myrtrees:latex'}}
        ]
    })

    //橡树
    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":'oak_sapling'},
        "categories":["dirt"],
        "growthTicks":600,
        "display":{"block":'oak_sapling'},
        "drops":[
            {"chance":1.00,"output":{"item":'oak_log'},"minRolls":2,"maxRolls":4},
            {"chance":0.10,"output":{"item":"minecraft:stick"},"minRolls":1,"maxRolls":2},
            {"chance":0.05,"output":{"item":'apple'}},
            {"chance":0.15,"output":{"item":'oak_sapling'}}
        ]
    })

    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":'oak_sapling'},
        "categories":['thermal:phytosoil'],
        "growthTicks":100,
        "display":{"block":'oak_sapling'},
        "drops":[
            {"chance":1.00,"output":{"item":'oak_log'},"minRolls":2,"maxRolls":4}
        ]
    })

    //铜矿
    event.custom({
        type:'botanypots:crop',
        seed:{item:'kubejs:copper_orechid'},
        categories:['terrasteel_block'],
        growthTicks:600,
        display:{block:'botania:orechid'},
        drops:[
            {chance:1.00,output:{item:'minecraft:copper_ore'}},
            {chance:0.25,output:{item:'minecraft:deepslate_copper_ore'}}
        ]
    })
})