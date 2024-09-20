// Parameters info:
	// id - First skill ID numbers
	// subID - Last skill ID nubmers (00 - normal, 10 - target, 30 - buffed)
	// AddSpeed - Add bonus attack AddSpeed (scales in %)
	// LockDelay - Lock a skill for set LockDelay to prevent early cancels (scales in milliseconds) and send S_ACTION_END after LockDelay ends
	// AnimCancel - If set to false, module will NOT send S_ACTION_END after LockDelay ends
	// fixedDelay - If set to true, LockDelay parameter will ignore attack AddSpeed value
	// IgnoreLocks - If set to true, current skill will ignore LockDelay's lock
	// HasAbn - Do { ... } only if effect is active
	// NoAbn - Do { ... } only if effect isn't active

module.exports.warrior = [
	{ "id": 30, "AddSpeed": 5, "noAbn": 100801 }, 	// Scythe 
	{ "id": 30, "AddSpeed": 3, "hasAbn": 100801 }, // Scythe (Gamble)
	{ "id": 2, "IgnoreLocks": true }, 				// Evasive Roll 
	{ "id": 3, "AddSpeed": 50 },					// Torrent of Blows
	{ "id": 10, "AddSpeed": 5 }, 					// Death From Above
	{ "id": 11, "AddSpeed": 5 }, 					// Poison Blade 
	{ "id": 12, "AddSpeed": 10 }, 					// Leaping Strike 
	{ "id": 18, "AddSpeed": 7 }, 					// Combative Strike 
	{ "id": 19, "subid": 0, "AddSpeed": 50 }, 		// Rising Fury 1
	{ "id": 19, "subid": 1, "AddSpeed": 10 }, 		// Rising Fury 2
	{ "id": 20, "AddSpeed": 40 }, 					// Deadly Gamble 
	{ "id": 40, "AddSpeed": 5 } 					// Blade Waltz 
];
