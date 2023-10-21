import React, { useState, useEffect } from 'react';
import background from '/images/background.png'
import EntrancePage from './EntrancePage';


function generateRandomStat() {
  return Math.floor(Math.random() * (100 - 50 + 1)) + 40;
}


function App() {
  const [showEntrancePage, setShowEntrancePage] = useState(true);

  const handleEntrancePageReady = () => {
    // This function will be called when the "Hazırım" button is clicked
    setShowEntrancePage(false); // Hide the entrance page and show the main game
  };
  const [story, setStory] = useState({
    text: 'Dünyaya gel, bir hayat kur ve Kadiköyde yürü.',
    choices: [
      { text: 'Hazırım', target: 'choice' },
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

    console.log('Handling choice:', path);


    setStory(prevStory => {
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
            text: 'Sence, bir oyun ne kadar anlamlı olabilir?',
            choices: [
              { text: 'Hiç', target: 'hic' },
              { text: 'Çok', target: 'cok' },
            ],
            buttonsDisabled: false,
            characterStats: newCharacterStats,
            background: './images/mobile-background.png',

          };
        case 'hic':
          return {
            ...prevStory,
            text: 'Nihilist bir yaklaşım. Ama hedefimiz biraz farklı. Aşağıdaki barı görüyor musun? Bu senin hakkında daha çok bilgi verebilir.',
            choices: [
              { text: 'Hangi bar?', target: 'salak' },
              { text: 'Bir saniye, tüm bunlar nereden geldi?', target: 'supheci' },
            ],
            buttonsDisabled: false,
            dandirik: <h1>
              TEST
            </h1>,
            background: './images/background6.png',
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
            dandirik: <h1>
              TEST
            </h1>,
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
    backgroundImage: `url(${story.background || background})`,
    backgroundSize: 'cover',

    backgroundPosition: '50% 70%',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    minHeight: '100vh',
    position: 'relative',
  };



  const questionContainerStyle = {
    maxWidth: '80%', // Set maximum width to 80% of the viewport width
    maxHeight: '50vh', // Set maximum height to 50% of the viewport height
    width: '40vw', // Set width to 60% of the viewport width
    height: 'auto', // Let the height adjust based on content
    padding: '20px',
    transform: 'translateY(-47%)', // Adjust vertical positioning
    backgroundColor: 'rgba(23, 22, 22, 0.9)',
    color: '#fff', // Set text color to white
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align content to the center horizontally
    justifyContent: 'center',
  };

  const specialQuestionStyle = {
    maxWidth: '14vw', // Set a specific width for the special question container
    height: '20vh',
    width: 'auto',
    backgroundColor: 'rgba(23, 28, 14, 0.9)',
    color: '#fff', // Set text color to white
    padding: '2px',

  };

  const buttonsContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // Ensure buttons are in the same row
    justifyContent: 'space-between', // Add space between buttons
    display: 'flex',
    flexDirection: 'row', // Ensure buttons are in the same row
    justifyContent: 'space-between', // Add space between buttons
    alignItems: 'center', // Align buttons to the center vertically
  };


  const footerStyle = {
    position: 'fixed', // Fix the footer at the bottom
    bottom: 0, // Stick the footer to the bottom of the viewport
    width: '100%', // Make the footer span the entire width
    display: showFooter ? 'flex' : 'none',
    justifyContent: 'space-between', // Add space between elements
    padding: '0 20px', // Add padding for better spacing
    backgroundColor: story.text === 'Sence, bir oyun ne kadar anlamlı olabilir?' ? '#334A52' : '#334A52', // Set background color based on the question
    color: story.text === 'Sence, bir oyun ne kadar anlamlı olabilir?' ? '#fff' : '#fff', // Set text color based on the question
  };



  const statContainerStyle = {
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '150px'
  };

  const statBarStyle = {
    height: '20px',
    width: '100%',
    backgroundColor: '#ddd',
    borderRadius: '5px',
    margin: '5px 0',
    border: '1px solid #ccc', // Add border to indicate full potential

  };

  const statValueContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  };

  const statValueStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text
    marginTop: '5px', // Adjust the margin for spacing

  };

  return (
    <div>
      {showEntrancePage ? (
        <EntrancePage onReady={handleEntrancePageReady} />
      ) : (
        <div
          className='min-h-screen flex items-center justify-center bg-cover bg-center text-center '
          style={containerStyle}
        >
          <div
            className='max-w-xl m-auto  bg-[#f7f7f7]'
            id='story'
            style={story.text === 'Sence, bir oyun ne kadar anlamlı olabilir?' ? { ...questionContainerStyle, ...specialQuestionStyle } : questionContainerStyle}
          >
            <div className='flex items-center justify-center flex-row text-md sm:text-xl'>
              <p>{story.text}</p>
            </div>
            <div style={buttonsContainerStyle}>
              {story.choices.map((choice, index) => (
                <div key={index} className='flex items-center justify-center  flex-row'>
                  <button
                    className='px-4 py-4 m-4 hover:bg-[#8f4830] bg-[#ec612e] text-white border-none cursor-pointer'
                    onClick={() => handleChoice(choice.target)}
                    disabled={story.buttonsDisabled}
                  >
                    {choice.text}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className=' w-full h-24' style={footerStyle}>
            <span className='flex w-full  justify-center items-center'>
              <span className='flex flex-row gap-4 mr-12'>
                <svg
                  className="w-12 h-12 mr-2 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>



                <svg className='w-12 h-12 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.193 4.452L6.67 9H3.376A1.376 1.376 0 0 0 2 10.376v3.248A1.376 1.376 0 0 0 3.376 15h3.293l5.524 4.548a.51.51 0 0 0 .807-.414V4.866a.51.51 0 0 0-.807-.414zM12 18.088L7.028 14H3.375A.375.375 0 0 1 3 13.625v-3.25A.375.375 0 0 1 3.375 10h3.653L12 5.911zm4.47-12.744A9.975 9.975 0 0 1 19 11.987a9.848 9.848 0 0 1-2.566 6.646l-.74-.672A8.872 8.872 0 0 0 18 11.987a8.984 8.984 0 0 0-2.277-5.978z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>

                <svg className='w-12 h-12 cursor-pointer' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M35.36,49.2,21.65,39.32h-8.4V24H20.8l14.58-9.2a.39.39,0,0,1,.59.33V48.88A.39.39,0,0,1,35.36,49.2Z" stroke-linecap="square"></path><line x1="40.64" y1="26.73" x2="51.19" y2="37.27"></line><line x1="40.64" y1="37.27" x2="51.19" y2="26.73"></line></g></svg>

              </span>


              <div className=' flex flex-row   gap-16 justify-center'>
                {/* Health Bar */}
                {characterStats && (
                  <div style={statContainerStyle}>
                    <div style={statValueContainerStyle}>
                      <div style={statValueStyle}>Sağlık</div>

                    </div>
                    <div className='flex-row flex w-full gap-2'>
                      <div style={{ ...statBarStyle, width: `${characterStats.health}%`, backgroundColor: '#e74c3c' }}></div>
                      <div style={statValueStyle}>{characterStats.health}</div>
                    </div>

                  </div>
                )}
                {/* Money Bar */}
                {characterStats && (
                  <div style={statContainerStyle}>
                    <div style={statValueContainerStyle}>
                      <div style={statValueStyle}>Para</div>

                    </div>
                    <div className='flex-row flex w-full gap-2'>
                      <div style={{ ...statBarStyle, width: `${characterStats.money}%`, backgroundColor: '#f39c12' }}></div>
                      <div style={statValueStyle}>{characterStats.money}</div>
                    </div>
                  </div>


                )}
                {/* Mood Bar */}
                {characterStats && (
                  <div style={statContainerStyle}>
                    <div style={statValueContainerStyle}>
                      <div style={statValueStyle}>Ruh Hali</div>
                    </div>
                    <div className='flex-row flex w-full gap-2'>
                      <div style={{ ...statBarStyle, width: `${characterStats.mood}%`, backgroundColor: '#3498db' }}></div>
                      <div style={statValueStyle}>{characterStats.mood}</div>
                    </div>
                  </div>



                )}
                {characterStats && (
                  <div style={statContainerStyle}>
                    <div style={statValueContainerStyle}>
                      <div style={statValueStyle}>Zeka</div>
                    </div>
                    <div className='flex-row flex w-full gap-2'>
                      <div style={{ ...statBarStyle, width: `${characterStats.intelligence}%`, backgroundColor: '#9b59b6' }}></div>
                      <div style={statValueStyle}>{characterStats.intelligence}</div>
                    </div>
                  </div>
                )}
                {/* Time Bar */}
                {characterStats && (
                  <div style={statContainerStyle}>
                    <div style={statValueContainerStyle}>
                      <div style={statValueStyle}>Zaman</div>
                    </div>
                    <div className='flex-row flex w-full gap-2'>
                      <div style={{ ...statBarStyle, width: `${characterStats.mood}%`, backgroundColor: '#2ecc71' }}></div>
                      <div style={statValueStyle}>{characterStats.mood}</div>
                    </div>
                  </div>
                )}
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
