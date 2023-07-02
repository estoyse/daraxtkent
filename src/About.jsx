import Header from './sections/Header';

const About = () => {
  return (
    <>
      <Header />
      <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
        <div className='flex items-center justify-center flex-col max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
          <div className='w-2/3 text-center h-[100vh] flex items-center justify-center'>
            <h1 className='text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl'>
              Daraxtkent Map{' '}
              <span className='text-primary dark:text-white'>
                loyihasi haqida
              </span>
            </h1>
          </div>
          <p className='text-align-left text-gray-600 dark:text-gray-300 my-4 text-lg'>
            Daraxtlar — bu qurilish, yo‘llarning kengayishiga «to‘sqinlik
            qiladigan» yoki oddiygina binolarning fasadiga to‘g‘ri kelmaydigan
            estetik predmetlar emas. Daraxtlar inson hayoti va sog‘lig‘i uchun
            juda ahamiyatlidir. Ma’lumki, ifloslangan havo bilan nafas olish
            yurak xurujlari, insult, diabet va yuqori qon bosimi kabi salomatlik
            bilan bog‘liq muammolarni keltirib chiqarishi mumkin.
          </p>
          <p className='text-align-left text-gray-600 dark:text-gray-300 my-4 text-lg'>
            O&apos;zbekiston aholisi bu ro&apos;yxatda 2-o&apos;rinda turadi.
            Ya&apos;ni 31% aholi orasida ekologik qiziqish mavjud emas va ular
            iqlim o&apos;zgarishlarini real xavf deb hisoblashmaydi. Bu esa
            aholi orasida ko&apos;plab tushuntirishlar olib borish va ekologik
            ogohlikni oshirish muhim ekanligini ko&apos;rsatadi.
          </p>
          <p className='text-align-left text-gray-600 dark:text-gray-300 my-4 text-lg'>
            Yel universiteti tomonidan tuzilgan ekologik natijadorlik indeksi 11
            toifadagi samaradorlik ko‘rsatkichlaridan foydalanadi va atrof-muhit
            holati va ekotizimning barqarorligi bo‘yicha 180 mamlakatni
            baholaydi. 2020 yilgi tadqiqotlarga ko‘ra, havo sifati
            ko‘rsatkichlari bo‘yicha O‘zbekiston dunyoning 180 mamlakati orasida
            177-o‘rinni egalladi.
          </p>
          <p className='text-align-left text-gray-600 dark:text-gray-300 my-4 text-lg'>
            Aniq savol vujudga keladi: endi nima qilish kerak? Qanday qilib havo
            sifatini yaxshilash va dunyodagi eng iflos havodan nafas olishni
            to‘xtatish mumkin? Biz qila oladigan eng birinchi, eng oson va eng
            qulay harakat — daraxtlarni boshqa kеsmaslikdir! Tadqiqotlar havo
            sifatining yomonligi yurak-qon tomir kasalliklari o‘lim holatining
            19 foiziga va o‘pka saratoni o‘lim holatining 29 foiziga sabab
            ekanligini ko‘rsatib turibdi. Bundan ko‘rinadiki, sog‘liqqa
            ko‘rsatilgan bu ta’sirlar sog‘liqni saqlash xizmatlariga
            xarajatlarning oshishiga va katta iqtisodiy xarajatlarga olib
            keladi. The Lancet jurnalida chop etilgan 2017 yilgi tadqiqotlar
            shuni ko‘rsatdiki, shaharlarda ko‘kalamzorlashtirishning 10% ga
            ko‘payishi erta o‘limning o‘rtacha 4% ga kamayishiga olib kelgan.
          </p>

          <div className='image-container'>
            <div className='images w-full flex-col flex sm:flex-row mt-8'>
              <img
                className='w-full m-2 sm:w-1/2'
                src='/images/toshkent-before.jpg'
                alt="toshkent shahrining sun'iy yo'ldoshdan 2005-yilda olingan surati"
              />
              <img
                className='w-full m-2 sm:w-1/2'
                src='/images/toshkent-after.jpg'
                alt="toshkent shahrining sun'iy yo'ldoshdan 2020-yilda olingan surati"
              />
            </div>
            <p className='text-center text-gray-600 dark:text-gray-300 mb-4'>
              Toshkent (birinchi surat — 2005 yil iyul, ikkinchisi — 2020 yil
              may). Manba: Google Earth.
            </p>
            <div className='images w-full flex-col flex sm:flex-row mt-8'>
              <img
                className='w-full m-2 sm:w-1/2'
                src='/images/chilonzor-before.jpg'
                alt="toshkent shahrining sun'iy yo'ldoshdan 2005-yilda olingan surati"
              />
              <img
                className='w-full m-2 sm:w-1/2'
                src='/images/chilonzor-after.jpg'
                alt="toshkent shahrining sun'iy yo'ldoshdan 2020-yilda olingan surati"
              />
            </div>
            <p className='text-center text-gray-600 dark:text-gray-300 mb-4'>
              Toshkent, Chilonzor tumani (birinchi surat — 2008 yil iyun,
              ikkinchisi — 2019 yil iyul). Manba: Google Earth.
            </p>
            <div className='images w-full flex-col flex sm:flex-row mt-8'>
              <img
                className='w-full m-2 sm:w-1/2'
                src='/images/milliy-bog-before.jpg'
                alt="toshkent shahrining sun'iy yo'ldoshdan 2005-yilda olingan surati"
              />
              <img
                className='w-full m-2 sm:w-1/2'
                src='/images/milliy-bog-after.jpg'
                alt="toshkent shahrining sun'iy yo'ldoshdan 2020-yilda olingan surati"
              />
            </div>
            <p className='text-center text-gray-600 dark:text-gray-300 mb-4'>
              Toshkent, sobiq Komsomol ko‘li (hozirgi Milliy Bo&apos;g va Magic
              City)(birinchi surat — 2014 yil iyul, ikkinchisi — 2020 yil
              avgust). Manba: Google Earth.
            </p>
            <div className='images w-full flex-col flex sm:flex-row mt-8'>
              <img
                className='w-full m-2 sm:w-1/2'
                src='/images/city-before.jpg'
                alt="toshkent shahrining sun'iy yo'ldoshdan 2005-yilda olingan surati"
              />
              <img
                className='w-full m-2 sm:w-1/2'
                src='/images/city-after.jpg'
                alt="toshkent shahrining sun'iy yo'ldoshdan 2020-yilda olingan surati"
              />
            </div>
            <p className='text-center text-gray-600 dark:text-gray-300 mb-4'>
              Toshkent markazi (birinchi surat — 2008 yil iyul, ikkinchisi —
              2020 yil avgust). Manba: GoogleEarth.
            </p>
          </div>
          <h2 className='my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl'>
            Loyihaning amaliy g&apos;oyasi
          </h2>
          <p className='text-align-left text-gray-600 dark:text-gray-300 my-4 text-lg'>
            Dunyoda daraxlarning kesilishi mumkin bo’lgan har bir holat, ularni
            boshqa joyga ko’chirib o’tkazish bo’yicha jamoatchilik muhokamasini
            talab etadigan amaliyot mavjud. Yaqin atrofda yashovchiliarni
            daraxtlar kesilishi mumkin bo’lgan holatlarda yozma tartibda
            xabardor qilishi mumkin. Yozma xabarnoma kesilishi rejalashtirilgan
            daraxt yaqinida osib qo’yilishi kerak. Unda so’z yuritilayotgan
            daraxt, uning kesilish sabablari va jamoat muhikamasi o’tkaziladigan
            vaqt, joy ko’rsatiladi. Barcha hohlovchilar muhokamada ishtirok
            etishlari mumkin.
          </p>
          <p className='text-align-left text-gray-600 dark:text-gray-300 my-4 text-lg'>
            Agar har bir fuqaro shahar daraxtlari, shahar bog‘lari va yashil
            maydonlarning ahamiyatini tushunishni boshlamasa va ular uchun
            javobgarlikni his qilmasa, bu muammoni hal qilish mushkul bo‘ladi.
          </p>
          <div className='image-container'>
            <img
              className='w-full m-2'
              src='/images/adopt-a-tree.jpg'
              alt='Adopt-A-Tree dasturidan olingan daraxtlar xaritasi, Kembrij, Massachusets, 2021 yil.'
            />
            <p className='text-center text-gray-600 dark:text-gray-300 mb-4'>
              Adopt-A-Tree dasturidan olingan daraxtlar xaritasi, Kembrij,
              Massachusets, 2021 yil
            </p>
          </div>
          <p className='text-align-left text-gray-600 dark:text-gray-300 my-4 text-lg'>
            Eng avvalo, shahardagi har bir daraxt o‘z pasportiga va xaritadagi
            joyiga ega bo‘lishi kerak. Aholi o‘z uylari (biznesi, maktabi va
            h.k.) yaqinida o‘sayotgan daraxtlarni «asrab olishi» va ularni
            sug‘orish va to‘g‘ri parvarish qilish majburiyatini olishlari
            mumkin. Ushbu vazifani shahar aholisi hech bir qiyinchiliksiz bajara
            oladi va hozirdanoq uni keng miqyosda amalga oshirishni boshlash
            mumkin. Boshqacha qilib aytganda, har bir daraxtning unga
            g‘amxo‘rlik qiladigan, ayniqsa, zanjirli benzoarrali odamlardan
            himoya qiladigan kishisi bo‘lishi kerak.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
