
import React from 'react';
import utils from './src/components/utils';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import adiNeydiAudio from './src/audio/storyici/adiNeydi.mp3';
import suatAudio from './src/audio/storyici/suat.mp3';
import suIcAudio from './src/audio/storyici/suIc.mp3';
import yagmurYagdiAudio from './src/audio/storyici/yagmurYagdi.mp3';
import kovaAudio from './src/audio/storyici/kova.mp3';
import hazirlanmaAudio from './src/audio/storyici/hazirlanma.mp3';
import teyzeAudio from './src/audio/storyici/teyze.mp3';
import teyze2Audio from './src/audio/storyici/teyze2.mp3';
import kornaAudio from './src/audio/storyici/korna.mp3';
import kornasizAudio from './src/audio/storyici/kornasiz.mp3';
import nuncakuAudio from './src/audio/storyici/nuncaku.mp3';
import notAudio from './src/audio/storyici/not.mp3';
import UserInputForm from './src/components/UserInputForm';
import Certificate from './src/components/Certificate';

const StoryComponent = ({ prevStory, setCharacterStats, setShowHealthAnimation, setShowIntelligenceCheckAnimation, setShowMoneyAnimation, setShowMoodAnimation, setShowIntelligenceAnimation, newMoodIncrease, newHealthIncrease, newHealthDecrease, newIntelligenceDecrease, newMoneyDecrease, newMoodDecrease, newIntelligenceIncrease, newMoneyIncrease, statHealthChangeRef, statIntelligenceChangeRef, statMoneyChangeRef, statMoodChangeRef, }) => {



    const dispatch = useDispatch();
    const [userChoseSuIc, setUserChoseSuIc] = useState(false);
    const [merdivenYolu, setMerdivenYolu] = useState(false);

    const [userName, setUserName] = useState('');
    const { handleMoodAnimation, handleIntelligenceCheckAnimation, handleMoneyAnimation, handleHealthAnimation, handleIntelligenceAnimation } = utils;






    const handleStory = (path, characterStats = {}) => {
        const { mood, intelligence, money, health } = characterStats;
        switch (path) {

            case 'ok':

                window.location.reload(true);
                return {



                    buttonsDisabled: true,

                    background: './images/end.png',
                };
            case 'adiNeydi':


                return {
                    ...prevStory,
                    text: [
                        'Adamı kesinlikle tanıyorsun. Burada yaşadığın süre boyunca en az bir defa gördün. \n\n Bu adam senin apartman yöneticin, adı neydi?',
                    ],
                    choices: [
                        { text: 'SUAT', target: 'suat' },
                        { text: 'ÖNEMİ VAR MI?', target: 'onemiVarMi' },
                    ],
                    buttonsDisabled: false,
                    audio: adiNeydiAudio,
                    background: './images/yonetici1.png',
                };
            case 'yagmurYagdi':
                return {
                    ...prevStory,

                    text: [
                        '“Ya biliyorsun geçen çok fena yağmur yağdı, borular morular sorular aklımda binbir tane, boyalar falan sökülmüş akmış hep duvarlar üstüme üstüme geliyor…”',
                    ],
                    choices: [
                        { text: '"NASIL YANİ ABİ?"', target: 'neDiyor' },
                        { text: 'BEN BİR SU İÇEYİM', target: 'su' },
                    ],
                    buttonsDisabled: false,
                    audio: yagmurYagdiAudio,
                    background: './images/yari-siluet.png',
                };
            case 'neDiyor':
                return {
                    ...prevStory,
                    text: [

                        '“Yav işte yağmur büyümüş dolu olmuş, dolu büyümüş çatıya konmuş. Kedi içti ağaca çıktı, balta kesti suya düştü, inek içti dağa kaçtı, en sonunda yandı bitti kül oldu.” \n\n Ne diyor bu adam? ',
                    ],

                    choices: [
                        { text: 'ÇATI AKITMIŞ ONU YAPTIRACAĞIZ.', target: 'cati' },
                        { text: 'YÖNETİCİNİN DEDESİ ÇATIYA ÇIKMIŞ, ONU İNDİRECEĞİZ.', target: 'icSesim' },
                    ],
                    buttonsDisabled: false,
                    audio: yagmurYagdiAudio,
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
                    audio: suIcAudio,
                    background: './images/su.png',

                };
            case 'cati':
                return {
                    ...prevStory,
                    text: [
                        '“Heh işte onun için para vermen lazım ki biz de adama verelim.”',
                    ],
                    choices: [
                        { text: '“TABİİ ABİ BİR SANİYE.” \n\nPARAYI VER.', target: 'usta' },
                        { text: '"BEN SANA IBANDAN ATAYIM ABİ ONU, NAKTİM KALMADI HİÇ.” \n\nYALAN SÖYLE', target: 'yalan' },

                    ],
                    buttonsDisabled: false,
                    audio: yagmurYagdiAudio,
                    background: './images/yonetici-el.png',

                };
            case 'icSesim':


                return {
                    ...prevStory,
                    text: [
                        'Aynen öyle, apartmanda 7 metrelik bir merdiveni bulabilecek tek kişi sen olduğun için de sana geldiler. \n\n İçini bir kahramanlık ateşi sarıyor ve apartman yöneticin sana soru sorar gözler ile bakıyor. \n\n 7 metrelik merdivenini almaya gidecek misin? ',

                    ],
                    choices: [
                        {
                            text: 'BU KADAR SAÇMA OLAMAZ. \nKESİN BAŞKA BİR ŞEY SÖYLÜYORDUR.',

                            target: 'catiSesim',
                        },
                        { text: '“TABİ Kİ… APARTMANIMIN BANA İHTİYACI VAR.” \nEVDEN ÇIK.', target: 'merdiven' },
                    ],
                    buttonsDisabled: false,
                    audio: adiNeydiAudio,
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
                        { text: 'BU İNANDIRICI GELMEDİ, 7 METRELİK  AVINA GİDELİM.', target: 'merdiven' },
                    ],
                    buttonsDisabled: false,
                    audio: kovaAudio,
                    background: './images/kova3.png',
                };
            case 'merdiven':
                setMerdivenYolu(true)
                return {
                    ...prevStory,



                    text: [
                        'Hazırlanma hızın inanılmaz.\n\nMerdiven yolu onurlu bir yol. Bol şans.',

                    ],
                    choices: [
                        { text: 'EVDEN ÇIK', target: 'merdivenDilenci' },

                    ],
                    buttonsDisabled: false,
                    audio: hazirlanmaAudio,
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

                        '“Usta yarım saate geliyor çatıya bakmaya, sen buradasın değil mi? Adamın başında dur da kaytarmasın.” ',


                    ],
                    choices: [
                        { text: '"YOK ABİ BENİM ÇIKMAM LAZIM"', target: 'cikis' },
                    ],
                    buttonsDisabled: false,
                    audio: yagmurYagdiAudio,
                    background: './images/yonetici-cep.png',
                };
            case 'yalan':


                return {
                    ...prevStory,
                    text: [
                        '“İyi bana hatırlatırsın, IBAN’ı atarım Whatsapp’tan. \n Sen buradasın, değil mi? Adamın başında dur da kaytarmasın.”',


                    ],
                    choices: [
                        { text: '"YOK ABİ BENİM ÇIKMAM LAZIM"', target: 'cikis' },
                    ],
                    buttonsDisabled: false,
                    audio: yagmurYagdiAudio,
                    background: './images/yonetici-cep.png',
                };
            case 'cikis':

                return {
                    ...prevStory,
                    text: [
                        'Hazırlanma hızın inanılmaz. Abiyi başından saldığına göre dışarı çıkmaya hazırsın.',


                    ],
                    choices: [
                        { text: 'EVDEN ÇIK', target: 'dilenci' },
                    ],
                    buttonsDisabled: false,
                    audio: hazirlanmaAudio,
                    background: './images/cikis.png',
                };
            case 'suat':

                return {
                    ...prevStory,
                    text: [
                        '“Eyvallah Suat abi, sana da.” deyiverdin. \n\n Bakışları değişmedi, ama sözünü kestiğin için ilginç bir yinelemenin içine düştü. \n\nDilinle damağının arasındaki sürtünme katsayısı hoşuna gidenden çok daha az. \n\nHidrasyonla ilgili ne düşünürsün?',
                    ],
                    choices: [
                        { text: 'SU İÇ', target: 'suIc' },
                        { text: 'NİYE GELMİŞ BU ADAM?', target: 'aidat' },
                    ],
                    buttonsDisabled: false,
                    audio: suatAudio,
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
                        'Su çok güzel, ciğerlerine doğru gelen canlanma hissi sana çok müthiş hissettiriyor ve her şey daha net.',


                    ],
                    choices: [
                        { text: 'OH BE. ŞİMDİ Bİ BAKALIM NE DİYOR SUAT ABİ.', target: 'aidat' },

                    ],
                    buttonsDisabled: false,
                    audio: suIcAudio,
                    background: './images/su.png',

                };
            case 'aidat':


                return {
                    ...prevStory,
                    text: [

                        'Adam söylediklerine kaldığı yerden devam ediyor. \n\n“İşte senin aidatı bugün vermen lazım ki, biz de ustaya vereceğiz.” ',


                    ],
                    choices: [
                        { text: '“TABİİ ABİ BİR SANİYE.” \n\nPARAYI VER.', target: 'usta' },
                        { text: '"BEN SANA IBANDAN ATAYIM ABİ ONU, NAKTİM KALMADI HİÇ.” \n\nYALAN SÖYLE', target: 'yalan' },
                    ],
                    buttonsDisabled: false,
                    audio: suatAudio,
                    background: './images/yonetici-el.png',


                };
            case 'onemiVarMi':


                return {
                    ...prevStory,
                    text: [

                        '“Eyvallah abi, sana da. ” deyiverdin. \n\n Adam söylediklerine kaldığı yerden devam ediyor. \n\n “İşte senin aidatı bugün vermen lazım ki, biz de ustaya vereceğiz.”',

                    ],
                    choices: [
                        { text: '“TABİİ ABİ BİR SANİYE.” \n\nPARAYI VER.', target: 'usta' },
                        { text: '"BEN SANA IBANDAN ATAYIM ABİ ONU, NAKTİM KALMADI HİÇ.” \n\nYALAN SÖYLE', target: 'yalan' },
                    ],
                    buttonsDisabled: false,
                    audio: yagmurYagdiAudio,
                    background: './images/yonetici-el.png',


                };
            case 'merdivenDilenci':

                return {
                    ...prevStory,
                    text: [
                        'Sokağa çıktın ve vazgeçmek için çok geç olduğunun farkındasın. \n\nNalbur sormak için gördüğün ilk tekele girmek üzereyken bir dilenci yanında bitti. \n\n“Çocuğuma şuradan bir tavuk alabilir misin?”',

                    ],

                    choices: [
                        { text: 'BEN DE AY BAŞINI BEKLİYORUM VALLA', target: 'aybasi' },
                        { text: 'TABİ Kİ... BİR ÖZEL ANTAKYA SOSLU ZURNA?', target: 'dilenciParasiz' },
                    ],
                    buttonsDisabled: false,
                    background: './images/second.png',
                    audio: teyzeAudio,
                    characterImage: './images/teyze.png', // Add the path to your teyze.png

                };
            case 'dilenci':

                return {
                    ...prevStory,
                    text: [
                        'Sokağa çıktın ve ilk köşeyi döner dönmez bir dilenci yanında bitti. \n\n“Çocuğuma şuradan bir tavuk alabilir misin?”',


                    ],

                    choices: [
                        { text: 'BEN DE AY BAŞINI BEKLİYORUM VALLA', target: 'aybasi' },
                        { text: 'TABİ Kİ... BİR XXL ÖZEL ANTAKYA SOSLU ZURNA TAVUK DÜRÜM GELİYOR!', target: 'dilenciParasiz' },
                    ],
                    buttonsDisabled: false,
                    audio: teyzeAudio,
                    background: './images/second.png',
                    characterImage: './images/teyze.png', // Add the path to your teyze.png

                };
            case 'aybasi':

                return {
                    ...prevStory,
                    text: [

                        '"Canın sağ olsun." \n\n Çocuğun varlığından emin olamasan bile bir bebişi doyuramamak vicdanına çöküyor.',

                    ],

                    choices: [
                        { text: 'HEPSİNİ BEN Mİ DOYURAYIM KARDEŞİM, DEVLET YOK MU?', target: 'politikBilinc' },
                        { text: 'EVET YA... KEŞKE TÜM AÇLARI DOYURABİLSEYDİM.', target: 'adakHayat' },
                    ],
                    buttonsDisabled: false,
                    audio: teyze2Audio,
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


                return {
                    ...prevStory,
                    text: [

                        '“Allah senden razı olsun.” \n\nAz önce bir dilenciye yardım ettin. Dünyadaki tüm insanlara karşı ahlaki üstünlüğünü parmak uçlarında hissediyorsun.',


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
                    audio: teyze2Audio,
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
                        'Haklısın. Bu politik bilinç içini rahatlatmak için yeter de artar bile.',


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
                    audio: teyze2Audio,
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
                        'Keşke... Neden tüm bu sorumluluğu kabul edip hayatının geri kalanını buna adamıyorsun?',


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
                    audio: teyze2Audio,
                    characterImage: './images/teyze.png',

                };
            case 'korna':



                return {
                    ...prevStory,
                    text: [

                        merdivenYolu
                            ? 'Yol sorabileceğin bir kahvehaneye denk geldin. Oraya girmek için yolun karşısına geçmeye çalıştığın sırada bir korna sesi kulaklarını alıp götürdü. \n\n Bu, ters yönden gelen bir motor kurye.'
                            : 'Ne kadar mükemmel biri olduğunu düşünürken yoğun bir korna sesiyle gerçekliğe çekildin. \n\nTers yönden gelen bir motor kurye kaldırıma çıkmış ve yolundan çıkman için sana korna çalıyor.'
                    ],
                    choices: [
                        { text: 'KUSURA BAKMAYIN, HEMEN ÇEKİLİYORUM', target: 'cekil' },
                        { text: 'KALDIRIM ULAN BURASI DAVAR HERİF!', target: 'davar' },
                    ],
                    buttonsDisabled: false,
                    audio: kornaAudio,
                    background: './images/trafik.png',
                    characterImage: './images/kurye.png',
                };
            case 'cekil':

                return {
                    ...prevStory,
                    text: [
                        '“Çok teşekkürler.” \n\n Kurye teşekkür etmek için sana küçük bir tantuni fırlatıp uzaklaşmaya başlıyor. Yola devam?',

                    ],
                    choices: [
                        { text: 'TANTUNİYİ YE', target: 'tantuni' },
                        { text: 'YETER ARTIK, BEN VEGANIM', target: 'vegan' },
                    ],
                    buttonsDisabled: false,
                    audio: kornasizAudio,
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
                    audio: notAudio,
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
                    text: [
                        merdivenYolu
                            ?
                            'Afiyet olsun. Şimdi şu merdiveni çabucak bulsan iyi edersin...'
                            :
                            'Afiyet olsun. Artık geç kalmamak için hızlansan iyi edersin...',
                    ],

                    choices: merdivenYolu ? [
                        { text: '>', target: 'kahvehane' },
                    ] : [
                        { text: '>', target: 'polis' },
                    ],
                    buttonsDisabled: false,
                    audio: kornasizAudio,
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
                    audio: nuncakuAudio,
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
                        'Nunçakulu bir kuryeyi alt edebileceğine inanman güzel fakat gerçeklerle tanışma zamanı. Artık yoluna devam etmelisin.',


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
                        'Bugünlük kardiyonu halletmiş oldun. Yola devam..',


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

                        'Hayır. \n\nGözlerinle etrafı tarayarak yürümeye devam ediyorsun.',


                    ],
                    choices: [
                        { text: '>', target: 'korna' },
                    ],
                    buttonsDisabled: false,
                    audio: teyze2Audio,
                    background: './images/second.png',
                    characterImage: null,

                };
            case 'polis':

                return {
                    ...prevStory,
                    text: [
                        'Bir polisin zevkine göre fazla farklı giyiniyorsun. Bir tanesi seni durduruyor. \n\n“Kimliğine bir bakabilir miyiz?”',


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

                        'Teşekkürler. Sigara kullanıyor musun?',


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

                        '“Paketini görebilir miyim?”',


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


                        '"Tamam, devam edebilirsin."',


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

                        '"Tamam, devam edebilirsin."',


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
                        { text: '"MERHABA, 7 METRELİK BİR  ARIYORUM"', target: 'merdivenAriyorum' },
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
                        { text: '"TAMAM, 7 METRELİK BİR  ARIYORUM"', target: 'tamamMerdiven' },
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
            case 'charlie':

                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Yoluna devam ederken ukulelesini boynuna dayayarak keman gibi çalan Charlie Chaplin taklitçisi yolunu kesiyor. \n“...”',

                        ],
                        choices: [
                            { text: '“...”', target: '1' },
                            { text: '“...”', target: '2' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            'Yoluna devam ederken ukulelesini boynuna dayayarak keman gibi çalan Charlie Chaplin taklitçisi yolunu kesiyor. \n“...”',

                        ],
                        choices: [
                            { text: '“...”', target: '1' },
                            { text: '“...”', target: '2' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };


                };
            case '1':
                newHealthIncrease = 10;
                handleHealthAnimation(dispatch, newHealthIncrease, setShowHealthAnimation, statHealthChangeRef, true, 0);
                statHealthChangeRef.current = true;



                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    health: Math.max(prevStats.health + newHealthIncrease, 0), // Ensure non-negative value
                }));
                dispatch({ type: 'CHANGE_HEALTH', payload: -newHealthIncrease });
                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: '3' },
                            { text: '“...”', target: '4' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: '3' },
                            { text: '“...”', target: '4' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case '2':
                newMoodDecrease = 10;
                handleMoodAnimation(dispatch, newMoodDecrease, setShowMoodAnimation, statMoodChangeRef, false, 0);
                statMoodChangeRef.current = true;

                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    mood: Math.max(prevStats.mood - newMoodDecrease, 0), // Ensure non-negative value
                }));
                dispatch({ type: 'CHANGE_MOOD', payload: newMoodDecrease });
                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: '5' },
                            { text: '“...”', target: '6' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: '5' },
                            { text: '“...”', target: '6' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case '3':
                newIntelligenceDecrease = 10;

                handleIntelligenceAnimation(dispatch, newIntelligenceDecrease, setShowIntelligenceAnimation, statIntelligenceChangeRef, false);
                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    intelligence: Math.max(prevStats.intelligence - newIntelligenceDecrease, 0),
                }));
                statIntelligenceChangeRef.current = true;
                dispatch({ type: 'CHANGE_INTELLIGENCE', payload: -newIntelligenceDecrease });


                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: 'charlieSonuc' },
                            { text: '“...”', target: 'charlieSonuc' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: 'charlieSonuc' },
                            { text: '“...”', target: 'charlieSonuc' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case '4':
                newIntelligenceIncrease = 10;

                handleIntelligenceAnimation(dispatch, newIntelligenceIncrease, setShowIntelligenceAnimation, statIntelligenceChangeRef, true);
                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    intelligence: Math.max(prevStats.intelligence + newIntelligenceIncrease, 0),
                }));
                statIntelligenceChangeRef.current = true;
                dispatch({ type: 'CHANGE_INTELLIGENCE', payload: -newIntelligenceIncrease });



                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: 'charlieSonuc' },
                            { text: '“...”', target: 'charlieSonuc' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: 'charlieSonuc' },
                            { text: '“...”', target: 'charlieSonuc' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case '5':
                newMoneyIncrease = 10;
                handleMoneyAnimation(dispatch, newMoneyIncrease, setShowMoneyAnimation, statMoneyChangeRef, true, 0);
                statMoneyChangeRef.current = true;
                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    money: Math.max(prevStats.money + newMoneyIncrease, 0), // Ensure non-negative value
                }));
                dispatch({ type: 'CHANGE_MONEY', payload: -newMoneyIncrease });

                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: 'charlieSonuc' },
                            { text: '“...”', target: 'charlieSonuc' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: 'charlieSonuc' },
                            { text: '“...”', target: 'charlieSonuc' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case '6':
                newIntelligenceIncrease = 10;

                handleIntelligenceAnimation(dispatch, newIntelligenceIncrease, setShowIntelligenceAnimation, statIntelligenceChangeRef, true);
                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    intelligence: Math.max(prevStats.intelligence + newIntelligenceIncrease, 0),
                }));
                statIntelligenceChangeRef.current = true;
                dispatch({ type: 'CHANGE_INTELLIGENCE', payload: -newIntelligenceIncrease });




                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: 'charlieSonuc' },
                            { text: '“...”', target: 'charlieSonuc' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            '“...”',

                        ],
                        choices: [
                            { text: '“...”', target: 'charlieSonuc' },
                            { text: '“...”', target: 'charlieSonuc' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case 'charlieSonuc':
                console.log("charliesonuc");
                newHealthIncrease = 10;

                handleHealthAnimation(dispatch, newHealthIncrease, setShowHealthAnimation, statHealthChangeRef, true, 0);
                statHealthChangeRef.current = true;
                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    health: prevStats.health + newHealthIncrease,
                }));
                dispatch({ type: 'CHANGE_HEALTH', payload: newHealthIncrease });


                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Eee, nasıl buldun şovu?',

                        ],
                        choices: [
                            { text: 'ŞİMDİ NE GEREK VARDI BUNA...', target: 'dimiya' },
                            { text: 'AYY NE KDAR TATLI...', target: 'dimiya' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            'Eee, nasıl buldun şovu?',

                        ],
                        choices: [
                            { text: 'ŞİMDİ NE GEREK VARDI BUNA...', target: 'dimiya' },
                            { text: 'AYY NE KDAR TATLI...', target: 'dimiya' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case 'dimiya':


                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Di mi ya?',

                        ],
                        choices: [
                            { text: '>', target: 'scooter' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            'Di mi ya?',

                        ],
                        choices: [
                            { text: '>', target: 'scooter' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case 'scooter':
                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Gitmeye çalıştığın yolda, akıl sağlığı konusunda tartışmalara izin veren bir Kadıköylü, birkaç scooter’ı devirmiş ve tüm yolu kapatmış... \nFransız ihtilalini havada koklayabiliyorsun.',

                        ],
                        choices: [
                            { text: 'ÜSTLERİNDEN ATLA', target: 'ustlerindenAtla' },
                            { text: 'YOLUNU DEĞİŞTİR', target: 'yolunuDegistir' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            'Gitmeye çalıştığın yolda, akıl sağlığı konusunda tartışmalara izin veren bir Kadıköylü, birkaç scooter’ı devirmiş ve tüm yolu kapatmış... \nFransız ihtilalini havada koklayabiliyorsun.',

                        ],
                        choices: [
                            { text: 'ÜSTLERİNDEN ATLA', target: 'ustlerindenAtla' },
                            { text: 'YOLUNU DEĞİŞTİR', target: 'yolunuDegistir' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case 'ustlerindenAtla':

                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Bugün oldukça sportifsin.\nBu formu neye borçluyuz',

                        ],
                        choices: [
                            { text: 'ACELEM OLMASINA', target: 'acelem' },
                            { text: 'ÜSTÜN IRK OLMAMA', target: 'ustunIrk' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            'Bugün oldukça sportifsin.\nBu formu neye borçluyuz',

                        ],
                        choices: [
                            { text: 'ACELEM OLMASINA', target: 'acelem' },
                            { text: 'ÜSTÜN IRK OLMAMA', target: 'ustunIrk' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case 'acelem':
                newMoodIncrease = 10,
                    handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation, statMoodChangeRef, true, 0);
                statMoodChangeRef.current = true;


                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    mood: Math.max(prevStats.mood + newMoodIncrease, 0),
                }));
                dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });
                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Farkındalık seviyen harika. Hiçbir şey seni durduramaz.',

                        ],
                        choices: [
                            { text: '>', target: 'hayvanlar' },

                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            'Farkındalık seviyen harika. Hiçbir şey seni durduramaz.',

                        ],
                        choices: [
                            { text: '>', target: 'hayvanlar' },

                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case 'ustunIrk':
                newIntelligenceDecrease = 10;

                handleIntelligenceAnimation(dispatch, newIntelligenceDecrease, setShowIntelligenceAnimation, statIntelligenceChangeRef, false);
                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    intelligence: Math.max(prevStats.intelligence - newIntelligenceDecrease, 0),
                }));
                statIntelligenceChangeRef.current = true;
                dispatch({ type: 'CHANGE_INTELLIGENCE', payload: -newIntelligenceDecrease });

                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Vay canına, gerçek bir fındıksın. Ama merak etme, hayat sana birçok fırsat sunacaktır.',

                        ],
                        choices: [
                            { text: '>', target: 'hayvanlar' },

                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            'Vay canına, gerçek bir fındıksın. Ama merak etme, hayat sana birçok fırsat sunacaktır.',

                        ],
                        choices: [
                            { text: '>', target: 'hayvanlar' },

                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case 'yolunuDegistir':
                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Kendini çok zorlamadan bu kargaşadan çıkabileceğin en kolay yolu buldun. Bu seni hedefine yaklaştıracaktır. \nBu manevranın arkasındaki motivasyon neydi?',

                        ],
                        choices: [
                            { text: 'ACELEM OLMASI', target: 'acelem' },
                            { text: 'ÜSTÜN IRK OLMAM', target: 'ustunIrk' },

                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            'Kendini çok zorlamadan bu kargaşadan çıkabileceğin en kolay yolu buldun. Bu seni hedefine yaklaştıracaktır. \nBu manevranın arkasındaki motivasyon neydi?',

                        ],
                        choices: [
                            { text: 'ACELEM OLMASI', target: 'acelem' },
                            { text: 'ÜSTÜN IRK OLMAM', target: 'ustunIrk' },

                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case 'hayvanlar':
                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Hayvanları seviyor musunuz?',

                        ],
                        choices: [
                            { text: 'EVET', target: 'evet' },
                            { text: 'HAYIR', target: 'hayir' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            'Hayvanları seviyor musunuz?',

                        ],
                        choices: [
                            { text: 'EVET', target: 'evet' },
                            { text: 'HAYIR', target: 'hayir' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case 'evet':
                newMoodIncrease = 10,
                    handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation, statMoodChangeRef, true, 0);
                statMoodChangeRef.current = true;


                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    mood: Math.max(prevStats.mood + newMoodIncrease, 0),
                }));
                dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });
                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            '“Harika, biz de patimati hayvan barınağı için yardım topluyoruz. Bize destek olmak ister misiniz?”',

                        ],
                        choices: [
                            { text: 'TABİİ, BU KADAR YETER Mİ? \n\n(PARA VER)', target: 'yeterMi' },
                            { text: 'MAALESEF ŞU AN ÜSTÜMDE NAKİT YOK', target: 'nakitYok' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            '“Harika, biz de patimati hayvan barınağı için yardım topluyoruz. Bize destek olmak ister misiniz?”',

                        ],
                        choices: [
                            { text: 'TABİİ, BU KADAR YETER Mİ? \n\n(PARA VER)', target: 'yeterMi' },
                            { text: 'MAALESEF ŞU AN ÜSTÜMDE NAKİT YOK', target: 'nakitYok' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case 'hayir':

                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Nasıl yani?',

                        ],
                        choices: [
                            { text: 'EVET DEMEK İSTEMİŞTİM, PARDON', target: 'evet' },
                            { text: 'SEVMİYORUM HAYVANLARI', target: 'sevmiyorum' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            'Nasıl yani?',

                        ],
                        choices: [
                            { text: 'EVET DEMEK İSTEMİŞTİM, PARDON', target: 'evet' },
                            { text: 'SEVMİYORUM HAYVANLARI', target: 'sevmiyorum' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                };
            case 'sevmiyorum':
                newMoodIncrease = 10,
                    handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation, statMoodChangeRef, true, 0);
                statMoodChangeRef.current = true;


                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    mood: Math.max(prevStats.mood + newMoodIncrease, 0),
                }));
                dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });


                if (merdivenYolu) {
                    return {
                        ...prevStory,
                        text: ['Bu anketörleri reddetmeyi hep istemiştin. Harika hissediyorsun.'],

                        choices: [
                            { text: '>', target: 'fb' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {

                    return {
                        ...prevStory,
                        text: ['Bu anketörleri reddetmeyi hep istemiştin. Harika hissediyorsun.'],

                        choices: [
                            { text: '>', target: 'biraParasi' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                }
            case 'yeterMi':

                newMoneyDecrease = 10;
                handleMoneyAnimation(dispatch, newMoneyDecrease, setShowMoneyAnimation, statMoneyChangeRef, false, 0);
                statMoneyChangeRef.current = true;
                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    money: Math.max(prevStats.money - newMoneyDecrease, 0), // Ensure non-negative value
                }));
                dispatch({ type: 'CHANGE_MONEY', payload: -newMoneyDecrease });

                if (merdivenYolu) {
                    return {
                        ...prevStory,
                        text: ['Çok teşekkür ederiz...'],

                        choices: [
                            { text: '>', target: 'fb' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {

                    return {
                        ...prevStory,
                        text: ['Çok teşekkür ederiz...'],

                        choices: [
                            { text: '>', target: 'biraParasi' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                }
            case 'nakitYok':

                if (merdivenYolu) {
                    return {
                        ...prevStory,
                        text: ['“Hesap numaramızı verebiliriz, mobil bankacılıktan gönderebilirsiniz.”',],

                        choices: [
                            { text: 'UYGUN BENİM İÇİN', target: 'yeterMi' },
                            { text: 'MAALESEF ŞARJIM DA BİTTİ', target: 'sarjim' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {

                    return {
                        ...prevStory,
                        text: ['“Hesap numaramızı verebiliriz, mobil bankacılıktan gönderebilirsiniz.”',],

                        choices: [
                            { text: 'UYGUN BENİM İÇİN', target: 'yeterMi' },
                            { text: 'MAALESEF ŞARJIM DA BİTTİ', target: 'sarjim' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                }
            case 'sarjim':
                newMoodDecrease = 10,
                    handleMoodAnimation(dispatch, newMoodDecrease, setShowMoodAnimation, statMoodChangeRef, false, 0);
                statMoodChangeRef.current = true;


                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    mood: Math.max(prevStats.mood - newMoodDecrease, 0),
                }));
                dispatch({ type: 'CHANGE_MOOD', payload: newMoodDecrease });

                if (merdivenYolu) {
                    return {
                        ...prevStory,
                        text: ['Canınız sağolsun o zaman, iyi günler.'],

                        choices: [
                            { text: '>', target: 'fb' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                } else {

                    return {
                        ...prevStory,
                        text: ['Canınız sağolsun o zaman, iyi günler.'],

                        choices: [
                            { text: '>', target: 'biraParasi' },
                        ],
                        buttonsDisabled: false,
                        background: './images/kahvehane2.png',
                        characterImage: null
                    };
                }
            case 'fb':

                return {
                    ...prevStory,
                    text: [
                        'Fenerbahçe taraftarları en sarı lacivert formalarını giymişler ve sokağa tabure atmış bir dükkanın önünde, iştahla dürüm yiyorlar.',

                    ],
                    choices: [
                        { text: 'BEN EN BÜYÜK SİZ DEĞİLSİNİZ DİYE BİLİYORUM', target: 'kalemtiras' },
                        { text: 'HEEY! YAŞASIN FB', target: 'sarilaci' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'kalemtiras':

                return {
                    ...prevStory,
                    text: [
                        '"Ne diyosun lan kalemtıraş kafalı!" diye çıkışıyor içlerinden biri. Kalan herkes etrafınızda toplanmaya başlıyor."',

                    ],
                    choices: [
                        { text: 'Bİ GÜNDE ÜÇ KERE DAYAK YİYEMEM, DEMEK Kİ BUNDA DAYAK ATAN BEN OLACAĞIM', target: 'dayak' },
                        { text: 'Bİ GÜNDE ÜÇ KERE DAYAK YİYEMEM, INCEDEN YOL ALAYIM', target: 'nodayak' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'dayak':
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
                        ':( \n Bugün üç kere dayak yedin...',

                    ],
                    choices: [
                        { text: '>', target: 'realInsaat' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'nodayak':
                newIntelligenceIncrease = 10;

                handleIntelligenceAnimation(dispatch, newIntelligenceIncrease, setShowIntelligenceAnimation, statIntelligenceChangeRef, true);
                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    intelligence: Math.max(prevStats.intelligence + newIntelligenceIncrease, 0),
                }));
                statIntelligenceChangeRef.current = true;
                dispatch({ type: 'CHANGE_INTELLIGENCE', payload: -newIntelligenceIncrease });


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
                        'Kaçış manevran çok zekiceydi. Dayak yemedin, yine de moralin biraz bozuldu...',

                    ],
                    choices: [
                        { text: '>', target: 'realInsaat' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'sarilaci':

                return {
                    ...prevStory,
                    text: [
                        'Kanı sarı lacivert akan bu güruh seni hızlıca aralarına alıyor ve onların omuzlarında gideceğin yere kadar bırakılıyorsun!',

                    ],
                    choices: [
                        { text: '>', target: 'realInsaat' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'realInsaat':

                return {
                    ...prevStory,
                    text: [
                        'İnşaata vardın. Kadıköy Anadolu Lisesinin yeniden yapılıyor olması seni bu merdivene ulaştıracak gibi. Gözüne bir ustayı kestireceğini hissediyorsun.',

                    ],
                    choices: [
                        { text: 'PARDON, 7 METRELİK İNİZ VAR MI?', target: 'yediMetre' },
                        { text: 'KOLAY GELSİN USTAM, NASILSIN?', target: 'kolayGelsin' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'kolayGelsin':
                return {
                    ...prevStory,
                    text: [
                        'İyilik yav ne olsun, çalışıyoruz işte. Hayırdır birine mi baktın sen?',

                    ],
                    choices: [
                        { text: 'ABİ BEN 7 METRELİK İN ARIYORUM', target: 'yediMetre' },
                        { text: 'OLABİLİR, BANA KENDİNDEN BAHSET USTAM', target: 'kendindenBahset' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'yediMetre':

                return {
                    ...prevStory,
                    text: [
                        '"Aa, valla çok ilginç. Vardı da ödünç verdik bi arkadaşa. Ona bir sor istersen, Yoğurtçu parkının orada bi tadilat işine gitti."',

                    ],
                    choices: [
                        { text: 'ARTIK ORADA OLSA İYİ OLUR', target: 'yogurtcuParki' },
                        { text: 'İYİ YA BÖYLE, BANA KENDİNDEN BAHSET USTAM', target: 'kendindenBahset' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'kendindenBahset':

                return {
                    ...prevStory,
                    text: [
                        '"Kendimden? Yav ben ne bileyim, sen işine baksana!"',

                    ],
                    choices: [
                        { text: 'AA USTAM, NEDEN BÖYLE KONUŞUYORSUN?', target: 'nedenBoyle' },
                        { text: 'TAMAM BEN GİDİYORUM, AMA BİL Kİ GERİ DÖNEBİLİRİM', target: 'yogurtcuParki' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'nedenBoyle':

                return {
                    ...prevStory,
                    text: [
                        'Sen ustayı flörtle karışık darlarken, başka usta arkadaşları da tuhaflığın kokusunu alıp olay yerine yaklaşıyor. "Kardeşim, bak, işin yoksa git diyorum!"',

                    ],
                    choices: [
                        { text: 'TAMAM, GİDİYORUM', target: 'yogurtcuParki' },
                        { text: 'USTAM AYIP EDİYORSUN', target: 'ayip' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'ayip':
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
                        'Kalabalık git gide artmakta. Sinirden kıpkırmızı olmuş usta bir kez daha bağırıyor. \n"ÇEK GİT!"',

                    ],
                    choices: [
                        { text: 'OLUR, GİDİYORUM', target: 'yogurtcuParki' },
                        { text: 'YANAĞINA SÜRPRİZ BİR ÖPÜCÜK KONDUR', target: 'opucuk' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'opucuk':
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
                        'Wow, enteresan. \n Zaman durdu. Usta ve sen.. \n Artık sadece siz varsınız. \n İstersen biz çıkalım?',

                    ],
                    choices: [
                        { text: 'BİR DE ÖYLE DENEYEBİLİRİZ ASLINDA', target: 'askiBuldum' },
                        { text: 'TAMAM, YOĞURTÇUYA GİDELİM ARTIK', target: 'yogurtcuParki' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'askiBuldum':
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
                        'Dııııt, yanlış cevap. Ustayla kavuştuğun senaryoyu yazmaya üşenmemiz çok yazık oldu. Olsun, en azından ne istediğini biliyorsun.',

                    ],
                    choices: [
                        { text: 'TESLİM OLUYORUM', target: 'yogurtcuParki' },
                        { text: 'PES EDİYORUM', target: 'yogurtcuParki' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'biraParasi':

                return {
                    ...prevStory,
                    text: [
                        'Ayvalıtaş meydanına ulaştın. Banklarda oturup bira içen gençlerden biri senden bira parası istiyor.',

                    ],
                    choices: [
                        { text: 'PARA VER', target: 'biraParaVer' },
                        { text: 'GÖRMEZDEN GEL', target: 'gormezdenGel' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'biraParaVer':
                newMoneyIncrease = 10;
                handleMoneyAnimation(dispatch, newMoneyIncrease, setShowMoneyAnimation, statMoneyChangeRef, true, 0);
                statMoneyChangeRef.current = true;
                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    money: Math.max(prevStats.money + newMoneyIncrease, 0), // Ensure non-negative value
                }));
                dispatch({ type: 'CHANGE_MONEY', payload: -newMoneyIncrease });

                return {
                    ...prevStory,
                    text: [
                        '"Dostum sağolasın yaa.. Bi fırt ister misin?" diyip zulasından çıkardığı birayı sana uzatıyor.',

                    ],
                    choices: [
                        { text: 'VER HADİ', target: 'biraIc' },
                        { text: 'YOK, SEN YAPIŞTIR', target: 'biraIcme' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'biraIc':

                newMoneyIncrease = 10;
                handleMoneyAnimation(dispatch, newMoneyIncrease, setShowMoneyAnimation, statMoneyChangeRef, true, 0);
                statMoneyChangeRef.current = true;
                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    money: Math.max(prevStats.money + newMoneyIncrease, 0), // Ensure non-negative value
                }));
                dispatch({ type: 'CHANGE_MONEY', payload: -newMoneyIncrease });

                return {
                    ...prevStory,
                    text: [
                        'Bir keyiflendin mi öyle? \n Ne kadar da yardımseversin. Üstelik Karma Polisi seni ödüllendirdi ve yerde 100 lira buldun!',

                    ],
                    choices: [
                        { text: '>', target: 'lokma' },


                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'biraIcme':

                newMoneyIncrease = 10;
                handleMoneyAnimation(dispatch, newMoneyIncrease, setShowMoneyAnimation, statMoneyChangeRef, true, 0);
                statMoneyChangeRef.current = true;
                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    money: Math.max(prevStats.money + newMoneyIncrease, 0), // Ensure non-negative value
                }));
                dispatch({ type: 'CHANGE_MONEY', payload: -newMoneyIncrease });

                return {
                    ...prevStory,
                    text: [
                        'Yardımseverlik IN, rastgele hastalıklar OUT! Karma polisi seni ödüllendirdi ve yerde 20 lira buldun!',

                    ],
                    choices: [
                        { text: '>', target: 'lokma' },


                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'gormezdenGel':

                return {
                    ...prevStory,
                    text: [
                        'Arkandan “Canın sağ olsun..” dediğini duyar gibisin.',

                    ],
                    choices: [
                        { text: '>', target: 'lokma' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'lokma':

                return {
                    ...prevStory,
                    text: [
                        'Kenara bir lokma kamyonu çekmişler. Merhum Yiğit hayrına lokma dökülüyor. \n Bilmeyenler için lokma, küresel şerbet toplarıdır.',

                    ],
                    choices: [
                        { text: 'SIRAYA GİRMEYELİM Mİ?', target: 'sira' },
                        { text: 'KULAĞA UN YAĞ ŞEKER GİBİ GELİYOR', target: 'unyagseker' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'unyagseker':

                return {
                    ...prevStory,
                    text: [
                        'Tabii, şerbete hamur batırınca aynen öyle olur.',

                    ],
                    choices: [
                        { text: 'E SÜPER, ALALIM O ZAMAN', target: 'sira' },
                        { text: 'YOK KALSIN, ARTIK BENİ YAVAŞLATMA', target: 'son' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'sira':

                return {
                    ...prevStory,
                    text: [
                        'Sıraya kaynak yapan biri var. Kimse lokma yemek için bu kadar sabırsız olmamalı!',

                    ],
                    choices: [
                        { text: 'EFENDİM YALNIZ BURADA BİR SIRA VAR', target: 'sira2' },
                        { text: 'AMAN GEÇSİN, BANA MI KALDI DÜNYANIN DERDİ', target: 'dunyaninDerdi' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'sira2':
                newMoodIncrease = 10,
                    handleMoodAnimation(dispatch, newMoodIncrease, setShowMoodAnimation, statMoodChangeRef, true, 0);
                statMoodChangeRef.current = true;


                setCharacterStats((prevStats) => ({
                    ...prevStats,
                    mood: Math.max(prevStats.mood + newMoodIncrease, 0),
                }));
                dispatch({ type: 'CHANGE_MOOD', payload: newMoodIncrease });
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
                        'Kaynakçının gözü senden korkmuşa benziyor, ancak kaçmadan önce dizine bir tekme atmayı ihmal etmedi. /n Sen ise lokmanı yedin ve mutlusun. Tatlılar da yendiğine göre hüzünlü sonumuza gidelim mi?',

                    ],
                    choices: [
                        { text: 'OLUR', target: 'son' },
                        { text: 'TAMAM', target: 'son' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'dunyaninDerdi':
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
                        'Kaynakçı ile birlikte sevinç içinde lokmalarınızı yediniz. Tatlılar da yendiğine göre hüzünlü sonumuza gidelim mi?',

                    ],
                    choices: [
                        { text: 'OLUR', target: 'son' },
                        { text: 'TAMAM', target: 'son' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'son':


                return {
                    ...prevStory,
                    text: [
                        'Moda İlkokulunun çıkış saati. Üstüne doğru gelen onlu yaşlardaki çocuk sürüsüne bakıyorsun. ,\n Hepsinin yüzünde Kadıköyde yürüyecek olmanın getirdiği kaygı belirgin.',

                    ],
                    choices: [
                        { text: 'BEN ONLARA GÜVENİYORUM', target: 'guveniyorum' },
                        { text: 'EVET, NE BİÇİM ZORLANACAKLAR', target: 'nebicim' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'guveniyorum':


                return {
                    ...prevStory,
                    text: [
                        'Elbette, üstelik bugün başarılı bir şekilde aştığın tüm engeller sayesinde kuşaklararası bir laneti bozdun. İnsanlar seni örnek alacak ve onlar da Kadıköyde kısmi de olsa yürüyebilecek.',

                    ],
                    choices: [
                        { text: '>', target: 'input' },


                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'nebicim':


                return {
                    ...prevStory,
                    text: [
                        'Tabi ki, ama bu sefer önlerinde senin gibi mükemmel bir örnek var. Sen dostum... Sen Kadıköyde yürüdün.',

                    ],
                    choices: [
                        { text: '>', target: 'input' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'yogurtcuParki':

                return {
                    ...prevStory,
                    text: [
                        'Yoğurtçu parkına indiğinde gözlerin kamaşıyor. Gökyüzünde şimdiye kadar gördüğün en güzel gökkuşağı var. Renkleri ise tam 5,6...7 tane!',

                    ],
                    choices: [
                        { text: 'İŞTE BEN BÖYLE MUCİZELERLE DOLUYUM', target: 'mucize' },
                        { text: 'EVET, BİRAZ DAHA BAKAYIM ŞU GÖKKUŞAĞINA', target: 'mucize' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'mucize':

                return {
                    ...prevStory,
                    text: [
                        'Aynen öyle, gökkuşağının dibinde bir umumi tuvalet seni bekliyor.',

                    ],
                    choices: [
                        { text: 'NALAKA?', target: 'nalaka' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'nalaka':

                return {
                    ...prevStory,
                    text: [
                        'Biraz yakınına git ve öyle bak istersen',

                    ],
                    choices: [
                        { text: 'TAMAM, ÖYLE YAPAYIM', target: 'cuce' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'cuce':

                return {
                    ...prevStory,
                    text: [
                        'Umumi tuvalete yaslanmış seni izleyen yeşil bir cüce var, eli ile bir yeri işaret ediyor.',

                    ],
                    choices: [
                        { text: 'NEREYİ?', target: 'yer' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'yer':

                return {
                    ...prevStory,
                    text: [
                        'Yedi metrelik bir merdiveni! \n Evet dostum. \nSen bugün... \nKadıköyde yürüdün, ve tüm delüzyonlarını besleyerek yedi metrelik merdivenini buldun.',

                    ],
                    choices: [
                        { text: '>', target: 'input' },

                    ],
                    buttonsDisabled: false,
                    background: './images/kahvehane2.png',
                    characterImage: null

                };
            case 'input':


                return {
                    ...prevStory,

                    inputForm: <UserInputForm onInputSubmit={handleInputSubmit} merdivenYolu={merdivenYolu} />,

                    choices: [], // Remove choices temporarily during the input phase
                    buttonsDisabled: false,
                    background: './images/certificate_background.png', // Use an appropriate background for the certificate
                    characterImage: null,
                };
            case 'certificate':
                return {
                    ...prevStory,

                    component: <Certificate userName={userName} merdivenYolu={merdivenYolu} />,
                    choices: [], // Remove choices temporarily during the certificate phase
                    buttonsDisabled: false,
                    background: './images/certificate_background.png', // Use an appropriate background for the certificate
                    characterImage: null,
                };
            default:
                console.warn('Unhandled target:', path);
                return prevStory;


        }

    };

    const handleChoice = (path, characterStats) => {
        const newStory = handleStory(path, merdivenYolu);
        console.log('handlechoice ici story component:', merdivenYolu)
        setCharacterStats((prevStats) => {
            // Update stats based on new story if needed
            return { ...prevStats };
        });
        return { ...newStory, characterStats: { ...characterStats }, merdivenYolu: merdivenYolu };
    };
    return { handleChoice, merdivenYolu };



};

export default StoryComponent;
