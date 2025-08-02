Ponder.registry(event => {
    event.create('kubejs:brass_mana_generator')
        .scene('brass_mana_generator',"Brass Mana Generator",(scene,util) => {
            scene.showStructure()
            scene.idle(10)

            let casing = 'create:brass_casing'
            let gen = 'kubejs:andesite_mana_gen'
            let lotus = 'kubejs:blacker_lotus_block'

            scene.world.setBlocks([0,1,0,4,1,4],casing,false)
            scene.world.setBlock([2,1,2],'create:brass_encased_shaft',false)
            scene.idle(10)

            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([1,2,1,3,2,3],gen,false)
            scene.world.setBlock([1,2,1],lotus,false)
            scene.world.setBlock([3,2,1],lotus,false)
            scene.world.setBlock([3,2,3],lotus,false)
            scene.world.setBlock([1,2,3],lotus,false)
            scene.idle(10)

            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlock([2,3,2],'botania:mana_pool',false)
            scene.idle(20)
            scene.world.setBlock([1,3,1],lotus,false)
            scene.world.setBlock([3,3,1],lotus,false)
            scene.world.setBlock([3,3,3],lotus,false)
            scene.world.setBlock([1,3,3],lotus,false)
            scene.idle(20)
            scene.world.setBlock([2,3,1],'create:encased_chain_drive',false)
            scene.world.setBlock([1,3,2],'create:encased_chain_drive',false)
            scene.world.setBlock([2,3,3],'create:encased_chain_drive',false)
            scene.world.setBlock([3,3,2],'create:encased_chain_drive',false)
            scene.idle(10)

            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([1,4,1,3,4,3],gen,false)
            scene.world.setBlock([1,4,1],lotus,false)
            scene.world.setBlock([3,4,1],lotus,false)
            scene.world.setBlock([3,4,3],lotus,false)
            scene.world.setBlock([1,4,3],lotus,false)
            scene.idle(10)

            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([4,2,0,4,5,4],casing,false)
            scene.world.setBlocks([0,2,0,0,5,4],casing,false)
            scene.world.setBlocks([0,2,0,4,5,0],casing,false)
            scene.world.setBlocks([0,2,4,4,5,4],casing,false)
            scene.idle(10)

            scene.addKeyframe()
            scene.idle(10)
            
            scene.world.setBlocks([1,5,1,3,5,3],casing,false)
            scene.world.setBlock([2,5,2],'create:brass_encased_shaft',false)
            scene.idle(60)

        })
})