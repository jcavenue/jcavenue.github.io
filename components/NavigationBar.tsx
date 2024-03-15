import Image from "next/image";

const NavigationBar = () => {
  return (
    <nav className="border-b-[1px] flex flex-row justify-center">
      <div className="flex flex-row justify-between items-center h-16 md:min-w-md lg:min-w-lg xl:min-w-xl ld:min-w-2xl">
        <div className="flex flex-row items-center gap-3">
          <div>
            <Image src={'/images/nav_bar_logo.svg'} alt='logo' width="30" height="30" priority/>
          </div>        
          <div className="font-bold text-lg">
            JCAVENUE | <span className="font-light text-sm">Personal Porfolio 3.0.0</span>
          </div>
        </div>
        <ul className="flex flex-row gap-3 text-sm">
          <li>Home</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
