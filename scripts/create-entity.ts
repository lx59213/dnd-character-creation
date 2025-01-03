import { ENTITY_TYPES } from '../src/types/entity';
import * as fs from 'fs';
import * as path from 'path';

const [entityType, entityName] = process.argv.slice(2);

if (!ENTITY_TYPES.includes(entityType)) {
  console.error(`Error: Entity type must be one of: ${ENTITY_TYPES.join(', ')}`);
  process.exit(1);
}

const id = `${entityType}.${entityName}`;
const template = `{
  "id": "${id}",
  "displayName": "",  // 必填
  "description": ""   // 必填
}`;

const dir = path.join(__dirname, '..', 'src', 'data', entityType);
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, `${entityName}.json`), template);

console.log(`Created ${entityType} entity: ${id}`);
