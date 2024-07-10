// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import {dojo} from "../../Content/TrainerContent";
import {Container, Space} from "@mantine/core";
import MyContent from "../../Utils/MyContent";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import Seperator from "../Home/Seperator";
import FooterBody from "../../Footer/FooterBody";
import Language from "../../Footer/Language";
import {Helmet} from "react-helmet-async";
import React from "react";

export default function Location(props: any) {
    let current_lang = window.location.pathname.split("/")[1];
    return (
        <div className={"TrainerBody"}>
            <Helmet>
                <html lang={props.current_lang} />
                <title>Kenkyo Karate - Home</title>
                <meta name="description" content="Homepage des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V" data-rh="true" />
                <meta name="keywords" content="Karate, Goju Ryu, Martial Arts, Rheinzabern, Kenkyo, Karate, Kampfsport, Kampfkunst, Goju-Ryu, Location, Dojo" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Kenkyo Karate - Home" />
                <meta property="og:description" content="Entdecken Sie den Standort des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V. Finden Sie unsere Trainingsstätte und erfahren Sie mehr über unseren Dojo." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content="/assets/Logo-Kenkyo.png" />
                <meta property="og:locale" content={props.current_lang} />
                <link rel="canonical" href="/" />
            </Helmet>
            <Space h={"xl"} />
            <MyTitle order={1} content={dojo[current_lang][0]}/>
            <Seperator />
            <Container>
                <MyContent content={dojo[current_lang][1]} />
                <MyContent content={dojo[current_lang][2]} />
            </Container>
            <MapContainer center={[49.11672637610138, 8.277981364233925]} zoom={22} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[49.11672637610138, 8.277981364233925]}>
                    <Popup>{dojo[current_lang][0]}</Popup>
                </Marker>
            </MapContainer>
            <FooterBody current_lang={props.current_lang}/>
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}
