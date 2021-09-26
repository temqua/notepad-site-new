<script>
  import anime from "animejs/lib/anime.es.js";
  import { onMount } from "svelte";

  onMount(() => {
    const textWrapper = document.getElementById("product-slogan");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: "#product-slogan .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1),
      })
      .add({
        targets: "#product-slogan h1",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  });
</script>

<div>
  <section id="main-banner" class="section">
    <div id="main-grid">
      <div id="product-slogan" class="product-description">
        <h1>CONTROL YOUR LIFESTYLE</h1>
      </div>
      <div>
        <img
          src="/assets/screenshots/1.png"
          alt="Banner"
          width="305"
          height="648"
        />
      </div>
    </div>
  </section>

  <section class="section section-grid">
    <div class="product-info product-description">
      <h1>Fully customizable 🎨</h1>
      <span>You choose your own style settings and color themes</span>
    </div>
    <div class="product-image">
      <img
        src="/assets/screenshots/2.png"
        alt="Color palette"
        width="305"
        height="648"
      />
      <img
        src="/assets/screenshots/3.png"
        alt="Appearance settings"
        width="305"
        height="648"
      />
    </div>
  </section>
  <section class="section section-grid">
    <div class="product-image">
      <img
        src="/assets/screenshots/5.png"
        alt="Backup info"
        width="305"
        height="648"
      />
      <img
        src="/assets/screenshots/6.png"
        alt="Backups list"
        width="305"
        height="648"
      />
    </div>
    <div class="product-info">
      <h1>Reliable</h1>
      <span
        >Your data are in safety with our out-of-the-box every day backup and
        Google Disk Sync 🔄</span
      >
    </div>
  </section>
  <section class="section section-grid">
    <div class="product-info">
      <h1>Multifunctional</h1>
      <span>Markdown edit and preview</span>
    </div>
    <div class="product-image">
      <img
        src="/assets/screenshots/7.png"
        alt="Markdown edit"
        width="305"
        height="648"
      />
      <img
        src="/assets/screenshots/8.png"
        alt="Markdown result"
        width="305"
        height="648"
      />
    </div>
  </section>
  <!--"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"-->
  <section class="section products-download">
    <div class="product-link">
      <h1>Lite</h1>
      <a
        href="https://play.google.com/store/apps/details?id=ru.diman169.notepad.lite&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        ><img
          width="430"
          height="170"
          alt="Get it on Google Play"
          src="/assets/en_badge_web_generic.png"
        /></a
      >
    </div>
    <div class="product-link">
      <h1>Pure</h1>
      <a
        href="https://play.google.com/store/apps/details?id=ru.diman169.notepad&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      >
        <img
          alt="Get it on Google Play"
          width="430"
          height="170"
          src="/assets/en_badge_web_generic.png"
        />
      </a>
    </div>
    <div class="product-link">
      <h1>Secure</h1>
      <a
        href="https://play.google.com/store/apps/details?id=ru.diman169.notepad&hl=ru&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      >
        <img
          alt="Get it on Google Play"
          width="430"
          height="170"
          src="/assets/en_badge_web_generic.png"
        />
      </a>
    </div>
  </section>
</div>

<style>
  #main-banner {
    background: none;
  }

  #main-grid {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
  }

  .section-grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  .product-info {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    font-size: 36px;
    margin-bottom: 3rem;
  }

  .product-info h1 {
    margin-top: 0;
  }

  .product-image {
    display: block;
    text-align: center;
  }

  .products-download {
    display: grid;
    grid-template-columns: 1fr;
  }

  .products-download h1 {
    padding-left: 1.5rem;
    font-size: 36px;

  }

  .product-link {
    display: flex;
    flex-direction: column;
  }

  #product-slogan :global(.letter) {
    font-weight: 700;
    font-size: 36px;
    color: #222;
  }

  /* .panel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin: 10px;
    -webkit-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.5);
  } */

  @media (min-width: 640px) {
    .product-image {
      display: flex;
      justify-content: space-around;
    }
  }

  @media (min-width: 1024px) {
    #product-slogan :global(.letter) {
      color: #fff;
    }

    #product-slogan {
      margin-bottom: 3rem;
    }

    .section-grid {
      grid-template-columns: 1fr 1fr;
    }

    #main-grid {
      grid-template-columns: 1fr 1fr;
    }

    #main-banner {
      display: block;
      width: 100%;
      background-image: url("/assets/banner.jpg");
      background-repeat: no-repeat;
    }

    .products-download {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
