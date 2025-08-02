ServerEvents.recipes(event=>{
    const id_pre = 'special_sequenced_assembly:'
    const {mixing, milling, emptying, crushing, deploying, filling, sequenced_assembly, mechanical_crafting, pressing}=event.recipes.create
    const {elven_trade, terra_plate}=event.recipes.botania
    const {enriching} = event.recipes.mekanism

    function items(item,count,nbt){
        count = typeof count != "undefined"?count:false
        nbt = typeof nbt != "undefined"?nbt:false

        let count_form_key = {}
        let nbt_form_key = {}
        let nbt_type_form_key = {}

        if(count != false){
            count_form_key = "count"
        }

        if(nbt != false){
            nbt_form_key = "nbt"
            nbt_type_form_key = "type"
        }

        let items = {
            "item":item
        }

        Object.defineProperty(items,count_form_key,{value:count,writable:true,enumerable:true,configurable:true})
        Object.defineProperty(items,nbt_form_key,{value:nbt,writable:true,enumerable:true,configurable:true})
        Object.defineProperty(items,nbt_type_form_key,{value:"forge:nbt",writable:true,enumerable:true,configurable:true})

        return items
    }

    function other_sequenced_assembly(total_steps,current_steps,recipe_id,type,input,output,extra_output,heat,time,mana){

        extra_output = typeof extra_output != "undefined"?extra_output:false
        heat = typeof heat != "undefined"?heat:false
        time = typeof time != "undefined"?time:false
        mana = typeof mana != "undefined"?mana:false

        let id = `${recipe_id}/step${current_steps}`

        let others = {}

        if(type == "mixing"){
            if(heat == "heated"){
                others = mixing(Item.of(output,`{SequencedAssembly:{Progress:${(current_steps+1)/total_steps}f,Step:${current_steps+1},id:"${recipe_id}"}}`).weakNBT(),[Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()]).heated().id(id)
            }
            else if(heat == "superheated"){
                others = mixing(Item.of(output,`{SequencedAssembly:{Progress:${(current_steps+1)/total_steps}f,Step:${current_steps+1},id:"${recipe_id}"}}`).weakNBT(),[Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()]).superheated().id(id)
            }
            else if(heat == false){
                others = mixing(Item.of(output,`{SequencedAssembly:{Progress:${(current_steps+1)/total_steps}f,Step:${current_steps+1},id:"${recipe_id}"}}`).weakNBT(),[Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()],time).id(id)
            }
        }
        else if(type == "milling"){
            others = milling(Item.of(output,`{SequencedAssembly:{Progress:${(current_steps+1)/total_steps}f,Step:${current_steps+1},id:"${recipe_id}"}}`).weakNBT(),[Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()]).id(id)
        }
        else if(type == "emptying"){
            others = emptying([extra_output,Item.of(input,`{SequencedAssembly:{Progress:${(current_steps+1)/total_steps}f,Step:${current_steps+1},id:"${recipe_id}"}}`).weakNBT()],Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()).id(id)
        }
        else if(type == "crushing"){
            others = crushing([Item.of(output,`{SequencedAssembly:{Progress:${(current_steps+1)/total_steps}f,Step:${current_steps+1},id:"${recipe_id}"}}`).weakNBT()],Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()).id(id)
        }
        else if(type == "enriching"){
            others = enriching(Item.of(output,`{SequencedAssembly:{Progress:${(current_steps+1)/total_steps}f,Step:${current_steps+1},id:"${recipe_id}"}}`).weakNBT(),Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()).id(id)
        }
        else if(type == "elven_trade"){
            others = elven_trade(Item.of(output,`{SequencedAssembly:{Progress:${(current_steps+1)/total_steps}f,Step:${current_steps+1},id:"${recipe_id}"}}`).weakNBT(),Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()).id(id)
        }
        else if(type == "mechanical_crafting"){
            others = mechanical_crafting(Item.of(output,`{SequencedAssembly:{Progress:${(current_steps+1)/total_steps}f,Step:${current_steps+1},id:"${recipe_id}"}}`).weakNBT(),Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()).id(id)
        }
        else if(type == "terra_plate3"){
            others = terra_plate(Item.of(output,`{SequencedAssembly:{Progress:${(current_steps+1)/total_steps}f,Step:${current_steps+1},id:"${recipe_id}"}}`).weakNBT(),[
                Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT(),
                Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT(),
                Item.of(input,`{SequencedAssembly:{Progress:${current_steps/total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()
            ],mana).id(id)
        }

        return others
    }

    //铜矿兰
    sequenced_assembly(
        ['kubejs:copper_orechid'],
        'botania:orechid',
        [
            deploying(['kubejs:incomplete_copper_orechid'],['kubejs:incomplete_copper_orechid','minecraft:copper_block']),
            deploying(['kubejs:incomplete_copper_orechid'],['kubejs:incomplete_copper_orechid',items('botania:alfheim_portal',1,`{Enchantments:[{id:vanishing_curse,lvl:1s}],display:{Name:'{\"translate\":\"sequenced_assembly.botania.elven_trade\"}'}}`)]),
            filling(['kubejs:incomplete_copper_orechid'],['kubejs:incomplete_copper_orechid',Fluid.of('lava',1000)]),
        ],
        'kubejs:incomplete_copper_orechid',5
    ).id(`${id_pre}copper_orechid`)

    other_sequenced_assembly(15,1,`${id_pre}copper_orechid`,"elven_trade",'kubejs:incomplete_copper_orechid','kubejs:incomplete_copper_orechid')
    other_sequenced_assembly(15,4,`${id_pre}copper_orechid`,"elven_trade",'kubejs:incomplete_copper_orechid','kubejs:incomplete_copper_orechid')
    other_sequenced_assembly(15,7,`${id_pre}copper_orechid`,"elven_trade",'kubejs:incomplete_copper_orechid','kubejs:incomplete_copper_orechid')
    other_sequenced_assembly(15,10,`${id_pre}copper_orechid`,"elven_trade",'kubejs:incomplete_copper_orechid','kubejs:incomplete_copper_orechid')
    other_sequenced_assembly(15,13,`${id_pre}copper_orechid`,"elven_trade",'kubejs:incomplete_copper_orechid','kubejs:incomplete_copper_orechid')

    //精密构件
    sequenced_assembly(
        ['create:precision_mechanism'],
        'create:incomplete_precision_mechanism',
        [
            deploying(['create:incomplete_precision_mechanism'],['create:incomplete_precision_mechanism','create:electron_tube']),
            deploying(['create:incomplete_precision_mechanism'],['create:incomplete_precision_mechanism',items('create:mechanical_crafter',1,`{Enchantments:[{id:vanishing_curse,lvl:1s}],display:{Name:'{\"translate\":\"sequenced_assembly.create.mechanical_crafting.1x1\"}'}}`)]),
            deploying(['create:incomplete_precision_mechanism'],['create:incomplete_precision_mechanism','create:wrench']).keepHeldItem()
        ],
        'create:incomplete_precision_mechanism',1
    ).id(`${id_pre}precision_mechanism`)

    other_sequenced_assembly(3,1,`${id_pre}precision_mechanism`,'mechanical_crafting','create:incomplete_precision_mechanism','create:incomplete_precision_mechanism')

    //粉碎轮粉碎粉碎轮
    sequenced_assembly(
        ['64x create:andesite_alloy'],
        'create:crushing_wheel',
        [
            pressing(['create:crushing_wheel'],['create:crushing_wheel']),

            deploying(['create:crushing_wheel'],['create:crushing_wheel',items('create:crushing_wheel',1,`{Enchantments:[{id:vanishing_curse,lvl:1s}],display:{Name:'{\"translate\":\"sequenced_assembly.create.crushing\"}'}}`)]),

            pressing(['create:crushing_wheel'],['create:crushing_wheel'])
        ],
        'create:crushing_wheel',1
    ).id(`${id_pre}andesite_alloy`)

    other_sequenced_assembly(3,1,`${id_pre}andesite_alloy`,'crushing','create:crushing_wheel','create:crushing_wheel')

    //运算处理器
    sequenced_assembly(
        ['refinedstorage:improved_processor'],
        'minecraft:gold_ingot',
        [
            deploying(['refinedstorage:raw_basic_processor'],[
                'refinedstorage:raw_basic_processor',
                'refinedstorage:basic_processor'
            ]),
            deploying(['create:incomplete_precision_mechanism'],['create:incomplete_precision_mechanism',items('create:mechanical_crafter',2,`{Enchantments:[{id:vanishing_curse,lvl:1s}],display:{Name:'{\"translate\":\"sequenced_assembly.create.mechanical_crafting.1x2\"}'}}`)]),
        ],
        'refinedstorage:raw_improved_processor',1
    ).id(`${id_pre}improved_processor`)

    mechanical_crafting('refinedstorage:improved_processor',[
        'aa'
    ],{
        a:Item.of('refinedstorage:raw_improved_processor', '{SequencedAssembly:{Progress:0.5f,Step:1,id:"special_sequenced_assembly:improved_processor"}}').weakNBT()
    }).id(`${id_pre}improved_processor/step2`)

    //紫颂果
    sequenced_assembly(
        ['minecraft:chorus_fruit'],
        'minecraft:popped_chorus_fruit',
        [
            deploying(['minecraft:popped_chorus_fruit'],[
                'minecraft:popped_chorus_fruit',
                'cyclic:apple_lofty_stature'
            ]),
            deploying(['minecraft:popped_chorus_fruit'],[
                'minecraft:popped_chorus_fruit',
                items('botania:terra_plate', 1, `{Enchantments:[{id:vanishing_curse,lvl:1s}],display:{Name:'{\"translate\":\"sequenced_assembly.botania.terra_plate3.mana100000\"}'}}`)
            ]),
            filling(['minecraft:popped_chorus_fruit'],[
                'minecraft:popped_chorus_fruit',
                Fluid.of('kubejs:chorus', 1000)
            ])
        ],'minecraft:popped_chorus_fruit', 1
    ).id(`${id_pre}chorus_fruit`)

    other_sequenced_assembly(3, 1, `${id_pre}chorus_fruit`, "terra_plate3", 'minecraft:popped_chorus_fruit','minecraft:popped_chorus_fruit',false,false,false,100000)
})