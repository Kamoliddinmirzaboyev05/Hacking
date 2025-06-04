// Savollar va javoblar bazasi

const questionsAndAnswers = {
"Dasturiy ta'minot muhandisligi" : "dasturiy ta'minot muhandisligi" ,
"SADT modelini yaratish quyidagi harakatlarni o'z ichiga oladi:" : "Tanqidiy baholash, ko'rib chiqish va sharhlash" ,
"Biznes jarayonlarida jarayon sinflari quyidagilarga ajratiladi:" : "Asosiy ish jarayonlari" ,
"CASE-mablag'lari quyidagi mezonlarga ko'ra tasniflanadi:" : "Amaliy metodologiyalar va tizimlar va ma'lumotlar bazalarining modellariga muvofiq" ,
"Kichik integratsiyalashgan modellashtirish vositalari quyidagilarni o'z ichiga oladi:" : "BPwin" ,
"Modellashtirishning o'rtacha vositalariga quyidagilar kiradi:" : "ARIS vositasi" ,
"Ob'ektga yo'naltirilgan metodologiya (OYM) quyidagi tarkibiy qismlarni o'z ichiga oladi." : "Ob'ektga yo'naltirilgan dasturlash" ,
"Ob'ektga yo'naltirilgan yondashuvning asosiy tushunchalariga quyidagilar kiradi:" : "Meros,  Polimorfizm, Enkapsulatsiya" ,
"Ob'ekt yondashuvining asosiy printsiplari:" : "Modullik va ierarxiya" ,
"Ob'ekt yondashuvining qo'shimcha printsiplari:" : "Qat'iyatlilik yoki barqarorlik" ,
"Ob'ektga yo'naltirilgan tahlil va dizayn vositalariga quyidagilar kiradi:" : "Oqilona atirgul" ,
"Funktsional modellarni taqdim etish vositalariga quyidagilar kiradi:" : "Model Mart" ,
"BPwin tomonidan qo'llab-quvvatlanadigan metodologiyalar:" : "IDEF0" ,
"IDEF0 sxemasi quyidagi grafik turlarini o'z ichiga olishi mumkin:" : "Kontekst diagrammasi, dekompozitsiya diagrammasi" ,
"Mantiqiy model darajalari:" : "Kalitlarga asoslangan ma'lumotlar modeli" ,
"IDEF0 jadvaliga kiritilmagan ichki o'qlar:" : "fikr-mulohazalarni boshqarish" ,
"IDEF0 jadvaliga kiritilmagan o'q turlari:" : "Xususiyatlar" ,
"Tez hisobotlar - oddiy hisobotlarni yaratish - hisobotlarni yaratishga imkon beradi:" : "Vertikal. Oddiy vertikal hisobot" ,
"BPwin bitta notatsiyadan boshqasiga quyidagi o'tishlarni amalga oshirishga imkon beradi:" : "IDEF0 → DFD" ,
"DFD quyidagicha ta'riflaydi:" : "Tashqi havolalar, hujjatlarni saqlash jadvallari (ma'lumotlar ombori, ma'lumotlar ombori " ,
"BPwin sizga DFD diagrammasida chegaraviy strelkalar turlarini yaratishga imkon beradi:" : "Interstitsial aloqa va tunnel o'qi" ,
"BPwin-da hisobot yaratish quyidagi yo'llar bilan mumkin:" : "Ichki andozalar" ,
"BPwin 4.0 da hisobotlarni umumiy formatlarga eksport qilish mumkin:" : "HTML" ,
"RPTwin-da qo'llab-quvvatlanadigan operator turlari:" : "Matnni biriktirish operatori (&)" ,
"ERwin vositasi quyidagi imkoniyatlarni beradi:" : "Jismoniy va mantiqiy darajadagi ma'lumotlar modellarida dizayn" ,
"ERwin sizga quyidagi turdagi modellarni yaratishga imkon beradi:" : "Faqat mantiqiy darajaga ega model" ,
"ERwin modellarini yaratish uchun xalqaro miqyosda tan olingan notatsiya tizimlaridan (notatsiyalar) foydalaning:" : "IDEF1X" ,
"ERwin jadvalining asosiy tarkibiy qismlari quyidagilardan iborat:" : "Atributlar" ,
"ARISda tashkilotning nuqtai nazarlari:" : "Tashkiliy tuzilma" ,
"ARISda ko'rish darajasi:" : "Talablarning tavsifi" ,
"ARISda qo'llaniladigan tasvirlash usullari:" : "UML - Birlashgan modellashtirish tili" ,
"ARIS asboblar to'plamining asosiy tarkibiy qismlari quyidagilardan iborat:" : "Explorer (Explorer)" ,
"ARISning  \"qarashlari\":" : "Ma'lumot va tashkilot" ,
"Har bir \"qarash\" uchun ARISni tahlil qilish darajasi:" : "Amalga oshirish" ,
"MS Visio sizga quyidagilar yordamida diagrammalar, chizmalar, diagrammalar yaratishga imkon beradi." : "Standart modullar" ,
"UML, hujjat tili sifatida, bajariladigan koddan tashqari, boshqa mahsulotlarni ham ishlab chiqaradi, shu jumladan:" : "Dizayn, manba kodi, loyiha rejalari" ,
"UML quyidagilar uchun sintaktik va semantik qoidalarni o'z ichiga oladi" : "Ismlar, qamrov doirasi" ,
"UML tilidan foydalanish mexanizmlardan izchil foydalanishni sezilarli darajada osonlashtiradi" : "Kengaytirish mexanizmlari" ,
"UML kengaytirish mexanizmlari quyidagilarni o'z ichiga oladi" : "Stereotiplar" ,
"UML tili quyidagilarga mo'ljallangan" : "Loyihalash, hujjatlar" ,
"Ob'ektga yo'naltirilgan modellashtirishda sinflar o'rtasidagi munosabatlarning turlari mavjud:" : "Umumlashtirish" ,
"Dasturiy ta'minot sinflarga bo'linadi" : "Tizimli dastur, dasturiy ta'minot va dasturiy ta'minotni ishlab chiqish vositalari" ,
"Dasturiy ta'minotni ishlab chiqish vositalari:" : "Yangi dasturlarni yaratish uchun vositalar" ,
"Dasturiy ta'minotni ishlab chiqarish uchun qo'shimcha qurilmalar" : "Yangi dasturiy ta'minotni ishlab chiqishga mo'ljallangan hisoblash kompleksining tashqi qismlari, mikroprotsessor" ,
"Dasturiy ta'minotni ishlab chiqish texnologiyasini ishlab chiqish bosqichlari quyidagilarni o'z ichiga oladi" : "Protsessual dasturlash" ,
"O'z-o'zidan dasturlash:" : "Dasturni bitta dasturchi yaratgan dasturiy ta'minotni ishlab chiqish tarixidagi davr" ,
"Talablarni boshqarish" : "Tizim talablarini o'zgartirish to'g'risida mijoz va loyiha jamoasi o'rtasida bitim ishlab chiqilgan va himoyalangan jarayon" ,
"Talablarni aniqlash usullari quyidagilarni o'z ichiga oladi" : "Suhbatlashish va savol berish, miya hujumi va fikrlarni tanlash" ,
"Tizimli modellashtirish maqsadlarini aks ettiruvchi vositalar turlari" : "Vaqtga bog'liq tizimning harakati (real vaqt jihatlari)" ,
"Ob'ektga yo'naltirilgan yondashuvning afzalliklari" : "Rasmiy hujjatlar talablarini qondirish uchun tizim yoki uning tarkibiy qismi bo'lishi kerak bo'lgan ba'zi dasturiy ta'minot" ,
"C-talablarni tahlil qilish jarayonining tipik diagrammasi quyidagilarni o'z ichiga oladi" : "C-talablarini tekshiring va ularni mijoz bilan muvofiqlashtirish" ,
"Dasturiy ta'minot tizimiga talablar tasnifi quyidagilarni o'z ichiga oladi" : "Funktsional talablar" ,
"Talablarni aniqlash va tahlil qilish jarayoni quyidagilarni o'z ichiga oladi" : "Nizolarni hal qilish va ustuvorliklar" ,
"Dasturiy ta'minot tizimining oxirgi foydalanuvchilarining murojaat nuqtalarini quyidagicha izohlash mumkin." : "Tizim ma'lumotlari manbai" ,
"Talablarni sertifikatlashda talablar hujjatlarini tekshirishning quyidagi turlari amalga oshiriladi" : "To'liqligi va maqsadga muvofiqligini tekshiring" ,
"Talablarni sertifikatlash usullari quyidagilarni o'z ichiga oladi" : "Talablarning umumiy ko'rinishi,Prototiplash" ,
"Tizimni rivojlantirishni rejalashtirishda tashkiliy boshqaruv darajasi" : "Strategik" ,
"Modellarning turlaridan foydalangan holda loyihalashtirilgan tizimning turli xil namoyishlari uchun:" : "Sinf modeli" ,
"Biznes jarayonlar tasnifi quyidagi jarayonlar sinflarini o'z ichiga oladi" : "Asosiy ish jarayonlari" ,
"D-talablarni tashkil qilishning mumkin bo'lgan usullari" : "Xususiyatlari, sinflari bo'yicha" ,
"Modellashtirish quyidagilarni o'z ichiga oladi" : "Modellashtirish tilining sintaksisi" ,
"Simulyatsiya modellarining tasnifi" : "Statik yoki dinamik" ,
"Samarali foydalanuvchi interfeysini yaratish tamoyillari" : "Bardoshlik, qayta foydalanish" ,
"Dasturiy ta'minotni ishlab chiqish tamoyillari" : "Shaxsiy rivojlanish jarayoni" ,
"Interfeysga talablarning turlari" : "Dastur ta'minoti va aloqa talablari" ,
"Dizayn texnologiyasi tarkibiy qismlarning kombinatsiyasi sifatida aniqlanadi" : "Bosqichma-bosqich protsedura" ,
"Muayyan tashkilotda va muayyan loyihada IP-ni ishlab chiqish va qo'llab-quvvatlash quyidagi standartlar bilan qo'llab-quvvatlanishi kerak" : "Dizayn standarti" ,
"Arxitektura dizayni natijalari" : "Jarayon modeli" ,
"Dasturiy ta'minotni ishlab chiqish jarayoni qanday ishlarni o'z ichiga oladi" : "Foydalanishga topshirish, qabul qilish" ,
"Zamonaviy dasturlashda qanday dasturiy ta'minotni ishlab chiqish texnologiyalari qo'llaniladi" : "Ob'ektga yo'naltirilgan" ,
"Ob'ektga yo'naltirilgan dizayn quyidagi vositalardan foydalanadi" : "MS Visio" ,
"IEEE bu" : "Olimlar va Tadqiqotchilar Butunjahon Notijorat Texnik Professional Assotsiatsiyasi" ,
"SWEBOK bilimlarining asosi" : "IEEE tomonidan ishlab chiqilgan me'yoriy hujjat" ,
"SWEBOK ekspertizasining asosiy yo'nalishlari" : "Talablar muhandislik, dasturiy ta'minotni loyihalash" ,
"Ratsionalizatsiya qilingan birlashtirilgan jarayon (RUP) doirasida dasturlarni ishlab chiqish bo'yicha tadbirlar majmuasi quyidagilarni o'z ichiga oladi" : "Talablarni aniqlash" ,
"Konsalting loyihalarini ishlab chiqish bosqichlari quyidagilardan iborat" : "Asosiy talablar va ishlarni rejalashtirish tahlili" ,
"SWEBOK ekspertizasining asosiy yo'nalishlari" : "Talablar muhandislik, dasturiy ta'minotni loyihalash" ,
"SWEBOK uchun tashkiliy ekspertiza sohalariga quyidagilar kiradi" : "Dasturiy ta'minot sifati muhandisligi" ,
"Konsalting loyihalarini ishlab chiqish bosqichlari quyidagilardan iborat" : "Asosiy talablar va ishlarni rejalashtirish tahlili" ,
"Modulli dasturlash asosidagi tushunchalar" : "Ulanishlarni soddalashtirish" ,
"Dasturiy ta'minotni ishlab chiqish vositasi quyidagilar asosida tanlanadi" : "Sotish hajmi va bajarish vaqti (reaktsiya), ishonchlilik, barqarorlik, xavfsizlik" ,
"ishlab chiqish vositalari" : "Funktsiyalar va ma'lumotlarni sharhlash" ,
"VSTS-dan yangilanishlarni olish uchun qanday buyruq yaratilgan?" : "yangilash" ,
"Algoritm bu" : "ma’lum turdagi masalalarni yechish uchun qo’llaniladigan amallar majmuasining muayyan tartibda berilishi " ,
"Dasturlarni yaratish va ularni taxlash usullari va yo’llari uchun kerakli metodlar sistemasiga" : "Dasturlash texnologiyasi deyiladi" ,
"Dasturiy ta’minotni yashash tsiklining kaskadli modeli" : "Bu model bo’yicha xar bir keyingi bosqichga o’tish faqatgina oldingi bosqich to’la tugallangandan so’ng boshlanadi" ,
"Xavfsizlik" : "bunda zarur axborot saqlangan fayllar yoki papkalar boshqa fayllar tomonidan tasodifan o’chirilib ketishi extimolligi ko’zda tutiladi" ,
"Dasturiy ta’minot prototipi nima?" : "Ishlab chiqilayotgan dasturiy ta’minotning to’liq bo’lmagan versiyalari." ,
"To’liqlik darajasi va protetib turish uslublari nechanchi yilda taklif qilingan? " : "1970" ,
"Protetib turish amaliyoti Frederik P. Brooksning qaysi kitobida aks ettirilgan?" : "The Mythical Man-Month" ,
"Keng dasturiy ta’minotni prototiplashning dastlabki namunasi qaysi dasturlash tiliga oid?" : "Ada" ,
"Ada ilovasini ilk bor qaysi tizim tasdiqladi?" : "NYu Ada / ED " ,
"NYu Ada / ED tizimi ilk bor tasdiqlangan Ada ilovasini qachon tasdiqladi?" : "11 aprel 1983 yil" ,
"Bitta kichik tizim yoki funktsiyaning yanada to’liq ishlab chiqilishi qaysi protetiyp?" : "Dumaloq protetib  " ,
"Ma'lumot hajmlari va tizim interfeysi ehtiyojlari, tarmoq o'lchamlari va ishlash muhandisliklari haqida ma'lumot olish, haqiqiy tizim funksiyasiga o'tuvchi murakkab talablarni aniqlang?" : "Throwaway prototyping " ,
"Tashish prototiplaridan foydalanishning eng aniq sababi?" : "uning tezda bajarilishi" ,
"Past darajadagi soddalashtirilgan protsessning prototipini yaratishning bir usuli?" : "qog'oz prototiplash" ,
"Dasturiy injinering atamasi nechonchi yili konferensiyada taklif qilingan?" : "1968" ,
"Dasturiy injiniring nima?" : "Dasturiy injiniring bu dasturiy mahsulotni ishlab chiqishning barcha qirralari bilan bog’liq muhandislik." ,
"CASE ning yoyilmasi qanday?" : "Computer-Aided Software Engineering" ,
"Tavsiyalar" : "bu usulda yaxshi dizayn texnikasini tavsiflovchi evristik " ,
"Muhandislar bu …" : "bu amaliy ishlarni bajaradigan va amaliy natijalarga erishadigan mutaxassislar. " ,
"PMI kengaytmasini ko'rsating?" : "Project Management Institute " ,
"Dasturiy ta’minot nima?" : "Kompyuter dasturlari va unga bog’liq hujjatlar. Dasturiy mahsulotlar olohida mijozlar uchun yoki umumiy bozor uchun ishlab chiqarilishi mumkin." ,
"Dasturiy injiniring va tizim injiniring o’rtasida qanday farq bor? " : "Tizim injiniring bu apparat ta’minot, dasturiy ta’minot va jarayon injiniringni o’z ichiga oluvchi kompyuter asosli" ,
"Dasturiy injiniringni narxi qancha? " : "Taxminan 60% xarajatlar ishlab chiqarish uchun va 40% xarajatlar testlash uchun sarf bo’ladi. " ,
"Dasturiy injiniringa veb qanday xilma- xillik olib keldi? " : "Veb dasturiy servislarni va yuqori taqsimlangan servisga asoslangan tizimlarni ishlab chiqishni olib kirdi." ,
"Barcha dasturiy ta’minotlar uchun umumiy bo’lgan nechta asosiy faoliyat bor?" : "4" ,
"Yaxshi dasturiy ta’minotning attributlari nima? " : "Yaxshi dasturiy ta’minot talab qilingan funksionallikka ega, foydalanuvchiga qulay, ishonchli va davomiy bo’lishi lozim." ,
"Moslashuvchanlik bu" : "Bu ko'rsatkich yordamida dasturiy maxsulotning kengaytirilishi amalga oshiriladi, ya'ni oddiy ravishda foydalanuvchining funktsiyasi kiritilishi mumkin bo'lsin" ,
"Algoritm bu" : "ma'lum turdagi masalalarni yechish uchun qo'llaniladigan amallar majmuasining muayyan tartibda berilishi" ,
"Funksional bog'liqlik- bu …" : "modulning hamma ob’yektlari bir xil funktsiyani bajarishi uchun mo`ljallangan" ,
"Ketma-ket bog`liqlik - bu …" : "bunda birinchi modulning chiqish ma’lumotlar, ikkinchi modulga kirish ma’lumotlari bo`ladi." ,
"Protsedura bo`yicha bog`langan modullar - bu …" : "ikkita modul ham bitta protseduraga tegishli." ,
"Komponent - bu …" : "yaxshi aniqlangan interfeyslarga ega modulli birlik" ,
"Voqealarga asoslangan arxitektura - " : "jarayonlarning tarqalishi orqali muloqot qiladi" ,
"Dastur bu" : "ShEXM da ishlatishga tayyor dasturlash tilida yoki obektli kodda yozilgan algoritm " ,
"Interfeys bu" : "uslubni amalga oshirishni vaqtincha to'xtatib turish qobiliyati. Funktsiyalarni yoki usullarni imzolanishni amalga oshirishni belgilash qobiliyati." ,
"Ishlab chiqarishdagi testlash, odatda necha bosqichni o’z ichiga oladi" : "3" ,
"Unit testing - " : "dasturiy ta’minotning alohida olingan bo’limlari(sinflar, usullar)ni testlash." ,
"System testing- " : "ba’zi yoki barcha komonentalarni o’z ichiga olgan butun bir tizimni yaxlit holda testlash jarayoni. Bunda testlash butun bir tizimga qaratilgan bo’ladi." ,
"Polimorfizm " : "ob'ektni subobyektlari bilan almashtirish qobiliyati. Ob'ekt o'zgaruvchining nafaqat ushbu obyektni, balki uning barcha subobjectlarini ham o'z ichiga olishi qobiliyati." ,
"bu xossaga ko'ra algoritm aniq va tugallangan qadamlardan tashkil topgan bo'lishi kerak" : "bu xossaga ko'ra masalaga tegishli algoritm faqat shu masalaga emas, balki shu turdagi barcha masalalarga mos kelishi kerak" ,
"ob'ektga asoslangan tahlil natijasi, muammo domenidagi tushunchalarni qamrab oladi." : "dasturlash tiliga kiritilgan dastur darajasining xususiyatlari." ,
"Dasturiy injiniring va tizim injiniring o’rtasidaqanday farq bor?" : "Tizim injiniring bu apparat ta’minot,dasturiy ta’minot va jarayon injiniringni o’z ichiga oluvchi kompyuter asosli" ,
"Dasturiy injinerlar dasturiy mahsulotni ishlab chiqish bilan shug’ullanadilar. Necha turdagi dasturiy mahsulotlar mavjud" : "2" ,
"ISO - International Organization for Standardization-?" : "Xalqaro standartlashtirish tashkiloti. Faoliyatning deyarli barcha sohalarida, shu jumladan IT sohasida standartlarni ishlab chiqadigan eng vakillik va ta’sirchan tashkilot" ,
"ACM - Association for Computing Machinery - ?" : " Hisoblash mashinalari uyushmasi.Kompyuter texnologiyalari sohasidagi jahon ilmiy va ta’lim tashkiloti.U shuningdek, ta’lim standartlarini ishlab chiqish bilan mashhur." ,
"SEI - Software Engineering Institute -?" : "Dasturiy ta’minot muhandisligi instituti - Dasturiy ta’minot muhandisligi instituti. Izlanishlardasturiy ta’minot muhandisligida, dasturiy ta’minotni baholash va yaxshilash usullarini ishlab chiqishga qaratilgan. Dasturiy ta’minot ishlab chiqaruvchi tashkilotlarning dasturiy ta’minot sifati va etukligi standartlari." ,
"PMI - Project Management Institute - ?" : "Loyihalarni boshqarish instituti - Loyihalarni boshqarish xalqaro instituti (loyihalarni boshqarish). Turli mamlakatlarda loyihalarni boshqarishni ilgari surish, ilgari surish, rivojlantirish uchun mo‘ljallangan notijorat tashkilot. PMI loyihalarni boshqarish standartlarini ishlab chiqadi, mutaxassislarni uzluksiz o‘qitish bilan shug‘ullanadi." ,
"IEEE - Institut injenerov po elektronike - ?" : "Elektron muhandislar instituti. Elektron va kompyuter texnologiyalari sohasidagi ilmiy va amaliy ishlanmalarni qo‘llab-quvvatlash. Ushbu sohadagi standartlarni ishlab chiqishga katta investitsiyalar." ,
"Tizim mijozlari -" : "Talablarni ko‘rsatish va talablar bajarilganligiga tekshirish uchun o‘qish. Mijozlar shuningdek talablarni o‘zgartirishi mumkin." ,
"Boshqaruvchilar -" : "Tizimni narxlash va ishlab chiqishni rejalashritish uchun talablar hujjatidan foydalanish." ,
"Tizim injinerlari - " : "Ishlab chiqarilayotgan tizimni tushunish uchun talablardan foydalanish." ,
"Tizimni testlovchi injinerlar - " : "Tizimni haqiqiylikka tekshirish uchun tizm talablaridan foydalanish." ,
"Tizimga xizmat ko‘rsatuvchi injinerlar - " : "Tizim va uning qismlari munosabatini tushunish uchun kebrutalan foydalanadi." ,
"G.Ivanova bo`yicha modullarning  Funktsional bog`liqligi -" : " modulning hamma ob’yektlari bir xil funktsiyani bajarishi uchun mo`ljallangan" ,
"G.Ivanova bo`yicha modullarning Ketma-ket bog`liqligi -" : "bunda birinchi modulning chiqish ma’lumotlar,ikkinchi modulga kirish ma’lumotlari bo`ladi." ,
"G.Ivanova bo`yicha modullarning axborot bo'yicha bog`liqligi -" : "bunda ikki modul ham bir xil axborotni ishlatadi." ,
"G.Ivanova bo`yicha modullarning  Protsedura bo`yicha bog`langan modullar -" : "ikkita modul ham bitta protseduraga tegishli." ,
"G.Ivanova bo`yicha modullarning  Vaqt bo`yicha bog`langan modullar -" : "bu modullar parallel bajariladi." ,
"G.Ivanova bo`yicha modullarning  mantiqiy bog`liqligi -" : "bu modullarning maqsadlari o`xshash va ular bitta mantiqiy guruhga to`plangan." ,
"Konfiguratsiya menejmenti nechinchi yillarda AQSh Mudofaa vazirligida apparat materiallari uchun texnik boshqaruv intizomi sifatida paydo bo'lgan va hozirgi kunda deyarli har bir sohada standart amaliyot hisoblanadi." : "1950" ,
"Ommaviylik  -" : "bu xossaga ko'ra masalaga tegishli algoritm faqat shu masalaga emas, balki shu turdagi barcha masalalarga mos kelishi kerak" ,
"Tushunarlilik - " : "algoritm shunday tuzilgan bo'lishikerakki, xar bir xarakati aniq ifodalangan bo'lib, ikki xil ma'noni ko'rsatmasligi lozim" ,
"Natijaviylik - " : "dasturchi algoritmni chekli sondagi buyruqlarni bajargandan so'ng aniq natijaga kelishi kerak " ,
"Universallik " : "xar xil turdagi ma'lumotlar kiritilganda dastur to'g'ri ishlash extimolligi" ,
"Effektivlik -" : "texnika vositalari resursidan minimal sonidan foydalanish" ,
"Mantiqiy bog'liqlik -" : "bu modullarning maqsadlari o'xshash va ular bitta mantiqiy guruhga to'plangan" ,
"Moslashuvchanlik - " : "dasturiy maxsulotni xar xil EXMlar bilan birgalikda ishlash imkoniyati" ,
"Dasturiy injiniring atamasi nechanchi yil  taklif qilingan?" : "1968" ,
"Necha xil turdagi dasturiy mahsulotlar mavjud?" : "2" ,
"CASE ning kengaytmasi to'g'ri berilgan qatorni toping." : "Computer-Aided Software Engineering" ,
"Dasturiy mahsulotlar necha xil bo'ladi?" : "2" ,
"Jumlani davom ettiring.Dasturiy ta’minot muhandisligi - bu " : "dasturiy ta’minotni ishlab chiqarishning dastlabki bosqichlaridan boshlab, ishga tushgandan keyin tizimni qo‘llab-quvvatlashgacha bo‘lgan barcha jihatlari bilan bog‘liq bo‘lgan muhandislik intizomi" ,
"nuqtalr o'rnini to'ldiring. ... - bu amaliy ishlarni bajaradigan va amaliy natijalarga erishadigan mutaxassislar" : "muhandislar" ,
"Muhandislar qanday cheklangan resurslar sharoitida ishlaydi" : "vaqtinchalik, moliyaviy va tashkiliy " ,
"To'g'ri ta'rifni toping.Kompyutershunoslik - bu " : "hisoblash nazariyasi va usullari va dasturiy tizimlar bilan shug‘ullanadi" ,
"Dasturiy ta’minotning xarajatlar tarkibi nimalarga bog'liq?" : "dasturiy ta’minot turiga, uni ishlab chiqish uchun ishlatiladigan usullarga va baholash usuliga" ,
"dasturni parvarishlash bosqichi necha turdagi ishlarni amalga oshirishni o‘z ichiga oladi" : "2" ,
"Dasturiy ta’minot muhandisligi usuliga to'g'ri berilgan ta'rifni belgilang." : "bu yuqori sifatli mahsulotni iqtisodiy jihatdan samarali ravishda ishlab chiqarishni rag‘batlantiradigan dasturiy ta’minotni yaratishga tarkibiy yondashuv" ,
"Dasturiy ta’minotni ishlab chiqish bo‘yicha eng mashxur usullardan biri Tom DeMarco va tarkibiy tahlil uslubi nechanchi yil ishlab chiqilgan " : "1978" ,
"Dasturiy ta’minotni ishlab chiqish bo‘yicha eng mashxur usullardan biri CHen axborot tizimlarini loyihalashda mohiyat-o‘zaro bog‘liqlik usuli  nechanchi yil ishlab chiqilgan " : "1976" ,
"Dasturiy ta’minotni ishlab chiqish bo‘yicha eng mashxur usullardan biri Ob’ektga yo‘naltirilgan tahlil usuli Butch nechanchi yil ishlab chiqilgan" : "1994" ,
"CASE nima?" : "Avtomatlashtirilgan tizim muhandisligi - dasturlarni yaratish jarayonini qo‘llab-quvvatlash uchun ishlatiladigan turli xil asbob dasturlari" ,
"Middle CASE  nima?" : "dizayn vositalari" ,
"Dasturiy ta’minotni ishlab chiqish bo‘yicha eng mashxur usullardan biri Ob’ektga yo‘naltirilgan tahlil usuli Rambo nechanchi yil ishlab chiqilgan" : "1991" ,
"Low CASE nima?" : "dasturlarni ishlab chiqish vositalari" ,
"Birlashtirilgan CASElar nimalarni qamrab oladi?" : "dasturiy ta’minotni yaratish talablarini tahlil qilishdan tortib hujjatlarni sinovdan o‘tkazishgacha bo‘lgan barcha bosqich va jarayonlarni " ,
"Jumlani davom ettiring.Usulni qo‘llash bo‘yicha ko‘rsatma - bu..." : "modellarni yaratish uchun bajarilishi kerak bo‘lgan ishlar (harakatlar) ketma-ketligining tavsifi " ,
"Agile — qanday metod?" : "tizimni rivojlantirish soxasidagi modellardir." ,
"Agile atamasini boshqacha talqinlari " : "agile methods" ,
"Agileda metodi yordamida ishlaganda " : "haridor va loyihani bajaruvchi o`rtasida doimiy aloqa bo`lishi kerak" ,
"Agile -" : "tezkor ishlab chiqarishga moslashgan, haridor va buyurtmachi bilan doimiy aloqa, kunlik kichik vazifalar va ularni tezkor taqdim etish, vaziyatga moslashuvni o`z ichiga oladi" ,
"Agilega o`xshash metodlar qaysi " : "Scrum, Agile modeling va  Extreme Programming" ,
"Axborot texnologiyalari (AT) yechimi " : "yagona paket sifatida sotiladigan tegishli dasturiy ta'minot dasturlari va  yoki xizmatlar majmui" ,
"MSF  moduli ikkita klassik jarayon jarayonining xususiyatlarini birlashtiradi, bular:" : "spiral va kaskad" ,
"Loyiha boshqarish intizomi" : "MSF doirasida loyihani boshqarishning asosiy tamoyillari, tushunchalari va xususiyatlarini tasvirlaydi" ,
" Boshlang’ich dasturlashni o’rganayotganlarga qaysi dastur tavsiya qilinadi - " : "Scratch" ,
"Unit testing " : "dasturiy ta’minotning alohida olingan bo’limlari(sinflar, usullar)ni testlash" ,
"Component testing " : "ma’lum bir umumiy vazifani bajaruvchi bir nechta bo’limlardan tashkil topgan biror bir komponentani testlash" ,
"System testing" : "ba’zi yoki barcha komonentalarni o’z ichiga olgan butun bir tizimni yaxlit holda testlash jarayoni. Bunda testlash butun bir tizimga qaratilgan bo’ladi." ,
"Dasturiy ta ’minotni amaliyotga tadbiq etish jarayonidagi teslash(release testing) " : "Ushbu testlash jarayoni dasturiy ta’minotni ishlab chiqaruvchilar jamoasidan tashqarida, uni amaliyotga tadbiq etish davridagi testlash jarayoni bo’lib hisoblanadi" ,
"Requirements-based testing(talablarga asoslangan testlash) " : "bunday testlash talablarning qay darajada bajarila olinayotganini tetslashga asoslangan" ,
"Senario - testing (ssenariyni testlash) " : "bunda dasturiy ta’minot qay tarzda ishlashini belgilab beruvchi hujjat - ssenariy talablari bajarilayotgani testlanadi" ,
"Performance testing(ijroni yoki dasturiy ta’minotning ishlash jarayonini testlash)" : "bu dasturiy ta’minotni amaliyotga tadbiq qilish jarayonidagi testlashning so’nggi bosqichi bo’lib bunda asosiy e’tibor dasturning barcha mayda detallarini ham inobatga olgan holda testlash lozim bo’ladi" ,
"Foydalanuvchi tomonidan testlash(user testing)" : "Bunda foydalanuvchi yoki iste’molchi dasturiy mahsulotdan foydalanish davomida yuzaga kelgan muammolar bo’yicha o’z fikr va maslahatlari bergan holda testlash jarayonini amalga oshiradi. " ,
"Alfa testlash " : "bunda foydalanuvchi dasuturiy ta’minotni ishlab chiqaruvchi jamoa bilan birga faoliyat olib borgan holda testlashni amalga oshiradi" ,
"Beta testlash " : "dasturiy ta’minotning ma’lum bir funksiyalari foydalanuvchilar testlashlari uchun ochiq bo’ladi va ular testlash jarayonini o’z kasbiy vazifalarini bajara turib amalga oshiradilar" ,
"Tasqidlovchi testlash -" : "bunda foydalanuvchi dasturiy ta’minotni izchil o’rganib uni o’zining ish jarayoni uchun tadbiq qilish mumkin yoki mumkin emasligi haqida yakuniy qarorni qabul qiladi." ,
"Konfiguratsiya menejmenti " : "1950-yillarda AQSh Mudofaa vazirligida apparat materiallari uchun texnik boshqaruv intizomi sifatida paydo bo'lgan " ,
"Konfiguratsiya identifikatsiyasi " : "konfiguratsiya elementining aniq bir yo'nalishini belgilaydigan atributlarni aniqlash jarayoni" ,
"NYu Ada / ED tizimi ilk bor tasdiqlangan Ada ilovasini qachon tasdiqladi?" : "11 aprel 1983 yil" ,
"Keng dasturiy ta’minotni prototiplashning dastlabki namunasi qaysi dasturlash tiliga oid?" : "Ada" ,
"Ma'lumot hajmlari va tizim interfeysi ehtiyojlari, tarmoq o'lchamlari va ishlash muhandisliklari haqida ma'lumot olish, haqiqiy tizim funksiyasiga o'tuvchi murakkab talablarni aniqlang?" : "Throwaway prototyping " ,
"Past darajadagi soddalashtirilgan protsessning prototipini yaratishning bir usuli?" : "qog'oz prototiplash" ,
"CASE ning kengaytmasi to'g'ri berilgan qatorni toping." : "Computer-Aided Software Engineering" ,
"Bitta kichik tizim yoki funktsiyaning yanada to’liq ishlab chiqilishi qaysi protetiyp?" : "Dumaloq protetib  " ,
"Taxminan 50% xarajatlar ishlab chiqarish uchun va 30% xarajatlar testlash uchun sarf bo’ladi." : "Taxminan 60% xarajatlar ishlab chiqarish uchun va 50% xarajatlar testlash uchun sarf bo’ladi." ,
"Dasturlarni yaratish va ularni taxlash usullari va yo’llari uchun kerakli metodlar sistemasiga..." : "Dasturlash texnologiyasi deyiladi" ,
"Protsedurali dasturlash tillari" : "Paskal, Beysik, C ",
"Mantiqiy dasturlash tillari" : "Prolog, LISP ",
"Dasturiy ta’minotni yashash tsiklining kaskadli modeli" : "Bu model bo’yicha xar bir keyingi bosqichga o’tish faqatgina oldingi bosqich to’la tugallangandan so’ng boshlanadi",
"Dasturiy ta’minotni yashash tsiklining oraliq nazorat modeli" : "Bu model asosida iteratsiya usuli qo’yilgan, ya’ni har bir bosqichdan xoxlagan boskichga kaytish mumkin",
"Axborot bo’yicha bog’liqlik" : "bunda ikki modul ham bir xil axborotni ishlatadi ",
"Effektivlik" : "texnika vositalari resursidan minimal sonidan foydalanish ",
"Ketma – ket psevdokodi" : "<1-xarakat><2-xarakat> ... <n xarakat>",
"To’liqlik darajasi va protetib turish uslublari nechanchi yilda taklif qilingan? " : "1970",
"Protetib turish amaliyoti Frederik P. Brooksning qaysi kitobida aks ettirilgan?" : "The Mythical Man-Month",
"Keng dasturiy ta’minotni prototiplashning dastlabki namunasi qaysi dasturlash tiliga oid?" : "Ada",
"Ada ilovasini ilk bor qaysi tizim tasdiqladi?" : "NYu Ada / ED ",
"NYu Ada / ED tizimi ilk bor tasdiqlangan Ada ilovasini qachon tasdiqladi?" : "11 aprel 1983 yil",
"Bitta kichik tizim yoki funktsiyaning yanada to’liq ishlab chiqilishi qaysi protetiyp?" : "Dumaloq protetib  ",
"Dasturiy ta'minot muhandisligi" : "dasturiy ta'minot muhandisligi" ,
"SADT modelini yaratish quyidagi harakatlarni o'z ichiga oladi:" : "Tanqidiy baholash, ko'rib chiqish va sharhlash" ,
"Protsedurali dasturlash tillari" : "Paskal, Beysik, C ",
"Mantiqiy dasturlash tillari" : "Prolog, LISP ",
"Dasturiy ta’minotni yashash tsiklining kaskadli modeli" : "Bu model bo’yicha xar bir keyingi bosqichga o’tish faqatgina oldingi bosqich to’la tugallangandan so’ng boshlanadi",
"Dasturiy ta’minotni yashash tsiklining oraliq nazorat modeli" : "Bu model asosida iteratsiya usuli qo’yilgan, ya’ni har bir bosqichdan xoxlagan boskichga kaytish mumkin",
"Axborot bo’yicha bog’liqlik" : "bunda ikki modul ham bir xil axborotni ishlatadi ",
"Effektivlik" : "texnika vositalari resursidan minimal sonidan foydalanish ",
"Ketma – ket psevdokodi" : "<1-xarakat><2-xarakat> ... <n xarakat>",
"To’liqlik darajasi va protetib turish uslublari nechanchi yilda taklif qilingan? " : "1970",
"Protetib turish amaliyoti Frederik P. Brooksning qaysi kitobida aks ettirilgan?" : "The Mythical Man-Month",
"Keng dasturiy ta’minotni prototiplashning dastlabki namunasi qaysi dasturlash tiliga oid?" : "Ada",
"Ada ilovasini ilk bor qaysi tizim tasdiqladi?" : "NYu Ada / ED ",
"NYu Ada / ED tizimi ilk bor tasdiqlangan Ada ilovasini qachon tasdiqladi?" : "11 aprel 1983 yil",
"Bitta kichik tizim yoki funktsiyaning yanada to’liq ishlab chiqilishi qaysi protetiyp?" : "Dumaloq protetib  ",
"Dasturiy tizim ishonchligini aniqlashda qanday atamalar va nechta ishlatiladi" :"4 (Ishlovchanlik, Rad etmaslik (Inkorlilik), Havfsizlik, Himoyalanganlik)" ,
"Dasturiy tizimni tizimli talablarni tekshirish va shakllantirish qaysi prototiplashtirish usulining maqsadi deb belgilangan" :"Tajribaviy" ,
"Dasturiy tizimni yakuniy foydalanuvchiga etkazish qaysi prototiplashtirish usulining maqsadi deb belgilangan" :"Evolyusion" ,
"Dasturlash tillarining qaysi birlari ob’ektga yo‘naltirilgan hisoblanadi" :"Java, C++" ,
"Defektlarni aniqlash va ularni bartaraf etish bu ..." :"Otladka" ,
"DT o‘zarokelishuvchanlik jihati qanday nomlanadi" :"Kompromiss" ,
"DTni yaratish vositalari va muhandislik usullar to‘plami" :"Dasturiy injiniring (software engineering)" ,
"Ishlab chiqilgan dasturiy tizimning birinchi versiyasi qanday nomlanadi" :"Prototip" ,
"Ishlovchanlik  bu..." :"Tizimni ekspluatatsiya jarayonida noma’lum bir vaqtda o‘zining funksiyalarini bajarish xusussiyati" ,
"Ishchi mahsulotni spetsifik tasniflash metodolgiyalar javobini tanlang" :"CMMI, MSF, RUP" ,
"Kirish ma’lumotlarni chiqishga shakllantiruvchi o‘zaro bog‘lik amallar jamlanmasi" :"Jarayon" ,
"Komponentli yondashuv (DT yaratishda tayyor echimlar to‘plami va vizualashtirish yo‘nalishi) qaysi bosqichga tegishli" :"3 bosqich (2000 yy.)",
"Qaysi jarayon tizim to‘g‘ri ishlayaptimi savolga javob beradi" :"Attestatsiya" ,
"Qaysi jarayon tizim to‘g‘ri yaratilganmi savolga javob beradi" :"Verifikatsiya" ,
"Qaysi jumla noto‘g‘ri" :"Komponent tizimlardan iborat" ,
"Qaysi til modellashtirishning standart tili deb nomlanadi" :"UML" ,
"Qanday testlash usuliga “Qora qutti” usul deb nomlanadi" :"Funksional testlash" ,
"Qanday testlash usuliga “Oq qutti” usul deb nomlanadi" :"Strukturali testlash" ,
"Qanday testlash usulida dasturning tekshiruvchi tomonidan tarkibi o‘rganiladi" :"Strukturali testlash" ,
"Qanday testlash usulida dasturning funksional imkoniyatlari tekshiriladi" :"Funksional testlash" ,
"Loyihalash jarayoni qaysida osttizimlar aniqlanib, uning boshqaruv tarkibiy qismlari va ularning o‘zaro bog‘ligi qanday nomlanadi" :"Arxitekturali" ,
"Masalaning qo‘yilish tahlil jarayoni va tizimni loyihalash jarayonlari o‘rtasidagi turgan natijaviy ko‘rinish bu" :"Model" ,
"Matematik va algoritmik formal asoslarining nazariy bilimlar to‘plami" :"2 bosqich (90 yy.)" ,
"Prototiplarni tezkor yaratishda nechta usullardan foydalaniladi" :"3" ,
"Prototiplashtirish usullarini ko‘rsating" :"Tajribaviy va evolyusion" ,
"Dasturiy tizim ishonchligini aniqlashda qanday atamalar va nechta ishlatiladi": "4 (Ishlovchanlik, Rad etmaslik (Inkorlilik), Havfsizlik, Himoyalanganlik)",
"Dasturiy tizimni tizimli talablarni tekshirish va shakllantirish qaysi prototiplashtirish usulining maqsadi deb belgilangan": "Tajribaviy",
    "Dasturiy tizimni yakuniy foydalanuvchiga etkazish qaysi prototiplashtirish usulining maqsadi deb belgilangan": "Evolyusion",
    "Dasturlash tillarining qaysi birlari ob’ektga yo‘naltirilgan hisoblanadi": "Java, C++",
    "Defektlarni aniqlash va ularni bartaraf etish bu ...": "Otladka",
    "DT o‘zarokelishuvchanlik jihati qanday nomlanadi": "Kompromiss",
    "DTni yaratish vositalari va muhandislik usullar to‘plami": "Dasturiy injiniring (software engineering)",
    "Ishlab chiqilgan dasturiy tizimning birinchi versiyasi qanday nomlanadi": "Prototip",
    "Ishlovchanlik bu ...": "Tizimni ekspluatatsiya jarayonida noma’lum bir vaqtda o‘zining funksiyalarini bajarish xusussiyati",
    "Ishchi mahsulotni spetsifik tasniflash metodolgiyalar javobini tanlang": "CMMI, MSF, RUP",
    "Kirish ma’lumotlarni chiqishga shakllantiruvchi o‘zaro bog‘lik amallar jamlanmasi": "Jarayon",
    "Komponentli yondashuv (DT yaratishda tayyor echimlar to‘plami va vizualashtirish yo‘nalishi) qaysi bosqichga tegishli": "3 bosqich (2000 yy.)",
    "Spiral modelning asosiy kismi bu …": "risk management",
    "Strukturali yondashuv (DT yaratish jarayonlarni tizimlashtirish va standartlash) qaysi bosqichga tegishli": "1 bosqich (70-80 yy.)",
    "Activity nima?": "ilova interfeysini boshqaruvchi asosiy .java kengaytmali fayl",
    "ADT da yangi Android loyiha yaratildi, va ushbu loyiha ishga tushirilgandan keyin yaratiladigan .apk fayli qayerda (loyihaning qaysi papkasida) joylashadi?": "bin papkasida",
    "ADT da yangi Android loyiha yaratildi. Ushbu yaratilgan loyiha ichida avtomatik hosil bo‘lgan AndroidManifest.xml faylini izohlang?": "ilova haqidagi asosiy ma’lumotlarni saqlovchi fayl hisoblanadi",
    "ADT da yangi Android loyiha yaratildi. Ushbu yaratilgan loyiha ichida avtomatik hosil bo‘lgan gen papkasida nimalar joylashadi?": "loyiha uchun generatsiyalangan fayl (R.java)",
    "ADT da yangi Android loyiha yaratildi. Ushbu yaratilgan loyiha ichida avtomatik hosil bo‘lgan res papkasida nimalar joylashadi?": "loyihaga tegishli resurslar (layout, string, style va h.k.lar)",
    "ADT da yangi Android loyiha yaratildi. Ushbu yaratilgan loyiha ichida avtomatik hosil bo‘lgan src papkasida nimalar joylashadi?": "asosiy .java fayllar",
    "Alpha animatsiya bu -": "ob’ektning shaffoflik darajasi o‘zgarishi",
    "Android SDK kutubxonasida Google APIs nima uchun ishlatiladi?": "ilovalarda karta va GPS xizmatini boshqarish uchun",
    "Qaysi jarayon tizim to‘g‘ri ishlayaptimi savolga javob beradi": "Attestatsiya",
    "Qaysi jarayon tizim to‘g‘ri yaratilganmi savolga javob beradi": "Verifikatsiya",
    "Qaysi jumla noto‘g‘ri": "Komponent tizimlardan iborat",
    "Qaysi til modellashtirishning standart tili deb nomlanadi": "UML",
    "Qanday testlash usuliga “Qora qutti” usul deb nomlanadi": "Funksional testlash",
    "Qanday testlash usuliga “Oq qutti” usul deb nomlanadi": "Strukturali testlash",
    "Qanday testlash usulida dasturning tekshiruvchi tomonidan tarkibi o‘rganiladi": "Strukturali testlash",
    "Qanday testlash usulida dasturning funksional imkoniyatlari tekshiriladi": "Funksional testlash",
    "Loyihalash jarayoni qaysida osttizimlar aniqlanib, uning boshqaruv tarkibiy qismlari va ularning o‘zaro bog‘ligi qanday nomlanadi": "Arxitekturali",
    "Masalaning qo‘yilish tahlil jarayoni va tizimni loyihalash jarayonlari o‘rtasidagi turgan natijaviy ko‘rinish bu": "Model",
    "Matematik va algoritmik formal asoslarining nazariy bilimlar to‘plami": "Informatika (computer science)",
    "Ob’ektga yo‘naltirilgan yondashuv (DT yaratishda mujassamlashtirish va industrial yo‘nalishi) qaysi bosqichga tegishli": "2 bosqich (90 yy.)",
    "Prototiplarni tezkor yaratishda nechta usullardan foydalaniladi": "3",
    "Prototiplashtirish usullarini ko‘rsating": "Tajribaviy va evolyusion",
    "Prototipni ishlab chiqish bosqichlari to‘g‘ri ketma-ketligini keltiring: 1) Talablarni tayinlash, 2) Ishlab chiqish, 3) Funksional imkoniyatlarni aniqlash, 4) Baholash": "1,3,2,4",
    "Psevdokod nimaning o‘rnini bosadi?": "blok-sxema",
    "Rad etmaslik (Inkorlilik) bu ...": "Tizimni ekspluatatsiya jarayonida foydalanuvchi kutgan natijasini bajarish xusussiyati",
    "Sifatli dasturiy ta’minotni testlash uchun sarf xarajatlari necha foyizni tashkil etadi": "40",
    "Talablar ...": "Tizim mijozlarini extiyojini aks ettiradi",
    "Talablar nechta guruhga tasniflanadi va qaysilarga": "2 (foydalanuvchi va tizim)",
    "Talablar xujjatlar strutkruasining qaysi qismida kutilgan tizim arxiteturasini yuqori darajali ko‘rinishlar keltiriladi": "Tizim arxitekturasi",
    "Talablar xujjatlar strutkruasining qaysi qismida tizim komponentalari orasidagi munosabatlar grafik tizimi keltiriladi": "Tizim modellari",
    "Talablar xujjatlar strutkruasining qaysi qismida tizimga asoslanib fundamental taxminlar tasvirlanishlari keltiriladi": "Tizim evolyusiyasi",
    "Talablar xujjatlar strutkruasining qaysi qismida funksional va funksional bo‘lmagan talablarning batafsil ko‘rinishlar keltiriladi": "Tizim talablari",
    "Tashkiliy yoki loyixaviy standartga mos bo‘lmagan hatoliq": "Defekt",
    "Testlash bu ...": "Dasturiy ta’minotning ekspluatatsiya jarayonini emulyasiya qilish",
    "Testlashning qanday yondashuvida birinchi qo‘yi darajali komponentlar testlanadi keyinchalik integrallashib yuqori qismi komponentlari": "YUqorilovchi test",
    "Testlashning qanday yondashuvida birinchi yuqori darajali komponentlar testlanadi keyinchalik qo‘yi darajali ostqism komponentlari": "Pastlovchi test",
    "Tizimli talablar bu": "Dasturiy ta’minot tizimi funksiyalari, servislari va operativ cheklanishlarning batafsil tasniflari",
    "Tizimni baholashda ishlatiluvchi funksiyaning analiz nuqtasilagi tizimning umumiy xarakteristikalari nechta?": "14",
    "Tizimni ekspluatatsiya jarayonida noma’lum bir vaqtda o‘zining funksiyalarini bajarish xusussiyati bu ...": "Ishlovchanlik",
    "Tizimni ekspluatatsiya jarayonida foydalanuvchi kutgan natijasini bajarish xusussiyati bu ...": "Rad etmaslik (Inkorlilik)",
    "Tizimning komponenti, qaysi bir eki bir nechta hizmatlar (servislar) boshqa modullarga taqdim etadi": "Modul",
    "Tizimning odamlarga va atrof muhitga xavfsiz xusussiyati bu ...": "Havfsizlik",
    "Tizimning tasodifiy yoki maxsus kirishlarga duch kelmoq xusussiyati bu": "Himoyalanganlik",
    "Ushbu faoliyat turi talablar tuzulmasini va ofitsial tasnifini ochib berish maqsadida amalga oshiriladi": "Talablarni izohlash (requirements specification)",
    "Ushbu faoliyat turi talablar cheklovini va ularni tanlash maqsadida amalga oshiriladi": "Talablarni ajratib olish (requirements elicitation)",
    "Ushbu faoliyat turi talablarda o‘rganishda notushunchaliklarni va mosligini aniqlash maqsadida amalga oshiriladi": "Talablarni tahlil qilish (requirements analysis)",
    "Ushbu faoliyat turi shakllangan talablar tushunchasi mezonlari va ularni baholash maqsadida amalga oshiriladi": "Talablarni baholash (requirements validation)",
    "Foydalanuvchi talablar bu": "Diagrammalar bilan tabbiy tildagi bayonotlar",
    "Xatarlardan qutlish yoki ta’sirini kamaytirish uchun rejalar tuzish qaysi bosqichda amalga oshiriladi": "Xatarlarni rejalashtirish (risk planning)",
    "Xatarlarni boshqarishda nechta bosqich amalga oshiriladi": "4",
    "Xatarlarni bo‘lish ehtimolini xamda oqibatini baholash qaysi bosqichda amalga oshiriladi": "Xatarlarni tahlil qilish (risk analisys)",
    "Xatarlarni nazorat qilish xamda ularni bartaraf etish qaysi bosqichda amalga oshiriladi": "Xatarlarni monitoring qilish (risk monitoring)",
    "Havfsizlik bu ...": "Tizimning odamlarga va atrof muhitga xavfsiz xusussiyati",
    "Himoyalanganlik bu ...": "Tizimning tasodifiy yoki maxsus kirishlarga duch kelmoq xusussiyati",
    "SHarshara modelining ketma-ket bosqichlarini to‘g‘ri keltiring": "Talablarni shaklantirish -> Loyihalashtirish -> Testlash -> Integratsiyalash -> Ekspluatatsiya va qullab-quvatlash",
    "YAngi axborot tizimlarini biznes korxonalarga tadbiq etish modernizatsiyasi to‘plami": "Biznes-reinjiniring (business reengineering)",
    "Ma'lumot hajmlari va tizim interfeysi ehtiyojlari, tarmoq o'lchamlari va ishlash muhandisliklari haqida ma'lumot olish, haqiqiy tizim funksiyasiga o'tuvchi murakkab talablarni aniqlang?": "Throwaway prototyping",
    "Tashish prototiplaridan foydalanishning eng aniq sababi?": "uning tezda bajarilishi",
    "Past darajadagi soddalashtirilgan protsessning prototipini yaratishning bir usuli?": "qog'oz prototiplash",
    "“Dasturiy injiniring” atamasi nechanchi yil  taklif qilingan?": "1968",
    "Necha xil turdagi dasturiy mahsulotlar mavjud?": "2",
    "CASE ning kengaytmasi to'g'ri berilgan qatorni toping.": "Computer-Aided Software Engineering",
    "Jumlani davom ettiring.Dasturiy ta’minot muhandisligi - bu": "dasturiy ta’minotni ishlab chiqarishning dastlabki bosqichlaridan boshlab, ishga tushgandan keyin tizimni qo‘llab-quvvatlashgacha bo‘lgan barcha jihatlari bilan bog‘liq bo‘lgan muhandislik intizomi",
    "Dasturiy ta’minotni ishlab chiqish bo‘yicha eng mashxur usullardan biri CHen axborot tizimlarini loyihalashda mohiyat-o‘zaro bog‘liqlik usuli  nechanchi yil ishlab chiqilgan": "1976",
    "Dasturiy ta’minotni ishlab chiqish bo‘yicha eng mashxur usullardan biri Ob’ektga yo‘naltirilgan tahlil usuli Butch nechanchi yil ishlab chiqilgan": "1994",
    "CASE nima?": "Avtomatlashtirilgan tizim muhandisligi - dasturlarni yaratish jarayonini qo‘llab-quvvatlash uchun ishlatiladigan turli xil asbob dasturlari",
    "Middle CASE  nima?": "dizayn vositalari",
    "Dasturiy ta’minotni ishlab chiqish bo‘yicha eng mashxur usullardan biri Ob’ektga yo‘naltirilgan tahlil usuli Rambo nechanchi yil ishlab chiqilgan": "1991",
    "Birlashtirilgan CASElar nimalarni qamrab oladi?": "dasturiy ta’minotni yaratish talablarini tahlil qilishdan tortib hujjatlarni sinovdan o‘tkazishgacha bo‘lgan barcha bosqich va jarayonlarni",
    "Jumlani davom ettiring.Usulni qo‘llash bo‘yicha ko‘rsatma - bu...": "modellarni yaratish uchun bajarilishi kerak bo‘lgan ishlar (harakatlar) ketma-ketligining tavsifi",
    "Dasturiy injiniring va tizim injiniring o’rtasida qanday farq bor?": "Tizim injiniring bu apparat ta’minot, dasturiy ta’minot va jarayon injiniringni o’z ichiga oluvchi kompyuter asosli",
    "Tizimni testlovchi injinerlar -": "Tizimni haqiqiylikka tekshirish uchun tizm talablaridan foydalanish.",
    "Tizimga xizmat ko‘rsatuvchi injinerlar -": "Tizim va uning qismlari munosabatini tushunish uchun talablardan foydalanadi.",
    "G.Ivanova bo`yicha modullarning  Funktsional bog`liqligi -": "modulning hamma ob’yektlari bir xil funktsiyani bajarishi uchun mo`ljallangan",
    "G.Ivanova bo`yicha modullarning Ketma-ket bog`liqligi -": "bunda birinchi modulning chiqish ma’lumotlar,ikkinchi modulga kirish ma’lumotlari bo`ladi.",
    "G.Ivanova bo`yicha modullarning axborot bo'yicha bog`liqligi -": "bunda ikki modul ham bir xil axborotni ishlatadi.",
    "G.Ivanova bo`yicha modullarning  Protsedura bo`yicha bog`langan modullar -": "ikkita modul ham bitta protseduraga tegishli.",
    "G.Ivanova bo`yicha modullarning  Vaqt bo`yicha bog`langan modullar -": "bu modullar parallel bajariladi.",
    "G.Ivanova bo`yicha modullarning  mantiqiy bog`liqligi -": "bu modullarning maqsadlari o`xshash va ular bitta  mantiqiy guruhga to`plangan.",
    "Konfiguratsiya menejmenti nechinchi yillarda AQSh Mudofaa vazirligida apparat materiallari uchun texnik boshqaruv intizomi sifatida paydo bo'lgan va hozirgi kunda deyarli har bir sohada standart amaliyot hisoblanadi.": "1950",
    "Ommaviylik  -": "bu xossaga ko'ra masalaga tegishli algoritm faqat shu masalaga emas, balki shu turdagi barcha masalalarga mos kelishi kerak",
    "Tushunarlilik -": "algoritm shunday tuzilgan bo'lishikerakki, xar bir xarakati aniq ifodalangan bo'lib, ikki xil ma'noni ko'rsatmasligi lozim",
    "Natijaviylik -": "dasturchi algoritmni chekli sondagi buyruqlarni bajargandan so'ng aniq natijaga kelishi kerak",
    "Universallik -": "xar xil turdagi ma'lumotlar kiritilganda dastur to'g'ri ishlash extimolligi",
    "Effektivlik -": "texnika vositalari resursidan minimal sonidan foydalanish",
    "Mantiqiy bog'liqlik -": "bu modullarning maqsadlari o'xshash va ular bitta mantiqiy guruhga to'plangan",
    "Moslashuvchanlik -": "dasturiy maxsulotni xar xil EXMlar bilan birgalikda ishlash imkoniyati",
    "Birlashtirish va birlashtirish": "Modellarni birlashtirish va ajratish imkoniyati loyihada jamoaviy ishni ta'minlaydi",
    "BPWin-da hisobotlar turlari": "Model hisoboti, diagramma hisoboti",
    "BPWin-da amaldagi vositalarni qo'shish": "Ko'rish - standart asboblar paneli",
    "BPWin-da brauzer yorliqlari": "Faoliyat",
    "BPWin-da hisobot olish": "Fayl - Ochish",
    "ERWin diagrammasi bloklardan tashkil topgan": "Ob’ekt",
    "Davlat diagrammasida quyidagilar aks etadi": "Davlat mashinasi",
    "UML yozuvidagi ketma-ket diagramma xabarlarining stereotiplari": "\"Yaratish\"",
    "ERB munosabatlarining turlari": "n * m",
    "O'zaro munosabatlarga mos keladigan ERD belgilar": "Cheksiz munosabat",
    "Korxonalarga mos keladigan ERD belgilari": "Mustaqil subyekt",
    "Ma'lumotlar oqimi diagrammasining asosiy belgilari:": "Ma'lumotlarni saqlash (saqlash)",
    "ERWin grafikalarni ko'rsatish darajalariga ega": "Belgi darajasi",
    "Jismoniy darajada, ERwin-da axborot modelini yaratish bosqichlari bajariladi": "shaxslarni aniqlash; sub'ektlar o'rtasidagi bog'liqlikni aniqlash",
    "Mantiqiy darajada Ervinda axborot modelini yaratish bosqichlari bajariladi": "Modelni kerakli shakldagi normal shaklga keltirish",
    "Dastur bu": "ShEXM da ishlatishga tayyor dasturlash tilida yoki obektli kodda yozilgan algoritm",
    "Ob’ektga mo’ljallangan dasturlash tillari": "Delphi, C++, Java",
    "Protsedurali dasturlash tillari": "Paskal, Beysik, C",
    "Mantiqiy dasturlash tillari": "Prolog, LISP",
    "Dasturiy ta’minotni yashash tsiklining spiralli modeli": "Bu model asosida prototipirovanie usuli ko’yilgan",
    "Adaptatsiya": "tez-tez o’zgartirish imkoniyatlari",
    "Chiziqmli algoritm": "bunda algoritmni xar bir buyrug’i ketma-ket bir marta bajariladi",
    "ERwin-da axborot modelini yaratish jarayoni quyidagi bosqichlarni o'z ichiga oladi": "Triggerlar, protseduralar va cheklovlarni aniqlash; ma'lumotlar bazasini yaratish",
    "Texnologik jarayonning grafik tasvirini tuzishda diagrammada quyidagilar ko'rsatilgan": "Texnologik operatsiyalar",
    "IDEF3 yozuvidagi model quyidagi diagrammalarni o'z ichiga oladi": "Ish diagrammasidan foydalaning",
    "BPwin muhiti yaratadigan Model hisobot quyidagilarni o'z ichiga oladi": "Model konteksti haqida ma'lumot",
    "Grafik interfeysning qaysi elementlari buyruqlarni guruhlar bo‘yicha ajratish uchun mo‘ljallangan": "Menyu",
    "Grafik interfeysning qaysi elementlari oynaning boshqa elementlarini belgilash uchun mo‘ljallangan": "Ko‘rsatkichlar",
    "Grafik interfeysning qaysi elementlari uskunalar panelini shaklantirish uchun mo‘ljallangan": "Piktogramma",
    "Grafik interfeysning qaysi elementlari xar xil ko‘rinishdagi axborotlarni ekranda namoyon qilish uchun mo‘ljallangan": "Oyna",
    "Dastur nimalardan tuzilgan?": "Dasturlar+ hujjatlar+ jarayonlarni bajarish",
    "Dasturda hatolikni aniqlash tekshiruv jarayoni bu ...": "Inspektrlash",
    "Dasturiy injiniring konteksti asosida nimalar tushuniladi": "Informatika, sistemotexnika, biznes-reinjiniring",
    "Dasturiy injiniringda asosiy tushunchalardan biri bu …": "DT xayotiy sikli",
    "Dasturiy ta’minot jarayoni modellari keltirilgan varintni ko‘rsating": "SHarshara, ortib borish, qaytib foydalanishga mo‘ljallangan",
    "Dasturiy ta’minot tizimi talablari qanday sinflarga ajratiladi": "Funksional va funksional bo‘lmagan talablar",

};
// So'zlar orasidagi o'xshashlikni hisoblash (Jaccard index)
function jaccardSimilarity(query, question) {
    const queryWords = query.toLowerCase().split(" ");
    const questionWords = question.toLowerCase().split(" ");
    const intersection = queryWords.filter((word) => questionWords.includes(word));
    const union = new Set([...queryWords, ...questionWords]);
    return intersection.length / union.size;
}

// Eng yaqin savolni qidirish
function findBestMatch(query) {
    let maxSimilarity = 0;
    let bestMatch = "";
    for (let question in questionsAndAnswers) {
        const similarity = jaccardSimilarity(query, question);
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            bestMatch = question;
        }
    }
    return bestMatch;
}

// Input oynasini yaratish
const inputContainer = document.createElement("div");
inputContainer.style.position = "fixed";
inputContainer.style.bottom = "20px";
inputContainer.style.left = "50%";
inputContainer.style.transform = "translateX(-50%)"; // Markazlashtirish
inputContainer.style.width = "calc(100% - 40px)";
inputContainer.style.maxWidth = "500px"; // Maksimal kenglik
inputContainer.style.display = "flex";
inputContainer.style.flexDirection = "column";
inputContainer.style.alignItems = "center";
inputContainer.style.zIndex = "1000";

// Input maydoni
const input = document.createElement("input");
input.type = "text";
input.placeholder = "..";
input.style.padding = "12px 20px";
input.style.width = "100%";
input.style.border = "2px solid #fafafa";
input.style.borderRadius = "30px";
input.style.backgroundColor = "transparent"; // Oq fon
input.style.opacity = "0.1"; // Alfa qiymati
input.style.fontSize = "16px";
input.style.outline = "none";

// Fokus bo'lganida uslub o'zgarishi
input.addEventListener("focus", () => {
    input.style.borderColor = "transparent"; // Fokusda chiroyli koerinish
});

// Fokusdan chiqqanda uslubni tiklash
input.addEventListener("blur", () => {
    input.style.borderColor = "#fff";
});

// Natija uchun element
const result = document.createElement("div");
result.style.marginTop = "15px";
result.style.padding = "10px";
result.style.fontSize = "18px";
result.style.color = "#d4d4d4";
result.style.borderRadius = "8px";
result.style.width = "100%";
result.style.maxWidth = "500px";
result.style.wordWrap = "break-word"; // Uzun javoblarni kesish

// Inputdagi o'zgarishlarni tinglash
input.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    console.clear(); // Har safar inputni yangilashda konsolni tozalash
    console.log("Kiritilgan savol:", query); // Kiritilgan savolni konsolga chiqarish

    if (query) {
        const bestMatch = findBestMatch(query);
        console.log("Eng yaqin savol:", bestMatch); // Eng yaqin savolni konsolga chiqarish
        result.textContent = `Javob: ${questionsAndAnswers[bestMatch] || "Mos savol topilmadi"}`;
    } else {
        result.textContent = "";
    }
});

// Tugma: inputni tozalash
const clearButton = document.createElement("button");
clearButton.textContent = "Clean";
clearButton.style.padding = "8px 16px";
clearButton.style.marginTop = "10px";
clearButton.style.fontSize = "16px";
clearButton.style.borderRadius = "30px";
clearButton.style.border = "none";
clearButton.style.backgroundColor = "transparent";
clearButton.style.color = "rgba(0, 0, 0, 0.01)";
clearButton.style.cursor = "pointer";

// Tugmani bosish natijasida inputni tozalash
clearButton.addEventListener("click", () => {
    input.value = ""; // Inputni tozalash
    result.textContent = ""; // Natijani tozalash
    console.clear(); // Konsolni tozalash
});

// Tanlangan matnni olish
document.addEventListener("mouseup", () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        input.value = selectedText; // Input maydoniga tanlangan matnni joylashtirish
        const bestMatch = findBestMatch(selectedText);
        result.textContent = `Javob: ${questionsAndAnswers[bestMatch] || "Mos savol topilmadi"}`;
    }
});
if (!document.styleSheets.length) {
    const style = document.createElement("style");
    document.head.appendChild(style);
}
document.styleSheets[0].insertRule("::selection { background-color: transparent; color: inherit; }", 0);
// Scroll hodisasi: input va natijani tozalash
window.addEventListener("scroll", () => {
    input.value = ""; // Inputni tozalash
    result.textContent = ""; // Natijani tozalash
});

// Natijani input tagiga joylash
inputContainer.appendChild(input);
inputContainer.appendChild(result);
inputContainer.appendChild(clearButton);
document.body.appendChild(inputContainer);

