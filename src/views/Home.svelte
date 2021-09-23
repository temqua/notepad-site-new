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
      <div id="product-slogan">
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
    <div class="product-info">
      <h1>Fully customizable</h1>
      <span>You choose your own style with color themes</span>
    </div>
    <div class="product-image">
      <img src="/assets/screenshots/2.png" alt="" width="305" height="648" />
      <img src="/assets/screenshots/3.png" alt="" width="305" height="648" />
    </div>
  </section>
  <!-- <div class="cards-grid">
    <div class="panel">
      <div>
        <p>Customizable</p>
      </div>

      <img
        src="/assets/customizable.svg"
        alt="Customizable icon"
        width="32px"
        height="32px"
      />
    </div>
    <div class="panel">
      <span>Secure</span>
      <span></span>
      <img
        src="/assets/reliable.svg"
        alt="Reliable icon"
        width="32px"
        height="32px"
      />
    </div>
    <div class="panel">
      <span>Attentive</span>
      <span></span>
      <img
        src="/assets/reliable.svg"
        alt="Reliable icon"
        width="32px"
        height="32px"
      />
    </div>
  </div> -->
  <div class="flex">
    <a
      href="https://play.google.com/store/apps/details?id=ru.diman169.notepad&hl=ru&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    >
      <img
        alt="Get it on Google Play"
        width="430"
        height="170"
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      />
    </a>
  </div>
</div>

<style>
  #main-banner {
    background: none;
  }

  #main-grid {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
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
  }

  #product-slogan :global(.letter) {
    font-weight: 700;
    font-size: 36px;
    color: #222;
  }

  .panel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin: 10px;
    -webkit-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.5);
  }

  .cards-grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    .cards-grid {
      grid-template-columns: 1fr;
    }

    #product-slogan :global(.letter) {
      color: #fff;
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
  }
</style>
