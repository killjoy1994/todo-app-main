import React from "react";

export default function TodosFilter() {
  return (
    <div className="mt-6 flex justify-center gap-x-3 font-semibold bg-white w-full py-3 rounded text-neutral-light-dark-grayish-blue">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}
