# 🎨 Portfolio Customization Guide

## Quick Reference: Where to Edit What

### 1. **Your Name & Basic Info**
**File:** `components/Hero.tsx`
- **Line 58**: Change "Your Name" to your actual name
- **Line 66**: Update your tagline (e.g., "Developer & Data Engineer")
- **Line 72-74**: Update your description/bio

**File:** `app/layout.tsx`
- **Line 17**: Change "Your Name" in authors
- **Line 18**: Change "Your Name" in creator
- **Line 22**: Update your portfolio URL

---

### 2. **About Section**
**File:** `components/About.tsx`
- **Lines 40-43**: First paragraph about yourself
- **Lines 52-54**: Second paragraph about your expertise
- **Lines 63-70**: Development focus box
- **Lines 73-80**: Data Engineering focus box

---

### 3. **Skills & Technologies**
**File:** `components/Skills.tsx`
- **Lines 4-30**: Edit the `skillCategories` array
  - Change category titles (e.g., "Languages", "Frontend")
  - Update the skills arrays with your actual technologies

**Example:**
```typescript
{
  title: 'Languages',
  skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
},
```

---

### 4. **Work Experience**
**File:** `components/Experience.tsx`
- **Lines 4-50**: Edit the `experiences` array
  - Update job titles, company names, periods
  - Modify descriptions (bullet points)
  - Change technologies used

**Example:**
```typescript
{
  title: 'Senior Data Engineer',
  company: 'Your Company',
  period: '2022 - Present',
  description: [
    'Your achievement 1',
    'Your achievement 2',
  ],
  technologies: ['Python', 'Spark', 'AWS'],
},
```

---

### 5. **Projects**
**File:** `components/Projects.tsx`
- **Lines 4-50**: Edit the `projects` array
  - Update project titles and descriptions
  - Change project links (GitHub, live demo)
  - Modify technologies and categories
  - Update project images (currently using placeholders)

**Example:**
```typescript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Your project description...',
  image: '/images/your-project.jpg', // Add to public/images/
  technologies: ['React', 'Node.js'],
  category: 'Full Stack',
  link: 'https://your-project.com',
  github: 'https://github.com/yourusername/project',
},
```

**File:** `components/Projects.tsx`
- **Line 30**: Edit categories array if needed

---

### 6. **Contact Information**
**File:** `components/Contact.tsx`
- **Line 84**: Update email address
- **Line 106**: Update LinkedIn URL
- **Line 124**: Update GitHub URL

---

### 7. **Social Links (Footer)**
**File:** `components/Footer.tsx`
- **Lines 4-7**: Update social media links
  - GitHub, LinkedIn, Twitter, Email
- **Line 50**: Update copyright year/name

---

### 8. **SEO & Meta Information**
**File:** `app/layout.tsx`
- **Lines 12-15**: Update page title and description
- **Lines 16**: Update keywords
- **Lines 19-25**: Update Open Graph tags (for social sharing)
- **Lines 27-31**: Update Twitter Card tags
- **Lines 45-50**: Update structured data (JSON-LD) with your info

---

### 9. **Colors & Styling**
**File:** `tailwind.config.ts`
- **Lines 7-16**: Customize your color palette
  - Change primary colors (currently blue)
  - Add custom colors

**Example:**
```typescript
primary: {
  500: '#your-color',
  600: '#your-darker-color',
}
```

---

### 10. **Analytics (Optional)**
**File:** `.env.local` (create this file)
```bash
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 📁 File Structure Overview

```
portfolio/
├── app/
│   └── layout.tsx          ← SEO, meta tags, site-wide settings
├── components/
│   ├── Hero.tsx            ← Name, tagline, intro
│   ├── About.tsx           ← About section content
│   ├── Skills.tsx          ← Your skills & technologies
│   ├── Experience.tsx      ← Work history
│   ├── Projects.tsx         ← Project showcase
│   ├── Contact.tsx          ← Contact info & form
│   └── Footer.tsx           ← Footer links
└── public/
    └── images/              ← Add project images here
```

---

## 🎯 Quick Customization Checklist

- [ ] Update name in `Hero.tsx` and `layout.tsx`
- [ ] Write your about section in `About.tsx`
- [ ] Add your skills in `Skills.tsx`
- [ ] Add your work experience in `Experience.tsx`
- [ ] Add your projects in `Projects.tsx`
- [ ] Update contact info in `Contact.tsx`
- [ ] Update social links in `Footer.tsx`
- [ ] Update SEO metadata in `layout.tsx`
- [ ] Add project images to `public/images/`
- [ ] Customize colors in `tailwind.config.ts` (optional)

---

## 💡 Pro Tips

1. **Images**: Add project images to `public/images/` and reference them as `/images/your-image.jpg`
2. **Icons**: Social icons are SVG, you can replace them if needed
3. **Animations**: Adjust animation timings in component files if desired
4. **Fonts**: Change font in `app/layout.tsx` (currently Inter from Google Fonts)

---

## 🚀 After Customization

1. Save your changes
2. The dev server will auto-reload
3. Check `http://localhost:3000` to see updates
4. Run `npm run build` to test production build

Happy customizing! 🎨

