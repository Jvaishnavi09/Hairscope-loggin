🧪 HairScope Lab Login System

A secure React-based login system with a lab dashboard, animated sliding doors UI, and a countdown timer that automatically logs out and blocks users after session expiry.

✨ Features

✅ Animated Login Screen – Sliding doors + fingerprint animation using Framer Motion

✅ Lab Dashboard – Displays a protected dashboard once authenticated
✅ Session Timer – 10-minute session (configurable) with countdown
✅ Auto Logout – On timeout, user is logged out and blocked from re-login
✅ LocalStorage Persistence – Stores login state, lock state, and timer across refreshes
✅ Responsive UI – Tailwind CSS styling for modern, clean look

🛠️ Tech Stack

React 19 (Frontend library)

React Router DOM (Routing & navigation)

Framer Motion (Animations)

Tailwind CSS (Styling)

LocalStorage (Persistent state management)

⚙️ Installation & Setup

Clone the repo:

git clone https://github.com/<your-username>/hairscope-login.git
cd hairscope-login

Install dependencies:

npm install

Start development server:

npm run dev

🔐 Usage

Launch the app → you’ll see the animated login screen.

Enter password → currently set to:

1234

Sliding doors reveal the Lab Dashboard.

A 10-minute session timer starts counting down.

On timeout → user is auto-logged out + blocked (cannot log back in).

Logout button also ends the session manually.

🧩 Project Structure
hairscope-login/
├── src/
│ ├── components/
│ │ ├── LoginScreen.jsx # Animated login with doors
│ │ ├── LabDashboard.jsx # Protected dashboard
│ │ └── Timer.jsx # Countdown timer
│ ├── App.jsx # Main app logic
│ ├── main.jsx # React entry point
│ └── index.css # Tailwind setup
└── package.json

🚀 Future Improvements

🔑 Replace hardcoded password with real Auth system (Firebase / JWT)

⏱️ Configurable session length per user

🌐 Backend integration for secure session tracking

📊 Add lab-specific data and analytics inside dashboard
