# Neo Typing Test

A modern, interactive typing test website with a stunning neo glowing typewriter aesthetic. Test your typing speed and accuracy in a visually captivating digital environment.

## Features

- **Multiple Test Types**: Choose from timed tests, word count tests, quote tests, or arcade mode
- **Flexible Duration**: Test options from 30 seconds to 10 minutes
- **Arcade Mode**: Gamified typing with points, combos, levels, and a racing clock
- **Real-time Feedback**: See your WPM (Words Per Minute) and accuracy as you type
- **Visual Feedback**: Characters turn green for correct typing and red for errors
- **Neo Aesthetic**: Glowing cyan text, dark background, and particle effects
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Multiple Texts**: 10 different tech-themed passages and 10 inspirational quotes
- **Detailed Results**: Comprehensive statistics after each test
- **Word Count Tracking**: Monitor your progress in word-based tests
- **High Score System**: Track your best arcade mode scores locally

## How to Use

1. **Open the Website**: Simply open `index.html` in your web browser
2. **Choose Test Options**: Select your preferred test duration and type
   - **Timed Tests**: 30s, 60s, 2min, 5min, or 10min
   - **Word Tests**: Type a specific number of words (10-1000)
   - **Quote Tests**: Type inspirational quotes
   - **Arcade Mode**: Race against the clock with increasing difficulty
3. **Start the Test**: Click the "START" button to begin
4. **Type the Text**: Type the displayed text as accurately as possible
5. **Monitor Progress**: Watch your WPM, accuracy, and progress in real-time
6. **View Results**: After completing the test, see your detailed results
7. **Try Again**: Click "NEW TEST" to start another round

## Controls

- **START**: Begin a new typing test
- **RESET**: Clear the current test and return to initial state
- **NEW TEST**: Start a fresh test after viewing results
- **Test Duration**: Choose from 30s, 60s, 2min, 5min, or 10min
- **Test Type**: Select between Timed, Words, Quote, or Arcade tests
- **Word Count**: Set target word count for word-based tests (10-1000)

## Arcade Mode

The arcade mode adds exciting gamification elements:

- **Racing Clock**: A red clock indicator chases your progress - stay ahead to survive!
- **Points System**: Earn points for correct characters, combos, accuracy, and levels
- **Combo Multiplier**: Build combos by typing accurately - errors reset your combo
- **Level Progression**: Level up every 3 texts with increasing difficulty
- **Speed Requirements**: Meet minimum WPM requirements or face combo penalties
- **High Score Tracking**: Your best scores are saved locally
- **Visual Feedback**: Animated progress bar, combo flashes, and level-up effects

**Game Mechanics:**
- Type through 10 short, varied texts
- The clock speeds up with each level
- Maintain accuracy to keep your combo multiplier
- Beat the clock to advance to the next text
- Score points based on speed, accuracy, and combos

## Statistics Tracked

- **WPM (Words Per Minute)**: Your typing speed
- **Accuracy**: Percentage of correctly typed characters
- **Total Words**: Number of words typed
- **Errors**: Number of typing mistakes made

## Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies required
- **Orbitron Font**: Futuristic monospace font for the neo aesthetic
- **Canvas Animation**: Floating particles in the background
- **Real-time Calculations**: Instant WPM and accuracy updates
- **Mobile Optimized**: Touch-friendly interface

## Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## File Structure

```
Typing Test/
├── index.html      # Main HTML file
├── styles.css      # CSS styling with neo aesthetic
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization

You can easily customize the typing test by:

1. **Adding New Texts**: Edit the `texts` array in `script.js`
2. **Changing Colors**: Modify the CSS variables in `styles.css`
3. **Adjusting Timer**: Change the `timeLeft` value in the JavaScript
4. **Modifying Effects**: Adjust particle count and animation parameters

## Performance

The website is optimized for smooth performance with:
- Efficient DOM manipulation
- Optimized animations using requestAnimationFrame
- Minimal memory usage
- Fast real-time calculations

Enjoy testing your typing skills in this beautiful neo digital environment!
