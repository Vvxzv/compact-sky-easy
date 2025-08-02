Ponder.registry(event => {
    event.create('kubejs:gaia_machine')
        .scene('gaia_machine',"Gaia Machine Multi Block Structure",(scene,util)=>{
            scene.showStructure()
            scene.idle(10)

            let iron = 'minecraft:iron_block'
            let beacon = 'minecraft:beacon'
            let machine = 'kubejs:gaia_m'
            let gaia = 'botania:gaia_pylon'

            //1
            scene.world.setBlocks([1, 1, 1, 3, 1, 3], iron, false)
            scene.world.setBlock([2, 2, 2], beacon, false)
            scene.world.setBlock([0, 4, 0],gaia,false)
            scene.world.setBlock([4, 4, 0],gaia,false)
            scene.world.setBlock([0, 4, 4],gaia,false)
            scene.world.setBlock([4, 4, 4],gaia,false)
            scene.showControls(60, [2.5,2.5,2.5], "down").withItem(Item.of('botania:lexicon', '{"botania:elven_unlock":1b}'))
            scene.text(50,"§7Gaia Ceremony Placement",[2.5,2.5,2.5])
            scene.idle(70)

            scene.addKeyframe()

            scene.world.setBlock([2, 2, 1], machine, false)
            scene.world.modifyBlock([2, 2, 1],() => Block.id(machine).with("facing", "north"), false)
            scene.text(50,"§dGaia Machine",[2.5, 2.5, 1.5])
            scene.idle(70)

        })
})