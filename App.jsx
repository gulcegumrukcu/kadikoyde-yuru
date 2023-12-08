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
          setUserChoseSuIc(true);
          handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation);  // Default is increase
          statMoodChangeRef.current = true;
          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: prevStats.mood + newMoodIncrease,
          }));
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });
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
            moodIncrease: newMoodIncrease,
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
                  color: '#94B9AF',
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
                  color: '#94B9AF',
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

          handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation, statMoodChangeRef, true);
          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: Math.max(prevStats.mood + newMoodIncrease, 0),
          }));
          statMoodChangeRef.current = true;
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });
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

          return {
            ...prevStory,
            text: [

              'Ne kadar mükemmel biri olduğunu düşünürken yoğun bir korna sesiyle gerçekliğe çekildin. \n\nTers yönden gelen bir motor kurye kaldırıma çıkmış ve yolundan çıkman için sana korna çalıyor.',
            ],
            choices: [
              { text: 'KUSURA BAKMAYIN, HEMEN ÇEKİLİYORUM', target: 'çekil' },
              { text: 'KALDIRIM ULAN BURASI DAVAR HERİF!', target: 'davar' },
            ],
            buttonsDisabled: false,
            background: './images/trafik.png',
            characterImage: './images/kurye.png',

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
              { text: '>', target: 'nalbur' },
            ],
            buttonsDisabled: false,
            background: './images/background5.png',
            characterImage: null,

          };
        default:
          console.warn('Unhandled target:', path);
          return prevStory;
      }
    });
  };

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


          <div className='flex items-center   justify-center   text-center ' style={containerStyle}>
            <div style={characterContainerStyle}>
              {story.characterImage && (
                <img
                  src={story.characterImage}
                  alt="Character "

                  style={{ ...characterImage, width: '100%', height: '100%' }}
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