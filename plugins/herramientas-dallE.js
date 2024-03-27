let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗]Introduce un texto para crear una imagen y así utilizar la función Dall-E*\n\n*—◉ Ejemplos de peticiones*\n*◉ ${usedPrefix + command} Kittens crying*\n*◉ ${usedPrefix + command} hatsune miku kiss*`
try {
m.reply('*[❗] Espere un momento en lo que ordena*')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*[❗] Error, inténtalo de nuevo*`
}}
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3']
handler.register = true
export default handler
