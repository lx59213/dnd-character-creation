import { RaceData } from '../types/race';

// 自定义种族数据
export const customRace: RaceData = {
  name: 'custom',
  displayName: '自定义种族',
  description: '创建您自己的自定义种族。',
  size: 'Medium',
  speed: 30,
  abilityScoreIncrease: {},
  racialTraits: [
    {
      name: '自定义特性',
      description: '您可以在自定义内容中描述您的种族特性。',
      mechanicalEffect: '无特殊游戏效果，由玩家自行定义'
    }
  ],
  languages: [],
  subraces: [
    {
      name: 'custom_subrace',
      displayName: '自定义亚种',
      description: '创建您自己的自定义亚种。',
      abilityScoreIncrease: {},
      traits: [
        {
          name: '自定义亚种特性',
          description: '您可以在自定义内容中描述您的亚种特性。',
          mechanicalEffect: '无特殊游戏效果，由玩家自行定义'
        }
      ]
    }
  ]
};
