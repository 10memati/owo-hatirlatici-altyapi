module.exports = {
  name:"hatırlatıcı",
  code:`
$if[$checkContains[$toLowercase[$message[1]];cf;coinflip]==true]
$description[
$username Owo CoinFlip Hatırlatıcısı $replaceText[$replaceText[$getUserVar[cfh];yes;Kapatıldı.;-1];no;Açıldı.;-1]]
$setUserVar[cfh;$replaceText[$replaceText[$getUserVar[cfh];yes;no;-1];no;yes;-1]]
$endif
$if[$checkContains[$toLowercase[$message[1]];s;slot]==true]
$description[
$username Owo Slot Hatırlatıcısı $replaceText[$replaceText[$getUserVar[sloth];yes;Kapatıldı.;-1];no;Açıldı.;-1]]
$setUserVar[sloth;$replaceText[$replaceText[$getUserVar[sloth];yes;no;-1];no;yes;-1]]
$endif
$if[$checkContains[$toLowercase[$message[1]];bj;blackjack]==true]
$description[
$username Owo BlackJack Hatırlatıcısı $replaceText[$replaceText[$getUserVar[cfh];yes;Kapatıldı.;-1];no;Açıldı.;-1]]
$setUserVar[bjh;$replaceText[$replaceText[$getUserVar[bjh];yes;no;-1];no;yes;-1]]
$endif
$if[$checkContains[$toLowercase[$message[1]];h;hunt]==true]
$description[
$username Owo Hunt Hatırlatıcısı $replaceText[$replaceText[$getUserVar[cfh];yes;Kapatıldı.;-1];no;Açıldı.;-1]]
$setUserVar[hunth;$replaceText[$replaceText[$getUserVar[hunth];yes;no;-1];no;yes;-1]]
$endif
$if[$checkContains[$toLowercase[message[1]];slot;s;bj;blackjack;hunt;h;cf;coinflip]==false]
$description[
$username \`slot\`, \`blackjack\`, \`coinflip\` veya \`hunt\` Yazın!]
$deleteIn[6s]
]`
}
