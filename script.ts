
import * as rm from "https://deno.land/x/remapper@4.0.0/src/mod.ts"
import * as bundleInfo from './bundleinfo.json' with { type: 'json' }

const pipeline = await rm.createPipeline({ bundleInfo })
const map = await rm.readDifficultyV3(pipeline, 'HardStandard')

const bundle = rm.loadBundle(bundleInfo)
const materials = bundle.materials
const prefabs = bundle.prefabs

// ----------- { SCRIPT } -----------
rm.environmentRemoval(map, [
    'Environment',
    'GameCore'
])

//Requirements
map.require('Chroma')
map.require('Noodle Extensions')
map.require('Vivify')

//Vivify
const prefab = prefabs['liminal'].instantiate(map, {
    position: [28, -3.5, 12],
    rotation: [-5, 180, 0]
})
prefab.destroyObject(52)

const prefab1 = prefabs['eyes'].instantiate(map, {
    beat: 54,
    position: [15.75, -1.5, 90],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab1.destroyObject(56)
const prefab2 = prefabs['eyes'].instantiate(map, {
    beat: 56,
    position: [15.75, -1.5, 89],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab2.destroyObject(58)
const prefab3 = prefabs['eyes'].instantiate(map, {
    beat: 58,
    position: [15.75, -1.5, 88],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab3.destroyObject(60)
const prefab4 = prefabs['eyes'].instantiate(map, {
    beat: 60,
    position: [15.75, -1.5, 87],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab4.destroyObject(62)
const prefab5 = prefabs['eyes'].instantiate(map, {
    beat: 62,
    position: [15.75, -1.5, 86],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab5.destroyObject(64)
const prefab6 = prefabs['eyes'].instantiate(map, {
    beat: 64,
    position: [15.75, -1.5, 85],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab6.destroyObject(66)
const prefab7 = prefabs['eyes'].instantiate(map, {
    beat: 66,
    position: [15.75, -1.5, 84],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab7.destroyObject(68)
const prefab8 = prefabs['eyes'].instantiate(map, {
    beat: 68,
    position: [15.75, -1.5, 83],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab8.destroyObject(70)
const prefab9 = prefabs['eyes'].instantiate(map, {
    beat: 70,
    position: [15.75, -1.5, 82],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab9.destroyObject(72)
const prefab10 = prefabs['eyes'].instantiate(map, {
    beat: 72,
    position: [15.75, -1.5, 81],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab10.destroyObject(74)
const prefab11 = prefabs['eyes'].instantiate(map, {
    beat: 74,
    position: [15.75, -1.5, 80],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab11.destroyObject(76)
const prefab12 = prefabs['eyes'].instantiate(map, {
    beat: 76,
    position: [15.75, -1.5, 79],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab12.destroyObject(78)
const prefab13 = prefabs['eyes'].instantiate(map, {
    beat: 78,
    position: [15.75, -1.5, 78],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab13.destroyObject(80)
const prefab14 = prefabs['eyes'].instantiate(map, {
    beat: 80,
    position: [15.75, -1.5, 77],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab14.destroyObject(82)
const prefab15 = prefabs['eyes'].instantiate(map, {
    beat: 82,
    position: [15.75, -1.5, 76],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab15.destroyObject(84)
const prefab16 = prefabs['eyes'].instantiate(map, {
    beat: 84,
    position: [15.75, -1.5, 75],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab16.destroyObject(86)
const prefab17 = prefabs['eyes'].instantiate(map, {
    beat: 86,
    position: [15.75, -1.5, 74],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab17.destroyObject(88)
const prefab18 = prefabs['eyes'].instantiate(map, {
    beat: 88,
    position: [15.75, -1.5, 73],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab18.destroyObject(90)
const prefab19 = prefabs['eyes'].instantiate(map, {
    beat: 90,
    position: [15.75, -1.5, 72],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab19.destroyObject(92)
const prefab20 = prefabs['eyes'].instantiate(map, {
    beat: 92,
    position: [15.75, -1.5, 71],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab20.destroyObject(94)
const prefab21 = prefabs['eyes'].instantiate(map, {
    beat: 94,
    position: [15.75, -1.5, 70],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab21.destroyObject(96)
const prefab22 = prefabs['eyes'].instantiate(map, {
    beat: 96,
    position: [15.75, -1.5, 69],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab22.destroyObject(98)
const prefab23 = prefabs['eyes'].instantiate(map, {
    beat: 98,
    position: [15.75, -1.5, 68],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab23.destroyObject(100)
const prefab24 = prefabs['eyes'].instantiate(map, {
    beat: 100,
    position: [15.75, -1.5, 67],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab24.destroyObject(102)
const prefab25 = prefabs['eyes'].instantiate(map, {
    beat: 102,
    position: [15.75, -1.5, 66],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab25.destroyObject(104)
const prefab26 = prefabs['eyes'].instantiate(map, {
    beat: 104,
    position: [15.75, -1.5, 65],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab26.destroyObject(106)
const prefab27 = prefabs['eyes'].instantiate(map, {
    beat: 106,
    position: [15.75, -1.5, 64],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab27.destroyObject(108)
const prefab28 = prefabs['eyes'].instantiate(map, {
    beat: 108,
    position: [15.75, -1.5, 63],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab28.destroyObject(110)
const prefab29 = prefabs['eyes'].instantiate(map, {
    beat: 110,
    position: [15.75, -1.5, 62],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab29.destroyObject(112)
const prefab30 = prefabs['eyes'].instantiate(map, {
    beat: 112,
    position: [15.75, -1.5, 61],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab30.destroyObject(114)
const prefab31 = prefabs['eyes'].instantiate(map, {
    beat: 114,
    position: [15.75, -1.5, 60],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab31.destroyObject(116)
const prefab32 = prefabs['eyes'].instantiate(map, {
    beat: 116,
    position: [15.75, -1.5, 59],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab32.destroyObject(118)
const prefab33 = prefabs['eyes'].instantiate(map, {
    beat: 118,
    position: [15.75, -1.5, 58],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab33.destroyObject(120)
const prefab34 = prefabs['eyes'].instantiate(map, {
    beat: 120,
    position: [15.75, -1.5, 57],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab34.destroyObject(122)
const prefab35 = prefabs['eyes'].instantiate(map, {
    beat: 122,
    position: [15.75, -1.5, 56],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab35.destroyObject(124)
const prefab36 = prefabs['eyes'].instantiate(map, {
    beat: 124,
    position: [15.75, -1.5, 55],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab36.destroyObject(126)
const prefab37 = prefabs['eyes'].instantiate(map, {
    beat: 126,
    position: [15.75, -1.5, 54],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab37.destroyObject(128)
const prefab38 = prefabs['eyes'].instantiate(map, {
    beat: 128,
    position: [15.75, -1.5, 53],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab38.destroyObject(130)
const prefab39 = prefabs['eyes'].instantiate(map, {
    beat: 130,
    position: [15.75, -1.5, 52],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab39.destroyObject(132)
const prefab40 = prefabs['eyes'].instantiate(map, {
    beat: 132,
    position: [15.75, -1.5, 51],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab40.destroyObject(134)
const prefab41 = prefabs['eyes'].instantiate(map, {
    beat: 134,
    position: [15.75, -1.5, 50],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab41.destroyObject(136)
const prefab42 = prefabs['eyes'].instantiate(map, {
    beat: 136,
    position: [15.75, -1.5, 49],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab42.destroyObject(138)
const prefab43 = prefabs['eyes'].instantiate(map, {
    beat: 138,
    position: [15.75, -1.5, 48],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab43.destroyObject(140)
const prefab44 = prefabs['eyes'].instantiate(map, {
    beat: 140,
    position: [15.75, -1.5, 47],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab44.destroyObject(142)
const prefab45 = prefabs['eyes'].instantiate(map, {
    beat: 142,
    position: [15.75, -1.5, 46],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab45.destroyObject(144)
const prefab46 = prefabs['eyes'].instantiate(map, {
    beat: 144,
    position: [15.75, -1.5, 45],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab46.destroyObject(146)
const prefab47 = prefabs['eyes'].instantiate(map, {
    beat: 146,
    position: [15.75, -1.5, 44],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab47.destroyObject(148)
const prefab48 = prefabs['eyes'].instantiate(map, {
    beat: 148,
    position: [15.75, -1.5, 43],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab48.destroyObject(150)
const prefab49 = prefabs['eyes'].instantiate(map, {
    beat: 150,
    position: [15.75, -1.5, 42],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab49.destroyObject(152)
const prefab50 = prefabs['eyes'].instantiate(map, {
    beat: 152,
    position: [15.75, -1.5, 41],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab50.destroyObject(154)
const prefab51 = prefabs['eyes'].instantiate(map, {
    beat: 154,
    position: [15.75, -1.5, 40],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab51.destroyObject(156)
const prefab52 = prefabs['eyes'].instantiate(map, {
    beat: 156,
    position: [15.75, -1.5, 39],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab52.destroyObject(158)
const prefab53 = prefabs['eyes'].instantiate(map, {
    beat: 158,
    position: [15.75, -1.5, 38],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab53.destroyObject(160)
const prefab54 = prefabs['eyes'].instantiate(map, {
    beat: 160,
    position: [15.75, -1.5, 37],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab54.destroyObject(162)
const prefab55 = prefabs['eyes'].instantiate(map, {
    beat: 162,
    position: [15.75, -1.5, 36],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab55.destroyObject(164)
const prefab56 = prefabs['eyes'].instantiate(map, {
    beat: 164,
    position: [15.75, -1.5, 35],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab56.destroyObject(166)
const prefab57 = prefabs['eyes'].instantiate(map, {
    beat: 166,
    position: [15.75, -1.5, 34],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab57.destroyObject(168)
const prefab58 = prefabs['eyes'].instantiate(map, {
    beat: 168,
    position: [15.75, -1.5, 33],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab58.destroyObject(170)
const prefab59 = prefabs['eyes'].instantiate(map, {
    beat: 170,
    position: [15.75, -1.5, 32],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab59.destroyObject(172)
const prefab60 = prefabs['eyes'].instantiate(map, {
    beat: 172,
    position: [15.75, -1.5, 31],
    rotation: [0, 90, 0],
    scale: [3, 3, 3]
})
prefab60.destroyObject(174)


pipeline.export({
    outputDirectory: '../OutputMaps'
})