var handler = m => m
handler.all = async function (m) {

let chat = global.db.data.chats[m.chat]

if (/^bot$/i.test(m.text) && !chat.isBanned) {

conn.sendPresenceUpdate('composing', m.chat)    
conn.reply(m.chat, '🎌 *أنا هنا لمساعدتك*', m, fake, )}

return !0

}
export default handler
