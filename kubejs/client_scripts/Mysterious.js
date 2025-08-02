ClientEvents.loggedIn(event => {
    //神秘转换配方
    const $MysteriousItemConversionCategory = Java.loadClass("com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory")
    const $ConversionRecipe = Java.loadClass("com.simibubi.create.compat.jei.ConversionRecipe")
    let MysteriousItemConversionCategory = (input, output) =>(
        $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(input, output))
    )

    //余烬面粉
    MysteriousItemConversionCategory('botania:pixie_dust','create:cinder_flour')
    MysteriousItemConversionCategory('minecraft:nether_bricks','create:cinder_flour')

    //黄铜机壳
    MysteriousItemConversionCategory('create:brass_ingot','create:brass_casing')
    MysteriousItemConversionCategory('thermal:stripped_rubberwood_log','create:brass_casing')
    MysteriousItemConversionCategory('thermal:stripped_rubberwood_wood','create:brass_casing')

    //光辉石，暗影钢
    MysteriousItemConversionCategory('create:chromatic_compound','create:shadow_steel')
    MysteriousItemConversionCategory('create:chromatic_compound','create:refined_radiance')

    //暗影机壳
    MysteriousItemConversionCategory('create:shadow_steel','create:shadow_steel_casing')
    MysteriousItemConversionCategory('create:railway_casing','create:shadow_steel_casing')

    //光辉机壳
    MysteriousItemConversionCategory('create:refined_radiance','create:refined_radiance_casing')
    MysteriousItemConversionCategory('create:railway_casing','create:refined_radiance_casing')
})
