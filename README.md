# Fit Log Web App

## Comprehensive Health & Fitness Assessment System

A comprehensive web-based application for anthropometric, metabolic, and cardiovascular evaluation with personalized exercise prescriptions and progress tracking.

## 📋 Overview

This Progressive Web Application (PWA) provides a complete health and fitness assessment system that allows users to:
- Analyze body composition with 4-component breakdown
- Evaluate health metrics and cardiovascular risk
- Assess fitness levels and establish training zones
- Generate personalized exercise prescriptions
- Track progress over time with historical data

## ✨ Features

### 🏋️ Body Composition Analysis
- Calculate BMI, WHR, and body fat percentage
- 4-component body composition breakdown (fat, muscle, bone, residual)
- Ideal weight calculation
- Skinfold measurements (Jackson & Pollock 7-site method)

### 🩺 Health Metrics Assessment
- Resting heart rate and blood pressure evaluation
- Blood glucose and cholesterol assessment
- BMR and VO₂ Max estimation
- Health risk classification

### 🎯 Fitness Evaluation
- Strength assessment with 1RM calculations
- Aerobic training zones determination
- TDEE calculation based on activity level
- Personalized goal setting

### 💊 Exercise Prescription
- Customized cardiovascular and strength training plans
- Caloric target recommendations
- Timeframe and weekly goal setting
- Specific exercise recommendations

### 📊 Progress Tracking
- Session history with data persistence
- Interactive progress charts
- Session comparison tools
- Data export capabilities (CSV/JSON)

## 🚀 Installation & Usage

### Online Access
Simply visit the hosted application URL (if available).

### Local Development
1. Clone the repository:
```bash
git clone https://github.com/souzamonteiro/health-fitness-assessment.git
```

2. Open `index.html` in a modern web browser.

3. No server required - works as a standalone web application.

### PWA Installation
- **Desktop**: Click the install prompt in your browser's address bar
- **Mobile**: Use "Add to Home Screen" from your browser menu
- **Offline**: Once installed, works completely offline

## 🛠️ Technical Stack

### Frontend
- **HTML5**: Semantic markup and PWA capabilities
- **CSS3**: Custom properties, Grid, Flexbox, responsive design
- **Vanilla JavaScript**: No frameworks, optimized performance

### Libraries
- **Chart.js**: Interactive data visualization
- **DataTables**: Advanced table functionality
- **ZangoDB**: IndexedDB wrapper for data persistence
- **Font Awesome**: Icon toolkit

### APIs
- **Web Storage API**: Local data persistence
- **IndexedDB**: Client-side database
- **Service Worker**: Offline functionality
- **Web Audio API** (planned): Audio feedback

## 📱 PWA Features

### Offline Capability
- Works without internet connection
- Service worker caches all assets
- Local data persistence

### Installable
- Add to home screen on mobile devices
- Desktop installation support
- App-like experience

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interface

## 🔧 Data Management

### Storage
- **LocalStorage**: User preferences and settings
- **IndexedDB**: Session history and progress data
- **CSV/JSON Export**: Data backup and analysis

### Privacy
- All data stored locally on user's device
- No external data transmission
- GDPR compliant

## 📖 Usage Guide

### First Time Setup
1. Navigate to "Body Composition" tab
2. Enter your basic information (height, weight, age, sex)
3. Add additional measurements as available
4. Click "Calculate Body Composition"

### Regular Use
1. Update measurements periodically
2. Use "Save Session" to track progress
3. Review historical data in "History & Progress" tab
4. Adjust goals based on progress

### Best Practices
- Measure at consistent times (morning, fasted)
- Use same measurement tools each time
- Update every 2-4 weeks for meaningful progress tracking
- Consult healthcare professionals for medical advice

## 🌍 Internationalization

### Supported Languages
- 🇺🇸 English (default)
- 🇧🇷 Portuguese (Português)
- 🇪🇸 Spanish (Español)

### Language Detection
- Automatic browser language detection
- Manual selection available
- Persistent user preference

## 🔄 Development

### Project Structure
```
www
├── css
│   ├── dataTables.min.css
│   └── fontawesome.min.css
├── favicon.ico
├── icons
│   ├── apple-touch-icon.png
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── favicon.ico
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-16x16.png
│   ├── icon-180x180.png
│   ├── icon-192x192.png
│   ├── icon-32x32.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   └── icon.svg
├── index.html
├── js
│   ├── chart.js
│   ├── dataTables.min.js
│   ├── i18n.js
│   ├── jquery-3.7.0.min.js
│   └── zangodb.min.js
├── manifest.json
├── sw.js
├── tree.txt
└── webfonts
    ├── fa-brands-400.eot
    ├── fa-brands-400.svg
    ├── fa-brands-400.ttf
```

### Building
No build process required - works as static files.

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- iOS Safari 11+
- Chrome for Android

## 📄 License

Copyright © 2025 Roberto Luiz Souza Monteiro. All rights reserved.

This project is licensed under the Apache 2.0 license.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Contribution Guidelines
- Follow existing code style
- Add comments for complex logic
- Update documentation as needed
- Test across different browsers

## 🐛 Reporting Issues

Found a bug or have a feature request?
1. Check existing issues
2. Provide detailed description
3. Include browser/device information
4. Steps to reproduce if applicable

## 📞 Support

For questions and support:
- GitHub Issues: [Repository Issues](https://github.com/souzamonteiro/fitlogwebapp.git)
- Email: Check author information in the application footer

## ⚠️ Disclaimer

This application is for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with any questions regarding medical conditions.

### Medical Disclaimer
- Calculations are estimates only
- Individual results may vary
- Not for diagnostic purposes
- Consult healthcare professionals for medical decisions

## 📈 Future Enhancements

### Planned Features
- Social sharing of progress
- Advanced analytics and insights
- Integration with fitness trackers
- Meal planning and nutrition tracking
- Video exercise demonstrations
- Community features

### Technical Improvements
- Enhanced data visualization
- Machine learning predictions
- API integrations
- Mobile app versions
- Voice interface support

## 🙏 Acknowledgments

- Medical and fitness professionals for validation
- Open source community for libraries and tools
- Beta testers for feedback and improvements

---

**Made with ❤️ for the health and fitness community**

*"Your health is an investment, not an expense."*