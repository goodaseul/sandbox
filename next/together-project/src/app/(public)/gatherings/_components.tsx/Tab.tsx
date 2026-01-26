import Button from "@/components/Button";
import { TABS, TabValue } from "@/constants/gatherings";

type TabProps = {
  activeTab: TabValue;
  handleTypeTab: (type: TabValue) => void;
};
export default function Tab({ activeTab, handleTypeTab }: TabProps) {
  return (
    <div className="max-w-4xl grid grid-cols-5 gap-2 text-sm xl:text-lg my-5">
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
