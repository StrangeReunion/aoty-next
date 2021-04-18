`import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        <a href="https://youtube.com">YouTube here</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
`

import { BuilderCarousel } from "@builder.io/components";

export default function MyComponent(props) {
  return (
    <BuilderCarousel
      slides={[
        {
          content: [
            {
              "@type": "@builder.io/sdk:Element",
              "@version": 2,
              id: "builder-8d228ceba7fb457b8bb2a7ec7f3aa963",
              children: [
                {
                  "@type": "@builder.io/sdk:Element",
                  "@version": 2,
                  id: "builder-81d6f623fa3248b89fc0e6b4d0b6ccef",
                  component: {
                    name: "Image",
                    options: {
                      image:
                        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4f9a6ba45a774303ab4f2bff814a7dc1?width=660",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      lazy: true,
                      aspectRatio: 1.06,
                      sizes: "",
                      height: 1300,
                      width: 1226,
                      srcset:
                        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4f9a6ba45a774303ab4f2bff814a7dc1?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4f9a6ba45a774303ab4f2bff814a7dc1?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4f9a6ba45a774303ab4f2bff814a7dc1?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4f9a6ba45a774303ab4f2bff814a7dc1?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4f9a6ba45a774303ab4f2bff814a7dc1?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4f9a6ba45a774303ab4f2bff814a7dc1?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4f9a6ba45a774303ab4f2bff814a7dc1?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4f9a6ba45a774303ab4f2bff814a7dc1?width=660 660w",
                    },
                  },
                  responsiveStyles: {
                    large: {
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      flexShrink: "0",
                      boxSizing: "border-box",
                      minHeight: "20px",
                      minWidth: "20px",
                      overflow: "hidden",
                      flexGrow: "1",
                    },
                  },
                },
              ],
              responsiveStyles: {
                large: {
                  position: "relative",
                  display: "flex",
                  alignItems: "stretch",
                  flexDirection: "column",
                  flexGrow: "1",
                },
                small: {
                  height: "300px",
                },
              },
            },
          ],
        },
        {
          content: [
            {
              "@type": "@builder.io/sdk:Element",
              "@version": 2,
              id: "builder-1bed619743d34eb19781b45b73faf982",
              children: [
                {
                  "@type": "@builder.io/sdk:Element",
                  "@version": 2,
                  id: "builder-3ce066689f2d44f098fb32cf7f264586",
                  component: {
                    name: "Image",
                    options: {
                      image:
                        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa2344a0ebd704b0394cfeaca5e3ddf3c?width=660",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      lazy: true,
                      aspectRatio: 1.116,
                      sizes: "",
                      height: 1300,
                      width: 1165,
                      srcset:
                        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa2344a0ebd704b0394cfeaca5e3ddf3c?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa2344a0ebd704b0394cfeaca5e3ddf3c?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa2344a0ebd704b0394cfeaca5e3ddf3c?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa2344a0ebd704b0394cfeaca5e3ddf3c?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa2344a0ebd704b0394cfeaca5e3ddf3c?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa2344a0ebd704b0394cfeaca5e3ddf3c?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa2344a0ebd704b0394cfeaca5e3ddf3c?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa2344a0ebd704b0394cfeaca5e3ddf3c?width=660 660w",
                    },
                  },
                  responsiveStyles: {
                    large: {
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      flexShrink: "0",
                      boxSizing: "border-box",
                      minHeight: "20px",
                      minWidth: "20px",
                      overflow: "hidden",
                      flexGrow: "1",
                    },
                  },
                },
              ],
              responsiveStyles: {
                large: {
                  position: "relative",
                  display: "flex",
                  alignItems: "stretch",
                  flexDirection: "column",
                  height: "500px",
                  flexGrow: "1",
                },
                small: {
                  height: "300px",
                },
              },
            },
          ],
        },
        {
          content: [
            {
              "@type": "@builder.io/sdk:Element",
              "@version": 2,
              id: "builder-f09c3f38503f4d64bed56e66713e476e",
              children: [
                {
                  "@type": "@builder.io/sdk:Element",
                  "@version": 2,
                  id: "builder-a8cf1f41f4c04267ac99c30fb950086c",
                  component: {
                    name: "Image",
                    options: {
                      image:
                        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a1b17a6093a4d18be910dcad7835ecf?width=660",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      lazy: true,
                      aspectRatio: 1.333,
                      sizes: "",
                      height: 1300,
                      width: 975,
                      srcset:
                        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a1b17a6093a4d18be910dcad7835ecf?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a1b17a6093a4d18be910dcad7835ecf?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a1b17a6093a4d18be910dcad7835ecf?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a1b17a6093a4d18be910dcad7835ecf?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a1b17a6093a4d18be910dcad7835ecf?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a1b17a6093a4d18be910dcad7835ecf?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a1b17a6093a4d18be910dcad7835ecf?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a1b17a6093a4d18be910dcad7835ecf?width=660 660w",
                    },
                  },
                  responsiveStyles: {
                    large: {
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      flexShrink: "0",
                      boxSizing: "border-box",
                      minHeight: "20px",
                      minWidth: "20px",
                      overflow: "hidden",
                      flexGrow: "1",
                    },
                  },
                },
              ],
              responsiveStyles: {
                large: {
                  position: "relative",
                  display: "flex",
                  alignItems: "stretch",
                  flexDirection: "column",
                  height: "500px",
                  flexGrow: "1",
                },
                small: {
                  height: "300px",
                },
              },
            },
          ],
        },
      ]}
      autoplaySpeed={5}
      prevButton={[
        {
          "@type": "@builder.io/sdk:Element",
          "@version": 2,
          layerName: "Right arrow",
          id: "builder-00d5a18eaf7541cb90b80729534805f6",
          component: {
            name: "Image",
            options: {
              image:
                "https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fd909a5b91650499c9e0524cc904eeb77?width=20",
              lazy: true,
              srcset:
                "https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fd909a5b91650499c9e0524cc904eeb77?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fd909a5b91650499c9e0524cc904eeb77?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fd909a5b91650499c9e0524cc904eeb77?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fd909a5b91650499c9e0524cc904eeb77?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fd909a5b91650499c9e0524cc904eeb77?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fd909a5b91650499c9e0524cc904eeb77?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fd909a5b91650499c9e0524cc904eeb77?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fd909a5b91650499c9e0524cc904eeb77?width=20 20w",
              sizes: "",
              height: 20,
              width: 20,
            },
          },
          responsiveStyles: {
            large: {
              position: "relative",
              display: "flex",
              alignItems: "stretch",
              flexDirection: "column",
              height: "30px",
            },
          },
        },
      ]}
      nextButton={[
        {
          "@type": "@builder.io/sdk:Element",
          "@version": 2,
          layerName: "Left arrow",
          id: "builder-e3feee1281354691b2d6eaef9ac471af",
          component: {
            name: "Image",
            options: {
              image:
                "https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fdb2a9827561249aea3817b539aacdcdc?width=20",
              lazy: true,
              srcset:
                "https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fdb2a9827561249aea3817b539aacdcdc?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fdb2a9827561249aea3817b539aacdcdc?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fdb2a9827561249aea3817b539aacdcdc?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fdb2a9827561249aea3817b539aacdcdc?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fdb2a9827561249aea3817b539aacdcdc?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fdb2a9827561249aea3817b539aacdcdc?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fdb2a9827561249aea3817b539aacdcdc?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Fdb2a9827561249aea3817b539aacdcdc?width=20 20w",
              sizes: "",
              height: 20,
              width: 20,
            },
          },
          responsiveStyles: {
            large: {
              position: "relative",
              display: "flex",
              alignItems: "stretch",
              flexDirection: "column",
              height: "30px",
            },
          },
        },
      ]}
      responsive={[
        {
          width: 3000,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
        {
          width: 400,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      ]}
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        position: "relative",
        flexShrink: "0",
        boxSizing: "border-box",
        marginTop: "20px",
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingBottom: "30px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "500px",
        "@media (max-width: 991px)": {
          width: "90%",
        },
      }}
    />
  );
}
