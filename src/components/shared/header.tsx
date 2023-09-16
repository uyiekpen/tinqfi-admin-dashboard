import { AiOutlineSearch } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { iconsImgs } from "../../utils/images";
import { Input } from "../ui";

const Header = () => {
  return (
    <div className="header">
      <div className="holder">
        {" "}
        <h2 className="font-bold">Dashboard</h2>
        <div className="header-search">
          <span>
            <AiOutlineSearch />
          </span>
          <Input type="text" placeholder="seach here ..." className="search" />
        </div>
        <div className="lang-icon">
          <img src={iconsImgs.United} alt="united.png" />
          <span>Eng(US)</span>
          <span>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className="profile">
          <div className="h-[40px] w-[35px] bg-tinqfiPink rounded-md flex justify-center items-center p-2">
            <img src={iconsImgs.message} alt="" className="ml-4" />
            <span className="mb-4 mr-2">
              <BsDot size={20} className="text-tinqfiRed font-bold" />
            </span>
          </div>
          <div className="flex">
            <div className="h-[40px] w-[35px]bg-tinqfiPink rounded-md">
            
              <img src={iconsImgs.avatar1} className="w-full h-full object-contain " alt="profile.png"/>
            </div>

            <div className="flex flex-col text-sm capitalize">
              <div className="flex ">
                {" "}
                cory fervent{" "}
                <span>
                  {" "}
                  <RiArrowDownSLine />
                </span>
              </div>
              <span>Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
