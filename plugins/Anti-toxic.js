const toxicRegex=/puto|puta|rata|estupido|imbécil|rctmre|mrd|comemierda|verga|cabrón|gilipollas|maricon|culero|cerote|Lameculos|Cretino|Pendejo|Bobo|Idiota|Maldito|Maldita|Jueputa|Hijueputa|Soplamela|Boludo|pelotudo|stupid|idiot|mrd|vrga|pelamela|faggot/i;export async function before(_0x8cd905,{isAdmin:_0x4aa750,isBotAdmin:_0x513046,isOwner:_0x15f4db}){if(_0x8cd905['isBaileys']&&_0x8cd905['fromMe'])return!0x0;if(!_0x8cd905['isGroup'])return!0x1;let _0x1e148a=global['db']['data']['users'][_0x8cd905['sender']],_0x5500f6=global['db']['data']['chats'][_0x8cd905['chat']],_0x59e8f4=global['db']['data']['settings'][this['user']['jid']]||{};const _0x5bd1e0=toxicRegex['exec'](_0x8cd905['text']);if(_0x5bd1e0&&_0x5500f6['antiToxic']&&!_0x15f4db&&!_0x4aa750){_0x1e148a['warn']+=0x1;if(!(_0x1e148a['warn']>=0x5))await _0x8cd905['reply']((_0x1e148a['warn']==0x1?'Hola\x20*@'+_0x8cd905['sender']['split']`@`[0x0]+'*':'*@'+_0x8cd905['sender']['split']`@`[0x0]+'*')+',\x20decir\x20malas\x20palabras\x20('+_0x5bd1e0+')\x20está\x20prohibido\x20en\x20este\x20grupo\x20*'+_0x1e148a['warn']+'/5*\x20advertencia',![],{'mentions':[_0x8cd905['sender']]});if(!(_0x1e148a['warn']>=0x5))await _0x8cd905['reply']((_0x1e148a['warn']==0x1?'Hello\x20*@'+_0x8cd905['sender']['split']`@`[0x0]+'*':'*@'+_0x8cd905['sender']['split']`@`[0x0]+'*')+',\x20say\x20the\x20word\x20('+_0x5bd1e0+')\x20is\x20prohibited\x20in\x20this\x20bot\x20*'+_0x1e148a['warn']+'/5*\x20warning',![],{'mentions':[_0x8cd905['sender']]});}return _0x1e148a['warn']>=0x5&&(_0x1e148a['warn']=0x0,await _0x8cd905['reply']('Hola\x20@'+_0x8cd905['sender']['split']`@`[0x0]+',\x20Usted\x20no\x20obedeció\x20las\x20advertencias\x20que\x20fueron\x20indicadas,\x20usted\x20será\x20eliminado\x20y\x20bloqueado\x20del\x20grupo',![],{'mentions':[_0x8cd905['sender']]}),_0x1e148a['banned']=!![],await this['groupParticipantsUpdate'](_0x8cd905['chat'],[_0x8cd905['sender']],'remove')),!0x1;}
