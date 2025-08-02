Ponder.registry(event=>{
    event.create('kubejs:golden_hand')
        .scene('golden_hand',"Multi Block Production of Golden Hand",(scene,util)=>{
            scene.showStructure()
            scene.idle(10)

            let frame = 'kubejs:golden_frame'
            let casing = 'create:andesite_casing'
            scene.world.setBlock([3,1,2], frame, false)
            scene.idle(10)
            scene.world.setBlock([3,2,2], frame, false)
            scene.idle(10)
            scene.world.setBlocks([3,3,2,1,3,2], frame, false)
            scene.idle(10)
            scene.world.setBlocks([3,4,2,1,4,2], frame, false)
            scene.idle(10)
            scene.world.setBlock([2,5,2], casing, false)
            scene.idle(10)
            scene.showControls(60, [2.5, 5.5, 2.5], "down").rightClick().withItem('create:shaft')
            scene.idle(80)
        })
})