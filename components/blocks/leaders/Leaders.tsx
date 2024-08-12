import { memo } from 'react';
import styles from './Leaders.module.scss';
import Title from '@/components/ui/title';
import { PersonalCard } from '@/components/organism/personal-card/PersonalCard';

interface DataModel {
    image: string;
    social: { icon: string; href: string }[];
    name: string;
    description: string;
}

const data: DataModel[] = [
    {
        image: '/images/lead/p-1.png',
        social: [
            {
                icon: 'web',
                href: 'https://wedensky.com',
            },
            {
                icon: 'fb',
                href: 'https://www.facebook.com/profile.php?id=61560256948246',
            },
            {
                icon: 'inst',
                href: 'https://www.instagram.com/leawedensky/',
            },
        ],
        name: 'Lea <br/> Wedensky',
        description: `
            <p>is an Israeli mindset researcher, psychologist, writer, facilitator of groups, individual and family counselling, and a specialist in corporate culture and human resource management. She is the founder of the E.C.T. Centre and Wedensky School</p>
            <p>At the festival Lea will conduct a workshop Corporate Culture Constructor for Conscious Entrepreneurship as well as creative practices and workshops.</p>
        `,
    },
    {
        image: '/images/lead/doktoroff.png',
        social: [
            {
                icon: 'web',
                href: 'https://www.theintelligent.vc/',
            },
            {
                icon: 'in',
                href: 'https://www.linkedin.com/in/doktoroff',
            },
            {
                icon: 'inst',
                href: 'https://www.instagram.com/dogtoroff',
            },
        ],
        name: 'Andrei <br/> Doktoroff',
        description: `
            <p>is an investor & serial entrepreneur, founder & CEO of theIntelligent VC. As an advocate for mind technologies, Andrei believes in the transformative power of combining business acumen with mindfulness principles. This approach has consistently led him to sustainable success for both his ventures and clients.</p>
            <p>Andrei will speak on his vision and plans of developing a venture ecosystem for mindful intelligent entrepreneurs.</p>
        `,
    },
    {
        image: '/images/lead/zolotukhin.png',
        social: [
            {
                icon: 'web',
                href: 'https://innovators.club/',
            },
        ],
        name: 'Eduards <br/> Zolotukhins',
        description: `
            <p>Eduards Zolotukhins is a serial IT entrepreneur and investor, founder of Innovators.Club, Angel of the 2023 year (Latvia), board member of Latvian Business Angels Association LATBAN, early stage investor in <a href="https://www.discovercars.com/" target="_blank">DiscoverCars.com</a>, <a href="https://flirtu.io/" target="_blank">Flirtu.io</a>, Fluently (backed by YC), <a href="https://perfect.live/" target="_blank">Perfect.live</a>, <a href="https://hackerpulse.io/" target="_blank">Hackerpulse.io</a> (Backed by Antler) and other innovative startups. <br/>
            Eduard’s personal mission is to empower and inspire the next wave of entrepreneurs and innovators, encouraging them to dream big and make a tangible impact on the world.
            </p>
            <p>Eduards will speak about his experience of business development through the realization of spiritual potential, and the vision of Innovators.Club.</p>
        `,
    },
    {
        image: '/images/lead/pinkas.png',
        social: [
            {
                icon: 'in',
                href: 'https://www.linkedin.com/in/petro-pinkas/',
            },
        ],
        name: 'Petro <br/> Pinkas',
        description: `
            <p>An experienced entrepreneur, visionary, investor and mentor, he has spent over 30 years transforming dreams into reality based on principles of transparency, equality and partnership. He has led over 50 projects, including a $450M Ukrainian petroleum trader, Ukrainian aviation reforms allowing low-cost carriers, and a sunflower oil plant with a 250,000 tons/month capacity.</p>
            <p>Now, he focuses on ALPHA Brain, a neurofitness method to enhance creativity and brain efficiency, along with ALPHA Events and ALPHA Coffee. His grand goal is to build ecosystems that foster innovation and collaboration.</p>
            <p>At the festival Petro will talk about Quantum organizations of the future.</p>
            `,
    },
    {
        image: '/images/lead/p-2.png',
        social: [
            {
                icon: 'web',
                href: 'https://futures.land',
            },
        ],
        name: 'Alena <br/> Uhlianica',
        description: `
            <p>is an expert in strategic foresight, futurist, 18 years in IT, 10 years of entrepreneurship, startups. Founder of the strategic planning agency <a href="http://futures.land/" target="_blank">FUTURES.LAND</a></p>
            <p>At the festival Alena will give a lecture on the theory and principles of Futures Thinking, an overview of the collection of trends involved in shaping the conditions of the future and a practical master class on applying this theory using the technique Anticipating the Future: Customised Scenario Planning and Backcasting.</p>
        `,
    },
    {
        image: '/images/lead/pavlenko.png',
        social: [
            {
                icon: 'fb',
                href: 'https://m.facebook.com/eugene.pavlenko/',
            },
            {
                icon: 'web',
                href: 'https://www.axiomadev.com/',
            },
            {
                icon: 'web',
                href: 'https://www.whiteflo.com/',
            },
        ],
        name: 'Eugene <br/> Pavlenko',
        description: `
            <p>IT entrepreneur, CEO and founder of AXIOMA, COO at WhiteFlo. <br/> As an IT specialist and entrepreneur, Eugene sees the future of conscious entrepreneurship in the combination of spiritual development of breakthrough Information Technologies.</p>
            <p>Eugene will speak on the future of the Internet (Web4) and AI, and their role in building an ecosystem of conscious entrepreneurship.</p>
        `,
    },
    {
        image: '/images/lead/p-3.png',
        social: [
            {
                icon: 'inst',
                href: 'https://www.instagram.com/luckycharmcollective',
            },
            {
                icon: 'web',
                href: 'https://www.lcc.team',
            },
            {
                icon: 'inst',
                href: 'https://www.instagram.com/babajicenter',
            },
        ],
        name: 'Arthur <br/> Shakh-Nazarov',
        description: `
            <p>Yogi and entrepreneur, founder of <a href="https://www.instagram.com/luckycharmcollective/" target="_blank">Lucky Charm Collective</a> and <a href="https://www.rocketcandy.co/" target="_blank">Rocker Candy</a>, guide of <a href="https://www.instagram.com/babajicenter/" target="_blank">Babaji Centre</a> in Riga.</p>
            <p>More than 20 years in design, more than 15 years in yoga and for the last 10 years has been doing individual and group work. Also conducts soundhiling with gongs, tea meditations, nailing and many others.</p>
            <p>Arthur will conduct body practices, sound healing and together with Vitaly will give a presentation on educational technologies and the entrepreneurial environment of the future.</p>
        `,
    },
    {
        image: '/images/lead/p-4.png',
        social: [
            {
                icon: 'inst',
                href: 'https://www.instagram.com/luckycharmcollective',
            },
            {
                icon: 'web',
                href: 'https://www.lcc.team',
            },
        ],
        name: 'Vitaly <br/> Yumaev',
        description: `
            <p>Entrepreneur, founder of <a href="https://www.jvkpro.com/">JVKPRO</a>, founder of <a href="https://www.instagram.com/luckycharmcollective/" target="_blank">Lucky Charm Collective</a>, facilitator of body and breath practices.</p>
            <p>As part of Lucky Charm Collective, he organizes events and conducts various practices that calm the mind, strengthen the spirit and develop willpower. For 17 years she has successfully developed a business in automotive programming while exploring new directions in self-discovery and self-improvement. He pays special attention to discipline, goal setting, and morality.</p>
            <p>At the festival Vitaly will conduct breath practices, ICE Bath and together with Arthur will give a presentation on educational technologies and the entrepreneurial environment of the future.</p>
        `,
    },
    {
        image: '/images/lead/p-5.png',
        social: [
            {
                icon: 'youtube',
                href: 'https://www.youtube.com/@VOLKOVADJ',
            },
        ],
        name: 'Anastasia <br/> Volkova',
        description: `
            <p>DJ and sound producer known for her cinematic DJ sets where music blends perfectly with
            nature. </p>
            <p>Besides live performances and DJ sets, Volkova is an experienced guide of ecstatic
            dance and has been organising various events and retreats on this topic for over 10 years.</p>
            <p>Anastasia will conduct ecstatic dance at the festival.</p>
        `,
    },
];

const Leaders = () => {
    return (
        <div className={styles.block} id="speak">
            <Title as="h2">Speakers and Leaders:</Title>

            <div className={styles.person}>
                {data.map((item: DataModel, i) => (
                    <PersonalCard key={i} data={item} />
                ))}
            </div>
        </div>
    );
};

export default memo(Leaders);
