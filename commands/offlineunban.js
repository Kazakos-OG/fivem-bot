var _$_5ebc=["\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73","\x72\x75\x6E","\x65\x78\x70\x6F\x72\x74\x73","\x70\x72\x65\x66\x69\x78","\x63\x6F\x6E\x66\x69\x67","\x6E\x61\x6D\x65","\x68\x65\x6C\x70","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x63\x6F\x6C\x6F\x72","\x65\x6D\x62\x65\x64","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x63\x61\x74\x63\x68","\x66\x65\x74\x63\x68","\x75\x73\x65\x72\x73","\x69\x64","\x61\x75\x74\x68\x6F\x72","\x71\x75\x65\x72\x79","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x64\x69\x73\x63\x72\x69\x6D\x69\x6E\x61\x74\x6F\x72","\x6F\x66\x66\x6C\x69\x6E\x65\x75\x6E\x62\x61\x6E"];const {MessageEmbed}=require(_$_5ebc[0]);module[_$_5ebc[2]][_$_5ebc[1]]= async (_0x16294,_0x163F6,_0x16259)=>{let _0x16380=_0x16259[0];if(!_0x16380){let _0x162CF= new MessageEmbed()[_$_5ebc[10]](_0x16294[_$_5ebc[4]][_$_5ebc[9]][_$_5ebc[8]])[_$_5ebc[7]](`Please ensure the provide a user you are trying to unban. Example: \`${_0x16294[_$_5ebc[4]][_$_5ebc[3]]}${module[_$_5ebc[2]][_$_5ebc[6]][_$_5ebc[5]]} users-id\``);_0x163F6[_$_5ebc[12]][_$_5ebc[11]](_0x162CF)}else {if(isNaN(_0x16380)){let _0x1630A= new MessageEmbed()[_$_5ebc[10]](_0x16294[_$_5ebc[4]][_$_5ebc[9]][_$_5ebc[8]])[_$_5ebc[7]](`Please ensure the ID is a number!`);_0x163F6[_$_5ebc[12]][_$_5ebc[11]](_0x1630A)}else {let _0x163BB= await _0x16294[_$_5ebc[15]][_$_5ebc[14]](_0x16380)[_$_5ebc[13]]((_0x16431)=>{if(_0x16431){let _0x1646C= new MessageEmbed()[_$_5ebc[7]](`No member was found with the matching Id of \`${_0x16380}\``)[_$_5ebc[10]](_0x16294[_$_5ebc[4]][_$_5ebc[9]][_$_5ebc[8]]);_0x163F6[_$_5ebc[12]][_$_5ebc[11]](_0x1646C)}});if(_0x163BB== undefined){return};if(_0x163BB[_$_5ebc[16]]== _0x163F6[_$_5ebc[17]][_$_5ebc[16]]){let _0x16345= new MessageEmbed()[_$_5ebc[10]](_0x16294[_$_5ebc[4]][_$_5ebc[9]][_$_5ebc[8]])[_$_5ebc[7]](`You cannot unban your self!`);_0x163F6[_$_5ebc[12]][_$_5ebc[11]](_0x16345)}else {_0x16294[_$_5ebc[19]][_$_5ebc[18]](`SELECT * FROM bans WHERE discord = 'discord:${_0x163BB[_$_5ebc[16]]}'`,(_0x1651D,_0x16558)=>{if(!_0x16558[0]){let _0x164A7= new MessageEmbed()[_$_5ebc[10]](_0x16294[_$_5ebc[4]][_$_5ebc[9]][_$_5ebc[8]])[_$_5ebc[7]](`That user is not banned within our database!`);_0x163F6[_$_5ebc[12]][_$_5ebc[11]](_0x164A7)}else {_0x16294[_$_5ebc[19]][_$_5ebc[18]](`DELETE FROM bans WHERE discord = 'discord:${_0x163BB[_$_5ebc[16]]}'`);let _0x164E2= new MessageEmbed()[_$_5ebc[10]](_0x16294[_$_5ebc[4]][_$_5ebc[9]][_$_5ebc[8]])[_$_5ebc[7]](`I have unbanned ${_0x163BB[_$_5ebc[20]]+ `#`+ _0x163BB[_$_5ebc[21]]} from the server.`);_0x163F6[_$_5ebc[12]][_$_5ebc[11]](_0x164E2)}})}}}};module[_$_5ebc[2]][_$_5ebc[6]]= {name:_$_5ebc[22]}