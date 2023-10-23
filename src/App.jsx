import React, { useState, useEffect } from 'react';
import EntrancePage from './EntrancePage';
import ChoiceButton from './ChoiceButton';
import Footer from './Footer';
import QuestionComponent from './QuestionComponent';



function generateRandomStat() {
  return Math.floor(Math.random() * (100 - 50 + 1)) + 40;
}

function App() {
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
              { text: 'Su iç', target: 'cok' },
            ],
            buttonsDisabled: false,
            characterStats: newCharacterStats,
            background: './images/background22.png',
          };
        case 'telefon':
          return {
            ...prevStory,
            text: 'Görünüşe göre emektarı değiştirme zamanı yaklaşıyor.\n0 yeni mesajın var.',
            choices: [
              { text: 'Hala su içebilir miyim?', target: 'su' },
              { text: 'Kapıya baksam fena olmaz', target: 'kapi' },
            ],
            buttonsDisabled: false,

            background: './images/mobile-background.png',
          };




        case 'cok':
          return {
            ...prevStory,
            text: 'Hmm, böyle şeylere anlam veren birisin demek. Kendini hep dışarıda mı ararsın?',
            choices: [
              { text: 'Bu ne demek şimdi?', target: 'supheci', damaged: 50 },
              { text: 'Şu ana kadar bulmuş değilim.', target: 'notr' },
            ],
            buttonsDisabled: false,

          };
        case 'salak':
          return {
            ...prevStory,
            text: 'You opened the treasure chest and found a magical amulet!',
            choices: [],
            buttonsDisabled: true,

          };
        case 'supheci':
          return {
            ...prevStory,
            text: 'You decided to continue exploring the forest. What will you find next?',
            choices: [
              { text: 'Follow the mysterious sounds deeper into the forest.', target: 'mysteriousSounds' },
              { text: 'Head back to the crossroads.', target: 'backToCrossroads' },
            ],
            buttonsDisabled: false,
            background: './images/background7.png',

          };
        case 'befriendCreature':
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
    console.log('Background Image:', story.background);
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
    display: 'flex',
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
        <div className=' flex items-center justify-center bg-cover bg-center text-center ' style={containerStyle}>
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
          />
        </div>
      )}
    </div>
  );
}

export default App;
