import {execSync} from 'child_process';

const handler = async (m, {conn, text}) => {
  try {
    if (global.conn.user.jid == conn.user.jid) {
      const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
      conn.reply(m.chat, stdout.toString(), m);
    }
  } catch (error) {
    console.error(error);
    let errorMessage = 'Se produjo un error al ejecutar el comando.';
    if (error.message) {
      errorMessage += '\nError message: ' + error.message;
    }
    await conn.reply(m.chat, errorMessage, m);
  }
};

handler.help = ['update'];
handler.tags = ['owner'];
handler.command = /^update|actualizar$/i;
handler.rowner = true;
export default handler;
