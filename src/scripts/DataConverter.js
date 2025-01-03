"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DataConverter = void 0;
var fast_xml_parser_1 = require("fast-xml-parser");
var fs = __importStar(require("fs-extra"));
var path = __importStar(require("path"));
var DataConverter = /** @class */ (function () {
    function DataConverter() {
        this.parser = new fast_xml_parser_1.XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: "",
            textNodeName: "text",
            parseAttributeValue: true
        });
        this.sourcePath = path.join(__dirname, '../../public');
        this.outputPath = path.join(__dirname, '../../public/data');
    }
    DataConverter.prototype.ensureOutputDirectory = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs.ensureDir(this.outputPath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataConverter.prototype.convertRaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            var racesLsxPath, raceData, parsedData, simplifiedRaces, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.ensureOutputDirectory()];
                    case 1:
                        _a.sent();
                        racesLsxPath = path.join(this.sourcePath, 'Races/Races.lsx');
                        console.log('Reading file from:', racesLsxPath);
                        return [4 /*yield*/, fs.readFile(racesLsxPath, 'utf-8')];
                    case 2:
                        raceData = _a.sent();
                        console.log('Raw data length:', raceData.length);
                        parsedData = this.parser.parse(raceData);
                        console.log('Parsed data:', JSON.stringify(parsedData, null, 2));
                        simplifiedRaces = this.simplifyRaceData(parsedData);
                        console.log('Simplified races:', JSON.stringify(simplifiedRaces, null, 2));
                        return [4 /*yield*/, fs.writeJSON(path.join(this.outputPath, 'races.json'), simplifiedRaces, { spaces: 2 })];
                    case 3:
                        _a.sent();
                        console.log('Successfully converted races data');
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error('Error converting races:', error_1);
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DataConverter.prototype.convertClasses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var classesLsxPath, classData, parsedData, simplifiedClasses, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.ensureOutputDirectory()];
                    case 1:
                        _a.sent();
                        classesLsxPath = path.join(this.sourcePath, 'Classes/Classes.lsx');
                        console.log('Reading classes file from:', classesLsxPath);
                        return [4 /*yield*/, fs.readFile(classesLsxPath, 'utf-8')];
                    case 2:
                        classData = _a.sent();
                        parsedData = this.parser.parse(classData);
                        simplifiedClasses = this.simplifyClassData(parsedData);
                        return [4 /*yield*/, fs.writeJSON(path.join(this.outputPath, 'classes.json'), simplifiedClasses, { spaces: 2 })];
                    case 3:
                        _a.sent();
                        console.log('Successfully converted classes data');
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.error('Error converting classes:', error_2);
                        throw error_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DataConverter.prototype.convertBackgrounds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var backgroundsLsxPath, backgroundData, parsedData, simplifiedBackgrounds, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.ensureOutputDirectory()];
                    case 1:
                        _a.sent();
                        backgroundsLsxPath = path.join(this.sourcePath, 'Backgrounds/Backgrounds.lsx');
                        console.log('Reading backgrounds file from:', backgroundsLsxPath);
                        return [4 /*yield*/, fs.readFile(backgroundsLsxPath, 'utf-8')];
                    case 2:
                        backgroundData = _a.sent();
                        parsedData = this.parser.parse(backgroundData);
                        simplifiedBackgrounds = this.simplifyBackgroundData(parsedData);
                        return [4 /*yield*/, fs.writeJSON(path.join(this.outputPath, 'backgrounds.json'), simplifiedBackgrounds, { spaces: 2 })];
                    case 3:
                        _a.sent();
                        console.log('Successfully converted backgrounds data');
                        return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        console.error('Error converting backgrounds:', error_3);
                        throw error_3;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DataConverter.prototype.convertLocalization = function () {
        return __awaiter(this, void 0, void 0, function () {
            var localizationLsxPath, localizationData, parsedData, translations, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.ensureOutputDirectory()];
                    case 1:
                        _a.sent();
                        localizationLsxPath = path.join(this.sourcePath, 'Localization/English/english.lsx');
                        console.log('Reading localization file from:', localizationLsxPath);
                        return [4 /*yield*/, fs.readFile(localizationLsxPath, 'utf-8')];
                    case 2:
                        localizationData = _a.sent();
                        parsedData = this.parser.parse(localizationData);
                        translations = this.extractTranslations(parsedData);
                        return [4 /*yield*/, fs.writeJSON(path.join(this.outputPath, 'translations.json'), translations, { spaces: 2 })];
                    case 3:
                        _a.sent();
                        console.log('Successfully converted localization data');
                        return [3 /*break*/, 5];
                    case 4:
                        error_4 = _a.sent();
                        console.error('Error converting localization:', error_4);
                        throw error_4;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DataConverter.prototype.simplifyRaceData = function (data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var races = [];
        var raceNode = (_d = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.save) === null || _a === void 0 ? void 0 : _a.region) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.children) === null || _d === void 0 ? void 0 : _d.node;
        if (raceNode) {
            var attributes = Array.isArray(raceNode.attribute) ? raceNode.attribute : [raceNode.attribute];
            var children = ((_e = raceNode.children) === null || _e === void 0 ? void 0 : _e.node) || [];
            var race_1 = {
                id: ((_f = attributes.find(function (attr) { return attr.id === 'UUID'; })) === null || _f === void 0 ? void 0 : _f.value) || '',
                name: ((_g = attributes.find(function (attr) { return attr.id === 'Name'; })) === null || _g === void 0 ? void 0 : _g.value) || '',
                displayName: '',
                description: '',
                features: [],
                abilityBoosts: {},
                translationKeys: {
                    displayName: ((_h = attributes.find(function (attr) { return attr.id === 'DisplayName'; })) === null || _h === void 0 ? void 0 : _h.handle) || '',
                    description: ((_j = attributes.find(function (attr) { return attr.id === 'Description'; })) === null || _j === void 0 ? void 0 : _j.handle) || ''
                }
            };
            // Process ability boosts
            var abilityBoosts = ((_l = (_k = children.find(function (node) { return node.id === 'AbilityBoosts'; })) === null || _k === void 0 ? void 0 : _k.children) === null || _l === void 0 ? void 0 : _l.node) || [];
            if (Array.isArray(abilityBoosts)) {
                abilityBoosts.forEach(function (boost) {
                    var _a, _b;
                    var ability = (_a = boost.attribute.find(function (attr) { return attr.id === 'Ability'; })) === null || _a === void 0 ? void 0 : _a.value;
                    var amount = (_b = boost.attribute.find(function (attr) { return attr.id === 'Amount'; })) === null || _b === void 0 ? void 0 : _b.value;
                    if (ability && amount) {
                        race_1.abilityBoosts[ability] = amount;
                    }
                });
            }
            // Process features
            var features = ((_o = (_m = children.find(function (node) { return node.id === 'Features'; })) === null || _m === void 0 ? void 0 : _m.children) === null || _o === void 0 ? void 0 : _o.node) || [];
            if (Array.isArray(features)) {
                race_1.features = features.map(function (feature) {
                    var _a, _b, _c;
                    var attrs = Array.isArray(feature.attribute) ? feature.attribute : [feature.attribute];
                    return {
                        id: ((_a = attrs.find(function (attr) { return attr.id === 'Name'; })) === null || _a === void 0 ? void 0 : _a.value) || '',
                        name: ((_b = attrs.find(function (attr) { return attr.id === 'Name'; })) === null || _b === void 0 ? void 0 : _b.value) || '',
                        description: '',
                        translationKeys: {
                            description: ((_c = attrs.find(function (attr) { return attr.id === 'Description'; })) === null || _c === void 0 ? void 0 : _c.handle) || ''
                        }
                    };
                });
            }
            races.push(race_1);
        }
        return { races: races };
    };
    DataConverter.prototype.simplifyClassData = function (data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var classes = [];
        var classNode = (_d = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.save) === null || _a === void 0 ? void 0 : _a.region) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.children) === null || _d === void 0 ? void 0 : _d.node;
        if (classNode) {
            var attributes = Array.isArray(classNode.attribute) ? classNode.attribute : [classNode.attribute];
            var children = ((_e = classNode.children) === null || _e === void 0 ? void 0 : _e.node) || [];
            var classData = {
                id: ((_f = attributes.find(function (attr) { return attr.id === 'UUID'; })) === null || _f === void 0 ? void 0 : _f.value) || '',
                name: ((_g = attributes.find(function (attr) { return attr.id === 'Name'; })) === null || _g === void 0 ? void 0 : _g.value) || '',
                displayName: '',
                description: '',
                features: [],
                proficiencies: [],
                translationKeys: {
                    displayName: ((_h = attributes.find(function (attr) { return attr.id === 'DisplayName'; })) === null || _h === void 0 ? void 0 : _h.handle) || '',
                    description: ((_j = attributes.find(function (attr) { return attr.id === 'Description'; })) === null || _j === void 0 ? void 0 : _j.handle) || ''
                }
            };
            // Process features
            var features = ((_l = (_k = children.find(function (node) { return node.id === 'Features'; })) === null || _k === void 0 ? void 0 : _k.children) === null || _l === void 0 ? void 0 : _l.node) || [];
            if (Array.isArray(features)) {
                classData.features = features.map(function (feature) {
                    var _a, _b, _c;
                    var attrs = Array.isArray(feature.attribute) ? feature.attribute : [feature.attribute];
                    return {
                        id: ((_a = attrs.find(function (attr) { return attr.id === 'Name'; })) === null || _a === void 0 ? void 0 : _a.value) || '',
                        name: ((_b = attrs.find(function (attr) { return attr.id === 'Name'; })) === null || _b === void 0 ? void 0 : _b.value) || '',
                        description: '',
                        translationKeys: {
                            description: ((_c = attrs.find(function (attr) { return attr.id === 'Description'; })) === null || _c === void 0 ? void 0 : _c.handle) || ''
                        }
                    };
                });
            }
            // Process proficiencies
            var proficiencies = ((_o = (_m = children.find(function (node) { return node.id === 'Proficiencies'; })) === null || _m === void 0 ? void 0 : _m.children) === null || _o === void 0 ? void 0 : _o.node) || [];
            if (Array.isArray(proficiencies)) {
                classData.proficiencies = proficiencies.map(function (prof) { var _a; return ((_a = prof.attribute.find(function (attr) { return attr.id === 'Name'; })) === null || _a === void 0 ? void 0 : _a.value) || ''; });
            }
            classes.push(classData);
        }
        return { classes: classes };
    };
    DataConverter.prototype.simplifyBackgroundData = function (data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var backgrounds = [];
        var backgroundNode = (_d = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.save) === null || _a === void 0 ? void 0 : _a.region) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.children) === null || _d === void 0 ? void 0 : _d.node;
        if (backgroundNode) {
            var attributes = Array.isArray(backgroundNode.attribute) ? backgroundNode.attribute : [backgroundNode.attribute];
            var children = ((_e = backgroundNode.children) === null || _e === void 0 ? void 0 : _e.node) || [];
            var background = {
                id: ((_f = attributes.find(function (attr) { return attr.id === 'UUID'; })) === null || _f === void 0 ? void 0 : _f.value) || '',
                name: ((_g = attributes.find(function (attr) { return attr.id === 'Name'; })) === null || _g === void 0 ? void 0 : _g.value) || '',
                displayName: '',
                description: '',
                features: [],
                proficiencies: [],
                translationKeys: {
                    displayName: ((_h = attributes.find(function (attr) { return attr.id === 'DisplayName'; })) === null || _h === void 0 ? void 0 : _h.handle) || '',
                    description: ((_j = attributes.find(function (attr) { return attr.id === 'Description'; })) === null || _j === void 0 ? void 0 : _j.handle) || ''
                }
            };
            // Process features
            var features = ((_l = (_k = children.find(function (node) { return node.id === 'Features'; })) === null || _k === void 0 ? void 0 : _k.children) === null || _l === void 0 ? void 0 : _l.node) || [];
            if (Array.isArray(features)) {
                background.features = features.map(function (feature) {
                    var _a, _b, _c;
                    var attrs = Array.isArray(feature.attribute) ? feature.attribute : [feature.attribute];
                    return {
                        id: ((_a = attrs.find(function (attr) { return attr.id === 'Name'; })) === null || _a === void 0 ? void 0 : _a.value) || '',
                        name: ((_b = attrs.find(function (attr) { return attr.id === 'Name'; })) === null || _b === void 0 ? void 0 : _b.value) || '',
                        description: '',
                        translationKeys: {
                            description: ((_c = attrs.find(function (attr) { return attr.id === 'Description'; })) === null || _c === void 0 ? void 0 : _c.handle) || ''
                        }
                    };
                });
            }
            // Process proficiencies
            var proficiencies = ((_o = (_m = children.find(function (node) { return node.id === 'Proficiencies'; })) === null || _m === void 0 ? void 0 : _m.children) === null || _o === void 0 ? void 0 : _o.node) || [];
            if (Array.isArray(proficiencies)) {
                background.proficiencies = proficiencies.map(function (prof) { var _a; return ((_a = prof.attribute.find(function (attr) { return attr.id === 'Name'; })) === null || _a === void 0 ? void 0 : _a.value) || ''; });
            }
            backgrounds.push(background);
        }
        return { backgrounds: backgrounds };
    };
    DataConverter.prototype.updateWithTranslations = function (data, translations) {
        var updateItem = function (item) {
            if (item.translationKeys) {
                if (item.translationKeys.displayName) {
                    item.displayName = translations[item.translationKeys.displayName] || item.displayName;
                }
                if (item.translationKeys.description) {
                    item.description = translations[item.translationKeys.description] || item.description;
                }
                delete item.translationKeys;
            }
            // Update features translations
            if (item.features) {
                item.features.forEach(function (feature) {
                    var _a;
                    if ((_a = feature.translationKeys) === null || _a === void 0 ? void 0 : _a.description) {
                        feature.description = translations[feature.translationKeys.description] || feature.description;
                        delete feature.translationKeys;
                    }
                });
            }
        };
        if (data.races) {
            data.races.forEach(updateItem);
        }
        if (data.classes) {
            data.classes.forEach(updateItem);
        }
        if (data.backgrounds) {
            data.backgrounds.forEach(updateItem);
        }
    };
    DataConverter.prototype.extractTranslations = function (data) {
        var translations = {};
        var root = data.save.region.node.children;
        if (!root.node)
            return translations;
        var nodes = Array.isArray(root.node) ? root.node : [root.node];
        nodes.forEach(function (node) {
            var _a, _b;
            if (!node.attribute)
                return;
            var handle = (_a = node.attribute.find(function (attr) { return attr.id === 'Handle'; })) === null || _a === void 0 ? void 0 : _a.value;
            var content = (_b = node.attribute.find(function (attr) { return attr.id === 'Content'; })) === null || _b === void 0 ? void 0 : _b.value;
            if (handle && content) {
                translations[handle] = content;
            }
        });
        return translations;
    };
    return DataConverter;
}());
exports.DataConverter = DataConverter;
