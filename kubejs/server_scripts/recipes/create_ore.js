ServerEvents.recipes(event=>{
    //探矿杖
    event.shaped('createoreexcavation:vein_finder',[
        ' ab',
        ' cd',
        'c  '
    ],{
        a:'create:precision_mechanism',
        b:'botania:terrasteel_ingot',
        c:'immersiveengineering:stick_treated',
        d:'botania:rune_mana'
    }).id('createoreexcavation:vein_finder')

    //灵魂
    event.custom({
        type: "createoreexcavation:extracting",
        amountMax: 2.0,
        amountMin: 1.0,
        drill: {
            tag: "createoreexcavation:drills"
        },
        name: "Soul",
        neverFinite: true,
        output: {
            amount: 100,
            fluid: "kubejs:soul"
        },
        stress: 128,
        ticks: 100,
        weight: 0
      }).id('createoreexcavation:extracting/soul')

    //下界金矿
    event.custom({
        type: "createoreexcavation:drilling",
        amountMax: 4.0,
        amountMin: 2.0,
        drill: {
            tag: "createoreexcavation:drills"
        },
        name: "Nether Gold Ore",
        output: [
        {
            item: 'minecraft:nether_gold_ore'
        }
        ],
        stress: 128,
        ticks: 200,
        weight: 0
      }).id('createoreexcavation:drilling/nether_gold_ore')

    //氟石
    event.custom({
        type: "createoreexcavation:drilling",
        amountMax: 4.0,
        amountMin: 2.0,
        drill: {
            tag: "createoreexcavation:drills"
        },
        name: "Fluorite Ore",
        output: [
        {
            item: 'mekanism:fluorite_ore'
        }
        ],
        stress: 128,
        ticks: 100,
        weight: 0
      }).id('createoreexcavation:drilling/fluorite_ore')
      
})