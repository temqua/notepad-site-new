<header>
  <div id="logo">
    <a href="/">
      <img
        src="/assets/logo_192x192.png"
        width="64"
        height="64"
        alt="Notepad logo"
      />
    </a>
  </div>
  <div id="links">
    <div><a href="/">Home</a>&nbsp;</div>
    <div>
      <a href="/about">Help</a>
    </div>
  </div>
</header>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 30px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  }

  header a {
    font-weight: bold;
    font-size: 24px;
    color: #2c3e50;
    text-decoration: none;
  }

  header :global(a.router-link-exact-active) {
    color: #0821ff;
  }

  #links a:hover,
  #links a:focus {
    background-color: #f5f5f5;
  }

  #logo {
    display: grid;
    justify-content: start;
    align-content: center;
  }

  #logo img {
    border-radius: 4px;
  }

  #links {
    display: grid;
    justify-content: center;
    align-content: center;
    gap: 20px;
  }

  img {
    filter: drop-shadow(4px 3px 6px #aaa);
  }

  @media (min-width: 350px) {
    header {
      grid-auto-flow: column;
      padding: 0;
      text-align: right;
    }
    header a {
      padding: 2rem;
    }
    #links {
      grid-auto-flow: column;
      justify-content: right;
      margin-right: 2rem;
      gap: 0;
    }
  }

  @media (min-width: 640px) {
    #links {
      margin-right: 4rem;
    }
  }
</style>
