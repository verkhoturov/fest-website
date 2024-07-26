import { memo } from 'react';
import styles from './Leaders.module.scss';
import Title from "@/components/ui/title";
import {PersonalCard} from "@/components/organism/personal-card/PersonalCard";

interface DataModel {
    id: number | string;
    image: string;
    social:{ id: number | string, icon: string, href: string }[];
    name: string;
    description: string;
}

const data: DataModel[] = [
    {
        id: 1,
        image: "/images/lead/p-1.png",
        social: [
            {
                id: "01",
                icon: "fb",
                href: "/"
            },
            {
                id: "02",
                icon: "in",
                href: "/"
            }
        ],
        name: "Lea <br/> Wedensky",
        description: `
            <p>is an Israeli mindset researcher, psychologist, writer, facilitator of groups, individual and family counselling, and a specialist in corporate culture and human resource management. She is the founder of the E.C.T. Centre and Wedensky School</p>
            <p>At the festival Lea will conduct a workshop Corporate Culture Constructor for Conscious Entrepreneurship as well as creative practices and workshops.</p>
        `
    },
    {
        id: 2,
        image: "/images/lead/p-2.png",
        social: [
            {
                id: "01",
                icon: "fb",
                href: "/"
            },
            {
                id: "02",
                icon: "in",
                href: "/"
            }
        ],
        name: "Alena <br/> Uhlianica",
        description: `
            <p>is an expert in strategic foresight, futurist, 18 years in IT, 10 years of entrepreneurship, startups. Founder of the strategic planning agency FUTURES.LANS</p>
            <p>At the festival Alena will give a lecture on the theory and principles of Futures Thinking, an overview of the collection of trends involved in shaping the conditions of the future and a practical master class on applying this theory using the technique Anticipating the Future: Customised Scenario Planning and Backcasting.</p>
        `
    },
    {
        id: 3,
        image: "/images/lead/p-3.png",
        social: [
            {
                id: "01",
                icon: "fb",
                href: "/"
            },
            {
                id: "02",
                icon: "in",
                href: "/"
            }
        ],
        name: "Artur <br/> Shakh-Nazarov",
        description: `
            <p>Founder of Lucky Charm Collective.</p>
            <p>Yogi, entrepreneur and guide of Babaji Centre in Riga.</p>
            <p>More than 15 years in yoga and for the last 10 years has been doing individual and group work. Also conducts soundhiling with gongs, tea meditations, nailing and many others.</p>   
            <p>At the festival Lea will conduct a workshop Corporate Culture Constructor for Conscious</p>
            <p>Entrepreneurship as well as creative practices and workshops.</p>
        `
    },
    {
        id: 4,
        image: "/images/lead/p-4.png",
        social: [
            {
                id: "01",
                icon: "fb",
                href: "/"
            },
            {
                id: "02",
                icon: "in",
                href: "/"
            }
        ],
        name: "Vitaly <br/> Yumaev",
        description: `
            <p>Founder of Lucky Charm Collective.</p>
            <p>Entrepreneur and facilitator of body and breath practices.</p>
            <p>As part of Lucky Charm Collective, he organises events and conducts various practices that calm the mind, strengthen the spirit and develop willpower. For 17 years she has successfully developed a business in automotive programming while exploring new directions in self-discovery and self-improvement. He pays special attention to discipline, goal setting, and morality.</p>
            <p>At the festival Lea will conduct a workshop Corporate Culture Constructor for Conscious</p>
            <p>Entrepreneurship as well as creative practices and workshops.</p>
        `
    }
]

const Leaders = () => {
    return (
        <div className={styles.block}>
            <Title as="h2">Speakers and Leaders:</Title>

            <div className={styles.person}>
                {data.map((item: DataModel) => (
                    <PersonalCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default memo(Leaders);