<div class="about">
  <div class="container">
    <iframe
      src="https://www.youtube.com/embed/videoseries?list=PLYsidn-CaDmEzTPhAtQgZ5MXp5dalLEI_"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</div>

<style>
  .about {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin: 40px 0;
  }

  .container {
    width: 90vw;
    height: 53vw;
  }

  iframe {
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    .container {
      width: 560px;
      height: 315px;
    }
  }
</style>
