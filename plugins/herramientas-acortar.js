import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] Ingrese un enlace/URL que desee acortar*'
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) throw `*[❗] Error, comprueba que el texto confiado es un texto y vuelve a intentarlo*`
let done = `*Enlace correctamente acortado!!*\n\n*Link above:*\n${text}\n*Shortening link:*\n${shortUrl1}`.trim()   
m.reply(done)}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
handler.register = true
export default handler
