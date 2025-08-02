Ponder.registry(event=>{
    event.create('kubejs:mana_brass_gearbox_p')
        .scene('mana_brass_gearbox_p',"Mana Brass Gearbox",(scene,util)=>{
            scene.showStructure()
            scene.idle(10)

            let gearbox = 'kubejs:mana_andesite_gearbox'
            let casing = 'create:brass_casing'
            let air = 'minecraft:air'
            
            scene.world.setBlock([2,1,2],gearbox,false)
            scene.idle(20)

            scene.world.setBlocks([1,1,1,3,1,3],casing,false)
            scene.world.setBlock([2,1,2],gearbox,false)
            scene.idle(10)

            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([1,2,1,3,2,3],gearbox,false)
            scene.world.setBlock([1,2,1],air,false)
            scene.world.setBlock([3,2,1],air,false)
            scene.world.setBlock([1,2,3],air,false)
            scene.world.setBlock([3,2,3],air,false)
            scene.idle(20)
            scene.world.setBlock([1,2,1],casing,false)
            scene.world.setBlock([3,2,1],casing,false)
            scene.world.setBlock([1,2,3],casing,false)
            scene.world.setBlock([3,2,3],casing,false)
            scene.idle(10)

            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlock([2,3,2],gearbox,false)
            scene.idle(20)

            scene.world.setBlocks([1,3,1,3,3,3],casing,false)
            scene.world.setBlock([2,3,2],gearbox,false)
            scene.idle(60)

        })
})