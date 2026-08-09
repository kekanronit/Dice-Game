# 🎲 Dice Game

A fun and interactive **Dice Game** built using **React.js, Vite, and Styled Components**. The game allows players to select a number, roll the dice, and earn or lose points based on whether the selected number matches the dice result.

## 📌 About

Dice Game is a simple React-based web application created to practice **React fundamentals, component-based development, state management, event handling, and conditional rendering**.

The player selects a number from the available options and then rolls the dice. If the selected number matches the rolled dice number, the player gains **1 point**. If the numbers do not match, the player loses **1 point**.

The application also provides a rules section that can be displayed or hidden whenever required.

## ✨ Features

* 🎲 Roll a virtual dice
* 🔢 Select a number before rolling
* 🏆 Score tracking
* ➕ Gain 1 point for a correct prediction
* ➖ Lose 1 point for an incorrect prediction
* 🔄 Reset score
* 📖 Show/Hide game rules
* ⚠️ Validation when no number is selected
* 🖥️ Interactive and component-based UI
* 🎨 Styled using Styled Components

## 🎮 How to Play

1. Click **Play Now** to start the game.
2. Select a number from the available options.
3. Click the dice to roll.
4. The dice generates a random number between **1 and 6**.
5. If your selected number matches the dice result:

   * You get **+1 point**.
6. If the numbers don't match:

   * You get **-1 point**.
7. Select another number and continue playing.
8. Use **Reset** to reset the score.
9. Click **Show Rules** to view the game rules.

## 🧮 Scoring

| Result                              | Score |
| ----------------------------------- | ----: |
| Selected number matches dice        |    +1 |
| Selected number does not match dice |    -1 |

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **Vite**
* **Styled Components**
* **HTML5**
* **CSS3**

The project uses React 19, Vite, and Styled Components.

## 🧠 React Concepts Used

This project demonstrates:

* Functional Components
* JSX
* `useState`
* Props
* Event Handling
* Conditional Rendering
* State Management
* Component Reusability
* Dynamic UI Updates
* Random Number Generation

## 📂 Project Structure

```text
Dice-Game/
│
├── public/
│   └── Images/
│       ├── Dice/
│       │   ├── dice_1.png
│       │   ├── dice_2.png
│       │   ├── dice_3.png
│       │   ├── dice_4.png
│       │   ├── dice_5.png
│       │   └── dice_6.png
│       │
│       └── dices.png
│
├── src/
│   ├── Components/
│   │   ├── GamePlay.jsx
│   │   ├── NumberSelector.jsx
│   │   ├── RollDice.jsx
│   │   ├── Rules.jsx
│   │   ├── StartGame.jsx
│   │   └── TotalScore.jsx
│   │
│   ├── styled/
│   │   └── button.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

The repository contains separate React components for gameplay, number selection, dice rolling, rules, starting the game, and score display.

## 📄 Main Components

### `StartGame.jsx`

Displays the starting screen with the dice image, game title, and **Play Now** button.

### `GamePlay.jsx`

Handles the main game logic, including:

* Score management
* Number selection
* Dice rolling
* Random number generation
* Score calculation
* Reset functionality
* Rules visibility

### `NumberSelector.jsx`

Provides the player with numbers to choose before rolling the dice.

### `RollDice.jsx`

Displays the current dice and triggers the dice-roll functionality.

### `TotalScore.jsx`

Displays the player's current score.

### `Rules.jsx`

Displays the rules of the game when the player chooses to show them.

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### 1. Clone the Repository

```bash
git clone https://github.com/kekanronit/Dice-Game.git
```

### 2. Navigate to the Project

```bash
cd Dice-Game
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

## 📦 Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Run ESLint

```bash
npm run lint
```

### Preview Production Build

```bash
npm run preview
```

These scripts are configured in the project's `package.json`.

## 🎯 Learning Objectives

This project was created to strengthen practical knowledge of:

* React.js
* JavaScript
* React Hooks
* `useState`
* Props
* Component-based architecture
* Event handling
* Conditional rendering
* State management
* Styled Components
* Random number generation
* Vite

## 🔮 Future Improvements

Possible future improvements include:

* Add multiplayer mode
* Add difficulty levels
* Add high-score tracking
* Add game timer
* Add sound effects
* Add animations when rolling the dice
* Add player names
* Add score history
* Add responsive improvements
* Add leaderboard functionality

## 👨‍💻 Author

**Ronit Kekan**

GitHub: [@kekanronit](https://github.com/kekanronit)

---

⭐ If you enjoyed this project, consider giving the repository a star!

**Built with React ⚛️ and JavaScript 💻**

