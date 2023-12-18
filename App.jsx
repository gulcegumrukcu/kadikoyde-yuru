// App.jsx Do no delete this


import React, { useState, useEffect, useRef } from 'react';
import EntrancePage from './src/components/EntrancePage';
import { useDispatch } from 'react-redux';


import Footer from './src/components/Footer';
import QuestionComponent from './src/components/QuestionComponent';
import Settings from './src/components/Settings';

import StoryComponent from './StoryComponent';



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
  const initialStats = {
    health: generateRandomStat(),
    money: generateRandomStat(),
    mood: generateRandomStat(),
    time: generateRandomStat(),
    intelligence: generateRandomStat(),
  };

  const [showEntrancePage, setShowEntrancePage] = useState(true);

  const handleEntrancePageReady = () => {
    setShowEntrancePage(false);
    setShowFooter(true)
  };




  const [characterStats, setCharacterStats] = useState({
    health: generateRandomStat(),
    money: generateRandomStat(),
    mood: generateRandomStat(),
    time: generateRandomStat(),
    intelligence: generateRandomStat(),
  });


  function handleHealthEndings(health) {
    console.log('Checking health ending condition. Current health:', health);

    if (health < 35) {
      console.log('Health ending condition met. Game over.');
      return {
        text: 'Olamaz! O kadar sağlıksızsın ki, bir kaç leylek seni kaçırdı. Karşı koyamadın.',
        choices: [
          { text: 'OK', target: 'ok' }
        ],
        background: './images/end.png',
      };
    } else if (health > 80) {
      console.log('Health ending condition met. Game over.');
      return {
        text: 'Olamaz! Maşallahın var, çok sağlıklısın. Bu bir kaç sağlık şirketinin dikkatini çekmiş olacak ki üzerinde deney yapmak için seni kaçırdılar.',
        choices: [
          { text: 'OK', target: 'ok' }
        ],
        background: './images/end.png',
      };
    }

    return null;
  }



  function handleMoodEndings(mood) {
    console.log('Checking mood ending condition. Current mood:', mood);

    if (mood < 35) {
      console.log('Mood ending condition met.');
      return {
        text: 'Olamaz! O kadar mutsuzsun ki kuşlar artık ötmeyi bıraktı... Doğanın dengesi bozuldu. Artık hiçbir şeyden hayır gelmez. ',
        choices: [
          { text: 'OK', target: 'ok' }
        ],
        background: './images/end.png',
      };
    } else if (mood > 80) {
      console.log('Mood ending condition met.');
      return {
        text: 'Peki. Keyfin oldukça yerinde gibi. Sana dokunmak istemezdim.. Ama sonuçta hiçbir şey ruh halini bozamaz, değil mi? Oyun bitti.',
        choices: [
          { text: 'OK', target: 'ok' }
        ],
        background: './images/end.png',
      };
    }
    return null;
  }

  function handleMoneyEndings(money) {
    console.log('Checking money ending condition. Current money:', money);

    if (money < 35) {
      console.log('Money ending condition met.');
      return {
        text: 'Olamaz! Parasızlıktan buraya güzel bir sonuç yazacak kişiyi işe alamadın...',
        choices: [
          { text: 'OK', target: 'ok' }
        ],
        background: './images/end.png',
      };
    } else if (money > 80) {
      console.log('Money ending condition met.');
      return {
        text: 'Olamaz! Evet, çok paran var. Baya fazla... Ama vergilerini ödemediğin ortaya çıktı ve artık hiçbir şeyin önemi yok...',
        choices: [
          { text: 'OK', target: 'ok' }
        ],
        background: './images/end.png',
      };
    }
    return null;
  }

  function handleIntelligenceEndings(intelligence) {
    console.log('Checking intelligence ending condition. Current intelligence:', intelligence);

    if (intelligence < 35) {
      console.log('Intelligence ending condition met.');
      return {
        text: 'Olamaz! Bu düşük zeka ile bir amip gibi yaşamaya karar verdin...',
        choices: [
          { text: 'OK', target: 'ok' }
        ],
        background: './images/end.png',
      };
    } else if (intelligence > 80) {
      console.log('Intelligence ending condition met.');
      return {
        text: 'Olamaz! Bu yüksek zeka ile gerçek fikirlerini yaydığın için halk meydanında dayak yedin...',
        choices: [
          { text: 'OK', target: 'ok' }
        ],
        background: './images/end.png',
      };

    }
    return null;
  }



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


  const [showFooter, setShowFooter] = useState(true);





  let newMoneyDecrease;
  let newMoodDecrease;
  let newMoodIncrease;
  let newMoneyIncrease;
  let newHealthDecrease;
  let newHealthIncrease;
  let newIntelligenceDecrease;
  let newIntelligenceIncrease;



  const { handleChoice } = StoryComponent({
    setCharacterStats,
    dispatch,
    setShowHealthAnimation,
    setShowIntelligenceCheckAnimation,
    setShowMoneyAnimation,
    setShowMoodAnimation,
    characterStats,
    newHealthIncrease,
    newMoodIncrease,
    newHealthDecrease,
    newIntelligenceDecrease,
    newIntelligenceIncrease,
    newMoneyDecrease,
    newMoodDecrease,
    newMoneyIncrease,
    statHealthChangeRef,
    statIntelligenceChangeRef,
    statMoneyChangeRef,
    statMoodChangeRef,

  });



  const handleChoiceWrapper = (path) => {
    const newStory = handleChoice(path, characterStats); // Assuming handleChoice is the correct function

    if (newStory.characterStats) {
      const healthEnding = handleHealthEndings(newStory.characterStats.health);
      const moodEnding = handleMoodEndings(newStory.characterStats.mood);
      const moneyEnding = handleMoneyEndings(newStory.characterStats.money);
      const intelligenceEnding = handleIntelligenceEndings(newStory.characterStats.intelligence);

      if (healthEnding) {
        setStory(healthEnding);
        setCharacterStats(initialStats);
        setShowFooter(false);
        return;
      } else if (moneyEnding) {
        setStory(moneyEnding);
        setCharacterStats(initialStats);
        setShowFooter(false);
        return;
      } else if (moodEnding) {
        setStory(moodEnding);
        setCharacterStats(initialStats);
        setShowFooter(false);
        return;
      } else if (intelligenceEnding) {
        setStory(intelligenceEnding);
        setCharacterStats(initialStats);
        setShowFooter(false);
        return;
      }
    }

    setStory(newStory);
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

  const mobileMaxWidth = 480;

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
              handleChoice={handleChoiceWrapper}
              buttonsContainerStyle={buttonsContainerStyle}
              characterStats={characterStats}
            />


            <Settings></Settings>
          </div>
        </>

      )}
    </div>








  );
}

export default App