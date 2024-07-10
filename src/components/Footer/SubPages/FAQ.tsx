// @ts-nocheck
import {Accordion, Text, Space, Container} from "@mantine/core";

import {faq} from "../../Content/FooterContent";
import MyTitle from "../../Utils/MyTitle";
import Seperator from "../../Pages/Home/Seperator";
import FooterBody from "../FooterBody";
import Language from "../Language";
import {Helmet} from "react-helmet-async";
import React from "react";

function AccordionCard(props: any) {
    return (
        <Accordion.Item value={props.id}>
            <Accordion.Control>{props.title}</Accordion.Control>
            <Accordion.Panel>
                <Text c="dimmed" ta="left">
                    {props.text}
                </Text>
            </Accordion.Panel>
        </Accordion.Item>
    );
}

export default function FAQ(props: any) {
    let current_lang = window.location.pathname.split("/")[1];
    return (
        <div className={"HomeBody"}>
            <Helmet>
                <html lang={props.current_lang} />
                <title>Kenkyo Karate - Home</title>
                <meta name="description" content="Häufig gestellte Fragen (FAQ) zum Goju-Ryu Karateverein Kenkyo Rheinzabern e.V" data-rh="true" />
                <meta name="keywords" content="Karate, Goju Ryu, Martial Arts, Rheinzabern, Kenkyo, Karate, Kampfsport, Kampfkunst, Goju-Ryu, FAQ, Fragen, Antworten" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Kenkyo Karate - FAQ" />
                <meta property="og:description" content="Häufig gestellte Fragen innerhalb des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V.." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content="/assets/Logo-Kenkyo.png" />
                <meta property="og:locale" content={props.current_lang} />
                <link rel="canonical" href="/" />
            </Helmet>
            <Space h={"xl"} />
            <MyTitle order={1} content={faq[current_lang][0]} />

            <Seperator />
                <Container>
                    <Accordion chevronPosition="left" variant="filled" defaultValue="question11" >

                        <AccordionCard
                            id="question11"
                            title={faq[current_lang][1]}
                            text={faq[current_lang][2]}
                        />

                        <AccordionCard
                            id="question13"
                            title={faq[current_lang][3]}
                            text={faq[current_lang][4]}
                        />

                        <AccordionCard
                            id="question14"
                            title={faq[current_lang][5]}
                            text={faq[current_lang][6]}
                        />

                        <AccordionCard
                            id="question1"
                            title={faq[current_lang][7]}
                            text={faq[current_lang][8]}
                        />

                        <AccordionCard
                            id="question2"
                            title={faq[current_lang][9]}
                            text={faq[current_lang][10]}
                        />

                        <AccordionCard
                            id="question7"
                            title={faq[current_lang][11]}
                            text={faq[current_lang][12]}
                        />

                        <AccordionCard
                            id="question8"
                            title={faq[current_lang][13]}
                            text={faq[current_lang][14]}
                        />

                        <AccordionCard
                            id="question10"
                            title={faq[current_lang][15]}
                            text={faq[current_lang][16]}
                        />

                        <AccordionCard
                            id="question5"
                            title={faq[current_lang][17]}
                            text={faq[current_lang][18]}
                        />

                        <AccordionCard
                            id="question4"
                            title={faq[current_lang][19]}
                            text={faq[current_lang][20]}
                        />

                        <AccordionCard
                            id="question3"
                            title={faq[current_lang][21]}
                            text={faq[current_lang][22]}
                        />

                        <AccordionCard
                            id="question6"
                            title={faq[current_lang][23]}
                            text={faq[current_lang][24]}
                        />

                        <AccordionCard
                            id="question9"
                            title={faq[current_lang][25]}
                            text={faq[current_lang][26]}
                        />

                        <AccordionCard
                            id="question12"
                            title={faq[current_lang][27]}
                            text={faq[current_lang][28]}
                        />

                    </Accordion>
                </Container>
            <FooterBody current_lang={props.current_lang} />
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}
