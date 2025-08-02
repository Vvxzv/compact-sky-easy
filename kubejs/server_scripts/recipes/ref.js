ServerEvents.recipes(event=>{
    //1k存储元件
    event.replaceInput({id:'refinedstorage:1k_storage_part'},'refinedstorage:quartz_enriched_iron','refinedstorage:basic_processor')

    //16k存储元件
    event.replaceInput({id:'refinedstorage:16k_storage_part'},'refinedstorage:improved_processor','refinedstorage:basic_processor')

    //64k存储元件
    event.replaceInput({id:'refinedstorage:64k_storage_part'},'refinedstorage:advanced_processor','refinedstorage:basic_processor')

    //64k流体元件
    event.replaceInput({id:'refinedstorage:64k_fluid_storage_part'},'refinedstorage:quartz_enriched_iron','refinedstorage:basic_processor')

    //1024k流体元件
    event.replaceInput({id:'refinedstorage:1024k_fluid_storage_part'},'refinedstorage:improved_processor','refinedstorage:basic_processor')

    //2048k流体元件
    event.replaceInput({id:'refinedstorage:2048k_fluid_storage_part'},'refinedstorage:advanced_processor','refinedstorage:basic_processor')

    //网络发送、接收器
    event.replaceInput({id:'refinedstorage:network_receiver'},'netherite_ingot','ae2:quantum_entangled_singularity')
    event.replaceInput({id:'refinedstorage:network_transmitter'},'netherite_ingot','ae2:quantum_entangled_singularity')

    //网络卡
    event.shapeless('refinedstorage:network_card',['ae2wtlib:quantum_bridge_card']).id('refinedstorage:network_card')
})