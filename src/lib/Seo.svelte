<script>
  import SvelteSeo from 'svelte-seo';

  let url = 'https://freedom-web-placeholder.pages.dev/';
  let title = 'Freedom';
  let description = '';
</script>

<svelte:head>
  <meta name="title" content={title} />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<SvelteSeo
  {title}
  {description}
  nofollow
  noindex
  openGraph={{
    title,
    description,
    type: 'website',
    url,
    images: [
      {
        url: `${url}og-image.png`,
        width: 1200,
        height: 628,
        alt: 'Og Image Alt',
      },
    ],
  }} />
