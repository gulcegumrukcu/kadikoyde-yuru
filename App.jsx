// App.jsx Do no delete this


import React, { useState, useEffect, useRef } from 'react';
import EntrancePage from './src/components/EntrancePage';
import { useDispatch } from 'react-redux';
import audio1 from './src/audio/audio1.mp3';
import SoundControl from './src/components/SoundControl';
import Footer from './src/components/Footer';
import QuestionComponent from './src/components/QuestionComponent';


import StoryComponent from './StoryComponent';
import Menu from './src/components/Menu';



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
  const audioRef = useRef(null);


  const [isMuted, setIsMuted] = useState(false);
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


  const [showQuestionComponent, setShowQuestionComponent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowQuestionComponent(true);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(timeoutId);
  }, []); // Run this effect only once on component mount


  const [characterStats, setCharacterStats] = useState({
    health: generateRandomStat(),
    money: generateRandomStat(),
    mood: generateRandomStat(),
    time: generateRandomStat(),
    intelligence: generateRandomStat(),
  });

  const handleToggleSound = () => {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach((audio) => {
      audio.muted = !audio.muted;
    });

    setIsMuted(!isMuted);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleMenuClick = () => {
    setIsPopupOpen((prevIsPopupOpen) => !prevIsPopupOpen);
  };


  function handleHealthEndings(health) {

    if (health < 35) {
      return {
        text: ['Olamaz! O kadar sağlıksızsın ki, bir kaç leylek seni kaçırdı. Karşı koyamadın. Oyun bitti.'],
        choices: [{ text: 'OK', target: 'ok' }],
        background: './images/end.png',
      };
    } else if (health > 80) {
      return {
        text: ['Olamaz! Maşallahın var, çok sağlıklısın. Bu bir kaç sağlık şirketinin dikkatini çekmiş olacak ki üzerinde deney yapmak için seni kaçırdılar. Oyun bitti.'],
        choices: [{ text: 'OK', target: 'ok' }],
        background: './images/end.png',
      };
    }

    return null;
  }

  function handleMoodEndings(mood) {

    if (mood < 35) {
      return {
        text: ['Olamaz! O kadar mutsuzsun ki kuşlar artık ötmeyi bıraktı... Doğanın dengesi bozuldu. Artık hiçbir şeyden hayır gelmez. Oyun bitti.'],
        choices: [{ text: 'OK', target: 'ok' }],
        background: './images/end.png',
      };
    } else if (mood > 80) {
      return {
        text: ['Peki. Keyfin oldukça yerinde gibi. Sana dokunmak istemezdim.. Ama sonuçta hiçbir şey ruh halini bozamaz, değil mi? Oyun bitti.'],
        choices: [{ text: 'OK', target: 'ok' }],
        background: './images/end.png',
      };
    }

    return null;
  }

  function handleMoneyEndings(money) {


    if (money < 35) {
      return {
        text: ['Olamaz! Parasızlıktan buraya güzel bir sonuç yazacak kişiyi işe alamadın... Oyun bitti.'],
        choices: [{ text: 'OK', target: 'ok' }],
        background: './images/end.png',
      };
    } else if (money > 80) {
      return {
        text: ['Olamaz! Evet, çok paran var. Baya fazla... Ama vergilerini ödemediğin ortaya çıktı ve artık hiçbir şeyin önemi yok... Oyun bitti.'],
        choices: [{ text: 'OK', target: 'ok' }],
        background: './images/end.png',
      };
    }

    return null;
  }

  function handleIntelligenceEndings(intelligence) {

    if (intelligence < 35) {
      return {
        text: ['Olamaz! Bu düşük zeka ile bir amip gibi yaşamaya karar verdin... Oyun bitti.'],
        choices: [{ text: 'OK', target: 'ok' }],
        background: './images/end.png',
      };
    } else if (intelligence > 80) {
      return {
        text: ['Olamaz! Bu yüksek zeka ile gerçek fikirlerini yaydığın için halk meydanında dayak yedin... '],
        choices: [{ text: 'OK', target: 'ok' }],
        background: './images/end.png',
      };
    }

    return null;
  }




  const [story, setStory] = useState({
    text: ['“İyi sabahlar.” \n\nBir adam silüetine hoşgeldin. Bu görüntüyü silüetten bir kimliğe çekmen gerekiyor.\n'],
    audio: audio1,

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
    setShowIntelligenceAnimation,
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



          {story.audio && <audio ref={audioRef} src={story.audio} autoPlay loop />}

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

            <div className='fixed bottom-0 right-0 bg-black flex-row gap-4 rounded-none p-2 text-white flex mx-auto'>
              <SoundControl onToggleSound={handleToggleSound} isMuted={isMuted} />
              <Menu onMenuClick={handleMenuClick} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />


            </div>




          </div>



        </>


      )}
    </div>
  );
}

export default App