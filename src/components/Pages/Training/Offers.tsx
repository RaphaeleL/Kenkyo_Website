// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import {Stack, Container, Grid, Space} from "@mantine/core";
import MyContent from "../../Utils/MyContent";
import Kontakt from "../../Footer/SubPages/Kontakt";

import {offers} from "../../Content/TrainerContent";
import Cards from "./Cards";
import Seperator from "../Home/Seperator";
import FooterBody from "../../Footer/FooterBody";
import Language from "../../Footer/Language";
import {Helmet} from "react-helmet-async";
import React from "react";

export default function Offers(props: any) {
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
            <MyTitle order={1} content={offers[current_lang][0]}/>
            <Seperator />
            <Container>
                <MyContent content={offers[current_lang][1]} />
                <Kontakt button={true} current_lang={props.current_lang}/>
                <Space h="lg" />
                <MyContent content={offers[current_lang][13]} />
                <Space h="xl" />

                <Stack>
                    <Grid>
                        <Grid.Col md={6}>
                            <Cards
                                title={offers[current_lang][2]}
                                desc={offers[current_lang][3]}
                                time={"65€ / 6 " + offers[current_lang][12]}
                                color={"teal"}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Cards
                                title={offers[current_lang][6]}
                                desc={offers[current_lang][7]}
                                time={"55€ / 6 " + offers[current_lang][12]}
                                color={"grape"}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid>
                        <Grid.Col md={6}>
                            <Cards
                                title={offers[current_lang][8]}
                                desc={offers[current_lang][9]}
                                time={"45€ / 6 " + offers[current_lang][12]}
                                color={"orange"}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Cards
                                title={offers[current_lang][4]}
                                desc={offers[current_lang][5]}
                                time={"35€ / 6 " + offers[current_lang][12]}
                                color={"yellow"}
                            />
                        </Grid.Col>
                    </Grid>
                    <Cards
                        title={offers[current_lang][10]}
                        desc={offers[current_lang][11]}
                        time={"30€ / 3 " + offers[current_lang][12]}
                        color={"pink"}
                    />
                </Stack>
            </Container>
            <FooterBody current_lang={props.current_lang}/>
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}
