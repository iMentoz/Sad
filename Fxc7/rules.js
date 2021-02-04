const rules = (name, uptime, tanggal, jam, prefix) => {
return `
┏━━━━━❬ *REGULATION CURSED* ❭━━━━━━━⊱
┃
┣⊱❥ \`\`\`AKTIF\`\`\`: ${kyun(uptime)}
┣⊱❥ \`\`\`JAM\`\`\`: *${jam} WIB*
┣⊱❥ \`\`\`TANGGAL\`\`\`: *${tanggal}*
┃
┣⊱❥ ❌ *SPAM*
┣⊱❥ ❌ *CALL & VC*
┃ \`\`\`Melanggar??\`\`\` *Banned*
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━❬ *NOTE CURSED* ❭━━━━━━━━━⊱
┃
┣⊱❥ *KASIH BOT JEDA BIAR GA ERROR!!!!*
┃
┣⊱❥ \`\`\`Bot ini belum selesai sepenuhnya\`\`\`
┃ \`\`\`Masih dalam proses pengerjaan\`\`\`
┃ \`\`\`Jadi masih jarang aktif, dan\`\`\`
┃ \`\`\`Maaf Jika Ada Menu Yang Error\`\`\`
┃
┣⊱❥ \`\`\`Jika Lama Harap Ulangi Command\`\`\`
┃
┣⊱❥ \`\`\`Dan Jika Mengalami Error\`\`\`
┃ \`\`\`Harap Lapor Owner Dengan Cara\`\`\`
┃ *${prefix}report* \`\`\`apa pesan errornya\`\`\`
┃
┣⊱❥ \`\`\`Mau Invit Bot?? Donasi Gan,\`\`\`
┃ \`\`\`Kalo Gamau Donasi Follow Ig\`\`\`
┃ \`\`\`@iFrell4k\`\`\`
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`
}
exports.rules = rules
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}