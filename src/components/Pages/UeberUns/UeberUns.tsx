// @ts-nocheck
import FooterBody from "../../Footer/FooterBody";

import Seperator from "../Home/Seperator";
import {Space} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import {items} from "../../Content/MenuContent";
import Persons from "./Persons";
import Language from "../../Footer/Language";
import {Helmet} from "react-helmet-async";
import React from "react";

export default function UeberUns(props: any) {
    let current_lang = window.location.pathname.split("/")[1];

    return (
        <>
            <div className={"VorstandBody"}>
                <Helmet>
                    <html lang={props.current_lang} />
                    <title>Kenkyo Karate - Über uns</title>
                    <meta name="description" content="Lernen Sie das Team hinter dem Goju-Ryu Karateverein Kenkyo Rheinzabern e.V. kennen." data-rh="true" />
                    <meta name="keywords" content="Karate, Goju Ryu, Martial Arts, Rheinzabern, Kenkyo, Karate, Kampfsport, Kampfkunst, Goju-Ryu, Über uns, Team, Vorstand" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta property="og:title" content="Kenkyo Karate - Über uns" />
                    <meta property="og:description" content="Lernen Sie das Team hinter dem Goju-Ryu Karateverein Kenkyo Rheinzabern e.V. kennen, einschließlich der Vorstandsmitglieder und Trainer." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:image" content="/assets/Logo-Kenkyo.png" />
                    <meta property="og:locale" content={props.current_lang} />
                    <link rel="canonical" href="/" />
                </Helmet>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][2]} />

                <Seperator />

                <Persons current_lang={props.current_lang} />

                <FooterBody current_lang={props.current_lang}/>
                <Language setCurrentLang={props.setCurrentLang} />
            </div>
        </>
    );
}
