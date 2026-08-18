import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button className="icon-btn">
          <MenuIcon />
        </button>

        <div className="gmail-logo">
          <span className="gmail-m">M</span>
          <span>Gmail</span>
        </div>
      </div>

      <div className="search-box">
        <SearchIcon />
        <input placeholder="Search mail" />
      </div>

      <div className="header-actions">
        <button className="icon-btn">
          <HelpOutlineOutlinedIcon />
        </button>

        <button className="icon-btn">
          <SettingsOutlinedIcon />
        </button>

        <button className="icon-btn">
          <AppsIcon />
        </button>

        <div className="avatar">J</div>
      </div>
    </header>
  );
}