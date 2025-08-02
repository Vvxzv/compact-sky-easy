Ponder.registry(event=>{
    event.create('exnihilosequentia:fired_crucible')
        .scene('fired_crucible',"Fired Crucible", (scene, util)=>{
            scene.showStructure()
            scene.idle(10)

            let rock = 'botania:livingrock'
            let dirt = 'kubejs:livingdirt'
            let air = 'minecraft:air'

            scene.world.setBlock([0,1,0],rock,false)
            scene.world.setBlock([3,1,0],rock,false)
            scene.world.setBlock([0,1,3],rock,false)
            scene.world.setBlock([3,1,3],rock,false)

            scene.idle(10)
            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([0,2,0,3,2,3],rock,false)
            
            scene.idle(10)
            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([0,3,0,3,3,3],dirt,false)
            scene.world.setBlocks([1,3,1,2,3,2],air,false)
            
            scene.idle(10)
            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([0,4,0,3,4,3],dirt,false)
            scene.world.setBlocks([1,4,1,2,4,2],air,false)
            
            scene.idle(20)
        })
})