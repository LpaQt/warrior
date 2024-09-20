module.exports = [
    {
        "key": "comEnable",
        "name": "Модуль включен",
        "type": "bool"
    },		
    {
        "key": "bd_key",
        "name": "Клавиша Рваной Раны <img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'>",
        "type": "string",
		"minlength": 1,
		"maxlength": 99,
		"size": 1
    },
    {
        "key": "blows_key",
        "name": "Клавиша Града Ударов <img width='24' height='24' valign='middle' src='https://i.imgur.com/rjiaCJS.png'>",
        "type": "string",
		"minlength": 1,
		"maxlength": 99,
		"size": 1
    },
    {
        "key": "aerial_key", 
        "name": "Клавиша Режущего удара <img width='24' height='24' valign='middle' src='https://i.imgur.com/mahRvC7.png'>",
        "type": "string",
		"minlength": 1,
		"maxlength": 99,
		"size": 1
    },
    {
        "key": "fury_key",
        "name": "Клавиша Нарастающей Ярости <img width='24' height='24' valign='middle' src='https://i.imgur.com/mc2Prt7.png'>",
        "type": "string",
		"minlength": 1,
		"maxlength": 99,
		"size": 1
    },	
    {
        "key": "dodge_key", 
        "name": "Клавиша умения Уклонение <img width='24' height='24' valign='middle' src='https://i.imgur.com/xYVH8dr.png'>",
        "type": "string",
		"minlength": 1,
		"maxlength": 99,
		"size": 4
    },		
    {
        "key": "block_key", 
        "name": "Клавиша умения Скрещенные Мечи <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "string",
		"minlength": 1,
		"maxlength": 99,
		"size": 4
    },	
    {
        "key": "dfa_key", 
        "name": "Клавиша умения Смерть с небес <img width='24' height='24' valign='middle' src='https://i.imgur.com/POwvyuM.png'>",
        "type": "string",
		"minlength": 1,
		"maxlength": 99,
		"size": 4
    },	
    {
        "key": "traverse_key", 
        "name": "Клавиша умения Прорезающий выпад <img width='24' height='24' valign='middle' src='https://i.imgur.com/bF1TtwM.png'>",
        "type": "string",
		"minlength": 1,
		"maxlength": 99,
		"size": 4
    },	
    {
        "key": "stop_macros_on_block",
        "name": "Нажатие клавиш <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'> или <img width='24' height='24' valign='middle' src='https://i.imgur.com/xYVH8dr.png'> останавливает все макросы",
        "type": "bool"
    },	
    {
        "key": "edgeui",
        "name": "Дополнительный интерфейс приемущества воина <img width='24' height='24' valign='middle' src='https://i.imgur.com/45leWbe.png'>",
        "type": "bool"
    },
    {
        "key": "gumble_brooch", 
        "name": "Авто-использование <img width='24' height='24' valign='middle' src='https://i.imgur.com/IZDW96M.png'> во время каста <img width='24' height='24' valign='middle' src='https://i.imgur.com/GALh2Z6.png'> Смертельной Игры",
        "type": "bool"
    },
    {
        "key": "gumble_rootbeer",
        "name": "Авто-использование <img width='24' height='24' valign='middle' src='https://i.imgur.com/zv0mADu.png'> во время каста <img width='24' height='24' valign='middle' src='https://i.imgur.com/GALh2Z6.png'> Смертельной Игры",
        "type": "bool"
    },	
	
	
    {
        "key": "",
        "name": "",
        "type": "bool"
    },	
    {
        "key": "prevent_unchained",
        "name": "Блокировать умения при касте без связки: ⛓️",
        "type": "bool"
    },	
	
    {
        "key": "scythe_prevent_unchained",
        "name": "Блокировать каст без связки <img width='24' height='24' valign='middle' src='https://i.imgur.com/dxQokJm.png'>",
        "type": "bool"
    }, 
    {
        "key": "scythe_precast_filler",
        "name": "Автоматический каст филлера для связки <img width='24' height='24' valign='middle' src='https://i.imgur.com/dxQokJm.png'> <br>Приоритет филлеров: <img width='24' height='24' valign='middle' src='https://i.imgur.com/xYVH8dr.png'> > <img width='24' height='24' valign='middle' src='https://i.imgur.com/G7ytBql.png'> > <img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'>",
        "type": "bool"
    },	
    {
        "key": "bd_prevent_unchained",
        "name": "Блокировать каст без связки <img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'>",
        "type": "bool"
    },
    {
        "key": "bd_precast_filler",
        "name": "Автоматический каст филлера для связки <img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'> <br>Приоритет филлеров: <img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> > <img width='24' height='24' valign='middle' src='https://i.imgur.com/uffSIJ7.png'>",
        "type": "bool"
    },	
    {
        "key": "blows_prevent_unchained",
        "name": "Блокировать каст без связки <img width='24' height='24' valign='middle' src='https://i.imgur.com/rjiaCJS.png'>",
        "type": "bool"
    },
    {
        "key": "blows_precast_filler",
        "name": "Автоматический каст филлера для связки <img width='24' height='24' valign='middle' src='https://i.imgur.com/rjiaCJS.png'> <br>Приоритет филлеров: <img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> > <img width='24' height='24' valign='middle' src='https://i.imgur.com/cJEoDN0.png'>",
        "type": "bool"
    },	
    {
        "key": "traverse_prevent_unchained",
        "name": "Блокировать каст без связки <img width='24' height='24' valign='middle' src='https://i.imgur.com/bF1TtwM.png'>",
        "type": "bool"
    },	
    {
        "key": "traverse_precast_filler",
        "name": "Автоматический каст филлера для связки <img width='24' height='24' valign='middle' src='https://i.imgur.com/bF1TtwM.png'> <br>Приоритет филлеров: <img width='24' height='24' valign='middle' src='https://i.imgur.com/G7ytBql.png'> > <img width='24' height='24' valign='middle' src='https://i.imgur.com/cJEoDN0.png'> > <img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'>",
        "type": "bool"
    },		
    {
        "key": "bladeFrenzy_prevent_unchained",
        "name": "Блокировать каст без связки <img width='24' height='24' valign='middle' src='https://i.imgur.com/bs1lv9x.png'>",
        "type": "bool"
    },	
    {
        "key": "bladeFrenzy_precast_filler",
        "name": "Автоматический каст филлера для связки <img width='24' height='24' valign='middle' src='https://i.imgur.com/bs1lv9x.png'> <br>Приоритет филлеров: <img width='24' height='24' valign='middle' src='https://i.imgur.com/xYVH8dr.png'>",
        "type": "bool"
    },
	
	

    {
        "key": "",
        "name": "",
        "type": "bool"
    },
    {
        "key": "macros",
        "name": "Макросы включены: 🤖",
        "type": "bool"
    },
    {
        "key": "auto_aerial",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/mahRvC7.png'> авто 2ой <img width='24' height='24' valign='middle' src='https://i.imgur.com/mahRvC7.png'>",
        "type": "bool"
    },
    {
        "key": "aerial_8edge",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/mahRvC7.png'> авто 2ой <img width='24' height='24' valign='middle' src='https://i.imgur.com/mahRvC7.png'> задержка с 9 или меньше стаками",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
    {
        "key": "aerial_10edge",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/mahRvC7.png'> авто 2ой <img width='24' height='24' valign='middle' src='https://i.imgur.com/mahRvC7.png'> задержка с 10 стаками",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
    {
        "key": "auto_fury",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/mc2Prt7.png'> авто 2ой <img width='24' height='24' valign='middle' src='https://i.imgur.com/mc2Prt7.png'>",
        "type": "bool"
    },
    {
        "key": "auto_fury_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/mc2Prt7.png'> авто 2ой <img width='24' height='24' valign='middle' src='https://i.imgur.com/mc2Prt7.png'> задержка",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
    {
        "key": "fury_auto_bd",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/mc2Prt7.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'>",
        "type": "bool"
    },
    {
        "key": "fury_auto_bd_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/mc2Prt7.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'> задержка",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },	
    {
        "key": "vortex_auto_bd",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/uffSIJ7.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'>",
        "type": "bool"
    },
    {
        "key": "vortex_auto_bd_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/uffSIJ7.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'> задержка",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
	
    {
        "key": "waltz_auto_bd",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'>",
        "type": "bool"
    },
    {
        "key": "waltz_auto_bd_gamble",
        "name": "( <img width='24' height='24' valign='middle' src='https://i.imgur.com/GALh2Z6.png'> ) <img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'>",
        "type": "bool"
    },	
    {
        "key": "waltz_auto_bd_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'> задержка",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
    {
        "key": "waltz_auto_blows",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/rjiaCJS.png'>",
        "type": "bool"
    },
    {
        "key": "waltz_auto_blows_gamble",
        "name": "( <img width='24' height='24' valign='middle' src='https://i.imgur.com/GALh2Z6.png'> ) <img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/rjiaCJS.png'> ",
        "type": "bool"
    },	
    {
        "key": "waltz_auto_blows_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/rjiaCJS.png'> задержка",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
	
    {
        "key": "clean_waltz",
        "name": "Кастовать <img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> Танец без макросов вместо <img width='24' height='24' valign='middle' src='https://i.imgur.com/FtGAYh7.png'>",
        "type": "bool"
    },	
    {
        "key": "stop_waltz_macros_without_trav_effect",
        "name": "Отключить макросы <img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> Танца если нет эффекта <img width='24' height='24' valign='middle' src='https://i.imgur.com/bF1TtwM.png'>",
        "type": "bool"
    },	
    {
        "key": "stop_waltz_macros_after_leap",
        "name": "Отключить макросы <img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> Танца на 1.5 секунды после каста <img width='24' height='24' valign='middle' src='https://i.imgur.com/4r91igx.png'>",
        "type": "bool"
    },	
    {
        "key": "waltz_aerial_stop_no_combat",
        "name": "Отключить макросы <img width='24' height='24' valign='middle' src='https://i.imgur.com/ve4pu2H.png'> Танца и <img width='24' height='24' valign='middle' src='https://i.imgur.com/mahRvC7.png'> Ружущего вне боя", 
        "type": "bool"
    },	





    {
        "key": "",
        "name": "",
        "type": "bool"
    },
    {
        "key": "cancels",
        "name": "Прерывания включены: <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "aerial_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/mahRvC7.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "aerial_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/mahRvC7.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
    {
        "key": "BladeFrenzy_auto_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/bs1lv9x.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "bf_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/bs1lv9x.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
    {
        "key": "bf_notchained_delay",
        "name": "(not chained) <img width='24' height='24' valign='middle' src='https://i.imgur.com/bs1lv9x.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },	
	
    {
        "key": "scythe_cancel", 
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/dxQokJm.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "scythe_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/dxQokJm.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
    {
        "key": "scythe_notchained_delay",
        "name": "(not chained) <img width='24' height='24' valign='middle' src='https://i.imgur.com/dxQokJm.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },	
	
    {
        "key": "bladedraw_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "bd_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
    {
        "key": "bd_notchained_delay",
        "name": "(not chained) <img width='24' height='24' valign='middle' src='https://i.imgur.com/EDPayiO.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
	
    {
        "key": "rainofblows_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/rjiaCJS.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "blows_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/rjiaCJS.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
    {
        "key": "blows_notchained_delay",
        "name": "(not chained) <img width='24' height='24' valign='middle' src='https://i.imgur.com/rjiaCJS.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
	
	
    {
        "key": "reaping_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/BToDMpQ.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "reaping_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/BToDMpQ.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
    {
        "key": "reaping_unchained_delay",
        "name": "(без связки) <img width='24' height='24' valign='middle' src='https://i.imgur.com/BToDMpQ.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },	
    {
        "key": "poison_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/G7ytBql.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "poison_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/G7ytBql.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
	
    {
        "key": "combat_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/cJEoDN0.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "combat_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/cJEoDN0.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
	
    {
        "key": "vortex_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/uffSIJ7.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "vortex_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/uffSIJ7.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
	
    {
        "key": "shout_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/75yHUq2.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "shout_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/75yHUq2.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
	
    {
        "key": "enrage_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/Ksct0hc.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "enrage_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/Ksct0hc.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
	
    {
        "key": "tob_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/bI9Kd7F.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "tob_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/bI9Kd7F.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },					
    {
        "key": "risingfury2_cancel",
        "name": "2-ая <img width='24' height='24' valign='middle' src='https://i.imgur.com/mc2Prt7.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "risingfury2_delay",
        "name": "2-ая <img width='24' height='24' valign='middle' src='https://i.imgur.com/mc2Prt7.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },
    {
        "key": "charging_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/nKNfUP5.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "charging_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/nKNfUP5.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },	
    {
        "key": "traverse_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/bF1TtwM.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "traverse_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/bF1TtwM.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },	
    {
        "key": "traverse_unchained_delay",
        "name": "(без связки) <img width='24' height='24' valign='middle' src='https://i.imgur.com/bF1TtwM.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },		
    {
        "key": "backstab_cancel",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/5vyWXAQ.png'> авто <img width='24' height='24' valign='middle' src='https://i.imgur.com/oWbjngd.png'>",
        "type": "bool"
    },	
    {
        "key": "backstab_delay",
        "name": "<img width='24' height='24' valign='middle' src='https://i.imgur.com/5vyWXAQ.png'> задержка прерывания",
        "type": "number",
        "min": 1,
        "max": 9999999,
        "step": 1
    },	

    {
        "key": "greeting",
        "name": "Включить уведомления",
        "type": "bool"
    },
    {
        "key": "debug_stages",
        "name": "Log stages",
        "type": "bool"
    },	
    {
        "key": "debug",
        "name": "Режим отладки",
        "type": "bool"
    }
]