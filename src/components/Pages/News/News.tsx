// @ts-nocheck
import FooterBody from "../../Footer/FooterBody";

import Seperator from "../Home/Seperator";
import {Button, Image, Text, Title, Badge, Group, Flex, Space} from "@mantine/core";
import TextToPage from "../../FloatingElement/TextToPage";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import {news1} from "../../Content/NewsContent";
import {items} from "../../Content/MenuContent";
import Language from "../../Footer/Language";
import {personsContent} from "../../Content/PersonsContent";
import {Helmet} from "react-helmet-async";
import React from "react";

function NewsBox(props: any) {
    let current_lang = window.location.pathname.split("/")[1]; 
    return (
        <div className={"NewsBox"}>
            <div style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}>
                <Image className={"NewsImage"}
                       radius="md"
                       src={props.news_id[current_lang][0]}
                       alt="Hier sollte ein Bild sein ..."
                       withPlaceholder
                />
                <Space h={"md"} />
                <Group position="center">
                    <MyTitle content={props.news_id[current_lang][1]} />
                    <Badge color="gray">{props.date}</Badge>
                </Group>
                <Space h={"xs"} />
                <MyContent content={props.news_id[current_lang][2]} />
                <TextToPage
                    not_fullscreen={true}
                    current_lang={props.current_lang}
                    showButton={true}
                    date={props.date}
                    className={"PersonInfoButton"}
                    size="xl"
                    openingText={
                        <Button
                            color="dark"
                            fullWidth
                            mt="md"
                            radius="md"
                        >
                            {personsContent[current_lang][9]}
                        </Button>
                    }
                    title={<Title order={1}>{props.news_id[current_lang][1]}</Title>}
                    content={<Text c="dimmed"> {props.news_id[current_lang][3]} </Text>} />
                <Space h={"md"} />
            </div>
        </div>
    );
}

export default function News(props: any) {
    let current_lang = window.location.pathname.split("/")[1]; 
    return (
        <>
            <div className={"NewsBody"}>
                <Helmet>
                    <html lang={props.current_lang} />
                    <title>Kenkyo Karate - News</title>
                    <meta name="description" content="Aktuelle Nachrichten und Informationen des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V" data-rh="true" />
                    <meta name="keywords" content="Karate, Goju Ryu, Martial Arts, Rheinzabern, Kenkyo, Karate, Kampfsport, Kampfkunst, Goju-Ryu, News, Nachrichten, Events" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta property="og:title" content="Kenkyo Karate - News" />
                    <meta property="og:description" content="Aktuelle Nachrichten und Informationen des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V., einschließlich Veranstaltungen, Turniere und andere wichtige Ereignisse." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:image" content="/assets/Logo-Kenkyo.png" />
                    <meta property="og:locale" content={props.current_lang} />
                    <link rel="canonical" href="/" />
                </Helmet>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][4]} />
                
                <Seperator />

                <Flex
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    {/*<NewsBox
                        current_lang={props.current_lang}
                        news_id={news3}
                        date={"15.04.2023"}
                    />
                    <NewsBox
                        current_lang={props.current_lang}
                        news_id={news2}
                        date={"01.04.2023"}
                    />*/}
                    <NewsBox
                        current_lang={props.current_lang}
                        news_id={news1}
                        date={"06.01.2022"}
                    />
                </Flex>
                <FooterBody current_lang={props.current_lang}/>
                <Language setCurrentLang={props.setCurrentLang}/>
            </div>
        </>
    );
}
