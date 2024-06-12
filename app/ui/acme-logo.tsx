import Image from 'next/image'; 
import { lusitana } from '../ui/fonts';
import logo from '../ui/logo.svg';

export default function SJLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-black`}
    >
            <Image src={logo} alt="Sam Jarrah Logo" className="h-10 w-10 rotate-[0deg]" />
            <div className="text-[35px] ">SamJ</div>

     {/* <div className='flex flex-row items-center gap-5 uppercase'>
     <p className="text-[30px] ">Designer</p>
      <p className="text-[30px]">Developer</p>
      <p className="text-[30px]">Illustrator</p>
     </div> */}
    </div>
  );
}