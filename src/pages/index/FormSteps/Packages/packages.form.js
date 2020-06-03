import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setCurrentNavigationStep } from "../../../../redux/navigation-steps/steps.actions";
import { getDataForURL } from "../../../../redux/globals/globals.actions";
//styles
import "./packages.scss";

// components
import Container from "../../../../components/layout/container.component";
import Tooltip from "../../../../components/tooltip/tooltip.component";
import Button from "../../../../components/buttons/button.component";
import SvgIcon from "../../../../components/svg-icon/svg-icon.component";
import { Link, useHistory } from "react-router-dom";

const PackagesForm = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const queryString = require("query-string");
  let data;

  useEffect(() => {
    let url = `${history.location.pathname}${history.location.search}`;
    dispatch(getDataForURL(url));
  }, []);

  const DummyText =
    "EON Smart Box svaki TV pretvara u Smart TV. Pomoću EON Smart Boxa možete uživati u najboljem sadržaju iz NetTV Plus paketa i preuzimati aplikacije iz Google Play Store-a. Sve što vam je potrebno je HDMI priključak i internet konekcija.";

  const DummyTextSecond =
    "Gledaj EON na svom Smart televizoru novije generacije, kao i na računaru i smart mobilnim uređajima. Pogledaj na kojim Smart televizorima možeš da gledaš EON aplikaciju bez korišćenja dodatnog uređaja";

  const goToPreviousStep = () => {
    let queryParams = queryString.parse(history.location.search);
    delete queryParams["product_code"];

    let url = `/products/?${queryString.stringify(queryParams)}`;
    history.push(url);
    dispatch(setCurrentNavigationStep("subtract"));
  };

  return (
    <section className="packages">
      <div className="top-content">
        <h3 className="top-content--title">Uvek dostupno na:</h3>
        <div className="top-content--icons">
          <span className="top-content--icons--item"></span>
          <span className="top-content--icons--item"></span>
        </div>
      </div>

      <div className="main-content">
        <h3 className="main-content--title">
          Da li želiš da gledaš televiziju i preko BOX-a?
        </h3>

        <div className="main-content--choices">
          <div className="main-content--choices-item">
            <div className="values">
              <span className="name">Želim da gledam preko BOX-a</span>
              <Tooltip title={DummyText} styles="custom-tooltip" />
            </div>
            <Button
              title="Odaberi"
              clicked={(e) => console.log("Clicked")}
              customClass="button-blue"
            />
          </div>

          <div className="main-content--choices-item">
            <div className="values">
              <span className="name">Ne želim da gledam preko BOX-a</span>
              <Tooltip title={DummyTextSecond} styles="custom-tooltip" />
            </div>
            <Button
              title="Odaberi"
              clicked={(e) => console.log("Clicked")}
              customClass="button-blue"
            />
          </div>
        </div>

        <div className="main-content--actions-box">
          <button onClick={(e) => goToPreviousStep()} className="button-back">
            <SvgIcon icon="icon-arrow-left-1" />
            <span className="button-name">Nazad</span>
          </button>
        </div>

        <div className="main-content--notice-box">
          <ul className="main-content--notice-box--list">
            <li className="main-content--notice-box--list-item">
              Ponude važe za nove korisnike.
            </li>
            <li className="main-content--notice-box--list-item">
              Za dostavu BOX-a biće nam potrebna adresa koju ćeš nam dostaviti u
              daljim koracima.
            </li>
            <li className="main-content--notice-box--list-item">
              Možeš da nas obavestiš da želiš da vratiš BOX bez navođenja bilo
              kakvog posebnog razloga. To možeš da učiniš u roku od 14 dana od
              njegovog prijema poštom, mejlom, telefonom i sl. Ako nam izjavu
              upućuješ poštom ili mejlom možeš i da popuniš izjavu koju ćemo ti
              poslati uz mejl nakon obavljene kupovine. Više informacija o
              postupku vraćanja možeš naći{" "}
              <Link to="https://nettvplus.com/Pravila-koriscenja/a30552-Uslovi-koriscenja.html#stb_device">
                ovde
              </Link>{" "}
              ili u mejlu koji ćemo ti poslati nakon kupovine.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PackagesForm;
