// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips((allthemods) => {
  //AllTheModium
  allthemods.add("allthemodium:teleport_pad", [Text.of("采矿维度已禁用")])
  //Ars Controle
  allthemods.add("ars_controle:scryers_linkage", [
    Text.of(""),
    Text.of("§7伪搜索别名:"),
    Text.of("§7- 纠缠"),
    Text.of("§7- 纠缠块")
  ])

  //Forbidden Arcanus
  allthemods.add("forbidden_arcanus:hephaestus_forge_tier_1", [
    Text.of("手持§l蒙达比特尘§r§c对§c§l锻造台§r§c按下§c§lShift+右键"),
    Text.of("§c█ = 镶金雕纹磨制暗石(顶部放置锻造台)"),
    Text.of("§7█ = 磨制暗石"),
    Text.of("§5█§7 = 镶金雕纹磨制暗石"),
    Text.of("§6█§7 = 雕纹奥术磨制暗石"),
    Text.of("§0███§7███§0███"),
    Text.of("§0█§7███§5█§7███§0█"),
    Text.of("§0█§7█§5█§7███§5█§7█§0█"),
    Text.of("§7████§6█§7████"),
    Text.of("§7█§5█§7█§6█§c█§6█§7█§5█§7█"),
    Text.of("§7████§6█§7████"),
    Text.of("§0█§7█§5█§7███§5█§7█§0█"),
    Text.of("§0█§7███§5█§7███§0█"),
    Text.of("§0███§7███§0███")
  ])
  allthemods.add("forbidden_arcanus:clibano_core", [
    Text.of("手持§c§l蒙达比特尘§r§c对§c§l克里巴诺核心§r§c按下§c§lShift+右键"),
    Text.of("§5█§7 = 磨制暗石"),
    Text.of("§7█ = 磨制暗石砖"),
    Text.of("§6█§7 = 克里巴诺核心"),
    Text.of("§7从右到左 → 从下到上"),
    Text.of("§5█§7█§5█§0█§7███§0█§5█§7█§5█"),
    Text.of("§7███§0█§7█§0█§7█§0█§7███"),
    Text.of("§5█§7█§5█§0█§7█§6█§7█§0█§5█§7█§5█")
  ])
  allthemods.add("forbidden_arcanus:growing_edelwood", [
    Text.of("§4可从流浪商人处获取"),
    Text.of("§4或对橡树树苗使用腐化之魂")
  ])
  allthemods.add("forbidden_arcanus:magnetized_darkstone_pedestal", [
    Text.of("对暗石基座使用铁磁混合物")
  ])
  allthemods.add("forbidden_arcanus:soul", [Text.of("对灵魂沙使用灵魂提取器")])
  allthemods.add("forbidden_arcanus:enchanted_soul", [Text.of("对普通灵魂使用溅射型奥瑞尔瓶")])
  allthemods.add("forbidden_arcanus:corrupt_soul", [Text.of("击杀生物时小概率生成")])
  allthemods.add("forbidden_arcanus:blood_test_tube", [
    Text.of("副手持试管后击杀生物")
  ])
  allthemods.add("forbidden_arcanus:xpetrified_orb", [
    Text.of("仅能通过黑洞获取"),
    Text.of("将暗物质与腐化尘共同投掷于地面生成黑洞"),
    Text.of("喂食足够经验值使其吐出石化宝珠")
  ])
  allthemods.add("forbidden_arcanus:dragon_scale", [Text.of("由末影龙掉落")])
  allthemods.add("forbidden_arcanus:crescent_moon", [Text.of("§c无法获取")])
  allthemods.add("forbidden_arcanus:soul_crimson_stone", [Text.of("§c使用1次后将变为猩红石")])

  //Mystical Agriculture
  allthemods.add(/mysticalagriculture:.*watering_can/, [
    Text.of("§c对伪玩家禁用"),
    Text.of("§c(包括模块化路由器、点击器等方块)")
  ])
  //Occultism
  allthemods.add("kubejs:ritual_dummy/honeycomb", [Text.of("§7等阶:弗利奥特")])
  allthemods.add("kubejs:ritual_dummy/upgrade_ritual_satchel_t1_to_t2", [
    Text.of(
      "§cWARNING: Will delete all items in the Apprentice Satchel. Consider taking out all items from the Apprentice Satchel."
    ),
    Text.of("§7等阶:阿弗里特")
  ])
  //Create
  allthemods.add("create:limestone", [Text.of("使熔岩源方块流经创造蜂蜜上方").gray()])

  allthemods.add("create:scoria", [Text.of("使熔岩源方块流经创造巧克力上方").gray()])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
