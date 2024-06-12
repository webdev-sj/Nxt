// import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';

import Image from 'next/image'; // Import the Image component from Next.js if you're using Next.js
import { lusitana } from '@/app/ui/fonts';
import logo from '../ui/logo.svg';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
            <Image src={logo} alt="Acme Logo" className="h-12 w-12 rotate-[15deg]" />

      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-[44px]">SJ</p>
    </div>
  );
}
