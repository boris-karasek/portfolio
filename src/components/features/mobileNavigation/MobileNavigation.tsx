import { useState } from "react";
import { MobilePrismButton } from "@/components/features/mobileNavigation/MobilePrismButton";
import { MobilePrismMenu } from "@/components/features/mobileNavigation/MobilePrismMenu";

export const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleSelect = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  return (
    <>
      <MobilePrismButton onClick={() => setOpenMenu((s) => !s)} />
      <MobilePrismMenu open={openMenu} onSelect={handleSelect} />
    </>
  );
};
