# Quick Start Guide

## 🚀 Getting Your Portfolio Running

### 1. Install Dependencies

```bash
npm install
```

### 2. Personalize Your Portfolio

Update these files with your information:

#### Essential Updates:

1. **`app/layout.tsx`** (Line 17, 22, 45-50)
   - Change "Your Name" to your actual name
   - Update URLs and social links

2. **`components/Hero.tsx`** (Line 25, 30)
   - Update your name and tagline

3. **`components/About.tsx`** (Line 18-30)
   - Write your personal about section

4. **`components/Skills.tsx`** (Line 4-30)
   - Update skills and technologies to match your expertise

5. **`components/Experience.tsx`** (Line 4-50)
   - Replace with your actual work experience

6. **`components/Projects.tsx`** (Line 4-50)
   - Add your real projects with descriptions and links

7. **`components/Contact.tsx`** (Line 50, 80)
   - Update email and social links

8. **`components/Footer.tsx`** (Line 4-7, 50)
   - Update social links and copyright

### 3. Add Analytics (Optional)

Create `.env.local`:

```bash
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization Tips

- **Colors**: Edit `tailwind.config.ts` to change the color scheme
- **Fonts**: Change the font in `app/layout.tsx` (currently Inter)
- **Animations**: Adjust animation timings in component files
- **Layout**: Modify component structure in `components/` folder

## 📝 Next Steps

1. Add your resume/CV link
2. Add project images to `public/images/`
3. Create a favicon and add to `public/`
4. Deploy to Vercel, Netlify, or your preferred platform

## 🐛 Troubleshooting

- **Port already in use**: Change port with `npm run dev -- -p 3001`
- **Build errors**: Check TypeScript errors with `npm run build`
- **Styling issues**: Clear `.next` folder and rebuild

Happy coding! 🎉

