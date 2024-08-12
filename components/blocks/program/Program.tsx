import { memo, ReactNode } from 'react';
import styles from './Program.module.scss';
import Title from '@/components/ui/title';
import ProgramCard from '@/components/organism/program-card';
import Image from 'next/image';
import { RegisterCall } from '@/components/organism/RegisterCall';

interface DataModel {
    id: number;
    title: string;
    list: {
        desc: string | ReactNode;
        time: string;
    }[];
}

const data: DataModel[] = [
    {
        id: 1,
        title: '16 AUGUST',
        list: [
            {
                time: '15:00',
                desc: 'Check-in',
            },
            {
                time: '16:30',
                desc: 'Welcome speech & festival rules introduction',
            },
            {
                time: '17:00',
                desc: (
                    <>
                        Introduction of participants and establishment of a creative environment
                        using the <br /> ‘Cave’ projective technique - strategies for adaptation at
                        a new level of development.
                    </>
                ),
            },
            {
                time: '18:30',
                desc: (
                    <>
                        Experience of business development through the realization of spiritual
                        potential,
                        <br /> and the vision of Innovators.Club
                    </>
                ),
            },
            {
                time: '19:00',
                desc: 'Dinner',
            },
            {
                time: '20:30',
                desc: 'Metaphorical cards',
            },
            {
                time: '22:30',
                desc: 'Sound Healing session',
            },
        ],
    },
    {
        id: 2,
        title: '17 AUGUST',
        list: [
            {
                time: '7:30',
                desc: 'Morning body & mindfulness practices',
            },
            {
                time: '9:00',
                desc: 'Breakfast',
            },
            {
                time: '10:00',
                desc: 'Foresight for SME and Private / Introduction',
            },
            {
                time: '10:45',
                desc: 'Break',
            },
            {
                time: '11:00',
                desc: 'Vision of development a venture ecosystem for mindful intelligent entrepreneurs',
            },
            {
                time: '11:30',
                desc: 'Break',
            },
            {
                time: '11:45',
                desc: 'Quantum organizations of the future',
            },
            {
                time: '12:15',
                desc: 'Break',
            },
            {
                time: '12:30',
                desc: 'Educational technologies and the entrepreneurial environment of the future',
            },
            {
                time: '13:00',
                desc: 'Break',
            },
            {
                time: '13:15',
                desc: 'Future of the Internet (Web4) and AI, and their role in building an ecosystem of conscious entrepreneurship',
            },
            {
                time: '13:45',
                desc: 'Lunch',
            },
            {
                time: '14:45',
                desc: 'Rest break',
            },
            {
                time: '15:45',
                desc: 'Breath practice',
            },
            {
                time: '16:15',
                desc: 'Foresight for SME and Private / Work in Groups',
            },
            {
                time: '18:15',
                desc: 'Dinner',
            },
            {
                time: '19:15',
                desc: 'Seminar-workshop "Building an Everlasting Corporate Culture"',
            },
            {
                time: '21:45',
                desc: 'Break',
            },
            {
                time: '22:00',
                desc: 'Warmup - Breathing practice to the sound of a tambourine',
            },
            {
                time: '22:30',
                desc: 'Ecstatic Dance',
            },
            {
                time: '23:30',
                desc: 'Sound Healing with Gong and Visualizaition practice',
            },
            {
                time: '0:00',
                desc: 'End of day',
            },
        ],
    },
    {
        id: 3,
        title: '18 AUGUST',
        list: [
            {
                time: '7:30',
                desc: 'Morning body & mindfulness practices',
            },
            {
                time: '9:00',
                desc: 'Breakfast',
            },
            {
                time: '10:00',
                desc: 'Feedback, Debriefing, Summarizing',
            },
            {
                time: '11:30',
                desc: 'Transformative game',
            },
            {
                time: '15:00',
                desc: 'End of festival',
            },
        ],
    },
];

const Program = () => {
    return (
        <div className={styles.block} id="prog">
            <Title as="h2" className={styles.title}>
                Program:
            </Title>
            <p>Мероприятие будет проходить на русском языке</p>
            <p className={styles.subtitle}>The event will be held in Russian</p>

            <div className={styles.content}>
                {data.map((item: DataModel, i: number) => (
                    <ProgramCard data={item} key={item.id} isOpen isMainDay={i === 1} />
                ))}
            </div>

            <RegisterCall className={styles.btn} />

            <div className={styles.d1}>
                <Image src="/svg/decor/p-d1.svg" alt="" width={60} height={60} />
            </div>
            <div className={styles.d2}>
                <Image src="/svg/decor/p-d2.svg" alt="" width={20} height={20} />
            </div>
            <div className={styles.d3}>
                <Image src="/svg/decor/p-d3.svg" alt="" width={60} height={60} />
            </div>
            <div className={styles.d4}>
                <Image src="/svg/decor/p-d4.svg" alt="" width={20} height={20} />
            </div>
            <div className={styles.d5}>
                <Image src="/svg/decor/p-d5.svg" alt="" width={26} height={26} />
            </div>
            {/* <div className={styles.d6}>
                <Image src="/svg/decor/p-d6.svg" alt="" width={20} height={20} />
            </div> */}
        </div>
    );
};

export default memo(Program);
