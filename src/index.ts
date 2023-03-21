// ~~~~~~~~~~~~~~~~~~~~~ type ~~~~~~~~~~~~~~~~~~~~~
export interface VNode {
  tag: string | Function;
  attrs: Object | undefined;
  children: Array<VNode> | VNode | string | undefined;
}

// ~~~~~~~~~~~~~~~~~~~~~ util ~~~~~~~~~~~~~~~~~~~~~
function obj2str(obj: Object | undefined) {
  if (!obj) {
    return "";
  }
  return (
    " " +
    Object.keys(obj)
      // @ts-ignore
      .map((key) => `${key}="${obj[key]}"`)
      .join(" ") +
    " "
  );
}

// ~~~~~~~~~~~~~~~~~~~~~ jsx ~~~~~~~~~~~~~~~~~~~~~

/**
 * Atomic is jsx transformer
 * @param {string | Function} tag
 */
export default class Atom {
  static h(
    tag: string | Function,
    attrs: Object | undefined,
    children: Array<VNode> | VNode | string | undefined
  ): VNode {
    if (typeof tag === "function") {
      return tag(attrs, children);
    }
    return { tag, attrs, children };
  }

  static renderToString(vnode: VNode) {
    const { tag } = vnode;
    switch (tag) {
      case "foo":
        return Atom.#foo(vnode);
    }
  }

  static #foo(vnode: VNode) {
    const { tag, attrs, children } = vnode;
    return `<${tag}${obj2str(attrs)}>${children}</${tag}>`;
  }
}
