module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow hooks that do not use React state or effects",
    },
    schema: [],
  },

  create(context) {
    return {
      FunctionDeclaration(node) {
        const isHook = node.id?.name?.startsWith("use");

        if (!isHook) return;

        const sourceCode = context.getSourceCode().getText(node);

        const usesReactHook =
          sourceCode.includes("useState") ||
          sourceCode.includes("useEffect") ||
          sourceCode.includes("useReducer") ||
          sourceCode.includes("useMemo") ||
          sourceCode.includes("useCallback");

        if (!usesReactHook) {
          context.report({
            node,
            message:
              "❌ Fake hook detected. Hooks must manage state or effects. Use services or utils instead.",
          });
        }
      },
    };
  },
};
