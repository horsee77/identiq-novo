"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { ReactSVG } from "react-svg";

function LargeVideo() {
  const [isOpen, setIsOpen] = useState(false);

  // troque só o link se quiser outro vídeo
  const videoLink = "https://www.youtube.com/watch?v=tVbtTL_sJHI";
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    if (videoLink) {
      const urlParts = videoLink.split("v=");
      const id = urlParts.length > 1 ? urlParts[1].split("&")[0] : null;
      setVideoId(id);
    }
  }, [videoLink]);

  return (
    <div>
      {/* large video area start */}
      <div className="alrge-video-area rts-section-gap">
        <div className="shape-top">
          <img
            loading="lazy"
            rel="preload"
            src="assets/images/video/shape/01.png"
            alt=""
            className="wow move-right"
            data-wow-offset={120}
          />
        </div>

        <div className="shape-bottom">
          <img
            loading="lazy"
            rel="preload"
            src="assets/images/video/shape/02.png"
            alt=""
            className="wow move-left"
            data-wow-offset={120}
          />
        </div>

        <div className="container-large">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-video-top">
                <p className="large">
                  Criamos uma{" "}
                  <span className="move-right" data-aos="move-right">
                    experiência de verificação
                  </span>{" "}
                  para reduzir fraudes e{" "}
                  <span data-aos="move-left">aumentar aprovações</span> com foco em
                  compliance.
                </p>

                <p className="disc">
                  A Identiq combina KYC, biometria e inteligência de risco para validar
                  identidades com rapidez e segurança.
                </p>
              </div>
            </div>

            <div className="col-lg-12 mt--70">
              <div className="image--large-video jarallax">
                <img
                  className="jarallax-img"
                  src="assets/images/video/01.webp"
                  alt="large"
                />
                <div className="vedio-icone">
                  <Link href={"#"} className="vedio-icone">
                    <span
                      id="play-video"
                      className="video-play-button"
                      onClick={() => setIsOpen(true)}
                    >
                      <span />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="large-video-bottom">
                <h2 className="title wow fadeInUp" data-wow-delay=".1s">
                  Baixe o guia de KYC e prevenção a fraudes
                </h2>

                <p className="disc wow fadeInUp" data-wow-delay=".3s">
                  Veja boas práticas, evite erros comuns e entenda como melhorar o
                  onboarding com segurança e compliance.
                </p>

                <a
                  href="/solucoes"
                  className="rts-btn btn-primary wow fadeInUp"
                  data-wow-delay=".5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.7s",
                    animationName: "fadeInUp",
                  }}
                >
                  Ver soluções
                  <ReactSVG src="assets/images/service/icons/13.svg" alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* large video area end */}

      {videoId && (
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default LargeVideo;