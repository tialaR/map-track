const FORBIDDEN_NAMES = ["process", "execute", "handle", "doSomething"];

module.exports = {
  create(context) {
    return {
      FunctionDeclaration(node) {
        const name = node.id?.name;
        if (FORBIDDEN_NAMES.includes(name)) {
          context.report({
            node,
            message: `Obscure function name "${name}". Function names must fully describe their responsibility (ADR-002).`,
          });
        }
      },
    };
  },
};
