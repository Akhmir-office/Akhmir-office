import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `👋 Hola ${nombre}!!
 *${saludo}*

📅 تاريخ: ${fecha}
⏰ وقت: ${tiempo}

⚠️ *يستخدم:* لا ترسل بريدًا عشوائيًا إلى الروبوت
🧃 الكاتب *.menu* لإظهار menú 
  
📝 ¿هل تريد دعم هذا المشروع حتى يستمر في التحديث؟ انضم لمجموعتنا: 
*https://chat.whatsapp.com/GYDqlKJablyCYA7McDiNnc*`, m, fake, )


user.pc = new Date * 1
}
