import type { Metadata } from 'next';
import Script from 'next/script';
import { Raleway } from 'next/font/google';
import './globals.css';
import Header from '@/components/organism/header';
import Footer from '@/components/organism/footer';

const raleway = Raleway({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'TEAL HORIZON',
    description: 'Abundant Future, Design and Mindfulness, Practices in Business',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-2XP3SEDVJP"
                async
                strategy="lazyOnload"
            />
            <Script strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-2XP3SEDVJP');
                `}
            </Script>
            <body className={raleway.className}>
                <Header />
                <main className="container">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
