// App.jsx Do no delete this


import React, { useState, useEffect, } from 'react';
import EntrancePage from './src/components/EntrancePage';
import { useDispatch } from 'react-redux';


import Footer from './src/components/Footer';
import QuestionComponent from './src/components/QuestionComponent';
import Settings from './src/components/Settings';
import handleMoodAnimation from './src/components/utils'



function generateRandomStat() {
  return Math.floor(Math.random() * (100 - 50 + 1)) + 40;
}


function App() {


  const [showMoodAnimation, setShowMoodAnimation] = useState(false);
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



  const [story, setStory] = useState({
    text: [
      <div key="greeting" style={{ whiteSpace: 'pre-line', fontSize: '20px', display: 'block', color: '#E6F0FF', fontWeight: 'bold' }}>
        GÜNAYDIN UYKUCU!
      </div>,
      '\nSabahın körü, geceden kalmışlığın etkisiyle ağzın kurumuş. Kapı mı o çalan?',
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

  const handleChoice = (path) => {
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
            text: 'Zil hala çalıyor, ısrarcı biri olmalı.\nÖnünde bir bardak su, kirli bir telefon ve kulaklarında bitmeyen zil var.',
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
          dispatch({ type: 'CHANGE_MOOD', payload: -newMoodDecrease });
          return {
            ...prevStory,
            text: 'Görünüşe göre emektarı değiştirme zamanı yaklaşıyor.\n 0 yeni mesajın var.',
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
            text: 'Pek sayılmaz. Ama bunu baştan öğrenmen iyi olmuştur. \nSeçimlerin bazı sonuçlar doğuracak, tıpkı hayat gibi...',
            choices: [
              { text: 'TAMAM O ZAMAN, KAPIYA BAKAYIM.', target: 'kapi-su' },
            ],
            buttonsDisabled: false,
          };

        case 'su':
          const newMoodIncrease = 10

          handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation);  // Default is increase
          setCharacterStats((prevStats) => ({
            ...prevStats,
            mood: prevStats.mood + newMoodIncrease,
          }));
          dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });
          return {
            ...prevStory,
            text: 'Gluk, gluk ve gluk. Suyun canlandırıcı etkisiyle kendini daha iyi hissetmeye başladın bile. Kapı hala çalıyor.',
            choices: [
              { text: 'GELİYORUM!!!', target: 'kapi-su' },
            ],
            buttonsDisabled: false,
            background: './images/1background11.png',
            moodIncrease: newMoodIncrease,
          };


        case 'kapi-su':

          if (characterStats.intelligence > 65) {
            return {
              ...prevStory,
              text: 'Sabah içtiği iki litre kahveyi göz bebekleriyle anlatan çılgın apartman yöneticin kapıda. \n“Günaydın, günaydın...... Naptın?” \nSana yumruğunu uzattığını görüyorsun, niyetinin ‘fist bump’ olduğu aşikar. Hatta bunu gençler arası bir selamlaşma olarak gördüğünü söylemek de zor değil, Watson.',
              choices: [
                { text: 'POKER FACE', target: 'aidat' },
                { text: 'YUMRUK TOKUŞTUR', target: 'aidat' },
              ],
              buttonsDisabled: false,

            };

          } else {
            return {
              ...prevStory,
              text: 'Sabah içtiği iki litre kahveyi göz bebekleriyle anlatan çılgın apartman yöneticin kapıda. \n“Günaydın, günaydın...... Naptın?” \nElini kaldırıp tuhaf bir şekle sokuyor, yumruk mu o? \nİnan bana bu zeka anlayabilmek için elinden geleni yapıyorsun.',
              choices: [
                { text: 'POKER FACE', target: 'aidat' },
                { text: '"NE VARDI ABİ?"', target: 'aidat' },
              ],
              buttonsDisabled: false,

            };
          }

        case 'aidat':
          return {
            ...prevStory,
            text: '“Bizim, bi aidat vardı...Bu ayın.” \nYüzünde sürekli taktığı medikal maskesi, uzun, gri çalı saçları ile evsiz bir  bilim adamına benzeyen adını bilmediğin apartman abinin söylediklerini anlamakta güçlük çekiyorsun.',
            choices: [
              { text: '"ABİ AYIN DAHA 1İ BUGÜN"', target: 'binnur' },
              { text: '"KURTULAYIM MADEM, BUYUR"', target: 'ev' },
            ],
            buttonsDisabled: false,
          };

        case 'binnur':
          return {
            ...prevStory,
            text: 'Açıkçası seni pek dinliyormuş gibi gözükmüyor.. \n“Ya o değil de, çok ses yapıyormuşsunuz. Alt kattaki Binnur Hanım çok rahatsız valla. \nİletmemi istedi...” \nHalin olduğu pek söylenemez, ancak sabah ilk iş olarak Apartman Bey’i görmeden önce en azından su içmiş olmak seni iyi hissettirdi. Yardır gitsin.',
            choices: [
              { text: '"BİNNUR BAKSIN KENDİNE!"', target: 'bedel' },
              { text: '"AİDATI VERİRSEM KURTULURUM"', target: 'ev' },
            ],
            buttonsDisabled: false,
          };
        case 'bedel':
          return {
            ...prevStory,
            text: 'Söylediklerine olan dikkatinde bir değişiklik olmadı. \n“Sen bana uğra o zaman, aidat için.” diyor, ellerini cebine koyarak. \nHala geç değil, bu elbet ödenecek bir bedel.',
            choices: [
              { text: '"BAŞKA BİR ŞEY?"', target: 'ev' },
              { text: '"ZIKKIMI VERİP KURTULAYIM ARTIK"', target: 'ev' },
            ],
            buttonsDisabled: false,
          };
        case 'ev':
          return {
            ...prevStory,
            text: '“Sağolasın.. Ha bi de bugün çağırdım ustaları, çatıyı yapacaklar, evde olursun değil mi?” \nSabah sabah seni acil olmayan bir şey için rahatsız etmesinden memnuniyetsiz olsan da, ağzının kuruluğu adama cevap vermende yardımcı olmuyor. \nNeden suyu içmemiştin ki?',
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
    backgroundPosition: '50% 70%',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    minHeight: '100vh',
    position: 'relative',
  };

  if (story.background === './images/mobile-background.png') {
    containerStyle.backgroundSize = 'cover';
    containerStyle.backgroundPosition = '50% 60%';

  }

  const buttonsContainerStyle = {

    flexDirection: 'row', // Ensure buttons are in the same row
    justifyContent: 'space-between', // Add space between buttons
    display: 'flex',
    flexDirection: 'row', // Ensure buttons are in the same row
    justifyContent: 'space-between', // Add space between buttons
    alignItems: 'center', // Align buttons to the center vertically
  };






  return (
    <div>
      {showEntrancePage ? (
        <EntrancePage onReady={handleEntrancePageReady} />
      ) : (
        <div className='flex flex-col items-center justify-center bg-cover bg-center text-center ' style={containerStyle}>
          <Settings></Settings>
          <QuestionComponent
            story={story}
            handleChoice={handleChoice}
            buttonsContainerStyle={buttonsContainerStyle}
          />
          <Footer
            showFooter={showFooter}
            onToggleSound={handleToggleSound}
            onMenuClick={handleMenuClick}
            characterStats={characterStats}
            showMoodAnimation={showMoodAnimation}
          />
          {showMoodAnimation && (
            <>
              <div style={{ position: 'absolute', right: '10px', fontSize: '22px', color: 'white', left: '90%', top: '10px', }}>
                {showMoodAnimation}
              </div>

              {console.log('JSX - showMoodAnimation:', showMoodAnimation)}
            </>


          )}
        </div>

      )}
    </div>








  );
}

export default App