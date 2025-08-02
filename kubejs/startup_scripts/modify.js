BlockEvents.modification(event => {
    event.modify('compactcrafting:field_projector', block => {
        block.destroySpeed = 3
        block.requiresTool = false
    })
    event.modify('minecraft:obsidian', block => {
        block.destroySpeed = 5
    })
})

ItemEvents.modification(event => {
    event.modify('create:incomplete_precision_mechanism', item =>{
        item.maxStackSize = 64
    })
    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })
    event.modify('create_new_age:incomplete_enchanted_golden_apple', item => {
        item.maxStackSize = 64
    })
})
