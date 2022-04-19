/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "H) as the minimum of your protons and electrons.": "H）作为质子和电子的最小值。",
    "H) as the minimum of your protons, neutrons, and electrons.": "H) 作为质子、中子和电子的最小值。",
    "Have a neutron decay.": "有中子衰变。",
    "Have a reset for at least 1 Deuterium atom that lasts under 5 seconds.": "重置至少 1 个持续时间低于 5 秒的氘原子。",
    "Have a reset for at least 1 Hydrogen atom that lasts under 4 seconds.": "重置至少 1 个持续时间低于 4 秒的氢原子。",
    "Have a total of at least 10 achievements.": "总共拥有至少 10 项成就。",
    "Have a total of at least 10 million energy on hand.": "手头总共至少有 1000 万能量。",
    "Have a total of at least 25 achievements.": "总共拥有至少 25 项成就。",
    "Have a total of at least 294 amu worth of atoms.": "总共有至少 294 amu 的原子。",
    "Have a total of at least 50 million energy on hand without any neutrinos.": "在没有任何中微子的情况下，手头总共有至少 5000 万能量。",
    "Have a total of at least 500 million energy on hand without any neutrinos or neutrons on hand.": "在手头没有任何中微子或中子的情况下，总共拥有至少 5 亿能量。",
    "Have at least 10 neutrinos.": "至少有 10 个中微子。",
    "Have at least 10 protons and at least 10 electrons at the same time.": "同时拥有至少 10 个质子和至少 10 个电子。",
    "Have at least 118 protons and 118 electrons at the same time.": "同时拥有至少 118 个质子和 118 个电子。",
    "Have at least 18 protons and at least 18 electrons at the same time.": "同时拥有至少 18 个质子和至少 18 个电子。",
    "Have at least 26 protons and at least 26 electrons at the same time.": "同时拥有至少 26 个质子和至少 26 个电子。",
    "Have at least 30 electrons but no ": "至少有 30 个电子，但没有",
    "Have at least 30 protons but no electrons.": "至少有 30 个质子，但没有电子。",
    "Have at least 36 protons and at least 36 electrons at the same time.": "同时拥有至少 36 个质子和至少 36 个电子。",
    "Have at least 4 neutrons but no neutrinos.": "至少有 4 个中子，但没有中微子。",
    "Have at least 47 protons and at least 47 electrons at the same time.": "同时拥有至少 47 个质子和至少 47 个电子。",
    "Have at least 5 neutrons but no protons and no electrons.": "至少有 5 个中子，但没有质子和电子。",
    "Have at least 54 protons and at least 54 electrons at the same time.": "同时拥有至少 54 个质子和至少 54 个电子。",
    "Have at least 6 neutrons.": "至少有 6 个中子。",
    "Have at least 6 protons and at least 6 electrons at the same time.": "同时拥有至少 6 个质子和至少 6 个电子。",
    "Have the mass of all your stuff exceed 1200 amu.": "让你所有的东西的质量超过 1200 amu。",
    "Have the sum of your protons, neutrons, electrons, and neutrinos be at least 100.": "让你的质子、中子、电子和中微子的总和至少为 100。",
    "Heavier than a hundred Carbons": "重于一百个碳",
    "here": "这里",
    "Historic run": "历史运行",
    "homepage": "主页",
    "Ideas: SuperSpruce": "创意：SuperSpruce",
    "Idle run": "放置运行",
    "If it always took 20 energy to make a proton from nothing, this amount would be equal to": "如果从无到有制造一个质子总是需要 20 能量，那么这个量将等于",
    "If you are seeing this, then the game is bugged": "如果你看到这个，那么游戏就被窃听了",
    "If you can read this, the game is bugged": "如果你能读到这个，游戏出Bug了",
    "Increase energy gained from neutron decay to 50% of its original cost.": "将从中子衰变中获得的能量增加到其原始成本的 50%。",
    "Is this a trillion electron-volts?": "这是一万亿电子伏特吗？",
    "Kinetic energy of a toy car": "玩具车的动能",
    "lol Deuterium, and": "lol 氘，和",
    "Decrease the cost scaling of neutrons by 2%.": "将中子的成本缩放降低 2%。",
    "Decrease the cost scaling of protons by 1%.": "将质子的成本缩放降低 1%。",
    "Deuterium effect exponent: +": "氘效应指数：+",
    "Deuterium,": "氘，",
    "Deuterium, and": "氘，和",
    "Deuterium.": "氘。",
    "Double the speed of protons": "质子速度翻倍",
    "Each completed achievement row increased the bonus per completed achievement by +1%.": "每个完成的成就行使每个完成的成就的奖金增加 +1%。",
    "Electrons": "电子",
    "energy across all resets.": "所有重置的能量。",
    "Energy hoarder": "能量囤积者",
    "energy per click.": " 能量每次点击。",
    "energy per second.": " 能量每秒。",
    "energy to make a neutrino.": " 能量制造中微子。",
    "energy to make a proton.": " 能量制造质子",
    "energy to make an electron.": " 能量制造电子。",
    "energy with a half-life of": "能量半衰期为",
    "energy, 1 proton, 1 electron, and 1 neutrino to make a neutron.": "能量、1 个质子、1 个电子和 1 个中微子来制造一个中子。",
    "energy.": "能量。",
    "energy/s.": "能量/秒",
    "Enough for Carbon-12": "足够碳 12",
    "Export save": "导出保存",
    "Fast Deuterium": "快氘",
    "Fast Hydrogen": "快速氢气",
    "Game: SuperSpruce": "游戏：SuperSpruce",
    "Graphics: SuperSpruce": "图形：SuperSpruce",
    "Subatomic Particles": "亚原子粒子",
    "SuperSpruce's": "SuperSpruce的",
    "That's a lot of particles": "那是很多颗粒",
    "That's more than Oganesson!": "这不仅仅是奥加内森！",
    "The Antimatter Dimensions Reality Update just got leaked!!! Play it": "反物质维度现实更新刚刚泄露！！！玩",
    "The first Joule's always the hardest": "第一焦耳总是最难的",
    "The minimum number required to display notation as scientific is 1e": "将符号显示为科学所需的最小数字是 1e",
    "The Unscaled Incremental": "未缩放的增量",
    "They add": "它们增加 ",
    "They are boosting the production of energy from all sources by": "他们正在通过以下方式促进所有来源的能源生产",
    "They are currently boosting your energy production by": "他们目前正在通过以下方式提高您的能量生产",
    "They are producing": "他们生产",
    "They boost your total energy production by 1+(Deuterium+1)^": "它们将您的总能量产量提高 1+(氘+1)^",
    "They boost your total energy production by 1+(Protium+1)^": "它们将您的总能量产量提高 1+(氚+1)^",
    "They decay into": "它们衰变成",
    "This means you can do anything you want with the software as long as you credit me for the original and state that you made a change to this software.": "这意味着您可以使用该软件做任何您想做的事情，只要您将原件归功于我并声明您对该软件进行了更改。",
    "to your energy per click.": " 能量每次点击。",
    "Triple the effectiveness of electrons": "三倍电子的有效性",
    "Typical tetra-power of 10": "10 的典型四次方",
    "Unlock neutrinos": "解锁中微子",
    "Unlock neutrons": "解锁中子",
    "Upgrades": "升级",
    "Upon decay, there is a": "衰变后，有一个",
    ", lol Deuterium": ", lol 氘",
    ", XD energy.": "，XD能量。",
    "% boost to energy gain from all sources per achievement; this boost stacks multiplicatively.": "每个成就从所有来源获得的能量增加百分比；这种提升成倍增加。",
    "% chance to make a neutrino.": "% 几率制造一个中微子。",
    "% chance to make a proton, a": "% 几率产生一个质子，一个",
    "% chance to make an electron, and a": "% 的几率产生一个电子，一个",
    "25 Deuterium, and": "25氘，和",
    "A microjoule?": "微焦耳？",
    "A question mark move": "问号移动",
    "Active run": "主动运行",
    "Add 10% to the multiplicative bonus when your electron amount reaches the end of a row of the periodic table.": "当你的电子数量达到元素周期表一行的末尾时，乘法奖励增加 10%。",
    "Add 10% to the multiplicative bonus when your proton amount reaches the end of a row of the periodic table.": "当您的质子数量达到元素周期表一行的末尾时，乘法奖励增加 10%。",
    "What do we call this?": "我们怎么称呼它？",
    "What just happened?!": "刚刚发生了什么？！",
    "will be displayed using": "将使用显示",
    "would be": "将会",
    "x boost to the electron effect at": "x 提高电子效应",
    "x boost to the proton effect at": "x 提高质子效应",
    "x boost to your energy production from all Hydrogen atoms.": "x 提高所有氢原子的能量生产。",
    "x cheaper.": "x便宜。",
    "x multiplier to energy gain from all sources.": "x 乘以所有来源的能量增益。",
    "XD  energy.": "XD能量。",
    "You are getting a": "你得到一个",
    "You get": "你得到",
    "You get a": "你得到一个",
    "You have made a total of": "你总共做了",
    "You will get as much Deuterium (": "你会得到尽可能多的氘（",
    "You will get as much Protium (": "您将获得尽可能多的 氚 (",
    "Your achievements are giving you a": "你的成就给了你一个",
    "YouTube channel": "YouTube 频道",
    "Make a neutrino!": "制造一个中微子！",
    "Make a neutron!": "制造一个中子！",
    "Make a proton!": "做一个质子！",
    "Make an electron!": "做一个电子！",
    "Make as many electrons as you can make with your energy!": "用你的能量制造尽可能多的电子！",
    "Make as many neutrinos as you can make with your energy!": "用你的能量制造尽可能多的中微子！",
    "Make as many neutrons as you can make!": "制造尽可能多的中子！",
    "Make as many protons as you can make with your energy!": "用你的能量制造尽可能多的质子！",
    "Make at least 40 subatomic particles in a single purchase.": "一次购买至少制造 40 个亚原子粒子。",
    "Make some Deuterium in exchange for your subatomic particles!": "制造一些氘来换取你的亚原子粒子！",
    "Make some Protium in exchange for your subatomic particles!": "制作一些 氚 来换取你的亚原子粒子！",
    "Manual save": "手动保存",
    "Millionaire": "百万富翁",
    "More SuperSpruce stuff": "更多SuperSpruce的东西",
    "Neutrino rookie": "中微子菜鸟",
    "neutrinos.": "中微子。",
    "neutrons.": "中子。",
    "Next": "下一个",
    "Note: This software is licensed under the": "注意：本软件根据",
    "Now we're talking": "现在我们正在谈论",
    "Numbers equal to or greater than 1e": "等于或大于 1e 的数字",
    "Options": "选项",
    "Phone on standby": "手机待机",
    "Protium and Deuterium boost each other.": "氚和氘相互促进。",
    "Protium effect exponent: +": "氕效应指数：+",
    "Protium,": "氡，",
    "Protium.": "氡。",
    "Protons": "质子",
    "Protons and Electrons make each other cheaper. (Divides cost by 2^other^(1/2)": "质子和电子使彼此更便宜。 （将成本除以 2^其它^(1/2)",
    "Pseudo-Argon": "伪氩",
    "Pseudo-Carbon": "拟碳",
    "Pseudo-Iron": "伪铁",
    "Pseudo-Krypton": "伪氪",
    "Pseudo-Neon": "伪霓虹灯",
    "Pseudo-Oganesson": "伪Oganesson",
    "Pseudo-Silver": "伪银",
    "Pseudo-Xenon": "伪氙气",
    "significant figures.": "重要数字。",
    "significant figures.  ": "重要数字。",
    "Spend": "花费",
    "Level": "等级",
    "Misc.": "杂项",
    "\t\t        Hard Reset (NOTICE: When clicking this button, there will be a confirmation.)": "\t\t 硬重置（注意：单击此按钮时，将出现确认。）",
    "\n    Reset your progress in exchange for some Hydrogen Atoms.": "\n 重置你的进度以换取一些氢原子。",
    "Atoms": "原子",
    "Billionaire": "亿万富翁",
    "Bonus!": "奖励!",
    "Bonus! 2": "奖励! 2",
    "Bulked up": "膨胀",
    "Buy max": "购买最大",
    "Create a total of 1.331e11 energy.": "共创造 1.331e11 能量。",
    "Create a total of 1e10 = 10^^2 energy.": "总共创造 1e10 = 10^^2 能量。",
    "Create a total of at least 1 billion energy.": "创造至少10亿的能量。",
    "Create a total of at least 1 million energy.": "总共创造至少100万能量。",
    "Create a total of at least 133,100 energy.": "总共创造至少 133,100 能量。",
    "Create a total of at least 200 million energy.": "共创造至少2亿能量。",
    "Create a total of at least 21,300 energy.": "总共创造至少 21,300 能量。",
    "Create at least 20,000 energy in the span of one second.": "在一秒钟内创造至少 20,000 能量。",
    "Create at least 2e10 energy in the span of one second.": "在一秒钟内创造至少 2e10 能量。",
    "Credits": "鸣谢",
    "Decrease the cost scaling of electrons by 1%.": "将电子的成本缩放降低 1%。",
    "Decrease the cost scaling of neutrinos by 2%.": "将中微子的成本缩放降低 2%。",
    "electrons.  ": "电子。",
    "Classic run": "经典运行",
    "Click for energy": "点击获取能量",
    "Clover Clicker": "三叶草点击器",
    "Joules.": "焦耳。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "electrons.": "电子。",
    "protons.": "质子。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "protons.": "质子。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\-([\d\.,]+)$/,
    /^([\d\.]+)e \-([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.]+)e([\d\.,]+) energy.$/, '$1e$2 能量。'],
    [/^([\d\.]+)e([\d\.,]+) anti$/, '$1e$2 反'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) anti$/, '$1 反'],
    [/^Buy ([\d\.,]+)$/, '购买 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: (.+) Protium$/, '成本：$1 氚'],
    [/^Cost: (.+) Protium,$/, '成本：$1 氚,'],
    [/^Cost: (.+) Protium, (.+) Deuterium.$/, '成本：$1 氚, $2 氘.'],
    [/^Cost: (.+) Protium, (.+) Deuterium, (.+) energy.$/, '成本：$1 氚, $2 氘, $1 能量.'],
    [/^Cost: (.+) Protium.$/, '成本：$1 氚。'],
    [/^Cost: (.+) energy$/, '成本：$1 能量'],
    [/^Cost: (.+) energy,$/, '成本：$1 能量,'],
    [/^Cost: (.+) energy.$/, '成本：$1 能量。'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);