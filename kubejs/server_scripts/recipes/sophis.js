ServerEvents.recipes(event =>{
    //磁铁升级
    event.shaped('sophisticatedbackpacks:magnet_upgrade',[
        'a',
        'b',
        'c'
    ],{
        a:'thermal:item_filter_augment',
        b:'thermal:device_collector',
        c:'sophisticatedbackpacks:upgrade_base'
    }).id('sophisticatedbackpacks:magnet_upgrade')
    event.shaped('sophisticatedstorage:magnet_upgrade',[
        'a',
        'b',
        'c'
    ],{
        a:'thermal:item_filter_augment',
        b:'thermal:device_collector',
        c:'sophisticatedstorage:upgrade_base'
    }).id('sophisticatedstorage:magnet_upgrade')

    //背包
    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
          {
            type: "sophisticatedcore:item_enabled",
            itemRegistryName: "sophisticatedbackpacks:copper_backpack"
          }
        ],
        key: {
            B: {
                item: "sophisticatedbackpacks:backpack"
            },
            C: {
                item: 'botania:manasteel_ingot'
            }
        },
        pattern: [
            "CCC",
            "CBC",
            "CCC"
        ],
        result: {
            item: "sophisticatedbackpacks:copper_backpack"
        }
    }).id('sophisticatedbackpacks:copper_backpack')

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
          {
            type: "sophisticatedcore:item_enabled",
            itemRegistryName: "sophisticatedbackpacks:diamond_backpack"
          }
        ],
        key: {
            B: {
                item: "sophisticatedbackpacks:gold_backpack"
            },
            C: {
                item: 'mekanism:ingot_steel'
            }
        },
        pattern: [
            "CCC",
            "CBC",
            "CCC"
        ],
        result: {
            item: "sophisticatedbackpacks:diamond_backpack"
        }
    }).id('sophisticatedbackpacks:diamond_backpack')

    event.smithing('sophisticatedbackpacks:netherite_backpack',"sophisticatedbackpacks:diamond_backpack",'botania:terrasteel_ingot').id('sophisticatedbackpacks:netherite_backpack')

    event.replaceInput({id:'sophisticatedstorage:basic_to_iron_tier_upgrade'},'iron_ingot','botania:manasteel_ingot')

    event.replaceInput({id:'sophisticatedbackpacks:upgrade_base'},'iron_ingot','botania:manasteel_ingot')

    event.replaceInput({id:'sophisticatedstorage:upgrade_base'},'iron_ingot','botania:manasteel_ingot')
    event.replaceInput({id:'sophisticatedstorage:copper_to_iron_tier_upgrade'},'iron_ingot','botania:manasteel_ingot')


})