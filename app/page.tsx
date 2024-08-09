import Symbols from '@/components/blocks/symbols';
import Participation from '@/components/blocks/participation';
import Leaders from '@/components/blocks/leaders';
import Program from '@/components/blocks/program';
import Gain from '@/components/blocks/gain';
import Hero from '@/components/blocks/hero';
import Whom from '@/components/blocks/whom';
import Venue from '@/components/blocks/venue';

import Script from 'next/script';

export default function Home() {
    return (
        <>
            <Script strategy="afterInteractive">
                {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1039690794479100');
                fbq('track', 'PageView');            
            `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=1039690794479100&ev=PageView&noscript=1"
                />
            </noscript>

            <Hero />
            <Gain />
            <Whom />
            <Program />
            <Leaders />
            <Venue />
            <Participation />
            <Symbols />
        </>
    );
}
