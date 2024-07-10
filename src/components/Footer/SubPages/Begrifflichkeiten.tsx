// @ts-nocheck
import {Container, Space, Table, Title} from "@mantine/core";
import MyContent from "../../Utils/MyContent";
import {begrifflichkeiten, footer} from "../../Content/FooterContent";
import FooterBody from "../FooterBody";
import Language from "../Language";
import MyTitle from "../../Utils/MyTitle";
import Seperator from "../../Pages/Home/Seperator";
import {Helmet} from "react-helmet-async";
import React from "react";

export default function Begrifflichkeiten(props: any) {
    let current_lang = window.location.pathname.split("/")[1]; 
    let grusformeln = [
        { japan: "musubi-dachi",        deutsch: begrifflichkeiten[current_lang][3],                     hinweis: "-" },
        { japan: "seiza",               deutsch: begrifflichkeiten[current_lang][4],                         hinweis: "-" },
        { japan: "mokesu",              deutsch: begrifflichkeiten[current_lang][5],                 hinweis: "Auf das Training/Ende vorbereiten; " },

        { japan: "shomen-ni .... rei",  deutsch: begrifflichkeiten[current_lang][6],                 hinweis: "-" },

        { japan: "sempai-ni ... rei",   deutsch: begrifflichkeiten[current_lang][7],                hinweis: "3.-1. Kyu" },
        { japan: "sensei-ni .... rei",  deutsch: begrifflichkeiten[current_lang][8],                hinweis: "ab 1. Dan" },

        { japan: "-o-tagai-ni .... rei",deutsch: begrifflichkeiten[current_lang][9],            hinweis: "-" },

        { japan: "onegai shimasu",      deutsch: begrifflichkeiten[current_lang][10],    hinweis: "Wird auf den Trainergruß gewantwortet" },
        { japan: "arigato gozaimashita",deutsch: begrifflichkeiten[current_lang][11],   hinweis: "Wird auf den Trainergruß gewantwortet" },
    ];

    let zahlen = [
        { japan: "ichi",    deutsch: "1",    hinweis: "itsch" },
        { japan: "ni",      deutsch: "2",    hinweis: "-" },
        { japan: "san",     deutsch: "3",    hinweis: "-" },
        { japan: "shi",     deutsch: "4",    hinweis: "tschi" },
        { japan: "go",      deutsch: "5",    hinweis: "-" },
        { japan: "roku",    deutsch: "6",   hinweis: "rok" },
        { japan: "shichi",  deutsch: "7",  hinweis: "sitsch" },
        { japan: "hachi",   deutsch: "8",    hinweis: "hatsch" },
        { japan: "kyû",     deutsch: "9",   hinweis: "qu" },
        { japan: "jû",      deutsch: "10",    hinweis: "tschu" },
    ];

    const grusformelRow = grusformeln.map((grusformel) => (
        <tr>
            <td>{grusformel.japan}</td>
            <td>{grusformel.deutsch}</td>
            {/*<td>{grusformel.hinweis}</td>*/}
        </tr>
    ));

    const zahlenRow = zahlen.map((zahl) => (
        <tr>
            <td>{zahl.japan}</td>
            <td>{zahl.deutsch}</td>
            {/*<td>{zahl.hinweis}</td>*/}
        </tr>
    ));

    return (
        <div className={"HomeBody"}>
            <Helmet>
                <html lang={props.current_lang} />
                <title>Kenkyo Karate - Home</title>
                <meta name="description" content="Begrifflichkeiten innerhalb eines Goju-Ryu Karate Do Dojo." data-rh="true" />
                <meta name="keywords" content="Karate, Goju Ryu, Martial Arts, Rheinzabern, Kenkyo, Karate, Kampfsport, Kampfkunst, Goju-Ryu, Begrifflichkeiten, Grusformeln, Zahlen, Japanisch, Karate-Vokabular, Training, Anfänger, Fortgeschrittene" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Kenkyo Karate - Begrifflichkeiten" />
                <meta property="og:description" content="Begrifflichkeiten innerhalb des Trainings des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V., sodass jeder uns versteht.." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content="/assets/Logo-Kenkyo.png" />
                <meta property="og:locale" content={props.current_lang} />
                <link rel="canonical" href="/" />
            </Helmet>
            <Space h={"xl"} />
            <MyTitle order={1} content={footer[current_lang][9]} />

            <Seperator />
            <Container>
                    <Title order={1}>{begrifflichkeiten[current_lang][0]}</Title>
                    <Space h={"xs"} />
                    <MyContent content={begrifflichkeiten[current_lang][1]} />
                    <Table highlightOnHover>
                        <thead>
                        <tr>
                            <th>Karate</th>
                            <th>{current_lang}</th>
                            {/*<th>Hinweiß</th>*/}
                        </tr>
                        </thead>
                        <tbody>{grusformelRow}</tbody>
                    </Table>
                    <Space h={"xs"} />
                    <MyContent content={begrifflichkeiten[current_lang][2]} />
                    <Table highlightOnHover>
                        <thead>
                        <tr>
                            <th>Karate</th>
                            <th>{current_lang}</th>
                            {/*<th>Aussprache</th>*/}
                        </tr>
                        </thead>
                        <tbody>{zahlenRow}</tbody>
                    </Table>
                </Container>
                <FooterBody current_lang={props.current_lang} />
    <Language setCurrentLang={props.setCurrentLang} />
</div>
);
}