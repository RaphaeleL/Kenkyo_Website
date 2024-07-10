// @ts-nocheck
import React, {useState} from 'react';
import './App.scss';
import {Modal, Affix, Button, MantineProvider, Transition, Space} from "@mantine/core";
import Home from "./components/Pages/Home/Home";
import UeberUns from "./components/Pages/UeberUns/UeberUns";
import News from "./components/Pages/News/News";
import Termine from "./components/Pages/Termine/Termine";
import {useWindowScroll} from "@mantine/hooks";
import {AiOutlineArrowUp} from "@react-icons/all-files/ai/AiOutlineArrowUp";
import {home} from "./components/Content/HomeContent";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import {/*Helmet, */HelmetProvider} from "react-helmet-async";
import {/*closeSpotlight, */SpotlightAction, SpotlightProvider} from "@mantine/spotlight";
import {items} from "./components/Content/MenuContent";
import {dojo, offers, times} from "./components/Content/TrainerContent";
import {termineTypes} from "./components/Content/TermineContent";
import {news1, news2, news3} from "./components/Content/NewsContent";
import Times from "./components/Pages/Training/Times";
import Offers from "./components/Pages/Training/Offers";
import NoPage from "./components/Pages/NoPage/NoPage";
import Location from "./components/Pages/Training/Location";
import {personsContent} from "./components/Content/PersonsContent";
import {faq, footer} from "./components/Content/FooterContent";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Imprint from './components/Footer/SubPages/Imprint';
import Privacy from "./components/Footer/SubPages/Privacy";
import History from "./components/Footer/SubPages/History/History";
import FAQ from "./components/Footer/SubPages/FAQ";
import Begrifflichkeiten from "./components/Footer/SubPages/Begrifflichkeiten";

function Body(props: any) {
    return (
        <>
            <Header {...props} />
            <LandingPage {...props} />
            <Router>
                <Routes>
                    <Route path="/">
                        <Route index path="/" element={<Navigate to="/de/" replace={true} />} />
                        <Route index path="/de/" element={<Home {...props}/>} />
                        <Route path="/de/zeiten" element={<Times {...props}/>} />
                        <Route path="/de/angebote" element={<Offers {...props}/>} />
                        <Route path="/de/ort" element={<Location {...props}/>} />
                        <Route path="/de/wir" element={<UeberUns {...props}/>} />
                        <Route path="/de/termine" element={<Termine {...props}/>} />
                        <Route path="/de/news" element={<News {...props}/>} />
                        <Route path="/de/impressum" element={<Imprint {...props}/>} />
                        <Route path="/de/datenschutz" element={<Privacy {...props}/>} />
                        <Route path="/de/wissenswertes/geschichte" element={<History {...props}/>} />
                        <Route path="/de/wissenswertes/faq" element={<FAQ {...props}/>} />
                        <Route path="/de/wissenswertes/begrifflichkeiten" element={<Begrifflichkeiten {...props}/>} />

                        <Route index path="/en/" element={<Home {...props}/>} />
                        <Route path="/en/zeiten" element={<Times {...props}/>} />
                        <Route path="/en/angebote" element={<Offers {...props}/>} />
                        <Route path="/en/ort" element={<Location {...props}/>} />
                        <Route path="/en/wir" element={<UeberUns {...props}/>} />
                        <Route path="/en/termine" element={<Termine {...props}/>} />
                        <Route path="/en/news" element={<News {...props}/>} />
                        <Route path="/en/impressum" element={<Imprint {...props}/>} />
                        <Route path="/en/datenschutz" element={<Privacy {...props}/>} />
                        <Route path="/en/wissenswertes/geschichte" element={<History {...props}/>} />
                        <Route path="/en/wissenswertes/faq" element={<FAQ {...props}/>} />
                        <Route path="/en/wissenswertes/begrifflichkeiten" element={<Begrifflichkeiten {...props}/>} />

                        <Route index path="/ja/" element={<Home {...props}/>} />
                        <Route path="/ja/zeiten" element={<Times {...props}/>} />
                        <Route path="/ja/angebote" element={<Offers {...props}/>} />
                        <Route path="/ja/ort" element={<Location {...props}/>} />
                        <Route path="/ja/wir" element={<UeberUns {...props}/>} />
                        <Route path="/ja/termine" element={<Termine {...props}/>} />
                        <Route path="/ja/news" element={<News {...props}/>} />
                        <Route path="/ja/impressum" element={<Imprint {...props}/>} />
                        <Route path="/ja/datenschutz" element={<Privacy {...props}/>} />
                        <Route path="/ja/wissenswertes/geschichte" element={<History {...props}/>} />
                        <Route path="/ja/wissenswertes/faq" element={<FAQ {...props}/>} />
                        <Route path="/ja/wissenswertes/begrifflichkeiten" element={<Begrifflichkeiten {...props}/>} />

                        <Route index path="/uk/" element={<Home {...props}/>} />
                        <Route path="/uk/zeiten" element={<Times {...props}/>} />
                        <Route path="/uk/angebote" element={<Offers {...props}/>} />
                        <Route path="/uk/ort" element={<Location {...props}/>} />
                        <Route path="/uk/wir" element={<UeberUns {...props}/>} />
                        <Route path="/uk/termine" element={<Termine {...props}/>} />
                        <Route path="/uk/news" element={<News {...props}/>} />
                        <Route path="/uk/impressum" element={<Imprint {...props}/>} />
                        <Route path="/uk/datenschutz" element={<Privacy {...props}/>} />
                        <Route path="/uk/wissenswertes/geschichte" element={<History {...props}/>} />
                        <Route path="/uk/wissenswertes/faq" element={<FAQ {...props}/>} />
                        <Route path="/uk/wissenswertes/begrifflichkeiten" element={<Begrifflichkeiten {...props}/>} />

                        <Route index path="/un/" element={<Home {...props}/>} />
                        <Route path="/un/zeiten" element={<Times {...props}/>} />
                        <Route path="/un/angebote" element={<Offers {...props}/>} />
                        <Route path="/un/ort" element={<Location {...props}/>} />
                        <Route path="/un/wir" element={<UeberUns {...props}/>} />
                        <Route path="/un/termine" element={<Termine {...props}/>} />
                        <Route path="/un/news" element={<News {...props}/>} />
                        <Route path="/un/impressum" element={<Imprint {...props}/>} />
                        <Route path="/un/datenschutz" element={<Privacy {...props}/>} />
                        <Route path="/un/wissenswertes/geschichte" element={<History {...props}/>} />
                        <Route path="/un/wissenswertes/faq" element={<FAQ {...props}/>} />
                        <Route path="/un/wissenswertes/begrifflichkeiten" element={<Begrifflichkeiten {...props}/>} />

                        <Route path="*" element={<NoPage {...props}/>} />

                    </Route>
                </Routes>
            </Router>
        </>
       
    );
}

export default function App() {
    const [scroll, scrollTo] = useWindowScroll();
    const [current_lang, setCurrentLang] = useState("de");
    const [opened, setOpened] = useState(false);
    const [demo, ] = useState(true);

    const actions: SpotlightAction[] = [
        {
            title: items[current_lang][0],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/"
        },
        {
            title: times[current_lang][0],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/zeiten"
        },
        {
            title: offers[current_lang][0],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/angebote"
        },
        {
            title: dojo[current_lang][0],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/ort"
        },
        {
            title: items[current_lang][2],
            description: personsContent[current_lang][0] + ", " + personsContent[current_lang][2] + ", " + personsContent[current_lang][12],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/wir"
        },
        {
            title: items[current_lang][3],
            description: termineTypes[current_lang][0] + ", " + termineTypes[current_lang][1] + ", " + termineTypes[current_lang][2],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/termine"
        },
        {
            title: items[current_lang][4],
            description: news1[current_lang][1] + ", " + news2[current_lang][1] + ", " + news3[current_lang][1],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/news"
        },
        {
            title: footer[current_lang][3],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/datenschutz"
        },
        {
            title: footer[current_lang][2],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/impressum"
        },
        {
            title: footer[current_lang][9],
            description: footer[current_lang][5],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/wissenswertes/begrifflichkeiten"
        },
        {
            title: footer[current_lang][11],
            description: footer[current_lang][5],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/wissenswertes/geschichte"
        },
        {
            title: faq[current_lang][0],
            description: footer[current_lang][5],
            onTrigger: () => window.location.href = window.location.origin + "/" + current_lang + "/wissenswertes/faq"
        }
    ];

    return (
        <HelmetProvider>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
            >
                <SpotlightProvider
                    actions={actions}
                    searchPlaceholder="Search..."
                    shortcut={['mod + P', 'mod + K', '/']}
                    nothingFoundMessage="Nothing found..."
                >
                    <Affix position={{ bottom: 20, right: 20 }}>
                        <Transition transition="slide-up" mounted={scroll.y > 0}>
                            {(transitionStyles) => (
                                <Button color="gray" compact uppercase
                                        leftIcon={<AiOutlineArrowUp size={16} />}
                                        style={transitionStyles}
                                        onClick={() => scrollTo({ y: 0 })}
                                >
                                    {home[current_lang][3]}
                                </Button>
                            )}
                        </Transition>
                    </Affix>
                    <div className="App" id="App">
                        { demo 
                            ? 
                            <Modal opened centered withCloseButton={false}>
                                Wir befinden uns im Aufbau und der Planung, die Webseite folgt bald! Bei Fragen könnt ihr uns gerne schreiben:
                                <Space h="md" />
                                <Button 
                                    component="a" 
                                    href="mailto:info@karate-kenkyo.de"
                                    variant="default"
                                    size="compact-md"
                                >
                                    info@karate-kenkyo.de
                                </Button>
                                <Space h="md" />
                                Grüße Zsolt, Raphaele, Michael, Evi, Monika, Darja, Maria
                            </Modal>
                            : null }
                        <Body
                            opened={opened}
                            setOpened={setOpened}
                            scrollTo={scrollTo}
                            current_lang={current_lang}
                            setCurrentLang={setCurrentLang}
                        />
                    </div>
                </SpotlightProvider>
            </MantineProvider>
        </HelmetProvider>
    );
}

