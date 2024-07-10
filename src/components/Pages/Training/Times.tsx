// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import {times} from "../../Content/TrainerContent";
import {Container, Space} from "@mantine/core";
import Cards from "./Cards";
import Seperator from "../Home/Seperator";
import FooterBody from "../../Footer/FooterBody";
import Language from "../../Footer/Language";
import {Helmet} from "react-helmet-async";
import React from "react";

export default function Times(props: any) {
    let current_lang = window.location.pathname.split("/")[1];

    return (
        <div className={"TrainerBody"}>
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
            <MyTitle order={1} content={times[current_lang][0]}/>
            <Seperator />
            <Container>
                <Space h={"xl"} />
                <Cards
                    title={times[current_lang][2]}
                    desc={times[current_lang][3]}
                    day={times[current_lang][4]}
                    time={"18:00 - 19:00"}
                    color={"teal"}
                    day2={times[current_lang][8]}
                    time2={"18:00 - 19:00"}
                    color2={"yellow"}
                />
                <Cards
                    title={times[current_lang][5]}
                    desc={times[current_lang][6]}
                    day={times[current_lang][4]}
                    time={"19:00 - 21:00"}
                    color={"orange"}
                    day2={times[current_lang][8]}
                    time2={"19:00 - 21:00"}
                    color2={"cyan"}
                />
                {/*<Cards*/}
                {/*    title={times[current_lang][7]}*/}
                {/*    desc={times[current_lang][9]}*/}
                {/*    day={times[current_lang][8]}*/}
                {/*    time={"19:00 - " + times[current_lang][15]}*/}
                {/*    color={"dark"}*/}
                {/*/>*/}
                <Cards
                    title={times[current_lang][10]}
                    desc={times[current_lang][12]}
                    day={times[current_lang][11]}
                    time={"09:00 - 11:30"}
                    color={"grape"}
                />
                <Cards
                    title={times[current_lang][13]}
                    desc={times[current_lang][14]}
                    day={times[current_lang][11]}
                    time={"09:00 - 11:30"}
                    color={"lime"}
                />
            </Container>

            <FooterBody current_lang={props.current_lang}/>
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}
