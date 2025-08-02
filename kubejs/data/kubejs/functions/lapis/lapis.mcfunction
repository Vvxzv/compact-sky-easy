execute unless entity @e[distance=...5,tag=lapis,type=marker,limit=1] run summon marker ~ ~ ~ {Tags:["lapis"]}
execute as @e[tag=lapis,type=marker] at @s run function kubejs:lapis/blockface