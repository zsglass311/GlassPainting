# Glass Painting: Website & Setup Guide

Your website is built. This guide walks you through everything else, one step at a time: a private business phone number and email, a working quote form, putting the site online, getting your own web address, and showing up on Google Maps.

**You don't need any technical experience.** Every step here happens on a website you log into, like Gmail or GitHub. You never have to edit the website's files yourself. Whenever something on the site needs to change, you tell Claude and Claude makes the change.

---

## How the pieces fit together

| Piece | What it does | Where you set it up | Cost |
|---|---|---|---|
| **Website files** | The pages Claude built | GitHub (you already have this) | Free |
| **Hosting** | Puts the website on the internet | GitHub Pages | Free |
| **Business email** | An email address that isn't your personal one | Gmail | Free |
| **Business phone** | A local number that rings your cell phone | Google Voice | Free |
| **Quote form** | Sends each quote request to your business email | Web3Forms | Free |
| **Domain name** | Your web address, like `glasspaintingga.com` | Porkbun (a domain company) | About $10–$15 a year |
| **Google listing** | Puts you on Google Maps and in local searches | Google Business Profile | Free |

**Total cost: about $10–$15 a year** (just the domain name).

**Keeping your personal info private:** customers will only ever see your *business* phone number and *business* email. Your personal cell and personal email are never on the website.

---

## Your checklist

Do these in order. Most people finish Steps 1–5 in about an hour. Steps 6–8 involve some waiting.

- [ ] **Step 1:** Create a business Google account (15 min)
- [ ] **Step 2:** Get a business phone number with Google Voice (10 min)
- [ ] **Step 3:** Get your quote form key from Web3Forms (5 min)
- [ ] **Step 4:** Send those three things to Claude (2 min)
- [ ] **Step 5:** Put the website online with GitHub Pages (10 min)
- [ ] **Step 6:** Buy your domain name (15 min)
- [ ] **Step 7:** Connect your domain to the website (20 min, then some waiting)
- [ ] **Step 8:** Get listed on Google Maps (20 min, then a few days for Google to verify you)
- [ ] **Step 9:** Ask past customers for Google reviews

> **Want to see the site online first?** You can do Step 5 at any time, even before Steps 1–4. The site will just show a placeholder phone number and email until Claude adds your real ones.

---

## Step 1: Create a business Google account

One free Google account gives you your business email (Gmail), your business phone number (Step 2), and your Google Maps listing (Step 8), all kept separate from your personal accounts.

1. On a computer, open a **private/incognito window** so you don't mix this up with your personal Google account. (In Chrome: the three-dot menu in the top-right corner, then **New Incognito window**.)
2. Go to **https://accounts.google.com/signup**
3. For the name, type **Glass Painting** as the first name and leave the last name blank. Customers see this name when you email them.
4. Enter your birthday and gender (Google requires these; they aren't shown to anyone).
5. When asked for an email address, choose **Create your own Gmail address** and try something like `glasspaintingga`, `glasspaintingbraselton`, or `glasspaintinggeorgia`. Pick whichever one is available.
6. Create a strong password and **write it down somewhere safe**.
7. If Google asks for a phone number, you can use your personal cell. Google only uses it to protect the account. It is never shown to people you email.
8. Finish the sign-up.

**Add it to your phone:** open the **Gmail** app → tap your profile picture (top right) → **Add another account** → **Google** → sign in with the new address. Now you can flip between personal and business email in the same app, and you'll get notifications for both.

> **Important for privacy:** always reply to customers *from the business account*. If you reply from your personal email, the customer will see your personal address.

<details>
<summary><strong>Optional: forward business email to your personal inbox</strong></summary>

If you'd rather have everything land in your personal inbox:

1. Sign in to the business Gmail on a computer.
2. Click the **gear icon** (top right) → **See all settings**.
3. Open the **Forwarding and POP/IMAP** tab → **Add a forwarding address** → enter your personal email → **Next** → **Proceed**.
4. Google sends a confirmation to your personal email. Click the link in it.
5. Back in the business Gmail settings, choose **Forward a copy of incoming mail to…** your personal address, and pick **keep Gmail's copy in the Inbox**.
6. Scroll down and click **Save Changes**.

Remember: to keep your personal email private, still *reply* from the business account.
</details>

---

## Step 2: Get a business phone number (Google Voice)

Google Voice gives you a free local number. Calls and texts to it ring your cell phone, and customers never see your real number.

1. On a computer, go to **https://voice.google.com** and sign in with the **business** Google account from Step 1.
2. Choose **For personal use**, then **Web**. (The "For business" option is a paid plan you don't need.)
3. Accept the terms. When asked to choose a number, search for **Braselton** or a local area code like **706** or **770**. Pick a number you like and click **Select**.
4. Google asks you to link an existing phone. Enter your **personal cell number**. Google texts you a code; type it in. This is how calls get forwarded to you. The number stays private.
5. On your phone, install the **Google Voice** app (App Store or Google Play) and sign in with the business account.
6. Record a voicemail greeting: in the app, go to **Settings** → **Voicemail greeting**. For example: *"You've reached Glass Painting. Please leave your name, number, and a little about your project, and we'll call you right back."*

> **Most important rule:** when you call or text a customer, **use the Google Voice app**, not your phone's regular Phone or Messages app. Otherwise the customer sees your personal cell number.

**Tip:** Google can take back a Voice number that goes unused for a long stretch (several months). Regular business calls and texts keep it active.

---

## Step 3: Get your quote form key (Web3Forms)

Web3Forms is a free service that emails you each quote request submitted on the website.

1. Go to **https://web3forms.com**
2. On the home page, find **Create your Access Key**. Enter your **business Gmail address** and submit.
3. Check the business Gmail inbox for an email from Web3Forms containing your **Access Key**: a long code of letters and numbers like `1a2b3c4d-5e6f-...`. (If it isn't there after a few minutes, check the **Spam** folder.)
4. Copy the key. It's safe to share: all it can do is send messages *to* you.

---

## Step 4: Send those three things to Claude

Come back to your Claude conversation (or start a new Claude Code session on this **GlassPainting** repository) and send:

1. Your **business phone number** (from Step 2)
2. Your **business email address** (from Step 1)
3. Your **Web3Forms access key** (from Step 3)

Claude will put them into the website and test the quote form.

> Don't send your personal cell number or personal email. They never need to be on the website.

---

## Step 5: Put the website online (GitHub Pages)

GitHub is where your website's files are stored (your "repository"). GitHub Pages is GitHub's free feature that turns those files into a live website.

### 5a. Make the repository public

GitHub only hosts free websites from **public** repositories. That's fine: everything in it is going on your public website anyway, and your personal phone and email aren't in it.

1. Go to **https://github.com/zsglass311/GlassPainting** and sign in.
2. Click **Settings** in the row of tabs near the top of the page (it has a gear icon).
3. Stay on the **General** page and scroll all the way to the bottom, to the red **Danger Zone** box. (Don't worry: that's just GitHub's name for important settings.)
4. Next to "Change repository visibility," click **Change visibility** → **Change to public**, then follow the prompts to confirm. GitHub may ask you to type the repository name or re-enter your password.

### 5b. Make `main` your default branch

Your repository has a branch called **`main`** that holds the finished website. Making it the "default" means your live site and all future changes start from it.

1. Still in **Settings** → **General**, find the **Default branch** section near the top.
2. Click the button with **two arrows** next to the current branch name.
3. Choose **main** from the list and click **Update**, then confirm with **I understand, update the default branch**.

### 5c. Turn on GitHub Pages

1. Still in **Settings**, click **Pages** in the left-hand menu (under "Code and automation").
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
3. Under **Branch**, click the dropdown and choose **main**. Leave the folder set to **/ (root)**. Click **Save**.
4. Wait 1–2 minutes, then refresh the page. At the top you'll see **"Your site is live at https://zsglass311.github.io/GlassPainting/"**. Click **Visit site**.

Your website is now on the internet. You can share that link right away, but a short web address of your own (Steps 6–7) is much easier for customers to remember.

> **Privacy tip:** on GitHub, click your profile picture (top right) → **Settings** → **Emails**, and check **Keep my email addresses private**. That way your personal email never appears in the website's public history.

---

## Step 6: Buy your domain name

A domain is your web address. You rent it by the year from a "registrar." These directions use **Porkbun** because it's inexpensive, simple, and includes privacy protection for free. Any registrar (Namecheap, Cloudflare, etc.) also works.

1. **Pick a name.** Short and easy to say over the phone is best, and `.com` is the most familiar. Ideas: `glasspaintingga.com`, `glasspaintingbraselton.com`, `glasspaintinggeorgia.com`.
2. Go to **https://porkbun.com**, search for the name, and add an available one to your cart.
3. Check out and create an account. During checkout:
   - Turn on **auto-renew** so you never lose the name.
   - Make sure **WHOIS privacy** is **on** (Porkbun includes it free). This keeps your name, home address, and phone out of public domain records.
   - **Skip all add-ons.** You don't need website hosting, a website builder, email hosting, or an SSL certificate. GitHub already provides hosting and the security padlock for free.

---

## Step 7: Connect your domain to the website

Your main web address is **glasspainting.homes**. This step tells the internet that it should show your GitHub website. You'll add a few "DNS records," which work like a forwarding address. Do this for **glasspainting.homes only**. Your other domains get forwarded to it in Step 7c.

### 7a. At Porkbun

1. Log in to Porkbun and go to **Domain Management** (in the Account menu).
2. Find **glasspainting.homes** in the list and click **DNS** next to it. (You may need to hover over the domain or click **Details** to see it.)
3. **Delete Porkbun's placeholder records.** At the bottom, under "Current Records," delete every record whose answer is **pixie.porkbun.com** (usually two of them) by clicking its **trash can** icon.
4. **Add these 5 records**, one at a time. For each one, pick the **Type**, fill in **Host** and **Answer**, leave everything else as it is, and click **Add**:

   | Type | Host | Answer |
   |---|---|---|
   | A | *(leave blank)* | `185.199.108.153` |
   | A | *(leave blank)* | `185.199.109.153` |
   | A | *(leave blank)* | `185.199.110.153` |
   | A | *(leave blank)* | `185.199.111.153` |
   | CNAME | `www` | `zsglass311.github.io` |

   (These addresses come from GitHub's official instructions for custom domains.)

### 7b. At GitHub

1. Go to your repository → **Settings** → **Pages**.
2. Under **Custom domain**, type `glasspainting.homes` and click **Save**.
3. GitHub checks your settings. This usually takes a few minutes to an hour, but can take up to 24 hours. When it's done you'll see **DNS check successful**.
4. Check the box **Enforce HTTPS**. If it's grayed out, GitHub is still preparing your security certificate. Come back in an hour or so and check it then. This gives your site the padlock in the address bar.
5. **Tell Claude when it's done** so it can check that everything points to the right place.

After this, both `glasspainting.homes` and `www.glasspainting.homes` open your website.

> GitHub adds a small file named **CNAME** to your repository when you save the custom domain. That's normal. Don't delete it.

### 7c. Forward your other domains

You also own glasspaintingga.com, glasspaintingga.net, glasspaintinghomes.com, glasspaintinghomes.net, glasspaintinggeorgia.com, glasspaintinggeorgia.net, and glasspaintingflorida.com. Forward each one to your main address so anyone who types them (especially the `.com` ones, which many people type out of habit) lands on your website. **Don't** add the GitHub records from 7a to these.

For each of those domains:

1. In Porkbun's **Domain Management**, find the domain and open **URL Forwarding**. (It's next to **DNS**, or under **Details**.)
2. Leave **Hostname** blank. Set **Forward traffic to** `https://glasspainting.homes`.
3. Choose **Permanent (301)** as the type. Turn on **Include path** and **Wildcard** if you see those options (Wildcard also forwards the `www.` version).
4. Click **Submit** or **Add**. Porkbun sets up the DNS records for forwarding by itself. If it warns about existing records, let it replace them.

After an hour or so, test by typing each domain into your browser. You should end up on glasspainting.homes.

---

## Step 8: Get listed on Google Maps (Google Business Profile)

This is the **#1 way local homeowners will find you.** When someone searches "house painter near me" or "painters Braselton," Google shows a map with local businesses. This puts you on it, for free.

1. Go to **https://business.google.com** and sign in with the **business** Google account.
2. Business name: **Glass Painting**.
3. Business category: start typing **Painter** and pick the closest match.
4. When asked whether you want to add a location customers can visit, choose **No**. You go to your customers' homes, so this keeps your home address private. (Google may still ask for your address to verify you, but it won't show it publicly.)
5. Add your **service areas**: Braselton, Hoschton, Jefferson, Buford, Flowery Branch, and so on.
6. Phone: your **Google Voice** number. Website: your domain from Step 6, or the GitHub link from Step 5 for now.
7. **Verify your business.** Google will walk you through it. Often this means recording a short video (for example: your work truck or equipment, some tools, a job in progress). Sometimes it's a phone call, text, or postcard. It can take a few days.
8. Once you're verified, add photos of your work (before-and-after shots are great), your hours, and a short description.

---

## Step 9: Ask past customers for reviews

You have 40 years of happy customers, and that's your biggest advantage. The number and quality of your Google reviews is one of the biggest factors in who shows up first on Google Maps.

1. In your Google Business Profile, look for **Ask for reviews** (or **Get more reviews**) and copy the link.
2. Text it to past customers. For example:

   > *"Hi ___, it's ___ with Glass Painting. We finally have a website! If you were happy with the work we did for you, would you mind leaving us a quick Google review? [link] Thank you!"*

**More ways to be found:**
- Create a free business page on **Nextdoor**. Neighbors ask each other for painter recommendations there all the time.
- A **Facebook** business page helps too.
- Put your website and business number on your truck, yard signs, business cards, and invoices.

---

## Changing the website later

Just tell Claude what you'd like changed, in plain English. For example:

- "Here are photos of our work. Add a gallery."
- "Change the service area to these towns: …"
- "Add this review from a customer: …"
- "Add our business hours: Monday to Friday, 8 to 5."

When Claude is done, it will either update the site directly or send you a link to a **pull request** (a proposed change waiting for your okay). To approve one, open the link, click the green **Merge pull request** button, then **Confirm merge**. Your live website updates within a couple of minutes.

---

## Please review the website's wording

Claude wrote the text from what you shared. Let Claude know about anything that isn't accurate:

- **Services:** the interior and exterior lists (for example, "Drywall patching" or "Porches, columns & railings"). Remove anything you don't do.
- **Service area:** the list of towns is Claude's best guess at your area. Tell Claude the towns you actually serve.
- **Our story and promises:** the "Our story" section and phrases like "work areas cleaned up every day." Make sure they sound like you and match how you work.
- **Worth adding if true:** a warranty on your work, real customer reviews, and real photos of your work. Photos make the biggest difference of all.

---

## Glossary

- **Repository ("repo"):** the folder on GitHub that holds your website's files.
- **Branch:** a version of those files. Your live website is published from one branch.
- **Pull request:** a proposed change to the files that you can approve by clicking "Merge."
- **Domain:** your web address, like `glasspaintingga.com`.
- **DNS records:** settings at your domain company that point your domain to your website.
- **Hosting:** the service that keeps your website online. Here, that's GitHub Pages.

---

## Technical notes (for whoever maintains the site)

- Plain HTML, CSS, and JavaScript with no build step: `index.html`, `assets/css/styles.css`, `assets/js/main.js`, and images in `assets/img/`. `.nojekyll` tells GitHub Pages to serve the files as they are.
- **Contact details** (search the whole project when changing them):
  - Phone: `(770) 403-7608` (shown) and `+17704037608` / `+1-770-403-7608` (links and structured data)
  - Email: `glasspaintingga@gmail.com`
  - Form key: still the placeholder `YOUR_WEB3FORMS_ACCESS_KEY` in `index.html` until the owner has a Web3Forms key
- Site URL: `https://glasspainting.homes/` (canonical link, `og:` meta tags, and JSON-LD). The other domains the owner bought forward to it through Porkbun URL forwarding.
- The quote form posts JSON to Web3Forms (`https://api.web3forms.com/submit`) and shows an inline thank-you or error message. Without JavaScript it falls back to a normal form post. The hidden `botcheck` checkbox is a spam honeypot. Until a real key is added, the form shows a "please call or email us" message instead of sending.
- Fonts: Fraunces (headings) and Figtree (body) from Google Fonts.
- Preview locally: run `python3 -m http.server` in this folder and open http://localhost:8000
