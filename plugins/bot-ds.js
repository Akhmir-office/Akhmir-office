/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

if (global.conn.user.jid !== conn.user.jid) {
return conn.reply(m.chat, '🚩 *استخدم هذا الأمر مباشرة في الرقم الرئيسي للبوت*', m, fake, )
}

let chatId = m.isGroup ? [m.chat, m.sender] : [m.sender]
let sessionPath = './sessions/'

try {

let files = await fs.readdir(sessionPath)
let filesDeleted = 0
for (let file of files) {
for (let id of chatId) {
if (file.includes(id.split('@')[0])) {
await fs.unlink(path.join(sessionPath, file))
filesDeleted++;
break
}}}

if (filesDeleted === 0) {
await conn.reply(m.chat, '🚩 *لم يتم العثور على ملف يتضمن معرف الدردشة*', m, fake, )
} else {
await conn.reply(m.chat, `🎌 *تمت إزالتها ${filesDeleted} ملفات الجلسة*`, m, fake, )
conn.reply(m.chat, `😸 *¡مرحبا! يمكنك رؤيتى*`, m, fake, )
}
} catch (err) {
console.error('خطأ في قراءة مجلد الجلسة أو الملفات:', err)
await conn.reply(m.chat, '🚩 *حدث فشل*', m, fake, )
}

}
handler.help = ['ds', 'fixmsgespera']
handler.tags = ['bot']
handler.command = /^(fixmsgespera|ds)$/i

handler.register = true

export default handler
