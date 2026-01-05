module.exports = {
  create(context) {
    return {
      FunctionDeclaration(node) {
        const name = node.id?.name;

        if (
          name?.startsWith("on") &&
          node.parent.type !== "ExportNamedDeclaration"
        ) {
          context.report({
            node,
            message:
              "`on*` functions must be external callbacks or actions (ADR-002).",
          });
        }

        if (
          name?.startsWith("handle") &&
          node.parent.type === "ExportNamedDeclaration"
        ) {
          context.report({
            node,
            message:
              "`handle*` functions must be internal event handlers only (ADR-002).",
          });
        }
      },
    };
  },
};
