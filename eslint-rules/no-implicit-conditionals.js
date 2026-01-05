module.exports = {
  create(context) {
    return {
      IfStatement(node) {
        if (node.test.type === "Identifier") {
          context.report({
            node,
            message:
              "Implicit conditional detected. Use an explicit boolean variable (ADR-002).",
          });
        }
      },
    };
  },
};
