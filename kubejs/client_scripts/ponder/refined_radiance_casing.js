Ponder.registry(event => {
    event.create('create:refined_radiance_casing')
        .scene('refined_radiance_casing',"Refined Radiance Casing", (scene, util) => {
            scene.showStructure()
            scene.idle(10)

            scene.world.setBlock([2,2,2],'create:railway_casing', false)
            scene.addKeyframe()
            scene.idle(10)
            scene.text(50, "§7In a six sided bright environment", [2.5,2.5,2.5])
            scene.idle(30)
            scene.addKeyframe()
            scene.idle(30)
            scene.showControls(50, [2.5,2.5,2.5], "down").rightClick().withItem('create:refined_radiance')
            scene.idle(50)
            scene.world.setBlock([2,2,2],'create:refined_radiance_casing', true)
            scene.idle(20)
        })
})