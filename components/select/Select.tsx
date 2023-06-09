"use client";

import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface SelectProps {
  data: {
    id: number;
    name: string;
  }[];
}

const Select = ({ data }: SelectProps) => {
  const [selected, setSelected] = useState(data[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="selector">
        <Listbox.Button>
          {/* <Image src={selected?.icon} alt="icon" /> */}
          <span className="">{selected?.name}</span>
        </Listbox.Button>
        <Transition as={Fragment}>
          <Listbox.Options>
            {data.map((itm) => (
              <Listbox.Option key={itm.id} value={itm}>
                {({ selected }) => (
                  <span className={selected ? "selected fw-bold" : ""}>
                    {itm.name}
                    {selected}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select;
