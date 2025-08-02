execute unless entity @e[distance=...5,tag=wither,type=marker,limit=1] run summon marker ~ ~ ~ {Tags:["wither"]}
execute as @e[tag=wither,type=marker] at @s run function kubejs:wither/blockface