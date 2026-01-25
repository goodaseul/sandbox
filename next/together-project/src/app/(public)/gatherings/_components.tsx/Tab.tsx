import { TABS, TabValue } from "@/app/(protected)/constatns";
import Button from "@/components/Button";

type TabProps = {
  activeTab: TabValue;
  handleTypeTab: (type: TabValue) => void;
};
export default function Tab({ activeTab, handleTypeTab }: TabProps) {
  return (
    <div className="flex">
      {TABS.map((tab) => (
        <Button
          key={tab.value}
          variant="tab"
          type="button"
          className={activeTab === tab.value ? "bg-point font-bold" : ""}
          onClick={() => handleTypeTab(tab.value)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}
