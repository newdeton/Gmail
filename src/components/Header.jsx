import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";

export default function Header() {
  return (
    <header className="header">

      {/* =========================================================
          LEFT SIDE
      ========================================================= */}

      <div className="header-left">

        <button
          className="icon-btn"
          title="Main menu"
        >
          <MenuIcon />
        </button>

        <div className="gmail-logo">
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
            alt="Gmail"
          />
        </div>

      </div>


      {/* =========================================================
          SEARCH
      ========================================================= */}

      <div className="search-box">

        <SearchIcon />

        <input
          type="text"
          placeholder="Search mail"
        />

      </div>


      {/* =========================================================
          RIGHT SIDE ACTIONS
      ========================================================= */}

      <div className="header-actions">

        <button
          className="icon-btn"
          title="Help"
        >
          <HelpOutlineOutlinedIcon />
        </button>

        <button
          className="icon-btn"
          title="Settings"
        >
          <SettingsOutlinedIcon />
        </button>

        <button
          className="icon-btn"
          title="Google apps"
        >
          <AppsIcon />
        </button>

        <div
          className="avatar"
          title="Google Account"
        >
          E
        </div>

      </div>

    </header>
  );
}