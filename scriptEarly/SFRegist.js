simpleFrameworks.addto('iModOptions', 'terraOptions');

simpleFrameworks.addto('iModStatist', 'terraStatistics');

simpleFrameworks.addto('ModSkillsBox', 'fishingskill');

simpleFrameworks.addto('iModHeader', 
	{
		widget: 'terraFallenStar',
		exclude: ['Start', 'Start2']
	},
	{
		widget: 'vanityAccessoryTransformation',
		exclude: ['Start', 'Start2']
	},
	{
		widget: 'terraAlarmClock',
		exclude: ['Start', 'Start2']
	}
);

simpleFrameworks.addto('iModFooter', 
	{
		passage: ['Sewers Webs', 'Sewers Wood','Sewers Residential','Sewers Scrap','Sewers Workshop','Sewers Chute','Sewers Shrooms','Sewers Mud','Sewers Commercial','Sewers Ruins','Sewers Hole','Sewers Rubble','Sewers Industrial','Sewers Algae','Sewers Waterfall','Sewers Lake'],
		widget: 'GPSOldSewerMap',
	},
	{
		widget: 'terra_temperature',
		exclude: ['Start', 'Start2']
	}
);