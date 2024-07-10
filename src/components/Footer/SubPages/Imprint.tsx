// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import {footer, imprint} from "../../Content/FooterContent";
import {Container, Space} from "@mantine/core";
import FooterBody from "../FooterBody";
import Language from "../Language";
import Seperator from "../../Pages/Home/Seperator";
import {Helmet} from "react-helmet-async";
import React from "react";

export default function Imprint(props: any) {
    let current_lang = window.location.pathname.split("/")[1]; 
    return (
        <div className={"HomeBody"}>
            <Helmet>
                <html lang={props.current_lang} />
                <title>Kenkyo Karate - Home</title>
                <meta name="description" content="Impressum des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V" data-rh="true" />
                <meta name="keywords" content="Karate, Goju Ryu, Martial Arts, Rheinzabern, Kenkyo, Karate, Kampfsport, Kampfkunst, Goju-Ryu, Impressum" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Kenkyo Karate - Impressum" />
                <meta property="og:description" content="Impressum des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V., Informationen zur rechtlichen Verantwortung und Kontaktdaten." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content="/assets/Logo-Kenkyo.png" />
                <meta property="og:locale" content={props.current_lang} />
                <link rel="canonical" href="/" />
            </Helmet>
            <Space h={"xl"} />
            <MyTitle order={1} content={footer[current_lang][2]} />

            <Seperator />
            <Container>
                <MyTitle content={imprint[current_lang][0]}/>
                <MyContent content={imprint[current_lang][1]} />

                <MyTitle content={imprint[current_lang][2]}/>
                <MyContent content={imprint[current_lang][3]}/>

                <MyTitle content={imprint[current_lang][4]}/>
                <MyContent content={imprint[current_lang][5]}/>

                <MyTitle content={imprint[current_lang][6]}/>
                <MyContent content={imprint[current_lang][7]}/>

                <MyTitle content={imprint[current_lang][8]} />
                <MyContent content={imprint[current_lang][9]} />

                <MyTitle content={imprint[current_lang][10]} />
                <MyContent content={imprint[current_lang][11]} />

                <MyTitle content={imprint[current_lang][12]} />
                <MyContent content={imprint[current_lang][13]} />

                <MyTitle content={imprint[current_lang][14]} />
                <MyContent content={imprint[current_lang][15]} />

                <MyTitle content={imprint[current_lang][16]} />
                <MyContent content={imprint[current_lang][17]} />

            </Container>
            <FooterBody current_lang={props.current_lang} />
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}
