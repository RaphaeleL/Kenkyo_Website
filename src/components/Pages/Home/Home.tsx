// @ts-nocheck
import FooterBody from "../../Footer/FooterBody";
import { Space, Container, Text } from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import Quote from "./Quote";
import { home, succ } from "../../Content/HomeContent";
import Language from "../../Footer/Language";
import MyContent from "../../Utils/MyContent";
import Sponsoren from "../../Sponsoren/Sponsoren";
import React from "react";
import {Helmet} from "react-helmet-async";
import Seperator from "./Seperator";

export default function Home(props: any) {
    let current_lang = window.location.pathname.split("/")[1]; // props.current_lang;
    return (
        <div className={"HomeBody"}>
            <Helmet>
                <html lang={props.current_lang} />
                <title>Kenkyo Karate - Home</title>
                <meta name="description" content="Homepage des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V" data-rh="true" />
                <meta name="keywords" content="Karate, Goju Ryu, Martial Arts, Rheinzabern, Kenkyo, Karate, Kampfsport, Kampfkunst, Goju-Ryu" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Kenkyo Karate - Home" />
                <meta property="og:description" content="Goju-Ryu Karateverein Kenkyo Rheinzabern e.V., bietet qualitativ hochwertiges Karatetraining für alle Alters- und Leistungsstufen." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content="/assets/Logo-Kenkyo.png" />
                <meta property="og:locale" content={props.current_lang} />
                <link rel="canonical" href="/" />
            </Helmet>
            <Space h={"xl"} />
            <MyTitle order={1} content={"Karateverein Kenkyo Rheinzabern e.V."} />

            <Quote author={succ[current_lang][5]} text={succ[current_lang][4]} />

            <Container>
				<MyContent content={home[current_lang][0]} />
				<MyContent content={home[current_lang][5]} />
				<MyContent content={home[current_lang][1]} />
				{/*<MyContent content={home[current_lang][2]} />*/}
            </Container>

            <Seperator />
            <Container>
                <Text fs="italic" c="dimmed">{home[current_lang][6]}</Text>
            </Container>


            <Sponsoren current_lang={props.current_lang}/> 

            <FooterBody current_lang={props.current_lang} />
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}


