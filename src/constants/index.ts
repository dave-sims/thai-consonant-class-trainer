import Colors from './Colors'

interface Symbol {
    unicode: string,
    character: string,
    symbolType: SymbolType,
    consonantClass: ConsonantClass | null,
    nameThai: string,
    nameRTGS: string,
    meaning: string,
}

type ConsonantClass = 'low' | 'mid' | 'high'

type SymbolType = 'consonant' | 'vowel' | 'tonemark' | 'other'

const ThaiAlphabet: Array<Symbol> = [
    { unicode: "U+0E01", character: "ก", symbolType: 'consonant', consonantClass: 'mid', nameThai: 'ก ไก่', nameRTGS: 'ko kai', meaning: 'chicken' },
    { unicode: "U+0E02", character: "ข", symbolType: 'consonant', consonantClass: 'high', nameThai: 'ข ไข่', nameRTGS: 'kho khai', meaning: 'egg' },
    { unicode: "U+0E03", character: "ฃ", symbolType: 'consonant', consonantClass: 'high', nameThai: 'ฃ ขวด', nameRTGS: 'kho khuat', meaning: 'bottle' },
    { unicode: "U+0E04", character: "ค", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ค ควาย', nameRTGS: 'kho khwai', meaning: 'buffalo' },
    { unicode: "U+0E05", character: "ฅ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ฅ คน', nameRTGS: 'kho khon', meaning: 'person' },
    { unicode: "U+0E06", character: "ฆ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ฆ ระฆัง', nameRTGS: 'kho ra-khang', meaning: 'bell' },
    { unicode: "U+0E07", character: "ง", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ง งู', nameRTGS: 'ngo ngu', meaning: 'snake' },
    { unicode: "U+0E08", character: "จ", symbolType: 'consonant', consonantClass: 'mid', nameThai: 'จ จาน', nameRTGS: 'cho chan', meaning: 'plate' },
    { unicode: "U+0E09", character: "ฉ", symbolType: 'consonant', consonantClass: 'high', nameThai: 'ฉ ฉิ่ง', nameRTGS: 'cho ching', meaning: 'cymbals' },
    { unicode: "U+0E0A", character: "ช", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ช ช้าง', nameRTGS: 'cho chang', meaning: 'elephant' },
    { unicode: "U+0E0B", character: "ซ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ซ โซ่', nameRTGS: 'so so', meaning: 'chain' },
    { unicode: "U+0E0C", character: "ฌ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ฌ เฌอ', nameRTGS: 'cho choe', meaning: 'tree' },
    { unicode: "U+0E0D", character: "ญ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ญ หญิง', nameRTGS: 'yo ying	woman', meaning: 'woman' },
    { unicode: "U+0E0E", character: "ฎ", symbolType: 'consonant', consonantClass: 'mid', nameThai: 'ฎ ชฎา', nameRTGS: 'do cha-da', meaning: 'headdress' },
    { unicode: "U+0E0F", character: "ฏ", symbolType: 'consonant', consonantClass: 'mid', nameThai: 'ฏ ปฏัก', nameRTGS: 'to pa-tak', meaning: 'goad' },
    { unicode: "U+0E10", character: "ฐ", symbolType: 'consonant', consonantClass: 'high', nameThai: 'ฐ ฐาน', nameRTGS: 'tho than', meaning: 'pedestal' },
    { unicode: "U+0E11", character: "ฑ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ฑ มณโฑ', nameRTGS: 'tho montho', meaning: 'Montho' },
    { unicode: "U+0E12", character: "ฒ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ฒ ผู้เฒ่า', nameRTGS: 'tho phu-thao', meaning: 'elder' },
    { unicode: "U+0E13", character: "ณ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ณ เณร', nameRTGS: 'no nen', meaning: 'samanera' },
    { unicode: "U+0E14", character: "ด", symbolType: 'consonant', consonantClass: 'mid', nameThai: 'ด เด็ก', nameRTGS: 'do dek', meaning: 'child' },
    { unicode: "U+0E15", character: "ต", symbolType: 'consonant', consonantClass: 'mid', nameThai: 'ต เต่า', nameRTGS: 'to tao', meaning: 'turtle' },
    { unicode: "U+0E16", character: "ถ", symbolType: 'consonant', consonantClass: 'high', nameThai: 'ถ ถุง', nameRTGS: 'tho thung', meaning: 'sack' },
    { unicode: "U+0E17", character: "ท", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ท ทหาร', nameRTGS: 'tho thahan', meaning: 'soldier' },
    { unicode: "U+0E18", character: "ธ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ธ ธง', nameRTGS: 'tho thong', meaning: 'flag' },
    { unicode: "U+0E19", character: "น", symbolType: 'consonant', consonantClass: 'low', nameThai: 'น หนู', nameRTGS: 'no nu', meaning: 'mouse' },
    { unicode: "U+0E1A", character: "บ", symbolType: 'consonant', consonantClass: 'mid', nameThai: 'บ ใบไม้', nameRTGS: 'bo baimai', meaning: 'leaf' },
    { unicode: "U+0E1B", character: "ป", symbolType: 'consonant', consonantClass: 'mid', nameThai: 'ป ปลา', nameRTGS: 'po pla', meaning: 'fish' },
    { unicode: "U+0E1C", character: "ผ", symbolType: 'consonant', consonantClass: 'high', nameThai: 'ผ ผึ้ง', nameRTGS: 'pho phueng', meaning: 'bee' },
    { unicode: "U+0E1D", character: "ฝ", symbolType: 'consonant', consonantClass: 'high', nameThai: 'ฝ ฝา', nameRTGS: 'fo fa', meaning: 'lid' },
    { unicode: "U+0E1E", character: "พ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'พ พาน', nameRTGS: 'pho phan', meaning: 'phan' },
    { unicode: "U+0E1F", character: "ฟ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ฟ ฟัน', nameRTGS: 'fo fan', meaning: 'teeth' },
    { unicode: "U+0E20", character: "ภ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ภ สำเภา', nameRTGS: 'pho sam-phao', meaning: 'junk' },
    { unicode: "U+0E21", character: "ม", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ม ม้า', nameRTGS: 'mo ma', meaning: 'horse' },
    { unicode: "U+0E22", character: "ย", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ย ยักษ์', nameRTGS: 'yo yak', meaning: 'giant' },
    { unicode: "U+0E23", character: "ร", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ร เรือ', nameRTGS: 'ro ruea	', meaning: 'boat' },
    { unicode: "U+0E25", character: "ล", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ล ลิง', nameRTGS: 'lo ling', meaning: 'monkey' },
    { unicode: "U+0E27", character: "ว", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ว แหวน', nameRTGS: 'wo waen', meaning: 'ring' },
    { unicode: "U+0E28", character: "ศ", symbolType: 'consonant', consonantClass: 'high', nameThai: 'ศ ศาลา', nameRTGS: 'so sala', meaning: 'sala' },
    { unicode: "U+0E29", character: "ษ", symbolType: 'consonant', consonantClass: 'high', nameThai: 'ษ ฤๅษี', nameRTGS: 'so rue-si', meaning: 'hermit' },
    { unicode: "U+0E2A", character: "ส", symbolType: 'consonant', consonantClass: 'high', nameThai: 'ส เสือ', nameRTGS: 'so suea', meaning: 'tiger' },
    { unicode: "U+0E2B", character: "ห", symbolType: 'consonant', consonantClass: 'high', nameThai: 'ห หีบ', nameRTGS: 'ho hip', meaning: 'chest' },
    { unicode: "U+0E2C", character: "ฬ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ฬ จุฬา', nameRTGS: 'lo chu-la', meaning: 'kite' },
    { unicode: "U+0E2D", character: "อ", symbolType: 'consonant', consonantClass: 'mid', nameThai: 'อ อ่าง', nameRTGS: 'o ang', meaning: 'basin' },
    { unicode: "U+0E2E", character: "ฮ", symbolType: 'consonant', consonantClass: 'low', nameThai: 'ฮ นกฮูก', nameRTGS: 'ho nok-huk', meaning: 'owl' },
    // { unicode: "U+0E24", character: "ฤ", symbolType: 'consonant', consonantClass: '', nameThai: '', nameRTGS: '', meaning: '' },
    // { unicode: "U+0E26", character: "ฦ", symbolType: 'consonant', consonantClass: '', nameThai: '', nameRTGS: '', meaning: '' },
];



// U+0E01	ก	0xe0 0xb8 0x81	THAI CHARACTER KO KAI
// U+0E02	ข	0xe0 0xb8 0x82	THAI CHARACTER KHO KHAI
// U+0E03	ฃ	0xe0 0xb8 0x83	THAI CHARACTER KHO KHUAT
// U+0E04	ค	0xe0 0xb8 0x84	THAI CHARACTER KHO KHWAI
// U+0E05	ฅ	0xe0 0xb8 0x85	THAI CHARACTER KHO KHON
// U+0E06	ฆ	0xe0 0xb8 0x86	THAI CHARACTER KHO RAKHANG
// U+0E07	ง	0xe0 0xb8 0x87	THAI CHARACTER NGO NGU
// U+0E08	จ	0xe0 0xb8 0x88	THAI CHARACTER CHO CHAN
// U+0E09	ฉ	0xe0 0xb8 0x89	THAI CHARACTER CHO CHING
// U+0E0A	ช	0xe0 0xb8 0x8a	THAI CHARACTER CHO CHANG
// U+0E0B	ซ	0xe0 0xb8 0x8b	THAI CHARACTER SO SO
// U+0E0C	ฌ	0xe0 0xb8 0x8c	THAI CHARACTER CHO CHOE
// U+0E0D	ญ	0xe0 0xb8 0x8d	THAI CHARACTER YO YING
// U+0E0E	ฎ	0xe0 0xb8 0x8e	THAI CHARACTER DO CHADA
// U+0E0F	ฏ	0xe0 0xb8 0x8f	THAI CHARACTER TO PATAK
// U+0E10	ฐ	0xe0 0xb8 0x90	THAI CHARACTER THO THAN
// U+0E11	ฑ	0xe0 0xb8 0x91	THAI CHARACTER THO NANGMONTHO
// U+0E12	ฒ	0xe0 0xb8 0x92	THAI CHARACTER THO PHUTHAO
// U+0E13	ณ	0xe0 0xb8 0x93	THAI CHARACTER NO NEN
// U+0E14	ด	0xe0 0xb8 0x94	THAI CHARACTER DO DEK
// U+0E15	ต	0xe0 0xb8 0x95	THAI CHARACTER TO TAO
// U+0E16	ถ	0xe0 0xb8 0x96	THAI CHARACTER THO THUNG
// U+0E17	ท	0xe0 0xb8 0x97	THAI CHARACTER THO THAHAN
// U+0E18	ธ	0xe0 0xb8 0x98	THAI CHARACTER THO THONG
// U+0E19	น	0xe0 0xb8 0x99	THAI CHARACTER NO NU
// U+0E1A	บ	0xe0 0xb8 0x9a	THAI CHARACTER BO BAIMAI
// U+0E1B	ป	0xe0 0xb8 0x9b	THAI CHARACTER PO PLA
// U+0E1C	ผ	0xe0 0xb8 0x9c	THAI CHARACTER PHO PHUNG
// U+0E1D	ฝ	0xe0 0xb8 0x9d	THAI CHARACTER FO FA
// U+0E1E	พ	0xe0 0xb8 0x9e	THAI CHARACTER PHO PHAN
// U+0E1F	ฟ	0xe0 0xb8 0x9f	THAI CHARACTER FO FAN
// U+0E20	ภ	0xe0 0xb8 0xa0	THAI CHARACTER PHO SAMPHAO
// U+0E21	ม	0xe0 0xb8 0xa1	THAI CHARACTER MO MA
// U+0E22	ย	0xe0 0xb8 0xa2	THAI CHARACTER YO YAK
// U+0E23	ร	0xe0 0xb8 0xa3	THAI CHARACTER RO RUA
// U+0E24	ฤ	0xe0 0xb8 0xa4	THAI CHARACTER RU
// U+0E25	ล	0xe0 0xb8 0xa5	THAI CHARACTER LO LING
// U+0E26	ฦ	0xe0 0xb8 0xa6	THAI CHARACTER LU
// U+0E27	ว	0xe0 0xb8 0xa7	THAI CHARACTER WO WAEN
// U+0E28	ศ	0xe0 0xb8 0xa8	THAI CHARACTER SO SALA
// U+0E29	ษ	0xe0 0xb8 0xa9	THAI CHARACTER SO RUSI
// U+0E2A	ส	0xe0 0xb8 0xaa	THAI CHARACTER SO SUA
// U+0E2B	ห	0xe0 0xb8 0xab	THAI CHARACTER HO HIP
// U+0E2C	ฬ	0xe0 0xb8 0xac	THAI CHARACTER LO CHULA
// U+0E2D	อ	0xe0 0xb8 0xad	THAI CHARACTER O ANG
// U+0E2E	ฮ	0xe0 0xb8 0xae	THAI CHARACTER HO NOKHUK
// U+0E2F	ฯ	0xe0 0xb8 0xaf	THAI CHARACTER PAIYANNOI
// U+0E30	ะ	0xe0 0xb8 0xb0	THAI CHARACTER SARA A
// U+0E31	ั	0xe0 0xb8 0xb1	THAI CHARACTER MAI HAN-AKAT
// U+0E32	า	0xe0 0xb8 0xb2	THAI CHARACTER SARA AA
// U+0E33	ำ	0xe0 0xb8 0xb3	THAI CHARACTER SARA AM
// U+0E34	ิ	0xe0 0xb8 0xb4	THAI CHARACTER SARA I
// U+0E35	ี	0xe0 0xb8 0xb5	THAI CHARACTER SARA II
// U+0E36	ึ	0xe0 0xb8 0xb6	THAI CHARACTER SARA UE
// U+0E37	ื	0xe0 0xb8 0xb7	THAI CHARACTER SARA UEE
// U+0E38	ุ	0xe0 0xb8 0xb8	THAI CHARACTER SARA U
// U+0E39	ู	0xe0 0xb8 0xb9	THAI CHARACTER SARA UU
// U+0E3A	ฺ	0xe0 0xb8 0xba	THAI CHARACTER PHINTHU
// U+0E3B	฻	0xe0 0xb8 0xbb	
// U+0E3C	฼	0xe0 0xb8 0xbc	
// U+0E3D	฽	0xe0 0xb8 0xbd	
// U+0E3E	฾	0xe0 0xb8 0xbe	
// U+0E3F	฿	0xe0 0xb8 0xbf	THAI CURRENCY SYMBOL BAHT
// U+0E40	เ	0xe0 0xb9 0x80	THAI CHARACTER SARA E
// U+0E41	แ	0xe0 0xb9 0x81	THAI CHARACTER SARA AE
// U+0E42	โ	0xe0 0xb9 0x82	THAI CHARACTER SARA O
// U+0E43	ใ	0xe0 0xb9 0x83	THAI CHARACTER SARA AI MAIMUAN
// U+0E44	ไ	0xe0 0xb9 0x84	THAI CHARACTER SARA AI MAIMALAI
// U+0E45	ๅ	0xe0 0xb9 0x85	THAI CHARACTER LAKKHANGYAO
// U+0E46	ๆ	0xe0 0xb9 0x86	THAI CHARACTER MAIYAMOK
// U+0E47	็	0xe0 0xb9 0x87	THAI CHARACTER MAITAIKHU
// U+0E48	่	0xe0 0xb9 0x88	THAI CHARACTER MAI EK
// U+0E49	้	0xe0 0xb9 0x89	THAI CHARACTER MAI THO
// U+0E4A	๊	0xe0 0xb9 0x8a	THAI CHARACTER MAI TRI
// U+0E4B	๋	0xe0 0xb9 0x8b	THAI CHARACTER MAI CHATTAWA
// U+0E4C	์	0xe0 0xb9 0x8c	THAI CHARACTER THANTHAKHAT
// U+0E4D	ํ	0xe0 0xb9 0x8d	THAI CHARACTER NIKHAHIT
// U+0E4E	๎	0xe0 0xb9 0x8e	THAI CHARACTER YAMAKKAN
// U+0E4F	๏	0xe0 0xb9 0x8f	THAI CHARACTER FONGMAN
// U+0E50	๐	0xe0 0xb9 0x90	THAI DIGIT ZERO
// U+0E51	๑	0xe0 0xb9 0x91	THAI DIGIT ONE
// U+0E52	๒	0xe0 0xb9 0x92	THAI DIGIT TWO
// U+0E53	๓	0xe0 0xb9 0x93	THAI DIGIT THREE
// U+0E54	๔	0xe0 0xb9 0x94	THAI DIGIT FOUR
// U+0E55	๕	0xe0 0xb9 0x95	THAI DIGIT FIVE
// U+0E56	๖	0xe0 0xb9 0x96	THAI DIGIT SIX
// U+0E57	๗	0xe0 0xb9 0x97	THAI DIGIT SEVEN
// U+0E58	๘	0xe0 0xb9 0x98	THAI DIGIT EIGHT
// U+0E59	๙	0xe0 0xb9 0x99	THAI DIGIT NINE
// U+0E5A	๚	0xe0 0xb9 0x9a	THAI CHARACTER ANGKHANKHU
// U+0E5B	๛	0xe0 0xb9 0x9b	THAI CHARACTER KHOMUT

export {
    Colors,
    ThaiAlphabet,
}