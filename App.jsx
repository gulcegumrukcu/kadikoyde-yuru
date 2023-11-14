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
    console.log('Toggle sound');
  };

  const handleMenuClick = () => {
    // Implement settings logic here
    console.log('Open settings');
  };



  const [showEntrancePage, setShowEntrancePage] = useState(true);

  const handleEntrancePageReady = () => {
    setShowEntrancePage(false);
  };

  const [userChoseSuIc, setUserChoseSuIc] = useState(false);

  const [story, setStory] = useState({
    text: [
      {
        text: 'GÜNAYDIN UYKUCU!\n',
        style: {

          fontWeight: 'bold',
          color: 'white',
        },
      },
      '\nSabahın körü, geceden kalmışlığın etkisiyle ağzın kurumuş.\n',
      {
        text: '\nKapı mı o çalan?',
        style: {

          fontWeight: 'normal',
          fontStyle: 'italic',
          color: 'white',
        },
      },
    ],
    choices: [
      { text: 'Ne?', target: 'choice' },
    ],
    buttonsDisabled: false,
    background: './images/background111.png',
  });

  const [characterStats, setCharacterStats] = useState({
    health: generateRandomStat(),
    money: generateRandomStat(),
    mood: generateRandomStat(),
    time: generateRandomStat(),
    intelligence: generateRandomStat(),
  });



  const [showFooter, setShowFooter] = useState(false);
  const { handleMoodAnimation, handleIntelligenceCheckAnimation, handleMoneyAnimation, handleHealthAnimation, handleIntelligenceAnimation } = utils;



  async function handleChoice(path) {
    if (story.buttonsDisabled) return;
    setStory((prevStory) => {
      switch (path) {
        case 'choice':
          const newCharacterStats = characterStats || {
            health: generateRandomStat(),
            money: generateRandomStat(),
            mood: generateRandomStat(),
            time: generateRandomStat(),
            intelligence: generateRandomStat(),
          };
          setShowFooter(true);
          return {
            ...prevStory,
            text: [
              {
                text: 'Zil ',
                style: {

                  fontWeight: 'normal',
                  color: 'white',
                },
              },
              'hala çalıyor, ısrarcı biri olmalı. \n\nÖnünde ',
              {
                text: 'bir bardak su, kirli bir telefon ',
                style: {

                  fontWeight: 'normal',
                  color: 'white',
                },
              },

              've kulaklarında bitmeyen bir zil var.',
            ],
            choices: [
              { text: 'TELEFONA BAK', target: 'telefon' },
              { text: 'SU İÇ', target: 'su' },
            ],
            buttonsDisabled: false,

            background: './images/background22.png',
          };

        case 'telefon':
          let newMoodDecrease = 10;

          handleMoodAnimation(dispatch, newMoodDecrease, setShowMoodAnimation, false);  // Pass `false` for decrease
          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: Math.max(prevStats.mood - newMoodDecrease),
          }));
          statMoodChangeRef.current = true;
          dispatch({ type: 'CHANGE_MOOD', payload: -newMoodDecrease });
          return {
            ...prevStory,

            text: [

              'Görünüşe göre emektarı değiştirme zamanı yaklaşıyor. ',
              {
                text: '\n\n0 yeni mesajın var.',
                style: {

                  fontWeight: 'normal',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },

            ],
            choices: [
              { text: 'HALA SU İÇEBİLİRİM, DEĞİL Mİ?', target: 'secim' },
              { text: 'KAPIYA BAKSAM FENA OLMAZ', target: 'kapi-su' },
            ],
            buttonsDisabled: false,
            background: './images/mobile-background.png',
          };

        case 'secim':
          return {
            ...prevStory,
            text: [
              {
                text: 'Pek sayılmaz. ',
                style: {

                  fontWeight: 'normal',
                  color: 'white',
                },
              },
              'Ama bunu baştan öğrenmen iyi olmuştur. ',
              {
                text: '\n\nSeçimlerin ',
                style: {

                  fontWeight: 'normal',
                  color: 'white',
                  fontStyle: 'italic',
                },

              },
              '  bazı  ',
              {
                text: 'sonuçlar ',
                style: {

                  fontWeight: 'normal',
                  color: 'white',
                  fontStyle: 'italic',
                },
              },


              'doğuracak, tıpkı hayat gibi...  ',
            ],

            choices: [
              { text: 'TAMAM O ZAMAN, KAPIYA BAKAYIM.', target: 'kapi-su' },
            ],
            buttonsDisabled: false,
          };

        case 'su':
          const newMoodIncrease = 10;
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
              'Gluk, gluk ve gluk. ',
              {
                text: '\nSuyun canlandırıcı etkisiyle kendini daha iyi hissetmeye başladın bile.',
                style: {
                  fontWeight: 'normal',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },
              '\n\nKapı hala çalıyor.',
            ],
            choices: [
              { text: 'GELİYORUM!!!', target: 'kapi-su' },
            ],
            buttonsDisabled: false,
            background: './images/1background11.png',
            moodIncrease: newMoodIncrease,
          };



        case 'kapi-su':
          handleIntelligenceCheckAnimation(dispatch, characterStats.intelligence > 55, setShowIntelligenceCheckAnimation);

          if (characterStats.intelligence > 55) {
            return {
              ...prevStory,
              text: [
                {
                  text: 'Sabah içtiği iki litre kahveyi göz bebekleriyle anlatan çılgın apartman yöneticin kapıda. ',
                  style: {
                    fontWeight: 'normal',
                  },
                },
                {
                  text: '\n\n“Günaydın, günaydın...... Naptın?”\n',
                  style: {
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                    color: 'white',
                  },
                },
                '\nSana yumruğunu uzattığını görüyorsun, niyetinin',
                {
                  text: ' ‘fist bump’ ',
                  style: {
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: 'white',
                  },
                },
                'olduğu aşikar. \n\nHatta bunu gençler arası bir selamlaşma olarak gördüğünü söylemek de zor değil, Watson. ',
              ],
              choices: [
                { text: 'POKER FACE', target: 'aidat' },
                { text: 'YUMRUK TOKUŞTUR', target: 'aidat' },
              ],
              buttonsDisabled: false,
            };
          } else {
            return {
              ...prevStory,
              text: [
                {
                  text: 'Sabah içtiği iki litre kahveyi göz bebekleriyle anlatan çılgın apartman yöneticin kapıda. ',
                  style: {
                    fontWeight: 'normal',
                  },
                },
                {
                  text: '\n\n“Günaydın, günaydın...... Naptın?”\n',
                  style: {
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                    color: 'white',
                  },
                },
                '\nElini kaldırıp tuhaf bir şekle sokuyor, ',
                {
                  text: 'yumruk ',
                  style: {
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: 'white',
                  },
                },
                'mu o? ',
                {
                  text: '\n\nİnan bana bu zeka anlayabilmek için elinden geleni yapıyorsun.',
                  style: {
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                  },
                },
              ],
              choices: [
                { text: 'POKER FACE', target: 'aidat' },
                { text: 'YUMRUK TOKUŞTUR', target: 'aidat' },
              ],
              buttonsDisabled: false,
            };
          }




        case 'aidat':


          return {
            ...prevStory,
            text: [
              {
                text: '“Bizim, bi aidat vardı...Bu ayın.” \n',
                style: {
                  fontWeight: 'normal',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },
              '\nYüzünde sürekli taktığı medikal maskesi, uzun, gri çalı saçları ile evsiz bir  bilim adamına benzeyen adını bilmediğin apartman abinin söylediklerini anlamakta güçlük çekiyorsun.',
            ],
            choices: [
              { text: '"ABİ AYIN DAHA 1İ BUGÜN"', target: 'binnur' },
              { text: '"KURTULAYIM MADEM, BUYUR"', target: 'ev' },
            ],
            buttonsDisabled: false,
          };
        case 'binnur':
          return {
            ...prevStory,

            text: [
              'Açıkçası seni pek dinliyormuş gibi gözükmüyor..\n',
              {
                text: '\n“Ya o değil de, çok ses yapıyormuşsunuz. Alt kattaki Binnur Hanım çok rahatsız valla. İletmemi istedi...” \n',
                style: {

                  fontWeight: 'normal',
                  fontStyle: 'italic',
                  color: 'white',


                },
              },

              userChoseSuIc
                ? '\nHalin olduğu pek söylenemez, ancak sabah ilk iş Apartman Bey’i görmeden önce en azından su içmiş olmak seni iyi hissettirdi. Yardır gitsin.'
                : '\nHalin olduğu pek söylenemez, üstüne sabah ilk iş su içmek yerine kapıya bakmak da yardımcı olmadı. \nAdam seni koklamak üzere.',
            ],
            choices: [
              { text: '"BİNNUR BAKSIN KENDİNE!"', target: 'bedel' },
              { text: '"AİDATI VERİRSEM KURTULURUM"', target: 'ev' },
            ],
            buttonsDisabled: false,
          };
        case 'bedel':
          return {
            ...prevStory,


            text: [
              'Söylediklerine olan dikkatinde bir değişiklik olmadı. ',
              {
                text: '\n\n“Sen bana uğra o zaman, aidat için.” ',
                style: {

                  fontWeight: 'normal',
                  fontStyle: 'italic',
                  color: 'white',


                },
              },
              'diyor, ellerini cebine koyarak. ',
              '\n\nHala geç değil, bu elbet ödenecek bir bedel.',

            ],
            choices: [
              { text: '"BAŞKA BİR ŞEY?"', target: 'ev' },
              { text: '"ZIKKIMI VERİP KURTULAYIM ARTIK"', target: 'ev' },
            ],
            buttonsDisabled: false,
          };
        case 'ev':
          const newMoneyDecreaseEv = 10; // Adjust the amount as needed
          console.log('Before handleMoneyAnimation');
          handleMoneyAnimation(dispatch, newMoneyDecreaseEv, setShowMoneyAnimation, statMoneyChangeRef, false); // Decrease money
          console.log('After handleMoneyAnimation');
          statMoneyChangeRef.current = true;
          setCharacterStats((prevStats) => ({
            ...prevStats,
            money: Math.max(prevStats.money - newMoneyDecreaseEv, 0), // Ensure non-negative value
          }));
          dispatch({ type: 'CHANGE_MONEY', payload: -newMoneyDecreaseEv });
          return {
            ...prevStory,
            text: [
              {
                text: '“Sağolasın.. Ha bi de bugün çağırdım ustaları, çatıyı yapacaklar, evde olursun değil mi?” \n',
                style: {
                  fontWeight: 'normal',
                  fontStyle: 'italic',
                  color: 'white',
                },
              },
            ],
            choices: [
              { text: '"ASLINDA ŞU AN OKULDA OLMAM LAZIM"', target: 'okul' },
              { text: '"ASLINDA ŞU AN İŞTE OLMAM LAZIM"', target: 'is' },
            ],
            buttonsDisabled: false,
          };

        default:
          console.warn('Unhandled target:', path);
          return prevStory;
      }
    });
  };

  useEffect(() => {
    if (story.background) {
      console.log('Background Image:', story.background);
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

  const buttonsContainerStyle = {

    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
    width: '60%',
    justifyContent: 'space-around',




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