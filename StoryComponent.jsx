
import React from 'react';
import utils from './src/components/utils';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import adiNeydiAudio from './src/audio/storyici/adiNeydi.mp3';
import onemiVarMiAudio from './src/audio/storyici/onemiVarMi.mp3';
import ustaAudio from './src/audio/storyici/usta.mp3';
import okulAudio from './src/audio/storyici/okul.mp3';
import yogurtcuAudio from './src/audio/storyici/yogurtcu.mp3';
import okul2Audio from './src/audio/storyici/okul2.mp3';
import lokmaAudio from './src/audio/storyici/lokma.mp3';
import biraAudio from './src/audio/storyici/bira.mp3';
import bira2Audio from './src/audio/storyici/bira2.mp3';
import bira3Audio from './src/audio/storyici/bira3.mp3';
import ruyaAudio from './src/audio/storyici/ruya.mp3';
import ruya2Audio from './src/audio/storyici/ruya2.mp3';
import insaatAudio from './src/audio/storyici/insaat.mp3';
import hayvanlarAudio from './src/audio/storyici/hayvanlar.mp3';
import hayvanlar2Audio from './src/audio/storyici/hayvanlar2.mp3';
import florasanAudio from './src/audio/storyici/florasan.mp3';
import izinBelgesiAudio from './src/audio/storyici/izinBelgesi.mp3';
import sigaraAudio from './src/audio/storyici/sigara.mp3';
import insaat3Audio from './src/audio/storyici/insaat3.mp3';
import insaat6Audio from './src/audio/storyici/insaat6.mp3';
import insaat4Audio from './src/audio/storyici/insaat4.mp3';
import insaat5Audio from './src/audio/storyici/insaat5.mp3';
import insaat2Audio from './src/audio/storyici/insaat2.mp3';
import fbAudio from './src/audio/storyici/fb.mp3';
import fb2Audio from './src/audio/storyici/fb2.mp3';
import fb3Audio from './src/audio/storyici/fb3.mp3';
import charlieAudio from './src/audio/storyici/charlie.mp3';
import charlie2Audio from './src/audio/storyici/charlie2.mp3';
import scooterAudio from './src/audio/storyici/scooter.mp3';
import scooter2Audio from './src/audio/storyici/scooter2.mp3';
import polisAudio from './src/audio/storyici/polis.mp3';
import polis2Audio from './src/audio/storyici/polis2.mp3';
import cekilAudio from './src/audio/storyici/cekil.mp3';
import kahve3Audio from './src/audio/storyici/kahve3.mp3';
import kahve4Audio from './src/audio/storyici/kahve4.mp3';
import deliAudio from './src/audio/storyici/deli.mp3';
import kahve2Audio from './src/audio/storyici/kahve2.mp3';
import kahveAudio from './src/audio/storyici/kahve.mp3';
import suatAudio from './src/audio/storyici/suat.mp3';
import gerceklerAudio from './src/audio/storyici/gercekler.mp3';
import kosAudio from './src/audio/storyici/kos.mp3';
import suIcAudio from './src/audio/storyici/suIc.mp3';
import politikBilincAudio from './src/audio/storyici/politikBilinc.mp3';
import hazirlanmaAudio from './src/audio/storyici/hazirlanma.mp3';
import teyzeAudio from './src/audio/storyici/teyze.mp3';
import teyze2Audio from './src/audio/storyici/teyze2.mp3';
import teyze3Audio from './src/audio/storyici/teyze3.mp3';
import hehIsteAudio from './src/audio/storyici/hehIste.mp3';
import kornaAudio from './src/audio/storyici/korna.mp3';
import kornasizAudio from './src/audio/storyici/kornasiz.mp3';
import catiSuAudio from './src/audio/storyici/catiSu.mp3';
import yagmurBuyumusAudio from './src/audio/storyici/yagmurBuyumus.mp3';
import nuncakuAudio from './src/audio/storyici/nuncaku.mp3';
import yaBiliyorsunAudio from './src/audio/storyici/yaBiliyorsun.mp3';
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
                        'Adamı kesinlikle tanıyorsun. Burada yaşadığın süre boyunca en az bir defa gördün. \n\nBu adam senin apartman yöneticin, adı neydi?',
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
                    audio: yaBiliyorsunAudio,
                    background: './images/yari-siluet.png',
                };
            case 'neDiyor':
                return {
                    ...prevStory,
                    text: [

                        '“Yav işte yağmur büyümüş dolu olmuş, dolu büyümüş çatıya konmuş. Kedi içti ağaca çıktı, balta kesti suya düştü, inek içti dağa kaçtı, en sonunda yandı bitti kül oldu.” \n\nNe diyor bu adam? ',
                    ],

                    choices: [
                        { text: 'ÇATI AKITMIŞ ONU YAPTIRACAĞIZ.', target: 'cati' },
                        { text: 'YÖNETİCİNİN DEDESİ ÇATIYA ÇIKMIŞ, ONU İNDİRECEĞİZ.', target: 'icSesim' },
                    ],
                    buttonsDisabled: false,
                    audio: yagmurBuyumusAudio,
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
                        'Su inanılmaz güzel. Derinin en doğru yerlerinden nemlendiğini ve ciğerlerinin havayla dolduğunu hissediyorsun. \n\nŞimdi bir düşün bakalım ne diyor bu adam?',
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
                    audio: hehIsteAudio,
                    background: './images/yonetici-el.png',

                };
            case 'icSesim':


                return {
                    ...prevStory,
                    text: [
                        'Aynen öyle, apartmanda 7 metrelik bir merdiveni bulabilecek tek kişi sen olduğun için de sana geldiler. \n\nİçini bir kahramanlık ateşi sarıyor ve apartman yöneticin sana soru sorar gözler ile bakıyor. \n\n7 metrelik merdivenini almaya gidecek misin? ',

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
                        { text: 'BU İNANDIRICI GELMEDİ, 7 METRELİK MERDİVEN AVINA GİDELİM.', target: 'merdiven' },
                    ],
                    buttonsDisabled: false,
                    audio: catiSuAudio,
                    background: './images/kova3.png',
                };
            case 'merdiven':
                setMerdivenYolu(true)
                return {
                    ...prevStory,



                    text: [
                        'Hazırlanma hızın inanılmaz. \n\nMerdiven yolu onurlu bir yol. Bol şans.',

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

                        '“Usta yarım saate geliyor çatıya bakmaya, sen buradasın değil mi? Adamın başında dur da kaytarmasın.”',


                    ],
                    choices: [
                        { text: '"YOK ABİ BENİM ÇIKMAM LAZIM"', target: 'cikis' },
                    ],
                    buttonsDisabled: false,
                    audio: ustaAudio,
                    background: './images/yonetici-cep.png',
                };
            case 'yalan':


                return {
                    ...prevStory,
                    text: [
                        '“İyi bana hatırlatırsın, IBAN’ı atarım Whatsapp’tan. \nSen buradasın, değil mi? Adamın başında dur da kaytarmasın.”',


                    ],
                    choices: [
                        { text: '"YOK ABİ BENİM ÇIKMAM LAZIM"', target: 'cikis' },
                    ],
                    buttonsDisabled: false,
                    audio: ustaAudio,
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
                        '“Eyvallah Suat abi, sana da.” deyiverdin. \n\nBakışları değişmedi, ama sözünü kestiğin için ilginç bir yinelemenin içine düştü. \n\nDilinle damağının arasındaki sürtünme katsayısı hoşuna gidenden çok daha az. \n\nHidrasyonla ilgili ne düşünürsün?',
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
                    audio: ustaAudio,
                    background: './images/yonetici-el.png',


                };
            case 'onemiVarMi':


                return {
                    ...prevStory,
                    text: [

                        '“Eyvallah abi, sana da. ” deyiverdin. \n\nAdam söylediklerine kaldığı yerden devam ediyor. \n\n“İşte senin aidatı bugün vermen lazım ki, biz de ustaya vereceğiz.”',

                    ],
                    choices: [
                        { text: '“TABİİ ABİ BİR SANİYE.” \n\nPARAYI VER.', target: 'usta' },
                        { text: '"BEN SANA IBANDAN ATAYIM ABİ ONU, NAKTİM KALMADI HİÇ.” \n\nYALAN SÖYLE', target: 'yalan' },
                    ],
                    buttonsDisabled: false,
                    audio: onemiVarMiAudio,
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

                        '"Canın sağ olsun." \n\nÇocuğun varlığından emin olamasan bile bir bebişi doyuramamak vicdanına çöküyor.',

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
                    audio: teyze3Audio,
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
                    audio: politikBilincAudio,
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
                    audio: politikBilincAudio,
                    characterImage: './images/teyze.png',

                };
            case 'korna':



                return {
                    ...prevStory,
                    text: [

                        merdivenYolu
                            ? 'Yol sorabileceğin bir kahvehaneye denk geldin. Oraya girmek için yolun karşısına geçmeye çalıştığın sırada bir korna sesi kulaklarını alıp götürdü. \n\nBu, ters yönden gelen bir motor kurye.'
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
                        '“Çok teşekkürler.” \n\nKurye teşekkür etmek için sana küçük bir tantuni fırlatıp uzaklaşmaya başlıyor. Yola devam?',

                    ],
                    choices: [
                        { text: 'TANTUNİYİ YE', target: 'tantuni' },
                        { text: 'YETER ARTIK, BEN VEGANIM', target: 'vegan' },
                    ],
                    buttonsDisabled: false,
                    audio: cekilAudio,
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
                    audio: gerceklerAudio,
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
                    audio: kosAudio,
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
                    audio: polisAudio,
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
                    audio: polis2Audio,
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
                    audio: polisAudio,
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
                    audio: sigaraAudio,
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
                    audio: sigaraAudio,
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
                        'İnanılmaz bir bilinçli vatandaşlık hissiyle dolup taşıyorsun ama ne yazık ki bu vatandaşlık Kanada vatandaşlığı değil. \n\nCebinde beliren o gizemli beyaz paket de ne öyle?',

                    ],
                    choices: [
                        { text: '“PARDON, BUYRUN”', target: 'buyurun' },
                    ],
                    buttonsDisabled: false,
                    audio: izinBelgesiAudio,
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
                    audio: izinBelgesiAudio,
                    buttonsDisabled: false,
                    background: './images/trafik.png',
                    characterImage: null

                };
            case 'kahvehane':
                return {
                    ...prevStory,
                    text: [
                        'İçeri girer girmez eline bir bardak çay tutuşturuluyor ve herkesin gözü sana dönüyor. \n\nBurada daha önce hiç senin kadar kahramansı biri bulunmamış herhalde. ',

                    ],
                    choices: [
                        { text: '"MERHABA, 7 METRELİK BİR MERDİVEN ARIYORUM"', target: 'merdivenAriyorum' },
                        { text: '"VAR MI RÜZGARA KARŞI İŞEYİP BİR BATAK ATACAK OLAN?"', target: 'batak' },
                    ],
                    buttonsDisabled: false,
                    audio: kahveAudio,
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
                    audio: kahve2Audio,
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
                        { text: '"TAMAM, 7 METRELİK BİR MERDİVEN ARIYORUM"', target: 'tamamMerdiven' },
                    ],
                    buttonsDisabled: false,
                    audio: kahve3Audio,
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
                    audio: kahve2Audio,
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
                    audio: kahve4Audio,
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
                    audio: kahve2Audio,
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
                    audio: deliAudio,
                    background: './images/kahvehane.png',
                    characterImage: null

                };
            case 'charlie':

                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Yoluna devam ederken ukulelesini boynuna dayayarak keman gibi çalan Charlie Chaplin taklitçisi yolunu kesiyor. \n\n“...”',

                        ],
                        choices: [
                            { text: '“...”', target: '1' },
                            { text: '“...”', target: '2' },
                        ],
                        buttonsDisabled: false,
                        audio: charlieAudio,
                        background: './images/charlie.png',
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
                        audio: charlieAudio,
                        background: './images/charlie.png',
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
                            { text: '“...”', target: '2' },
                            { text: '“...”', target: '4' },
                        ],
                        buttonsDisabled: false,

                        background: './images/charlie1.png',
                        audio: charlieAudio,
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
                            { text: '“...”', target: '2' },
                            { text: '“...”', target: '4' },
                        ],
                        buttonsDisabled: false,
                        background: './images/charlie1.png',
                        audio: charlieAudio,
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
                        background: './images/charlie1.png',
                        audio: charlieAudio,
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
                        background: './images/charlie1.png',
                        audio: charlieAudio,
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
                        background: './images/charlie1.png',
                        audio: charlieAudio,
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
                        background: './images/charlie1.png',
                        audio: charlieAudio,
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
                        background: './images/charlie1.png',
                        audio: charlieAudio,
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
                        background: './images/charlie1.png',
                        audio: charlieAudio,
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
                        audio: charlieAudio,
                        background: './images/charlie2.png',
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
                        audio: charlieAudio,
                        background: './images/charlie2.png',
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
                        audio: charlieAudio,
                        background: './images/charlie2.png',
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
                        audio: charlieAudio,
                        background: './images/charlie2.png',
                        characterImage: null
                    };
                };
            case 'charlieSonuc':

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
                        audio: charlie2Audio,
                        background: './images/charlie.png',
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
                        audio: charlie2Audio,
                        background: './images/charlie.png',
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
                        audio: charlie2Audio,
                        background: './images/charlie2.png',
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
                        audio: charlie2Audio,
                        background: './images/charlie2.png',
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
                        audio: scooterAudio,
                        background: './images/scooter.png',
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
                        audio: scooterAudio,
                        background: './images/scooter.png',
                        characterImage: null
                    };
                };
            case 'ustlerindenAtla':

                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Bugün oldukça sportifsin.\nBu formu neye borçluyuz?',

                        ],
                        choices: [
                            { text: 'ACELEM OLMASINA', target: 'acelem' },
                            { text: 'ÜSTÜN IRK OLMAMA', target: 'ustunIrk' },
                        ],
                        buttonsDisabled: false,
                        audio: scooter2Audio,
                        background: './images/scooter.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            'Bugün oldukça sportifsin.\nBu formu neye borçluyuz?',

                        ],
                        choices: [
                            { text: 'ACELEM OLMASINA', target: 'acelem' },
                            { text: 'ÜSTÜN IRK OLMAMA', target: 'ustunIrk' },
                        ],
                        buttonsDisabled: false,
                        audio: scooter2Audio,
                        background: './images/scooter.png',
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
                        audio: scooterAudio,
                        background: './images/scooter.png',
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
                        audio: scooterAudio,
                        background: './images/scooter.png',
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
                        audio: scooterAudio,
                        background: './images/scooter.png',
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
                        audio: scooterAudio,
                        background: './images/scooter.png',
                        characterImage: null
                    };
                };
            case 'yolunuDegistir':
                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            'Kendini çok zorlamadan bu kargaşadan çıkabileceğin en kolay yolu buldun. Bu seni hedefine yaklaştıracaktır. \n\nBu manevranın arkasındaki motivasyon neydi?',

                        ],
                        choices: [
                            { text: 'ACELEM OLMASI', target: 'acelem' },
                            { text: 'ÜSTÜN IRK OLMAM', target: 'ustunIrk' },

                        ],
                        buttonsDisabled: false,
                        audio: scooterAudio,
                        background: './images/scooter.png',
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
                        audio: scooterAudio,
                        background: './images/scooter.png',
                        characterImage: null
                    };
                };
            case 'hayvanlar':
                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            '"Hayvanları seviyor musunuz?"',

                        ],
                        choices: [
                            { text: 'EVET', target: 'evet' },
                            { text: 'HAYIR', target: 'hayir' },
                        ],
                        audio: notAudio,
                        buttonsDisabled: false,
                        background: './images/anket.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            '"Hayvanları seviyor musunuz?"',

                        ],
                        choices: [
                            { text: 'EVET', target: 'evet' },
                            { text: 'HAYIR', target: 'hayir' },
                        ],
                        buttonsDisabled: false,
                        audio: notAudio,
                        background: './images/anket.png',
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
                        audio: hayvanlarAudio,
                        buttonsDisabled: false,
                        background: './images/anket.png',
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
                        audio: hayvanlarAudio,
                        background: './images/anket.png',
                        characterImage: null
                    };
                };
            case 'hayir':

                if (merdivenYolu) {
                    // If merdivenYolu is true, lead to the appropriate scenario
                    return {
                        ...prevStory,
                        text: [
                            '"Nasıl yani?"',

                        ],
                        choices: [
                            { text: 'EVET DEMEK İSTEMİŞTİM, PARDON', target: 'evet' },
                            { text: 'SEVMİYORUM HAYVANLARI', target: 'sevmiyorum' },
                        ],
                        buttonsDisabled: false,
                        audio: hayvanlar2Audio,
                        background: './images/anket.png',
                        characterImage: null
                    };
                } else {
                    // If merdivenYolu is false, lead to the other scenario
                    return {
                        ...prevStory,
                        text: [
                            '"Nasıl yani?"',

                        ],
                        choices: [
                            { text: 'EVET DEMEK İSTEMİŞTİM, PARDON', target: 'evet' },
                            { text: 'SEVMİYORUM HAYVANLARI', target: 'sevmiyorum' },
                        ],
                        buttonsDisabled: false,
                        audio: hayvanlar2Audio,
                        background: './images/anket.png',
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
                        audio: florasanAudio,
                        background: './images/anket.png',
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
                        audio: florasanAudio,
                        background: './images/anket.png',
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
                        text: ['"Çok teşekkür ederiz..."'],

                        choices: [
                            { text: '>', target: 'fb' },
                        ],
                        buttonsDisabled: false,
                        audio: hayvanlarAudio,
                        background: './images/anket.png',
                        characterImage: null
                    };
                } else {

                    return {
                        ...prevStory,
                        text: ['"Çok teşekkür ederiz..."'],

                        choices: [
                            { text: '>', target: 'biraParasi' },
                        ],
                        buttonsDisabled: false,
                        audio: hayvanlarAudio,
                        background: './images/anket.png',
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
                        audio: florasanAudio,
                        background: './images/anket.png',
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
                        audio: florasanAudio,
                        background: './images/anket.png',
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
                        audio: florasanAudio,
                        background: './images/anket.png',
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
                        audio: florasanAudio,
                        background: './images/anket.png',
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
                    audio: fbAudio,
                    background: './images/fb.png',
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
                        { text: 'Bİ GÜNDE ÜÇ KERE DAYAK YİYEMEM, İNCEDEN YOL ALAYIM', target: 'nodayak' },

                    ],
                    buttonsDisabled: false,
                    audio: fb2Audio,
                    background: './images/fb2.png',
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
                        ':( \nBugün üç kere dayak yedin...',

                    ],
                    choices: [
                        { text: '>', target: 'realInsaat' },

                    ],
                    buttonsDisabled: false,
                    audio: fbAudio,
                    background: './images/fb.png',
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
                    audio: fbAudio,
                    background: './images/fb.png',
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
                    audio: fb3Audio,
                    background: './images/fb3.png',
                    characterImage: null

                };
            case 'realInsaat':

                return {
                    ...prevStory,
                    text: [
                        'İnşaata vardın. Kadıköy Anadolu Lisesinin yeniden yapılıyor olması seni bu merdivene ulaştıracak gibi. Gözüne bir ustayı kestirdin bile.',

                    ],
                    choices: [
                        { text: 'PARDON, 7 METRELİK MERDİVENİNİZ VAR MI?', target: 'yediMetre' },
                        { text: 'KOLAY GELSİN USTAM, NASILSIN?', target: 'kolayGelsin' },

                    ],
                    buttonsDisabled: false,
                    audio: insaatAudio,
                    background: './images/insaat.png',
                    characterImage: './images/isci.png',

                };
            case 'kolayGelsin':
                return {
                    ...prevStory,
                    text: [
                        '"İyilik yav ne olsun, çalışıyoruz işte. Hayırdır birine mi baktın sen?"',

                    ],
                    choices: [
                        { text: 'ABİ BEN 7 METRELİK MERDİVEN ARIYORUM', target: 'yediMetre' },
                        { text: 'OLABİLİR, BANA KENDİNDEN BAHSET USTAM', target: 'kendindenBahset' },

                    ],
                    buttonsDisabled: false,
                    audio: insaat2Audio,
                    background: './images/insaat.png',
                    characterImage: './images/isci.png',

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
                    audio: insaat3Audio,
                    background: './images/insaat.png',
                    characterImage: './images/confusedIsci.png',

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
                    background: './images/insaat.png',
                    audio: insaat4Audio,
                    characterImage: './images/angryIsci.png',

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
                    audio: insaat5Audio,
                    background: './images/insaat.png',
                    characterImage: './images/angryIsci.png',

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
                    audio: insaat6Audio,
                    background: './images/insaat.png',
                    characterImage: './images/superAngryIsci.png',

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
                        'Wow, enteresan. \nZaman durdu. Usta ve sen.. Artık sadece siz varsınız. \n\nİstersen biz çıkalım?',

                    ],
                    choices: [
                        { text: 'BİR DE ÖYLE DENEYEBİLİRİZ ASLINDA', target: 'askiBuldum' },
                        { text: 'TAMAM, YOĞURTÇUYA GİDELİM ARTIK', target: 'yogurtcuParki' },

                    ],
                    buttonsDisabled: false,
                    audio: ruyaAudio,
                    background: './images/ruya.png',
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
                    audio: ruya2Audio,
                    background: './images/superRuya.png',
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
                    audio: politikBilincAudio,
                    background: './images/ayvalitas.png',
                    characterImage: './images/bira.png',

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
                    audio: biraAudio,
                    background: './images/ayvalitas.png',
                    characterImage: './images/bira.png',

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
                        'Bir keyiflendin mi öyle? Ne kadar da yardımseversin. \n\nÜstelik Karma Polisi seni ödüllendirdi ve yerde 100 lira buldun!',

                    ],
                    choices: [
                        { text: '>', target: 'lokma' },


                    ],
                    buttonsDisabled: false,
                    audio: bira2Audio,
                    background: './images/ayvalitas.png',
                    characterImage: './images/bira.png',

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
                        'Yardımseverlik IN, rastgele hastalıklar OUT! \n\nKarma polisi seni ödüllendirdi ve yerde 20 lira buldun!',

                    ],
                    choices: [
                        { text: '>', target: 'lokma' },


                    ],
                    buttonsDisabled: false,
                    audio: bira2Audio,
                    background: './images/ayvalitas.png',
                    characterImage: './images/bira.png',

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
                    audio: bira3Audio,
                    background: './images/ayvalitas.png',
                    characterImage: './images/bira.png',

                };
            case 'lokma':

                return {
                    ...prevStory,
                    text: [
                        'Kenara bir lokma kamyonu çekmişler. Merhum Yiğit hayrına lokma dökülüyor. \n\nBilmeyenler için lokma, küresel şerbet toplarıdır.',

                    ],
                    choices: [
                        { text: 'SIRAYA GİRMEYELİM Mİ?', target: 'sira' },
                        { text: 'KULAĞA UN YAĞ ŞEKER GİBİ GELİYOR', target: 'unyagseker' },

                    ],
                    buttonsDisabled: false,
                    audio: politikBilincAudio,
                    background: './images/lokma.png',
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
                    audio: politikBilincAudio,
                    background: './images/lokma.png',
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
                    audio: politikBilincAudio,
                    background: './images/lokma.png',
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
                        'Kaynakçının gözü senden korkmuşa benziyor, ancak kaçmadan önce dizine bir tekme atmayı ihmal etmedi. /n/nSen ise lokmanı yedin ve mutlusun. Tatlılar da yendiğine göre hüzünlü sonumuza gidelim mi?',

                    ],
                    choices: [
                        { text: 'OLUR', target: 'son' },
                        { text: 'TAMAM', target: 'son' },

                    ],
                    buttonsDisabled: false,
                    audio: lokmaAudio,
                    background: './images/lokma.png',
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
                    audio: politikBilincAudio,
                    background: './images/lokma.png',
                    characterImage: null

                };
            case 'son':


                return {
                    ...prevStory,
                    text: [
                        'Moda İlkokulunun çıkış saati. Üstüne doğru gelen onlu yaşlardaki çocuk sürüsüne bakıyorsun. \n\nHepsinin yüzünde Kadıköyde yürüyecek olmanın getirdiği kaygı belirgin.',

                    ],
                    choices: [
                        { text: 'BEN ONLARA GÜVENİYORUM', target: 'guveniyorum' },
                        { text: 'EVET, NE BİÇİM ZORLANACAKLAR', target: 'nebicim' },

                    ],
                    buttonsDisabled: false,
                    audio: okulAudio,
                    background: './images/moda.png',
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
                    audio: okul2Audio,
                    background: './images/moda.png',
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
                    audio: charlie2Audio,
                    background: './images/moda.png',
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
                    audio: politikBilincAudio,
                    background: './images/yogurtcu.png',
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
                    audio: politikBilincAudio,
                    background: './images/yogurtcu2.png',
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
                    audio: politikBilincAudio,
                    background: './images/yogurtcu2.png',
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
                    audio: yogurtcuAudio,
                    background: './images/cuce.png',
                    characterImage: null

                };
            case 'yer':

                return {
                    ...prevStory,
                    text: [
                        'Yedi metrelik bir merdiveni! Evet dostum. \nSen bugün... \nKadıköyde yürüdün, ve tüm delüzyonlarını besleyerek yedi metrelik merdivenini buldun.',

                    ],
                    choices: [
                        { text: '>', target: 'input' },

                    ],
                    buttonsDisabled: false,
                    audio: charlie2Audio,
                    background: './images/merdiven.png',
                    characterImage: null

                };
            case 'input':


                return {
                    ...prevStory,

                    inputForm: <UserInputForm onInputSubmit={handleInputSubmit} merdivenYolu={merdivenYolu} />,

                    choices: [], // Remove choices temporarily during the input phase
                    buttonsDisabled: false,
                    background: './images/anket.png', // Use an appropriate background for the certificate
                    characterImage: null,
                };
            case 'certificate':
                return {
                    ...prevStory,

                    component: <Certificate userName={userName} merdivenYolu={merdivenYolu} />,
                    choices: [], // Remove choices temporarily during the certificate phase
                    buttonsDisabled: false,
                    background: null,// Use an appropriate background for the certificate
                    characterImage: null,
                };


            default:
                console.warn('Unhandled target:', path);
                return prevStory;


        }

    };

    const handleChoice = (path, characterStats) => {
        const newStory = handleStory(path, merdivenYolu);

        setCharacterStats((prevStats) => {
            // Update stats based on new story if needed
            return { ...prevStats };
        });
        return { ...newStory, characterStats: { ...characterStats }, merdivenYolu: merdivenYolu };
    };
    return { handleChoice, merdivenYolu };



};

export default StoryComponent;
