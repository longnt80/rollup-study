import { Suspense } from "react";
import { renderTree } from "../utils";

export function MasterComponent({ componentTree }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {renderTree(componentTree)}
    </Suspense>
  );
}
