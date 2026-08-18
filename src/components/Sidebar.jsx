import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import SnoozeOutlinedIcon from "@mui/icons-material/SnoozeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const items = [
  [InboxOutlinedIcon, "Inbox", "6"],
  [StarBorderOutlinedIcon, "Starred", ""],
  [SnoozeOutlinedIcon, "Snoozed", ""],
  [SendOutlinedIcon, "Sent", ""],
  [DraftsOutlinedIcon, "Drafts", ""],
  [MoreHorizOutlinedIcon, "More", ""],
];

export default function Sidebar({ onCompose }) {
  return (
    <aside className="sidebar">
      <button className="compose-btn" onClick={onCompose}>
        <CreateOutlinedIcon />
        <span>Compose</span>
      </button>

      <nav>
        {items.map(([Icon, label, count], index) => (
          <div
            className={`sidebar-item ${index === 0 ? "active" : ""}`}
            key={label}
          >
            <Icon />
            <span>{label}</span>
            {count && <strong>{count}</strong>}
          </div>
        ))}
      </nav>

      <div className="labels-title">
        <span>Labels</span>
        <button>＋</button>
      </div>
    </aside>
  );
}