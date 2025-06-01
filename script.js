// Savollar va javoblar bazasi

const questionsAndAnswers = {
  "…- aloqa liniyasi orqali uzatiladigan, OSI modelining kanal qatlami protokolining ma'lumotlar bo'lagi.":
    "Kadr",
  "Cisco Packet Tracer 6.2 dasturida qaysi rejim tarmoq orqali ma'lumotlarni uzatish bilan bog'liq bo'lgan keyingi voqea sodir bo'lishini qo'lda boshqarish imkonini beradi.":
    "Simulation",
  "… - belgilangan tarmoq qoidalari asosida tarmoq orqali o'tuvchi tarmoq trafigini kuzatuvchi va filtrlaydigan kompyuter tarmog'ining dasturiy ta'minoti yoki apparat-dasturiy ta'minot elementi.":
    "Tarmoqlararo ekran",
  "…- ma`lumotlar almashinuvi qoidalari va formatlari to`plami.":
    "Tarmoq protokoli",
  "Ruxsatsiz kirishlarni aniqlash tizimini ko'rsating": "IDS",
  "Lokal xisoblash tarmoqlarining ma'lumotlar almashinish muxiti qanday turlarga bo`linadi?":
    "Barcha javoblar to`g`ri",
  '"line vty" kodi qaysi protokolda ishlatiladi': "TelNet",
  "\"Protokol modeli\" to'g'ri ta'rifi bilan javobni tanlang:":
    "Protokol modeli tarmoqning ishlashini dispersli ob'ektlar va funktsional modullarning o'zaro ta'siri qoidalari darajasida tavsiflaydi",
  "\"Protokol\" tushunchasi uchun to'g'ri javob nima?":
    "axborot tizimini bir holatdan ikkinchi holatga o'tkazadigan mantiqiy bog'liq harakatlar ketma-ketligi",
  "\"Tarmoq adapteri manzili\" uchun to'g'ri javobni bering:":
    "apparat manzili",
  "Hub'larning asosiy turlari:": "aqlli, passiv",
  "… - bu aniq vaqt serverlari bilan ishlash protokoli": "NTP",
  "… - bu bitta jismoniy tarmoq interfeysida (Ethernet, Wi-Fi) bir nechta virtual lokal tarmoq yaratish imkonini beradi":
    "VLAN",
  "… - internet tarmog'ida ma'lumotlarni bulutli texnologiyalar asosida saqlash xizmatini ko'rsatadi":
    "Google Drive",
  "… - tarmoqqa ulangan qurilmalarga avtomatik ravishda dinamik IP manzillarni beruvchi protokol":
    "DHCP",
  "… bu model iste'molchiga axborot texnologiyalarini servis sifatida internet orqali namoyon qiladi":
    "Bulutli texnologiyalar",
  "… orqali kompyuterdagi fayllarning butunligini tekshirish mumkin":
    "Xeshlash algoritmlari",
  "… bu - mantiqiy bog'lanish tuguni hisoblanib, ular yordamida mantiqiy kerakli protokolga bog'lanish hosil qilinadi":
    "port",
  "0.XXX.XXX.XXX - 127.XXX.XXX.XXX bu Ipv4 ning qaysi sinfi?": "A",
  "10GEthernet tarmog'ida ma'lumotlarni maksimal uzatish tezligi qanday.":
    "10 Gbit/s",
  "128.0.XXX.XXX - 191.255.XXX.XXX bu Ipv4 ning qaysi sinfi?": "B",
  "192.0.0.XXX - 223.255.255.XXX bu Ipv4 ning qaysi sinfi?": "C",
  "2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d ushbu yozuv nimani anglatadi?":
    "IPv6 avlodga tegishli bo'lgan IP manzil",
  "224.XXX.XXX.XXX - 239.XXX.XXX.XXX bu Ipv4 ning qaysi sinfi?": "D",
  "240.XXX.XXX.XXX - 255.XXX.XXX.XXX. bu Ipv4 ning qaysi sinfi?": "E",
  "802 qo'mitasi qanday tarkibiy qismlarni o'z ichiga oladi?":
    "LLC, Simsiz tarmoqlar, Internetda ishlash",
  "A sinf IP-adreslari qanday oraliqda bo'ladi?":
    "1.0.0.0 dan127.255.255.255 gacha",
  "Abonent tugunlari bu?":
    "foydalanuvchi terminal tizimlari o'rnatiladigan terminal nuqtalari",
  "Active Directory qaysi operatsion tizim oilasiga tegishli": "Windows Server",
  "ADSL texnologiyasi ma'lumotlarni chiqishida ma'lumotlarni uzatish tezligi ko'rsatilgan javobni belgilang.":
    "640 Kbit/s dan 1,5 Mbit/s gacha",
  "ADSL texnologiyasida qabul qilishda ma'lumotlarni uzatish tezligi ko'rsatilgan javobni belgilang.":
    "1,5 Mbit/s dan 8 Mbit/s gacha",
  "Agar biror bir server funksiyalarining bajarilishi kompyuterning asosiy vazifasi bo'lsa unda bu kompyuter qanday ataladi?":
    "Ajratilgan server.",
  "Aloqa liniyasi quyidagilarni ta'minlaydi:":
    "axborot oqimlarini signal shaklida uzatish",
  "A-PON texnologiyasining asosiy protokoli qaysi?": "ATM",
  "ARPANET tarmog'i qachon tashkil qilingan?": "1969",
  "Asinxron ma'lumotlarni uzatish-":
    "raqamli ma'lumotni uzatuvchidan qabul qiluvchiga ketma-ket interfeys orqali uzatish usuli, bunda ma'lumotlar istalgan vaqtda uzatiladi.",
  "Asosiy tarmoq operatsion tizimlari keltirilgan qatorni ko'rsating.":
    "Novell Netware 4.1, Microsoft Windows NT Server 4.0, UNIX.",
  "Axborot va transport xizmatlarini qanday tizim ko'rsatadi?":
    "kompyuter tarmoqlari",
  "B sinf IP-adreslari qanday oraliqda bo'ladi?":
    "128.0.0.0 dan 191.255.255.255 gacha",
  "Bajaruvchi qurilma, boshqariladigan ob'ekt holatini o'lchash uchun kelib tushgan signalga ta'sir bildiruvchi, bajaruvchi qurilma.":
    "Aktuator",
  "Berilgan IP - adreslarning qaysi biri to'g'ri. 1)124.256.14.023 2)101.012.252.257 3)220.124.11.14 4)192.168.10.325":
    "Uchinchisi to'g'ri tuzilgan",
  "Bir yoki bir nechta tarmoq segmentlari ichida kompyuter tarmog'ining bir nechta tugunlarini ulash uchun mo'ljallangan qurilma.":
    "switch",
  "Biror korxona yoki tashkilotning ichida joylashgan kompyuter tarmog'i":
    "LAN",
  "Bitlarni uzatish qaysi satxda amalga oshiriladi.": "Fizik",
  "Bitta klient ko'plab serverlarga so'rovlar jo'natishi va murojaat qilishi mumkinmi?":
    "Ha, Bitta klient bir nechta serverlarga so'rovlar jo'natishi va murojaat qilishi mumkin",
  "…-bog'langan tarmoq protokollari bo'lib, kompyuter tarmog'ida ma'lumotlarni uzatishni ta'minlab beradi.":
    "Protokollar steki",
  "Bu elektron pochta xabarlarini TCP / IP tarmoqlari orqali uzatish uchun keng qo'llaniladigan tarmoq protokoli.":
    "SMTP",
  "Bu protokol baland tezlikda ishlaydigan jarayonlarda, masalan, videokonferensialarda va tarmoqning maxsus xizmatlari uchun qo'llaniladi?":
    "UDP",
  "Bu protokol-yuqori oqim protokoli uchun xabarlarni etkazib berish kafolatlarini ta'minlamaydi va yuborilgan xabarlarning holatini saqlamaydi.":
    "UDP",
  "Bu protokol-yuqori oqim protokoli uchun xabarlarni etkazib berish kafolatlarini ta'minlaydi va yuborilgan xabarlarning holatini saqlaydi.":
    "TCP",
  "Bugungi kunda Internet ashyolari bilan bog'liq bo'lgan barcha narsalar qanday umumiy nom bilan ataladi?":
    "bog'liq ashyolar (Connected Things)",
  "Bulutli ma'lumotlar markazlari (Data Center) va odatda IoT ning bir qismi bo'lgan sensorlar va qurilmalar o'rtasidagi oraliq taqsimlangan hisoblash tushunchasi qanday ataladi?":
    "tumanli hisoblash",
  "Bunday tarmoqlarning sensor tugunlari nafaqat olingan ma'lumotlarni vaqti-vaqti bilan yuboribgina qolmay, balki qiymatlarning keskin o'zgarishiga ham munosabat bildiradi.":
    "Reaktiv tarmoqlar",
  "C sinf IP-adreslari qanday oraliqda bo'ladi?":
    "192.0.0.0 dan 223.255.255.255 gacha",
  "CDMA-2000 standarti qanday tarmoq turiga tegishli": "simsiz tarmoq",
  "Cisco Packet Tracer - bu...":
    "Cisco Systems tomonidan ishlab chiqarilgan ma'lumotlar tarmog'i",
  "Cisco Packet Tracer 6.2 da oynalar to'g'ri keltirilgan qator":
    "file, edit, view, help, tools",
  "Cisco Packet Tracer 6.2 dasturida global tarmoq emulatsiyasi uchun qaysi yorliqdan foydalaniladi":
    "Wan Emulation",
  "Cisco Packet Tracer 6.2 dasturida kompyuterlar orasidagi aloqani tekshirish uchun qaysi komanda ishlatiladi":
    "ping adres",
  "Cisco Packet Tracer 6.2 dasturida qaysi rejim tarmoqning normal ishlashini modellashtiradi, bu vaqt xususiyatlari bo'yicha haqiqiy uskunalarning ishlashiga o'xshashdir.":
    "Realtime",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmada kod yozishni boshlash qaysi kalit so`z orqali amalga oshiriladi":
    "enable",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmada VLAN kompyuterni switch portiga bog'lash kodi":
    "switchport mode acess",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmada VLAN larni ko'rish kodi":
    "show vlan brief",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmada VLAN switch bilan SWITCH portiga bog'lash kodi":
    "switchport mode trunk",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmalarini bog'lovcha kabel turi":
    "serial DCE",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmani sozlovchi port nomi":
    "console",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmani yoqish kodi": "enable",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida IP adress kiritish kodi to'g'ri berilgan javobni toping":
    "ip address 192.168.1.1 255.255.255.0",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida portlariga IP adress berish bo'limi":
    "interface",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida RIP ga tarmoq qo'shish kodi to'g'ri berilgan javobni toping":
    "network 192.168.1.0",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida SERIAL porti nechta bo'ladi":
    "4",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida SERIAL porti orqali qanday qurilmalarga bog'lanadi":
    "routerga",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida VLAN o'chirish":
    "delete VLAN",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasini kod yozish bo'limi":
    "CLI",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasini nomini o'zgartirish bo'limi":
    "global",
  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmada fastEthernet 0/1 interfeysni sozlashga o'tish kodi":
    "Switch(config)#interface fastEthernet 0/1",
  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmada global konfiguratsiya rejimiga o'tkazish kodi":
    "Switch#configure terminal",
  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmasi nterfeysida marshrutizatsyani yoqish kodi":
    "Switch(config)#ip routing",
  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmasi portini router rejimiga o'tkazish kodi":
    "Switch(config-if)#no switchport",
  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmasiga IP adres berish kodi":
    "Switch(config-if)#ip address 192.168.1.1 255.255.255.0",
  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmasini aktiv rejimiga o'tkazish kodi":
    "enable",
  "Cisco Packet Tracer 6.2 dasturida tarmoq xavfsizligi muammolarini bartaraf etishda qaysi protocoldan foydalaniladi":
    "ACL",
  "Cisco Packet Tracer 6.2 dasturida tarmoqsiz ROUTERda DHCP service yoqilgan bo'lsa ...":
    "router avtomatik tarzda xostlar uchun IP adreslarni tarqatadi",
  "Concept Draw Pro - bu nima?":
    "tarmog'ini diagrammasini tuzish uchun kuchli biznes vosita",
  "Dasturlar va jarayonlarning turli xil mashinalardagi o'zaro ta'sirini ta'minlash mexanizmini ta'minlaydigan protokollar asosida quyidagilar qurilgan:":
    "gorizontal model",
  "DDoS kengaytmasini aniqlang": "Distributed Denial of Service",
  "Deykstr algoritmidan foydalanib, eng qisqa yo'lni topishda bog'lanish holatini kuzatish texnologiyasiga asoslangan dinamik marshrutlash protokoli.":
    "OSPF",
  "DHCP kengaytmasini aniqlang": "Dynamic Host Configuration Protocol",
  "Dinamik marshrutlash protokoli. Tashqi shlyuzni yo'naltirish protokollari sinfiga tegishli":
    "BGP",
  "Diykstr algoritmi qaysi protokollarda ishlatiladi.":
    "paketlarni marshrutlash protokollarida",
  "DNS keygaytmasini aniqlang": "Domain Name System",
  "Domen nomlari va IP manzillarni boshqaruvchi xalqaro korporatsiyasini aniqlang":
    "ICANN",
  "Domenlar haqida ma'lumot beruvchi taqsimlangan kompyuter tizimi": "DNS",
  "Egallagan hududi bo'yicha ko'plab kompyuter tarmoqlarini o'z ichiga olgan tarmoq":
    "WAN",
  "E-PON texnologiyasining asosiy protokoli qaysi?": "Ethernet",
  "Ethernet qanday topologiyani qo'llab-quvvatlaydi:": "shinalar",
  "Ethernet qaysi kanalga kirish usulidan foydalanadi:":
    "Tashuvchini sezish to'qnashuvini aniqlash",
  "Ethernet texnologiyasi IEEE standarti bilan belgilanadi:": "802.3",
  "Ethernet texnologiyasidagi MTU kengaytmasini aniqlang":
    "Maximum Transmission Unit",
  "Ethernet tarmog'iga qaysi kompaniya va qachon asos solgan?": "Xerox (1972)",
  "Faqat amaliy harakatlarni bajaradi (ma'lumot to'plash va masofadan turib ob'ektni boshqarish) va ma'lumotlarni retranslyatsiya qilmaydi.":
    "Terminal qurilma",
  "Fast Ethernet tarmog'ida ma'lumotlarni maksimal uzatish tezligi qanday.":
    "100 Mbit/s.",
  "FastEthernet port tezligi qanday birlikda o'lchanadi?": "Mbit / s",
  "Fayllar va printerlarga masofadan kirish uchun foydalaniladigan tarmoq protokolini ko'rsating":
    "SMB",
  "FTP protokoli bu-": "fayllar yborish protokoli",
  "Funksional imkoniyatlari jihatidan TELNET va RLOGIN protokollariga o'xshash, lekin barcha trafikni shifrlovchi protokolni ko'rsating":
    "SSH",
  "GAF (Geographic Adaptive Fidelity), GEAR (Geographic and Energy Aware Routing) - ...":
    "tugunning joylashuv o'rni haqidagi ma'lumot asosidagi marshrutizatsiya protokollari",
  "Global kompyuter tarmog'i:":
    "Uzoq masofalarda joylashgan va aloqa kanallari yordamida yagona tizimga ulangan mahalliy tarmoqlar va kompyuterlar to'plami",
  "Global muvofiqlashtirishni, tarmoq parametrlarini tashkillashtirish va o'rnatishni amalga oshiradi, SST ning eng murakkab qurilmasi bo'lib, katta hajmdagi xotirani va eng katta quvvat manbasini talab qiladi.":
    "Koordinator",
  "Global tarmoq?": "WAN",
  "G-PON teskari oqimi(abonentdan ulanish tuguniga)ni tezligi keltirilgan javobni belgilang.":
    "155 Mbit/s, 622 Mbit/s va 1,244 Gbit",
  "G-PON texnologiyasining asosiy protokoli qaysi?": "SDH",
  "G-PON to'g'ri oqimi(ulanish tugunidan abonentga)ni tezligi keltirilgan javobni belgilang.":
    "1,244 Gbit/s - 2,488 Gbit",
  "Halqaro standart ISO 11801 sertifikatiga ega va ma'lumot uzatish tezligi 10 Gigabit sekundgacha bo'lgan kabel kategoriyasini aniqlang":
    "CAT7",
  "Haqiqiy fizik ob'ektdan olingan ma'lumotga javobni berish maqsadida, ma'lumotni qayta ishlash, uzatish, etkazib berish va so'rovlar olish uchun boshqa tarmoqlar bilan, o'z aro hamkorlik qiluvchi, tarmoqlangan tugunlar tizimi.":
    "Sensor tarmoq",
  "HTTP protokoli bu-": "gippermatn yuvorish protokoli",
  "HTTP protokoli uchun standart portni ko'rsating": "80",
  "HTTPS protokoli uchun standart portni ko'rsating": "443",
  "Hub OSI modelining qaysi pog'onasida ishlaydi?": "fizik",
  "IDSL (raqamli abonent liniyasi) texnologiyasi ma'lumotlarni uzatish tezligi ko'rsatilgan javobni belgilang.":
    "144 Kbit/s",
  "IEEE 802.03 stardanti asosida tashkil qilingan tarmoq abonentlarining maksimal soni":
    "1024 tagacha",
  "IEEE 802.03 stardanti asosida tashkil qilingan tarmoq bir qismidagi abonentlarning maksimal soni":
    "100 tagacha",
  "IEEE 802.11 standarti asosida tarmoq qanday nomlanadi.": "Wi-Fi",
  "IEEE 802.11 standarti qanday tarmoq turiga tegishli.": "Simsiz lokal tarmoq",
  "IEEE 802.15 standarti": "Bluetooth",
  "IEEE 802.16 standarti qaysi tarmoqga tegishli.": "WiMAX",
  "Impuls kodli modulyatsiy bajarilishning ketma-ketligi to'g'ri javobni ko'rsting.":
    "diskretlash, kvantlash, kodlash",
  "Internet tarmog'ini hosil bo'lishiga sababchi bo'lgan tarmoq nomi qaysi javobda berilgan?":
    "ARPANET",
  "Internetga ulangan kompyuterda albatta nima bo'lishi kerak": "IP-manzil",
  "Internet ashyolari (IoT) atamasi qachon va kim tomonidan taklif etilgan?":
    "1999 yilda Kevin Eshton tomonidan",
  "IoT atamasi nimani anglatadi?": "Internet ashyolari",
  "IoT kengaytmasini aniqlang": "Internet of Things",
  "IP adres qaysi satx protokolida ko'rsatiladi": "tarmoq satxi",
  "IP nima.": "Internet protokoli",
  "IP protokol qanday vazifani bajaradi.":
    "paketlarni marshrut bo'yicha uzatish",
  "IP protokoli paketni uzatish yo'lini nima asosida tanlaydi.":
    "marshrutlash jadvali asosida",
  "IP-adres nima ?":
    "Nuqtalar bilan ajratilgan to'rtta sondan (oktet) iborat noyob son. Har bir son 0-255 oralig'ida bo'lishi lozim.",
  "IPv4 adres bu - ...": "32 bitli son bo'lib 4 ta qismga bo'linadi",
  "IPv4 ning IPv6 dan asosiy farqi": "IP adreslarni uzunliklari turlicha",
  "IPv4 protokolida IP adres uzunligi.": "32 bit",
  "IPv6 protokolida IP adres uzunligi.": "128 bit",
  "Kabelning qaysi turi yorug'lik oqimini uzatishga mo'ljallangandir?":
    "opriktolali",
  "Kadrlarni uzatish protokoli tarmoqning qaysi satxida bajariladi.": "Kanal",
  "Kamida bir sensordan iborat (yana bir yoki bir nechta aktuator bo'lishi mumkin) qurilma hamda hisoblash va simli yoki simsiz tarmoq imkoniyatlariga ega.":
    "Sensor tugun",
  "Kanal satx protokolining vazifasi.": "kadrlarni uzatish",
  "Kanallar holati algoritmi qaysi protokolda ishlatiladi.": "OSPF",
  "Kanallarni birlashtirish texnologiyasini ko'rsating": "EtherChannel",
  "Keltirilganlardan qaysi biri ICMP (Internet Control Message Protocol) protokolining umumiy xarakteristikalariga kiradi":
    "Hamma javoblar to'g'ri",
  "Keraksiz bog'lanmalarga, bir yoki bir nechta tarmoq ko'priklariga ega bo'lgan Ethernet tarmoq topologiyasidagi ilmoqlarni bartaraf etish uning asosiy vazifasi hisoblanadi":
    "STP",
  "Klient dasturiy tizimining asosiy qismlarini sanab bering":
    "tarmoq xizmatlari, tarmoq funksiyalari, operatsion tizim.",
  "Klient-server arxitekturasida ilova qanday mantiqiy sathlarga bo'linadi":
    "Foydalanuvchi interfeysi sathi. Qayta ishlash sathi. Ma'lumotlar sathi",
  "Kommutator qanday satxlarni o'z ichiga oladi.": "Kanal va tarmoq",
  "Kommutatorlarda MAC adreslar yozib qo'yiladigon jadval nomi": "CAM",
  "Kompyuter tarmog'ining segmentlarini (tarmoq osti) bitta tarmoqqa birlashtirishga mo'ljallangan OSI modelining ikkinchi darajali tarmoq qurilmasi.":
    "bridge",
  "Kompyuter tarmoqlari o'rtasida ma'lumot almashish har doim quyidagilar orqali amalga oshiriladi.":
    "Mustaqil kichik ma'lumotlar to'plamlari (paketlar)",
  "Kompyuter tarmoqlarida ... - bu paketli rejimda tarmoq orqali uzatiladigan ma'lumotlarning maxsus shakllangan bloki.":
    "Paket",
  "Kompyuter tarmoqlarida ma'lumotlar dasturlar yordamida kichik bloklarga bo'linadi va bir kompyuterdan ikkinchisiga uzatiladi. Bunday bloklar nima deb ataladi?":
    "Paket",
  "Kompyuterdagi mavjud tarmoq adapterlar adreslarini aniqlash uchun buyruqlar satriga qaysi xizmatchi so'z yoziladi?":
    "ipconfig/all",
  "Kompyuterlarga ma'lumotlar almashinuvini ta'minlaydigan apparat va dasturiy ta'minot to'plami qanday nomlanadi":
    "kompyuter tarmog'i",
  "Kompyuterlarni tarmoqqa ulashning asosiy maqsadi nima:":
    "tarmoqning barcha foydalanuvchilari tomonidan har bir kompyuterning resurslaridan foydalanish qobiliyati, buning uchun tarmoqqa ulangan kompyuterlar tarmoqdagi boshqa kompyuterlar bilan o'zaro aloqaning zarur vositalariga ega bo'lishi kerak.",
  "Konsentratsiya quyidagilarni anglatadi:":
    "Bir nechta kirish, kam quvvatli, axborot oqimlarini birlashtirgan",
  "L2 kommutatori OSI modelining qaysi pog'onasida ishlaydi?": "kanal",
  "L3 kommutatori OSI modelining qaysi pog'onasida ishlaydi?": "tarmoq",
  "LAN qanday tarmoq turiga kiradi.": "Lokal tarmoq",
  "LLC protokoli qaysi satxda ishlatiladi.": "kanal satxida",
  "Lokal hisoblash tarmog'idagi kompyuterlarning joylashishini ifodalovchi termin qanday nomlanadi?":
    "Topologiya",
  "Lokal tarmoq 10BASE-T va token ring tarmoqlarida foydalanilgan kabel kategoriyasini aniqlang":
    "CAT3",
  "Lokal tarmoq 10BASE-T, 100BASE-T4 tarmoqlarida foydalanilgan kabel kategoriyasini aniqlang":
    "CAT4",
  "Lokal tarmoq 1100BASE-TX tarmog'ida foydalanilgan kabel kategoriyasini aniqlang":
    "CAT5",
  "Lokal tarmoq Fast Ethernet va Gigabit Ethernet tarmoqlarida foydalanilgan kabel kategoriyasini aniqlang":
    "CAT6",
  "Lokal tarmoq?": "LAN",
  "Lokal tarmoqda marker usuli vazifasi.": "Ma'lumotlarni uzatish",
  "Lokal tarmoqda tasodiviy kirish qaysi standarta yoritilgan.": "IEEE802.3",
  "Low Power Short Range - qisqa masofali kam quvvatli tarmoqlar texnologiyalari qaysilar?":
    "ZigBee, WirelessHart, MiWi, 6LoWPAN.",
  "Low Power Wide Area (LPWAN)- keng qamrovli kam quvvatli tarmoqlar texnologiyalari qaysilar?":
    "SigFox, Symphony Link, Nwave, Ingenu (RPMA), Weightless, LoRa",
  "Ma'lumotlar kadri lokal tarmoqning qaysi satxida shakllanadi.": "Kanal",
  "Ma'lumotlarni fizik kodlash usuli tarmoqning qaysi satxida bajariladi.":
    "Fizik",
  "MAC adres orqali IP ni aniqlashda ishatiladigon protokol": "ARP",
  "MAC kengaytmasini aniqlang": "Media Access Control",
  "Ma'lumot uzatish paytida yuzaga kelgan xatolar va boshqa istisno holatlar to'g'risida xabarlarni yuborish uchun asosan ushbu protokoldan foydalaniladi":
    "ICMP",
  "Ma'lumotlar paketlarini tarmoqlar o'rtasida yo'naltirish uchun yo'riqnoma qaysi funktsiyalardan foydalanadi?":
    "Kompyuter tarmog'idagi yo'l va kommutatsiyani aniqlash",
  "Ma'lumotlar uzatilishini boshqarish uchun mo'ljallangan internetning asosiy ma'lumotlarni uzatish protokollaridan biri":
    "TCP",
  "Ma'lumotlarning qayta ishlanishini va tugularning harakatlanishini ta'minlaydi va MSU mikrokontrollerdan iborat tarkibga protsessor, SRAM operativi, energiyadan mustaqil bo'lgan EEPROM. flesh-xotira, ADC analog-raqamli o'zgartirgich, taymer, kiritish/chiqarish portlari kiradi.":
    "hisoblash tizimi",
  "MAN qanday tarmoq turiga kiradi.": "Shaxar tarmog'i",
  "Mantiqiy ulanishni boshqarish va atrof-muhitga kirishni boshqarish qaysi darajani ta'minlaydi:":
    "kanal",
  "Marker usuli lokal tarmoqning kanday topologiyasida ishlatilmaydi.":
    "Yacheykali",
  "Marker usuli lokal tarmoqning qanday topologiyasida ishlatiladi.": "Xalqa",
  "Marshrutizator qanday satxlarni o'z ichiga oladi.": "Tarmoq",
  "Marshrutlash algoritmlari asosida ma'lumotlarni uzatishning maqbul yo'nalishini topish uchun qanday qurilmalardan foydalaniladi?":
    "marshrutizatorlar",
  "Masofalari 200 kilometrgacha bo'lgan mahalliy tarmoqlar uchun 1980-yillarning ma'lumotlarni uzatish standarti. Optik-tolali uzatish liniyalaridan foydalaniladi, 100 Mbit / s gacha tezliklar ta'minlanadi. Bu-":
    "FDDI",
  "Masofali vektor algorimi qaysi protokolda ishlatiladi.": "RIP",
  "Matnli terminal interfeysini tarmoq orqali amalga oshirish uchun foydalaniladigan tarmoq protokolini ko'rsating":
    "TELNET",
  "Mintaqaviy tarmoq?": "MAN",
  "NAT kengaytmasini aniqlang": "Network Address Translation",
  "Nazorat ta'sirini (yorug'lik, bosim, temperatura va hokazo) qabul qiluvchi, qurilma, uning sonli va sifat belgilarini o'lchaydi va ushbu o'lchamlarni signalga o'zgartiradi. Signal elektrik, kimyoviy yoki boshqa turda bo'lishi mumkin.":
    "Sensor",
  "Netware 4.1 qanday xavfsizlik talablariga javob beradi?": "S2 sinf",
  "NGN tarmog'ining funksional modeli qanday darajalardan tashkil topadi?":
    "xizmatlarni boshqrish darajasi; kommutatsiyani boshqarish darajasi; transport darajasi; kirish darajasi.",
  "Noto'g'ri ta'rifni aniqlang":
    "Hub paketlarni manba portiga va barcha portlarga yuboradi",
  "Ob'ekt (dastur) interfeyslari turlari:":
    "dastur protokoli, dastur dasturi, o'rta dastur protokoli",
  "Ommabop tarmoq protokollari:": "TCP, NCP, SNMP, NetBEUI",
  "ONT (optical network terminal) vazifasi nimadan iborat?":
    "Ma'lumotlarni OLT (optical line terminal) qabul qilib, ularni konvertlaydi va UNI (user network interfaces) abonent interfeyslari orqali uzatadi",
  "Open System Interconnection (OSI) modeli nechta pog'onadan iborat?": "7",
  "Oraliq dasturiy ta'minot:":
    "tarmoqdagi tarmoq ma'muriyati funktsiyalarini amalga oshiradi",
  "OSI modeli 1-pog'onasi nomi?": "fizik",
  "OSI modeli 2-pog'onasi nomi?": "kanal",
  "OSI modeli 3-pog'onasi nomi?": "tarmoq",
  "OSI modeli 4-pog'onasi nomi?": "transport",
  "OSI modeli 5-pog'onasi nomi?": "seans",
  "OSI modeli 6-pog'onasi nomi?": "taqdim etish",
  "OSI modeli 7-pog'onasi nomi?": "amaliy",
  "OSI modeli nechta pog'onadan tashkil topgan?": "7",
  "OSI modelining amaliy pog'onasida ma'lumotlar qay xolda bo'ladi?":
    "ma'lumotlar",
  "OSI modelining amaliy pog'onasida qaysi protokollar ishlatiladi?":
    "HTTP, FTP, SMTP",
  "OSI modelining asosiy elementlari:":
    "pog'onasi, ilovalari va jismoniy ulanish",
  "OSI modelining fizik pog'ona tushunchalarini sanab o'tadigan javobni ayting:":
    "o'ralgan juftlik kabeli, koaksiyal kabel, optik tolali kabel, raqamli kanal, havo",
  "OSI modelining fizik pog'onasida ma'lumotlar qay xolda buladi?": "bitlar",
  "OSI modelining kanal pog'onasida ma'lumotlar qay xolda buladi?": "kadrlar",
  "OSI modelining kanal pog'onasida qaysi protokollar ishlatiladi?":
    "PPP, IEEE 802.22, Ethernet, DSL, ARP",
  "OSI modelining seans pog'onasida ma'lumotlar qay xolda buladi?":
    "ma'lumotlar",
  "OSI modelining taqdim etish pog'onasida ma'lumotlar qay xolda buladi?":
    "ma'lumotlar",
  "OSI modelining tarmoq pog'onasida ma'lumotlar qay xolda buladi?": "paketlar",
  "OSI modelining tarmoq pog'onasida qaysi protokollar ishlatiladi?":
    "IPv4 va IPv6",
  "OSI modelining transport pog'onasida ma'lumotlar qay xolda buladi?":
    "bloklar",
  "OSI modelining transport pog'onasida qaysi protokollar ishlatiladi?":
    "TCP, UDP",
  "OSI ning nechanchi bosqichi foydalanuvchining ilovasini shaxsan tasdiqlaydi, fayllar uzatishning dasturiy vositalari axborot bazasiga ega bo'lish, elektron pochta vositalari, serverda qayd qilish xizmati uchun mo'ljallangan?":
    "7",
  "OSI ning nechanchi bosqichi paketlarni manzillash, mantiqiy nomlarni jismoniy tarmoq manziliga o'zgartirish, teskariga ham va shuningdek paketni kerakli abonentga jo'natish yo'nalishini tanlashga javobgar?":
    "3",
  "OSI ning nechanchi bosqichi standard ko'rishdagi paket tuzishga va boshlash hamda tamom bo'lishni boshqarish maydonini paket tarkibiga joylashishiga javobgar?":
    "2",
  "OSI ning nechanchi bosqichi uzatilayotgan axborotni signal kattaligiga kodlashtiradi, uzatish muhitiga qabul qilishni va teskari kodlashni amalga oshirishga javob beradi?":
    "1",
  "OSI ning nechanchi bosqichida aloqa o'tkazish vaqtini boshqaradi (ya'ni aloqani o'rnatadi, tasdiqlaydi va tamomlaydi) va abonentlarni mantiqiy nomlarini tanish, ularga ega bo'lish huquqini nazorat qilishvazifalari ham bajariladi?":
    "5",
  "OSI ning nechanchi bosqichida axborotni aniqlanadi va axborot formatini ko'rinish sintaksisini tarmoqqa qulay ravishda o'zgartiradi, siqish av aksi, kodkash va aksi ya'ni tarjimon vazifasini bajaradi?":
    "6",
  "OSI ning nechanchi bosqichida paketni xatosiz va yo'qotmasdan, kerakli ketma-ketlikda yetkazib berishni amalga oshiradi?":
    "4",
  "OSI modeli etalon model asosida hozirgi kunda qaysi tarmoq ishlaydi?":
    "TCP/IP",
  "OSPF nima.": "Marshrutlash protokoli",
  "P2P kengaytmasini aniqlang": "Peer-to-peer",
  "Paketlar kommutatsiyasi qaysi satxda bajariladi.": "tarmoq satxida",
  "Paketlarni marshrutlash jadvali qaysi protokol asosida yaratiladi.": "OSPF",
  "Paketni kommutatsiya qilish va multiplekslash texnologiyasi.": "ATM",
  "Paketni xatosiz va yo'qotmasdan, kerakli ketma-ketlikda yetkazib berishni protokoli?":
    "TCP",
  "PDH tizimlarining kamchiliklarini ko'rsatilgan javobni belgilang.":
    "Barcha javoblar to'g'ri",
  "Peer-to-peer tarmog'ining afzalliklari:":
    "foydalanuvchilari o'z resurslarini boshqarish imkoniyatiga ega",
  "PON qanday topologiya asosida quriladi?": "Daraxtsimon",
  "PON texnologiyasi kamchiliklari keltirilgan javobni belgilan.":
    "Oddiy daraxt topologiyasida zahiralashning yo'qligi",
  "PON texnologiyasi ma'lumotlarni uzatishda maksimal oralig'i ko'rsatilgan javobni belgilan.":
    "20 km",
  "PON texnologiyasi Markaziy tugun OLT (optical line terminal) vazifasi nimadan iborat?":
    "SNI (service node interfaces) orqali magistral tarmoqlardan ma'lumotlarni qabul qiladi va abonent tugunlariga kiruvchi oqimga shakllantiradi",
  "Protokol to'plamlari (stek)ni aniqlash deganda nima tushuniladi?":
    "Internet tarmog'ida ishlashni tashkil qilish uchun yetarli bo'lgan turli darajadagi protokollarning izchil to'plami",
  "Qamrovi bo'yicha WAN dan kichik, lekin LAN dan katta bo'lgan tarmoq turini aniqlang":
    "MAN",
  "Qanday qilib tarmoqni murakkab tizim sifatida modellashtirish mumkin?":
    "uni tarkibiy tuzilmalarga taqsimlash",
  "Qaysi javobda MAC adresga to'g'ri misol keltirilgan?": "00:26:57:00:1f:02",
  "Qaysi javovda IPv4 ga misol to'g'ri keltirilmagan?": "278.25.25.25",
  "Qaysi protocol dinamik marshrutlash protokoli emas": "SMPT",
  "Qaysi protokol klient-server dasturlarining tarmoqdagi paketlarini tinglay olmaydigan va ruxsatsiz kirishni ta'minlay oladigan tarzda aloqa o'rnatishga imkon beradi":
    "TLS",
  "Qaysi tarmoq paketlar kommutatsiyasi asosida ishlaydi.":
    "keltirilgan barcha tarmoqlar",
  "Qoidalar va marshrutlash jadvallari asosida turli xil tarmoq segmentlari o'rtasida paketlarni uzatuvchi ixtisoslashgan qurilma":
    "marshrutizator",
  "Qoidalar  va marshrutlash jadvallari asosida turli xil tarmoq segmentlari o'rtasida paketlarni uzatuvchi ixtisoslashgan qurilma":
    "Router",
  "Qo'shni darajalar bir xil mashinada bir-biriga ko'rsatadigan xizmatlari asosida quyidagilar quriladi:":
    "vertikal model",
  "Quydagilarning qaysi biri shaxsiy tarmoq turi hisoblanadi": "PAN",
  "Quyidagi dasturlardan qaysi biri tarmoq emulyatori emas?": "LAN Calculator",
  "Quyidagi IP manzillardan qaysi biri faqat lokal tarmoq uchun qo'llanilishi mumkin":
    "192.168.8.8",
  "Quyidagi IP manzillardan qaysi biri global miqyosdagi IP manzil hisoblanadi":
    "8.8.8.8",
  "Quyidagi protokollardan qaysi biri SSL sertifikatga ega hisoblanadi":
    "HTTPS",
  "Quyidagi Windows oilasiga kiruvchi operatsion tizimlardan qaysi biri tarmoqni boshqarish uchun ko'proq mos keladi":
    "Windows Server",
  "Radioaloqa texnologiyasining kamchiliklari:":
    "Elektron yoki atmosfera ta'siriga juda sezgir",
  "Radiokanallar orqali o'z-aro birlashgan, bajaruvchi qurilmalar va sensorlar ko'pligidan iborat tarmoqlangan, o'zidan o'zi tashkillashtiriladigan sensor tarmoq.":
    "Simsiz sensor tarmoq",
  "RIP protokoli qanday algoritm asosida ishlaydi.":
    "masofali vektor algoritmi",
  "RIP protokoli qaysi satxda bajariladi": "tarmoq satxida",
  "RIP qanday protokol.": "paketlarni marshrutlash protokoli",
  "Router - bu turli xil ulanadigan qurilma:": "Kompyuter tarmoqlari",
  "Routerni marshrutizatordan farqi.": "hech qanday farqi yo'q",
  "SDH-sinxron raqamli ierarxiya avzalliklari ko'rsatilgan javobni belgilang.":
    "Barcha javoblar to'g'ri",
  "SDSL texnologiyasi ma'lumotlarni uzatish oralig'i ko'rsatilgan javobni belgilan.":
    "3 km",
  "Sensor tarmoqda boshqa tugunlar bilan simsiz bog'lanishni ta'minlaydi va radio qabulqilgich-uzatkichdan iborat":
    "kommunikatsion tizim",
  "Sensor tugun tarkibiy qismiga nimalar kiradi?":
    "Apparat ta'minoti, bazaviy dasturiy ta'minoti, amaliy dasturiy ta'minoti",
  "Server ilovalari ham klient rejimida, ham server rejimida ishlashi mumkinmi?":
    "Ha, serverlar ham bir biriga murojaat qilishi va o'zaro ma'lumot almashishi mumkin",
  "Server va mijoz o'rtasidagi o'zaro ta'sir bosqichlarining to'g'ri tartibini tuzing":
    "serverga so'rov yuborish, mijozdan so'rov olish, serverdan natijani olish",
  "Signallar to'qnashuvi (kolliziya) lokal tarmoqning qaysi protokoli tomonidan aniqlanadi.":
    "IEEE802.3 protokoli",
  "Simsiz lokal tarmoq bu-": "WLAN",
  "Simsiz sensor tugunning barcha elementlarini energetik ta'minot bilan ta'minlaydi va energiyani olishni generatsiyalash qurilmasi hisoblanadi, va shu bilan birga kuchni tartiblashtiruvchi imkoniyatga ega.":
    "elektr ta'minoti tizimi",
  "Simsiz sensor tugunning tashqi dunyo bilan birikishini ta'minlaydi, va tarkibida analogli va raqamli sensorlar, aktuatorlar bo'ladi.":
    "sensor tizim",
  "Sinxron ma'lumotlarni uzatish-":
    "raqamli ma'lumotlarni ketma-ket interfeys orqali uzatish usuli, bunda qabul qiluvchi va uzatuvchi ma'lumotlarni uzatish vaqtini biladi, ya'ni uzatuvchi va qabul qilgich bir maromda ishlaydi.",
  "SMTP protokoli bu-": "pochta yuborish oddiy protokoli",
  "SNMP kengaytmasini aniqlang": "Simple Network Management Protocol",
  "SNMP protokoli bu-": "tarmoq boshqarish oddiy protokoli",
  "SPIN (Sensor Protocols for Information via Negotiation), Direct Diffusion, Rumor Routing - ...":
    "bir sathli marshrutizatsiya protokollari",
  "SSL kengaytmasini aniqlang": "Secure Socket Layer",
  "SST arxitekturasi ikki turga ajraladi:": "bir rangli va klasterli",
  "SST ning boshqa tugunlaridan ma'lumotlarni oladi, buferlaydi va uzatadi, shuningdek uzatish yo'nalishini aniqlaydi.":
    "Router",
  "STP kanal protokolining kengaytmasini aniqlang": "Spanning Tree Protocol",
  "Switch qaysi guruh qurilmasiga kiradi": "kommutator",
  "Talab bo'yicha o'z-o'ziga xizmat ko'rsatish va administratsiyalash imkonini beruvchi va jismoniy yoki virtual resurslarning kengaytiriladigan va elastik omboriga kirishni birgalikdagi kirishni ta'minlaydigan paradigm qanday ataladi?":
    "Cloud computing",
  "Tarmoq adapterining ta'rifi ko'rsatilgan to'g'ri javobni toping:":
    "Tarmoq adapteri (Network Interface Card, NIC) - bu to'g'ridan-to'g'ri yoki boshqa aloqa uskunalari orqali uni boshqa kompyuterlar bilan bog'laydigan ma'lumotlarni uzatish vositasi bilan bevosita o'zaro aloqada bo'lgan kompyuterning periferik qurilmasi.",
  "Tarmoq arxitekturasini aniqlash uchun to'g'ri javobni tanlang:":
    "Arxitektura - bu elementlarning barcha xilma-xilligini, ular orasidagi bog'lanishlarni va o'zaro ta'sir qoidalarini aks ettiradigan tarmoqning tizimli tavsifi.",
  "Tarmoq operatsion tizimining masofadagi resurs va hizmatlarga bo'lgan ruxsat so'rovlari vositasi va ularni ishlatish, ilovalardan va foydalanuvchilardan so'rovlarni tarmoqdagi uzoqlashtirilgan resurslarga qayta yo'naltirishni bajaradigan qismini aniqlang.":
    "redirektor.(redaktor)",
  "Tarmoq standartlarini tartibga soluvchi qo'mitaning qisqartmasi qaysi javobda berilgan?":
    "IEEE",
  "Tarmoq tarkibiy qismlarining tugunlarini nomlang":
    "har qanday ma'lumotlarni uzatuvchi va / yoki qabul qiluvchi qurilmalar",
  "Tarmoqda bajariladigan funktsiyalarning asosiy turlari:":
    "dastur, aloqa, ma'muriy",
  "Tarmoqda xavfsizlikni ta'minlaydigan protokollarni ko'rsating.":
    "SSH, TLS, SSL, HTTPS.",
  "Tarmoqdagi foydalanuvchilarning tengligiga asoslangan kompyuter tarmog'ini ko'rsating":
    "P2P",
  "Tarmoqdagi kompyuterning IP-manzili uchun to'g'ri javobni tanlang":
    "108.214.198.112",
  "Tarmoqdagi ma'lumotlarni qayta ishlash, saqlash va uzatish dasturlari to'plami (NOS) - bu ...?":
    "Tarmoq operatsion tizimlar",
  "Tarmoqdagi tugunlarning o'zaro ta'sirini tashkil qilish uchun etarli bo'lgan ierarxik ravishda tashkil etilgan tarmoq protokollari to'plami nima?":
    "protokollar to'plami",
  "Tarmoqlararo ekranning ikkinchi nomini aniqlang": "Firewall",
  "Tarmoqlarda ma'lumotlarni uzatishda kard to'qnashuvi bu-": "kolliziya",
  "Tarmoqning funktsional modeli ta'rifini bering:":
    "Funktsional model - bu tarmoqning mantiqiy darajadagi mavhum tavsifi, uni jismoniy amalga oshirish tamoyillariga bog'liq emas. Ushbu model uning tarkibiy elementlari bo'lgan tarmoqda bajariladigan funktsiyalarning o'zaro bog'liqligini aks ettiradi.",
  "Tarmoqqa ulangan kompyuterda nima o'rnatilishi kerak bo'lishi kerak.":
    "IP - adrec",
  "Tarmoqqa ulanishga qobil qurilmalarni birlashtirib, mahalliy tarmoq hosil qilishda qo`llaniladigan eng oddiy qurilma":
    "Hub",
  "TCP / IP tarmoqlarida tranzit paketlarning IP manzillarini o'zgartiruvchi mexanizmi-":
    "NAT",
  "TCP / UDP arxitekturasi asosida IP tarmoqlaridagi qurilmalarni boshqarish uchun standart Internet protokoli bu-":
    "SNMP",
  "TCP protokolida malumotlar qanday nomlanadi?": "segment",
  "TCP/IP asosida tarmoqlarda ulanishlarning yaxlitligi va sifatini tekshirish uchun yordamchi dastur":
    "ping",
  "TCP/IP modelining havola sathida ishlaydigan protokollar va texnologiyalar ro'yxati berilgan to'g'ri javobni taqdim eting:":
    "Ethernet, IEEE 802.11 WLAN, SLIP, Token Ring, ATM.",
  "TCP/IP modelining ilova pog'onaida ishlaydigan protokollar va texnologiyalar ro'yxati keltirilgan to'g'ri javobni taqdim eting:":
    "DHCP, DNS, SNMP.",
  "TCP/IP modelining qaysi darajasida har xil muhitda signal uzatish bilan bog'liq jismoniy muammolar hal qilinadi:":
    "Kirish darajasida",
  "TCP/IP stekining pastki pog'ona protokollari qanday amalga oshiriladi:":
    "dasturiy ta'minot va texnik vositalarning kombinatsiyasi",
  "TCP/IP to'plamining yuqori pog'onalari qanday amalga oshiriladi:":
    "Dasturiy ta'minot orqali",
  "TCP/IP stek nechta pogonadan tashkil topgan?": "4",
  "Teglar yordamida ma'lumotlarni bir tarmoq tugunidan ikkinchisiga uzatadigan yuqori samarali telekommunikatsiya tarmog'idagi mexanizm.-":
    "MPLS",
  "Telefon tarmog'i uchun foydalaniladigan kabel kategoriyasi to'g'ri berilgan javobni aniqlang.":
    "CAT1",
  "TelNet bilam ishlash usuli yaqin protokol": "SSH",
  'Texnik nuqtai nazardan, "Internet of Things" ta\'rif bering.':
    "Tashqi muhitdan har xil ma'lumotlarni olish va insonning minimal ishtirokida qayta ishlashni ta'minlaydigan texnologiyalar to'plami.",
  "Token ring va Arcnet tarmoqlarida foydalanilgan kabel kategoriyasini aniqlang":
    "CAT2",
  "To'qnashuvni aniqlash (Kolliziya) va tashuvchini tinglash uchun bir nechta kirish. To'qnashuv nazorati bilan mahalliy kompyuter tarmog'ida umumiy uzatish vositasiga ko'p kirish texnologiyasi bu-":
    "CSMA/CD",
  "Tosodiviy ulanish usuli lokal tarmoqning qanday topologiyasida ishlatiladi.":
    "Shina",
  "Transport darajasidagi himoya protokolini aniqlang": "TLS",
  "TSL kengaytmasini aniqlang": "Transport Layer Security",
  "Tugun punkti bu?":
    "Uch yoki undan ortiq aloqa liniyalari birlashadigan nuqta",
  "Tugunlar soni vaqt bo'yicha tasodifiy bo'ladigan tarmoq, va u 0 dan ba'zi maksimal ko'rsatkichgacha o'zgarishi mumkin":
    "Ad-hoc tarmoq",
  "Turli xil tarmoq protokollari ishlaydigan kompyuter tarmoqlari o'rtasida ma'lumot almashish quyidagilar yordamida amalga oshiriladi.":
    "shlyuzlar",
  "UDP protokolida malumotlar qanday nomlanadi?": "datagram",
  "UMTS standarti qaysi tarmoq avlodiga tegishli.": "3G",
  "Uncha katta bo'lmagan mamlakat shaharlari va viloyatlari foydalanuvchi kompyutеrlarini va lokal tarmoqlarni maxsus aloqa yoki tеlеfon aloqa kanallari orqali birlashtiradigan tarmoq":
    "MAN",
  "VDSL texnologiyasi bir juft o'ralgan telefon simlaridan chqishidagi ma'lumotlarni uzatish oqimi chegarasi ko'rsatilgan javobni belgilan.":
    "13 Mbit/s dan 52 Mbit/s  gacha",
  "VDSL texnologiyasining maksimal uzatish oralig'i ko'rsatilgan javobni belgilang":
    "300 - 1300 metr",
  "VPN kengaytmasini aniqlang": "Virtual Private Network",
  "WAN tarmog'ining to'liq nomi to'g'ri ko'rsatilgan javobni aniqlang.":
    "Wide Area Network",
  "Wi-Fi kengaytmasini aniqlang": "Wireless Fidelity",
  "Wi-Fi tarmog'i qaysi standart asosida yaratiladi.": "IEEE 802.11",
  "Wi-Fi tarmoqlarini rivojlantirishdagi asosiy muammo?":
    "tegishli chastota diapazonini taqsimlash",
  "WiMAX qanday tarmoq turiga kiradi.": "Simsiz tarmoq",
  "Windows operatsion tizimini masofadan turib boshqarish imkoniyatini beruvchi protokolni aniqlang":
    "RDP",
  "WLAN kengaytmasini aniqlang": "Wireless Local Area Network",
  "xDSL texnologiyasi keltirilgan javobni belgilang.": "ADSL, VDSL, RDSL",
  "Aloqa liniyasi orqali uzatiladigan, OSI modelining kanal qatlami protokolining ma'lumotlar bo'lagi":
    "Kadr",
  "Cisco Packet Tracer 6.2 dasturida qaysi rejim tarmoq orqali ma'lumotlarni uzatish bilan bog'liq bo'lgan keyingi voqea sodir bo'lishini qo'lda boshqarish imkonini beradi":
    "Simulation",
  "Belgilanagan tarmoq qoidalari asosida tarmoq orqali o'tuvchi tarmoq trafigini kuzatuvchi va filtrlaydigan kompyuter tarmog'ining dasturiy ta'minoti yoki apparat-dasturiy ta'minot elementi":
    "Tarmoqlararo ekran",
  "Ma`lumotlar almashinuvi qoidalari va formatlari to`plami":
    "Tarmoq protokoli",
  "Ruxsatsiz kirishlarni aniqlash tizimini ko'rsating": "IDS",
  "Lokal xisoblash tarmoqlarining ma’lumotlar almashinish muxiti qanday turlarga bo`linadi?":
    "Barcha javoblar to`g`ri",
  "line vty kodi qaysi protokolda ishlatiladi": "TelNet",
  "Protokol modeli to'g'ri ta'rifi bilan javobni tanlang":
    "Protokol modeli tarmoqning ishlashini dispersli ob'ektlar va funktsional modullarning o'zaro ta'siri qoidalari darajasida tavsiflaydi",
  "Protokol tushunchasi uchun to'g'ri javob nima?":
    "axborot tizimini bir holatdan ikkinchi holatga o'tkazadigan mantiqiy bog'liq harakatlar ketma-ketligi",
  "Tarmoq adapteri manzili uchun to'g'ri javobni bering": "apparat manzili",
  "Hublarning asosiy turlari": "aqlli, passiv",
  "Bu aniq vaqt serverlari bilan ishlash protokoli": "NTP",
  "Bu bitta jismoniy tarmoq interfeysida (Ethernet, Wi-Fi) bir nechta virtual lokal tarmoq yaratish imkonini beradi":
    "VLAN",
  "Internet tarmog'ida ma'lumotlarni bulutli texnologiyalar asosida saqlash xizmatini ko'rsatadi":
    "Google Drive",
  "Tarmoqqa ulangan qurilmalarga avtomatik ravishda dinamik IP manzillarni beruvchi protokol":
    "DHCP",
  "Bu model iste’molchiga axborot texnologiyalarini servis sifatida internet orqali namoyon qiladi":
    "Bulutli texnologiyalar",
  "Kompyuterdagi fayllarning butunligini tekshirish vositasi":
    "Xeshlash algoritmlari",
  "Mantiqiy bog'lanish tuguni hisoblanib, ular yordamida mantiqiy kerakli protokolga bog'lanish hosil qilinadi":
    "port",
  "0.XXX.XXX.XXX — 127.XXX.XXX.XXX bu Ipv4 ning qaysi sinfi?": "A",
  "10GEthernet tarmog‘ida ma’lumotlarni maksimal uzatish tezligi qanday":
    "10 Mbit/s",
  "128.0.XXX.XXX — 191.255.XXX.XXX bu Ipv4 ning qaysi sinfi?": "B",
  "192.0.0.XXX — 223.255.255.XXX bu Ipv4 ning qaysi sinfi?": "C",
  "2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d ushbu yozuv nimani anglatadi?":
    "IPv6 avlodga tegishli bo'lgan IP manzil",
  "224.XXX.XXX.XXX — 239.XXX.XXX.XXX bu Ipv4 ning qaysi sinfi?": "D",
  "240.XXX.XXX.XXX — 255.XXX.XXX.XXX bu Ipv4 ning qaysi sinfi?": "E",
  "802 qo'mitasi qanday tarkibiy qismlarni o'z ichiga oladi?":
    "LLC, Simsiz tarmoqlar, Internetda ishlash",
  "A sinf IP-adreslari qanday oraliqda bo`ladi?":
    "1.0.0.0 dan 127.255.255.255 gacha",
  "Abonent tugunlari bu?":
    "foydalanuvchi terminal tizimlari o'rnatiladigan terminal nuqtalari",
  "Active Directory qaysi operatsion tizim oilasiga tegishli": "Windows Server",
  "ADSL texnologiyasi ma’lumotlarni chiqishida ma’lumotlarni uzatish tezligi ko‘rsatilgan javobni belgilang":
    "640 Kbit/s dan 1,5 Mbit/s gacha",
  "ADSL texnologiyasida qabul qilishda ma’lumotlarni uzatish tezligi ko‘rsatilgan javobni belgilang":
    "1,5 Mbit/s dan 8 Mbit/s gacha",
  "Agar biror bir server funksiyalarining bajarilishi kompyuterning asosiy vazifasi bo‘lsa unda bu kompyuter qanday ataladi?":
    "Ajratilgan server",
  "Aloqa liniyasi quyidagilarni ta'minlaydi":
    "axborot oqimlarini signal shaklida uzatish",
  "A-PON texnologiyasining asosiy protokoli qaysi?": "ATM",
  "ARPANET tarmog'i qachon tashkil qilingan?": "1969",
  "Asinxron ma'lumotlarni uzatish":
    "raqamli ma'lumotni uzatuvchidan qabul qiluvchiga ketma-ket interfeys orqali uzatish usuli, bunda ma'lumotlar istalgan vaqtda uzatiladi",
  "Asosiy tarmoq operatsion tizimlari keltirilgan qatorni ko’rsating":
    "Novell Netware 4.1, Microsoft Windows NT Server 4.0, UNIX",
  "Axborot va transport xizmatlarini qanday tizim ko’rsatadi?":
    "kompyuter tarmoqlari",
  "B sinf IP-adreslari qanday oraliqda bo`ladi?":
    "128.0.0.0 dan 191.255.255.255 gacha",
  "Bajaruvchi qurilma, boshqariladigan ob’ekt holatini o‘lchash uchun kelib tushgan signalga ta’sir bildiruvchi qurilma":
    "Aktuator",
  "Berilgan IP – adreslarning qaysi biri to’g’ri": "220.124.11.14",
  "Bir yoki bir nechta tarmoq segmentlari ichida kompyuter tarmog'ining bir nechta tugunlarini ulash uchun mo'ljallangan qurilma":
    "switch",
  "Biror korxona yoki tashkilotning ichida joylashgan kompyuter tarmog'i":
    "LAN",
  "Bitlarni uzatish qaysi satxda amalga oshiriladi": "Fizik",
  "Bitta klient ko‘plab serverlarga so‘rovlar jo‘natishi va murojaat qilishi mumkinmi?":
    "Ha, Bitta klient bir nechta serverlarga so‘rovlar jo‘natishi va murojaat qilishi mumkin",
  "Bog’langan tarmoq protokollari bo’lib, kompyuter tarmog’ida ma’lumotlarni uzatishni ta’minlab beradi":
    "Protokollar steki",
  "Bu elektron pochta xabarlarini TCP/IP tarmoqlari orqali uzatish uchun keng qo'llaniladigan tarmoq protokoli":
    "SMTP",
  "Bu protokol baland tezlikda ishlaydigan jarayonlarda, masalan, videokonferensialarda va tarmoqning maxsus xizmatlari uchun qo'llaniladi":
    "UDP",
  "Cisco Packet Tracer dasturida kompyuterni kommutator bilan ulanadigan qurilma bu":
    "straight kabel",
  "Cisco Packet Tracer dasturida modem qaysi qurilma orqali ulanadi?": "router",
  "Cisco Packet Tracer dasturida kompyuterlarni tarmoqqa ulash uchun nima zarur?":
    "Ethernet kabeli",
  "Cisco Packet Tracer dasturida qurilmalarga IP manzilni qayerda kiritiladi?":
    "desktop → IP Configuration",
  "Cisco Packet Tracer dasturida kommutator nima vazifani bajaradi?":
    "tarmoq qurilmalarini bog'laydi",
  "Cisco Packet Tracer dasturida router nima uchun ishlatiladi?":
    "tarmoqlar orasida marshrutlash",
  "Cisco Packet Tracer dasturida ping buyrug‘i nima uchun ishlatiladi?":
    "tarmoq ulanishini tekshirish",
  "Cisco Packet Tracer dasturida straight kabel nima uchun ishlatiladi?":
    "turli qurilmalarni ulash uchun",
  "Cisco Packet Tracer dasturida crossover kabel nima uchun ishlatiladi?":
    "bir xil turdagi qurilmalarni ulash uchun",
  "DNS nima vazifani bajaradi?": "domen nomini IP manzilga o‘zgartiradi",
  "DHCP nima qiladi?": "IP manzillarni avtomatik taqsimlaydi",
  "IP manzil nima?": "tarmoqdagi qurilmaning noyob manzili",
  "MAC manzil nima?": "tarmoq adapterining noyob apparat manzili",
  "OSI modeli nechta qatlamdan iborat?": "7 ta",
  "OSI modelida 3-qavat qanday nomlanadi?": "Tarmoq (Network)",
  "OSI modelida 4-qavat qanday nomlanadi?": "Transport",
  "OSI modelida eng pastki qatlam bu?": "Fizik qatlam",
  "OSI modelida eng yuqori qatlam bu?": "Ilova (Application)",
  "Router qanday qatlamda ishlaydi?": "Tarmoq qatlamida",
  "Switch qanday qatlamda ishlaydi?": "Kanal (Data Link) qatlamida",
  "OSI modelida 1-qavat nomi?": "Fizik qatlam",
  "OSI modelida 2-qavat nomi?": "Kanal (Data Link)",
  "TCP protokoli qanday vazifa bajaradi?":
    "ulanishni boshqarish va ma'lumotlarni uzatish",
  "UDP protokoli qanday vazifa bajaradi?": "ulanishsiz ma'lumot uzatish",
  "IP manzillar qanday formatda bo'ladi?": "IPv4 va IPv6 formatida",
  "IPv4 manzillar uzunligi necha bit?": "32 bit",
  "IPv6 manzillar uzunligi necha bit?": "128 bit",
  "MAC manzil qayerda ishlatiladi?": "tarmoq adapteri darajasida",
  "DNS qanday xizmat ko‘rsatadi?": "domen nomlarini IP manzillarga aylantiradi",
  "HTTP protokoli nima uchun ishlatiladi?": "veb sahifalarni uzatish uchun",
  "HTTPS protokoli nima uchun ishlatiladi?": "xavfsiz veb aloqa uchun",
  "FTP nima vazifani bajaradi?": "fayllarni uzatish uchun",
  "SMTP protokoli nima uchun ishlatiladi?": "elektron pochta jo'natish uchun",
  "POP3 protokoli nima uchun ishlatiladi?":
    "elektron pochtani qabul qilish uchun",
  "IMAP protokoli nima uchun ishlatiladi?":
    "elektron pochtani boshqarish uchun",
  "Tarmoqdagi IP manzilni qanday aniqlash mumkin?":
    "ipconfig yoki ifconfig buyruqlari orqali",
  "MAC manzil qanday formatda bo'ladi?":
    "16 lik sanoq sistemasida, 6 juft raqamlar",
  "Router qanday vazifani bajaradi?":
    "tarmoqlar orasida ma'lumotlarni marshrutlash",
  "Switch qanday vazifani bajaradi?":
    "ma'lumotlarni tarmoq segmentlari o'rtasida uzatadi",
  "Hub nima vazifa bajaradi?": "ma'lumotlarni barcha portlarga yuboradi",
  "Firewall nima vazifa bajaradi?": "tarmoq xavfsizligini ta'minlaydi",
  "VPN nima?": "xavfsiz virtual tarmoq ulanishi",
  "Subnet mask nima uchun kerak?": "tarmoq va host qismini ajratish uchun",
  "Gateway nima?": "tarmoqdan tashqariga chiqish uchun yo'l ko'rsatkich",
  "Proxy server nima vazifani bajaradi?":
    "so'rovlarni oraliq server sifatida boshqaradi",
  "Wi-Fi tarmoqlari qanday standartlarga ega?": "802.11 a/b/g/n/ac/ax",
  "MAC manzil qanday aniqlanadi?":
    "har bir tarmoq adapterida unik kod sifatida",
  "DHCP server qanday ishlaydi?": "IP manzillarni avtomatik taqsimlaydi",
  "OSI modelining 5-qavati nima?": "Sessiya (Session)",
  "OSI modelining 6-qavati nima?": "Taqdimot (Presentation)",
  "OSI modelining 7-qavati nima?": "Ilova (Application)",
  "OSI modelida ma'lumotlarni paketlarga bo'luvchi qatlam?": "Tarmoq (Network)",
  "OSI modelida ma'lumotlarni segmentlarga bo'luvchi qatlam?": "Transport",
  "Tarmoqda collision nima?": "ma'lumot to'qnashuvi",
  "Tarmoqda bandwidth nima?": "ma'lumot uzatish tezligi",
  "Ping buyruq qanday ishlaydi?": "ICMP xabari yuboradi va javobni kutadi",
  "Traceroute nima uchun ishlatiladi?": "tarmoq yo'nalishini aniqlash uchun",
  "DNS server qayerda joylashgan?":
    "Internetda domen nomlarini boshqaruvchi serverlarda",
  "IP manzil qanday formatda yoziladi?":
    "to‘rt oktet ko‘rinishida, masalan 192.168.0.1",
  "TCP/IP modeli nechta qatlamdan iborat?": "4 ta qatlam",
  "TCP/IP modelining eng yuqori qavati?": "Ilova (Application)",
  "TCP/IP modelining pastki qavati?": "Jismoniy (Network Interface)",
  "MAC manzil va IP manzil orasidagi farq nima?":
    "MAC apparat manzili, IP esa mantiqiy manzil",
  "OSI modelida transport qatlamining vazifasi nima?":
    "ma'lumotlarni uzatish va boshqarish",
  "Qo'shimcha savol: Tarmoqda NAT nima?":
    "Ichki IP manzillarni tashqi manzillarga o‘zgartirish",
  "Qo'shimcha savol: VLAN nima?": "virtual tarmoq segmentlari",
  "Qo'shimcha savol: QoS nima?": "trafikni boshqarish va ustuvorlik berish",
  "Qo'shimcha savol: Tarmoqda ARP nima?":
    "IP manzilni MAC manzilga aylantirish",
  "Qo'shimcha savol: ICMP nima?": "tarmoq nazorat protokoli",
  "Qo'shimcha savol: Tarmoqda bandwidth va throughput orasidagi farq?":
    "bandwidth - maksimal tezlik, throughput - haqiqiy tezlik",
  "Qo'shimcha savol: SSL va TLS o'rtasidagi farq?":
    "TLS - SSL ning yangilangan xavfsiz versiyasi",
  "Qo'shimcha savol: Tarmoqda port nima?": "ma'lumot uzatish uchun manzil",
  "Qo'shimcha savol: IPv4 va IPv6 farqi?":
    "IPv6 uzunroq va ko'proq manzil beradi",
  "Qo'shimcha savol: Tarmoqda NAT qanday ishlaydi?":
    "ichki manzillarni global manzillarga o'zgartiradi",
  "Qo'shimcha savol: Tarmoqda subnetting nima?":
    "katta tarmoqni kichik tarmoqlarga bo'lish",
  "Qo'shimcha savol: Tarmoqda gateway vazifasi nima?":
    "tarmoqlar orasida ma'lumot o'tkazadi",
  "Qo'shimcha savol: Tarmoqda DHCP serverining afzalligi?":
    "IP manzillarni avtomatik taqsimlash",
  "Qo'shimcha savol: Tarmoqda firewall qanday ishlaydi?":
    "trafikni filtrlash orqali xavfsizlikni ta'minlash",
  "Qo'shimcha savol: Tarmoqda IDS va IPS farqi?":
    "IDS – xujumni aniqlaydi, IPS – oldini oladi",
  "Qo'shimcha savol: Tarmoqda ping va traceroute farqi?":
    "ping ulanishni tekshiradi, traceroute yo'nalishni ko'rsatadi",
  "Qo'shimcha savol: VPN qanday ishlaydi?": "xavfsiz tunnel yaratadi",
  "Qo'shimcha savol: Tarmoqda proxy server vazifasi?":
    "so'rovlarni oraliqdan boshqaradi",
  "Qo'shimcha savol: OSI modeli va TCP/IP modeli farqi?":
    "OSI 7 qatlam, TCP/IP 4 qatlam",
  "Qo'shimcha savol: Switch va Hub farqi?":
    "Switch aniq portga yuboradi, Hub barcha portlarga",
  "Qo'shimcha savol: Router va Switch o'rtasidagi farq?":
    "Router tarmoqlar orasini bog'laydi, Switch segmentlarni",
  "Qo'shimcha savol: DHCP leasing muddati nima?":
    "IP manzilni ijaraga olish vaqti",
  "Qo'shimcha savol: IP manzilni qanday aniqlash mumkin?":
    "komanda qatori buyruqlari orqali",
  "Qo'shimcha savol: MAC manzilni qanday o'zgartirish mumkin?":
    "spoofing yordamida",
  "Qo'shimcha savol: Tarmoqda QoS nima uchun kerak?":
    "muayyan trafikga ustuvorlik berish",
  "Qo'shimcha savol: OSI modelida taqdimot qavati vazifasi?":
    "ma'lumotlarni formatlash va shifrlash",
  "Qo'shimcha savol: Tarmoqda collision domain nima?":
    "collision yuz beradigan segment",
  "Qo'shimcha savol: Broadcast domain nima?":
    "broadcast signallar tarqaladigan segment",
  "Qo'shimcha savol: TCP va UDP farqi?":
    "TCP ulanishni boshqaradi, UDP boshqarmaydi",
  "Qo'shimcha savol: IPv6 manzili qanday ko'rinishda?":
    "16 baytdan iborat va 8 guruhda yoziladi",
  "Qo'shimcha savol: Subnet mask qachon ishlatiladi?":
    "tarmoqni kichik qismlarga bo'lishda",
  "Qo'shimcha savol: Firewall qanday turlari mavjud?":
    "tarmoq, dasturiy va apparatli",
  "Qo'shimcha savol: VLAN qanday afzallik beradi?":
    "tarmoqlarni ajratish va xavfsizlik",
  "Qo'shimcha savol: ARP so'rovi nima?": "IP dan MAC manzilni topish so'rovi",
  "Qo'shimcha savol: ICMP qanday maqsadda ishlatiladi?":
    "tarmoq xatoliklari va xabarnomalar uchun",
  "Qo'shimcha savol: NAT turlari qanday?":
    "statik, dinamik, PAT (port translation)",
  "Qo'shimcha savol: DHCP qanday IP taqsimlaydi?": "dinamik IP manzillar",
  "Qo'shimcha savol: OSI modelida session qavatining vazifasi?":
    "sessiyalarni boshqarish",
  "Qo'shimcha savol: Transport qavatining vazifasi?":
    "ma'lumotlarni ishonchli yetkazish",
  "Qo'shimcha savol: Application qavatining vazifasi?":
    "foydalanuvchi dasturlari bilan aloqa",
  "Qo'shimcha savol: Tarmoqda ping qachon ishlatiladi?":
    "tarmoq ulanishini tekshirishda",
  "Qo'shimcha savol: Router konfiguratsiyasi qayerda qilinadi?":
    "CLI yoki veb interfeysda",
  "Qo'shimcha savol: Switch konfiguratsiyasi qanday?":
    "CLI yoki veb interfeysda",
  "Qo'shimcha savol: MAC adresni qanday aniqlash mumkin?":
    "ipconfig /all buyruq bilan",
  "Qo'shimcha savol: DHCP qanday portlarda ishlaydi?": "67 va 68 portlarda",
  "Qo'shimcha savol: HTTP va HTTPS farqi?":
    "HTTPS xavfsiz ulanishni ta'minlaydi",
  "Qo'shimcha savol: VPN qanday protokollardan foydalanadi?":
    "IPSec, SSL, PPTP va boshqalar",
  "“Hub”larning asosiy turlari:": "aqlli, passiv",
  "… - bu aniq vaqt serverlari bilan ishlash protokoli": "NTP",
  "… - bu bitta jismoniy tarmoq interfeysida (Ethernet, Wi-Fi) bir nechta virtual lokal tarmoq yaratish imkonini beradi":
    "VLAN",
  "… - internet tarmog'ida ma'lumotlarni bulutli texnologiyalar asosida saqlash xizmatini ko'rsatadi":
    "Google Drive",
  "… - tarmoqqa ulangan qurilmalarga avtomatik ravishda dinamik IP manzillarni beruvchi protokol":
    "DHCP",
  "… bu model iste’molchiga axborot texnologiyalarini servis sifatida internet orqali namoyon qiladi":
    "Bulutli texnologiyalar",
  "… orqali kompyuterdagi fayllarning butunligini tekshirish mumkin":
    "Xeshlash algoritmlari",
  "… bu – mantiqiy bog'lanish tuguni hisoblanib, ular yordamida mantiqiy kerakli protokolga bog'lanish hosil qilinadi":
    "port",
  "0.XXX.XXX.XXX — 127.XXX.XXX.XXX bu Ipv4 ning qaysi sinfi?": "A",
  "10GEthernet tarmog‘ida ma’lumotlarni maksimal uzatish tezligi qanday.":
    "10 Mbit/s",
  "128.0.XXX.XXX — 191.255.XXX.XXX bu Ipv4 ning qaysi sinfi?": "B",
  "192.0.0.XXX — 223.255.255.XXX bu Ipv4 ning qaysi sinfi?": "C",
  "2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d ushbu yozuv nimani anglatadi?":
    "IPv6 avlodga tegishli bo'lgan IP manzil",
  "224.XXX.XXX.XXX — 239.XXX.XXX.XXX bu Ipv4 ning qaysi sinfi?": "D",
  "240.XXX.XXX.XXX — 255.XXX.XXX.XXX. bu Ipv4 ning qaysi sinfi?": "E",
  "802 qo'mitasi qanday tarkibiy qismlarni o'z ichiga oladi?":
    "LLC, Simsiz tarmoqlar, Internetda ishlash",
  "A sinf IP-adreslari qanday oraliqda bo`ladi?":
    "1.0.0.0 dan127.255.255.255 gacha",
  "Abonent tugunlari bu?":
    "foydalanuvchi terminal tizimlari o'rnatiladigan terminal nuqtalari",
  "Active Directory qaysi operatsion tizim oilasiga tegishli": "Windows Server",
  "ADSL texnologiyasi ma’lumotlarni chiqishida ma’lumotlarni uzatish tezligi ko‘rsatilgan javobni belgilang.":
    "640 Kbit/s dan 1,5 Mbit/s gacha",
  "ADSL texnologiyasida qabul qilishda ma’lumotlarni uzatish tezligi ko‘rsatilgan javobni belgilang.":
    "1,5 Mbit/s dan 8 Mbit/s gacha",
  "Agar biror bir server funksiyalarining bajarilishi kompyuterning asosiy vazifasi bo‘lsa unda bu kompyuter qanday ataladi?":
    "Ajratilgan server.",
  "Aloqa liniyasi quyidagilarni ta'minlaydi:":
    "axborot oqimlarini signal shaklida uzatish",
  "A-PON texnologiyasining asosiy protokoli qaysi?": "ATM",
  "ARPANET tarmog'i qachon tashkil qilingan?": "1969",
  "Asinxron ma'lumotlarni uzatish-":
    "raqamli ma'lumotni uzatuvchidan qabul qiluvchiga ketma-ket interfeys orqali uzatish usuli, bunda ma'lumotlar istalgan vaqtda uzatiladi.",
  "Asosiy tarmoq operatsion tizimlari keltirilgan qatorni ko’rsating.":
    "Novell Netware 4.1, Microsoft Windows NT Server 4.0, UNIX.",
  "Axborot va transport xizmatlarini qanday tizim ko’rsatadi?":
    "kompyuter tarmoqlari",
  "B sinf IP-adreslari qanday oraliqda bo`ladi?":
    "128.0.0.0 dan 191.255.255.255 gacha",
  "Bajaruvchi qurilma, boshqariladigan ob’ekt holatini o‘lchash uchun kelib tushgan signalga ta’sir bildiruvchi, bajaruvchi qurilma.":
    "Aktuator",
  "Berilgan IP – adreslarning qaysi biri to’g’ri. 1)124.256.14.023 2)101.012.252.257 3)220.124.11.14 4)192.168.10.325":
    "Uchinchisi to`g`ri tuzilgan",
  "Bir yoki bir nechta tarmoq segmentlari ichida kompyuter tarmog'ining bir nechta tugunlarini ulash uchun mo'ljallangan qurilma.":
    "switch",
  "Biror korxona yoki tashkilotning ichida joylashgan kompyuter tarmog'i":
    "LAN",
  "Bitlarni uzatish qaysi satxda amalga oshiriladi.": "Fizik",

  "Bitta klient ko‘plab serverlarga so‘rovlar jo‘natishi va murojaat qilishi mumkinmi?":
    "Ha, Bitta klient bir nechta serverlarga so‘rovlar jo‘natishi va murojaat qilishi mumkin",
  "…-bog’langan tarmoq protokollari bo’lib, kompyuter tarmog’ida ma’lumotlarni uzatishni ta’minlab beradi.":
    "Protokollar steki",
  "Bu elektron pochta xabarlarini TCP / IP tarmoqlari orqali uzatish uchun keng qo'llaniladigan tarmoq protokoli.":
    "SMTP",
  "Bu protokol baland tezlikda ishlaydigan jarayonlarda, masalan, videokonferensialarda va tarmoqning maxsus xizmatlari uchun qo'llaniladi?":
    "UDP",
  "Bu protokol-yuqori oqim protokoli uchun xabarlarni etkazib berish kafolatlarini ta'minlamaydi va yuborilgan xabarlarning holatini saqlamaydi.":
    "UDP",
  "Bu protokol-yuqori oqim protokoli uchun xabarlarni etkazib berish kafolatlarini ta'minlaydi va yuborilgan xabarlarning holatini saqlaydi.":
    "TCP",
  "Bugungi kunda Internet ashyolari bilan bog'liq bo'lgan barcha narsalar qanday umumiy nom bilan ataladi?":
    "bog’langan ashyolar (Connected Things).",
  "Bulutli ma'lumotlar markazlari (Data Center) va odatda IoT ning bir qismi bo'lgan sensorlar va qurilmalar o'rtasidagi oraliq taqsimlangan hisoblash tushunchasi qanday ataladi?":
    "tumanli hisoblash",
  "Bunday tarmoqlarning sensor tugunlari nafaqat olingan ma'lumotlarni vaqti-vaqti bilan yuboribgina qolmay, balki qiymatlarning keskin o'zgarishiga ham munosabat bildiradi.":
    "Gibrid tarmoqlar",
  "C sinf IP-adreslari qanday oraliqda bo`ladi?":
    "192.0.0.0 dan 223.255.255.255 gacha",
  "CDMA-2000 standarti qanday tarmoq turiga tegishli.": "simsiz tarmoq",
  "Cisco Packet Tracer - bu…":
    "Cisco Systems tomonidan ishlab chiqarilgan ma'lumotlar tarmog'i",
  "Cisco Packet Tracer 6.2 da oynalar to'g'ri keltirilgan qator":
    "file, edit, view, help, tools",
  "Cisco Packet Tracer 6.2 dasturida global tarmoq emulatsiyasi uchun qaysi yorliqdan foydalaniladi":
    "Wan Emulation",
  "Cisco Packet Tracer 6.2 dasturida kompyuterlar orasidagi aloqani tekshirish uchun qaysi komanda ishlatiladi":
    "ping adres",
  "Cisco Packet Tracer 6.2 dasturida qaysi rejim tarmoqning normal ishlashini modellashtiradi, bu vaqt xususiyatlari bo'yicha haqiqiy uskunalarning ishlashiga o'xshashdir.":
    "Realtime",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmada kod yozishni boshlash qaysi kalit so`z orqali amalga oshiriladi":
    "enable",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmada VLAN kompyuterni switch portiga bog'lash kodi":
    "switchport mode access",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmada VLAN larni ko'rish kodi":
    "show vlan brief",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmada VLAN switch bilan SWITCH portiga bog'lash kodi":
    "switchport mode trunk",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmalarini bog'lovcha kabel turi":
    "serial DCE",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmani sozlovchi port nomi":
    "console",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmani yoqish kodi": "enable",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida IP adress kiritish kodi to'g'ri berilgan javobni toping":
    "ip address 192.168.1.1 255.255.255.0",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida portlariga IP adress berish bo'limi":
    "interface",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida RIP ga tarmoq qo'shish kodi to'g'ri berilgan javobni toping":
    "network 192.168.1.0",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida SERIAL porti nechta bo'ladi":
    "4",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida SERIAL porti orqali qanday qurilmalarga bog'lanadi":
    "routerga",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasida VLAN o'chirish":
    "deleting VLAN",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasini kod yozish bo'limi":
    "CLI",
  "Cisco Packet Tracer 6.2 dasturida ROUTER qurilmasini nomini o'zgartirish bo'limi":
    "global",
  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmada fastEthernet 0/1 interfeysni sozlashga o'tish kodi":
    "Switch(config)#interface fastEthernet 0/1",

  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmada global konfiguratsiya rejimiga o'tkazish kodi":
    "Switch#configure terminal",
  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmasi nterfeysida marshrutizatsyani yoqish kodi":
    "Switch(config)#ip routing",
  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmasi portini router rejimiga o'tkazish kodi":
    "Switch(config-if)#no switchport",
  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmasiga IP adres berish kodi":
    "Switch(config-if)#ip address 192.168.1.1 255.255.255.0",
  "Cisco Packet Tracer 6.2 dasturida SWITCH qurilmasini aktiv rejimiga o'tkazish kodi":
    "enable",
  "Cisco Packet Tracer 6.2 dasturida tarmoq xavfsizligi muammolarini bartaraf etishda qaysi protocoldan foydalaniladi":
    "ACL",
  "Cisco Packet Tracer 6.2 dasturida tarmoqsiz ROUTERda DHCP service yoqilgan bo'lsa …":
    "router avtomatik tarzda IP adreslarni qabul qiladi",
  "Concept Draw Pro - bu nima?":
    "tarmog'ini diagrammasini tuzish uchun kuchli biznes vosita",

  "Dasturlar va jarayonlarning turli xil mashinalardagi o'zaro ta'sirini ta'minlash mexanizmini ta'minlaydigan protokollar asosida quyidagilar qurilgan":
    "gorizontal model",
  "DDoS kengaytmasini aniqlang": "Distributed Denial of Service",
  "Deykstr algoritmidan foydalanib, eng qisqa yo'lni topishda bog'lanish holatini kuzatish texnologiyasiga asoslangan dinamik marshrutlash protokoli":
    "OSPF",
  "DHCP kengaytmasini aniqlang": "Dynamic Host Configuration Protocol",
  "Dinamik marshrutlash protokoli. Tashqi shlyuzni yo'naltirish protokollari sinfiga tegishli":
    "BGP",
  "Diykstr algoritmi qaysi protokollarda ishlatiladi":
    "paketlarni marshrutlash protokollarida",
  "DNS keygaytmasini aniqlang": "Domain Name System",
  "Domen nomlari va IP manzillarni boshqaruvchi xalqaro korporatsiyasini aniqlang":
    "ICANN",
  "Domenlar haqida ma'lumot beruvchi taqsimlangan kompyuter tizimi": "DNS",
  "Egallagan hududi bo'yicha ko'plab kompyuter tarmoqlarini o'z ichiga olgan tarmoq":
    "WAN",
  "E-PON texnologiyasining asosiy protokoli qaysi?": "Ethernet",
  "Ethernet qanday topologiyani qo'llab-quvvatlaydi": "shinalar",
  "Ethernet qaysi kanalga kirish usulidan foydalanadi":
    "Tashuvchini sezish to'qnashuvini aniqlash",
  "Ethernet texnologiyasi IEEE standarti bilan belgilanadi": "802.3",
  "Ethernet texnologiyasidagi MTU kengaytmasini aniqlang":
    "Maximum Transmission Unit",
  "Ethernet tarmog'iga qaysi kompaniya va qachon asos solgan?": "Xerox (1972)",
  "Faqat amaliy harakatlarni bajaradi (ma'lumot to'plash va masofadan turib ob'ektni boshqarish) va ma'lumotlarni retranslyatsiya qilmaydi":
    "Terminal qurilma",
  "Fast Ethernet tarmog‘ida ma’lumotlarni maksimal uzatish tezligi qanday":
    "100 Mbit/s.",
  "FastEthernet port tezligi qanday birlikda o'lchanadi?": "Mbit / s",
  "Fayllar va printerlarga masofadan kirish uchun foydalaniladigan tarmoq protokolini ko'rsating":
    "SMB",
  "FTP protokoli bu-": "fayllar yborish protokoli",
  "Funksional imkoniyatlari jihatidan TELNET va RLOGIN protokollariga o'xshash, lekin barcha trafikni shifrlovchi protokolni ko'rsating":
    "SSH",
  "GAF (Geographic Adaptive Fidelity), GEAR (Geographic and Energy Aware Routing) - ...":
    "tugunning joylashuv o‘rni haqidagi ma’lumot asosidagi marshrutizatsiya protokollari",
  "Global kompyuter tarmog'i":
    "Uzoq masofalarda joylashgan va aloqa kanallari yordamida yagona tizimga ulangan mahalliy tarmoqlar va kompyuterlar to'plami",
  "Global muvofiqlashtirishni, tarmoq parametrlarini tashkillashtirish va o'rnatishni amalga oshiradi, SST ning eng murakkab qurilmasi bo’lib, katta hajmdagi xotirani va eng katta quvvat manbasini talab qiladi":
    "Koordinator",
  "Global tarmoq?": "WAN",
  "G-PON teskari oqimi(abonentdan ulanish tuguniga)ni tezligi keltirilgan javobni belgilang":
    "155 Mbit/s, 622 Mbit/s va 1,244 Gbit",
  "G-PON texnologiyasining asosiy protokoli qaysi?": "SDH",
  "G-PON to‘g‘ri oqimi(ulanish tugunidan abonentga)ni tezligi keltirilgan javobni belgilang":
    "1,244 Gbit/s - 2,488 Gbit",
  "Halqaro standart ISO 11801 sertifikatiga ega va ma'lumot uzatish tezligi 10 Gigabit sekundgacha bo'lgan kabel kategoriyasini aniqlang":
    "CAT7",
  "Haqiqiy fizik ob’ektdan olingan ma’lumotga javobni berish maqsadida, ma’lumotni qayta ishlash, uzatish, etkazib berish va so‘rovlar olish uchun boshqa tarmoqlar bilan, o‘z aro hamkorlik qiluvchi, tarmoqlangan tugunlar tizimi":
    "Sensor tarmoq",
  "HTTP protokoli bu-": "gippermatn yuvorish protokoli",
  "HTTP protokoli uchun standart portni ko'rsating": "80",
  "HTTPS protokoli uchun standart portni ko'rsating": "443",
  "Hub OSI modelining qaysi pog'onasida ishlaydi?": "fizik",
  "IDSL ( raqamli abonent liniyasi ) texnologiyasi ma’lumotlarni uzatish tezligi ko‘rsatilgan javobni belgilang":
    "144 Kbit/s",
  "IEEE 802.03 stardanti asosida tashkil qilingan tarmoq abonentlarining maksimal soni":
    "1024 tagacha",
  "IEEE 802.03 stardanti asosida tashkil qilingan tarmoq bir qismidagi abonentlarning maksimal soni":
    "100 tagacha",
  "IEEE 802.11 standarti asosida tarmoq qanday nomlanadi": "Wi-Fi",

  "IEEE 802.11 standarti qanday tarmoq turiga tegishli": "Simsiz lokal tarmoq",
  "IEEE 802.15 standarti": "Bluetooth",
  "IEEE 802.16 standarti qaysi tarmoqga tegishli": "WiMAX",
  "Impuls kodli modulyatsiy bajarilishning ketma-ketligi to`g`ri javobni ko`rsting":
    "diskretlash, kvantlash, kodlash",
  "Internet tarmog'ini hosil bo'lishiga sababchi bo'lgan tarmoq nomi qaysi javobda berilgan?":
    "ARPANET",
  "Internetga ulangan kompyuterda albatta nima bo'lishi kerak": "IP-manzil",

  "Internet tarmog‘ida domen nomlarini IP manzillarga aylantirish vazifasini bajaruvchi protokol":
    "DNS",
  "Internetda xavfsizlikni ta’minlash uchun ma’lumotlarni shifrlash va autentifikatsiya qilish protokoli":
    "SSL/TLS",
  "IP manzillarni avtomatik tarzda taqsimlash va boshqarish protokoli": "DHCP",
  "IP manzillarni paketlarga joylashtirish va ularni tarmoq bo‘ylab uzatish uchun asosiy protokol":
    "IP",
  "IP paketlarini marshrutlash uchun ishlatiladigan dinamik marshrutlash protokoli":
    "OSPF",
  "Kengaytirilgan Internet xavfsizlik protokoli, VPN va tarmoqlararo xavfsizlikni ta’minlaydi":
    "IPSec",
  "Kompyuter tarmoqlarida portlarni boshqarish va ularga kirishni nazorat qilish uchun ishlatiladigan vosita":
    "Firewall",
  "Kompyuter tarmoqlarida paketlarni manzilga yetkazishda marshrutlashni ta’minlovchi qurilma":
    "Router",
  "Kompyuter tarmoqlarida bir tarmoq ichida qurilmalarni ulash uchun mo‘ljallangan qurilma":
    "Switch",
  "Kompyuter tarmoqlarida bir nechta qurilmalarni birgalikda bog‘laydigan qurilma":
    "Hub",
  "Kengaytirilgan kabel tarmoqlarida ishlatiladigan optik tolali tarmoq texnologiyasi":
    "Fiber Optic",
  "Kompyuter tarmog‘ida signallarni uzatish uchun ishlatiladigan eng oddiy qism":
    "Kabel",
  "Kompyuter tarmog‘ida fizik qatlam vazifalarini bajaruvchi standart":
    "IEEE 802.3",
  "Kompyuter tarmog‘ida simsiz tarmoq qurilmalari uchun standart":
    "IEEE 802.11",
  "Kompyuter tarmog‘ida simsiz shaxsiy tarmoq standartlari":
    "Bluetooth (IEEE 802.15)",
  "LAN va WAN tarmoqlari orasidagi farq":
    "LAN mahalliy hududda, WAN esa keng hududda ishlaydi",
  "Ma’lumotlarni tarmoq orqali uzatishda xatoliklarni aniqlash va tuzatish uchun ishlatiladigan kodlar":
    "CRC (Cyclic Redundancy Check)",
  "Ma’lumotlarni tarmoq orqali uzatish vaqtida signal kuchini oshirish uchun ishlatiladigan qurilma":
    "Repeater",
  "Modem nima uchun ishlatiladi":
    "Analog signalni raqamli signallarga va aksincha aylantirish uchun",
  "NAT (Network Address Translation) nima vazifani bajaradi":
    "Ichki tarmoq manzillarini tashqi manzillarga o‘zgartirish",
  "OSI modelining nechta qatlamdan tashkil topgan": "7 qatlam",
  "OSI modelining eng pastki qatlami": "Fizik qatlam",
  "OSI modelining eng yuqori qatlami": "Ilova qatlami",
  "Ping komandasi nima uchun ishlatiladi":
    "Tarmoqdagi qurilmaning mavjudligini tekshirish",
  "QoS (Quality of Service) tarmoqda nima vazifa bajaradi":
    "Ma’lumot uzatish sifati va ustuvorligini ta’minlash",
  "Routing jadvali nima uchun ishlatiladi":
    "Ma’lumot paketlarini eng optimal marshrut bo‘ylab yo‘naltirish",
  "Subnetting nima maqsadda ishlatiladi":
    "Tarmoqni kichikroq subnetlarga bo‘lish uchun",
  "TCP protokolining asosiy vazifasi":
    "Ma’lumotlarni ishonchli yetkazib berishni ta’minlash",
  "UDP protokolining asosiy vazifasi":
    "Tezkor, lekin kafolatlanmagan ma’lumot uzatish",
  "VPN (Virtual Private Network) nima vazifani bajaradi":
    "Internet orqali xavfsiz va shifrlangan ulanish ta’minlash",
  "Wi-Fi tarmog‘ida xavfsizlikni ta’minlash uchun ishlatiladigan protokol":
    "WPA2/WPA3",
  "Yangi IP manzillar formatining nomi": "IPv6",
  "Zamonaviy internet protokollari asosida ishlaydigan telefon aloqa tizimi":
    "VoIP (Voice over IP)",

  "Low Power Wide Area (LPWAN) keng qamrovli kam quvvatli tarmoqlar texnologiyalari":
    "SigFox, Symphony Link, Nwave, Ingenu (RPMA), Weightless, LoRa",
  "Ma’lumotlar kadri lokal tarmoqning qaysi satxida shakllanadi": "Kanal",
  "Ma’lumotlarni fizik kodlash usuli tarmoqning qaysi satxida bajariladi":
    "Fizik",
  "MAC adres orqali IP ni aniqlashda ishlatiladigan protokol": "ARP",
  "MAC kengaytmasini aniqlang": "Media Access Control",
  "Ma'lumot uzatish paytida yuzaga kelgan xatolar va boshqa istisno holatlar to'g'risida xabarlarni yuborish uchun asosan foydalaniladigan protokol":
    "ICMP",
  "Ma'lumotlar paketlarini tarmoqlar o'rtasida yo'naltirish uchun yo'riqnoma qaysi funktsiyalardan foydalanadi":
    "Kompyuter tarmog'idagi yo'l va kommutatsiyani aniqlash",
  "Ma'lumotlar uzatilishini boshqarish uchun mo'ljallangan internetning asosiy ma'lumotlarni uzatish protokollaridan biri":
    "TCP",
  "Ma'lumotlarning qayta ishlanishini va tugularning harakatlanishini ta’minlaydi va MSU mikrokontrollerdan iborat tarkibga protsessor, SRAM operativi, energiyadan mustaqil bo‘lgan EEPROM, flesh-xotira, ADC analog-raqamli o‘zgartirgich, taymer, kiritish/chiqarish portlari kiradi":
    "hisoblash tizimi",
  "MAN qanday tarmoq turiga kiradi": "Shaxar tarmog‘i",
  "Mantiqiy ulanishni boshqarish va atrof-muhitga kirishni boshqarish qaysi darajani ta'minlaydi":
    "kanal",
  "Marker usuli lokal tarmoqning qanday topologiyasida ishlatilmaydi":
    "Yacheykali",
  "Marker usuli lokal tarmoqning qanday topologiyasida ishlatiladi": "Shina",
  "Marshrutizator qanday satxlarni o‘z ichiga oladi": "Tarmoq",
  "Marshrutlash algoritmlari asosida ma'lumotlarni uzatishning maqbul yo'nalishini topish uchun qanday qurilmalardan foydalaniladi":
    "marshrutizatorlar",
  "Masofalari 200 kilometrgacha bo'lgan mahalliy tarmoqlar uchun 1980-yillarning ma'lumotlarni uzatish standarti, optik-tolali uzatish liniyalaridan foydalaniladi, 100 Mbit/s gacha tezlik ta'minlanadi":
    "FDDI",
  "Masofali vektor algoritmi qaysi protokolda ishlatiladi": "RIP",
  "Matnli terminal interfeysini tarmoq orqali amalga oshirish uchun foydalaniladigan tarmoq protokoli":
    "TELNET",
  "Mintaqaviy tarmoq": "MAN",
  "NAT kengaytmasini aniqlang": "Network Address Translation",
  "Nazorat ta’sirini (yorug‘lik, bosim, temperatura va hokazo) qabul qiluvchi, qurilma, uning sonli va sifat belgilarini o‘lchaydi va ushbu o‘lchamlarni signalga o‘zgartiradi. Signal elektrik, kimyoviy yoki boshqa turda bo‘lishi mumkin":
    "Sensor",
  "Netware 4.1 qanday xavfsizlik talablariga javob beradi": "S2 sinf",
  "NGN tarmog'ining funksional modeli qanday darajalardan tashkil topadi":
    "xizmatlarni boshqarish darajasi; kommutatsiyani boshqarish darajasi; transport darajasi; kirish darajasi",
  "Noto'g'ri ta'rifni aniqlang":
    "Switch manba portidan tashqari barcha portlarga paketlarni yuboradi",
  "Ob'ekt (dastur) interfeyslari turlari":
    "dastur protokoli, dastur dasturi, o'rta dastur protokoli",
  "Ommabop tarmoq protokollari": "DDP, IP, IPX, NetBEUI",
  "ONT (optical network terminal) vazifasi nimadan iborat":
    "Ma’lumotlarni OLT (optical line terminal) qabul qilib, ularni konvertlaydi va UNI (user network interfaces) abonent interfeyslari orqali uzatadi",
  "Open System Interconnection (OSI) modeli nechta pog'onadan iborat": "7",
  "Oraliq dasturiy ta’minot":
    "tarmoqdagi tarmoq ma'muriyati funktsiyalarini amalga oshiradi",
  "OSI modeli 1-pog'onasi nomi": "fizik",
  "OSI modeli 2-pog'onasi nomi": "kanal",
  "OSI modeli 3-pog'onasi nomi": "tarmoq",
  "OSI modeli 4-pog'onasi nomi": "transport",
  "OSI modeli 5-pog'onasi nomi": "seans",
  "OSI modeli 6-pog'onasi nomi": "taqdim etish",
  "OSI modeli 7-pog'onasi nomi": "amaliy",
  "OSI modeli nechta pog'onadan tashkil topgan": "7",
  "OSI modelining amaliy pog'onasida ma'lumotlar qay xolda bo’ladi":
    "ma'lumotlar",
  "OSI modelining amaliy pog'onasida qaysi protokollar ishlatiladi":
    "HTTP, FTP, SMTP",
  "OSI modelining asosiy elementlari":
    "pog’onalari, ilovalari va jismoniy ulanish",

  "OSI modelining fizik pog’ona tushunchalarini sanab o'tadigan javob":
    "o'ralgan juftlik kabeli, koaksiyal kabel, optik tolali kabel, raqamli kanal, havo",
  "OSI modelining fizik pog'onasida ma'lumotlar qay xolda buladi": "bitlar",
  "OSI modelining transport pog'onasida ma'lumotlar qay xolda buladi?":
    "bloklar",
  "OSI modelining transport pog'onasida qaysi protokollar ishlatiladi?":
    "TCP, UDP",
  "OSI ning nechanchi bosqichi foydalanuvchining ilovasini shaxsan tasdiqlaydi, fayllar uzatishning dasturiy vositalari axborot bazasiga ega bo’lish, elektron pochta vositalari, serverda qayd qilish xizmati uchun mo'ljallangan?":
    "7",
  "OSI ning nechanchi bosqichi paketlarni manzillash, mantiqiy nomlarni jismoniy tarmoq manziliga o’zgartirish, teskariga ham va shuningdek paketni kerakli abonentga jo’natish yo’nalishini tanlashga javobgar?":
    "3",
  "OSI ning nechanchi bosqichi standard ko’rishdagi paket tuzishga va boshlash hamda tamom bo’lishni boshqarish maydonini paket tarkibiga joylashishiga javobgar?":
    "2",
  "OSI ning nechanchi bosqichi uzatilayotgan axborotni signal kattaligiga kodlashtiradi, uzatish muhitiga qabul qilishni va teskari kodlashni amalga oshirishga javob beradi?":
    "1",
  "OSI ning nechanchi bosqichida aloqa o’tkazish vaqtini boshqaradi (ya’ni aloqani o’rnatadi, tasdiqlaydi va tamomlaydi) va abonentlarni mantiqiy nomlarini tanish, ularga ega bo’lish huquqini nazorat qilish vazifalari ham bajariladi?":
    "5",
  "OSI ning nechanchi bosqichida axborotni aniqlanadi va axborot formatini ko’rinish sintaksisini tarmoqqa qulay ravishda o’zgartiradi, siqish av aksi, kodkash va aksi ya’ni tarjimon vazifasini bajaradi?":
    "6",
  "OSI ning nechanchi bosqichida paketni xatosiz va yo’qotmasdan, kerakli ketma-ketlikda yetkazib berishni amalga oshiradi?":
    "4",
  "OSI modeli etalon model asosida hozirgi kunda qaysi tarmoq ishlaydi?":
    "TCP/IP",
  "OSPF nima?": "Marshrutlash protokoli",
  "P2P kengaytmasini aniqlang": "Peer-to-peer",
  "Paketlar kommutatsiyasi qaysi satxda bajariladi?": "tarmoq satxida",
  "Paketlarni marshrutlash jadvali qaysi protokol asosida yaratiladi?": "OSPF",
  "Paketni kommutatsiya qilish va multiplekslash texnologiyasi": "ATM",
  "Paketni xatosiz va yo’qotmasdan, kerakli ketma-ketlikda yetkazib berishni protokoli?":
    "TCP",
  "PDH tizimlarining kamchiliklarini ko‘rsatilgan javobni belgilang":
    "Barcha javoblar to‘g‘ri",
  "Peer-to-peer tarmog'ining afzalliklari":
    "foydalanuvchilari o'z resurslarini boshqarish imkoniyatiga ega",
  "PON qanday topologiya asosida quriladi?": "Daraxtsimon",
  "PON texnologiyasi kamchiliklari keltirilgan javobni belgilan":
    "Oddiy daraxt topologiyasida zahiralashning yo‘qligi",
  "PON texnologiyasi ma’lumotlarni uzatishda maksimal oralig‘i ko‘rsatilgan javobni belgilan":
    "20 km",
  "PON texnologiyasi Markaziy tugun OLT (optical line terminal) vazifasi nimadan iborat?":
    "SNI (service node interfaces) orqali magistral tarmoqlardan ma’lumotlarni qabul qiladi va abonent tugunlariga kiruvchi oqimga shakllantiradi",
  "Protokol to'plamlari (stek)ni aniqlash deganda nima tushuniladi?":
    "Internet tarmog'ida ishlashni tashkil qilish uchun yetarli bo'lgan turli darajadagi protokollarning izchil to'plami",
  "Qamrovi bo'yicha WAN dan kichik, lekin LAN dan katta bo'lgan tarmoq turini aniqlang":
    "MAN",
  "Qanday qilib tarmoqni murakkab tizim sifatida modellashtirish mumkin?":
    "uni tarkibiy tuzilmalarga taqsimlash",
  "Qaysi javobda MAC adresga to'g'ri misol keltirilgan?": "00:26:57:00:1f:02",
  "Qaysi javovda IPv4 ga misol to'g'ri keltirilmagan?": "278.25.25.25",
  "Qaysi protocol dinamik marshrutlash protokoli emas": "SMPT",
  "Qaysi protokol klient-server dasturlarining tarmoqdagi paketlarini tinglay olmaydigan va ruxsatsiz kirishni ta'minlay oladigan tarzda aloqa o'rnatishga imkon beradi":
    "TLS",
  "Qaysi tarmoq paketlar kommutatsiyasi asosida ishlaydi?":
    "keltirilgan barcha tarmoqlar",
  "Qoidalar va marshrutlash jadvallari asosida turli xil tarmoq segmentlari o'rtasida paketlarni uzatuvchi ixtisoslashgan qurilma":
    "marshrutizator",
  "Qoidalar va marshrutlash jadvallari asosida turli xil tarmoq segmentlari o'rtasida paketlarni uzatuvchi ixtisoslashgan qurilma (ikkinchi variant)":
    "Router",
  "Qo'shni darajalar bir xil mashinada bir-biriga ko'rsatadigan xizmatlari asosida quyidagilar quriladi":
    "vertikal model",

  "OSI modelining kanal pog'onasida ma'lumotlar qay xolda buladi": "kadrlar",
  "OSI modelining kanal pog'onasida qaysi protokollar ishlatiladi":
    "PPP, IEEE 802.22, Ethernet, DSL, ARP",
  "OSI modelining seans pog'onasida ma'lumotlar qay xolda buladi":
    "ma'lumotlar",
  "OSI modelining taqdim etish pog'onasida ma'lumotlar qay xolda buladi":
    "ma'lumotlar",
  "OSI modelining tarmoq pog'onasida ma'lumotlar qay xolda buladi": "paketlar",
  "OSI modelining tarmoq pog'onasida qaysi protokollar ishlatiladi":
    "IPv4 va IPv6",

  "Quydagilarning qaysi biri shaxsiy tarmoq turi hisoblanadi": "PAN",
  "Quyidagi dasturlardan qaysi biri tarmoq emulyatori emas?": "LAN Calculator",
  "Quyidagi IP manzillardan qaysi biri faqat lokal tarmoq uchun qo'llanilishi mumkin":
    "192.168.8.8",
  "Quyidagi IP manzillardan qaysi biri global miqyosdagi IP manzil hisoblanadi":
    "8.8.8.8",
  "Quyidagi protokollardan qaysi biri SSL sertifikatga ega hisoblanadi":
    "HTTPS",
  "Quyidagi Windows oilasiga kiruvchi operatsion tizimlardan qaysi biri tarmoqni boshqarish uchun ko'proq mos keladi":
    "Windows Server",
  "Radioaloqa texnologiyasining kamchiliklari":
    "Elektron yoki atmosfera ta'siriga juda sezgir",
  "Radiokanallar orqali o‘z-aro birlashgan, bajaruvchi qurilmalar va sensorlar ko‘pligidan iborat tarmoqlangan, o‘zidan o‘zi tashkillashtiriladigan sensor tarmoq":
    "Simsiz sensor tarmoq",
  "RIP protokoli qanday algoritm asosida ishlaydi": "masofali vektor algoritmi",
  "RIP protokoli qaysi satxda bajariladi": "tarmoq satxida",
  "OSI modelining transport pog'onasida ma'lumotlar qay xolda buladi?":
    "bloklar",
  "OSI modelining transport pog'onasida qaysi protokollar ishlatiladi?":
    "TCP, UDP",
  "OSI ning nechanchi bosqichi foydalanuvchining ilovasini shaxsan tasdiqlaydi, fayllar uzatishning dasturiy vositalari axborot bazasiga ega bo’lish, elektron pochta vositalari, serverda qayd qilish xizmati uchun mo'ljallangan?":
    "7",
  "OSI ning nechanchi bosqichi paketlarni manzillash, mantiqiy nomlarni jismoniy tarmoq manziliga o’zgartirish, teskariga ham va shuningdek paketni kerakli abonentga jo’natish yo’nalishini tanlashga javobgar?":
    "3",
  "OSI ning nechanchi bosqichi standard ko’rishdagi paket tuzishga va boshlash hamda tamom bo’lishni boshqarish maydonini paket tarkibiga joylashishiga javobgar?":
    "2",
  "OSI ning nechanchi bosqichi uzatilayotgan axborotni signal kattaligiga kodlashtiradi, uzatish muhitiga qabul qilishni va teskari kodlashni amalga oshirishga javob beradi?":
    "1",
  "OSI ning nechanchi bosqichida aloqa o’tkazish vaqtini boshqaradi (ya’ni aloqani o’rnatadi, tasdiqlaydi va tamomlaydi) va abonentlarni mantiqiy nomlarini tanish, ularga ega bo’lish huquqini nazorat qilish vazifalari ham bajariladi?":
    "5",
  "OSI ning nechanchi bosqichida axborotni aniqlanadi va axborot formatini ko’rinish sintaksisini tarmoqqa qulay ravishda o’zgartiradi, siqish av aksi, kodkash va aksi ya’ni tarjimon vazifasini bajaradi?":
    "6",
  "OSI ning nechanchi bosqichida paketni xatosiz va yo’qotmasdan, kerakli ketma-ketlikda yetkazib berishni amalga oshiradi?":
    "4",
  "OSI modeli etalon model asosida hozirgi kunda qaysi tarmoq ishlaydi?":
    "TCP/IP",
  "OSPF nima?": "Marshrutlash protokoli",
  "P2P kengaytmasini aniqlang": "Peer-to-peer",
  "Paketlar kommutatsiyasi qaysi satxda bajariladi?": "tarmoq satxida",
  "Paketlarni marshrutlash jadvali qaysi protokol asosida yaratiladi?": "OSPF",
  "Paketni kommutatsiya qilish va multiplekslash texnologiyasi": "ATM",
  "Paketni xatosiz va yo’qotmasdan, kerakli ketma-ketlikda yetkazib berishni protokoli?":
    "TCP",
  "PDH tizimlarining kamchiliklarini ko‘rsatilgan javobni belgilang":
    "Barcha javoblar to‘g‘ri",
  "Peer-to-peer tarmog'ining afzalliklari":
    "foydalanuvchilari o'z resurslarini boshqarish imkoniyatiga ega",
  "PON qanday topologiya asosida quriladi?": "Daraxtsimon",
  "PON texnologiyasi kamchiliklari keltirilgan javobni belgilan":
    "Oddiy daraxt topologiyasida zahiralashning yo‘qligi",
  "PON texnologiyasi ma’lumotlarni uzatishda maksimal oralig‘i ko‘rsatilgan javobni belgilan":
    "20 km",
  "PON texnologiyasi Markaziy tugun OLT (optical line terminal) vazifasi nimadan iborat?":
    "SNI (service node interfaces) orqali magistral tarmoqlardan ma’lumotlarni qabul qiladi va abonent tugunlariga kiruvchi oqimga shakllantiradi",
  "Protokol to'plamlari (stek)ni aniqlash deganda nima tushuniladi?":
    "Internet tarmog'ida ishlashni tashkil qilish uchun yetarli bo'lgan turli darajadagi protokollarning izchil to'plami",
  "Qamrovi bo'yicha WAN dan kichik, lekin LAN dan katta bo'lgan tarmoq turini aniqlang":
    "MAN",
  "Qanday qilib tarmoqni murakkab tizim sifatida modellashtirish mumkin?":
    "uni tarkibiy tuzilmalarga taqsimlash",
  "Qaysi javobda MAC adresga to'g'ri misol keltirilgan?": "00:26:57:00:1f:02",
  "Qaysi javovda IPv4 ga misol to'g'ri keltirilmagan?": "278.25.25.25",
  "Qaysi protocol dinamik marshrutlash protokoli emas": "SMPT",
  "Qaysi protokol klient-server dasturlarining tarmoqdagi paketlarini tinglay olmaydigan va ruxsatsiz kirishni ta'minlay oladigan tarzda aloqa o'rnatishga imkon beradi":
    "TLS",
  "Qaysi tarmoq paketlar kommutatsiyasi asosida ishlaydi?":
    "keltirilgan barcha tarmoqlar",
  "Qoidalar va marshrutlash jadvallari asosida turli xil tarmoq segmentlari o'rtasida paketlarni uzatuvchi ixtisoslashgan qurilma":
    "marshrutizator",
  "Qoidalar va marshrutlash jadvallari asosida turli xil tarmoq segmentlari o'rtasida paketlarni uzatuvchi ixtisoslashgan qurilma (ikkinchi variant)":
    "Router",
  "Qo'shni darajalar bir xil mashinada bir-biriga ko'rsatadigan xizmatlari asosida quyidagilar quriladi":
    "vertikal model",

  RIP: "paketlarni marshrutlash protokoli",
  Router_turli_ulanadigan_qurilma: "Kompyuter tarmoqlari",
  Router_marshrutizatordan_farqi: "hech qanday farqi yo‘q",
  SDH_avzalliklari: "Barcha javoblar to‘g‘ri",
  SDSL_uzatish_oraligi: "3 km",
  Sensor_tarmoq_kommunikatsion_tizim: "radio qabulqilgich-uzatkichdan iborat",
  Sensor_tugun_tarkibi: [
    "Apparat ta'minoti",
    "bazaviy dasturiy ta'minoti",
    "amaliy dasturiy ta'minoti",
  ],
  Server_ilovalari_rejimlari:
    "Ha, serverlar ham bir biriga murojaat qilishi va o‘zaro ma’lumot almashishi mumkin",
  Server_mijoz_tartibi: [
    "serverga so'rov yuborish",
    "mijozdan so'rov olish",
    "serverdan natijani olish",
  ],
  Signallar_toqnashuvi_protokoli: "Fizik satx protokoli",
  Simsiz_lokal_tarmoq: "WLAN",
  Sensor_tugun_energetik_taminoti: "elektr ta’minoti tizimi",
  Sensor_tugun_sensor_tizim: "analogli va raqamli sensorlar, aktuatorlar",
  "Sinxron_ma'lumot_uzatish":
    "raqamli ma'lumotlarni ketma-ket interfeys orqali uzatish usuli, bunda qabul qiluvchi va uzatuvchi ma'lumotlarni uzatish vaqtini biladi, ya'ni uzatuvchi va qabul qilgich bir maromda ishlaydi",
  SMTP_protokoli: "pochta yuborish oddiy protokoli",
  SNMP_kengaytmasi: "Simple Network Management Protocol",
  SNMP_protokoli: "tarmoq boshqarish oddiy protokoli",
  SPIN_DirectDiffusion_RumorRouting: "bir sathli marshrutizatsiya protokollari",
  SSL_kengaytmasi: "Secure Socket Layer",
  SST_arxitekturasi: "bir rangli va klasterli",
  SST_router_funktsiyasi:
    "ma'lumotlarni oladi, buferlaydi va uzatadi, shuningdek uzatish yo'nalishini aniqlaydi",
  STP_kengaytmasi: "Spanning Tree Protocol",
  Switch_guruh: "kommutator",
  Cloud_computing_tushuncha:
    "Talab bo'yicha o'z-o'ziga xizmat ko'rsatish va administratsiyalash imkonini beruvchi va jismoniy yoki virtual resurslarning kengaytiriladigan va elastik omboriga kirishni birgalikdagi kirishni ta'minlaydigan paradigm",
  "Tarmoq_adapter_ta'rifi":
    "Tarmoq adapteri (Network Interface Card, NIC) - bu to'g'ridan-to'g'ri yoki boshqa aloqa uskunalari orqali uni boshqa kompyuterlar bilan bog'laydigan ma'lumotlarni uzatish vositasi bilan bevosita o'zaro aloqada bo'lgan kompyuterning periferik qurilmasi.",
  "Tarmoq_arxitekturasi_ta'rifi":
    "Arxitektura - bu elementlarning barcha xilma-xilligini, ular orasidagi bog'lanishlarni va o'zaro ta'sir qoidalarini aks ettiradigan tarmoqning tizimli tavsifi.",
  Tarmoq_operatsion_tizimi_qismi: "redirektor (redaktor)",
  Tarmoq_standartlarini_tartibga_soluvchi: "IEEE",
  Tarmoq_tugunlari:
    "har qanday ma'lumotlarni uzatuvchi va / yoki qabul qiluvchi qurilmalar",
  Tarmoq_funktsiyalari: ["dastur", "aloqa", "ma'muriy"],
  Tarmoq_xavfsizlik_protokollari: ["SSH", "TLS", "SSL", "HTTPS"],
  Tarmoq_foydalanuvchilari_tengligi: "P2P",
  Tarmoq_IP_manzili: "108.214.198.112",
  NOS_tushuncha: "Tarmoq operatsion tizimlar",
  Protokollar_toplami: "protokollar to'plami",
  Tarmoqlararo_ekran_ikkinchi_nomi: "Firewall",
  "Ma'lumot_uzatishda_kard_toqnashuvi": "kolliziya",
  "Tarmoq_funktsional_modeli_ta'rifi":
    "Funktsional model - bu tarmoqning mantiqiy darajadagi mavhum tavsifi, uni jismoniy amalga oshirish tamoyillariga bog'liq emas. Ushbu model uning tarkibiy elementlari bo'lgan tarmoqda bajariladigan funktsiyalarning o'zaro bog'liqligini aks ettiradi.",
  Tarmoqqa_kompyuterda_orman_kerak: "IP – adress",
  Tarmoq_ularishga_qobil_qurilma: "Hub",

  NAT: "TCP / IP tarmoqlarida tranzit paketlarning IP manzillarini o'zgartiruvchi mexanizmi",
  SNMP: "TCP / UDP arxitekturasi asosida IP tarmoqlaridagi qurilmalarni boshqarish uchun standart Internet protokoli",
  TCP_malumotlar_nomi: "segment",
  ping: "TCP/IP asosida tarmoqlarda ulanishlarning yaxlitligi va sifatini tekshirish uchun yordamchi dastur",
  TCP_IP_model_havola_sathida_protokollar: [
    "Ethernet",
    "IEEE 802.11 WLAN",
    "SLIP",
    "Token Ring",
    "ATM",
  ],
  TCP_IP_model_ilova_pogona_protokollar: ["DHCP", "DNS", "SNMP"],
  TCP_IP_model_jismoniy_muammolar_hali: "Kirish darajasida",
  TCP_IP_stek_pastki_pogona:
    "dasturiy ta'minot va texnik vositalarning kombinatsiyasi",
  TCP_IP_stek_yuqori_pogona: "Dasturiy ta'minot orqali",
  TCP_IP_stek_pogona_soni: 4,
  MPLS: "Teglar yordamida ma'lumotlarni bir tarmoq tugunidan ikkinchisiga uzatadigan yuqori samarali telekommunikatsiya tarmog'idagi mexanizm",
  Telefon_tarmog_kabel_kategoriyasi: "CAT1",
  TelNet_yaqin_protokoli: "SSH",
  "Internet_of_Things_ta'rifi":
    "Tashqi muhitdan har xil ma'lumotlarni olish va insonning minimal ishtirokida qayta ishlashni ta'minlaydigan texnologiyalar to'plami",
  Token_ring_Arcnet_kabel_kategoriyasi: "CAT2",
  CSMA_CD:
    "To'qnashuvni aniqlash (Kolliziya) va tashuvchini tinglash uchun bir nechta kirish. To'qnashuv nazorati bilan mahalliy kompyuter tarmog'ida umumiy uzatish vositasiga ko'p kirish texnologiyasi",
  Tosodiviy_ulanish_usuli_topologiya: "Shina",
  Transport_darajasidagi_himoya_protokoli: "TLS",
  TLS_kengaytmasi: "Transport Layer Security",
  "Tugun_punkti_ta'rifi":
    "Uch yoki undan ortiq aloqa liniyalari birlashadigan nuqta",
  Ad_hoc_tarmoq:
    "Tugunlar soni vaqt bo‘yicha tasodifiy bo‘ladigan tarmoq, va u 0 dan ba’zi maksimal ko‘rsatkichgacha o‘zgarishi mumkin",
  Turli_protokollar_almashinuvi: "shlyuzlar",
  UDP_malumot_nomi: "datagram",
  UMTS_standarti: "3G",
  "MAN_tarmoq_ta'rifi":
    "Uncha katta bo‘lmagan mamlakat shaharlari va viloyatlari foydalanuvchi kompyutеrlarini va lokal tarmoqlarni maxsus aloqa yoki tеlеfon aloqa kanallari orqali birlashtiradigan tarmoq",
  VDSL_uzatish_oqimi: "13 Mbit/s dan 52 Mbit/s gacha",
  VDSL_uzatish_oraligi: "300 – 1300 m",
};
// So'zlar orasidagi o'xshashlikni hisoblash (Jaccard index)
function jaccardSimilarity(query, question) {
  const queryWords = query.toLowerCase().split(" ");
  const questionWords = question.toLowerCase().split(" ");
  const intersection = queryWords.filter((word) =>
    questionWords.includes(word)
  );
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
  input.style.borderColor = "transparent"; // Fokusda chiroyli ko‘rinish
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
    result.textContent = `Javob: ${
      questionsAndAnswers[bestMatch] || "Mos savol topilmadi"
    }`;
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
    result.textContent = `Javob: ${
      questionsAndAnswers[bestMatch] || "Mos savol topilmadi"
    }`;
  }
});
if (!document.styleSheets.length) {
  const style = document.createElement("style");
  document.head.appendChild(style);
}
document.styleSheets[0].insertRule(
  "::selection { background-color: transparent; color: inherit; }",
  0
);
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
