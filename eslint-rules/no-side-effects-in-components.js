module.exports = {
  meta: {
    type: "problem",
    messages: {
      sideEffect:
        "Side effects are not allowed inside React components. Move this logic to a hook or service.",
    },
  },

  create(context) {
    return {
      CallExpression(node) {
        const forbiddenCalls = [
          "fetch",
          "axios",
          "api",
          "localStorage",
          "sessionStorage",
        ];

        if (
          forbiddenCalls.includes(node.callee.name) &&
          context
            .getAncestors()
            .some(
              ancestor =>
                ancestor.type === "FunctionDeclaration" &&
                /^[A-Z]/.test(ancestor.id.name),
            )
        ) {
          context.report({
            node,
            messageId: "sideEffect",
          });
        }
      },
    };
  },
};
