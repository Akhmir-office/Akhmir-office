let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu2.jpg'

let love = `╭━━━━━━━◇x◇━━━━━━━╮
┃ • *الحب - CURIOSITYBOT* 🪷
┣━━━━━━━◇x◇━━━━━━━╯
┃ ┌─────⊱◈◈◈⊰─────
┃ ┃🚩 إسم: ${name}
┃ ┃💞 الحب لك هو: *${Math.floor(Math.random() * 100)}%* De *100%*
┃ └─────⊱◈◈◈⊰─────
╰━━━━━━━◇x◇━━━━━━━╯

❤️ هناك حب، هل يجب أن تتقدم لها؟?`

conn.sendMessage(m.chat, {text: love, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 خطأ في النظام*`, m, fake, )

}
handler.help = ['love']
handler.tags = ['juegos']
handler.command = /^(love|amor|Love)$/i

handler.register = true

export default handler
