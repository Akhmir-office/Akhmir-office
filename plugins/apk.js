import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw ` مـثال \n*.apk WhatsApp*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = ` \n\n *:* ${data5.name}\n *:* ${data5.package}\n *:* ${data5.lastup}\n *:* ${data5.size}\n\nتـابـع ملڪ البوت\ninstagram.com/akh_mir_`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ 🫣 ]مسـاحة التطبيق ڪبيرة.'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `خطأ، لم نتوصل ال التطبيق الذي تريد[☺️].*`;
  }    
};
handler.help = ["apk"]
handler.tags = ["applications"]
handler.command = ["apk"] 
export default handler;
