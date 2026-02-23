"use client";
import React from "react";
import Link from "next/link";

function ServiceBanner() {
  return (
    <div className="rts-service-banner-area ptb--80 position-relative">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-7 mb_md--30 mb_sm--30">
            <div className="service-banner-content-wrapper">
              <div
                className="bread-plug wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".2s"
              >
                <Link href="/">Home</Link>
                <i className="fa-regular fa-chevron-right" />
                <Link href="/service" className="current">
                  Soluções
                </Link>
              </div>

              <h1
                className="title wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".4s"
              >
                Veja como a Identiq ajuda sua operação a aprovar com segurança
              </h1>

              <p
                className="disc wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".6s"
              >
                Verificação de identidade, antifraude e compliance com decisões em
                tempo real, regras configuráveis e trilhas para auditoria.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="thumbnail-bannr-service-right jarallax">
              <img
                className="jarallax-img"
                src="/assets/images/service/04.webp"
                alt="service-area"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="shape-area-start">
        <img
          src="/assets/images/banner/06.png"
          alt="service-banner-shape"
          className="one wow move-right"
        />
        <img
          src="/assets/images/banner/07.png"
          alt="service-banner-shape"
          className="two wow move-left"
        />
      </div>
    </div>
  );
}

export default ServiceBanner;