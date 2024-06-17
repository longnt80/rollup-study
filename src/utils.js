import { createElement, lazy } from "react";

const mapping = {
  a: "./components/A",
  b: "./components/B",
  c: "./components/C",
};

export function renderTree(tree) {
  return tree.map(async (item) => {
    let content;

    if (item.content != null) {
      content = renderTree(item.content);
    }

    const component = lazy(() => import(mapping[item.name]));

    return createElement(component, {
      ...item.props,
      key: item.id,
      content,
    });
  });
}
