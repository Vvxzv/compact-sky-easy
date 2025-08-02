Ponder.registry(event=>{
    event.create('botania:runic_altar')
        .scene('runic_altar',"Runic Altar",(scene, util) => {
            scene.showStructure()
            scene.idle(10)

            let rock = 'botania:livingrock'
            let dirt = 'kubejs:livingdirt'
            let manasteel = 'botania:manasteel_block'
            let obsidian ='minecraft:obsidian'

            scene.world.setBlocks([1,1,1,3,1,3],rock,false)

            scene.idle(10)
            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([1,2,1,3,2,3],dirt,false)
            scene.world.setBlock([2,2,2],obsidian,false)
            
            scene.idle(10)
            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([0,3,0,4,3,4],rock,false)
            
            scene.idle(10)
            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlocks([0,4,0,4,4,4],rock,false)
            scene.world.setBlock([2,4,2],manasteel,false)
            scene.idle(20)
        })
})