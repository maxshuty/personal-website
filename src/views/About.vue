<template>
  <div class="about">
    <div class="about__content">
      <h1>Max Poshusta</h1>
      <p>Born in 1989 in Rochester Minnesota</p>

      <div>
        <h2>My journey into Computers</h2>

        <div>
          <h3>Accessibility story</h3>
          <p>
            Software develeper with many passions. Having spent many of my early
            years simply not caring about accessibility until one day that I
            went to a park. The park was completely accessible with wheel chair
            capable merry-go-rounds to swings and zip-lines. I had an epiphany -
            not a single application I had ever worked on was accessible. I was
            literally preventing people from using applications I had built due
            to my own ignorance.
          </p>
          <p>
            After this realization I took it upon myself to change my ways... To
            be an advocate for accessibility. To help advocate for other
            developers to make their applications accessible both at work and
            through contributions online.
          </p>
        </div>
      </div>

      <div>
        <h2>My playlist</h2>
        <p>
          Many people claim they "listen to anything"... well my musical tastes
          range from 90's alternative to reggae rock to heavy metal to today's
          top hits. I would have to say reggae / reggae rock is my most played.
        </p>

        <p>
          Current artists and songs that are in my heavy rotation in no
          particular order:
        </p>

        <ul>
          <li>Dirty Heads - "Cabin by the sea"</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  &__content {
    max-width: 1000px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
