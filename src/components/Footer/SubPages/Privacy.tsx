// @ts-nocheck
import {Container, Space, Stack} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import {footer, privacy} from "../../Content/FooterContent";
import FooterBody from "../FooterBody";
import Language from "../Language";
import Seperator from "../../Pages/Home/Seperator";
import {Helmet} from "react-helmet-async";
import React from "react";

export default function Privacy(props: any) {
    let current_lang = window.location.pathname.split("/")[1]; 
    return(
        <div className={"HomeBody"}>
            <Helmet>
                <html lang={props.current_lang} />
                <title>Kenkyo Karate - Home</title>
                <meta name="description" content="Datenschutzerklärung des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V" data-rh="true" />
                <meta name="keywords" content="Karate, Goju Ryu, Martial Arts, Rheinzabern, Kenkyo, Karate, Kampfsport, Kampfkunst, Goju-Ryu, Datenschutz, Privatsphäre" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Kenkyo Karate - Datenschutz" />
                <meta property="og:description" content="Datenschutzerklärung des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V., Informationen zum Schutz Ihrer persönlichen Daten." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content="/assets/Logo-Kenkyo.png" />
                <meta property="og:locale" content={props.current_lang} />
                <link rel="canonical" href="/" />
            </Helmet>
            <Container>
                <Space h={"xl"} />
                <MyTitle order={1} content={footer[current_lang][3]} />
                <Seperator />

                <MyContent content={privacy[current_lang][0]} />

                <MyTitle content={privacy[current_lang][1]} />
                <MyContent content={privacy[current_lang][2]}/>

                <MyTitle content={privacy[current_lang][3]}/>
                <MyContent content={
                    <Stack>
                        <>{privacy[current_lang][4]}</><br/>
                        <>{privacy[current_lang][5]}</><br/>
                        <>{privacy[current_lang][6]}</><br/>
                        <>{privacy[current_lang][7]}</><br/>
                        <>{privacy[current_lang][8]}</>
                    </Stack>
                }/>

                <MyTitle content={privacy[current_lang][9]}/>
                <MyContent content={privacy[current_lang][10]}/>

                <MyTitle content={privacy[current_lang][11]}/>
                <MyContent content={
                    <Stack>
                        <>{privacy[current_lang][12]}</><br/>
                        <>{privacy[current_lang][13]}</><br/>
                        <>{privacy[current_lang][14]}</><br/>
                        <>{privacy[current_lang][15]}</><br/>
                    </Stack>
                }/>

                <MyTitle content={privacy[current_lang][16]}/>
                <MyContent content={privacy[current_lang][17]}/>

                <MyTitle content={privacy[current_lang][18]}/>
                <MyContent content={privacy[current_lang][19]}/>

                <MyTitle content={privacy[current_lang][20]}/>
                <MyContent content={privacy[current_lang][21]}/>

                <MyTitle content={privacy[current_lang][22]}/>
                <MyContent content={privacy[current_lang][23]}/>

                <MyTitle content={privacy[current_lang][24]}/>
                <MyContent content={privacy[current_lang][25]}/>

                <MyTitle content={privacy[current_lang][26]}/>
                <MyContent content={privacy[current_lang][27]}/>

                <MyTitle content={privacy[current_lang][28]}/>
                <MyContent content={privacy[current_lang][29]}/>

                <MyTitle content={privacy[current_lang][30]}/>
                <MyContent content={privacy[current_lang][31]}/>

                <MyTitle content={privacy[current_lang][32]}/>
                <MyContent content={privacy[current_lang][33]}/>

                <MyTitle content={privacy[current_lang][34]}/>
                <MyContent content={privacy[current_lang][35]}/>

                <MyTitle content={privacy[current_lang][36]}/>
                <MyContent content={privacy[current_lang][37]}/>

                <MyTitle content={privacy[current_lang][38]}/>
                <MyContent content={privacy[current_lang][39]}/>

                <MyTitle content={privacy[current_lang][40]}/>
                <MyContent content={privacy[current_lang][41]}/>

                <MyTitle content={privacy[current_lang][42]}/>
                <MyContent content={privacy[current_lang][43]}/>
            </Container>
            <FooterBody current_lang={props.current_lang} />
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}
