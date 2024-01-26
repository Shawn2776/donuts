import Donuts from "../data";
import Accordion from "@/components/Accordion";

const Tabs = () => {
  const classics = Donuts.filter((donut) => donut.type === "classic");
  const deluxes = Donuts.filter((donut) => donut.type === "deluxe");
  const others = Donuts.filter((donut) => donut.type === "other");

  const donutInfo = {
    classic: classics,
    deluxe: deluxes,
    other: others,
  };

  const drinkInfo = {
    test: "test",
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full mb-4 text-2xl">
        <div className="flex justify-center w-full py-4 border rounded-md">
          Donuts
        </div>
        <div className="flex justify-center w-full py-4 border rounded-md">
          Drinks
        </div>
      </div>
      <div>
        <div className="w-full">
          <Accordion accordionInfo={donutInfo} />
        </div>
        {/* <div className="w-full">
          <Accordion accordionInfo={drinkInfo} />
        </div> */}
      </div>
    </div>
  );
};

export default Tabs;
