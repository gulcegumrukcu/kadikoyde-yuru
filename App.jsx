// App.jsx Do no delete this


import React, { useState, useEffect, useRef } from 'react';
import EntrancePage from './src/components/EntrancePage';
import { useDispatch } from 'react-redux';


import Footer from './src/components/Footer';
import QuestionComponent from './src/components/QuestionComponent';
import Settings from './src/components/Settings';
import utils from './src/components/utils';




function generateRandomStat() {
  return Math.floor(Math.random() * (65 - 45 + 1)) + 45;
}


function App() {
  const [showIntelligenceCheckAnimation, setShowIntelligenceCheckAnimation] = useState(false);
  const statMoneyChangeRef = useRef(false);
  const statMoodChangeRef = useRef(false);
  const statHealthChangeRef = useRef(false);
  const statIntelligenceChangeRef = useRef(false);
  const [showMoneyAnimation, setShowMoneyAnimation] = useState(false);
  const [showMoodAnimation, setShowMoodAnimation] = useState(false);
  const [showHealthAnimation, setShowHealthAnimation] = useState(false);
  const [showIntelligenceAnimation, setShowIntelligenceAnimation] = useState(false);
  const dispatch = useDispatch();
  const handleToggleSound = () => {
    // Implement sound control logic here

  };

  const handleMenuClick = () => {
    // Implement settings logic here

  };

  /* const [gameOver, setGameOver] = useState(false); */

  const [showEntrancePage, setShowEntrancePage] = useState(true);

  const handleEntrancePageReady = () => {
    setShowEntrancePage(false);
  };


  const [userChoseSuIc, setUserChoseSuIc] = useState(false);
  const [merdivenYolu, setMerdivenYolu] = useState(false);




  const [story, setStory] = useState({
    text: [
      {
        text: '“İyi sabahlar.”\n',
        style: {

          fontWeight: 'bold',
          color: 'white',
        },
      },
      '\nBir adam silüetine hoşgeldin. Bu görüntüyü silüetten bir kimliğe çekmen gerekiyor.\n',
      ,
    ],
    choices: [
      { text: 'GÖZLERİNİ OVUŞTUR', target: 'adiNeydi' },
      { text: 'ADAMI DİNLEMEYE ÇALIŞ', target: 'yagmurYagdi' },
    ],
    buttonsDisabled: false,
    background: './images/siluet.png',
  });

  const [characterStats, setCharacterStats] = useState({
    health: generateRandomStat(),
    money: generateRandomStat(),
    mood: generateRandomStat(),
    time: generateRandomStat(),
    intelligence: generateRandomStat(),
  });



  const [showFooter, setShowFooter] = useState(true);
  const { handleMoodAnimation, handleIntelligenceCheckAnimation, handleMoneyAnimation, handleHealthAnimation, handleIntelligenceAnimation } = utils;



  async function handleChoice(path) {
    /* if (gameOver || story.buttonsDisabled) return; */
    let newMoneyDecrease;
    let newMoodDecrease;
    let newMoodIncrease;
    let newMoneyIncrease;
    let newHealthDecrease;
    let newHealthIncrease;
    let newIntelligenceDecrease;
    let newIntelligenceIncrease;

    const newCharacterStats = characterStats || {
      health: generateRandomStat(),
      money: generateRandomStat(),
      mood: generateRandomStat(),
      time: generateRandomStat(),
      intelligence: generateRandomStat(),
    };

    /* checkAndHandleEnding('Health', newCharacterStats.health);
    checkAndHandleEnding('Money', newCharacterStats.money);
    checkAndHandleEnding('Mood', newCharacterStats.mood);
    checkAndHandleEnding('Intelligence', newCharacterStats.intelligence);

 */

    if (story.buttonsDisabled) return;
    setStory((prevStory) => {
      switch (path) {




        case 'adiNeydi':

          setShowFooter(true);
          return {
            ...prevStory,
            text: [
              ,
              'Adamı kesinlikle tanıyorsun. Burada yaşadığın süre boyunca en az bir defa gördün. \n\n Bu adam senin apartman yöneticin, adı neydi?',
            ],
            choices: [
              { text: 'SUAT', target: 'suat' },
              { text: 'ÖNEMİ VAR MI?', target: 'onemiVarMi' },
            ],
            buttonsDisabled: false,

            background: './images/yonetici1.png',
          };
        case 'yagmurYagdi':
          return {
            ...prevStory,

            text: [
              {
                text: '“Ya biliyorsun geçen çok fena yağmur yağdı, borular morular sorular aklımda binbir tane, boyalar falan sökülmüş akmış hep duvarlar üstüme üstüme geliyor…”',
                style: {

                  fontWeight: 'bold',
                  color: 'white',
                  fontStyle: 'italic',
                },
              }


            ],
            choices: [
              { text: '"NASIL YANİ ABİ?"', target: 'neDiyor' },
              { text: 'BEN BİR SU İÇEYİM', target: 'su' },
            ],
            buttonsDisabled: false,
            background: './images/yari-siluet.png',
          };
        case 'neDiyor':
          return {
            ...prevStory,
            text: [
              {
                text: '“Yav işte yağmur büyümüş dolu olmuş, dolu büyümüş çatıya konmuş. Kedi içti ağaca çıktı balta kesti suya düştü inek içti dağa kaçtı yandı bitti kül oldu.” ',
                style: {

                  fontWeight: 'bold',
                  color: 'white',
                  fontStyle: 'italic',
                },
              },


              '\n\n Ne diyor bu adam? ',
            ],

            choices: [
              { text: 'ÇATI AKITMIŞ ONU YAPTIRACAĞIZ.', target: 'cati' },
              { text: 'YÖNETİCİNİN DEDESİ ÇATIYA ÇIKMIŞ, ONU İNDİRECEĞİZ.', target: 'icSesim' },
            ],
            buttonsDisabled: false,
            background: './images/yonetici2.png',
          };
        case 'su':
          newMoodIncrease = 10;
          newHealthIncrease = 10;
          setUserChoseSuIc(true);
          handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation, statMoodChangeRef, true, 0);
          handleHealthAnimation(dispatch, newHealthIncrease, setShowHealthAnimation, statHealthChangeRef, true, 0);
          statMoodChangeRef.current = true;
          statHealthChangeRef.current = true;
          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: prevStats.mood + newMoodIncrease,
            health: prevStats.health + newHealthIncrease,
          }));
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });
          dispatch({ type: 'CHANGE_HEALTH', payload: newHealthIncrease });
          return {
            ...prevStory,
            text: [
              'Su inanılmaz güzel. Derinin en doğru yerlerinden nemlendiğini ve ciğerlerinin havayla dolduğunu hissediyorsun. \n\n Şimdi bir düşün bakalım ne diyor bu adam?',
            ],
            choices: [
              { text: 'ÇATI AKITMIŞ ONU YAPTIRACAĞIZ.', target: 'cati' },
              { text: 'YÖNETİCİNİN DEDESİ ÇATIYA ÇIKMIŞ, ONU İNDİRECEĞİZ.', target: 'icSesim' },
            ],
            buttonsDisabled: false,
            background: './images/su.png',

          };
        case 'cati':
          return {
            ...prevStory,
            text: [
              {
                text: '“Heh işte onun için para vermen lazım ki biz de adama verelim.”',

                style: {
                  fontWeight: 'bold',
                  color: 'white',
                  fontStyle: 'italic',
                },
              },
            ],
            choices: [
              { text: '“TABİİ ABİ BİR SANİYE.” \n\nPARAYI VER.', target: 'usta' },
              { text: '"BEN SANA IBANDAN ATAYIM ABİ ONU, NAKTİM KALMADI HİÇ.” \n\nYALAN SÖYLE', target: 'yalan' },

            ],
            buttonsDisabled: false,
            background: './images/yonetici-el.png',

          };
        case 'icSesim':


          return {
            ...prevStory,
            text: [
              {
                text: 'Aynen öyle, apartmanda 7 metrelik bir merdiveni bulabilecek tek kişi sen olduğun için de sana geldiler. \n\n İçini bir kahramanlık ateşi sarıyor ve apartman yöneticin sana soru sorar gözler ile bakıyor. ',
                style: {
                  fontWeight: 'bold',

                  fontStyle: 'italic',

                },
              },
              {
                text: '\n\n 7 metrelik merdivenini almaya gidecek misin?',

              }



            ],
            choices: [
              {
                text: 'BU KADAR SAÇMA OLAMAZ. \nKESIN BAŞKA BIR ŞEY SÖYLÜYORDUR.',

                target: 'catiSesim',
              },
              { text: '“TABİ Kİ… APARTMANIMIN BANA İHTIYACI VAR.” \nEVDEN ÇIK.', target: 'merdiven' },
            ],
            buttonsDisabled: false,
            background: './images/yonetici-cep.png',
          };
        case 'catiSesim':
          return {
            ...prevStory,

            text: [
              'Çatıyla ilgili başka ne olabilir? Salonun kenarında tavandan damlayan su… Çatıyı tamir ettiriyorlar!',
            ],
            choices: [
              { text: '“TAMAM ABİ HALLEDELİM ONU BENCE DE…”', target: 'cati' },
              { text: 'BU İNANDIRICI GELMEDİ, 7 METRELİK MERDİVEN AVINA GİDELİM.', target: 'merdiven' },
            ],
            buttonsDisabled: false,
            background: './images/kova.png',
          };
        case 'merdiven':
          setMerdivenYolu(true)
          return {
            ...prevStory,



            text: [
              {
                text: 'Hazırlanma hızın inanılmaz.',
                style: {
                  fontWeight: 'bold',

                  fontStyle: 'italic',

                },
              },

              '\n\nMerdiven yolu onurlu bir yol. Bol şans.',

            ],
            choices: [
              { text: 'EVDEN ÇIK', target: 'merdivenDilenci' },

            ],
            buttonsDisabled: false,
            background: './images/cikis.png',
          };
        case 'usta':
          newMoneyDecrease = 10; // Adjust the amount as needed

          handleMoneyAnimation(dispatch, newMoneyDecrease, setShowMoneyAnimation, statMoneyChangeRef, false); // Decrease money

          statMoneyChangeRef.current = true;
          setCharacterStats((prevStats) => ({
            ...prevStats,
            money: Math.max(prevStats.money - newMoneyDecrease, 0), // Ensure non-negative value
          }));
          dispatch({ type: 'CHANGE_MONEY', payload: -newMoneyDecrease });
          return {
            ...prevStory,
            text: [
              {
                text: '“Usta yarım saate geliyor çatıya bakmaya, sen buradasın değil mi?. Adamın başında dur da kaytarmasın.” ',
                style: {
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },
            ],
            choices: [
              { text: '"YOK ABİ BENİM ÇIKMAM LAZIM"', target: 'cikis' },
            ],
            buttonsDisabled: false,
            background: './images/yonetici-cep.png',
          };
        case 'yalan':


          return {
            ...prevStory,
            text: [
              {
                text: '“İyi bana hatırlatırsın, IBAN’ı atarım Whatsapp’tan. \n Sen buradasın, değil mi? Adamın başında dur da kaytarmasın.”',
                style: {
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },
            ],
            choices: [
              { text: '"YOK ABİ BENİM ÇIKMAM LAZIM"', target: 'cikis' },
            ],
            buttonsDisabled: false,
            background: './images/yonetici-cep.png',
          };
        case 'cikis':

          return {
            ...prevStory,
            text: [
              {
                text: 'Hazırlanma hızın inanılmaz. Abiyi başından saldığına göre dışarı çıkmaya hazırsın.',

              },
            ],
            choices: [
              { text: 'EVDEN ÇIK', target: 'dilenci' },
            ],
            buttonsDisabled: false,
            background: './images/cikis.png',
          };
        case 'suat':

          return {
            ...prevStory,
            text: [
              {
                text: '“Eyvallah Suat abi, sana da. ”',
                style: {
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },
              ' deyiverdin. \n\n Bakışları değişmedi, ama sözünü kestiğin için ilginç bir yinelemenin içine düştü. \n\nDilinle damağının arasındaki sürtünme katsayısı hoşuna gidenden çok daha az. \n\nHidrasyonla igili ne düşünürsün?'
            ],
            choices: [
              { text: 'SU İÇ', target: 'suIc' },
              { text: 'NİYE GELMİŞ BU ADAM?', target: 'aidat' },
            ],
            buttonsDisabled: false,
            background: './images/yonetici1.png',
          };
        case 'suIc':
          newMoodIncrease = 10;
          newHealthIncrease = 10;
          setUserChoseSuIc(true);
          handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation, statMoodChangeRef, true, 0);
          handleHealthAnimation(dispatch, newHealthIncrease, setShowHealthAnimation, statHealthChangeRef, true, 0);
          statMoodChangeRef.current = true;
          statHealthChangeRef.current = true;
          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: prevStats.mood + newMoodIncrease,
            health: prevStats.health + newHealthIncrease,
          }));
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });
          dispatch({ type: 'CHANGE_HEALTH', payload: newHealthIncrease });
          return {
            ...prevStory,
            text: [
              {
                text: 'Su çok güzel, ciğerlerine doğru gelen canlanma hissi sana çok müthiş hissettiriyor ve her şey daha net.',

              },
            ],
            choices: [
              { text: 'OH BE. ŞİMDİ Bİ BAKALIM NE DİYOR SUAT ABİ.', target: 'aidat' },

            ],
            buttonsDisabled: false,
            background: './images/su.png',

          };
        case 'aidat':


          return {
            ...prevStory,
            text: [

              'Adam söylediklerine kaldığı yerden devam ediyor. ',
              {
                text: '\n\n“İşte senin aidatı bugün vermen lazım ki, biz de ustaya vereceğiz.”',
                style: {
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },

            ],
            choices: [
              { text: '“TABİİ ABİ BİR SANİYE.” \n\nPARAYI VER.', target: 'usta' },
              { text: '"BEN SANA IBANDAN ATAYIM ABİ ONU, NAKTİM KALMADI HİÇ.” \n\nYALAN SÖYLE', target: 'yalan' },
            ],
            buttonsDisabled: false,
            background: './images/yonetici-el.png',


          };
        case 'onemiVarMi':


          return {
            ...prevStory,
            text: [
              {
                text: '“Eyvallah abi, sana da. ”',
                style: {
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },
              ' deyiverdin. \n\n Adam söylediklerine kaldığı yerden devam ediyor. \n\n',
              {
                text: '“İşte senin aidatı bugün vermen lazım ki, biz de ustaya vereceğiz.”',
                style: {
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },

            ],
            choices: [
              { text: '“TABİİ ABİ BİR SANİYE.” \n\nPARAYI VER.', target: 'usta' },
              { text: '"BEN SANA IBANDAN ATAYIM ABİ ONU, NAKTİM KALMADI HİÇ.” \n\nYALAN SÖYLE', target: 'yalan' },
            ],
            buttonsDisabled: false,
            background: './images/yonetici-el.png',


          };
        case 'merdivenDilenci':

          return {
            ...prevStory,
            text: [
              'Sokağa çıktın ve vazgeçmek için çok geç olduğunun farkındasın. \n\nNalbur sormak için gördüğün ilk tekele girmek üzereyken bir dilenci yanında bitti.',
              {
                text: ' \n\n“Çocuğuma şuradan bir tavuk alabilir misin?”',
                style: {

                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',


                },
              },
            ],

            choices: [
              { text: 'BEN DE AY BAŞINI BEKLİYORUM VALLA', target: 'aybasi' },
              { text: 'TABİ Kİ... BİR ÖZEL ANTAKYA SOSLU ZURNA?', target: 'dilenciParasiz' },
            ],
            buttonsDisabled: false,
            background: './images/second.png',
            characterImage: './images/teyze.png', // Add the path to your teyze.png

          };
        case 'dilenci':

          return {
            ...prevStory,
            text: [
              'Sokağa çıktın ve ilk köşeyi döner dönmez bir dilenci yanında bitti.',
              {
                text: ' \n\n“Çocuğuma şuradan bir tavuk alabilir misin?”',
                style: {

                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',


                },
              },
            ],

            choices: [
              { text: 'BEN DE AY BAŞINI BEKLİYORUM VALLA', target: 'aybasi' },
              { text: 'TABİ Kİ... BİR XXL ÖZEL ANTAKYA SOSLU ZURNA TAVUK DÜRÜM GELİYOR!', target: 'dilenciParasiz' },
            ],
            buttonsDisabled: false,
            background: './images/second.png',
            characterImage: './images/teyze.png', // Add the path to your teyze.png

          };
        case 'aybasi':

          return {
            ...prevStory,
            text: [

              {
                text: '"Canın sağ olsun."',
                style: {

                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',


                },
              },
              '\n\n Çocuğun varlığından emin olamasan bile bir bebişi doyuramamak vicdanına çöküyor.',

            ],

            choices: [
              { text: 'HEPSİNİ BEN Mİ DOYURAYIM KARDEŞİM, DEVLET YOK MU?', target: 'politikBilinc' },
              { text: 'EVET YA... KEŞKE TÜM AÇLARI DOYURABİLSEYDİM.', target: 'adakHayat' },
            ],
            buttonsDisabled: false,
            background: './images/second.png',
            characterImage: './images/teyze.png', // Add the path to your teyze.png

          };
        case 'dilenciParasiz':
          newMoneyDecrease = 10;
          handleMoneyAnimation(dispatch, newMoneyDecrease, setShowMoneyAnimation, statMoneyChangeRef, false, 0);
          statMoneyChangeRef.current = true;

          newMoodIncrease = 10;
          handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation, statMoodChangeRef, true, 0);
          statMoodChangeRef.current = true;

          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: Math.max(prevStats.mood + newMoodIncrease, 0), // Ensure non-negative value
            money: Math.max(prevStats.money - newMoneyDecrease, 0), // Ensure non-negative value
          }));
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });
          dispatch({ type: 'CHANGE_MONEY', payload: -newMoneyDecrease });
          console.log(merdivenYolu)


          return {
            ...prevStory,
            text: [
              {
                text: '“Allah senden razı olsun.”',
                style: {
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },
              {
                text: '\n\nAz önce bir dilenciye yardım ettin. Dünyadaki tüm insanlara karşı ahlaki üstünlüğünü parmak uçlarında hissediyorsun.',
              },
            ],
            choices: merdivenYolu
              ? [
                {
                  text: 'BU ARADA BURALARDA BİR NALBUR BİLİYOR MUSUNUZ?',
                  target: 'nalburSorusu',
                },
              ]
              : [
                {
                  text: '>',
                  target: 'korna',
                },
              ],


            buttonsDisabled: false,
            background: './images/second.png',
            characterImage: './images/teyze-gulen.png',
          };
        case 'politikBilinc':

          newMoodIncrease = 10,
            handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation, statMoodChangeRef, true, 0);
          statMoodChangeRef.current = true;


          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: Math.max(prevStats.mood + newMoodIncrease, 0), // Ensure non-negative value
          }));
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });
          return {
            ...prevStory,
            text: [
              {
                text: 'Haklısın. Bu politik bilinç içini rahatlatmak için yeter de artar bile.',

              },
            ],
            choices: merdivenYolu
              ? [
                {
                  text: 'BU ARADA BURALARDA BİR NALBUR BİLİYOR MUSUNUZ?',
                  target: 'nalburSorusu',
                },
              ]
              : [
                {
                  text: '>',
                  target: 'korna',
                },
              ],
            buttonsDisabled: false,
            background: './images/second.png',
            characterImage: './images/teyze.png', // Add the path to your teyze.png

          };
        case 'adakHayat':
          newIntelligenceDecrease = 10;

          handleIntelligenceAnimation(dispatch, newIntelligenceDecrease, setShowIntelligenceAnimation, statIntelligenceChangeRef, false);
          setCharacterStats((prevStats) => ({
            ...prevStats,
            intelligence: Math.max(prevStats.intelligence - newIntelligenceDecrease, 0),
          }));
          statIntelligenceChangeRef.current = true;
          dispatch({ type: 'CHANGE_INTELLIGENCE', payload: -newIntelligenceDecrease });


          return {
            ...prevStory,
            text: [
              {
                text: 'Keşke... Neden tüm bu sorumluluğu kabul edip hayatının geri kalanını buna adamıyorsun?',

              },
            ],
            choices: merdivenYolu
              ? [
                {
                  text: 'BU ARADA BURALARDA BİR NALBUR BİLİYOR MUSUNUZ?',
                  target: 'nalburSorusu',
                },
              ]
              : [
                {
                  text: '>',
                  target: 'korna',
                },
              ],
            buttonsDisabled: false,
            background: './images/second.png',
            characterImage: './images/teyze.png',

          };
        case 'korna':

          console.log('merdivenYolu:', merdivenYolu);


          return {
            ...prevStory,
            text: [
              {
                text: merdivenYolu
                  ? 'Yol sorabileceğin bir kahvehaneye denk geldin. Oraya girmek için yolun karşısına geçmeye çalıştığın sırada bir korna sesi sağ kulağını aldı götürdü. \n\n Bu, ters yönden gelen bir motor kurye.'
                  : 'Ne kadar mükemmel biri olduğunu düşünürken yoğun bir korna sesiyle gerçekliğe çekildin. \n\nTers yönden gelen bir motor kurye kaldırıma çıkmış ve yolundan çıkman için sana korna çalıyor.'
              }],
            choices: [
              { text: 'KUSURA BAKMAYIN, HEMEN ÇEKİLİYORUM', target: 'cekil' },
              { text: 'KALDIRIM ULAN BURASI DAVAR HERİF!', target: 'davar' },
            ],
            buttonsDisabled: false,
            background: './images/trafik.png',
            characterImage: './images/kurye.png',
          };
        case 'cekil':

          return {
            ...prevStory,
            text: [
              {
                text: '“Çok teşekkürler.”',
                style: {

                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',


                },
              },

              '\n\n Kurye teşekkür etmek için sana küçük bir tantuni fırlatıp uzaklaşmaya başlıyor. Yola devam?'
            ],
            choices: [
              { text: 'TANTUNİYİ YE', target: 'tantuni' },
              { text: 'YETER ARTIK, BEN VEGANIM', target: 'vegan' },
            ],
            buttonsDisabled: false,
            background: './images/trafik.png',
            characterImage: './images/kurye.png',

          };
        case 'vegan':
          newMoodIncrease = 10,
            handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation, statMoodChangeRef, true, 0);
          statMoodChangeRef.current = true;


          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: Math.max(prevStats.mood + newMoodIncrease, 0),
          }));
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });
          return {
            ...prevStory,
            text: [

              'Tamam, bunu not alıyoruz...',
            ],
            choices: [
              {
                text: 'GÜZEL',
                target: merdivenYolu ? 'kahvehane' : 'polis',
              },
            ],
            buttonsDisabled: false,
            background: './images/not.png',
            characterImage: null

          };
        case 'tantuni':
          newIntelligenceDecrease = 10;

          handleIntelligenceAnimation(dispatch, newIntelligenceDecrease, setShowIntelligenceAnimation, statIntelligenceChangeRef, false);
          setCharacterStats((prevStats) => ({
            ...prevStats,
            intelligence: Math.max(prevStats.intelligence - newIntelligenceDecrease, 0),
          }));
          statIntelligenceChangeRef.current = true;
          dispatch({ type: 'CHANGE_INTELLIGENCE', payload: -newIntelligenceDecrease });

          newHealthIncrease = 10;
          handleHealthAnimation(dispatch, newHealthIncrease, setShowHealthAnimation, statHealthChangeRef, true, 0);
          statHealthChangeRef.current = true;


          setCharacterStats((prevStats) => ({
            ...prevStats,
            health: Math.max(prevStats.health + newHealthIncrease, 0), // Ensure non-negative value
          }));
          dispatch({ type: 'CHANGE_HEALTH', payload: -newHealthIncrease });


          return {
            ...prevStory,
            text: merdivenYolu
              ?
              'Afiyet olsun. Şimdi şu merdiveni çabucak bulsan iyi edersin...'
              :
              'Afiyet olsun. Artık geç kalmamak için hızlansan iyi edersin...',
            choices: merdivenYolu ? [
              { text: '>', target: 'kahvehane' },
            ] : [
              { text: '>', target: 'polis' },
            ],
            buttonsDisabled: false,
            background: './images/trafik.png',
            characterImage: './images/kurye.png',

          };
        case 'davar':
          const textContent = 'Hakların için dik durdun. Bu harika bir his. Bu arada motor kurye elinde bir tantuniyi nunçaku gibi çevirerek sana yaklaşıyor.';

          const choices = [
            { text: 'KENDİNİ SAVUN', target: 'kendiniSavun' },
          ];

          if (merdivenYolu) {
            choices.push({ text: 'KENDİNİ KAHVEHANEYE AT', target: 'kahvehaneKarari' });
          } else {
            choices.push({ text: 'KAÇ', target: 'kac' });
          }

          return {
            ...prevStory,
            text: [textContent],
            choices,
            buttonsDisabled: false,
            background: './images/trafik.png',
            characterImage: './images/kurye.png',
          };
        case 'kendiniSavun':
          newHealthDecrease = 10;
          handleHealthAnimation(dispatch, newHealthDecrease, setShowHealthAnimation, statHealthChangeRef, false, 0);
          statHealthChangeRef.current = true;


          setCharacterStats((prevStats) => ({
            ...prevStats,
            health: Math.max(prevStats.health - newHealthDecrease, 0), // Ensure non-negative value
          }));
          dispatch({ type: 'CHANGE_HEALTH', payload: -newHealthDecrease });

          return {
            ...prevStory,
            text: [
              {
                text: 'Nunçakulu bir kuryeyi alt edebileceğine inanman güzel fakat gerçeklerle tanışma zamanı. Artık yoluna devam etmelisin.',

              },
            ],
            choices: merdivenYolu
              ? [
                {
                  text: '>',
                  target: 'kahvehane',
                },
              ]
              : [
                {
                  text: '>',
                  target: 'polis',
                },
              ],

            buttonsDisabled: false,
            background: './images/trafik.png',
            characterImage: null,

          };
        case 'kac':
          newHealthIncrease = 10;
          handleHealthAnimation(dispatch, newHealthIncrease, setShowHealthAnimation, statHealthChangeRef, true, 0);
          statHealthChangeRef.current = true;


          setCharacterStats((prevStats) => ({
            ...prevStats,
            health: Math.max(prevStats.health + newHealthIncrease, 0), // Ensure non-negative value
          }));
          dispatch({ type: 'CHANGE_HEALTH', payload: -newHealthIncrease });

          return {
            ...prevStory,
            text: [
              {
                text: 'Bugünlük kardiyonu halletmiş oldun. Yola devam..',

              },
            ],
            choices: [
              { text: '>', target: 'polis' },
            ],
            buttonsDisabled: false,
            background: './images/trafik.png',
            characterImage: null,

          };
        case 'nalburSorusu':


          return {
            ...prevStory,
            text: [
              {
                text: 'Hayır.',
                style: {
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },
              '\n\nGözlerinle etrafı tarayarak yürümeye devam ediyorsun.',
            ],
            choices: [
              { text: '>', target: 'korna' },
            ],
            buttonsDisabled: false,
            background: './images/second.png',
            characterImage: null,

          };
        case 'polis':

          return {
            ...prevStory,
            text: [
              'Bir polisin zevkine göre fazla farklı giyiniyorsun. Bir tanesi seni durduruyor. ',

              {
                text: '\n\n“Kimliğine bir bakabilir miyiz?”',
                style: {

                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',


                },
              },

            ],
            choices: [
              { text: '“TABİ MEMUR BEY, BUYURUN”', target: 'buyurun' },
              { text: '“İZİN BELGENİZİ GÖREBİLİR MİYİM?', target: 'izinBelgesi' },
            ],
            buttonsDisabled: false,
            background: './images/cilek.png',
            characterImage: './images/polis.png',

          };
        case 'buyurun':

          return {
            ...prevStory,
            text: [


              {
                text: 'Teşekkürler. Sigara kullanıyor musun?',
                style: {

                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',


                },
              },

            ],
            choices: [
              { text: '“EVET, KULLANIYORUM”', target: 'sigaraKullaniyorum' },
              { text: '"HAYIR, KULLANMIYORUM"', target: 'polisDevam' },
            ],
            buttonsDisabled: false,
            background: './images/cilek.png',
            characterImage: './images/polis.png',

          };
        case 'sigaraKullaniyorum':

          return {
            ...prevStory,
            text: [


              {
                text: '“Paketini görebilir miyim?”',
                style: {

                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',


                },
              },

            ],
            choices: [
              { text: '“TABİİ, BUYRUN”', target: 'polisDevam' },
              { text: '"PAKET TAŞIMIYORUM, OTLAKÇIYIM"', target: 'otlakci' },
            ],
            buttonsDisabled: false,
            background: './images/cilek.png',
            characterImage: './images/polis.png',

          };
        case 'polisDevam':

          return {
            ...prevStory,
            text: [


              {
                text: '"Tamam, devam edebilirsin."',
                style: {

                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',


                },
              },

            ],
            choices: [
              { text: '>', target: 'charlie' },
            ],
            buttonsDisabled: false,
            background: './images/cilek.png',
            characterImage: './images/polis.png',

          };
        case 'otlakci':
          newMoodDecrease = 10,
            handleMoodAnimation(dispatch, newMoodDecrease, setShowMoodAnimation, statMoodChangeRef, false, 0);
          statMoodChangeRef.current = true;


          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: Math.max(prevStats.mood - newMoodDecrease, 0),
          }));
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodDecrease });
          return {
            ...prevStory,
            text: [


              {
                text: '"Tamam, devam edebilirsin."',
                style: {

                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',


                },
              },

            ],
            choices: [
              { text: '>', target: 'charlie' },
            ],
            buttonsDisabled: false,
            background: './images/cilek.png',
            characterImage: './images/polis.png',

          };
        case 'izinBelgesi':
          newHealthDecrease = 10;
          handleHealthAnimation(dispatch, newHealthDecrease, setShowHealthAnimation, statHealthChangeRef, false, 0);
          statHealthChangeRef.current = true;

          newMoodDecrease = 10;
          handleMoodAnimation(dispatch, newMoodDecrease, setShowMoodAnimation, statMoodChangeRef, false, 0);
          statMoodChangeRef.current = true;

          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: Math.max(prevStats.mood - newMoodDecrease, 0), // Ensure non-negative value
            health: Math.max(prevStats.health - newHealthDecrease, 0), // Ensure non-negative value
          }));
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodDecrease });
          dispatch({ type: 'CHANGE_HEALTH', payload: -newHealthDecrease });
          return {
            ...prevStory,
            text: [
              'İnanılmaz bir bilinçli vatandaşlık hissiyle dolup taşıyorsun ama ne yazık ki bu vatandaşlık Kanada vatandaşlığı değil. \n\n Cebinde beliren o gizemli beyaz paket de ne öyle?',

            ],
            choices: [
              { text: '“PARDON, BUYRUN”', target: 'buyurun' },
            ],
            buttonsDisabled: false,
            background: './images/cilek.png',
            characterImage: './images/kizgin-polis.png',

          };
        case 'kahvehaneKarari':

          newHealthIncrease = 10;
          handleHealthAnimation(dispatch, newHealthIncrease, setShowHealthAnimation, statHealthChangeRef, true, 0);
          statHealthChangeRef.current = true;



          setCharacterStats((prevStats) => ({
            ...prevStats,
            health: Math.max(prevStats.health + newHealthIncrease, 0), // Ensure non-negative value
          }));
          dispatch({ type: 'CHANGE_HEALTH', payload: -newHealthIncrease });
          return {
            ...prevStory,
            text: [
              'Hızlı karar verme yeteneği ve güçlü refleksler. İşte gerçek bir karakter.',

            ],
            choices: [
              { text: '>', target: 'kahvehane' },
            ],
            buttonsDisabled: false,
            background: './images/trafik.png',
            characterImage: null

          };
        case 'kahvehane':
          return {
            ...prevStory,
            text: [
              'İçeri girer girmez eline bir bardak çay tutuşturuluyor ve herkesin gözü sana dönüyor. \n\n Burada daha önce hiç senin kadar kahramansı biri bulunmamış herhalde. ',

            ],
            choices: [
              { text: '"MERHABA, 7 METRELİK BİR MERDİVEN ARIYORUM"', target: 'merdivenAriyorum' },
              { text: '"VAR MI RÜZGARA KARŞI İŞEYİP BİR BATAK ATACAK OLAN?"', target: 'batak' },
            ],
            buttonsDisabled: false,
            background: './images/kahvehane.png',
            characterImage: null

          };
        case 'merdivenAriyorum':
          return {
            ...prevStory,
            text: [
              'Bazı adamlar inşaata sorabileceğini, bir kişi de iki sokak yukarıdaki nalburda bir tane gördüğünü söylüyor',

            ],
            choices: [
              { text: '"İNŞAAT NEREDE?"', target: 'insaat' },
              { text: '"NALBUR NEREDE?"', target: 'nalbur' },
            ],
            buttonsDisabled: false,
            background: './images/kahvehane.png',
            characterImage: null

          };
        case 'batak':
          newHealthDecrease = 10;
          handleHealthAnimation(dispatch, newHealthDecrease, setShowHealthAnimation, statHealthChangeRef, false, 0);
          statHealthChangeRef.current = true;

          newMoodDecrease = 10;
          handleMoodAnimation(dispatch, newMoodDecrease, setShowMoodAnimation, statMoodChangeRef, false, 0);
          statMoodChangeRef.current = true;

          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: Math.max(prevStats.mood - newMoodDecrease, 0), // Ensure non-negative value
            health: Math.max(prevStats.health - newHealthDecrease, 0), // Ensure non-negative value
          }));
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodDecrease });
          dispatch({ type: 'CHANGE_HEALTH', payload: -newHealthDecrease });

          return {
            ...prevStory,
            text: [
              'İnsanlar seni tanımadıkları için sana garip garip bakıyorlar.',

            ],
            choices: [
              { text: '"TAMAM, 7 METRELİK BİR MERDİVEN ARIYORUM"', target: 'tamamMerdiven' },
            ],
            buttonsDisabled: false,
            background: './images/kahvehane2.png',
            characterImage: null

          };
        case 'tamamMerdiven':

          return {
            ...prevStory,
            text: [
              'Bazı adamlar inşaata sorabileceğini, bir kişi de iki sokak yukarıdaki nalburda bir tane gördüğünü söylüyor',

            ],
            choices: [
              { text: '"İNŞAAT NEREDE?"', target: 'insaat' },
              { text: '"NALBUR NEREDE?"', target: 'nalbur' },
            ],
            buttonsDisabled: false,
            background: './images/kahvehane.png',
            characterImage: null

          };
        case 'insaat':

          return {
            ...prevStory,
            text: [
              'Ayvalıtaş Meydanından Saint Joseph’e doğru inerken kesin göreceğini söylüyorlar.',

            ],
            choices: [
              { text: 'ÇIK', target: 'charlie' },
            ],
            buttonsDisabled: false,
            background: './images/kahvehane.png',
            characterImage: null

          };
        case 'nalbur':

          return {
            ...prevStory,
            text: [
              'Herkes sana garip şekilde bakıyor. Sözüne inandığın kişinin raporlu deli olduğuna ve ona inanmaman gerektiğine dair fısıltılar var.',

            ],
            choices: [
              { text: '"BEN ONA İNANIYORUM, O ASLINDA GİZLİ BİR DAHİ"', target: 'deliyeInanma' },
              { text: '"İNŞAAT NEREDE?"', target: 'insaat' },
            ],
            buttonsDisabled: false,
            background: './images/kahvehane2.png',
            characterImage: null

          };
        case 'deliyeInanma':
          newMoodDecrease = 10;
          handleMoodAnimation(dispatch, newMoodDecrease, setShowMoodAnimation, statMoodChangeRef, false, 0);
          statMoodChangeRef.current = true;

          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: Math.max(prevStats.mood - newMoodDecrease, 0), // Ensure non-negative value
          }));
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodDecrease });
          return {
            ...prevStory,
            text: [
              'Deli adam sana dil çıkarıp burnunu karıştırıyor. Başka bir yere bakmak daha iyi olabilir. ',

            ],
            choices: [
              { text: '"İNŞAAT NEREDE?"', target: 'insaat' },
            ],
            buttonsDisabled: false,
            background: './images/kahvehane.png',
            characterImage: null

          };




        default:
          console.warn('Unhandled target:', path);
          return prevStory;
      }
    });

  };


  /*  function checkAndHandleEnding(statName, statValue) {
     if (statValue < 40 || statValue > 80) {
       handleEnding(statName, statValue);
     }
   }
 
 
   function handleEnding(statName, statValue) {
     console.log(`Game Over: ${statName} is too low or too high!`);
     console.log(`Handling ending for ${statName}...`);
     // Display unique ending screen based on stat
     switch (statName) {
       case 'Health':
         handleHealthEnding(statValue);
         break;
       case 'Money':
         handleMoneyEnding(statValue);
         break;
       case 'Mood':
         handleMoodEnding(statValue);
         break;
       case 'Intelligence':
         handleIntelligenceEnding(statValue);
         break;
       // Add more cases for other stats
 
       default:
         break;
     }
 
     setGameOver(true); // Move the setGameOver here
 
   }
 
   function handleHealthEnding(statValue) {
     if (statValue < 40) {
       console.log("health is too low!");
       setStory((prevStory) => ({
         ...prevStory,
         background: './images/leylek.png',
         text: [
           {
             text: 'Hay Allah, sağlığına bak! Kendine hiç iyi bakmamışsın. Bunu farkeden güz leylekleri yol üstünde seni kaçırıyor, karşı koyamıyorsun....',
             style: {
               fontWeight: 'bold',
               color: 'white',
             },
           },
           // Add additional text as needed
         ],
       }), () => setGameOver(true));
     } else if (statValue > 80) {
       console.log("health is too high!");
       setStory((prevStory) => ({
         ...prevStory,
         background: './images/denek.png',
         text: [
           {
             text: ':( Bu sefer olur sanmıştın sanırım? Evet, çok sağlıklısın ve evet, maşallahın var. Ancak bunu sadece sen fark etmedin, bilim adamları tarafından denek olarak kaçırıldın. ',
             style: {
               fontWeight: 'bold',
               color: 'white',
             },
           },
           // Add additional text as needed
         ],
       }), () => setGameOver(true));
     }
   }
 
   function handleMoneyEnding(statValue) {
     if (statValue < 40) {
       console.log("Money is too low!");
       setStory((prevStory) => ({
         ...prevStory,
         background: './images/fakir.png',
         text: [
           {
             text: 'Oyunun neden bittiğini söylememe gerek yoktur sanırım? Cüzdanına baktın mı hiç? Ya da, cüzdanın var mı?',
             style: {
               fontWeight: 'bold',
               color: 'white',
             },
           },
           // Add additional text as needed
         ],
       }), () => setGameOver(true));
     } else if (statValue > 80) {
       console.log("Money is too high!");
       setStory((prevStory) => ({
         ...prevStory,
         background: './images/zengin.png',
         text: [
           {
             text: 'Vay be! Paranın maşallahı var. Ancak tüm akrabalar, dostlar, toslar ve adostlar akbaba gibi tepene çöküyor...',
             style: {
               fontWeight: 'bold',
               color: 'white',
             },
           },
           // Add additional text as needed
         ],
       }), () => setGameOver(true));
     }
   }
 
 
   function handleMoodEnding(statValue) {
     if (statValue < 40) {
       // Set background and text for Mood low ending
       setStory((prevStory) => ({
         ...prevStory,
         background: './images/kurtcobain.png',
         text: [
           {
             text: 'Uh oh :( \n\n Kurt Cobain? \n\n Sen misin? \n\n Majör depresyonundan kurtulamadın :( ',
             style: {
               fontWeight: 'bold',
               color: 'white',
             },
           },
           // Add additional text as needed
         ],
       }));
     } else if (statValue > 80) {
       setStory((prevStory) => ({
         ...prevStory,
         background: './images/paklamayanoyun.png',
         text: [
           {
             text: 'Hehe. Kendini çok iyi hissediyorsun. Ama, çok iyi hissediyorsun. Çok iyi. Seni bu oyun paklamaz artık.',
             style: {
               fontWeight: 'bold',
               color: 'white',
             },
           },
         ],
       }));
     }
   }
 
   function handleIntelligenceEnding(statValue) {
     if (statValue < 40) {
       setStory((prevStory) => ({
         ...prevStory,
         background: './images/amip.png',
         text: [
           {
             text: 'Hmmm.. Belki bu yazdıklarımı bile anlamıyorsundur? Kim bilir? Ancak şunu söyleyebilirim, bu zekayla amip olarak yaşamaya karar verdin.',
             style: {
               fontWeight: 'bold',
               color: 'white',
             },
           },
         ],
       }));
     } else if (statValue > 80) {
       setStory((prevStory) => ({
         ...prevStory,
         background: './images/halkdayagi.png',
         text: [
           {
             text: 'Uh oh :( Biliyorum, biliyorsun... Biliyoruz. Zekana maşallah. Ancak... Sokakta ağzını tutamadın.. \n\n Halk meydanında dayak yedin :( ',
             style: {
               fontWeight: 'bold',
               color: 'white',
             },
           },
         ],
       }));
     }
   } */

  useEffect(() => {
    if (story.background) {

    }
  }, [story.background]);

  const containerStyle = {
    backgroundImage: `url(${story.background || './images/background.png'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    minHeight: showFooter ? 'calc(100vh - 160px)' : '100vh',
    position: 'relative',

  };

  const characterContainerStyle = {
    position: 'absolute',
    bottom: -60,
    left: '2%',
    display: 'flex',
    flexDirection: 'column-reverse',
  };

  const buttonsContainerStyle = {

    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
    width: '60%',
    justifyContent: 'space-around',




  };

  const characterImage = {
    maxWidth: '100%',
    objectFit: 'cover',

  };

  const mobileMaxWidth = 480; // Adjust the maximum width for mobile screens as needed

  return (
    <div>
      {showEntrancePage ? (
        <EntrancePage onReady={handleEntrancePageReady} />
      ) : (
        <>

          <Footer
            showFooter={showFooter}
            onToggleSound={handleToggleSound}
            onMenuClick={handleMenuClick}
            characterStats={characterStats}

            showMoodAnimation={showMoodAnimation}
            showIntelligenceAnimation={showIntelligenceAnimation}
            showMoneyAnimation={showMoneyAnimation}
            showHealthAnimation={showHealthAnimation}

            statMoneyChangeRef={statMoneyChangeRef}
            statHealthChangeRef={statHealthChangeRef}
            statIntelligenceChangeRef={statIntelligenceChangeRef}
            statMoodChangeRef={statMoodChangeRef}

            showIntelligenceCheckAnimation={showIntelligenceCheckAnimation}

          />


          <div className='flex items-center justify-center text-center' style={containerStyle}>
            <div style={characterContainerStyle}>
              {story.characterImage && (
                <img
                  src={story.characterImage}
                  alt="Character "
                  style={{
                    ...characterImage,
                    width: '100%',
                    height: '100%',
                    maxWidth: window.innerWidth < mobileMaxWidth ? '63%' : '100%',
                  }}
                />
              )}
            </div>

            <QuestionComponent
              story={story}
              handleChoice={handleChoice}
              buttonsContainerStyle={buttonsContainerStyle}
            />


            <Settings></Settings>
          </div>
        </>

      )}
    </div>








  );
}

export default App