# Neo Typing Test

A modern, interactive typing test website with a stunning neo glowing typewriter aesthetic. Test your typing speed and accuracy in a visually captivating digital environment.

## Features

- **Multiple Test Types**: Choose from timed tests, word count tests, or quote tests
- **Flexible Duration**: Test options from 30 seconds to 10 minutes
- **Difficulty Modes**: Chill (simple words), Typist (normal), Ultra+ (complex words with punctuation)
- **Real-time Feedback**: See your WPM (Words Per Minute) and accuracy as you type
- **Visual Feedback**: Characters turn blue for correct typing and red for errors
- **Neo Aesthetic**: Glowing cyan text, dark background, and particle effects
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Multiple Texts**: Various passages and inspirational quotes
- **Detailed Results**: Comprehensive statistics after each test
- **Word Count Tracking**: Monitor your progress in word-based tests
- **Infinite Text**: Continuous typing for timed tests

## How to Use

1. **Open the Website**: Simply open `index.html` in your web browser
2. **Choose Test Options**: Select your preferred difficulty, duration, and type
   - **Difficulty**: Chill, Typist, or Ultra+
   - **Timed Tests**: 30s, 60s, 2min, 5min, or 10min
   - **Word Tests**: Type a specific number of words (10-1000)
   - **Quote Tests**: Type inspirational quotes
3. **Start the Test**: Click the "START" button to begin
4. **Type the Text**: Type the displayed text as accurately as possible
5. **Monitor Progress**: Watch your WPM, accuracy, and progress in real-time
6. **View Results**: After completing the test, see your detailed results
7. **Try Again**: Click "NEW TEST" to start another round

## Controls

- **START**: Begin a new typing test
- **RESET**: Clear the current test and return to initial state
- **NEW TEST**: Start a fresh test after viewing results
- **Difficulty**: Choose between Chill, Typist, or Ultra+ modes
- **Test Duration**: Choose from 30s, 60s, 2min, 5min, or 10min
- **Test Type**: Select between Timed, Words, or Quote tests
- **Word Count**: Set target word count for word-based tests (10-1000)

## Difficulty Modes

- **Chill**: Simple words, no punctuation - perfect for beginners
- **Typist**: Normal difficulty with standard vocabulary and punctuation
- **Ultra+**: Complex words and frequent punctuation - for advanced typists

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
- **Cumulative Statistics**: Stats persist across multiple text passages in timed tests

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

1. **Adding New Texts**: Edit the `texts` arrays in `script.js`
2. **Changing Colors**: Modify the CSS variables in `styles.css`
3. **Adjusting Timer**: Change the test duration options
4. **Modifying Effects**: Adjust particle count and animation parameters

## Performance

The website is optimized for smooth performance with:
- Efficient DOM manipulation
- Optimized animations using requestAnimationFrame
- Minimal memory usage
- Fast real-time calculations

Enjoy testing your typing skills in this beautiful neo digital environment!
