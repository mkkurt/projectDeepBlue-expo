# 🚀 Quick Start - Run on iPhone NOW

## ⏱️ Total Time: ~30 minutes (mostly waiting for build)

## 📱 What You'll Get
After following these steps, you'll be able to:
- Install the app on your iPhone **without your computer**
- Receive automatic updates when you push code
- Test your app anywhere, anytime

---

## 🎯 Step 1: Get Expo Token (2 minutes)

1. Go to: https://expo.dev/settings/access-tokens
2. Click **"Create token"**
3. Name it: `GitHub Actions`
4. Click **"Create"**
5. **COPY THE TOKEN** (you won't see it again!)

---

## 🔐 Step 2: Add Token to GitHub (1 minute)

1. Go to: https://github.com/mkkurt/projectDeepBlue-expo/settings/secrets/actions
2. Click **"New repository secret"**
3. Name: `EXPO_TOKEN`
4. Value: Paste your token from Step 1
5. Click **"Add secret"**

---

## 🏗️ Step 3: Trigger Build (1 minute + 15-30 min wait)

1. Go to: https://github.com/mkkurt/projectDeepBlue-expo/actions/workflows/eas-build.yml
2. Click **"Run workflow"** (green button on the right)
3. Select:
   - **Profile:** `development`
   - **Platform:** `ios`
4. Click **"Run workflow"**

**☕ Time for coffee!** The build takes 15-30 minutes. You'll get an email when it's done.

---

## 📲 Step 4: Install on iPhone (2 minutes)

### Option A: From Email (Easiest)
1. Check your email (the one linked to your Expo account)
2. Open the **"Build completed"** email on your **iPhone**
3. Tap **"Install build"**
4. Tap **"Install"** when prompted
5. Done! 🎉

### Option B: From Expo Dashboard
1. Go to: https://expo.dev/accounts/[your-username]/projects/projectDeepBlue-expo/builds
2. Find the latest build (should be at the top)
3. Open this link on your **iPhone** or scan the QR code
4. Tap **"Install"**
5. Done! 🎉

---

## ✅ Step 5: Trust & Launch (1 minute)

First time only:
1. Go to **Settings** → **General** → **VPN & Device Management**
2. Tap on your **developer profile**
3. Tap **"Trust"**
4. Now open the **"projectDeepBlue-expo"** app
5. It should load! 🎊

---

## 🔄 Future Updates (Automatic!)

After the initial build:
- Just push code to GitHub
- Updates are automatic (no rebuild needed!)
- Reopen the app to get the latest version

---

## ⚠️ Troubleshooting

### Build Failed?
- Check: https://github.com/mkkurt/projectDeepBlue-expo/actions
- Make sure `EXPO_TOKEN` is set correctly
- Try running the build again

### Can't Install?
- Use **Safari** on your iPhone (not Chrome)
- Make sure you clicked the link on your iPhone, not computer

### App Won't Open?
- Go to Settings → General → VPN & Device Management
- Trust the developer profile
- Make sure you have internet connection

---

## 📚 Need More Details?

See [IPHONE_SETUP.md](./IPHONE_SETUP.md) for complete documentation.

---

## 🎯 Summary

1. ✅ Get Expo token → Add to GitHub secrets
2. ✅ Run workflow → Wait for build
3. ✅ Install on iPhone → Trust → Launch
4. ✅ Push code → Get updates automatically

**That's it! No computer needed!** 🚀
