module.exports = {
  create(context) {
    return {
      IfStatement(node) {
        if (node.test.type === "UnaryExpression") {
          context.report({
            node,
            message:
              "Negated conditional detected. Use affirmative auxiliary variable (ADR-002).",
          });
        }
      },
    };
  },
};
