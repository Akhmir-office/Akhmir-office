var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🎌 *اكتب تقريرك*\n\nEjemplo, !${command} el comando !infobot no funciona`, m, fake, )
if (text.length < 10) return conn.reply(m.chat, `🚩 *الحد الأدنى 10 أحرف لإعداد التقرير*`, m, fake, )
if (text.length > 1000) return conn.reply(m.chat, `🚩 *الحد الأقصى 1000 حرف لعمل التقرير.*`, m, fake, )

let teks = `⚠️ *تقرير* ⚠️\n\n⬡ *رقم*\nWa.me/${m.sender.split`@`[0]}\n\n⬡ *رسالة*\n${text}`
conn.reply('212664012616@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})

conn.reply(m.chat, `🚩 *تم إرسال التقرير إلى منشئ المحتوى، وسيتم الرد عليه لاحقًا*`, m, fake, )

}
handler.help = ['reporte', 'request']
handler.tags = ['bot']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i

handler.register = true

export default handler
