import json
import os
from collections import defaultdict

def load_json_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def extract_proficiencies(class_dir):
    proficiencies = defaultdict(set)
    
    # 遍历所有职业文件
    for filename in os.listdir(class_dir):
        if filename.endswith('.json'):
            file_path = os.path.join(class_dir, filename)
            class_data = load_json_file(file_path)
            
            # 提取Other proficiencies部分
            if 'Other proficiencies' in class_data:
                prof_data = class_data['Other proficiencies']
                
                # 提取各类熟练项
                for category in ['armor', 'weapons', 'tools', 'savingThrows']:
                    if category in prof_data:
                        for item in prof_data[category]:
                            if 'id' in item:
                                proficiencies[category].add(item['id'])
            
            # 检查多重职业部分
            if 'multiclassing' in class_data and 'Other proficiencies' in class_data['multiclassing']:
                prof_data = class_data['multiclassing']['Other proficiencies']
                for category in ['armor', 'weapons', 'tools']:
                    if category in prof_data:
                        for item in prof_data[category]:
                            if 'id' in item:
                                proficiencies[f'multiclass_{category}'].add(item['id'])
    
    return proficiencies

def analyze_proficiency_files(prof_dir):
    existing_profs = defaultdict(set)
    
    # 分析现有的熟练项文件
    file_mapping = {
        'armor': 'armor_proficiency.json',
        'weapons': 'weapon_proficiency.json',
        'tools': 'tool_proficiency.json',
        'savingThrows': 'savingThrow_proficiency.json'
    }
    
    for category, filename in file_mapping.items():
        file_path = os.path.join(prof_dir, filename)
        if os.path.exists(file_path):
            data = load_json_file(file_path)
            existing_profs[category] = set(data.keys())
    
    return existing_profs

def main():
    base_dir = 'd:/DND_Character_Creation/dnd-character-creation/public/data'
    class_dir = os.path.join(base_dir, 'Classes')
    prof_dir = os.path.join(base_dir, 'Other proficiency')
    
    # 提取所有职业中的熟练项
    used_profs = extract_proficiencies(class_dir)
    
    # 分析现有熟练项文件
    existing_profs = analyze_proficiency_files(prof_dir)
    
    # 生成报告
    print("=== 熟练项分析报告 ===\n")
    
    for category in ['armor', 'weapons', 'tools', 'savingThrows']:
        print(f"\n{category}类熟练项:")
        print("使用的ID:")
        for prof_id in sorted(used_profs[category]):
            print(f"  {prof_id}")
        
        if category in existing_profs:
            missing = used_profs[category] - existing_profs[category]
            if missing:
                print("\n缺失的ID:")
                for prof_id in sorted(missing):
                    print(f"  {prof_id}")
            else:
                print("\n✓ 所有使用的ID都已定义")
        
        if f'multiclass_{category}' in used_profs:
            print(f"\n多重职业{category}类熟练项:")
            for prof_id in sorted(used_profs[f'multiclass_{category}']):
                print(f"  {prof_id}")

if __name__ == '__main__':
    main()
