// @ts-nocheck
import FooterBody from "../../Footer/FooterBody";
import React, {useState} from "react";
import Seperator from "../Home/Seperator";
import {Center, Space, Table} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import {items} from "../../Content/MenuContent";
import Language from "../../Footer/Language";
import {noTermine, termine, termineHeader} from "../../Content/TermineContent";
import {Helmet} from "react-helmet-async";

export default function Termine(props: any) {
    let current_lang = window.location.pathname.split("/")[1];
    const [noData,] = useState(termine[current_lang].length === 0);
    let rows: any;
    for (let i = 0; i < termine[current_lang].length; i++) {
        rows = termine[current_lang].map((e) => (
            <tr key={e.name}>
                <td><Center>{e.event}</Center></td>
                <td><Center>{e.date}</Center></td>
                <td><Center>{e.location}</Center></td>
                <td><Center>{e.organizer}</Center></td>
            </tr>
        ));
    }

    if (!noData) {
        return (
            <div className={"WeiteresBody"}>
                <Helmet>
                    <html lang={props.current_lang} />
                    <title>Kenkyo Karate - Termine</title>
                    <meta name="description" content="Alle aktuellen Termine und Veranstaltungen des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V" data-rh="true" />
                    <meta name="keywords" content="Karate, Goju Ryu, Martial Arts, Rheinzabern, Kenkyo, Karate, Kampfsport, Kampfkunst, Goju-Ryu, Termine, Veranstaltungen, Events, Kalender" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta property="og:title" content="Kenkyo Karate - Termine" />
                    <meta property="og:description" content="Alle aktuellen Termine und Veranstaltungen des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V., einschließlich Turniere, Prüfungen und andere wichtige Ereignisse." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:image" content="/assets/Logo-Kenkyo.png" />
                    <meta property="og:locale" content={props.current_lang} />
                    <link rel="canonical" href="/" />
                </Helmet>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][3]} />

                <Seperator />
                <Table verticalSpacing="xs" highlightOnHover>
                    <thead>
                    <tr>
                        <th><Center>{termineHeader[current_lang][0]}</Center></th>
                        <th><Center>{termineHeader[current_lang][1]}</Center></th>
                        <th><Center>{termineHeader[current_lang][2]}</Center></th>
                        <th><Center>{termineHeader[current_lang][3]}</Center></th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>

                <FooterBody current_lang={props.current_lang}/>
                <Language setCurrentLang={props.setCurrentLang}/>
            </div>
        );

    } else {
        return (
            <div className={"WeiteresBody"}>
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
                <MyTitle order={1} content={items[current_lang][3]} />

                <Seperator />
                <MyContent content={noTermine[current_lang]} />

                <FooterBody current_lang={props.current_lang}/>
                <Language setCurrentLang={props.setCurrentLang}/>
            </div>
        );
    }
}
