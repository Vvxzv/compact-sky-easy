Ponder.registry(event => {
    event.create('kubejs:wither_machine')
        .scene('wither_machine',"Wither Machine Multi Block Structure",(scene,util) =>{
            scene.showStructure()
            scene.world.setBlocks([0,0,0,4,0,4], 'compactmachines:wall', false)
            scene.idle(10)

            let glass = 'thermal:enderium_glass'
            let casing = 'mekanism:steel_casing'
            let sand = 'minecraft:soul_sand'
            let skull = 'minecraft:wither_skeleton_skull'
            let machine = 'kubejs:wither_m'

            //1
            scene.world.setBlock([4, 1, 0], casing, false)
            scene.idle(10)
            scene.world.setBlock([4, 1, 1], casing, false)
            scene.idle(10)
            scene.world.setBlock([4, 1, 2], casing, false)
            scene.idle(10)
            scene.world.setBlock([4, 1, 3], casing, false)
            scene.idle(10)
            scene.world.setBlock([4, 1, 4], casing, false)
            scene.idle(10)

            scene.world.setBlock([3, 1, 0], casing, false)
            scene.world.setBlocks([3, 1, 1, 3, 1, 3], glass, false)
            scene.world.setBlock([3, 1, 4], casing, false)
            scene.idle(10)

            scene.world.setBlock([2, 1, 0], machine, false)
            scene.world.modifyBlock([2, 1, 0],() => Block.id(machine).with("facing", "north"), false)
            scene.text(50, "§dWither Machine§7, working in §bCompact World§7 dimension", [2.5,1.5,0.5])
            scene.world.setBlocks([2, 1, 1, 2, 1, 3], glass, false)
            scene.world.setBlock([2, 1, 4], casing, false)
            scene.idle(60)

            scene.world.setBlock([1, 1, 0], casing, false)
            scene.world.setBlocks([1, 1, 1, 1, 1, 3], glass, false)
            scene.world.setBlock([1, 1, 4], casing, false)
            scene.idle(10)

            scene.world.setBlocks([0, 1, 0, 0, 1, 1], casing, false)
            scene.world.setBlocks([0, 1, 0, 0, 1, 4], casing, false)
            scene.text(50, "§dEnderium Glass", [2.5,1.5,2.5])
            scene.idle(60)

            scene.addKeyframe()

            //2
            scene.world.setBlock([4, 2, 0], casing, false)
            scene.world.setBlock([4, 2, 4], casing, false)
            scene.world.setBlock([0, 2, 0], casing, false)
            scene.world.setBlock([0, 2, 4], casing, false)
            scene.world.setBlocks([4, 2, 1, 4, 2, 3], glass, false)
            scene.world.setBlocks([0, 2, 1, 0, 2, 3], glass, false)
            scene.world.setBlocks([1, 2, 0, 3, 2, 0], glass, false)
            scene.world.setBlocks([1, 2, 4, 3, 2, 4], glass, false)
            scene.idle(30)

            scene.addKeyframe()

            //wither
            scene.world.setBlock([2, 2, 2], sand, false)
            scene.world.setBlocks([1, 3, 2, 3, 3, 2], sand, false)
            scene.world.setBlocks([1, 4, 2, 3, 4, 2], skull, false)
            scene.idle(10)
            scene.text(50, "§7Place Wither Structure", [2.5,2.5,2.5])
            scene.idle(60)
            scene.text(80, "§7At the end of the machine's §7operation, \n§7it will consume the Wither §7Structure and \n§7produce the §dNether Star §7in the §7machine", [2.5,2.5,2.5])
            scene.idle(100)

            scene.addKeyframe()

            //3
            scene.world.setBlock([4, 3, 0], casing, false)
            scene.world.setBlock([4, 3, 4], casing, false)
            scene.world.setBlock([0, 3, 0], casing, false)
            scene.world.setBlock([0, 3, 4], casing, false)
            scene.world.setBlocks([4, 3, 1, 4, 3, 3], glass, false)
            scene.world.setBlocks([0, 3, 1, 0, 3, 3], glass, false)
            scene.world.setBlocks([1, 3, 0, 3, 3, 0], glass, false)
            scene.world.setBlocks([1, 3, 4, 3, 3, 4], glass, false)
            scene.idle(30)

            scene.addKeyframe()

            //4
            scene.world.setBlock([4, 4, 0], casing, false)
            scene.world.setBlock([4, 4, 4], casing, false)
            scene.world.setBlock([0, 4, 0], casing, false)
            scene.world.setBlock([0, 4, 4], casing, false)
            scene.world.setBlocks([4, 4, 1, 4, 4, 3], glass, false)
            scene.world.setBlocks([0, 4, 1, 0, 4, 3], glass, false)
            scene.world.setBlocks([1, 4, 0, 3, 4, 0], glass, false)
            scene.world.setBlocks([1, 4, 4, 3, 4, 4], glass, false)
            scene.idle(30)

            scene.addKeyframe()

            //5
            scene.world.setBlocks([0, 5, 0, 4, 5, 4], casing, false)
            scene.world.setBlocks([1, 5, 1, 3, 5, 3], glass, false)
            scene.idle(30)

        })
})