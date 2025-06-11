
# Wellington County Wedding Guide

A simple, static website for wedding planning and vendor discovery in Wellington County, Ontario.

## Files Structure

- `index.html` - Main homepage with hero section and category browsing
- `budget.html` - Wedding budget planning tool
- `style.css` - Main stylesheet with responsive design
- `script.js` - Basic JavaScript for interactivity
- `budget.js` - Budget tracker functionality

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Budget Planner**: Interactive tool to track wedding expenses
- **Category Browsing**: Easy navigation for different vendor types
- **Clean Design**: Modern, wedding-themed aesthetic
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## Converting to WordPress

This static site is designed to be easily converted to a WordPress theme:

### 1. File Structure for WordPress
```
wp-content/themes/wellington-wedding/
├── index.php (from index.html)
├── header.php (extract header section)
├── footer.php (extract footer section)
├── style.css (main stylesheet)
├── functions.php (theme functions)
├── page-budget.php (from budget.html)
└── assets/
    ├── js/
    │   ├── script.js
    │   └── budget.js
    └── css/
        └── additional styles if needed
```

### 2. WordPress Conversion Steps

1. **Create header.php**: Extract the `<head>` and header HTML
2. **Create footer.php**: Extract the footer HTML and closing tags
3. **Convert HTML pages**: Replace with PHP template files
4. **Add WordPress functions**: Use `get_header()`, `get_footer()`, etc.
5. **Enqueue scripts/styles**: Use `wp_enqueue_script()` and `wp_enqueue_style()`

### 3. Key WordPress Functions to Add

```php
// In functions.php
function wellington_wedding_scripts() {
    wp_enqueue_style('wellington-style', get_stylesheet_uri());
    wp_enqueue_script('wellington-script', get_template_directory_uri() . '/assets/js/script.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'wellington_wedding_scripts');
```

### 4. Database Integration (Optional)
- Create custom post types for vendors
- Add custom fields for budget tracking
- Use WordPress forms for user submissions

## Customization

The design uses CSS custom properties (variables) for easy color theming:
- Primary color: `#e91e63` (pink)
- Secondary colors defined in CSS
- Font families: Playfair Display (headings) and Inter (body)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Getting Started

1. Upload files to your web server
2. Open `index.html` in a web browser
3. Customize colors and content as needed
4. For WordPress conversion, follow the steps above

## Notes

- All images use placeholder SVGs or emojis for simplicity
- JavaScript is vanilla (no jQuery required)
- CSS uses Flexbox and Grid for layout
- Mobile-first responsive design approach
