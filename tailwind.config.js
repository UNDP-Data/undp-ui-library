/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./index.html",
],
theme: {
	extend: {
		colors: {
			background: 'var(--background)',
			foreground: 'var(--foreground)',
			primary: {
				DEFAULT: 'var(--black)',
				'blue-100': 'var(--blue-100)',
				'blue-200': 'var(--blue-200)',
				'blue-300': 'var(--blue-300)',
				'blue-400': 'var(--blue-400)',
				'blue-500': 'var(--blue-500)',
				'blue-600': 'var(--blue-600)',
				'blue-700': 'var(--blue-700)',
				white: 'var(--white)',
				'gray-100': 'var(--gray-100)',
				'gray-200': 'var(--gray-200)',
				'gray-300': 'var(--gray-300)',
				'gray-400': 'var(--gray-400)',
				'gray-500': 'var(--gray-550)',
				'gray-550': 'var(--gray-600)',
				'gray-600': 'var(--gray-600)',
				'gray-700': 'var(--gray-700)',
				black: 'var(--black)'
			},
			accent: {
				'light-yellow': 'var(--light-yellow)',
				yellow: 'var(--yellow)',
				'dark-yellow': 'var(--dark-yellow)',
				'light-red': 'var(--light-red)',
				red: 'var(--red)',
				'dark-red': 'var(--dark-red)',
				'light-green': 'var(--light-green)',
				green: 'var(--green)',
				'dark-green': 'var(--dark-green)',
				'light-azure': 'var(--light-azure)',
				azure: 'var(--azure)',
				'dark-azure': 'var(--dark-azure)'
			},
			sdgColors: {
				'sdg-1': 'var(--sdg-1)',
				'sdg-2': 'var(--sdg-2)',
				'sdg-3': 'var(--sdg-3)',
				'sdg-4': 'var(--sdg-4)',
				'sdg-5': 'var(--sdg-5)',
				'sdg-6': 'var(--sdg-6)',
				'sdg-7': 'var(--sdg-7)',
				'sdg-8': 'var(--sdg-8)',
				'sdg-9': 'var(--sdg-9)',
				'sdg-10': 'var(--sdg-10)',
				'sdg-11': 'var(--sdg-11)',
				'sdg-12': 'var(--sdg-12)',
				'sdg-13': 'var(--sdg-13)',
				'sdg-14': 'var(--sdg-14)',
				'sdg-15': 'var(--sdg-15)',
				'sdg-16': 'var(--sdg-16)',
				'sdg-17': 'var(--sdg-17)'
			},
		},
		borderRadius: {
			DEFAULT: '0',
			sm: '.125rem',
			lg: '.25rem',
			xl: '.5rem',
			full: '9999px'
		},
		keyframes: {
			'accordion-down': {
				from: {
					height: '0'
				},
				to: {
					height: 'var(--radix-accordion-content-height)'
				}
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)'
				},
				to: {
					height: '0'
				}
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out'
		},
		fontFamily: {
			sans: [
				'ProximaNova',
				'proxima-nova',
				'Helvetica Neue',
				'Roboto',
				'sans-serif'
			],
			'sans-ar': [
				'Noto Sans Arabic',
				'sans-serif'
			],
			'sans-he': [
				'Noto Sans Hebrew',
				'sans-serif'
			],
			serif: [
				'serif'
			],
			heading: [
				'SohneBreit',
				'ProximaNova',
				'proxima-nova',
				'Helvetica Neue',
				'Roboto',
				'sans-serif'
			],
			mono: [
				'monospace'
			]
		},
		boxShadow: {
			header: '0 3px 6px rgb(0 0 0 / 10%)'
		},
		height: {
			header: '7.1875rem'
		}
	}
},
safelist: (() => {
  
  const breakpoints = ["sm", "md", "lg", "xl", "2xl"];
  
  const states = ["hover", "active", "focus"];

  const sizes = [
    "px", "-px", "0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12",
    "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96", "auto"
  ];
  const marginProperties = ["m", "mt", "mb", "ml", "mr", "mx", "my"];
  const paddingProperties = ["p", "pt", "pb", "pl", "pr", "px", "py"];
  let spacingClasses = [...marginProperties, ...paddingProperties].flatMap(prop => sizes.map(size => `${prop}-${size}`));
  

  const screenSizes = [
	"auto", "screen", "none",
	"[320px]", "[480px]", "[600px]", "[720px]", "[768px]", "[960px]", "[1024px]", "[1272px]", "[1440px]", "[1600px]", "[1980px]", 
	"[10vw]", "[20vw]", "[25vw]", "[30vw]", "[40vw]", "[50vw]", "[60vw]", "[70vw]", "[75vw]", "[80vw]", "[90vw]", "[10vw]", "[20vw]", "[25vw]", "[30vw]", "[40vw]", "[50vw]", "[60vw]", "[70vw]", "[75vw]", "[80vw]", "[90vw]", "[10vw]", "[20vw]", "[25vw]", "[30vw]", "[40vw]", "[50vw]", "[60vw]", "[70vw]", "[75vw]", "[80vw]", "[90vw]",
	"[10vh]", "[20vh]", "[25vh]", "[30vh]", "[40vh]", "[50vh]", "[60vh]", "[70vh]", "[75vh]", "[80vh]", "[90vh]", "[10vh]", "[20vh]", "[25vh]", "[30vh]", "[40vh]", "[50vh]", "[60vh]", "[70vh]", "[75vh]", "[80vh]", "[90vh]", "[10vh]", "[20vh]", "[25vh]", "[30vh]", "[40vh]", "[50vh]", "[60vh]", "[70vh]", "[75vh]", "[80vh]", "[90vh]",
	"1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12",
    "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96",
];
  const widthHeightProperties = ["h", "w", "max-w", "min-w", "max-h", "min-h"];
  let sizeClasses = [...widthHeightProperties].flatMap(prop => screenSizes.map(size => `${prop}-${size}`));

  const gapSizes = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "12", "16", "20", "24", "32", "40", "48", "56", "60" ];
  const gapProperties = ["gap", "gap-x", "gap-y"];
  let gapClasses = [...gapProperties].flatMap(prop => gapSizes.map(size => `${prop}-${size}`));

  const borderSizes = [ "", "0", "2", "4", "8"];
  const borderProperties = ["border", "border-t", "border-b", "border-l", "border-r"];
  let borderSizeClasses = [...borderProperties].flatMap(prop => borderSizes.map(size => size !== "" ? `${prop}-${size}` : prop));
  
  const fractions = [
	"auto", "full", "1/2", "1/3", "2/3", 
    "1/4", "3/4", "1/5", "2/5", "3/5", "4/5", 
	"1/6", "5/6", "1/12", "5/12", "7/12", "11/12" 
  ]
  const fractionProperties = ["h", "w", 'basis'];
  let fractionClasses = [...fractionProperties].flatMap(prop => fractions.map(size => `${prop}-${size}`));
  
  const flexValue = [
	"1", "2", "3", "1/2", "1/3", "2/3", 
    "1/4", "3/4", "1/5", "2/5", "3/5", "4/5", 
	"1/6", "5/6", "1/12", "5/12", "7/12", "11/12",
	"auto", "initial", "none"
  ]
  const flexProperties = ["flex"];
  let flexClasses = [...flexProperties].flatMap(prop => fractions.map(flexValue => `${prop}-${size}`));
  
  const colors = [ 
    "background", "foreground",
    "primary", "primary-blue-100", "primary-blue-200", "primary-blue-300", "primary-blue-400", "primary-blue-500",
    "primary-blue-600", "primary-blue-700", "primary-white", "primary-gray-100", "primary-gray-200", "primary-gray-300",
    "primary-gray-400", "primary-gray-500", "primary-gray-550", "primary-gray-600", "primary-gray-700", "primary-black",
    "accent-light-yellow", "accent-yellow", "accent-dark-yellow", "accent-light-red", "accent-red", "accent-dark-red",
    "accent-light-green", "accent-green", "accent-dark-green", "accent-light-azure", "accent-azure", "accent-dark-azure",
    "sdgColors-sdg-1", "sdgColors-sdg-2", "sdgColors-sdg-3", "sdgColors-sdg-4", "sdgColors-sdg-5", "sdgColors-sdg-6", "sdgColors-sdg-7", "sdgColors-sdg-8", "sdgColors-sdg-9", "sdgColors-sdg-10", "sdgColors-sdg-11", "sdgColors-sdg-12", "sdgColors-sdg-13", "sdgColors-sdg-14", "sdgColors-sdg-15", "sdgColors-sdg-16", "sdgColors-sdg-17", 
    
   ];
  const colorProperties = ["bg", "text", "border", "fill", "stroke"];
  let colorClasses = [...colorProperties].flatMap(prop => colors.map(size => `${prop}-${size}`));

  let fontClasses = [
    "font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black",
    "text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl",
    "italics", "not-italics", "uppercase", "lowercase", "capitalize", "normal-case",
  ];

  let opacityClasses = ["opacity-0", "opacity-5", "opacity-10", "opacity-15", "opacity-20", "opacity-25", "opacity-30", "opacity-35", "opacity-40", "opacity-45", "opacity-50", "opacity-55", "opacity-60", "opacity-65", "opacity-70", "opacity-75", "opacity-80", "opacity-85", "opacity-90", "opacity-95", "opacity-100"];

  let shadowClasses = ["shadow-2xs", "shadow-xs", "shadow-sm", "shadow-md", "shadow-lg", "shadow-xl", "shadow-2xl", "shadow-none", "shadow-header"];



  // Generate responsive classes
  const otherClasses = [
    // Height Classes
    "h-full", "h-screen", "h-min", "h-max", "h-fit",

    // Width Classes
    "w-screen", "w-min", "w-max", "w-fit",
    
    //Display
    "hidden", "inline", "block", "inline-block", "flow-root", "flex", "inline-flex", "grid", "inline-grid", "contents", "table",
 

    // Flex classes
    "inline-flex", "flex-row", "flex-row-reverse", "flex-col", "flex-col-reverse", "flex-wrap", "flex-wrap-reverse", "flex-nowrap",
    "justify-start", "justify-end", "justify-center", "justify-between", "justify-around", "justify-evenly",
    "items-start", "items-end", "items-center", "items-baseline", "items-stretch",
    
	"flex-1", "flex-2", "flex-3", "flex-1/2", "flex-1/3", "flex-2/3", 
    "flex-1/4", "flex-3/4", "flex-1/5", "flex-2/5", "flex-3/5", "flex-4/5", 
	"flex-1/6", "flex-5/6", "flex-1/12", "flex-5/12", "flex-7/12", "flex-11/12",
	"flex-auto", "flex-initial", "flex-none",
    // Flex Grow
    "flex-grow", "flex-grow-0", "flex-grow-2","flex-grow-3",

    // Flex Shrink
    "flex-shrink", "flex-shrink-0", "flex-shrink-2","flex-shrink-3",

    //Transparent Bg
    "bg-transparent",

    // Flex Basis
    "basis-0", "basis-1", "basis-2", "basis-3", "basis-4", "basis-5", 
    "basis-6", "basis-7", "basis-8", "basis-9", "basis-10", "basis-11", 
    "basis-12", "basis-14", "basis-16", "basis-20", "basis-24", "basis-28", 
    "basis-32", "basis-36", "basis-40", "basis-44", "basis-48", "basis-52", 
    "basis-56", "basis-60", "basis-64", "basis-72", "basis-80", "basis-96",

    // Text alignment classes
    "text-left", "text-center", "text-right", "text-justify", "text-start", "text-end",
  
    // Display classes
    "block", "inline-block", "inline", "flex", "inline-flex", "grid", "inline-grid", "table", "table-row", "table-cell", "hidden",
    
    // Border classes
    "border-solid", "border-dashed", "border-dotted", "border-double",
    "rounded-none", "rounded-sm", "rounded", "rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl", "rounded-3xl", "rounded-full",
    
    // Object Classes
    "object-cover", "object-center", "object-top", "object-bottom", "object-left", "object-right", "object-right-top", "object-left-top", "object-left-bottom", "object-right-bottom", "object-contain", "object-fit", "object-fill", "object-none", "object-scale-down",

    // Stroke Width Classes (0 to 8)
    "stroke-0", "stroke-1", "stroke-2", "stroke-3", "stroke-4", "stroke-5", "stroke-6", "stroke-7", "stroke-8",

    // Cursor
    "cursor-auto", "cursor-default", "cursor-pointer", "cursor-wait", "cursor-move", "cursor-help", "cursor-not-allowed",	

    // Position
    "relative", "sticky", "fixed", "static", "absolute",
  ]
  let responsiveClasses = breakpoints.flatMap(bp => [
    ...spacingClasses, 
    ...sizeClasses, 
    ...gapClasses, 
    ...colorClasses, 
    ...otherClasses, 
    ...borderSizeClasses,
    ...fontClasses,
    ...shadowClasses,
	...fractionClasses,
  ].map(cls => `${bp}:${cls}`));
  let utilitiesClasses = states.flatMap(bp => [
    ...colorClasses, 
    ...borderSizeClasses,
    ...fontClasses,
    ...shadowClasses,
    ...opacityClasses
  ].map(cls => `${bp}:${cls}`));
  return [
    ...spacingClasses,
    ...sizeClasses,
    ...gapClasses,
    ...colorClasses,
    ...otherClasses,
    ...borderSizeClasses,
    ...shadowClasses,
    ...opacityClasses,
    ...fontClasses,
	...fractionClasses,
    ...responsiveClasses,
    ...utilitiesClasses,
  ]
}) ,
important: true,
plugins: [require("tailwindcss-animate")],
corePlugins: {
  preflight: false, // Disables Tailwind's Preflight
},
}