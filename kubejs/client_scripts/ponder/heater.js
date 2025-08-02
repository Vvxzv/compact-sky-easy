Ponder.registry(event=>{
    event.create('immersiveengineering:furnace_heater')
        .scene('furnace_heater',"External Heater",(scene,util)=>{
            scene.showStructure()
            scene.idle(10)

            scene.world.setBlock([2,1,2],'immersiveengineering:furnace_heater',false)
            scene.world.setBlock([2,2,2],'exnihilosequentia:fired_crucible',false)
            scene.idle(20)
            scene.text(60,"§fWhen using an §dExternal Heater §fas a §dCrucible §fheat source, you need to keep the §dExternal Heater §fin working condition",[2.5,1.5,2.5])
            
            scene.idle(70)
            scene.addKeyframe()
            scene.idle(10)

            scene.world.setBlock([1,1,2],'minecraft:furnace',false)
            scene.idle(20)
            scene.text(40,"§fAfter powering on the §dExternal Heater",[2.5,1.5,2.5])
            scene.idle(50)
            scene.world.modifyBlock([1, 1, 2],() => Block.id('minecraft:furnace').with("lit", "ture"), false)
            scene.text(40,"§fWhen §dFurnace §fsmelting",[1.5,1.5,2.5])
            scene.idle(50)
            scene.world.modifyBlock([2, 1, 2],() => Block.id('immersiveengineering:furnace_heater').with("active", "ture"), false)
            scene.text(40,"§fNow, you can use the §dCrucible",[2.5,2.5,2.5])
            scene.idle(80)


        })
})