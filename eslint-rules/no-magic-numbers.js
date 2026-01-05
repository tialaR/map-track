module.exports = {
  create(context) {
    return {
      Literal(node) {
        if (
          typeof node.value === "number" &&
          node.value !== 0 &&
          node.value !== 1
        ) {
          context.report({
            node,
            message:
              "Magic number detected. Extract to a named constant with unit (ADR-002).",
          });
        }
      },
    };
  },
};
