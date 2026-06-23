const PASSWORD = "kutta";

/* -------------------------
   IMAGE FILES
-------------------------- */

const images = [
  "071B5802-912E-4DAA-BF68-2D3089B74383.jpeg",
  "345F95CD-D99E-4E33-8595-BBE7C96049E2.jpeg",
  "87872AAC-AB78-41E8-991E-9D6ACDD268B7.jpeg",
  "578F713E-77EF-46E4-865B-A22A602A4193.jpeg",
  "3AE2B8F7-CC5E-4E32-8807-B9BA3E0FC69B.jpeg",
  "FD5A2A6C-D74A-4E7F-A7E7-BFE0863B0406.jpeg",
  "9C6B6AE0-C503-4A88-94C7-00CA17DE6D18.jpeg",
  "66BCEE0D-1D9A-4F88-BE64-39871EABD13E.jpeg",
  "29388C07-543B-4A37-8283-E334979E53D7.jpeg",
  "5554D13A-8F01-44B1-9EEB-8582C8196B4E.jpeg"
];

/* -------------------------
   QUOTES
-------------------------- */

const quotes = [
  "Every star in my sky shines because of you.",
  "You are my favorite dream that never ends.",
  "Home is wherever your smile exists.",
  "The moon borrowed its beauty from your eyes.",
  "In every lifetime, I would choose you again.",
  "My heart learned the meaning of peace through you.",
  "You are poetry written by the universe.",
  "Your laughter is my favorite melody.",
  "Even eternity feels short with you.",
  "You are my once upon a time and my forever after."
];

/* -------------------------
   STORY PAGES
-------------------------- */

const storyPages = [

`
<h2>The Tale of Arnab and Kasturi</h2>

<p>
The Moon Prince and the Koala Queen
</p>

<p>
Long ago, beyond the seven skies and beyond the stars that humans could see,
there existed a magical kingdom called Yumekawa,
the Land of Dreams.
</p>

<p>
It was a place where clouds were made of cotton candy,
rivers flowed with sparkling stardust,
and tiny dragon kittens flew through the sky carrying lanterns shaped like hearts.
</p>
`,

`
<p>
In the center of Yumekawa stood the magnificent Crystal Moon Castle,
where lived a young prince named Arnab.
</p>

<p>
Arnab was unlike any other prince.
While other princes practiced sword fighting and dragon taming,
Arnab spent his days helping injured fairy butterflies,
feeding baby phoenixes,
and writing silly poems about love.
</p>
`,

`
<p>
Far away, in the enchanted Forest of Eternal Sakura,
lived a beautiful girl named Kasturi,
known throughout the magical world as the Koala Queen.
</p>

<p>
Wherever she walked, flowers bloomed.
When she laughed, tiny stars appeared.
When she sang, sleeping forests awakened.
</p>
`,

`
<p>
One magical night,
the Star of Soulmates split into two glowing fragments.
</p>

<p>
One landed beside Arnab.
One landed beside Kasturi.
</p>

<p>
Both were told to follow destiny.
</p>
`,

`
<p>
For seven days and seven nights they traveled.
</p>

<p>
They crossed magical lands,
floating kingdoms,
and oceans of starlight.
</p>

<p>
Eventually they met on the Bridge of Fate.
</p>
`,

`
<p>
Neither spoke.
Neither moved.
</p>

<p>
They simply stared at one another.
</p>

<p>
Arnab felt he had known her forever.
Kasturi felt her heart had finally found home.
</p>
`,

`
<p>
Days became weeks.
Weeks became months.
Soon they became inseparable.
</p>

<p>
Together they explored magical kingdoms,
rode cloud whales,
and helped every creature they met.
</p>
`,

`
<p>
One evening,
while watching the sunset,
they realized something.
</p>

<p>
They were deeply,
truly,
and endlessly in love.
</p>
`,

`
<p>
But deep within the Shadow Mountains lived
the King of Loneliness.
</p>

<p>
He hated happiness.
He hated love.
</p>

<p>
And he wanted to separate them forever.
</p>
`,

`
<p>
Together Arnab and Kasturi fought through darkness,
fear,
and impossible challenges.
</p>

<p>
At every step they chose one another.
</p>
`,

`
<p>
When the King created a wall of darkness
between them,
they simply walked forward.
</p>

<p>
The wall shattered instantly.
</p>

<p>
Because it could separate bodies,
but never hearts.
</p>
`,

`
<p>
Their love awakened the Heart Moon Crystal.
</p>

<p>
The darkness vanished.
Flowers bloomed.
Stars returned.
</p>

<p>
The world was saved.
</p>
`,

`
<p>
Years later,
all of Yumekawa gathered to celebrate.
</p>

<p>
Dragons.
Fairies.
Moon Rabbits.
Phoenixes.
Cloud Whales.
</p>
`,

`
<p>
Under a sky filled with countless stars,
Arnab and Kasturi exchanged promises.
</p>

<p>
To laugh together.
To dream together.
To face every adventure together.
</p>
`,

`
<p>
And whenever people looked at the night sky,
they could see two stars shining side by side.
</p>

<p>
The Star of Arnab
and
The Star of Kasturi.
</p>
`,

`
<div class="ending">

<h2>❤️ The End ❤️</h2>

<p>
And their love story continues among the clouds,
the stars,
and the endless dreams of eternity.
</p>

<p>
🌙 ✨ 🐨 🌸 ❤️
</p>

</div>
`
];

/* -------------------------
   PAGE COLLECTION
-------------------------- */

const pages = [];

/* Photo Pages */

for (let i = 0; i < images.length; i++) {

  pages.push({
    type: "photo",
    image: images[i],
    quote: quotes[i]
  });

}

/* Story Pages */

storyPages.forEach(page => {

  pages.push({
    type: "story",
    content: page
  });

});

/* -------------------------
   DOM ELEMENTS
-------------------------- */

const lockedBook =
document.getElementById("lockedBook");

const openBook =
document.getElementById("openBook");

const passwordInput =
document.getElementById("password");

const unlockBtn =
document.getElementById("unlockBtn");

const error =
document.getElementById("error");

const pageContainer =
document.getElementById("page");

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");

const pageNo =
document.getElementById("pageNo");

/* -------------------------
   PAGE STATE
-------------------------- */

let currentPage = 0;

/* -------------------------
   MUSIC
-------------------------- */

let music;

function startMusic() {

  if (music) return;

  music = new Audio(
    "assets/Khat Navjot Ahuja 128 Kbps.mp3"
  );

  music.loop = true;

  music.volume = 0.4;

  music.play().catch(() => {
    console.log("Music blocked");
  });

}

/* -------------------------
   PASSWORD
-------------------------- */

function unlockBook() {

  const value =
    passwordInput.value
      .trim()
      .toLowerCase();

  if (value !== PASSWORD) {

    error.textContent =
      "Wrong Answer ❤️";

    return;

  }

  lockedBook.classList.add("hidden");

  openBook.classList.remove("hidden");

  startMusic();

  renderPage();

}

/* -------------------------
   RENDER PAGE
-------------------------- */

function renderPage() {

  const pageData =
    pages[currentPage];

  if (pageData.type === "photo") {

    pageContainer.innerHTML = `
      <div class="photo-card">
        <img
          src="assets/${pageData.image}"
          alt="Photo"
        >

        <div class="quote">
          ${pageData.quote}
        </div>
      </div>
    `;

  }

  if (pageData.type === "story") {

    pageContainer.innerHTML = `
      <div class="story">
        ${pageData.content}
      </div>
    `;

  }

  pageNo.textContent =
    "Page " +
    (currentPage + 1) +
    " of " +
    pages.length;

  prevBtn.disabled =
    currentPage === 0;

  nextBtn.disabled =
    currentPage === pages.length - 1;

}

/* -------------------------
   BUTTON EVENTS
-------------------------- */

unlockBtn.addEventListener(
  "click",
  unlockBook
);

passwordInput.addEventListener(
  "keydown",
  function (e) {

    if (e.key === "Enter") {

      unlockBook();

    }

  }
);

nextBtn.addEventListener(
  "click",
  function () {

    if (
      currentPage <
      pages.length - 1
    ) {

      currentPage++;

      renderPage();

    }

  }
);

prevBtn.addEventListener(
  "click",
  function () {

    if (
      currentPage > 0
    ) {

      currentPage--;

      renderPage();

    }

  }
);

/* -------------------------
   KEYBOARD NAVIGATION
-------------------------- */

document.addEventListener(
  "keydown",
  function (e) {

    if (
      openBook.classList.contains(
        "hidden"
      )
    ) {
      return;
    }

    if (e.key === "ArrowRight") {

      if (
        currentPage <
        pages.length - 1
      ) {

        currentPage++;

        renderPage();

      }

    }

    if (e.key === "ArrowLeft") {

      if (
        currentPage > 0
      ) {

        currentPage--;

        renderPage();

      }

    }

  }
);
