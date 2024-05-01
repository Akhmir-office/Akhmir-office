var handler = async (m, {conn, text, usedPrefix, command}) => {

global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) return conn.reply(m.chat, '🎌 *الرد على ملصق أو صورة*', m, fake, )
if (!m.quoted.fileSha256) return conn.reply(m.chat, '🚩 *يمكنك فقط تعيين أوامر للملصقات والصور*', m, fake, )
if (!text) return conn.reply(m.chat, `🎌 *Texto faltante*\n\nUso correcto:\n${usedPrefix + command} *<texto> <responder a sticker>*\n\nEjemplo:\n${usedPrefix + command} *<!menu> <responder a sticker>*`, m, fake, )
  
const sticker = global.db.data.sticker
const hash = m.quoted.fileSha256.toString('base64')

if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, '🚩 *¡يمكن لمالكي فقط استخدام هذه الميزة!*', m, fake, )
sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false}
conn.reply(m.chat, `✅ *حفظ بنجاح*`, m, fake, )
}

handler.tags = ['database']
handler.help = ['setcmd']
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']

handler.rowner = true

export default handler
