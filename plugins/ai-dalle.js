import fetch from 'node-fetch'
  
var handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {

let text
if (args.length >= 1) {
text = args.slice(0).join(' ')
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return conn.reply(m.chat, `*🎌 يقوم هذا الأمر بإنشاء صور من النصوص*\n\nEjemplo, !dalle Estrella naciente`, m, fake, )

try {

conn.reply(m.chat, '⏰ انتظر لحظة', m, fake, )
await Draw(text).then((img) => {
conn.sendFile(m.chat, img, text, `*🍧 نتيجة ل* ${text}\n\n`, m)
})
} catch (e) {
return conn.reply(m.chat, `*🚩 حدث فشل*`, m, fake, )
}

}
handler.help = ['dalle']
handler.tags = ['ai']
handler.command = /^(dalle|openiamage|aiimage|aiimg|aimage|iaimagen|openaimage|openaiimage)/i
  
export default handler 
  
async function Draw(propmt) {
const Blobs = await fetch(
'https://api-inference.huggingface.co/models/prompthero/openjourney-v2',
{
method: 'POST',
headers: {
'content-type': 'application/json',
Authorization: 'Bearer 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',
},
body: JSON.stringify({ inputs: propmt }),
})
.then((res) => res.blob())
const arrayBuffer = await Blobs.arrayBuffer()
const buffer = Buffer.from(arrayBuffer)
return buffer
}
