const reid = [
    'minecraft:ens_netherrack',
    'minecraft:furnace',
    'minecraft:blast_furnace',
    'minecraft:cauldron',
    'minecraft:crafting_table',
    'minecraft:anvil',
    'minecraft:oak_planks',
    'minecraft:iron_trapdoor',
    'minecraft:copper_ingot_from_smelting_deepslate_copper_ore',
    'minecraft:copper_ingot_from_smelting_copper_ore',
    'minecraft:copper_ingot_from_blasting_deepslate_copper_ore',
    'minecraft:copper_ingot_from_blasting_copper_ore',
    'minecraft:iron_ingot_from_smelting_iron_ore',
    'minecraft:iron_ingot_from_blasting_iron_ore',
    'minecraft:iron_ingot_from_smelting_deepslate_iron_ore',
    'minecraft:iron_ingot_from_blasting_deepslate_iron_ore',

    'ceramicbucket:ceramic_bucket',
    'ceramicbucket:unfired_clay_bucket',

    'uppers:upper',


    'botania:mana_infusion/mangrove_propagule_to_oak_sapling',
    'botania:mana_infusion/mana_string',
    'botania:diluted_pool',
    'botania:apothecary_default',
    'botania:mana_pool',
    'botania:alchemy_catalyst',
    'botania:conjuration_catalyst',
    'botania:flower_bag',
    'botania:mana_infusion/manasteel',
    'botania:terra_plate/terrasteel_ingot',
    'botania:mana_infusion/gunpowder_to_flint',
    'botania:mana_infusion/flint_to_gunpowder',
    'botania:mana_infusion/mana_powder_dust',
    'botania:mana_infusion/mana_powder_dye',
    'botania:mana_infusion/manasteel_block',
    'botania:glimmering_livingwood_log',
    'botania:petal_apothecary/orechid',
    'botania:alfheim_portal',
    'botania:elven_trade/elementium_block',
    'botania:petal_apothecary/munchdew',
    'botania:gaia_pylon',
    'botania:gaia_ingot',
    /.*thermalily/,
    // /.*rosa_arcana/,
    /.*entropinnyum/,
    /.*kekimurus/,
    /.*gourmaryllis/,
    /.*narslimmus/,
    /.*spectrolus/,
    /.*dandelifeon/,
    /.*rafflowsia/,
    /.*shulk_me_not/,
    'botania:floating_orechid',
    'botania:orechid_ignem',
    'botania:floating_orechid_ignem',

    'cyclic:compressed_cobblestone',
    'cyclic:copper_nugget',
    'cyclic:user',
    'cyclic:crafting/clay',
    'cyclic:copper_ingot',
    'cyclic:hopper_fluid',
    'cyclic:fluid_pipe',
    'cyclic:crafting_stick',
    'cyclic:hopper',
    'cyclic:breaker',
    'cyclic:energy_pipe',
    'cyclic:item_pipe',
    'cyclic:cable_wrench',
    'cyclic:uncrafter',
    'cyclic:crusher/copper_ore',
    'cyclic:crusher/diorite',
    'cyclic:crusher/netherrack',
    'cyclic:crusher/carpets',
    'cyclic:crusher/iron_ore',
    'cyclic:crusher/hopper',
    'cyclic:crusher/gold_ore',
    'cyclic:crusher/magma_cream',
    'cyclic:crusher/end_stone',
    'cyclic:crusher/iron_bars',
    'cyclic:crusher/rail',
    'cyclic:crusher/activator_rail',
    'cyclic:crusher/detector_rail',
    'cyclic:crusher/powered_rail',
    
    
    'thermal:augments/item_filter_augment',
    'thermal:rubber_from_vine',
    'thermal:rubber_from_dandelion',

    'mekanism:steel_casing',
    'mekanism:infusion_conversion/carbon/from_charcoal_block',
    'mekanism:infusion_conversion/carbon/from_charcoal',
    'mekanism:processing/uranium/ingot/from_ore_smelting',
    'mekanism:processing/uranium/ingot/from_ore_blasting',
    'mekanism:processing/uranium/slurry/dirty/from_ore',
    'mekanism:processing/uranium/dust/from_ore',
    'mekanism:processing/uranium/ingot/from_ore_smelting',
    'mekanism:processing/uranium/clump/from_ore',


    'create:crushing/uranium_ore',
    'create:crushing/crimsite_recycling',
    'create:crushing/crimsite',
    'create:crushing/ochrum_recycling',
    'create:crushing/ochrum',
    'create:crushing/veridium_recycling',
    'create:crushing/veridium',
    'create:splashing/mekanism/crushed_raw_tin',
    'create:crafting/kinetics/cogwheel',
    'create:crafting/kinetics/large_cogwheel_from_little',
    'create:crafting/kinetics/large_cogwheel',
    'create:crafting/kinetics/whisk',
    'create:item_application/copper_casing_from_log',
    'create:item_application/copper_casing_from_wood',
    'create:crafting/kinetics/windmill_bearing',
    'create:blasting/zinc_ingot_from_ore',
    'create:smelting/zinc_ingot_from_ore',
    'create:crafting/kinetics/empty_blaze_burner',
    'create:item_application/brass_casing_from_log',
    'create:item_application/brass_casing_from_wood',
    'create:crafting/schematics/schematicannon',
    'create:crafting/schematics/empty_schematic',
    'create:crafting/schematics/schematic_and_quill',
    'create:crafting/kinetics/mechanical_arm',
    'create:milling/lapis_lazuli',
    'create:crushing/copper_ore',
    'create:crushing/deepslate_copper_ore',
    'create:smelting/ingot_aluminum_compat_immersiveengineering',
    'create:blasting/ingot_aluminum_compat_immersiveengineering',
    'create:splashing/immersiveengineering/crushed_raw_aluminum',
    'create:crafting/kinetics/cuckoo_clock',
    'create:crushing/deepslate_iron_ore',
    'create:crushing/iron_ore',
    'create:crushing/zinc_ore',
    'create:crushing/deepslate_zinc_ore',

    'createaddition:compat/immersiveengineering/item_application/kiln_brick',
    'createaddition:mixing/electrum',
    'create:compat/ae2/mixing/fluix_crystal',
    'create:crushing/compat/exnihilosequentia/crushed_netherrack',
    'create:crushing/compat/exnihilosequentia/netherrack',
    
    'immersiveengineering:crafting/treated_wood_horizontal',
    'immersiveengineering:crafting/blastbrick',
    'immersiveengineering:crafting/cokebrick',
    'immersiveengineering:crafting/cokebrick_from_slab',
    'immersiveengineering:crafting/cokebrick_to_slab',
    'immersiveengineering:crafting/blastbrick_from_slab',
    'immersiveengineering:crafting/blastbrick_to_slab',
    'immersiveengineering:crafting/rs_engineering',
    'immersiveengineering:crafting/heavy_engineering',
    'immersiveengineering:crafting/light_engineering',
    'immersiveengineering:crafting/steel_scaffolding_standard',
    'immersiveengineering:crafting/ersatz_leather',
    'immersiveengineering:crafting/stick_steel',
    'immersiveengineering:crafting/alloybrick',
    'immersiveengineering:crafting/alloybrick_from_slab',
    'immersiveengineering:crafting/hammercrushing_iron',
    'immersiveengineering:smelting/ingot_hop_graphite',
    'immersiveengineering:smelting/ingot_hop_graphite_from_blasting',
    'immersiveengineering:arcfurnace/ore_aluminum',
    'immersiveengineering:arcfurnace/raw_ore_aluminum',
    'immersiveengineering:crafting/redstone_acid',
    'immersiveengineering:crafting/hammercrushing_uranium',
    'immersiveengineering:crusher/ore_uranium',
    'immersiveengineering:arcfurnace/ore_uranium',
    'immersiveengineering:crusher/ore_copper',
    'immersiveengineering:crafting/raw_hammercrushing_uranium',
    'immersiveengineering:crafting/raw_hammercrushing_tin',
    'immersiveengineering:crafting/raw_hammercrushing_silver',
    'immersiveengineering:crafting/raw_hammercrushing_osmium',
    'immersiveengineering:crafting/raw_hammercrushing_nickel',
    'immersiveengineering:crafting/raw_hammercrushing_lead',
    'immersiveengineering:crafting/raw_hammercrushing_iron',
    'immersiveengineering:crafting/raw_hammercrushing_gold',
    'immersiveengineering:crafting/raw_hammercrushing_copper',
    'immersiveengineering:crafting/raw_hammercrushing_aluminum',
    'immersiveengineering:crafting/hammercrushing_tin',
    'immersiveengineering:crafting/hammercrushing_silver',
    'immersiveengineering:crafting/hammercrushing_osmium',
    'immersiveengineering:crafting/hammercrushing_nickel',
    'immersiveengineering:crafting/hammercrushing_lead',
    'immersiveengineering:crafting/hammercrushing_gold',
    'immersiveengineering:crafting/hammercrushing_copper',
    'immersiveengineering:crafting/hammercrushing_aluminum',

    'refinedstorage:processor_binding',
    'refinedstorage:raw_basic_processor',
    'refinedstorage:raw_improved_processor',
    'refinedstorage:raw_advanced_processor',
    'refinedstorage:basic_processor',
    'refinedstorage:improved_processor',
    'refinedstorage:advanced_processor',
    'refinedstorage:machine_casing',
    'refinedstorage:silicon',

    'functionalstorage:oak_1',
    'functionalstorage:oak_drawer_alternate_x1',
    'functionalstorage:oak_drawer_alternate_x2',
    'functionalstorage:oak_drawer_alternate_x4',
    'functionalstorage:gold_upgrade',
    'functionalstorage:copper_upgrade',
    'functionalstorage:diamond_upgrade',
    'functionalstorage:netherite_upgrade',

    'createoreexcavation:drilling/gold',
    'createoreexcavation:drilling/glowstone',
    'createoreexcavation:drilling/quartz',
    'createoreexcavation:drilling/emerald',
    'createoreexcavation:drilling/hardened_diamond',
    'createoreexcavation:drilling/iron',
    'createoreexcavation:drilling/diamond',
    'createoreexcavation:drilling/coal',
    'createoreexcavation:drilling/redstone',
    'createoreexcavation:drilling/copper',
    'createoreexcavation:drilling/zinc',
    'createoreexcavation:extractor/water',

    'create:crushing/compat/ae2/quartz_ore',
    'create:crushing/compat/ae2/deepslate_quartz_ore',

    'thermal:machine_furnace',
    'thermal:machine_smelter',
    'thermal:fire_charge/obsidian_glass_2',
    'thermal:fire_charge/signalum_glass_2',
    'thermal:fire_charge/lumium_glass_2',
    'thermal:fire_charge/enderium_glass_2',
    'thermal:machines/smelter/smelter_glass_enderium',
    
    'ae2:network/blocks/crystal_processing_charger',
    'ae2:charger/charged_certus_quartz_crystal',
    'ae2:inscriber/logic_processor',
    'ae2:inscriber/calculation_processor',
    'ae2:inscriber/engineering_processor',
    'ae2:transform/entangled_singularity_from_pearl',
    'ae2:tools/paintballs_lime',
    'ae2:tools/paintballs_lumen_lime',
    'ae2:transform/flawed_budding_quartz',
    'ae2:transform/chipped_budding_quartz',
    'ae2:transform/damaged_budding_quartz',
    'ae2:smelting/silicon_from_certus_quartz_dust',
    'ae2:blasting/silicon_from_certus_quartz_dust',

    'fluiddrawerslegacy:fluiddrawer',

    'mekanism:processing/uranium/reprocessing/from_plutonium',

    'laserio:logic_chip_raw',

    'functionalstorage:fluid_2',
    'functionalstorage:fluid_4',

    'minecraft:ens_ancient_debris',
    
    'mekanism:nucleosynthesizing/enchanted_golden_apple',
    'cyclic:solidifier/solidifier_apple_enchanted',
    'ae2:tools/paintballs_lumen_purple',
    'ae2:tools/paintballs_purple',
    'ae2:transform/fluix_crystal',
    
    //金属合成id
        //铁
    'minecraft:iron_nugget',
    'minecraft:iron_ingot_from_nuggets',
    'minecraft:iron_ingot_from_iron_block',
    'minecraft:iron_block',
        //铜
    'create:crafting/materials/copper_nugget',
    'thermal:storage/copper_ingot_from_nuggets',
    'minecraft:copper_ingot_from_waxed_copper_block',
    'minecraft:copper_ingot',
    'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
    'create:crafting/materials/copper_ingot',
    'minecraft:copper_block',
    'thermal:storage/copper_nugget_from_ingot',
    'immersiveengineering:crafting/copper_ingot_to_nugget_copper',
        //金
    'minecraft:gold_nugget',
    'minecraft:gold_ingot_from_nuggets',
    'minecraft:gold_ingot_from_gold_block',
    'minecraft:gold_block',
        //锡
    'thermal:storage/tin_nugget_from_ingot',
    'thermal:storage/tin_ingot_from_nuggets',
    'thermal:storage/tin_ingot_from_block',
    'thermal:storage/tin_block',
    'mekanism:processing/tin/storage_blocks/from_ingots',
    'mekanism:processing/tin/nugget/from_ingot',
    'mekanism:processing/tin/ingot/from_nuggets',
    'mekanism:processing/tin/ingot/from_block',

        //钢
    'mekanism:nuggets/steel',
    'mekanism:processing/steel/ingot/from_nuggets',
    'mekanism:processing/steel/ingot/from_block',
    'mekanism:storage_blocks/steel',
    'immersiveengineering:crafting/ingot_steel_to_nugget_steel',
        //锌
    'create:crafting/materials/zinc_ingot_from_compacting',
    'create:crafting/materials/zinc_nugget_from_decompacting',
    'create:crafting/materials/zinc_block_from_compacting',
    'create:crafting/materials/zinc_ingot_from_decompacting',
        //泰拉钢
    'botania:terrasteel_block',
    'botania:conversions/terrasteel_block_deconstruct',
    'botania:conversions/terrasteel_from_nugget',
    'botania:conversions/terrasteel_to_nugget',
        //黄铜
    'create:crafting/materials/brass_nugget_from_decompacting',
    'create:crafting/materials/brass_ingot_from_decompacting',
    'create:crafting/materials/brass_ingot_from_compacting',
    'create:crafting/materials/brass_block_from_compacting',
        //富石英铁 
    'refinedstorage:quartz_enriched_iron_from_block',
    'refinedstorage:block_of_quartz_enriched_iron',
        //铝
    'immersiveengineering:crafting/ingot_aluminum_to_nugget_aluminum',
    'immersiveengineering:crafting/storage_aluminum_to_ingot_aluminum',
    'immersiveengineering:crafting/nugget_aluminum_to_ingot_aluminum',
    'immersiveengineering:crafting/ingot_aluminum_to_storage_aluminum',
        //镍
    'thermal:storage/nickel_nugget_from_ingot',
    'thermal:storage/nickel_ingot_from_nuggets',
    'thermal:storage/nickel_ingot_from_block',
    'thermal:storage/nickel_block',
    'immersiveengineering:crafting/ingot_nickel_to_nugget_nickel',
    'immersiveengineering:crafting/storage_nickel_to_ingot_nickel',
    'immersiveengineering:crafting/nugget_nickel_to_ingot_nickel',
    'immersiveengineering:crafting/ingot_nickel_to_storage_nickel',
        //康铜
    'thermal:storage/constantan_nugget_from_ingot',
    'thermal:storage/constantan_ingot_from_nuggets',
    'thermal:storage/constantan_ingot_from_block',
    'thermal:storage/constantan_block',
    'immersiveengineering:crafting/nugget_constantan_to_ingot_constantan',
    'immersiveengineering:crafting/storage_constantan_to_ingot_constantan',
    'immersiveengineering:crafting/ingot_constantan_to_nugget_constantan',
    'immersiveengineering:crafting/ingot_constantan_to_storage_constantan',
        //殷钢
    'thermal:storage/invar_nugget_from_ingot',
    'thermal:storage/invar_ingot_from_nuggets',
    'thermal:storage/invar_ingot_from_block',
    'thermal:storage/invar_block',
        //流明
    'thermal:storage/lumium_nugget_from_ingot',
    'thermal:storage/lumium_ingot_from_nuggets',
    'thermal:storage/lumium_ingot_from_block',
    'thermal:storage/lumium_block',
        //信素
    'thermal:storage/signalum_nugget_from_ingot',
    'thermal:storage/signalum_ingot_from_nuggets',
    'thermal:storage/signalum_ingot_from_block',
    'thermal:storage/signalum_block',
        //末影
    'thermal:storage/enderium_nugget_from_ingot',
    'thermal:storage/enderium_ingot_from_nuggets',
    'thermal:storage/enderium_ingot_from_block',
    'thermal:storage/enderium_block',
        //琥珀金
    'thermal:storage/electrum_nugget_from_ingot',
    'thermal:storage/electrum_ingot_from_nuggets',
    'thermal:storage/electrum_ingot_from_block',
    'thermal:storage/electrum_block',
    'immersiveengineering:crafting/ingot_electrum_to_storage_electrum',
    'immersiveengineering:crafting/ingot_electrum_to_nugget_electrum',
    'immersiveengineering:crafting/nugget_electrum_to_ingot_electrum',
    'immersiveengineering:crafting/storage_electrum_to_ingot_electrum',
    'createaddition:crafting/electrum_ingot',
    'createaddition:crafting/electrum_nugget',
        //青铜
    'thermal:storage/bronze_nugget_from_ingot',
    'thermal:storage/bronze_ingot_from_nuggets',
    'thermal:storage/bronze_ingot_from_block',
    'thermal:storage/bronze_block',
    'mekanism:storage_blocks/bronze',
    'mekanism:processing/bronze/ingot/from_block',
    'mekanism:storage_blocks/bronze',
    'mekanism:nuggets/bronze',
    //U
    'mekanism:processing/uranium/ingot/from_nuggets',
    'mekanism:processing/uranium/ingot/from_block',
    'mekanism:processing/uranium/nugget/from_ingot',
    'mekanism:processing/uranium/storage_blocks/from_ingots',
    'immersiveengineering:crafting/nugget_uranium_to_ingot_uranium',
    'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
    'immersiveengineering:crafting/ingot_uranium_to_nugget_uranium',
    'immersiveengineering:crafting/storage_uranium_to_ingot_uranium',
    //Ag
    'thermal:storage/silver_nugget_from_ingot',
    'thermal:storage/silver_ingot_from_nuggets',
    'thermal:storage/silver_ingot_from_block',
    'thermal:storage/silver_block',
    'immersiveengineering:crafting/ingot_silver_to_storage_silver',
    'immersiveengineering:crafting/storage_silver_to_ingot_silver',
    'immersiveengineering:crafting/nugget_silver_to_ingot_silver',
    'immersiveengineering:crafting/ingot_silver_to_nugget_silver',
    //Pb
    'mekanism:processing/lead/nugget/from_ingot',
    'mekanism:processing/lead/ingot/from_nuggets',
    'mekanism:processing/lead/ingot/from_block',
    'mekanism:processing/lead/storage_blocks/from_ingots',
    'thermal:storage/lead_block',
    'thermal:storage/lead_ingot_from_block',
    'thermal:storage/lead_ingot_from_nuggets',
    'thermal:storage/lead_nugget_from_ingot',
    'immersiveengineering:crafting/ingot_lead_to_storage_lead',
    'immersiveengineering:crafting/storage_lead_to_ingot_lead',
    'immersiveengineering:crafting/nugget_lead_to_ingot_lead',
    'immersiveengineering:crafting/ingot_lead_to_nugget_lead',
    //Os
    'mekanism:processing/osmium/nugget/from_ingot',
    'mekanism:processing/osmium/ingot/from_nuggets',
    'mekanism:processing/osmium/ingot/from_block',
    'mekanism:processing/osmium/storage_blocks/from_ingots',

    //强化黑曜石
    'mekanism:nuggets/refined_obsidian',
    'mekanism:processing/refined_obsidian/ingot/from_nuggets',
    'mekanism:processing/refined_obsidian/ingot/from_nuggets',
    'mekanism:storage_blocks/refined_obsidian',
    //强化荧石
    'mekanism:nuggets/refined_glowstone',
    'mekanism:processing/refined_glowstone/ingot/from_nuggets',
    'mekanism:processing/refined_glowstone/ingot/from_block',
    'mekanism:storage_blocks/refined_glowstone',

]

const remod = [
    'exnihilosequentia',
    'woodenshears',
    'botanypots',
    'compactmachines',
    'exnaturae'
]

const reoutput = [
    'minecraft:dark_oak_sapling',
    'minecraft:jungle_planks',

    'thermal:raw_tin_block',
    'thermal:raw_tin',
    'thermal:cured_rubber',
    'thermal:machine_frame',
    'thermal:rubberwood_planks',

    'botania:endoflame',
    'botania:rune_air',
    'botania:rune_earth',
    'botania:rune_fire',
    'botania:rune_water',

    'create:andesite_alloy',
    'create:andesite_casing',
    'create:shaft',
    'create:sail_frame',
    'create:white_sail',

    'immersiveengineering:ingot_steel',
    'immersiveengineering:storage_steel',

    'ironchest:iron_chest',

    'cyclic:gem_obsidian',
    'cyclic:shape_data',
    'cyclic:computer_shape',
    'cyclic:structure'
]

const reinput = [
    'thermal:raw_tin_block',

    'cyclic:gem_obsidian'
]


ServerEvents.recipes(event => {
    reid.forEach(reid => {
        event.remove({ id: reid })
    })
    remod.forEach(remod => {
        event.remove({ mod: remod })
    })
    reoutput.forEach(reoutput => {
        event.remove({ output: reoutput })
    })
    reinput.forEach(reinput =>{
        event.remove({ input: reinput })
    })
    
    event.remove({input:Item.of('immersiveengineering:hammer', '{Damage:0}'),type:'crafting_shapeless'})
    event.remove({output:'#forge:gears',type:'crafting_shaped'})
    event.remove({type:'immersiveengineering:alloy'})

    const colors =[
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]
    colors.forEach(color => {
        event.remove({id:`elevatorid:elevator_${color}`})
    })

    event.remove({type:'botania:orechid'})
    event.remove({type:'botania:orechid_ignem'})
    
})