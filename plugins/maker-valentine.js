import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.sekha.me/api/textpro/valentine?text=${response[0]}&apikey=apirey`
  conn.sendFile(m.chat, res, 'valentine.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['valentine'].map(v => v + ' <text>')
handler.tags = ['logo']
handler.command = /^(valentine)$/i
handler.limit = false
//buatan zyko-md, jgn hapus atuh 😊
export default handler