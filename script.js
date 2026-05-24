// =====  CONFIG  =====
const COUNTRIES = [
  "Portugal","Spain","Ireland","NIreland","UK","Scotland","Wales","Greenland","Iceland",
  "Norway","Finland","Sweden","Belgium","Luxembourg","Netherlands",
  "Denmark","Germany","France","Italy","Austria","Czechia","Hungary",
  "Slovakia","Slovenia","Bosnia","Croatia","Kosovo","Albania",
  "Montenegro","NorthMacedonia","Greece","Bulgaria","Turkey","Romania",
  "Moldova","Ukraine","Georgia","Armenia","Lithuania","Latvia",
  "Estonia","Poland","Cyprus","Switzerland","Serbia","Malta"
];

// --- Fit settings ---
const NATURAL_VIEWBOX = { x: 0, y: 0, width: 4504, height: 3744 }; // from your <svg>

// ===== EU GROUP META (code → name/logo) =====
const EU_GROUPS = {
  LEFT:  {
    name:"The Left", logo:"EUGroups/LEFT.png",
    prior:{ economic:-2.7, social:-2.2, eu:-0.8 }
  },
  GREENS:{
    name:"Greens/EFA", logo:"EUGroups/GreensEFA.png",
    prior:{ economic:-1.2, social:-2.4, eu: 2.7 }
  },
  "S&D":{
    name:"S&D", logo:"EUGroups/SandD.png",
    prior:{ economic:-0.7, social:-1.3, eu: 2.3 }
  },
  RENEW:{
    name:"Renew", logo:"EUGroups/RENEW.png",
    prior:{ economic: 1.1, social:-0.2, eu: 2.6 }
  },
  EPP:{
    name:"EPP", logo:"EUGroups/EPP.png",
    prior:{ economic: 1.6, social: 1.0, eu: 2.0 }
  },
  ECR:{
    name:"ECR", logo:"EUGroups/ECR.png",
    prior:{ economic: 0.8, social: 2.2, eu:-1.0 }
  },
  PFE:{
    name:"Patriots for Europe", logo:"EUGroups/PFE.png",
    prior:{ economic: 0.2, social: 2.5, eu:-2.5 }
  },
  ESN:{
    name:"Non-attached/ESN", logo:"EUGroups/ESN.png",
    prior:{ economic: 0.8, social:3, eu:-3 }
  },
};


// ===== PARTY DB (placeholder; add real data per country) =====
const PARTY_DB = {
  DEFAULT: [
  { id:"left",   name:"The Left",          color:"#B51C21", logo:"assets/placeholder.png", group:"LEFT",   econ:-2.7, social:-2.2, eu:-0.8 },
  { id:"greens", name:"Greens/EFA",        color:"#00B500", logo:"assets/placeholder.png", group:"GREENS", econ:-1.2, social:-2.4, eu: 2.7 },
  { id:"sd",     name:"S&D",               color:"#D70000", logo:"assets/placeholder.png", group:"S&D",    econ:-0.7, social:-1.3, eu: 2.3 },
  { id:"renew",  name:"Renew",      color:"#FDD701", logo:"assets/placeholder.png", group:"RENEW",  econ: 1.2, social:-1.0, eu: 2.7 },
  { id:"epp",    name:"EPP",               color:"#3399FE", logo:"assets/placeholder.png", group:"EPP",    econ: 1.5, social: 1.0, eu: 2.4 },
  { id:"ecr",    name:"ECR",               color:"#1A6CA8", logo:"assets/placeholder.png", group:"ECR",    econ: 0.8, social: 1.7, eu:-0.5 },
  { id:"pfe",    name:"PfE", color:"#301C59", logo:"assets/placeholder.png", group:"PFE",  econ: 0.2, social:-2.0, eu:-1.7 },
  { id:"esn",    name:"ESN",  color:"#001B37", logo:"assets/placeholder.png", group:"ESN",    econ: 2.0, social:-2.7, eu:-2.7 },
],
France: [
  { id:"lfi", name:"LFI", color:"#592680", logo:"france/fr_LFI_logo.png", group:"LEFT", econ:-2.3, social:-2.3, eu:-1 },
  { id:"eelv", name:"EELV", color:"#53B46F", logo:"france/fr_EELV_logo.png", group:"GREENS", econ:-1.5, social:-2.5, eu:2.9 },
  { id:"pcf", name:"PCF", color:"#EC1F2F", logo:"france/fr_PCF_logo.png", group:"LEFT", econ:-2.8, social:-1.5, eu:-1.8 },
  { id:"ps", name:"PS", color:"#F80159", logo:"france/fr_PS_logo.png", group:"S&D", econ:-1.2, social:-1.7, eu:2.5 },
  { id:"re", name:"RE", color:"#FFD600", logo:"france/fr_RE_logo.png", group:"RENEW", econ:1.5, social:-0.2, eu:2.5 },
  { id:"modem", name:"MoDem", color:"#F1522A", logo:"france/fr_MoDem_logo.png", group:"RENEW", econ:0.8, social:0.5, eu:2.7 },
  { id:"hor", name:"HOR", color:"#0000B9", logo:"france/fr_HOR_logo.png", group:"RENEW", econ:2, social:1, eu:2.2 },
  { id:"lr", name:"LR", color:"#0043B0", logo:"france/fr_LR_logo.png", group:"EPP", econ:1.8, social:1.7, eu:0.8 },
  { id:"dlf", name:"DLF", color:"#0265AC", logo:"france/fr_DLF_logo.png", group:"ECR", econ:0.2, social:2.3, eu:-2.5 },
  { id:"rn", name:"RN", color:"#254671", logo:"france/fr_RN_logo.png", group:"PFE", econ:0.6, social:2.6, eu:-2.2 },
  { id:"rec", name:"REC", color:"#0B0B66", logo:"france/fr_REC_logo.png", group:"ESN", econ:0.3, social:2.8, eu:-2.6 },

  { id:"generation-s", name:"Generation.s", color:"#CC1E54", logo:"france/minor/minor_fr_generation.s_logo.png", group:"GREENS", econ:-1.8, social:-2.4, eu:3, tier:"minor" },
  { id:"utiles", name:"UTILES", color:"#008967", logo:"france/minor/minor_fr_utiles_logo.png", econ:0.4, social:-0.4, eu:1.6, tier:"minor" },
  { id:"laf", name:"LAF", color:"#154778", logo:"france/minor/minor_fr_LAF_logo.png", group:"PFE", econ:0.7, social:2.9, eu:-2.4, tier:"minor" },
  { id:"lapres", name:"L'apres", color:"#8075D7", logo:"france/minor/minor_fr_L'apres_logo.png", group:"LEFT", econ:-2.2, social:-2.5, eu:0.6, tier:"minor" },
  { id:"idl", name:"IDL", color:"#1F5DA6", logo:"france/minor/minor_fr_IDL_logo.png", group:"ECR", econ:2.4, social:2.9, eu:-1.8, tier:"minor" },
  { id:"pp", name:"PP", color:"#FFF100", logo:"france/minor/minor_fr_PP_logo.png", group:"S&D", econ:-0.9, social:-2, eu:2.9, tier:"minor" },
  { id:"lc", name:"LC", color:"#6F97CF", logo:"france/minor/minor_fr_LC_logo.png", group:"EPP", econ:1.3, social:0.8, eu:2.2, tier:"minor" },
  { id:"ne", name:"NE", color:"#032F67", logo:"france/minor/minor_fr_NE_logo.png", group:"EPP", econ:2.6, social:2.1, eu:1.2, tier:"minor" },
  { id:"ac", name:"AC", color:"#CCE7F1", logo:"france/minor/minor_fr_AC_logo.png", group:"RENEW", econ:0.9, social:0.4, eu:2.4, tier:"minor" },
  { id:"t44", name:"T44", color:"#00737A", logo:"france/minor/minor_fr_T44_logo.png", group:"GREENS", econ:-1.2, social:-2, eu:1, tier:"minor" },
  { id:"ec", name:"EC", color:"#2E3657", logo:"france/minor/minor_fr_EC_logo.png", group:["RENEW","GREENS"], econ:0.3, social:-1.4, eu:2.6, tier:"minor" },
  { id:"ge", name:"GE", color:"#5ABB48", logo:"france/minor/minor_fr_GE_logo.png", group:"GREENS", econ:-2.3, social:-2.2, eu:2.4, tier:"minor" },
  { id:"rev", name:"REV", color:"#00AFB3", logo:"france/minor/minor_fr_REV_logo.png", group:"LEFT", econ:-2.7, social:-2.6, eu:-0.4, tier:"minor" },
  { id:"poi", name:"POI", color:"#FF4636", logo:"france/minor/minor_fr_POI_logo.png", group:"LEFT", econ:-3, social:-1.7, eu:-2.8, tier:"minor" },
  { id:"grs", name:"GRS", color:"#D23150", logo:"france/minor/minor_fr_GRS_logo.png", group:"LEFT", econ:-2.2, social:-1.7, eu:-0.9, tier:"minor" },
  { id:"d", name:"D!", color:"#FF5258", logo:"france/minor/minor_fr_D!_logo.png", group:"LEFT", econ:-2.4, social:-1.8, eu:-1.1, tier:"minor" },
  { id:"prg", name:"PRG", color:"#F1C40E", logo:"france/minor/minor_fr_PRG_logo.png", group:"S&D", econ:-0.6, social:-1.2, eu:2.4, tier:"minor" },
  { id:"mdp", name:"MdP", color:"#9D005E", logo:"france/minor/minor_fr_MdP_logo.png", econ:-1.5, social:-1.8, eu:1.8, tier:"minor" },
  { id:"ehbai", name:"EHBai", color:"#58B738", logo:"france/minor/minor_fr_EHBai_logo.png", group:["GREENS","LEFT"], econ:-2, social:-2.3, eu:0.8, tier:"minor" },
  { id:"fac", name:"FaC", color:"#FFB033", logo:"france/minor/minor_fr_FaC_logo.png", group:"GREENS", econ:-1, social:-1.6, eu:2.2, tier:"minor" },
  { id:"ccb", name:"CCB", color:"#2B5DF2", logo:"france/minor/minor_fr_CCB_logo.png", econ:1.2, social:1.5, eu:1.2, tier:"minor" },
  { id:"tavini", name:"Tavini", color:"#02B3DC", logo:"france/minor/minor_fr_Tavini_logo.png", group:"LEFT", econ:-1.8, social:-1.6, eu:-2.4, tier:"minor" },
  { id:"ppdg", name:"PPDG", color:"#09AD56", logo:"france/minor/minor_fr_PPDG_logo.png", group:"S&D", econ:-1.5, social:-1.3, eu:1.8, tier:"minor" },
  { id:"ppm", name:"PPM", color:"#E9383F", logo:"france/minor/minor_fr_PPM_logo.png", group:"S&D", econ:-1.6, social:-1.5, eu:1.8, tier:"minor" },
  { id:"mim", name:"MIM", color:"#000000", logo:"france/minor/minor_fr_MIM_logo.png", econ:-1.7, social:-1.4, eu:-1.2, tier:"minor" },
  { id:"plr", name:"PLR", color:"#B12674", logo:"france/minor/minor_fr_PLR_logo.png", group:"LEFT", econ:-2.1, social:-1.5, eu:-0.8, tier:"minor" },
  { id:"pirates", name:"Pirates", color:"#000000", logo:"france/minor/minor_fr_Pirates_logo.png", group:"GREENS", econ:-0.8, social:-2.4, eu:1.8, tier:"minor" },
  { id:"enfants", name:"Enfants", color:"#3D8998", logo:"france/minor/minor_fr_Enfants_logo.png", econ:-0.6, social:-1.8, eu:2.8, tier:"minor" },
  { id:"nd", name:"ND", color:"#C13388", logo:"france/minor/minor_fr_ND_logo.png", group:"S&D", econ:-1.7, social:-1.8, eu:2.7, tier:"minor" },
  { id:"npa", name:"NPA", color:"#CC0000", logo:"france/minor/minor_fr_NPA_logo.png", group:"LEFT", econ:-3, social:-2.7, eu:-2.3, tier:"minor" },
  { id:"pg", name:"PG", color:"#B3081B", logo:"france/minor/minor_fr_PG_logo.png", group:"LEFT", econ:-2.4, social:-2.2, eu:-1.3, tier:"minor" },
  { id:"udi", name:"UDI", color:"#5F468F", logo:"france/minor/minor_fr_udi_logo.png", group:"RENEW", econ:1, social:0.7, eu:2.6, tier:"minor" },
  { id:"pr", name:"PR", color:"#3362A3", logo:"france/minor/minor_fr_PR_logo.png", group:"RENEW", econ:0.8, social:-0.2, eu:2.9, tier:"minor" },
  { id:"udr", name:"udr", color:"#004B8F", logo:"france/minor/minor_fr_udr_logo.png", group:"PFE", econ:2.2, social:2.4, eu:-2.3, tier:"minor" },
  { id:"volt", name:"Volt", color:"#502379", logo:"france/minor/minor_fr_Volt_logo.png", group:"GREENS", econ:0.9, social:-1.6, eu:3, tier:"minor" },
  { id:"lo", name:"LO", color:"#ED1B24", logo:"france/minor/minor_fr_LO_logo.png", econ:-3, social:-2.5, eu:-2, tier:"minor" },
  { id:"prcf", name:"PRCF", color:"#FF0000", logo:"france/minor/minor_fr_PRCF_logo.png", econ:-3, social:-1.2, eu:-3, tier:"minor" },
  { id:"pcrf", name:"PCRF", color:"#FA1102", logo:"france/minor/minor_fr_PCRF_logo.png", econ:-3, social:-0.8, eu:-3, tier:"minor" },
  { id:"prc", name:"PRC", color:"#F60806", logo:"france/minor/minor_fr_PRC_logo.png", econ:-3, social:-1, eu:-3, tier:"minor" },
  { id:"pt", name:"PT", color:"#BD3A26", logo:"france/minor/minor_fr_PT_logo.png", econ:-3, social:-1.5, eu:-2.7, tier:"minor" },
  { id:"equinoxe", name:"Equinoxe", color:"#FFD412", logo:"france/minor/minor_fr_Equinoxe_logo.png", econ:-0.8, social:-0.8, eu:2.1, tier:"minor" },
  { id:"udmf", name:"UDMF", color:"#FFFF00", logo:"france/minor/minor_fr_UDMF_logo.png", econ:-1.8, social:-0.9, eu:-0.6, tier:"minor" },
  { id:"pb", name:"PB", color:"#74B6BA", logo:"france/minor/minor_fr_PB_logo.png", econ:0.7, social:0.1, eu:2.8, tier:"minor" },
  { id:"trefle", name:"Trefle", color:"#00672F", logo:"france/minor/minor_fr_Trefle_logo.png", econ:1.2, social:1.4, eu:0.8, tier:"minor" },
  { id:"res", name:"RES!", color:"#034EA1", logo:"france/minor/minor_fr_RES!_logo.png", econ:-0.7, social:0.9, eu:-1.3, tier:"minor" },
  { id:"sp", name:"SP", color:"#FFFFFF", logo:"france/minor/minor_fr_SP_logo.png", econ:-2.2, social:2.2, eu:-3, tier:"minor" },
  { id:"ln", name:"LN", color:"#0E244A", logo:"france/minor/minor_fr_LN_logo.png", econ:-0.8, social:3, eu:-3, tier:"minor" },
  { id:"lp", name:"LP", color:"#FF9101", logo:"france/minor/minor_fr_LP_logo.png", econ:-0.4, social:1.7, eu:3, tier:"minor" },
  { id:"via", name:"VIA", color:"#003B5C", logo:"france/minor/minor_fr_VIA_logo.png", group:"ECR", econ:0.8, social:2.8, eu:-2.4, tier:"minor" },
  { id:"pdf", name:"PDF", color:"#FFFFFF", logo:"france/minor/minor_fr_PDF_logo.png", econ:1.3, social:3, eu:-1.4, tier:"minor" },
  { id:"upr", name:"UPR", color:"#118088", logo:"france/minor/minor_fr_UPR_logo.png", econ:-0.5, social:0.3, eu:-3, tier:"minor" },
  { id:"lb", name:"LB", color:"#021F61", logo:"france/minor/minor_fr_LB_logo.png", econ:-1, social:0.7, eu:0.8, tier:"minor" },
  { id:"pa", name:"PA", color:"#9C0D99", logo:"france/minor/minor_fr_PA_logo.png", group:"LEFT", econ:-1.8, social:-2.1, eu:1.2, tier:"minor" },
  { id:"progres", name:"Progres", color:"#EB008B", logo:"france/minor/minor_fr_Progres_logo.png", group:"LEFT", econ:-1.6, social:-1.5, eu:-1.2, tier:"minor" },
  { id:"poc", name:"POC", color:"#F7B616", logo:"france/minor/minor_fr_POC_logo.png", group:"GREENS", econ:-1.7, social:-2.3, eu:2.8, tier:"minor" },
  { id:"pnc", name:"PNC", color:"#ED7505", logo:"france/minor/minor_fr_PNC_logo.png", group:"GREENS", econ:-0.2, social:-0.3, eu:1.8, tier:"minor" },
  { id:"udb", name:"UDB", color:"#F5CD19", logo:"france/minor/minor_fr_UDB_logo.png", group:"GREENS", econ:-1.9, social:-2.4, eu:2.9, tier:"minor" },
],
Italy: [
  { id:"fdi",  name:"FdI",  color:"#014171", logo:"italy/it_FdI_logo.png",  group:"ECR",    econ: 1.8, social: 2.4, eu:-0.8 },
  { id:"pd",   name:"PD",   color:"#E91D24", logo:"italy/it_PD_logo.png",   group:"S&D",    econ:-1.3, social:-1.8, eu: 2.6 },
  { id:"m5s",  name:"M5S",  color:"#D8C517", logo:"italy/it_M5S_logo.png",  group:"LEFT",   econ:-1.7, social:-1.0, eu:-0.6 },
  { id:"lega", name:"LEGA", color:"#212882", logo:"italy/it_LEGA_logo.png", group:"PFE",    econ: 1.0, social: 2.2, eu:-1.9 },
  { id:"fi",   name:"FI",   color:"#0087DC", logo:"italy/it_FI_logo.png",   group:"EPP",    econ: 2.0, social: 1.3, eu: 1.4 },
  { id:"a",    name:"Azione", color:"#023F92", logo:"italy/it_A_logo.png",   group:"RENEW",  econ: 1.5, social:-0.5, eu: 2.7 },
  { id:"iv",   name:"IV",   color:"#D42894", logo:"italy/it_IV_logo.png",   group:"RENEW",  econ: 1.5, social:-0.2, eu: 2.8 },
  { id:"si",   name:"SI",   color:"#EF3E3E", logo:"italy/it_SI_logo.png",   group:"LEFT",   econ:-2.3, social:-2.0, eu: 1.5 },
  { id:"ev",   name:"EV",   color:"#53B65B", logo:"italy/it_EV_logo.png",   group:"GREENS", econ:-1.5, social:-2.3, eu: 2.4 },
  { id:"pe",   name:"+Europa", color:"#FFC114", logo:"italy/it_pE_logo.png", group:"RENEW", econ: 1.2, social:-1.5, eu: 3.0 },
  { id:"nm",   name:"NM", color:"#2149A7", logo:"italy/it_NM_logo.png", group:"EPP", econ: 1.5, social: 1.5, eu: 1.8 },
],
Portugal: [
  { id:"psd",     name:"PSD",     color:"#F08A00", logo:"portugal/pt_PSD_logo.png",     group:"EPP",    econ: 1.2,  social: 0.8,  eu: 2.3 },
  { id:"cdspp",   name:"CDS-PP",  color:"#0093DD", logo:"portugal/pt_CDS-PP_logo.png",  group:"EPP",    econ: 1.8,  social: 2.0,  eu: 1.0 },
  { id:"ppm",     name:"PPM",     color:"#2A5392", logo:"portugal/pt_PPM_logo.png",     group:"ECR",    econ: 1.0,  social: 2.3,  eu:-1.0 },
  { id:"ps",      name:"PS",      color:"#E31E25", logo:"portugal/pt_PS_logo.png",      group:"S&D",    econ:-1.0,  social:-1.5,  eu: 2.0 },
  { id:"chega",   name:"CHEGA",   color:"#222358", logo:"portugal/pt_CHEGA_logo.png",   group:"PFE",    econ: 1.5,  social: 2.8,  eu:-2.0 },
  { id:"il",      name:"IL",      color:"#00ADF1", logo:"portugal/pt_IL_logo.png",      group:"RENEW",  econ: 3.0,  social:-0.2,  eu: 2.5 },
  { id:"livre",   name:"LIVRE",   color:"#81A76C", logo:"portugal/pt_LIVRE_logo.png",   group:"GREENS", econ:-2.0,  social:-2.5,  eu: 3.0 },
  { id:"pcp",     name:"PCP",     color:"#B20000", logo:"portugal/pt_PCP_logo.png",     group:"LEFT",   econ:-3.0,  social: 1.5,  eu:-2.5 },
  { id:"be",      name:"BE",      color:"#DB0812", logo:"portugal/pt_BE_logo.png",      group:"LEFT",   econ:-2.2,  social:-2.8,  eu:-0.5 },
  { id:"pan",     name:"PAN",     color:"#19667E", logo:"portugal/pt_PAN_logo.png",     group:"GREENS", econ:-0.5,  social:-2.0,  eu: 2.0 },
  { id:"volt", name:"Volt",   color:"#502379", logo:"netherlands/nl_Volt_logo.png",   group:"GREENS", econ: 0.4,  social:-1.5,  eu: 3.0, tier:"minor" },

],
Spain: [
  { id:"pp",      name:"PP",       color:"#1E4B8F", logo:"spain/es_PP_logo.png",       group:"EPP",    econ: 1.8,  social: 1.8,  eu: 2.0 },
  { id:"psoe",    name:"PSOE",     color:"#E20612", logo:"spain/es_PSOE_logo.png",     group:"S&D",    econ:-0.8,  social:-2.0,  eu: 2.5 },
  { id:"vox",     name:"VOX",      color:"#5AC036", logo:"spain/es_VOX_logo.png",      group:"PFE",    econ: 1.8,  social: 2.7,  eu:-2.1 },
  { id:"sumar",   name:"SUMAR",    color:"#E61E54", logo:"spain/es_SUMAR_logo.png",    groups:["GREENS","LEFT"], econ:-2.0,  social:-2.5,  eu: 0.8 },
  { id:"erc",     name:"ERC",      color:"#FEB333", logo:"spain/es_ERC_logo.png",      group:"GREENS", econ:-1.5,  social:-2.0,  eu: 1.0 },
  { id:"junts",   name:"Junts",    color:"#20C0B2", logo:"spain/es_JUNTS_logo.png",  econ: 0.7,  social: 0.5,  eu: 1.1 },
  { id:"bildu",   name:"Bildu",    color:"#00B59F", logo:"spain/es_BILDU_logo.png",    group:"LEFT",   econ:-2.5,  social:-2.2,  eu:-0.8 },
  { id:"pnv",     name:"PNV",      color:"#2A8343", logo:"spain/es_PNV_logo.png",      group:"RENEW",  econ: 0.5,  social: 0.3,  eu: 2.7 },
  { id:"bng",     name:"BNG",      color:"#2AB4E5", logo:"spain/es_BNG_logo.png",      group:"GREENS", econ:-2.2,  social:-2.3,  eu:-0.7 },
  { id:"cc",      name:"CC",       color:"#02ABD6", logo:"spain/es_CC_logo.png",       group:"RENEW",  econ: 0.8,  social: 0.5,  eu: 1.5 },
  { id:"upn",     name:"UPN",      color:"#E1252F", logo:"spain/es_UPN_logo.png",      group:"EPP",    econ: 1.0,  social: 1.7,  eu: 2.0 },
  { id:"podemos", name:"Podemos",  color:"#B767F4", logo:"spain/es_Podemos_logo.png",  group:"LEFT",   econ:-2.3,  social:-2.7,  eu:-0.8 },
  { id:"salf",    name:"SALF",     color:"#FFFFFF", logo:"spain/es_SALF_logo.png",    econ: 2.2,  social: 2.5,  eu:-2.0 },
  { id:"volt", name:"VOLT",   color:"#502379", logo:"netherlands/nl_VOLT_logo.png",   group:"GREENS", econ: 0.4,  social:-1.5,  eu: 3.0, tier:"minor" }
],
Ireland: [
  { id:"ff",     name:"FF",       color:"#01795D", logo:"ireland/ie_FF_logo.png",       group:"RENEW",  econ: 0.7,  social: 0.5,  eu: 2.2 },
  { id:"fg",     name:"FG",       color:"#007DAC", logo:"ireland/ie_FG_logo.png",       group:"EPP",    econ: 1.8,  social: 0.2,  eu: 2.6 },
  { id:"sf",     name:"SF",       color:"#218141", logo:"ireland/ie_SF_logo.png",       group:"LEFT",   econ:-2.0,  social:-1.5,  eu:-0.6 },
  { id:"socdem", name:"SocDem",   color:"#732E8A", logo:"ireland/ie_SocDem_logo.png",   group:"S&D",    econ:-1.5,  social:-2.0,  eu: 1.4 },
  { id:"labour", name:"Labour",   color:"#EB0000", logo:"ireland/ie_Labour_logo.png",   group:"S&D",    econ:-1.2,  social:-1.8,  eu: 1.8 },
  { id:"aontu",  name:"Aontú",    color:"#31994E", logo:"ireland/ie_Aontu_logo.png",                     econ:-1.9,  social: 2.2,  eu:-1.4 },
  { id:"ii",     name:"II",       color:"#3BEE56", logo:"ireland/ie_II_logo.png",       group:"RENEW",  econ: 0.2,  social: 2.4,  eu:-0.7 },
  { id:"greens", name:"Greens",   color:"#2FB66A", logo:"ireland/ie_Greens_logo.png",   group:"GREENS", econ:-1.0,  social:-2.3,  eu: 2.3 },
  { id:"pbps",   name:"PBP-S",    color:"#DC0C83", logo:"ireland/ie_PBP-S_logo.png",     group:"LEFT",   econ:-3.0,  social:-2.5,  eu:-1.2 },
],
NIreland: [
  { id:"sf",     name:"SF",     color:"#218141", logo:"nireland/nie_SF_logo.png",     group:"LEFT",   econ:-1.7,  social:-2.0,  eu: 0.7 },
  { id:"dup",    name:"DUP",    color:"#B51C4B", logo:"nireland/nie_DUP_logo.png",    group:"ECR",    econ: 1.2,  social: 2.6,  eu:-2.4 },
  { id:"apni",   name:"APNI",   color:"#F2CF33", logo:"nireland/nie_APNI_logo.png",   group:"RENEW",  econ: 0.2,  social:-2.4,  eu: 2.3 },
  { id:"uup",    name:"UUP",    color:"#00256B", logo:"nireland/nie_UUP_logo.png",    group:"ECR",    econ: 0.8,  social: 1.2,  eu: 1.1 },
  { id:"sdlp",   name:"SDLP",   color:"#D72B43", logo:"nireland/nie_SDLP_logo.png",   group:"S&D",    econ:-1.4,  social:-1.8,  eu: 1.8 },
  { id:"tuv",    name:"TUV",    color:"#082B66", logo:"nireland/nie_TUV_logo.png",                      econ: 1.3,  social: 2.8,  eu:-2.8 },
  { id:"gpni",   name:"GPNI",   color:"#0152A1", logo:"nireland/nie_GPNI_logo.png",   group:"GREENS", econ:-1.6,  social:-2.5,  eu: 2.2 },
  { id:"aontu",  name:"Aontú",  color:"#31994E", logo:"nireland/nie_Aontu_logo.png",                    econ:-1.0,  social: 1.9,  eu: 0.4 },
  { id:"pbp",    name:"PBP",    color:"#E71D4F", logo:"nireland/nie_PBP_logo.png",    group:"LEFT",   econ:-3.0,  social:-2.4,  eu:-1.5 },
],
UK: [
  { id:"labour", name:"Labour",  color:"#E11F1C", logo:"uk/uk_Labour_logo.png",  group:"S&D",    econ:-0.5, social:-1.6, eu: 0.4 },
  { id:"con",    name:"CON",     color:"#00ADEF", logo:"uk/uk_CON_logo.png",     group:"ECR",    econ: 2.0, social: 1.8, eu:-2.1 },
  { id:"ref",    name:"REFORM",     color:"#1EB8D0", logo:"uk/uk_REFORM_logo.png",                      econ: 2.7, social: 2.6, eu:-2.8 },
  { id:"libdem", name:"LibDems", color:"#F9A61A", logo:"uk/uk_LibDems_logo.png",  group:"RENEW",  econ:-0.2, social:-2.3, eu: 1.9 },
  { id:"green",  name:"Greens",   color:"#01A85A", logo:"uk/uk_GREEN_logo.png",    group:"GREENS", econ:-2.3, social:-2.7, eu: 2.3 },
  { id:"snp",    name:"SNP",     color:"#FFF481", logo:"uk/uk_SNP_logo.png",      group:"GREENS", econ:-1.2, social:-1.7, eu: 2.0 },
  { id:"pc",     name:"PC",      color:"#005B56", logo:"uk/uk_PC_logo.png",       group:"GREENS", econ:-1.5, social:-1.8, eu: 2.1 },
],
Scotland: [
  { id:"snp", name:"SNP", color:"#FFF481", logo:"scotland/scotland_SNP_logo.png", group:"GREENS", econ:-1.2, social:-1.7, eu:2.0 },
  { id:"labour", name:"Labour", color:"#E40F47", logo:"scotland/scotland_Labour_logo.png", group:"S&D", econ:-0.5, social:-1.6, eu:0.4 },
  { id:"con", name:"CON", color:"#00ADEF", logo:"scotland/scotland_CON_logo.png", group:"ECR", econ:2.0, social:1.8, eu:-2.1 },
  { id:"libdem", name:"LibDems", color:"#F9A61A", logo:"scotland/scotland_LibDems_logo.png", group:"RENEW", econ:-0.2, social:-2.3, eu:1.9 },
  { id:"green", name:"Greens", color:"#00A23E", logo:"scotland/scotland_GREEN_logo.png", group:"GREENS", econ:-2.3, social:-2.7, eu:2.3 },
    { id:"ref",    name:"REFORM",     color:"#1EB8D0", logo:"scotland/scotland_REFORM_logo.png",                      econ: 2.7, social: 2.6, eu:-2.8 },
],

Wales: [
  { id:"pc", name:"PC", color:"#005B56", logo:"wales/wales_PC_logo.png", group:"GREENS", econ:-1.5, social:-1.8, eu:2.1 },
  { id:"labour", name:"Labour", color:"#E11F1C", logo:"wales/wales_Labour_logo.png", group:"S&D", econ:-0.5, social:-1.6, eu:0.4 },
  { id:"con", name:"CON", color:"#0575C9", logo:"wales/wales_CON_logo.png", group:"ECR", econ:2.0, social:1.8, eu:-2.1 },
  { id:"libdem", name:"LibDems", color:"#F9A61A", logo:"wales/wales_LibDems_logo.png", group:"RENEW", econ:-0.2, social:-2.3, eu:1.9 },
  { id:"green", name:"Greens", color:"#01A85A", logo:"wales/wales_GREEN_logo.png", group:"GREENS", econ:-2.3, social:-2.7, eu:2.3 },
    { id:"ref",    name:"REFORM",     color:"#1EB8D0", logo:"wales/wales_REFORM_logo.png",                      econ: 2.7, social: 2.6, eu:-2.8 },
],
Greenland: [
  { id:"d",  name:"D",  color:"#152D49", logo:"greenland/gl_D_logo.png",  group:"RENEW", econ: 1.8,  social:-0.8,  eu: 1.0 },
  { id:"n",  name:"N",  color:"#FF6900", logo:"greenland/gl_N_logo.png",                    econ: 0.7,  social: 0.5,  eu:-2.5 },
  { id:"ia", name:"IA", color:"#B01116", logo:"greenland/gl_IA_logo.png", group:"LEFT",   econ:-1.8,  social:-2.3,  eu:-2.3 },
  { id:"s",  name:"S",  color:"#FF0909", logo:"greenland/gl_S_logo.png",  group:"S&D",    econ:-0.9,  social:-0.7,  eu:-1.2 },
  { id:"a",  name:"A",  color:"#004C8D", logo:"greenland/gl_A_logo.png",  group:"RENEW",  econ: 1.7,  social: 1.6,  eu: 1.6 },
  { id:"q",  name:"Q",  color:"#F7F5B8", logo:"greenland/gl_Q_logo.png",                    econ: 1.2,  social: 1.4,  eu:-2.7 },
],
Iceland: [
  { id:"s",  name:"S",  color:"#ED1400", logo:"iceland/is_S_logo.png",  group:"S&D",    econ:-1.4,  social:-1.6,  eu: 2.3 },
  { id:"d",  name:"D",  color:"#005082", logo:"iceland/is_D_logo.png",  group:"EPP",    econ: 2.0,  social: 0.8,  eu:-1.6 },
  { id:"c",  name:"C",  color:"#FF7F00", logo:"iceland/is_C_logo.png",  group:"RENEW",  econ: 1.5,  social:-0.9,  eu: 2.6 },
  { id:"f",  name:"F",  color:"#FFCA3E", logo:"iceland/is_F_logo.png",  groups:["S&D","RENEW"], econ:-1.8,  social:-0.2,  eu:-0.7 },
  { id:"m",  name:"M",  color:"#112268", logo:"iceland/is_M_logo.png",  group:"ECR",    econ: 0.4,  social: 1.4,  eu:-1.6 },
  { id:"b",  name:"B",  color:"#00422A", logo:"iceland/is_B_logo.png",  group:"RENEW",  econ: 0.1,  social: 0.6,  eu:-1.2 },
  { id:"j",  name:"J",  color:"#EF4839", logo:"iceland/is_J_logo.png",                    econ:-2.4,  social:-2.2,  eu:-0.2 },
  { id:"p",  name:"P",  color:"#2A0145", logo:"iceland/is_P_logo.png",  group:"GREENS", econ:-0.6,  social:-1.4,  eu: 0.4 },
  { id:"vg", name:"VG", color:"#FFFFFF", logo:"iceland/is_VG_logo.png", group:"LEFT", econ:-1.7,  social:-1.8,  eu:-0.8 },
],
Norway: [
  { id:"r",   name:"R",   color:"#E90302", logo:"norway/no_R_logo.png",   group:"LEFT",   econ:-3.0,  social:-2.8,  eu:-2.5 },
  { id:"sv",  name:"SV",  color:"#B5317C", logo:"norway/no_SV_logo.png",  group:"LEFT",   econ:-1.8,  social:-2.3,  eu:-1.8 },
  { id:"mdg", name:"MDG", color:"#4D7E00", logo:"norway/no_mdg_logo.png", group:"GREENS", econ:-0.8,  social:-2.2,  eu: 1.8 },
  { id:"ap",  name:"Ap",  color:"#E01220", logo:"norway/no_Ap_logo.png",  group:"S&D",    econ:-0.7,  social:-1.2,  eu: 0.8 },
  { id:"sp",  name:"Sp",  color:"#00632B", logo:"norway/no_Sp_logo.png",  group:"RENEW",  econ:-0.6,  social: 0.3,  eu:-2.6 },
  { id:"v",   name:"V",   color:"#006666", logo:"norway/no_V_logo.png",   group:"RENEW",  econ: 1.0,  social:-1.6,  eu: 2.4 },
  { id:"krf", name:"KrF", color:"#FDEE33", logo:"norway/no_krf_logo.png", group:"EPP",    econ: 0.3,  social: 2.3,  eu:-0.3 },
  { id:"frp", name:"FrP", color:"#024E80", logo:"norway/no_FrP_logo.png", group:"ECR",    econ: 2.3,  social: 1.8,  eu:-1.8 },
  { id:"h",   name:"H",   color:"#0265F0", logo:"norway/no_H_logo.png",   group:"EPP",    econ: 1.4,  social: 0.2,  eu: 1.7 },
],

Sweden: [
  { id:"v",  name:"V",  color:"#CA2027", logo:"sweden/se_V_logo.png",  group:"LEFT",   econ:-2.1,  social:-1.9,  eu:-1.3 },
  { id:"mp", name:"MP", color:"#54A046", logo:"sweden/se_MP_logo.png", group:"GREENS", econ:-0.9,  social:-1.7,  eu: 0.8 },
  { id:"s",  name:"S",  color:"#ED1B34", logo:"sweden/se_S_logo.png",  group:"S&D",    econ:-1.2,  social:-1.3,  eu: 1.4 },
  { id:"c",  name:"C",  color:"#124838", logo:"sweden/se_C_logo.png",  group:"RENEW",  econ: 1.2,  social:-0.6,  eu: 1.3 },
  { id:"l",  name:"L",  color:"#006AB3", logo:"sweden/se_L_logo.png",  group:"RENEW",  econ: 1.7,  social: 0.2,  eu: 2.4 },
  { id:"m",  name:"M",  color:"#293D9B", logo:"sweden/se_M_logo.png",  group:"EPP",    econ: 2.2,  social: 0.7,  eu: 1.8 },
  { id:"kd", name:"KD", color:"#005EA1", logo:"sweden/se_KD_logo.png", group:"EPP",    econ: 1.3,  social: 1.8,  eu: 1.0 },
  { id:"sd", name:"SD", color:"#FEDF09", logo:"sweden/se_SD_logo.png", group:"ECR",    econ:-0.8,  social: 2.0,  eu:-1.2 },
],
Finland: [
  { id:"kok",   name:"KOK",   color:"#003859", logo:"finland/fi_KOK_logo.png",   group:"EPP",    econ: 2.0,  social: 0.3,  eu: 2.4 },
  { id:"ps",    name:"PS",    color:"#FFDE55", logo:"finland/fi_PS_logo.png",    group:"ECR",    econ: 0.8,  social: 2.6,  eu:-2.0 },
  { id:"sdp",   name:"SDP",   color:"#F54B4B", logo:"finland/fi_SDP_logo.png",   group:"S&D",    econ:-1.4,  social:-1.5,  eu: 1.9 },
  { id:"kesk",  name:"Kesk",  color:"#3AAD2E", logo:"finland/fi_KESK_logo.png",  group:"RENEW",  econ: 0.2,  social: 0.4,  eu: 0.7 },
  { id:"vas",   name:"VAS",   color:"#F00A64", logo:"finland/fi_VAS_logo.png",   group:"LEFT",   econ:-1.9,  social:-1.8,  eu: 1.2 },
  { id:"vihr",  name:"VIHR",  color:"#006845", logo:"finland/fi_VIHR_logo.png",  group:"GREENS", econ:-1.2,  social:-2.2,  eu: 2.7 },
  { id:"sfp",   name:"SFP",   color:"#FFDD93", logo:"finland/fi_SFP_logo.png",   group:"RENEW",  econ: 1.0,  social:-1.7,  eu: 2.4 },
  { id:"kd",    name:"KD",    color:"#2B67C9", logo:"finland/fi_KD_logo.png",    group:"EPP",    econ: 1.3,  social: 2.0,  eu: 0.5 },
  { id:"liik",  name:"Liik",  color:"#B42079", logo:"finland/fi_Liik_logo.png",                     econ: 2.2,  social:-0.2,  eu: 0.6 },
],
Denmark: [
  { id:"a",  name:"A",  color:"#F04D46", logo:"denmark/dk_A_logo.png",  group:"S&D",    econ:-0.8,  social: 0.7,  eu: 1.7 },
  { id:"v",  name:"V",  color:"#002883", logo:"denmark/dk_V_logo.png",  group:"RENEW",  econ: 2.0,  social: 0.5,  eu: 1.9 },
  { id:"m",  name:"M",  color:"#83298F", logo:"denmark/dk_M_logo.png",  group:"RENEW",  econ: 0.9,  social:-0.1,  eu: 1.8 },
  { id:"sf", name:"SF", color:"#A20000", logo:"denmark/dk_SF_logo.png", group:"GREENS", econ:-1.6,  social:-1.7,  eu: 1.2 },
  { id:"ae", name:"Æ",  color:"#BD292E", logo:"denmark/dk_AE_logo.png",  group:"ECR",    econ: 0.9,  social: 2.3,  eu:-0.2 },
  { id:"i",  name:"I",  color:"#002945", logo:"denmark/dk_I_logo.png",  group:"EPP",    econ: 2.2,  social: 0.3,  eu: 0.3 },
  { id:"c",  name:"C",  color:"#034536", logo:"denmark/dk_C_logo.png",  group:"EPP",    econ: 1.1,  social: 0.9,  eu: 0.8 },
  { id:"oe", name:"Ø",  color:"#D0004D", logo:"denmark/dk_Ø_logo.png",  group:"LEFT",   econ:-2.4,  social:-2.3,  eu:-0.4 },
  { id:"b",  name:"B",  color:"#C4007A", logo:"denmark/dk_B_logo.png",  group:"RENEW",  econ: 0.4,  social:-1.3,  eu: 1.8 },
  { id:"aa", name:"Å",  color:"#00D463", logo:"denmark/dk_Å_logo.png",  group:"GREENS", econ:-1.1,  social:-2.1,  eu: 1.3 },
  { id:"o",  name:"O",  color:"#022C70", logo:"denmark/dk_O_logo.png",  group:"PFE",    econ:-0.2,  social: 2.4,  eu:-2.1 },
],
Germany: [
  { id:"cducsu", name:"CDU-CSU", color:"#000000", logo:"germany/de_CDU-CSU_logo.png", group:"EPP",    econ: 1.4,  social: 0.9,  eu: 1.7 },
  { id:"afd",    name:"AfD",     color:"#009FE1", logo:"germany/de_AfD_logo.png",     group:"ESN",    econ: 0.3,  social: 3.0,  eu:-2.7 },
  { id:"spd",    name:"SPD",     color:"#E30013", logo:"germany/de_SPD_logo.png",     group:"S&D",    econ:-0.4,  social:-1.6,  eu: 1.9 },
  { id:"gruene", name:"Grüne",   color:"#26A434", logo:"germany/de_Grüne_logo.png",   group:"GREENS", econ:-1.3,  social:-2.3,  eu: 2.9 },
  { id:"linke",  name:"Linke",   color:"#BE3075", logo:"germany/de_LINKE_logo.png",   group:"LEFT",   econ:-2.7,  social:-2.5,  eu: 0.4 },
  { id:"bsw",    name:"BSW",     color:"#7A2450", logo:"germany/de_BSW_logo.png",                        econ:-2.4,  social: 1.8,  eu:-1.8 },
  { id:"fdp",    name:"FDP",     color:"#FFED00", logo:"germany/de_FDP_logo.png",     group:"RENEW",  econ: 2.4,  social:-0.3,  eu: 1.6 },
],
Netherlands: [
  { id:"pvv",    name:"PVV",    color:"#0B2F65", logo:"netherlands/nl_PVV_logo.png",    group:"PFE",    econ: 0.4,  social: 2.4,  eu:-2.6 },
  { id:"glpvda", name:"GL-PvdA", color:"#FFFFFF", logo:"netherlands/nl_GL-PVDA_logo.png", groups:["S&D","GREENS"], econ:-1.6,  social:-1.8,  eu: 1.2 },
  { id:"vvd",    name:"VVD",    color:"#0A2CCA", logo:"netherlands/nl_VVD_logo.png",    group:"RENEW",  econ: 1.8,  social: 0.7,  eu: 0.9 },
  { id:"d66",    name:"D66",    color:"#00AE41", logo:"netherlands/nl_D66_logo.png",    group:"RENEW",  econ: 0.8,  social:-1.2,  eu: 2.6 },
  { id:"bbb",    name:"BBB",    color:"#93C01F", logo:"netherlands/nl_BBB_logo.png",    group:"EPP",    econ: 0.6,  social: 1.7,  eu:-1.2 },
  { id:"cda",    name:"CDA",    color:"#2CC84D", logo:"netherlands/nl_CDA_logo.png",    group:"EPP",    econ: 0.5,  social: 1.0,  eu: 0.8 },
  { id:"sp",     name:"SP",     color:"#ED1C24", logo:"netherlands/nl_SP_logo.png",     group:"LEFT",   econ:-2.1,  social:-0.2,  eu:-0.9 },
  { id:"denk",   name:"DENK",   color:"#00B7B2", logo:"netherlands/nl_DENK_logo.png",                       econ:-1.4,  social: 0.6,  eu:-0.4 },
  { id:"pvdd",   name:"PvdD",   color:"#02733F", logo:"netherlands/nl_PvdD_logo.png",   group:"LEFT",   econ:-2.1,  social:-1.4,  eu:-0.7 },
  { id:"fvd",    name:"FvD",    color:"#A5191C", logo:"netherlands/nl_FvD_logo.png",    group:"ESN",    econ: 1.3,  social: 2.7,  eu:-2.9 },
  { id:"sgp",    name:"SGP",    color:"#E95D0F", logo:"netherlands/nl_SGP_logo.png",    group:"ECR",    econ: 0.8,  social: 3.0,  eu:-1.0 },
  { id:"cu",     name:"CU",     color:"#032963", logo:"netherlands/nl_CU_logo.png",     group:"EPP",    econ:-0.4,  social: 1.7,  eu: 0.6 },
  { id:"volt",   name:"Volt",   color:"#502379", logo:"netherlands/nl_Volt_logo.png",   group:"GREENS", econ: 0.4,  social:-1.5,  eu: 3.0 },
  { id:"ja21",   name:"Ja21",   color:"#242B57", logo:"netherlands/nl_Ja21_logo.png",   group:"ECR",    econ: 1.3,  social: 2.2,  eu:-2.1 },
],
Belgium: [
  { id:"nva",      name:"N-VA",      color:"#FDBB31", logo:"belgium/be_N-VA_logo.png",      group:"ECR",    econ: 1.5,  social: 1.6,  eu:-0.9 },
  { id:"vb",       name:"VB",        color:"#FFE500", logo:"belgium/be_VB_logo.png",        group:"PFE",    econ: 0.2,  social: 2.6,  eu:-1.9 },
  { id:"cdv",      name:"CD&V",      color:"#FF6000", logo:"belgium/be_CD&V_logo.png",      group:"EPP",    econ: 0.7,  social: 0.9,  eu: 1.8 },
  { id:"openvld",  name:"openVLD",   color:"#009DDC", logo:"belgium/be_openVLD_logo.png",   group:"RENEW",  econ: 2.0,  social:-0.2,  eu: 2.4 },
  { id:"vooruit",  name:"Vooruit",   color:"#FF2A00", logo:"belgium/be_Vooruit_logo.png",   group:"S&D",    econ:-1.0,  social:-1.4,  eu: 1.8 },
  { id:"groen",    name:"Groen",     color:"#02AD5B", logo:"belgium/be_Groen_logo.png",     group:"GREENS", econ:-1.6,  social:-2.4,  eu: 2.2 },
  { id:"ptb",      name:"PTB-PVDA",  color:"#EF4135", logo:"belgium/be_PTB-PVDA_logo.png",  group:"LEFT",   econ:-2.8,  social:-2.0,  eu:-1.6 },
  { id:"ps",       name:"PS",        color:"#FF0000", logo:"belgium/be_PS_logo.png",        group:"S&D",    econ:-1.2,  social:-1.5,  eu: 2.1 },
  { id:"mr",       name:"MR",        color:"#002BFF", logo:"belgium/be_MR_logo.png",        group:"RENEW",  econ: 1.6,  social: 0.2,  eu: 2.2 },
  { id:"ecolo",    name:"ECOLO",     color:"#5AAD39", logo:"belgium/be_ECOLO_logo.png",     group:"GREENS", econ:-1.5,  social:-2.5,  eu: 2.0 },
  { id:"le",       name:"LE",        color:"#00E6D2", logo:"belgium/be_LE_logo.png",        group:"RENEW",  econ: 0.6,  social:-0.4,  eu: 2.3 },
],
Luxembourg: [
  { id:"csv",      name:"CSV",      color:"#FFCC00", logo:"luxembourg/lu_CSV_logo.png",      group:"EPP",    econ: 1.4,  social: 1.3,  eu: 2.6 },
  { id:"lsap",     name:"LSAP",     color:"#F00035", logo:"luxembourg/lu_LSAP_logo.png",     group:"S&D",    econ:-1.3,  social:-1.6,  eu: 2.8 },
  { id:"dp",       name:"DP",       color:"#002C51", logo:"luxembourg/lu_DP_logo.png",       group:"RENEW",  econ: 0.7,  social: 0.8,  eu: 2.7 },
  { id:"deigreng", name:"Dei Greng", color:"#39B54A", logo:"luxembourg/lu_DeiGreng_logo.png", group:"GREENS", econ:-1.7,  social:-2.2,  eu: 1.8 },
  { id:"adr",      name:"ADR",      color:"#D20823", logo:"luxembourg/lu_ADR_logo.png",      group:"ECR",    econ: 1.0,  social: 2.0,  eu:-0.7 },
  { id:"pirates",  name:"Pirates",  color:"#993399", logo:"luxembourg/lu_Pirates_logo.png",  group:"GREENS", econ: 0.0,  social:-2.0,  eu: 1.7 },
  { id:"deilenk",  name:"Dei Lenk", color:"#8F0109", logo:"luxembourg/lu_DeiLenk_logo.png",  group:"LEFT",   econ:-2.5,  social:-2.2,  eu: 0.7 },
  { id:"kpl",      name:"KPL",      color:"#FF0000", logo:"luxembourg/lu_KPL_logo.png",      group:"LEFT",   econ:-3.0,  social:-1.6,  eu:-2.8 },
  { id:"dk",       name:"DK",       color:"#4DA4DB", logo:"luxembourg/lu_DK_logo.png",                         econ: 1.5,  social: 2.2,  eu:-0.8 },
  { id:"volt",     name:"Volt",     color:"#502379", logo:"luxembourg/lu_Volt_logo.png",     group:"GREENS", econ:-0.2,  social:-2.3,  eu: 3.0 },
],
Malta: [
  { id:"pl",   name:"PL",   color:"#EE3224", logo:"malta/mt_PL_logo.png",   group:"S&D",    econ:-0.7,  social:-1.3,  eu: 1.5 },
  { id:"pn",   name:"PN",   color:"#2A2461", logo:"malta/mt_PN_logo.png",   group:"EPP",    econ: 1.1,  social: 0.7,  eu: 2.1 },
  { id:"adpd", name:"ADPD", color:"#20AA63", logo:"malta/mt_ADPD_logo.png", group:"GREENS", econ:-1.5,  social:-2.3,  eu: 2.5 },
  { id:"m",    name:"M",    color:"#149A8D", logo:"malta/mt_M_logo.png",    group:"RENEW",  econ:-0.6,  social:-1.5,  eu: 2.4 },
],

Switzerland: [
  { id:"svp",   name:"SVP",   color:"#03A04F", logo:"switzerland/ch_SVP_logo.png",   groups:["RENEW","ECR"],    econ: 1.4,  social: 2.6,  eu:-2.7 },
  { id:"sp",    name:"SP",    color:"#E4002B", logo:"switzerland/ch_SP_logo.png",    group:"S&D",    econ:-2.1,  social:-2.3,  eu: 2.1 },
  { id:"fdp",   name:"FDP",   color:"#104FA0", logo:"switzerland/ch_FDP_logo.png",   group:"RENEW",  econ: 2.2,  social: 0.8,  eu: 0.4 },
  { id:"dm",    name:"DM",    color:"#F29206", logo:"switzerland/ch_DM_logo.png",    group:"EPP",    econ: 0.9,  social: 1.5,  eu: 0.8 },
  { id:"gruene",name:"Grüne", color:"#90B13A", logo:"switzerland/ch_Grüne_logo.png", group:"GREENS", econ:-1.8,  social:-2.4,  eu: 1.4 },
  { id:"glp",   name:"GLP",   color:"#96C020", logo:"switzerland/ch_GLP_logo.png",   group:"RENEW",  econ: 0.7,  social:-1.9,  eu: 1.9 },
  { id:"evp",   name:"EVP",   color:"#EFDA18", logo:"switzerland/ch_EVP_logo.png",   group:"ECR",    econ:-0.4,  social: 1.7,  eu: 0.3 },
  { id:"edu",   name:"EDU",   color:"#E60005", logo:"switzerland/ch_EDU_logo.png",   group:"ECR",    econ: 0.3,  social: 2.3,  eu:-1.9 },
],
Estonia: [
  { id:"re",     name:"RE",     color:"#FFE200", logo:"estonia/ee_RE_logo.png",     group:"RENEW",  econ: 2.0,  social:-0.8,  eu: 2.5 },
  { id:"ekre",   name:"EKRE",   color:"#0177BC", logo:"estonia/ee_EKRE_logo.png",   group:"PFE",    econ: 1.1,  social: 2.6,  eu:-2.2 },
  { id:"kesk",   name:"KESK",   color:"#007557", logo:"estonia/ee_KESK_logo.png",   groups:["RENEW","ECR"],    econ:-0.4,  social: 1.0,  eu: 0.6 },
  { id:"e200",   name:"E200",   color:"#2F2A95", logo:"estonia/ee_E200_logo.png",   group:"EPP",    econ: 1.2,  social:-1.5,  eu: 1.9 },
  { id:"sde",    name:"SDE",    color:"#E10600", logo:"estonia/ee_SDE_logo.png",    group:"S&D",    econ:-0.9,  social:-2.0,  eu: 2.4 },
  { id:"isamaa", name:"Isamaa", color:"#0599E1", logo:"estonia/ee_ISAMAA_logo.png", group:"EPP",    econ: 1.5,  social: 1.2,  eu: 0.9 },
  { id:"vl",     name:"VL",     color:"#78003C", logo:"estonia/ee_VL_logo.png",     group:"LEFT",   econ:-2.0,  social:-1.3,  eu: 1.3 },
  { id:"koos",   name:"Koos",   color:"#005BAA", logo:"estonia/ee_KOOS_logo.png",                       econ:-0.5,  social: 2.5,  eu:-2.3 },
  { id:"parem",  name:"Parem",  color:"#FA6100", logo:"estonia/ee_Parem_logo.png",  group:"EPP",    econ: 2.2,  social: 0.6,  eu: 1.8 },
  { id:"eer",    name:"EER",    color:"#A1C53F", logo:"estonia/ee_EER_logo.png",    group:"GREENS", econ:-1.9,  social:-1.7,  eu: 2.3 },
],
Latvia: [
  { id:"jv",   name:"JV",   color:"#6AB647", logo:"latvia/lv_JV_logo.png",   group:"EPP",    econ: 1.3,  social: 0.3,  eu: 2.2 },
  { id:"zzs",  name:"ZZS",  color:"#005B24", logo:"latvia/lv_ZZS_logo.png",  groups:["RENEW","S&D"], econ:-1.1,  social: 0.8,  eu:-0.6 },
  { id:"as",   name:"AS",   color:"#FFAC01", logo:"latvia/lv_AS_logo.png",   group:"EPP",    econ: 0.4,  social: 0.9,  eu: 1.1 },
  { id:"na",   name:"NA",   color:"#952131", logo:"latvia/lv_NA_logo.png",   group:"ECR",    econ: 0.7,  social: 2.0,  eu:-0.8 },
  { id:"st",   name:"ST!",  color:"#F77D02", logo:"latvia/lv_ST!_logo.png",                    econ:-0.5,  social: 0.3,  eu:-1.6 },
  { id:"lpv",  name:"LPV",  color:"#9E3039", logo:"latvia/lv_LPV_logo.png",  group:"PFE",    econ: 1.4,  social: 2.0,  eu:-1.8 },
  { id:"pro",  name:"PRO",  color:"#F93B1D", logo:"latvia/lv_PRO_logo.png",  group:"GREENS", econ:-1.6,  social:-2.5,  eu: 2.7 },
  { id:"par",  name:"Par!", color:"#FFF200", logo:"latvia/lv_par!_logo.png", group:"RENEW",  econ: 0.6,  social:-1.7,  eu: 2.4 },
  { id:"la",   name:"LA",   color:"#FFDD00", logo:"latvia/lv_LA_logo.png",   group:"RENEW",  econ: 1.4,  social:-1.2,  eu: 2.5 },
  { id:"s",    name:"S",    color:"#EC1B24", logo:"latvia/lv_S_logo.png",    group:"S&D",    econ:-1.4,  social: 0.8,  eu: 0.2 },
  { id:"p21",  name:"P21",  color:"#1AA190", logo:"latvia/lv_p21_logo.png",                    econ: 0.6,  social: 2.0,  eu:-1.1 },
  { id:"lks",  name:"LKS",  color:"#3760A2", logo:"latvia/lv_LKS_logo.png",                    econ:-0.8,  social: 0.6,  eu:-2.6 },
  { id:"sv",   name:"SV",   color:"#615CB3", logo:"latvia/lv_SV_logo.png",   group:"ECR",    econ:-0.4,  social: 1.8,  eu: 0.2 },
],

Lithuania: [
  { id:"lsdp",      name:"LSDP",      color:"#E20514", logo:"lithuania/lt_LSDP_logo.png",      group:"S&D",    econ:-0.9,  social:-0.5,  eu: 2.2 },
  { id:"tslkd",     name:"TS-LKD",    color:"#3359A3", logo:"lithuania/lt_TS-LKD_logo.png",    group:"EPP",    econ: 1.0,  social: 0.7,  eu: 2.3 },
  { id:"na",        name:"NA",        color:"#EB612B", logo:"lithuania/lt_NA_logo.png",        group:"S&D",    econ:-0.6,  social: 1.5,  eu:-0.3 },
  { id:"dsvl",      name:"DSVL",      color:"#0A1172", logo:"lithuania/lt_DSVL_logo.png",      group:"GREENS", econ:-0.6,  social: 0.6,  eu: 1.8 },
  { id:"ls",        name:"LS",        color:"#FF9300", logo:"lithuania/lt_LS_logo.png",        group:"RENEW",  econ: 1.0,  social:-1.0,  eu: 2.3 },
  { id:"lvzs",      name:"LVZS",      color:"#00A651", logo:"lithuania/lt_LVZS_logo.png",      group:"ECR",    econ:-0.8,  social: 0.9,  eu: 0.3 },
  { id:"lp",        name:"LP",        color:"#FF0C6C", logo:"lithuania/lt_LP_logo.png",        group:"RENEW",  econ: 1.1,  social:-1.5,  eu: 2.5 },
  { id:"llrakss",   name:"LLRA-KSS",  color:"#771725", logo:"lithuania/lt_LLRA-KSS_logo.png",  group:"ECR",    econ:-0.8,  social: 1.8,  eu:-0.6 },
  { id:"ns",        name:"NS",        color:"#B91F25", logo:"lithuania/lt_NS_logo.png",        group:"ECR",    econ:-1.2,  social: 2.7,  eu:-1.3 },
  { id:"dp",        name:"DP",        color:"#1D578C", logo:"lithuania/lt_DP_logo.png",                           econ:-0.4,  social: 0.5,  eu: 0.5 },
  { id:"lzp",       name:"LZP",       color:"#93C93C", logo:"lithuania/lt_LZP_logo.png",       group:"GREENS", econ:-0.5,  social:-1.3,  eu: 1.9 },
  { id:"tts",       name:"TTS",       color:"#013861", logo:"lithuania/lt_TTS_logo.png",       group:"ESN",    econ:-0.6,  social: 2.4,  eu:-1.8 },
  { id:"cds",       name:"CDS",       color:"#294696", logo:"lithuania/lt_CDS_logo.png",       group:"RENEW",  econ: 1.2,  social: 0.6,  eu: 0.5 },
],

Poland: [
  { id:"pis",     name:"PiS",     color:"#012B7F", logo:"poland/pl_PiS_logo.png",     group:"ECR",    econ:-1.4,  social: 2.5,  eu:-1.3 },
  { id:"po",      name:"PO",      color:"#01529D", logo:"poland/pl_PO_logo.png",      group:"EPP",    econ: 1.2,  social:-0.5,  eu: 2.2 },
  { id:"pl2050",  name:"PL2050",  color:"#FAC300", logo:"poland/pl_PL2050_logo.png",  group:"RENEW",  econ: 0.8,  social: 0.5,  eu: 1.5 },
  { id:"psl",     name:"PSL",     color:"#2ED397", logo:"poland/pl_PSL_logo.png",     group:"EPP",    econ: 1.0,  social: 1.3,  eu: 1.0 },
  { id:"lewica",  name:"Lewica",  color:"#EB2A48", logo:"poland/pl_LEWICA_logo.png",  group:"S&D",    econ:-1.6,  social:-1.3,  eu: 2.4 },
  { id:"razem",   name:"Razem",   color:"#870F57", logo:"poland/pl_razem_logo.png",   group:"LEFT",   econ:-1.9,  social:-1.7,  eu: 2.0 },
  { id:"nn",      name:"NN",      color:"#173358", logo:"poland/pl_NN_logo.png",      group:"ESN",    econ: 2.7,  social: 2.4,  eu:-2.5 },
  { id:"rn",      name:"RN",      color:"#C11F20", logo:"poland/pl_RN_logo.png",      group:"PFE",    econ: 1.5,  social: 3.0,  eu:-2.7 },
  { id:"kkp",     name:"KKP",     color:"#A27819", logo:"poland/pl_KKP_logo.png",                        econ: 0.5,  social: 3.0,  eu:-2.9 },
  { id:"dotn",    name:".N",      color:"#005CA9", logo:"poland/pl_.N_logo.png",      group:"RENEW",  econ: 1.6,  social:-1.0,  eu: 2.4 },
  { id:"z",       name:"Z",       color:"#026C55", logo:"poland/pl_Z_logo.png",       group:"GREENS", econ:-0.9,  social:-2.0,  eu: 2.3 },
  { id:"ipl",     name:"iPL",     color:"#EF2837", logo:"poland/pl_iPL_logo.png",     group:"EPP",    econ:-0.6,  social:-1.2,  eu: 2.0 },
],
Czechia: [
  { id:"ods",       name:"ODS",       color:"#164194", logo:"czechia/cz_ODS_logo.png",       group:"ECR",    econ: 1.8,  social: 1.1,  eu:-0.9 },
  { id:"kdu",       name:"KDU-ČSL",   color:"#FFCB04", logo:"czechia/cz_KDU-CSL_logo.png",   group:"EPP",    econ: 0.6,  social: 1.4,  eu: 1.8 },
  { id:"top09",     name:"TOP-09",    color:"#005490", logo:"czechia/cz_TOP-09_logo.png",    group:"EPP",    econ: 2.0,  social:-0.5,  eu: 2.1 },
  { id:"ano",       name:"ANO",       color:"#282661", logo:"czechia/cz_ANO_logo.png",       group:"PFE",    econ: 0.5,  social: 1.6,  eu:-2.0 },
  { id:"stan",      name:"STAN",      color:"#CD0F67", logo:"czechia/cz_STAN_logo.png",      group:"EPP",    econ: 1.0,  social:-1.0,  eu: 2.4 },
  { id:"pirates",   name:"Pirates",   color:"#000000", logo:"czechia/cz_Pirates_logo.png",   group:"GREENS", econ:-0.8,  social:-2.3,  eu: 1.9 },
  { id:"zeleni",    name:"Zeleni",    color:"#00AD43", logo:"czechia/cz_Zeleni_logo.png",    group:"GREENS", econ:-1.3,  social:-2.3,  eu: 2.0 },
  { id:"spd",       name:"SPD",       color:"#FFFFFF", logo:"czechia/cz_SPD_logo.png",       group:"ESN",    econ: 0.6,  social: 3.0,  eu:-3.0 },
  { id:"prisaha",   name:"Prisaha",   color:"#0033FF", logo:"czechia/cz_Prisaha_logo.png",   group:"PFE",    econ: 0.5,  social: 1.5,  eu:-1.8 },
  { id:"auto",      name:"AUTO",      color:"#009EE3", logo:"czechia/cz_AUTO_logo.png",      group:"PFE",    econ: 1.7,  social: 2.5,  eu:-2.7 },
  { id:"stacilo",   name:"Stacilo!",  color:"#C4161C", logo:"czechia/cz_Stacilo!_logo.png",                     econ:-2.4,  social: 2.0,  eu:-2.8 },
],

Austria: [
  { id:"fpo",     name:"FPÖ",     color:"#005EA8", logo:"austria/at_FPO_logo.png",     group:"PFE",    econ: 0.3,  social: 2.6,  eu:-2.0 },
  { id:"ovp",     name:"ÖVP",     color:"#68C5D2", logo:"austria/at_OVP_logo.png",     group:"EPP",    econ: 1.4,  social: 1.0,  eu: 1.2 },
  { id:"spo",     name:"SPÖ",     color:"#E20715", logo:"austria/at_SPO_logo.png",     group:"S&D",    econ:-1.4,  social:-1.0,  eu: 1.6 },
  { id:"neos",    name:"NEOS",    color:"#CA1C67", logo:"austria/at_NEOS_logo.png",    group:"RENEW",  econ: 1.8,  social:-1.8,  eu: 2.6 },
  { id:"grune",   name:"Grüne",   color:"#68AF21", logo:"austria/at_Grune_logo.png",   group:"GREENS", econ:-1.8,  social:-2.6,  eu: 2.3 },
  { id:"kpo",     name:"KPÖ",     color:"#AC1215", logo:"austria/at_KPO_logo.png",     group:"LEFT",   econ:-2.9,  social:-2.4,  eu:-2.2 },
  { id:"bier",    name:"BIER",    color:"#FFED00", logo:"austria/at_BIER_logo.png",                      econ:-0.8,  social:-1.8,  eu: 1.0 },
],
Slovakia: [
  { id:"smer",       name:"SMER",       color:"#D72727", logo:"slovakia/sk_SMER_logo.png",                       econ:-1.8,  social: 2.4,  eu:-1.4 },
  { id:"ps",         name:"PS",         color:"#00BCFF", logo:"slovakia/sk_PS_logo.png",        group:"RENEW",   econ: 1.1,  social:-2.2,  eu: 2.6 },
  { id:"hlas",       name:"Hlas",       color:"#830F38", logo:"slovakia/sk_HLAS_logo.png",                       econ:-1.0,  social: 1.2,  eu: 0.6 },
  { id:"olano",      name:"OĽaNO",      color:"#485156", logo:"slovakia/sk_OLANO_logo.png",     group:"EPP",     econ: 0.6,  social: 2.2,  eu: 1.2 },
  { id:"kdh",        name:"KDH",        color:"#1D3D6F", logo:"slovakia/sk_KDH_logo.png",       group:"EPP",     econ: 1.2,  social: 2.3,  eu: 1.8 },
  { id:"sas",        name:"SaS",        color:"#9BC31C", logo:"slovakia/sk_SaS_logo.png",       group:"ECR",     econ: 2.6,  social:-1.8,  eu: 0.3 },
  { id:"sns",        name:"SNS",        color:"#252E70", logo:"slovakia/sk_SNS_logo.png",       group:"PFE",     econ:-0.4,  social: 2.7,  eu:-2.2 },
  { id:"republika",  name:"Republika",  color:"#FFFFFF", logo:"slovakia/sk_Republika_logo.png",  group:"ESN",     econ: 0.3,  social: 3.0,  eu:-2.9 },
  { id:"ms",         name:"MS",         color:"#FFFFFF", logo:"slovakia/sk_MS_logo.png",        group:"EPP",     econ: 0.8,  social: 1.2,  eu: 1.1 },
  { id:"demokrati",  name:"Demokrati",  color:"#4F178F", logo:"slovakia/sk_Demokrati_logo.png",  group:"EPP",     econ: 0.6,  social: 0.2,  eu: 2.1 },
  { id:"sr",         name:"SR",         color:"#424953", logo:"slovakia/sk_SR_logo.png",        group:"PFE",     econ:-0.2,  social: 2.2,  eu:-2.0 },
  { id:"lsns",       name:"ĽSNS",       color:"#2B7C2E", logo:"slovakia/sk_L'SNS_logo.png",                        econ:-2.8,  social: 3.0,  eu:-3.0 },
],
Hungary: [
  { id:"fidesz",  name:"Fidesz",  color:"#FF6A00", logo:"hungary/hu_FIDESZ_logo.png",  group:"PFE",     econ:-1.5,  social: 2.5,  eu:-2.5 },
  { id:"dk",       name:"DK",       color:"#1565AF", logo:"hungary/hu_dk_logo.png",       group:"S&D",     econ:-1.5,  social:-2.0,  eu: 3.0 },
  { id:"mszp",     name:"MSZP",     color:"#D81C2D", logo:"hungary/hu_MSZP_logo.png",     group:"S&D",     econ:-1.0,  social:-1.5,  eu: 2.0 },
  { id:"greens",   name:"Greens",   color:"#39B54A", logo:"hungary/hu_Greens_logo.png",   group:"GREENS",  econ:-1.8,  social:-2.5,  eu: 2.2 },
  { id:"mm",       name:"MM",       color:"#8E6FCE", logo:"hungary/hu_MM_logo.png",       group:"RENEW",   econ:-0.2,  social:-2.0,  eu: 2.0 },
  { id:"jobbik",   name:"Jobbik",   color:"#047B60", logo:"hungary/hu_Jobbik_logo.png",                     econ:-0.5,  social: 2.0,  eu:-0.5 },
  { id:"lmp",      name:"LMP",      color:"#54B586", logo:"hungary/hu_LMP_logo.png",      group:"GREENS",  econ:-0.5,  social:-1.0,  eu: 0.5 },
  { id:"mmn",      name:"MMN",      color:"#001166", logo:"hungary/hu_MMM_logo.png",      group:"EPP",     econ: 1.0,  social: 1.5,  eu: 1.5 },
  { id:"mh",       name:"MH",       color:"#688D1B", logo:"hungary/hu_MH_logo.png",       group:"ESN",     econ: 0.0,  social: 2.9,  eu:-2.8 },
  { id:"mkkp",     name:"MKKP",     color:"#808080", logo:"hungary/hu_MKKP_logo.png",     group:"GREENS",  econ:-0.7,  social:-2.2,  eu: 1.8 },
  { id:"tisza",    name:"TISZA",    color:"#ED4551", logo:"hungary/hu_TISZA_logo.png",    group:"EPP",     econ: 0.2,  social: 0.6,  eu: 1.5 },
],
Slovenia: [
  { id:"gs",     name:"GS",     color:"#0063A6", logo:"slovenia/si_GS_logo.png",     group:"RENEW",   econ:-0.4,  social:-2.0,  eu: 2.5 },
  { id:"sds",    name:"SDS",    color:"#FCDC00", logo:"slovenia/si_SDS_logo.png",    group:"EPP",     econ: 2.0,  social: 2.5,  eu: 0.5 },
  { id:"nsi",    name:"N.Si",   color:"#009AC7", logo:"slovenia/si_N.Si_logo.png",    group:"EPP",     econ: 1.5,  social: 2.0,  eu: 1.9 },
  { id:"sd",     name:"SD",     color:"#ED1D24", logo:"slovenia/si_SD_logo.png",     group:"S&D",     econ:-1.3,  social:-2.0,  eu: 2.2 },
  { id:"levica", name:"Levica", color:"#E7302A", logo:"slovenia/si_Levica_logo.png", group:"LEFT",    econ:-2.4,  social:-2.6,  eu:-0.2 },
  { id:"sls",    name:"SLS",    color:"#81BE5F", logo:"slovenia/si_SLS_logo.png",    group:"EPP",     econ: 0.8,  social: 1.8,  eu: 0.6 },
  { id:"zs",     name:"ZS",     color:"#008000", logo:"slovenia/si_ZS_logo.png",     group:"RENEW",   econ: 0.3,  social: 1.2,  eu: 0.2 },
  { id:"r",      name:"R.",     color:"#7C5199", logo:"slovenia/si_R._logo.png",                       econ: 1.6,  social: 1.1,  eu:-1.2 },
  { id:"pirate", name:"PIRATE", color:"#F68F36", logo:"slovenia/si_PIRATE_logo.png", group:"GREENS",  econ:-0.6,  social:-2.4,  eu: 2.1 },
  { id:"sns",    name:"SNS",    color:"#FEE520", logo:"slovenia/si_SNS_logo.png",    group:"PFE",     econ:-0.9,  social: 2.8,  eu:-1.9 },
  { id:"vesna",  name:"VESNA",  color:"#00964F", logo:"slovenia/si_VESNA_logo.png",  group:"GREENS",  econ:-1.8,  social:-2.2,  eu: 2.3 },
  { id:"d",      name:"D.",     color:"#09115D", logo:"slovenia/si_D._logo.png",      group:"EPP",     econ: 0.5,  social: 0.8,  eu: 1.4 },
],

Croatia: [
  { id:"hdz",     name:"HDZ",     color:"#295BA5", logo:"croatia/hr_HDZ_logo.png",     group:"EPP",     econ: 0.9,  social: 1.2,  eu: 2.4 },
  { id:"sdp",     name:"SDP",     color:"#ED1C24", logo:"croatia/hr_SDP_logo.png",     group:"S&D",     econ:-1.1,  social:-1.4,  eu: 2.5 },
  { id:"dp",      name:"DP",      color:"#005BAA", logo:"croatia/hr_DP_logo.png",      group:"ECR",     econ: 1.4,  social: 2.3,  eu:-0.8 },
  { id:"domino",  name:"DOMiNO",  color:"#000000", logo:"croatia/hr_DOMiNO_logo.png",  group:"ECR",     econ: 1.6,  social: 2.4,  eu:-1.2 },
  { id:"pip",     name:"PiP",     color:"#203D71", logo:"croatia/hr_PiP_logo.png",                       econ: 1.2,  social: 2.1,  eu:-2.2 },
  { id:"mozemo",  name:"MOŽEMO",  color:"#C3D746", logo:"croatia/hr_MOZEMO_logo.png",  group:"GREENS",  econ:-2.4,  social:-2.2,  eu: 2.1 },
  { id:"most",    name:"MOST",    color:"#1E5797", logo:"croatia/hr_MOST_logo.png",    group:"ECR",     econ: 0.4,  social: 1.7,  eu:-0.4 },
  { id:"hs",      name:"HS",      color:"#004F9F", logo:"croatia/hr_HS_logo.png",      group:"ECR",     econ: 0.8,  social: 2.3,  eu:-1.7 },
  { id:"fokus",   name:"FOKUS",   color:"#04AACA", logo:"croatia/hr_FOKUS_logo.png",   group:"RENEW",   econ: 1.7,  social:-0.2,  eu: 1.6 },
  { id:"ids",     name:"IDS",     color:"#13A438", logo:"croatia/hr_IDS_logo.png",     group:"RENEW",   econ:-0.7,  social:-1.5,  eu: 2.4 },
  { id:"rf",      name:"RF",      color:"#C8282A", logo:"croatia/hr_RF_logo.png",      group:"LEFT",    econ:-2.6,  social:-2.5,  eu: 1.2 },
  { id:"centar",  name:"CENTAR",  color:"#C81B77", logo:"croatia/hr_centar_logo.png",  group:"RENEW",   econ: 0.9,  social:-1.5,  eu: 1.8 },
  { id:"hss",     name:"HSS",     color:"#0AAF4C", logo:"croatia/hr_HSS_logo.png",                      econ:-0.8,  social:-0.3,  eu: 1.3 },
  { id:"hsu",     name:"HSU",     color:"#2E3192", logo:"croatia/hr_HSU_logo.png",                      econ:-1.0,  social: 0.3,  eu: 1.2 },
  { id:"hns",     name:"HNS",     color:"#F29629", logo:"croatia/hr_HNS_logo.png",     group:"RENEW",   econ: 1.2,  social:-1.3,  eu: 2.2 },
],
Bosnia: [
  { id:"sda",     name:"SDA",     color:"#00A859", logo:"BiH/ba_SDA_logo.png",     group:"EPP",     econ: 0.8,  social: 1.8,  eu: 1.8 },
  { id:"snsd",    name:"SNSD",    color:"#C40000", logo:"BiH/ba_SNSD_logo.png",                      econ: 0.4,  social: 2.6,  eu:-2.2 },
  { id:"sdp",     name:"SDP",     color:"#FF0000", logo:"BiH/ba_SDP_logo.png",     group:"S&D",     econ:-1.2,  social:-1.6,  eu: 2.2 },
  { id:"hdz",     name:"HDZ",     color:"#003B87", logo:"BiH/ba_HDZ_logo.png",     group:"EPP",     econ: 1.2,  social: 1.7,  eu: 2.2 },
  { id:"df",      name:"DF",      color:"#F16822", logo:"BiH/ba_DF_logo.png",                       econ:-0.8,  social:-1.2,  eu: 2.3 },
  { id:"pdp",     name:"PDP",     color:"#193D71", logo:"BiH/ba_PDP_logo.png",     group:"EPP",     econ: 1.2,  social: 0.8,  eu: 1.5 },
  { id:"sbb",     name:"SBB",     color:"#213282", logo:"BiH/ba_SBB_logo.png",     group:"EPP",     econ: 1.4,  social: 0.6,  eu: 1.8 },
  { id:"sds",     name:"SDS",     color:"#2957A4", logo:"BiH/ba_SDS_logo.png",     group:"EPP",     econ:-0.4,  social: 2.8,  eu:-2.3 },
  { id:"nip",     name:"NiP",     color:"#142C4C", logo:"BiH/ba_NiP_logo.png",                       econ: 0.6,  social: 1.5,  eu: 1.7 },
  { id:"nes",     name:"NES",     color:"#8DC001", logo:"BiH/ba_NES_logo.png",                       econ: 0.4,  social: 1.6,  eu: 1.5 },
  { id:"zng",     name:"ZNG",     color:"#B0CB1F", logo:"BiH/ba_ZNG_logo.png",                       econ:-0.4,  social:-1.9,  eu: 2.1 },
  { id:"zpr",     name:"ZPR",     color:"#2651A0", logo:"BiH/ba_ZPR_logo.png",                       econ: 0.0,  social:-0.8,  eu: 1.7 },
  { id:"demos",   name:"DEMOS",   color:"#ED1B24", logo:"BiH/ba_DEMOS_logo.png",   group:"EPP",     econ: 0.8,  social: 0.6,  eu:-0.6 },
],
Serbia: [
  { id:"sns",    name:"SNS",    color:"#242970", logo:"serbia/rs_SNS_logo.png",    group:"EPP",     econ: 1.4,  social: 0.9,  eu: 0.3 },
  { id:"sps",    name:"SPS",    color:"#ED1C24", logo:"serbia/rs_SPS_logo.png",    group:"S&D",     econ:-0.9,  social:-0.6,  eu: 1.1 },
  { id:"ssp",    name:"SSP",    color:"#DA2529", logo:"serbia/rs_SSP_logo.png",    group:"S&D",     econ:-1.8,  social:-1.5,  eu: 2.8 },
  { id:"nps",    name:"NPS",    color:"#202F56", logo:"serbia/rs_NPS_logo.png",                      econ:-0.1,  social: 1.4,  eu: 1.7 },
  { id:"zlf",    name:"ZLF",    color:"#0D5F51", logo:"serbia/rs_ZLF_logo.png",    group:"GREENS",  econ:-2.3,  social:-2.0,  eu: 2.2 },
  { id:"srce",   name:"SRCE",   color:"#394A9A", logo:"serbia/rs_SRCE_logo.png",                     econ:-0.3,  social:-0.7,  eu: 1.7 },
  { id:"ds",     name:"DS",     color:"#FFF500", logo:"serbia/rs_DS_logo.png",     group:"S&D",     econ:-0.8,  social:-1.3,  eu: 1.7 },
  { id:"ndss",   name:"NDSS",   color:"#15274B", logo:"serbia/rs_NDSS_logo.png",   group:"ECR",     econ: 0.9,  social: 1.9,  eu:-1.6 },
  { id:"poks",   name:"POKS",   color:"#111E6C", logo:"serbia/rs_POKS_logo.png",   group:"ECR",     econ: 0.7,  social: 2.4,  eu:-0.4 },
  { id:"misn",   name:"MI-SN",  color:"#1B3160", logo:"serbia/rs_MISN_logo.png",                    econ:-1.3,  social: 2.8,  eu:-2.7 },
  { id:"kp",     name:"KP",     color:"#FFC100", logo:"serbia/rs_KP_logo.png",                      econ:-0.4,  social:-1.4,  eu:-0.6 },
],

Kosovo: [
  { id:"lvv",    name:"LVV",    color:"#DA1F26", logo:"kosovo/ko_LVV_logo.png",    group:"S&D",     econ:-2.1,  social:-0.8,  eu: 0.8 },
  { id:"pdk",    name:"PDK",    color:"#2D97D3", logo:"kosovo/ko_PDK_logo.png",    group:"RENEW",   econ: 1.6,  social: 1.7,  eu: 1.3 },
  { id:"ldk",    name:"LDK",    color:"#EC2426", logo:"kosovo/ko_LDK_logo.png",    group:"EPP",     econ: 1.2,  social: 0.9,  eu: 1.9 },
  { id:"aak",    name:"AAK",    color:"#03112C", logo:"kosovo/ko_AAK_logo.png",                      econ: 1.5,  social: 1.9,  eu: 1.6 },
  { id:"nisma",  name:"NISMA",  color:"#542B79", logo:"kosovo/ko_NISMA_logo.png",                    econ:-1.1,  social: 0.2,  eu: 1.2 },
  { id:"akr",    name:"AKR",    color:"#0C4DA2", logo:"kosovo/ko_AKR_logo.png",    group:"RENEW",   econ: 0.7,  social: 0.1,  eu: 1.5 },
  { id:"pd",     name:"PD",     color:"#D9241B", logo:"kosovo/ko_PD_logo.png",                       econ: 0.6,  social: 2.6,  eu: 0.4 },
  { id:"ls",     name:"LS",     color:"#173968", logo:"kosovo/ko_LS_logo.png",     group:"EPP",     econ: 0.3,  social: 2.5,  eu:-1.4 },
],
Montenegro: [
  { id:"pes",    name:"PES",    color:"#0E4194", logo:"montenegro/me_PES_logo.png",    group:"EPP",     econ: 1.7,  social: 0.2,  eu: 2.6 },
  { id:"dps",    name:"DPS",    color:"#524FA1", logo:"montenegro/me_DPS_logo.png",    group:"S&D",     econ:-0.4,  social: 0.3,  eu: 1.7 },
  { id:"sd",     name:"SD",     color:"#EC1C24", logo:"montenegro/me_SD_logo.png",     group:"S&D",     econ:-0.6,  social:-0.3,  eu: 1.9 },
  { id:"sdp",    name:"SDP",    color:"#EB1F28", logo:"montenegro/me_SDP_logo.png",    group:"S&D",     econ:-1.0,  social:-0.6,  eu: 2.1 },
  { id:"nova",   name:"NOVA",   color:"#001C5F", logo:"montenegro/me_NOVA_logo.png",                      econ: 0.3,  social: 2.6,  eu: 0.8 },
  { id:"dnp",    name:"DNP",    color:"#005DA4", logo:"montenegro/me_DNP_logo.png",                       econ:-0.2,  social: 2.7,  eu: 0.5 },
  { id:"dcg",    name:"DCG",    color:"#E21A22", logo:"montenegro/me_DCG_logo.png",    group:"EPP",     econ: 0.3,  social: 0.8,  eu: 1.6 },
  { id:"ura",    name:"URA",    color:"#0AD651", logo:"montenegro/me_URA_logo.png",    group:"GREENS",  econ:-0.8,  social:-2.4,  eu: 2.5 },
  { id:"bs",     name:"BS",     color:"#0C8E36", logo:"montenegro/me_BS_logo.png",     group:"EPP",     econ: 0.2,  social: 1.9,  eu: 1.5 },
  { id:"snp",    name:"SNP",    color:"#0093DF", logo:"montenegro/me_SNP_logo.png",    group:"S&D",     econ:-0.8,  social: 1.7,  eu: 0.6 },
],
NorthMacedonia: [
  { id:"sdsm",           name:"SDSM",           color:"#BF1E24", logo:"northmacedonia/mk_SDSM_logo.png",           group:"S&D",     econ:-1.2,  social:-1.1,  eu: 2.2 },
  { id:"ldp",            name:"LDP",            color:"#F7E706", logo:"northmacedonia/mk_LDP_logo.png",            group:"RENEW",   econ: 0.3,  social:-1.3,  eu: 2.2 },
  { id:"dom",            name:"DOM",            color:"#8CC73F", logo:"northmacedonia/mk_DOM_logo.png",            group:"GREENS",  econ:-0.6,  social:-1.9,  eu: 2.3 },
  { id:"vlen",           name:"VLEN",           color:"#8C0321", logo:"northmacedonia/mk_VLEN_logo.png",                             econ: 0.8,  social: 1.3,  eu: 2.5 },
  { id:"europeanfront",  name:"European Front", color:"#141A32", logo:"northmacedonia/mk_EuropeanFront_logo.png",  groups:["S&D","EPP"], econ:-0.4,  social: 1.0,  eu: 2.4 },
  { id:"vmrodpmne",      name:"VMRO-DPMNE",     color:"#E2001A", logo:"northmacedonia/mk_VMRO-DPME_logo.png",     group:"EPP",     econ: 0.9,  social: 1.8,  eu: 0.3 },
  { id:"levica",         name:"LEVICA",         color:"#FE0202", logo:"northmacedonia/mk_LEVICA_logo.png",         group:"LEFT",    econ:-2.7,  social: 1.3,  eu:-2.5 },
  { id:"znam",           name:"ZNAM",           color:"#416DB4", logo:"northmacedonia/mk_ZNAM_logo.png",                             econ:-0.6,  social: 0.4,  eu: 0.8 },
],
Greece: [
  { id:"nd",      name:"ND",      color:"#1A5CC6", logo:"greece/gr_ND_logo.png",      group:"EPP",     econ: 1.6,  social: 0.2,  eu: 2.6 },
  { id:"syriza",  name:"SYRIZA",  color:"#CA1E25", logo:"greece/gr_SYRIZA_logo.png",  group:"LEFT",    econ:-1.4,  social:-1.6,  eu: 1.1 },
  { id:"pasok",   name:"PASOK",   color:"#00793A", logo:"greece/gr_PASOK_logo.png",   group:"S&D",     econ:-0.6,  social:-0.8,  eu: 2.5 },
  { id:"kke",     name:"KKE",     color:"#8D191C", logo:"greece/gr_KKE_logo.png",                        econ:-3.0,  social: 2.2,  eu:-3.0 },
  { id:"spartans",name:"Spartans",color:"#E9B55F", logo:"greece/gr_Spartans_logo.png",                   econ: 1.7,  social: 3.0,  eu:-2.0 },
  { id:"el",      name:"EL",      color:"#7EA0C6", logo:"greece/gr_EL_logo.png",      group:"ECR",     econ: 1.4,  social: 2.6,  eu:-1.5 },
  { id:"niki",    name:"Niki",    color:"#910048", logo:"greece/gr_NIKI_logo.png",                       econ: 1.0,  social: 3.0,  eu:-1.2 },
  { id:"pe",      name:"PE",      color:"#AC3288", logo:"greece/gr_PE_logo.png",                         econ:-2.1,  social:-0.7,  eu:-2.3 },
  { id:"mera25",  name:"MeRA25",  color:"#E91A16", logo:"greece/gr_MeRa25_logo.png",  group:"LEFT",    econ:-1.7,  social:-1.1,  eu: 1.7 },
  { id:"fl",      name:"FL",      color:"#020C6A", logo:"greece/gr_FL_logo.png",      group:"PFE",     econ: 0.8,  social: 2.2,  eu:-1.6 },
  { id:"na",      name:"NA",      color:"#CC3234", logo:"greece/gr_NA_logo.png",      group:"LEFT",    econ:-1.8,  social:-2.0,  eu: 2.4 },
  { id:"kd",      name:"KD",      color:"#5A14AA", logo:"greece/gr_KD_logo.png",      group:"RENEW",   econ:-0.2,  social:-0.8,  eu: 2.5 },
],
Turkey: [
  { id:"akp",    name:"AKP",    color:"#FF9900", logo:"turkey/tr_AKP_logo.png",                       econ: 1.0,  social: 2.7,  eu:-0.7 },
  { id:"chp",    name:"CHP",    color:"#E30613", logo:"turkey/tr_CHP_logo.png",    group:"S&D",       econ:-0.7,  social:-2.0,  eu: 2.3 },
  { id:"mhp",    name:"MHP",    color:"#D90013", logo:"turkey/tr_MHP_logo.png",                       econ: 0.2,  social: 3.0,  eu:-2.0 },
  { id:"iyi",    name:"İYİ",    color:"#4CAEE5", logo:"turkey/tr_iYi_logo.png",   group:"RENEW",     econ: 1.5,  social:-1.0,  eu: 1.9 },
  { id:"dem",    name:"DEM",    color:"#74489D", logo:"turkey/tr_DEM_logo.png",    group:"S&D",       econ:-1.5,  social:-2.2,  eu: 1.5 },
  { id:"yrp",    name:"YRP",    color:"#ED1D24", logo:"turkey/tr_YRP_logo.png",                       econ:-1.3,  social: 3.0,  eu:-2.7 },
  { id:"zafer",  name:"ZAFER",  color:"#A9262B", logo:"turkey/tr_ZAFER_logo.png",                     econ:-0.5,  social: 2.7,  eu:-2.2 },
  { id:"tip",    name:"TİP",    color:"#C51F30", logo:"turkey/tr_TiP_logo.png",                       econ:-3.0,  social:-2.8,  eu:-1.5 },
  { id:"a",      name:"A",      color:"#142E53", logo:"turkey/tr_A_logo.png",                         econ: 1.5,  social: 2.6,  eu:-0.5 },
],
Armenia: [
  { id:"kp",   name:"KP",   color:"#0B0245", logo:"armenia/am_KP_logo.png",   group:"EPP",     econ: 0.6,  social:-0.8,  eu: 2.2 },
  { id:"hd",   name:"HD",   color:"#313962", logo:"armenia/am_HD_logo.png",   group:"S&D",     econ:-0.5,  social: 1.9,  eu:-1.9 },
  { id:"pud",  name:"PUD",  color:"#D9222A", logo:"armenia/am_PUD_logo.png",  group:"EPP",     econ: 0.8,  social: 2.0,  eu:-2.2 },
  { id:"pap",  name:"PAP",  color:"#264796", logo:"armenia/am_PAP_logo.png",  group:"ECR",     econ: 1.2,  social: 2.2,  eu:-2.5 },
  { id:"lh",   name:"LH",   color:"#6E3B88", logo:"armenia/am_LH_logo.png",   group:"RENEW",   econ: 1.9,  social:-1.8,  eu: 2.7 },
  { id:"hk",   name:"HK",   color:"#E4B000", logo:"armenia/am_HK_logo.png",                      econ: 0.4,  social:-0.6,  eu: 3.0 },
  { id:"azb",  name:"AZB",  color:"#292929", logo:"armenia/am_AZB_logo.png",                     econ: 0.3,  social: 1.1,  eu: 1.8 },
  { id:"hak",  name:"HAK",  color:"#FCB751", logo:"armenia/am_HAK_logo.png",  group:"RENEW",   econ:-0.4,  social:-1.3,  eu: 1.7 },
],
Georgia: [
  { id:"gd",          name:"GD",          color:"#26519D", logo:"georgia/ge_GD_logo.png",   econ:-0.6,  social: 2.7,  eu:-2.2 },
  { id:"unm",         name:"UNM",         color:"#D13529", logo:"georgia/ge_UNM_logo.png",         groups:["EPP","RENEW"], econ: 1.4,  social:-1.0,  eu: 2.7 },
  { id:"fg",          name:"FG",          color:"#250244", logo:"georgia/ge_FG_logo.png",          group:"EPP",   econ:-0.4,  social: 0.8,  eu: 2.3 },
  { id:"cfc",         name:"CfC",         color:"#F58832", logo:"georgia/ge_CfC_logo.png",         group:"RENEW",          econ: 0.7,  social:-1.2,  eu: 2.4 },
  { id:"sg",          name:"SG",          color:"#FCAF13", logo:"georgia/ge_SG_logo.png",          groups:["RENEW","S&D"], econ:-0.4,  social: 0.3,  eu: 2.4 },
  { id:"npcgirchi",   name:"NPC-Girchi",  color:"#00A454", logo:"georgia/ge_NPC-Girchi_logo.png",                        econ: 2.4,  social:-1.3,  eu: 0.4 },
  { id:"glp",         name:"GLP",         color:"#E1073B", logo:"georgia/ge_GLP_logo.png",                               econ:-1.4,  social: 0.2,  eu: 1.2 },
  { id:"apg",         name:"APG",         color:"#E7B031", logo:"georgia/ge_APG_logo.png",         group:"ECR",           econ:-0.7,  social: 2.9,  eu:-1.3 },
],
Ukraine: [
  { id:"sn",       name:"SN",       color:"#37B34A", logo:"ukraine/ua_SN_logo.png",       group:"RENEW",  econ: 0.5,  social:-0.8,  eu: 2.2 },
  { id:"pzzh",     name:"PZZh",     color:"#21409A", logo:"ukraine/ua_PZZh_logo.png",     group:"S&D",    econ:-1.1,  social: 1.8,  eu:-1.2 },
  { id:"batkiv",   name:"Batkiv",   color:"#EE2136", logo:"ukraine/ua_Batkiv_logo.png",   group:"EPP",    econ:-1.4,  social: 1.1,  eu: 1.9 },
  { id:"yes",      name:"YeS",      color:"#2760AD", logo:"ukraine/ua_YeS_logo.png",      group:"EPP",    econ: 1.7,  social: 0.9,  eu: 2.4 },
  { id:"holos",    name:"Holos",    color:"#FA4616", logo:"ukraine/ua_Holos_logo.png",    group:"RENEW",  econ: 1.3,  social:-1.9,  eu: 2.3 },
  { id:"svoboda",  name:"Svoboda",  color:"#0E294D", logo:"ukraine/ua_Svoboda_logo.png",                   econ:-2.0,  social: 2.9,  eu: 0.7 },
  { id:"corps",    name:"Corps",    color:"#040433", logo:"ukraine/ua_Corps_logo.png",                     econ:-2.4,  social: 3.0,  eu:-1.8 },
  { id:"udar",     name:"UDAR",     color:"#DA2127", logo:"ukraine/ua_UDAR_logo.png",     group:"EPP",    econ: 1.5,  social:-0.8,  eu: 2.1 },
  { id:"rozpol",   name:"RozPol",   color:"#00264A", logo:"ukraine/ua_RozPol_logo.png",                   econ: 0.9,  social: 0.4,  eu: 0.8 },
],
Cyprus: [
  { id:"disy",  name:"DISY",  color:"#034693", logo:"cyprus/cy_DISY_logo.png",  group:"EPP",        econ: 1.9,  social: 0.7,  eu: 2.4 },
  { id:"akel",  name:"AKEL",  color:"#EC1E27", logo:"cyprus/cy_AKEL_logo.png",  group:"LEFT",       econ:-2.8,  social:-2.0,  eu: 0.7 },
  { id:"elam",  name:"ELAM",  color:"#286CB5", logo:"cyprus/cy_ELA,_logo.png",  group:"ECR",        econ: 0.4,  social: 3.0,  eu:-1.7 },
  { id:"alma",  name:"ALMA",  color:"#0028C4", logo:"cyprus/cy_ALMA,_logo.png",                      econ: 0.9,  social:-0.8,  eu: 1.8 },
  { id:"diko",  name:"DIKO",  color:"#0033A1", logo:"cyprus/cy_DIKO_logo.png",  group:"S&D",        econ:-0.6,  social: 0.6,  eu: 2.3 },
  { id:"volt",  name:"Volt",  color:"#502379", logo:"cyprus/cy_Volt_logo.png",  group:"GREENS",     econ: 0.9,  social:-1.8,  eu: 3.0 },
  { id:"edek",  name:"EDEK",  color:"#0E736C", logo:"cyprus/cy_EDEK_logo.png",  group:"S&D",        econ:-0.8,  social: 0.3,  eu: 1.8 },
  { id:"kosp",  name:"KOSP",  color:"#0A9748", logo:"cyprus/cy_KOSP_logo.png",  group:"GREENS",     econ:-1.0,  social:-2.1,  eu: 2.1 },
  { id:"dipa",  name:"DiPA",  color:"#00AEEF", logo:"cyprus/cy_DiPA_logo.png",  group:"RENEW",      econ: 1.2,  social:-0.2,  eu: 2.5 },
  { id:"ep",    name:"EP",    color:"#0F6852", logo:"cyprus/cy_EP_logo.png",                        econ: 0.3,  social: 2.6,  eu:-1.2 },
  { id:"apc",   name:"APC",   color:"#EB7203", logo:"cyprus/cy_APC_logo.png",   group:"LEFT",       econ:-0.8,  social:-2.4,  eu: 1.2 },
],

Romania: [
  { id:"psd",    name:"PSD",    color:"#EF3340", logo:"romania/ro_PSD_logo.png",    group:"S&D",    econ:-0.6,  social: 1.0,  eu: 1.1 },
  { id:"pnl",    name:"PNL",    color:"#2461A2", logo:"romania/ro_PNL_logo.png",    group:"EPP",    econ: 1.2,  social: 1.8,  eu: 2.0 },
  { id:"usr",    name:"USR",    color:"#002A5A", logo:"romania/ro_USR_logo.png",    group:"RENEW",  econ: 0.3,  social:-0.8,  eu: 2.4 },
  { id:"aur",    name:"AUR",    color:"#FCB21F", logo:"romania/ro_AUR_logo.png",    group:"ECR",    econ: 0.1,  social: 2.5,  eu:-1.7 },
  { id:"udmr",   name:"UDMR",   color:"#00833E", logo:"romania/ro_UDMR_logo.png",   group:"EPP",    econ: 0.6,  social: 1.1,  eu: 1.9 },
  { id:"per",    name:"AER",    color:"#087241", logo:"romania/ro_AER_logo.png",    group:"GREENS", econ:-0.7,  social: 0.5,  eu:1 },
  { id:"sens",   name:"SENS",   color:"#364B44", logo:"romania/ro_SENS_logo.png",   group:"GREENS", econ:-0.5,  social:-1.8,  eu: 2.1 },
  { id:"pmp",    name:"PMP",    color:"#007BC0", logo:"romania/ro_PMP_logo.png",    group:"RENEW",  econ: 0.9,  social: 2.0,  eu: 1.4 },
  { id:"fd",     name:"FD",     color:"#08510A", logo:"romania/ro_FD_logo.png",     group:"EPP",    econ: 1.1,  social: 1.6,  eu: 1.7 },
  { id:"reper",  name:"REPER",  color:"#C40075", logo:"romania/ro_reper_logo.png",  group:"RENEW",  econ: 0.2,  social:-0.9,  eu: 2.3 },
  { id:"sos",    name:"SOS",    color:"#4DA9DA", logo:"romania/ro_SOS_logo.png",                       econ:-0.2,  social: 2.8,  eu:-2.3 },
  { id:"pot",    name:"POT",    color:"#330099", logo:"romania/ro_POT_logo.png",                       econ: 0.7,  social: 2.5,  eu:-2.4 },
],
Bulgaria: [
  { id:"gerb",      name:"GERB",      color:"#173F6E", logo:"bulgaria/bg_GERB_logo.png",      group:"EPP",    econ: 1.4,  social: 1.6,  eu: 2.0 },
  { id:"sds",       name:"SDS",       color:"#295CB3", logo:"bulgaria/bg_SDS_logo.png",       group:"EPP",    econ: 1.0,  social: 1.2,  eu: 2.4 },
  { id:"pp",        name:"PP",        color:"#0014FE", logo:"bulgaria/bg_PP_logo.png",        group:"RENEW",  econ: 0.7,  social:-0.8,  eu: 2.5 },
  { id:"dab",       name:"DaB",       color:"#A0C518", logo:"bulgaria/bg_DaB_logo.png",       group:"EPP",    econ: 0.8,  social:-0.6,  eu: 2.5 },
  { id:"dsb",       name:"DSB",       color:"#02528A", logo:"bulgaria/bg_DSB_logo.png",       group:"EPP",    econ: 1.2,  social: 1.0,  eu: 2.2 },
  { id:"v",         name:"V",         color:"#C29E62", logo:"bulgaria/bg_V_logo.png",         group:"ESN",    econ:-0.3,  social: 2.8,  eu:-2.7 },
  { id:"dpsnn",     name:"DPS-NN",    color:"#0563A8", logo:"bulgaria/bg_DPS-NN_logo.png",                      econ: 0.9,  social: 0.6,  eu: 1.0 },
  { id:"bsp",       name:"BSP",       color:"#D7171E", logo:"bulgaria/bg_BSP_logo.png",       group:"S&D",    econ:-0.7,  social: 0.6,  eu: 0.5 },
  { id:"aps",       name:"APS",       color:"#1968B5", logo:"bulgaria/bg_APS_logo.png",       group:"RENEW",  econ: 0.4,  social: 0.3,  eu: 1.6 },
  { id:"itn",       name:"ITN",       color:"#4BB7DE", logo:"bulgaria/bg_ITN_logo.png",       group:"ECR",    econ: 0.9,  social: 1.2,  eu: 0.7 },
  { id:"mech",      name:"MECh",      color:"#9A2929", logo:"bulgaria/bg_MECh_logo.png",                         econ: 0.2,  social: 2.3,  eu:-1.2 },
  { id:"velichie",  name:"Velichie",  color:"#AC2225", logo:"bulgaria/bg_Velichie_logo.png",                     econ: 0.1,  social: 1.9,  eu:-1.3 },
],
Albania: [
  { id:"ps",     name:"PS",     color:"#781D6F", logo:"albania/al_PS_logo.png",     group:"S&D",   econ:-0.6,  social:-0.2,  eu: 2.0 },
  { id:"pd",     name:"PD",     color:"#00529C", logo:"albania/al_PD_logo.png",     group:"EPP",   econ: 0.9,  social: 0.8,  eu: 1.8 },
  { id:"psd",    name:"PSD",    color:"#0C5D34", logo:"albania/al_PSD_logo.png",                        econ:-0.2,  social: 0.2,  eu: 1.6 },
  { id:"lshb",   name:"LSHB",   color:"#F57F20", logo:"albania/al_LSHB_logo.png",                       econ: 0.3,  social: 0.2,  eu: 1.2 },
  { id:"pm",     name:"PM",     color:"#103996", logo:"albania/al_PM_logo.png",                         econ: 1.7,  social: 0.8,  eu: 1.5 },
  { id:"bashke", name:"BASHKE", color:"#E82D36", logo:"albania/al_BASHKE_logo.png", group:"LEFT",  econ:-1.9,  social:-1.6,  eu: 0.9 },
  { id:"pdiu",   name:"PDIU",   color:"#009EE2", logo:"albania/al_PDIU_logo.png",                       econ: 0.4,  social: 2.1,  eu: 1.1 },
  { id:"pl",     name:"PL",     color:"#C02428", logo:"albania/al_PL_logo.png",                         econ:-0.2,  social: 0.9,  eu: 1.8 },
  { id:"nth",    name:"NTH",    color:"#00798D", logo:"albania/al_NTH_logo.png",                        econ: 0.2,  social:-0.8,  eu: 2.0 },
  { id:"kea",    name:"KEA",    color:"#005EBD", logo:"albania/al_KEA_logo.png",                        econ: 1.1,  social: 0.3,  eu: 2.7 },
  { id:"dzh",    name:"Dzh",    color:"#592C50", logo:"albania/al_Dzh_logo.png",                        econ: 1.3,  social: 1.8,  eu: 1.5 },
],
Moldova: [
  { id:"pas",   name:"PAS",   color:"#FFDD00", logo:"moldova/md_PAS_logo.png",   group:"EPP",        econ: 0.9,  social:-0.5,  eu: 2.8 },
  { id:"psrm",  name:"PSRM",  color:"#CA333D", logo:"moldova/md_PSRM_logo.png",  group:"LEFT",       econ:-1.6,  social: 2.0,  eu:-2.1 },
  { id:"pcrm",  name:"PCRM",  color:"#D2222A", logo:"moldova/md_PCRM_logo.png",  group:"LEFT",       econ:-2.4,  social: 2.3,  eu:-2.4 },
  { id:"a",     name:"A",     color:"#026D59", logo:"moldova/md_A_logo.png",     group:"S&D",        econ:-0.3,  social: 0.1,  eu:-0.6 },
  { id:"da",    name:"DA",    color:"#24247A", logo:"moldova/md_DA_logo.png",                          econ: 0.6,  social: 2.2,  eu: 0.8 },
  { id:"pn",    name:"PN",    color:"#2680FA", logo:"moldova/md_PN_logo.png",                          econ:-1.3,  social: 2.1,  eu:-1.7 },
  { id:"psde",  name:"PSDE",  color:"#D93029", logo:"moldova/md_PSDE_logo.png",  group:"S&D",        econ:-0.4,  social: 0.6,  eu: 1.6 },
  { id:"pve",   name:"PVE",   color:"#69A921", logo:"moldova/md_PVE_logo.png",   group:"GREENS",     econ:-0.8,  social:-1.3,  eu: 1.9 },
],

  // Add other countries...
};

// ===== LOGO POSITION TWEAKS =====
const LOGO_OFFSETS = {
  Iceland:{x:30,y:0}, Greenland:{x:20,y:-50}, Norway:{x:-340,y:400}, Sweden:{x:-70,y:280},
  Finland:{x:60,y:250}, Denmark:{x:-55,y:0}, UK:{x:70,y:100}, Wales:{x:17,y:0},Scotland:{x:-10,y:120},Ireland:{x:40,y:20}, NIreland:{x:10,y:-10},
  Estonia:{x:37,y:-10}, Latvia:{x:75,y:-10}, Lithuania:{x:25,y:-10}, Cyprus:{x:-10,y:20},
  Netherlands:{x:10,y:-10}, Belgium:{x:10,y:-20}, France:{x:0,y:-50}, Spain:{x:-100,y:20},
  Portugal:{x:10,y:-100}, Italy:{x:-10,y:-80}, Austria:{x:115,y:0}, Czechia:{x:-50,y:-10},
  Ukraine:{x:0,y:-30}, Moldova:{x:0,y:-50}, Slovakia:{x:0,y:-20}, Slovenia:{x:-20,y:5}, Croatia:{x:10,y:-120},
  Bosnia:{x:10,y:-30}, Montenegro:{x:0,y:-10}, Albania:{x:10,y:50}, NorthMacedonia:{x:0,y:-20},
  Armenia:{x:-20,y:-27}, Greece:{x:-150,y:-80}, Germany:{x:-10,y:-50}, Netherlands:{x:20,y:-10}, Switzerland:{x:0,y:-12}, Poland:{x:0,y:-12}, Hungary:{x:0,y:12}, 
  Romania:{x:-20,y:0}
};
const LOGO_SCALE = { Norway:1.0, Austria:1.0, Croatia:0.7, France:5.0, Italy:2.0, Portugal:3.0, Spain:5.0, Ireland:3.0, NIreland:2.7, UK:2.7, Wales:2.1, Scotland:2.2, Greenland:3.0, Iceland:4.0, Norway:2.2,
  Sweden:3.0, Finland:3.2, Denmark:2.3, Germany:4.0, Netherlands:3.0, Belgium:2.5, Switzerland:4.5, Estonia:3.5, Latvia:4.0, Lithuania:3.5, Poland:3.7, Czechia:5.0, Austria:4.0,
  Slovakia:3.5, Hungary:4.0, Slovenia:4.0, Croatia:2.0, Bosnia:3.5, Serbia: 2.8, Kosovo:3.0, Montenegro:3.0, NorthMacedonia:3.0, Greece:1.5, Turkey:5.0, Armenia:3.0, Georgia:4.0,
  Ukraine:4.0, Cyprus:2.0, Romania:4.0, Bulgaria:3.0, Albania:2.7, Moldova:3.0
};

// =====  STATE  =====
let selectedCountry = null;
let sideTitle, partyList;
let userHasInteracted = false;
let ro;

let svg, europe, mapRoot;
let scale = 1, tx = 0, ty = 0;
const MIN_SCALE = 0.25, MAX_SCALE = 8;
const PADDING = 24;
const SELECT_GOLD = "#F6D64C";
// ===== SPECTRUM PIN / PREVIEW STATE =====
let pinnedLake = null;       // null | { type:'you' } | { type:'group', code:string }
let previewMarkerEl = null;  // DOM node for party hover preview in the spectrum plot

// Panning
let isPanning = false;
let panStart = { x: 0, y: 0 };
let viewStart = { tx: 0, ty: 0, scale: 1 };   // add scale

const minorPartiesOpen = new Map(); // country -> true/false
// Selections: Map(country -> { partyId, color, logoHref })
const selections = new Map();

// ===== SPECTRUM ENGINE =====
const SPEC_KEYS = ["economic","social","eu"];
const SPEC_RANGE = { min:-3, max:3 };
// Category labels for spectrums (top vs bottom)
const SPEC_LABELS = {
  economic: { top: "Free-market", bottom: "State control" },
  social:   { top: "Conservative", bottom: "Progressive" },
  eu:       { top: "Pro-EU",       bottom: "Eurosceptic" },
};

function normalizeScore(v){ return Math.max(SPEC_RANGE.min, Math.min(SPEC_RANGE.max, v)); }
// ===== NEW VIEW & AXIS MODES =====
const VIEW = { MAP:"map", SPECTRUM:"spectrum", MATCH:"match" }; // <- added MATCH
const AXIS = { SOC:"SOC", ECON:"ECON", COMP:"COMP", SOC_ECON:"SOC_ECON" };
// Auto-match overlays (don’t touch real selections)
const autoHighlights = new Map(); // country -> { partyId }

// Lake color palette (feel free to tweak hexes)
const GROUP_COLORS = {
  "LEFT":  "#B51C21",
  "GREENS":"#00B500",
  "S&D":   "#D70000",
  "RENEW": "#FDD701",
  "EPP":   "#3399FE",
  "ECR":   "#1A6CA8",
  "PFE":   "#301C59",
  "ESN":   "#001B37",
  // fallback if unknown:
  "_FALLBACK": "#8888ff",
};

// cache: key -> { pathD, color, heat: [{x,y}], hullPts:[{x,y}] }
const lakeCache = new Map();

let viewMode = VIEW.MAP;
let axisMode = AXIS.COMP; // default preset when opening spectrum

// freeze map interactions when spectrum is open
let mapFrozen = false;

// Convert a score in [-3,3] → pixel Y within a given bar element (top=+3, bottom=-3)


function getSelectedParties(){
  const out = [];
  for (const [country, sel] of selections.entries()){
    const parties = PARTY_DB[country] ?? PARTY_DB.DEFAULT;
    let p = sel.partyId ? parties.find(pp => pp.id === sel.partyId) : null;
    if (!p) p = parties.find(pp => pp.color === sel.color && pp.logo === sel.logoHref) || null;
    if (p) out.push(p);
  }
  return out;
}

function computeUserSpec(){
  const parts = getSelectedParties();
  if (!parts.length) return null;
  const sum = { economic:0, social:0, eu:0 };
  parts.forEach(p => {
    sum.economic += (p.econ ?? 0);
    sum.social   += (p.social ?? 0);
    sum.eu       += (p.eu ?? 0);
  });
  return {
    economic: normalizeScore(sum.economic / parts.length),
    social:   normalizeScore(sum.social   / parts.length),
    eu:       normalizeScore(sum.eu       / parts.length),
  };
}
// ===== MATCHING ENGINE =====
let MATCH_WEIGHTS = { econ: 1, soc: 1, eu: 1 };
let lockSelectedParties = false;
let includeMinorMatches = false;
const AXIS_RANGE = 6; // each axis spans [-3,3] => 6
const DMAX = Math.sqrt(
  MATCH_WEIGHTS.econ * AXIS_RANGE * AXIS_RANGE +
  MATCH_WEIGHTS.soc  * AXIS_RANGE * AXIS_RANGE +
  MATCH_WEIGHTS.eu   * AXIS_RANGE * AXIS_RANGE
);

function computeMatchPercent(a, b){
  // a,b: {economic/econ, social, eu}
  const ae = Number(a.econ ?? a.economic ?? 0);
  const as = Number(a.social ?? 0);
  const au = Number(a.eu ?? 0);

  const be = Number(b.econ ?? b.economic ?? 0);
  const bs = Number(b.social ?? 0);
  const bu = Number(b.eu ?? 0);

  const de = ae - be, ds = as - bs, du = au - bu;
  const d = Math.sqrt(
    MATCH_WEIGHTS.econ * de*de +
    MATCH_WEIGHTS.soc  * ds*ds +
    MATCH_WEIGHTS.eu   * du*du
  );
  const pct = Math.round(100 * (1 - d / DMAX));
  return Math.max(0, Math.min(100, pct));
}

function getYouVector(){
  const you = computeUserSpec();
  if (!you) return null;
  return { econ: you.economic, social: you.social, eu: you.eu };
}

function scoreCountryPartiesForYou(country, youVec){
  const arr = PARTY_DB[country] || [];
  const filteredArr = includeMinorMatches
  ? arr
  : arr.filter(p => p.tier !== "minor");
  const out = filteredArr.map(p => {
    const pct = computeMatchPercent(youVec, { econ:p.econ, social:p.social, eu:p.eu });
    return { party:p, percent:pct };
  });
  out.sort((a,b)=> b.percent - a.percent || a.party.name.localeCompare(b.party.name));
  return out;
}

function scoreAllGroupsForYou(youVec){
  const groups = computeBlendedGroupSpecs(); // { code: {economic,social,eu} }
  const out = [];
  for (const [code, g] of Object.entries(groups)){
    const percent = computeMatchPercent(youVec, { econ:g.economic, social:g.social, eu:g.eu });
    const meta = EU_GROUPS[code] || {};
    out.push({ code, name: meta.name || code, logo: meta.logo || "", color: (GROUP_COLORS[code] || GROUP_COLORS._FALLBACK), percent });
  }
  out.sort((a,b)=> b.percent - a.percent || a.name.localeCompare(b.name));
  return out;
}

function bestPartyForCountry(country, youVec){
  const list = scoreCountryPartiesForYou(country, youVec);
  return list[0] || null; // {party, percent} or null
}

// Parties may declare a single `group:"EPP"` or multiple `groups:["S&D","GREENS"]`.
// This returns [{code, weight}, ...] with weights summing to 1.
function normalizeGroupCode(code){
  if (!code) return null;

  const s = String(code).trim();

  const map = {
    "LEFT": "LEFT",
    "The Left": "LEFT",

    "GREENS": "GREENS",
    "Greens/EFA": "GREENS",
    "GREEN": "GREENS",

    "S&D": "S&D",

    "Renew": "RENEW",
    "RENEW": "RENEW",

    "EPP": "EPP",
    "ECR": "ECR",

    "PfE": "PFE",
    "PFE": "PFE",

    "ESN": "ESN"
  };

  return map[s] || s;
}

function parseAffiliations(p){
  let raw = [];

  if (Array.isArray(p.groups)) {
    raw = p.groups;
  } else if (Array.isArray(p.group)) {
    raw = p.group;
  } else if (typeof p.group === "string") {
    const g = p.group.trim();

    // IMPORTANT: do NOT split "S&D"
    // Only split mixed groups written with spaces around &
    if (g.includes(" & ")) {
      raw = g.split(" & ").map(x => x.trim());
    } else {
      raw = [g];
    }
  }

  const codes = raw
    .map(normalizeGroupCode)
    .filter(Boolean)
    .filter((code, i, arr) => arr.indexOf(code) === i);

  if (!codes.length) return [];

  const w = 1 / codes.length;
  return codes.map(code => ({ code, weight: w }));
}
// ===== COMPOSITE WEIGHTING RULES (by EU group) =====
const COMPOSITE_WEIGHTS = {
  DEFAULT: { econ: 1, social: 1 },
  LEFT:    { econ: 10, social: 1 },
  ESN:     { econ: 1, social: 5 },
  PFE:     { econ: 1, social: 5 },
  ECR:     { econ: 1, social: 2 },
};

// Primary affiliation code for a party (first listed or single group)
function primaryAffiliationCode(p){
  const affs = parseAffiliations(p);
  return (affs && affs.length) ? affs[0].code : null;
}

// Per-party composite using the weighting table above
function compositeForParty(p){
  const code = primaryAffiliationCode(p);
  const w = COMPOSITE_WEIGHTS[code] || COMPOSITE_WEIGHTS.DEFAULT;
  const e = Number(p.econ ?? 0);
  const s = Number(p.social ?? 0);
  const val = (w.econ * e + w.social * s) / (w.econ + w.social);
  return clampSpec(val);
}

// "You" composite: average of each selected party's weighted composite
function computeYouCompositeWeighted(){
  const parts = getSelectedParties();
  if (!parts.length) return null;
  let sum = 0;
  parts.forEach(p => { sum += compositeForParty(p); });
  return normalizeScore(sum / parts.length);
}
function compositeForGroup(code, g){
  const w = COMPOSITE_WEIGHTS[code] || COMPOSITE_WEIGHTS.DEFAULT;
  const e = Number(g.economic ?? 0);
  const s = Number(g.social ?? 0);
  const val = (w.econ * e + w.social * s) / (w.econ + w.social);
  return clampSpec(val);
}

// === NEW: global EU-group averages across the entire DB (independent of selection) ===
function computeGlobalGroupSpecs(){
  const buckets = {}; // group -> { w, economic, social, eu }
  const add = (code, w, p) => {
    if (!code) return;
    if (!buckets[code]) buckets[code] = { w:0, economic:0, social:0, eu:0 };
    buckets[code].w        += w;
    buckets[code].economic += (p.econ ?? 0) * w;
    buckets[code].social   += (p.social ?? 0) * w;
    buckets[code].eu       += (p.eu ?? 0) * w;
  };

  let sawAny = false;

  for (const country in PARTY_DB){
    if (country === "DEFAULT") continue;
    const arr = PARTY_DB[country] || [];
    arr.forEach(p => {
      const affs = parseAffiliations(p);
      if (affs.length) sawAny = true;
      affs.forEach(({code, weight}) => add(code, weight, p));
    });
  }

  // Fallback to DEFAULT so something shows before you fill data
  if (!sawAny && PARTY_DB.DEFAULT?.length){
    PARTY_DB.DEFAULT.forEach(p => {
      const affs = parseAffiliations(p);
      affs.forEach(({code, weight}) => add(code, weight, p));
    });
  }

  const out = {};
  for (const g in buckets){
    const b = buckets[g];
    out[g] = {
      economic: normalizeScore(b.economic / (b.w || 1)),
      social:   normalizeScore(b.social   / (b.w || 1)),
      eu:       normalizeScore(b.eu       / (b.w || 1)),
    };
  }
  return out;
}

// === BLEND empirical group means with theoretical priors (2:1) ===
const GROUP_DATA_WEIGHT  = 2; // empirical
const GROUP_PRIOR_WEIGHT = 1; // theoretical
const GROUP_BLEND_DENOM  = GROUP_DATA_WEIGHT + GROUP_PRIOR_WEIGHT;

function computeBlendedGroupSpecs(){
  const empirical = computeGlobalGroupSpecs(); // { [code]: {economic, social, eu} }
  const blended = {};

  // For all groups that appear empirically
  for (const code in empirical){
    const e = empirical[code];
    const prior = EU_GROUPS[code]?.prior;
    if (prior){
      blended[code] = {
        economic: normalizeScore(((GROUP_DATA_WEIGHT*e.economic) + (GROUP_PRIOR_WEIGHT*prior.economic)) / GROUP_BLEND_DENOM),
        social:   normalizeScore(((GROUP_DATA_WEIGHT*e.social)   + (GROUP_PRIOR_WEIGHT*prior.social))   / GROUP_BLEND_DENOM),
        eu:       normalizeScore(((GROUP_DATA_WEIGHT*e.eu)       + (GROUP_PRIOR_WEIGHT*prior.eu))       / GROUP_BLEND_DENOM),
      };
    } else {
      // No prior → show pure empirical
      blended[code] = {
        economic: e.economic,
        social:   e.social,
        eu:       e.eu,
      };
    }
  }

  // For groups that have a prior but no empirical entries yet → show pure prior
  for (const code in EU_GROUPS){
    if (!blended[code] && EU_GROUPS[code]?.prior){
      const prior = EU_GROUPS[code].prior;
      blended[code] = {
        economic: normalizeScore(prior.economic),
        social:   normalizeScore(prior.social),
        eu:       normalizeScore(prior.eu),
      };
    }
  }

  return blended;
}


// =====  INIT  =====
window.addEventListener('DOMContentLoaded', () => {
  
  // Sidebar nodes
  sideTitle = document.getElementById('sideTitle');
  partyList = document.getElementById('partyList');
  // Add a main page title above the chooser (do this once on load)
// (inside DOMContentLoaded, after sideTitle/partyList)
const sidePanelRoot = document.getElementById('sidePanel');
if (sidePanelRoot && !document.getElementById('mainChooserTitle')) {
  const titleBlock = document.createElement('div');
  titleBlock.id = 'mainChooserTitle';
  titleBlock.className = 'page-title';
  titleBlock.innerHTML = `
    <h1>Who would you vote for?</h1>
  `;
  sidePanelRoot.insertBefore(titleBlock, sidePanelRoot.firstChild);
}



  // SVG handles
  svg = document.getElementById('mapSvg');
  mapRoot = svg.querySelector('#mapRoot') || svg; // wrapper we transform
  europe  = svg.querySelector('#Europe')  || svg; // geometry group
// ==== BUILD DRAWER (left) ====
const leftPanel = document.getElementById('leftPanel');
leftPanel.innerHTML = `
  <button id="btnOpenSpectrum" class="drawer-toggle" title="Open spectrum">
    <span>Spectrums</span>
    <span class="chev">▶</span>
  </button>
  <button id="btnOpenMatches" class="drawer-toggle" title="Open matches">
    <span>Matches</span>
    <span class="chev">▶</span>
  </button>
`;




// ==== BUILD SPECTRUM OVERLAY (center, on top of map) ====
const overlay = document.createElement('div');

overlay.id = 'spectrumOverlay';
overlay.innerHTML = `
  <div class="spx-topbar">
    <div class="title">2-Axis Spectrum</div>
    <div class="actions"></div>
  </div>
  <div id="axisPresetTitle">Composite vs EU Position</div>
  <div class="spx-plot" id="spxPlot">
    <div class="spx-plot-inner">
      <div class="spx-axes"></div>
      <div class="spx-items" id="spxItems"></div>

      <!-- axis end-caps at +/-3 -->
      <div class="spx-axis-cap spx-cap-y-top"   id="capYTop"></div>
      <div class="spx-axis-cap spx-cap-y-bot"   id="capYBot"></div>
      <div class="spx-axis-cap spx-cap-x-left"  id="capXLeft"></div>
      <div class="spx-axis-cap spx-cap-x-right" id="capXRight"></div>
    </div>
  </div>
  <div class="spx-legend">
    <span class="legend-dot"></span><span>You</span>
    <span class="legend-sq"></span><span>EU groups</span>
  </div>
`;
document.getElementById('mapContainer').appendChild(overlay);




// ==== RIGHT PANEL: Axis presets tray (appears only in spectrum mode) ====
const sidePanel = document.getElementById('sidePanel');
const axisPanel = document.createElement('div');
axisPanel.id = 'axisPanel';
axisPanel.innerHTML = `
  <h2>Axis Presets</h2>
  <div class="axis-options" id="axisOptions">
    <div class="axis-radio">
      <input type="radio" id="axis_SOC" name="axis" value="SOC">
      <label class="axis-pill" for="axis_SOC">Social vs EU Position</label>
    </div>
    <div class="axis-radio">
      <input type="radio" id="axis_SOC_ECON" name="axis" value="SOC_ECON">
      <label class="axis-pill" for="axis_SOC_ECON">Social vs Economic Position</label>
    </div>
    <div class="axis-radio">
      <input type="radio" id="axis_ECON" name="axis" value="ECON">
      <label class="axis-pill" for="axis_ECON">Economic vs EU Position</label>
    </div>
    <div class="axis-radio">
      <input type="radio" id="axis_COMP" name="axis" value="COMP">
      <label class="axis-pill" for="axis_COMP">
        Composite vs EU Position
        <span class="info-tip2" data-tip="Composite is the average value of the party’s social and economic position.">i</span>
      </label>
    </div>
  </div>
`;

const spectrumHelp = document.createElement('div');
spectrumHelp.id = 'spectrumHelp';
spectrumHelp.style.display = 'none';
spectrumHelp.className = 'hint';
spectrumHelp.innerHTML = `
  Click an EU group or the YOU icon to see the lakes
  <span class="info-tip" data-tip="Lakes show the range of parties within the group. The dark spots show parties within it; the darker the spot, the more parties are concentrated in that area.">i</span>
`;
sidePanel.appendChild(spectrumHelp);



sidePanel.appendChild(axisPanel);
// ===== Spectrum selection result panel (appears when YOU or a group is pinned) =====
const spxSelectionPanel = document.createElement('div');
spxSelectionPanel.id = 'spxSelectionPanel';
spxSelectionPanel.style.display = 'none';
spxSelectionPanel.innerHTML = `<div class="muted">Click “You” or an EU group on the spectrum to see ranked parties here.</div>`;
sidePanel.appendChild(spxSelectionPanel);

// ==== RIGHT PANEL: Matches tray (appears only in MATCH mode) ====
const matchesPanel = document.createElement('div');
matchesPanel.id = 'matchesPanel';
matchesPanel.style.display = 'none';
matchesPanel.innerHTML = `
  <div class="panel-title">Which parties are closest to your typical preference?</div>
  <div class="panel-subtitle">
    This isn’t a political test. It compares your averaged selections with parties and EU groups.
  </div>

  <button id="lockSelectedBtn" class="match-lock-btn">
    Lock selected parties: OFF
  </button>
<button id="includeMinorBtn" class="match-lock-btn">
  Include minor parties: OFF
</button>
  <div class="match-weight-box">
    <div class="match-weight-title">Customize match calculation</div>

    <label class="weight-row">
      <span>Economic</span>
      <input type="range" id="weightEcon" min="0.2" max="3" step="0.1" value="1">
      <strong id="weightEconVal">1.0×</strong>
    </label>

    <label class="weight-row">
      <span>Social</span>
      <input type="range" id="weightSocial" min="0.2" max="3" step="0.1" value="1">
      <strong id="weightSocialVal">1.0×</strong>
    </label>

    <label class="weight-row">
      <span>EU</span>
      <input type="range" id="weightEU" min="0.2" max="3" step="0.1" value="1">
      <strong id="weightEUVal">1.0×</strong>
    </label>
  </div>

  <div id="matchesBody" class="matches-body"></div>
`;
sidePanel.appendChild(matchesPanel);

matchesPanel.addEventListener("click", (e) => {
  if (e.target.id === "lockSelectedBtn") {
    lockSelectedParties = !lockSelectedParties;
    e.target.textContent = lockSelectedParties
      ? "Lock selected parties: ON"
      : "Lock selected parties: OFF";

    drawAutoOverlay();
    renderMatches();
  }

  if (e.target.id === "includeMinorBtn") {
    includeMinorMatches = !includeMinorMatches;
    e.target.textContent = includeMinorMatches
      ? "Include minor parties: ON"
      : "Include minor parties: OFF";

    drawAutoOverlay();
    renderMatches();
  }
});

matchesPanel.addEventListener("input", (e) => {
  if (!["weightEcon", "weightSocial", "weightEU"].includes(e.target.id)) return;

  MATCH_WEIGHTS = {
    econ: Number(document.getElementById("weightEcon").value),
    soc: Number(document.getElementById("weightSocial").value),
    eu: Number(document.getElementById("weightEU").value)
  };

  document.getElementById("weightEconVal").textContent = MATCH_WEIGHTS.econ.toFixed(1) + "×";
  document.getElementById("weightSocialVal").textContent = MATCH_WEIGHTS.soc.toFixed(1) + "×";
  document.getElementById("weightEUVal").textContent = MATCH_WEIGHTS.eu.toFixed(1) + "×";

  drawAutoOverlay();
  renderMatches();
});


// set default radio
axisPanel.querySelector(`input[value="${axisMode}"]`).checked = true;

// listen for changes
axisPanel.addEventListener('change', (e) => {
  if(e.target && e.target.name === 'axis'){
    axisMode = e.target.value;
    lakeCache.clear();           // <--- add this
    renderSpectrum();
    
  }
});

// Hook up the Spectrums button (exclusive with Matches)
const drawerBtn = document.getElementById('btnOpenSpectrum');
drawerBtn.addEventListener('click', () => {
  if (viewMode === VIEW.SPECTRUM) {
    closeSpectrum();
  } else {
    if (viewMode === VIEW.MATCH) closeMatches();
    openSpectrum();
  }
});

const matchesBtn = document.getElementById('btnOpenMatches');
matchesBtn.addEventListener('click', () => {
  if (viewMode === VIEW.MATCH) {
    closeMatches();
  } else {
    if (viewMode === VIEW.SPECTRUM) closeSpectrum();
    openMatches();
  }
});


const GROUP_LABEL = {
  'PFE': 'PfE',
  'ESN': 'ESN',
  'GREENS': 'Greens/EFA',
  'S&D': 'S&D',
  'LEFT': 'The Left',
  'ECR': 'ECR',
  'EPP': 'EPP',
  'RENEW': 'Renew',
};
function displayGroupLabel(code){
  return GROUP_LABEL[code] || code;
}



  // Tag countries
  tagCountries();

  // Controls
  const btnFit     = document.getElementById('btnFit');
  const btnZoomIn  = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');

  btnFit.addEventListener('click', () => { userHasInteracted = false; fitAll(); });
  btnZoomIn.addEventListener('click',  () => { markInteracted(); zoomAtCenter(1.15); });
  btnZoomOut.addEventListener('click', () => { markInteracted(); zoomAtCenter(1/1.15); });
// Set spectrum top/bottom labels (and clear any numbers)


  // Mouse wheel zoom (cursor-centric)
  svg.addEventListener('wheel', (e)=>{ markInteracted(); onWheel(e); }, { passive:false });

  // Drag to pan
  svg.addEventListener('mousedown', (e)=>{ markInteracted(); onPanStart(e); });
  window.addEventListener('mousemove', onPanMove);
  window.addEventListener('mouseup', onPanEnd);

  // Click handler (delegation)
  svg.addEventListener('click', onMapClick);

  // First fit + spectra after layout settles
  requestAnimationFrame(() => requestAnimationFrame(() => {
    fitAll();
    updateSpectrums();
  }));

  // Optional re-fit before user interacts
  const container = document.getElementById('mapContainer');
  ro = new ResizeObserver(entries => {
    if (userHasInteracted) return;
    for (const e of entries) {
      if (e.contentRect.width > 0 && e.contentRect.height > 0) {
        fitAll();
        updateSpectrums();
      }
    }
  });
  ro.observe(container);
});

// ↓↓↓ paste here ↓↓↓
function ensureLakeSvg() {
  const inner = document.querySelector('.spx-plot-inner');
  let svg = inner.querySelector('svg.lake-svg');
  if (svg) return svg;

  svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('lake-svg');
  svg.setAttribute('viewBox', '0 0 1000 1000');
  svg.setAttribute('preserveAspectRatio', 'none');

  const defs = document.createElementNS(svg.namespaceURI, 'defs');

  const filt = document.createElementNS(svg.namespaceURI, 'filter');
  filt.setAttribute('id', 'lakeHeatBlur');
  filt.setAttribute('x', '-10%');
  filt.setAttribute('y', '-10%');
  filt.setAttribute('width', '120%');
  filt.setAttribute('height', '120%');
  const gauss = document.createElementNS(svg.namespaceURI, 'feGaussianBlur');
  gauss.setAttribute('stdDeviation', '8');
  filt.appendChild(gauss);

  const clip = document.createElementNS(svg.namespaceURI, 'clipPath');
  clip.setAttribute('id', 'lakeClip');
  const clipPath = document.createElementNS(svg.namespaceURI, 'path');
  clipPath.setAttribute('id', 'lakeClipPath');
  clip.appendChild(clipPath);

  defs.appendChild(filt);
  defs.appendChild(clip);
  svg.appendChild(defs);

  const gFill  = document.createElementNS(svg.namespaceURI, 'path'); gFill.setAttribute('class','lake-fill');
  const gStroke= document.createElementNS(svg.namespaceURI, 'path'); gStroke.setAttribute('class','lake-stroke');
  const gHeat  = document.createElementNS(svg.namespaceURI, 'g');    gHeat.setAttribute('class','lake-heat');
  gHeat.setAttribute('filter','url(#lakeHeatBlur)');
  gHeat.setAttribute('clip-path','url(#lakeClip)');

  svg.appendChild(gFill);
  svg.appendChild(gStroke);
  svg.appendChild(gHeat);

  inner.insertBefore(svg, inner.querySelector('.spx-items'));
  return svg;
}

function clearLake() {
  const svg = ensureLakeSvg();
  svg.querySelector('.lake-fill').setAttribute('d','');
  svg.querySelector('.lake-stroke').setAttribute('d','');
  svg.querySelector('#lakeClipPath').setAttribute('d','');
  const heat = svg.querySelector('.lake-heat');
  while (heat.firstChild) heat.removeChild(heat.firstChild);
}
// ↑↑↑ end paste ↑↑↑



function compositeOf(p){
  const e = Number(p.econ ?? p.economic ?? 0);
  const s = Number(p.social ?? 0);
  return (e + s) / 2;
}

function axisConfig(mode){
  switch(mode){
    case AXIS.SOC:
      return {
        title: "Social vs EU Position",
        xKey:"social",  xNeg:"Progressive", xPos:"Conservative",
        yKey:"eu",      yNeg:"Eurosceptic", yPos:"Pro-EU"
      };
    case AXIS.ECON:
      return {
        title: "Economic vs EU Position",
        xKey:"economic", xNeg:"State control", xPos:"Free-market",
        yKey:"eu",       yNeg:"Eurosceptic",   yPos:"Pro-EU"
      };
    case AXIS.COMP:
    default:
      return {
        title: "Composite vs EU Position",
        xKey:"composite", xNeg:"Left",  xPos:"Right",
        yKey:"eu",        yNeg:"Eurosceptic", yPos:"Pro-EU"
      };
    case AXIS.SOC_ECON:
      return {
        title: "Social vs Economic Position",
        xKey: "social",   xNeg: "Progressive",  xPos: "Conservative",
        yKey: "economic", yNeg: "State control", yPos: "Free-market"
      };

  }
}


function getAxesValues(entity, cfg){
  // entity is either a party object {econ,social,eu} or a group spec {economic,social,eu}
  const getVal = (key) => {
    if(key === "economic") return entity.econ ?? entity.economic;
    if(key === "social")   return entity.social;
    if(key === "eu")       return entity.eu;
    if(key === "composite") return compositeOf(entity);
    return 0;
  };
  let vx = clampSpec(getVal(cfg.xKey));
  let vy = clampSpec(getVal(cfg.yKey));
  return { vx, vy };
}
function toPlotXY(plotEl, vx, vy){
  const range = SPEC_RANGE.max - SPEC_RANGE.min;

  // safeguard: coerce to numbers and clamp to [-3,3]
  const clamp = (v) => Math.min(SPEC_RANGE.max, Math.max(SPEC_RANGE.min, Number(v)));
  const xv = clamp(vx);
  const yv = clamp(vy);

  let nx = (xv - SPEC_RANGE.min) / range; // 0..1
  let ny = (yv - SPEC_RANGE.min) / range; // 0..1

  // clamp % just in case
  nx = Math.min(1, Math.max(0, nx));
  ny = Math.min(1, Math.max(0, ny));

  return {
    px: nx * 100,       // % from left
    py: (1 - ny) * 100  // % from top (invert Y)
  };
}

// Convert axis values ([-3,3]) to % (0..100) in the plot square
function toPlotPercent(vx, vy){
  const range = SPEC_RANGE.max - SPEC_RANGE.min;
  const clamp = (v) => Math.min(SPEC_RANGE.max, Math.max(SPEC_RANGE.min, Number(v)));
  const xv = clamp(vx), yv = clamp(vy);
  const nx = (xv - SPEC_RANGE.min) / range; // 0..1
  const ny = (yv - SPEC_RANGE.min) / range; // 0..1
  return { xPct: nx * 100, yPct: (1 - ny) * 100 }; // invert Y
}

// % -> SVG 1000x1000 coordinates
function pctToSvgXY(xPct, yPct){
  return { x: xPct * 10, y: yPct * 10 };
}
// all parties in the DB (excluding DEFAULT) that match a predicate
function forEachParty(fn){
  for (const country in PARTY_DB){
    if (country === 'DEFAULT') continue;
    const arr = PARTY_DB[country] || [];
    for (const p of arr) fn(p, country);
  }
}

// TRUE if party is affiliated (any weight) with group code
function hasAffiliation(p, code){
  const affs = parseAffiliations(p);
  return affs.some(a => a.code === code);
}
function hideManualMarkers(){
  europe.querySelectorAll('.logo-marker.manual').forEach(n => n.style.display = 'none');
}
function showManualMarkers(){
  europe.querySelectorAll('.logo-marker.manual').forEach(n => n.style.display = '');
}

// Build points for a group, in SVG coords (0..1000)
function buildGroupPoints(code, cfg){
  const pts = [];
  forEachParty(p => {
    if (!hasAffiliation(p, code)) return;
    // choose values per axis (use your composite weighting for x when needed)
    const getVal = (key) => {
      if (key === 'economic')  return p.econ;
      if (key === 'social')    return p.social;
      if (key === 'eu')        return p.eu;
      if (key === 'composite') return compositeForParty(p);
      return 0;
    };
    const vx = getVal(cfg.xKey);
    const vy = getVal(cfg.yKey);
    if (!Number.isFinite(vx) || !Number.isFinite(vy)) return;

    const { xPct, yPct } = toPlotPercent(vx, vy);
    const { x, y } = pctToSvgXY(xPct, yPct);
    pts.push({ x, y, party: p });
  });
  return pts;
}

// Build points for "You" = all currently selected parties, in SVG coords
function buildYouPoints(cfg){
  const pts = [];
  const selected = getSelectedParties();
  selected.forEach(p => {
    const getVal = (key) => {
      if (key === 'economic')  return p.econ;
      if (key === 'social')    return p.social;
      if (key === 'eu')        return p.eu;
      if (key === 'composite') return compositeForParty(p); // weighted per affiliation
      return 0;
    };
    const vx = getVal(cfg.xKey);
    const vy = getVal(cfg.yKey);
    if (!Number.isFinite(vx) || !Number.isFinite(vy)) return;

    const { xPct, yPct } = toPlotPercent(vx, vy);
    const { x, y } = pctToSvgXY(xPct, yPct);
    pts.push({ x, y, party: p });
  });
  return pts;
}
// Convex hull (Graham scan)
function convexHull(points){
  if (points.length < 3) return points.slice();
  const pts = points.slice().sort((a,b) => a.x===b.x ? a.y-b.y : a.x-b.x);

  const cross = (o,a,b) => (a.x-o.x)*(b.y-o.y) - (a.y-o.y)*(b.x-o.x);

  const lower = [];
  for (const p of pts){
    while (lower.length >= 2 && cross(lower[lower.length-2], lower[lower.length-1], p) <= 0) {
      lower.pop();
    }
    lower.push(p);
  }
  const upper = [];
  for (let i=pts.length-1;i>=0;i--){
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length-2], upper[upper.length-1], p) <= 0) {
      upper.pop();
    }
    upper.push(p);
  }
  upper.pop(); lower.pop();
  return lower.concat(upper);
}
// Compute centroid of points (in SVG 0..1000 coords)
function centroid(points){
  if (!points.length) return {x:500, y:500};
  let sx=0, sy=0;
  for (const p of points){ sx += p.x; sy += p.y; }
  return { x: sx / points.length, y: sy / points.length };
}

// Move each point away from a center by a fixed amount (SVG units)
function inflatePolygon(points, center, inflateDist){
  if (!inflateDist) return points.slice();
  const out = [];
  for (const p of points){
    const vx = p.x - center.x;
    const vy = p.y - center.y;
    const len = Math.hypot(vx, vy) || 1;
    const nx = vx / len, ny = vy / len;
    out.push({ x: p.x + nx * inflateDist, y: p.y + ny * inflateDist });
  }
  return out;
}

// Scale polygon about a center by factor (e.g., 1.03 = +3%)
function scalePolygon(points, center, factor){
  if (!factor || factor === 1) return points.slice();
  const out = [];
  for (const p of points){
    out.push({
      x: center.x + (p.x - center.x) * factor,
      y: center.y + (p.y - center.y) * factor,
    });
  }
  return out;
}

// Build a smooth, inflated lake path that keeps outliers inside
function buildLakePath(points, opts = {}){
  const {
    inflate = 18,     // outward offset in SVG units (1000 space). ~1.8% of box
    smoothIter = 3,   // more iterations => rounder
    scaleUp = 1.03,   // final gentle scale to ensure we don't "shrink past" outliers
  } = opts;

  if (!points || points.length < 3) return '';

  // 1) Convex hull to guarantee all outer points are included
  const hull = convexHull(points);

  // 2) Inflate outward from centroid to round edges (acts like a buffer)
  const c = centroid(hull);
  let poly = inflatePolygon(hull, c, inflate);

  // 3) Smooth (rounds corners)
  poly = chaikinSmooth(poly, smoothIter);

  // 4) Slight global scale up to counter any smoothing shrink
  poly = scalePolygon(poly, c, scaleUp);

  // 5) Path
  return pathFromPoints(poly);
}

// Chaikin smoothing (closed path)
function chaikinSmooth(points, iterations=2){
  if (points.length < 3) return points.slice();
  let pts = points.slice();
  for (let k=0;k<iterations;k++){
    const out = [];
    for (let i=0;i<pts.length;i++){
      const a = pts[i];
      const b = pts[(i+1) % pts.length];
      const Q = { x: 0.75*a.x + 0.25*b.x, y: 0.75*a.y + 0.25*b.y };
      const R = { x: 0.25*a.x + 0.75*b.x, y: 0.25*a.y + 0.75*b.y };
      out.push(Q, R);
    }
    pts = out;
  }
  return pts;
}

function pathFromPoints(points){
  if (!points.length) return '';
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i=1;i<points.length;i++){
    d += ` L ${points[i].x} ${points[i].y}`;
  }
  return d + ' Z';
}
function groupColor(code){
  return GROUP_COLORS[code] || GROUP_COLORS._FALLBACK;
}

function showLakeForGroup(code){
  const cfg = axisConfig(axisMode);
  const cacheKey = `${axisMode}::group::${code}`;
  let cached = lakeCache.get(cacheKey);

  if (!cached){
    const pts = buildGroupPoints(code, cfg);
    if (pts.length < 3){
      clearLake();
      return;
    }
    const d = buildLakePath(pts, { inflate: 18, smoothIter: 3, scaleUp: 1.03 });
    cached = { pathD: d, heat: pts, color: groupColor(code) };

    lakeCache.set(cacheKey, cached);
  }

  drawLake(cached);
}

function showLakeForYou(){
  const cfg = axisConfig(axisMode);
  const cacheKey = `${axisMode}::you`;
  // do not cache if selections change frequently? we’ll still cache & overwrite
  const pts = buildYouPoints(cfg);
  if (pts.length < 3){
    clearLake();
    return;
  }
  const d = buildLakePath(pts, { inflate: 18, smoothIter: 3, scaleUp: 1.03 });
const color = "#333333";
const data = { pathD: d, heat: pts, color };

  lakeCache.set(cacheKey, data);
  drawLake(data);
}

function drawLake(data){
  const svg = ensureLakeSvg();

  // set colors via CSS variables so both fill & heat circles share hue
  svg.style.setProperty('--lake-color', hexToRgba(data.color, 0.22)); // fill alpha
  svg.style.setProperty('--lake-color-solid', data.color);

  // update paths
  svg.querySelector('.lake-fill').setAttribute('d', data.pathD);
  svg.querySelector('.lake-stroke').setAttribute('d', data.pathD);
  svg.querySelector('#lakeClipPath').setAttribute('d', data.pathD);

  // heat dots
  const heat = svg.querySelector('.lake-heat');
  while (heat.firstChild) heat.removeChild(heat.firstChild);

  const baseR = 12; // 10 units in 1000-space = 1% of box
  data.heat.forEach(pt => {
    const c = document.createElementNS(svg.namespaceURI, 'circle');
    c.setAttribute('cx', pt.x);
    c.setAttribute('cy', pt.y);
    c.setAttribute('r', baseR);
    // inline color so we can support per-group hue
    c.setAttribute('fill', data.color);
    c.setAttribute('fill-opacity', '0.12');
    heat.appendChild(c);
  });
}

function hexToRgba(hex, alpha){
  // supports #rgb, #rrggbb
  let h = hex.replace('#','');
  if (h.length === 3) h = h.split('').map(ch => ch+ch).join('');
  const r = parseInt(h.substring(0,2),16);
  const g = parseInt(h.substring(2,4),16);
  const b = parseInt(h.substring(4,6),16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function openSpectrum(){
  viewMode = VIEW.SPECTRUM;
  setMapIntroVisible(false);    
  mapFrozen = true;
 document.body.classList.add('spectrum-open');
  const ov = document.getElementById('spectrumOverlay');
  ov.style.display = 'block';
  requestAnimationFrame(() => ov.classList.add('open'));

  // use a fresh lookup here
  document.getElementById('sidePanel').classList.add('axis-mode');
  const axisPanel = document.getElementById('axisPanel');
  const spectrumHelp = document.getElementById('spectrumHelp');
if (spectrumHelp) spectrumHelp.style.display = 'block';
  if (axisPanel) axisPanel.style.display = 'block';

  const drawerBtn = document.getElementById('btnOpenSpectrum');
  drawerBtn.classList.add('open');
  drawerBtn.title = 'Close spectrum';

  renderSpectrum();
}



function closeSpectrum() {
  viewMode = VIEW.MAP;
   setMapIntroVisible(true);
  mapFrozen = false;
  document.body.classList.remove('spectrum-open');

  // clear spectrum pin/preview when leaving spectrum
  pinnedLake = null;
  clearLake?.();           // safe if you already have this function
  clearPreviewMarker();
  // NEW: hide & reset the spectrum selection panel
  const selPanel = document.getElementById('spxSelectionPanel');
  if (selPanel) {
    selPanel.style.display = 'none';
    selPanel.innerHTML = `<div class="muted">Click “You” or an EU group on the spectrum to see ranked parties here.</div>`;
  }
  const ov = document.getElementById('spectrumOverlay');
  ov.classList.remove('open');
  setTimeout(() => { ov.style.display = 'none'; }, 350);

  // fresh lookup again
  document.getElementById('sidePanel').classList.remove('axis-mode');
  const axisPanel = document.getElementById('axisPanel');
  const spectrumHelp = document.getElementById('spectrumHelp');
if (spectrumHelp) spectrumHelp.style.display = 'none';
  if (axisPanel) axisPanel.style.display = 'none';

  const drawerBtn = document.getElementById('btnOpenSpectrum');
  drawerBtn.classList.remove('open');
  drawerBtn.title = 'Open spectrum';
}


function openMatches(){
  viewMode = VIEW.MATCH;
  mapFrozen = false;

  // Panels/classes
  const sp = document.getElementById('sidePanel');
  sp.classList.remove('axis-mode');
  sp.classList.add('matches-mode');

  const axis = document.getElementById('axisPanel');
  if (axis) axis.style.display = 'none';

  const mp = document.getElementById('matchesPanel');
  if (mp) mp.style.display = '';   // ensure visible

  const btn = document.getElementById('btnOpenMatches');
  btn.classList.add('open');
  btn.title = 'Close matches';

  // Start from "no country" so the right panel should show EU groups
  selectedCountry = null;

  // Hide manual logos and clear fills (we're about to paint overlay)
  hideManualMarkers();
  COUNTRIES.forEach(c => clearCountryFill(c));

  // IMPORTANT: render right panel FIRST (EU groups when selectedCountry==null)
  clearMatchPreview();    // safe: does not restore fills in MATCH
  renderMatches();        // should now populate right panel immediately

  // Then paint overlay based on YOUR vector
  drawAutoOverlay();

  // If nothing painted (e.g., no selections yet), keep the message visible
}

function clearPreviewMarker(){
  if (previewMarkerEl) {
    previewMarkerEl.remove();
    previewMarkerEl = null;
  }

  document.querySelectorAll('.spx-preview-marker').forEach(n => n.remove());
}
function drawAutoOverlay(){
  // Remove previous auto artifacts only (keep manual markers hidden)
  europe.querySelectorAll('.auto-match').forEach(n => n.remove());

  const youVec = getYouVector();
  if (!youVec){
    // If you see this, the overlay won't paint because YOU is undefined
    console.warn('[MATCH] No YOU vector yet — select at least one party.');
    return;
  }

  let painted = 0;

  COUNTRIES.forEach(country => {
    const best = bestPartyForCountry(country, youVec);
    if (!best) return; // no parties known for this country

    let party = best.party;

if (lockSelectedParties && selections.has(country)) {
  const sel = selections.get(country);
  const countryParties = PARTY_DB[country] || [];
  const lockedParty = countryParties.find(p => p.id === sel.partyId);
  if (lockedParty) party = lockedParty;
}

applyCountryFill(country, party.color);
if (party.logo) dropAutoLogo(country, party.logo);
    painted++;
  });

  if (!painted) {
    console.warn('[MATCH] Overlay found no paintable countries. Check PARTY_DB keys match COUNTRIES names exactly.');
  }
}



function closeMatches(){
  viewMode = VIEW.MAP;

  const mp = document.getElementById('matchesPanel');
  if (mp) mp.style.display = 'none';

  const sp = document.getElementById('sidePanel');
  sp.classList.remove('matches-mode');

  const btn = document.getElementById('btnOpenMatches');
  btn.classList.remove('open');
  btn.title = 'Open matches';

  // remove auto overlay and restore user's picks
  europe.querySelectorAll('.auto-match').forEach(n => n.remove());
  COUNTRIES.forEach(c => {
    if (selections.has(c)) applyCountryFill(c, selections.get(c).color);
    else clearCountryFill(c);
  });
  clearMatchPreview();
  showManualMarkers();
}

// --- EU-group display labels (top-level, global scope) ---
const GROUP_LABEL_MAP = {
  PFE: 'PfE',
  ESN: 'ESN',
  GREENS: 'Greens/EFA',
  'S&D': 'S&D',
  LEFT: 'The Left',
  ECR: 'ECR',
  EPP: 'EPP',
  RENEW: 'Renew',
};

function displayGroupLabel(code){
  // prefer your custom short label, fall back to EU_GROUPS meta, then code
  return GROUP_LABEL_MAP[code] || (EU_GROUPS[code]?.name || code);
}


function updateMatches(){
  if (viewMode !== VIEW.MATCH) return;
  renderMatches();   // rebuilds right panel (EU groups or country list)
  drawAutoOverlay(); // repaint overlay based on current YOU
  hideManualMarkers();
}

function renderMatches(){
  const body = document.getElementById('matchesBody');
  if (!body) return;

  const youVec = getYouVector();

  if (!youVec){
    body.innerHTML = `
      <div class="subhead">EU Groups</div>
      <div class="muted">Pick some parties on the map first to compute your “You” value. Once you do, this panel will show your % match to each EU group, and the Map will show your closest parties in each country.</div>
    `;
    return;
  }

  const renderPartyRow = ({party, percent}) => {
    const logoSrc = party.logo || partyLogoFallback(party.country || '', party);
    return `
      <div class="party-btn">
        <img class="party-logo" style="background:${party.color}" src="${logoSrc}" alt="">
        <span class="party-name">${party.name}</span>
        <span class="party-meta"></span>
        <span class="party-pct">${percent}%</span>
      </div>
    `;
  };

  const renderGroupRow = (g) => {
    const bg = g.color || '#888';
    const label = displayGroupLabel(g.code);
    return `
      <div class="party-btn">
        <img class="party-logo" style="background:${bg}" src="${g.logo || ''}" alt="${label}">
        <span class="party-name">${label}</span>
        <span class="party-meta"></span>
        <span class="party-pct">${g.percent}%</span>
      </div>
    `;
  };

  if (selectedCountry){
    const list = scoreCountryPartiesForYou(selectedCountry, youVec);
    const html = list.length ? list.map(renderPartyRow).join('') : '<div class="muted">No parties found.</div>';
    body.innerHTML = `
      <div class="subhead">${selectedCountry}</div>
      <div class="list">${html}</div>
    `;
  } else {
    const groups = scoreAllGroupsForYou(youVec);
    const html = groups.length ? groups.map(renderGroupRow).join('') : '<div class="muted">No groups found.</div>';
    body.innerHTML = `
      <div class="subhead">EU Groups</div>
      <div class="list">${html}</div>
    `;
  }
}



// ==== RIGHT PANEL: Matches tray (appears only in MATCH mode) ====


function exportSpectrum(){
  // simplest: use HTML-to-image libs if available; here just a note.
  // You can later plug in html2canvas/dom-to-image to generate a PNG.
  alert('Export coming soon — plug html2canvas here.');
}

function scoreAllPartiesForTarget(targetVec){
  const out = [];
  for (const [country, arr] of Object.entries(PARTY_DB)){
    if (country === 'DEFAULT') continue;
    for (const p of arr){
      if (!Number.isFinite(p.econ) || !Number.isFinite(p.social) || !Number.isFinite(p.eu)) continue;
      const pct = computeMatchPercent(targetVec, { econ:p.econ, social:p.social, eu:p.eu });
      out.push({ country, party:p, percent:pct });
    }
  }
  out.sort((a,b)=> b.percent - a.percent || a.party.name.localeCompare(b.party.name));
  return out;
}

function scoreGroupPartiesForTarget(code, targetVec){
  const out = [];
  for (const [country, arr] of Object.entries(PARTY_DB)){
    if (country === 'DEFAULT') continue;
    for (const p of arr){
      if (!hasAffiliation(p, code)) continue;
      if (!Number.isFinite(p.econ) || !Number.isFinite(p.social) || !Number.isFinite(p.eu)) continue;
      const pct = computeMatchPercent(targetVec, { econ:p.econ, social:p.social, eu:p.eu });
      out.push({ country, party:p, percent:pct });
    }
  }
  out.sort((a,b)=> b.percent - a.percent || a.party.name.localeCompare(b.party.name));
  return out;
}
function getSelectedPartyEntries(){
  const out = [];
  for (const [country, sel] of selections.entries()){
    const arr = PARTY_DB[country] || [];
    const p = arr.find(pp => pp.id === sel.partyId);
    if (p) out.push({ country, party: p });
  }
  // keep it tidy: sort by country then party name
  out.sort((a,b) => a.country.localeCompare(b.country) || a.party.name.localeCompare(b.party.name));
  return out;
}

function renderSpectrumSelectionPanel(){
  const panel = document.getElementById('spxSelectionPanel');
  if (!panel) return;
  // NEW: never show this panel outside Spectrum
  if (viewMode !== VIEW.SPECTRUM) {
    panel.style.display = 'none';
    panel.innerHTML = `<div class="muted">Click “You” or an EU group on the spectrum to see ranked parties here.</div>`;
    return;
  }
  if (!pinnedLake){
    panel.style.display = 'none';
    panel.innerHTML = `<div class="muted">Click “You” or an EU group on the spectrum to see ranked parties here.</div>`;
    return;
  }

  let headerHTML = '';
  let targetVec = null;
  let rows = [];

if (pinnedLake.type === 'you'){
  const selected = getSelectedPartyEntries(); // only parties you picked
  if (!selected.length){
    panel.style.display = 'block';
    panel.innerHTML = `<div class="muted">Pick some parties on the map first, then click “You” on the spectrum.</div>`;
    return;
  }
  headerHTML = `
    <div class="subhead">You</div>
    <div class="muted" style="margin-bottom:8px;">Your selected parties</div>
  `;
  // rows should be [{country, party}], matching what our rowHTML mapper expects
  rows = selected;
}

 else if (pinnedLake.type === 'group'){
    const groups = computeBlendedGroupSpecs(); // you already have this
    const g = groups[pinnedLake.code];
    if (!g){ panel.style.display = 'none'; return; }
    targetVec = { econ:g.economic, social:g.social, eu:g.eu };
    const meta = EU_GROUPS[pinnedLake.code] || {};
    const label = displayGroupLabel(pinnedLake.code); // you already have this now
    headerHTML = `
      <div class="subhead">
        <img class="party-logo" style="background:${GROUP_COLORS?.[pinnedLake.code]||'#888'};width:28px;height:28px;margin-right:6px;" src="${meta.logo||''}" alt="${label}">
        ${label}
      </div>
      <div class="muted" style="margin-bottom:8px;">Parties in this EU group</div>
    `;
    rows = scoreGroupPartiesForTarget(pinnedLake.code, targetVec);
  }

const rowHTML = rows.slice(0, 80).map(({country, party}) => {
  const partyLogo = party.logo || '';
  const groupLogos = parseAffiliations(party).map(a => {
    const meta = EU_GROUPS[a.code];
    if (!meta?.logo) return '';
    return `<img class="eu-logo" src="${meta.logo}" alt="${meta.name||a.code}">`;
  }).join('');

  return `
    <div class="party-btn spx-list-row" data-country="${country}" data-party="${party.id}">
      <img class="party-logo" style="background:${party.color}" src="${partyLogo}" alt="">
      <span class="party-name">${party.name}</span>
      <!-- right side: EU group logos (no %) -->
      <span class="party-meta" style="margin-left:auto; display:flex; gap:6px; align-items:center;">
        ${groupLogos}
      </span>
    </div>
  `;
}).join('');



  panel.style.display = 'block';
  panel.innerHTML = headerHTML + `<div class="list">${rowHTML || '<div class="muted">No parties found.</div>'}</div>`;

}



function renderSpectrum(){
  const cfg = axisConfig(axisMode);

  // Update axis captions + centered title
  const t = document.getElementById('axisPresetTitle');
  if (t) t.textContent = cfg.title;
  document.getElementById('capYTop').textContent = cfg.yPos;
  document.getElementById('capYBot').textContent = cfg.yNeg;
  document.getElementById('capXLeft').textContent  = cfg.xNeg;
  document.getElementById('capXRight').textContent = cfg.xPos;

  // Clear plot items and ensure lake layer exists
  const plotEl  = document.getElementById('spxPlot');
  const itemsEl = document.getElementById('spxItems');
  itemsEl.innerHTML = '';
  ensureLakeSvg();

  // (Optional) clear any hover preview marker when we redraw
  if (typeof clearPreviewMarker === 'function') clearPreviewMarker();

  // ---- YOU dot ----
  const you = computeUserSpec(); // {economic,social,eu} or null
  if (you){
    const getYouVal = (key) => {
      if (key === 'economic')  return you.economic;
      if (key === 'social')    return you.social;
      if (key === 'eu')        return you.eu;
      if (key === 'composite') return computeYouCompositeWeighted(); // your existing helper
      return 0;
    };
    const vx = getYouVal(cfg.xKey);
    const vy = getYouVal(cfg.yKey);
    const { px, py } = toPlotXY(plotEl, vx, vy);

    const node = document.createElement('div');
    node.className = 'spx-item you';
    node.style.left = px + '%';
    node.style.top  = py + '%';
    node.innerHTML = `<div class="dot"></div><div class="label">You</div>`;

    // Hover shows lake only when nothing is pinned
    node.addEventListener('mouseenter', () => { if (!pinnedLake) showLakeForYou(); });
    node.addEventListener('mouseleave', () => { if (!pinnedLake) clearLake(); });

    // Click toggles pin for "You"
    node.addEventListener('click', () => {
      const wasPinned = pinnedLake && pinnedLake.type === 'you';
      pinnedLake = wasPinned ? null : { type: 'you' };
      if (pinnedLake) showLakeForYou(); else clearLake();
      if (typeof renderSpectrumSelectionPanel === 'function') renderSpectrumSelectionPanel();
    });

    itemsEl.appendChild(node);
  }

  // ---- EU groups ----
  const groups = computeBlendedGroupSpecs(); // { code: {economic,social,eu}, ... }
  for (const [code, g] of Object.entries(groups)) {
    // compute axis values for this group
    const vx = (cfg.xKey === 'composite')
      ? compositeForGroup(code, g)
      : clampSpec(
          cfg.xKey === 'economic' ? g.economic :
          cfg.xKey === 'social'   ? g.social   :
                                    g.eu
        );

    const vy = (cfg.yKey === 'composite')
      ? compositeForGroup(code, g)
      : clampSpec(
          cfg.yKey === 'economic' ? g.economic :
          cfg.yKey === 'social'   ? g.social   :
                                    g.eu
        );

    const { px, py } = toPlotXY(plotEl, vx, vy);

    const node = document.createElement('div');
    node.className = 'spx-item group';
    node.style.left = px + '%';
    node.style.top  = py + '%';

    const meta = EU_GROUPS[code] || {};
    node.innerHTML = `<img class="group-logo" src="${meta.logo || ''}" alt="${meta.name || code}" title="${meta.name || code}">`;

    // Hover shows lake only when nothing is pinned
    node.addEventListener('mouseenter', () => { if (!pinnedLake) showLakeForGroup(code); });
    node.addEventListener('mouseleave', () => { if (!pinnedLake) clearLake(); });

    // Click toggles pin for this group (unpins any previous)
    node.addEventListener('click', () => {
      const wasPinned = pinnedLake && pinnedLake.type === 'group' && pinnedLake.code === code;
      pinnedLake = wasPinned ? null : { type: 'group', code };
      if (pinnedLake) showLakeForGroup(code); else clearLake();
      if (typeof renderSpectrumSelectionPanel === 'function') renderSpectrumSelectionPanel();
    });

    itemsEl.appendChild(node);
  }

  // Nudge overlaps if you had this before
  nudgeCollisions(itemsEl.children, 3);

  // Keep pinned lake visible across re-renders (axis change, etc.)
  if (pinnedLake){
    if (pinnedLake.type === 'you') {
      showLakeForYou();
    } else if (pinnedLake.type === 'group') {
      showLakeForGroup(pinnedLake.code);
    }
  }

  // Refresh the right panel list according to current pin state
  if (typeof renderSpectrumSelectionPanel === 'function') renderSpectrumSelectionPanel();
}



function resolvePartyById(partyId){
  // Search current selectedCountry first, then all countries
  if(!partyId) return null;
  const scan = (arr) => arr.find(p => p.id === partyId);
  if(selectedCountry && PARTY_DB[selectedCountry]){
    const hit = scan(PARTY_DB[selectedCountry]);
    if(hit) return hit;
  }
  for(const [k, arr] of Object.entries(PARTY_DB)){
    if(k === 'DEFAULT') continue;
    const hit = scan(arr);
    if(hit) return hit;
  }
  // as a fall back, maybe DEFAULT
  const df = PARTY_DB.DEFAULT && scan(PARTY_DB.DEFAULT);
  return df || null;
}

function nudgeCollisions(nodes, minDistPct){
  const pts = [];
  for (const el of nodes){
    // left/top are '%' strings like "42.3%"; parseFloat keeps the number
    const x = parseFloat(el.style.left);
    const y = parseFloat(el.style.top);
    pts.push({ el, x, y });
  }

  for (let i=0;i<pts.length;i++){
    for (let j=i+1;j<pts.length;j++){
      const a = pts[i], b = pts[j];
      const dx = b.x - a.x, dy = b.y - a.y;
      const d2 = dx*dx + dy*dy, md = minDistPct;
      if (d2 > 0 && d2 < md*md){
        const d = Math.sqrt(d2) || 1;
        const push = (md - d) / 2;
        const ux = dx / d, uy = dy / d;
        a.x -= ux * push; a.y -= uy * push;
        b.x += ux * push; b.y += uy * push;
      }
    }
  }

  for (const p of pts){
    // clamp to board
    p.x = Math.max(0, Math.min(100, p.x));
    p.y = Math.max(0, Math.min(100, p.y));
    p.el.style.left = p.x + '%';
    p.el.style.top  = p.y + '%';
  }
}


// Re-render on resize while open
window.addEventListener('resize', () => {
  if(viewMode === VIEW.SPECTRUM) renderSpectrum();
});
if(viewMode === VIEW.SPECTRUM){
  renderSpectrum();
}
// --- Back-compat shim: re-render the 2D plot only if it's open
function updateSpectrums(){
  if (viewMode === VIEW.SPECTRUM) renderSpectrum();
}

// =====  HELPERS  =====
function markInteracted(){ userHasInteracted = true; }
function setMapIntroVisible(isVisible){
  // title you inject on load
  const titleBlock = document.getElementById('mainChooserTitle');
  if (titleBlock) titleBlock.style.display = isVisible ? '' : 'none';

  // the country header on the right (France/Portugal/etc.)
  if (sideTitle) sideTitle.style.display = isVisible ? '' : 'none';

  // optional: if you have a “Click a country…” hint block, hide it too
  const chooserHint = document.getElementById('chooserHint');
  if (chooserHint) chooserHint.style.display = isVisible ? '' : 'none';
}

function applyCountryFill(country, color){
  countryNodes(country).forEach(n => { n.style.fill = color; });
}
function clearCountryFill(country){
  countryNodes(country).forEach(n => { n.style.fill = ''; });
}

// =====  COUNTRY TAGGING  =====
function tagCountries(){
  const all = svg.querySelectorAll('#Europe *');
  all.forEach(el => {
    const id = el.id || '';
    if (!id) return;
    const base = baseCountry(id);
    if (base && COUNTRIES.includes(base)) {
      el.classList.add('country-shape');
      el.dataset.country = base;
    }
  });
}
function baseCountry(id){
  if (!id) return null;
  const dash = id.indexOf('-');
  return dash === -1 ? id : id.slice(0, dash);
}
function setSelectedCountry(country){
  // MATCH view: do not touch map fills/overlay, only switch right-side list
  if (viewMode === VIEW.MATCH){
  if (selectedCountry === country){
    selectedCountry = null;      // unselect -> show EU groups
    clearMatchPreview();
    renderMatches();
    return;
  }
  selectedCountry = country;     // select -> show that country's parties
  clearMatchPreview();
  renderMatches();
  return;
}


  // MAP/SPECTRUM behavior
  if (selectedCountry === country){
    if (selections.has(country)){
      applyCountryFill(country, selections.get(country).color);
    } else {
      clearCountryFill(country);
    }
    selectedCountry = null;
    clearMatchPreview();
    updateSpectrums();
    updateMatches();
    return;
  }

  if (selectedCountry){
    if (selections.has(selectedCountry)){
      applyCountryFill(selectedCountry, selections.get(selectedCountry).color);
    } else {
      clearCountryFill(selectedCountry);
    }
  }

  applyCountryFill(country, SELECT_GOLD);
  selectedCountry = country;
  clearMatchPreview();
  updateSpectrums();
  updateMatches();
}



function applyTransform(){
  const m = `matrix(${scale},0,0,${scale},${tx},${ty})`;
  mapRoot.setAttribute('transform', m);
}

// === Centering in pure SVG user units (no px/user mismatch) ===
function fitAll(){
  // Measure geometry bbox in user units
  mapRoot.removeAttribute('transform');
  const bbox = mapRoot.getBBox();

  // SVG viewport in user units
  const vb = svg.viewBox?.baseVal
    ? { x: svg.viewBox.baseVal.x, y: svg.viewBox.baseVal.y, width: svg.viewBox.baseVal.width, height: svg.viewBox.baseVal.height }
    : NATURAL_VIEWBOX;

  // Convert padding from CSS px → user units (once)
  const rect = svg.getBoundingClientRect();
  const pxToUx = vb.width / rect.width;
  const pyToUy = vb.height / rect.height;
  const padUx = PADDING * pxToUx;
  const padUy = PADDING * pyToUy;

  // Scale to fit inside vb with padding (all in user units)
  const scaleX = (vb.width  - padUx*2) / bbox.width;
  const scaleY = (vb.height - padUy*2) / bbox.height;
  scale = clamp(Math.min(scaleX, scaleY), MIN_SCALE, MAX_SCALE);

  // Center inside vb (user units)
  tx = -bbox.x * scale + (vb.width  - bbox.width  * scale) / 2 - vb.x * scale;
  ty = -bbox.y * scale + (vb.height - bbox.height * scale) / 2 - vb.y * scale;

  applyTransform();
}

// Zoom relative to the mouse position
function onWheel(e){
  e.preventDefault();
  if (mapFrozen) return;             // <-- freeze zoom
  markInteracted();
  const k = Math.pow(1.0015, -e.deltaY);
  zoomAtPoint(k, e.clientX, e.clientY);
}

function zoomAtPoint(factor, clientX, clientY){
  if (!Number.isFinite(factor) || factor === 1) return;

  // Proposed new scale, clamped
  const newScale = clamp(scale * factor, MIN_SCALE, MAX_SCALE);
  // If clamping kills the change, bail early
  if (newScale === scale) return;

  // Convert the mouse position to *map coordinates* (SVG user units)
  const p = screenToSvg(clientX, clientY); // {x,y} in the coordinate space of mapRoot

  // --- Key formula (compose about a point in same coordinate space):
  // M' = T(p) · S(f) · T(-p) · M
  // For matrix(s,0,0,s,tx,ty), that yields:
  // s'  = f * s
  // tx' = f * tx + (1 - f) * p.x
  // ty' = f * ty + (1 - f) * p.y

  const f = newScale / scale;       // actual factor after clamping
  tx = f * tx + (1 - f) * p.x;
  ty = f * ty + (1 - f) * p.y;
  scale = newScale;

  applyTransform();
}
function zoomAtCenter(f){
  const r = svg.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top  + r.height / 2;
  zoomAtPoint(f, cx, cy);
}

function screenToSvg(clientX, clientY){
  const domPoint = svg.createSVGPoint();
  domPoint.x = clientX;
  domPoint.y = clientY;
  const ctm = mapRoot.getScreenCTM();
  const inv = ctm.inverse();
  return domPoint.matrixTransform(inv);
}
function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }

// =====  PAN (svg-space, jitter-free)  =====
// freezes inverse CTM at pan start + uses rAF to batch repaints

let panAnchorSvg = null;     // svg-space point under the cursor at drag start
let invCTMStart = null;      // inverse screen->svg transform at drag start
let rafId = 0;               // rAF id if a frame is queued
let lastMouse = null;        // {x,y} last pointer position we need to apply


function screenToSvgWith(matrixInv, clientX, clientY){
  const pt = svg.createSVGPoint();
  pt.x = clientX; pt.y = clientY;
  return pt.matrixTransform(matrixInv);
}

function onPanStart(e){
  if (mapFrozen) return;
  if (e.button !== 0) return; // left only
  isPanning = true;

  // Freeze the inverse transform at pan start (prevents re-projection jitter)
  invCTMStart = mapRoot.getScreenCTM().inverse();

  // Anchor point in *start* svg-space
  panAnchorSvg = screenToSvgWith(invCTMStart, e.clientX, e.clientY);

  // Snapshot of current transform
  viewStart = { tx, ty, scale };

  // Prepare rAF loop
  lastMouse = { x: e.clientX, y: e.clientY };
  if (!rafId) rafId = requestAnimationFrame(panStep);

  svg.style.cursor = 'grabbing';
  e.preventDefault();
}

function onPanMove(e){
  if (!isPanning) return;
  // Just record the latest mouse; actual work happens in rAF
  lastMouse = { x: e.clientX, y: e.clientY };
}

function panStep(){
  rafId = 0;
  if (!isPanning || !lastMouse) return;

  // Project current mouse through the *frozen* inverse CTM
  const p = screenToSvgWith(invCTMStart, lastMouse.x, lastMouse.y);

  // Keep the original svg point under the cursor (scale from start)
  tx = viewStart.tx + (p.x - panAnchorSvg.x) * viewStart.scale;
  ty = viewStart.ty + (p.y - panAnchorSvg.y) * viewStart.scale;

  applyTransform();

  // If still panning, schedule next frame
  if (isPanning) rafId = requestAnimationFrame(panStep);
}

function onPanEnd(){
  if (!isPanning) return;
  isPanning = false;
  svg.style.cursor = '';
  panAnchorSvg = null;
  invCTMStart = null;
  lastMouse = null;
  if (rafId){
    cancelAnimationFrame(rafId);
    rafId = 0;
  }
}
function onMapClick(e){
  if (mapFrozen) return;
  let target = e.target;
  while (target && target !== svg && !target.dataset?.country) {
    target = target.parentNode;
  }
  if (!target || !target.dataset?.country) return;

  const country = target.dataset.country;
  setSelectedCountry(country);

  if (viewMode === VIEW.MATCH){
    renderMatches();        // <— show Matches list for that country
  }else{
    showParties(country);   // normal behavior in MAP view
  }
}

function showParties(country){
  selectedCountry = country;
  sideTitle.textContent = country;
  partyList.innerHTML = "";

  const parties = PARTY_DB[country] ?? [];

  if (!parties.length) {
    partyList.innerHTML = `<p class="hint">No parties added yet.</p>`;
    return;
  }

  const majorParties = parties.filter(p => p.tier !== "minor");
  const minorParties = parties.filter(p => p.tier === "minor");
  const showMinor = minorPartiesOpen.get(country) === true;

  renderPartySection("Major parties", majorParties);

  if (minorParties.length > 0) {
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "minor-toggle-btn";
    toggleBtn.textContent = showMinor
      ? "Hide minor parties"
      : `Show minor parties (${minorParties.length})`;

    toggleBtn.addEventListener("click", () => {
      minorPartiesOpen.set(country, !showMinor);
      showParties(country);
    });

    partyList.appendChild(toggleBtn);

    if (showMinor) {
      renderPartySection("Minor parties", minorParties);
    }
  }
}

function renderPartySection(title, parties){
  if (!parties.length) return;

  const heading = document.createElement("div");
  heading.className = "party-section-title";
  heading.innerHTML = title === "Major parties"
  ? `Major parties <span class="info-tip" data-tip="All parties that are consistently included in the latest opinion polls.">i</span>`
  : title;
  partyList.appendChild(heading);

  parties.forEach(party => {
    const btn = document.createElement("button");
    btn.className = "party-btn";

    const groupLogos = parseAffiliations(party).map(a => {
  const group = EU_GROUPS[a.code];
  if (!group) return "";
  return `<img class="eu-logo" src="${group.logo}" title="${group.name}" alt="${group.name}">`;
}).join("");

btn.innerHTML = `
  <img class="party-logo" style="background:${party.color}" src="${party.logo}" alt="">
  <span class="party-name">${party.name}</span>
  <span class="party-meta">
    ${groupLogos}
  </span>
`;

    btn.addEventListener("click", () => {
  chooseParty(sideTitle.textContent, party);
});

    partyList.appendChild(btn);
  });
}



function formatSpecs(p){
  const e = (p.econ ?? 0), s = (p.social ?? 0), u = (p.eu ?? 0);
  return `· E:${signed1(e)} S:${signed1(s)} EU:${signed1(u)}`;
}
function signed1(n){ return (n>0?`+${n}`:`${n}`); }

// =====  APPLY PARTY SELECTION  =====
function chooseParty(country, party){
  if (!country || !party) return;
  if (viewMode === VIEW.MATCH) return;

  applyCountryFill(country, party.color);
  dropLogo(country, party.logo);

  selections.set(country, {
    partyId: party.id,
    color: party.color,
    logoHref: party.logo
  });

  lakeCache.delete(`${axisMode}::you`);

  if (selectedCountry === country) selectedCountry = null;

  updateSpectrums();
  updateMatches();
}


// Compute a union bbox of all shapes belonging to a country
function countryBBox(country){
  const nodes = [
    ...svg.querySelectorAll(`#Europe [id^="${CSS.escape(country)}-"]`),
    ...svg.querySelectorAll(`#Europe [id="${CSS.escape(country)}"]`),
    ...svg.querySelectorAll(`#Europe g#${CSS.escape(country)} *`)
  ].filter(n => n.getBBox);

  if (!nodes.length) return null;

  let b = nodes[0].getBBox();
  let minX=b.x, minY=b.y, maxX=b.x+b.width, maxY=b.y+b.height;
  for (let i=1;i<nodes.length;i++){
    const bb = nodes[i].getBBox();
    minX = Math.min(minX, bb.x);
    minY = Math.min(minY, bb.y);
    maxX = Math.max(maxX, bb.x + bb.width);
    maxY = Math.max(maxY, bb.y + bb.height);
  }
  return { x:minX, y:minY, width:maxX-minX, height:maxY-minY };
}

function countryNodes(country){
  return [
    ...svg.querySelectorAll(`#Europe [id^="${CSS.escape(country)}-"]`),
    ...svg.querySelectorAll(`#Europe [id="${CSS.escape(country)}"]`),
    ...svg.querySelectorAll(`#Europe g#${CSS.escape(country)} *`)
  ].filter(el => el.matches('path,polygon,rect,ellipse'));
}
let matchPreview = null; // { country, partyId } temporary

function clearMatchPreview(){
  // always remove preview logos
  europe.querySelectorAll('[id^="preview-"]').forEach(n => n.remove());
  matchPreview = null;

  // Only restore fills to user selections when NOT in MATCH view.
  // In MATCH view the auto overlay must persist.
  if (viewMode !== VIEW.MATCH){
    COUNTRIES.forEach(c => {
      if (selections.has(c)) applyCountryFill(c, selections.get(c).color);
      else clearCountryFill(c);
    });
  }
}



function placeLogoAtCountry(country, logoHref, idPrefix, extraClass){
  const bbox = countryBBox(country);
  if (!bbox) return;

  // EXACT same sizing logic as your dropLogo
  const baseSize = Math.max(36, Math.min(96, Math.min(bbox.width, bbox.height) * 0.18));
  const scaleMul = LOGO_SCALE[country] ?? 1;
  const size = baseSize * scaleMul;

  const off = LOGO_OFFSETS[country] ?? {x:0, y:0};
  const cx = bbox.x + bbox.width/2  + off.x;
  const cy = bbox.y + bbox.height/2 + off.y;

  const old = svg.querySelector(`#${idPrefix}-${CSS.escape(country)}`);
  if (old) old.remove();

  const g = document.createElementNS('http://www.w3.org/2000/svg','g');
  g.setAttribute('id', `${idPrefix}-${country}`);
  g.setAttribute('class', `logo-marker ${extraClass||''}`.trim());
  g.setAttribute('transform', `translate(${cx},${cy})`);
  g.style.pointerEvents = 'none';   

  const img = document.createElementNS('http://www.w3.org/2000/svg','image');
  img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', logoHref);
  img.setAttribute('x', -size/2);
  img.setAttribute('y', -size/2);
  img.setAttribute('width', size);
  img.setAttribute('height', size);

  g.appendChild(img);
  europe.appendChild(g);
}

// Repoint both droppers to use the same placer:
function dropLogo(country, logoHref){
  placeLogoAtCountry(country, logoHref, 'marker', 'manual');
}
function dropAutoLogo(country, logoHref){
  placeLogoAtCountry(country, logoHref, 'auto-marker', 'auto-match');
}

function clampSpec(v){ return Math.max(SPEC_RANGE.min, Math.min(SPEC_RANGE.max, v)); }
function norm01(v){ return (v - SPEC_RANGE.min) / (SPEC_RANGE.max - SPEC_RANGE.min); } // [-3,3] -> [0,1]
// ===== AUTO MATCH OVERLAYS (MATCH view only) =====

