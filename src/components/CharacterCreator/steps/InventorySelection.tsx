import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  List,
  ListItem,
  ListItemText,
  Alert,
  CircularProgress,
  Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCharacterContext } from '../context';
import { Character } from '../../../types/character';
import { 
  BaseItem, 
  Weapon, 
  Armor, 
  MagicItem, 
  AdventuringGear, 
  Tool, 
  Accessory, 
  Mount, 
  Wealth,
  Inventory 
} from '../../../types/equipment';

interface InventoryTab {
  id: string;
  label: string;
  icon: string;
}

const inventoryTabs: InventoryTab[] = [
  { id: 'weapons', label: '武器', icon: '&#x2694;' },
  { id: 'armor', label: '护甲', icon: '&#x1F6E1;' },
  { id: 'magic_items', label: '魔法物品', icon: '&#x2728;' },
  { id: 'adventuring_gear', label: '冒险用品', icon: '&#x1F3EB;' },
  { id: 'tools', label: '工具', icon: '&#x1F6E0;' },
  { id: 'accessories', label: '饰品', icon: '&#x1F48D;' },
  { id: 'mounts', label: '坐骑', icon: '&#x1F40E;' },
  { id: 'wealth', label: '财富', icon: '&#x1F4B8;' }
];

interface ItemCardProps {
  item: BaseItem;
  onDelete: () => void;
  expanded: boolean;
  onToggleExpand: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onDelete,
  expanded,
  onToggleExpand
}) => {
  return (
    <Card sx={{ mb: 1 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{item.displayName}</Typography>
          <Box>
            <IconButton size="small" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
            <IconButton size="small" onClick={onToggleExpand}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        </Box>
        {expanded && (
          <Box mt={1}>
            <Typography variant="body2" color="textSecondary">
              {item.description}
            </Typography>
            <Box mt={1}>
              <Chip label={`重量: ${item.weight}磅`} size="small" sx={{ mr: 1 }} />
              <Chip 
                label={`价值: ${item.cost.amount}${item.cost.unit}`} 
                size="small" 
              />
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

// Tab配置类型
interface TabConfig {
  readonly label: string;
  readonly dataFile: string;
  readonly icon: string;
}

// Tab配置
const TAB_CONFIG = {
  weapons: { label: '武器', dataFile: 'weapons.json', icon: '⚔' },
  armor: { label: '护甲', dataFile: 'armor.json', icon: '🛡' },
  magic_items: { label: '魔法物品', dataFile: 'magic_items.json', icon: '✨' },
  adventuring_gear: { label: '冒险用品', dataFile: 'adventuring_gear.json', icon: '🎒' },
  tools: { label: '工具', dataFile: 'tools.json', icon: '🔧' },
  accessories: { label: '饰品', dataFile: 'accessories.json', icon: '💍' },
  mounts: { label: '坐骑', dataFile: 'mounts.json', icon: '🐎' },
  wealth: { label: '财富', dataFile: 'wealth.json', icon: '💰' }
} as const;

// Tab类型
type TabType = keyof typeof TAB_CONFIG;

const renderItemProperties = (item: BaseItem) => {
  const type = item.id.split('.')[0];
  
  const renderCost = () => (
    <Typography variant="body2" color="text.secondary">
      价格: {item.cost.amount} {item.cost.unit.toUpperCase()}
    </Typography>
  );

  const renderWeight = () => (
    <Typography variant="body2" color="text.secondary">
      重量: {item.weight} 磅
    </Typography>
  );

  switch (type) {
    case 'weapons': {
      const weapon = item as any;
      return (
        <>
          {renderWeight()}
          {renderCost()}
          <Typography variant="body2" color="text.secondary">
            伤害: {weapon.damage.diceCount}d{weapon.damage.diceType} {weapon.damage.type}
          </Typography>
          {weapon.range && (
            <Typography variant="body2" color="text.secondary">
              射程: {weapon.range.normal}/{weapon.range.long || '—'}
            </Typography>
          )}
          {weapon.properties && weapon.properties.length > 0 && (
            <Typography variant="body2" color="text.secondary">
              属性: {weapon.properties.join(', ')}
            </Typography>
          )}
        </>
      );
    }
    case 'armor': {
      const armor = item as any;
      return (
        <>
          {renderWeight()}
          {renderCost()}
          <Typography variant="body2" color="text.secondary">
            基础AC: {armor.baseAC}
          </Typography>
          {armor.maxDexBonus !== undefined && (
            <Typography variant="body2" color="text.secondary">
              最大敏捷加值: {armor.maxDexBonus}
            </Typography>
          )}
          {armor.strengthRequirement && (
            <Typography variant="body2" color="text.secondary">
              力量需求: {armor.strengthRequirement}
            </Typography>
          )}
          {armor.stealthDisadvantage && (
            <Typography variant="body2" color="text.secondary">
              潜行劣势
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            穿脱时间: {armor.donTime}/{armor.doffTime} 分钟
          </Typography>
        </>
      );
    }
    case 'magic_items': {
      const magicItem = item as any;
      return (
        <>
          {renderWeight()}
          {renderCost()}
          {magicItem.attunement && (
            <Typography variant="body2" color="text.secondary">
              需要同调
            </Typography>
          )}
          {magicItem.charges && (
            <Typography variant="body2" color="text.secondary">
              充能: {magicItem.charges.max} ({magicItem.charges.recharge} 恢复)
            </Typography>
          )}
        </>
      );
    }
    case 'adventuring_gear': {
      const gear = item as any;
      return (
        <>
          {renderWeight()}
          {renderCost()}
          {gear.quantity && (
            <Typography variant="body2" color="text.secondary">
              数量: {gear.quantity}
            </Typography>
          )}
        </>
      );
    }
    case 'tools': {
      const tool = item as any;
      return (
        <>
          {renderWeight()}
          {renderCost()}
          {tool.proficiencyProvided && (
            <Typography variant="body2" color="text.secondary">
              提供熟练项: {tool.proficiencyProvided}
            </Typography>
          )}
        </>
      );
    }
    case 'accessories': {
      const accessory = item as any;
      return (
        <>
          {renderWeight()}
          {renderCost()}
          <Typography variant="body2" color="text.secondary">
            装备位置: {accessory.slot}
          </Typography>
          {accessory.effect && (
            <Typography variant="body2" color="text.secondary">
              效果: {accessory.effect}
            </Typography>
          )}
        </>
      );
    }
    case 'mounts': {
      const mount = item as any;
      return (
        <>
          {renderWeight()}
          {renderCost()}
          <Typography variant="body2" color="text.secondary">
            速度: {mount.speed} 尺
          </Typography>
          <Typography variant="body2" color="text.secondary">
            载重: {mount.carryingCapacity} 磅
          </Typography>
          <Typography variant="body2" color="text.secondary">
            类型: {mount.type}
          </Typography>
        </>
      );
    }
    default:
      return (
        <>
          {renderWeight()}
          {renderCost()}
        </>
      );
  }
};

const InventorySelection: React.FC = () => {
  const { character, updateCharacter } = useCharacterContext();
  const [activeTab, setActiveTab] = useState<TabType>('weapons');
  const [searchQuery, setSearchQuery] = useState('');
  const [allItems, setAllItems] = useState<BaseItem[]>([]);
  const [searchResults, setSearchResults] = useState<BaseItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  
  // 使用 ref 来跟踪是否是用户操作导致的更新
  const isUserAction = useRef(false);
  
  // 将 inventory 状态提升为组件状态
  const [inventory, setInventory] = useState<Inventory>(() => ({
    equipped: character.inventory?.equipped || {},
    weapons: character.inventory?.weapons || [],
    armor: character.inventory?.armor || [],
    magicItems: character.inventory?.magicItems || [],
    gear: character.inventory?.gear || [],
    tools: character.inventory?.tools || [],
    accessories: character.inventory?.accessories || [],
    mounts: character.inventory?.mounts || [],
    wealth: character.inventory?.wealth || { cp: 0, sp: 0, gp: 0, pp: 0 }
  }));

  // 仅在 character.inventory 发生有效变化时更新本地状态
  useEffect(() => {
    if (!isUserAction.current && character.inventory) {
      setInventory({
        equipped: character.inventory.equipped || {},
        weapons: character.inventory.weapons || [],
        armor: character.inventory.armor || [],
        magicItems: character.inventory.magicItems || [],
        gear: character.inventory.gear || [],
        tools: character.inventory.tools || [],
        accessories: character.inventory.accessories || [],
        mounts: character.inventory.mounts || [],
        wealth: character.inventory.wealth || { cp: 0, sp: 0, gp: 0, pp: 0 }
      });
    }
    isUserAction.current = false;
  }, [character.inventory]);

  // 更新全局状态的函数
  const updateGlobalInventory = useCallback((newInventory: Inventory) => {
    isUserAction.current = true;
    updateCharacter({
      inventory: newInventory
    });
  }, [updateCharacter]);

  // 处理添加物品
  const handleAddItem = useCallback((item: BaseItem) => {
    if (!item.id) {
      console.error('物品缺少ID:', item);
      setError('物品数据格式错误');
      return;
    }

    const itemType = activeTab;
    const newItem = {
      ...item,
      id: `${itemType}.${item.id.split('.').pop() || Date.now()}`
    } as BaseItem;

    setInventory(prev => {
      const inventoryKey = itemType === 'magic_items' ? 'magicItems' :
                          itemType === 'adventuring_gear' ? 'gear' :
                          itemType;
      const currentItems = prev[inventoryKey] as BaseItem[];
      const newInventory = {
        ...prev,
        [inventoryKey]: [...currentItems, newItem]
      };
      updateGlobalInventory(newInventory);
      return newInventory;
    });

    setIsSearchFocused(false);
  }, [activeTab, updateGlobalInventory]);

  // 处理删除物品
  const handleDeleteItem = useCallback((itemId: string, tabType: TabType) => {
    setInventory(prev => {
      const inventoryKey = tabType === 'magic_items' ? 'magicItems' :
                          tabType === 'adventuring_gear' ? 'gear' :
                          tabType;
      const currentItems = prev[inventoryKey] as BaseItem[];
      const newInventory = {
        ...prev,
        [inventoryKey]: currentItems.filter(item => item.id !== itemId)
      };
      updateGlobalInventory(newInventory);
      return newInventory;
    });
  }, [updateGlobalInventory]);

  // 处理财富更新
  const handleWealthChange = (type: keyof Wealth, value: number | string) => {
    const numValue = typeof value === 'string' ? parseInt(value, 10) : value;
    if (isNaN(numValue)) return;

    setInventory(prev => {
      const newInventory = {
        ...prev,
        wealth: {
          ...prev.wealth,
          [type]: Math.max(0, numValue)
        }
      };
      updateGlobalInventory(newInventory);
      return newInventory;
    });
  };

  // 加载物品数据
  useEffect(() => {
    const loadItems = async () => {
      setIsLoading(true);
      setError(null);
      setAllItems([]);
      setSearchResults([]);

      try {
        const response = await fetch(`/data/Equipment/${TAB_CONFIG[activeTab].dataFile}`);
        if (!response.ok) {
          throw new Error(`加载失败: ${response.statusText}`);
        }
        const data = await response.json();
        
        if (activeTab === 'wealth') {
          // 使用默认平民财富
          const defaultWealth = data.starting_wealth?.commoner || { cp: 0, sp: 0, gp: 0, pp: 0 };
          setInventory(prev => ({
            ...prev,
            wealth: defaultWealth
          }));
        } else {
          // 处理物品数据
          let itemsArray: BaseItem[] = [];
          
          if (data && typeof data === 'object') {
            // 将物品数据转换为数组
            itemsArray = Object.entries(data).map(([id, item]: [string, any]) => ({
              id,
              ...(typeof item === 'object' ? item : {}),
              displayName: item.displayName || item.name || id,
              description: item.description || ''
            }));
          }

          setAllItems(itemsArray);
          setSearchResults(itemsArray);
        }
      } catch (err) {
        console.error('加载数据失败:', err);
        setError(err instanceof Error ? err.message : '加载数据时出错');
      } finally {
        setIsLoading(false);
      }
    };

    loadItems();
  }, [activeTab]);

  // 处理搜索
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    const trimmedQuery = query.trim().toLowerCase();
    
    if (!trimmedQuery) {
      setSearchResults(allItems);
      return;
    }

    const results = allItems.filter(item => 
      item.displayName.toLowerCase().includes(trimmedQuery) ||
      item.description.toLowerCase().includes(trimmedQuery)
    );
    setSearchResults(results);
  }, [allItems]);

  // 处理搜索结果点击
  const handleSearchResultClick = useCallback((item: BaseItem) => {
    handleAddItem(item);
    setSearchQuery('');
  }, [handleAddItem]);

  // 渲染物品列表
  const renderItemList = (): JSX.Element => {
    const currentItems = (() => {
      switch (activeTab) {
        case 'weapons': return inventory.weapons as BaseItem[];
        case 'armor': return inventory.armor as BaseItem[];
        case 'magic_items': return inventory.magicItems as BaseItem[];
        case 'adventuring_gear': return inventory.gear as BaseItem[];
        case 'tools': return inventory.tools as BaseItem[];
        case 'accessories': return inventory.accessories as BaseItem[];
        case 'mounts': return inventory.mounts as BaseItem[];
        default: return [] as BaseItem[];
      }
    })();

    return (
      <List>
        {currentItems.map((item: BaseItem) => (
          <ListItem
            key={item.id}
            divider
            secondaryAction={
              <IconButton 
                edge="end" 
                onClick={() => handleDeleteItem(item.id, activeTab)}
                sx={{
                  '&:hover': {
                    color: 'error.main',
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={item.displayName}
              secondary={
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  {renderItemProperties(item)}
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    );
  };

  // 渲染财富面板
  const renderWealthPanel = (): JSX.Element => (
    <Box p={2}>
      <Grid container spacing={2}>
        {(Object.keys(inventory.wealth) as Array<keyof Wealth>).map((type) => (
          <Grid item xs={3} key={type}>
            <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle2">
                {type === 'cp' ? '铜币 (CP)' :
                 type === 'sp' ? '银币 (SP)' :
                 type === 'gp' ? '金币 (GP)' :
                 '铂金币 (PP)'}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <IconButton 
                  size="small"
                  onClick={() => handleWealthChange(type, inventory.wealth[type] - 1)}
                >
                  <RemoveIcon />
                </IconButton>
                <TextField
                  size="small"
                  value={inventory.wealth[type]}
                  onChange={(e) => handleWealthChange(type, e.target.value)}
                  inputProps={{
                    style: { textAlign: 'center', width: '60px' },
                    type: 'number',
                    min: 0
                  }}
                />
                <IconButton 
                  size="small"
                  onClick={() => handleWealthChange(type, inventory.wealth[type] + 1)}
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ 
      backgroundColor: '#ffffff',
      borderRadius: 1,
      p: 2,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <Tabs 
        value={activeTab} 
        onChange={(event, newValue) => setActiveTab(newValue)}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          '& .MuiTab-root': {
            textTransform: 'none',
            minHeight: 48,
            padding: '6px 16px',
            fontSize: '1rem',
            fontWeight: 500,
            color: 'text.secondary',
            '&.Mui-selected': {
              color: 'primary.main'
            }
          }
        }}
      >
        {Object.entries(TAB_CONFIG).map(([key, config]) => (
          <Tab 
            key={key} 
            value={key} 
            label={
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                '& .icon': {
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center'
                }
              }}>
                <span className="icon">{config.icon}</span>
                {config.label}
              </Box>
            }
          />
        ))}
      </Tabs>

      {isLoading ? (
        <Box display="flex" justifyContent="center" p={3}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : activeTab === 'wealth' ? (
        renderWealthPanel()
      ) : (
        <>
          <Box ref={searchContainerRef} sx={{ p: 2, position: 'relative' }}>
            <TextField
              fullWidth
              placeholder="搜索物品..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#ffffff'
                }
              }}
            />
            {isSearchFocused && searchResults.length > 0 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  zIndex: 1,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderRadius: 1,
                  maxHeight: '300px',
                  overflowY: 'auto'
                }}
              >
                <List>
                  {searchResults.map((item) => (
                    <ListItem
                      key={item.id}
                      button
                      onClick={() => handleSearchResultClick(item)}
                    >
                      <ListItemText
                        primary={item.displayName}
                        secondary={item.description}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </Box>
          {renderItemList()}
        </>
      )}
    </Box>
  );
};

export default InventorySelection;
