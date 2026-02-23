import React from "react";

function CtaFive() {
  return (
    <div>
      {/* rts call to action area start */}
      <div className="rts-call-to-action-area-bg-dark rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-bg-dark-area">
                <h3 className="title">Solicite uma demo</h3>
                <p>Veja como a Identiq reduz fraude e aumenta aprovações com decisões em tempo real.</p>
                <a href="/contato" className="rts-btn btn-primary wow fadeInUp">
                  Agendar agora
                  <img
                    className="injectable"
                    src="assets/images/service/icons/13.svg"
                    alt="arrow"
                  />
                </a>

                <div className="bg-shape">
                  <img src="assets/images/cta/07.png" alt="bg-shape" className="one" />
                  <img src="assets/images/cta/08.png" alt="bg-shape" className="two" />
                  <img src="assets/images/cta/09.png" alt="bg-shape" className="three" />
                  <img src="assets/images/cta/10.png" alt="bg-shape" className="four" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts call to action area end */}
    </div>
  );
}

export default CtaFive;