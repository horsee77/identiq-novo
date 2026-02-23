// SLUG: /solucoes/risco
// sem hífen

import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaOne from "@/components/cta/CtaOne";

export default function Home() {
  return (
    <div className="#">
      <HeaderTwo />

      <>
        <div className="rts-career-banner-area rts-section-gap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="career-banner-wrapper">
                  <h1 className="title">Score e risco para decidir com mais segurança</h1>
                  <p className="disc">
                    Reduza fraude e aumente aprovações com decisões baseadas em risco. A Identiq ajuda
                    sua operação a aplicar regras e scores para aprovar, revisar ou reprovar em tempo
                    real conforme seu apetite a risco.
                  </p>
                  <a href="/contato" className="rts-btn btn-primary btn-bold">
                    Falar com especialista
                  </a>
                </div>
              </div>

              <div className="col-lg-6 pl--30 pl_md--15 pl_sm--10 pt_md--30 pt_sm--30">
                <div className="thumbnail-top jarallax thumbnail-consultancy" data-speed=".85">
                  <img
                    className="jarallax-img"
                    src="assets/images/industry/08.webp"
                    alt="career"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-one-industry">
          <div className="consultancy-bottom rts-section-gap career-two-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 pr--40 pr_md--10 pr_sm--10 mb_md--30 mb_sm--25">
                  <div className="thumbnail-consultancy jarallax">
                    <img
                      className="jarallax-img"
                      src="assets/images/industry/02.webp"
                      alt="consultancy"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="career-right-two-wrapper">
                    <h2 className="title">Como funciona o score de risco</h2>
                    <p>
                      Transforme sinais do seu fluxo em uma decisão consistente. Você define regras e
                      limites para aprovar automaticamente, enviar para revisão ou bloquear tentativas
                      suspeitas.
                    </p>

                    <div className="check-wrapper-main">
                      <div className="single-wrapper">
                        <div className="check-wrapper">
                          <div className="single-check">
                            <img src="assets/images/service/01.svg" alt="service" />
                            <p>Coleta de sinais do onboarding e da transação</p>
                          </div>
                          <div className="single-check">
                            <img src="assets/images/service/01.svg" alt="service" />
                            <p>Aplicação de regras e critérios por cenário</p>
                          </div>
                          <div className="single-check">
                            <img src="assets/images/service/01.svg" alt="service" />
                            <p>Score de risco para orientar a decisão</p>
                          </div>
                          <div className="single-check">
                            <img src="assets/images/service/01.svg" alt="service" />
                            <p>Rotas de aprovação, revisão e reprovação</p>
                          </div>
                          <div className="single-check">
                            <img src="assets/images/service/01.svg" alt="service" />
                            <p>Retorno em tempo real via API e webhooks</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="consultancy-bottom rts-section-gapBottom career-two-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="career-right-two-wrapper">
                    <h2 className="title">Regras configuráveis para cada perfil</h2>
                    <p>
                      Ajuste sua política por produto, canal e perfil. Reduza falso positivo, controle
                      tentativas suspeitas e mantenha uma experiência rápida para usuários legítimos.
                    </p>

                    <div className="check-wrapper-main">
                      <div className="single-wrapper">
                        <div className="check-wrapper">
                          <div className="single-check">
                            <img src="assets/images/service/01.svg" alt="service" />
                            <p>Limites e critérios por jornada</p>
                          </div>
                          <div className="single-check">
                            <img src="assets/images/service/01.svg" alt="service" />
                            <p>Regras para exceções e casos especiais</p>
                          </div>
                          <div className="single-check">
                            <img src="assets/images/service/01.svg" alt="service" />
                            <p>Trilhas e evidências para auditoria</p>
                          </div>
                          <div className="single-check">
                            <img src="assets/images/service/01.svg" alt="service" />
                            <p>Monitoramento e ajustes por performance</p>
                          </div>
                          <div className="single-check">
                            <img src="assets/images/service/01.svg" alt="service" />
                            <p>Integração simples com seus sistemas</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="col-lg-6 pl--40 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
                  <div className="thumbnail-consultancy jarallax">
                    <img
                      className="jarallax-img"
                      src="assets/images/industry/03.webp"
                      alt="consultancy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* industry service area start */}
        <div className="industry-serviuce-area rts-section-gap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="career-right-two-wrapper industry">
                  <h2 className="title">
                    Benefícios do <br /> score e risco
                  </h2>

                  <p className="more">
                    Decisões consistentes para reduzir fraude e melhorar aprovações, com regras claras
                    e acompanhamento.
                  </p>

                  <div className="check-wrapper-main">
                    <div className="single-wrapper">
                      <div className="check-wrapper">
                        <div className="single-check">
                          <img src="assets/images/service/01.svg" alt="service" />
                          <p>Menos fraude e menos perdas</p>
                        </div>
                        <div className="single-check">
                          <img src="assets/images/service/01.svg" alt="service" />
                          <p>Mais aprovações com controle de risco</p>
                        </div>
                        <div className="single-check">
                          <img src="assets/images/service/01.svg" alt="service" />
                          <p>Menos falso positivo e menos fricção</p>
                        </div>
                        <div className="single-check">
                          <img src="assets/images/service/01.svg" alt="service" />
                          <p>Visibilidade e trilhas para auditoria</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-lg-6">
                <div className="thumbnail-industry-thumbnail">
                  <div className="thumbnail-left left-small ">
                    <img src="assets/images/industry/06.webp" alt="industry" />
                  </div>
                  <div className="thumbnail-left top">
                    <img src="assets/images/industry/07.webp" alt="industry" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* industry service area end */}
      </>

      <CtaOne />
      <FooterOne />
      <BackToTop />
    </div>
  );
}