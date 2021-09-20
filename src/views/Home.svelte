<script>
</script>

<div>
  <div id="main-banner">
    <div id="product-slogan">Control your life</div>
    <div>
      <img
        src="/assets/screenshots/1.png"
        alt="Banner"
        width="305"
        height="648"
      />
    </div>
  </div>

  <div class="section-grid">
    <div class="product-info">
      <h1>Fully customizable</h1>
      <span>You choose your own style with color themes</span>
    </div>
    <div class="product-image">
      <img src="/assets/screenshots/2.png" alt="" width="305" height="648" />
      <img src="/assets/screenshots/3.png" alt="" width="305" height="648" />
    </div>
  </div>
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
    display: none;
  }

  .section-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 40px 0;
  }

  .product-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 36px;
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

    #main-banner {
      width: 100%;
      height: 600px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-end;
      background-image: url("/assets/banner.jpg");
    }
  }
</style>
