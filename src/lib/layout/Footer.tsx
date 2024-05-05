import LinkedInIcon from '../assets/LinkedInIcon';
import YouTube from '../assets/YouTubeIcon';

const Footer = () => {
  return (
    <footer className="text-white">
      <div className=" bg-[#212529]">
        <div className="m-auto max-w-7xl">
          <div className="grid grid-cols-4 justify-between py-28">
            <div className="flex flex-col  gap-4">
              <div className="text-lg font-bold">Contact the Publisher</div>
              <div className="text-xs font-normal">
                bhuvneshwarirathore4@gmail.com
              </div>
              <div className="text-xs font-normal">+944 450 904 505</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-lg font-bold">Explorate</div>
              <div className="text-xs font-normal">About</div>
              <div className="text-xs font-normal">Partners</div>
              <div className="text-xs font-normal">Job Opportunities</div>
              <div className="text-xs font-normal">Advertise</div>
              <div className="text-xs font-normal">Membership</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-lg font-bold">Headquarter</div>
              <div className="text-xs font-normal">
                P.No. -24,Vrindavan Colony,Jaipur
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-lg font-bold">Connections</div>
              <div className="flex gap-4">
                <YouTube />
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#343A40] ">
        <div className="m-auto flex max-w-7xl justify-between py-8">
          <div className="text-sm font-bold">2024 | BR Publisher Studio</div>
          <button className="text-sm font-normal">Subscribe Now</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
