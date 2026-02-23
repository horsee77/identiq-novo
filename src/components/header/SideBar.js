"use client";

import React, { useState } from "react";
import Link from "next/link";

function SideBar({ isSidebarOpen, toggleSidebar }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (key) => {
    setOpenMenu(openMenu === key ? null : key);
  };

  return (
    <div>
      <div id="side-bar" className={`side-bar header-two ${isSidebarOpen ? "show" : ""}`}>
        <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
          <i className="far fa-times"></i>
        </button>

        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              {/* HOME */}
              <li>
                <Link href="/" className="main" onClick={toggleSidebar}>
                  Home
                </Link>
              </li>

              {/* SOLUÇÕES */}
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(1)}>
                  Soluções
                </Link>

                <ul className={`submenu ${openMenu === 1 ? "mm-collapse mm-show" : "mm-collapse"}`}>
                  {/* Verificação de Identidade */}
                  <li className="has-droupdown">
                    <Link href="#" className="main" onClick={() => toggleMenu(11)}>
                      Verificação de Identidade
                    </Link>
                    <ul className={`submenu ${openMenu === 11 ? "mm-collapse mm-show" : "mm-collapse"}`}>
                      <li>
                        <Link href="/kyc" onClick={toggleSidebar}>KYC e Onboarding</Link>
                      </li>
                      <li>
                        <Link href="/documentos" onClick={toggleSidebar}>Validação de Documentos</Link>
                      </li>
                      <li>
                        <Link href="/biometria" onClick={toggleSidebar}>Biometria e Prova de Vida</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/facescan" onClick={toggleSidebar}>Face Scan e Match</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Antifraude */}
                  <li className="has-droupdown">
                    <Link href="#" className="main" onClick={() => toggleMenu(12)}>
                      Antifraude
                    </Link>
                    <ul className={`submenu ${openMenu === 12 ? "mm-collapse mm-show" : "mm-collapse"}`}>
                      <li>
                        <Link href="/solucoes/risco" onClick={toggleSidebar}>Score e Risco</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/chargeback" onClick={toggleSidebar}>Prevenção de Chargeback</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/device-fingerprint" onClick={toggleSidebar}>Device Fingerprinting</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/monitoramento" onClick={toggleSidebar}>Monitoramento Contínuo</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Compliance */}
                  <li className="has-droupdown">
                    <Link href="#" className="main" onClick={() => toggleMenu(13)}>
                      Compliance
                    </Link>
                    <ul className={`submenu ${openMenu === 13 ? "mm-collapse mm-show" : "mm-collapse"}`}>
                      <li>
                        <Link href="/solucoes/aml" onClick={toggleSidebar}>AML e Screening</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/sancoes-pep" onClick={toggleSidebar}>Sanções e PEP</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/auditoria" onClick={toggleSidebar}>Auditoria e Trilhas</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/politicas" onClick={toggleSidebar}>Políticas e Regras</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* SEGMENTOS */}
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(2)}>
                  Para quem
                </Link>
                <ul className={`submenu ${openMenu === 2 ? "mm-collapse mm-show" : "mm-collapse"}`}>
                  <li>
                    <Link href="/segmentos/fintech" onClick={toggleSidebar}>Fintechs</Link>
                  </li>
                  <li>
                    <Link href="/segmentos/ecommerce" onClick={toggleSidebar}>E-commerce</Link>
                  </li>
                  <li>
                    <Link href="/segmentos/marketplace" onClick={toggleSidebar}>Marketplaces</Link>
                  </li>
                  <li>
                    <Link href="/segmentos/bancos" onClick={toggleSidebar}>Bancos e Instituições</Link>
                  </li>
                  <li>
                    <Link href="/segmentos/cripto" onClick={toggleSidebar}>Cripto e Web3</Link>
                  </li>
                  <li>
                    <Link href="/segmentos/seguros" onClick={toggleSidebar}>Seguros</Link>
                  </li>
                </ul>
              </li>

              {/* SERVIÇOS */}
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(3)}>
                  Serviços
                </Link>
                <ul className={`submenu ${openMenu === 3 ? "mm-collapse mm-show" : "mm-collapse"}`}>
                  <li>
                    <Link href="/servicos/consultoria" onClick={toggleSidebar}>Consultoria de Risco e Compliance</Link>
                  </li>
                  <li>
                    <Link href="/servicos/implementacao" onClick={toggleSidebar}>Implementação e Integrações</Link>
                  </li>
                  <li>
                    <Link href="/servicos/customizacao" onClick={toggleSidebar}>Customização de Fluxos</Link>
                  </li>
                  <li>
                    <Link href="/servicos/suporte" onClick={toggleSidebar}>Suporte e Sucesso do Cliente</Link>
                  </li>
                  <li>
                    <Link href="/servicos/treinamento" onClick={toggleSidebar}>Treinamento e Onboarding</Link>
                  </li>
                </ul>
              </li>

              {/* PRODUTO */}
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(4)}>
                  Produto
                </Link>
                <ul className={`submenu ${openMenu === 4 ? "mm-collapse mm-show" : "mm-collapse"}`}>
                  <li>
                    <Link href="/produto/plataforma" onClick={toggleSidebar}>Plataforma</Link>
                  </li>
                  <li>
                    <Link href="/produto/api" onClick={toggleSidebar}>API e Webhooks</Link>
                  </li>
                  <li>
                    <Link href="/produto/workflows" onClick={toggleSidebar}>Workflows e Regras</Link>
                  </li>
                  <li>
                    <Link href="/produto/seguranca" onClick={toggleSidebar}>Segurança</Link>
                  </li>
                </ul>
              </li>

              {/* RECURSOS */}
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(5)}>
                  Recursos
                </Link>
                <ul className={`submenu ${openMenu === 5 ? "mm-collapse mm-show" : "mm-collapse"}`}>
                  <li>
                    <Link href="/blog" onClick={toggleSidebar}>News</Link>
                  </li>
                  <li>
                    <Link href="/faq" onClick={toggleSidebar}>FAQ</Link>
                  </li>
                </ul>
              </li>

              {/* EMPRESA */}
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(6)}>
                  Empresa
                </Link>
                <ul className={`submenu ${openMenu === 6 ? "mm-collapse mm-show" : "mm-collapse"}`}>
                  <li>
                    <Link href="/empresa/sobre" onClick={toggleSidebar}>Sobre a Identiq</Link>
                  </li>
                  <li>
                    <Link href="/empresa/seguranca-e-compliance" onClick={toggleSidebar}>Segurança e Compliance</Link>
                  </li>
                  <li>
                    <Link href="/contato" onClick={toggleSidebar}>Contato</Link>
                  </li>
                </ul>
              </li>

              {/* CTA */}
              <li>
                <Link href="/contato" className="main" onClick={toggleSidebar}>
                  Fale com a Identiq
                </Link>
              </li>
            </ul>
          </nav>

          {/* social (mantive, mas vazio de link real) */}
          <div className="rts-social-border-area right-sidebar mt--80">
            <ul>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-pinterest" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* mobile menu area end */}
      </div>
    </div>
  );
}

export default SideBar;