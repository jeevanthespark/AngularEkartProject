/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                // AI-Agentic Purple-Pink Gradient Palette
                'neon-purple': '#A855F7',
                'vivid-purple': '#9333EA',
                'deep-purple': '#7C3AED',
                'hot-pink': '#EC4899',
                'bright-pink': '#F472B6',
                'soft-pink': '#FBCFE8',
                'cyber-blue': '#60A5FA',
                'electric-cyan': '#22D3EE',
            },
            fontFamily: {
                sans: ['Poppins', 'system-ui', 'sans-serif'],
                display: ['DM Sans', 'Poppins', 'sans-serif'],
                rounded: ['Nunito', 'system-ui', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 8s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'bounce-slow': 'bounce 3s infinite',
                'slide-up': 'slideUp 0.5s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'rotate-slow': 'rotate 20s linear infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                glow: {
                    'from': {
                        'text-shadow': '0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #a855f7',
                    },
                    'to': {
                        'text-shadow': '0 0 20px #ec4899, 0 0 30px #a855f7, 0 0 40px #a855f7',
                    },
                },
                slideUp: {
                    'from': { transform: 'translateY(100px)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                scaleIn: {
                    'from': { transform: 'scale(0.9)', opacity: '0' },
                    'to': { transform: 'scale(1)', opacity: '1' },
                },
                rotate: {
                    'from': { transform: 'rotate(0deg)' },
                    'to': { transform: 'rotate(360deg)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            },
            boxShadow: {
                'neon': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
                'neon-strong': '0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(236, 72, 153, 0.6)',
                'cyber': '0 4px 30px rgba(168, 85, 247, 0.3)',
            },
        },
    },
    plugins: [],
}
