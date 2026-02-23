import Head from "next/head";
import "../../public/assets/css/plugins/fontawesome.css";
import "../../public/assets/css/plugins/magnifying-popup.css";
import "../../public/assets/css/plugins/swiper.css";
import "../../public/assets/css/plugins/metismenu.css";
import "../../public/assets/css/vendor/bootstrap.min.css";
import "react-modal-video/css/modal-video.min.css";
import "../../public/assets/css/style.css";
import Script from "next/script";

export const metadata = {
  title: "Identiq | Verificação de Identidade, KYC e Antifraude",
  description:
    "Plataforma de verificação de identidade, KYC e prevenção a fraudes para empresas. Onboarding seguro, biometria, validação de documentos e compliance.",
  icons: {
    icon: "/assets/images/fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        {/* Title */}
        <title>Identiq | Verificação de Identidade, KYC e Antifraude</title>

        {/* Basics */}
        <meta name="author" content="Identiq" />
        <meta
          name="description"
          content="Plataforma de verificação de identidade, KYC e prevenção a fraudes para empresas. Onboarding seguro, biometria, validação de documentos e compliance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/fav.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://identiq.com.br/" />

        {/* Robots */}
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Identiq" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:title"
          content="Identiq | Verificação de Identidade, KYC e Antifraude"
        />
        <meta
          property="og:description"
          content="Verificação de identidade e prevenção a fraudes para empresas. KYC, biometria, validação de documentos e compliance."
        />
        <meta property="og:url" content="https://identiq.com.br/" />
        <meta property="og:image" content="https://identiq.com.br/assets/images/og/identiq-og.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Identiq | Verificação de Identidade, KYC e Antifraude"
        />
        <meta
          name="twitter:description"
          content="Verificação de identidade e prevenção a fraudes para empresas. KYC, biometria, validação de documentos e compliance."
        />
        <meta name="twitter:image" content="https://identiq.com.br/assets/images/og/identiq-og.png" />

        {/* Theme color */}
        <meta name="theme-color" content="#0B1220" />

        {/* Preconnects (fonts or external assets if used) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Identiq",
              url: "https://identiq.com.br/",
              logo: "https://identiq.com.br/assets/images/logo/identiq-logo.png",
              description:
                "Plataforma de verificação de identidade, KYC e prevenção a fraudes para empresas.",
              sameAs: [
                "https://www.linkedin.com/company/identiq",
                "https://www.instagram.com/identiq",
              ],
            }),
          }}
        />

        {/* JSON-LD WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Identiq",
              url: "https://identiq.com.br/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://identiq.com.br/busca?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>

      <body className="index-one">
        {children}

        <Script src="/assets/js/plugins/smooth-scroll.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}