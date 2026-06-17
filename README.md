# 🚀 Sharumathi M — Portfolio

A production-ready personal portfolio website built with pure HTML, CSS, and JavaScript.

---

## 📁 Folder Structure

```
sharumathi-portfolio/
├── index.html      ← Main HTML (all sections)
├── style.css       ← All styles, dark/light theme
├── script.js       ← Interactivity (theme, scroll, nav, typed text)
├── photo.jpg       ← ADD YOUR PHOTO HERE (rename your file to photo.jpg)
└── README.md       ← This file
```

---

## 🖼️ Adding Your Photo

1. Copy your profile photo into the portfolio folder.
2. Rename it to `photo.jpg`.
3. Open `index.html` and find the `hero-right` section.
4. Replace the `<div class="photo-placeholder">...</div>` block with:
   ```html
   <img src="photo.jpg" alt="Sharumathi M" />
   ```

---

## 📄 Adding Your Resume

1. Upload your resume PDF to Google Drive and get a shareable link, OR add `resume.pdf` to the folder.
2. In `index.html`, find the Resume section `<a href="#" class="btn-primary" download>`.
3. Replace `href="#"` with either:
   - `href="resume.pdf"` (local file), or
   - `href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"` (Google Drive direct download)

---

## 🌐 Hosting on GitHub Pages (Free, worldwide access)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in.
2. Click **New Repository**.
3. Name it exactly: `sharumathi21-it.github.io` (replace with your GitHub username).
4. Set it to **Public**.
5. Click **Create Repository**.

### Step 2 — Upload your files
Option A — via GitHub website:
1. Open your new repository.
2. Click **Add file → Upload files**.
3. Drag and drop all four files: `index.html`, `style.css`, `script.js`, `photo.jpg`, `resume.pdf`.
4. Click **Commit changes**.

Option B — via Git CLI:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/Sharumathi21-it/sharumathi21-it.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repository, go to **Settings → Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Select **main** branch and **/ (root)** folder.
4. Click **Save**.

### Step 4 — Access your portfolio
Your site will be live at:
```
https://sharumathi21-it.github.io
```
(takes ~2 minutes to go live after first deploy)

---

## 🌍 Custom Domain (Optional — makes it look professional)

### Option A — Free subdomain via Freenom
1. Go to [freenom.com](https://www.freenom.com) — get a free `.tk` / `.ml` domain.
2. In GitHub Pages Settings → Custom domain, enter your domain.
3. In Freenom DNS, add a CNAME record: `www` → `sharumathi21-it.github.io`.

### Option B — Paid domain via GoDaddy / Namecheap (~₹500–₹800/year)
1. Buy a domain like `sharumathi.dev` or `sharumathim.in`.
2. In your domain's DNS, add:
   - Type: `CNAME`, Host: `www`, Value: `sharumathi21-it.github.io`
   - Type: `A`, Host: `@`, Values (GitHub IPs):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
3. In GitHub Pages → Custom domain, enter `www.yourdomain.com`.
4. Enable **Enforce HTTPS** ✅

---

## ✅ Pre-launch Checklist

- [ ] Add `photo.jpg` to the folder
- [ ] Update resume link in the Resume section
- [ ] Verify all Google Drive links open correctly
- [ ] Test on mobile (Chrome DevTools → Toggle Device Toolbar)
- [ ] Check dark mode and light mode toggle
- [ ] Confirm all GitHub and LinkedIn links open in new tabs

---

## 💡 Pro Tips for Recruiters

- Pin your GitHub repo: `sharumathi21-it.github.io` → Settings → Pin
- Add the URL to your LinkedIn profile under **Website**
- Include the URL in your email signature and resume header
- Share the link in your Naukri / Internshala profile
