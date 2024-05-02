import fetch from 'node-fetch'

var handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return conn.reply(m.chat, `🎌️ *Ingrese el link de modlatest junto al comando*`, m, fake, )
if (!args[0].match(/latestmodapks/gi)) return conn.reply(m.chat, `🚩 *رابط سيء*`, m, fake, )

try {
  
let res = await fetch(`https://api.akuari.my.id/downloader/dlmod?link=${args[0]}`)
let json = await res.json()
await conn.reply(m.chat, `*📁 وزن:* ${json.respon.size}\n⏰ انتظر لحظة`, m, fake, )
let { linkdl, size } = json.respon
    
conn.sendMessage(m.chat, { document: { url: linkdl }, mimetype: 'application/videos.android.package-archive', fileName: `Apk modlatest.apk` }, { quoted: m })
} catch {
return conn.reply(m.chat, '🚩 *حدث فشل*', m, fake, )}

}
handler.help = ['dlmodlatest']
handler.tags = ['descargas']
handler.command = ['dllatest', 'dlmodlatest'] 

handler.register = true
handler.limit = true

export default handler
