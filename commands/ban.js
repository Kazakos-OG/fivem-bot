var _$_7d88=["\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73","\x72\x75\x6E","\x65\x78\x70\x6F\x72\x74\x73","\x66\x69\x72\x73\x74","\x6D\x65\x6D\x62\x65\x72\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64","\x70\x72\x65\x66\x69\x78","\x63\x6F\x6E\x66\x69\x67","\x6E\x61\x6D\x65","\x68\x65\x6C\x70","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x63\x6F\x6C\x6F\x72","\x65\x6D\x62\x65\x64","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x6A\x6F\x69\x6E","\x73\x6C\x69\x63\x65","\x64\x65\x66\x61\x75\x6C\x74\x5F\x62\x61\x6E\x5F\x6D\x73\x67","\x73\x65\x74\x74\x69\x6E\x67\x73","\x69\x64","\x61\x75\x74\x68\x6F\x72","\x71\x75\x65\x72\x79","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x74\x61\x67","\x75\x73\x65\x72","\x62\x61\x6E"];const {MessageEmbed}=require(_$_7d88[0]);module[_$_7d88[2]][_$_7d88[1]]= async (_0x2682E,_0x2697A,_0x267DB)=>{const _0x26927=_0x2697A[_$_7d88[5]][_$_7d88[4]][_$_7d88[3]]()|| _0x2697A[_$_7d88[8]][_$_7d88[4]][_$_7d88[7]][_$_7d88[6]](_0x267DB[0]);if(!_0x26927){let _0x26881= new MessageEmbed()[_$_7d88[16]](_0x2682E[_$_7d88[10]][_$_7d88[15]][_$_7d88[14]])[_$_7d88[13]](`Please ensure the provide a user you are trying to ban. Example: \`${_0x2682E[_$_7d88[10]][_$_7d88[9]]}${module[_$_7d88[2]][_$_7d88[12]][_$_7d88[11]]} <@mention>\``);_0x2697A[_$_7d88[18]][_$_7d88[17]](_0x26881)}else {let _0x269CD=_0x267DB[_$_7d88[20]](1)[_$_7d88[19]](` `);if(!_0x269CD){_0x269CD= _0x2682E[_$_7d88[10]][_$_7d88[22]][_$_7d88[21]]};if(_0x26927[_$_7d88[23]]== _0x2697A[_$_7d88[24]][_$_7d88[23]]){let _0x268D4= new MessageEmbed()[_$_7d88[16]](_0x2682E[_$_7d88[10]][_$_7d88[15]][_$_7d88[14]])[_$_7d88[13]](`You cannot ban your self!`);_0x2697A[_$_7d88[18]][_$_7d88[17]](_0x268D4)}else {_0x2682E[_$_7d88[26]][_$_7d88[25]](`SELECT * FROM bans WHERE discord = 'discord:${_0x26927[_$_7d88[23]]}'`,(_0x26AC6,_0x26B19)=>{if(_0x26B19[0]){let _0x26A20= new MessageEmbed()[_$_7d88[16]](_0x2682E[_$_7d88[10]][_$_7d88[15]][_$_7d88[14]])[_$_7d88[13]](`That user is already banned within our database!`);_0x2697A[_$_7d88[18]][_$_7d88[17]](_0x26A20)}else {_0x2682E[_$_7d88[26]][_$_7d88[25]](`INSERT INTO bans (discord, reason, staff, timeoftheban) VALUES ('discord:${_0x26927[_$_7d88[23]]}', '${_0x269CD}', '${_0x2697A[_$_7d88[24]][_$_7d88[23]]}', '${ new Date()}')`);let _0x26A73= new MessageEmbed()[_$_7d88[16]](_0x2682E[_$_7d88[10]][_$_7d88[15]][_$_7d88[14]])[_$_7d88[13]](`I have banned ${_0x26927[_$_7d88[28]][_$_7d88[27]]} from the server for the reason \`${_0x269CD}\``);_0x2697A[_$_7d88[18]][_$_7d88[17]](_0x26A73)}})}}};module[_$_7d88[2]][_$_7d88[12]]= {name:_$_7d88[29]}