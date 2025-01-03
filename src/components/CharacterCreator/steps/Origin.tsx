import React from 'react';
import {
    Box,
    Grid,
    TextField,
    Typography,
    Paper,
    Divider,
    Tooltip,
    IconButton,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useCharacterContext } from '../context';
import { CharacterOrigin } from '../../../types/character';

interface FieldConfig {
    name: string;
    label: string;
    help: string;
    type: string;
    multiline?: boolean;
}

interface FieldGroup {
    title: string;
    description: string;
    fields: FieldConfig[];
}

const Origin: React.FC = () => {
    const { character, updateCharacter } = useCharacterContext();

    const handleChange = (field: string, value: string | number) => {
        const origin = { ...character.origin } as CharacterOrigin;
        
        const fields = field.split('.');
        let current: any = origin;
        for (let i = 0; i < fields.length - 1; i++) {
            if (!current[fields[i]]) {
                current[fields[i]] = {};
            }
            current = current[fields[i]];
        }
        current[fields[fields.length - 1]] = value;

        updateCharacter({ origin });
    };

    const fieldGroups: FieldGroup[] = [
        {
            title: "基本信息",
            description: "这些是你和你的角色最基础的信息。",
            fields: [
                {
                    name: "playerName",
                    label: "玩家昵称",
                    help: "这是你在游戏中的称呼，可以是你的网名或现实名字。",
                    type: "text"
                },
                {
                    name: "characterName",
                    label: "角色名称",
                    help: "为你的角色取一个符合其种族和背景的名字。每个种族都有其独特的命名传统。",
                    type: "text"
                },
                {
                    name: "gender",
                    label: "性别",
                    help: "你的角色认同的性别。在DND世界中，性别认同是开放和包容的。",
                    type: "text"
                },
                {
                    name: "age",
                    label: "年龄",
                    help: "不同种族有不同的寿命。例如，精灵可以活到700岁以上，而人类通常不超过100岁。",
                    type: "number"
                },
                {
                    name: "height",
                    label: "身高",
                    help: "可以用具体数值（如180cm）或描述性语言（如：高大）。",
                    type: "text"
                },
                {
                    name: "weight",
                    label: "体重",
                    help: "可以用具体数值（如75kg）或描述性语言（如：偏瘦）。",
                    type: "text"
                }
            ]
        },
        {
            title: "信仰与价值观",
            description: "这些选项定义了你的角色的道德准则和精神寄托。",
            fields: [
                {
                    name: "alignment",
                    label: "阵营",
                    help: "阵营反映角色的道德观和行为准则，从守序善良到混乱邪恶共有九种。例如：守序善良的圣骑士、中立善良的德鲁伊。",
                    type: "text"
                },
                {
                    name: "faith",
                    label: "信仰",
                    help: "你的角色信仰的神祇或力量。可以是特定神祇、自然力量，或无信仰。",
                    type: "text"
                }
            ]
        },
        {
            title: "外表特征",
            description: "这些细节帮助其他玩家想象你角色的外貌。",
            fields: [
                {
                    name: "appearance.hairStyle",
                    label: "发型",
                    help: "描述发型的长短、样式等。例如：齐肩的卷发、整齐的短发、编织的长辫。",
                    type: "text"
                },
                {
                    name: "appearance.hairColor",
                    label: "发色",
                    help: "可以是自然的发色，也可以是魔法染色。例如：乌黑、金黄、银白。",
                    type: "text"
                },
                {
                    name: "appearance.eyeColor",
                    label: "瞳色",
                    help: "某些种族可能有特殊的瞳色。例如：精灵可能有金色或紫色的眼睛。",
                    type: "text"
                },
                {
                    name: "appearance.skinColor",
                    label: "肤色",
                    help: "描述你角色的肤色。记住，每个种族都有其典型的肤色范围。",
                    type: "text"
                }
            ]
        },
        {
            title: "性格特征",
            description: "这些要素塑造了你角色独特的个性。",
            fields: [
                {
                    name: "personality.traits",
                    label: "个性",
                    help: "描述你角色的性格特点。例如：乐观开朗、沉默寡言、谨慎多疑。",
                    type: "text",
                    multiline: true
                },
                {
                    name: "personality.ideals",
                    label: "理念",
                    help: "你的角色追求的理想或原则。例如：正义高于一切、知识就是力量、自由是最重要的。",
                    type: "text",
                    multiline: true
                },
                {
                    name: "personality.bonds",
                    label: "羁绊",
                    help: "角色与世界的情感联系。可以是对某人、某地、某个组织的忠诚或责任。例如：我要保护我的家乡、我欠酒馆老板一笔债。",
                    type: "text",
                    multiline: true
                },
                {
                    name: "personality.flaws",
                    label: "缺陷",
                    help: "角色的弱点或缺陷。这让角色更真实。例如：我从不相信任何人、我无法抗拒金钱的诱惑。",
                    type: "text",
                    multiline: true
                }
            ]
        },
        {
            title: "背景描述",
            description: "这是你角色更详细的描述和故事。",
            fields: [
                {
                    name: "homeland",
                    label: "故乡",
                    help: "你的角色来自哪里？可以是具体的城市、村庄，或是某个地区。描述这个地方对角色的影响。",
                    type: "text",
                    multiline: true
                },
                {
                    name: "description",
                    label: "外貌描述",
                    help: "详细描述你角色的外表、衣着、特殊标记等。包括姿态、表情等细节可以让描述更生动。",
                    type: "text",
                    multiline: true
                },
                {
                    name: "backstory",
                    label: "背景故事",
                    help: "讲述你的角色如何成为现在的样子。可以包括成长经历、重要事件、为什么成为冒险者等。这些经历如何塑造了角色的性格和目标？",
                    type: "text",
                    multiline: true
                }
            ]
        }
    ];

    return (
        <Box sx={{ p: 3 }}>
            {fieldGroups.map((group, index) => (
                <Paper key={index} sx={{ p: 3, mb: 3 }}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            {group.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            {group.description}
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {group.fields.map((field, fieldIndex) => (
                            <Grid item xs={12} md={field.multiline ? 12 : 6} key={fieldIndex}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <TextField
                                        fullWidth
                                        label={field.label}
                                        type={field.type}
                                        value={
                                            field.name.includes('.')
                                                ? field.name.split('.').reduce((obj: any, key) => obj?.[key] ?? '', character.origin || {})
                                                : (character.origin as any)?.[field.name] ?? ''
                                        }
                                        onChange={(e) => handleChange(
                                            field.name,
                                            field.type === 'number' ? Number(e.target.value) : e.target.value
                                        )}
                                        multiline={field.multiline}
                                        rows={field.multiline ? 4 : 1}
                                        sx={{ mr: 1 }}
                                    />
                                    <Tooltip title={field.help} placement="right">
                                        <IconButton size="small">
                                            <HelpOutlineIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            ))}
        </Box>
    );
};

export default Origin;