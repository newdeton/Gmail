import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <button>
        <CheckBoxOutlineBlankIcon />
      </button>

      <button>
        <RefreshIcon />
      </button>

      <button>
        <MoreVertIcon />
      </button>
    </div>
  );
}