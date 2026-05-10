# 🧪 Kewi E-Commerce - Cypress Test Suite

Automated end-to-end testing for [Kewi](https://kewi.ps) — a luxury bags and accessories e-commerce platform.

---

##  Project Structure

```
cypress/
├── e2e/
│   ├── homePage.cy.js        # Navigation & UI tests
│   ├── selectProduct.cy.js   # Browse & add single product
│   ├── multiOrder.cy.js      # Add multiple products & checkout
│   ├── signUp.cy.js          # Data-driven sign up tests
│   └── apiMock.cy.js         # API intercept & mock tests
├── fixtures/
│   ├── products.json         # Mocked products data
│   └── categories.json       # Mocked categories data
├── support/
│   ├── commands.js           # Custom commands
│   ├── index.d.ts            # TypeScript annotations
│   └── e2e.js
├── cypress.config.js
├── cypress.env.json          #  Not committed to Git
└── package.json
```

---

## ⚙️ Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create `cypress.env.json`
```json
{
  "PHONE": "+972xxxxxxxxx",
  "PASSWORD": "your-password",
  "NAME": "Your Name",
  "CITY": "Your City"
}
```
> This file is in `.gitignore` and should never be committed.

### 3. Run tests
```bash
# Open Cypress UI
npm run cypress:open

# Run in headless mode
npm run test
```

---

##  Custom Commands

| Command | Description |
|---------|-------------|
| `cy.LoginToApp()` | Logs in using session and visits home page |
| `cy.AddToCart()` | Opens cart, fills checkout form and places order |

---

##  Test Cases

###  Home Page (`homePage.cy.js`)
- Verifies all navigation links are visible and clickable (Home, Products, Orders, About)
- Verifies product categories are displayed (Kéwi wallets)
- Verifies size filter works (Medium)

###  Select Product (`selectProduct.cy.js`)
- Navigates to Products → Kéwi bags
- Searches for **COACH TOTEBAG**
- Opens product page and adds to cart
- Completes checkout via `cy.AddToCart()`

###  Multi Product Order (`multiOrder.cy.js`)
- Adds **Lady Dior** from Kéwi bags
- Navigates back and adds **LV wallet 12** from Kéwi wallets
- Completes checkout with multiple items

### Sign Up - Data Driven (`signUp.cy.js`)
- Tests sign up form with **valid** and **invalid** phone numbers
- Uses inline `testData` array for data-driven approach

| Case | Phone | Expected |
|------|-------|----------|
| Invalid | `0555` | Error message visible |
| Valid | `0599353520` | No error message |

### API Mock (`apiMock.cy.js`)
- Intercepts `GET /products` and mocks with `products.json` fixture
- Intercepts `GET /categories` and mocks with `categories.json` fixture

---

## Security

- Credentials stored in `cypress.env.json` (gitignored)
- CI/CD uses GitHub Secrets for sensitive data
- Never hardcode passwords or phone numbers in test files

---

## CI/CD

Tests run automatically on every push to `main` via GitHub Actions.

```yaml
# .github/workflows/cypress.yml
name: Cypress Tests
on:
  push:
    branches: [main]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - uses: cypress-io/github-action@v6
        with:
          browser: chrome
        env:
          CYPRESS_PHONE: ${{ secrets.CYPRESS_PHONE }}
          CYPRESS_PASSWORD: ${{ secrets.CYPRESS_PASSWORD }}
          CYPRESS_NAME: ${{ secrets.CYPRESS_NAME }}
          CYPRESS_CITY: ${{ secrets.CYPRESS_CITY }}
```

### GitHub Secrets Required
| Secret | Description |
|--------|-------------|
| `CYPRESS_PHONE` | Login phone number |
| `CYPRESS_PASSWORD` | Login password |
| `CYPRESS_NAME` | Checkout name |
| `CYPRESS_CITY` | Checkout city |

---

## Tech Stack

- [Cypress](https://www.cypress.io/) v15
- Node.js
- GitHub Actions

---

##  Author

**Roba** — QA Engineer
