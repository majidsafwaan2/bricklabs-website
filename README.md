# BrickLabs Website

A modern, comprehensive website for a Lego Technic community featuring educational content, competitions, and community features.

## Features

- **Home Page**: Hero section, features overview, and social media links
- **Library**: 50+ detailed articles with engineering principles, external links, and search functionality
- **Competition**: "Build Your Dreams" competition with submission portal and detailed rules
- **Forum**: Community discussion platform with user accounts
- **Sponsorship**: Business opportunities and contact forms
- **Charity**: Impact tracking and donation information
- **Creator Opportunities**: Application system for content creators
- **Chatbot**: AI-powered assistant using Google Gemini API
- **Responsive Design**: Mobile-first design with modern UI/UX

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **AI**: Google Gemini API
- **Testing**: Jest, React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd BrickLabs-Website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Add your Gemini API key to `.env.local`:
```
GEMINI_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
BrickLabs-Website/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
├── data/                  # Static data files
├── public/                # Static assets
└── tests/                 # Unit tests
```

## Key Features

### Library System
- 50 detailed articles covering various Lego Technic builds
- Engineering principles explained with external links
- Basic/Advanced mode toggle
- Search and category filtering
- Links to Wikipedia, YouTube tutorials, and external resources

### Competition Platform
- Complete competition management system
- Submission portal with file uploads
- Detailed rules and guidelines
- Prize management and winner selection

### Community Features
- User accounts and authentication
- Forum with categories and search
- Community statistics and trending topics

### AI Chatbot
- Powered by Google Gemini API
- Contextual responses about website features
- Real-time conversation interface

## Required Images

The following images need to be uploaded to the `public/images/` directory:

### Hero Images
- `hero-bg.jpg` - Background image for hero sections
- `logo.png` - BrickLabs logo (beige background with red Lego brick)

### Library Images
- `library/gearbox.jpg` - Gearbox mechanism build
- `library/pneumatic.jpg` - Pneumatic system build
- `library/robot.jpg` - Robot build
- `library/suspension.jpg` - Vehicle suspension system
- `library/steering.jpg` - Steering mechanism
- `library/conveyor.jpg` - Conveyor belt system
- `library/sorting.jpg` - Color sorting machine
- `library/crane.jpg` - Crane with winch
- `library/wind-turbine.jpg` - Wind turbine generator
- `library/door-system.jpg` - Automatic door system
- `library/ball-launcher.jpg` - Ball launcher mechanism
- `library/line-follower.jpg` - Line following robot
- `library/hydraulic-arm.jpg` - Hydraulic arm
- `library/solar-tracker.jpg` - Solar panel tracker
- `library/gear-reduction.jpg` - Gear reduction system
- `library/piano.jpg` - Touch sensor piano
- `library/transmission.jpg` - Automatic transmission
- `library/maze-robot.jpg` - Maze solving robot
- `library/gripper.jpg` - Pneumatic gripper
- `library/traffic-light.jpg` - LED traffic light
- `library/crawler.jpg` - Crawler vehicle
- `library/sound-robot.jpg` - Sound activated robot
- `library/clock.jpg` - Mechanical clock
- `library/temperature.jpg` - Temperature monitoring system
- `library/windmill.jpg` - Windmill with generator
- `library/lift.jpg` - Pneumatic lift system
- `library/rc-car.jpg` - Remote control car
- `library/feeder.jpg` - Automatic feeder
- `library/light-robot.jpg` - Light following robot
- `library/calculator.jpg` - Mechanical calculator
- `library/ultrasonic.jpg` - Ultrasonic distance sensor
- `library/sorting-machine.jpg` - Pneumatic sorting machine
- `library/gear-pump.jpg` - Gear pump
- `library/touch-game.jpg` - Touch sensor game
- `library/garage-door.jpg` - Automatic garage door
- `library/music-box.jpg` - Mechanical music box
- `library/solar-car.jpg` - Solar car
- `library/robot-arm.jpg` - Pneumatic robot arm
- `library/differential.jpg` - Gear differential
- `library/night-light.jpg` - Light sensor night light
- `library/computer.jpg` - Mechanical computer
- `library/compressor.jpg` - Pneumatic compressor
- `library/touch-lock.jpg` - Touch sensor lock
- `library/clockwork.jpg` - Gear clockwork
- `library/parking-sensor.jpg` - Ultrasonic parking sensor
- `library/hammer.jpg` - Pneumatic hammer
- `library/security.jpg` - Light sensor security system
- `library/counter.jpg` - Mechanical counter
- `library/door-opener.jpg` - Pneumatic door opener
- `library/speedometer.jpg` - Gear speedometer

### Competition Images
- `competition/hero.jpg` - Competition hero background
- `competition/trophy.jpg` - Trophy image
- `competition/participants.jpg` - People participating in competition
- `competition/prizes.jpg` - Prize showcase
- `competition/submission.jpg` - Submission process

### Community Images
- `forum/community.jpg` - Community discussion
- `forum/members.jpg` - Community members
- `forum/discussion.jpg` - Forum discussion

### Charity Images
- `charity/donation.jpg` - Donation process
- `charity/schools.jpg` - Schools receiving donations
- `charity/students.jpg` - Students using Lego sets
- `charity/impact.jpg` - Impact visualization

### Sponsorship Images
- `sponsorship/partnership.jpg` - Business partnership
- `sponsorship/opportunities.jpg` - Sponsorship opportunities
- `sponsorship/brands.jpg` - Partner brands

### Creator Images
- `creators/content.jpg` - Content creation
- `creators/collaboration.jpg` - Creator collaboration
- `creators/sets.jpg` - Lego Technic sets

### General Images
- `about/team.jpg` - Team photo
- `about/office.jpg` - Office/workspace
- `about/mission.jpg` - Mission statement visual
- `social/youtube.jpg` - YouTube channel preview
- `social/instagram.jpg` - Instagram feed preview
- `social/tiktok.jpg` - TikTok content preview

## Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The site can be deployed to Vercel, Netlify, or any other Next.js-compatible platform.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact us at example@gmail.com 