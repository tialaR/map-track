# Clean Code — Complete Guide to Best Practices (JS/TS/React)

This guide exists to ensure:

- **Readability**
- **Maintainability**
- **Predictability**

- **Trust**

> Clean code isn't about theory, perfect architecture, or extreme performance.
> It's about **people who can understand, maintain, and evolve the code**.

---

## PILLARS OF CLEAN CODE

1. **Readability**
2. **Maintainability**
3. **Predictability**

4. **Trust**

### What Clean Code is NOT

- A rigid manual
- Massive structure
- Small code
- Complex architecture
- Extreme performance

---

## PRINCIPLES FOR TEAMWORK

1. Automated testing
2. Code review
3. Constant refactoring
4. **KISS (simplicity)**
5. Short iterations

---

# NAMING (MOST IMPORTANT RULE)

## Giving highly descriptive names to variables and functions

### ❌ Wrong

```tsx
const d = getDados();
```

### ✅ Correct

```tsx
const users = getUsersFromDatabase();
```

> More readable code
> Facilitates maintenance
> Reduces the need for comments

---

## Avoid generic names

❌ Always avoid:

```tsx
data;
response;
list;
item;
args;
params;
```

### ❌ Wrong

```tsx
const data = getUsers();
```

### ✅ Correct

```tsx
const users = getUsers();
```

---

## Descriptive variables (even if the name gets long)

### ❌ Wrong

```tsx
const total = price * 0.1;
```

### ✅ Correct

```tsx
const discountPercentage = 0.1;
const totalDiscount = price * discountPercentage;
```

---

## Booleans must be questions

### Rules

- Start with `is`, `has`, `does`, `should`
- Must make sense when read with `if`

### ❌ Wrong

```tsx
const loading = true;
```

### ✅ Correct

```tsx
const isFetchingUsers = true;
```

```tsx
if (isFetchingUsers) { ... }
```

---

## Cause ❌ Effect

### ❌ Wrong (effect)

```tsx
const isButtonDisabled = true;
```

### ✅ Correct (cause)

```tsx
const isFormSubmitting = true;
```

> Name the reason, not the visual consequence.

---

## Code ALWAYS in English

### ❌ Wrong

```tsx
const usuariosAtivos = true;
```

### ✅ Correct

```tsx
const hasActiveUsers = true;
```

✔ Facilitates collaboration
✔ Improves accessibility
✔ Essential for career

---

# FUNCTIONS

## Each function does ONE thing

### ❌ Wrong

```tsx
function createUser(user) {
  validateUser(user);
  saveUser(user);
  sendEmail(user);
}
```

### ✅ Correct

```tsx
function createUser(user) {
  validateUser(user);
  saveUser(user);
}

function notifyUser(user) {
  sendWelcomeEmail(user);
}
```

---

## Function name clearly states what it does

### ❌ Wrong

```tsx
function handleUser() {}
```

### ✅ Correct

```tsx
function createUserAccount() {}
```

---

## Names should describe side effects

### ❌ Wrong

```tsx
function saveUser() {}
```

### ✅ Correct

```tsx
function saveUserAndRedirectToDashboard() {}
```

---

## Avoid selector parameters

### ❌ Wrong

```tsx
function updateUser(user, shouldNotify) {
  if (shouldNotify) sendEmail();
}
```

### ✅ Correct

```tsx
function updateUser(user) {}

function updateUserAndNotify(user) {}
```

---

# DRY — Avoid duplication

### ❌ Incorrect

```tsx
if (user.age >= 18) allow();

if (admin.age >= 18) allow();
```

### ✅ Correct

```tsx
function isAdult(person) {
  return person.age >= 18;
}
```

---

# Dead code should be removed

### ❌ Wrong

```tsx
// function oldLogic() {}
```

### ✅ Correct

```tsx
// removed
```

> Commented code is historical garbage.

---

# Vertical separation (vertical scope)

### ❌ Wrong

```tsx
function helper() {}

function main() {
  helper();
}
```

### ✅ Correct

```tsx
function main() {
  helper();
}

function helper() {}
```

> File should be read from top to bottom.

---

# Avoid inconsistency

### ❌ Wrong

```tsx
getUser();
fetchProducts();
loadOrders();
```

### ✅ Correct

```tsx
getUser();
getProducts();
getOrders();
```

> There should be a pattern.
> Avoid inconsistency.

---

# Avoid obscure purposes

### ❌ Wrong

```tsx
function process() {}
```

### ✅ Correct

```tsx
function calculateInvoiceTotal() {}
```

---

# CONDITIONALS

## Avoid negations

### ❌ Wrong

```tsx
if (!isUserAuthenticated) return;
```

### ✅ Correct

```tsx
if (isUserAuthenticated === false) return;
```

---

## Early return > else

### ❌ Wrong

```tsx
if (isValid) {
  save();
} else {
  showError();
}
```

### ✅ Right

```tsx
if (isValid) {
  save();
  return;

  showError();
}
```

---

## Avoid nested conditionals

### ❌ Wrong

```tsx
if (user) {
  if (user.isAdmin) {
    if (user.isActive) {
    }
  }
}
```

### ✅ Correct

```tsx
if (!user || !user.isAdmin || !user.isActive) return;
```

---

# MAGIC NUMBERS

### ❌ Wrong

```tsx
setTimeout(fetchData, 3000);
```

### ✅ Correct

```tsx
const THREE_SECONDS_IN_MS = 3000;
setTimeout(fetchData, THREE_SECONDS_IN_MS);
```

> Always specify **format and unit**

---

# PARAMETERS & DESTRUCTURING

### ❌ Wrong

```tsx
function createUser(name, email, age) {}
```

### ✅ Correct

```tsx
function createUser({ name, email, age }: CreateUserParams) {}
```

> Avoids refactoring
> Scalable
> More readable

---

# COMMENTS vs DOCUMENTATION

## Comments should NOT explain what, but why

## Should only be used in extreme cases

### ❌ Wrong

```tsx
// sums two numbers
function sum(a, b) {
  return a + b;
}
```

### ✅ Certo (por quê)

```tsx
// workaround para bug da lib XYZ
```

---

# Avoid shady Syntactic Sugar

### ❌ Wrong

```tsx
const isValid = !!value;
const total = +price;
```

### ✅ Right

```tsx
const isValid = Boolean(value);
const total = Number(price);
```

---

# CLEAN CODE IN REACT

## Decouple components

### ❌ Wrong

```tsx
function Page() {
  const data = useFetch();
  return <Header data={data} />;
}
```

### ✅ Right

```tsx
function Page() {
  const data = useFetch();
  return <Header onLogout={handleLogout} />;
}
```

---

## Pure Components

### ❌ Wrong

```tsx
function Header() {
  const user = useContext(AuthContext);
}
```

### ✅ Correct

```tsx
function Header({ onLogout }) {
  return <button onClick={onLogout}>Logout</button>;
}
```

> Can be moved anywhere
> Does not depend on context

---

## Functions and Events — on / handle

### ❌ Wrong

```tsx
function submit() {}
```

### ✅ Correct

```tsx
function handleSubmit() {}
```

```tsx
<Button onSubmit={onSubmitForm} />
```

---

## Composition > Configuration

### ❌ Configuration

```tsx
<Input hasIcon hasError />
```

### ✅ Composition

```tsx
<Input>
  <Input.Icon />

  <Input.Field />
  <Input.Error />
</Input>
```

---

## Conditionals outside of JSX

### ❌ Wrong

```tsx
{
  user && user.isAdmin && <Admin />;
}
```

### ✅ Correct

```tsx
const shouldShowAdmin = user?.isAdmin;

return shouldShowAdmin && <Admin />;
```

---

# FINAL RULE

> If the code needs explaining, it's not clean enough.

Clean Code is a **habit**, not a technique.
