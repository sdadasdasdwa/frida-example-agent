794 /agent/index.js.map
446 /agent/index.js
211 /agent/logger.js.map
38 /agent/logger.js
✄
{"version":3,"file":"index.js","names":["log","header","Memory","alloc","writeU32","add","writeU64","uint64","hexdump","readByteArray","ansi","Process","getModuleByName","enumerateExports","slice","forEach","exp","index","name","Interceptor","attach","Module","getExportByName","onEnter","args","path","readUtf8String"],"sourceRoot":"E:/Downloads/Projects/frida-agent-example/agent/","sources":["index.ts"],"mappings":"cAASA,MAAW,cAEpB,MAAMC,EAASC,OAAOC,MAAM,IAC5BF,EACKG,SAAS,YAAYC,IAAI,GACzBD,SAAS,YAAYC,IAAI,GACzBC,SAASC,OAAO,uBACrBP,EAAIQ,QAAQP,EAAOQ,cAAc,IAAoB,CAAEC,MAAM,KAE7DC,QAAQC,gBAAgB,qBACnBC,mBACAC,MAAM,EAAG,IACTC,SAAQ,CAACC,EAAKC,KACXjB,EAAI,UAAUiB,MAAUD,EAAIE,OAAO,IAG3CC,YAAYC,OAAOC,OAAOC,gBAAgB,KAAM,QAAS,CACrDC,QAAQC,GACJ,MAAMC,EAAOD,EAAK,GAAGE,iBACrB1B,EAAI,gBAAgByB,KACxB"}
✄
import{log as e}from"./logger.js";const t=Memory.alloc(16);t.writeU32(3735928559).add(4).writeU32(3490705421).add(4).writeU64(uint64("0x1122334455667788")),e(hexdump(t.readByteArray(16),{ansi:!0})),Process.getModuleByName("libSystem.B.dylib").enumerateExports().slice(0,16).forEach(((t,r)=>{e(`export ${r}: ${t.name}`)})),Interceptor.attach(Module.getExportByName(null,"open"),{onEnter(t){const r=t[0].readUtf8String();e(`open() path="${r}"`)}});
✄
{"version":3,"file":"logger.js","names":["log","message","console"],"sourceRoot":"E:/Downloads/Projects/frida-agent-example/agent/","sources":["logger.ts"],"mappings":"OAAM,SAAUA,IAAIC,GAChBC,QAAQF,IAAIC,EAChB"}
✄
export function log(o){console.log(o)}