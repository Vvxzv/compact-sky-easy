let hammer = (id, out_id, min, max) =>({
	type: "minecraft:block",
	pools: [
	    {
	        rolls: 1,
	        entries: [
	            {
	                type: "minecraft:alternatives",
	                children: [
	                    {
	                        type: "minecraft:item",
	                        name: out_id,
	                        conditions: [
	                            {
	                                condition: "minecraft:match_tool",
	                                predicate: {
	                                    tag:"exnihilosequentia:hammer",
	                                }
	                            }
	                        ],
							functions: [
							  {
							    function: "minecraft:set_count",
							    count: {
									min: min,
									max: max,
									type: "minecraft:uniform"
							    }
							  }
							]
	                    },
						{
							type: "minecraft:item",
							name: id,
							functions: [
							    {
							        function: "minecraft:explosion_decay"
							    }
							]
						}
	                ]
	            }
	        ]
	    }
	]
})

let drop = (i, o, countmin, countmax) =>({
	type: "minecraft:block",
	pools: [
	    {
	        rolls: 1,
	        entries: [
	            {
	                type: "minecraft:alternatives",
	                children: [
	                    {
	                        type: "minecraft:item",
	                        name: o,
							functions: [
							  {
							    function: "minecraft:set_count",
							    count: {
									min: countmin,
									max: countmax,
									type: "minecraft:uniform"
							    }
							  }
							]
	                    },
						{
							type: "minecraft:item",
							name: i,
							functions: [
							    {
							        function: "minecraft:explosion_decay"
							    }
							]
						}
	                ]
	            }
	        ]
	    }
	]
})

let blacker_lotus_block = {
	type: "minecraft:block",
	pools: [
		{
			rolls: 1,
			entries: [
				{
					type: "minecraft:alternatives",
					children: [
						{
							type: "minecraft:item",
							name: 'botania:blacker_lotus',
							conditions: [
								{
									condition: "minecraft:match_tool",
									predicate: {
										items:[
											"botania:manasteel_hoe"
										]
									}
								}
							],
							functions: [
								{
									function: "minecraft:set_count",
									count: {
										min: 1,
										max: 2,
										type: "minecraft:uniform"
									}
								}
							]
						},
						{
							type: "minecraft:item",
							name: 'botania:blacker_lotus',
							conditions: [
								{
									condition: "minecraft:match_tool",
									predicate: {
										items:[
											"botania:elementium_hoe"
										]
									}
								}
							],
							functions: [
								{
									function: "minecraft:set_count",
									count: {
										min: 2,
										max: 4,
										type: "minecraft:uniform"
									}
								}
							]
						},
						{
							type: "minecraft:item",
							name: 'kubejs:blacker_lotus_block',
							functions: [
								{
									function: "minecraft:explosion_decay"
								}
							]
						}
					]
				}
			]
		}
	]
}

ServerEvents.blockLootTables(event => {
    event.addJson('kubejs:dcompressed_dirt',hammer('kubejs:dcompressed_dirt','kubejs:compressed_dirt',6,10))
	event.addJson('kubejs:anvil',drop('kubejs:anvil','anvil',1,1))
	event.addJson('kubejs:chipped_anvil',drop('kubejs:chipped_anvil','chipped_anvil',1,1))
	event.addJson('kubejs:damaged_anvil',drop('kubejs:damaged_anvil','damaged_anvil',1,1))
	event.addJson('dark_oak_leaves',drop('dark_oak_leaves','dark_oak_leaves',0,1))
	event.addJson('clay',drop('clay','clay_ball',1,4))
	event.addJson('kubejs:blacker_lotus_block',blacker_lotus_block)
	event.addJson('kubejs:lapis_crystallize',drop('kubejs:lapis_crystallize','minecraft:lapis_lazuli',1,1))

	let self = [
		'thermal:deepslate_apatite_ore',
		'thermal:deepslate_silver_ore',
		'thermal:deepslate_tin_ore',
		'thermal:deepslate_sulfur_ore',
		'thermal:deepslate_niter_ore',
		'thermal:deepslate_cinnabar_ore',
		'create:deepslate_zinc_ore',
		'create:zinc_ore',
		'mekanism:fluorite_ore',
		'minecraft:iron_ore',
		'minecraft:deepslate_iron_ore',
		'botania:cell_block',
		'mekanism:deepslate_uranium_ore',
		'mekanism:deepslate_lead_ore',
		'minecraft:copper_ore',
		'minecraft:deepslate_copper_ore',
	]
	self.forEach(blockDropItem => {
		event.addJson(blockDropItem, drop(blockDropItem, blockDropItem, 1, 1))
	})
})