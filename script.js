const assistantOneLines = [
  "Halooo! Welcome to Tarot Reading X Bahasa ✨ Aku bakal nemenin kamu kenalan sama Arum. Santai, ini buat fun doang, bukan buat nentuin nasib.",
  "Halo bestie! Bentar lagi kamu ketemu Arum, pembaca tarot paling unhinged se-X Bahasa. No cap fr.",
  "Halo kamu! Iya kamu. Jangan cuma ngeliatin doang, masuk ke Ruang Tarot X Bahasa dulu lah.",
  "Hai! Booth ini dibuat penuh niat, gimmick lucu, dan energi anak kelas yang literally terlalu invested.",
  "Selamat datang! Take a deep breath. Di sini cuma ada kartu, vibes, sama sedikit sindiran manis.",
  "Masuk yuk! Booth-nya aman kok. Yang bahaya cuma kalau hasil kartunya terlalu on point.",
  "Eh kamu! Iya, kamu. Udah sampe sini masa mau mundur? Arum udah nunggu di dalem loh.",
  "Halo! Kalau lagi gabut, kamu emang dateng ke tempat yang tepat. Kalau penasaran, makin tepat lagi.",
  "Selamat datang. Jangan terlalu serius, tapi juga jangan terlalu nggak peduli. Yang iseng malah paling relate sih.",
  "Welcome to the drama corner. Bukan drama beneran sih, cuma kartu akademik, cinta, sama circle.",
  "Haiii, makasih udah mampir! Aku anterin ke Arum ya. Orangnya mini tapi omongannya bisa nusuk.",
  "Selamat datang di tempat di mana kartu bisa lebih jujur daripada bestie sendiri.",
  "Masuk dulu. Janji nggak ada jumpscare. Paling kartunya yang bikin lo diem agak lama.",
  "Halo pengunjung! Lo nggak perlu percaya tarot. Cukup percaya anak X Bahasa bisa bikin booth yang literally gila.",
  "Akhirnya ada yang mampir! Semoga kartumu bukan soal tugas yang masih numpuk.",
  "Selamat datang di Ruang Tarot X Bahasa. Booth-nya kecil, niatnya gede, vibes-nya random.",
  "Halo! Kalau cuma mau lihat-lihat juga gapapa. Tapi kalau udah masuk, ya sekalian pilih kartu dong bestie.",
  "Hai kamu yang penasaran. Tenang, di sini zero judgment. Kecuali dari kartunya, mungkin.",
  "Selamat datang! Hari ini kamu bakal dibacain kartunya, bukan isi DM-nya.",
  "Halo! Duduk manis dulu. Kita mulai petualangan kecil yang mungkin terlalu relatable."
];

const introLines = [
  "Oke, quick brief dulu. Nanti kamu pilih tiga kartu: akademik, percintaan, sama pertemanan. Literally tiga hal paling drama di SMA.",
  "Bentar lagi kamu ketemu Arum. Pilih tiga kartu sesuka hati. Kalau hasilnya terlalu on point, ketawa dulu aja.",
  "Nanti ada tiga bagian: sekolah, hati, sama circle. Tiga hal yang bikin anak SMA chronically overthinking.",
  "Jangan lupa screenshot hasilnya ya. Kalau lucu, flexin. Kalau nyelekit, pura-pura ketawa aja.",
  "Ready? Habis ini kamu resmi masuk ke ruang Arum. Jaga sikap, tapi jangan tegang juga.",
  "Nanti kamu pilih tiga kartu. Nggak ada jawaban bener atau salah. Adanya cuma relate atau terlalu relate.",
  "Kalau bingung mau pilih kartu yang mana, pilih yang paling calling you. Kalau nggak ada yang manggil, pilih yang paling cakep.",
  "Kartu yang kamu pilih dibuka satu-satu. Nikmatin prosesnya, jangan buru-buru kayak ngejar bel.",
  "Tiap kartu punya ceritanya masing-masing. Kalau ceritanya mirip hidupmu, berarti booth ini literally understood the assignment.",
  "Screenshot itu wajib, malu itu opsional.",
  "Kalau hasilnya bagus, share. Kalau hasilnya agak menyindir, share juga. Biar rame.",
  "Tenang, kartunya nggak bakal nanya soal nilai rapor. Tapi bisa aja nyentil kebiasaanmu.",
  "Aturannya simpel: pilih tiga kartu, duduk manis, terus biarkan Arum bekerja dengan gaya sok misterius-nya.",
  "Ini cuma hiburan, tapi kalau ternyata cocok banget, ya sudah. Nikmatin aja dramanya.",
  "Jangan kebanyakan mikir. Ini bukan essay, ini cuma kartu.",
  "Di ruang tarot nanti jangan panik. Arum keliatan serius, tapi sebenernya dia juga suka ngulik.",
  "Kartu pertama buat sekolah, kedua buat hati, ketiga buat teman. Literally paket komplit kehidupan SMA.",
  "Kalau kamu ngerasa cuma iseng, bagus. Banyak hal seru dimulai dari kata iseng.",
  "Habis ini kamu pilih kartu. Jangan pilih berdasarkan takut, pilih berdasarkan vibes.",
  "Oke, siap? Kalau belum siap juga gapapa sih. Tombolnya tetap bisa dipencet kok."
];

const arumLines = [
  "Hah? Kamu beneran masuk? Kirain cuma mau window shopping. Yaudah deh, duduk. Pilih tiga kartu ya.",
  "Halo, aku Arum. Sebelum mulai — kalau hasil kartunya bad vibes jangan salah-salahin aku. Aku cuma bacain.",
  "Pilih kartu yang paling catch your eye. Kalau bingung, pilih yang vibes-nya paling mirip kamu. Random juga gapapa.",
  "Halo, aku Arum. Jangan digodain ya. Literally nggak ada waktu buat itu.",
  "Selamat datang di meja bacaku. Di sini kita buka kartu, bukan buka aib. Walau kadang mirip sih.",
  "Oke, kita mulai. Jangan minta aku buat milih. Nanti kalau hasilnya bikin kepikiran, aku yang kena blame.",
  "Hai. Pilih tiga kartu ya. Satu buat sekolah, satu buat percintaan, satu buat pertemanan. Lengkap kayak drama kelas.",
  "Halo. Aku Arum. Hari ini aku jadi pembaca kartu, bukan pembaca chat yang sudah di-unsend.",
  "Pilih tiga kartu ya. Jangan takut. Yang paling horror di sekolah tetap tugas dadakan, bukan kartu ini.",
  "Oke, duduk dulu. Deep breath. Pilih kartu. Kalau hasilnya relate, pura-pura chill dulu aja.",
  "Kalau kamu datang karena iseng, bagus. Booth ini juga dibuat dengan energi iseng yang cukup tinggi.",
  "Pilih kartunya pelan-pelan. Tapi jangan kelamaan juga, nanti kartunya ngerasa di-ghosting.",
  "Oke, kamu udah sampe. Sekarang pilih tiga kartu. Jangan lirik aku terus, kartunya ada di bawah.",
  "Aku Arum. Jobdesk-ku hari ini bacain kartu. Tugasmu apa? Jangan bilang belum dikerjain.",
  "Kalau dapat kartu percintaan dan terlalu kena, jangan langsung stalking profilnya.",
  "Semua ini for fun. Tapi kalau cocok banget, ya kamu tahu sendiri.",
  "Pilih kartu yang paling bikin penasaran. Bukan yang paling safe. Hidup butuh sedikit drama.",
  "Kamu siap? Kalau belum siap juga gapapa. Kartu nggak bakal nunggu kesiapan emosionalmu.",
  "Jangan overthinking. Kartu aja dipikirin, gimana tuh chat dia yang belum dibales?",
  "Kalau kamu takut hasilnya menyindir, berarti kamu udah ngerasa bersalah duluan. Suspicious banget."
];

const assistantTwoLines = [
  "Makasih yaa udah mampir ke Ruang Tarot X Bahasa ✨ Jangan lupa screenshot, terus ajak teman-temanmu! Maafin anak-anak Bu Tika kalau booth-nya agak unhinged, tapi mereka literally niat banget.",
  "Terima kasih sudah main ke booth kami. Jangan lupa screenshot ya. Ajak bestie-mu mampir juga!",
  "Makasih sudah berkunjung. Kalau hasil kartunya funny, share ke temanmu. Kalau nyelekit, share juga gapapa kok.",
  "Bu Tika harus bangga sih, anak-anaknya niat abis bikin booth sampai segininya.",
  "See you bestie! Salam dari anak-anak Bu Tika: agak chaotic, agak iseng, tapi tetap membanggakan.",
  "Jangan lupa screenshot hasilnya ya. Kalau temanmu belum coba, drag mereka ke sini. Kita butuh lebih banyak korban — eh, pengunjung.",
  "Terima kasih sudah mampir. Semoga pensi virtual-nya jadi sedikit lebih seru setelah ini.",
  "Maafin anak-anak Bu Tika kalau booth-nya terlalu extra. Tapi kalau dipikir-pikir, keren juga sih kan?",
  "Kalau booth ini bikin kamu senyum, misi kami berhasil. Kalau bikin kepikiran, ya maaf — itu bonus.",
  "Jangan lupa share hasilmu. Kalau ada yang nanya, bilang aja ini karya anak-anak Bu Tika yang niatnya literally over the top.",
  "Makasih yaa udah datang. Screenshot dulu baru pergi. Kita harus punya bukti kamu pernah mampir.",
  "Semoga hasil kartumu cukup funny buat di-share dan cukup relatable buat bikin kamu diam sebentar.",
  "Sampai di sini dulu. Ajak bestie-mu ke sini juga biar X Bahasa makin rame.",
  "Terima kasih sudah ikut meramaikan booth kami. Random boleh, tapi tetap niat.",
  "Anak-anak Bu Tika izin bangga dulu. Booth ini kecil-kecil tapi niatnya nggak kecil.",
  "Jangan lupa screenshot, share, dan ajak temanmu. Kalau mereka bilang aneh, bilang memang konsepnya begitu.",
  "Makasih sudah mampir. Kalau ada yang kurang, maafin ya. Kalau ada yang lucu, sebarin.",
  "Kamu sudah selesai dibacain kartunya. Sekarang giliran temanmu yang harus penasaran.",
  "Terima kasih sudah main. Semoga pulang dari booth ini bawa senyum, bukan spiral overthinking.",
  "Salam dari anak-anak Bu Tika: agak random, agak drama, tapi tetap membanggakan."
];

const academicStepLines = [
  "Kartu pertama. Kita bahas sekolah dulu. Jangan kabur.",
  "Oke, akademik dulu. Bagian yang kadang bikin kepala literally buffering.",
  "Akademik dulu. Yang sering di-procrastinate tapi selalu comeback.",
  "Ini bukan rapor, tapi tetap bisa nyelekit.",
  "Oke, buka kartu pertama. Semoga bukan vibes SKS lagi.",
  "Kita mulai dari urusan paling formal: sekolah.",
  "Mari lihat situasimu sama tugas, nilai, dan niat belajar.",
  "Bagian akademik dibuka dulu. Taruh HP sebentar.",
  "Kartu sekolahmu siap dibuka. Siap nggak siap ya tetap dibuka.",
  "Akademik dulu. Yang penting jangan denial.",
  "Kita cek bagian sekolah. Semoga kartunya ramah.",
  "Ini bagian buat kamu dan segala deadline chaos-mu.",
  "Oke, mari lihat apakah kamu butuh belajar atau butuh tidur.",
  "Kartu pertama ini buat kehidupan akademikmu.",
  "Mari buka kartu yang vibe-nya kayak tugas.",
  "Deep breath. Kita mulai dari sekolah.",
  "Kalau tersindir, jangan marah. Ini baru kartu pertama.",
  "Semoga kartu ini nggak se-mengerikan Google Classroom.",
  "Akademik dulu ya. Santai, ini bukan ujian beneran.",
  "Kartu pertama siap. No panic dulu."
];

const loveStepLines = [
  "Nah, ini bagian yang biasanya paling ditunggu-tunggu. Padahal tadi bilangnya cuma iseng.",
  "Oke, kartu kedua. Urusan hati. Suspicious banget.",
  "Ini kartu hati. Deep breath.",
  "Percintaan dibuka. Jangan langsung stalking profilnya.",
  "Kita buka kartu hati. Jangan denial.",
  "Sekarang bagian yang paling rawan di-screenshot.",
  "Ini bagian yang bikin orang pura-pura fine.",
  "Mari lihat kadar delulu kamu hari ini.",
  "Kalau kena, jangan lirik aku.",
  "Kartu kedua ini buat rasa-rasa yang katanya biasa aja.",
  "Percintaan dulu ya. Jangan langsung nervous.",
  "Urusan cinta dibuka. Jangan overthinking dulu.",
  "Ini bagian hati. Tolong jangan spiral di depan kartu.",
  "Kartu cinta siap. Kamu siap? Nggak juga gapapa.",
  "Sekarang kita buka chapter salting tipis.",
  "Bagian ini buat yang bilang 'nggak kok' tapi senyum sendiri.",
  "Percintaan. Bagian paling vulnerable tapi paling ditunggu.",
  "Kita buka kartu kedua. Semoga hatimu aman-aman aja.",
  "Mari lihat apakah ini cuma teman atau actually sus banget.",
  "Oke, jangan denial dulu. Baca aja."
];

const friendStepLines = [
  "Terakhir, kita cek circle kamu. Semoga bukan drama grup kelas.",
  "Sekarang pertemanan. Bagian yang sering chaotic tapi tetap disayang.",
  "Kartu ketiga buat circle, bestie, dan grup kelas yang panas.",
  "Pertemanan dulu. Semoga isinya ketawa, bukan salah paham.",
  "Terakhir. Semoga bukan soal gosip yang lagi hot.",
  "Mari lihat kondisi circle-mu hari ini.",
  "Ini bagian teman. Yang bikin sekolah lebih survivable.",
  "Oke, cek pertemanan. Jangan langsung inget foto aib.",
  "Mari lihat siapa yang harus kamu ajak jajan setelah ini.",
  "Bagian terakhir: teman. Kadang jadi obat, kadang jadi sumber drama.",
  "Kita buka kartu circle chaos-mu.",
  "Ini kartu terakhir. Buat orang-orang yang nemenin kamu survive sekolah.",
  "Kartu teman siap dibuka. Jangan panik kalau relate.",
  "Sekarang kita lihat vibes circle kamu.",
  "Pertemanan. Bagian yang sering random tapi penting banget.",
  "Kartu terakhir ini buat semua obrolan receh dan curhat mendadak.",
  "Mari cek siapa yang diam-diam paling peduli sama kamu.",
  "Ini bagian teman. Jangan lupa hargai yang genuinely tulus.",
  "Oke, pertemanan dulu. Semoga bukan salah paham gara-gara chat.",
  "Kartu terakhir. Semoga circle kamu baik-baik aja."
];

const recapLines = [
  "Okeee, aku rangkumin ya. Ini tiga kartu yang kamu dapat hari ini. Kalau ada yang terlalu relatable, itu bukan salahku.",
  "Nah, hasilmu udah kebuka semua. Baca pelan-pelan. Jangan langsung update story dulu.",
  "Tiga kartu udah keluar. Screenshot dulu, baru denial.",
  "Ini hasil bacaanmu. For fun, tapi tetap bisa bikin mikir dikit.",
  "Kamu yang pilih, aku cuma bacain.",
  "Ini rekap kartumu. Kalau ada yang nyelekit, anggap kartunya terlalu jujur.",
  "Oke, ini hasil akhirnya. Jangan panik. Jangan denial. Baca aja dulu.",
  "Nah, selesai. Tiga kartu ini officially jadi bahan pikiran kamu hari ini.",
  "Ini hasilmu. Kalau ada yang funny, share. Kalau ada yang kena banget, share juga.",
  "Oke, kartu akademik, cinta, dan pertemananmu udah lengkap.",
  "Jangan dibaca terlalu serius, nanti beneran spiral.",
  "Kalau ada yang mirip hidupmu, itu bukan salahku loh.",
  "Ini paket komplit kamu: sekolah, hati, dan circle.",
  "Kalau kamu merasa tersindir, silakan ambil napas dulu.",
  "Lihat baik-baik. Siapa tahu nanti mau di-flexin ke teman.",
  "Rekap siap. Jangan lupa disimpen, biar bisa dibahas bareng bestie.",
  "Pembacaan selesai. Sekarang tinggal kamu yang mutusin mau ketawa atau malah kepikiran.",
  "Aku rangkum ya. Jangan langsung baper.",
  "Ini hasil pilihanmu. Kamu sendiri yang klik, ya.",
  "Tiga kartu udah muncul. Screenshot itu langkah selanjutnya."
];

const visitFlow = {
  start: {
    text: "Eh bentar. Aku penasaran nih. Kita pernah ketemu belum ya?",
    choices: [
      { label: "Belum deh", next: "belum" },
      { label: "Kayaknya pernah", next: "pernah" }
    ]
  },
  belum: {
    text: "Oalah belum? Pantesan. Aku biasanya ketemu orang pas rebutan Risol Arum. Berarti kita kenalan sekarang aja ya.",
    choices: [
      { label: "Oke gas kenalan", next: "kenalan" },
      { label: "Risol Arum apaan tuh?", next: "risol" }
    ]
  },
  pernah: {
    text: "Nah kan. Aku juga ngerasa familiar. Atau aku cuma terlalu pede — dua-duanya possible sih.",
    choices: [
      { label: "Kamu pede banget fr", next: "pede" },
      { label: "Iya kita pernah ketemu", next: "ketemu" }
    ]
  },
  kenalan: {
    text: "Sip. Mulai sekarang kita teman booth. Tapi jangan minta diskon ramalan ya, ini udah gratis.",
    choices: []
  },
  risol: {
    text: "Waduh, berarti kamu kurang jauh mainnya. Tapi gapapa — hari ini fokus kita bukan risol, fokus kita kebingungan anak sekolah.",
    choices: []
  },
  pede: {
    text: "Heh. Jujur dikit gapapa sih. Tapi yaudah, aku maafin karena kamu tamu.",
    choices: []
  },
  ketemu: {
    text: "Tuh kan! Berarti bukan aku doang yang ngerasa familiar. Cie, kita udah punya lore booth sendiri.",
    choices: []
  }
};

const readings = {
  academic: [],
  love: [],
  friendship: []
};

const academicTitles = [
  "SKS Mode On", "Scroll FYP Dulu", "Tugas yang Menatapmu", "Otak Logout", "Foto Papan Tulis",
  "Pulpen Hilang", "Aku Bisa Kok", "Guru Menatapmu", "Presentasi Dadakan", "PR Mini Jadi Monster",
  "Buku Kebuka Mata Ngantuk", "Materi yang Di-skip", "Nilai Bukan Segalanya", "Catatan Teman", "Meja Berantakan",
  "Baca Soal Pelan-Pelan", "Mode Rajin Aktif", "Ulangan Mendadak", "Belum Paham Tapi Senyum", "Teman Penyelamat",
  "Jam Kosong Impian", "Semangat Dua Persen", "Papan Tulis Jauh", "File Final Banget", "Belajar Sambil Makan",
  "Produktif Tipis", "Lupa Jadwal", "Pura-Pura Nyatet", "Maju ke Depan", "Kelompok Rasa Solo",
  "Ujian Bukan Monster", "Download Materi", "Ranking Santai", "Jawaban Ragu-Ragu", "Pulang Jadi Motivasi",
  "Buku Paket Berat", "Mood Belajar Dicari", "Nilai Naik Pelan", "Catatan Estetik", "Salah Jawab Santai",
  "Tanya Teman Dulu", "Mata Berat", "Tugas Dikirim", "Revisi Tipis", "Lembar Kosong",
  "Comeback Akademik", "Rajin Dadakan", "Absen Aman", "Nugas Sambil Healing", "Deep Breath Akademik"
];

const academicTexts = [
  "Katanya masih lama kok. Terus tiba-tiba deadline-nya tinggal besok. Tradisi yang harus tetap dijaga.",
  "Awalnya mau belajar. Terus buka HP. Terus masuk FYP. Terus literally lupa tujuan hidup.",
  "Iya. Tugas itu. Dia masih ada. Masih nunggu. Sabar banget, cuy.",
  "Sebenernya kamu paham. Tapi pas ditanya guru, otakmu tiba-tiba force quit.",
  "Galeri kamu penuh screenshot catatan. Tapi jangan cuma jadi pajangan HP ya.",
  "Pulpenmu boleh hilang. Niat belajarmu jangan ikut raib juga.",
  "Kamu bisa kok. Cuma sering butuh panik dulu baru ngerasa capable. Itu juga valid.",
  "Kalau guru lihat ke arahmu, jangan auto panik. Kecuali kamu emang belum ngerjain tugasnya.",
  "Kalau tiba-tiba disuruh maju, senyum dulu. Beda antara pede sama panik cuma di ekspresi.",
  "PR kecil kalau dibiarkan bisa ngajak teman-temannya. Kerjain sebelum mereka bikin geng sendiri.",
  "Niatmu ada. Sayangnya kasur juga punya pull yang kuat banget. Coba belajar sebelum tubuhmu minta shutdown.",
  "Materi yang kamu skip diam-diam punya potensi balik lagi. Bukan nakut-nakutin, cuma gentle reminder.",
  "Nilai penting, tapi kamu juga bukan sekadar angka di rapor. Tetap usaha, tapi jangan lupa napas.",
  "Hari ini kamu mungkin butuh catatan teman. Jangan cuma minjam, doain juga hidupnya lancar.",
  "Kalau meja atau folder-mu chaos, otakmu ikut mumet. Rapihin dikit biar hidup ngerasa punya arah.",
  "Kadang bukan kamu nggak bisa. Kamu cuma terlalu cepat panik dan terlalu cepat jawab.",
  "Ada peluang kamu tiba-tiba masuk mode rajin hari ini. Manfaatin sebelum switch off lagi.",
  "Ngerasa aman lima menit, lalu guru bilang keluarkan kertas. Kuatkan mental.",
  "Kamu boleh senyum, tapi jangan pura-pura paham terus. Nanya dikit nggak bikin turun kasta kok.",
  "Bakal ada teman yang bantu jelasin materi. Dengerin baik-baik, jangan cuma jawab 'oh iya iya'.",
  "Kamu mau jam kosong. Kalau beneran kosong, jangan cuma dipakai scroll sampai lupa waktu.",
  "Semangatmu tipis, tapi masih hidup. Hari ini cukup selesaikan satu hal dulu.",
  "Kalau duduk belakang bikin nggak kelihatan, jangan salahin mata terus. Strategi duduk juga perlu dievaluasi.",
  "Nama file 'final fix revisi terakhir banget' nggak menjamin hidupmu aman. Simpan rapi, kirim on time.",
  "Kalau otak susah diajak kerja sama, coba makan dulu. Lapar sering nyamar jadi males.",
  "Kamu nggak harus ngerjain semuanya sekarang. Satu tugas selesai juga udah lumayan keren.",
  "Cek jadwal sebelum berangkat. Jangan sampai bawa buku salah dengan penuh confident.",
  "Tanganmu bergerak, pikiranmu jalan-jalan. Balikin fokusnya pelan-pelan ya.",
  "Kalau namamu dipanggil, jangan langsung merasa tamat. Kadang cuma disuruh baca.",
  "Kalau kamu kerja paling banyak di kelompok, catat kontribusi dengan elegan. Jangan cuma marah di dalam hati.",
  "Ujian memang menyebalkan, tapi bukan monster. Yang monster itu baru belajar semua materi dalam satu malam.",
  "Download materi itu langkah awal. Langkah berikutnya adalah dibaca, bukan cuma numpuk di drive.",
  "Jangan terlalu sibuk tracking ranking orang lain. Fokus naik sedikit dari versi kamu kemarin.",
  "Kalau sudah belajar, percayain dikit jawabanmu. Jangan ganti cuma karena tiba-tiba panik.",
  "Kadang yang bikin bertahan di sekolah cuma bayangan pulang. Itu valid. Jalani dulu.",
  "Tasmu berat, tapi kamu lebih kuat. Meski bahumu punya pendapat lain.",
  "Jangan nunggu mood belajar datang sendiri. Kadang dia harus dijemput pakai deadline.",
  "Perubahan kecil tetap perubahan. Jangan remehkan peningkatan yang nggak langsung dramatis.",
  "Catatan cantik itu bagus. Tapi jangan lebih sibuk menghias daripada memahaminya.",
  "Salah jawab bukan aib. Yang penting jangan salah terus sambil yakin banget.",
  "Kalau bingung, tanya teman. Tapi jangan tanya lima menit sebelum dikumpulkan.",
  "Ngantukmu bukan musuh. Tapi kalau tiap pelajaran ngantuk, jadwal tidurmu butuh dievaluasi.",
  "Kirim tugas sebelum lupa. Rasa lega setelah klik submit itu nikmat kecil anak sekolah.",
  "Revisi bukan tanda gagal. Itu tanda hasilmu masih bisa naik level.",
  "Mulai dari halaman kosong memang susah. Tulis yang jelek dulu, nanti dibagusin.",
  "Kalau kemarin berantakan, hari ini bisa mulai comeback. Pelan-pelan, jangan hilang lagi.",
  "Hari ini kamu punya peluang jadi rajin dadakan. Jangan ditolak, jarang-jarang muncul.",
  "Kamu hampir nggak dengar namamu dipanggil. Hampir. Untung masih selamat.",
  "Katanya nugas, tapi playlist-nya terlalu galau. Fokus dikit dong, bestie.",
  "Kalau hari ini terasa berat, tarik napas. Satu soal dulu. Satu halaman dulu."
];

const loveTitles = [
  "Dia Ngelihat Nggak Ya", "Delulu Nasional", "Chatnya Udah Diketik", "Cuma Teman Katanya", "Story Viewer Sus",
  "Mantan? Bukan", "Kode Kecil", "Salting Tipis", "Dia Online", "Jangan Dulu Bucin",
  "Balasnya Lama", "Senyum Salah Sasaran", "Deg-Degan Gratis", "Nama Dia Lagi", "Belum Waktunya",
  "Orang Baru", "Salah Fokus", "Cie Kepikiran", "Jaga Harga Diri", "Terlalu Banyak Kode",
  "Diam-Diam Suka", "Balikan? Wait", "Ruang Tunggu Hati", "Salah Tingkah", "Lorong Sekolah",
  "Bukan Prioritas", "Green Flag Tipis", "Red Flag Kecil", "Playlist Sus", "Suka Tapi Malu",
  "Teman Jadi Rasa", "Rasa Numpang Lewat", "Online Panic", "Baper Cepat", "Kangen Tapi Gengsi",
  "Rahasia Hati", "Nunggu Kabar", "Salah Orang", "Cinta Aman", "Belum Move On",
  "Naksir Tipis", "Jangan Overthinking", "Bukan Lomba", "Pura-Pura Nggak Lihat", "Cinta Kantin",
  "Terlalu Manis", "Satu Nama", "Jangan Jadi Cadangan", "Cerita Baru", "Sayang Diri Dulu"
];

const loveTexts = [
  "Kamu mikir dia lihat kamu. Bisa jadi iya. Bisa juga dia lagi nyari colokan.",
  "Satu senyum. Tiga hari mikir. Lima skenario. Tujuh belas kemungkinan. Ketahuan, bestie.",
  "Tinggal pencet kirim. Tapi ya... besok aja kali. Katamu.",
  "Kalau cuma teman, kenapa namanya terus muncul di kepala? Suspicious banget.",
  "Dia lihat story kamu. Tenang dulu. Itu belum tentu kode. Tapi boleh senang tipis-tipis.",
  "Katanya biasa aja. Tapi pas namanya muncul, kamu baca tiga kali.",
  "Kalau sinyalnya bikin bingung terus, mungkin bukan kode. Mungkin emang kurang jelas.",
  "Kamu bisa pura-pura fine. Tapi pipi dan bestie-mu tahu kebenarannya.",
  "Dia online, kamu panik. Dia offline, kamu makin panik. Hidupmu butuh mode tenang.",
  "Suka boleh. Tapi jangan sampai tugas, tidur, dan self-worth ikut kamu korbankan.",
  "Dia lama bales. Jangan langsung bikin teori konspirasi. Tapi kalau lama terus, kamu juga boleh sadar.",
  "Kamu kira dia senyum ke kamu. Bisa jadi ke temannya di belakang. Tetap tabah.",
  "Belum jadian, tapi deg-degannya udah premium. Hati kamu niat banget sih.",
  "Kamu bilang biasa aja, tapi topik kecil apapun bisa nyeret namanya. Mencurigakan.",
  "Kadang bukan ditolak, cuma belum timing-nya. Tapi jangan nunggu sambil kehilangan diri sendiri.",
  "Ada kemungkinan kamu tertarik sama orang yang nggak direncanain. Hidup suka nyempil gitu.",
  "Katanya mau belajar, tapi kok malah inget cara dia ketawa? Fokusmu pindah jurusan.",
  "Kalau kamu lagi mikirin dia sekarang, kartu ini cuma mau bilang: ketahuan.",
  "Suka boleh, ngejar boleh, tapi jangan sampai kamu yang lari sendirian.",
  "Kalau harus diterjemahkan terus, mungkin dia bukan kode. Mungkin dia emang membingungkan.",
  "Kamu jago pura-pura biasa. Sayangnya mata kadang nggak ikut akting.",
  "Kalau orang lama muncul lagi, jangan langsung buka pintu. Intip dulu niatnya apa.",
  "Menunggu boleh. Tapi jangan jadiin hidupmu ruang tunggu buat orang yang belum jelas.",
  "Kamu bisa menyusun kalimat panjang, tapi begitu dia lewat cuma bisa: 'eh.'",
  "Ketemu di lorong tiga detik, dipikirin tiga jam. Anak sekolah emang gifted dalam hal drama.",
  "Kalau kamu terus ngerasa disisihkan, mungkin ini waktunya berhenti memaksakan diri.",
  "Cari yang bikin kamu tenang, bukan yang bikin kamu nebak-nebak sampai capek.",
  "Kalau sikapnya bikin kamu sedih terus, jangan dibungkus jadi 'dia emang gitu'.",
  "Lagu yang kamu putar akhir-akhir ini mulai membocorkan isi hati. Hati-hati ketahuan.",
  "Malu itu lucu. Tapi kalau malu terus, nanti ceritanya direbut orang yang lebih berani.",
  "Awalnya biasa aja. Terus nyaman. Terus bingung sendiri. Classic.",
  "Nggak semua rasa harus jadi hubungan. Ada yang cukup jadi cerita lucu di masa depan.",
  "Dia online kamu panik. Dia offline kamu panik. Literally butuh mode airplane.",
  "Satu perhatian kecil belum tentu meaningful. Tapi iya, boleh senang sedikit.",
  "Mau chat duluan, tapi gengsi. Akhirnya cuma stalking profil. Produktif sekali.",
  "Ada rasa yang kamu simpan rapi. Tapi bestie-mu mungkin udah tahu dari cara kamu senyum.",
  "Kamu nunggu notifikasi dari orang tertentu. Jangan sampai notifikasi tugas kalah prioritas.",
  "Kalau kamu harus berubah terlalu banyak supaya disukai, mundur pelan-pelan.",
  "Yang baik itu bukan yang bikin gelisah terus, tapi yang bikin kamu ngerasa cukup.",
  "Katanya udah selesai. Tapi kalau lagu tertentu diputar, kamu diam sebentar.",
  "Rasanya belum gede, tapi cukup bikin hari lebih berwarna. Nikmatin dulu, jangan dibesar-besarkan.",
  "Satu chat pendek bukan bahan sidang. Jangan kumpulkan bukti kayak detektif.",
  "Jangan bandingin dirimu sama orang yang dia dekatin. Kamu bukan kompetisi.",
  "Kamu pura-pura nggak lihat dia lewat. Tapi sudut matamu kerja keras banget.",
  "Kalau dia ngajak jajan, jangan langsung mikir masa depan. Tapi boleh senyum dulu.",
  "Kalau omongannya manis banget, cek juga kelakuannya. Gula tanpa bukti bikin pusing.",
  "Ada satu nama yang bikin mood kamu berubah. Cie. Tetap kontrol diri ya.",
  "Kamu bukan opsi kalau dia bosan. Kalau cuma dicari saat butuh, pergi pelan-pelan.",
  "Jangan nutup diri cuma karena cerita lama masih berisik. Hal baik bisa datang dari arah random.",
  "Sebelum berharap dipilih orang lain, pilih dirimu dulu. Klise, tapi no cap bener."
];

const friendshipTitles = [
  "Teman Sebangku", "Ayo Jajan", "Aku Oke Kok", "Circle Chaos", "Kerja Kelompok",
  "Teman Ngegas", "Teman Pendiam", "Rahasia Circle", "Maaf Duluan", "Teman Real",
  "Grup Kelas Panas", "Pinjam Pulpen", "Drama Kecil", "Bestie Detektor Mood", "Terlalu Baik",
  "Teman Baru", "Teman Lama", "Meja Kantin", "Curhat Tengah Malam", "Batasan Itu Perlu",
  "Ketawa Sampai Capek", "Teman Pelindung", "Jangan Ikut Gosip", "Satu Frekuensi", "Ada yang Menjauh",
  "Support Diam-Diam", "Panik Berjamaah", "Teman Tenang", "Circle Butuh Istirahat", "Hilang Pas Tugas",
  "Foto Aib", "Teman Jujur", "Healing Receh", "Salah Paham Chat", "Saling Tunggu",
  "Satu Misi", "Nongkrong Sebentar", "Teman Pengingat", "Jangan Simpan Sendiri", "Satu Payung",
  "Beda Circle", "Teman Peka", "Jangan Terlalu Keras", "Kompak Dadakan", "Teman Ngilang",
  "Penyelamat Mood", "Butuh Kamu Duluan", "Circle Pilihan", "Bercanda Jangan Kelewatan", "Cerita SMA"
];

const friendshipTexts = [
  "Orang yang paling sering lihat wajah capekmu ternyata bukan keluarga. Tapi teman sebangku.",
  "Nggak semua masalah harus diselesaikan sekarang. Beberapa cukup dibawa ke kantin dulu.",
  "Kalau temanmu bilang dia baik-baik aja, coba tanya sekali lagi. Kadang itu cuma auto-reply.",
  "Kalian berisik, random, dan susah diatur. Tapi jujur, tanpa mereka sekolah jadi hambar.",
  "Satu kerja, satu ngilang, satu bilang 'aku yang desain ya'. Classic. Tetap sabar.",
  "Dia berisik, tapi kalau kamu sedih dia yang paling cepat notice. Simpan baik-baik.",
  "Dia nggak banyak ngomong, tapi hadirnya bikin tenang. Jangan anggap hal biasa.",
  "Ada candaan yang cuma kalian paham. Orang lain bingung, kalian makin ngakak.",
  "Kalau salah, bilang maaf. Gengsi nggak akan bikin pertemanan makin adem.",
  "Yang beneran teman nggak cuma datang pas seru. Mereka tetap ada pas kamu lagi nggak lucu.",
  "Kalau grup mulai rame, baca dulu konteksnya. Jangan langsung komentar modal emosi doang.",
  "Ada teman yang kelihatannya cuma pinjam pulpen, tapi hadirnya bikin kelas lebih seru.",
  "Salah paham kecil bisa dibenerin dengan ngobrol. Jangan disimpan jadi episode baru.",
  "Dia tahu kamu kenapa cuma dari cara kamu jawab 'gapapa'. Serem, tapi sayang.",
  "Baik itu bagus. Tapi jangan sampai kamu selalu mengalah sampai capek sendiri.",
  "Ada orang yang bisa jadi teman seru kalau kamu berani mulai ngobrol duluan.",
  "Kalau kangen teman lama, kirim pesan. Gengsi nggak bisa ngetik sendiri.",
  "Duduk bareng di kantin kadang lebih honest daripada obrolan panjang di chat.",
  "Kalau temanmu curhat malam-malam, dengerin. Tapi inget, kamu juga perlu tidur.",
  "Teman deket tetap butuh batasan. Kamu boleh sayang tanpa harus selalu tersedia.",
  "Hari ini kamu butuh ketawa yang nggak estetik sama sekali. Yang penting lega.",
  "Dia suka ngejek kamu, tapi kalau orang lain ngejek, dia maju duluan. Bestie behavior.",
  "Gosip memang seru, tapi nggak semua cerita perlu kamu pegang. Pilih aman.",
  "Kalian bisa ketawa cuma dari satu tatapan. Itu bukan telepati, itu kebiasaan chaos bareng.",
  "Kalau ada teman mulai menjauh, jangan langsung tuduh. Coba tanya pelan-pelan.",
  "Nggak semua support harus heboh. Ada yang cukup hadir dan tetap milih untuk tinggal.",
  "Dia panik duluan, kamu ikut panik, akhirnya kalian panik berjamaah. Solid sih.",
  "Dia keliatan santai terus. Dekati saat hidupmu mulai kayak tab browser kebanyakan kebuka.",
  "Kalau semuanya lagi sensitif, jangan paksa bercanda. Diam sebentar bisa menyelamatkan hubungan.",
  "Ada yang suka ngilang kalau kerja kelompok. Kalau muncul lagi, sambut dengan tugasnya.",
  "Teman sejati punya foto jelekmu, tapi tidak menyebarkannya. Kecuali pas ulang tahun.",
  "Kalau dia berani bilang kamu salah, jangan langsung marah. Bisa jadi dia genuinely peduli.",
  "Kadang healing terbaik bukan pergi jauh, tapi ngobrol random sampai lupa masalah.",
  "Chat pendek bisa kedengeran jutek. Jangan langsung tersinggung, mungkin dia cuma lapar.",
  "Teman yang nunggu kamu selesai beres-beres itu hal kecil, tapi manis banget.",
  "Hari ini kamu butuh teman yang sama-sama mau bertahan sampai bel pulang.",
  "Obrolan lima menit bisa bikin hari jauh lebih ringan. Jangan remehkan ngobrol receh.",
  "Ada teman yang bakal ngingetin tugas, jadwal, atau hidupmu yang mulai berantakan.",
  "Kalau ada yang mengganjal, bicarakan. Temanmu bukan pembaca pikiran.",
  "Orang yang mau berbagi payung, makanan, atau tempat duduk biasanya layak disimpan baik-baik.",
  "Nggak semua teman harus satu circle. Kadang yang beda justru bikin hidup lebih luas.",
  "Dia tahu kapan bercanda dan kapan harus diam. Skill langka, hargai.",
  "Temanmu bisa salah, kamu juga. Jangan langsung cut off orang cuma karena satu hari buruk.",
  "Kalian sering ribut, tapi kalau ada masalah dari luar, kompaknya tiba-tiba muncul.",
  "Kalau dia menghilang sebentar, mungkin butuh ruang. Jangan langsung bikin asumsi drama.",
  "Satu meme dari dia bisa menyelamatkan hari yang hampir gagal total.",
  "Ada yang mungkin nunggu kamu menyapa duluan. Coba kirim pesan kecil.",
  "Nggak perlu punya banyak teman. Punya beberapa yang genuinely tulus udah lebih dari cukup.",
  "Lucu itu bagus, tapi lihat juga wajah temanmu. Kalau mulai diam, mungkin udah cukup.",
  "Momen kecil bareng teman hari ini bisa jadi cerita yang nanti kalian rindukan."
];

function buildReadings() {
  readings.academic = academicTitles.map((title, index) => ({
    title,
    text: academicTexts[index]
  }));
  readings.love = loveTitles.map((title, index) => ({
    title,
    text: loveTexts[index]
  }));
  readings.friendship = friendshipTitles.map((title, index) => ({
    title,
    text: friendshipTexts[index]
  }));
}

const steps = [
  { key: "academic", label: "📚 Akademik", line: () => randomFrom(academicStepLines) },
  { key: "love", label: "💖 Percintaan", line: () => randomFrom(loveStepLines) },
  { key: "friendship", label: "👥 Pertemanan", line: () => randomFrom(friendStepLines) }
];

let selectedCards = [];
let currentStep = 0;
let finalReadings = [];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setRandomDialogs() {
  const assistantOne = document.getElementById("assistantOneText");
  const intro = document.getElementById("introText");
  const arum = document.getElementById("arumText");
  const assistantTwo = document.getElementById("assistantTwoText");

  if (assistantOne) assistantOne.innerText = randomFrom(assistantOneLines);
  if (intro) intro.innerText = randomFrom(introLines);
  if (arum) arum.innerText = randomFrom(arumLines);
  if (assistantTwo) assistantTwo.innerText = randomFrom(assistantTwoLines);

  renderVisitFlow("start");
}

function renderVisitFlow(key) {
  const data = visitFlow[key];
  const area = document.getElementById("choiceArea");
  const assistantText = document.getElementById("assistantOneText");

  if (!area || !data) return;

  if (assistantText) {
    assistantText.classList.toggle("hidden", key !== "start");
  }

  area.innerHTML = `
    <p class="choice-title">${data.text}</p>
    <div class="choice-buttons">
      ${data.choices.map(choice => `
        <button onclick="renderVisitFlow('${choice.next}')">${choice.label}</button>
      `).join("")}
    </div>
  `;

  const startBtn = document.getElementById("startBtn");
  if (data.choices.length === 0 && startBtn) {
    startBtn.classList.remove("hidden");
  }
}

function goScene(id) {
  document.querySelectorAll(".scene").forEach(scene => scene.classList.remove("active"));
  const scene = document.getElementById(id);
  if (scene) scene.classList.add("active");
}

function createCards() {
  const area = document.getElementById("cardArea");
  if (!area) return;
  area.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const card = document.createElement("div");
    card.className = "small-card";
    card.onclick = () => chooseCard(card);
    area.appendChild(card);
  }
}

function chooseCard(card) {
  if (card.classList.contains("selected")) return;
  if (selectedCards.length >= 3) return;

  card.classList.add("selected");
  selectedCards.push(card);

  const guide = document.getElementById("guideText");
  if (guide) guide.innerText = `Udah pilih ${selectedCards.length} dari 3 kartu.`;

  if (selectedCards.length === 3) {
    if (guide) guide.innerText = "Oke, pilihanmu terkunci. Arum siap bukain kartunya satu-satu.";
    const readBtn = document.getElementById("readBtn");
    if (readBtn) readBtn.classList.remove("hidden");
  }
}

function startReading() {
  finalReadings = [
    randomFrom(readings.academic),
    randomFrom(readings.love),
    randomFrom(readings.friendship)
  ];
  currentStep = 0;
  prepareReading();
  goScene("sceneReading");
}

function prepareReading() {
  const step = steps[currentStep];
  const bigCard = document.getElementById("bigCard");
  if (bigCard) bigCard.classList.remove("open");

  const readingTitle = document.getElementById("readingTitle");
  const readerLine = document.getElementById("readerLine");
  const cardTitle = document.getElementById("cardTitle");
  const cardMessage = document.getElementById("cardMessage");
  const nextBtn = document.getElementById("nextBtn");

  if (readingTitle) readingTitle.innerText = step.label;
  if (readerLine) readerLine.innerText = step.line();
  if (cardTitle) cardTitle.innerText = "";
  if (cardMessage) cardMessage.innerText = "";
  if (nextBtn) nextBtn.innerText = "Buka Kartu";
}

function nextReading() {
  const bigCard = document.getElementById("bigCard");
  const nextBtn = document.getElementById("nextBtn");

  if (!bigCard || !nextBtn) return;

  if (!bigCard.classList.contains("open")) {
    const reading = finalReadings[currentStep];
    const cardTitle = document.getElementById("cardTitle");
    const cardMessage = document.getElementById("cardMessage");

    if (cardTitle) cardTitle.innerText = reading.title;
    if (cardMessage) cardMessage.innerText = reading.text;

    bigCard.classList.add("open");
    nextBtn.innerText = currentStep < 2 ? "Kartu Berikutnya →" : "Lihat Rekap →";
    return;
  }

  currentStep++;
  if (currentStep < 3) {
    prepareReading();
  } else {
    showRecap();
  }
}

function showRecap() {
  const sceneEnd = document.getElementById("sceneEnd");
  if (!sceneEnd) return;

  const recap = finalReadings.map((item, index) => `
    <div class="recap-card">
      <h3>${steps[index].label}</h3>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>
  `).join("");

  sceneEnd.innerHTML = `
    <img class="bg" src="https://cdn.jsdelivr.net/gh/disarm34corrupt-tech/Pensi@main/2_20260610_142729_0001.png">
    <img class="reader reading-reader" src="https://cdn.jsdelivr.net/gh/disarm34corrupt-tech/Pensi@main/1_20260610_142558_0000.png">
    <div class="dialog recap-dialog">
      <span class="character-name">Arum</span>
      <h2>Rekap Kartumu ✨</h2>
      <p class="closing-text">${randomFrom(recapLines)}</p>
      <div class="recap-list">${recap}</div>
      <p class="closing-text">Screenshot dulu sebelum hilang dari layar 👀</p>
      <button onclick="showClosing()">Selesai →</button>
    </div>
  `;

  goScene("sceneEnd");
}

function showClosing() {
  const sceneEnd = document.getElementById("sceneEnd");
  if (!sceneEnd) return;

  sceneEnd.innerHTML = `
    <img class="bg" src="https://cdn.jsdelivr.net/gh/disarm34corrupt-tech/Pensi@main/4_20260610_142729_0003.png">
    <img class="character assistant2" src="https://cdn.jsdelivr.net/gh/disarm34corrupt-tech/Pensi@main/3_20260610_142558_0002.png">
    <div class="dialog">
      <span class="character-name">Asisten Tarot</span>
      <h2>Makasih Sudah Mampir 💚</h2>
      <p>${randomFrom(assistantTwoLines)}</p>
      <button onclick="restartGame()">Main Lagi →</button>
    </div>
  `;
}

function rebuildSceneEnd() {
  const sceneEnd = document.getElementById("sceneEnd");
  if (!sceneEnd) return;

  sceneEnd.innerHTML = `
    <img class="bg" src="https://cdn.jsdelivr.net/gh/disarm34corrupt-tech/Pensi@main/4_20260610_142729_0003.png">
    <img class="character assistant2" src="https://cdn.jsdelivr.net/gh/disarm34corrupt-tech/Pensi@main/3_20260610_142558_0002.png">
    <div class="dialog">
      <span class="character-name">Asisten Tarot</span>
      <h2>Makasih Sudah Mampir 💚</h2>
      <p id="assistantTwoText"></p>
      <button onclick="restartGame()">Main Lagi →</button>
    </div>
  `;
}

function restartGame() {
  selectedCards = [];
  currentStep = 0;
  finalReadings = [];

  rebuildSceneEnd();

  const readBtn = document.getElementById("readBtn");
  if (readBtn) readBtn.classList.add("hidden");

  const startBtn = document.getElementById("startBtn");
  if (startBtn) startBtn.classList.add("hidden");

  const guide = document.getElementById("guideText");
  if (guide) guide.innerText = "Pilih tiga kartu yang paling menarik perhatianmu.";

  buildReadings();
  setRandomDialogs();
  createCards();
  goScene("sceneStart");
}

buildReadings();
setRandomDialogs();
createCards();