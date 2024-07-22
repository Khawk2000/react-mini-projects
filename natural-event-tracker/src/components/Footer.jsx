import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/information-circle-outline";

const Footer = () => {
  return (
    <footer className="footer">
      <h1>
        <Icon icon={locationIcon} /> Click on an event for more info
      </h1>
    </footer>
  );
};

export default Footer;
