//**IRI BILANG BOSS AHAY PAPALE PAPALE PAPALE PAPALE PALE
//BY RIZKY
//SILAHKAN REKODE MEK

let handler = async (m, { conn, usedPrefix }) => {

let user = global.DATABASE.data.users[m.sender]
let name = conn.getName(m.sender)

let caption = `
β­βββ   π΄β΄ππ β¬πΆππΆππΈβ― β‘
β _${name} Bank Account π_
β
*β π΅Balance :* ${user.money}
*β πͺ Koin:* ${user.koin}
β
β°ββββββββββββ

Untuk Menukar exp ke money ketik
${usedPrefix}tukarmoney 100
`

conn.reply( m.chat, caption, m)
}

handler.help = ['balance']
handler.tags = ['xp']
handler.command = /^(balance|dompet)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
