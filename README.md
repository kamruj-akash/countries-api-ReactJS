---
# Countries API
Provides information about all countries, specific country by code or name, or by language.
---

## Table of Contents

- [APIs Used](#apis-used)
- [Endpoints](#endpoints)

  - https://openapi.programming-hero.com/api/all
  - https://openapi.programming-hero.com/api/alpha/116
  - https://openapi.programming-hero.com/api/lang/english
  - https://openapi.programming-hero.com/api/name/bangladesh

- [Usage](#usage)
- [Getting Started](#getting-started)
- [Example Responses](#example-responses)

---

## APIs Used

These are the Programming Hero APIs this project interacts with:

| Endpoint               | Purpose                                                              |
| ---------------------- | -------------------------------------------------------------------- |
| `/api/all`             | Fetches data on **all countries**.                                   |
| `/api/alpha/{code}`    | Fetches data about a country by its **ISO alpha-code** (e.g. `116`). |
| `/api/lang/{language}` | Fetches countries where the specified **language** is spoken.        |
| `/api/name/{name}`     | Fetches data on a country (or countries) by its **common name**.     |

---

## Endpoints

### `/api/all`

- **URL**: `GET /api/all`
- **Description**: Returns an array of all countries and their information: name, code, region, population, etc.

### `/api/alpha/{code}`

- **URL**: `GET /api/alpha/{code}`
- **Parameter**:

  - `code` (string or numeric) — the ISO alpha code of the country (e.g. `116`)

- **Description**: Returns detailed data for the country identified by that ISO code.

### `/api/lang/{language}`

- **URL**: `GET /api/lang/{language}`
- **Parameter**:

  - `language` (string) — the language name (e.g. `english`)

- **Description**: Returns the list of countries that speak the given language.

### `/api/name/{name}`

- **URL**: `GET /api/name/{name}`
- **Parameter**:

  - `name` (string) — the common name of the country (e.g. `bangladesh`)

- **Description**: Return data for country or countries whose name matches the supplied parameter.

---

## Usage

Here’s how you might use these endpoints in your app (JavaScript / fetch example):

```js
// Fetch all countries
fetch("https://openapi.programming-hero.com/api/all")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Fetch country by ISO code
fetch("https://openapi.programming-hero.com/api/alpha/116")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Fetch countries by language
fetch("https://openapi.programming-hero.com/api/lang/english")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Fetch country by name
fetch("https://openapi.programming-hero.com/api/name/bangladesh")
  .then((res) => res.json())
  .then((data) => console.log(data));
```
