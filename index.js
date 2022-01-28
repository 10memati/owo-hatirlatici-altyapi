const express = require('express');
const app = express()
app.get("/",(req,res) =>{
  res.send("Bot Aktif.")
}).listen(8080)
const DBD = require("aoi.js");
const bot = new DBD.Bot({
  token: process.env['token'],
  prefix: "s!",
 })
bot.onMessage()
bot.onJoined()
bot.onLeave()

bot.readyCommand({
  channel:"$randomChannelID",
  code:`
$log[Bot Aktif.]`
})

bot.variables({
  bjh:"no",
  cfh:"no",
  sloth:"no",
  hunth:"no",
  owoprefix:""
})
.command({
  name:"yardım",
  code:`
$description[
**s!hatırlatıcı coinflip/cf**
**s!hatırlatıcı slot/s**
**s!hatırlatıcı blackjack/bj**
**s!hatırlatıcı hunt/h**
**s!owoprefix****s!ping**]
$color[BLACK]`
})

bot.command({
  name:"owoprefix",
  code:`
$description[
$username Owonun Sunucudaki Prefixi Ayarlandı.
]
$color[RANDOM]
$setServerVar[owoprefix;$message]
$onlyIf[$message!=;Prefix Gir!]
$onlyIf[$charCount[$message]<25;Prefix 25 Harften Fazla Olamaz!]
$onlyPerms[admin;Yetkin Yok!]`
})

bot.command({
  name:"$getServerVar[owoprefix]",
  code:`
$if[$checkContains[$toLowercase[$message];cf;coinflip]==true]
<@$authorID> Tekrardan CoinFlip Oynayabilirsiniz.
$wait[15s]
$endif
$onlyIf[$getUserVar[cfh]!=no;]`
})
bot.command({
  name:"$getServerVar[owoprefix]",
  code:`
$if[$checkContains[$toLowercase[$message];s;slot==true]
<@$authorID> Tekrardan Slot Oynayabilirsiniz.
$wait[14]
$endif
$onlyIf[$getUserVar[sloth]!=no;]`
})

bot.command({
  name:"$getServerVar[owoprefix]",
  code:`
$if[$checkContains[$toLowercase[$message];h;hunt]==true]
<@$authorID> Tekrardan Hunt Oynayabilirsiniz.
$wait[15s]
$endif
$onlyIf[$getUserVar[hunth]!=no;]`
})

bot.command({
  name:"$getServerVar[owoprefix]",
  code:`
$if[$checkContains[$toLowercase[$message];bj;blackjack]==true]
<@$authorID> Tekrardan BlackJack Oynayabilirsiniz.
$wait[14s]
$endif
$onlyIf[$getUserVar[bjh]!=no;]`
})
