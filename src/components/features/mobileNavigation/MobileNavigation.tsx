import { MobilePrismButton } from "@/components/features/mobileNavigation/MobilePrismButton";
import { MobilePrismMenu } from "@/components/features/mobileNavigation/MobilePrismMenu";
import { useMobileNavStore } from "@/store/useMobileNavStore";

export const MobileNavigation = () => {
  const open = useMobileNavStore((state) => state.open);
  const toggle = useMobileNavStore((state) => state.toggle);
  const close = useMobileNavStore((state) => state.close);

  const handleSelect = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  return (
    <>
      <MobilePrismButton onClick={toggle} isOpen={open} />
      <MobilePrismMenu open={open} onSelect={handleSelect} />
    </>
  );
};
