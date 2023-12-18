import React from 'react';
import utils from './src/components/utils';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';




const StoryComponent = ({ prevStory, setCharacterStats, setShowHealthAnimation, setShowIntelligenceCheckAnimation, setShowMoneyAnimation, setShowMoodAnimation, setShowIntelligenceAnimation, newMoodIncrease, newHealthIncrease, newHealthDecrease, newIntelligenceDecrease, newMoneyDecrease, newMoodDecrease, newIntelligenceIncrease, newMoneyIncrease, statHealthChangeRef, statIntelligenceChangeRef, statMoneyChangeRef, statMoodChangeRef, }) => {



    const dispatch = useDispatch();
    const [userChoseSuIc, setUserChoseSuIc] = useState(false);
    const [merdivenYolu, setMerdivenYolu] = useState(false);


    const { handleMoodAnimation, handleIntelligenceCheckAnimation, handleMoneyAnimation, handleHealthAnimation, handleIntelligenceAnimation } = utils;






    const handleStory = (path) => {


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
                        ,
                        'Adamı kesinlikle tanıyorsun. Burada yaşadığın süre boyunca en az bir defa gördün. \n\n Bu adam senin apartman yöneticin, adı neydi?',
                    ],
                    choices: [
                        { text: 'SUAT', target: 'suat' },
                        { text: 'ÖNEMİ VAR MI?', target: 'onemiVarMi' },
                    ],
                    buttonsDisabled: false,

                    background: './images/yonetici1.png',
                };
            case 'yagmurYagdi':
                return {
                    ...prevStory,

                    text: [
                        {
                            text: '“Ya biliyorsun geçen çok fena yağmur yağdı, borular morular sorular aklımda binbir tane, boyalar falan sökülmüş akmış hep duvarlar üstüme üstüme geliyor…”',
                            style: {

                                fontWeight: 'bold',
                                color: 'white',
                                fontStyle: 'italic',
                            },
                        }


                    ],
                    choices: [
                        { text: '"NASIL YANİ ABİ?"', target: 'neDiyor' },
                        { text: 'BEN BİR SU İÇEYİM', target: 'su' },
                    ],
                    buttonsDisabled: false,
                    background: './images/yari-siluet.png',
                };
            case 'neDiyor':
                return {
                    ...prevStory,
                    text: [
                        {
                            text: '“Yav işte yağmur büyümüş dolu olmuş, dolu büyümüş çatıya konmuş. Kedi içti ağaca çıktı balta kesti suya düştü inek içti dağa kaçtı yandı bitti kül oldu.” ',
                            style: {

                                fontWeight: 'bold',
                                color: 'white',
                                fontStyle: 'italic',
                            },
                        },


                        '\n\n Ne diyor bu adam? ',
                    ],

                    choices: [
                        { text: 'ÇATI AKITMIŞ ONU YAPTIRACAĞIZ.', target: 'cati' },
                        { text: 'YÖNETİCİNİN DEDESİ ÇATIYA ÇIKMIŞ, ONU İNDİRECEĞİZ.', target: 'icSesim' },
                    ],
                    buttonsDisabled: false,
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
                    background: './images/su.png',

                };
            case 'cati':
                return {
                    ...prevStory,
                    text: [
                        {
                            text: '“Heh işte onun için para vermen lazım ki biz de adama verelim.”',

                            style: {
                                fontWeight: 'bold',
                                color: 'white',
                                fontStyle: 'italic',
                            },
                        },
                    ],
                    choices: [
                        { text: '“TABİİ ABİ BİR SANİYE.” \n\nPARAYI VER.', target: 'usta' },
                        { text: '"BEN SANA IBANDAN ATAYIM ABİ ONU, NAKTİM KALMADI HİÇ.” \n\nYALAN SÖYLE', target: 'yalan' },

                    ],
                    buttonsDisabled: false,
                    background: './images/yonetici-el.png',

                };
            case 'icSesim':


                return {
                    ...prevStory,
                    text: [
                        {
                            text: 'Aynen öyle, apartmanda 7 metrelik bir merdiveni bulabilecek tek kişi sen olduğun için de sana geldiler. \n\n İçini bir kahramanlık ateşi sarıyor ve apartman yöneticin sana soru sorar gözler ile bakıyor. ',
                            style: {
                                fontWeight: 'bold',

                                fontStyle: 'italic',

                            },
                        },
                        {
                            text: '\n\n 7 metrelik merdivenini almaya gidecek misin?',

                        }



                    ],
                    choices: [
                        {
                            text: 'BU KADAR SAÇMA OLAMAZ. \nKESIN BAŞKA BIR ŞEY SÖYLÜYORDUR.',

                            target: 'catiSesim',
                        },
                        { text: '“TABİ Kİ… APARTMANIMIN BANA İHTIYACI VAR.” \nEVDEN ÇIK.', target: 'merdiven' },
                    ],
                    buttonsDisabled: false,
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
                    background: './images/kova.png',
                };

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
                    background: './images/not.png',
                    characterImage: null

                };
            case 'merdiven':
                setMerdivenYolu(true)
                return {
                    ...prevStory,



                    text: [
                        {
                            text: 'Hazırlanma hızın inanılmaz.',
                            style: {
                                fontWeight: 'bold',

                                fontStyle: 'italic',

                            },
                        },

                        '\n\nMerdiven yolu onurlu bir yol. Bol şans.',

                    ],
                    choices: [
                        { text: 'EVDEN ÇIK', target: 'merdivenDilenci' },

                    ],
                    buttonsDisabled: false,
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
                        {
                            text: '“Usta yarım saate geliyor çatıya bakmaya, sen buradasın değil mi?. Adamın başında dur da kaytarmasın.” ',
                            style: {
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',
                            },
                        },
                    ],
                    choices: [
                        { text: '"YOK ABİ BENİM ÇIKMAM LAZIM"', target: 'cikis' },
                    ],
                    buttonsDisabled: false,
                    background: './images/yonetici-cep.png',
                };




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
            case 'yalan':


                return {
                    ...prevStory,
                    text: [
                        {
                            text: '“İyi bana hatırlatırsın, IBAN’ı atarım Whatsapp’tan. \n Sen buradasın, değil mi? Adamın başında dur da kaytarmasın.”',
                            style: {
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',
                            },
                        },
                    ],
                    choices: [
                        { text: '"YOK ABİ BENİM ÇIKMAM LAZIM"', target: 'cikis' },
                    ],
                    buttonsDisabled: false,
                    background: './images/yonetici-cep.png',
                };
            case 'cikis':

                return {
                    ...prevStory,
                    text: [
                        {
                            text: 'Hazırlanma hızın inanılmaz. Abiyi başından saldığına göre dışarı çıkmaya hazırsın.',

                        },
                    ],
                    choices: [
                        { text: 'EVDEN ÇIK', target: 'dilenci' },
                    ],
                    buttonsDisabled: false,
                    background: './images/cikis.png',
                };
            case 'suat':

                return {
                    ...prevStory,
                    text: [
                        {
                            text: '“Eyvallah Suat abi, sana da. ”',
                            style: {
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',
                            },
                        },
                        ' deyiverdin. \n\n Bakışları değişmedi, ama sözünü kestiğin için ilginç bir yinelemenin içine düştü. \n\nDilinle damağının arasındaki sürtünme katsayısı hoşuna gidenden çok daha az. \n\nHidrasyonla igili ne düşünürsün?'
                    ],
                    choices: [
                        { text: 'SU İÇ', target: 'suIc' },
                        { text: 'NİYE GELMİŞ BU ADAM?', target: 'aidat' },
                    ],
                    buttonsDisabled: false,
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
                        {
                            text: 'Su çok güzel, ciğerlerine doğru gelen canlanma hissi sana çok müthiş hissettiriyor ve her şey daha net.',

                        },
                    ],
                    choices: [
                        { text: 'OH BE. ŞİMDİ Bİ BAKALIM NE DİYOR SUAT ABİ.', target: 'aidat' },

                    ],
                    buttonsDisabled: false,
                    background: './images/su.png',

                };
            case 'aidat':


                return {
                    ...prevStory,
                    text: [

                        'Adam söylediklerine kaldığı yerden devam ediyor. ',
                        {
                            text: '\n\n“İşte senin aidatı bugün vermen lazım ki, biz de ustaya vereceğiz.”',
                            style: {
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',
                            },
                        },

                    ],
                    choices: [
                        { text: '“TABİİ ABİ BİR SANİYE.” \n\nPARAYI VER.', target: 'usta' },
                        { text: '"BEN SANA IBANDAN ATAYIM ABİ ONU, NAKTİM KALMADI HİÇ.” \n\nYALAN SÖYLE', target: 'yalan' },
                    ],
                    buttonsDisabled: false,
                    background: './images/yonetici-el.png',


                };
            case 'onemiVarMi':


                return {
                    ...prevStory,
                    text: [
                        {
                            text: '“Eyvallah abi, sana da. ”',
                            style: {
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',
                            },
                        },
                        ' deyiverdin. \n\n Adam söylediklerine kaldığı yerden devam ediyor. \n\n',
                        {
                            text: '“İşte senin aidatı bugün vermen lazım ki, biz de ustaya vereceğiz.”',
                            style: {
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',
                            },
                        },

                    ],
                    choices: [
                        { text: '“TABİİ ABİ BİR SANİYE.” \n\nPARAYI VER.', target: 'usta' },
                        { text: '"BEN SANA IBANDAN ATAYIM ABİ ONU, NAKTİM KALMADI HİÇ.” \n\nYALAN SÖYLE', target: 'yalan' },
                    ],
                    buttonsDisabled: false,
                    background: './images/yonetici-el.png',


                };
            case 'merdivenDilenci':

                return {
                    ...prevStory,
                    text: [
                        'Sokağa çıktın ve vazgeçmek için çok geç olduğunun farkındasın. \n\nNalbur sormak için gördüğün ilk tekele girmek üzereyken bir dilenci yanında bitti.',
                        {
                            text: ' \n\n“Çocuğuma şuradan bir tavuk alabilir misin?”',
                            style: {

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',


                            },
                        },
                    ],

                    choices: [
                        { text: 'BEN DE AY BAŞINI BEKLİYORUM VALLA', target: 'aybasi' },
                        { text: 'TABİ Kİ... BİR ÖZEL ANTAKYA SOSLU ZURNA?', target: 'dilenciParasiz' },
                    ],
                    buttonsDisabled: false,
                    background: './images/second.png',
                    characterImage: './images/teyze.png', // Add the path to your teyze.png

                };
            case 'dilenci':

                return {
                    ...prevStory,
                    text: [
                        'Sokağa çıktın ve ilk köşeyi döner dönmez bir dilenci yanında bitti.',
                        {
                            text: ' \n\n“Çocuğuma şuradan bir tavuk alabilir misin?”',
                            style: {

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',


                            },
                        },
                    ],

                    choices: [
                        { text: 'BEN DE AY BAŞINI BEKLİYORUM VALLA', target: 'aybasi' },
                        { text: 'TABİ Kİ... BİR XXL ÖZEL ANTAKYA SOSLU ZURNA TAVUK DÜRÜM GELİYOR!', target: 'dilenciParasiz' },
                    ],
                    buttonsDisabled: false,
                    background: './images/second.png',
                    characterImage: './images/teyze.png', // Add the path to your teyze.png

                };
            case 'aybasi':

                return {
                    ...prevStory,
                    text: [

                        {
                            text: '"Canın sağ olsun."',
                            style: {

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',


                            },
                        },
                        '\n\n Çocuğun varlığından emin olamasan bile bir bebişi doyuramamak vicdanına çöküyor.',

                    ],

                    choices: [
                        { text: 'HEPSİNİ BEN Mİ DOYURAYIM KARDEŞİM, DEVLET YOK MU?', target: 'politikBilinc' },
                        { text: 'EVET YA... KEŞKE TÜM AÇLARI DOYURABİLSEYDİM.', target: 'adakHayat' },
                    ],
                    buttonsDisabled: false,
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
                        {
                            text: '“Allah senden razı olsun.”',
                            style: {
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',
                            },
                        },
                        {
                            text: '\n\nAz önce bir dilenciye yardım ettin. Dünyadaki tüm insanlara karşı ahlaki üstünlüğünü parmak uçlarında hissediyorsun.',
                        },
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
                        {
                            text: 'Haklısın. Bu politik bilinç içini rahatlatmak için yeter de artar bile.',

                        },
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
                        {
                            text: 'Keşke... Neden tüm bu sorumluluğu kabul edip hayatının geri kalanını buna adamıyorsun?',

                        },
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
                    characterImage: './images/teyze.png',

                };
            case 'korna':



                return {
                    ...prevStory,
                    text: [
                        {
                            text: merdivenYolu
                                ? 'Yol sorabileceğin bir kahvehaneye denk geldin. Oraya girmek için yolun karşısına geçmeye çalıştığın sırada bir korna sesi sağ kulağını aldı götürdü. \n\n Bu, ters yönden gelen bir motor kurye.'
                                : 'Ne kadar mükemmel biri olduğunu düşünürken yoğun bir korna sesiyle gerçekliğe çekildin. \n\nTers yönden gelen bir motor kurye kaldırıma çıkmış ve yolundan çıkman için sana korna çalıyor.'
                        }],
                    choices: [
                        { text: 'KUSURA BAKMAYIN, HEMEN ÇEKİLİYORUM', target: 'cekil' },
                        { text: 'KALDIRIM ULAN BURASI DAVAR HERİF!', target: 'davar' },
                    ],
                    buttonsDisabled: false,
                    background: './images/trafik.png',
                    characterImage: './images/kurye.png',
                };
            case 'cekil':

                return {
                    ...prevStory,
                    text: [
                        {
                            text: '“Çok teşekkürler.”',
                            style: {

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',


                            },
                        },

                        '\n\n Kurye teşekkür etmek için sana küçük bir tantuni fırlatıp uzaklaşmaya başlıyor. Yola devam?'
                    ],
                    choices: [
                        { text: 'TANTUNİYİ YE', target: 'tantuni' },
                        { text: 'YETER ARTIK, BEN VEGANIM', target: 'vegan' },
                    ],
                    buttonsDisabled: false,
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
                    text: merdivenYolu
                        ?
                        'Afiyet olsun. Şimdi şu merdiveni çabucak bulsan iyi edersin...'
                        :
                        'Afiyet olsun. Artık geç kalmamak için hızlansan iyi edersin...',
                    choices: merdivenYolu ? [
                        { text: '>', target: 'kahvehane' },
                    ] : [
                        { text: '>', target: 'polis' },
                    ],
                    buttonsDisabled: false,
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
                        {
                            text: 'Nunçakulu bir kuryeyi alt edebileceğine inanman güzel fakat gerçeklerle tanışma zamanı. Artık yoluna devam etmelisin.',

                        },
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
                        {
                            text: 'Bugünlük kardiyonu halletmiş oldun. Yola devam..',

                        },
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
                        {
                            text: 'Hayır.',
                            style: {
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',
                            },
                        },
                        '\n\nGözlerinle etrafı tarayarak yürümeye devam ediyorsun.',
                    ],
                    choices: [
                        { text: '>', target: 'korna' },
                    ],
                    buttonsDisabled: false,
                    background: './images/second.png',
                    characterImage: null,

                };
            case 'polis':

                return {
                    ...prevStory,
                    text: [
                        'Bir polisin zevkine göre fazla farklı giyiniyorsun. Bir tanesi seni durduruyor. ',

                        {
                            text: '\n\n“Kimliğine bir bakabilir miyiz?”',
                            style: {

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',


                            },
                        },

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


                        {
                            text: 'Teşekkürler. Sigara kullanıyor musun?',
                            style: {

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',


                            },
                        },

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


                        {
                            text: '“Paketini görebilir miyim?”',
                            style: {

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',


                            },
                        },

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


                        {
                            text: '"Tamam, devam edebilirsin."',
                            style: {

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',


                            },
                        },

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


                        {
                            text: '"Tamam, devam edebilirsin."',
                            style: {

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'white',


                            },
                        },

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
                        { text: '"MERHABA, 7 METRELİK BİR MERDİVEN ARIYORUM"', target: 'merdivenAriyorum' },
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
                        { text: '"TAMAM, 7 METRELİK BİR MERDİVEN ARIYORUM"', target: 'tamamMerdiven' },
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




            default:
                console.warn('Unhandled target:', path);
                return prevStory;


        }

    };

    const handleChoice = (path, characterStats) => {
        const newStory = handleStory(path);
        setCharacterStats((prevStats) => {
            // Update stats based on new story if needed
            return { ...prevStats };
        });
        return { ...newStory, characterStats: { ...characterStats } };
    };

    return { handleChoice };



};

export default StoryComponent;
