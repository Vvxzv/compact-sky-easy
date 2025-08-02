ServerEvents.tick(event=>{
    //随机数
    function getRandomElement(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    //深层矿机
    function deepOreGen(){
        const {server} = event
        server.runCommandSilent(`${marker} at @s unless block ~ ~ ~ kubejs:deepore_gen run kill @s`)
        var setblock = ''
        var randomNum = 0
        const marker = 'execute as @e[type=minecraft:marker,tag=deepore]'
        if(server.runCommandSilent(`execute if entity @e[type=minecraft:marker,tag=deepore]`)){
            randomNum = Math.random()
            if(randomNum > 0.15){
                setblock = getRandomElement([
                    'thermal:deepslate_silver_ore',
                    'thermal:deepslate_tin_ore',
                    'mekanism:deepslate_lead_ore',
                    'mekanism:deepslate_uranium_ore'
                ])
            }
            else{
                setblock = getRandomElement([
                    'thermal:deepslate_cinnabar_ore',
                    'thermal:deepslate_niter_ore',
                    'thermal:deepslate_sulfur_ore',
                    'thermal:deepslate_sulfur_ore',
                    'thermal:deepslate_apatite_ore',
                    'thermal:deepslate_apatite_ore'
                ])
            }
            server.runCommandSilent(`${marker} at @s if block ~ ~1 ~ deepslate run setblock ~ ~1 ~ ${setblock}`)
            server.runCommandSilent(`${marker} run kill @s`)
        }
    }
    deepOreGen()

    //磁铁
    function magnet(){
        const {server} = event
        const marker = 'execute as @e[tag=magnet,type=marker]'
        const anvilReset = 'function kubejs:magnet/reset'
        server.runCommandSilent(`${marker} at @s unless block ~ ~ ~ kubejs:machine_magnet_block run ${anvilReset}`)
        server.runCommandSilent(`${marker} at @s run function kubejs:magnet/main`)
    }
    magnet()
})