ServerEvents.recipes(event =>{
    //金属合成
    metalCraft('iron', 'iron_nugget', 'iron_ingot', 'iron_block')
    metalCraft('copper', 'create:copper_nugget', 'copper_ingot', 'copper_block')
    metalCraft('tin','thermal:tin_nugget','thermal:tin_ingot','thermal:tin_block')
    metalCraft('gold','gold_nugget','gold_ingot','gold_block')
    metalCraft('steel','mekanism:nugget_steel','mekanism:ingot_steel','immersiveengineering:storage_steel')
    metalCraft('compositesteel','kubejs:compositesteel_nugget','kubejs:compositesteel_ingot','kubejs:compositesteel_block')
    metalCraft('zinc','create:zinc_nugget','create:zinc_ingot','create:zinc_block')
    metalCraft('terrasteel','botania:terrasteel_nugget','botania:terrasteel_ingot','botania:terrasteel_block')
    metalCraft('brass','create:brass_nugget','create:brass_ingot','create:brass_block')
    metalCraft('manasteel','botania:manasteel_nugget','botania:manasteel_ingot','botania:manasteel_block')
    metalCraft('aluminum','immersiveengineering:nugget_aluminum','immersiveengineering:ingot_aluminum','immersiveengineering:storage_aluminum')
    metalCraft('nickel','thermal:nickel_nugget','thermal:nickel_ingot','thermal:nickel_block')
    metalCraft('constantan','thermal:constantan_nugget','thermal:constantan_ingot','thermal:constantan_block')
    metalCraft('invar','thermal:invar_nugget','thermal:invar_ingot','thermal:invar_block')
    metalCraft('lumium','thermal:lumium_nugget','thermal:lumium_ingot','thermal:lumium_block')
    metalCraft('signalum','thermal:signalum_nugget','thermal:signalum_ingot','thermal:signalum_block')
    metalCraft('enderium','thermal:enderium_nugget','thermal:enderium_ingot','thermal:enderium_block')
    metalCraft('electrum','thermal:electrum_nugget','thermal:electrum_ingot','thermal:electrum_block')
    metalCraft('bronze','thermal:bronze_nugget','thermal:bronze_ingot','thermal:bronze_block')
    metalCraft('uranium','mekanism:nugget_uranium','mekanism:ingot_uranium','mekanism:block_uranium')
    metalCraft('silver','thermal:silver_nugget','thermal:silver_ingot','thermal:silver_block')
    metalCraft('lead','mekanism:nugget_lead','mekanism:ingot_lead','mekanism:block_lead')
    metalCraft('osmium','mekanism:nugget_osmium','mekanism:ingot_osmium','mekanism:block_osmium')
    metalCraft('refined_obsidian','mekanism:nugget_refined_obsidian','mekanism:ingot_refined_obsidian','mekanism:block_refined_obsidian')
    metalCraft('refined_glowstone','mekanism:nugget_refined_glowstone','mekanism:ingot_refined_glowstone','mekanism:block_refined_glowstone')



    //模组间金属相互合成
    /*
        //钢
        sw(['immersiveengineering:nugget_steel','mekanism:nugget_steel'])
        sw(['immersiveengineering:ingot_steel','mekanism:ingot_steel'])
        sw(['immersiveengineering:storage_steel','mekanism:block_steel'])
        */
    one('mekanism:nugget_steel',['immersiveengineering:nugget_steel'])
    one('mekanism:ingot_steel',['immersiveengineering:ingot_steel'])
    one('immersiveengineering:storage_steel',['mekanism:block_steel'])

    /*
        //铅
        sw(['thermal:lead_nugget','mekanism:nugget_lead','immersiveengineering:nugget_lead'])
        sw(['thermal:lead_ingot','mekanism:ingot_lead','immersiveengineering:ingot_lead'])
        sw(['thermal:lead_block','mekanism:block_lead','immersiveengineering:storage_lead'])
        */
    one('mekanism:nugget_lead',['thermal:lead_nugget','immersiveengineering:nugget_lead'])
    one('mekanism:ingot_lead',['thermal:lead_ingot','immersiveengineering:ingot_lead'])
    one('mekanism:block_lead',['thermal:lead_block','immersiveengineering:storage_lead'])

    /*
        //锡
        sw(['thermal:tin_nugget','mekanism:nugget_tin'])
        sw(['thermal:tin_ingot','mekanism:ingot_tin'])
        sw(['thermal:tin_block','mekanism:block_tin'])
        */
    one('thermal:tin_nugget',['mekanism:nugget_tin'])
    one('thermal:tin_ingot',['mekanism:ingot_tin'])
    one('thermal:tin_block',['mekanism:block_tin'])

    /*
        //银
        sw(['thermal:silver_nugget','immersiveengineering:nugget_silver'])
        sw(['thermal:silver_ingot','immersiveengineering:ingot_silver'])
        sw(['thermal:silver_block','immersiveengineering:storage_silver'])
        */
    one('thermal:silver_nugget',['immersiveengineering:nugget_silver'])
    one('thermal:silver_ingot',['immersiveengineering:ingot_silver'])
    one('thermal:silver_block',['immersiveengineering:storage_silver'])
    /*
        //镍
        sw(['thermal:nickel_nugget','immersiveengineering:nugget_nickel'])
        sw(['thermal:nickel_ingot','immersiveengineering:ingot_nickel'])
        sw(['thermal:nickel_block','immersiveengineering:storage_nickel'])
        */
    one('thermal:nickel_nugget',['immersiveengineering:nugget_nickel'])
    one('thermal:nickel_ingot',['immersiveengineering:ingot_nickel'])
    one('thermal:nickel_block',['immersiveengineering:storage_nickel'])
    /*
        //青铜
        sw(['thermal:bronze_nugget','mekanism:nugget_bronze'])
        sw(['thermal:bronze_ingot','mekanism:ingot_bronze'])
        sw(['thermal:bronze_block','mekanism:block_bronze'])
        */
    one('thermal:bronze_nugget',['mekanism:nugget_bronze'])
    one('thermal:bronze_ingot',['mekanism:ingot_bronze'])
    one('thermal:bronze_block',['mekanism:block_bronze'])
    /*
        //琥珀金
        sw(['thermal:electrum_nugget','immersiveengineering:nugget_electrum','createaddition:electrum_nugget'])
        sw(['thermal:electrum_ingot','immersiveengineering:ingot_electrum','createaddition:electrum_ingot'])
        sw(['thermal:electrum_block','immersiveengineering:storage_electrum'])
        */
    one('thermal:electrum_nugget',['immersiveengineering:nugget_electrum','createaddition:electrum_nugget'])
    one('thermal:electrum_ingot',['immersiveengineering:ingot_electrum','createaddition:electrum_ingot'])
    one('thermal:electrum_block',['immersiveengineering:storage_electrum'])
    /*
        //康铜
        sw(['thermal:constantan_nugget','immersiveengineering:nugget_constantan'])
        sw(['thermal:constantan_ingot','immersiveengineering:ingot_constantan'])
        sw(['thermal:constantan_block','immersiveengineering:storage_constantan'])
        */
    one('thermal:constantan_nugget',['immersiveengineering:nugget_constantan'])
    one('thermal:constantan_ingot',['immersiveengineering:ingot_constantan'])
    one('thermal:constantan_block',['immersiveengineering:storage_constantan'])
    /*
        //铀
        sw(['mekanism:nugget_uranium','immersiveengineering:nugget_uranium'])
        sw(['mekanism:ingot_uranium','immersiveengineering:ingot_uranium',])
        sw(['mekanism:block_uranium','immersiveengineering:storage_uranium'])
        */
    one('mekanism:nugget_uranium',['immersiveengineering:nugget_uranium'])
    one('mekanism:ingot_uranium',['immersiveengineering:ingot_uranium',])
    one('mekanism:block_uranium',['immersiveengineering:storage_uranium'])



        
    function metalCraft(metalType, nugget, ingot, block){
        let anvilCauldron = (input, output) =>(
            event.custom({
                type:"lychee:block_crushing",
                item_in: [
                    {item:input},{item:input},{item:input},
                    {item:input},{item:input},{item:input},
                    {item:input},{item:input},{item:input}
                ],
                contextual: {
                    type: "location",
                    offsetY: -1,
                    predicate: {
                        block: {
                            blocks: [ "cauldron" ]
                        }
                    }
                },
                post:[
                    {
                        type:"drop_item",
                        item:output
                    }
                ]
            })
        )
        anvilCauldron(nugget, ingot).id('metal:block_crushing/cauldron/'+ metalType + '_ingot')
        anvilCauldron(ingot, block).id('metal:block_crushing/cauldron/'+ metalType + '_block')

        let anvilTrapdoor = (input, output) =>(
            event.custom({
                type:"lychee:block_crushing",
                item_in: [{item:input}],
                contextual: {
                    type: "location",
                    offsetY: -1,
                    predicate: {
                        block: {
                            blocks: [ "iron_trapdoor" ]
                        }
                    }
                },
                post:[
                    {
                        type:"drop_item",
                        item:output,
                        count:9
                    }
                ]
            })
        )
        anvilTrapdoor(ingot, nugget).id('metal:block_crushing/iron_trapdoor/' + metalType + '_nugget')
        anvilTrapdoor(block, ingot).id('metal:block_crushing/iron_trapdoor/' + metalType + '_ingot')

        event.recipes.create.compacting([ingot],['9x ' + nugget]).id('metal:compacting/'+ metalType + '_ingot')
        event.recipes.create.compacting([block],['9x ' + ingot]).id('metal:compacting/'+ metalType + '_block')

        event.recipes.create.mechanical_crafting(ingot,[
            'aaa',
            'aaa',
            'aaa'
        ],{
            a:nugget
        }).id('metal:mechanical_crafting/compress/'+ metalType + '_ingot')
        event.recipes.create.mechanical_crafting(block,[
            'aaa',
            'aaa',
            'aaa'
        ],{
            a:ingot
        }).id('metal:mechanical_crafting/compress/'+ metalType + '_block')

        event.recipes.create.mechanical_crafting('9x ' + nugget,[
            'a'
        ],{
            a:ingot
        }).id('metal:mechanical_crafting/disassemble/' + metalType + '_nugget')
        event.recipes.create.mechanical_crafting('9x ' + ingot,[
            'a'
        ],{
            a:block
        }).id('metal:mechanical_crafting/disassemble/' + metalType + '_ingot')

        event.recipes.immersiveengineering.metal_press(ingot,'9x '+nugget,'immersiveengineering:mold_packing_9',500).id('metal:metal_press/compress/'+metalType+'_ingot')
        event.recipes.immersiveengineering.metal_press(block,'9x '+ingot,'immersiveengineering:mold_packing_9',500).id('metal:metal_press/compress/'+metalType+'_block')

    }
/*
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
*/
    function one(output, array){
        let n = array.length
        for(let i = 0; i < n; i++){
            let input = array[i]
            let inputId = input.replace(/:/g, '_')
            let outputId = output.split(':')[0]
            event.shapeless(output, [input]).id(`kubejs:${outputId}_from_${inputId}`)
        }
    }
    
})