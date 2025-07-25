---
id: modules/sales/sales-invoice
title: Sales Invoice
---

# Sales Invoice

# Sales Invoice Module – Functional Specification

## 1. Module Name
**Sales Invoice**

---

## 2. Purpose
To enable users to create, manage, and finalize sales transactions by generating invoices for goods or services sold.

---

## 3. Key Features

### Customer Selection
- Search or scan customer ID

### Item Entry
- Scan barcode or search item
- Auto-populate item details (name, price, stock)
- Quantity and price override (if permitted)

### Cart Management
- Add/remove items
- Apply discounts (item-level or invoice-level)
- View subtotal, tax, and total

### Payment Processing
- Multiple payment modes (cash, card, digital wallet, credit)
- Split payments
- Payment on delivery or credit sale

### Invoice Generation
- Auto-generate unique invoice number
- Print or email invoice
- Save to database with timestamp and user ID

### Post-Sale Actions
- Print duplicate invoice
- View invoice history
- Initiate return or exchange

---

## 4. UI Components

### Main Screen
- Customer field
- Item search bar
- Cart display
- Numpad for quantity/price
- Total summary
- Checkout button

### More Menu
- Apply discount
- Add remarks
- View stock
- Suspend/Resume invoice

---

## 5. Validations

- Prevent checkout if cart is empty
- Validate stock availability
- Restrict price override to authorized roles
- Ensure payment amount matches total

---

## 6. Error Handling

- Show error if item not found
- Alert if stock is insufficient
- Warn if customer has outstanding dues (optional)

---

## 7. Audit & Logs

- Log invoice creation, edits, and deletions
- Track user ID, terminal ID, and timestamps

---

## 8. Integration Points

- Inventory module (for stock updates)
- Customer module (for loyalty, credit)
- Accounting module (for revenue posting)
- Tax engine (for VAT/GST calculations)

