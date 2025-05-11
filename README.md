# Car Ad Posting Form (React Component)

This project is a fully-featured and responsive **Car Ad Posting Form** built with React. It allows users to post an advertisement for selling a car by filling out detailed information including brand, model, fuel type, transmission, owners, description, photos, and location.

## 🧩 Features

- Select car **brand**, **model**, and **variant** from pre-populated dropdowns.
- Choose **fuel type**, **transmission**, and **number of owners** using intuitive box selectors.
- Enter key car details like **year**, **kilometers driven**, **price**, **title**, and **description**.
- Upload up to **20 car photos**.
- Add **location information** with confirmation.
- Final form submission with a POST button that validates input and simulates submission.

## 🛠️ Technologies Used

- **ReactJS** – Component-based frontend architecture.
- **Tailwind CSS** – Utility-first styling for rapid and responsive UI development.
- **Custom Components**:
  - `CarBrandForm`
  - `InputData`
  - `BoxSelector`
  - `AdTitleInput`
  - `DescriptionText`
  - `PriceInput`
  - `PhotoUploader`
  - `LocationSelector`
  - `ConfirmLocationForm`

## 🧱 Folder Structure

src/
├── components/
│ ├── Form.jsx
│ ├── carsData.jsx
│ ├── inputFormate.jsx
│ ├── boxSelect.jsx
│ ├── adTitleInput.jsx
│ ├── descriptionText.jsx
│ ├── priceInput.jsx
│ ├── imageUpload.jsx
│ ├── location.jsx
│ └── ProfileData.jsx


## 🖥️ How It Works

1. User selects a car brand, model, and variant.
2. Provides key car information including year and kilometers driven.
3. Selects fuel type and transmission.
4. Describes the car ad using title and long description.
5. Uploads photos using an image uploader component.
6. Confirms the location.
7. Presses **POST** button to submit the form.

## 🚀 Getting Started

### Prerequisites

- npm installed

### Installation

```bash
npm install
npm run dev
