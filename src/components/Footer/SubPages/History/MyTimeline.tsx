// @ts-nocheck
import { Text, Timeline } from "@mantine/core";

import TextToPicture from "../../../FloatingElement/TextToPicture";
import {timeline} from "../../../Content/FooterContent";

export default function myTimeline(props: any) {
    let current_lang = window.location.pathname.split("/")[1]; 
    return (
        <Timeline bulletSize={24} lineWidth={2} active={10} color="dark" >
            <Timeline.Item lineVariant="dashed"
                title={
                    <TextToPicture label={"Sanzan Jidai"} size="md" text={"三山時代"}
                                   pic={"/assets/sanzan.jpeg"} />
                }
            >
                <Text color="dimmed" size="sm">{timeline[current_lang][0]}</Text>
                <Text size="xs" mt={4}> 1314 - 1429 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Sakugawa Kanga"} size="lg" text={"佐久川 寛賀"}
                                   pic={"/assets/Kanga_Sakugawa.jpeg"} />
                }
            >
                <Text color="dimmed" size="sm">{timeline[current_lang][1]}</Text>
                <Text size="xs" mt={4}> 1733 - 1815 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Matsumura Sōkon"} size="lg" text={"松村 宗棍"}
                                   pic={"/assets/Sokon_Matsumura.jpg"} />
                }
            >
                <Text color="dimmed" size="sm">{timeline[current_lang][2]}</Text>
                <Text size="xs" mt={4}> 1809–1901 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Kanryo Higaonna"} size="lg" text={"松村 宗棍"}
                                   pic={"/assets/Kanryo-Higaonna.jpg"} />
                }
            >
                <Text color="dimmed" size="sm">{timeline[current_lang][3]}</Text>
                <Text size="xs" mt={4}> 1853 - 1916 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Itosu Ankō"} size="lg" text={"糸洲安恒"}
                                   pic={"/assets/ItosuAnko.png"} />
                }
            >
                <Text color="dimmed" size="sm">{timeline[current_lang][4]}</Text>
                <Text size="xs" mt={4}> 1832 - 1915 </Text> </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Auszug aus dem Bubishi"} size="xl" text={"武備志"}
                                   pic={"/assets/bubishi.webp"} />
                }
            >
                <Text color="dimmed" size="sm">{timeline[current_lang][5]}</Text>
                <Text size="xs" mt={4}> 1800 - 1900 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Dainippon Butokukai"} size="xl" text={"大日本武徳会"}
                                   pic={"/assets/Butokukai_Kyoto.jpg"} />
                }
            >
                <Text color="dimmed" size="sm">{timeline[current_lang][6]}</Text>
                <Text size="xs" mt={4}> 1933 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Chōjun Miyagi"} size="md" text={"宮城 長順"}
                                   pic={"/assets/Miyagi_Chojun.jpg"} />
                }
            >
                <Text color="dimmed" size="sm">{timeline[current_lang][7]}</Text>

                <Text size="xs" mt={4}> 1934 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Yamaguchi Gōgen"} size="md" text={"山口 剛玄"}
                                   pic={"/assets/Gogen_Yamaguchi.jpeg"} />
                }
            >
                <Text color="dimmed" size="sm">{timeline[current_lang][8]}</Text>
                <Text size="xs" mt={4}> 1909 - 1989 </Text>
            </Timeline.Item>

            <Timeline.Item
                lineVariant="dashed"
                title={
                    <TextToPicture label={"Yushinkan Stempel (von Fritz Nöpel)"} size="md" text={"唯心舘"}
                                   pic={"/assets/Yuishinkan-2.png"} />
                }
            >
                <Text color="dimmed" size="sm">{timeline[current_lang][9]}</Text>
                <Text size="xs" mt={4}> 1954 - 2020 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Karateverein Kenkyo Rheinzabern e.v."} size="xl" text={"Karateverein Kenkyo Rheinzabern e.v."}
                                   pic={"/assets/Logo.png"} />
                }
            >
                <Text color="dimmed" size="sm">{timeline[current_lang][10]}</Text>
                <Text size="xs" mt={4}> 2023 </Text>
            </Timeline.Item>
        </Timeline>
    );
}
