import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CartPreview from "../../components/checkout/CartPreview";
import ProductPage from "@/components/productPage/index";

export async function getStaticPaths() {
  // const url = new URL(process.env.URL || "http://localhost:3000");
  // url.pathname = "/api/products";

  // const res = await fetch(url.toString());

  // if (!res.ok) {
  //   console.error(res);
  //   return { props: {} };
  // }

  // const data = await res.json();

  // console.log(
  //   "res==*******=>",
  //   data.products.edges.map(({ node }: any) => `/product/${node.handle}`)
  // );
  return {
    // paths: data.products.edges.map(
    //   ({ node }: any) => `/product/${node.handle}`
    // ),
    // In case you're building this yourself, the first deployment can't call
    // the API because it hasn't been deployed yet. This test path will get you
    // through that first deploy.
    paths: ["/product/test"],
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  // const url = new URL(process.env.URL || "http://localhost:3000");
  // url.pathname = "/api/products";

  // const res = await fetch(url.toString());

  // if (!res.ok) {
  //   console.error(res);
  //   return { props: {} };
  // }

  // const data = await res.json();
  // console.log(
  //   "data===>",
  //   data.products.edges.map(({ node }: any) => node)
  // );

  // const product = data.products.edges
  //   .map(({ node }: any) => {
  //     if (node.totalInventory <= 0) {
  //       return false;
  //     }

  //     return {
  //       id: node.id,
  //       title: node.title,
  //       description: node.descriptionHtml,
  //       quantityAvailable: node.totalInventory,
  //       images: node.images.edges,
  //       imageSrc: node.images.edges[0].node.src,
  //       imageAlt: node.title,
  //       price: node.variants.edges[0].node.priceV2,
  //       compareAtPrice: node.variants.edges[0].node.compareAtPriceV2,
  //       variants: node.variants,
  //       slug: node.handle,
  //       reviews: {
  //         ratingAverage: node.ratingAverage.value || 0,
  //         ratingCount: node.ratingCount.value || 0,
  //         productReviews: node.productReviews,
  //       },
  //     };
  //   })
  //   .find(({ slug }: any) => slug === params.slug);

  return {
    // props: { product },
    // In case you're building this yourself, the first deployment can't call
    // the API because it hasn't been deployed yet. This dummy product will get
    // you through that first deploy.
    props: {
      product: {
        dummyProduct,
      },
    },
  };
}

export default function Product({ product }: any) {
  // console.log("product ===>", JSON.stringify(product));

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between ">
      <CartPreview />
      <Header />
      <ProductPage product={product} />
      <Footer />
    </div>
  );
}
const dummyProduct = {
  id: "gid://shopify/Product/8036949295328",
  title: "PocketRoller",
  description:
    '<div id="shopify-section-sections--18601342173500__footer" class="shopify-section shopify-section-group-footer-group"><footer class="footer color-accent-1 gradient section-sections--18601342173500__footer-padding">\n<div class="footer__content-top page-width">\n<div class="footer-block--newsletter">\n<div>\n<meta charset="utf-8">\n<p>Introducing the PocketRoller - the ultimate compact and portable foam roller designed for active individuals on-the-go!</p>\n<p>Say goodbye to muscle soreness and hello to rejuvenated muscles with the PocketRoller. This innovative collapsible foam roller easily fits into your backpack, gym bag, or carry-on luggage, ensuring you never miss out on the benefits of foam rolling, no matter where life takes you.</p>\n<p>Constructed with high-density foam and a durable inner core, the PocketRoller delivers the perfect balance of firmness and comfort to effectively target your muscles, relieving tension and promoting faster recovery. Its unique collapsible design allows you to effortlessly extend and retract the roller, making it simple to use and easy to store.</p>\n<p>Whether you\'re a seasoned athlete or just starting your fitness journey, the PocketRoller is an essential tool for maintaining muscle health, improving flexibility, and enhancing overall performance. Experience the convenience and effectiveness of the PocketRoller and elevate your fitness game today!</p>\n</div>\n</div>\n</div>\n</footer></div>\n<br>\n<div>\n<div class="locale-selectors__container">\n<div class="locale-selectors__content">\n<form action="https://www.physiocaretherapy.com/localization" method="POST"><label class="locale-selectors__label" id="locale_code_label" for="locale_code"></label></form>\n<br>\n</div>\n</div>\n</div>',
  quantityAvailable: 500,
  images: [
    {
      node: {
        src: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/image_2.webp?v=1682017036",
        altText: null,
      },
    },
    {
      node: {
        src: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/image.webp?v=1682017036",
        altText: null,
      },
    },
    {
      node: {
        src: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/image_1.webp?v=1682017036",
        altText: null,
      },
    },
    {
      node: {
        src: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/6a517b61-8f35-4d63-a84f-e0e099ef4186.__CR0_0_5820_3600_PT0_SX970_V1.jpg?v=1682017036",
        altText: null,
      },
    },
    {
      node: {
        src: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/Pilates-Yoga-Column-Adjustable-Yoga-Foam-Roller-Portable-Fitness-Equipment-Leg-Back-Muscle-Massage-Relaxation-Retractable.jpg_640x640_1.jpg?v=1682017036",
        altText: null,
      },
    },
    {
      node: {
        src: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/Pilates-Yoga-Column-Adjustable-Yoga-Foam-Roller-Portable-Fitness-Equipment-Leg-Back-Muscle-Massage-Relaxation-Retractable.jpg_640x640_2.jpg?v=1682017036",
        altText: null,
      },
    },
    {
      node: {
        src: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/Pilates-Yoga-Column-Adjustable-Yoga-Foam-Roller-Portable-Fitness-Equipment-Leg-Back-Muscle-Massage-Relaxation-Retractable.jpg_640x640_3.jpg?v=1682017036",
        altText: null,
      },
    },
    {
      node: {
        src: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/Pilates-Yoga-Column-Adjustable-Yoga-Foam-Roller-Portable-Fitness-Equipment-Leg-Back-Muscle-Massage-Relaxation-Retractable.jpg_640x640_f6508ad8-2a1f-4374-ac90-0d2a44a2f40c.jpg?v=1682017036",
        altText: null,
      },
    },
    {
      node: {
        src: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/Pilates-Yoga-Column-Adjustable-Yoga-Foam-Roller-Portable-Fitness-Equipment-Leg-Back-Muscle-Massage-Relaxation-Retractable.jpg_640x640_b658d250-dd9e-4e05-8ea5-541036fbc8f3.webp?v=1682017331",
        altText: null,
      },
    },
  ],
  imageSrc:
    "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/image_2.webp?v=1682017036",
  imageAlt: "PocketRoller",
  price: { amount: "40.0", currencyCode: "USD" },
  compareAtPrice: { amount: "82.0", currencyCode: "USD" },
  variants: {
    edges: [
      {
        node: {
          id: "gid://shopify/ProductVariant/43979906416864",
          title: "Black",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/Pilates-Yoga-Column-Adjustable-Yoga-Foam-Roller-Portable-Fitness-Equipment-Leg-Back-Muscle-Massage-Relaxation-Retractable.jpg_640x640_b658d250-dd9e-4e05-8ea5-541036fbc8f3.webp?v=1682017331",
            altText: null,
          },
          quantityAvailable: 100,
          priceV2: { amount: "40.0", currencyCode: "USD" },
          compareAtPriceV2: { amount: "82.0", currencyCode: "USD" },
        },
      },
      {
        node: {
          id: "gid://shopify/ProductVariant/43979906449632",
          title: "Pink",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/Pilates-Yoga-Column-Adjustable-Yoga-Foam-Roller-Portable-Fitness-Equipment-Leg-Back-Muscle-Massage-Relaxation-Retractable.jpg_640x640_3.jpg?v=1682017036",
            altText: null,
          },
          quantityAvailable: 100,
          priceV2: { amount: "40.0", currencyCode: "USD" },
          compareAtPriceV2: { amount: "82.0", currencyCode: "USD" },
        },
      },
      {
        node: {
          id: "gid://shopify/ProductVariant/43979906482400",
          title: "Yellow",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/Pilates-Yoga-Column-Adjustable-Yoga-Foam-Roller-Portable-Fitness-Equipment-Leg-Back-Muscle-Massage-Relaxation-Retractable.jpg_640x640_1.jpg?v=1682017036",
            altText: null,
          },
          quantityAvailable: 100,
          priceV2: { amount: "40.0", currencyCode: "USD" },
          compareAtPriceV2: { amount: "82.0", currencyCode: "USD" },
        },
      },
      {
        node: {
          id: "gid://shopify/ProductVariant/43979906515168",
          title: "Blue",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/Pilates-Yoga-Column-Adjustable-Yoga-Foam-Roller-Portable-Fitness-Equipment-Leg-Back-Muscle-Massage-Relaxation-Retractable.jpg_640x640_f6508ad8-2a1f-4374-ac90-0d2a44a2f40c.jpg?v=1682017036",
            altText: null,
          },
          quantityAvailable: 100,
          priceV2: { amount: "40.0", currencyCode: "USD" },
          compareAtPriceV2: { amount: "82.0", currencyCode: "USD" },
        },
      },
      {
        node: {
          id: "gid://shopify/ProductVariant/43979906547936",
          title: "Red",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0644/7104/0224/products/Pilates-Yoga-Column-Adjustable-Yoga-Foam-Roller-Portable-Fitness-Equipment-Leg-Back-Muscle-Massage-Relaxation-Retractable.jpg_640x640_2.jpg?v=1682017036",
            altText: null,
          },
          quantityAvailable: 100,
          priceV2: { amount: "40.0", currencyCode: "USD" },
          compareAtPriceV2: { amount: "82.0", currencyCode: "USD" },
        },
      },
    ],
  },
  slug: "rectratable-foam-roller",
  reviews: {
    ratingAverage: '{"scale_min":"0.0","scale_max":"5.0","value":"4.9"}',
    ratingCount: "5",
    productReviews: {
      value:
        '[{"title":"Compact and Convenient","name":"Emma","rating":5,"description":"I absolutely love my PocketRoller! It\'s so easy to take with me to the gym, and it really helps with my muscle recovery. The collapsible design is a game-changer. Highly recommended!","date":"2023-04-10"},{"title":"Great for Travel","name":"Mike","rating":4.5,"description":"As someone who travels frequently for work, I always struggled to find a foam roller that was portable enough. The PocketRoller is perfect for my needs and has made a huge difference in my muscle health.","date":"2023-04-08"},{"title":"Effective and Stylish","name":"Sophia","rating":4.2,"description":"The PocketRoller not only looks great with its premium design, but it\'s also very effective in relieving muscle soreness. I just wish it came in more colors.","date":"2023-04-05"},{"title":"A Must-Have for Fitness Enthusiasts","name":"James","rating":5,"description":"I\'ve tried a lot of foam rollers, but the PocketRoller is by far my favorite. Its compact size and functionality make it a must-have for anyone serious about their fitness routine.","date":"2023-04-02"},{"title":"Impressive Quality","name":"Olivia","rating":4.4,"description":"The PocketRoller is made of high-quality materials and works well for my muscle recovery.","date":"2023-03-28"},{"title":"Excellent Recovery Tool","name":"Daniel","rating":4.7,"description":"I can\'t believe how well this foam roller works for relieving muscle tension! The portability is a bonus.","date":"2023-03-22"},{"title":"Just What I Needed","name":"Mia","rating":4.6,"description":"I\'m so glad I found the PocketRoller! It\'s a fantastic recovery tool and so convenient to carry around.","date":"2023-03-18"},{"title":"Perfect for Runners","name":"Lucas","rating":4.8,"description":"As a runner, the PocketRoller has become my go-to for muscle recovery. It\'s easy to use and perfect for post-run stretching.","date":"2023-03-15"},{"title":"Amazing Product","name":"Ella","rating":5,"description":"The PocketRoller has been a game changer for my post-workout recovery. I can\'t imagine going back to a traditional foam roller.","date":"2023-03-11"},{"title":"Life Saver","name":"Liam","rating":4.9,"description":"I bring my PocketRoll everwhere","date":"2023-01-11"},{"title":"Life Saver","name":"Liam","rating":4.9,"description":"I bring my PocketRoller everywhere with me. It\'s a lifesaver for those long days at the office when my muscles are tight and sore. Highly recommend!","date":"2023-03-10"},{"title":"Worth the Price","name":"Ava","rating":4.3,"description":"The PocketRoller is a bit pricier than other foam rollers, but its portability and performance make it worth every penny!","date":"2023-03-06"},{"title":"Easy to Use","name":"Noah","rating":4.5,"description":"The PocketRoller is simple to use and provides excellent relief for my sore muscles.","date":"2023-03-02"},{"title":"Great for Athletes","name":"Emily","rating":4.6,"description":"As a college athlete, I need to keep my muscles in peak condition. The PocketRoller has been a fantastic addition to my routine!","date":"2023-02-28"},{"title":"So Convenient!","name":"David","rating":5,"description":"I love how easy it is to take the PocketRoller with me wherever I go. It\'s an essential part of my gym bag now!","date":"2023-02-24"},{"title":"Better Than Expected","name":"Sophie","rating":4.7,"description":"The PocketRoller exceeded my expectations. It\'s compact, durable, and really helps with my muscle recovery.","date":"2023-02-20"},{"title":"Quick Relief","name":"Benjamin","rating":4.4,"description":"The PocketRoller provides quick and effective relief for my tight muscles. It\'s a great investment!","date":"2023-02-16"},{"title":"Highly Recommended","name":"Grace","rating":4.8,"description":"I can\'t say enough good things about the PocketRoller. It\'s helped me so much with my muscle recovery and flexibility.","date":"2023-02-12"},{"title":"Durable and Effective","name":"Samuel","rating":4.2,"description":"The PocketRoller is made of high-quality materials and works wonders on my sore muscles.","date":"2023-02-08"},{"title":"Innovative Design","name":"Lily","rating":5,"description":"I\'m in love with the PocketRoller\'s design. It\'s so easy to use, and the collapsible feature is genius!","date":"2023-02-04"},{"title":"Compact and Powerful","name":"William","rating":4.5,"description":"Don\'t let the PocketRoller\'s small size fool you - it\'s a powerful recovery tool!","date":"2023-02-08"},{"title":"Perfect for Post-Workout","name":"Zoe","rating":4.9,"description":"I love using my PocketRoller after my workouts. It\'s super convenient and helps speed up my recovery.","date":"2023-01-29"},{"title":"Must-Have Fitness Accessory","name":"Ethan","rating":4.6,"description":"The PocketRoller is the perfect addition to my fitness routine. It\'s compact, effective, and great for on-the-go use.","date":"2023-01-25"},{"title":"Best Foam Roller","name":"Isabella","rating":5,"description":"The PocketRoller is hands down the best foam roller I\'ve ever used. Its compact design and effectiveness make it a must-have!","date":"2023-01-22"}]',
    },
  },
};
