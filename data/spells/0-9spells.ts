export interface Spell {
  id: string;
  name: string;
  english_name: string;
  level: number;
  school: string;
  castingTime: string;
  range: string;
  components: {
    verbal?: boolean;
    somatic?: boolean;
    material?: string;
  };
  duration: string;
  description: string;
  classes: string[];
  source: string;
}

export const spells: Spell[] = [
  {
    "id": "spell.0.AcidSplash",
    "name": "酸液飞溅",
    "english_name": "Acid Splash",
    "level": 0,
    "school": "咒法 戏法",
    "classes": [
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你掷出一颗酸液球。在施法距离内指定一个你能看见的生物，或者在施法距离内指定你能看见的两个相距不超过 5 尺的生物。每个目标必须进行一次敏捷豁免，豁免失败则受到 1d6 点强酸伤害。\n你到达 5 级时，该法术的伤害增加 1d6（变为2d6）。11 级时再加 1d6（变为 3d6），17 级时再加 1d6（变为 4d6）。",
    "source": "PHB"
  },
  {
    "id": "spell.0.BladeWard",
    "name": "剑刃防护",
    "english_name": "Blade Ward",
    "level": 0,
    "school": "防护 戏法",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 轮",
    "description": "你伸手在空中勾勒出一个防护印记，以令自己在下一回合结束前对武器攻击造成的钝击、穿刺和挥砍伤害具有抗性。",
    "source": "PHB"
  },
  {
    "id": "spell.0.ChillTouch",
    "name": "冻寒之触",
    "english_name": "Chill Touch",
    "level": 0,
    "school": "死灵 戏法",
    "classes": [
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 轮",
    "description": "你在施法距离内某生物所在位置召唤出幽魂般的骨手，夹带着墓穴的刺骨冻寒攻击目标。并对该生物进行一次远程法术攻击，命中时，手掌抓住目标并令其受 1d8 点黯蚀伤害，且直至你下一回合开始前都无法恢复生命值。\n如果你的命中目标为一个不死生物，则其在你下回合结束之前对你发动的攻击检定都具有劣势。\n你到达 5 级时，该法术的伤害增加 1d8（变为 2d8）。11 级时再加 1d8（变为 3d8），17 级时再加 1d8（变为 4d8）。",
    "source": "PHB"
  },
  {
    "id": "spell.0.DancingLights",
    "name": "舞光术",
    "english_name": "Dancing Lights",
    "level": 0,
    "school": "塑能 戏法",
    "classes": [
      "吟游诗人",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一点磷或光榆木，或者一只萤火虫"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在施法距离内创造四个火把大小的光源。法术持续时间内，光源能够以火把，灯笼或光球的形态显现并在空中悬浮。你也可以将四个光源合为一个中型类人生物的模糊光影。无论选择哪种方式，每处光源都可以发出半径 10 尺的微光光照。\n你在自己回合可以用一个附赠动作令这些光源在施法距离内移动至多 60 尺。每个光源必需在另一个光源周边 20 尺内，而离开施法距离的光源会随即熄灭。",
    "source": "PHB"
  },
  {
    "id": "spell.0.Druidcraft",
    "name": "德鲁伊伎俩",
    "english_name": "Druidcraft",
    "level": 0,
    "school": "变化 戏法",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你向自然之魂低语，并创造以下效应之一：\n你创造一个微小而无害的感官效应，并以之预报你所在地接下来 24 小时的天气状况。该效应可表现为一个代表晴空的金球，一朵代表雨天的云彩，代表雪日而飘飞的雪花等等。该效应将持续 1 轮。\n你可以立即让一朵鲜花绽放，一颗种子破壳，一片叶蕾发芽。\n你创造一个微小而无害的即时感官效应，如落叶，微风，小动物的动静或者臭鼬的微弱气味。该效应只能在 5 尺的立方空间内起效。\n你可以立即点亮或熄灭一根蜡烛、一把火把或一处小篝火。",
    "source": "PHB"
  },
  {
    "id": "spell.0.EldritchBlast",
    "name": "魔能爆",
    "english_name": "Eldritch Blast",
    "level": 0,
    "school": "塑能 戏法",
    "classes": [
      "邪术师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "一束激烈的能量射向施法距离内一个生物。对该目标发动一次远程法术攻击，如果命中则该目标受 1d10 点力场伤害。\n当你到达更高等级时，该法术还可以同时创造更多的射线：5 级时两条，11 级时三条，17 级时四条。你可以决定这些射线攻击同一个目标或分别攻击不同的目标，且为每束射线分别进行攻击检定。",
    "source": "PHB"
  },
  {
    "id": "spell.0.Firebolt",
    "name": "火焰箭",
    "english_name": "Fire bolt",
    "level": 0,
    "school": "塑能 戏法",
    "classes": [
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你对施法距离内一个生物或物件掷出一把火焰，对目标进行一次远程法术攻击。若命中，则目标受到 1d10 点火焰伤害。未被着装或携带的可燃物件被该法术命中时将被点燃。\n你到达 5 级时，该法术的伤害增加 1d10（变为 2d10）。11 级时再加 1d10（变为 3d10），17 级时再加 1d10（变为 4d10）。",
    "source": "PHB"
  },
  {
    "id": "spell.0.Friends",
    "name": "交友术",
    "english_name": "Friends",
    "level": 0,
    "school": "惑控 戏法",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": false,
      "somatic": true,
      "material": "法术施展时作用于脸部的一些化妆用品"
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定一个对你非敌对的生物，你在法术持续时间内对其进行的所有魅力检定均具有优势。当该法术终止时，该生物将意识到你曾使用魔法操弄他的情绪，从而对你的态度转为敌对。此时如果该生物有暴力倾向则会直接对你发动攻击，而非暴力倾向的生物则会寻求其他的报复形式（由 DM 决定），具体情况视你与其交互时的具体内容而定。",
    "source": "PHB"
  },
  {
    "id": "spell.0.Guidance",
    "name": "神导术",
    "english_name": "Guidance",
    "level": 0,
    "school": "预言 戏法",
    "classes": [
      "牧师",
      "德鲁伊",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你触碰一个自愿的生物。在法术终止前，目标可以选择在一次属性检定时额外掷一粒 d4，并将所得数值加入检定结果中。它可以在进行属性检定之前或之后掷骰。法术随后即终止。",
    "source": "PHB"
  },
  {
    "id": "spell.0.Light",
    "name": "光亮术",
    "english_name": "Light",
    "level": 0,
    "school": "塑能 戏法",
    "classes": [
      "吟游诗人",
      "牧师",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": "一只萤火虫或一片磷光苔藓"
    },
    "duration": "1小时",
    "description": "你触碰一个尺寸在任意方向上都不超过 10 尺的物件。在法术终止前，物件将在其 20 尺半径范围内发出明亮光照，并在其外 20 尺范围发出微光光照。光的颜色由你决定，该物件被不透明的东西完全遮盖时，其光照被遮挡。如果你再次施展该法术，或者使用一个动作解散该法术，则该法术终止。\n如果你指定敌对生物所持握或着装的一个物件作为目标，则该生物必须进行一次敏捷豁免以尝试摆脱该法术的效应。",
    "source": "PHB"
  },
  {
    "id": "spell.0.MageHand",
    "name": "法师之手",
    "english_name": "Mage Hand",
    "level": 0,
    "school": "咒法 戏法",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 分钟",
    "description": "一只漂浮的幽灵手出现在施法距离内你指定的一点。幽灵手持续存在至法术终止，或直至你以一个动作解散该法术。如果幽灵手距你的距离超过 30 尺，或者当你再次施展了该法术时，则现存的幽灵手消失不见。\n你可以用动作控制幽灵手，并通过幽灵手实现一个行为：你可以操控一个物件，或者打开一扇未上锁的门或容器，或者将一件物品放入容器或从容器中取出，或者将小瓶中的内容物倾倒出来。你每次你使用幽灵手时可以令其移动至多 30 尺。\n该幽灵手不能攻击，也不能激活魔法物品或承载超过 10 磅重的物质。",
    "source": "PHB"
  },
  {
    "id": "spell.0.Mending",
    "name": "修复术",
    "english_name": "Mending",
    "level": 0,
    "school": "变化 戏法",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 分钟",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "两块天然磁石"
    },
    "duration": "立即",
    "description": "该法术修复你所触碰一个物件上的一处破损或裂缝，例如修复一条断裂的链条，或者一把碎成两半的钥匙、一件撕裂的斗篷、一个漏了的酒袋等。只要破损或断裂处在任意方向上都不超过 1 尺，你就可以不留痕迹地修复它。\n该法术可以从物理上修复一件魔法物品或一个构装体，但不会恢复这类物件上的魔法。",
    "source": "PHB"
  },
  {
    "id": "spell.0.Message",
    "name": "传讯术",
    "english_name": "Message",
    "level": 0,
    "school": "变化 戏法",
    "classes": [
      "吟游诗人",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小段铜线"
    },
    "duration": "1 轮",
    "description": "你用手指指向施法距离内的一个生物并低声说出一段信息。该目标（且只有该目标）会听到这段信息并可以用只有你能听见的低语回复你。\n你可以隔着固态物件施展该法术，但你必须熟悉法术目标并知晓其就在屏障后方。魔法的沉默，1 尺厚的石头，1 寸厚的普通金属，一片薄铅片，或者 3 尺厚的木料都可以阻挡该法术。该法术不需要直线传递信息，它可以自由地转过拐角或穿过孔洞。",
    "source": "PHB"
  },
  {
    "id": "spell.0.MinorIllusion",
    "name": "次级幻影",
    "english_name": "Minor Illusion",
    "level": 0,
    "school": "幻术 戏法",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": false,
      "somatic": true,
      "material": "一小块羊毛"
    },
    "duration": "1 分钟",
    "description": "你在施法距离内创造一段声响或一个物件的影像，并使之维持至法术持续时间结束。你也可以用一个动作解除幻象，或者再次施展该法术来终止幻象。\n如果你创造一段声响，其音量可以是低声耳语也可以是高声尖叫。它可以是你或其他任何人的嗓音，或者是一头狮子的咆哮、一段鼓声以及任何你指定的其它声响。声响在持续时间内不会减弱，或者你也可以于法术终止前在不同的时间段创造几段分散的声响。\n如果你创造一个物件的影像（比如一把椅子、泥泞的脚印、一个小箱子等），则该物件大小不得大于一个边长 5 尺的立方体。该影像不具有声音、光亮、味道或任何其他的感官效应。由于影像可以被任何物件所穿透，因此与之进行物理互动时都会揭露其幻象的本质。\n生物用其动作调查该声响或影像时，必须进行一次对抗该法术豁免 DC 的智力（调查）检定，检定成功则判断出眼前即是幻象。幻象在看穿它的生物面前会显得模糊不清。",
    "source": "PHB"
  },
  {
    "id": "spell.0.PoisonSpray",
    "name": "毒气喷溅",
    "english_name": "Poison Spray",
    "level": 0,
    "school": "咒法 戏法",
    "classes": [
      "德鲁伊",
      "术士",
      "邪术师",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你伸手向施法距离内一个你能看见的生物喷出一阵毒气。目标必须进行一次体质豁免，豁免失败则受 1d12 毒素伤害。\n你到达 5 级时，该法术的伤害增加 1d12（变为 2d12）。11 级时再加 1d12（变为 3d12），17 级时再加 1d12（变为 4d12）。",
    "source": "PHB"
  },
  {
    "id": "spell.0.Prestidigitation",
    "name": "魔法伎俩",
    "english_name": "Prestidigitation",
    "level": 0,
    "school": "变化 戏法",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "至多 1 小时",
    "description": "该法术是一个初级施法者用来练习的魔法小伎俩。你在施法距离内创造下列魔法效果中的一种：\n你创造一个立即生效的，无害的感观效应，比如一束火花，一阵风，微弱音乐或古怪的臭味。\n你立即点燃或熄灭一支蜡烛，一支火把或一小型营火。\n你立即使一个不大于 1 立方尺的物件变得清洁或肮脏。\n你立即使一个不大于 1 立方尺的非活体物质变得冰冷、温暖或对其调味，其效应持续 1 小时。\n你在一个物件或一个表面上创造一块色斑，或者一个记号，又或者一个标志，其效应持续 1 小时。\n你创造一个巴掌大小的非魔法小玩意或一个虚幻图像，其效应持续到你下回合结束。\n如果你多次施展该法术，则可以同时维持至多三个不同的非即时效应，并且可以用一个动作解散其中一种效应。",
    "source": "PHB"
  },
  {
    "id": "spell.0.ProduceFlame",
    "name": "燃火术",
    "english_name": "Produce Flame",
    "level": 0,
    "school": "咒法 戏法",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "10分钟",
    "description": "一朵摇曳的火焰出现在你手中。火焰在法术持续时间存在，并且不会伤害你和你的装备。火焰为其周边半径 10 尺范围内提供明亮光照，以及该范围外 10 尺的微光光照。法术将在再次施展该法术，或者以一个动作解除法术时终止。\n此外，你还可以使用火焰发动攻击，并以此终止该法术。施展该法术时，你可以将火焰投向距你 30 尺内的一个生物，并对其发动一次远程法术攻击，命中时目标将受到 1d8 点火焰伤害。你也可以在施展法术后的随后回合里以一个动作实现该行为\n你到达 5 级时，该法术的伤害增加 1d8（变为 2d8）。11 级时再加 1d8（变为 3d8），17 级时再加 1d8（变为 4d8）。",
    "source": "PHB"
  },
  {
    "id": "spell.0.RayofFrost",
    "name": "冷冻射线",
    "english_name": "Ray of Frost",
    "level": 0,
    "school": "塑能 戏法",
    "classes": [
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "一道冰冷的蓝白色光线朝施法距离内的一个生物射去。你对目标进行一次远程法术攻击。若命中，则目标受到 1d8 点冷冻伤害，并且在你的下一回合开始前速度减少 10 尺。\n你到达 5 级时，该法术的伤害增加 1d8（变为 2d8）。11 级时再加 1d8（变为 3d8），17 级时再加 1d8（变为 4d8）。",
    "source": "PHB"
  },
  {
    "id": "spell.0.Resistance",
    "name": "提升抗性",
    "english_name": "Resistance",
    "level": 0,
    "school": "防护 戏法",
    "classes": [
      "牧师",
      "德鲁伊",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一件微型斗篷"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你触碰一个自愿的生物。在法术终止前，目标可以选择在一次豁免检定时额外掷一粒 d4，并将所得数值加入检定结果中。他可以在进行豁免检定之前或之后掷骰。法术随后即终止。",
    "source": "PHB"
  },
  {
    "id": "spell.0.SacredFlame",
    "name": "圣火术",
    "english_name": "Sacred Flame",
    "level": 0,
    "school": "塑能 戏法",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "如同火焰般的辉光向施法距离内你能看见的一个生物倾泻而下。目标必须要进行一次敏捷豁免，豁免失败则受到 1d8 点光耀伤害。目标在这次豁免检定中无法获得掩护的增益。\n你到达 5 级时，该法术的伤害增加 1d8（变为 2d8）。11 级时再加 1d8（变为 3d8），17 级时再加 1d8（变为 4d8）。",
    "source": "PHB"
  },
  {
    "id": "spell.0.Shillelagh",
    "name": "橡棍术",
    "english_name": "Shillelagh",
    "level": 0,
    "school": "变化 戏法",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1附赠动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一些槲寄生，一片三叶草叶子，以及一根短棒club或长棍quarterstaff"
    },
    "duration": "一分钟",
    "description": "你将自然之力灌入手中持握的一根短棒或长棍中。你在法术持续时间内使用该武器进行近战攻击时，可以用你的施法属性值代替力量值来进行攻击检定和伤害掷骰，且该武器的伤害骰变为 d8。此外，若该武器原来不是魔法武器，则它将变成魔法武器。你再次施展该法术或丢掉该武器时，该法术也随之终止。",
    "source": "PHB"
  },
  {
    "id": "spell.0.ShockingGrasp",
    "name": "电爪",
    "english_name": "Shocking Grasp",
    "level": 0,
    "school": "塑能 戏法",
    "classes": [
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你的手上发出闪电，并对你触碰的一个生物发动电击。对目标发动一次近战法术攻击。如果目标穿着金属护甲，则你进行该检定时具有优势。若命中，则目标受到 1d8 点闪电伤害，并且在其下一回合开始前不能执行任何反应。\n你到达 5 级时，该法术的伤害增加 1d8（变为 2d8）。11 级时再加 1d8（变为 3d8），17 级时再加 1d8（变为 4d8）。",
    "source": "PHB"
  },
  {
    "id": "spell.0.SparetheDying",
    "name": "维生术",
    "english_name": "Spare the Dying",
    "level": 0,
    "school": "死灵 戏法",
    "classes": [
      "牧师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你触碰一个生命值为 0 的活体生物，使该生物的伤势立刻稳定下来。该法术对不死生物和构装生物无效。",
    "source": "PHB"
  },
  {
    "id": "spell.0.Thaumaturgy",
    "name": "奇术",
    "english_name": "Thaumaturgy",
    "level": 0,
    "school": "变化 戏法",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "至多 1 分钟",
    "description": "你在施法距离内展示出一个低级奇观，以表现你的超自然力。你在施法距离内创造出下列魔法效应之一：\n你的声音在 1 分钟内变得比常人响两倍。\n你在 1 分钟内使一团火焰闪烁，变亮，变暗或变色。\n你使地面震动 1 分钟（完全无害）。\n你使某种声音自施法距离内一点瞬间发出，例如雷鸣声，鸦叫声或不祥的低语声。\n你使一扇没有锁上的门或窗瞬间打开或关上。\n你在 1 分钟内改变自己眼睛的颜色。\n多次施展该法术时，你可以同时维持最多三个持续 1 分钟的效应。你也可以用一个动作驱散其中一种效应。",
    "source": "PHB"
  },
  {
    "id": "spell.0.ThornWhip",
    "name": "荆棘之鞭",
    "english_name": "Thorn Whip",
    "level": 0,
    "school": "变化 戏法",
    "classes": [
      "德鲁伊",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一根来自带刺植物的茎干"
    },
    "duration": "立即",
    "description": "你创造出一条藤蔓般的带刺长鞭，并猛抽向施法距离内一个你指定的生物。对目标进行一次近战法术攻击，如果命中，则目标受到 1d6 点穿刺伤害，如果目标生物为大型或更小体型，则其将朝你所在位置拉近至多 10 尺。\n你到达 5 级时，该法术的伤害增加 1d6（变为 2d6）。11 级时再加 1d6（变为 3d6），17 级时再加 1d6（变为 4d6）。",
    "source": "PHB"
  },
  {
    "id": "spell.0.TrueStrike",
    "name": "克敌机先",
    "english_name": "True Strike",
    "level": 0,
    "school": "预言 戏法",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": false,
      "somatic": true
    },
    "duration": "专注，至多1 轮",
    "description": "你伸出手并以手指指向施法距离内的一个生物，并以魔力刹那间看穿目标的防御。如果该法术还未终止，则你在自己的下一回合里，对该目标发动的第一次攻击检定具有优势。",
    "source": "PHB"
  },
  {
    "id": "spell.0.ViciousMockery",
    "name": "恶言相加",
    "english_name": "Vicious Mockery",
    "level": 0,
    "school": "惑控 戏法",
    "classes": [
      "吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你对施法距离内一个你能看见的生物连珠炮式的说出一串蕴涵魔力的咒骂。如果目标能听见你说话（不一定要听懂），它就必须要进行一次感知豁免，豁免失败者将受到 1d4 点心灵伤害，其下一回合结束前进行第一次攻击检定具有劣势。\n你到达 5 级时，该法术的伤害增加 1d4（变为 2d4）。11 级时再加 1d4（变为 3d4），17 级时再加 1d4（变为 4d4）。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Alarm",
    "name": "警报术",
    "english_name": "Alarm",
    "level": 1,
    "school": "防护",
    "classes": [
      "仪式；游侠",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 分钟",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个小铃铛和一小段银线"
    },
    "duration": "8 小时",
    "description": "你针对不速之客设置一个警报。在施法距离内指定一扇门窗或选择一个边长不大于 20 尺的立方区域。在法术持续时间内，任何触碰或进入目标区域的微型或更大体型生物都会触发警报。施法时，你可以决定哪些生物不会触发警报，还可以选择警报方式为声音警报或是精神警报。\n如果你选择精神警报，且警报触发时你距离目标区域不超过 1 里，则你的意念里会传来“乒”的警报声。如果你在睡觉，则警报将使你惊醒。\n如果你选择声音警报，则警报触发时其 60 尺范围内将响起持续 10 秒摇铃声。",
    "source": "PHB"
  },
  {
    "id": "spell.1.AnimalFriendship",
    "name": "化兽为友",
    "english_name": "Animal Friendship",
    "level": 1,
    "school": "惑控",
    "classes": [
      "德鲁伊",
      "游侠",
      "吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一点食物"
    },
    "duration": "24 小时",
    "description": "该法术帮你让一只野兽相信你并无恶意。在施法距离内指定一只你能看见的野兽，而它也必须能看见你且能听到你的声音。该野兽必须进行一次感知豁免，豁免失败则将在法术持续时间内被你魅惑。如果它的智力为 4 或更高则法术直接失败。如果你或你的同伴对目标造成伤害，则法术终止。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，就可以多选择一个野兽作为目标。",
    "source": "PHB"
  },
  {
    "id": "spell.1.ArmorofAgathys",
    "name": "艾嘉西斯之铠",
    "english_name": "Armor of Agathys",
    "level": 1,
    "school": "防护",
    "classes": [
      "邪术师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一杯水"
    },
    "duration": "1 小时",
    "description": "防护性的魔法力量环绕着你，凝聚成覆盖着你和你的装备表面上一层魅影般的凝霜。\n你在法术持续时间内获得 5 点临时生命值。如果有生物在你拥有这些临时生命值时以近战攻击命中你，则该生物将受到 5 点冷冻伤害。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，临时生命和冷冻伤害就各增加 5 点。",
    "source": "PHB"
  },
  {
    "id": "spell.1.ArmsofHadar",
    "name": "哈达之臂",
    "english_name": "Arms of Hadar",
    "level": 1,
    "school": "咒法",
    "classes": [
      "邪术师"
    ],
    "castingTime": "1 动作",
    "range": "自身（10 尺半径）",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你祈唤 哈达，乌黯之饥渴Hadar, the Dark Hunger 的力量。黑暗能量构成的触须从你身上蔓延而出并痛击 10 尺内的所有生物。范围内的所有生物都必须进行一次力量豁免，豁免失败者将受到 2d6 点黯蚀伤害，并其下一回合前都无法执行反应。豁免成功的生物伤害减半，且不受其他效应的影响。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，法术的伤害就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Bane",
    "name": "灾祸术",
    "english_name": "Bane",
    "level": 1,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一滴血"
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内至多三个你能看见的生物，并迫使其进行一次魅力豁免。豁免失败者直至法术终止前，在每当进行攻击检定或豁免检定时，必须从投骰结果中减去一个 d4。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，就能多指定一个目标。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Bless",
    "name": "祝福术",
    "english_name": "Bless",
    "level": 1,
    "school": "惑控",
    "classes": [
      "牧师",
      "圣武士"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一滴圣水"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你用言语祝福施法距离内至多三个生物。在法术终止前，每当受术目标进行攻击检定或豁免检定时，可以额外掷一次 d4 并加在其结果上。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，就可以多指定一个目标。",
    "source": "PHB"
  },
  {
    "id": "spell.1.BurningHands",
    "name": "燃烧之手",
    "english_name": "Burning Hands",
    "level": 1,
    "school": "塑能",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身（15 尺锥状）",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你双手拇指相对，其他手指张开，一道火焰随即从手指间喷出。处于 15 尺锥状区域内的生物必须进行一次敏捷豁免。豁免失败者受到 3d6 点火焰伤害，豁免成功则伤害减半。\n该法术的火焰会点燃范围内未被着装或携带的可燃物。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，法术的伤害就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.1.CharmPerson",
    "name": "魅惑人类",
    "english_name": "Charm Person",
    "level": 1,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 小时",
    "description": "你尝试魅惑施法距离内的某个你能看见的类人生物。该生物必须进行一次感知豁免。如果你或你的同伴正在和该生物战斗，则该生物进行该豁免时具有优势。如果豁免失败，则该生物被你魅惑至法术终止，或者直到你或你的同伴对他做出伤害行为为止。此间，被魅惑的生物将视你为友方且熟悉的人。法术终止后，该生物将会发觉曾被你魅惑过。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，法术就能多影响一个目标。而各目标之间距离不能超过 30 尺。",
    "source": "PHB"
  },
  {
    "id": "spell.1.ChromaticOrb",
    "name": "繁彩球",
    "english_name": "Chromatic Orb",
    "level": 1,
    "school": "塑能",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一枚至少价值 50gp 的钻石"
    },
    "duration": "立即",
    "description": "你向施法距离内某个你能看见的生物掷出一颗直径 4 寸的能量球，并从强酸、冷冻、火焰、闪电、毒素、雷鸣中选择一种类型以对该生物发动一次远程法术攻击。攻击命中时，该生物将受到 3d8 点你所选类型的伤害。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，法术的伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.1.ColorSpray",
    "name": "七彩喷射",
    "english_name": "Color Spray",
    "level": 1,
    "school": "幻术",
    "classes": [
      "术士",
      "法师；TCE：吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "自身（15 尺锥状）",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一撮粉末或沙子，其颜色必须包含红、黄、蓝三色"
    },
    "duration": "1 轮",
    "description": "炫目的彩光从你指间散射而出。掷一次 6d10；其结果为受该法术影响生物的生命值总数。在以你为源点的 15 尺锥状区域内的生物以剩余生命值由小至大的顺序受法术影响（生效时忽略昏迷生物和不能视物的生物）。\n计算受法术影响生物时，从剩余生命值最低的生物开始逐个计算。每个受术生物均陷入目盲，直至你的下一回合结束。法术掷骰的生命值总数减去一个受术生物的生命值后，余数再用以计算生命值稍高者是否受法术影响。生物剩余生命值，必须小于等于该余数法术才能成功影响该生物。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，法术的掷骰时就增加 2d10。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Command",
    "name": "命令术",
    "english_name": "Command",
    "level": 1,
    "school": "惑控",
    "classes": [
      "牧师",
      "圣武士；TCE：吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "1 轮",
    "description": "你对施法距离内一个你能看见的生物说出一个单词的命令。目标生物必须成功通过一次感知豁免，否则必须在其自己的下一回合服从该命令行事。如果目标为不死生物或目标无法听懂你的语言，又或者你的命令对其直接构成损害，则该法术无效。\n以下列出一些通常可用的命令单词及其效果。你也可以说出此处没有列明的单词命令，并由DM决定目标将如何行动。如果目标无法完成你的命令，则法术终止。\n过来Approach。目标以最短最直接的路线向你移动，并在到达距你5尺时结束其回合。\n放下Drop。目标放下手中持握物并结束其回合。\n走开Flee。目标在其回合内以最快最有效的方式远离你。\n趴下Grovel。目标趴下倒地并结束其回合。\n立定Halt。目标不移动且不作任何动作。飞行生物在原地悬浮（如果它可以这么做）。如果它必须移动才能保持在空中，则其移动最小的距离以保持飞行。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，法术就能多影响一个目标。而各目标之间距离不能超过 30 尺。",
    "source": "PHB"
  },
  {
    "id": "spell.1.CompelledDuel",
    "name": "强令对决",
    "english_name": "Compelled Duel",
    "level": 1,
    "school": "惑控",
    "classes": [
      "圣武士"
    ],
    "castingTime": "1 附赠动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你尝试强令一个生物与你决斗。指定施法距离内一个你能看见的生物作为法术的目标。该生物必须进行一次感知豁免，豁免失败则该生物将被你的神圣要求所吸引。在法术持续时间内，该生物对除你之外任何生物发动攻击检定时都具有劣势，并且每当其试图移动至与你相距超过 30 尺的距离时，都必须进行一次感知豁免。豁免成功，则该目标本回合内进行的移动将暂时不受该魔法限制。\n当你攻击另一个生物时，或者当你对另一个敌对生物施展法术时，又或者当一个你的友方生物对该目标造成伤害或者对其施展伤害性法术时，又或者你在距离该目标超过 30 尺的位置结束你的回合时，该法术终止。",
    "source": "PHB"
  },
  {
    "id": "spell.1.ComprehendLanguages",
    "name": "通晓语言",
    "english_name": "Comprehend Languages",
    "level": 1,
    "school": "预言",
    "classes": [
      "仪式；吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "造水为一滴水，枯水为一点谷物或沙子"
    },
    "duration": "立即",
    "description": "你在法术持续时间内知晓你所听到所有语言的字面意义。你也可以通过触碰书写的文字来读懂其字面意义。以这种方式阅读每页文字需要花费 1 分钟的时间。\n某些文字或图形的密语（比如一个奥秘符文）由于不属于书写语言一类所以无法用此法术破译。\n造水术／枯水术｜Create or Destroy Water\n一环 变化（牧师、德鲁伊）\n施法时间：1 动作\n施法距离：30 尺\n法术成分：V、S、M（造水为一滴水，枯水为一点谷物或沙子）\n你施法创造水或者使水枯竭。\n造水Create Water。你在施法距离内一个打开的容器里创造 10 加仑干净的水。或以降雨的方式在施法距离内一处 30 尺的立方区域降下等量水分并浇灭区域内不受遮盖的火苗。\n枯水Destory Water。你使施法距离内一个打开的容器里的 10 加仑水分枯竭不见。或者使施法距离内一片 30 尺立方区域的浓雾消失不见。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，法术就多创造或枯竭 10 加仑额外的水分，或者影响的立方区域边长增加 5 尺。",
    "source": "PHB"
  },
  {
    "id": "spell.1.CureWounds",
    "name": "疗伤术",
    "english_name": "Cure Wounds",
    "level": 1,
    "school": "塑能",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊",
      "圣武士",
      "游侠",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "一个你触碰的生物恢复特定数值的生命值，其恢复量等于 1d8+你的施法属性调整值。该法术对不死生物和构装生物无效。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，恢复量就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.1.DetectEvilandGood",
    "name": "侦测善恶",
    "english_name": "Detect Evil and Good",
    "level": 1,
    "school": "预言",
    "classes": [
      "牧师",
      "圣武士"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "你在法术持续时间内能感觉到身边 30 尺内出现的任一异怪、天界生物、元素生物、精类生物、邪魔或不死生物的存在，并掌握其具体位置。另外，你也可以知晓 30 尺内的物件或地点是否被祝福或亵渎。\n该法术可以穿透大多障碍，但仍会被 1 尺厚石质或 1 寸厚金属质，或一层薄铅质，或 3 尺厚木质或泥质材料阻隔。",
    "source": "PHB"
  },
  {
    "id": "spell.1.DetectMagic",
    "name": "侦测魔法",
    "english_name": "Detect Magic",
    "level": 1,
    "school": "预言",
    "classes": [
      "仪式；吟游诗人",
      "牧师",
      "德鲁伊",
      "圣武士",
      "游侠",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "你在法术持续时间内能感测到30尺内存在的魔法。感测到魔法的存在后，你可以使用动作，来看到任何你能看见的具有魔法的生物或物件周围环绕着微弱的灵光，并分辨出其所属的魔法学派（若有）。该法术可以穿透大部分障碍，但仍会被1尺厚石质，或1寸厚金属质，或一层薄铅质，或3尺厚木质或泥质材料阻隔。",
    "source": "PHB"
  },
  {
    "id": "spell.1.DetectPoisonandDisease",
    "name": "侦测毒性和疾病",
    "english_name": "Detect Poison and Disease",
    "level": 1,
    "school": "预言",
    "classes": [
      "仪式；牧师",
      "德鲁伊",
      "圣武士",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一片红豆杉叶"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你在法术持续时间内可以感测并定位 30 尺内的毒素、有毒生物以及疾病。你还可以判断所感测毒素、毒物或疾病的具体类别。\n该法术可以穿透大部分障碍，但仍会被 1 尺厚石质，或 1 寸厚金属质，或一层薄铅质，或 3 尺厚木质或泥质材料阻隔。",
    "source": "PHB"
  },
  {
    "id": "spell.1.DisguiseSelf",
    "name": "易容术",
    "english_name": "Disguise Self",
    "level": 1,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 小时",
    "description": "你改变自身以及随身的衣物、护甲、武器等所有物。该效应在法术终止或你使用动作主动解除时结束。肉眼看来你的身高可以有 1 尺的增减，体态可胖可瘦可匀称。但是你不能改变身体的形状，所以你变形的样子必须有四肢或类似的生理结构。此外，幻术的影响范围由你决定。\n此法术产生的变化无法应对物理检查。比如，你用此法术添了一顶帽子，那么现实物件会从帽子穿过去，且任何触碰帽子的人将摸不到任何东西或者摸到的是你的头和头发。如果你用该法术让自己变得消瘦，而某个人用手摸到你时，他的手看起来就像摸着空气。\n如果一个生物想要分辨你是否易容，则必须使用一个动作揭露你的伪装，并进行一次智力（调查）检定以对抗你的法术豁免 DC。",
    "source": "PHB"
  },
  {
    "id": "spell.1.DissonantWhispers",
    "name": "不谐低语",
    "english_name": "Dissonant Whispers",
    "level": 1,
    "school": "惑控",
    "classes": [
      "吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你指定一个施法距离内能够听到你声音的生物，并对其说出只有他能听到的不谐低语，使其受强烈的痛苦折磨。目标必须进行一次感知豁免。豁免失败则受到 3d6 点心灵伤害，并立即执行反应往远离你的方向移动其速度所允许的距离。该生物不会进入明显危险的地域，如火堆或陷坑。豁免成功则伤害减半，且不会执行远离的反应。陷入耳聋状态的目标，进行该豁免时直接判定为成功。\n升环施法效应：使用二环或更高法术位施展该法术，你使用的法术位每比一环高一环，伤害就提高 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.1.DivineFavor",
    "name": "神恩",
    "english_name": "Divine Favor",
    "level": 1,
    "school": "塑能",
    "classes": [
      "圣武士"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你的祈祷赋予你神圣的光芒。在法术持续时间结束前，你的武器攻击命中时将造成额外 1d4 点光耀伤害。",
    "source": "PHB"
  },
  {
    "id": "spell.1.EnsnaringStrike",
    "name": "诱捕打击",
    "english_name": "Ensnaring Strike",
    "level": 1,
    "school": "咒法",
    "classes": [
      "游侠"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术终止前的下一次武器攻击命中一个生物时，将在攻击处出现一团扭曲的多刺藤蔓，并迫使目标进行一次力量豁免，豁免失败者将受魔法藤蔓影响而陷入束缚状态，直至法术终止。大型或更大体型的生物进行该豁免时具有优势，如果豁免成功，则藤蔓立即枯萎。\n受该法术束缚的目标每回合开始时受到 1d6 的穿刺伤害。该受束缚生物或其他能触及该目标的生物可用一个动作进行一次对抗法术豁免 DC 的力量检定。检定成功则目标解除束缚。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，伤害就提高 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Entangle",
    "name": "纠缠术",
    "english_name": "Entangle",
    "level": 1,
    "school": "咒法",
    "classes": [
      "德鲁伊；TCE：游侠"
    ],
    "castingTime": "1 动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "在施法距离内的地面上指定一点，并以其为源点蔓延出 20 尺方形区域的杂草和藤蔓。在法术持续时间内，这片被植物覆盖的区域变为困难地形。\n在你施展法术时，该区域内的生物必须成功通过一次力量豁免，否则将因为这些缠绕的植物陷入束缚状态，直到法术终止。一个因此被束缚的生物可以使用其动作进行一次力量检定以对抗该法术的豁免 DC，检定成功则摆脱束缚。\n法术终止时，所召唤的植物随即枯萎。",
    "source": "PHB"
  },
  {
    "id": "spell.1.ExpeditiousRetreat",
    "name": "脚底抹油",
    "english_name": "Expeditious Retreat",
    "level": 1,
    "school": "变化",
    "classes": [
      "术士",
      "邪术师",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "此法术让你以惊人的步速移动。施展此法术时，你可以执行 疾走Dash 动作。其后直至法术终止前的每个你自己回合中，你都能再以附赠动作执行 疾走Dash 动作。\n（注：一个萌新常见的误区：首次疾走动作是施法动作的一部分，它不需要额外花费你的动作。）",
    "source": "PHB"
  },
  {
    "id": "spell.1.FaerieFire",
    "name": "妖火",
    "english_name": "Faerie Fire",
    "level": 1,
    "school": "塑能",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内一处 20 尺立方区域，其内每个物件都将被蓝色，绿色或紫色的光所包围（颜色由你指定）。区域内敏捷豁免失败的生物也会被光包围。受术物件和生物在法术持续时间内发出 10 尺半径的微光。\n受术生物或物件无法受益于隐形，且任何能看见他们的攻击者对其发动攻击检定时具有优势。",
    "source": "PHB"
  },
  {
    "id": "spell.1.FalseLife",
    "name": "虚假生命",
    "english_name": "False Life",
    "level": 1,
    "school": "死灵",
    "classes": [
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小瓶酒或蒸馏酒精"
    },
    "duration": "1 小时",
    "description": "你从死灵法术中获得了额外的生命力。在法术持续时间内，你获得 1d4+4 的临时生命值。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，其给予的临时生命值就增加 5。",
    "source": "PHB"
  },
  {
    "id": "spell.1.FeatherFall",
    "name": "羽落术",
    "english_name": "Feather Fall",
    "level": 1,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 反应，你 60 尺内有生物坠落时可用",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": "一小片羽毛或绒毛"
    },
    "duration": "1 分钟",
    "description": "在施法距离内指定至多五个正坠落的生物。受术生物的坠落速度在法术持续时间内降低至每轮 60 尺。如果该生物在法术终止前落地，则其不会受到任何坠落伤害，且可以安全的用脚着地。着地后法术对该生物的效应随即终止。",
    "source": "PHB"
  },
  {
    "id": "spell.1.FindFamiliar",
    "name": "寻获魔宠",
    "english_name": "Find Familiar",
    "level": 1,
    "school": "咒法",
    "classes": [
      "仪式；法师"
    ],
    "castingTime": "1 小时",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "将价值 10gp 的木炭、焚香以及香草，放在黄铜盆中烧尽，作为该法术的耗材"
    },
    "duration": "立即",
    "description": "你获得一只为你服务的魔宠。以下列动物为原型选择魔宠的动物精魄外貌：蝙蝠bat、猫cat、螃蟹crab、青蛙frog（蟾蜍toad）、鹰hawk、蜥蜴lizard、章鱼octopus、猫头鹰owl、毒蛇poisonous snake、鱼fish（食人鱼quipper）、老鼠rat、渡鸦raven、海马sea horse、蜘蛛spider、鼬鼠weasel。魔宠出现在施法距离内一处未被占据的空间，虽然有着所选的生物属性数据，但其种类为天界生物，精类生物或邪魔（由你选择）而不是野兽。\n你的魔宠可脱离你独立行动，不过它会一直遵循你的命令行事。战斗时，它为自己骰先攻，并在自己回合里行动。魔宠无法攻击，但是它能如常执行其他动作。\n当你的魔宠生命值降低到0点时，它会自行消失，变成一种无物理形态的状态。他会在你再次施展这个法术后重新出现。你可以用一个动作，暂时性的解散你的魔宠，它将进入一个小位面等待你的重新召唤。或你也可以选择永久解散它。暂时解散时，你可以用一个动作召唤它出现在 30 尺内任意未占据的空间中。不论魔宠以何种方式生命值归0或消失进入了小位面，它都会将自己穿着或携带的任何物品丢弃在自己占据的空间中。\n你的魔宠在你身边 100 尺范围内时，你可以与其进行心灵交流。此外，你还可以用一个动作将自己的视觉和听觉切换到魔宠的感官，并一持续至你下一回合。在此期间，你同时享有该魔宠自身的特殊感官，而你本体的感官则等同于陷入耳聋以及目盲状态。\n你不能同时拥有一只以上的魔宠，如果你在已有魔宠的状况下施展该法术，则你可以为现有的魔宠选择的新的形态（从以上列表选择）。\n此外，当你施展施法距离为触及的法术时，你的魔宠可以帮你传递法术，其效果就如同该法术由魔宠施展一样。此时你的魔宠必须在你身边 100 尺范围内，且其必须可以执行反应来传递法术。如果传递的法术需要进行攻击检定，则该检定将使用你自己的攻击调整值。",
    "source": "PHB"
  },
  {
    "id": "spell.1.FogCloud",
    "name": "云雾术",
    "english_name": "Fog Cloud",
    "level": 1,
    "school": "咒法",
    "classes": [
      "德鲁伊",
      "游侠",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "你以施法距离内一点为中心创造一片半径 20 尺的球状浓雾。浓雾在球形内充斥所有角落，并造成重度遮蔽。浓雾持续至法术持续时间结束，但仍可被和风或更强风势（至少每小时 10 里）所吹散。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，浓雾的半径就增加 20 尺。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Goodberry",
    "name": "神莓术",
    "english_name": "Goodberry",
    "level": 1,
    "school": "变化",
    "classes": [
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一枝槲寄生"
    },
    "duration": "立即",
    "description": "至多 10 个浆果出现在你手里。果子在法术持续时间内充满魔法，持有浆果的生物可用其动作吃下其中之一并以此恢复 1 点生命值，且一枚浆果就可以满足该生物一整天的营养需求。\n创造的浆果如果在法术施展后的 24 小时内没有被吃掉就会失去其效力。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Grease",
    "name": "油腻术",
    "english_name": "Grease",
    "level": 1,
    "school": "咒法",
    "classes": [
      "法师",
      "奇械师；TCE：术士"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块猪皮或黄油"
    },
    "duration": "1 分钟",
    "description": "你在施法距离内指定一点，光滑的油脂以该点为中心覆盖一处 10 尺的方状区域。在法术持续时间内。该区域变为困难地形。\n油脂出现时，站在其范围内的每个生物必须进行一次敏捷豁免，豁免失败则失足倒地。进入该区域或在区域内结束其回合的生物也必须进行该敏捷豁免，豁免失败则失足倒地。",
    "source": "PHB"
  },
  {
    "id": "spell.1.GuidingBolt",
    "name": "光导箭",
    "english_name": "Guiding Bolt",
    "level": 1,
    "school": "塑能",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 轮",
    "description": "一道闪光快速飞向施法距离内你指定的一个生物，并对该目标进行一次远程法术攻击检定。命中时，目标受 4d6 的光耀伤害。由于目标身上闪耀着秘法的微光，在施法者下个回合结束前，对该目标发动的下一次攻击检定具有优势。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，伤害就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.1.HailofThorns",
    "name": "棘雹术",
    "english_name": "Hail of Thorns",
    "level": 1,
    "school": "咒法",
    "classes": [
      "游侠"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术终止前进行的下一次远程武器攻击命中时会从你的远程武器或弹药中创造出棘刺，并形成一片棘刺之雨。除了攻击产生的正常效果外，受攻击的目标及目标身边 5 尺范围内的所有生物还必须进行一次敏捷豁免，豁免失败者将受到 1d10 点穿刺伤害，豁免成功则伤害减半。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，伤害就增加 1d10（最大伤害 6d10）。",
    "source": "PHB"
  },
  {
    "id": "spell.1.HealingWord",
    "name": "治愈真言",
    "english_name": "Healing Word",
    "level": 1,
    "school": "塑能",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊"
    ],
    "castingTime": "1 附赠动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你指定施法距离内一个你能看见的生物并恢复其生命值，恢复量等于 1d4+你的施法属性调整值。该法术对构装体和不死生物无效。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，治疗量就增加 1d4 点。",
    "source": "PHB"
  },
  {
    "id": "spell.1.HellishRebuke",
    "name": "炼狱叱喝",
    "english_name": "Hellish Rebuke",
    "level": 1,
    "school": "塑能",
    "classes": [
      "邪术师"
    ],
    "castingTime": "1 反应，当 60 尺内一个你能看见的生物对你造成伤害时执行。",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你伸指一点，伤害你的生物立刻被炼狱的烈焰包围。该生物必须进行一次敏捷豁免，豁免失败则受到 2d10 点火焰伤害，豁免成功则伤害减半。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，伤害就增加 1d10。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Heroism",
    "name": "英雄气概",
    "english_name": "Heroism",
    "level": 1,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "圣武士"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你触碰一个自愿生物使其充满勇气。该生物直至法术终止前免疫恐慌，且它将在其每回合开始时获得临时生命值，其数值等于你的施法属性调整值。法术终止时，目标失去所有来自该法术的临时生命值。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，就可以额外指定一个目标。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Hex",
    "name": "脆弱诅咒",
    "english_name": "Hex",
    "level": 1,
    "school": "惑控",
    "classes": [
      "邪术师"
    ],
    "castingTime": "1 附赠动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一只风干的蝾螈眼"
    },
    "duration": "专注，至多 1 小时",
    "description": "你对施法距离内一个你能看见的一个生物施加诅咒。直到法术终止前，你对命中该目标的任意攻击都将额外造成 1d6 点黯蚀伤害。此外，你在施展该法术的同时选择一项属性，使该目标进行所选属性的属性检定时具有劣势。\n如果目标在法术终止前 HP 降至 0，则你可以在法术终止前后续的某一回合中使用一个附赠动作诅咒另一个生物。\n对受术目标施展法术 移除诅咒remove curse 后可以提前终止该法术。\n升环施法效应：使用三环或四环法术位施展该法术时，其专注可以维持至多 8 小时。使用五环或更高法术位施展该法术时，其专注可以维持至多 24 小时。",
    "source": "PHB"
  },
  {
    "id": "spell.1.HuntersMark",
    "name": "猎人印记",
    "english_name": "Hunter's Mark",
    "level": 1,
    "school": "预言",
    "classes": [
      "游侠"
    ],
    "castingTime": "1 附赠动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 小时",
    "description": "你指定施法距离内一个你能看见的生物并以魔法标记其作为你的猎物。直至法术终止前，你每次以武器攻击命中该目标时都会额外造成 1d6 点伤害，且每当你为寻找目标生物而进行感知（察觉）或感知（生存）检定时都具有优势。如果在法术结束前目标 HP 降至 0，则你可以在法术结束前的后续某一个回合中用一个附赠动作标记另一个生物。\n升环施法效应：你使用三环或四环法术位施展该法术时，该法术的专注可以至多维持 8 小时。你使用五环或更高法术位施展该法术时，该法术的专注可以至多维持 24 小时。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Identify",
    "name": "鉴定术",
    "english_name": "Identify",
    "level": 1,
    "school": "预言",
    "classes": [
      "仪式；吟游诗人",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 分钟",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一颗价值至少 100gp 的珍珠和一根猫头鹰羽毛"
    },
    "duration": "立即",
    "description": "你指定一个物件，并在施法过程中一直与其保持接触。如果该物件是魔法物品或其他附有魔力的物件，则你将知晓其属性和使用方式，以及了解是否需要与之同调。若它是充能物品则你将得知它现存的可用次数。你还可以发现是否有法术正影响该物件，以及可能存在的法术效应具体来自哪项法术。如果目标由法术所创，则你将知晓具体来自哪项法术。\n如果你施法过程中一直接触的是一生物，则你将知晓其是否受法术影响，及产生影响的法术效应具体来自哪项法术。",
    "source": "PHB"
  },
  {
    "id": "spell.1.IllusoryScript",
    "name": "迷幻手稿",
    "english_name": "Illusory Script",
    "level": 1,
    "school": "幻术",
    "classes": [
      "仪式；吟游诗人",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "触及",
    "components": {
      "verbal": false,
      "somatic": true,
      "material": "价值至少 10gp 的铅料墨水，作为该法术的耗材"
    },
    "duration": "10 日",
    "description": "你在羊皮纸，纸张或是其他适合书写的材质上书写文字并对其施加一个强力的幻象。其效应将持续至法术终止。\n文件对于你和你施法时所指定的生物而言是一份普通的文件，文件内容即是以你的笔迹传达你写下手稿时想要传达的一切意义。而对于所有其他阅读者而言，该文件看起来就像由难懂的未知文字或魔法文字所书写。此外，你还可以使该文件呈现出完全不同的信息，使其看起来是用另一种笔迹或者语言所书写，不过你必须懂得该语言。\n如果法术被解除，则幻象和原始手稿一同消失不见。\n拥有真实视觉的生物可以读出其内被隐藏的信息。",
    "source": "PHB"
  },
  {
    "id": "spell.1.InflictWounds",
    "name": "致伤术",
    "english_name": "Inflict Wounds",
    "level": 1,
    "school": "死灵",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你对触及范围内一个生物发动一次近战法术攻击。命中时，目标受到 3d10 点黯蚀伤害。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，伤害就增加 1d10。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Jump",
    "name": "跳跃术",
    "english_name": "Jump",
    "level": 1,
    "school": "变化",
    "classes": [
      "德鲁伊",
      "游侠",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一只蚱蜢的后腿"
    },
    "duration": "1 分钟",
    "description": "你触碰一个生物，并使该生物的跳跃距离在法术持续时间内增至三倍。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Longstrider",
    "name": "大步奔行",
    "english_name": "Longstrider",
    "level": 1,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "游侠",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一撮泥土"
    },
    "duration": "1 小时",
    "description": "你触碰一个生物，该目标速度在法术持续时间内增加 10 尺。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，你就可以额外指定一个目标。",
    "source": "PHB"
  },
  {
    "id": "spell.1.MageArmor",
    "name": "法师护甲",
    "english_name": "Mage Armor",
    "level": 1,
    "school": "防护",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块鞣制过的皮革"
    },
    "duration": "8 小时",
    "description": "你触碰一个未着装护甲的自愿生物，使其受一个保护性魔法力场环绕直至法术终止。目标的基础 AC 变为 13+它的敏捷调整值。目标着装护甲或你以一个动作解散该法术后法术随之终止。",
    "source": "PHB"
  },
  {
    "id": "spell.1.MagicMissile",
    "name": "魔法飞弹",
    "english_name": "Magic Missile",
    "level": 1,
    "school": "塑能",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你创造三枚由魔法力场形成的闪光飞镖，并让每发飞镖命中施法距离内你能看见的指定生物。每发飞镖对目标造成 1d4+1 的力场伤害。所有飞镖将同时命中目标，而你还可以指定它们击中同一个目标或是分别击中几个目标。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，该法术就会多制造出一支飞镖。",
    "source": "PHB"
  },
  {
    "id": "spell.1.ProtectionfromEvilandGood",
    "name": "防护善恶",
    "english_name": "Protection from Evil and Good",
    "level": 1,
    "school": "防护",
    "classes": [
      "牧师",
      "圣武士",
      "邪术师",
      "法师；TCE：德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "圣水或者银和铁的粉末，作为该法术的耗材"
    },
    "duration": "专注，至多 10 分钟",
    "description": "在法术终止前，你触碰的一个自愿生物获得针对以下这些类型生物的防护：异怪、天界生物、元素生物、精类生物、邪魔和不死生物。\n该防护提供以下增益：该类生物对目标生物进行的攻击检定具有劣势；目标不会被该类生物魅惑，恐慌或附身；如果目标已被该类生物影响而陷入魅惑、恐慌，或被附身，则目标之后进行对抗相关效应的豁免检定时具有优势。",
    "source": "PHB"
  },
  {
    "id": "spell.1.PurifyFoodandDrink",
    "name": "净化食粮",
    "english_name": "Purify Food and Drink",
    "level": 1,
    "school": "变化",
    "classes": [
      "仪式；牧师",
      "德鲁伊",
      "圣武士",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你指定施法距离内一点，净化指定点周围半径 5 尺球状区域内的非魔法饮食品，并驱除其浸染的所有毒素和疾病。",
    "source": "PHB"
  },
  {
    "id": "spell.1.RayofSickness",
    "name": "致病射线",
    "english_name": "Ray of Sickness",
    "level": 1,
    "school": "死灵",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "一道恶心的浅绿射线朝施法距离内一个生物射去。你对目标进行一次远程法术攻击。若命中，则目标受到 2d8 的毒素伤害且必须进行一次体质豁免，豁免失败则目标陷入中毒，该中毒效应持续至你的下一回合结束。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Sanctuary",
    "name": "庇护术",
    "english_name": "Sanctuary",
    "level": 1,
    "school": "防护",
    "classes": [
      "牧师",
      "奇械师"
    ],
    "castingTime": "1 附赠动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块银镜"
    },
    "duration": "1 分钟",
    "description": "你的法术保护一个施法距离内的生物不受攻击。在法术终止前，任何试图对受保护者进行攻击或对受保护者施放伤害性法术的生物都必须进行一次感知豁免。豁免失败则该生物必须选定一个新目标，否则将失去本次的攻击或法术。该法术不能保护受术者免受范围效应（如爆炸或火球）的影响。\n若受保护生物发动一次攻击，施展一道影响敌人的法术，或是对任何其他生物造成伤害，则该法术随之终止。",
    "source": "PHB"
  },
  {
    "id": "spell.1.SearingSmite",
    "name": "炽焰斩",
    "english_name": "Searing Smite",
    "level": 1,
    "school": "塑能",
    "classes": [
      "圣武士；TCE：游侠"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术持续时间内下一次用近战武器攻击命中某个生物时将在武器上闪现出白热的光芒。该攻击对目标造成额外的 1d6 点火焰伤害，并点燃目标。直至法术终止前，目标在自己每一回合开始时都要进行一次体质豁免。豁免失败则受到 1d6 点火焰伤害。豁免成功则法术终止。如果目标或其身边 5 尺内的另一个生物用一个动作来扑灭其身上的火焰，或有其他某种效果熄灭了火焰（例如目标跳入水中），则法术终止。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，最初一次攻击造成的额外伤害就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Shield",
    "name": "护盾术",
    "english_name": "Shield",
    "level": 1,
    "school": "防护",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 反应，当你被攻击命中或被作为魔法飞弹的目标时执行",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 轮",
    "description": "一道看不见的力场制护盾浮现在你身旁，保护着你。在你的下一回合开始前，你的 AC 具有+5 加值（在触发该法术的攻击之前生效），并且不会受到魔法飞弹的伤害。",
    "source": "PHB"
  },
  {
    "id": "spell.1.ShieldofFaith",
    "name": "虔诚护盾",
    "english_name": "Shield of Faith",
    "level": 1,
    "school": "防护",
    "classes": [
      "牧师",
      "圣武士"
    ],
    "castingTime": "1 附赠动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块写有神圣文字的羊皮纸"
    },
    "duration": "专注，至多 10 分钟",
    "description": "围绕着施法距离内你指定的一个生物出现一片闪着微光的魔法力场。使目标在法术持续时间内 AC 获得+2 加值。",
    "source": "PHB"
  },
  {
    "id": "spell.1.SilentImage",
    "name": "无声幻影",
    "english_name": "Silent Image",
    "level": 1,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "少量羊毛"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你创造一个影像，其形象来自一个大小不超过边长 15 尺立方体的物件，生物或其他的可视现象。影像出现在施法距离内你能看见的一处位置并在法术持续时间内持续存在。该影像是纯粹的视觉影像；它不会被听觉，嗅觉或其他感官感受到。\n你可以用动作将影像移动到施法距离内的另一个位置。影像改变位置时，你可以改变影像的外观使其移动得更自然。例如，如果你创造了一个生物的影像并移动它，则你可以改变影像，使它看起来就像是在走路。\n由于影像无法被碰到，任何与该影像进行的物理互动都会暴露其幻象的本质。一个生物用其动作调查影像时，它可以进行一次对抗法术豁免 DC 的智力（调查）检定，以判定是否看穿幻象。辨出幻象的生物可以看破该影像，在该生物看来会透过影像看到其背后的事物。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Sleep",
    "name": "睡眠术",
    "english_name": "Sleep",
    "level": 1,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一把细沙，玫瑰花瓣，或一只蟋蟀"
    },
    "duration": "1 分钟",
    "description": "该法术使一些生物陷入魔法造成的沉睡中。掷一次 5d8；其结果为受该法术影响生物的生命值总数。你指定施法距离一点，该点周围 20 尺区域内的生物以剩余生命值由小至大的顺序受法术影响（生效时忽略昏迷生物）。\n计算受法术影响生物时，从剩余生命值最低的生物开始逐个计算。每个受术生物均陷入昏迷，直至法术终止。睡眠者受到伤害也会惊醒，又或者由其他人以一个动作将其摇醒或打醒。法术掷骰的生命值总数减去一个受术生物的生命值后，余数再用以计算生命值稍高者是否受法术影响。生物剩余生命值，必须小于等于该余数法术才能成功影响该生物。\n不死生物以及免疫魅惑效果的生物不受该法术影响。\n升环施法效应：使用二环或更高法术位施展该法术时，使用的法术位每比一环高一环，法术的掷骰就增加 2d8。",
    "source": "PHB"
  },
  {
    "id": "spell.1.SpeakwithAnimals",
    "name": "动物交谈",
    "english_name": "Speak with Animals",
    "level": 1,
    "school": "预言",
    "classes": [
      "仪式；吟游诗人",
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "10 分钟",
    "description": "你在法术持续时间内获得理解野兽并与其沟通的能力。许多野兽智力不高，因此它们的认知水平相当有限，但它们至少能向你提供关于周围地域和怪物的情报，包括任何它们现在以及在前一日内察觉到的东西。你也许可以说服野兽帮你一些小忙，是否成功则由 DM 来判断。",
    "source": "PHB"
  },
  {
    "id": "spell.1.TashasHideousLaughter",
    "name": "塔莎狂笑术",
    "english_name": "Tasha's Hideous Laughter",
    "level": 1,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一些小甜饼以及一片空中飘荡的羽毛"
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内一个你能看见的生物，如果该生物可受法术影响，则一切事物在该生物眼中都变得滑稽可笑，使它开始狂笑起来。目标必须进行一次感知豁免，豁免失败则俯身倒地，并在法术持续时间内陷入失能状态且无法起立。该效应对智力为 4 或更低的生物无效。\n目标在其每回合结束或受到伤害时，可以再进行一次感知豁免。豁免成功则法术终止。再进行豁免时，如果是因受到伤害所致则该次豁免具有优势。",
    "source": "PHB"
  },
  {
    "id": "spell.1.TensersFloatingDisk",
    "name": "谭森浮碟术",
    "english_name": "Tenser's Floating Disk",
    "level": 1,
    "school": "咒法",
    "classes": [
      "仪式；法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一滴水银"
    },
    "duration": "1 小时",
    "description": "指定施法距离内一处你能看见的未被占据空间，并在该处创造一个圆盘状的碟型水平力场。浮碟直径 3 尺，厚 1 寸，悬浮在离地 3 尺的半空。其可以在法术持续时间内持续存在，并至多可负载 500 磅重量。如果放在浮碟上的物件重量超过 500 磅，则该法术立即终止，浮碟上的所有东西也将掉落地面。\n浮碟在你 20 尺内时静止不动。只要你与其距离超过20尺，浮碟就会跟随你移动，并保持在你的 20 尺范围内。浮碟可以自由通过崎岖地形，上落的阶梯，斜坡面或者诸如此类的地面，但它不能越过高差超过 10 尺的地面。例如，浮碟不能越过一个 10 尺深的坑；如果浮碟造在坑里，则它也无法离开这个深坑。\n如果你和浮碟间的距离超过 100 尺（通常是因为它受障碍所阻无法跟上你），则法术随即终止。",
    "source": "PHB"
  },
  {
    "id": "spell.1.ThunderousSmite",
    "name": "雷鸣斩",
    "english_name": "Thunderous Smite",
    "level": 1,
    "school": "塑能",
    "classes": [
      "圣武士"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术持续时间内下一次用近战武器攻击命中某个生物时将发出雷霆巨响，并使你周围 300 尺都能听见该响声。该攻击对目标造成额外 2d6 点雷鸣伤害，如果目标是一个生物，则它必须要进行一次力量豁免，豁免失败则目标往远离你的方向推动 10 尺并应击倒地。",
    "source": "PHB"
  },
  {
    "id": "spell.1.Thunderwave",
    "name": "雷鸣波",
    "english_name": "Thunderwave",
    "level": 1,
    "school": "塑能",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身（15 尺立方）",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "一道雷鸣波从你的身体向外扫去。在以你为源点 15 尺立方区域内的每个生物必须进行一次体质豁免。豁免失败者将受到 2d8 点雷鸣伤害，并被推离 10 尺。豁免成功则伤害减半，且不会被推离。\n此外，所有完全位于该区域内且没被固定住的物件都将被自动推离 10 尺。而该法术还会发出方圆 300 尺内都能听见的雷霆巨响。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，法术的伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.1.UnseenServant",
    "name": "隐形仆役",
    "english_name": "Unseen Servant",
    "level": 1,
    "school": "咒法",
    "classes": [
      "仪式；吟游诗人",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一根线和一块木头"
    },
    "duration": "1 小时",
    "description": "该法术创造出一个隐形、无心智、无实体的中体型力场。你可以在法术终止前命令它进行简单的工作。该仆从被创造出来后出现在施法距离内一处未被占据空间的地面上。其 AC 为 10，生命值为 1，力量为 2，且不能攻击。若仆从的生命值降至 0，则法术终止。\n你可以自己每个回合内以一个附赠动作对仆役下达精神命令，使它移动最多15尺并与一个物件进行互动。仆从可以做人类仆从能做到的简单工作，例如拿取东西、打扫卫生、修补东西、叠衣服、点火、上菜、倒酒等。一旦你下达了命令，仆从就会尽全力去做你命令它做的工作直至完成，并在完成任务后静待你的下一个命令。\n如果你命令仆从做一件需要它离开你身边 60 尺的工作，则法术随之终止。",
    "source": "PHB"
  },
  {
    "id": "spell.1.WitchBolt",
    "name": "巫术箭",
    "english_name": "Witch Bolt",
    "level": 1,
    "school": "塑能",
    "classes": [
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "从一棵被闪电击中的树上取来的树枝"
    },
    "duration": "专注，至多 1 分钟",
    "description": "一支缠绕着碎裂魔力的蓝色能量长矛射向施法距离内的一个生物，并在你与目标之间生成一道持久的闪电弧。对目标生物进行一次远程法术攻击。若命中，则目标受到 1d12 点闪电伤害。在法术持续时间内，你在每个自己的回合中可以用一个动作直接对目标造成 1d12 点闪电伤害。如果你执行动作做其他任何事情，法术将随即终止。此外，如果目标离开法术的施法距离或相对你处于全身掩护状态，法术也将随即终止。\n升环施法效应：使用二环或更高法术位施展该法术时，你使用的法术位每比一环高一环，法术的初始伤害就增加 1d12。",
    "source": "PHB"
  },
  {
    "id": "spell.1.WrathfulSmite",
    "name": "激愤斩",
    "english_name": "Wrathful Smite",
    "level": 1,
    "school": "塑能",
    "classes": [
      "圣武士"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术持续时间内，下一次近战武器攻击命中时，对目标造成额外 1d6 点心灵伤害。此外，如果目标是一个生物，则其必须进行一次感知豁免。豁免失败则目标生物将在法术终止前持续陷入对你恐慌的状态。该生物可以用一个动作来尝试重拾斗志，并进行一次对抗该法术 DC 的感知检定，检定成功则法术即刻终止。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Aid",
    "name": "援助术",
    "english_name": "Aid",
    "level": 2,
    "school": "防护",
    "classes": [
      "牧师",
      "圣武士",
      "奇械师；TCE：吟游诗人",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小片白布"
    },
    "duration": "8 小时",
    "description": "你的法术增强了盟友的韧性和毅力。在施法距离内指定至多三个生物。每个目标的生命值上限和当前生命值在法术持续时间内提高 5 点。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，每个目标的生命值上限和当前生命值就额外提高 5 点。",
    "source": "PHB"
  },
  {
    "id": "spell.2.AlterSelf",
    "name": "变身术",
    "english_name": "Alter Self",
    "level": 2,
    "school": "变化",
    "classes": [
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "你变换了自身形态。施法时，从以下选项中选择其一生效，并维持至其持续时间结束。你还可以在持续时间内以一个动作在选项间切换。\n水生适应｜Aquaatic Adaptation。你长出鳃和蹼以适应水中行动。你可以在水下呼吸，并且获得等同于步行速度的游泳速度。\n改变外貌｜Change Appearance。你改变了自己的外貌。你可以自行设定自己的外观：包括身高、体重、面部细节、声线、头发长短、肤色以及（可能具有的）独特外貌特征。你可以让自己看起来像是其他种族，但你的角色数值不会改变。你无法改变体型或是基础身体轮廓。例如，如果你两足行动，就不能变为四足生物。你可以在持续时间内以一个动作改变这些外貌细节。\n天生武器｜Natural Weapons。你长出尖牙锐爪、棘刺长角，或是其他类型的一种自选的天生武器。所选的天生武器可以使你的徒手打击造成 1d6 的钝击、挥砍或穿刺伤害，且你视为具有徒手打击的熟练项。另外，该天生武器视为魔法武器，且你在使用它进行的攻击检定和伤害掷骰均具有+1 加值。",
    "source": "PHB"
  },
  {
    "id": "spell.2.AnimalMessenger",
    "name": "动物信使",
    "english_name": "Animal Messenger",
    "level": 2,
    "school": "惑控",
    "classes": [
      "仪式；吟游诗人",
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一点食物"
    },
    "duration": "24小时",
    "description": "该法术令你可以利用动物传递信息。在施法距离内指定一只你能看见的微型野兽（比如松鼠squirrel，蓝松鸦blue jay，或是蝙蝠bat）。再选择一个你曾造访过的地点，然后描述收信人的基本信息，如“一个穿着城镇守卫制服的男人或女人”或“一个戴着尖顶帽子的红发矮人”。最后再说出一段不超过二十五个单词的信息。目标野兽将会在法术持续时间内前往你选定的地点。会飞的信使 24 小时内可移动 50 里，不会飞的信使只能移动 25 里。\n信使抵达目的地后，会模仿你的声音把信息传递给你描述的人。信使只会把信息传递给符合你描述的人。如果法术持续时间内信使未能抵达目的地则信息将遗失，而曾作为信使的野兽将自行寻路返回你施法的地点。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，其法术持续时间就增加 48 小时。",
    "source": "PHB"
  },
  {
    "id": "spell.2.ArcaneLock",
    "name": "秘法锁",
    "english_name": "Arcane Lock",
    "level": 2,
    "school": "防护",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "至少价值 25gp 的金粉，作为该法术的耗材"
    },
    "duration": "直到被解除",
    "description": "你触碰关上的一扇门，一扇窗，一个箱子或其他出入口，并使目标在法术持续时间内保持锁闭状态。施法时，你还可以设定允许你和其他若干生物正常打开该物件。你还可以设置一条密语，在该锁闭物件 5 尺内念出密语时，秘法锁将被压制 1 分钟。该物件只有在法术被压制、被解除，或物件本身遭破坏时才能打开。对物件施放敲击术 将使其秘法锁 法术在 10 分钟内受压制。\n受该法术影响的物件更难被撬开或破坏。对其进行破坏或撬锁时，其相应 DC 增加 10。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Augury",
    "name": "卜筮术",
    "english_name": "Augury",
    "level": 2,
    "school": "预言",
    "classes": [
      "仪式；牧师；TCE：德鲁伊",
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一套绘有标记的短棒，骨头，或类似的象征物，价值至少 25gp"
    },
    "duration": "立即",
    "description": "借由镶嵌宝石的小短棒，龙骨，卡牌或是其他占卜器具，你从异界存在处获得对某件你计划在接下来的 30 分钟内做的事的预示。DM 从下列预示中选取一个：\n吉兆：预示着好的结果。\n凶兆：预示着坏的结果。\n吉凶并存：预示着结果既有好的方面，也有坏的方面。\n无：预示着结果并无明显的好坏分别。\n此法术不会将任何可能影响结果的偶然事件考虑在内。例如，额外施放某个法术，或是得到／失去某个同伴。\n若你在两次长休之间使用两次或更多次的卜筮术，则法术有概率会给出随机的结果。此概率从第二次施展起每次累计 25％。具体结果由 DM 暗骰决定。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Barkskin",
    "name": "树肤术",
    "english_name": "Barkskin",
    "level": 2,
    "school": "变化",
    "classes": [
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一把橡树皮"
    },
    "duration": "专注，至多 1 小时",
    "description": "你触碰一个自愿生物，并使目标的皮肤在法术终止前呈现粗糙的树皮状外观。期间目标无论着装何种护甲，其 AC 将不会降至 16 以下。",
    "source": "PHB"
  },
  {
    "id": "spell.2.BeastSense",
    "name": "野兽知觉",
    "english_name": "Beast Sense",
    "level": 2,
    "school": "预言",
    "classes": [
      "仪式；德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "1 分钟",
    "description": "你触碰一只自愿的野兽。在法术持续时间内，你可以使用动作来将自己的视觉和听觉切换至受术野兽的感官，随后直至你再使用动作来恢复正常的知觉。\n通过野兽的感官感知四周时，你还会获得该生物本身具有的特殊感官，不过你对本体周围的状况视为等同于同时陷入目盲和耳聋状态。\n目盲术／耳聋术｜Blindness/Deafness\n二环 死灵（吟游诗人、牧师、术士、法师）\n施法时间：1 动作\n施法距离：30 尺\n法术成分：V\n你尝试令敌人目盲或耳聋。在施法距离内指定一个你能看见的生物，并迫使其进行一次体质豁免。豁免失败者将在法术持续时间内陷入目盲或耳聋（由你选择）。目标可以在每次自己回合结束时再进行一次体质豁免，豁免成功则法术终止。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，就可以多指定一个目标。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Blur",
    "name": "朦胧术",
    "english_name": "Blur",
    "level": 2,
    "school": "幻术",
    "classes": [
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你的身影变得模糊，并在别人眼里闪烁不定。在法术持续时间内，任何生物对你发动的攻击检定具有劣势。不依赖视觉（例如盲视）或可以看穿幻象（例如真实视觉）的攻击者免疫此效应。",
    "source": "PHB"
  },
  {
    "id": "spell.2.BrandingSmite",
    "name": "印记斩",
    "english_name": "Branding Smite",
    "level": 2,
    "school": "塑能",
    "classes": [
      "圣武士"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术终止前的下一次武器攻击命中某生物时武器闪烁如明星，并对目标额外造成 2d6 点光耀伤害。如果目标处于隐形状态，则该斩击将使其可见，且因其身上散发出 5 尺半径的微光而无法隐形，直至该法术终止。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，法术的伤害就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.2.CalmEmotions",
    "name": "安定心神",
    "english_name": "Calm Emotions",
    "level": 2,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你试图抑制一群人的强烈情感。指定施法距离内一点，并迫使该点周边半径20尺球状区域内的每个类人生物进行一次魅力豁免。受术生物可以自愿放弃豁免。豁免失败者将由你选择以下两项效应之一对其生效。\n你可以选择压制任何使目标受魅惑或恐慌的效应。法术终止时，若被压制效应持续时间仍未完结，则该效应继续生效。\n或者，你也可以选择使目标改变对某个你所指定生物的态度，由敌对变为冷漠。如果目标被攻击，或者被有害法术影响，又或者发现其盟友受到损害，则此效应终止。法术终止时，除非 DM 另行裁决，否则目标的态度恢复敌对。",
    "source": "PHB"
  },
  {
    "id": "spell.2.CloudofDaggers",
    "name": "匕首之云",
    "english_name": "Cloud of Daggers",
    "level": 2,
    "school": "咒法",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小片玻璃"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在施法距离内指定一点，以该点为中心将一处边长 5 尺的立方区域充满旋转的匕首。生物在区域内开始其回合，或者在一个回合内第一次进入该区域时将受到 4d4 的挥砍伤害。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，法术的伤害就增加 2d4。",
    "source": "PHB"
  },
  {
    "id": "spell.2.ContinualFlame",
    "name": "不灭明焰",
    "english_name": "Continual Flame",
    "level": 2,
    "school": "塑能",
    "classes": [
      "牧师",
      "法师",
      "奇械师；TCE：德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "价值 50gp 的红宝石粉末，作为该法术的耗材"
    },
    "duration": "直至被解除",
    "description": "你在所触碰物件上制造如火把一样亮的火焰，使其看上去与一般火焰无异，不过其并不会发热，也不需要燃烧氧气。你可以掩盖或隐藏它，但无法将之闷熄或扑灭。",
    "source": "PHB"
  },
  {
    "id": "spell.2.CordonofArrows",
    "name": "警戒箭阵",
    "english_name": "Cordon of Arrows",
    "level": 2,
    "school": "变化",
    "classes": [
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "5尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "四支或更多的箭或矢"
    },
    "duration": "8 小时",
    "description": "你将四发非魔法的弹药（弓箭或弩矢皆可）插在施法距离内的地面并在其上附加魔法让其防御一片区域。直至法术终止前，箭矢将警戒其周围 30 尺的区域，任何生物在一回合内第一次进入该区域或者在该区域结束其回合时，其中一发箭矢将飞起并射向该生物。该生物必须进行一次敏捷豁免，豁免失败者将受到 1d6 点穿刺伤害，而射向目标的一发箭矢也将随之被摧毁。当所有箭矢都以该方式摧毁后，法术将随之终止。\n施展该法术时，你可以指定任意的生物使法术的警戒效应将其排除在外。\n升环施法效应：使用三环或更高法术位施展该法术时，你的法术位每比二环高一环，可生效的弹药数量就增加两发。",
    "source": "PHB"
  },
  {
    "id": "spell.2.CrownofMadness",
    "name": "疯狂冠冕",
    "english_name": "Crown of Madness",
    "level": 2,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你指定施法距离内一名你能看见的类人生物，并迫使该生物进行一次感知豁免，豁免失败则该生物将在法术持续时间内受你魅惑。以该方式被魅惑的生物其头顶上将出现铁质锯齿的扭曲头冠，而其眼神则闪烁着疯狂。\n受魅惑目标在其每个回合里，必须在移动前对身边一个你在心中指定的生物发动一次近战攻击。如果你并没有为其指定目标，或者其触及范围内并没有目标，则该生物在本回合里可以按正常状态行动。\n施法后你在每个自己回合里必须用你的动作维持对目标的控制，否则法术将提前终止。另外，受术目标还可以在每个自己回合结束时再进行一次感知豁免，豁免成功则法术终止。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Darkness",
    "name": "黑暗术",
    "english_name": "Darkness",
    "level": 2,
    "school": "塑能",
    "classes": [
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": "蝙蝠毛发，以及一滴沥青或一小块煤"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你在施法距离内指定一点，并在法术持续时间内使魔法的黑暗充斥该点半径 15 尺的球状区域。该黑暗会绕过拐角扩散，连拥有黑暗视觉的生物也无法看穿这这种黑暗，而非魔法的光照也无法在区域内提供照明。\n如果你将法术目标设置于你正持握或未被穿着携带的物件，则黑暗将从物件周围漫出并跟随物件移动。将该物件完全掩盖时（比如用碗或头盔盖住），也会将其漫出的黑暗隔绝。\n如果法术区域与任何2环或更低环阶法术创造的光亮区域重叠，则这些造光的法术将被解除。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Darkvision",
    "name": "黑暗视觉",
    "english_name": "Darkvision",
    "level": 2,
    "school": "变化",
    "classes": [
      "德鲁伊",
      "游侠",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一点胡萝卜干或一个玛瑙"
    },
    "duration": "8 小时",
    "description": "你触碰一个自愿的生物，并给予其在黑暗中视物的能力。在法术持续时间内，该生物将拥有 60 尺的黑暗视觉。",
    "source": "PHB"
  },
  {
    "id": "spell.2.DetectThoughts",
    "name": "侦测思想",
    "english_name": "Detect Thoughts",
    "level": 2,
    "school": "预言",
    "classes": [
      "吟游诗人",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块铜片"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术持续时间内能读取特定生物的思想。你可以在施展法术时，或者在法术持续时间内以一个动作实现该效应。此时，受术生物必须身处你 30 尺内并且能被你看见，而你必须对其集中注意力。如果该生物智力为 3 或更低，或者不懂任何语言，则该生物不受影响。\n你最初了解的是该生物的表面想法，一般就是其此刻正想着的东西。你可以使用动作继续深入一个生物的思想，也可以用动作转移读心的目标。如果你继续深入，则目标必须进行一次感知豁免。豁免失败时，你了解到他的逻辑推理（如果有的话）、情绪状态以及他头脑中的一些大事（比如忧虑、挚爱和仇恨的事物）。豁免成功时，本法术终止。无论哪种情况，目标都会知道你正在窥探他的思想。除非你转移注意力到其他生物，否则他可以在其回合内使用动作进行一次智力检定，并与你的智力检定作对抗；生物胜出对抗时，法术终止。\n向目标提问可以引导目标的思想历程，因此此法术在审讯中特别有效。\n你还能用此法术侦测看不见的有思维生物。你可以在施展法术时，或者在法术持续时间内以一个动作实现该效应。此时，你可以搜寻 30 尺内的思想。该法术可以穿透大部分障碍，但仍会被 2 尺厚的石质，或 2 寸厚的金属质，或一层薄铅质材料所阻隔。你无法侦测到智力为 3 或更低的生物，也无法侦测不懂任何语言的生物。\n以该方式侦测到一个生物后，你可以在法术持续时间内如上文所述的读取其思想。你甚至不需要看见该生物，但其必须在其 30 尺内。",
    "source": "PHB"
  },
  {
    "id": "spell.2.EnhanceAbility",
    "name": "强化属性",
    "english_name": "Enhance Ability",
    "level": 2,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊",
      "术士",
      "奇械师；TCE：游侠",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一撮铁粉"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你触碰一个生物，并为其附上魔力强化。选择下列效应之一生效，而目标将在法术终止前维持该法术效应。\n熊之坚韧Bear's Endurance。 目标进行体质检定时具有优势。目标同时获得 2d6 的临时生命值，并维持至法术终止。\n牛之悍力Bull's Strength。 目标进行力量检定时具有优势，且其负重翻倍。\n猫之优雅Cat's Grace。 目标进行敏捷检定时具有优势。另外，目标在非失能状态下不会因 20 尺以内的坠落而伤害。\n鹰之威仪Eagle's Splendor。 目标进行魅力检定时具优势。\n狐之狡黠Fox's Cunning。 目标进行智力检定时具有优势。\n枭之睿智Owl's Wisdom。 目标进行感知检定时具有优势。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，就可以多指定一个目标。\n变巨术／缩小术｜Enlarge / Reduce\n二环 变化（术士、法师、奇械师；TCE：吟游诗人、德鲁伊）\n施法时间：1 动作\n施法距离：30 尺\n法术成分：V、S、M（一撮铁粉）\n你使施法距离内一个你能看见的生物或物件的大小发生改变，并在法术持续时间内维持其效应。指定一个生物或一件没有被着装携带的物品，如果目标并非自愿，则其可以进行一次体质豁免，豁免成功则法术无效。\n如果目标是生物，则其着装物和携带物的尺寸也随之变化。随后任何从该生物身上脱离的物品都会恢复其正常大小。\n变巨Enlarge。目标身形尺寸变为两倍，重量变为八倍。其体型也因此提高一级，比如中型变为大型。如果目标所处空间不够容纳其变巨后的身形，则该生物或物品在有限空间下会尽可能地达到最大尺寸。在法术终止前，目标进行力量检定和力量豁免时具有优势。目标的武器也会随之变大，而使用这变大的武器发动攻击时，将造成额外 1d4 的伤害。\n缩小Reduce。目标身形尺寸变为一半，重量变为八分之一。其体型也因此降低一级，比如中型变为小型。在法术终止前，目标进行力量检定和力量豁免时具有劣势。目标的武器也会随之变小，而使用这变小的武器攻击时，将减少 1d4 的伤害（不会使伤害值低于1）。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Enthrall",
    "name": "注目术",
    "english_name": "Enthrall",
    "level": 2,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "邪术师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 分钟",
    "description": "你编排了一段使人分心的话语，并指定施法距离内任何你能看见且可以听到你声音的生物作为法术目标。目标生物必须进行一次感知豁免并成功通过。任何不能被魅惑的生物进行该豁免时直接判定为豁免成功。如果你或你的同伴正在和该生物战斗，则其进行该豁免时具有优势。豁免失败时，目标对除你以外其他生物进行的感知（察觉）检定具有劣势，直到法术终止或目标听不到你为止。如果你陷入失能状态或不能再说话，则该法术终止。",
    "source": "PHB"
  },
  {
    "id": "spell.2.FindSteed",
    "name": "寻获坐骑",
    "english_name": "Find Steed",
    "level": 2,
    "school": "咒法",
    "classes": [
      "圣武士"
    ],
    "castingTime": "10 分钟",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你召唤一只拥有超凡智力、力量和忠诚的灵体作为坐骑，同时与其立长期的契约。坐骑显现在施法距离内未被占据的空间，其外形由你从以下形态中选择：战马、矮种马、骆驼、驼鹿、獒犬（DM 也可以允许你选择其他动物作坐骑）。坐骑拥有你所选形态的属性数据，但他实际上属于天界生物，精类生物或邪魔的一种（由你选择）而不是通常类型。另外，如果你的坐骑智力为 5 或更低，则其智力变为 6，同时能听懂一门你掌握的语言。\n不管是否在战斗中，坐骑都能为你提供帮助，而你们之间的契约让你们行动更为紧密。你乘上该坐骑时，所有你施展的只以自身为目标的法术同时也影响该坐骑。\n该坐骑生命值降至 0 时消失不见，且不留下任何物质残余。你也可以随时用一个动作解散该坐骑使其消失。此后，每当你重新施展该法术时，将满生命值的召唤同一匹坐骑显现。\n坐骑在你身边 1 里内时，你可以与其以心灵感应的方式互相交流。\n你不能用该法术同时拥有一匹以上的坐骑，你可以随时用一个动作将坐骑从契约中解放，并使其消失不见。",
    "source": "PHB"
  },
  {
    "id": "spell.2.FindTraps",
    "name": "寻找陷阱",
    "english_name": "Find Traps",
    "level": 2,
    "school": "预言",
    "classes": [
      "牧师",
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你感测到施法距离范围内，且在你视线范围内的任何陷阱。该法术的目标“陷阱”包括任何可能引发的，对你有害或对你构成妨碍的突发性意外效应，而其性质也正是其创作者的意图。因此该法术可以感测警报术alarm和守卫刻文glyph of warding的效应区域，也可以发现某个陷坑型机械陷阱。不过它不能揭示地板的某处脆弱点，或天花板的某处不稳定位置，又或是某个隐藏的阴沟。\n该法术只单纯揭示陷阱的存在。你并不能以此一一定位每个存在的陷阱，不过你可以知晓所感测到陷阱其能够构成危害的大致形式。",
    "source": "PHB"
  },
  {
    "id": "spell.2.FlameBlade",
    "name": "火焰刀",
    "english_name": "Flame Blade",
    "level": 2,
    "school": "塑能",
    "classes": [
      "德鲁伊；TCE：术士"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "漆树的叶子"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你在一只空闲的手上召唤出一把炽热的刀刃。该到刀刃的尺寸和形状近似于一把弯刀并在法术持续时间内维持存在。当你放下刀刃时其将消失不见，但你可以用一个附赠动作重新将其唤出。\n你可以用你的动作以该热刃发动一次近战法术攻击。若命中，则目标受到3d6点火焰伤害。\n烈焰刀向周围提供半径 10 尺的明亮光照，以及该范围外 10 尺的微光光照。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高两环，其伤害就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.2.FlamingSphere",
    "name": "炽焰法球",
    "english_name": "Flaming Sphere",
    "level": 2,
    "school": "咒法",
    "classes": [
      "德鲁伊",
      "法师；TCE：术士"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块兽脂、一小撮硫磺石和少量铁粉"
    },
    "duration": "专注，至多 1 分钟",
    "description": "一个直径 5 尺的球状火焰显现在施法距离内你指定的一处未被占据空间，并在法术持续时间内维持存在。任何生物在火球周围 5 尺内结束其回合时必须进行一次敏捷豁免。豁免失败者将受到 2d6 点火焰伤害，豁免成功则伤害减半。\n你可以用一个附赠动作将火球移动 30 尺。如果你将火球推向某生物，则该生物必须进行抵抗火球伤害的豁免，而火球在该回合内停止移动。\n移动火球时，你可以指引它越过不高于 5 尺的障碍，或者越过不宽过 10 尺的陷坑。火球将点燃任何未被着装或携带的可燃物件，并向其周围散发出半径 20 尺的明亮光照，以及该范围外 20 尺的微光光照。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，其伤害就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.2.GentleRepose",
    "name": "遗体防腐",
    "english_name": "Gentle Repose",
    "level": 2,
    "school": "死灵",
    "classes": [
      "仪式；牧师",
      "法师；TCE：圣武士"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一撮盐，以及尸体每只眼睛上必须放置的铜币，铜币必须在法术持续时间内一直保留在眼睛上"
    },
    "duration": "10 日",
    "description": "你触碰一具尸体或其他遗骸。目标将在法术持续时间内受保护并免于腐烂且无法转变为不死生物。\n该法术同样可以有效的延长复活目标的时间限制，因为受该法术影响下度过的时间不计入法术如死者复活raise dead的时间限制内。",
    "source": "PHB"
  },
  {
    "id": "spell.2.GustofWind",
    "name": "造风术",
    "english_name": "Gust of Wind",
    "level": 2,
    "school": "塑能",
    "classes": [
      "德鲁伊",
      "术士",
      "法师；TCE：游侠"
    ],
    "castingTime": "1 动作",
    "range": "自身（60尺线状）",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一粒豆科植物的种子"
    },
    "duration": "专注，至多 1 分钟",
    "description": "在法术持续时间内，一道长 60 尺，宽 10 尺的线状强风从你吹向你指定的方向。每个在线状区域内开始其回合的生物必须进行一次力量豁免，豁免失败则沿着风向被推开 15 尺。\n任何生物在线状区域内向你移动时，其每移动 1 尺必须花费 2 尺的移动力。\n强风吹散区域内的毒气或雾气，并吹熄蜡烛、火把及不受保护的其他类似火焰。而有保护的火焰（比如提灯）则会剧烈摇晃并有 50%的机率被吹熄。\n在法术终止前，你可以在自己回合内以一个附赠动作改变线状风道的方向。",
    "source": "PHB"
  },
  {
    "id": "spell.2.HeatMetal",
    "name": "灼热金属",
    "english_name": "Heat Metal",
    "level": 2,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一片铁片和一团火焰"
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内一件你能看见的人造金属物件（例如一把金属武器，或者一套金属质的重甲或中甲），并使该物件变得炽热。施展该法术时，任何与该物件有物理接触的生物均受到 2d8 的火焰伤害。直到法术终止前，你都可以在你随后的每个回合在以一个附赠动作来再次造成此伤害。\n若握持或着装该物件的生物因此受到伤害，则该生物必须通过一次体质豁免，否则如果这个生物能丢下该物件，该生物就必须丢下该物件。如果该物件没有被丢下，则直至你的下一回合开始为止，该生物进行攻击检定和属性检定时具有劣势。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.2.HoldPerson",
    "name": "人类定身术",
    "english_name": "Hold Person",
    "level": 2,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一片直的小铁片"
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内一个你能看见的类人生物。该目标必须进行一次感知豁免，豁免失败则其在法术持续时间内陷入麻痹。目标在其每回合结束时可以再进行一次感知豁免，豁免成功则终止其身上该法术的效应。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，你就可以额外指定一个类人生物。指定目标时，每个目标生物必须身处其他目标 30 尺范围内。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Invisibility",
    "name": "隐形术",
    "english_name": "Invisibility",
    "level": 2,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一根包裹在阿拉伯胶中的睫毛"
    },
    "duration": "专注，至多 1 小时",
    "description": "你触碰的一个生物变为隐形并维持至法术终止。目标的穿着物和携带物只要保持在其身上也随之保持隐形状态。如果目标发动攻击或施展法术，则该法术终止。\n升环施法效应：使用三环或更高的法术位施展该法术时，你使用的法术位每比二环高一环就可以额外指定一个目标。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Knock",
    "name": "敲击术",
    "english_name": "Knock",
    "level": 2,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "指定施法距离内一个你能看见的物件。该物件可以是一扇门，一个盒子，一个箱子，一副镣铐，一把挂锁，或是一个其他的通过魔法或普通手段来防止被打开的物件。\n被一把普通锁锁住的目标其锁会被解开，被卡死的目标会被松开，被闩住的目标会被打开。如果目标被多把锁锁住，则只有一把锁会被打开。\n若你指定的目标被法术秘法锁arcane locks锁住，则该秘法锁被压制 10 分钟，这段时间内目标可被正常开启和关闭。\n施展该法术时，受术目标会发出一声响亮的敲击声，其声响最远 300 尺内都能听见。",
    "source": "PHB"
  },
  {
    "id": "spell.2.LesserRestoration",
    "name": "次级复原术",
    "english_name": "Lesser Restoration",
    "level": 2,
    "school": "防护",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊",
      "圣武士",
      "游侠",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你触碰一个生物，并终止正影响它的一项疾病或一种状态。该状态可以是目盲，耳聋，麻痹或中毒其一。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Levitate",
    "name": "浮空术",
    "english_name": "Levitate",
    "level": 2,
    "school": "变化",
    "classes": [
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个小皮圈，或者一段弯成长柄杯状的金线"
    },
    "duration": "专注，至多 10 分钟",
    "description": "指定施法距离内你能看见的一个生物或松散放置的物件，使其垂直上升至多 20 尺，并在该处维持悬浮直至持续时间结束。该法术可悬浮一个重量至多 500 磅的目标。一个非自愿的生物可以对法术进行一次体质豁免以避免受其影响。\n目标只能通过推或拉一个固定的物件或平面（例如一面墙或者天花板）来进行移动，这种移动方式视为等同于攀爬。你可以在自己回合里将目标的悬浮高度向上或向下改变至多 20 尺：如果你自身就是该法术的目标，则你可以进行上升和下降并将其作为你移动的一部分；如果你不是该法术的目标，则你可以使用动作来移动目标，但目标必须始终处于你的施法距离内。\n法术终止时，仍处于空中的目标会缓缓飘落到地面。",
    "source": "PHB"
  },
  {
    "id": "spell.2.LocateAnimalsorPlants",
    "name": "动植物定位术",
    "english_name": "Locate Animals or Plants",
    "level": 2,
    "school": "预言",
    "classes": [
      "仪式；吟游诗人",
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块寻血猎犬的皮毛"
    },
    "duration": "立即",
    "description": "你点名或描述一种野兽或植物，并专注于附近的自然之音。如果 5 里内存在该类生物，你将知晓其中最接近个体与你的相对方位和距离。",
    "source": "PHB"
  },
  {
    "id": "spell.2.LocateObject",
    "name": "物件定位术",
    "english_name": "Locate Object",
    "level": 2,
    "school": "预言",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊",
      "圣武士",
      "游侠",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一根分叉的树枝"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你点名或描述一个你熟悉的物件。只要该物件与你相距不超过 1000 尺，你就会感测到该物件的方位。如果该物件正在移动，则你也将知晓其移动的方向。\n该法术可定位一个你认识的特定物件，不过你需要在 30 尺内近距离看到过该物件至少一次；或者它也可定位特定的一类物件（如某种服装、珠宝、家具、工具或武器）中距你最近个体。\n如果有任意厚度的铅，即使只是薄薄一片铅片阻挡了你与被定位物件间的通路，则该物件也无法被该法术所定位。",
    "source": "PHB"
  },
  {
    "id": "spell.2.MagicMouth",
    "name": "魔嘴术",
    "english_name": "Magic Mouth",
    "level": 2,
    "school": "幻术",
    "classes": [
      "仪式；吟游诗人",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 分钟",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块蜂窝和至少价值 10gp 的翡翠粉，作为该法术的耗材"
    },
    "duration": "直至解除",
    "description": "你将一段信息植入施法距离内的一个物件中，其信息会在满足预设条件时说出。指定一个你能看见且未被另一生物穿着或携带的物件。然后，你可以使用至多 10 分钟来传达这段不超过 25 个单词的信息。最后再来设定触发法术传达信息的事件。\n预设的事件发生时，目标物件上的魔法将形成一张嘴，并用与你相同的声音和音量复述所存储的信息。如果你指定的目标本身有一张嘴或者类似嘴的结构（例如雕像的嘴），则魔法嘴将生成在该嘴结构的位置，使其看起来如同是物件的嘴在说话一样。施展该法术时，你可以让法术在传达过信息后随即终止，或者也可以让法术一直持续并在每次被预设条件触发时进行复述。\n你所决定的触发条件可以很概括也可以很具体，不过你只能根据目标物件 30 尺内的视觉或听觉状况来设定条件。例如，你可以命令魔嘴在任何生物移动至物件 30 尺内时说出信息，或者当其 30 尺内有银铃响起时说出信息。",
    "source": "PHB"
  },
  {
    "id": "spell.2.MagicWeapon",
    "name": "魔化武器",
    "english_name": "Magic Weapon",
    "level": 2,
    "school": "变化",
    "classes": [
      "圣武士",
      "法师",
      "奇械师；TCE：游侠",
      "术士"
    ],
    "castingTime": "1 附赠动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "你触碰一件非魔法武器，并使其在法术持续时间内成为魔法武器。该武器进行攻击检定和伤害掷骰时具有+1 加值。\n升环施法效应：使用四环或更高法术位施展该法术时，加值增加至+2。使用六环或更高法术位施展该法术时，加值增加至+3。",
    "source": "PHB"
  },
  {
    "id": "spell.2.MelfsAcidArrow",
    "name": "马友夫强酸箭",
    "english_name": "Melf's Acid Arrow",
    "level": 2,
    "school": "塑能",
    "classes": [
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "90尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "磨碎的大黄叶和一只蝰蛇的胃囊"
    },
    "duration": "立即",
    "description": "一支闪烁的绿色箭矢疾速的飞向一个施法距离内的目标，并爆散成强酸水雾。法术对目标发动一次远程法术攻击。若命中，则目标立即受到 4d4 点强酸伤害，并在其下一回合结束时再受到 2d4 点强酸伤害。若未命中，则酸液箭矢溅射到了目标，造成初始伤害一半的伤害，并且不会在下一回合结束时造成伤害。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，其初始伤害和后续伤害就各增加 1d4。",
    "source": "PHB"
  },
  {
    "id": "spell.2.MirrorImage",
    "name": "镜影术",
    "english_name": "Mirror Image",
    "level": 2,
    "school": "幻术",
    "classes": [
      "术士",
      "邪术师",
      "法师；TCE：吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 分钟",
    "description": "三个你自身的幻象分身出现在你的位置上。直至法术终止前，分身都会随你移动，并模仿你的动作和位置变换，使人无法追踪判断哪一个是你的真身。分身存在时，你可以用动作来解散这些幻象分身。\n在法术持续时间内，每当一个生物以你为攻击目标时，掷一次d20决定该次攻击击中的是否其中一个分身。\n如果你有三个分身，则你必须掷出 6 或更高数值才能使目标的攻击命中分身。如果你有两个分身，则你必须掷出 8 或更高数值。如果你有一个分身，则你必须掷出 11 或更高数值。\n分身的 AC 等于 10+你的敏捷调整值。单次攻击命中分身时相应分身立即被摧毁。分身会被一发命中它的攻击摧毁，且无视所有其他的伤害和效应。三个分身全部被毁后该法术终止。\n如果一个生物无法视物，或者它可以依靠视觉之外的其它感官（例如盲视），又或者它可以如同真实视觉一样洞察幻象，则该法术无法影响该生物。",
    "source": "PHB"
  },
  {
    "id": "spell.2.MistyStep",
    "name": "迷踪步",
    "english_name": "Misty Step",
    "level": 2,
    "school": "咒法",
    "classes": [
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你短暂地被银白的雾气所笼罩，传送到至多 30 尺内一个你能看见且未被占据的位置。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Moonbeam",
    "name": "月华之光",
    "english_name": "Moonbeam",
    "level": 2,
    "school": "塑能",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "几粒月籽藤种子和一块乳白色的长石"
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内一点，以该点为中心半径 5 尺、高 40 尺的柱状区域内沐浴在一束淡淡的银光中。直至法术终止前，柱状区域内充满微光光照。\n生物在一个回合内第一次进入该区域，或在该区域内开始其回合时，将被幽灵般的火焰吞噬并引起剧烈的灼痛。该生物必须进行一次体质豁免，豁免失败则受到 2d10 的光耀伤害，豁免成功则伤害减半。\n变形生物进行该豁免时具有劣势，而如果它豁免失败，则将立即恢复其原始形态，而它离开该法术的光照前都无法变形成其他形态。\n你在施展该法术后的每个自己回合内可以用一个动作将华光向任意方向移动至多 60 尺。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，其伤害就增加 1d10。",
    "source": "PHB"
  },
  {
    "id": "spell.2.NystulsMagicAura",
    "name": "涅斯图魔法灵光",
    "english_name": "Nystul's Magic Aura",
    "level": 2,
    "school": "幻术",
    "classes": [
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块方形丝绸"
    },
    "duration": "24 小时",
    "description": "你在触及的一个生物或一个物件身上设置一个幻术，使得预言法术会揭示出关于该目标的错误信息。目标可以是一个自愿的生物，或者是一个未被其他生物着装或携带的物件。\n施展此法术时，你选择下列效应中的一个或两个。效应在持续时间内一直存在。如果你每天都对同一个生物或物件施展此法术且每次都选择相同的效应，持续 30 天，幻术就会一直存在直到被解除。\n虚假灵光｜False Aura。针对目标的灵光侦测法术和魔法效应（例如法术侦测魔法）将显示不同的信息。你可以使一个非魔法物件显示出魔法，一个魔法物件显示出非魔法；或者改变物件的魔法灵光，使其显示出由你选择的特定魔法学派的灵光。当你对物件设置该效应时，你可以使这种虚假的魔法向任何使用此物品的生物显示出来。\n伪装｜Mask。针对目标生物类别的侦测法术和魔法效应（例如圣武士的“神圣感知”，或法术徽记术的触发条件）将显示不同的信息。你选择一种生物类别，其他法术和魔法效应将会认为目标生物属于该类别或者属于该类别所属阵营。",
    "source": "PHB"
  },
  {
    "id": "spell.2.PasswithoutTrace",
    "name": "行动无踪",
    "english_name": "Pass without Trace",
    "level": 2,
    "school": "防护",
    "classes": [
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一片槲寄生叶子烧成的灰和一小枝云杉"
    },
    "duration": "专注，至多 1 小时",
    "description": "阴影和沉默的幕障从你身上辐射而出，并隔绝任何对你和你的同伴进行的探测。你指定自身 30 尺内的若干生物（包括你自己）。在法术持续时间内，目标生物进行敏捷（隐匿）检定时具有+10 加值，且不能被魔法手段以外的方式追踪。拥有该加值的生物走过某处时不会留下足印或其他踪迹。",
    "source": "PHB"
  },
  {
    "id": "spell.2.PhantasmalForce",
    "name": "魅影之力",
    "english_name": "Phantasmal Force",
    "level": 2,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一点羊毛"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你指定施法距离内一个你能够看见的生物，并创造一个根植于其意识的幻象。该目标必须进行一次智力豁免。豁免失败时，你创造出一个不大于 10 尺立方且只能被目标感知到的幻影物件，生物或其他你指定的可见现象。该创造将持续存在直至法术终止。且该法术对不死生物和构装生物无效。\n该幻象包括声音、温度和其他反应因素，同样只对目标显现。\n目标可以用其动作进行一次对抗该法术豁免 DC 的智力（调查）检定来检查这个幻象。检定成功则目标意识到该幻象是一个幻术，法术随即终止。\n目标受法术影响时会认定幻象是真实的，并且会合理化任何与幻象产生的不合逻辑的互动结果。例如，某个受术生物试图走过一座跨越峡谷的幻影桥时踏出第一步就从桥上坠落。如果目标在坠落中幸存，它会仍然相信该桥是真实存在的，并且会提出自己坠落的一些其他解释比如被推了一把，自己滑倒了，或者可能有一阵强风把他吹了下来。\n受法术影响的目标对幻象的真实性深信不疑，甚至还会受到幻象的直接伤害。一个生物模样的幻象可以攻击目标。比如，显现为火焰，酸池或岩浆的幻象能够烧伤目标。在你的每一回合，如果目标在幻象的伤害区域内或在其显现的生物周边 5 尺攻击范围内，则幻象可以对目标造成 1d6 点心灵伤害。而此时目标则会感觉该伤害与幻象所显现的类型相符。",
    "source": "PHB"
  },
  {
    "id": "spell.2.PrayerofHealing",
    "name": "治疗祷言",
    "english_name": "Prayer of Healing",
    "level": 2,
    "school": "塑能",
    "classes": [
      "牧师；TCE：圣武士"
    ],
    "castingTime": "10 分钟",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你指定施法距离内至多六个你能看见的生物，并使其每人恢复 2d8+你施法属性调整值的生命值。该法术对不死生物和构装体不产生任何效应。\n升环施法效应：当你使用三环或更高法术位施展该法术时，你使用的法术位每比二环高一环，治疗量就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.2.ProtectionfromPoison",
    "name": "防护毒素",
    "english_name": "Protection from Poison",
    "level": 2,
    "school": "防护",
    "classes": [
      "牧师",
      "德鲁伊",
      "圣武士",
      "游侠",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 小时",
    "description": "你触碰一个生物。如果处于中毒状态，则中和其所受毒素。如果目标身上具有超过一种毒素，则选择你所了解一种或随机选择其一进行中和。\n在法术持续时间内，目标对抗中毒所豁免具有优势，并且对毒素伤害具有抗性。",
    "source": "PHB"
  },
  {
    "id": "spell.2.RayofEnfeeblement",
    "name": "衰弱射线",
    "english_name": "Ray of Enfeeblement",
    "level": 2,
    "school": "死灵",
    "classes": [
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你从指尖射出一道让人衰弱的黑色能量射线并射向施法距离内的一个生物。你对目标进行一次远程法术攻击。若命中，则目标在法术终止前，其使用基于力量的武器进行攻击时只造成一半伤害。\n目标在其每回合结束时可以进行一次对抗该法术的体质豁免。豁免成功则法术终止。",
    "source": "PHB"
  },
  {
    "id": "spell.2.RopeTrick",
    "name": "魔绳术",
    "english_name": "Rope Trick",
    "level": 2,
    "school": "变化",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "玉米粉和一卷羊皮纸绞成得纸圈"
    },
    "duration": "1 小时",
    "description": "你触碰一段长度不超过 60 尺的绳子。绳的一端会向上升起，直到整条绳索都垂直于地面挂在空中。绳子的上端存在一个隐形的入口，其通往一个法术持续时间内一直存在的异次元空间。\n该异次元空间可以从绳子的顶端进入，其内至多可容纳八个中型或更小的生物。魔绳可以被拉回到此空间里，此时从异次元空间外面就再看不到这条绳索。\n攻击和法术都无法从异次元空间的入口进出，但空间内的生物可以通过入口看到外面的景象，就如同在绳索的位置有一个 3 尺×5 尺大小的窗口一样。\n法术终止时，异次元空间内的一切东西都会掉出来。",
    "source": "PHB"
  },
  {
    "id": "spell.2.ScorchingRay",
    "name": "灼热射线",
    "english_name": "Scorching Ray",
    "level": 2,
    "school": "塑能",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你创造出三道火焰的射线，随即将其射向施法距离内的目标。你可以把全部射线对准同一个目标，也可以瞄准不同目标。每道射线需要你分别进行一次远程法术攻击。若命中，则目标受到 2d6 点火焰伤害。\n升环施法效应：使用三环或更高法术位施展该法术时，使用的法术位每比二环高一环，你就能多创造出一道射线。",
    "source": "PHB"
  },
  {
    "id": "spell.2.SeeInvisibility",
    "name": "识破隐形",
    "english_name": "See Invisibility",
    "level": 2,
    "school": "预言",
    "classes": [
      "吟游诗人",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一撮滑石粉和少量银粉"
    },
    "duration": "1 小时",
    "description": "你能在法术持续时间内能看见任何隐形的生物和物件，如同其处于正常可见状态一样。你还能够看见以太位面，以太位面的生物和物件在你眼中会以幽灵般的半透明形状显现。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Shatter",
    "name": "粉碎音波",
    "english_name": "Shatter",
    "level": 2,
    "school": "塑能",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一片云母"
    },
    "duration": "立即",
    "description": "你指定施法距离内一点，并在其上忽然爆发一阵震耳欲聋的噪音。以该点为中心半径 10 尺球状区域内的所有生物必须要进行一次体质豁免。豁免失败者将受到 3d8 点雷鸣伤害；豁免成功则伤害减半。以无机物质（如石头，水晶或金属）构成的生物进行该豁免时具有劣势。\n如果法术的范围内有一个不被任何生物着装携带的非魔法物件，则它也要受到该伤害。\n升环施法效应：使用三环或更高法术位施展该法术时，使用的法术位每比二环高一环，法术伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Silence",
    "name": "沉默术",
    "english_name": "Silence",
    "level": 2,
    "school": "幻术",
    "classes": [
      "仪式；吟游诗人",
      "牧师",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "你指定施法距离内一点，以该点为中心半径 20 尺的球状区域在法术持续时间内将无法产生任何声音，且外界的声音也无法进入该区域内。任何完全位于该区域内的生物和物件都将免疫雷鸣伤害，而任何生物在完全位于该区域内时都将陷入耳聋。此外，该区域内无法施展需要言语成分的法术。",
    "source": "PHB"
  },
  {
    "id": "spell.2.SpiderClimb",
    "name": "蛛行术",
    "english_name": "Spider Climb",
    "level": 2,
    "school": "变化",
    "classes": [
      "术士",
      "邪术师",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一滴沥青和一只蜘蛛"
    },
    "duration": "专注，至多 1 小时",
    "description": "你触碰一个自愿的生物，并使其在法术终止前能够在垂直表面上下或横向移动，其甚至可以在天花板上倒挂着移动而不需要用到双手。另外，目标获得与步行速度相等的攀爬速度。",
    "source": "PHB"
  },
  {
    "id": "spell.2.SpikeGrowth",
    "name": "荆棘丛生",
    "english_name": "Spike Growth",
    "level": 2,
    "school": "变化",
    "classes": [
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "150尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "七根棘刺或七根嫩枝，每根都要削尖"
    },
    "duration": "专注，至多 10 分钟",
    "description": "以施法距离内一点为中心周围 20 尺的地面扭曲变形，大片坚硬的棘刺破土而出。该区域在法术持续时间内视为困难地形。而生物进入该区域或在其中移动时，其每移动 5 尺就要受到 2d4 点穿刺伤害。\n法术导致的地面变形经过刻意的掩饰，使其看起来并无异样。如果生物在你施展该法术时不能看见该区域，则它必须进行一次感知（察觉）检定，检定成功则能发现该区域隐藏的危险。",
    "source": "PHB"
  },
  {
    "id": "spell.2.SpiritualWeapon",
    "name": "灵体武器",
    "english_name": "Spiritual Weapon",
    "level": 2,
    "school": "塑能",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 附赠动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 分钟",
    "description": "你在施法距离内的一点创造出一把浮空的虚幻武器，并使其持续到法术持续时间结束或你再次施展该法术为止。施展该法术时，你可以对该武器周围 5 尺内的一个生物发动一次近战法术攻击。若命中，则目标受到 1d8+你的施法属性调整值的力场伤害。\n你可以在自己回合内以一个附赠动作让该武器移动至多 20 尺，并再对它周围 5 尺内的一个生物发动一次同样的攻击。\n该武器的外形由你决定。而如果施法的牧师侍奉的是一位和特定武器有关的神（例如圣库斯伯特St.Cuthbert的钉头锤、托尔Thor的锤子），则该法术创造出武器的外形与该武器类似。\n升环施法效应：使用三环或更高法术位施展该法术时，你使用的法术位每比二环高两环，法术的伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Suggestion",
    "name": "暗示术",
    "english_name": "Suggestion",
    "level": 2,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": "一条蛇舌，加上一小块蜂巢或一滴甜油"
    },
    "duration": "专注，至多 8 小时",
    "description": "你以魔法影响施法距离内一个你能看见的生物，并对其施以某种行动暗示（至多以一两句话的形式）。由你指定的受术目标必须能听到并理解你的话语。而不能被魅惑的生物也将免疫此效应。你的暗示言辞必须能让其行为听起来合乎情理。要求生物刺伤它自己，自己撞向矛尖上，让它自我牺牲，或是让它做任何明显有害的行为都会直接取消该法术所产生的效应。\n该目标必须进行一次感知豁免，豁免失败者将尽其所能地从事你所描述的行为。你所暗示的行为可能会在法术持续时间内始终一直进行。而如果你所暗示的活动可以用更短的时间完成，则此法术会在目标完成了你的要求后随即终止。\n你也可以描述一种在持续时间内发生的特定状况，作为触发特殊行为的条件。例如，你可以暗示一队士兵将所有的钱交给他们遇到的第一个乞丐。如果在法术终止前条件始终没有满足，则指定的行为不会被执行。\n若你或你同伴中任何人伤害了受术者，则该法术随即终止。",
    "source": "PHB"
  },
  {
    "id": "spell.2.WardingBond",
    "name": "守护之链",
    "english_name": "Warding Bond",
    "level": 2,
    "school": "防护",
    "classes": [
      "牧师；TCE：圣武士"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一对单个价值至少 50gp 的铂金戒指，并由你和目标在法术持续时间内一直佩戴"
    },
    "duration": "1 小时",
    "description": "你触碰一个自愿的生物，并让该法术的魔力保护它。该法术在你和目标之间建立一种神秘的连接，并一直持续至法术终止。目标位于你身边 60 尺内时，其 AC 和豁免检定具有+1 加值，且对所有伤害具有抗性。此外，每当目标受到伤害时，你也会受到同样的伤害。\n如果你的生命值降至 0，或你与目标距离超过 60 尺，则该法术终止。如果该法术被再次施放于两个已被连接生物中的任意一方，则原法术即时终止。你还可以用一个动作主动解除该法术。",
    "source": "PHB"
  },
  {
    "id": "spell.2.Web",
    "name": "蛛网术",
    "english_name": "Web",
    "level": 2,
    "school": "咒法",
    "classes": [
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "少量蜘蛛网"
    },
    "duration": "专注，至多一小时",
    "description": "你在施法距离内指定一点，并召唤出一大片粘厚的网状物。蛛网覆盖以该点为源点的 20 尺立方区域，并在法术持续时间内维持存在。蛛网使该区成为困难地形并造成轻度遮蔽。\n如果蛛网没有被固定在两个固体中间（例如墙和树）或跨在一片地板、墙壁、天花板中间，则你召唤出的蛛网会自动坍塌，而导致法术在你的下一回合开始时终止。摊在平面上的蛛网深度为 5 尺。\n任何在蛛网中开始其回合或在其回合中进入蛛网的生物必须进行一次敏捷豁免。豁免失败者将被束缚在网中，直至其离开蛛网或挣脱束缚。\n被蛛网束缚的生物可以用一个动作尝试挣脱。该生物必须进行一次对抗法术豁免 DC 的力量检定，检定成功则不再被束缚。\n这些蛛网都是可燃物。每 5 尺立方的蛛网触及明火时将在 1 轮内被烧尽。而任何在燃烧区域内开始其回合的生物将因此受 2d4 点火焰伤害。",
    "source": "PHB"
  },
  {
    "id": "spell.2.ZoneofTruth",
    "name": "诚实之域",
    "english_name": "Zone of Truth",
    "level": 2,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "牧师",
      "圣武士"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "10 分钟",
    "description": "你创造一个抵御谎言的魔法区域，该区域以施法距离内一点为中心，覆盖该点周边 15 尺半径的球状区域。在法术终止前，生物在其回合内第一次进入该区域，或在该区域内开始其回合时，必须进行一次魅力豁免。豁免失败者在该区域内不能故意说谎。而你可以知晓每个受术生物的豁免是成功与否。\n受影响的生物可以意识到该效果的存在，因此它可以主动回避回答那些通常会以谎言答复的问题。该生物在回答问题时可以闪烁其词、避重就轻，但只要不超出实话的范围就没有问题。",
    "source": "PHB"
  },
  {
    "id": "spell.3.AnimateDead",
    "name": "活化死尸",
    "english_name": "Animate Dead",
    "level": 3,
    "school": "死灵",
    "classes": [
      "牧师",
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一滴血，一块肉，以及一点骨灰"
    },
    "duration": "立即",
    "description": "该法术创造一个不死生物仆从。在施法距离内指定一具中型或小型类人生物遗骨或遗体，并以该法术将污秽的虚假生命力量注入其中，将之唤起为一个不死生物。如果你选择的是遗骨，则目标变为骷髅skeleton；选择的是遗体则变为僵尸zombie。该生物的具体游戏资料由 DM 掌控。\n在你的任一回合内，你可以使用一个附赠动作并以精神命令操纵 60 尺内任何你用此法术唤起的生物（如果你操纵多个生物，则你的命令可以同时传达给它们全部或是其中的某几个，不过只能使用同一种命令）。你决定被操纵生物下回合的动作和移动。或者，你也可以选择下达宽泛的命令（比如守护某个房间或走廊）。没有接受到你命令的生物则只会对敌对生物作出自卫行为。一旦被下达命令，该生物会持续执行命令直到任务完成。\n这些受操纵生物只会在 24 小时内服从你的命令。如果你在当前的 24 小时时间段终止前再施展该法术，则你对这些生物的操纵时间再延长 24 小时。法术的此种用法只能延长你对至多四个你使用此法术所创造生物的控制时间，而不会创造新的生物。\n升环施法效应：使用四环或更高法术位施展该法术时，你使用的法术位每比三环高一环，就会多唤起两只不死生物，或是多延长对两只不死生物的控制。你无法用同一具骸骨或遗体唤起多个不死生物。",
    "source": "PHB"
  },
  {
    "id": "spell.3.AuraofVitality",
    "name": "活力灵光",
    "english_name": "Aura of Vitality",
    "level": 3,
    "school": "塑能",
    "classes": [
      "圣武士；TCE：牧师",
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "自身（30 尺半径）",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你身上发出的治愈能量形成半径 30 尺的灵光。法术持续时间内灵光将以你为中心随你移动。你可以用一个附赠动作为灵光范围内的一名生物（包括你自己）恢复 2d6 的生命值。",
    "source": "PHB"
  },
  {
    "id": "spell.3.BeaconofHope",
    "name": "希望信标",
    "english_name": "Beacon of Hope",
    "level": 3,
    "school": "防护",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "该法术带来活力与希望。在施法距离内指定任意数量的生物，并使其在法术持续时间内进行的感知豁免和死亡豁免具有优势。此外，其获得治疗时均以骰子最大值来决定其恢复的生命值。",
    "source": "PHB"
  },
  {
    "id": "spell.3.BestowCurse",
    "name": "降咒",
    "english_name": "Bestow Curse",
    "level": 3,
    "school": "死灵",
    "classes": [
      "吟游诗人",
      "牧师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你触碰一名生物。该生物必须进行一次感知豁免并成功通过，否则将在法术持续时间内被诅咒。施展法术时，你从以下诅咒选项选择其一：\n选择一个属性值。受诅咒影响时，目标进行该属性的豁免检定和属性检定时具有劣势。\n受诅咒影响时，目标对你进行的攻击检定具有劣势。\n受诅咒影响时，目标必须在其每回合开始时进行一次感知豁免，豁免失败则浪费掉该回合的动作。\n受诅咒影响时，你的攻击和法术对目标额外造成 1d8 的黯蚀伤害。\n法术移除诅咒可终止此法术的效应。DM 也可以让你选择其他诅咒，但它们不该比上表更强大。诅咒效应最终由 DM 裁定。\n升环施法效应：使用四环或更高法术位施展该法术时，法术的持续时间变为：专注，至多 10 分钟。使用五环或更高法术位时，变为 8 小时。使用七环或更高法术位时，变为 24 小时。使用九环法术位时，法术将持续到被解除。使用五环或更高法术位施展此法术时无需在其持续时间内维持专注。",
    "source": "PHB"
  },
  {
    "id": "spell.3.BlindingSmite",
    "name": "致盲斩",
    "english_name": "Blinding Smite",
    "level": 3,
    "school": "塑能",
    "classes": [
      "圣武士"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术终止前的下一次武器攻击命中某生物时将爆发出强光，并对目标额外造成 3d8 点光耀伤害。此外，目标必须进行一次体质豁免，豁免失败则陷入目盲直至法术终止。\n受法术目盲效应影响的生物在其每个回合结束时可以再进行一次体质豁免，豁免成功则其目盲状态终止。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Blink",
    "name": "闪现术",
    "english_name": "Blink",
    "level": 3,
    "school": "变化",
    "classes": [
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 分钟",
    "description": "你在法术持续时间内每次自己回合结束时掷一次 d20。如果结果大于等于 11，则你从所处位面消失并出现在以太位面（如果你已经在以太位面，则法术失败且被消耗）。在你每次自己回合开始以及法术终止时，如果你身处以太位面，则你在之前消失的位置 10 尺内自选一处未被占据且你能看见的空间出现。如果范围内没有未被占据的空间，则你随机出现在最近的一处未被占据空间里。你可以用一个动作解除该法术。\n身处以太位面时，你可以听见和看见原位面，但只限于 60 尺之内，且所有事物都是黑白画面。其他生物只有当其身处以太位面时才能对你产生影响，或者被你影响。不处于以太位面的生物无法察觉你也无法和你交流，除非其具有相应的能力。",
    "source": "PHB"
  },
  {
    "id": "spell.3.CallLightning",
    "name": "召雷术",
    "english_name": "Call Lightning",
    "level": 3,
    "school": "咒法",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "你指定施法距离内，自己上方一处能看见的点，并在该处生成一片高 10 尺、半径 60 尺的柱状雷云区域。如果你无法看到空中雷云可能形成的位置，则法术失败（例如，当你身处一间不够高大的房间内时）。\n施法时，指定该雷云下一处你能看见的点。再令一束闪电从云端射向该点。在该点 5 尺内的生物必须进行一次敏捷豁免。豁免失败者将受到 3d10 点闪电伤害，豁免成功则伤害减半。直至法术终止前，你都可以在自己回合内使用动作再次发射闪电，并在攻击前指定同一点或另选一点。\n若施法时你身处室外暴风雨环境，则此法术令你得以控制空中的暴雨云而非创一朵新雷云。且法术伤害增加 1d10。\n升环施法效应：使用四环或更高法术位施展该法术时，你使用的法术位每比三环高一环，法术的伤害就增加 1d10。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Clairvoyance",
    "name": "鹰眼术",
    "english_name": "Clairvoyance",
    "level": 3,
    "school": "预言",
    "classes": [
      "吟游诗人",
      "牧师",
      "术士",
      "法师"
    ],
    "castingTime": "10 分钟",
    "range": "1 里",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "价值至少 100gp 的法器，选择聆听时用一个以珠宝装饰的号角，选择观察时用一颗玻璃眼珠"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你在施法距离内某处创造一个隐形的传感器，该处可以是你熟悉的地点（你曾到访过或看见过的地方），也可以是你不熟悉的显眼处（比如一扇门后，拐角位置或树林里）。该传感器在法术持续时间内停留在该地且无法被攻击或与之互动。\n施展该法术时，你可以选择进行观察或是聆听。你可以通过传感器以所选的感官方式感测目标空间。你也可以用一个动作在观察和聆听之间切换。\n可以看见传感器的生物（比如生物具有增益如识破隐形 see invisibility或真实视觉时）会看到检测点是一个拳头大小发着微光的半透球体。",
    "source": "PHB"
  },
  {
    "id": "spell.3.ConjureAnimals",
    "name": "动物咒唤术",
    "english_name": "Conjure Animals",
    "level": 3,
    "school": "咒法",
    "classes": [
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "你召唤野兽形态的精魄，并使其显现在施法范围内一处你能看见但未被占据的空间。选择以下选项之一作为显现的生物：\n一只挑战等级 2 或者更低的野兽\n两只挑战等级 1 或者更低的野兽\n四只挑战等级 1/2 或更低的野兽\n八只挑战等级 1/4 或更低的野兽\n每只野兽同时视为精类生物，并且在生命值降至 0 时，或者法术终止时消失不见。\n被召唤的生物对你和你的伙伴保持友善关系。每次召唤出来的所有生物视为一个团体来骰先攻，并依此获得其自己的行动回合。他们服从你发出的所有语言命令（不需要你作动作）。如果你不发出任何命令，这些生物会在敌对生物前保护自己，如果没有敌对生物则不执行任何动作。\n这些生物的具体数值由 DM 掌控。\n升环施法效应：使用更高法术位施展该法术时，选择上文所述召唤选项之一，并显现更多生物：五环法术位显现两倍生物，七环法术位显现三倍生物，九环法术位显现四倍生物。\n（注：此法术原译作“召唤动物” ，因易与后续出的《塔莎的万事坩埚》中的法术 野兽召唤术Summon Beast 混淆而改）",
    "source": "PHB"
  },
  {
    "id": "spell.3.ConjureBarrage",
    "name": "召唤箭雨",
    "english_name": "Conjure Barrage",
    "level": 3,
    "school": "咒法",
    "classes": [
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "自身（60 尺锥状）",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一发弹药或一把投掷武器"
    },
    "duration": "立即",
    "description": "你向空中射出一发非魔法的弹药或者掷出一把非魔法的投掷武器，并以之为原型向前方锥状区域内射出一片同样的武器，而这些创造出的武器将在攻击完成后消失不见。前方 60 尺锥状区域内的每个生物都必须进行一次敏捷豁免，豁免失败者将受到 3d8 点伤害，豁免成功则伤害减半。法术所造成伤害的类型与用作法术成分材料的弹药或武器相同。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Counterspell",
    "name": "法术反制",
    "english_name": "Counterspell",
    "level": 3,
    "school": "防护",
    "classes": [
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 反应，当你看见身边 60 尺范围内一个生物施展法术时执行",
    "range": "60 尺",
    "components": {
      "verbal": false,
      "somatic": true
    },
    "duration": "立即",
    "description": "你试图打断一个生物正在施展的一个法术。如果该生物正在施展三环或更低环阶法术，则其法术失败且不产生任何效应。如果该生物正在施展四环或更高环阶法术，则你以施法属性进行一次属性检定，其检定 DC 等于 10+目标法术的环阶。检定成功则目标法术失败且不产生任何效应。\n升环施法效应：使用四环或更高法术位施展该法术时，如果被打断法术的环阶不高于你所用的法术位环阶，则该目标法术直接被打断。",
    "source": "PHB"
  },
  {
    "id": "spell.3.CreateFoodandWater",
    "name": "造粮术",
    "english_name": "Create Food and Water",
    "level": 3,
    "school": "咒法",
    "classes": [
      "牧师",
      "圣武士",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你在施法距离内的地面或容器上创造 45 磅的食物和 30 加仑的水，其总量可以满足十五个类人生物或者五匹坐骑 24 小时的补给需求。食物非常清淡但营养丰富，并且如果 24 小时内不食用即会变坏。创造的水清洁可饮用且不会以该方式变质。",
    "source": "PHB"
  },
  {
    "id": "spell.3.CrusadersMantle",
    "name": "十字军披风",
    "english_name": "Crusader's Mantle",
    "level": 3,
    "school": "塑能",
    "classes": [
      "圣武士"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "神圣的能量自你身上发出并形成 30 尺半径的灵光，并为友方生物激励勇气。在法术持续时间内，灵光将以你为中心随你移动。灵光范围内的非敌对生物（包括你自己）的武器攻击命中时将额外造成 1d4 的光耀伤害。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Daylight",
    "name": "昼明术",
    "english_name": "Daylight",
    "level": 3,
    "school": "塑能",
    "classes": [
      "牧师",
      "德鲁伊",
      "圣武士",
      "游侠",
      "术士"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 小时",
    "description": "你在施法距离内指定一点，并从中释放光亮蔓延至半径 60 尺的球状区域。法术产生的光亮为区域内提供明亮光照并向其外提供 60 尺的微光光照。\n如果你将作为法术目标的点设置于你正持握或未被穿着携带的物件，则光亮将从物件周围漫出并跟随物件移动。将该物件完全掩盖时（比如用碗或头盔盖住），也会将其漫出的光亮隔绝。\n如果法术区域内有任何三环或更低环阶法术创造的黑暗，则这些造暗的法术将被解除。",
    "source": "PHB"
  },
  {
    "id": "spell.3.DispelMagic",
    "name": "解除魔法",
    "english_name": "Dispel Magic",
    "level": 3,
    "school": "防护",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊",
      "圣武士",
      "术士",
      "邪术师",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "在施法距离内指定一个生物、一个物件或一处魔法效应，并终止所有影响该目标的三环或更低环阶法术。每个影响目标的四环或更高环阶法术都需要以你的施法属性进行一次属性检定，其 DC 等于 10+目标法术的环阶，检定成功时目标法术终止。\n升环施法效应：使用四环或更高法术位施展该法术时，你直接终止目标身上小于等于该施法环阶的法术效应。",
    "source": "PHB"
  },
  {
    "id": "spell.3.ElementalWeapon",
    "name": "元素武器",
    "english_name": "Elemental Weapon",
    "level": 3,
    "school": "变化",
    "classes": [
      "圣武士",
      "奇械师；TCE：德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "你触碰的一把非魔法武器并使其变成魔法武器。选择以下伤害类型其中之一：强酸、冷冻、火焰、闪电、雷鸣。在法术持续时间内，该武器进行攻击检定时将获得+1 加值，且在命中时额外造成1d4点所选类型的伤害。\n升环施法效应：使用五环或六环法术位施展该法术时，攻击检定的加值变为+2，额外伤害变为 2d4。使用七环或更高法术位施展该法术时，攻击检定的加值变为+3，额外伤害变为 3d4。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Fear",
    "name": "恐惧术",
    "english_name": "Fear",
    "level": 3,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身（30 尺锥状）",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一片白羽毛或一颗母鸡心"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你制造一个目标最惧怕的幻象，并迫使 30 尺锥状区域内的所有生物进行一次感知豁免，豁免失败者将丢弃其所有持握物，并在法术持续时间内陷入恐慌。\n被法术恐慌的生物必须在其回合内执行疾走动作，并以此寻找最安全的路线远离施法者，直至其无路可走为止。如果该生物在施法者视线范围外结束其回合，则其可以再进行一次感知豁免，豁免成功则法术对该生物的效应终止。",
    "source": "PHB"
  },
  {
    "id": "spell.3.FeignDeath",
    "name": "假死术",
    "english_name": "Feign Death",
    "level": 3,
    "school": "死灵",
    "classes": [
      "仪式；吟游诗人",
      "牧师",
      "德鲁伊",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一把坟土"
    },
    "duration": "1 小时",
    "description": "你触碰一自愿生物并将其变得如死去一样的僵直状态。\n你可以用一个动作再次触碰该目标以终止该法术。在法术持续时间内，对目标进行的任何肉体检查和法术检测都显示目标已处于死亡状态。该状态下的目标陷入目盲以及失能状态，且其移动速度降低为 0。目标对除了心灵伤害外的所有伤害类型具有抗性。如果目标在受术时正陷入疾病或中毒状态，或者在法术生效时陷入疾病或中毒状态，则这些状态在该法术持续时间内受抑制而无效，直至法术终止时再恢复生效。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Fireball",
    "name": "火球术",
    "english_name": "Fireball",
    "level": 3,
    "school": "塑能",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小球蝙蝠粪及硫磺"
    },
    "duration": "立即",
    "description": "明亮的闪光从你的指间飞驰向施法距离内你指定的一点，并随着一声低吼迸成一片烈焰。目标点周围半径 20 尺球状区域内的每个生物必须进行一次敏捷豁免。豁免失败者将受到 8d6 点火焰伤害，豁免成功则伤害减半。\n迸发的火焰将绕过拐角扩散。并点燃区域内所有未被着装或携带的可燃物件。\n升环施法效应：使用四环或更高法术位施展该法术时，你使用的法术位每比三环高一环，其伤害就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Fly",
    "name": "飞行术",
    "english_name": "Fly",
    "level": 3,
    "school": "变化",
    "classes": [
      "术士",
      "邪术师",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "任意鸟类翅膀上的羽毛"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你触碰一个自愿生物，并使该目标在法术持续时间内获得 60 尺的飞行速度。法术终止时，如果目标仍在空中则随即坠落。\n升环施法效应：使用四环或更高法术位施展该法术时，你使用的法术位每比三环高一环，就可以额外再指定一个生物作为法术目标。",
    "source": "PHB"
  },
  {
    "id": "spell.3.GaseousForm",
    "name": "气化形体",
    "english_name": "Gaseous Form",
    "level": 3,
    "school": "变化",
    "classes": [
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小片薄纱和一缕清烟"
    },
    "duration": "专注，至多 1 小时",
    "description": "在法术持续时间内，你将触碰到的一个自愿生物连同其穿着携带物一起转化为一团云雾。如果生物的生命值降至 0 则法术终止。非实体的生物不受该效应影响。\n在该形态下，目标唯一的移动方式即是 10 尺的飞行速度。该目标可以进入并占据一个已有生物占据的空间。其拥有非魔法伤害的抗性，且进行力量、敏捷和体质豁免时具有优势。该目标可以穿过小洞、狭隙、甚至裂缝，但他会将液态物质视为固体表面。目标即使处于震慑或者失能状态时，也不会坠落并且保持在空中悬浮。\n云雾形态的目标不能讲话或操作物件，其随身携带或持握的物件不会掉落，也不能被使用或与之互动。另外，目标也不能攻击或施法。",
    "source": "PHB"
  },
  {
    "id": "spell.3.GlyphofWarding",
    "name": "守卫刻文",
    "english_name": "Glyph of Warding",
    "level": 3,
    "school": "防护",
    "classes": [
      "吟游诗人",
      "牧师",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 小时",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "熏香和至少价值 200gp 的钻石粉，作为该法术的耗材"
    },
    "duration": "直到被解除或触发",
    "description": "施展该法术时，你在某个表面（诸如桌面、地板、墙等）或某个能被关闭以隐藏符纹的物件里（诸如书本、卷轴、宝箱等）刻画一个不一定对生物造成伤害的符纹。如果你指定某个表面，则该符纹可以覆盖内径不超过 10 尺直径的区域。如果受术的物件或表面从被施法位置被移开超过 10 尺，则其符纹被破坏且法术不被触发即告终止。\n结界符纹近乎隐形，其需要以法术的豁免 DC 进行一次智力（调查）检定才能被发现。\n你在施法时设定结界符纹的触发条件。刻画于表面的符纹其最典型的触发条件包括：触碰或站立在符纹上；拿掉覆盖在符纹上的物件；进入符纹一定范围；操作符纹所在的物件等。刻画在物件内的符纹其最典型的触发条件包括：打开物件；靠近物件一定的距离；看到或阅读该符纹等。符纹一旦被触发，则该法术终止。\n你可以进一步细化触发条件，比如设定法术触发时符合特定的条件，或设定其触发者必须具备特定身体特征（身高体重等），特定生物种类（例如设定为只影响异怪或卓尔）或特定阵营。你还可以将特定条件者排除在符纹触发者之外，诸如某说出特定口令的人。\n刻画符纹时，你可以从爆炸符文和法术符纹两者中选择其一：\n爆炸符文Explosive Runes。符文被触发时将在半径 20 尺球状区域内将爆发魔法能量，并绕过角落扩散。区域内的每个生物必须进行一次敏捷豁免。豁免失败者将受到 5d8 的强酸，寒冷，火焰，闪电，或雷鸣伤害（你在制造符纹时指定），豁免成功则伤害减半。\n法术刻文Spell Glyph。你可以施展一个准备好的三环或更低环阶法术，并将其储备在所创造的符纹中。所储备法术必须以一个生物或一个区域为目标，而其以该方式施展时并不会立即生效。符文被触发时将随即施展所储备的法术。如果法术指向一个目标，则以触发符纹的生物为目标；如果法术影响一个区域，则该区域以此生物为中心；如果法术召唤敌对生物或创造伤害性质的物件或陷井，则这些造物将显现在可能靠近触发者的地方并攻击它。如果法术需要专注，则其效应将在其最大持续时间内维持。\n升环施法效应：使用四环或更高法术位施展该法术时，你使用的法术位每比三环高一环，一个爆炸符文的伤害就增加 1d8。如果你创造一个法术符纹，则其储备法术的环阶可以与你施放守卫刻文时使用的法术位相同。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Haste",
    "name": "加速术",
    "english_name": "Haste",
    "level": 3,
    "school": "变化",
    "classes": [
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一片甘草根切片"
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内一个你能看见的自愿生物。直至法术终止前，你使目标速度翻倍；其 AC 获得+2 加值；其进行敏捷豁免时具有优势；其每个回合都可作出一个额外的动作，但该动作只能用于执行攻击（只限一次武器攻击），或者疾行、撤离、躲藏和使用物件动作。\n法术终止时，目标将泛起一阵倦意使其不能移动也无法执行动作，并持续至其下一回合结束。",
    "source": "PHB"
  },
  {
    "id": "spell.3.HungerofHadar",
    "name": "哈达之欲",
    "english_name": "Hunger of Hadar",
    "level": 3,
    "school": "咒法",
    "classes": [
      "邪术师"
    ],
    "castingTime": "1 动作",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一条酸洗过的章鱼触须"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你打开一个通道，并连接到群星间黑暗处某个遍布未知恐怖之物的领域。以施法距离内一点为中心，一个半径 20 尺，漆黑而寒冷的球状区域显现并持续至该法术终止。这个虚无区域外 30 尺范围内能听到充斥在空气中的不谐耳语和啜嚼噪音。任何光照，魔法或其他手段都无法照亮这个区域，而完全进入该区域内的生物将陷入目盲状态。\n虚无扭曲了空间的结构，使该区域内成为困难地形。任何在区域内开始其回合的生物将受到 2d6 点冷冻伤害。任何在区域内结束其回合的生物必须进行一次敏捷豁免，豁免失败者将因异界软体触手的触碰而受到 2d6 点强酸伤害。",
    "source": "PHB"
  },
  {
    "id": "spell.3.HypnoticPattern",
    "name": "催眠图纹",
    "english_name": "Hypnotic Pattern",
    "level": 3,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": false,
      "somatic": true,
      "material": "一根点燃的熏香或一个装有磷光材料的水晶小瓶"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在施法距离内一处边长 30 尺的立方区域内创造出一个在空中舞动旋转的彩色图纹。图纹在出现片刻后消失，然后迫使区域内每个看到它的生物进行一次感知豁免，豁免失败者将在法术持续时间内被魅惑。被该法术魅惑的生物陷入失能状态，且速度降为 0。\n如果受术生物受到任何伤害，或者他人将其从恍惚中摇醒，则该法术在其身上的效应终止。",
    "source": "PHB"
  },
  {
    "id": "spell.3.LeomundsTinyHut",
    "name": "李欧蒙小屋",
    "english_name": "Leomund's Tiny Hut",
    "level": 3,
    "school": "塑能",
    "classes": [
      "仪式；吟游诗人",
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "自身（10 尺半径半球状）",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个小水晶珠子"
    },
    "duration": "8 小时",
    "description": "一个半径 10 尺的半球形力场出现在你周围和上方，并在法术持续时间内保持固定。当你离开该区域时法术将随之终止。\n半球可以容纳你和九个中型或更小的生物。如果区域内容纳了一个体型更大的生物或者容纳了多于九个生物，则法术失效。在施展此法术时即处于半球内的生物和物件可以自由进出半球。而所有其他生物和物件都将被阻挡而无法进出。法术和其他魔法效应既无法延伸至穿过半球，也无法直接穿过半球施放。半球内的空气干爽舒适，而无论外侧气候如何。\n你可以在法术终止前使半球内的光照变为微光或黑暗。半球从外侧看是不透明的，并且呈现出由你选定的颜色，但从内侧看它则是透明的。",
    "source": "PHB"
  },
  {
    "id": "spell.3.LightningArrows",
    "name": "闪电箭矢",
    "english_name": "Lightning Arrows",
    "level": 3,
    "school": "变化",
    "classes": [
      "游侠"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术持续时间内下一次进行的远程武器攻击时，该武器的弹药或该武器本身（如果该武器是投掷武器）变为一束闪电。以正常方式进行攻击检定，若该攻击命中则目标受到 4d8 点闪电伤害，若未命中则伤害减半。即以该闪电伤害代替武器正常伤害。\n无论你的攻击是否命中，目标周围 10 尺范围内的每个生物都必须进行一次敏捷豁免，豁免失败则受到 2d8 点闪电伤害，豁免成功则伤害减半。\n在此之后，该弹药或武器变回其正常形态。\n升环施法效应：使用四环或更高法术位施展该法术时，你使用的法术位每比三环高一环，上述两种闪电伤害就各增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.3.LightningBolt",
    "name": "闪电束",
    "english_name": "Lightning Bolt",
    "level": 3,
    "school": "塑能",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身（100 尺线状）",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一些毛皮和琥珀质、水晶质或玻璃质的一根棒子"
    },
    "duration": "立即",
    "description": "一束 100 尺长，5 尺宽的线状闪电从你的位置向你指定的任意方向爆发迸出。在线状区域内的每个生物必须进行一次敏捷豁免，豁免失败者将受到 8d6 的闪电伤害，豁免成功则伤害减半。\n闪电会将区域内未被着装或携带的可燃物件点燃。\n升环施法效应：使用四环或更高法术位施展该法术时，你使用的法术位每比三环高一环，伤害就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.3.MagicCircle",
    "name": "防护法阵",
    "english_name": "Magic Circle",
    "level": 3,
    "school": "防护",
    "classes": [
      "牧师",
      "圣武士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "总价值至少 100gp 的圣水或银、铁粉，作为该法术的耗材"
    },
    "duration": "1 小时",
    "description": "指定施法距离内地面上你能看见的一点，并在该处创造了一个 10 尺半径、20 尺高的柱状魔法能量。而承载能量柱的地面或其他平面上则会显现出闪光的符文。\n指定以下生物类型中的一种或多种：天界生物、元素生物、精类生物、邪魔、不死生物。法阵将会对被指定类型的生物产生以下效应：\n该类生物不能以非魔法手段主动进入柱状区域内。如果该类生物试图使用传送或位面旅行进入此区域，则它必须先进行一次魅力豁免以判定其是否成功。\n该类生物对柱状区域内的生物进行攻击检定时具有劣势。\n柱状区域内的目标不受该类生物所魅惑、恐慌、或附身。\n施展该法术时，你可以选择让魔法作用于相反的方向来阻止特定种类的生物离开柱状区域内，以保护区域外的目标。\n升环施法效应：使用四环或更高法术位施展该法术时，你使用的法术位每比三环高一环，法术持续时间就增加 1 小时。",
    "source": "PHB"
  },
  {
    "id": "spell.3.MajorImage",
    "name": "高等幻影",
    "english_name": "Major Image",
    "level": 3,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块羊毛"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你创造一个影像，其形象来自一个大小不超过边长 20 尺立方体的物件，生物或其他的可视现象。影像出现在施法距离内你能看见的一处位置并在法术持续时间内维持存在。它看起来完全是真实的，并且还具有相应的声音、气味和温度。你不能创造出足以造成伤害的酷热或严寒，也不能创造出音量大到足以造成雷鸣伤害或者震聋生物的声响，同样不能创造出会使生物恶心的气味（近似穴蜥人的恶臭那种）。\n在该幻象施法距离内时，你可以用你的动作将影像移动到施法距离内的另一个位置。影像改变位置时，你可以改变影像的外表来使它移动得更自然。例如，如果你创造了一个生物的影像并移动它，则你可以改变影像，使它看起来就像是在走路。或者你也可以让影像在不同的时间发出不同的声音，甚至可以让它参与一场对话。\n由于影像无法被碰到，任何与该影像进行的物理互动都会暴露其幻象的本质。一个生物用其动作调查影像时，它可以进行一次对抗你的法术豁免 DC 的智力（调查）检定，以判定是否看穿幻象。辨出幻象的生物可以看破该影像，而影像的其他感官效应在该生物看来会变得微弱而模糊。\n升环施法效应：使用六环或更高法术位施展该法术时，法术会持续至解除且不需要你保持专注。",
    "source": "PHB"
  },
  {
    "id": "spell.3.MassHealingWord",
    "name": "群体治愈真言",
    "english_name": "Mass Healing Word",
    "level": 3,
    "school": "塑能",
    "classes": [
      "牧师；TCE：吟游诗人"
    ],
    "castingTime": "1 附赠动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你高声诵出复原的真言，并指定施法距离内至多六个你能看见的生物，使其各自恢复一定的生命值，其数值等于 1d4+你的施法属性调整值。该法术对不死生物和构装生物无效。\n升环施法效应：使用四环或更高法术位施展该法术时，你使用的法术位每比三环高一环，其治疗量就增加 1d4。",
    "source": "PHB"
  },
  {
    "id": "spell.3.MeldintoStone",
    "name": "融身入石",
    "english_name": "Meld into Stone",
    "level": 3,
    "school": "变化",
    "classes": [
      "仪式；牧师",
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "8 小时",
    "description": "你进入一个足以完全容纳你身体的石制物件或石材表面内，使你自己和你携带的所有装备在法术持续时间内与石头融为一体。你可以在移动时从一个你能接触到的位置进入石中。此后，任何非魔法的感官都无法看到或侦测到你的存在。\n与石头融合后，你看不到外界发生了什么，并且你为了聆听外界声音而进行的任何感知（察觉）检定都具有劣势。与石头融合时，你仍能感觉到时间的流逝，也可以对自己施展法术。此时你无法移动，不过可以从进入石头的地方以移动的方式离开石内并终止该法术。\n石头所受的轻微损伤不会对你造成伤害，不过石头部分损毁或者形状改变时（改变到不再适合容纳你的程度），会将你从石中排挤出并对你造成 6d6 的钝击伤害。石头完全损毁（或材质改变）时，也会将你从石中排挤出并对你造成 50 点钝击伤害。被排挤出石头时，你将被摔至距离第一次进入石头处最近一处未被占据的空间位置，并陷入倒地状态。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Nondetection",
    "name": "回避侦测",
    "english_name": "Nondetection",
    "level": 3,
    "school": "防护",
    "classes": [
      "吟游诗人",
      "游侠",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一撮价值至少 25gp 的钻石粉末，撒在目标身上，作为该法术的耗材"
    },
    "duration": "8 小时",
    "description": "在法术持续时间内，你将触碰的目标隐藏起来，使其在法术持续时间内躲开来自预言魔法的侦测。目标可以是一个自愿生物，一处地点或一个在各个方向上不超过 10 尺的物件。目标在持续时间内不能成为预言魔法的目标，也不能通过魔法探知传感器被感测到。",
    "source": "PHB"
  },
  {
    "id": "spell.3.PhantomSteed",
    "name": "魅影驹",
    "english_name": "Phantom Steed",
    "level": 3,
    "school": "幻术",
    "classes": [
      "仪式；法师"
    ],
    "castingTime": "1 分钟",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1 小时",
    "description": "你指定施法距离内一处未被占据空间，并从中显现一只似幻似真的马形生物。该生物的外形由你决定，但它必须装备着鞍座和辔具。而这些随法术创造的装备一旦离开战驹 10 尺即化作一阵烟消失不见。\n在法术持续时间内，你或者一个你指定的生物可以骑乘此战驹。战驹使用骑乘用马的属性数据，不过其具有速度 100 尺，其每小时路程普通时可达 10 里，以快速步调行进时可达 13 里。法术终止时，战驹会慢慢消失，让骑手有 1 分钟的时间下马结束骑乘。你用一个动作解散战驹，或是当战驹受到伤害时，法术也将随即终止。",
    "source": "PHB"
  },
  {
    "id": "spell.3.PlantGrowth",
    "name": "植物滋长",
    "english_name": "Plant Growth",
    "level": 3,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作或 8 小时",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "该法术将活力引导给特定区域中的植物。该法术有两种用法，其一可产生即时增益，另一种则产生长期的增益。\n用 1 动作施展该法术时，你指定施法距离内一点，该点周边半径 100 尺内的普通植物将变的粗壮和茂盛。一个穿过该区域的生物每移动 1 尺必须花费 4 尺的移动力。\n你可以在该法术范围内空出一块或多块任意大小的区域，使其排除在法术效应影响之外。\n用 8 小时施展该法术时，你可以使这片土地肥沃。你指定施法距离内一点，该点周边半径半里内的植物将在 1 年内变的茂盛。这些植物收获时将产出两倍于正常产量的作物。",
    "source": "PHB"
  },
  {
    "id": "spell.3.ProtectionfromEnergy",
    "name": "防护能量伤害",
    "english_name": "Protection from Energy",
    "level": 3,
    "school": "防护",
    "classes": [
      "牧师",
      "德鲁伊",
      "游侠",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "受你触碰的一个自愿生物在法术持续时间内对下列你指定的一种伤害类型具有抗性：强酸、冷冻、火焰、闪电、雷鸣。",
    "source": "PHB"
  },
  {
    "id": "spell.3.RemoveCurse",
    "name": "移除诅咒",
    "english_name": "Remove Curse",
    "level": 3,
    "school": "防护",
    "classes": [
      "牧师",
      "圣武士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你的触碰立即为一个生物或一个物件解除其身上的所有诅咒。如果目标物体是一件被诅咒的魔法物品则其上的诅咒不会因此解除，不过该法术可以打破诅咒物品与其所有者之间的同调，使其所有者可以将其卸下或丢弃。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Revivify",
    "name": "回生术",
    "english_name": "Revivify",
    "level": 3,
    "school": "死灵",
    "classes": [
      "牧师",
      "圣武士",
      "奇械师；TCE：德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "消耗总价值至少 300gp 的钻石"
    },
    "duration": "立即",
    "description": "你触碰一个在前一分钟内刚刚死去的生物，使该生物以 1 点生命值重生。该法术不能复活老死的生物，也不能恢复失去的身体部位。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Sending",
    "name": "短讯术",
    "english_name": "Sending",
    "level": 3,
    "school": "塑能",
    "classes": [
      "吟游诗人",
      "牧师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "无限",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小段细铜线"
    },
    "duration": "1 轮",
    "description": "你向你所熟识的一个生物发送一小段二十五个单词以内的信息。该生物将在心中听到你的信息，他可以认出你是发讯人（如果他认识你），还可以用同样的方式立即回复一条讯息。对方的智力值必须至少为 1 才能理解你的信息。\n你的传讯可以跨越任意长的距离，甚至能跨越位面。但如果目标和你不在同一个存在位面，则短讯术有 5%的概率无法到达。",
    "source": "PHB"
  },
  {
    "id": "spell.3.SleetStorm",
    "name": "雪雨暴",
    "english_name": "Sleet Storm",
    "level": 3,
    "school": "咒法",
    "classes": [
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一撮灰尘和几滴水"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你指定施法距离内一点,并使以该点为中心，半径 40 尺、高 20 尺的区域内降下寒冷刺骨的冻雨和冰雹直至法术终止。该区域将造成重度遮蔽，且该区域内的一切开放的明火都将被浇熄。\n该区域的地面上覆着一层光滑的冰，使地面变成困难地形。生物在一个回合内第一次进入该区域或在区域内开始其回合时，必须进行一次敏捷豁免，豁免失败则失足倒地。\n在该法术区域内开始其回合的生物若正在进行专注，则该生物必须进行一次对抗你法术豁免 DC 的体质豁免，豁免失败则其专注被打断。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Slow",
    "name": "缓慢术",
    "english_name": "Slow",
    "level": 3,
    "school": "变化",
    "classes": [
      "术士",
      "法师；TCE：吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一滴糖浆"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在施法距离内一处 40 尺立方区域内指定至多六个生物并扭曲其周围的时间流。每个目标都要进行一次感知豁免，豁免失败则受到该法术影响直至法术终止。\n受术生物的速度减半，而其 AC 和敏捷豁免都具有-2 减值，且不能执行反应。该生物在其回合内可以执行一个动作或一个附赠动作，但不能在一回合内同时执行以上两者。不论该生物拥有何种能力或魔法物品，它在其回合内只能发动一次近战或远程攻击。\n如果该生物尝试施展一个施法时间为1动作的法术，则需掷一次 d20。如果结果是 11 或更高，则该生物的法术直至其下一回合才会生效，且该生物必须在此时再使用一个动作来完成法术。如果它做不到则它的法术就此浪费掉。\n受术生物在每个其自己回合结束时可以再进行一次该感知豁免，豁免成功则终止其身上的该法术效应。",
    "source": "PHB"
  },
  {
    "id": "spell.3.SpeakwithDead",
    "name": "死者交谈",
    "english_name": "Speak with Dead",
    "level": 3,
    "school": "死灵",
    "classes": [
      "吟游诗人",
      "牧师；TCE：法师"
    ],
    "castingTime": "1 动作",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "燃烧的香"
    },
    "duration": "10 分钟",
    "description": "你给施法距离内一具尸体赋予少许生命与智力，让其可回答你的问题。这具尸体必须还有一张嘴，且不能是不死生物。若目标尸体在最近十日内曾被作为该法术的目标，则本次施法失败。\n你可以在法术终止前向尸体提出最多五个问题。尸体的知识仅限于其生前所知，包括它所讲的语言。回答通常是简短，含糊或重复的语句，而且如果你对尸体抱有敌意或者尸体认为你是其敌人，它也不必一定要给你正确的答复。该法术并不能让该生物的灵魂返回其身体中，只是活化了其精神。因此，该尸体不能认知新的信息，不能理解它死后发生的任何事情，也不能对未来的事件作出猜测。",
    "source": "PHB"
  },
  {
    "id": "spell.3.SpeakwithPlants",
    "name": "植物交谈",
    "english_name": "Speak with Plants",
    "level": 3,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "自身（半径 30 尺）",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "10 分钟",
    "description": "你给周围 30 尺内的植物赋予有限的知觉与活力，使其能够与你沟通和按你的命令行事。你可以向植物询问最近一日里该区域发生的事，由此了解曾路过这里的生物、天气和其他状况。\n你可以让区域内因植物生长形成的困难地形（如灌木丛）在法术持续时间内变为普通地形。你也可以将有植物生长的普通地形变成困难地形（如让藤蔓树枝阻碍身后的追兵）。\n根据 DM 的判断，植物也可能会为你做其他的事情。虽然该法术并不能让植物拔根而起或自由移动，但它们可以自由活动自己的树枝、藤蔓和茎秆。\n如果法术区域内有一个植物生物，你可以如同你们有共同语言一般与其交流，但你并没有任何能影响它立场的魔力。\n该法术能让 纠缠术entangle创造出来的植物放开一个被束缚的生物。",
    "source": "PHB"
  },
  {
    "id": "spell.3.SpiritGuardians",
    "name": "灵体卫士",
    "english_name": "Spirit Guardians",
    "level": 3,
    "school": "咒法",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "自身（半径 15 尺）",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一面圣徽"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你唤来四只灵体来守护你。法术持续时间内，这些灵体会在距你 15 尺的位置环绕着你飞舞。如果你属于善良或中立阵营，则它们飘渺的身形看起来像是天使或精类生物（由你选择）。如果你属于邪恶阵营，则它们将形如邪魔。\n施展此法术时，你可以指定你能看见的内任意数量生物让其不受该法术影响。除此之外的生物在这 15 尺半径的区域内将受法术影响致速度被减半。当受影响生物在一个回合内第一次进入该区域或在区域内开始其回合时，其必须进行一次感知豁免。豁免失败将受到 3d8 点光耀伤害（如果你属于善良或中立）或 3d8 点黯蚀伤害（如果你属于邪恶），豁免成功则只受到半数伤害。\n升环施法效应：使用四环或更高法术位施展该法术时，你使用的法术位每比三环高一环，法术的伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.3.StinkingCloud",
    "name": "臭云术",
    "english_name": "Stinking Cloud",
    "level": 3,
    "school": "咒法",
    "classes": [
      "吟游诗人",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个臭鸡蛋或几根臭菘草"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你以施法距离内一点为中心创造出一团半径 20 尺的黄色恶心气体云团。云团会绕过拐角扩散，并能造成重度遮蔽。在法术持续时间结束前云团都会一直在空气中徘徊。\n如果一个生物在其回合开始时完全位于云团内，则它必须进行一次对抗毒素的体质豁免。豁免失败则该生物必须因呕吐和蹒跚浪费掉其本回合的动作。如果生物不需要呼吸或对毒素免疫，则其检定直接判定为成功。\n云团被和风（风速至少每小时 10 里）吹袭 4 轮后消散。而强风（风速至少每小时 20 里）只需 1 轮就能将其吹散。",
    "source": "PHB"
  },
  {
    "id": "spell.3.Tongues",
    "name": "巧言术",
    "english_name": "Tongues",
    "level": 3,
    "school": "预言",
    "classes": [
      "吟游诗人",
      "牧师",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": "一个陶制阶梯金字塔小模型"
    },
    "duration": "1 小时",
    "description": "该法术赋予你所触碰生物听懂任何语言的能力。此外，当目标生物说话时，任何能听见其话语且掌握至少一门语言的生物都能听懂它的话。",
    "source": "PHB"
  },
  {
    "id": "spell.3.VampiricTouch",
    "name": "吸血鬼之触",
    "english_name": "Vampiric Touch",
    "level": 3,
    "school": "死灵",
    "classes": [
      "邪术师",
      "法师；TCE：术士"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你的手上环绕着阴影，只要触碰一下就可以吸取他人的生命力来为自己疗伤。对你触及范围内的一个生物进行一次近战法术攻击。若命中，则目标受到 3d6 点黯蚀伤害，而你则恢复数值等于所造成黯蚀伤害一半的生命值。你可以在该法术终止前的每个回合内以一个动作完成一次这样的攻击。\n升环施法效应：使用四环或更高法术位施展该法术时，你使用的法术位每比三环高一环，法术的伤害就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.3.WaterBreathing",
    "name": "水下呼吸",
    "english_name": "Water Breathing",
    "level": 3,
    "school": "变化",
    "classes": [
      "仪式；德鲁伊",
      "游侠",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一根芦苇或稻草"
    },
    "duration": "24 小时",
    "description": "在法术终止前，该法术让施法距离内你能看见的至多十个自愿生物获得在水下呼吸的能力。此外，受术者依然保有正常的呼吸能力。",
    "source": "PHB"
  },
  {
    "id": "spell.3.WaterWalk",
    "name": "水上行走",
    "english_name": "Water Walk",
    "level": 3,
    "school": "变化",
    "classes": [
      "仪式；牧师",
      "德鲁伊",
      "游侠",
      "术士",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个软木塞"
    },
    "duration": "1 小时",
    "description": "使受术者行走于任何液体表面时（例如流水、酸液、泥浆、雪地、流沙、熔岩）都如同行走在无伤害性的实体地面上。（但走在熔岩上的生物仍会因高热而受伤）。你可以将此能力赋予施法距离内你能看见的至多十个自愿生物，并使其在法术持续时间内拥有该能力。\n如果你选择一个浸没在水中的生物作为该法术的目标，则受术者将会以每轮 60 尺的速度上升，直至浮上液面。",
    "source": "PHB"
  },
  {
    "id": "spell.3.WindWall",
    "name": "风墙术",
    "english_name": "Wind Wall",
    "level": 3,
    "school": "塑能",
    "classes": [
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一把小扇和一根稀有生物的羽毛"
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内地面上一点并从中升起了一道烈风形成的墙壁。你可以造出长度至多 50 尺、高度至多 15 尺、厚度至多 1 尺的风墙。你可以自由塑造该墙的形状，不过它必须沿着地面形成一条连续的轨道。风墙持续存在至法术终止。\n风墙出现时，所有位于风墙区域内的生物必须进行一次力量豁免。豁免失败者，将受到 3d8 点钝击伤害，豁免成功则伤害减半。\n烈风可以阻隔浓雾、烟尘和其他气体。体型为小型或更小的飞行生物或物件无法飞过风墙。重量轻的物质带进风墙中时将被向上吹飞。对墙后目标射出的箭、矢和其他普通飞行物会被朝上吹走而直接判为未命中（巨人或攻城器械投出的巨石和类似的飞行物不受影响）。处于气化形态的生物无法穿过风墙。",
    "source": "PHB"
  },
  {
    "id": "spell.4.ArcaneEye",
    "name": "秘法眼",
    "english_name": "Arcane Eye",
    "level": 4,
    "school": "预言",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一点蝙蝠毛皮"
    },
    "duration": "专注，至多 1 小时",
    "description": "你在施法距离内创造出一个漂浮在空中的隐形魔法眼。\n秘法眼拥有 30 尺普通视觉和黑暗视觉且可以观察任何方向。你通过精神连接接收秘法眼传来的视觉信息。\n你可以使用一个动作让秘法眼向任意方向移动 30 尺。秘法眼远离你的距离没有限制，但它无法进入另一个位面。固体障碍物会阻挡秘法眼的移动，但它可以穿过任何直径大于 1 尺的缝隙。",
    "source": "PHB"
  },
  {
    "id": "spell.4.AuraofLife",
    "name": "生命灵光",
    "english_name": "Aura of Life",
    "level": 4,
    "school": "防护",
    "classes": [
      "圣武士；TCE：牧师"
    ],
    "castingTime": "1 动作",
    "range": "自身（30 尺半径）",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 10 分钟",
    "description": "护佑的能量自你身上发出并形成 30 尺半径的灵光，在法术持续时间内，灵光将以你为中心随你移动。灵光范围内的非敌对生物（包括你自己）获得对黯蚀伤害的抗性，其生命值上限也无法被降低。另外，生命值为 0 的非敌对活体生物，在灵光范围内开始其回合时会恢复 1 点生命值。",
    "source": "PHB"
  },
  {
    "id": "spell.4.AuraofPurity",
    "name": "净化灵光",
    "english_name": "Aura of Purity",
    "level": 4,
    "school": "防护",
    "classes": [
      "圣武士；TCE：牧师"
    ],
    "castingTime": "1 动作",
    "range": "自身（30 尺半径）",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 10 分钟",
    "description": "净化的能量自你身上发出并形成 30 尺半径的灵光，在法术持续时间内，灵光将以你为中心随你移动。灵光范围内的非敌对生物（包括你自己）不会陷入疾病状态，并获得对毒素伤害的抗性，其进行对抗下列状态的豁免时具有优势：目盲、魅惑、耳聋、恐慌、麻痹、中毒和震慑。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Banishment",
    "name": "放逐术",
    "english_name": "Banishment",
    "level": 4,
    "school": "防护",
    "classes": [
      "牧师",
      "圣武士",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一件令目标厌恶的物品"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你试图将一名你能看见的生物送往另一位面。目标必须进行一次魅力豁免并成功通过，否则将被放逐。\n如果目标是你所处位面的原住民，则他被放逐到一个无害的半位面。在半位面期间该生物处于失能状态。法术终止时，目标重新出现在被放逐前的空间。如果该空间被占据，则它将出现在最近的未被占据空间。\n如果目标不是你所处位面的原住民，则他会伴随着轻微的“啪”一声被放逐回其家园位面。如果法术在 1 分钟过去之前终止，则目标将在他被放逐前的空间重新出现。如果该空间被占据，则他在最近的未被占据空间出现。如果法术在持续 1 分钟后终止，则目标不会回到原地。\n升环施法效应：使用五环或更高法术位施展该法术时，你使用的法术位每比四环高一环，就能多指定一个目标。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Blight",
    "name": "枯萎术",
    "english_name": "Blight",
    "level": 4,
    "school": "死灵",
    "classes": [
      "德鲁伊",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "死灵魔法的能量袭向一个施法距离内你能看见的生物，并榨取他的水分和活力。目标必须进行一次体质豁免，豁免失败者将受到8d8点黯蚀伤害，豁免成功则伤害减半。本法术对构装生物和不死生物无效。\n若你以一个植物类生物或魔法植物为目标，则其豁免检定具有劣势，且法术对它的伤害取最大值。\n若你以一个非魔法非生物的植物为目标，如一棵树或灌木，则它不进行豁免而直接枯萎死去。\n升环施法效应：使用五环或更高法术位施展该法术时，你使用的法术位每比四环高一环，法术的伤害就增加1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Compulsion",
    "name": "强迫术",
    "english_name": "Compulsion",
    "level": 4,
    "school": "惑控",
    "classes": [
      "吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内你能看到，且能听到你声音的若干生物并迫使其分别进行一次感知豁免。其中无法被魅惑的目标将直接豁免成功，而豁免失败者将受到该法术效应的影响。直至该法术终止前，你可以在你每个回合中用一个附赠动作指向某个水平方向。随后，每个受术目标在其下一回合里必须使用其所有的移动力尽可能的向该方向移动。目标可以在移动前执行其动作，而完成这些移动行为后它可以再进行一次感知豁免以终止该效应。\n每个目标不会被强令走向明显致命的危害物中，比如火堆或陷坑里，不过目标在向指定方向移动时同样可以引起借机攻击。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Confusion",
    "name": "困惑术",
    "english_name": "Confusion",
    "level": 4,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "三颗坚果壳"
    },
    "duration": "专注，至多 1 分钟",
    "description": "此法术冲击并扭曲生物的意志，并使其产生错觉并引发不受控的行动。在施法距离内指定一点，以该点为中心的 10 尺半径球状区域内的所有生物必须进行一次感知豁免并成功通过，否则将受到该法术的影响。\n受术目标不能执行反应并且必须在其回合开始时掷一次 d10 以决定该生物本回合的行为。\n受术生物在其每回合结束时可以在进行一次感知豁免。如果该豁免成功，则该目标身上该法术的效应终止。\n升环施法效应：使用五环或更高法术位施展该法术时，你使用的法术位每比四环高一环，球状区域半径就增加 5 尺。",
    "source": "PHB"
  },
  {
    "id": "spell.4.ConjureMinorElementals",
    "name": "次级元素咒唤术",
    "english_name": "Conjure Minor Elementals",
    "level": 4,
    "school": "咒法",
    "classes": [
      "德鲁伊",
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "你元素咒唤术并使其显现在施法范围内一处你能看见但未被占据的空间。选择以下选项之一作为显现的生物：\n一个挑战等级 2 或更低的元素生物\n两个挑战等级 1 或更低的元素生物\n四个挑战等级 1/2 或更低的元素生物\n八个挑战等级 1/4 或更低的元素生物\n每个被该法术召唤的元素生物在生命值降至0，或者法术终止时消失不见。\n被召唤的生物对你和你的伙伴保持友善关系。你将召唤出来的所有生物视为一个团体来骰出先攻，它们也依此获得其自己的行动回合。他们服从你发出的所有语言命令（不需要你作动作）。如果你不发出任何命令，这些生物会在敌对生物前保护自己，如果没有敌对生物则不执行任何动作。\n这些生物的具体数值由 DM 掌控。\n升环施法效应：使用更高法术位施展该法术时，选择上文所述召唤选项之一，并显现更多生物：六环法术位显现两倍生物，八环法术位显现三倍生物。\n（注：此法术原译作“召唤次级元素生物” ，因易与后续出的《塔莎的万事坩埚》中的法术 元素召唤术Summon Elemental 混淆而改）",
    "source": "PHB"
  },
  {
    "id": "spell.4.ConjureWoodlandBeings",
    "name": "林地之精咒唤术",
    "english_name": "Conjure Woodland Beings",
    "level": 4,
    "school": "咒法",
    "classes": [
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "每个被召唤生物一枚冬青浆果"
    },
    "duration": "专注，至多 1 小时",
    "description": "你召唤出精类并使其显现在施法范围内一处你能看见但未被占据的空间。选择以下选项之一作为显现的生物：\n一个挑战等级 2 或更低的精类生物\n两个挑战等级 1 或更低的精类生物\n四个挑战等级 1/2 或更低的精类生物\n八个挑战等级 1/4 或更低的精类生物\n每个被该法术召唤的精类生物在生命值降为0，或者法术终止时消失不见。\n被召唤的生物对你和你的伙伴保持友善关系。你将召唤出来的所有生物视为一个团体来骰出先攻，它们也依此获得其自己的行动回合。他们服从你发出的所有语言命令（不需要你作动作）。如果你不发出任何命令，这些生物会在敌对生物前保护自己，如果没有敌对生物则不执行任何动作。\n这些生物的具体数值由 DM 掌控。\n升环施法效应：使用更高法术位施展该法术时，选择上文所述召唤选项之一，并显现更多生物：六环法术位显现两倍生物，八环法术位显现三倍生物。\n（注：此法术原译作“召唤林地之精” ，随其他 Conjure 法术的译名修改而改）",
    "source": "PHB"
  },
  {
    "id": "spell.4.ControlWater",
    "name": "操控水体",
    "english_name": "Control Water",
    "level": 4,
    "school": "变化",
    "classes": [
      "牧师",
      "德鲁伊",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "300 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一滴水和一撮土"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你在法术终止前控制任一片独立的水体，控制范围为你指定的一处边长 100 尺的立方区域。施展该法术时，你可以从以下效应中选择其一生效。在你之后的每个自己回合中，你可以用一个动作重复生效同一效应，或是选择实现另一效应。\n上涨Flood。 你使控制区域内水位上涨至多 20 尺。如果该区域包含有滨岸，则水体漫过涨水覆盖的干土。\n如果你指定的区域是一片大水体中的一部分，则你改为制造一片 20 尺高的波浪，并从区域的一边扑向另一边再拍下水面。波浪中任何巨型或更小的载具都会被带到水浪行进的另一边。且所有巨型或更小的载具都有 25%的几率被倾覆。\n直至法术终止或你选择另一个效应前，水位的上涨情况将保持不变。如果该效应用以产生波浪，则波浪在你下一回合开始时再次进行翻打。\n分水Part Water。 你使区域内的水体分开并形成一条水体的沟壑。沟壑从法术区域的一头延伸到另一头，而被分开的水体则在两边形成两道水墙。沟壑维持至法术终止或直至你选择另一个效应。该效应终止时，沟壑会在接下来的一轮里慢慢的恢复成通常的水位。\n转向Redirect Flow。 你使区域内的水体向一个你自选的方向流动。使其绕过障碍，或沿着墙壁向上流，甚至流向一些不太可能的方向，区域内的水体都遵照你指使的方向流动，但一旦其流出法术区域，则恢复为其所在地形的流向。水体持续向你所选方向流动，直至法术终止或直至你选择另一效应。\n漩涡Whirlpool。该效应需要水体至少为 50 尺的方形区域并且至少有 25 尺深。你在区域中央形成一个漩涡。其形态为底部宽 5 尺顶部宽 50 尺，且 25 尺高。水中任何在漩涡 25 尺范围内的生物或物件将被漩涡向自身拉动 10 尺。受影响的生物可以进行一次力量（运动）检定来对抗你的法术 DC，以通过游泳脱离漩涡控制。\n任何生物在一个回合内第一次进入漩涡或者在漩涡内开始其回合时，必须进行一次力量豁免。豁免失败者将受到 2d8 点钝击伤害，并被拖入漩涡中心直至法术终止。豁免成功则伤害减半，且不会被拖入漩涡。被拖入漩涡中心的生物可以用其动作尝试游泳来离开漩涡（如上文所述），但它此时进行的力量（运动）检定具有劣势。\n物件在一回合里第一次进入漩涡时受 2d8 点钝击伤害；如果物件保持在漩涡内，该伤害就会在每轮持续发生。",
    "source": "PHB"
  },
  {
    "id": "spell.4.DeathWard",
    "name": "防死结界",
    "english_name": "Death Ward",
    "level": 4,
    "school": "防护",
    "classes": [
      "牧师",
      "圣武士"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "8 小时",
    "description": "你触碰一个生物，并给予其对死亡的防护。\n目标第一次生命值因承受伤害而降至 0 时，改为生命值降至 1，并终止本法术效应。\n法术生效时，如果目标受到不造成伤害但直接致死效应影响时，改为该致死效应被取消，并终止本法术效应。",
    "source": "PHB"
  },
  {
    "id": "spell.4.DimensionDoor",
    "name": "任意门",
    "english_name": "Dimension Door",
    "level": 4,
    "school": "咒法",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "500 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你将自己从当前位置传送至施法距离内的任意地点，并准确到达该目的地。法术的目的地可以是你能看见的、可想象的地点，也可以是通过距离和方向说明的地点，比如“径直向下 200 尺”，“西北向上 45 度 300 尺”。\n进行传送时，你的随身物件不能超过你的负重。你还可以带上一个自愿的生物，且其体型不能比你大，而他的随身物件也不能超过其负重。该生物在你施法时必须在你 5 尺内。\n如果你的目的地已经被生物或物件占据，则你以及任何与你一起传送的生物都将受到 4d6 点力场伤害，且法术传送失败。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Divination",
    "name": "预言术",
    "english_name": "Divination",
    "level": 4,
    "school": "预言",
    "classes": [
      "仪式；牧师；TCE：德鲁伊",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "适合你宗教信仰的熏香和祭品，总共价值至少 25gp，作为该法术的耗材"
    },
    "duration": "立即",
    "description": "你的魔法和贡品让你得以与一名神或神仆取得联络。你可以就某个特定的目标、事件或活动提问一个与其 7 日内状况相关的问题。 DM 将给予你真实的答复，这个答复可能是一段短语、一节神秘的短诗或是一个预兆。\n此法术的回答并不会顾及所有可能影响结果的情况。比如其他法术的影响，或者同伴的加入和离开等状况。\n若你在两次长休之间两次或更多次的施展该法术，则法术有概率会给出随机的结果。此概率从第二次施展起每次累计 25％。其具体结果由 DM 暗骰决定。",
    "source": "PHB"
  },
  {
    "id": "spell.4.DominateBeast",
    "name": "支配野兽",
    "english_name": "Dominate Beast",
    "level": 4,
    "school": "惑控",
    "classes": [
      "德鲁伊",
      "术士；TCE：游侠"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你试图安抚一头施法距离内你能看见的野兽，目标野兽必须成功通过一次感知豁免，否则将在法术持续时间内被你魅惑。若它正与你或你的友方生物战斗，则其进行该豁免时具有优势。\n该野兽被魅惑时，只要你与其处于同一位面就可以与之保持心灵感应。你在有意识时，可以通过心灵感应命令该生物（不需要作动作），而它则会尽量服从。你可以描述一个简单具体的行为指令，比如“攻击那个生物”“跑到那个位置”或是“去拿那个物品”。生物完成一项指令却未收到你的进一步指示时，将会使用其本身的能力尽可能的保护自己。\n你可以使用动作以彻底而精确的控制目标。直至下个你的回合结束为止，该生物只能执行由你选择的一个或数个动作之一，且不能进行任何未经你许可的行动。在此期间，你还可以用自己的反应去要求该生物执行一项反应。\n每次目标受到伤害时，都可以尝试进行一次感知豁免，豁免成功则法术终止。\n升环施法效应：使用五环法术位施展该法术时，持续时间变为：专注，至多 10 分钟。使用六环法术位施展该法术时，持续时间变为：专注，至多 1 小时。使用七环或更高法术位施展该法术时，持续时间变为：专注，至多 8 小时。",
    "source": "PHB"
  },
  {
    "id": "spell.4.EvardsBlackTentacles",
    "name": "艾伐黑触手",
    "english_name": "Evard's Black Tentacles",
    "level": 4,
    "school": "咒法",
    "classes": [
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "巨章鱼或巨鱿鱼的一条触须"
    },
    "duration": "专注，最长 1 分钟",
    "description": "你指定一处施法距离内你能看见的 20 尺方形区域，使其内布满蠕动的乌黑触须，进而使该区域成为困难地形。\n任何生物在一个回合内第一次进入该区域，或者在区域内开始其回合时，必须进行一次敏捷豁免。豁免失败者将受到 3d6 点钝击伤害，并且被触须束缚直至法术终止。生物在区域内开始其回合时，如果已受触须束缚则受到 3d6 点钝击伤害。\n受触须束缚的生物可以使用动作进行一次对抗法术豁免 DC 的力量检定或敏捷检定（自选其一），检定成功则挣脱束缚。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Fabricate",
    "name": "鬼斧神工",
    "english_name": "Fabricate",
    "level": 4,
    "school": "变化",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "10 分钟",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你将一种原材料转化成该材料制作的成品。例如，你可以将一丛树木转化为一座木桥，一把麻草化为绳子，或是将亚麻和羊毛化作衣物。\n指定施法距离内你能看见的原材料。只要有足够的材料，你就可以将他们转化为一件大型或更小的物件（至多占据 10 尺立方区域或八个相邻的 5 尺立方区域）。如果你的目标材料是金属、石料或者其他矿石材料，那么被制造的物件不能大于中型（至多占据 5 尺立方区域），制成品的质量和原材料质量相同。\n生物或魔法物品不能作为该法术的原料或成品。你只有对制作某物品的工匠工具拥有熟练项时，才能使用该法术制作相应需要高工艺水平制作的物品，如珠宝、武器、玻璃、护甲等。",
    "source": "PHB"
  },
  {
    "id": "spell.4.FireShield",
    "name": "火焰护盾",
    "english_name": "Fire Shield",
    "level": 4,
    "school": "塑能",
    "classes": [
      "法师；TCE：德鲁伊",
      "术士"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块磷或者一只萤火虫"
    },
    "duration": "10 分钟",
    "description": "轻薄缥缈的火焰在法术持续期间环绕着你的身体，散发出10尺半径的明亮光照和再延伸10尺的微光光照。你可以借由使用一个动作解消它以提早结束此法术。\n这层火焰可以提供你温暖的护盾或寒冷的护盾，由你选择。温暖的护盾将赋予你对冷冻伤害的抗性，而寒冷的护盾则会赋予你对火焰伤害的抗性。\n此外，每当一个距离你5尺内的生物以一次近战攻击命中你时，这个护盾将迸发出火焰袭击攻击者。温暖护盾将对攻击者造成2d8点火焰伤害，寒冷护盾将对攻击者造成2d8点冷冻伤害。",
    "source": "PHB"
  },
  {
    "id": "spell.4.FreedomofMovement",
    "name": "行动自如",
    "english_name": "Freedom of Movement",
    "level": 4,
    "school": "防护",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊",
      "游侠",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一条绑在手臂或其他肢体上的皮带"
    },
    "duration": "1 小时",
    "description": "你触碰一个自愿生物，并使目标在法术持续时间内移动时不受困难地形限制，并使任何降低目标速度，或者使目标陷入麻痹或束缚的法术或魔法效应对其无法生效。\n该目标还可以花费 5 尺移动力直接从非魔法的束缚中挣脱（诸如镣铐或生物的擒抱等）。此外，目标在水下进行移动和攻击时不再受减益规则的限制。",
    "source": "PHB"
  },
  {
    "id": "spell.4.GiantInsect",
    "name": "巨虫术",
    "english_name": "Giant Insect",
    "level": 4,
    "school": "变化",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "你指定施法距离内至多十只蜈蚣，或三只蜘蛛，或五只黄蜂，或一只蝎子作为法术目标，在法术持续时间内你将其转化为它们自然形态的巨大版本。蜈蚣变成巨蜈蚣，蜘蛛变成巨蜘蛛，黄蜂变成巨黄蜂，蝎子变成巨蝎。\n每只生物都将服从你的口头命令。在战斗中，它们每轮在你的回合行动。这些生物的属性数据及其动作选项和移动能力均由 DM 掌控。\n在法术持续时间内，目标生物将维持其巨大的体型，直到其生命值降至 0 或你用一个动作解除其身上的效应为止。\nDM 可能会允许你指定不同的生物作为法术目标。例如，如果你转化一只蜜蜂，则其巨大版本可能会使用与巨黄蜂一样的属性数据。",
    "source": "PHB"
  },
  {
    "id": "spell.4.GraspingVine",
    "name": "擒抱藤",
    "english_name": "Grasping Vine",
    "level": 4,
    "school": "咒法",
    "classes": [
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 附赠动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你指定施法距离内一个你能够看见的未被占据空间，并召唤一条藤蔓使其从该空间的地面上破土而出。施展该法术时，你可以指使该藤蔓抽拉其 30 尺范围内一个你能看见的生物。该生物必须进行一次敏捷豁免，豁免失败则被往藤蔓所在方向拉近 20 尺。\n直至该法术终止前，你可以在你的回合里用一个附赠动作指使藤蔓抽拉同一生物或者转向抽拉另一个生物。",
    "source": "PHB"
  },
  {
    "id": "spell.4.GreaterInvisibility",
    "name": "高等隐形术",
    "english_name": "Greater Invisibility",
    "level": 4,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你或一个你触碰的生物变为隐形，直至法术终止。任何保持在目标身上的着装物和携带物也可以维持隐形状态。",
    "source": "PHB"
  },
  {
    "id": "spell.4.GuardianofFaith",
    "name": "信仰守卫",
    "english_name": "Guardian of Faith",
    "level": 4,
    "school": "咒法",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "8 小时",
    "description": "一个大型的幽灵守护者出现在施法距离内一个你能看见且由你指定的未被占据空间，并在法术持续时间内在该处悬浮。占据该空间的守护者除了一把闪光的剑和饰有你守护神标志的盾牌外，其他部位都只是一片模糊。\n任何与你敌对的生物在一回合内第一次进入守护者身边 10 尺范围内时必须进行一次敏捷豁免。豁免失败者将受到 20 点光耀伤害，豁免成功则伤害减半。守护者在造成总共 60 点伤害后随即消失。",
    "source": "PHB"
  },
  {
    "id": "spell.4.HallucinatoryTerrain",
    "name": "幻景",
    "english_name": "Hallucinatory Terrain",
    "level": 4,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "邪术师",
      "法师"
    ],
    "castingTime": "10 分钟",
    "range": "300 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块石头、一枝嫩枝和一小片绿色植物"
    },
    "duration": "24 小时",
    "description": "你使施法距离内一处 150 尺立方区域内的自然地形在视觉、听觉、嗅觉上都像是另一种自然地形。因此，开阔的平原或者一条路可能会变得像是一片沼泽，或是丘陵、裂谷以及其他困难地形，甚至是无法通过的地形。一个池塘可能变得看起来像一片草地，一个悬崖像是一个缓坡，或者使一条乱石沟像是一条宽阔平坦的道路。区域内经过加工的建筑、设备或生物的外表不会改变。\n地形的触觉特征不会改变，所以进入这片区域的生物可能会看穿幻象。如果触觉区别不明显，一个认真调查幻象的生物可以尝试进行一次对抗法术豁免 DC 的智力（调查）检定以揭穿幻象。对于一个识破了幻象本体的生物，幻象看起来就像是一层模糊的图像叠加在真实地形上。",
    "source": "PHB"
  },
  {
    "id": "spell.4.IceStorm",
    "name": "冰风暴",
    "english_name": "Ice Storm",
    "level": 4,
    "school": "塑能",
    "classes": [
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "300 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一撮尘土和几滴水"
    },
    "duration": "立即",
    "description": "以施法距离内一点为中心的一处半径 20 尺，高 40 尺的柱状区域内，岩石般坚硬的冰雹重重地砸向地面。每个处在范围内的生物都必须进行一次敏捷豁免，豁免失败者将受到 2d8 的钝击伤害和 4d6 点冷冻伤害，豁免成功则伤害减半。\n冰雹使风暴影响的区域变为困难地形，直至你的下一回合结束。\n升环施法效应：使用五环或更高法术位施展该法术时，你使用的法术位每比四环高一环，钝击伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.4.LeomundsSecretChest",
    "name": "李欧蒙秘藏箱",
    "english_name": "Leomund's Secret Chest",
    "level": 4,
    "school": "咒法",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个 3×2×2 尺，由稀有材料制成的精致箱子至少价值 5000gp；以及由同样材料制成的一个箱子的微缩模型至少价值 50gp"
    },
    "duration": "立即",
    "description": "你将一个箱子及其内容物藏在以太位面。你必须同时接触箱子和作为法术材料成分的微缩模型。箱子最多可容纳 12 立方尺的非活体物质（3×2×2 尺）。\n箱子处于以太位面时，你可以用一个动作并触碰箱子的模型来召回箱子。箱子出现在你 5 尺内一个未被占据空间的地面。随后，你可以使用一个动作并同时触碰箱子与复制品来把箱子送回以太位面。\n60 日之后，法术的效应会每日累计 5%的概率自动结束。如果你再次施展该法术或箱子的模型被摧毁，又或者以一个动作终止该法术时，该法术的效应将随之终止。如果法术终止时箱子处于以太界，则其将不可挽回地丢失。",
    "source": "PHB"
  },
  {
    "id": "spell.4.LocateCreature",
    "name": "生物定位术",
    "english_name": "Locate Creature",
    "level": 4,
    "school": "预言",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊",
      "圣武士",
      "游侠",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块寻血猎犬的皮毛"
    },
    "duration": "专注，至多 1 小时",
    "description": "你点名或描述一个你熟悉的生物。只要该生物与你相距不超过 1000 尺，你就会感测到该生物的方位。如果该生物正在移动，则你也将知晓其移动的方向。\n该法术可以定位一个你认识的特定生物；或者它也可以定位特定的一类生物（例如人类或独角兽）中距你最近个体，不过你需要在 30 尺的近距离内看到过该类生物至少一次。如果被点名或描述的生物并不处于其原本的形态（例如正被一个 变形术polymorph 的法术效应影响），则该法术无法定位该生物。\n如果至少 10 尺宽的流水横亘于你和被定位生物之间阻挡了二者间的通路，则该生物也无法被该法术所定位。",
    "source": "PHB"
  },
  {
    "id": "spell.4.MordenkainensFaithfulHound",
    "name": "魔邓肯忠犬",
    "english_name": "Mordenkainen's Faithful Hound",
    "level": 4,
    "school": "咒法",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一只微型银质哨子、一块骨头和一根线"
    },
    "duration": "8 小时",
    "description": "指定施法距离内一处你能看见且未被占据的空间，你在该处创造出一只幻影守护犬。守护犬会在法术持续时间内留在原地，直到你使用一个动作将其解散，或者直到你移动到距它 100 尺外。\n除你之外的所有生物视守护犬处于隐形状态，且无法对其造成伤害。当一个小型或更大的生物进入守护犬 30 尺内时，如果该生物无法说出你在施法时设定的口令，守护犬则会开始大声吠叫。守护犬能看见隐形生物，也可以观察到以太位面，并且无视幻术的影响。\n在你的每回合开始时，守护犬会尝试啮咬其5尺范围内一个与你敌对的生物。它的攻击加值等于你施法属性调整值+你的熟练加值。若命中，则造成 4d8 点穿刺伤害。",
    "source": "PHB"
  },
  {
    "id": "spell.4.MordenkainensPrivateSanctum",
    "name": "魔邓肯私人密室",
    "english_name": "Mordenkainen's Private Sanctum",
    "level": 4,
    "school": "防护",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "10 分钟",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一片薄铅片、一块不透明的玻璃、一小块棉花或布料和贵橄榄石粉末"
    },
    "duration": "24 小时",
    "description": "你对施法距离内一片区域施以魔法防护。该区域为一立方区域，其边长至小 5 尺，大至 100 尺。该法术一直持续至持续时间结束或施法者以一个动作主动解除。\n施展该法术时，其生效的保护内容由你决定。在以下几项属性中作选择，你可以选择若干项或者全部选择：\n声音不能穿透被保护区域边缘的障壁\n被保护区域的障壁变得黑暗而模糊，无法通过视觉（包括黑暗视觉）看穿。\n预言法术创造的传感器无法出现在被保护区域内，也无法穿过区域边界处的障壁。\n区域内的生物不能成为预言法术的目标。\n任何事物无法通过传送进出被保护区域。\n在被保护区域内，位面旅行被封锁。\n每日在同一个位置施展此法术，持续一年，会使这些效果成为永久性效果。\n升环施法效应：使用五环或更高法术位施展此法术时，你使用的法术位每比四环高一环，你就可以将被保护的立方区域边长增加 100 尺。比如使用五环法术位时，你就能保护边长至多 200 尺的立方区域。",
    "source": "PHB"
  },
  {
    "id": "spell.4.OtilukesResilientSphere",
    "name": "欧提路克弹力法球",
    "english_name": "Otiluke's Resilient Sphere",
    "level": 4,
    "school": "塑能",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块透明的半球形水晶和一块与之形状相配的半球形阿拉伯胶"
    },
    "duration": "专注，至多 1 分钟",
    "description": "一个微微发光的力场球将施法距离内一个大型或更小的生物或物件封在其中。一个非自愿的生物必须进行一次敏捷豁免，豁免失败则该生物在法术持续时间内被关封在球体中。\n任何事物——包括实体物件、能量或其它法术效应都不能穿透力场球的障壁进出其内，不过生物在球内仍可以正常呼吸。球体免疫一切伤害，且球内的生物或物件不能被来自球外的攻击或效果所伤害，球内的生物也不能对球外的事物造成伤害。\n该球体没有重量，而其尺寸刚好可以容纳球内的生物或物件。被封住的生物可以使用其动作推动球壁并以该生物速度的一半滚动球体。另外，球体也可以被其他生物拿起或移动。\n对球体施展解离术 disintegrate后可以摧毁球体而不伤害球内的任何事物。",
    "source": "PHB"
  },
  {
    "id": "spell.4.PhantasmalKiller",
    "name": "魅影杀手",
    "english_name": "Phantasmal Killer",
    "level": 4,
    "school": "幻术",
    "classes": [
      "法师；TCE：吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你指定施法距离内一个你能看见的生物，并窥探其噩梦以具象其最深的恐惧，依此创造一个只有目标能看见的幻象化身。目标生物必须进行一次感知豁免。豁免失败时，目标将在法术持续时间内陷入恐慌。在法术终止前，目标必须在其每回合结束时进行一次感知豁免，豁免失败则受 4d10 的心灵伤害。豁免成功则法术终止。\n升环施法效应：使用五环或更高的法术位施展该法术时，你使用的法术位每比四环高一环，伤害就增加 1d10。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Polymorph",
    "name": "变形术",
    "english_name": "Polymorph",
    "level": 4,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个毛虫虫茧"
    },
    "duration": "专注，至多 1 小时",
    "description": "该法术将一个施法距离内你能看见的生物变化为一个新的形态。一个非自愿的生物必须进行一次感知豁免来避免此效应。该法术无法对变形生物或生命值为 0 的生物生效。\n法术产生的变化在法术持续时间内得以维持，或直至目标的生命值降为 0 或死亡。新形态可以是任何挑战等级小于等于目标本身的野兽（如果目标没有挑战等级，则以其等级为基准）。目标的游戏资料以及心智相关的属性值都将被所选定野兽的属性数据取代。而其阵营和个性则仍然保留。\n目标使用其新形态的生命值。当它变回正常形态时，则立即恢复变化前的生命值。如果目标因为生命值降至 0 而变回正常形态，则其正常形态需要承受所有的溢出伤害。只要溢出的伤害没有将该生物正常形态的生命值降为 0，它就不会因打击而陷入昏迷。\n该生物可作出的动作因其新形态而有所限制。它不能说话，不能施法，也不能作出其他需要用手和需要说话的动作。\n目标的装备融入新形态中，但其不能启动，使用，挥舞或以其他方式从其装备上获得增益。",
    "source": "PHB"
  },
  {
    "id": "spell.4.StaggeringSmite",
    "name": "惊惧斩",
    "english_name": "Staggering Smite",
    "level": 4,
    "school": "塑能",
    "classes": [
      "圣武士"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术持续时间内下一次用近战武器攻击命中某个生物时你的武器将同时贯穿对方的身体与心智。该攻击对目标造成额外 4d6 的心灵伤害。该目标必须进行一次感知豁免，豁免失败则目标进行攻击检定和属性检定时具有劣势，且不能执行反应直至其下一回合结束。",
    "source": "PHB"
  },
  {
    "id": "spell.4.StoneShape",
    "name": "塑石术",
    "english_name": "Stone Shape",
    "level": 4,
    "school": "变化",
    "classes": [
      "牧师",
      "德鲁伊",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "软粘土，必须捏成你想塑造的大致形状"
    },
    "duration": "立即",
    "description": "你触碰一个体积为中型或更小的石质物件或某块岩石长宽高都不超过 5 尺的一部分，并将其塑造成你想要的任意形状。比如你可以将一块大石头变成一件武器、一尊塑像、一具棺材，也可以在石墙上开出一条小通道，前提是墙的厚度不能超过 5 尺。你也可以使一扇石门或石质门框变形来将门封死。你创造的物件最多可以有两条铰链和一道闩，除此之外不能以该法术能塑造出更复杂的机械结构。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Stoneskin",
    "name": "石肤术",
    "english_name": "Stoneskin",
    "level": 4,
    "school": "防护",
    "classes": [
      "德鲁伊",
      "游侠",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "价值 100gp 的钻石粉尘，作为该法术的耗材"
    },
    "duration": "专注，至多 1 小时",
    "description": "该法术使你触碰的一个自愿生物皮肤变得硬如岩石。目标在法术终止前对非魔法的钝击、穿刺和挥砍伤害具有抗性。",
    "source": "PHB"
  },
  {
    "id": "spell.4.WallofFire",
    "name": "火墙术",
    "english_name": "Wall of Fire",
    "level": 4,
    "school": "塑能",
    "classes": [
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块磷"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在施法距离内一块实体地面上创造出一面火墙。你可以选择创造长不过 60 尺、高不过 20 尺、厚不过 1 尺的直线型火墙；或是直径不过 20 尺、高不过 20 尺、厚不过 1 尺的环形火墙。火墙不透明，且将持续存在至法术终止。\n火墙出现时，所有位于火墙区域内的生物必须进行一次敏捷豁免。豁免失败者将受到 5d8 点火焰伤害。豁免成功则伤害减半。\n施展该法术时，你要必须选择火墙的哪一侧会造成伤害。生物在火墙伤害侧 10 尺内或在火墙区域内结束其回合时，将受到 5d8 点火焰伤害。生物在一个回合内第一次进入火墙或在火墙内结束其回合时也会受到同样的伤害。火墙的另一侧则不造成任何伤害。\n升环施法效应：使用五环或更高法术位施展该法术时，你使用的法术位每比四环高一环，法术的伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.4.ArcaneEye",
    "name": "秘法眼",
    "english_name": "Arcane Eye",
    "level": 4,
    "school": "预言",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一点蝙蝠毛皮"
    },
    "duration": "专注，至多 1 小时",
    "description": "你在施法距离内创造出一个漂浮在空中的隐形魔法眼。\n秘法眼拥有 30 尺普通视觉和黑暗视觉且可以观察任何方向。你通过精神连接接收秘法眼传来的视觉信息。\n你可以使用一个动作让秘法眼向任意方向移动 30 尺。秘法眼远离你的距离没有限制，但它无法进入另一个位面。固体障碍物会阻挡秘法眼的移动，但它可以穿过任何直径大于 1 尺的缝隙。",
    "source": "PHB"
  },
  {
    "id": "spell.4.AuraofLife",
    "name": "生命灵光",
    "english_name": "Aura of Life",
    "level": 4,
    "school": "防护",
    "classes": [
      "圣武士；TCE：牧师"
    ],
    "castingTime": "1 动作",
    "range": "自身（30 尺半径）",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 10 分钟",
    "description": "护佑的能量自你身上发出并形成 30 尺半径的灵光，在法术持续时间内，灵光将以你为中心随你移动。灵光范围内的非敌对生物（包括你自己）获得对黯蚀伤害的抗性，其生命值上限也无法被降低。另外，生命值为 0 的非敌对活体生物，在灵光范围内开始其回合时会恢复 1 点生命值。",
    "source": "PHB"
  },
  {
    "id": "spell.4.AuraofPurity",
    "name": "净化灵光",
    "english_name": "Aura of Purity",
    "level": 4,
    "school": "防护",
    "classes": [
      "圣武士；TCE：牧师"
    ],
    "castingTime": "1 动作",
    "range": "自身（30 尺半径）",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 10 分钟",
    "description": "净化的能量自你身上发出并形成 30 尺半径的灵光，在法术持续时间内，灵光将以你为中心随你移动。灵光范围内的非敌对生物（包括你自己）不会陷入疾病状态，并获得对毒素伤害的抗性，其进行对抗下列状态的豁免时具有优势：目盲、魅惑、耳聋、恐慌、麻痹、中毒和震慑。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Banishment",
    "name": "放逐术",
    "english_name": "Banishment",
    "level": 4,
    "school": "防护",
    "classes": [
      "牧师",
      "圣武士",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一件令目标厌恶的物品"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你试图将一名你能看见的生物送往另一位面。目标必须进行一次魅力豁免并成功通过，否则将被放逐。\n如果目标是你所处位面的原住民，则他被放逐到一个无害的半位面。在半位面期间该生物处于失能状态。法术终止时，目标重新出现在被放逐前的空间。如果该空间被占据，则它将出现在最近的未被占据空间。\n如果目标不是你所处位面的原住民，则他会伴随着轻微的“啪”一声被放逐回其家园位面。如果法术在 1 分钟过去之前终止，则目标将在他被放逐前的空间重新出现。如果该空间被占据，则他在最近的未被占据空间出现。如果法术在持续 1 分钟后终止，则目标不会回到原地。\n升环施法效应：使用五环或更高法术位施展该法术时，你使用的法术位每比四环高一环，就能多指定一个目标。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Blight",
    "name": "枯萎术",
    "english_name": "Blight",
    "level": 4,
    "school": "死灵",
    "classes": [
      "德鲁伊",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "死灵魔法的能量袭向一个施法距离内你能看见的生物，并榨取他的水分和活力。目标必须进行一次体质豁免，豁免失败者将受到8d8点黯蚀伤害，豁免成功则伤害减半。本法术对构装生物和不死生物无效。\n若你以一个植物类生物或魔法植物为目标，则其豁免检定具有劣势，且法术对它的伤害取最大值。\n若你以一个非魔法非生物的植物为目标，如一棵树或灌木，则它不进行豁免而直接枯萎死去。\n升环施法效应：使用五环或更高法术位施展该法术时，你使用的法术位每比四环高一环，法术的伤害就增加1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Compulsion",
    "name": "强迫术",
    "english_name": "Compulsion",
    "level": 4,
    "school": "惑控",
    "classes": [
      "吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内你能看到，且能听到你声音的若干生物并迫使其分别进行一次感知豁免。其中无法被魅惑的目标将直接豁免成功，而豁免失败者将受到该法术效应的影响。直至该法术终止前，你可以在你每个回合中用一个附赠动作指向某个水平方向。随后，每个受术目标在其下一回合里必须使用其所有的移动力尽可能的向该方向移动。目标可以在移动前执行其动作，而完成这些移动行为后它可以再进行一次感知豁免以终止该效应。\n每个目标不会被强令走向明显致命的危害物中，比如火堆或陷坑里，不过目标在向指定方向移动时同样可以引起借机攻击。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Confusion",
    "name": "困惑术",
    "english_name": "Confusion",
    "level": 4,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "三颗坚果壳"
    },
    "duration": "专注，至多 1 分钟",
    "description": "此法术冲击并扭曲生物的意志，并使其产生错觉并引发不受控的行动。在施法距离内指定一点，以该点为中心的 10 尺半径球状区域内的所有生物必须进行一次感知豁免并成功通过，否则将受到该法术的影响。\n受术目标不能执行反应并且必须在其回合开始时掷一次 d10 以决定该生物本回合的行为。\n受术生物在其每回合结束时可以在进行一次感知豁免。如果该豁免成功，则该目标身上该法术的效应终止。\n升环施法效应：使用五环或更高法术位施展该法术时，你使用的法术位每比四环高一环，球状区域半径就增加 5 尺。",
    "source": "PHB"
  },
  {
    "id": "spell.4.ConjureMinorElementals",
    "name": "次级元素咒唤术",
    "english_name": "Conjure Minor Elementals",
    "level": 4,
    "school": "咒法",
    "classes": [
      "德鲁伊",
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "你元素咒唤术并使其显现在施法范围内一处你能看见但未被占据的空间。选择以下选项之一作为显现的生物：\n一个挑战等级 2 或更低的元素生物\n两个挑战等级 1 或更低的元素生物\n四个挑战等级 1/2 或更低的元素生物\n八个挑战等级 1/4 或更低的元素生物\n每个被该法术召唤的元素生物在生命值降至0，或者法术终止时消失不见。\n被召唤的生物对你和你的伙伴保持友善关系。你将召唤出来的所有生物视为一个团体来骰出先攻，它们也依此获得其自己的行动回合。他们服从你发出的所有语言命令（不需要你作动作）。如果你不发出任何命令，这些生物会在敌对生物前保护自己，如果没有敌对生物则不执行任何动作。\n这些生物的具体数值由 DM 掌控。\n升环施法效应：使用更高法术位施展该法术时，选择上文所述召唤选项之一，并显现更多生物：六环法术位显现两倍生物，八环法术位显现三倍生物。\n（注：此法术原译作“召唤次级元素生物” ，因易与后续出的《塔莎的万事坩埚》中的法术 元素召唤术Summon Elemental 混淆而改）",
    "source": "PHB"
  },
  {
    "id": "spell.4.ConjureWoodlandBeings",
    "name": "林地之精咒唤术",
    "english_name": "Conjure Woodland Beings",
    "level": 4,
    "school": "咒法",
    "classes": [
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "每个被召唤生物一枚冬青浆果"
    },
    "duration": "专注，至多 1 小时",
    "description": "你召唤出精类并使其显现在施法范围内一处你能看见但未被占据的空间。选择以下选项之一作为显现的生物：\n一个挑战等级 2 或更低的精类生物\n两个挑战等级 1 或更低的精类生物\n四个挑战等级 1/2 或更低的精类生物\n八个挑战等级 1/4 或更低的精类生物\n每个被该法术召唤的精类生物在生命值降为0，或者法术终止时消失不见。\n被召唤的生物对你和你的伙伴保持友善关系。你将召唤出来的所有生物视为一个团体来骰出先攻，它们也依此获得其自己的行动回合。他们服从你发出的所有语言命令（不需要你作动作）。如果你不发出任何命令，这些生物会在敌对生物前保护自己，如果没有敌对生物则不执行任何动作。\n这些生物的具体数值由 DM 掌控。\n升环施法效应：使用更高法术位施展该法术时，选择上文所述召唤选项之一，并显现更多生物：六环法术位显现两倍生物，八环法术位显现三倍生物。\n（注：此法术原译作“召唤林地之精” ，随其他 Conjure 法术的译名修改而改）",
    "source": "PHB"
  },
  {
    "id": "spell.4.ControlWater",
    "name": "操控水体",
    "english_name": "Control Water",
    "level": 4,
    "school": "变化",
    "classes": [
      "牧师",
      "德鲁伊",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "300 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一滴水和一撮土"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你在法术终止前控制任一片独立的水体，控制范围为你指定的一处边长 100 尺的立方区域。施展该法术时，你可以从以下效应中选择其一生效。在你之后的每个自己回合中，你可以用一个动作重复生效同一效应，或是选择实现另一效应。\n上涨Flood。 你使控制区域内水位上涨至多 20 尺。如果该区域包含有滨岸，则水体漫过涨水覆盖的干土。\n如果你指定的区域是一片大水体中的一部分，则你改为制造一片 20 尺高的波浪，并从区域的一边扑向另一边再拍下水面。波浪中任何巨型或更小的载具都会被带到水浪行进的另一边。且所有巨型或更小的载具都有 25%的几率被倾覆。\n直至法术终止或你选择另一个效应前，水位的上涨情况将保持不变。如果该效应用以产生波浪，则波浪在你下一回合开始时再次进行翻打。\n分水Part Water。 你使区域内的水体分开并形成一条水体的沟壑。沟壑从法术区域的一头延伸到另一头，而被分开的水体则在两边形成两道水墙。沟壑维持至法术终止或直至你选择另一个效应。该效应终止时，沟壑会在接下来的一轮里慢慢的恢复成通常的水位。\n转向Redirect Flow。 你使区域内的水体向一个你自选的方向流动。使其绕过障碍，或沿着墙壁向上流，甚至流向一些不太可能的方向，区域内的水体都遵照你指使的方向流动，但一旦其流出法术区域，则恢复为其所在地形的流向。水体持续向你所选方向流动，直至法术终止或直至你选择另一效应。\n漩涡Whirlpool。该效应需要水体至少为 50 尺的方形区域并且至少有 25 尺深。你在区域中央形成一个漩涡。其形态为底部宽 5 尺顶部宽 50 尺，且 25 尺高。水中任何在漩涡 25 尺范围内的生物或物件将被漩涡向自身拉动 10 尺。受影响的生物可以进行一次力量（运动）检定来对抗你的法术 DC，以通过游泳脱离漩涡控制。\n任何生物在一个回合内第一次进入漩涡或者在漩涡内开始其回合时，必须进行一次力量豁免。豁免失败者将受到 2d8 点钝击伤害，并被拖入漩涡中心直至法术终止。豁免成功则伤害减半，且不会被拖入漩涡。被拖入漩涡中心的生物可以用其动作尝试游泳来离开漩涡（如上文所述），但它此时进行的力量（运动）检定具有劣势。\n物件在一回合里第一次进入漩涡时受 2d8 点钝击伤害；如果物件保持在漩涡内，该伤害就会在每轮持续发生。",
    "source": "PHB"
  },
  {
    "id": "spell.4.DeathWard",
    "name": "防死结界",
    "english_name": "Death Ward",
    "level": 4,
    "school": "防护",
    "classes": [
      "牧师",
      "圣武士"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "8 小时",
    "description": "你触碰一个生物，并给予其对死亡的防护。\n目标第一次生命值因承受伤害而降至 0 时，改为生命值降至 1，并终止本法术效应。\n法术生效时，如果目标受到不造成伤害但直接致死效应影响时，改为该致死效应被取消，并终止本法术效应。",
    "source": "PHB"
  },
  {
    "id": "spell.4.DimensionDoor",
    "name": "任意门",
    "english_name": "Dimension Door",
    "level": 4,
    "school": "咒法",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "500 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你将自己从当前位置传送至施法距离内的任意地点，并准确到达该目的地。法术的目的地可以是你能看见的、可想象的地点，也可以是通过距离和方向说明的地点，比如“径直向下 200 尺”，“西北向上 45 度 300 尺”。\n进行传送时，你的随身物件不能超过你的负重。你还可以带上一个自愿的生物，且其体型不能比你大，而他的随身物件也不能超过其负重。该生物在你施法时必须在你 5 尺内。\n如果你的目的地已经被生物或物件占据，则你以及任何与你一起传送的生物都将受到 4d6 点力场伤害，且法术传送失败。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Divination",
    "name": "预言术",
    "english_name": "Divination",
    "level": 4,
    "school": "预言",
    "classes": [
      "仪式；牧师；TCE：德鲁伊",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "适合你宗教信仰的熏香和祭品，总共价值至少 25gp，作为该法术的耗材"
    },
    "duration": "立即",
    "description": "你的魔法和贡品让你得以与一名神或神仆取得联络。你可以就某个特定的目标、事件或活动提问一个与其 7 日内状况相关的问题。 DM 将给予你真实的答复，这个答复可能是一段短语、一节神秘的短诗或是一个预兆。\n此法术的回答并不会顾及所有可能影响结果的情况。比如其他法术的影响，或者同伴的加入和离开等状况。\n若你在两次长休之间两次或更多次的施展该法术，则法术有概率会给出随机的结果。此概率从第二次施展起每次累计 25％。其具体结果由 DM 暗骰决定。",
    "source": "PHB"
  },
  {
    "id": "spell.4.DominateBeast",
    "name": "支配野兽",
    "english_name": "Dominate Beast",
    "level": 4,
    "school": "惑控",
    "classes": [
      "德鲁伊",
      "术士；TCE：游侠"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你试图安抚一头施法距离内你能看见的野兽，目标野兽必须成功通过一次感知豁免，否则将在法术持续时间内被你魅惑。若它正与你或你的友方生物战斗，则其进行该豁免时具有优势。\n该野兽被魅惑时，只要你与其处于同一位面就可以与之保持心灵感应。你在有意识时，可以通过心灵感应命令该生物（不需要作动作），而它则会尽量服从。你可以描述一个简单具体的行为指令，比如“攻击那个生物”“跑到那个位置”或是“去拿那个物品”。生物完成一项指令却未收到你的进一步指示时，将会使用其本身的能力尽可能的保护自己。\n你可以使用动作以彻底而精确的控制目标。直至下个你的回合结束为止，该生物只能执行由你选择的一个或数个动作之一，且不能进行任何未经你许可的行动。在此期间，你还可以用自己的反应去要求该生物执行一项反应。\n每次目标受到伤害时，都可以尝试进行一次感知豁免，豁免成功则法术终止。\n升环施法效应：使用五环法术位施展该法术时，持续时间变为：专注，至多 10 分钟。使用六环法术位施展该法术时，持续时间变为：专注，至多 1 小时。使用七环或更高法术位施展该法术时，持续时间变为：专注，至多 8 小时。",
    "source": "PHB"
  },
  {
    "id": "spell.4.EvardsBlackTentacles",
    "name": "艾伐黑触手",
    "english_name": "Evard's Black Tentacles",
    "level": 4,
    "school": "咒法",
    "classes": [
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "巨章鱼或巨鱿鱼的一条触须"
    },
    "duration": "专注，最长 1 分钟",
    "description": "你指定一处施法距离内你能看见的 20 尺方形区域，使其内布满蠕动的乌黑触须，进而使该区域成为困难地形。\n任何生物在一个回合内第一次进入该区域，或者在区域内开始其回合时，必须进行一次敏捷豁免。豁免失败者将受到 3d6 点钝击伤害，并且被触须束缚直至法术终止。生物在区域内开始其回合时，如果已受触须束缚则受到 3d6 点钝击伤害。\n受触须束缚的生物可以使用动作进行一次对抗法术豁免 DC 的力量检定或敏捷检定（自选其一），检定成功则挣脱束缚。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Fabricate",
    "name": "鬼斧神工",
    "english_name": "Fabricate",
    "level": 4,
    "school": "变化",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "10 分钟",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你将一种原材料转化成该材料制作的成品。例如，你可以将一丛树木转化为一座木桥，一把麻草化为绳子，或是将亚麻和羊毛化作衣物。\n指定施法距离内你能看见的原材料。只要有足够的材料，你就可以将他们转化为一件大型或更小的物件（至多占据 10 尺立方区域或八个相邻的 5 尺立方区域）。如果你的目标材料是金属、石料或者其他矿石材料，那么被制造的物件不能大于中型（至多占据 5 尺立方区域），制成品的质量和原材料质量相同。\n生物或魔法物品不能作为该法术的原料或成品。你只有对制作某物品的工匠工具拥有熟练项时，才能使用该法术制作相应需要高工艺水平制作的物品，如珠宝、武器、玻璃、护甲等。",
    "source": "PHB"
  },
  {
    "id": "spell.4.FireShield",
    "name": "火焰护盾",
    "english_name": "Fire Shield",
    "level": 4,
    "school": "塑能",
    "classes": [
      "法师；TCE：德鲁伊",
      "术士"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块磷或者一只萤火虫"
    },
    "duration": "10 分钟",
    "description": "轻薄缥缈的火焰在法术持续期间环绕着你的身体，散发出10尺半径的明亮光照和再延伸10尺的微光光照。你可以借由使用一个动作解消它以提早结束此法术。\n这层火焰可以提供你温暖的护盾或寒冷的护盾，由你选择。温暖的护盾将赋予你对冷冻伤害的抗性，而寒冷的护盾则会赋予你对火焰伤害的抗性。\n此外，每当一个距离你5尺内的生物以一次近战攻击命中你时，这个护盾将迸发出火焰袭击攻击者。温暖护盾将对攻击者造成2d8点火焰伤害，寒冷护盾将对攻击者造成2d8点冷冻伤害。",
    "source": "PHB"
  },
  {
    "id": "spell.4.FreedomofMovement",
    "name": "行动自如",
    "english_name": "Freedom of Movement",
    "level": 4,
    "school": "防护",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊",
      "游侠",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一条绑在手臂或其他肢体上的皮带"
    },
    "duration": "1 小时",
    "description": "你触碰一个自愿生物，并使目标在法术持续时间内移动时不受困难地形限制，并使任何降低目标速度，或者使目标陷入麻痹或束缚的法术或魔法效应对其无法生效。\n该目标还可以花费 5 尺移动力直接从非魔法的束缚中挣脱（诸如镣铐或生物的擒抱等）。此外，目标在水下进行移动和攻击时不再受减益规则的限制。",
    "source": "PHB"
  },
  {
    "id": "spell.4.GiantInsect",
    "name": "巨虫术",
    "english_name": "Giant Insect",
    "level": 4,
    "school": "变化",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "你指定施法距离内至多十只蜈蚣，或三只蜘蛛，或五只黄蜂，或一只蝎子作为法术目标，在法术持续时间内你将其转化为它们自然形态的巨大版本。蜈蚣变成巨蜈蚣，蜘蛛变成巨蜘蛛，黄蜂变成巨黄蜂，蝎子变成巨蝎。\n每只生物都将服从你的口头命令。在战斗中，它们每轮在你的回合行动。这些生物的属性数据及其动作选项和移动能力均由 DM 掌控。\n在法术持续时间内，目标生物将维持其巨大的体型，直到其生命值降至 0 或你用一个动作解除其身上的效应为止。\nDM 可能会允许你指定不同的生物作为法术目标。例如，如果你转化一只蜜蜂，则其巨大版本可能会使用与巨黄蜂一样的属性数据。",
    "source": "PHB"
  },
  {
    "id": "spell.4.GraspingVine",
    "name": "擒抱藤",
    "english_name": "Grasping Vine",
    "level": 4,
    "school": "咒法",
    "classes": [
      "德鲁伊",
      "游侠"
    ],
    "castingTime": "1 附赠动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你指定施法距离内一个你能够看见的未被占据空间，并召唤一条藤蔓使其从该空间的地面上破土而出。施展该法术时，你可以指使该藤蔓抽拉其 30 尺范围内一个你能看见的生物。该生物必须进行一次敏捷豁免，豁免失败则被往藤蔓所在方向拉近 20 尺。\n直至该法术终止前，你可以在你的回合里用一个附赠动作指使藤蔓抽拉同一生物或者转向抽拉另一个生物。",
    "source": "PHB"
  },
  {
    "id": "spell.4.GreaterInvisibility",
    "name": "高等隐形术",
    "english_name": "Greater Invisibility",
    "level": 4,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你或一个你触碰的生物变为隐形，直至法术终止。任何保持在目标身上的着装物和携带物也可以维持隐形状态。",
    "source": "PHB"
  },
  {
    "id": "spell.4.GuardianofFaith",
    "name": "信仰守卫",
    "english_name": "Guardian of Faith",
    "level": 4,
    "school": "咒法",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "8 小时",
    "description": "一个大型的幽灵守护者出现在施法距离内一个你能看见且由你指定的未被占据空间，并在法术持续时间内在该处悬浮。占据该空间的守护者除了一把闪光的剑和饰有你守护神标志的盾牌外，其他部位都只是一片模糊。\n任何与你敌对的生物在一回合内第一次进入守护者身边 10 尺范围内时必须进行一次敏捷豁免。豁免失败者将受到 20 点光耀伤害，豁免成功则伤害减半。守护者在造成总共 60 点伤害后随即消失。",
    "source": "PHB"
  },
  {
    "id": "spell.4.HallucinatoryTerrain",
    "name": "幻景",
    "english_name": "Hallucinatory Terrain",
    "level": 4,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "邪术师",
      "法师"
    ],
    "castingTime": "10 分钟",
    "range": "300 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块石头、一枝嫩枝和一小片绿色植物"
    },
    "duration": "24 小时",
    "description": "你使施法距离内一处 150 尺立方区域内的自然地形在视觉、听觉、嗅觉上都像是另一种自然地形。因此，开阔的平原或者一条路可能会变得像是一片沼泽，或是丘陵、裂谷以及其他困难地形，甚至是无法通过的地形。一个池塘可能变得看起来像一片草地，一个悬崖像是一个缓坡，或者使一条乱石沟像是一条宽阔平坦的道路。区域内经过加工的建筑、设备或生物的外表不会改变。\n地形的触觉特征不会改变，所以进入这片区域的生物可能会看穿幻象。如果触觉区别不明显，一个认真调查幻象的生物可以尝试进行一次对抗法术豁免 DC 的智力（调查）检定以揭穿幻象。对于一个识破了幻象本体的生物，幻象看起来就像是一层模糊的图像叠加在真实地形上。",
    "source": "PHB"
  },
  {
    "id": "spell.4.IceStorm",
    "name": "冰风暴",
    "english_name": "Ice Storm",
    "level": 4,
    "school": "塑能",
    "classes": [
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "300 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一撮尘土和几滴水"
    },
    "duration": "立即",
    "description": "以施法距离内一点为中心的一处半径 20 尺，高 40 尺的柱状区域内，岩石般坚硬的冰雹重重地砸向地面。每个处在范围内的生物都必须进行一次敏捷豁免，豁免失败者将受到 2d8 的钝击伤害和 4d6 点冷冻伤害，豁免成功则伤害减半。\n冰雹使风暴影响的区域变为困难地形，直至你的下一回合结束。\n升环施法效应：使用五环或更高法术位施展该法术时，你使用的法术位每比四环高一环，钝击伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.4.LeomundsSecretChest",
    "name": "李欧蒙秘藏箱",
    "english_name": "Leomund's Secret Chest",
    "level": 4,
    "school": "咒法",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个 3×2×2 尺，由稀有材料制成的精致箱子至少价值 5000gp；以及由同样材料制成的一个箱子的微缩模型至少价值 50gp"
    },
    "duration": "立即",
    "description": "你将一个箱子及其内容物藏在以太位面。你必须同时接触箱子和作为法术材料成分的微缩模型。箱子最多可容纳 12 立方尺的非活体物质（3×2×2 尺）。\n箱子处于以太位面时，你可以用一个动作并触碰箱子的模型来召回箱子。箱子出现在你 5 尺内一个未被占据空间的地面。随后，你可以使用一个动作并同时触碰箱子与复制品来把箱子送回以太位面。\n60 日之后，法术的效应会每日累计 5%的概率自动结束。如果你再次施展该法术或箱子的模型被摧毁，又或者以一个动作终止该法术时，该法术的效应将随之终止。如果法术终止时箱子处于以太界，则其将不可挽回地丢失。",
    "source": "PHB"
  },
  {
    "id": "spell.4.LocateCreature",
    "name": "生物定位术",
    "english_name": "Locate Creature",
    "level": 4,
    "school": "预言",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊",
      "圣武士",
      "游侠",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块寻血猎犬的皮毛"
    },
    "duration": "专注，至多 1 小时",
    "description": "你点名或描述一个你熟悉的生物。只要该生物与你相距不超过 1000 尺，你就会感测到该生物的方位。如果该生物正在移动，则你也将知晓其移动的方向。\n该法术可以定位一个你认识的特定生物；或者它也可以定位特定的一类生物（例如人类或独角兽）中距你最近个体，不过你需要在 30 尺的近距离内看到过该类生物至少一次。如果被点名或描述的生物并不处于其原本的形态（例如正被一个 变形术polymorph 的法术效应影响），则该法术无法定位该生物。\n如果至少 10 尺宽的流水横亘于你和被定位生物之间阻挡了二者间的通路，则该生物也无法被该法术所定位。",
    "source": "PHB"
  },
  {
    "id": "spell.4.MordenkainensFaithfulHound",
    "name": "魔邓肯忠犬",
    "english_name": "Mordenkainen's Faithful Hound",
    "level": 4,
    "school": "咒法",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一只微型银质哨子、一块骨头和一根线"
    },
    "duration": "8 小时",
    "description": "指定施法距离内一处你能看见且未被占据的空间，你在该处创造出一只幻影守护犬。守护犬会在法术持续时间内留在原地，直到你使用一个动作将其解散，或者直到你移动到距它 100 尺外。\n除你之外的所有生物视守护犬处于隐形状态，且无法对其造成伤害。当一个小型或更大的生物进入守护犬 30 尺内时，如果该生物无法说出你在施法时设定的口令，守护犬则会开始大声吠叫。守护犬能看见隐形生物，也可以观察到以太位面，并且无视幻术的影响。\n在你的每回合开始时，守护犬会尝试啮咬其5尺范围内一个与你敌对的生物。它的攻击加值等于你施法属性调整值+你的熟练加值。若命中，则造成 4d8 点穿刺伤害。",
    "source": "PHB"
  },
  {
    "id": "spell.4.MordenkainensPrivateSanctum",
    "name": "魔邓肯私人密室",
    "english_name": "Mordenkainen's Private Sanctum",
    "level": 4,
    "school": "防护",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "10 分钟",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一片薄铅片、一块不透明的玻璃、一小块棉花或布料和贵橄榄石粉末"
    },
    "duration": "24 小时",
    "description": "你对施法距离内一片区域施以魔法防护。该区域为一立方区域，其边长至小 5 尺，大至 100 尺。该法术一直持续至持续时间结束或施法者以一个动作主动解除。\n施展该法术时，其生效的保护内容由你决定。在以下几项属性中作选择，你可以选择若干项或者全部选择：\n声音不能穿透被保护区域边缘的障壁\n被保护区域的障壁变得黑暗而模糊，无法通过视觉（包括黑暗视觉）看穿。\n预言法术创造的传感器无法出现在被保护区域内，也无法穿过区域边界处的障壁。\n区域内的生物不能成为预言法术的目标。\n任何事物无法通过传送进出被保护区域。\n在被保护区域内，位面旅行被封锁。\n每日在同一个位置施展此法术，持续一年，会使这些效果成为永久性效果。\n升环施法效应：使用五环或更高法术位施展此法术时，你使用的法术位每比四环高一环，你就可以将被保护的立方区域边长增加 100 尺。比如使用五环法术位时，你就能保护边长至多 200 尺的立方区域。",
    "source": "PHB"
  },
  {
    "id": "spell.4.OtilukesResilientSphere",
    "name": "欧提路克弹力法球",
    "english_name": "Otiluke's Resilient Sphere",
    "level": 4,
    "school": "塑能",
    "classes": [
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块透明的半球形水晶和一块与之形状相配的半球形阿拉伯胶"
    },
    "duration": "专注，至多 1 分钟",
    "description": "一个微微发光的力场球将施法距离内一个大型或更小的生物或物件封在其中。一个非自愿的生物必须进行一次敏捷豁免，豁免失败则该生物在法术持续时间内被关封在球体中。\n任何事物——包括实体物件、能量或其它法术效应都不能穿透力场球的障壁进出其内，不过生物在球内仍可以正常呼吸。球体免疫一切伤害，且球内的生物或物件不能被来自球外的攻击或效果所伤害，球内的生物也不能对球外的事物造成伤害。\n该球体没有重量，而其尺寸刚好可以容纳球内的生物或物件。被封住的生物可以使用其动作推动球壁并以该生物速度的一半滚动球体。另外，球体也可以被其他生物拿起或移动。\n对球体施展解离术 disintegrate后可以摧毁球体而不伤害球内的任何事物。",
    "source": "PHB"
  },
  {
    "id": "spell.4.PhantasmalKiller",
    "name": "魅影杀手",
    "english_name": "Phantasmal Killer",
    "level": 4,
    "school": "幻术",
    "classes": [
      "法师；TCE：吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你指定施法距离内一个你能看见的生物，并窥探其噩梦以具象其最深的恐惧，依此创造一个只有目标能看见的幻象化身。目标生物必须进行一次感知豁免。豁免失败时，目标将在法术持续时间内陷入恐慌。在法术终止前，目标必须在其每回合结束时进行一次感知豁免，豁免失败则受 4d10 的心灵伤害。豁免成功则法术终止。\n升环施法效应：使用五环或更高的法术位施展该法术时，你使用的法术位每比四环高一环，伤害就增加 1d10。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Polymorph",
    "name": "变形术",
    "english_name": "Polymorph",
    "level": 4,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个毛虫虫茧"
    },
    "duration": "专注，至多 1 小时",
    "description": "该法术将一个施法距离内你能看见的生物变化为一个新的形态。一个非自愿的生物必须进行一次感知豁免来避免此效应。该法术无法对变形生物或生命值为 0 的生物生效。\n法术产生的变化在法术持续时间内得以维持，或直至目标的生命值降为 0 或死亡。新形态可以是任何挑战等级小于等于目标本身的野兽（如果目标没有挑战等级，则以其等级为基准）。目标的游戏资料以及心智相关的属性值都将被所选定野兽的属性数据取代。而其阵营和个性则仍然保留。\n目标使用其新形态的生命值。当它变回正常形态时，则立即恢复变化前的生命值。如果目标因为生命值降至 0 而变回正常形态，则其正常形态需要承受所有的溢出伤害。只要溢出的伤害没有将该生物正常形态的生命值降为 0，它就不会因打击而陷入昏迷。\n该生物可作出的动作因其新形态而有所限制。它不能说话，不能施法，也不能作出其他需要用手和需要说话的动作。\n目标的装备融入新形态中，但其不能启动，使用，挥舞或以其他方式从其装备上获得增益。",
    "source": "PHB"
  },
  {
    "id": "spell.4.StaggeringSmite",
    "name": "惊惧斩",
    "english_name": "Staggering Smite",
    "level": 4,
    "school": "塑能",
    "classes": [
      "圣武士"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术持续时间内下一次用近战武器攻击命中某个生物时你的武器将同时贯穿对方的身体与心智。该攻击对目标造成额外 4d6 的心灵伤害。该目标必须进行一次感知豁免，豁免失败则目标进行攻击检定和属性检定时具有劣势，且不能执行反应直至其下一回合结束。",
    "source": "PHB"
  },
  {
    "id": "spell.4.StoneShape",
    "name": "塑石术",
    "english_name": "Stone Shape",
    "level": 4,
    "school": "变化",
    "classes": [
      "牧师",
      "德鲁伊",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "软粘土，必须捏成你想塑造的大致形状"
    },
    "duration": "立即",
    "description": "你触碰一个体积为中型或更小的石质物件或某块岩石长宽高都不超过 5 尺的一部分，并将其塑造成你想要的任意形状。比如你可以将一块大石头变成一件武器、一尊塑像、一具棺材，也可以在石墙上开出一条小通道，前提是墙的厚度不能超过 5 尺。你也可以使一扇石门或石质门框变形来将门封死。你创造的物件最多可以有两条铰链和一道闩，除此之外不能以该法术能塑造出更复杂的机械结构。",
    "source": "PHB"
  },
  {
    "id": "spell.4.Stoneskin",
    "name": "石肤术",
    "english_name": "Stoneskin",
    "level": 4,
    "school": "防护",
    "classes": [
      "德鲁伊",
      "游侠",
      "术士",
      "法师",
      "奇械师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "价值 100gp 的钻石粉尘，作为该法术的耗材"
    },
    "duration": "专注，至多 1 小时",
    "description": "该法术使你触碰的一个自愿生物皮肤变得硬如岩石。目标在法术终止前对非魔法的钝击、穿刺和挥砍伤害具有抗性。",
    "source": "PHB"
  },
  {
    "id": "spell.4.WallofFire",
    "name": "火墙术",
    "english_name": "Wall of Fire",
    "level": 4,
    "school": "塑能",
    "classes": [
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块磷"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在施法距离内一块实体地面上创造出一面火墙。你可以选择创造长不过 60 尺、高不过 20 尺、厚不过 1 尺的直线型火墙；或是直径不过 20 尺、高不过 20 尺、厚不过 1 尺的环形火墙。火墙不透明，且将持续存在至法术终止。\n火墙出现时，所有位于火墙区域内的生物必须进行一次敏捷豁免。豁免失败者将受到 5d8 点火焰伤害。豁免成功则伤害减半。\n施展该法术时，你要必须选择火墙的哪一侧会造成伤害。生物在火墙伤害侧 10 尺内或在火墙区域内结束其回合时，将受到 5d8 点火焰伤害。生物在一个回合内第一次进入火墙或在火墙内结束其回合时也会受到同样的伤害。火墙的另一侧则不造成任何伤害。\n升环施法效应：使用五环或更高法术位施展该法术时，你使用的法术位每比四环高一环，法术的伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.5.AnimateObjects",
    "name": "活化物件",
    "english_name": "Animate Objects",
    "level": 5,
    "school": "变化",
    "classes": [
      "吟游诗人、术士、法师）"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "物件在你的命令下“活”了过来。在施法距离内指定至多十个未被持用或穿戴的非魔法物件作为法术目标。其中，中型目标视为两个物件，大型目标视为四个物件，而巨型目标则视为八个物件，而你无法活化比巨型更大的物件。施法后，每个目标被唤起为受你控制的生物直至法术终止，或直至该生物生命值降至 0。\n你可以使用一个附赠动作并以精神命令操纵 500 尺内任何你用此法术唤起的生物（如果你操纵多个生物，则你的命令可以同时传达给它们全部或是其中的某几个，不过只能使用同一种命令）。你决定被操纵生物下回合的动作和移动。或者，你也可以选择下达宽泛的命令（比如守护某个房间或走廊）。没有接受到你命令的生物只会对敌对生物作出自卫行为。一旦被下达命令，该生物会持续执行命令直到任务完成。 \n活化物件属性资料Animated Object Statistics \n体型\tHP\tAC\t攻击\t力量\t敏捷\n微型\t20\t18\t命中+8，伤害 1d4+4\t4\t18\n小型\t25\t16\t命中+6，伤害 1d8+2\t6\t14\n中型\t40\t13\t命中+5，伤害 2d6+1\t10\t12\n大型\t50\t10\t命中+6，伤害 2d10+2\t14\t10\n巨型\t80\t10\t命中+8，伤害 2d12+4\t18\t6\n被活化物件的 AC、HP、攻击，以及力量和敏捷值由其体型决定。其体质为 10，智力和感知为 3，魅力为 1。其速度为 30 尺，如果它没有腿或者类似的构造，则改为 30 尺的飞行速度并且可以悬浮。如果该物件被牢牢固定在某个表面或更大的物件上（例如被铁链拴在墙上），则其速度为 0。其拥有 30 尺盲视感官，该感官范围之外则视为目盲状态。被活化物件的生命值降至 0 时，即变回普通的物件，且以物件形态承受所有溢出的伤害。\n如果你命令活化物件发动攻击，则它可以对其 5 尺内的一个生物发动一次近战攻击。它将发动一记猛击并造成钝击伤害，相应的攻击加值和伤害由其体型决定。此外，DM 还可以认定某些物件可以造成挥砍或穿刺伤害。\n升环施法效应：使用六环或更高法术位施展该法术时，你使用的法术位每比五环高一环，就多唤起两个物件。",
    "source": "PHB"
  },
  {
    "id": "spell.5.AntilifeShell",
    "name": "防活物护罩",
    "english_name": "Antilife Shell",
    "level": 5,
    "school": "防护",
    "classes": [
      "德鲁伊）"
    ],
    "castingTime": "1 动作",
    "range": "自身（10 尺半径）",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "闪光的屏障环绕你周边 10 尺内的区域并以你为中心移动，其阻绝除不死生物和构装生物之外的生物类型。护罩持续存在至法术终止。\n护罩阻止受影响的生物穿过或进入其内，但受影响的生物可以使用法术，远程武器或触及武器对护罩内部发动攻击。\n若你移动时迫使受影响生物进入护罩内，则法术随之终止。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Awaken",
    "name": "启蒙术",
    "english_name": "Awaken",
    "level": 5,
    "school": "变化",
    "classes": [
      "吟游诗人、德鲁伊）"
    ],
    "castingTime": "8 小时",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块价值至少 1000gp 的玛瑙，作为该法术的耗材。"
    },
    "duration": "立即",
    "description": "利用施法的 8 小时引导一块昂贵宝石中的魔法回路后，你触碰一个巨型或更小的野兽或植物作为法术目标。目标必须没有智力值或智力小于等于 3。受术后其智力变为 10，且学会说一门你所掌握的语言。如果目标是植物，则他获得使用枝、根、藤、蔓或类似部位移动的能力，并获得类似于人类的感官。DM 为启蒙植物决定属性数据，例子可参考《怪物图鉴》中的 启蒙灌木Awakened Shrub 与 启蒙树木Awakened Tree 。\n被启蒙的植物或野兽在 30 日内处于被你魅惑的状态，或是直到你或你的盟友做出任何伤害它的举动。魅惑终止后，启蒙生物将根据你对待他的方式决定是否对你保持友善。",
    "source": "PHB"
  },
  {
    "id": "spell.5.BanishingSmite",
    "name": "放逐斩",
    "english_name": "Banishing Smite",
    "level": 5,
    "school": "防护",
    "classes": [
      "圣武士）"
    ],
    "castingTime": "1 附赠动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在法术终止前的下一次武器攻击命中某生物时将从武器中爆发巨力，使该次攻击对目标额外造成 5d10 点力场伤害。此外，如果本攻击将目标的生命值降低至 50 以下，则该生物被放逐。如果目标不是你所处位面的原住民，则他将被放逐回其家园位面。如果目标是你所处位面的原住民，则他将被放逐到一个无害的半位面。在半位面期间，该生物处于失能状态。直至法术终止时，目标将出现在其被放逐前的位置。如果该位置被占据，则目标将出现在距离该位置最近的一个未被占据空间。",
    "source": "PHB"
  },
  {
    "id": "spell.5.BigbysHand",
    "name": "毕格比之手",
    "english_name": "Bigby's Hand",
    "level": 5,
    "school": "塑能",
    "classes": [
      "法师、奇械师；TCE：术士）"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块蛋壳和一只蛇皮手套"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在施法距离内指定一处你能看见且未被占据的空间，并在该处创造出一只闪烁着微光的大型手掌。巨手在法术持续时间内维持存在，并听从你的命令模仿你手掌移动的方式进行移动。\n巨手视为一个物件，其 AC 为 20，生命值等于你的生命值上限。如果它的生命值降至 0 则法术提前终止。其力量为 26(+8)，敏捷为10(+0)。巨手并不占据其所在的空间。 　　施展此法术时，你可以令巨手移动至多 60 尺远并造成下列效应之一。你也可以在自己随后的回合里以一个附赠动作完成该效应。\n金刚拳Clenched Fist。 巨手对自身 5 尺内的一个生物或物件发动打击。用你自身的游戏资料发动一次近战法术攻击，并在命中时造成4d8点力场伤害。 \n飞击掌Forceful Hand。 巨手尝试对自身 5 尺内的一个生物进行推挤。用巨手的力量检定与目标的力量（运动）检定作对抗。如果目标为中型或更小的生物则你的检定具有优势。你胜出对抗时，目标将被推开数尺，其具体尺数等于 5 加上你施法属性调整值的五倍。巨手随着目标一起移动，并与之保持 5 尺的距离。\n擒拿掌Grasping Hand。 巨手尝试对自身 5 尺内的一个巨型或更小的生物进行擒抱。该擒抱的计算数据使用巨手的力量值。如果目标体型为中型或更小，则你的检定具有优势。在巨手擒抱目标期间，你可以使用一个附赠动作命令巨手对其进行挤压，并对目标造成 2d6+你的施法属性调整的钝击伤害。\n护身掌Interposing Hand。 巨手阻挡在你和一名你所选生物中间，直到你给他另一个命令为止。巨手不断移动保持在你和目标中间，使得你相对目标处于半身掩护。如果目标的力量值小于或等于巨手的力量值，则其无法穿过巨手的阻挡。如果其力量值高于巨手，则目标可以穿过巨手所在的空间，不过该空间对该目标视为困难地形。\n升环施法效应：使用六环或更高法术位施展该法术时，你使用的法术位每比五环高一环，则金刚拳的伤害提高 2d8，擒拿掌的伤害提高 2d6。",
    "source": "PHB"
  },
  {
    "id": "spell.5.CircleofPower",
    "name": "原力法阵",
    "english_name": "Circle of Power",
    "level": 5,
    "school": "防护",
    "classes": [
      "圣武士）"
    ],
    "castingTime": "1 动作",
    "range": "自身（30 尺半径）",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 10 分钟",
    "description": "你身上发出神圣能量并以扭曲散溢的魔法能量构成一个半径 30 尺的球状力场。法术持续时间内力场将以你为中心随你移动。力场范围内的友方生物（包括你自己）为对抗法术或其他魔法效应而进行的豁免检定具有优势。此外，受该法术效应影响的生物在对抗豁免成功则伤害减半的法术或魔法效应时，若成功则不受伤害。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Cloudkill",
    "name": "死云术",
    "english_name": "Cloudkill",
    "level": 5,
    "school": "咒法",
    "classes": [
      "术士、法师）"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "你在施法距离内指定一点，并以该点为中心创造一片 20 尺半径的球状黄绿色剧毒浓雾，且该浓雾会围绕拐角扩散。雾气在法术持续时间内维持存在，但仍会被强风吹散。而其存在区域则视为重度遮蔽。\n任何生物在一个回合内第一次进入法术区域，或者在区域内开始其回合时，必须进行一次体质豁免。豁免失败者将受到 5d8 点毒素伤害，豁免成功则伤害减半。该生物就算屏住呼吸或者不需要呼吸也会受到浓雾效应的影响。\n浓雾在你每回合开始时沿着地面向远离你的方向移动 10 尺。雾气比空气重，因此会沉落低洼地面甚至渗进地隙中。\n升环施法效应：使用六环或更高法术位施展该法术时，你使用的法术位每比五环高一环，法术的伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Commune",
    "name": "通神术",
    "english_name": "Commune",
    "level": 5,
    "school": "预言",
    "classes": [
      "仪式；牧师"
    ],
    "castingTime": "1 分钟",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "焚香和一小瓶圣水或邪水"
    },
    "duration": "1 分钟",
    "description": "你与所信奉神或其代理人进行联系，并询问至多三个能以“是”或“否”回答的问题。你必须在法术终止前完成提问，并在随后分别获得每个问题的答案。\n这些神能存在也并非全知全能，因此当问题涉及的信息超过神的认知范围时，你可能会得到一句“不确定”作为回答。另外当一个单词可能引致误导，或者与神的兴致相违背时，DM 可能会提供一句短语作为答案。\n若你在两次长休之间两次或更多次的施展该法术，则法术有一定的几率不给任何答复。此概率从第二次施展起每次累计 25％。其具体结果由 DM 暗骰决定。",
    "source": "PHB"
  },
  {
    "id": "spell.5.CommunewithNature",
    "name": "问道自然",
    "english_name": "Commune with Nature",
    "level": 5,
    "school": "预言",
    "classes": [
      "仪式；德鲁伊、游侠"
    ],
    "castingTime": "1 分钟",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你短暂的成为大自然的一部分并以此获得周围地形的信息。在户外时，该法术可以让你了解 3 里内大地的状况。在洞穴和其他天然地下场所中，其范围缩小为 300 尺半径区域内。自然环境中被建筑覆盖的区域里（比如地下城或城镇中）法术无法生效。\n你立即获得的自然资讯至多与该地域三个方面的主题相关，在以下项目中进行选择： \n•\t地形和水体\n•\t区域内分布的植物，矿物，动物或人物\n•\t强大的天界生物，精类生物，邪魔，元素生物或者不死生物\n•\t受其他存在位面的影响\n•\t建筑物\n例如，你可以侦测到某个强大不死生物在区域中的位置，干净安全的水源所在地，以及附近城镇的方位。",
    "source": "PHB"
  },
  {
    "id": "spell.5.ConeofCold",
    "name": "寒冰锥",
    "english_name": "Cone of Cold",
    "level": 5,
    "school": "塑能",
    "classes": [
      "术士、法师；TCE：德鲁伊）"
    ],
    "castingTime": "1 动作",
    "range": "自身（60 尺锥状）",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个小水晶或玻璃锥"
    },
    "duration": "立即",
    "description": "一片冷空气从你手上迸发而出。在 60 尺锥状区域内的每个生物必须进行一次体质豁免。豁免失败者将受到 8d8 点冷冻伤害，豁免成功则伤害减半。\n被该法术杀死的生物将成为一尊冰冻塑像并持续至被解冻。\n升环施法效应：使用六环或更高法术位施展该法术时，你使用的法术位每比五环高一环，法术伤害就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.5.ConjureElemental",
    "name": "元素咒唤术",
    "english_name": "Conjure Elemental",
    "level": 5,
    "school": "咒法",
    "classes": [
      "德鲁伊、法师）"
    ],
    "castingTime": "1 分钟",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "气元素为点燃的焚香，土元素为陶土，火元素为硫和磷，水元素为水和沙子"
    },
    "duration": "专注，至多 1 小时",
    "description": "你召唤出一个元素生物仆从。在施法距离内指定一处充满气、土、火、水四物质其一的 10 尺立方区域作为法术目标。例如，一只火元素从篝火中成型，而一只土元素则从地面上浮现。一个挑战等级 5 或者更低的元素生物从目标区域成型，并显现在该区域 10 尺内一处未被占据空间。该生物在生命值降至 0 时，或者法术终止时消失不见。\n被召唤的元素生物对你和你的伙伴保持友善关系。你为召唤出来的元素生物骰先攻，它也依此获得其自己的行动回合。该元素生物服从你发出的所有语言命令（不需要你作动作）。如果你不发出任何命令，该生物会在敌对生物前保护自己，如果没有敌对生物则不执行任何动作。\n如果你专注被打断，该元素生物并不会因此消失不见，但你会因此失去该元素生物的控制权。失控的元素生物对你和你的伙伴变为敌对，并随时准备发动攻击。不受控的元素生物无法被你解散，并在你的召唤开始算起1小时后消失不见。\n该元素生物的具体数值由 DM 掌控。\n升环施法效应：使用六环或更高法术位施展该法术时，你使用的法术位每比五环高一环，召唤生物挑战等级就增加 1。 \n（注：此法术原译作“召唤元素生物” ，因易与后续出的《塔莎的万事坩埚》中的法术 元素召唤术Summon Elemental 混淆而改）",
    "source": "PHB"
  },
  {
    "id": "spell.5.ConjureVolley",
    "name": "万箭齐发",
    "english_name": "Conjure Volley",
    "level": 5,
    "school": "咒法",
    "classes": [
      "游侠）"
    ],
    "castingTime": "1 动作",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一发弹药或一把投掷武器"
    },
    "duration": "立即",
    "description": "你向空中用远程武器射出一发非魔法的弹药或者掷出一把非魔法的投掷武器，并指定施法距离内一点，随后，无数以所发射弹药或武器为原型的复制体向该点倾盆而下，并在完成攻击后消失不见。箭雨充斥以目标点为中心半径 40 尺，高 20 尺的柱状区域，其内的每个生物都必须进行一次敏捷豁免，豁免失败者将受到 8d8 点伤害，豁免成功则伤害减半。法术所造成伤害的类型与用作法术成分材料的弹药或武器相同。",
    "source": "PHB"
  },
  {
    "id": "spell.5.ContactOtherPlane",
    "name": "异界探知",
    "english_name": "Contact Other Plane",
    "level": 5,
    "school": "预言",
    "classes": [
      "仪式；邪术师、法师）"
    ],
    "castingTime": "1 分钟",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "1 分钟",
    "description": "你与一名半神，或者一个古老的贤者亡魂，又或是其他异位面的神秘实体建立了精神的连接。与这些跨位面亚种生物进行的知性接触可能会增加你的精神负担，甚至导致精神崩溃。当你施展此法术时，进行一个 DC15 的智力豁免。豁免失败时，你受到 6d6 点心灵伤害并因此而变得错乱，直至完成一个长休以结束该状态。处于错乱状态时，你不能执行动作，不能理解其他生物说的话也无法阅读，你说出口的也都是一些含糊不清的语句。对你施放法术 高等复原术greater restoration 可以直接终止该效应。\n豁免成功时，你可以询问该实体五个问题。你必须在法术结束前提出你的问题。而你所提出的每条问题 DM 都可以用一个单词作回答，比如“是”“不是”“可能”“不可能”“没关系”或是“不清楚”（如果该实体不知道该问题答案时）。如果一个单词的答案可能导致误导，DM 可能会用一句短语来作为问题的答案。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Contagion",
    "name": "疫病术",
    "english_name": "Contagion",
    "level": 5,
    "school": "死灵",
    "classes": [
      "牧师、德鲁伊）"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "7 日",
    "description": "你的触碰带着疾病。你对触及范围内一个生物发动一次近战法术攻击。若命中，则该目标中毒。\n该中毒目标的每一回合结束时，必须进行一次体质豁免。若该目标累计三次该豁免成功，则其不再中毒且该法术终止。若该目标累计三次该豁免失败，其亦不再中毒，但必须从以下描述的疾病中选择其一。随后该目标将受选定的疾病影响直至该法术持续时间结束。\n由于法术对目标引发的是自然疾病，因此任何移除疾病或改善疾病状况的效应都可以对受术生物产生影响。\n失明症Blinding Sickness。 痛苦缠绕着患病者的意志，并使其眼睛变成奶白色。患病生物进行感知检定和感知豁免时具有劣势，并且承受目盲状态。\n腐热症Filth Fever。 患者身体发起严重的高烧。患病生物进行力量检定和力量豁免时，以及发动基于力量的攻击检定时具有劣势。\n烂肉症Flesh Rot。 患者的肌肤逐渐腐朽。患病生物进行魅力检定时具有劣势，并且具有所有伤害类型的伤害易受。\n脑热症Mindfire。患者头脑发热。患病生物进行智力检定和智力豁免时具有劣势，并且其在战斗中视为受到困惑术 confusion效应影响。\n癫痫症Seizure。患者全身颤抖不止。患病生物进行敏捷检定和敏捷豁免时，以及发动基于敏捷的攻击检定时具劣势。\n恶心症Slimy Doom。 患者开始不受控地流血。患病生物进行体质检定和体质豁免时具有劣势。另外每当该生物受到伤害时都会陷入震慑状态，直至其下一回合结束。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Creation",
    "name": "造物术",
    "english_name": "Creation",
    "level": 5,
    "school": "幻术",
    "classes": [
      "术士、法师、奇械师"
    ],
    "castingTime": "1 分钟",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "所创造物品的一小部分"
    },
    "duration": "特殊",
    "description": "你从堕影冥界取来一些暗影物质，并在施法距离内创造一个非活体的物件。你可以创造一个植物质（类似纺织品、绳索、木质等）的物件。也可以创造一个矿物质（类似石质、水晶、金属等）的物件。创造出来的物件大小必需在 5 立方尺内，且其形态与材质你必需曾经见过。\n法术的持续时间由所创造物件的材质决定。如果所创造物件由多种材质组合而成，则其存在时间取其中最短者。 \n?\n材质\t持续时间\n植物质vegetable matter\t1 日\n石质stone，水晶crystal\t12 小时\n贵金属precious metals\t1 小时\n宝石gems\t10 分钟\n精金adamantine，秘银mithral\t1 分钟\n施展其他法术时，如果以这些创造物作为其材料成分将会使该法术施法失败。\n升环施法效应：使用六环或更高法术位施展该法术时，你使用的法术位每比五环高一环，创造物尺寸的立方边长就加大 5 尺。",
    "source": "PHB"
  },
  {
    "id": "spell.5.DestructiveWave",
    "name": "湮灭波",
    "english_name": "Destructive Wave",
    "level": 5,
    "school": "塑能",
    "classes": [
      "圣武士）"
    ],
    "castingTime": "1 动作",
    "range": "自身（半径30尺）",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你击打地面，并从身上爆发出一阵神圣能量。30 尺范围内每个你所指定的生物都必须进行一次体质豁免。豁免失败者将受到 5d6 点雷鸣伤害以及 5d6 点光耀或黯蚀伤害（由你选择）并应击倒地，豁免成功则伤害减半且不会应击倒地。",
    "source": "PHB"
  },
  {
    "id": "spell.5.DispelEvilandGood",
    "name": "反制善恶",
    "english_name": "Dispel Evil and Good",
    "level": 5,
    "school": "防护",
    "classes": [
      "牧师、圣武士）"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "圣水或银铁粉末"
    },
    "duration": "专注，至多 1 分钟",
    "description": "发光的能量环绕着你，并保护你免受来自精类生物、不死生物和源于主物质位面外异域生物的伤害。天界生物、元素生物、精类生物、邪魔、不死生物对你发动攻击检定时具有劣势。\n你可以通过以下方式提前终止此法术。 \n破除惑控Break Enchantment。你使用动作触碰一个触及范围内的生物。如果该生物受天界生物、元素生物、精类生物、邪魔或不死生物影响而陷入魅惑、恐慌，或是被附身状态，则生物的这些状态即时结束。 \n驱逐Dismissal。你使用动作发动一次近战法术攻击，攻击一个天界生物、元素生物、精类生物、邪魔或不死生物。命中时，你可以尝试将该生物驱逐回其原属位面。该生物必须成功通过一此魅力豁免，否则将强制返回其原属位面（若已在原属位面则无效）。比如精类生物会返回妖精荒野，不死生物会返回堕影冥界。",
    "source": "PHB"
  },
  {
    "id": "spell.5.DominatePerson",
    "name": "支配人类",
    "english_name": "Dominate Person",
    "level": 5,
    "school": "惑控",
    "classes": [
      "吟游诗人、术士、法师）"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你试图安抚一个施法距离内你能看见的类人生物，目标生物必须必须成功通过一次感知豁免，否则将在法术持续时间内被你魅惑。若它正与你或你的友方生物战斗，则其进行该豁免时具有优势。\n目标被魅惑时，只要你与其处于同一位面就可以与之保持心灵感应。你在有意识时，可以通过心灵感应命令该生物（不需要作动作），而它则会尽量服从。你可以描述一个简单具体的行为指令，比如“攻击那个生物”“跑到那个位置”或是“去拿那个物品”。生物完成一项指令却未收到你的进一步指示时，将会使用其本身的能力尽可能的保护自己。\n你可以使用动作以彻底而精确的控制目标。直至下个你的回合结束为止，该生物只能执行由你选择的一个或数个动作之一，且不能进行任何未经你许可的行动。在此期间，你还可以用自己的反应去要求该生物执行一项反应。\n每次目标受到伤害时，都可以尝试进行一次感知豁免，豁免成功则法术终止。\n升环施法效应：使用六环法术位施展该法术时，持续时间变为：专注，至多 10 分钟。使用七环法术位施展该法术时，持续时间变为：专注，至多 1 小时。使用八环或更高法术位施展该法术时，持续时间变为：专注，至多 8 小时。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Dream",
    "name": "托梦术",
    "english_name": "Dream",
    "level": 5,
    "school": "幻术",
    "classes": [
      "吟游诗人、邪术师、法师）"
    ],
    "castingTime": "1 分钟",
    "range": "特殊",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一把沙子，一点墨水，和一支从沉睡的鸟儿身上拔下的可书写羽毛"
    },
    "duration": "8 小时",
    "description": "此法术将塑造一个生物的梦境。指定一个你已认知且与你同处一个位面的生物。那些不睡眠的生物（比如精灵），则不会被该法术影响。你或一个被你触碰的自愿生物，将作为信使进入出神状态。该状态下，信使能够意识到自己周围的状况，但是不能执行动作或进行移动。\n如果目标正睡着，则信使可以进入其梦中并在其沉睡期间与之交流。信使可以在法术持续时间内在梦中创造景观、物件和其他影像。信使可以随时结束出神状态并提前终止法术效应。而目标在完全醒来后，可以回忆其梦境的内容。如果你施法时目标醒着，则信使可以了解到这点。此时信使可以终止出神和法术，或是等待目标入睡再进入其梦境。\n你可以让信使以可怕的形象出现。但此时信使只能提供不超过十个单词的信息，而且目标必须成功通过一次感知豁免。豁免失败时，怪影萦绕的噩梦就会影响目标的睡眠，使其无法从休息中获益。并且在其醒来时受到 3d6 点心灵伤害。\n如果你拥有目标身体的部分，比如头发，指甲或类似的东西。则目标进行该豁免时具有劣势。",
    "source": "PHB"
  },
  {
    "id": "spell.5.FlameStrike",
    "name": "焰击术",
    "english_name": "Flame Strike",
    "level": 5,
    "school": "塑能",
    "classes": [
      "牧师）"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小撮硫磺"
    },
    "duration": "立即",
    "description": "一支圣火立柱从天堂带着呼啸降落在你指定的一处地点。圣火以施法距离内指定点为源点形成一处半径 10 尺、高 40 尺柱状区域，其内的每个生物必须进行一次敏捷豁免。豁免失败者将受到 4d6 点火焰伤害和 4d6 点光耀伤害，豁免成功则伤害减半。\n升环施法效应：使用六环或更高法术位施展该法术时，你使用的法术位每比五环高一环，其火焰伤害或光耀伤害（自选其一）就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Geas",
    "name": "指使术",
    "english_name": "Geas",
    "level": 5,
    "school": "惑控",
    "classes": [
      "吟游诗人、牧师、德鲁伊、圣武士、法师"
    ],
    "castingTime": "1 分钟",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "30 日",
    "description": "你对施法距离内你能看见的一个生物置入一条魔法命令，并强迫其执行相应的某种服务或克制某种行为，甚至遵照你的要求行动。如果该生物可以理解你的意思，则它必须成功通过一次感知豁免，否则将在法术持续时间内被你魅惑。被魅惑生物每次作出与你的命令相悖的行为时，即受到 5d10 点心灵伤害。该伤害一日至多生效一次。且不能理解你意思的生物不受该法术影响。\n除了涉及导致必死结果的行为外，你向目标下达的任何命令都会生效。如果你发布自杀指令则法术即时终止。\n你可以用一个动作解除命令并终止法术。法术如移除诅咒 remove curse，高等复原术 greater restoration或祈愿术 wish同样可以终止该法术。\n升环施法效应：使用七环或八环法术位施展该法术时，持续时间变为 1 年。使用九环法术位施展该法术时，法术将一直持续至被上文提及的法术所终止。",
    "source": "PHB"
  },
  {
    "id": "spell.5.GreaterRestoration",
    "name": "高等复原术",
    "english_name": "Greater Restoration",
    "level": 5,
    "school": "防护",
    "classes": [
      "吟游诗人、牧师、德鲁伊、奇械师；TCE：游侠）"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "价值至少 100gp 的钻石粉，作为该法术的耗材"
    },
    "duration": "立即",
    "description": "你为一个触碰到的生物灌注正能量来解除一项弱化效应。你可以使目标的力竭等级降低一级，或者选择终止目标身上的下列效应之一： \n•\t一项影响目标的魅惑或石化效应\n•\t一项诅咒，包括目标与一件被诅咒魔法物品的调谐\n•\t对目标某项属性值的减损\n•\t一项降低目标生命值上限的效应",
    "source": "PHB"
  },
  {
    "id": "spell.5.Hallow",
    "name": "圣居",
    "english_name": "Hallow",
    "level": 5,
    "school": "塑能",
    "classes": [
      "牧师）"
    ],
    "castingTime": "24 小时",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "（价值至少 1000gp 的草药"
    },
    "duration": "直至解除",
    "description": "你触碰一点并将神圣（或邪秽）的力量注入该点周围。区域半径至多 60 尺，若此区域内包含了已被另一个圣居术影响的区域，则此次施法失败。受法术影响的区域具有以下效应。\n首先，天界生物、元素生物、精类生物、邪魔和不死生物无法进入该区域，这些生物也不能对区域内的生物进行魅惑，恐慌或附身。任何被这些生物魅惑，恐慌或附身的生物只要进入该区域后将不再处于魅惑，恐慌或被附身的状态。你可以从上述生物类别中选择一种或更多，使之不受该效应影响。\n其次，你可以为该区域绑定一种额外效应。从下列效应选项中选择其一，或从 DM 提供的效应中选择其一生效。其中某些影响区域内生物的效应可以被设定为影响所有生物，影响追随某特定神明或领袖的生物，或是只影响特定生物种类（例如兽人或巨魔）。当一个可受影响生物在一个回合里首次进入该区域，或是在区域内开始其回合时，它可以进行一次魅力豁免。豁免成功则该生物无视此额外效果直至其离开该区域。\n胆量Couage。区域内的受影响生物不受恐慌。\n黑暗Darkness。区域内处于黑暗环境，普通光源以及比本法术施展法术位更低环阶法术所创造的光源均无法照亮该区域。\n昼明Daylight。区域内处于明亮光照，比本法术施展法术位更环节法术所创造的黑暗无法掩盖亮光。\n能量防护Energy Protection。 区域内受影响生物对一种由你指定的伤害类型具有抗性，所选类型不包括钝击、穿刺和挥砍。\n能量易伤Energy Vulnerability。 区域内的受影响生物对一种由你指定的伤害类型具有易伤，所选类型不包括钝击、穿刺和挥砍。\n永恒安息Everlasting Rest。 区域内埋葬的尸体不能被转化成不死生物。\n次元干涉Extradimensional Interference。 受影响生物不能通过传送，也不能通过异次元或跨位面途径作移动和旅行。\n恐惧Fear。区域内的受影响生物陷入恐慌。\n沉默Silence。声音无法从区域内发出，区域外的声音也不能传到区域内。\n巧言Tongues。受影响生物与区域内的任何其他生物即使语言不通也可以随意交流。",
    "source": "PHB"
  },
  {
    "id": "spell.5.HoldMonster",
    "name": "怪物定身术",
    "english_name": "Hold Monster",
    "level": 5,
    "school": "惑控",
    "classes": [
      "吟游诗人、术士、邪术师、法师）"
    ],
    "castingTime": "1 动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一片直的小铁片"
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内一个你能看见的生物。该目标必须进行一次感知豁免，豁免失败则其在法术持续时间内陷入麻痹。该效应对不死生物无效。目标在其每回合结束时可以再进行一次感知豁免，豁免成功则终止其身上该法术的效应。\n升环施法效应：使用六环或更高法术位施展该法术时，你使用的法术位每比五环高一环，你就可以额外指定一个生物。指定目标时，每个目标生物必须身处其他目标 30 尺范围内。",
    "source": "PHB"
  },
  {
    "id": "spell.5.InsectPlague",
    "name": "疫病虫群",
    "english_name": "Insect Plague",
    "level": 5,
    "school": "咒法",
    "classes": [
      "牧师、德鲁伊、术士）"
    ],
    "castingTime": "1 动作",
    "range": "300 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "少许糖，一些脱壳的谷粒和一抹油脂"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你指定施法距离内一点，并以该点为中心使半径 20 尺的球状区域内堆满成群的噬人蝗虫。虫群会绕过拐角扩散并使整个区域成为困难地形，且处于轻度遮蔽。虫群在法术终止前都会持续存在。 　　当虫群显现时，其区域内的每个生物都必须进行一次体质豁免，豁免失败则受到 4d10 的穿刺伤害，豁免成功则伤害减半。生物在一个回合内第一次进入该区域内，或者在区域内结束其回合时，也必须进行该豁免。\n升环施法效应：使用六环或更高法术位施展该法术时，你使用的法术位每比六环高一环，伤害就增加 1d10。",
    "source": "PHB"
  },
  {
    "id": "spell.5.LegendLore",
    "name": "通晓传奇",
    "english_name": "Legend Lore",
    "level": 5,
    "school": "预言",
    "classes": [
      "吟游诗人、牧师、法师）"
    ],
    "castingTime": "10 分钟",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "价值至少 250gp 的熏香，作为该法术的耗材。以及每块价值至少 50gp 的四块象牙板"
    },
    "duration": "立即",
    "description": "点名或描述一个人物，或一处地点、一个物件。并用法术在你脑海中形成一段关于该事物重要传闻的简单概述。传闻可能是最近的流言，也可能是被遗忘的故事或不曾为人知晓的秘闻。如果该事物没有任何传奇事迹，则你不会获得任何信息。你掌握目标越多的信息，所得到的信息就越精确细致。\n你由此得到的信息必定是准确的，但仍可能会以隐晦的话语表达。例如，如果你拿着一把神秘的魔法斧，则该法术可能会给你如下信息：“斧头嫉恶如仇，触碰其之邪恶者即受其苦痛惩戒，哪怕仅是光身斧柄也会反噬恶人之手。斧头的真正威力正在沉睡，唯有真正的石之子那些爱慕着摩拉丁又被其眷恋之人在双唇咏出圣言鲁那格Rudnogg时才能将其唤醒。”",
    "source": "PHB"
  },
  {
    "id": "spell.5.MassCureWounds",
    "name": "群体疗伤术",
    "english_name": "Mass Cure Wounds",
    "level": 5,
    "school": "塑能",
    "classes": [
      "吟游诗人、牧师、德鲁伊）"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "一波治愈的能量从施法距离内你指定的一点奔涌而出。你在该点周边 30 尺半径的球状区域内指定至多六个生物，并使每个目标生物恢复一定的生命值，其数值等于 3d8+你的施法属性调整值。该法术对不死生物和构装生物无效。\n升环施法效应：使用六环或更高法术位施展该法术时，你使用的法术位每比五环高一环，其治疗量就增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Mislead",
    "name": "假象术",
    "english_name": "Mislead",
    "level": 5,
    "school": "幻术",
    "classes": [
      "吟游诗人、法师；TCE：邪术师）"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": false,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "你变为隐形，同时在你站的地方出现一个和你一样的幻象分身。分身会持续存在至法术持续时间结束；但如果你发动攻击或施展法术，则终止该隐形效应。\n你可以用你的动作将分身以至多两倍于你的速度移动，并且可以让他打手势、说话，以及以任何你指定的方式行事。\n你可以通过分身的眼睛视物，用分身的耳朵聆听，如同你处于它的位置一样。你可以在自己回合内以一个附赠动作在自己与分身的感官间切换。而当你使用分身的感官时，本体周边的事物对你而言等同于处于目盲且耳聋的状态。",
    "source": "PHB"
  },
  {
    "id": "spell.5.ModifyMemory",
    "name": "篡改记忆",
    "english_name": "Modify Memory",
    "level": 5,
    "school": "惑控",
    "classes": [
      "吟游诗人、法师）"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你尝试重塑另一个生物的记忆。迫使一个你能看见的生物进行一次感知豁免。如果你正与该生物战斗，则它进行该豁免时具有优势。豁免失败时，该生物会在法术持续时间内被你魅惑。被魅惑的目标陷入失能状态且无法感知周边的事物，但它仍然能听到你的声音。如果它受到任何伤害或者成为另一个法术的目标，则该法术终止且目标的记忆不会被修改。\n该魅惑状态持续时，你可以改变目标关于过去 24 小时内经历的一个持续时间不超过十分钟的事件记忆。你可以永久地消除所有关于该事件的记忆，也可以让目标完美清晰地回忆起该事件的所有细节，甚至可以改变目标关于该事件记忆细节，或创造一段关于其他事情的记忆。\n你必须通过话语来描述如何改变目标的记忆，并且目标必须能够听懂你的语言以便你植入被改变后的记忆。目标的意识会将你描述中所有缺失的细节填补完全。如果法术在你描述完被修改的记忆前就结束，则目标的记忆不会被改变，否则修改过的记忆会在法术终止时根植于目标心中。\n修改过的记忆不一定会影响生物的行为，特别是当修改后的记忆违背了目标的天性，阵营或信仰时。如果植入一段不合逻辑的记忆（例如你灌输给目标关于它有多么享受在强酸中泡澡的记忆），则目标会直接忽视该记忆，或者将其视为自己作的一场噩梦。DM 也可以判定某段修改过的记忆太过荒谬，而无法影响生物的关键行为。\n对目标施展法术 移除诅咒remove curse 或 高等复原术greater restoration 后即可使目标恢复真实的记忆。\n升环施法效应：使用六环或更高法术位施展该法术时，你可以改变目标关于过去 7 日内（六环）、30 日内（七环）、1 年内（八环）或者在过去任意时刻（九环）所发生事件的记忆。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Passwall",
    "name": "穿墙术",
    "english_name": "Passwall",
    "level": 5,
    "school": "变化",
    "classes": [
      "法师）"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一撮芝麻"
    },
    "duration": "1 小时",
    "description": "你指定施法距离内你能看见的表面上一点，并使该处在法术终止前持续显现一条通道。所选表面必须属于木质，灰质或石质（比如墙，屋顶或地面）。而开口的大小则由你指定：其尺寸至多 5 尺宽，8 尺高，20 尺深。另外，该通道并不会使其周围结构产生不稳定。\n开口消失时，任何还留在该通道中的生物或物件都会被安全的弹至距受术表面最近的未占据空间。",
    "source": "PHB"
  },
  {
    "id": "spell.5.PlanarBinding",
    "name": "异界誓缚",
    "english_name": "Planar Binding",
    "level": 5,
    "school": "防护",
    "classes": [
      "吟游诗人、牧师、德鲁伊、法师）"
    ],
    "castingTime": "1 小时",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一枚价值至少 1000gp 的宝石，作为该法术的耗材"
    },
    "duration": "24 小时",
    "description": "你尝试以该法术与一个生物建立誓约使其为你服务，该生物可以是天界生物、元素生物、精类生物、邪魔等生物种类之一。该生物在整个施法过程中必须在法术的施法距离内。典型的情况下，在施展该法术前，生物会先被召唤到一个反向作用的防护法阵 magic circle中困住。施法完成后，目标必须进行一次魅力豁免。豁免失败则目标在法术持续时间内与你建立誓约并服务于你。如果该生物由其他法术所召唤或创造，则维持其存在的法术持续时间被延长至符合本法术的持续时间。\n一个已建立誓约的生物必须尽其最大的能力遵从你的指示。你可以命令该生物在你冒险时陪伴你，或守卫一个地点，又或者传递一个信息。该生物将遵从你所下达指示的字面意义，但是如果此生物与你敌对，则它会努力曲解你的字面意思来达到它自己的目标。如果生物在法术终止前全部完成了你的指示而你们仍处于同一位面时，则它会到你面前向你汇报。如果你们处与不同位面，则它会回到其建立誓约之地，并呆停留该处直至法术终止。\n升环施法效应：使用六环法术位施展该法术时，法术持续时间增为 10 日，七环则增为 30 日，八环为 180 日，九环为一年零一日。",
    "source": "PHB"
  },
  {
    "id": "spell.5.RaiseDead",
    "name": "死者复活",
    "english_name": "Raise Dead",
    "level": 5,
    "school": "死灵",
    "classes": [
      "吟游诗人、牧师、圣武士）"
    ],
    "castingTime": "1 小时",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一颗至少价值 500gp 的钻石，作为该法术的耗材"
    },
    "duration": "立即",
    "description": "你触碰一个已死的生物，使其复活。该生物的死亡时间必须不超过 10 日。如果该生物的灵魂愿意并且能够回到其身体中，则它将以1点生命值重生。该法术同样会中和该生物生前体内的毒素以及罹患的非魔法疾病，但对于魔法造成的疾病、诅咒和类似的效应则无能为力；如果没有在复活前治愈这些效应，则它们在该生物重获生命的时候继续生效。该法术不能复活不死生物。\n该法术能治愈所有致命伤，但无法恢复失去的身体部位。如果该生物缺失了它生存所必要的身体部位或器官（比如头），则该法术自动失败。\n死而复生是一个痛苦的体验。复活的目标在随后进行攻击检定、豁免检定和属性检定时具有-4 减值。该目标每完成一次长休，其减值就减少 1，依次叠加直至减值完全消失。",
    "source": "PHB"
  },
  {
    "id": "spell.5.RarysTelepathicBond",
    "name": "拉瑞心灵联结",
    "english_name": "Rary's Telepathic Bond",
    "level": 5,
    "school": "预言",
    "classes": [
      "仪式；法师；TCE：吟游诗人）"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "两种不同生物的蛋壳碎片"
    },
    "duration": "1 小时",
    "description": "你与施法距离内至多八个自愿生物建立心灵连线。在法术持续时间内，连线的每个生物的心灵都和其他全部受术生物相连。智力值为 2 或更低的生物不受该法术影响。\n在该法术终止前，所有受术生物都可以通过心灵连线与其他受术生物进行心灵交流，而不论他们是否语言相通。该交流方式可以跨越任意远近的距离但不能跨位面进行。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Reincarnate",
    "name": "转生术",
    "english_name": "Reincarnate",
    "level": 5,
    "school": "变化",
    "classes": [
      "德鲁伊）"
    ],
    "castingTime": "1 小时",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "价值至少 1000gp 的稀有油和软膏，作为该法术的耗材"
    },
    "duration": "立即",
    "description": "你触碰一个类人生物的遗体或遗体的一部分，以此创造出一具新的成年身体，并呼唤该生物的灵魂进入此新身躯。该生物死亡时间必须不超过 10 日。此外，如果目标生物的灵魂此时不能或者不愿意完成该过程，则法术失败。\n该法术要为目标生物创造出一具新的身体，因此很可能导致该生物的种族发生变动。DM 可以投一个 d100 来判定该生物以何种形态复生，也可以直接由 DM 选择一种形态。 ?? \nd100\t种族\t \td100\t种族\n01~04\t龙裔\t \t47~52\t岩侏儒\n05~13\t丘陵矮人\t \t53~56\t半精灵\n14~21\t山地矮人\t \t57~60\t半兽人\n22~25\t黑暗精灵\t \t61~68\t轻足半身人\n26~34\t高等精灵\t \t69~76\t强魄半身人\n35~42\t木精灵\t \t77~96\t人类\n43~46\t林侏儒\t \t97~00\t提夫林\n转生后的生物保留其前生记忆和经验。受术者保留原形的一切能力，不过其种族特性将以新种族的相应特性做更替。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Scrying",
    "name": "探知",
    "english_name": "Scrying",
    "level": 5,
    "school": "预言",
    "classes": [
      "吟游诗人、牧师、德鲁伊、邪术师、法师）"
    ],
    "castingTime": "10 分钟",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "（一个至少价值 1000gp 的聚焦镜，例如水晶球"
    },
    "duration": "专注，最多 10 分钟",
    "description": "你能看见和听见一个和你处于同一存在位面上的生物。目标生物必须进行一次感知豁免；该豁免的调整值与你对目标的了解程度有关，也与你和目标之间的物理联系程度有关。如果目标知道你在施展该法术，而它又愿意被你观察，则它可以自愿放弃该豁免。 \n了解程度\t豁免调整值\t\t联系程度\t豁免调整值\n二手信息（你曾经听说过受术者）\t+5\t\t肖像或图像\t-2\n直接信息（你曾经见过受术者）\t+0\t\t所有物或衣物\t-4\n熟悉（你对受术者很了解）\t-5\t\t身体部位，头发，指甲或类似物件\t-10\n如果对方豁免成功，则目标不受该法术影响，并且在 24 小时内你不能尝试探知同一个目标。\n如果对方豁免失败，则你在目标身边 10 尺内创造出一个隐形的传感器。通过传感器，你可以身临其境地看见和听见周围的环境。传感器会跟随目标移动，并在法术持续时间内始终保持在目标 10 尺之内。在能够看破隐形的生物眼中，你的探传感器是一个拳头大小的光球。\n除生物之外，你也可以选择一个你以前见过的地点作为该法术的目标。这时，传感器会出现在目标地点且不会移动。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Seeming",
    "name": "伪装术",
    "english_name": "Seeming",
    "level": 5,
    "school": "幻术",
    "classes": [
      "吟游诗人、术士、法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "8 小时",
    "description": "该法术允许你修改施法距离内你能看见的任意数量生物的外观。你对指定的每个目标生物分别赋予一个虚假的新外貌。不愿意受该法术影响的目标可以进行一次魅力豁免，豁免成功则不受该法术影响。\n该法术能改变生物的物理外观，也能伪装出服装、护甲、武器和装备。肉眼看来目标的身高可以有 1 尺的增减，体态可胖可瘦可匀称。但是你不能改变身体的形状，所以目标变形的样子必须有四肢或类似的生理结构。此外，你可以随意改变其他的外观特征。该法术一直持续至持续时间结束，不过你可以用一个动作提前将其解除。\n此法术产生的变化无法应对物理检查。比如，你用此法术添了一顶帽子，那么现实物件会穿过帽子，且触碰帽子的人会摸不到任何东西或摸到的是目标的头和头发。若你用该法术让目标变得消瘦，别人用手触碰该目标时，看起来就像用手摸着空气。\n一个生物可以使用其动作仔细观察一个目标，并进行一次对抗法术豁免 DC 的智力（调查）检定。检定成功则观察者将意识到目标进行了伪装。",
    "source": "PHB"
  },
  {
    "id": "spell.5.SwiftQuiver",
    "name": "迅捷箭袋",
    "english_name": "Swift Quiver",
    "level": 5,
    "school": "变化",
    "classes": [
      "游侠）"
    ],
    "castingTime": "1 附赠动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个箭袋，其内至少要有一发弹药"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你对箭袋施展该法术，使其可以凭空创造出无尽的非魔法弹药，而你只要把手伸进箭袋里就会有弹药自己跳到你的手中。\n直至法术结束前，你的每一回合都可以用一个附赠动作发动两次攻击，但用以发动攻击的武器必须使用受术箭袋中的弹药。你每次完成这种攻击时，箭袋上的魔法便会自动创造出一发同样的非魔法弹药作为补充。法术终止时，该法术创造出来的所有弹药都将自行分解消失。当你不再持有该箭袋时，该法术也即刻终止。",
    "source": "PHB"
  },
  {
    "id": "spell.5.Telekinesis",
    "name": "心灵遥控",
    "english_name": "Telekinesis",
    "level": 5,
    "school": "变化",
    "classes": [
      "术士、法师）"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "你获得以意念移动操纵生物或物件的能力。施展该法术时，你可以对施法距离内一个你能看见的生物或物件以你的意念造成下列详述的效应。你也可以在随后法术持续时间内的自己的任一回合里以一个动作实现该行为。你可以一轮接一轮地影响同一个目标，也可以在任何时候选择一个新的目标。如果你改变了目标，则之前的目标将不再受该法术影响。 \n生物Creature。你可以尝试移动一个巨型或更小的生物。以你的施法属性进行一次属性检定，并与目标生物的力量检定进行对抗。如果你在对抗中胜出，则你可以使该生物朝任何方向（包括竖直向上）移动 30 尺，但不能让它离开施法距离。在你的下一回合结束前，该生物将被你的遥控抓握束缚。而被朝正上方抬起的生物会在半空中悬停。\n在随后的回合中，你可以再次进行前面进行过的对抗来尝试继续抓住该生物（消耗一个动作）。 \n物件Object。你可以尝试移动一个重量不超过 1000 磅的物件。如果该物品没有被任何生物所着装或携带，则你可以自动使它朝任何方向移动 30 尺，但不能让它离开施法距离。\n如果该物件已被着装或携带，则你必须以你的施法属性进行一次属性检定，并与该生物的力量检定进行对抗。如果你在对抗中胜出，则你可以把目标物件从该生物身上拿走，并且使该物体朝任意方向移动 30 尺（但不能让它离开施法距离）。\n你可以使用心灵遥控来对物体进行精密操作，例如操纵一件简单的工具，打开一扇门或一个容器，把东西放进或拿出一个打开的容器中，或是把一个小瓶子里的东西倒出来。",
    "source": "PHB"
  },
  {
    "id": "spell.5.TeleportationCircle",
    "name": "传送法阵",
    "english_name": "Teleportation Circle",
    "level": 5,
    "school": "咒法",
    "classes": [
      "吟游诗人、术士、法师；TCE：邪术师）"
    ],
    "castingTime": "1 分钟",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": "稀有粉笔和浸有价值 50gp 珍稀宝石的墨水，作为该法术的耗材"
    },
    "duration": "1轮",
    "description": "施展该法术时，你在地上画出一个直径十尺的圆圈，并在其周围画出符文。这个圆形法阵将你所处的位置与你选择的一个与你处在同个位面上的永久传送法阵相连（你必须知道该法阵的符文序列）。圆圈中将打开一个发光的传送门，并一直维持到你的下一回合结束。任何进入传送门的生物将立即出现在目标法阵附近 5 尺内（如果该空间已被占据，则出现在最靠近目标法阵的未被占据空间）。\n许多神殿、公会和其他重要的场所都在其中某处设有永久的传送法阵。这种法阵各有自己的符文序列按特定顺序排列的一串魔法符文。当你最初获得施放该法术的能力时，你会知道物质位面上两个永久法阵的符文序列（由 DM 决定），随后你还可以在旅途中习得更多的符文序列。你只要花一分钟仔细研究一个新的符文序列就能够将其记录下来。\n当你在一年里对同一地点每日连续施展该法术后，将创造出一个永久的传送法阵。而你在如此创造法阵时并不需要使用该法阵进行传送。",
    "source": "PHB"
  },
  {
    "id": "spell.5.TreeStride",
    "name": "树跃术",
    "english_name": "Tree Stride",
    "level": 5,
    "school": "咒法",
    "classes": [
      "德鲁伊、游侠）"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你能够进入树木中，并从树木内部移动到 500 尺内的一棵同类树木内。两棵树必须都是活的，而且至少要和你一样大。你进入一棵树时必须消耗 5 尺移动力。你将在进入树木后知道附近 500 尺内所有同类树木的位置。作为进入树木所用移动的一部分，你可以移动到这些同类树木的其中一棵，或走出你所在的树木。你会出现在作为目的地的树木 5 尺范围内自选的一点，并因此消耗 5 尺移动力。如果你的移动力已经耗尽，则你将出现在你进入的树木周围 5 尺范围内某处。\n你可以在法术持续时间内的每轮里使用一次这样的传送能力。而且你必须在树外结束你的回合。",
    "source": "PHB"
  },
  {
    "id": "spell.5.WallofForce",
    "name": "力场墙",
    "english_name": "Wall of Force",
    "level": 5,
    "school": "塑能",
    "classes": [
      "法师）"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "由纯净的宝石原石碾成的一小撮粉末"
    },
    "duration": "专注，至多 10 分钟",
    "description": "由力场构成的隐形力墙出现在施法距离内你指定的一点上。这面力墙的方向由你决定：你可以使力墙成为水平或垂直的结界，亦可以使它形成一定倾角。它可以浮在空中，也可以立于地上。你可以将它塑成半球状或球状（半径最长 10 尺），也可以塑成一个由十个 10 尺×10 尺的方板块构成的平面，而每块板块都必须要和至少一块其他板块相连。不管形状如何，力墙的厚度总是 1/4 寸。力场墙将持续存在至法术终止。如果力墙形成时穿过了某个生物所占据的空间，则该生物会被推到力墙的一侧（由你决定推到哪一侧）。\n没有任何事物可以通过物理方式穿过力墙。力墙免疫所有伤害，也不能被解除魔法 dispel magic所解除，但法术解离术 disintegrate可以使其立即摧毁。力墙能够延伸进以太位面，因此可以阻断进入以太位面穿过墙壁旅行。",
    "source": "PHB"
  },
  {
    "id": "spell.5.WallofStone",
    "name": "石墙术",
    "english_name": "Wall of Stone",
    "level": 5,
    "school": "塑能",
    "classes": [
      "德鲁伊、术士、法师、奇械师）"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块花岗岩"
    },
    "duration": "专注，至多 10 分钟",
    "description": "一面坚硬的非魔法石墙出现在施法距离内你指定的一点。该石墙厚达 6 寸，由十个 10×10 尺的方板块组成。每块板块都必须要和至少一块其他板块相连。另外你也可以选择以十个 10×20 尺的板块组成石墙，但厚度只有 3 寸。\n如果石墙形成时穿过了某生物所占据的空间，则该生物会被推到石墙的一侧（由你决定推到哪一侧）。如果该生物即将被石墙完全包围住（或被石墙和另一个坚硬的平面包围），则它可以进行一次敏捷豁免。豁免成功者将得以执行一个反应来以正常速度移动，从而避免被墙围住。\n你可以将石墙塑成你想要的任何形状，但它不能与其他生物或物件同占一处空间。该墙不必垂直于地面，也不需要地基；但它必须从稳固的既有石块中延伸出来。因此，你可以使用该法术创造一条跨越峡谷的桥或是造一个斜坡。悬空石板的跨度超过 20 尺时需要支撑，因此石板的面积需减半。你可以对石墙进行粗略塑形，造出锯齿、城垛等结构。\n该墙是一个可以因受到伤害而被打破的石制物件。每块板块的 AC 为 15，每寸厚得石墙具有 30 点生命值。当一块板块的生命值降至 0 时则该板块被摧毁，而且与它相连的板块也可能会崩塌（具体由 DM 判断）。\n如果你在整个法术持续时间内一直保持住该法术的专注，则石墙将永久存在且不能被解除。如果你没能这么做，则石墙在法术终止时随即消失。",
    "source": "PHB"
  },
  {
    "id": "spell.6.ArcaneGate",
    "name": "秘法门",
    "english_name": "Arcane Gate",
    "level": 6,
    "school": "咒法",
    "classes": [
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "500 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "你创造两个相连的传送门。指定地面上你能看见的两点，一点在你身边 10 尺内，另一点则在 500 尺内。随后，10 尺直径的圆形传送门将分别在两点打开。如果你选择的点被生物占据，则法术失败且被消耗。\n传送门边缘为闪烁的二维环形，其内布满迷雾，且整个垂直的悬浮在离地几尺处。环形只有一面可见（由你选择），那一面即是传送门生效的一面。\n任何进入其中一个传送门的生物将从另一个传送门走出，如同两个传送门邻接一样。从传送门不生效的那一面走过则不会有任何效果。门中满布的迷雾阻挡了视线因此无法看到任何影像。你可以在自己的回合里使用一个附赠动作改变传送门的朝向。",
    "source": "PHB"
  },
  {
    "id": "spell.6.BladeBarrier",
    "name": "剑刃护壁",
    "english_name": "Blade Barrier",
    "level": 6,
    "school": "塑能",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "你立起一道由旋转的魔法利刃组成的墙。墙壁出现在施法距离内一个你指定的位置，并维持到法术持续时间结束。你可以选择创造长不过 100 尺、高不过 20 尺、厚不过 5 尺的直墙；或是直径不过 60 尺、高不过 20 尺、厚不过 5 尺的环形墙。墙为位于其后方的生物提供四分之三掩护。而墙体所占据的空间则视为困难地形。\n任何生物在一个回合内第一次进入墙体区域，或者在区域内开始其回合时，必须进行一次敏捷豁免。豁免失败者将受到 6d10 点挥砍伤害。豁免成功则伤害减半。",
    "source": "PHB"
  },
  {
    "id": "spell.6.ChainLightning",
    "name": "连锁闪电",
    "english_name": "Chain Lightning",
    "level": 6,
    "school": "塑能",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一些毛皮，一块琥珀，玻璃或一柄水晶权杖，以及三根银质别针。"
    },
    "duration": "立即",
    "description": "你放出一道闪电，射向施法距离内某个你能看见的指定目标。经过首个目标后，闪电分成三束跳向该目标 30 尺内至多 3 个其他目标。闪电的目标可以是生物或物件，但每束闪电必须指定不同的目标。\n每个目标必须进行一次敏捷豁免。豁免失败者将受到 10d8 点闪电伤害，豁免成功则伤害减半。\n升环施法效应：使用七环或更高法术位施展该法术时，你使用的法术位每比六环高一环，跳跃后闪电就多分出一束射向一个不同的目标。",
    "source": "PHB"
  },
  {
    "id": "spell.6.CircleofDeath",
    "name": "死亡法阵",
    "english_name": "Circle of Death",
    "level": 6,
    "school": "死灵",
    "classes": [
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "研磨过的黑珍珠粉末，价值至少 500gp"
    },
    "duration": "立即",
    "description": "一阵负能量波从施法距离内某点放出，冲击 60 尺半径的球状区域。区域内的生物必须进行一次体质豁免。豁免失败者将受到 8d6 点黯蚀伤害，豁免成功则伤害减半。\n升环施法效应：使用七环或更高法术位施展该法术时，你使用的法术位每比六环高一环，法术的伤害就增加 2d6。",
    "source": "PHB"
  },
  {
    "id": "spell.6.ConjureFey",
    "name": "精类咒唤术",
    "english_name": "Conjure Fey",
    "level": 6,
    "school": "咒法",
    "classes": [
      "德鲁伊",
      "邪术师"
    ],
    "castingTime": "1 分钟",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "你召唤一个挑战等级 6 或更低的精类生物，或者一个挑战等级 6 或更低的野兽形态精魄。被召唤生物显现在施法距离内一处你能看见且未被占据的空间。该精类生物在生命值降至 0 时，或者法术终止时消失不见。\n被召唤的精类生物对你和你的伙伴保持友善关系。你为召唤出来的精类生物骰先攻，它也依此获得其自己的行动回合。该精类生物服从你发出的所有语言命令（不需要你作动作），前提是该命令必须不违反其所属阵营。如果你不发出任何命令，该生物会在敌对生物前保护自己，如果没有敌对生物则不执行任何动作。\n如果你的专注被打断，该精类生物并不会因此消失不见，但你会因此失去该生物的控制权。失去控制的精类生物对你和你的伙伴变为敌对，并随时准备发动攻击。不受控的精类生物无法被你解散，并在你的召唤开始算起 1 小时后消失不见。\n该精类生物的具体数值由 DM 掌控。\n升环施法效应：使用七环或更高法术位施展该法术时，你使用的法术位每比六环高一环，召唤生物挑战等级就增加 1。\n（注：此法术原译作“召唤精类生物” ，因易与后续《塔莎的万事坩埚》中的法术 精类召唤术Summon Fey 混淆而改）",
    "source": "PHB"
  },
  {
    "id": "spell.6.Contingency",
    "name": "触发术",
    "english_name": "Contingency",
    "level": 6,
    "school": "塑能",
    "classes": [
      "法师"
    ],
    "castingTime": "10 分钟",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一尊你自己的塑像，其材质为象牙并以宝石作装饰，其价值至少为 1500gp"
    },
    "duration": "10 日",
    "description": "选择一个你可以施展的五环或更低环阶法术，该法术的施法时间必须为 1 动作，且必须能够以你自身为目标。你以“随因法术”的形式施展该法术，即将其作为所施展触发术的一部分，并且同时消耗该法术与触发术的法术位。该随因法术并不立即生效，而是在特定状况发生时才触发其效应。你在施展这两个法术时，必须描述该触发状况的细节。例如，触发术与 水下呼吸water breathing 一起施放可以确保水下呼吸可以在你被水或其他液体淹没时自动触发其效应。\n随因法术的效应在相应状况第一次出现时立即生效，而无论你是否想要这么做，在这之后触发术终止。\n随因法术只能对你起作用，哪怕它通常可以指定其他目标现在也无法再作指定。你一次只能使用一个触发术，如果你在已施放该法术时再次施展该法术，则前一个触发术的效应立即终止。另外，当触发术的材料成分不在你的角色身上时，其法术效应也将立即终止。",
    "source": "PHB"
  },
  {
    "id": "spell.6.CreateUndead",
    "name": "唤起死灵",
    "english_name": "Create Undead",
    "level": 6,
    "school": "死灵",
    "classes": [
      "牧师",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个装满坟土的陶壶和一个装满苦水的陶壶，并为每具尸体准备一枚 150gp 的黑玛瑙"
    },
    "duration": "立即",
    "description": "在施法距离内指定至多三具中型或小型类人生物遗体，并使每具受术尸体变成一只受你控制的 食尸鬼ghoul （这些生物的具体游戏资料由 DM 掌控）。该法术只能在夜晚施展。\n在你的任一回合内，你可以使用一个附赠动作并以精神命令操纵 120 尺内任何你用此法术唤起的生物（如果你操纵多个生物，则你的命令可以同时传达给它们全部或是其中的某几个，不过只能使用同一种命令）。你决定被操纵的生物下回合的动作和移动。或者，你也可以选择下达宽泛的命令，例如守护某个房间或走廊。没有接受到你命令的生物则只会对敌对生物作出自卫的行为。一旦被下达命令，该生物会持续执行命令直到任务完成。\n被操纵的生物只会在 24 小时内服从你的命令。若你在当前的 24 小时时间段终止前再次施展此法术，则你对该生物的操纵时间再延长 24 小时。法术的此种用法只能延长你对至多三个你使用此法术所创造生物的控制时间，不会造出新的生物。\n升环施法效应：使用七环法术位施展该法术时，你可以唤起并维持四只 食尸鬼ghoul 。使用八环法术位施展该法术时，你可以唤起并维持五只 食尸鬼ghoul ，也可以改为唤起并维持两只 妖鬼ghast ，或两个 尸妖wight 。当你使用九环法术位施展该法术时，你可以唤起并维持六只 食尸鬼ghoul ，也可以改为唤起并维持三只 妖鬼ghast ，或三个 尸妖wight ，或两个 木乃伊mummy。",
    "source": "PHB"
  },
  {
    "id": "spell.6.Disintegrate",
    "name": "解离术",
    "english_name": "Disintegrate",
    "level": 6,
    "school": "变化",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块磁石和一撮灰尘"
    },
    "duration": "立即",
    "description": "一束纤细的绿射线从你的指尖射向施法距离内一个你能看见的目标。该目标可以是一个生物或一个物件，或者是一个以魔法力场制造的造物（例如由 力场墙 wall of force 创造的墙壁）。\n目标生物必须进行一次敏捷豁免，豁免失败则受 10d6+40 点力场伤害，若目标生命值因此降至 0，则目标被解离。\n除魔法物品外，被解离的生物连同其穿着携带的所有随身物品一起变成一堆灰尘。此后该生物只能通过 完全复生术true resurrection 和 祈愿术wish 复活。\n此法术会直接解离大型或更小的非魔法物件或魔法力场。如果目标是巨型或更大的物件或魔法力场，则此法术会解离其 10 尺立方大小的部分。魔法物品不受此法术影响。\n升环施法效应：使用七环或更高法术位施展该法术时，你使用的法术位每比六环高一环，伤害就提高 3d6。",
    "source": "PHB"
  },
  {
    "id": "spell.6.DrawmijsInstantSummons",
    "name": "卓姆吉瞬间召唤",
    "english_name": "Drawmij's Instant Summons",
    "level": 6,
    "school": "咒法",
    "classes": [
      "仪式；法师"
    ],
    "castingTime": "1 分钟",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一枚价值 1000gp 的蓝宝石"
    },
    "duration": "直至被解除",
    "description": "你触碰一个重量至多 10 磅，长度至多 6 尺的物件。该法术将在该物品表面留下一个隐形的印记，并在你用以施法的蓝宝石上留下该物件的名称。你每次施展该法术时都必须使用不同的蓝宝石作为其材料成分。\n在随后的时间里，你可以使用动作唤出该物件的名称并粉碎这颗蓝宝石，该物件将无视任何距离和位面的限制立即出现在你的手上。物件出现后该随即法术终止。\n如果另一个生物正持握或携带着该物件，则粉碎蓝宝石的动作无法将该物品传送过来。不过你会知晓是谁占有了该物品，以及其此刻身处的何处。\n当 解除魔法 dispel magic 或成功生效的类似效应作用于这颗蓝宝石时，将提前终止该法术。",
    "source": "PHB"
  },
  {
    "id": "spell.6.Eyebite",
    "name": "摄心目光",
    "english_name": "Eyebite",
    "level": 6,
    "school": "死灵",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "在法术持续时间内，你的眼睛变成充满恐怖力量的漆黑空洞。指定一个 60 尺内你能看见的生物，并迫使其进行一次感知豁免，豁免失败者将承受下列效应之一（由你选择）。在法术终止前的每个自己回合，你都可以使用动作来指定一个目标。不过不能指定那些已经成功通过该豁免的生物。\n沉睡Asleep。目标陷入昏迷。其在受到伤害，或另一个生物使用动作摇晃它时，即可再次醒来。\n惊慌Panicked。目标因你而恐慌，它必须在每个其自己回合里执行疾走动作并移动，且以最短、最安全的路径尽可能的逃离你，直至其无路可逃为止。如果目标移至离你 60 尺远且看不见你的地方，则法术效应终止。\n患病Sickened。目标发动攻击检定和进行能力检定时具有劣势。目标在每个其自己回合结束时都可以进行另一个感知豁免，豁免成功则该效应终止。",
    "source": "PHB"
  },
  {
    "id": "spell.6.FindthePath",
    "name": "寻路术",
    "english_name": "Find the Path",
    "level": 6,
    "school": "预言",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊"
    ],
    "castingTime": "1 分钟",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一套占卜用具，比如骨头、象牙、卡片、牙齿、雕刻符文等，其价值至少为 100gp，此外还需要一个来自你所寻找地点的物件"
    },
    "duration": "专注，至多 1 日",
    "description": "该法术可以搜寻同一位面的另一处你熟悉的特定地点，法术会找出通往该处最短、最直接的道路。如果你寻找的目的地在另一位面，或者其会不断移动（例如一座移动堡垒），或者描述不够具体（例如一个“绿龙的巢穴”），该法术失效。\n你在法术持续时间内只要和目的地在同一位面，就知晓目的地的远近和所在方向。向目的地移动并遇到岔路时，你会本能的选择通往目的地最近、最直接的路（但不一定最安全）。",
    "source": "PHB"
  },
  {
    "id": "spell.6.FleshtoStone",
    "name": "石化术",
    "english_name": "Flesh to Stone",
    "level": 6,
    "school": "变化",
    "classes": [
      "邪术师",
      "法师；TCE：德鲁伊",
      "术士"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小撮石灰、水和土壤"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你尝试将施法距离内一个你能看见的生物变为石头。如果该目标的身体由血肉组成，则其必须进行一次体质豁免。豁免失败者的肉体将变得生硬并因此而受到束缚。豁免成功者将不受该效应的影响。\n因该法术受束缚的生物必须在其每回合结束时再进行一次体质豁免。在累计三次豁免成功后，该法术终止。在累计三次豁免失败后，该生物变为石头并在持续时间内视为陷入石化状态。成功或失败的检定不需要连续；只要记录各情况的次数直至其中一方累计三次为止。\n如果该生物被石化的身体遭破坏，则其在恢复原形时将遭受同样的破坏。\n如果你在为该法术维持了最长持续时间的专注，则该生物变为石头的效应将保持至被移除为止。",
    "source": "PHB"
  },
  {
    "id": "spell.6.Forbiddance",
    "name": "禁制术",
    "english_name": "Forbiddance",
    "level": 6,
    "school": "防护",
    "classes": [
      "仪式；牧师"
    ],
    "castingTime": "10 分钟",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "少量圣水，稀有焚香，以及至少价值 1000gp 的红宝石粉末"
    },
    "duration": "1 日",
    "description": "你创造一个对抗魔法旅行的结界，该结界区域至多覆盖 40000 平方尺地面及其上 30 尺高空。在法术持续时间内，生物无法传送进区域内或使用传送门（诸如法术异界之门 gate的作用）进入其内。该法术使该区域无法进行位面旅行，因此生物无法通过星界位面，以太位面，妖精荒野，堕影冥界，或是通过法术异界传送 plane shift来连接该区域。\n此外，该法术可以对你所选定类别的生物造成伤害。从一下选项中选择一项或多项：天界生物、元素生物、精类生物、邪魔以及不死生物。所选定生物在一个回合内第一次进入法术区域或者在其内开始其回合时，将受到 5d10 点光耀伤害或黯蚀伤害（由你在施法时选择其一）。\n施展该法术时，你可以设定一段密语。说出密语的生物就算进入区域也不会受到该法术的伤害。\n该法术的效应区域不能与另一个禁制术的区域相重叠。你可以通过对同一区域连续 30 日每日施展禁制术来使其效应持续至被解除，并在最后一次施法时将该法术对材料成分消耗殆尽。",
    "source": "PHB"
  },
  {
    "id": "spell.6.GlobeofInvulnerability",
    "name": "法术无效结界",
    "english_name": "Globe of Invulnerability",
    "level": 6,
    "school": "防护",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身（10 尺半径）",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个玻璃质或水晶质的珠子，其将在法术终止时破碎"
    },
    "duration": "专注，至多 1 分钟",
    "description": "一个固定的微光屏障从你周围半径 10 尺区域内涌现并在法术持续时间内维持存在。\n任何在屏障外施放的五环或更低环阶的法术无法影响其内的生物或物件，这些法术即使以升环施法施展也无法突破该限制。这些法术可以以屏障内的生物或物件为目标，但无法对其生效。其效果有如屏障内的区域被排除在法术效应范围之外。\n升环施法效应：当你使用七环或更高法术位施展该法术时，你使用的法术位每比六环高一环，屏障能阻挡的法术就高一环。",
    "source": "PHB"
  },
  {
    "id": "spell.6.GuardsandWards",
    "name": "铜墙铁壁",
    "english_name": "Guards and Wards",
    "level": 6,
    "school": "防护",
    "classes": [
      "吟游诗人",
      "法师"
    ],
    "castingTime": "10 分钟",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "燃烧的熏香，少许硫磺和油，一条打结的绳子，少量土巨怪的血和一把至少价值 10gp 的小型银权杖"
    },
    "duration": "24 小时",
    "description": "你制造一个保护区域覆盖至多 2500 平方尺地面面积（一个 50 尺的方形区域，或一百个 5 尺的方状区域，或二十五个 10 尺的方形区域）。保护区域至高可达 20 尺，并随你的意愿塑形。只要你施法时可以走进每一个连续区域，你就可以分割区域来护卫一座要塞的几个楼层。\n施展该法术时，你可以指明特定个体以让其不受法术某些或全部效应的影响。你还可以指明一句口令，当其被大声说出时，即可让说出口令的人对这些效应免疫。\n铜墙铁壁在保护区域内创造下列效应：\n过道Corridors。浓雾充斥受保护的过道使其处于重度遮蔽。此外，除你以外的生物在过道上遇到需要选择方向的分叉路口时，有 50% 机会误认错的方向为正确的前进方向。\n门Door。所有保护区域内的门都以魔法上锁，等同于使用法术秘法锁封门。此外，你还可以用一个幻象掩盖至多 10 扇门（如同法术 次级幻影minor illusion 的虚幻物件效果）来让其看起来有如平整的墙面。\n楼梯Stairs。蛛网从上到下布满了保护区域内的楼梯，等同于法术蛛网术 web的效应。铜墙铁壁法术持续时，即使这些蛛网被焚烧或撕毁，也可以在 10 分钟后重生。\n其他法术效应Other Spell Effect。你可以在要塞的保护区域内布置你指定的下列魔法效应之一。\n在四条走廊布置 舞光术dancing lights 。你可以安排一个简单的灯光舞动程序，使其在铜墙铁壁法术持续时反复运作。\n在两个地点布置 魔嘴术magic mouth 。\n在两个地点布置 臭云术stinking clound 。其云雾显现在由你安排的位置。在铜墙铁壁法术持续时，即使其云雾被风吹散也会在 10 分钟后重新生成。\n在一条走廊或一个房间布置一个持续存在的 造风术gust of wind 。\n在一个地点布置一个 暗示术suggestion 。你指定一个至多 5 尺的方状区域，任何进入或穿过该区域的生物将受到法术的精神暗示。\n整个保护区域辐射着魔法。对某个特定效应施展 解除魔法dispel magic 时，如果法术成功则移除该特定效应。\n当你在一年里对同一处每日连续施展该法术后，将创造出一个永久的铜墙铁壁效果。",
    "source": "PHB"
  },
  {
    "id": "spell.6.Harm",
    "name": "重伤术",
    "english_name": "Harm",
    "level": 6,
    "school": "死灵",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你将致命的病害释放到施法距离内一个你能看见的生物身上。目标必须进行一次体质豁免，豁免失败则受到 14d6 的黯蚀伤害，豁免成功则伤害减半。该伤害不能将目标的生命值降至 1 以下。若目标体质豁免失败，则其生命值上限减损与该黯蚀伤害相等数值。减损效果维持一小时，且任何可移除疾病的效应均可在时限到达前将目标生命值上限恢复至正常值。",
    "source": "PHB"
  },
  {
    "id": "spell.6.Heal",
    "name": "医疗术",
    "english_name": "Heal",
    "level": 6,
    "school": "塑能",
    "classes": [
      "牧师",
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "指定施法距离内一个你能看见的生物。汹涌澎湃的正能量将充盈该生物，使其恢复 70 点生命值。该法术也会终止正在影响目标的目盲、耳聋以及任何疾病效应。该法术对构装体与不死生物无效。\n升环施法效应：使用七环或更高法术位施展该法术时，你使用的法术位每比六环高一环，治疗量就增加 10 点。",
    "source": "PHB"
  },
  {
    "id": "spell.6.HerosFeast",
    "name": "英雄宴",
    "english_name": "Hero's Feast",
    "level": 6,
    "school": "咒法",
    "classes": [
      "牧师",
      "德鲁伊；TCE：吟游诗人"
    ],
    "castingTime": "10 分钟",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个价值至少 1000gp 的镶饰宝石的碗，作为该法术的耗材"
    },
    "duration": "立即",
    "description": "你创造出一席盛宴，其中包括了上等的食物和饮品。宴席需要 1 小时来享用，并会在这段时间结束后消失不见，而且下述增益效应在该小时结束前不会生效。你可以让至多十二个生物一同分享该大餐。\n所有享用了大餐的生物都会获得几种增益。这些生物的所有疾病和中毒状态都会被治愈，并且免疫毒素和恐慌状态，其进行感知豁免时具有优势，生命值上限也将提高 2d10 点，并获得等量的生命值。这些增益将持续 24 小时。",
    "source": "PHB"
  },
  {
    "id": "spell.6.MagicJar",
    "name": "魔魂壶",
    "english_name": "Magic Jar",
    "level": 6,
    "school": "死灵",
    "classes": [
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块宝石或水晶，或者一个圣物匣，又或者他带装饰的容器，其价值不能低于 500gp"
    },
    "duration": "直至被解除",
    "description": "你的灵魂离开身体进入作为法术材料成分的容器中，而你的身体则陷入失神的状况。灵魂处于容器中时，你可以如同身处容器所在位置一样察觉周边。你不能移动，也不能使用反应，而此时你唯一能做的动作就是将你的灵魂投射出容器至多 100 尺的距离，或者回到你仍活着的身体中去（并终止该法术），或者尝试占据另一个类人生物的身体。\n你可以附身于任何距你 100 尺内你能看见的类人生物（受法术防护善恶 或防护法阵 所保护的生物无法被附身）。该目标必须进行一次魅力豁免。豁免失败，则你的灵魂进入目标的身体，而目标的灵魂被困在容器中；豁免成功，则目标抵抗了你的附身，而随后的 24 小时内你将无法再次尝试附身该生物。\n附身成功后，目标生物的身体将由你控制。你的游戏资料将替换为该生物的属性数据，不过你将保留自己的阵营以及智力、感知、魅力属性值。你的职业特性增益也会在附身时维持，但你无法使用目标可能具有的任何职业特性。\n此外，被附身生物的灵魂可以用它自己的感官从容器内部观察外部，但它既不能移动也不能使用动作。\n附身于一具躯体时，如果容器处在你身边 100 尺内，则你可以用一个动作从宿主的身体回到容器中，并让宿主的灵魂回到它自己的身体里。在你处于宿主的身体中时，如果宿主的身体死亡，则你必须进行一次对抗该法术豁免 DC 的魅力豁免。豁免成功且容器距你不超过 100 尺时，你回归容器内。豁免失败则即时死亡。\n如果容器被毁或者法术终止，则你的灵魂会立即回到你自己身体里。如果你在尝试回到自己身体时，身体距你超过 100 尺或者你的身体已死，则你也随之死亡。如果容器被毁时另一生物的灵魂在容器内，且该生物的身体仍然活着并距它不超过 100 尺，则其灵魂会回到身体里。否则该生物死亡。\n该法术终止时，其容器将随之被摧毁。",
    "source": "PHB"
  },
  {
    "id": "spell.6.MassSuggestion",
    "name": "群体暗示术",
    "english_name": "Mass Suggestion",
    "level": 6,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": "一条蛇的舌头外加一小块蜂窝或一滴橄榄油"
    },
    "duration": "24 小时",
    "description": "你以魔法影响施法距离内至多十二个你能看见的生物，并对其施以某种行动暗示（至多以一两句话的形式）。由你指定的受术目标必须能听到并理解你的话语。而不能被魅惑的生物也将免疫此效应。你的暗示言辞必须能让其行为听起来合乎情理。要求生物刺伤它自己，自己撞向矛尖上，让它自我牺牲，或是让它做任何明显有害的行为都会直接取消该法术所产生的效应。\n每个目标必须进行一次感知豁免，豁免失败者将尽其所能地从事你所描述的行为。你所暗示的行为可能会在法术持续时间内始终一直进行。而如果你所暗示的活动可以用更短的时间完成，则该法术会在目标完成了你的要求后随即终止。\n你也可以描述一种在持续时间内发生的特定状况，作为触发特殊行为的条件。例如，你可以暗示一队士兵将所有的钱交给他们遇到的第一个乞丐。如果在法术终止前条件始终没有满足，则指定的行为不会被执行。\n如果你或你同伴中的任何人伤害了一个被该法术影响的生物，则该法术对该生物产生的效应随之终止。\n升环施法效应：使用七环法术位施展该法术时，持续时间变为 10 日。使用八环法术位施展该法术时，持续时间变为 30 日。使用九环法术位施展该法术时，持续时间变为一年零一日。",
    "source": "PHB"
  },
  {
    "id": "spell.6.MoveEarth",
    "name": "地动术",
    "english_name": "Move Earth",
    "level": 6,
    "school": "变化",
    "classes": [
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一把铁刃以及一个小袋子，袋内装着黏土、壤土、砂土等混成的泥土"
    },
    "duration": "专注，至多2小时",
    "description": "指定施法距离内边长不大于 40 尺的方状地形区域，并以任意的方式重塑区域内的泥土，沙土或黏土。你可以升高或降低区域内的地面高度，制造或填平一道沟渠，升起或夷平一座山丘，或者塑造一根立柱。被改变的地形范围在最长不得超过整个区域最长边长的一半。因此，如果你影响了 40 尺方状区域，则你可以创造一根至多20尺高的立柱，将地面升高或降低至多 20 尺，挖一条至多 20 尺深的壕沟，等等。这些改变需要花 10 分钟的时间来完成。\n每为法术维持 10 分钟专注，你都可以选择一片新的地形区域再施以影响。\n由于地形的变化发生得很缓慢，区域内的生物通常不会被地面的移动困住或者受伤。\n该法术无法改变天然的岩石或石制建筑。但石头和建筑仍会因适应地形的变化而被改变。如果你改变地形的方式会使得建筑不稳定，则它有可能倒塌。\n此外，该法术也无法直接影响植物生长。而被移走的土壤会带走任何生长在其上的植物。",
    "source": "PHB"
  },
  {
    "id": "spell.6.OtilukesFreezingSphere",
    "name": "欧提路克冰封法球",
    "english_name": "Otiluke's Freezing Sphere",
    "level": 6,
    "school": "塑能",
    "classes": [
      "法师；TCE：术士"
    ],
    "castingTime": "1 动作",
    "range": "300 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个小水晶球"
    },
    "duration": "立即",
    "description": "一个冷冻能量形成的冰球从你的指尖射向施法距离内一处指定点，并在该处迸裂为一个半径 60 尺的球状区域。区域内的每个生物必须进行一次体质豁免。豁免失败者将受到 10d6 点冷冻伤害。豁免成功则伤害减半。\n如果冰球击中某处水体或者某处以水分为主的液态表面（不包括由水组成的生物），其触及的水面将凝结出 6 寸厚、30 尺宽的方形冻结区域。任何在其中游泳的生物将被冰面所困。受困的生物可以用一个动作进行一次对抗法术豁免 DC 的力量检定以破冰挣脱。\n你可以在完成该法术后延迟发射冰。此时你手上将形成一枚如投石索弹丸般的冰冷触感的小冰球。你或者任意从你手上获得冰球的生物可以随时将冰球投出去（以 40 尺射程）或者用投石索将其弹射出去（以投石索的正常射程），并以冲击将其打破。被打破后，冰球将产生与正常施法时相同的效应。你还可以将冰球设置成陷阱而不直接打破它。不论如何，被创造的小冰球1 分钟后若仍未被打破，它将自动迸裂。\n升环施法效应：使用七环或更高法术位施展该法术时，你使用的法术位每比六环高一环，其伤害就增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.6.OttosIrresistibleDance",
    "name": "奥图迷舞",
    "english_name": "Otto's Irresistible Dance",
    "level": 6,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "专注，至多 1 分钟",
    "description": "指定施法距离内一个你能看见的生物，并使目标生物会在原地跳起滑稽的舞蹈：它将在持续时间内不住的曳步、踏脚和蹦跳。不会被魅惑的生物将免疫该法术。\n正在跳舞的生物必须用掉它全部的移动力在原地跳舞，其进行敏捷豁免和攻击检定时具有劣势。目标受该法术影响时，其它生物对其进行的攻击检定具有优势。正在跳舞的生物可以使用一个动作来进行一次感知豁免，豁免成功则法术终止。",
    "source": "PHB"
  },
  {
    "id": "spell.6.PlanarAlly",
    "name": "异界誓盟",
    "english_name": "Planar Ally",
    "level": 6,
    "school": "咒法",
    "classes": [
      "牧师；TCE：邪术师"
    ],
    "castingTime": "10 分钟",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你祈求一个异界个体的援助。你必须对该存在个体有所了解，它可以是一个神，一位原祖，一名恶魔主君，或是其他界域级力量的存在。该存在将派遣一个效忠它的天界生物，元素生物或邪魔来援助你，并使该个生物显现在施法距离内一个未占据空间。如果你知道他们中某个特定生物的名字，则你可以在施展法术时说出其名字来请求指派该生物来援，但是你仍然有可能得到一个不同的生物（由 DM 选择）。\n该生物出现时，你无法强迫它作任何事。你可以以报酬为交换请求其提供服务，只是它并没任何义务为你实现。请求的任务可以简单（帮我们飞越峡谷，或在一场战斗中提供协助），也可以复杂（暗中监视我们的敌人，或在我们扫荡地城时保护我们）。你必须能与该生物交流以为他服务的报酬讨价还价。\n报酬的形式也可以各式各样。一个天界生物可能会要求为一座同盟的神殿捐献一份相当可观的金币或魔法物品，而一只邪魔可能会索要一次活祭或一份财宝作为礼物。一些生物可能会要求你进行一个任务来换取它们的服务。\n粗略计算，一个可以按分钟计算的任务需要每分钟 100gp 的报酬。一个可以按小时计算的任务需要每小时 1000gp 的报酬。一个可以按日计算的任务（至多 10 日）需要每日 10000gp 的报酬。DM 可以按你施放该法术的环境调整具体的报酬。如果任务与生物的行为准则一致，则报酬可能会被减半甚至放弃。没有风险的任务一般只需要建议报酬的一半，而特别危险的任务可能会需要更大的赠礼。生物极少接受看上去像自杀的任务。\n生物完成任务后，或当协议服务时间结束后，如果任务合适并在可能的情况下，生物会在回来向你报告后再返回自己的家乡位面。如果你不能同意生物的服务价格，则其将立即返回其家乡位面。\n应召加入你队伍的生物算作队伍成员，并正常分享获得的经验值。",
    "source": "PHB"
  },
  {
    "id": "spell.6.ProgrammedIllusion",
    "name": "预置幻影",
    "english_name": "Programmed Illusion",
    "level": 6,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一点羊毛和价值至少 25gp 的翡翠粉末"
    },
    "duration": "直至被驱散",
    "description": "你在施法距离内创造一个幻象，其外观为一个物件，一个生物或其他可视的现象，并使其在特定情况下激活。该幻象在被激活前无法被察觉。它必须不大于 30 尺立方区域，而你将在施放该法术时决定幻象该如何行动和发出什么声音。而这种按脚本执行的表演可以持续至多 5 分钟。\n你所指定的情况发生时，幻象会迅速成型并按设定的方式表演。表演结束后，幻象将消失并潜伏 10 分钟。这段时间过后，幻象就可以再次被激活。\n触发幻象的情况可以是一般事件，也可以按你的要求进行细化，但是它必须是发生在目标区域周边 30 尺范围内的能看到或听到的状况。例如，你可以制造一个自己的幻象，在其他人试图打开一扇设置了陷阱的门时出现并发出警告，或者你也可以设置一个在生物说出正确单词或短语才触发的幻象。\n由于幻象无法被碰到，任何与该幻象进行的物理互动都会暴露其幻觉本质。一个生物用其动作调查幻象时，它可以进行一次对抗法术豁免 DC 的智力（调查）检定，以判定是否看穿幻象。辨出幻象的生物可以看穿该影像，其产生的声响对该生物而言显得虚假。",
    "source": "PHB"
  },
  {
    "id": "spell.6.Sunbeam",
    "name": "阳炎射线",
    "english_name": "Sunbeam",
    "level": 6,
    "school": "塑能",
    "classes": [
      "德鲁伊",
      "术士",
      "法师；TCE：牧师"
    ],
    "castingTime": "1 动作",
    "range": "自身（60 尺直线）",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一面放大镜"
    },
    "duration": "专注，至多 1 分钟",
    "description": "一道耀眼的光芒从你手中射出并形成一条 5 尺宽、60 尺长的线状区域。所有区域内的生物必须进行一次体质豁免。豁免失败者将受到 6d8 点光耀伤害，并且在你的下一回合前陷入目盲。豁免成功则伤害减半，且不会陷入目盲。不死生物和泥怪在进行该豁免时具有劣势。\n你可以在法术终止前的任一回合内以一个动作重新创造一道线状光芒。\n在法术持续时间内，你的手中一点散发出耀眼的光芒。其光耀为周围提供 30 尺的明亮光照，以及该范围外 30 尺的微光光照。这些光芒均视为等同于阳光。",
    "source": "PHB"
  },
  {
    "id": "spell.6.TransportviaPlants",
    "name": "木遁术",
    "english_name": "Transport via Plants",
    "level": 6,
    "school": "咒法",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "1轮",
    "description": "该法术将施法距离内一棵大型或更大的静态植物用魔法与同位面上任意距离外的另一棵植物相连接。施法时，你必须见过或触碰过出口植物至少一次。此后，任何生物都可以在法术持续时间内花费 5 尺移动力进入目标植物内，然后从出口植物处出来。",
    "source": "PHB"
  },
  {
    "id": "spell.6.TrueSeeing",
    "name": "真知术",
    "english_name": "True Seeing",
    "level": 6,
    "school": "预言",
    "classes": [
      "吟游诗人",
      "牧师",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "由蘑菇粉、藏红花和油脂制成得眼药膏，价值为 25gp，作为该法术的耗材"
    },
    "duration": "1 小时",
    "description": "你触碰一个自愿的生物，让该法术赋予其看到事物真实面目的能力。受术者在法术持续时间内拥有 120 尺的真实视觉，其能发现被魔法隐藏的暗门，也能看到以太位面。",
    "source": "PHB"
  },
  {
    "id": "spell.6.WallofIce",
    "name": "冰墙术",
    "english_name": "Wall of Ice",
    "level": 6,
    "school": "塑能",
    "classes": [
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一小块石英"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你在施法距离内一块坚实的地面上创造出一面冰墙。你可以将它塑成半球状或球状（半径最长 10 尺），也可以塑成一个由十个 10 尺×10 尺的方板块构成的平面。每块板块都必须要和至少一块其他板块相连。不管形状如何，冰墙总是厚 1 尺并持续存在至法术终止。\n如果冰墙形成时穿过了某生物所占据的空间，则该生物会被推到冰墙的一侧且必须进行一次敏捷豁免。豁免失败者将受到 10d6 点冷冻伤害，豁免成功则伤害减半。\n作为一个物件，冰墙可以因受到伤害而被打破。冰墙的 AC 为 12，每段 10 尺长的冰墙有 30 点生命值，而且冰墙对火焰伤害具有易伤。当一段 10 尺长的冰墙的生命值降至 0 时，这段冰墙就会被摧毁，但原地会留下一片冰冷刺骨的空气。生物在一个回合内第一次通过这片寒气时，必须进行一次体质豁免。豁免失败者将受到 5d6 的冷冻伤害，成功则伤害减半。\n升环施法效应：使用七环或更高法术位施展该法术时，你使用的法术位每比六环高一环，冰墙出现时造成的伤害就增加 2d6，并且通过寒气时受到的伤害也增加 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.6.WallofThorns",
    "name": "棘墙术",
    "english_name": "Wall of Thorns",
    "level": 6,
    "school": "咒法",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "120 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一把荆棘"
    },
    "duration": "专注，至多 10 分钟",
    "description": "你创造出一面坚韧、纠缠、长满锐利棘刺的灌木之墙。棘墙出现在施法距离内一处坚实的地面上并且持续存在至法术终止。你可以选择创造长不过 60 尺、高不过 10 尺、厚不过 5 尺的直墙；或是直径不过 20 尺、高不过 20 尺、厚不过 5 尺的环形墙。此外，棘墙还会阻挡视线。\n棘墙出现时所有位于其内的生物要进行一次敏捷豁免。豁免失败者将受到 7d8 点穿刺伤害，豁免成功则伤害减半。\n生物可以移动穿过棘墙，但这是个十分缓慢且痛苦的过程。生物在棘墙中每移动 1 尺要消耗 4 尺的移动力。另外，生物在一个回合内第一次进入棘墙或在棘墙里结束其回合时，必须进行一次敏捷豁免。豁免失败者将受到 7d8 点挥砍伤害，豁免成功则伤害减半。\n升环施法效应：使用七环或更高法术位施展该法术时，你使用的法术位每比六环高一环，两种类型的伤害就都增加 1d8。",
    "source": "PHB"
  },
  {
    "id": "spell.6.WindWalk",
    "name": "御风而行",
    "english_name": "Wind Walk",
    "level": 6,
    "school": "变化",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 分钟",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "明火和圣水"
    },
    "duration": "8 小时",
    "description": "你和施法距离内你能看见的至多十个自愿生物在法术持续时间内变为气化形态，其外观有如一团云雾。处于该云雾形态的生物具有 300 尺的飞行速度，并且对非魔法武器造成的伤害具有抗性。该形态下的生物除疾走和变回原形以外不能执行其他动作。变回原形需要花一分钟的时间，在这段时间内该生物处于失能状态且不能移动。在法术终止前，该生物还可以再次变成云雾形态，而再次进行变形同样要花一分钟时间。\n如果法术终止时受术生物正以云雾形态飞行，则该生物将在 1 分钟内以每轮 60 尺的速度降落直至安全着陆。如果该生物降落 1 分钟后还没着陆，则在余下的距离中它将会如正常情况一样坠落。",
    "source": "PHB"
  },
  {
    "id": "spell.6.WordofRecall",
    "name": "回返真言",
    "english_name": "Word of Recall",
    "level": 6,
    "school": "咒法",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "5尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你和你身边 5 尺内的至多五个自愿生物一起瞬间传送到一个你事先设置好的避难所。你和与你一起传送的生物将出现在你准备避难所时指定的地点（见下）旁边最近的未被占据位置。如果你在施放法术前没有事先准备好避难所，则该法术将不产生任何效应。\n设置避难所时，你必须身处一个你所信仰神的神庙或与该神密切相关的地点，然后在该处施展此法术。如果你试图在一个并不供奉你所信仰神的地方施展此法术，则该法术将不产生任何效应。",
    "source": "PHB"
  },
  {
    "id": "spell.7.ConjureCelestial",
    "name": "天界咒唤术",
    "english_name": "Conjure Celestial",
    "level": 7,
    "school": "咒法",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 分钟",
    "range": "90 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "你召唤一个挑战等级 4 或更低的天界生物，并使其显现在施法范围内一处你能看见且未被占据的空间。该天界生物在生命值降至 0 时，或者法术终止时消失不见。\n被召唤的天界生物对你和你的伙伴保持友善关系。你为召唤出来的天界生物骰先攻，它也依此获得其自己的行动回合。该天界生物服从你发出的所有语言命令（不需要你作动作），前提是该命令必须不违反其所属阵营。如果你不发出任何命令，该生物会在敌对生物前保护自己，如果没有敌对生物则不执行任何动作。\n该天界生物的具体数值由 DM 掌控。\n升环施法效应：使用九环法术位施展该法术时，你将召唤一个挑战等级 5 或者更低的天界生物。\n（注：此法术原译作“召唤天界生物” ，因易与后续《塔莎的万事坩埚》中的法术 天界召唤术Summon Celestial 混淆而改）",
    "source": "PHB"
  },
  {
    "id": "spell.7.DelayedBlastFireball",
    "name": "延迟爆裂火球",
    "english_name": "Delayed Blast Fireball",
    "level": 7,
    "school": "塑能",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一颗蝙蝠粪和硫磺混合的小球"
    },
    "duration": "专注，至多 1 分钟",
    "description": "一束黄光从你的指尖射向施法距离内你指定的一点，并在法术持续时间内在该点凝结成一颗赤红的珠子。当因专注被打断或自主决定导致法术终止时，珠子将伴着低吼炸裂成四窜的烈焰并绕过拐角扩散。此时，目标点周边半径 20 尺内的每个生物都必须进行一次敏捷豁免。豁免失败者将承受全部累积的火焰伤害，豁免成功则伤害减半。\n该法术的基础伤害为 12d6。如果你在回合结束时，珠子尚未引爆，则其伤害增加 1d6。\n如果珠子爆炸前被生物触碰到，则该生物必须进行一次敏捷豁免。豁免失败则法术立即终止并触发爆炸效应。豁免成功则该生物可将珠子抛开至多 40 尺。当珠子被生物或固态物件撞击时，法术立即终止并且触发爆炸效应。\n火焰伤害区域内没被着装携带的易燃物品将被烈焰点燃。\n升环施法效应：使用八环或更高法术位施展该法术时，你使用的法术位每比七环高一环，基础伤害就提高 1d6。",
    "source": "PHB"
  },
  {
    "id": "spell.7.DivineWord",
    "name": "圣言术",
    "english_name": "Divine Word",
    "level": 7,
    "school": "塑能",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 附赠动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你吟诵一句神圣的箴言，其中充盈了创世黎明的力量。在施法距离内指定任意数量的你能看见的生物，并迫使每个能够听到圣言的生物进行一次魅力豁免。豁免失败者基于其当前生命值承受以下效应：\n生命值为 50 或更少： 耳聋 1 分钟。\n生命值为 40 或更少： 耳聋并目盲 10 分钟。\n生命值为 30 或更少： 耳聋、目盲并被震慑 1 小时。\n生命值为 20 或更少： 即死。\n对于受术的天界生物、元素生物、精类生物或邪魔，其豁免失败时不需考虑其当前生命值，并直接将其遣返回其原属位面（本来就处于原属位面则无效）。在随后 24 小时内，该生物不能通过任何方式回到当前位面，除非使用祈愿术的效应。",
    "source": "PHB"
  },
  {
    "id": "spell.7.Etherealness",
    "name": "以太化",
    "english_name": "Etherealness",
    "level": 7,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "牧师",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "最长 8 小时",
    "description": "你进入当前所处位面与以太位面边缘的重叠空间。你可以在法术持续时间内一直呆在该以太边缘，也可以使用动作解除法术。此时你可以向任意方向移动。如果向上或向下移动，则你移动的每尺距离需要额外消耗一尺的移动力。你可以看见并听见你原来的位面，但是所有事物都以灰度显示，而你也看不到 60 尺外的东西。\n在以太位面时，只有同样处在以太位面的其他生物才能被你影响或影响你。不在以太位面的生物无法察觉你，也无法与你互动，除非其具相应的特殊能力或魔法。\n你将无视所有不在以太位面的物品和效应，这使你可以穿越你能看见的原属位面物件。\n法术终止时，你立刻回到原本所在的位面，占据当前所在的空间位置。如果你的位置已经有一件固体的物件或一个生物，则你立刻被转移到最近一处你可占据而未被占据的空间位置，并受到两倍于你移动尺数的力场伤害。\n如果你正处于以太位面，或所在位面与以太位面不相连（比如某个外层位面），则该法术无效。\n升环施法效应：使用八环或更高法术位施展该法术时，你使用的法术位每比七环高一环，你就可以多指定三个自愿生物作为法术目标（包括你在内）。这些生物在你施法时必须在你 10 尺内。",
    "source": "PHB"
  },
  {
    "id": "spell.7.FingerofDeath",
    "name": "死亡一指",
    "english_name": "Finger of Death",
    "level": 7,
    "school": "死灵",
    "classes": [
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "你发出负能量并贯穿施法距离内你能看见的一个生物使其承受苦痛。该生物必须进行以此体质豁免。豁免失败则受到 7d8+30 点黯蚀伤害，豁免成功则伤害减半。\n被该法术杀死的类人生物将在你下一回合开始时唤起为一只受你操控的僵尸，并在随后尽力遵循你的语言指令。",
    "source": "PHB"
  },
  {
    "id": "spell.7.FireStorm",
    "name": "火焰风暴",
    "english_name": "Fire Storm",
    "level": 7,
    "school": "塑能",
    "classes": [
      "牧师",
      "德鲁伊",
      "术士"
    ],
    "castingTime": "1 动作",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "一片由烈焰形成的风暴扫过施法距离内一处你指定的区域。该区域由至多十个 10 尺立方区域组成。你可以自行安排各立方区域的组合方式，而每个立方区域必须至少有一面与其他立方区域相连。区域内每个生物必须进行一次敏捷豁免。豁免失败者将受到 7d10 点火焰伤害，豁免成功则伤害减半。\n风暴的烈焰将对区域内的物件造成伤害，并点燃区域内所有未被着装或携带的可燃物件。你可以选择让区域内的植物生命免受该法术效应的影响。",
    "source": "PHB"
  },
  {
    "id": "spell.7.Forcecage",
    "name": "力场监牢",
    "english_name": "Forcecage",
    "level": 7,
    "school": "塑能",
    "classes": [
      "吟游诗人",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "100 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "价值 1500gp 的红宝石尘"
    },
    "duration": "1 小时",
    "description": "你围绕施法距离内一处指定地点力场构筑出一个固定的立方状隐形监牢。你可以选择监牢的形式为笼状或密封体。\n笼状监牢为各边长至多 20 尺的立方体，其墙体由 1/2 寸粗的力场栅栏杆组成，每杆指间相距 1/2 寸。\n密封监牢为各边长至多 10 尺的立方体，其墙体为由力场墙密封，并阻隔一切物质和法术从牢笼里进出。\n施展该法术时，所有完全在法术区域内的生物将被牢笼困住。部分处于区域内或者体型比区域更大的生物则被从区域中心向外推开，直至其完全离开该区域。\n牢笼内的生物不能以非魔法的手段离开。如果该生物试图使用传送或跨位面旅行来离开牢笼，则其必须线进行一次魅力豁免。豁免成功则该生物可以用该魔法离开牢笼。豁免失败者将无法以此离开牢笼并浪费掉该法术或效应。该牢笼同时延伸至以太位面从而屏蔽掉从以太位面旅行逃脱。\n该法术不能被法术 解除魔法dispel magic 所解除。",
    "source": "PHB"
  },
  {
    "id": "spell.7.MirageArcane",
    "name": "海市蜃楼",
    "english_name": "Mirage Arcane",
    "level": 7,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "法师"
    ],
    "castingTime": "10 分钟",
    "range": "视野",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "10 日",
    "description": "你使至多 1 里方形区域内的地形在视觉、听觉、嗅觉、甚至触觉上都像是某种其它的地形，不过其地形的大致形状仍保持不变。你可以让开阔的平原或者一条路可能变得像一片湿地，一座小山，一个裂谷或是其它困难或无法通行的地形。你还可以让一个池塘变得像一片茂盛的草地，一个悬崖变得像一个缓坡，或者让一个乱石沟变得像一条宽阔平坦的大路。\n另外，你还可以改变建筑物的外观，或者在本来没有建筑物的地方添上建筑物。该法术不可以伪装、隐藏或增添生物。\n该幻术是听觉、视觉、触觉和嗅觉的综合体，因而其可以把空旷的地面变成困难地形（或者反过来），甚至使之变成无法通行的区域。幻象地形的任何一小部分（例如一块石头或者一根树枝）被移动到法术区域外时都会立刻消失不见。\n拥有真实视觉的生物可以看穿幻术，洞悉地形的真实形态；然而幻象的所有其它元素仍会得以保留，所以一个意识到这是幻象的生物仍然可以与该幻象进行物理互动。",
    "source": "PHB"
  },
  {
    "id": "spell.7.MordenkainensMagnificentMansion",
    "name": "魔邓肯豪宅术",
    "english_name": "Mordenkainen's Magnificent Mansion",
    "level": 7,
    "school": "咒法",
    "classes": [
      "吟游诗人",
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "300 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个象牙雕琢的拱门小模型、一块打磨过的大理石和一把微型银汤匙，每件物品至少价值 5gp"
    },
    "duration": "24 小时",
    "description": "你在施法距离内创造出一个异次元的居所，并维持至法术持续时间结束。居所唯一的入口宽 5 尺，高 10 尺而微微发光，其具体位置由你指定。只要该入口保持开启，你和你施展该法术时指定的任意生物都可以进入该异次元居所中。你可以在距入口不超过 30 尺处开启或关闭入口。而入口关闭时即其处于隐形状态。\n入口内是一个连接着许多房间的华丽大厅。其内空气洁净清新而温暖舒适。\n你可以随意创造自己喜欢的房间构造，但其总体积不得超过 50 个边长 10 尺的立方体。房间内依你喜好配置好家具和装饰，其内储备的食材足以制作供 100 人享用的九道菜大餐。一组共 100 名的半透明仆从会招待任何进入房间的人。仆从的外观衣着由你决定，而它们会完全服从你的命令。每个仆从都可以完成一个普通人程度的工作，但它们不能攻击或者进行任何直接伤害其他生物的行动。因而仆从可以完成的工作包括：取来物品、清洁、修理、叠衣服、生火、上菜、倒酒等等。仆从可以去豪宅中的任何地方，但不能里开宅子。由该法术创造的家具和其他物品如果被移出豪宅，就会消散成烟雾。该法术终止时，任何仍处于该异次元空间内的生物或物件都将被移出空间内，并出现在距离入口最近的开放空间内。",
    "source": "PHB"
  },
  {
    "id": "spell.7.MordenkainensSword",
    "name": "魔邓肯之剑",
    "english_name": "Mordenkainen's Sword",
    "level": 7,
    "school": "塑能",
    "classes": [
      "吟游诗人",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一把剑柄和柄端由铜与锌打造的微缩铂金剑，价值 250gp"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在施法距离内创造出一个闪闪发光的剑形力场，并使其在法术持续时间内维持存在。\n秘法剑出现时，你可以对该剑 5 尺内的一个自选目标发动一次近战法术攻击。命中时，目标受到 3d10 点力场伤害。在法术持续时间内，你可以在自己回合使用一个附赠动作将剑移动至多 20 尺。移动的目的地你必须能够看见，而移动完成后你还可以对同一目标或不同的目标再发动一次该攻击。",
    "source": "PHB"
  },
  {
    "id": "spell.7.PlaneShift",
    "name": "异界传送",
    "english_name": "Plane Shift",
    "level": 7,
    "school": "咒法",
    "classes": [
      "牧师",
      "德鲁伊",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一根与某个位面完成同调，价值至少 250gp 的分叉金属短棒"
    },
    "duration": "立即",
    "description": "你和至多八个自愿生物手拉手站成一圈，然后被传送到一个不同的存在位面中。你可以概括地指名一个目的地（比如火元素位面的黄铜城，或者九层地狱第二层迪斯帕特的宫殿），然后你将出现在目的地里或其附近附近。假设你想到达黄铜城，按照 DM 的判断，你可能会传送到达它的钢铁大道上，或它的灰烬之门前，又或者与城市隔着火焰之海相望之处。\n另外，如果你知道某个处于另一位面的传送法阵的印记序列，则该法术可以把你带到该法阵处。如果该传送法阵太小而装不下所有你传送的生物，则他们会出现在离传送法阵最近的未占据空间里。\n你可以用该法术放逐一个非自愿的生物到另一位面。指定一个你触及范围内的生物并对它进行一次近战法术攻击。命中时，此生物必须进行一次魅力豁免。豁免失败者将被传送到你指定位面的一个随机地点。被这样传送走的生物必须自行寻找回到你现在位面的路。",
    "source": "PHB"
  },
  {
    "id": "spell.7.PrismaticSpray",
    "name": "虹光喷射",
    "english_name": "Prismatic Spray",
    "level": 7,
    "school": "塑能",
    "classes": [
      "术士",
      "法师；TCE：吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "自身（60 尺锥状）",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "八条多彩射线从你的手上闪出。每条射线颜色不同且具有不同的威力和作用。在 60 尺锥状区域内的每个生物必须进行一次敏捷豁免同时掷一次 d8 决定生效哪种颜色的射线。",
    "source": "PHB"
  },
  {
    "id": "spell.7.ProjectImage",
    "name": "投影术",
    "english_name": "Project Image",
    "level": 7,
    "school": "幻术",
    "classes": [
      "吟游诗人",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "500 里",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "价值至少 5gp 的材料制成的一个你自身的微缩模型"
    },
    "duration": "专注，至多 1 日",
    "description": "你创造一个自己的幻象分身，并使其在法术持续时间内维持存在。该分身可以出现在施法距离内你曾见过的任何地点，而不论中间是否存在障碍物。该幻象外观和声音与你一样，只是没有现实形体。幻象受到伤害时会立即消失并终止法术。\n你可以用你的动作移动该分身至多两倍于你速度的尺数，而其姿态、言语和行为均按照你的指定作表现。此外幻象还可以完美的模仿你的举止。\n你可以通过分身的眼睛视物，用分身的耳朵聆听，如同你处于它的位置一样。你可以在自己回合内以一个附赠动作在自己与分身的感官间切换。而当你使用分身的感官时，本体周边的事物对你而言等同于处于目盲且耳聋的状态。\n由于幻象无法被碰到，任何与该幻象进行的物理互动都会暴露其幻觉本质。一个生物用其动作调查幻象时，它可以进行一次对抗法术豁免 DC 的智力（调查）检定，以判定是否看穿幻象。辨出幻象的生物可以看穿该影像，其产生的声响对该生物而言显得虚假。",
    "source": "PHB"
  },
  {
    "id": "spell.7.Regenerate",
    "name": "再生术",
    "english_name": "Regenerate",
    "level": 7,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "牧师",
      "德鲁伊"
    ],
    "castingTime": "1 分钟",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个转经筒和圣水"
    },
    "duration": "1 小时",
    "description": "你触碰一个生物并加快其自愈速度。目标恢复 4d8+15 点生命值。在法术持续时间内，目标在它的每回合开始时恢复 1 点生命值（每分钟 10 点）。\n如果目标失去了某些身体部位（手指、腿、尾巴等等），则这些部位将在 2 分钟后会重新长出。如果你持有失去的身体部位并且将其手动固定到创口上，则该法术会使该身体部位和创口立即接合。",
    "source": "PHB"
  },
  {
    "id": "spell.7.Resurrection",
    "name": "复生术",
    "english_name": "Resurrection",
    "level": 7,
    "school": "死灵",
    "classes": [
      "吟游诗人",
      "牧师"
    ],
    "castingTime": "1 小时",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一颗至少价值 1000gp 的钻石，作为该法术的耗材"
    },
    "duration": "立即",
    "description": "你触碰一个已死的生物，并使之复活。该目标的死亡时间必须没有超过一百年，其死因不能是老死，且不能是不死生物。此时，如果该生物的灵魂愿意并且能够回来，则受术生物以生命值全满的状态复活。\n该法术同样会中和该生物生前体内的毒素以及罹患的普通疾病，但对于魔法造成的疾病、诅咒和类似的效应则无能为力；如果没有在复活前治愈这些效应，则该生物重获生命的时该效应将继续生效。\n该法术能治愈致命的伤口，也能恢复失去的身体部位。\n死而复生是一个痛苦的体验。复活的目标在随后进行攻击检定、豁免检定和属性检定时具有-4 减值。该目标每完成一次长休，其减值就减少 1，依次叠加直至减值完全消失。\n使用该法术复活一个已死去一年或更久的生物会使你耗费大量精力。你将无法在完成一次长休前再施放任何法术，且此时你进行的一切攻击检定、属性检定和豁免检定具有劣势。",
    "source": "PHB"
  },
  {
    "id": "spell.7.ReverseGravity",
    "name": "反转重力",
    "english_name": "Reverse Gravity",
    "level": 7,
    "school": "变化",
    "classes": [
      "德鲁伊",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "100 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块磁石和一些铁屑"
    },
    "duration": "专注，至多 1 分钟",
    "description": "该法术以施法距离内一点为中心，创造一个半径 50 尺、高 100 尺柱状的重力反转区域。施展该法术时，区域内一切没有被固定在地面上的生物和物件都会向上落去，直到碰到该区域顶端为止。受术生物可以进行一次敏捷豁免以抓住一件他能触及的固定物件，从而避免向上坠落。\n如果在坠落过程中遇到任何固体（比如天花板），则坠落的物体和生物会受到同样情况下正常坠落时所会受到的冲击。如果一个物体或生物到达该区域的顶部并且没有撞到任何实体，则它将停留在该处并微微振动，直至法术终止。法术持续时间结束后，受术物件和生物将重新坠落下来。",
    "source": "PHB"
  },
  {
    "id": "spell.7.Sequester",
    "name": "隔离术",
    "english_name": "Sequester",
    "level": 7,
    "school": "变化",
    "classes": [
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "钻石、绿宝石、红宝石、蓝宝石得粉尘混合而成的粉末，其价值至少 5000gp，作为该法术的耗材"
    },
    "duration": "直至被解除",
    "description": "该法术能够将一个自愿的生物或物体藏匿起来，使其在法术结束前都无法被侦测。施展该法术并且触碰目标时，目标变为隐形且不能被作为预言系法术的目标，也无法被预言系法术创造出的传感器所感知。\n如果法术的目标是一个生物，则目标将进入假死状态。时间在受术者的世界中停止了流动，因此它不会衰老。\n你可以设置一个让该法术提前终止的条件。该条件由你自由设定，但必须是发生在目标周围 1 里内或目标在周围一里内能看见的事件。例如：“1000 年以后”或者“当泰拉斯奎巨兽觉醒时”。如果受术者受到任何伤害，则该法术立刻终止。",
    "source": "PHB"
  },
  {
    "id": "spell.7.Simulacrum",
    "name": "拟像术",
    "english_name": "Simulacrum",
    "level": 7,
    "school": "幻术",
    "classes": [
      "法师"
    ],
    "castingTime": "12小时",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一些雪或冰，用来给模拟对象制作一个真人大小的模型；放置在模型上的模拟对象身体的一部分，比如毛发或指甲；以及撒在分身上至少价值 1500gp 的红宝石粉，作为该法术的耗材"
    },
    "duration": "直至被解除",
    "description": "你花费整段施法时间为施法距离内一个野兽或类人生物塑造出一个幻象分身。该分身是一个由冰雪构成的半真实生物，它可以执行动作，也能在其他方面如同正常生物一样受到各种影响。它与其本体生物看起来一样，但是其生命值上限只有本体一半，而且在成型时不带任何装备。除此之外，幻象分身的属性数据都与本体相同，不过生物类型是构装生物。\n拟像对你和你所选定的生物保持友好关系。它会服从你说出的命令，按照你的愿望行动，在战斗中还会在你的回合行动。拟像无法学习，也不知道如何变得更强大，因此它永远不会升级，其他能力也不会变得更强，而它用掉的法术位也不能恢复。\n拟像受损后，你可以在炼金实验室里修理它。拟像每恢复一点生命值就要消耗价值 100gp 的稀有矿物和药草。拟像会一直持续到其生命值降至 0，随后就变回冰雪并立刻融化。\n再次施放该法术时，任何你已用该法术创造出来并且正在活动中的分身都会立刻被摧毁。",
    "source": "PHB"
  },
  {
    "id": "spell.7.Symbol",
    "name": "徽记术",
    "english_name": "Symbol",
    "level": 7,
    "school": "防护",
    "classes": [
      "吟游诗人",
      "牧师",
      "法师；TCE：德鲁伊"
    ],
    "castingTime": "1 分钟",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "水银和磷，以及总计价值至少 1000gp 的钻石和蛋白石粉末，作为该法术的耗材"
    },
    "duration": "直至被解除或被触发",
    "description": "施展该法术时，你在某个表面（诸如桌面、地板、墙等）或某个能被关闭以隐藏符纹的物件里（诸如书本、卷轴、宝箱等）刻画一个伤害其他生物的符纹。如果你指定某个表面，则此符纹可以覆盖周边不超过 10 尺直径的区域。如果你指定某个物件，则该物件必须待在其所在位置；如果该物件从被施法位置被移动超过 10 尺，则其符纹被破坏且法术不被触发即告终止。\n该符纹近乎隐形，其需要以法术的豁免 DC 进行一次智力（调查）检定才能被发现。\n你在施法时设定该符纹的触发条件。刻画于表面的符纹其最典型的触发条件包括：触碰或站立在符纹上；拿掉覆盖在符纹上的物件；进入符纹一定施法距离；操作符纹所在的物件等。刻画在物件内的符纹其最典型的触发条件包括：打开物件；靠近物件一定的距离；看到或阅读该符纹等。\n你可以进一步细化触发条件，比如设定法术触发时符合特定的条件，或设定其触发者必须具备特定身体特征（身高体重等），特定生物种类（例如设定为只影响异怪或卓尔）或特定阵营。你还可以将特定条件者排除在符纹触发者之外，诸如某说出特定口令的人。\n刻画符文时，你可以从下列选项中选择其一作为该法术的效应。符文一旦被触发就会开始发光，使其周围 60 尺半径的球状区域处于微光光照并持续 10 分钟。该时间段过后法术即告终止。符文生效时，所有位于球状区域内的生物即成为法术效应的目标。生物在其回合内第一次进入该区域内或在其中结束其回合时，也同样会成为符文效应的目标。\n死亡Death。所有目标必须进行一次体质豁免，豁免失败者将受到 10d10 点黯蚀伤害，豁免成功则伤害减半。\n争斗Discord。所有目标必须进行一次体质豁免。豁免失败者将在接下来的 1 分钟内将不停地与其他生物争吵。该时间段内它无法进行任何有意义的沟通，并且其进行的所有攻击检定和属性检定都具有劣势。\n恐惧Fear。所有目标必须进行一次感知豁免，豁免失败者将陷入 1 分钟的恐慌状态。被恐慌时，该生物将丢弃其所有持握物，并在其每回合里尽力向远离符文的方向移动至少 30 尺。\n绝望Hopelessness。所有目标必须进行一次魅力豁免，豁免失败者将陷入持续 1 分钟的绝望。该时间段内它不能进行攻击，也不能对任何生物使用伤害性的能力，法术或其他魔法效应。\n错乱Insanity。所有目标必须进行一次智力豁免，豁免失败者将陷入持续 1 分钟的错乱。陷入错乱的生物不能执行动作，也听不懂其他生物的话语看不懂任何文字，而只会胡言乱语。此时将由 DM 来控制其胡乱的移动。\n苦痛Pain。所有目标必须进行一次体质豁免，豁免失败者将因极度的痛苦而陷入 1 分钟的失能状态。\n睡眠Sleep。所有目标必须进行一次感知豁免，豁免失败者将陷入 10 分钟的昏迷状态。该睡眠者受到伤害时将会被惊醒，也可以被其他人用一个动作摇醒或打醒。\n震慑Stunning。所有目标必须进行一次感知豁免，豁免失败则陷入 1 分钟的被震慑状态。",
    "source": "PHB"
  },
  {
    "id": "spell.7.Teleport",
    "name": "传送术",
    "english_name": "Teleport",
    "level": 7,
    "school": "咒法",
    "classes": [
      "吟游诗人",
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "该法术将你以及施法距离内你能看见的至多八个自愿生物，或者施法距离内你能看见的一个物件传送到你指定的某处地点。如果你指定一个物件作为法术目标，则该物件必须能被整个放进一个边长 10 尺的立方体中，且必须没有被一个非自愿生物所着装或携带。\n你只能指定你知道的地点作为传送目的地，而目的地必须与你位于同一个存在位面中。你对目的地的熟悉程度决定你是否能成功抵达。DM 可以掷一个 d100 并查阅下表。\n?\n熟悉程度Familiarity。“永久法阵”指你知道某永久传送法阵的相关符文序列。“相关物件”指你持有一件在过去六个月内从目标地点取来的物件，例如某个法师图书馆内的一本书，某个皇家卧室里床上的亚麻线或某巫妖陵墓里的一块大理石。\n“非常熟悉”指的是你常去的地方，你仔细研究过的地方，或是你在施展该法术时能看见的地方。“偶尔见过”指你见过几次的地方，但你不是很熟悉\n“见过一次”指你只见过一次的地方，包括通过魔法看到的地点。“听过描述”指一个你从别人那里听来位置和外观的地点，比如从地图上看来的地点。\n“查无此地”指根本不存在的地点。也许你尝试探知敌人的密室但看到的只是幻象，或者是一个你曾经熟悉但如今已不再存在的地点。\n抵达地点On Target。你和你的队伍（或目标物件）出现在你意料中的地点。\n偏离地点Off Target。你和你的队伍（或目标物件）出现在目的地随机方向上随机距离的一点。距离误差等于原定移动距离×1d10×1d10×1%。例如，假设你尝试移动 120 里而不幸偏离目标，并且在掷距离误差时两个 d10 投出了 5 和 3，那么你的传送距离误差是原定移动距离的 15%，也就是 18 里。DM 通过掷一次 d8 来判误差出现在目的地的哪个方向。1 为正北，2 为东北，3 为正东，依此类推。如果你们想要传送到一个海滨城市但却出现在离岸 18 里远的海上，那你们可有麻烦了。\n相似地区Similar Area。你和你的队伍（或目标物件）出现在一个和目的地外观或氛围相似的不同地点。例如，如果你想回你自己的研究室去，则你可能会误打误撞出现在其他法师的研究室里，或是一个陈设有许多和你的研究室里相似工具的炼金用品店。通常你会出现在离目的地最近的相似地区，但由于该法术没有距离限制，你有可能会出现在同一个位面上的任何地点。\n遇难Mishap。该法术的意外魔法效果导致这次旅行特别艰难。尝试传送的所有生物（或目标物件）受到 3d10 点力场伤害，随后 DM 重投 d100 并查阅上表来决定你们出现在哪里（你们可能再次遇难，而每次遇难都要承受该伤害）。",
    "source": "PHB"
  },
  {
    "id": "spell.8.AnimalShapes",
    "name": "动物形态",
    "english_name": "Animal Shapes",
    "level": 8,
    "school": "变化",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 24 小时",
    "description": "你施法把其他生物变成野兽。指定施法距离内任意数量的自愿生物，并使每个目标变形为一只挑战等级不超过 4，体型不大于大型的野兽。你可以在法术持续时间内以一个动作将受术生物变成其他野兽形态。\n每个受术生物的变形效应持续至法术终止，其生命值降至 0 或是死亡时，法术效应也将随之终止。你可以分别为每个目标选择不同的形态。而目标的游戏资料则以所选野兽的游戏资料作替换，并保留其本来的阵营，以及智力、感知和魅力值。目标将使用新形态的生命值。而当其变回通常形态时，该目标的生命值也恢复为变形前的数值。如果目标是因为生命值降至 0 而变回通常形态，则由通常形态承受溢出的伤害。只要溢出伤害不足以将通常形态生命值降至 0，他就不会因此而昏迷。受术生物只能使用新形态的动作，且无法说话或施法。\n目标的装备融入其新形态，而且不能激活或持用装备，也无法以其他任何方式从其装备上获益。",
    "source": "PHB"
  },
  {
    "id": "spell.8.AntimagicField",
    "name": "反魔法场",
    "english_name": "Antimagic Field",
    "level": 8,
    "school": "防护",
    "classes": [
      "牧师",
      "法师"
    ],
    "castingTime": "1 小时",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "嫌恶效应时用一小块醋浸湿的明矾；关怀效应则为一滴蜂蜜"
    },
    "duration": "10天",
    "description": "半径 10 尺的隐形球状反魔法能量环绕着你，将该区域与弥漫在多元宇宙间的魔法能量隔离开来。在反魔法场内：法术无法施放；召唤生物消失无踪；魔法物品也失去其效应。反魔法场将以你为中心移动，直至法术终止。\n除非其来自神器或神本身，否则任何法术和魔法效应都将在场内受压制而无法波及力场内部。在场内施放的法术，其效应被压制的同时其使用的法术位依然被消耗。被压制的魔法效应不会生效，但其持续时间仍然如常计算。\n目标效应Targeted Effects。 法术或其他魔法效应以生物或物件为目标时（比如魔法飞弹和魅惑人类），无法对反魔法场内的目标生效。\n魔法区域Areas of Magic。 法术和其他魔法效应产生的区域影响（比如火球术），无法波及场内部。如果场与某一魔法效应重叠，则该效应在重叠部分被压制。例如，当力场与火墙术产生的火焰重叠时，重叠区域的火焰被压制。如果重叠区域够大，甚至可以将火墙从中间截断。\n法术Spell。场中的生物或物件身上生效的法术或其他魔法效应会受到压制。\n魔法物品Magic Items。 魔法物品的属性和威能在场中受到压制。例如，一把长剑+1 在场中视为一把非魔法长剑。\n用以攻击场内目标的魔法武器以及被身处反魔法场内的攻击者持用的魔法武器，它们的属性和威力都将受到压制。如果一把魔法武器或是一发魔法弹药完全离开反魔法场范围（例如，你从反魔法场内向场外的某个目标发射一支箭矢或是投掷一把标枪），则其中的魔法将在离开力场的瞬间得以恢复。\n魔法旅行Magic Tracel。 以场内区域为起点或终点的传送或位面旅行效应无法生效。在场内，通往某地、某世界或某位面的传送门，以及次元空间的入口（诸如魔绳术所创造的区域）都被暂时关闭。\n生物和物件Creatures and Objects。 在场内，由魔法创造或召唤的生物或物件暂时消失。如此消失的生物，在场不再覆盖其所占据空间时立刻在该处重新出现。\n解除魔法Dispel Magic。任何法术及魔法效应（包括 解除魔法dispel magic ）均对反魔法场无效。自然，不同来源的反魔法场之间也不会相互抵消。\n嫌恶术/关怀术｜Antipathy/Sympathy\n八环 惑控（德鲁伊、法师；TCE：吟游诗人）\n施法时间：1 小时\n施法距离：60 尺\n法术成分：V、S、M（嫌恶效应时用一小块醋浸湿的明矾；关怀效应则为一滴蜂蜜）\n此法术吸引或驱赶你指定的生物。在施法距离内指定一个巨型或更小体型的物件或生物，或是一处不超过 200 尺的立方区域。你指定一类智慧生物（例如红龙、地精、吸血鬼等），并为目标注入能吸引或是驱赶所选类型生物的灵光。你可以选择嫌恶或是关怀作为法术的效应。\n嫌恶Antipathy。法术的影响让你选定类型的生物不可遏止的想要远离受术目标。当符合条件的生物看到目标或是距离目标不足 60 尺时，该生物必须进行一次感知豁免并成功通过，否则将陷入恐慌。只要还能看到目标或是在目标 60 尺内，该生物就会维持恐慌状态。陷入该恐慌状态的生物必须自主移动至附近无法看到目标的安全地点。离开目标至少 60 尺且无法看到目标后，该生物的恐慌状态终止。但再次看到目标或是进入目标 60 尺内时他也将再次陷入恐慌。\n关怀Sympathy。法术的影响让你选定类型的生物不可遏止的想要接近受术目标。当符合条件的生物看到目标或是距离目标不足60尺时，该生物必须进行一次感知豁免并成功通过，否则便会每回合自主移动并靠近目标。靠近后，该生物不能自主的远离目标。   若目标对该生物造成伤害或是以其他方式对其造成危害，则该生物可以再进行一次感知豁免以终止效应，详情见下节。\n终止效应Ending the Effect。 如果受影响的生物在距离目标 60 尺外或是无法看到目标的地方终止其回合，则其可以进行一次感知豁免，豁免成功则不再受法术影响并意识到厌恶感或诱惑力是来自魔法的影响。另外，在法术持续时间内，受影响的生物每 24 小时可以再进行一次感知豁免。\n对该法术效应豁免成功的生物将不受此法术的效应影响，持续 1 分钟，随后仍可能受到该效应影响。",
    "source": "PHB"
  },
  {
    "id": "spell.8.Clone",
    "name": "克隆术",
    "english_name": "Clone",
    "level": 8,
    "school": "死灵",
    "classes": [
      "法师"
    ],
    "castingTime": "1 小时",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一枚至少价值 1000gp 的钻石以及被克隆生物 1 立方寸的肉，作为该法术的耗材。外加一副至少价值 2000gp 的带密封功能的大容器，其尺寸必须足以存放一个要被克隆的生物，例如一个巨大的瓮或灵柩，或是立在地上充满浆状物质的卵囊，又或者充满盐水的水晶棺"
    },
    "duration": "立即",
    "description": "此法术用以培养一个活体生物的无意识复制体作为其死亡时的保险措施。该克隆体在作为法术成分的密封容器中成长，并在 120 日后成熟；你还可以为同一个生物制作较年轻版本的肉体。在容器未被外界影响时，其中的躯体会一直保持无意识的静止状态。\n克隆体成长成熟后，如果本体生物死亡，则其灵魂转移到克隆体中，前提是该灵魂必须保持自由且自愿复活。克隆体的肉体特质与本体相同，并具有相同的个性、记忆和能力，但并不拥有本体随身的装备。由于灵魂已经转移到别处，该生物原本的遗体（如果依然存在）失去活力，且不能被复活",
    "source": "PHB"
  },
  {
    "id": "spell.8.ControlWeather",
    "name": "操控天气",
    "english_name": "Control Weather",
    "level": 8,
    "school": "变化",
    "classes": [
      "牧师",
      "德鲁伊",
      "法师"
    ],
    "castingTime": "10 分钟",
    "range": "自身（半径 5 里）",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "点燃的焚香和一点混有泥土和木屑的水"
    },
    "duration": "专注，至多 8 小时",
    "description": "你在法术持续时间内控制自身 5 里范围内的天气状况。施展该法术时你必须身处户外，而一旦移动到无法直接看到天空的地点时，法术也会随即终止。\n本来由 DM 基于季节和气候所决定的天气状况，在你施展此法术时可以由你随意操控。你可以改变降水、气温以及风势等状况。新的天气状况生效需要经过1d4×10分钟的时间才能完成。状况改变完成后，你可以再次对当前对天气状况作改变。法术终止时，天气将渐渐恢复成平常状态。\n改变天气状况时，你可以从以下表格查明与目前对应的等级，再选择同一表格中高一级或低一级的状况作为其改变结果。改变风势时，你还可以同时改变其风向。",
    "source": "PHB"
  },
  {
    "id": "spell.8.Demiplane",
    "name": "创造半位面",
    "english_name": "Demiplane",
    "level": 8,
    "school": "咒法",
    "classes": [
      "邪术师",
      "法师；TCE：术士"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": false,
      "somatic": true
    },
    "duration": "1 小时",
    "description": "你在施法距离内一处能看见的平面上创造一扇形状模糊的门。门的大小足以让中型生物在其间通行无阻。门开启时，其通向一个边长 30 尺，由木质或石质组成的空房间半位面。法术终止时，门消失不见，而半位面中的门也消失不见，并把任何还在半位面的生物或物件困在其内。\n你每次施展此法术时都可以创造一个新的半位面，也可以连向用此法术创造的旧有的半位面。另外，如果你知晓了某个其他生物用此法术创造的半位面，则你也可以通过此法术连接到那里。",
    "source": "PHB"
  },
  {
    "id": "spell.8.DominateMonster",
    "name": "支配怪物",
    "english_name": "Dominate Monster",
    "level": 8,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 小时",
    "description": "你试图安抚一个施法距离内你能看见的生物，必须成功通过一次感知豁免，否则将在法术持续时间内被你魅惑。若它正与你或你的友方生物战斗，则其进行该豁免时具有优势。\n该生物被魅惑时，只要你与其处于同一位面就可以与之保持心灵感应。你在有意识时，可以通过心灵感应命令该生物（不需要作动作），而它则会尽量服从。你可以描述一个简单具体的行为指令，比如“攻击那个生物”“跑到那个位置”或是“去拿那个物品”。生物完成一项指令却未收到你的进一步指示时，将会使用其本身的能力尽可能的保护自己。\n你可以使用动作以彻底而精确的控制目标。直至下个你的回合结束为止，该生物只能执行由你选择的一个或数个动作之一，且不能进行任何未经你许可的行动。在此期间，你还可以用自己的反应去要求该生物执行一项反应。\n每次目标受到伤害时，都可以尝试进行一次感知豁免，豁免成功则法术终止。\n升环施法效应：使用九环法术位施展该法术时，持续时间变为：专注，至多 8 小时。",
    "source": "PHB"
  },
  {
    "id": "spell.8.Earthquake",
    "name": "地震术",
    "english_name": "Earthquake",
    "level": 8,
    "school": "塑能",
    "classes": [
      "牧师",
      "德鲁伊",
      "术士"
    ],
    "castingTime": "1 动作",
    "range": "500 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一撮泥土、一块岩石和一坨粘土"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你在施法距离内一处能看见的地面上指定一点，并在其上制造地震扰动。在法术持续时间内，一阵强烈的震颤在震源周边半径 100 尺的圆形范围内传递，并使区域内地上的生物和建筑都受到震动影响。\n受影响区域内的地面变为困难地形。而区域地面上的每个正在进行专注的生物都必须进行一次体质豁免，豁免失败则其专注被打断。\n在你施展此法术以及随后保持专注的每回合结束时，区域地面上的每个生物都必须进行一次敏捷豁免，豁免失败则生物应击倒地。\n根据施法区域的地形，DM 可以决定是否应用额外的效应。\n裂缝Fissures。在施展此法术的下一个回合开始时，法术影响区域会撕开一道道裂缝。1d6 条裂缝在 DM 安排的位置出现。每条裂缝深 1d10×10 尺，宽 10 尺，并由影响区域的一边向另一边延伸。裂缝撕开时，将处于其位置上的生物必须成功通过一次敏捷豁免，否则将坠落其中。豁免成功则该生物移动到裂缝旁边。\n任何处在裂缝上的建筑会直接崩塌（如下所示）。\n建筑Structures。在你施展此法术时及法术终止前你的每个回合开始时，地震对影响区域内的所有建筑都造成 50 点钝击伤害。建筑生命值降为 0 时立即崩塌，且可能对附近生物造成伤害。与该建筑距离不大于该建筑高度一半的生物，都必须进行一次敏捷豁免。豁免失败则受 5d6 的钝击伤害并应击倒地且埋于废墟之下。该生物可用一个动作来进行一次 DC20 的力量（运动）检定来尝试逃离废墟。DM 可根据废墟的情况调整 DC 高低。豁免成功时伤害减半，且不会倒地或被掩埋。",
    "source": "PHB"
  },
  {
    "id": "spell.8.Feeblemind",
    "name": "弱智术",
    "english_name": "Feeblemind",
    "level": 8,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一把粘土，水晶，玻璃或矿物球"
    },
    "duration": "立即",
    "description": "指定施法距离内一个你能看见的生物，并尝试摧毁其理智与人格。目标受 4d6 点心灵伤害且须进行一次智力豁免。\n豁免失败时，该生物的智力和魅力变为 1。受术生物将不能施法，也不能启动魔法物品，甚至不能听懂语言或以智慧方式沟通。但该生物仍可以辨识、跟随伙伴，甚至保护他们。\n受术生物每过 30 日即可在当日结束时重新进行一次豁免，豁免成功则该法术效应终止。\n除此之外，高等复原术greater restoration，医疗术heal 或者 祈愿术wish 也可直接终止该法术的效应。",
    "source": "PHB"
  },
  {
    "id": "spell.8.Glibness",
    "name": "花言巧语",
    "english_name": "Glibness",
    "level": 8,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "邪术师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "1 小时",
    "description": "直至法术终止前，你每次进行魅力检定时可以用 15 代替你掷出的数值。此外，无论你说什么，判断你是否说谎的魔法都会将你的话视为真实。",
    "source": "PHB"
  },
  {
    "id": "spell.8.HolyAura",
    "name": "圣洁灵光",
    "english_name": "Holy Aura",
    "level": 8,
    "school": "防护",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一个价值至少 1000gp 的小圣物箱，内含一件圣遗物，例如某位圣者长袍上的一片碎布，或者某本宗教典籍中的一张羊皮纸"
    },
    "duration": "专注，至多 1 分钟",
    "description": "神圣的光芒从你身体中奔涌而出，在你身边汇聚成半径 30 尺的柔光。施展该法术时，你指定处于柔光范围内的若干生物。被指定生物散发出半径 5 尺的微光光照，且其进行的所有豁免均具有优势，而其他生物对它们进行的攻击检定具有劣势。该效应将持续至法术终止。另外，当一个邪魔或不死生物以近战攻击命中受术生物时，其灵光将产生耀眼的爆发，而攻击者必须进行一次体质豁免，豁免失败者将陷入目盲直至法术终止。",
    "source": "PHB"
  },
  {
    "id": "spell.8.IncendiaryCloud",
    "name": "焚云术",
    "english_name": "Incendiary Cloud",
    "level": 8,
    "school": "咒法",
    "classes": [
      "术士",
      "法师；TCE：德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "一片充满了炽热灰烬的旋转烟云显现，并以施法距离内一点为中心的蔓延至半径 20 尺的球状区域。烟云会绕过拐角扩散并使整个区域处于重度遮蔽，并在法术终止前持续存在。此外烟云还可以被和风或强度等级更高的风势（风速至少每小时 10 里）所吹散。\n烟云出现时，每个处在其内的生物都必须进行一次敏捷豁免，豁免失败者将受到 10d8 的火焰伤害，豁免成功则伤害减半。生物在一个回合内第一次进入烟云内，或者在烟云内结束其回合时，也必须进行该豁免。\n在你的每回合开始时，烟云会向你指定的方向直线移动 10 尺。",
    "source": "PHB"
  },
  {
    "id": "spell.8.Maze",
    "name": "迷宫术",
    "english_name": "Maze",
    "level": 8,
    "school": "咒法",
    "classes": [
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 10 分钟",
    "description": "你将施法距离内一个你能看见的生物放逐到一个迷宫般错综复杂的半位面。目标将一直留在该处直至法术持续时间结束，或者直到它逃出该迷宫。\n目标可以使用其动作尝试逃出迷宫。此时它可以进行一次 DC20 的智力检定，检定成功者将逃出迷宫，而该法术随之终止。牛头人和巨牛魔进行该检定时直接成功。\n法术终止时，目标将重新出现在它之前消失的位置。如果该位置被占据，则目标出现在最近的未占据位置。",
    "source": "PHB"
  },
  {
    "id": "spell.8.MindBlank",
    "name": "心灵屏障",
    "english_name": "Mind Blank",
    "level": 8,
    "school": "防护",
    "classes": [
      "吟游诗人",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "24 小时",
    "description": "直至法术终止前，你所触碰的一个自愿生物对下列项目具有免疫：心灵伤害；任何可以感知到其情绪或阅读其思想的效应；预言法术；魅惑状态。当目标受 祈愿术wish 或者其他威力相当的法术或效应影响心智或窃获信息时，该法术也能为其阻挡那些法术或效应。",
    "source": "PHB"
  },
  {
    "id": "spell.8.PowerWordStun",
    "name": "律令震慑",
    "english_name": "Power Word Stun",
    "level": 8,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你说出一蕴含威力的单词，其足以使施法距离内一个你能看见的生物意志受压迫而震惊。如果你所指定的生物现有生命值为 150 或更少，则其被震慑。否则该法术不产生任何效应。\n被震慑目标必须在其每回合结束时进行一次体质豁免。豁免成功，则此震慑效果终止。",
    "source": "PHB"
  },
  {
    "id": "spell.8.Sunburst",
    "name": "阳炎爆",
    "english_name": "Sunburst",
    "level": 8,
    "school": "塑能",
    "classes": [
      "德鲁伊",
      "术士",
      "法师；TCE：牧师"
    ],
    "castingTime": "1 动作",
    "range": "150 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一块猫眼石和一团明火"
    },
    "duration": "立即",
    "description": "灿烂的阳光照耀施法距离内指定的一点为中心周围 60 尺半径的区域。所有位于该光芒中的生物必须进行一次体质豁免。豁免失败者将受到 12d6 点光耀伤害，并陷入 1 分钟的目盲状态。豁免成功则伤害减半，且不会陷入目盲。不死生物和泥怪进行该豁免时具有劣势。\n因该法术陷入目盲的生物在其每回合结束时都可以再进行一次体质豁免。豁免成功则不再目盲。\n该法术将驱散法术区域内所有由法术所创造的黑暗。",
    "source": "PHB"
  },
  {
    "id": "spell.8.Telepathy",
    "name": "心灵感应",
    "english_name": "Telepathy",
    "level": 8,
    "school": "塑能",
    "classes": [
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "无限",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一对相连的银戒指"
    },
    "duration": "24 小时",
    "description": "你与一个你熟识的自愿生物建起心灵连接。该生物可以身处你所在的位面的任意位置。一旦你与目标生物不再位于同一位面则该法术随即终止。\n直至法术终止前，你可以和目标生物通过心灵连接即时共享任何言语、图像、声音以及其他形式的感官信息，而目标也能够辨认出与之交流的对象正是你本人。该法术可以让智力值至少为 1 的目标生物理解你的言语并接收任何你所发送的感官信息。",
    "source": "PHB"
  },
  {
    "id": "spell.8.Tsunami",
    "name": "海啸术",
    "english_name": "Tsunami",
    "level": 8,
    "school": "咒法",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 分钟",
    "range": "视野内",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 6 轮",
    "description": "你指定施法距离内一点并从中升起一面水墙。水墙长不过 300 尺，高不过 300 尺，厚不过 50 尺，且持续存在至法术终止。\n水墙出现时，所有位于水墙内的生物都要进行一次力量豁免。豁免失败者将受到 6d10 点钝击伤害，豁免成功则伤害减半。\n水墙出现后，将在你每一回合开始时带着其内的所有生物一起向远离你的方向移动 50 尺。当水墙进入一个巨型或更小体型生物所占据空间，或他们原本就处于墙内时，该生物必须进行一次力量豁免，豁免失败则受到 5d10 点钝击伤害。该伤害一轮里对同一个生物只生效一次。在你的回合结束时，水墙的高度减少 50 尺，且其随后每轮对生物造成的伤害也减少 1d10。当水墙高度变为 0 尺时法术终止。\n淹没在水墙中的生物可以用游泳的方式移动，由于波涛阻力影响，该生物必须要进行一次对抗该法术 DC 的力量（运动）检定以决定起能否成功移动，而检定失败者则无法移动。通过移动离开水墙区域的生物会直接掉到地上。",
    "source": "PHB"
  },
  {
    "id": "spell.9.AstralProjection",
    "name": "星界投影",
    "english_name": "Astral Projection",
    "level": 9,
    "school": "死灵",
    "classes": [
      "牧师",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 小时",
    "range": "10 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "你必须为此法术影响的每个生物准备一枚至少价值 1000gp 的红锆石jacinth，以及一根做工精细，至少价值 100gp 的银棒，作为该法术的耗材"
    },
    "duration": "特殊",
    "description": "你和施法距离内至多八名自愿的生物将躯体投影到星界（如果你已经在星界，则法术失败且被消耗）。你原本的躯体昏迷并进入静止状态，即其不需要空气和食物也不会衰老。\n你的星界躯体几乎完美的保持了原本的形态，并保留你本体的游戏资料和随身物。星界躯体和你本体的主要区别是从你肩胛骨间向后伸出的一条银线。这条可见长度仅有一尺的银线是你星界躯体和本体间的联系。只要银线保持完好，你总能找到回原本世界的路。只有明确注明可以切断这种银线的效应才可以将其切断。切断银线会将你的灵魂和躯体分离，并将你杀死。\n你的星界躯体可以在星界任意旅行，并能穿过星界的传送门到达其他位面。如果你到达一个新位面，或是回到你施法时所在的位面，你的本体和物品将沿着银线被传送，使你以本体的形态到达新位面。你的星界躯体是单独的实体。星界躯体承受的伤害或效应不会反映在你的本体上，也不会在你回到本体时保持。\n你可以使用一个动作来解散法术，并终止其对你与同伴产生的效应。法术终止时，受术的生物回到其原本的躯体并苏醒。\n你或你的某位同伴会存在提前终止法术效应的情况。对某生物的本体或星界躯体成功施展解除魔法将终止生物的投影效应。如果某生物的本体或星界躯体的生命值降至 0，则该生物自身的投影效应终止。如果法术终止时银线依然保持连接，则受术生物会被拉回原本的躯体，并脱离静止状态。\n如果你在法术终止前被送回本体，你的同伴将被留在星界，只能自行返回（通常通过生命值降至 0 的方式）。",
    "source": "PHB"
  },
  {
    "id": "spell.9.Foresight",
    "name": "预警术",
    "english_name": "Foresight",
    "level": 9,
    "school": "预言",
    "classes": [
      "吟游诗人",
      "德鲁伊",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一根蜂鸟的羽毛"
    },
    "duration": "8 小时",
    "description": "你触碰一个自愿生物，并授予其预示最近未来事件的有限能力。该目标在法术持续时间内无法被突袭，并且其进行的攻击检定、属性检定和豁免检定均具有优势。而其他生物对其进行攻击检定时具有劣势。\n如果你在法术持续时间结束前再施展该法术，则原法术效应即时终止。",
    "source": "PHB"
  },
  {
    "id": "spell.9.Gate",
    "name": "异界之门",
    "english_name": "Gate",
    "level": 9,
    "school": "咒法",
    "classes": [
      "牧师",
      "术士",
      "法师；TCE：邪术师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一枚价值至少 5000gp 的钻石"
    },
    "duration": "专注，至多 1 分钟",
    "description": "你召唤一扇传送门将施法距离内你能看到的一处未被占据空间与一个不同位面的特定地点连接在一起。传送门是你打开的一个直径 5 到 20 尺的圆形开口。其开口朝向你指定的任意方向，并持续至法术终止。\n传送门在某个位面显现时有着明确的正反面。只有从正面穿过传送门的事物才能实现其传送功能，从而传送至另一位面，并在离传送门最近的未占据空间中显现。\n神和其他位面统治者可以阻止该法术在其所在或属于其领域的任何地点创造传送门。\n施展该法术时，你可以说出某个特定生物的名字（不能是假名、头衔、绰号等）。如果该生物在与你不同的位面，则传送门会紧挨被指名生物打开并将该生物吸进传送门。此时该生物会从你所在的传送门另一头出现，并显现在距传送门最近的未被占据空间。你不会获得任何被传送生物的特殊能力，而它此时可以自由的作任何 DM 认为合适的行动。它可能离开，也可以攻击你或协助你。",
    "source": "PHB"
  },
  {
    "id": "spell.9.Imprisonment",
    "name": "禁锢术",
    "english_name": "Imprisonment",
    "level": 9,
    "school": "防护",
    "classes": [
      "邪术师",
      "法师"
    ],
    "castingTime": "1 分钟",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一张写有对目标详细描述的牛皮纸或者一个与目标相似的小雕像，以及对应所选择法术版本的特殊材料，其价值为对应目标每粒生命骰至少花费 500gp"
    },
    "duration": "直至被解除",
    "description": "你创造一个魔法监牢，将施法距离内一个你能看见的生物监禁于其内。目标必须进行一次感知豁免，豁免失败则被该法术禁锢；对于成功通过豁免的生物，若你再次对其施展该法术，则它对该法术免疫。被该法术禁锢时，目标生物不需要呼吸，不需要吃喝，也不会变老。预言法术也无法定位或感知到该目标。你在施展该法术时从下列选项中选择一种监牢的形式：\n埋葬Burial。目标被深埋在远离地表的球状魔法力场内，其大小刚好能包覆住目标。任何事物均无法穿过该力场，且任何生物均无法通过传送或位面旅行进出该力场。\n此版本法术需要的特殊材料为一个秘银小球。\n锁链Chaining。沉重的锁链牢固地深植于大地，将目标禁锢在原地。目标被束缚至法术终止，其间它不能移动或以任何方式被移动。\n此版本法术需要的特殊材料为一截精美的贵金属链。\n避世监牢Hedged Prison。 该法术将目标传送至一个隔绝了传送和位面旅行的小型半位面。该半位面可以是一个迷宫，一间牢房，一座塔楼，或是任意由你选择的幽闭建筑或区域。\n此版本法术需要的特殊材料为一个玉制的监牢微缩模型。\n微缩牢笼Minimus Containment。 目标被缩小到 1 寸高，并囚禁于一块宝石或是类似的物件里。光线可以正常地穿透宝石（这让目标可以看到外面，其他生物也可以看到里面），但其他任何事物均无法在其内进出，即使是通过传送或位面旅行等手段也不行。只要法术仍然生效，该宝石就无法被切开或打碎。\n该版本法术需要的特殊材料为一大块透明的宝石，例如刚玉，钻石或红宝石。\n沉睡Slumber。目标陷入昏睡且无法被唤醒。\n该版本法术需要的特殊材料为稀有的催眠药草。\n终止法术。无论是法术的哪个版本，你都可以在施法过程中设定一个使法术终止并释放目标的条件。此条件可以按你的意愿设定其明确或复杂的程度，但必须经由 DM 认可该条件的合理性及可实现性。此条件可以根据一个生物的名字，身份或神格来设定，但在其他方面必须基于可观察到的行为或特性，而不能基于诸如等级，职业或生命值这类无形之物。\n法术 解除魔法dispel magic 可以终止该法术，但只有使用九环法术位并针对监牢或针对创造监牢效果的特殊物质施展时才有效。\n你在同一时间内，使用同一种特殊材料只能创造一个监牢。如果你使用了同样的材料再次施展该法术，则先前被监禁的生物立刻从禁锢中解脱摆脱恢复自由。",
    "source": "PHB"
  },
  {
    "id": "spell.9.MassHeal",
    "name": "群体医疗术",
    "english_name": "Mass Heal",
    "level": 9,
    "school": "塑能",
    "classes": [
      "牧师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "泉涌般的治愈能量从你流向你周围受伤的生物。你为施法距离内任意数量你能看见的生物恢复总计至多 700 点生命值，而具体治疗量则由你随意分配。受该法术所治疗的生物其所有疾病以及导致它们目盲或耳聋的效应也一并被治愈。该法术对不死生物和构装生物无效。",
    "source": "PHB"
  },
  {
    "id": "spell.9.MeteorSwarm",
    "name": "流星爆",
    "english_name": "Meteor Swarm",
    "level": 9,
    "school": "塑能",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "1里",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "指定施法距离内四个你能看见的不同地点，并使熊熊燃烧的流星垂直坠落其地面。爆破的流星影响以指定点为中心，周边 40 尺半径的球状区域，区域影响会绕过拐角扩散。区域内的每个生物必须进行一次敏捷豁免。豁免失败者将受到 20d6 的火焰伤害和 20d6 的钝击伤害，豁免成功则伤害减半。另外，同时处于多个爆炸范围内的生物仍只受一次效应影响。\n该法术会对区域内的物件造成伤害，并点燃所有未被着装或携带的易燃物。",
    "source": "PHB"
  },
  {
    "id": "spell.9.PowerWordHeal",
    "name": "律令医疗",
    "english_name": "Power Word Heal",
    "level": 9,
    "school": "塑能",
    "classes": [
      "吟游诗人；TCE：牧师"
    ],
    "castingTime": "1 动作",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "立即",
    "description": "一波治疗能量覆盖你所触碰的生物，并使目标恢复其所有的生命值。如果该生物正处于魅惑，惊惧，麻痹或震慑状态，则终止相应状态。如果该生物正处于倒地状态，则他可以执行其反应站起。该法术无法对不死生物和构装生物生效。",
    "source": "PHB"
  },
  {
    "id": "spell.9.PowerWordKill",
    "name": "律令死亡",
    "english_name": "Power Word Kill",
    "level": 9,
    "school": "惑控",
    "classes": [
      "吟游诗人",
      "术士",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你读出一威力满溢的单词，其足以使施法距离内一个你能看见的生物立即死亡。如果你所指定的生物现有生命值不超过 100 点，则其立即死亡。否则该法术不产生任何效应。",
    "source": "PHB"
  },
  {
    "id": "spell.9.PrismaticWall",
    "name": "虹光法墙",
    "english_name": "Prismatic Wall",
    "level": 9,
    "school": "防护",
    "classes": [
      "法师；TCE：吟游诗人"
    ],
    "castingTime": "1 动作",
    "range": "60 尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "10 分钟",
    "description": "由光构成的闪光多彩平面形成一幅不透光的墙壁。墙壁垂直于地面，其至多长 90 尺，高 30 尺，厚 1 寸，并以施法距离内你能看见的一点为源点。你也可以将此墙塑造成一个直径至多 30 尺的球体，并以施法距离内你能看到的一点为中心。法墙在法术持续时间内维持在原地。如果定位法墙位置时可能使其穿过有生物占据的空间，则本次施法失败，而你的动作和法术位仍然会被浪费。\n法墙延伸出 100 尺的明亮光照外加 100 尺的微光光照。你和施放该法术时指定的生物可以穿过法墙或停留在法墙附近而不受伤害。如果其他能看见法墙的生物移动到距墙 20 尺内区域或在该处开始其回合，则该生物必须进行一次体质豁免，豁免失败则陷入 1 分钟的目盲状态。\n法墙由七层组成，每层都有不同颜色。生物试图进入或穿过法墙时，将一层层穿过法墙所有的光层。其每穿过一层就必须进行一次敏捷豁免，豁免失败则受下列光层特性影响。\n法墙可以被摧毁，不过也必须由红到紫的顺序一次一个光层的通过具体每层。某个光层一旦被摧毁则其在法术持续时间内保持被摧毁状态。反魔法场antimagic field 无法对法墙生效，法术 解除魔法dispel magic 只对紫墙有效。\n红Red。生物豁免失败时受到 10d6 的火焰伤害，豁免成功则伤害减半。此光层存在时，非魔法远程攻击无法穿过法墙。光层受至少 25 点冷冻伤害时被摧毁。\n橙Orange。生物豁免失败时受到 10d6 的强酸伤害，豁免成功则伤害减半。此光层存在时，魔法远程攻击不能穿过法墙。光层受强风吹袭后被摧毁。\n黄Yellow。生物豁免失败时受到 10d6 的闪电伤害，豁免成功则伤害减半。光层受至少 60 点力场伤害时被摧毁。\n绿Green。生物豁免失败时受到 10d6 的毒素伤害，豁免成功则伤害减半。光层在受法术穿墙术 passwall，或者其它相同或更高环阶法术在固态表面开口的效应影响时被摧毁。\n蓝Blue。生物豁免失败时受到 10d6 的冷冻伤害，豁免成功则伤害减半。光层受至少 25 点火焰伤害时被摧毁。\n靛Indigo。生物豁免失败时受束缚。其每回合结束时进行一次体质豁免。三次豁免成功后法术终止。三次豁免失败后目标将永久陷入石化状态。成功或失败的豁免不需要连续，只需记下两边的数量直至其中一种达到三次。     此光层存在时法术无法穿过。光层受昼明术 daylight，或者其他相同或更高环阶法术发出的明亮光线照射时被摧毁。\n紫Violet。生物豁免失败时陷入目盲。其必须在你下一回合开始时进行一次感知豁免。豁免成功则目盲状态终止。豁免失败则该生物被传送到另一个 DM 指定的位面并且不再目盲。（典型情况是不在家乡位面的生物被驱逐回家，而其他生物通常会被传送到星界或以太位面。）该光层在受法术 解除魔法dispel magic ，或者其他类似的相同或更高环阶法术所产生的终止法术魔法效应的影响时被摧毁。",
    "source": "PHB"
  },
  {
    "id": "spell.9.Shapechange",
    "name": "形体变化",
    "english_name": "Shapechange",
    "level": 9,
    "school": "变化",
    "classes": [
      "德鲁伊",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "至少价值 1500gp 的玉环，施法时将环戴在头上"
    },
    "duration": "专注，至多 1 小时",
    "description": "你在法术持续时间内变形为另一个生物。你的新形态可以是任何挑战等级小于等于你等级的生物。该类生物不能是构装生物或不死生物，而且你必须见过该类生物至少一次。你变形成该类生物中一个普通的个体，没有任何职业等级，也不具有施法特性。\n你的游戏资料以目标生物的数据代替，但你的阵营，以及智力、感知和魅力值不变。你同样保留你的所有技能和豁免的熟练项，并且还能获得目标生物的技能和豁免的熟练项。如果目标生物和你都具有某熟练项，且目标生物在这该项的熟练加值比你高，则你在该项检定时使用较高的熟练加值而非自己的原加值。你不能使用新形态的传奇动作和巢穴动作。\n你的生命值和生命骰变成和新形态一样。当你变回原形时，你的生命值恢复变形前的状态。如果你因为生命值降至 0 以下而变回原形，则你的正常形态将承受所有溢出的伤害。只要该伤害不足以把你在正常形态下的生命值也降至 0，你就不会因此陷入昏迷。\n你依然可以获得你的职业特性、种族特性和其他特性带来的增益，前提是你的新形态在物理上必须能够做到这些事。你不能使用任何之前享有的特殊感官（例如黑暗视觉），除非你的新形态也有这种感官。如果你变形成的生物通常不能说话，那么你也不能说话。\n变形时，你可以选择你的装备掉到地上、融入新的形态中还是继续着装。继续着装的装备依然拥有正常情况下的功能。DM 要根据新形态的外形和大小来判断你在新形态下是否能够继续着装你身上的每件装备。你的装备不会改变形状和尺寸以适应你的新形态，而新形态下不能着装的装备只能掉到地上或融入新的形态中。融入新形态的装备将不会产生任何效应。\n在法术持续时间内，你可以用你的动作转换为另一形态。重新变形的规则与限制与第一次变形相同，只有一点不同：如果新形态的生命值比你当前的形态要多，那么你的生命值将保持为当前值不变。",
    "source": "PHB"
  },
  {
    "id": "spell.9.StormofVengeance",
    "name": "复仇风暴",
    "english_name": "Storm of Vengeance",
    "level": 9,
    "school": "咒法",
    "classes": [
      "德鲁伊"
    ],
    "castingTime": "1 动作",
    "range": "视野",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "一团翻腾搅动的乌云并以你能看见的一点为中心一直扩散至半径 360 尺的区域，并使该区域内充斥着电闪雷鸣与狂风呼啸。所有位于云团下的生物（处于云团下方 5000 尺内）必须进行一次体质豁免。豁免失败者将受到 2d6 点雷鸣伤害，并陷入持续 5 分钟的耳聋状态。\n你每维持一轮该法术的专注，风暴就会在你的回合里产生不同的效应：\n第 2 轮。 云层中降下酸雨。所有位于云团下方的生物和物件受到1d6点强酸伤害。\n第 3 轮。 你从云中召下六束闪电击向你指定的六个位于云团下的生物或物件，其中任一生物或物件都只能被该闪电击中一次。遭电击的生物必须进行一次敏捷豁免，豁免失败者将受到 10d6 点闪电伤害，豁免成功则伤害减半。\n第 4 轮。 冰雹从云团中倾泻而下。所有位于云团下方的生物将受到 2d6 点钝击伤害。\n第 5~10 轮。 狂风和冰雨冲袭着云团下的区域，使该区域变为困难地形并造成重度遮蔽。该区域内的所有生物受到 1d6 点冷冻伤害。该区域内无法进行远程武器攻击。而其内的强风和暴雨将对维持法术专注造成严重干扰。此外，区域内的强风（风速在每小时 20 到 50 里）会自动吹散区域内的一切魔法或非魔法的烟雾以及其他类似现象。\n（注：该法术曾为产生“叠加的效应”）",
    "source": "PHB"
  },
  {
    "id": "spell.9.TimeStop",
    "name": "时间停止",
    "english_name": "Time Stop",
    "level": 9,
    "school": "变化",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "你使时间在除你之外所有生物的世界中暂时停止流动。你一次性进行 1d4+1 个回合，在这段过程内时间对于其他生物来说是静止的，但你可以像正常一样移动和使用动作。\n在法术持续时间内，如果你的一个动作或任何你创造出来的效应影响到除你之外的任何生物，或影响到其他生物着装或携带的物件时，该法术将立即终止。此外，如果你在施法后移动离开施法位置超过 1000 尺，则法术也将因此终止。",
    "source": "PHB"
  },
  {
    "id": "spell.9.TruePolymorph",
    "name": "完全变形术",
    "english_name": "True Polymorph",
    "level": 9,
    "school": "变化",
    "classes": [
      "吟游诗人",
      "邪术师",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "30 尺",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "一滴水银，一团阿拉伯胶以及一缕烟"
    },
    "duration": "专注，至多 1 小时",
    "description": "你指定施法距离内一个你能看见的生物或物件并使其变形。该法术无法对 0 生命值目标生效。你可以将目标生物变成另一个不同的生物，或将目标生物变成一个非魔法物件，又或者将目标物件变成一个生物（该物件必须没有被任何生物着装或携带）。变形效应持续到法术持续时间结束，或直至目标生命值降至 0 或目标死亡。如果你在法术持续时间内一直保持该法术的专注，则该变形将一直持续到被解除。\n该法术对变形生物以及生命值为 0 的目标无效。而不愿被变形的生物可以进行一次感知豁免，豁免成功则不受该法术影响。\n生物变生物。如果你将一个生物变形成另一种生物，则它的新形态可以是你选择的挑战等级等于或低于受术者挑战等级（如果受术者没有挑战等级则按其角色等级）的任意物种。受术者的游戏资料（包括各精神属性值）将被新形态的数据取代，而其阵营和性格则保持不变。\n目标将使用新形态的生命值。而当其变回通常形态时，该目标的生命值也恢复为变形前的数值。如果目标是因为生命值降至 0 而变回通常形态，则由通常形态承受溢出的伤害。只要溢出伤害不足以将通常形态生命值降至 0，他就不会因此而昏迷。\n该生物所能实施的行为因其新形态的特征而受限，除非其新形态的身体特征允许，否则该生物不能说话，施法或者执行任何需要手和言语的动作。\n目标的装备融入其新形态，而且不能激活或持用装备，也无法以其他任何方式从其装备上获益。\n物件变生物。你可以将一个物件变成任何一种符合下列要求的生物：生物的体积不能大于原物件，且生物的挑战等级必须低于等于 9。变形出的生物对你和你的同伴保持友善。而战斗中它将会在你的回合内，由你决定其如何行动。该生物的数据由 DM 掌控，并由 DM 来判定其行动结果如何。\n如果该法术变成永久有效，则你将不再控制该生物。此后，该生物将根据你对待他的方式决定是否对你保持友善。\n生物变物件。如果你将一个生物变形成一个物件，则它连同其穿着携带物一起变成新的形态。变成物件的体型不能比原生物大。受术者的数据变成和该物件一样，在法术终止而受术者变回原形后，它将不会记得在变成物件时所发生的任何事情。",
    "source": "PHB"
  },
  {
    "id": "spell.9.TrueResurrection",
    "name": "完全复生术",
    "english_name": "True Resurrection",
    "level": 9,
    "school": "死灵",
    "classes": [
      "牧师",
      "德鲁伊"
    ],
    "castingTime": "1 小时",
    "range": "触及",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": "少量圣水和至少价值 25000gp 的钻石，作为该法术的耗材"
    },
    "duration": "立即",
    "description": "你触碰一个已死的生物使其复活。该生物的死亡时间必须不超过 200 年，且死因不能是老死。如果该生物的灵魂愿意并且能够回到其身体中，则它将以生命值全满的状态复活。\n该法术能治愈所有致命伤，中和一切毒素与疾病，并解除其生前所受的一切诅咒。该法术甚至能恢复其损伤或失去的器官和肢体。若生物曾经是不死生物，则它恢复至其非不死生物形态。\n如果受术生物的遗体已经不再存在，该法术甚至能给它再造一个新的身体。此时，你必须喊出该生物的名字，随后该生物便出现在你指定点周围 10 尺内一处未被占据的空间。",
    "source": "PHB"
  },
  {
    "id": "spell.9.Weird",
    "name": "怪影杀手",
    "english_name": "Weird",
    "level": 9,
    "school": "幻术",
    "classes": [
      "法师；TCE：邪术师"
    ],
    "castingTime": "1 动作",
    "range": "120尺",
    "components": {
      "verbal": true,
      "somatic": true
    },
    "duration": "专注，至多 1 分钟",
    "description": "你利用一群生物最恐惧的事物，在它们的心中创造出一个只有它们自己能看见的虚幻生物。指定施法距离内一点为中心，其周边半径 30 尺球状区域内的所有生物必须进行一次感知豁免。豁免失败者将在法术终止前陷入恐慌。该法术造出的幻象能唤起受术者心中最深的恐惧，使它最恐怖的噩梦显现为一个永远无法摆脱的威胁。如果生物因该法术陷入恐慌，则它在自己每回合结束时必须进行一次感知豁免，豁免失败则受到 4d10 点心灵伤害。豁免成功则此法术在该生物身上的效应终止。",
    "source": "PHB"
  },
  {
    "id": "spell.9.Wish",
    "name": "祈愿术",
    "english_name": "Wish",
    "level": 9,
    "school": "咒法",
    "classes": [
      "术士",
      "法师"
    ],
    "castingTime": "1 动作",
    "range": "自身",
    "components": {
      "verbal": true,
      "somatic": false
    },
    "duration": "立即",
    "description": "祈愿术是凡间生物所能施展的最强大法术。你只需要大声说出自己的愿望就能将现实世界的根基操弄于手中。   此法术最基础的用法是用来模仿任意一个八环或更低环阶的法术。你不需要满足目标法术所需的任何前提条件（包括昂贵的材料成分）就可以让该法术生效。\n除此之外，你也可以选择创造下列效应其中之一：\n你创造出一个价值不超过 25000gp 的物件。该物件不能是魔法物品。该物件最长尺寸不能超过 300 尺，并随法术出现在地面上你能看见的一处未被占据位置。\n你让至多二十个你能看见的生物恢复其全部生命值，并且终止它们身上一切在 高等复原术greater restoration 中描述过的效应。\n你让至多十个你能看见的生物对你所指定的一种伤害类型具有抗性。\n你让最多十个你能看见的生物在八小时内免疫某种法术或其他魔法效应。例如，你可以使你自己和你的所有同伴免疫巫妖的 扰乱生命Disrupt Life 动作项。\n你改变一件刚刚发生的事件。重掷前一轮的任意一次掷骰（包括你前一回合进行的掷骰），并让现实随着你的新掷骰结果改变。例如，祈愿术可以撤销对手的成功豁免，敌人的重击或同伴的失败豁免。你可以迫使重新进行的掷骰具有优势或劣势，并且可以选择是使用重投后的结果还是使用原来的结果。\n上述范例效应之外，你也许还能达成其他某些结果。你可以详细的跟 DM 说明你的愿望，并由 DM 对其作出判定。不过你的愿望越大，出错的概率就越大。法术可能会直接失败，也可能部分的达成你想要的结果，你还有可能因表述愿望时措辞不当而遭到意想不到的结果。例如，许愿让一个坏人死去可能会让你穿越到多年后该人已死的一个时间段，使你相当于离开了游戏一样。此外，许愿获取一件传说中的魔法物品或神器可能会立即将你传送到该物品当前的持有者身边。\n除了模仿其他法术外，施展该法术以达成的任何其他目的都会使你的身躯承受极大的负担。直到你完成长休之前，你每次施展法术时都将受到一定伤害（伤害数值取决于你施展的法术的环阶，每环阶 1d10 的黯蚀伤害），此伤害无法被任何方式减免。此外，你的力量属性值将降至 3（除非它已经是 3 或更低），持续 2d4 日。这段时间内，你每花一整日休息（不从事任何费力的工作），恢复需要的日数就减少 2 日。最后，如果你承受了这种负担，你将有 33% 的概率永远也无法再次施放祈愿术。",
    "source": "PHB"
  }
];

export const spellsByClass: { [key: string]: Spell[] } = {
  "仪式；吟游诗人": spells.filter(spell => spell.classes.includes("仪式；吟游诗人")),
  "仪式；德鲁伊": spells.filter(spell => spell.classes.includes("仪式；德鲁伊")),
  "仪式；法师": spells.filter(spell => spell.classes.includes("仪式；法师")),
  "仪式；游侠": spells.filter(spell => spell.classes.includes("仪式；游侠")),
  "仪式；牧师": spells.filter(spell => spell.classes.includes("仪式；牧师")),
  "仪式；牧师；TCE：德鲁伊": spells.filter(spell => spell.classes.includes("仪式；牧师；TCE：德鲁伊")),
  "吟游诗人": spells.filter(spell => spell.classes.includes("吟游诗人")),
  "吟游诗人；TCE：牧师": spells.filter(spell => spell.classes.includes("吟游诗人；TCE：牧师")),
  "圣武士": spells.filter(spell => spell.classes.includes("圣武士")),
  "圣武士；TCE：吟游诗人": spells.filter(spell => spell.classes.includes("圣武士；TCE：吟游诗人")),
  "圣武士；TCE：游侠": spells.filter(spell => spell.classes.includes("圣武士；TCE：游侠")),
  "圣武士；TCE：牧师": spells.filter(spell => spell.classes.includes("圣武士；TCE：牧师")),
  "奇械师": spells.filter(spell => spell.classes.includes("奇械师")),
  "奇械师；TCE：吟游诗人": spells.filter(spell => spell.classes.includes("奇械师；TCE：吟游诗人")),
  "奇械师；TCE：德鲁伊": spells.filter(spell => spell.classes.includes("奇械师；TCE：德鲁伊")),
  "奇械师；TCE：术士": spells.filter(spell => spell.classes.includes("奇械师；TCE：术士")),
  "奇械师；TCE：游侠": spells.filter(spell => spell.classes.includes("奇械师；TCE：游侠")),
  "德鲁伊": spells.filter(spell => spell.classes.includes("德鲁伊")),
  "德鲁伊；TCE：吟游诗人": spells.filter(spell => spell.classes.includes("德鲁伊；TCE：吟游诗人")),
  "德鲁伊；TCE：术士": spells.filter(spell => spell.classes.includes("德鲁伊；TCE：术士")),
  "德鲁伊；TCE：游侠": spells.filter(spell => spell.classes.includes("德鲁伊；TCE：游侠")),
  "术士": spells.filter(spell => spell.classes.includes("术士")),
  "术士；TCE：游侠": spells.filter(spell => spell.classes.includes("术士；TCE：游侠")),
  "法师": spells.filter(spell => spell.classes.includes("法师")),
  "法师；TCE：吟游诗人": spells.filter(spell => spell.classes.includes("法师；TCE：吟游诗人")),
  "法师；TCE：圣武士": spells.filter(spell => spell.classes.includes("法师；TCE：圣武士")),
  "法师；TCE：德鲁伊": spells.filter(spell => spell.classes.includes("法师；TCE：德鲁伊")),
  "法师；TCE：术士": spells.filter(spell => spell.classes.includes("法师；TCE：术士")),
  "法师；TCE：游侠": spells.filter(spell => spell.classes.includes("法师；TCE：游侠")),
  "法师；TCE：牧师": spells.filter(spell => spell.classes.includes("法师；TCE：牧师")),
  "法师；TCE：邪术师": spells.filter(spell => spell.classes.includes("法师；TCE：邪术师")),
  "游侠": spells.filter(spell => spell.classes.includes("游侠")),
  "牧师": spells.filter(spell => spell.classes.includes("牧师")),
  "牧师；TCE：吟游诗人": spells.filter(spell => spell.classes.includes("牧师；TCE：吟游诗人")),
  "牧师；TCE：圣武士": spells.filter(spell => spell.classes.includes("牧师；TCE：圣武士")),
  "牧师；TCE：法师": spells.filter(spell => spell.classes.includes("牧师；TCE：法师")),
  "牧师；TCE：邪术师": spells.filter(spell => spell.classes.includes("牧师；TCE：邪术师")),
  "邪术师": spells.filter(spell => spell.classes.includes("邪术师")),
};

export const spellsByLevel: { [key: number]: Spell[] } = {
  0: spells.filter(spell => spell.level === 0),
  1: spells.filter(spell => spell.level === 1),
  2: spells.filter(spell => spell.level === 2),
  3: spells.filter(spell => spell.level === 3),
  4: spells.filter(spell => spell.level === 4),
  5: spells.filter(spell => spell.level === 5),
  6: spells.filter(spell => spell.level === 6),
  7: spells.filter(spell => spell.level === 7),
  8: spells.filter(spell => spell.level === 8),
  9: spells.filter(spell => spell.level === 9),
};
