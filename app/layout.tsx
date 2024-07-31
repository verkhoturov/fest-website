import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google'
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
            <GoogleAnalytics gaId="G-2XP3SEDVJP" />
            <body className={raleway.className}>
                <Header />
                <main className="container">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
