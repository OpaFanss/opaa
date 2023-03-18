import { savefrom } from '@bochilteam/scraper'
import axios from 'axios'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

  await m.reply('Searching...')
   axios.get(`https://api.zeks.xyz/api/resep-masak?apikey=MIMINGANZ&q=${text}`)
    .then((res) => {
      axios(res.data.thumb)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'axios')
            let hasil = `*${res.data.title}*\n\nTingkat : ${res.data.tingkat}\nWaktu : ${res.data.duration}\nBahan2 :${res.data.bahan}\nPorsi : ${res.data.banyak}\nLangkah2 :\n${res.data.cara}\n\nSumber :\n${res.data.url}\n*Selamat Mencoba!`

     conn.sendFile(m.chat, buf, 'resep.jpg', hasil, m)
        })
    })
}
handler.help = ['resep'].map(v => v + ' <masakan>')
handler.tags = ['internet', 'kabul']
handler.command = /^(resep)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

export default handler 