StartupEvents.registry("fluid", event=>{
    event.create("mud").thickTexture(0x5e402b).bucketColor(0x5e402b)
    event.create('cured_rubber').thickTexture(0x222222).bucketColor(0x222222).noBlock()
    event.create('andesite_alloy').thickTexture(0x6d7d73).bucketColor(0x6d7d73)
    event.create('composite_steel').thickTexture(0xe6e6db).bucketColor(0xe6e6db).tag('kubejs:composite_steel')
    event.create('liquid_mana').stillTexture('kubejs:block/liquid_mana/liquid_mana_still').flowingTexture('kubejs:block/liquid_mana/liquid_mana_flowing').bucketColor(0x48E9F5)
    event.create('copper_sulfate_solution').thinTexture(0x2778dd).noBucket()
    event.create('rich_copper_sulfate_solution').thickTexture(0x5e69bf).noBucket()
    event.create('ferrous_sulfate_solution').thickTexture(0xafd68c)
    event.create('diluted_sulfuric_acid').thinTexture(0xcbbf90).noBucket()
    event.create('blaze_blood').thickTexture(0xeaa748).bucketColor(0xeaa748).noBlock()
    event.create('soul').thinTexture(0x13b1b6).bucketColor(0x13b1b6).noBlock()
    event.create('chorus').thinTexture(0xa472a3).bucketColor(0xa472a3)


    event.create('red').thinTexture(0xe10035).bucketColor(0xe10035)
    event.create('green').thinTexture(0x55c929).bucketColor(0x55c929)
    event.create('blue').thinTexture(0x4841e1).bucketColor(0x4841e1)

    //red + green
    event.create('orange').thinTexture(0xf6c95e).bucketColor(0xf6c95e)
    //red + blue
    event.create('magenta').thinTexture(0xf941f6).bucketColor(0xf941f6)
    //green + blue
    event.create('aqua').thinTexture(0x9dfafa).bucketColor(0x9dfafa)

    event.create('chromatic').thinTexture(0x4d2d3b).bucketColor(0x4d2d3b)

    event.create('silicon_tetrachloride').thinTexture(0xc9e479).bucketColor(0xc9e479)
})