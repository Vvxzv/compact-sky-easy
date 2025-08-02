ServerEvents.recipes(event=>{
    event.replaceInput({mod:'ae2'},'iron_ingot','refinedstorage:quartz_enriched_iron')
    //福鲁伊克斯水晶
    event.custom({
        type: "ae2:transform",
        circumstance: {
            type: "fluid",
            tag: "minecraft:water"
        },
        ingredients: [
            {
                item: "ae2:charged_certus_quartz_crystal"
            },
            {
                item: 'minecraft:amethyst_shard'
            }
        ],
        result: {
            item: "ae2:fluix_crystal",
            count:2
        }
    }).id('ae2:transform/fluix_crystals')

    //压印器
    event.replaceInput({id:'ae2:network/blocks/inscribers'},'minecraft:copper_ingot','#forge:ingots/bronze')

    let ae_inscriber = (result, bottom, middle, top, press_or_inscribe) => (
        event.custom({
            type: "ae2:inscriber",
            ingredients: {
                bottom: {
                    item: bottom
                },
                middle: {
                    item: middle
                },
                top: {
                    item: top
                }
            },
            mode: press_or_inscribe,
            result: {
                item: result
            }
        })
    )
    //赛特斯石英块
    ae_inscriber('ae2:quartz_block','ae2:certus_quartz_dust','botania:mana_quartz','ae2:certus_quartz_dust','press')
    .id('ae:ae_inscriber/quartz_block')

    //母岩
    ae_inscriber(
        'ae2:damaged_budding_quartz',
        'ae2:charged_certus_quartz_crystal',
        'ae2:quartz_block',
        'ae2:charged_certus_quartz_crystal',
        'press'
    ).id('ae:ae_inscriber/damaged_budding_quartz')

    ae_inscriber(
        'ae2:chipped_budding_quartz',
        'ae2:quartz_block',
        'ae2:damaged_budding_quartz',
        'ae2:quartz_block',
        'press'
    ).id('ae:ae_inscriber/chipped_budding_quartz')

    ae_inscriber(
        'ae2:flawed_budding_quartz',
        'ae2:quartz_block',
        'ae2:chipped_budding_quartz',
        'ae2:quartz_block',
        'press'
    ).id('ae:ae_inscriber/flawed_budding_quartz')

    ae_inscriber(
        'ae2:flawless_budding_quartz',
        'ae2:quartz_block',
        'ae2:flawed_budding_quartz',
        'ae2:quartz_block',
        'press'
    ).id('ae:ae_inscriber/flawless_budding_quartz')

    //处理器
    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            middle: {
                item: 'refinedstorage:basic_processor'
            }
        },
        mode: "inscribe",
        result: {
            item: 'ae2:logic_processor'
        }
    }).id('ae:inscriber/logic_processor')

    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            middle: {
                item: 'refinedstorage:improved_processor'
            }
        },
        mode: "inscribe",
        result: {
            item: 'ae2:calculation_processor'
        }
    }).id('ae:inscriber/calculation_processor')

    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            middle: {
                item: 'refinedstorage:advanced_processor'
            }
        },
        mode: "inscribe",
        result: {
            item: 'ae2:engineering_processor'
        }
    }).id('ae:inscriber/engineering_processor')

    //深度外壳
    event.replaceInput({id:'ae2things:cells/disk_housing'},'minecraft:netherite_ingot','kubejs:compositesteel_ingot')

    //魔力外壳
    event.replaceInput({id:'appbot:mana_cell_housing'},'botania:life_essence','botania:ender_air_bottle')

    //能源接收器
    event.replaceInput({id:'ae2:network/blocks/energy_energy_acceptor'},'copper_ingot','thermal:bronze_ingot')

    function sw(array){
        let n = array.length
        for(let i = 0; i < n; i++){
            let input = array[i]
            let output = array[(i+1)%n]
            let inputId = input.replace(/:/g, '_')
            let outputId = output.split(':')[0]
            event.shapeless(output, [input]).id('kubejs:' + outputId + '_from_' + inputId)
        }
    }

    //存储rs ae相互交换
    sw(['refinedstorage:1k_storage_part','ae2:cell_component_1k'])
    sw(['refinedstorage:4k_storage_part','ae2:cell_component_4k'])
    sw(['refinedstorage:16k_storage_part','ae2:cell_component_16k'])
    sw(['refinedstorage:64k_storage_part','ae2:cell_component_64k'])

    //物质聚合器
    event.shaped('ae2:condenser',[
        'aba','bcb','aba'
    ],{
        a:'refinedstorage:quartz_enriched_iron',
        b:'botania:mana_pearl',
        c:'ae2:fluix_dust'
    }).id('ae2:network/blocks/io_condenser')

    //量子纠缠奇点
    event.custom({
        type: "ae2:transform",
        circumstance: {
            type: "explosion"
        },
        ingredients: [
            {
                item: "ae2:singularity"
            },
            {
                item: 'kubejs:singularity_mana'
            },
            {
                tag: "forge:dusts/ender_pearl"
            }
        ],
        result: {
            count: 2,
            item: "ae2:quantum_entangled_singularity"
        }
    }).id('ae2:transform/entangled_singularity')

    
    //青色染色球
   event.shapeless('ae2:cyan_paint_ball',['minecraft:cyan_dye','ae2:matter_ball']).id('ae2:tools/paintballs_cyan')

    
})