let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] El propietario no tiene habilitadas las restricciones. (#Enable Restrict) Contacta con el para que lo habilite.*'
let kicktext = `*[❗] Etiqueta a una persona o responde a un mensaje grupal para eliminar al usuario*\n\n*—◉ Example:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
if (m.mentionedJid.includes(conn.user.jid)) return  
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(kick2|echar2|hechar2|sacar2)$/i
handler.admin = true
handler.group = true
handler.register = true
handler.botAdmin = true
export default handler
