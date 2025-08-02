Ponder.registry(event => {
    event.create('elevatorid:elevator_orange')
        .scene('elevator_orange',"Crafting Structure of Elevator",(scene,util) =>{
            scene.showStructure()
            scene.idle(10)

            let casing = 'create:brass_casing'
            let glass = 'minecraft:glass'

            scene.world.setBlocks([1,1,1,3,1,3],casing,false)
            scene.idle(20)

            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([3,2,1,3,3,1],casing,false)
            scene.world.setBlocks([3,2,3,3,3,3],casing,false)
            scene.world.setBlocks([3,2,2,3,3,2],glass,false)
            scene.idle(20)
            scene.world.setBlocks([2,2,1,2,3,1],'create:brass_door',false)
            scene.world.modifyBlock([2, 2, 1],() => Block.id('create:brass_door').with("facing", "south").with("half", "lower"), false)
            scene.world.modifyBlock([2, 3, 1],() => Block.id('create:brass_door').with("facing", "south").with("half", "upper"), false)
            scene.idle(20)
            scene.world.setBlock([2,2,3],'create:contraption_controls',false)
            scene.world.modifyBlock([2,2,3],() => Block.id('create:contraption_controls').with("facing", "north"), false)
            scene.idle(20)
            scene.world.setBlock([2,3,3],'minecraft:glass_pane',false)
            scene.text(50,"§dGlass Pane",[2.5,3.5,3.5])
            scene.idle(60)
            scene.world.setBlocks([1,2,1,1,3,1],casing,false)
            scene.world.setBlocks([1,2,3,1,3,3],casing,false)
            scene.world.setBlocks([1,2,2,1,3,2],glass,false)
            scene.idle(20)

            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([1,4,1,3,4,3],casing,false)
            scene.idle(20)

            scene.world.setBlock([2,5,2],'create:elevator_pulley',false)
            scene.idle(10)
            scene.showControls(50, [2.5,5.5,2.5], "left").rightClick().withItem('create:precision_mechanism')
            scene.idle(60)

        })
})