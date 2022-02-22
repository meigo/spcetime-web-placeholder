<script>
  export let color = 'white';
</script>

<svg viewBox="0 0 612 230" width="100%" height="100%">
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="100%" height="158" />
    </clipPath>
  </defs>

  <g
    fill={color}
    fill-opacity="1"
    stroke="none"
    transform="translate(0, 0)"
    fill-rule="nonzero"
    clip-path="url(#cut-off-bottom)">
    <path
      id="s"
      d="M24.177 130.598v18.511c8.028 6.167 18.272 9.075 27.36 9.075 16.075 0 30.037-9.075 30.037-26.538 0-15.608-11.17-19.802-22.929-22.714l-6.642-1.63c-7.69-1.864-12.933-3.495-12.933-9.086 0-6.057 5.942-8.62 13.283-8.62 8.156 0 17.702 3.379 22.938 6.64V79.358c-6.632-4.422-15.365-6.632-23.404-6.632-15.493 0-30.037 8.144-30.037 25.84 0 16.773 13.148 22.014 24.327 24.577l7.69 1.747c6.525 1.514 10.37 3.029 10.37 7.921 0 6.057-6.058 8.619-13.166 8.619-9.554 0-20.145-5.125-26.894-10.832Z" />
    <path
      id="p"
      d="M125.605 74.589H95.684v81.499h16.987v-28.413h11.885c16.538 0 28.29-11.401 28.29-27.009 0-15.141-11.286-26.077-27.241-26.077Zm-12.934 37.38V90.761h13.05c6.059 0 10.021 4.195 10.021 10.021 0 6.409-4.428 11.187-11.069 11.187h-12.002Z" />
    <path
      id="c"
      d="M207.612 89.596c7.336 0 16.303 2.214 25.386 8.853V80.637c-8.85-6.166-19.214-7.911-27.016-7.911-23.756 0-42.606 16.056-42.606 42.729s18.85 42.846 42.489 42.846c8.035 0 18.283-1.862 27.133-8.028v-17.695c-9.083 6.639-18.05 8.852-25.502 8.852-15.022 0-26.783-9.085-26.783-25.975 0-16.889 11.877-25.859 26.899-25.859Z" />
    <path
      id="e"
      d="M306.76 156.088v-16.172h-40.291V122.9h30.277v-16.171h-30.277V90.761h38.428V74.589h-55.298v81.499h57.161Z" />
    <path id="t" d="M384.101 74.589h-66.943v16.172h24.92v65.327h17.103V90.761h24.92V74.589Z" />
    <path id="i" d="M396.794 74.589h17.103v81.499h-17.103z" />
    <path
      id="m"
      d="M515.659 74.589h-20.947l-21.666 61.241-21.549-61.241H430.55v81.499h15.939V106.84l18.171 49.248h16.889l18.171-49.248v49.248h15.939V74.589Z" />
    <path
      id="e2"
      d="M589.306 156.088v-16.172h-40.291V122.9h30.277v-16.171h-30.277V90.761h38.428V74.589h-55.298v81.499h57.161Z" />
  </g>
</svg>

<style>
  svg {
    position: absolute;
  }

  #s {
    opacity: 0;
    animation: 1.5s cubic-bezier(0, 0.3, 0.4, 1) 0.3s 1 forwards appear,
      5s cubic-bezier(0.4, 0, 0.4, 1) 1.8s infinite wave;
  }

  #p {
    opacity: 0;
    animation: 1.5s cubic-bezier(0, 0.3, 0.4, 1) 0.6s 1 forwards appear,
      5s cubic-bezier(0.4, 0, 0.4, 1) 2.1s infinite wave;
  }

  #c {
    opacity: 0;
    animation: 1.5s cubic-bezier(0, 0.3, 0.4, 1) 0.9s 1 forwards appear,
      5s cubic-bezier(0.4, 0, 0.4, 1) 2.4s infinite wave;
  }

  #e {
    opacity: 0;
    animation: 1.5s cubic-bezier(0, 0.3, 0.4, 1) 1.2s 1 forwards appear,
      5s cubic-bezier(0.4, 0, 0.4, 1) 2.7s infinite wave;
  }

  #t {
    opacity: 0;
    animation: 1.5s cubic-bezier(0, 0.3, 0.4, 1) 1.5s 1 forwards appear,
      5s cubic-bezier(0.4, 0, 0.4, 1) 3s infinite wave;
  }

  #i {
    opacity: 0;
    animation: 1.5s cubic-bezier(0, 0.3, 0.4, 1) 1.8s 1 forwards appear,
      5s cubic-bezier(0.4, 0, 0.4, 1) 3.3s infinite wave;
  }

  #m {
    opacity: 0;
    animation: 1.5s cubic-bezier(0, 0.3, 0.4, 1) 2.1s 1 forwards appear,
      5s cubic-bezier(0.4, 0, 0.4, 1) 3.6s infinite wave;
  }

  #e2 {
    opacity: 0;
    animation: 1.5s cubic-bezier(0, 0.3, 0.4, 1) 2.4s 1 forwards appear,
      5s cubic-bezier(0.4, 0, 0.4, 1) 3.9s infinite wave;
  }

  @keyframes appear {
    0% {
      transform: translateY(70px);
      opacity: 1;
    }
    100% {
      transform: translateY(-5px);
      opacity: 1;
    }
  }

  @keyframes wave {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-5px);
    }
  }
</style>
