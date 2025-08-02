Ponder.registry(event => {
    event.create('kubejs:advanced_lapis_crystallize_controller')
        .scene('advanced_lapis_crystallize_controller','Advanced Lapis Crystallize Multi Block Structure',(scene,util) => {
            scene.showStructure()
            scene.idle(10)

            let a = 'create:brass_casing'
            let b = 'minecraft:glass'
            let c = 'kubejs:advanced_lapis_crystallize'
            let d = 'kubejs:lapis_crystallize'
            let e = 'minecraft:water'
            let f = 'flopper:flopper'

            scene.world.setBlock([3, 1, 1],a,false)
            scene.idle(10)
            scene.world.setBlock([3, 1, 2],a,false)
            scene.idle(10)
            scene.world.setBlock([3, 1, 3],a,false)
            scene.idle(10)
            scene.world.setBlocks([2, 1, 1, 2, 1, 3], a, false)
            scene.idle(10)
            scene.world.setBlocks([1, 1, 1, 1, 1, 3], a, false)
            scene.idle(10)

            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlock([3, 2, 1],a, false)
            scene.idle(10)
            scene.world.setBlock([3, 2, 2],b, false)
            scene.idle(10)
            scene.world.setBlock([3, 2, 3],a, false)
            scene.idle(10)
            scene.world.setBlock([2, 2, 1],b, false)
            scene.idle(10)
            scene.world.setBlock([2, 2, 2],d, false)
            scene.text(50,"§dLapis Crystallize",[2.5,2.5,2.5])
            scene.idle(60)
            scene.world.setBlock([2, 2, 3],b, false)
            scene.idle(10)
            scene.world.setBlock([1, 2, 1],a,false)
            scene.idle(10)
            scene.world.setBlock([1, 2, 2],c,false)
            scene.world.modifyBlock([1, 2, 2],() => Block.id(c).with("facing", "west"), false)
            scene.idle(10)
            scene.world.setBlock([1, 2, 3],a,false)
            scene.idle(20)

            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([3, 3, 1, 3, 3, 3], a, false)
            scene.idle(5)
            scene.world.setBlock([2, 3, 1],a, false)
            scene.idle(10)
            scene.world.setBlock([2, 3, 2],f, false)
            scene.text(50,"§dFlopper",[2.5,3.5,2.5])
            scene.idle(60)
            scene.world.setBlock([2, 3, 3],a, false)
            scene.idle(10)
            scene.world.setBlocks([1, 3, 1, 1, 3, 3], a, false)
            scene.idle(10)

            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlock([2, 4, 2], e, false)
            scene.idle(10)
            scene.text(50,"§dWater §7will be §cconsumed",[2.5,4.5,2.5])
            scene.idle(80)

    })
})