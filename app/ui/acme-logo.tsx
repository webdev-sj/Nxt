import Image from 'next/image'; 
import { lusitana } from '../ui/fonts';
import logo from '../ui/logo.svg';

export default function SJLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
            <Image src={logo} alt="Sam Jarrah Logo" className="h-12 w-12 rotate-[0deg]" />

      <p className="text-[44px]">SJ</p>
    </div>
  );
}