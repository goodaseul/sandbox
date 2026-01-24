import { GatheringType, TABS } from "@/api/gatherings";
import Button from "@/components/Button";

type TabProps = {
  activeTab: "ALL" | GatheringType;
  handleTypeTab: (type: "ALL" | GatheringType) => void;
};
export default function Tab({ activeTab, handleTypeTab }: TabProps) {
  return (
    <div className="flex">
      {TABS.map((tab) => (
        <Button
          key={tab.value}
          type="button"
          className={activeTab === tab.value ? "underline text-[#FF6F3C]" : ""}
          onClick={() => handleTypeTab(tab.value)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}
