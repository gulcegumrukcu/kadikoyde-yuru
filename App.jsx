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
    text: 'GÜNAYDIN UYKUCU!\nSabahın körü, geceden kalmışlığın etkisiyle ağzın kurumuş. Kapı mı o çalan?',
    choices: [
      { text: 'Ne?', target: 'choice' },
    ],
    buttonsDisabled: false,
    background: './images/background11.png',
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
              { text: 'Telefona bak', target: 'telefon' },
              { text: 'Su iç', target: 'su' },
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
              { text: 'Hala su içebilir miyim?', target: 'su' },
              { text: 'Kapıya baksam fena olmaz', target: 'kapi' },
            ],
            buttonsDisabled: false,
            background: './images/mobile-background.png',
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
              { text: 'Artık kapıya bakayım', target: 'kapi-su' },
            ],
            buttonsDisabled: false,
            background: './images/1background11.png',
            moodIncrease: newMoodIncrease,
          };


        case 'ic':
          return {
            ...prevStory,
            text: 'You befriended the forest creature. It offers to guide you to a hidden glade.',
            choices: [],
            buttonsDisabled: true,

          };
        case 'notr':
          return {
            ...prevStory,
            text: 'You decided to go in a different direction. The forest seems to get denser.',
            choices: [
              { text: 'Keep going deeper into the dense forest.', target: 'keepGoingDeeper' },
              { text: 'Return to the path you came from.', target: 'returnPath' },
            ],
            buttonsDisabled: false,
          };
        case 'keepGoingDeeper':
          return {
            ...prevStory,
            text: 'As you venture deeper into the dense forest, the trees close in around you, creating an almost mystical atmosphere. Strange whispers surround you, and you catch glimpses of mysterious lights flickering in the distance.',
            choices: [
              { text: 'Follow the mysterious lights.', target: 'followLights' },
              { text: 'Head back to the path.', target: 'headBackToPath' },
            ],
            buttonsDisabled: false,
          };
        case 'followLights':
          return {
            ...prevStory,
            text: 'Guided by the lights, you discover a hidden glade bathed in an otherworldly glow. In the center, you find an ancient artifact with unimaginable powers.',
            choices: [
              { text: 'Reach for the artifact.', target: 'reachForArtifact' },
              { text: 'Leave the glade and return to the forest.', target: 'leaveGlade' },
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