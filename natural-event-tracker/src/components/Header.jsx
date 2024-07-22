import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/information-circle-outline";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={locationIcon} /> Natural Event Tracker (Powered by NASA)
      </h1>
    </header>
  );
};

export default Header;
