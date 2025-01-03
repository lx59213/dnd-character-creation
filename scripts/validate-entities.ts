import { ENTITY_TYPES, EntityId, GameEntity } from '../src/types/entity';
import * as fs from 'fs';
import * as path from 'path';

function validateEntity(file: string, type: string): void {
  const content = JSON.parse(fs.readFileSync(file, 'utf-8'));
  
  // 验证ID格式
  if (!content.id || !content.id.startsWith(`${type}.`)) {
    throw new Error(`Invalid ID in ${file}: ${content.id}`);
  }
  
  // 验证必需字段
  if (!content.displayName || !content.description) {
    throw new Error(`Missing required fields in ${file}`);
  }
}

// 验证所有实体
ENTITY_TYPES.forEach(type => {
  const dir = path.join(__dirname, '..', 'src', 'data', type);
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir)
      .filter(file => file.endsWith('.json'))
      .forEach(file => validateEntity(path.join(dir, file), type));
  }
});

console.log('All entities validated successfully!');
