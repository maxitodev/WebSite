/**
 * CSS Optimization Script
 * 
 * This script helps identify and remove unused CSS classes to reduce bundle size.
 * Run with: node scripts/optimize-css.js
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// CSS class patterns to look for
const CSS_CLASS_REGEX = /(?:class(?:Name)?=["'][^"']*["']|@apply\s+[^;]+)/g;
const TAILWIND_CLASS_REGEX = /(?:^|\s)((?:hover:|focus:|active:|md:|lg:|xl:|2xl:|sm:|dark:)*[a-z-]+(?:-[a-z0-9]+)*(?:\/[0-9]+)?)/g;

async function analyzeCSSUsage() {
  console.log('🔍 Analyzing CSS usage...');
  
  // Find all TSX/JSX files
  const componentFiles = await glob('**/*.{tsx,jsx,ts,js}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });
  
  // Extract all used classes
  const usedClasses = new Set();
  
  for (const file of componentFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(CSS_CLASS_REGEX);
    
    if (matches) {
      matches.forEach(match => {
        const classes = match.match(TAILWIND_CLASS_REGEX);
        if (classes) {
          classes.forEach(cls => {
            usedClasses.add(cls.trim());
          });
        }
      });
    }
  }
  
  console.log(`✅ Found ${usedClasses.size} unique classes in use`);
  
  // Analyze globals.css for unused custom classes
  const globalsPath = path.join(process.cwd(), 'app/globals.css');
  if (fs.existsSync(globalsPath)) {
    const cssContent = fs.readFileSync(globalsPath, 'utf8');
    const customClasses = cssContent.match(/\.[\w-]+(?=\s*{)/g) || [];
    
    console.log('\n📊 Custom CSS Classes Analysis:');
    customClasses.forEach(cls => {
      const className = cls.substring(1); // Remove the dot
      const isUsed = [...usedClasses].some(used => used.includes(className));
      console.log(`${isUsed ? '✅' : '❌'} ${cls} - ${isUsed ? 'USED' : 'UNUSED'}`);
    });
  }
  
  // Generate optimization report
  const report = {
    totalClassesFound: usedClasses.size,
    analyzedFiles: componentFiles.length,
    timestamp: new Date().toISOString(),
    usedClasses: Array.from(usedClasses).sort()
  };
  
  fs.writeFileSync('css-usage-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Report saved to css-usage-report.json');
}

async function optimizeTailwindConfig() {
  console.log('\n🛠️  Generating optimized Tailwind config...');
  
  const configTemplate = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  // Optimize for production
  corePlugins: {
    preflight: true,
  },
  // Remove unused utilities
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    options: {
      safelist: [
        // Keep critical classes that might be used dynamically
        'bg-gradient-to-r',
        'from-cyan-400',
        'to-blue-500',
        'text-white',
        'backdrop-blur-md',
      ],
    },
  },
}`;

  fs.writeFileSync('tailwind.optimized.config.js', configTemplate);
  console.log('✅ Optimized Tailwind config saved to tailwind.optimized.config.js');
}

// Run the analysis
if (require.main === module) {
  analyzeCSSUsage()
    .then(() => optimizeTailwindConfig())
    .catch(console.error);
}

module.exports = { analyzeCSSUsage, optimizeTailwindConfig };
