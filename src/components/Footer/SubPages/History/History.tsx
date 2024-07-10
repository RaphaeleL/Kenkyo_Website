// @ts-nocheck
import {Container, Space} from "@mantine/core";
import MyTimeline from "./MyTimeline";
import IntroGojuRyu from "./IntroGojuRyu";
import {footer} from "../../../Content/FooterContent";
import MyTitle from "../../../Utils/MyTitle";
import Seperator from "../../../Pages/Home/Seperator";
import FooterBody from "../../FooterBody";
import Language from "../../Language";
import {Helmet} from "react-helmet-async";
import React from "react";

export default function History(props: any) {
    let current_lang = window.location.pathname.split("/")[1];
    return (
        <div className={"HomeBody"}>
            <Helmet>
                <html lang={props.current_lang} />
                <title>Kenkyo Karate - Home</title>
                <meta name="description" content="Geschichte des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V" data-rh="true" />
                <meta name="keywords" content="Karate, Goju Ryu, Martial Arts, Rheinzabern, Kenkyo, Karate, Kampfsport, Kampfkunst, Goju-Ryu, Geschichte" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Kenkyo Karate - Geschichte" />
                <meta property="og:description" content="Geschichte des Karate Do und Goju-Ryu Stiles. Informationen zur Kampfkunst." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content="/assets/Logo-Kenkyo.png" />
                <meta property="og:locale" content={props.current_lang} />
                <link rel="canonical" href="/" />
            </Helmet>
            <Space h={"xl"} />
            <MyTitle order={1} content={footer[current_lang][11]} />

            <Seperator />
            <Container>
                <IntroGojuRyu current_lang={props.current_lang} />
                <MyTimeline current_lang={props.current_lang} />

            </Container>
            <FooterBody current_lang={props.current_lang} />
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}
