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
    characterStats: characterStats,
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
    const newStory = handleChoice(path);
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

  const mobileMaxWidth = 480; // Adjust the maximum width for mobile screens as needed
  console.log('Current story:', story);
  console.log('Current characterStats:', characterStats);
  console.log('Current showFooter:', showFooter);
  // Add more logs as needed

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
            />


            <Settings></Settings>
          </div>
        </>

      )}
    </div>








  );
}

export default App