var _$_aac1=["\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73","\x72\x75\x6E","\x65\x78\x70\x6F\x72\x74\x73","\x70\x72\x65\x66\x69\x78","\x63\x6F\x6E\x66\x69\x67","\x6E\x61\x6D\x65","\x68\x65\x6C\x70","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x63\x6F\x6C\x6F\x72","\x65\x6D\x62\x65\x64","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x63\x61\x74\x63\x68","\x66\x65\x74\x63\x68","\x75\x73\x65\x72\x73","\x6A\x6F\x69\x6E","\x73\x6C\x69\x63\x65","\x64\x65\x66\x61\x75\x6C\x74\x5F\x62\x61\x6E\x5F\x6D\x73\x67","\x73\x65\x74\x74\x69\x6E\x67\x73","\x69\x64","\x61\x75\x74\x68\x6F\x72","\x71\x75\x65\x72\x79","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x64\x69\x73\x63\x72\x69\x6D\x69\x6E\x61\x74\x6F\x72","\x6F\x66\x66\x6C\x69\x6E\x65\x62\x61\x6E"];const {MessageEmbed}=require(_$_aac1[0]);module[_$_aac1[2]][_$_aac1[1]]= async (_0xCA41,_0xCBDF,_0xC9FC)=>{let _0xCB55=_0xC9FC[0];if(!_0xCB55){let _0xCA86= new MessageEmbed()[_$_aac1[10]](_0xCA41[_$_aac1[4]][_$_aac1[9]][_$_aac1[8]])[_$_aac1[7]](`Please ensure the provide a user you are trying to ban. Example: \`${_0xCA41[_$_aac1[4]][_$_aac1[3]]}${module[_$_aac1[2]][_$_aac1[6]][_$_aac1[5]]} users-id\``);_0xCBDF[_$_aac1[12]][_$_aac1[11]](_0xCA86)}else {if(isNaN(_0xCB55)){let _0xCACB= new MessageEmbed()[_$_aac1[10]](_0xCA41[_$_aac1[4]][_$_aac1[9]][_$_aac1[8]])[_$_aac1[7]](`Please ensure the ID is a number!`);_0xCBDF[_$_aac1[12]][_$_aac1[11]](_0xCACB)}else {let _0xCB9A= await _0xCA41[_$_aac1[15]][_$_aac1[14]](_0xCB55)[_$_aac1[13]]((_0xCC69)=>{if(_0xCC69){let _0xCCAE= new MessageEmbed()[_$_aac1[7]](`No member was found with the matching Id of \`${_0xCB55}\``)[_$_aac1[10]](_0xCA41[_$_aac1[4]][_$_aac1[9]][_$_aac1[8]]);_0xCBDF[_$_aac1[12]][_$_aac1[11]](_0xCCAE)}});if(_0xCB9A== undefined){return};let _0xCC24=_0xC9FC[_$_aac1[17]](1)[_$_aac1[16]](` `);if(!_0xCC24){_0xCC24= _0xCA41[_$_aac1[4]][_$_aac1[19]][_$_aac1[18]]};if(_0xCB9A[_$_aac1[20]]== _0xCBDF[_$_aac1[21]][_$_aac1[20]]){let _0xCB10= new MessageEmbed()[_$_aac1[10]](_0xCA41[_$_aac1[4]][_$_aac1[9]][_$_aac1[8]])[_$_aac1[7]](`You cannot ban your self!`);_0xCBDF[_$_aac1[12]][_$_aac1[11]](_0xCB10)}else {_0xCA41[_$_aac1[23]][_$_aac1[22]](`SELECT * FROM bans WHERE discord = 'discord:${_0xCB9A[_$_aac1[20]]}'`,(_0xCD7D,_0xCDC2)=>{if(_0xCDC2[0]){let _0xCCF3= new MessageEmbed()[_$_aac1[10]](_0xCA41[_$_aac1[4]][_$_aac1[9]][_$_aac1[8]])[_$_aac1[7]](`That user is already banned within our database!`);_0xCBDF[_$_aac1[12]][_$_aac1[11]](_0xCCF3)}else {_0xCA41[_$_aac1[23]][_$_aac1[22]](`INSERT INTO bans (discord, reason, staff, timeoftheban) VALUES ('discord:${_0xCB9A[_$_aac1[20]]}', '${_0xCC24}', '${_0xCBDF[_$_aac1[21]][_$_aac1[20]]}', '${ new Date()}')`);let _0xCD38= new MessageEmbed()[_$_aac1[10]](_0xCA41[_$_aac1[4]][_$_aac1[9]][_$_aac1[8]])[_$_aac1[7]](`I have banned ${_0xCB9A[_$_aac1[24]]+ `#`+ _0xCB9A[_$_aac1[25]]} from the server for the reason \`${_0xCC24}\``);_0xCBDF[_$_aac1[12]][_$_aac1[11]](_0xCD38)}})}}}};module[_$_aac1[2]][_$_aac1[6]]= {name:_$_aac1[26]}