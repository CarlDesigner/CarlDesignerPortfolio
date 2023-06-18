/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes:[ // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
      		"light",
      		"dark",
      		"cupcake",
      		"bumblebee",
      		"emerald",
      		"corporate",
      		"synthwave",
      		"retro",
      		"cyberpunk",
      		"valentine",
      		"halloween",
      		"garden",
      		"forest",
      		"aqua",
      		"lofi",
      		"pastel",
      		"fantasy",
      		"wireframe",
      		"black",
      		"luxury",
      		"dracula",
      		"cmyk",
      		"autumn",
      		"business",
      		"acid",
      		"lemonade",
      		"night",
      		"coffee",
      		"winter",
			  ],
		
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
		
	  }
}