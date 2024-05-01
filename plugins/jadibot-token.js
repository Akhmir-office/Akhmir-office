import fs from 'fs'

async function handler(m, {usedPrefix}) {

const user = m.sender.split('@')[0]
if (fs.existsSync('./jadibts/' + user + '/creds.json')) {
let token = Buffer.from(fs.readFileSync('./jadibts/' + user + '/creds.json'), 'utf-8').toString('base64')

await conn.reply(m.chat, `🎌 *يسمح لك الرمز المميز بتسجيل الدخول إلى برامج الروبوت الأخرى، ونوصي بعدم مشاركته مع أي شخص*\n\nTu token es:`, m, fake, )
await conn.reply(m.chat, token, m, fake, )
} else {
await conn.reply(m.chat, `🚩 *ليس لديك أي رموز مميزة نشطة، استخدم !jadibot لإنشاء واحدة*`, m, fake, )
}

}
handler.help = ['token', 'gettoken', 'serbottoken']
handler.command = ['token', 'gettoken', 'serbottoken']
handler.tags = ['jadibot']

handler.private = true
handler.register = true

export default handler 
