var numberOfBalloons = 50;
module.exports = {
name : "Theme Park",
description : "Fun at the fair",
order : 1,
maxScore : 13 * numberOfBalloons,
config : {
	scoringAndWinning: {
		message: "Well, that was easy...",
		nextLevel: "level2",
		timerCount: 90,
		conditions: [
			{
				component: "manager",
				properties: null
			}
		]
	}
	,
	skybox: {
		sky: "skyboxsun25degtest"
	}
},
objects : {
	treeField : {
		object: require("../managers/TreeField"),
		properties: {
			count : 200
		}
	},
	manager : {
		object: require("../managers/Manager"),
		properties: {
			entityType: require('../entities/Balloons'),
			count: numberOfBalloons
		}
	},
	rollercoastergenerator: {
		object: require("../components/RollerCoasterGenerator"),
		properties: {
			color1: 0x0084ff,
			color2: 0x00ff04,
			rollerSpeed: 0.00001,
			minRollerSpeed: 0.00008,
			varA: 3,
			varB: 17,
			varC: 4,
			scalar: 20,
			curve: "curve1"
		}
	},
	funfairs: {
		object: require("../components/Funfairs"),
		properties: {}
	},
	music : {
		object: require("../sound/Music"),
		properties: {
			url: "https://soundcloud.com/bns-1/kid-cudi-cudderisback",
			startTime: 0,
			volume: 1
		}
	}
}
};
