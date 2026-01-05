module.exports = {
  create(context) {
    return {
      IfStatement(node) {
        if (node.parent.type === "IfStatement") {
          context.report({
            node,
            message:
              "Nested conditional detected. Extract rule to variable or function (ADR-002).",
          });
        }
      },
    };
  },
};
