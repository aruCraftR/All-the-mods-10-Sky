ServerEvents.recipes(allthemods => {

    // 远古知识碎片
    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 20000000,
            ingredients: [
                Ingredient.of('minecraft:netherite_scrap').toJson(),
                Ingredient.of('minecraft:echo_shard').toJson(),
                Ingredient.of('minecraft:netherite_scrap').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:ancient_knowledge_fragment'
            }
        }
    ).id('arucraftr:energizing/ancient_knowledge_fragment')

    // 颓残之书
    allthemods.custom(
        {
            type: 'ars_nouveau:enchanting_apparatus',
            keepNbtOfReagent: false,
            pedestalItems: [
                Ingredient.of('minecraft:netherite_block').toJson(),
                Ingredient.of('ars_nouveau:manipulation_essence').toJson(),
                Ingredient.of('minecraft:netherite_block').toJson(),
                Ingredient.of('ars_nouveau:earth_essence').toJson(),
                Ingredient.of('minecraft:netherite_block').toJson(),
                Ingredient.of('ars_nouveau:air_essence').toJson(),
                Ingredient.of('minecraft:netherite_block').toJson(),
                Ingredient.of('ars_nouveau:conjuration_essence').toJson()
            ],
            reagent: [
                Ingredient.of('irons_spellbooks:diamond_spell_book').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:ruined_book'
            },
            sourceCost: 2000
        }
    ).id('arucraftr:enchanting_apparatus/diamond_spell_book')

    // 秘银矿石
    allthemods.custom(
        {
            type: 'ars_nouveau:enchanting_apparatus',
            keepNbtOfReagent: false,
            pedestalItems: [
                Ingredient.of('alltheores:silver_ingot').toJson(),
                Ingredient.of('irons_spellbooks:arcane_ingot').toJson(),
                Ingredient.of('alltheores:silver_ingot').toJson(),
                Ingredient.of('irons_spellbooks:arcane_ingot').toJson(),
                Ingredient.of('alltheores:silver_ingot').toJson(),
                Ingredient.of('powah:crystal_niotic').toJson(),
                Ingredient.of('alltheores:silver_ingot').toJson(),
                Ingredient.of('powah:crystal_niotic').toJson()
            ],
            reagent: [
                Ingredient.of('minecraft:stone').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:mithril_ore'
            },
            sourceCost: 500
        }
    ).id('arucraftr:enchanting_apparatus/mithril_ore')

    // 炽魂符文
    allthemods.custom(
        {
            type: 'ars_nouveau:enchanting_apparatus',
            keepNbtOfReagent: false,
            pedestalItems: [
                Ingredient.of('mysticalagriculture:awakened_supremium_block').toJson(),
                Ingredient.of('allthemodium:unobtainium_vibranium_alloy_block').toJson(),
                Ingredient.of('mysticalagriculture:awakened_supremium_block').toJson(),
                Ingredient.of('allthemodium:unobtainium_vibranium_alloy_block').toJson(),
                Ingredient.of('mysticalagriculture:awakened_supremium_block').toJson(),
                Ingredient.of('allthemodium:unobtainium_vibranium_alloy_block').toJson(),
                Ingredient.of('mysticalagriculture:awakened_supremium_block').toJson(),
                Ingredient.of('allthemodium:unobtainium_vibranium_alloy_block').toJson()
            ],
            reagent: [
                Ingredient.of('chipped:reinforced_netherite_block').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:cinderous_soul_rune'
            },
            sourceCost: 10000
        }
    ).id('arucraftr:enchanting_apparatus/cinderous_soul_rune')

    // 炽焰术士刷怪蛋
    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 20000000,
            ingredients: [
                Ingredient.of('powah:blazing_crystal_block').toJson(),
                Ingredient.of('minecraft:blaze_spawn_egg').toJson(),
                Ingredient.of('powah:blazing_crystal_block').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:pyromancer_spawn_egg'
            }
        }
    ).id('arucraftr:energizing/pyromancer_spawn_egg')

    // 亡灵术士刷怪蛋
    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 20000000,
            ingredients: [
                Ingredient.of('minecraft:skeleton_skull').toJson(),
                Ingredient.of('minecraft:zombie_spawn_egg').toJson(),
                Ingredient.of('minecraft:wither_skeleton_skull').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:necromancer_spawn_egg'
            }
        }
    ).id('arucraftr:energizing/necromancer_spawn_egg')

    // 冰霜术士刷怪蛋
    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 20000000,
            ingredients: [
                Ingredient.of('powah:dry_ice').toJson(),
                Ingredient.of('minecraft:skeleton_spawn_egg').toJson(),
                Ingredient.of('powah:dry_ice').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:cryomancer_spawn_egg'
            }
        }
    ).id('arucraftr:energizing/cryomancer_spawn_egg')

    // 远古骑士刷怪蛋
    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 20000000,
            ingredients: [
                Ingredient.of('minecraft:wither_skeleton_spawn_egg').toJson(),
                Ingredient.of('minecraft:netherite_helmet').toJson(),
                Ingredient.of('minecraft:netherite_chestplate').toJson(),
                Ingredient.of('minecraft:netherite_leggings').toJson(),
                Ingredient.of('minecraft:netherite_boots').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:keeper_spawn_egg'
            }
        }
    ).id('arucraftr:energizing/keeper_spawn_egg')

    // 远古骑士刷怪蛋
    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 20000000,
            ingredients: [
                Ingredient.of('minecraft:wither_skeleton_spawn_egg').toJson(),
                Ingredient.of('minecraft:netherite_helmet').toJson(),
                Ingredient.of('minecraft:netherite_chestplate').toJson(),
                Ingredient.of('minecraft:netherite_leggings').toJson(),
                Ingredient.of('minecraft:netherite_boots').toJson(),
                Ingredient.of('hostilenetworks:nether_prediction').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:keeper_spawn_egg'
            }
        }
    ).id('arucraftr:energizing/keeper_spawn_egg')

    // 死者之王刷怪蛋
    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 20000000,
            ingredients: [
                Ingredient.of('minecraft:wither_skeleton_spawn_egg').toJson(),
                Ingredient.of('minecraft:totem_of_undying').toJson(),
                Ingredient.of('hostilenetworks:overworld_prediction').toJson(),
                Ingredient.of('allthecompressed:nether_star_block_1x').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:dead_king_corpse_spawn_egg'
            }
        }
    ).id('arucraftr:energizing/dead_king_corpse_spawn_egg')

    // 药剂师刷怪蛋
    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 20000000,
            ingredients: [
                Ingredient.of('reliquary:witch_hat').toJson(),
                Ingredient.of('minecraft:witch_spawn_egg').toJson(),
                Ingredient.of('reliquary:witch_hat').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:apothecarist_spawn_egg'
            }
        }
    ).id('arucraftr:energizing/apothecarist_spawn_egg')

    // 牧师刷怪蛋
    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 20000000,
            ingredients: [
                Ingredient.of('bhc:soul_heart_crystal').toJson(),
                Ingredient.of('minecraft:skeleton_spawn_egg').toJson(),
                Ingredient.of('productivemetalworks:meat_block').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:priest_spawn_egg'
            }
        }
    ).id('arucraftr:energizing/priest_spawn_egg')

    // 高位唤魔者刷怪蛋
    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 20000000,
            ingredients: [
                Ingredient.of('ars_nouveau:conjuration_essence').toJson(),
                Ingredient.of('minecraft:witch_spawn_egg').toJson(),
                Ingredient.of('reliquary:phoenix_down').toJson()
            ],
            result: {
                count: 1,
                id: 'irons_spellbooks:archevoker_spawn_egg'
            }
        }
    ).id('arucraftr:energizing/archevoker_spawn_egg')
})
