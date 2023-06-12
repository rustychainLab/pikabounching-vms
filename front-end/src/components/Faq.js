import React from "react";
import "../assets/styles.css";
import "bootstrap/dist/css/bootstrap.css";

function Faq() {
  return (
    <div class="faq container" id="FAQ">
      <h1 class="faqhead text-center">Frequently asked questions (Testnet)</h1>
      <div class="faq-questions">
        <details open="">
          <summary>What is PikaBounching?</summary>
          <div class="faq__content">
            <p>
              PikaBounching is first Virtual Mining System project. Based on a
              collection of NFTs that having tratir hasing power mechanism.
              PikaBounchingCoin(PBC) is the original token in the ecosystem.
              it's like ethereum only minted by miners, so supply will depend on
              community staking PikaBounching Nft
            </p>
          </div>
        </details>
        <details>
          <summary> (testnet) What is the price of nft?</summary>
          <div class="faq__content">
            <p>The initial price will be 0.5 ETH.</p>
          </div>
        </details>
        <details>
          <summary>(testnet) Why is min not free?</summary>
          <div class="faq__content">
            <p>
              mint fees will be used to make liquidity pairs at uniswap, so the
              PikaBounchingCoin from staking can be exchanged to eth goerli.
            </p>
          </div>
        </details>
        <details>
          <summary>What wallet can i use?</summary>
          <div class="faq__content">
            <p>We currently only support the Metamask wallet.</p>
          </div>
        </details>
        <details>
          <summary>
            What about after testnet, will there be an airdrop to the testers?
          </summary>
          <div class="faq__content">
            <p>
              yes! that's for sure, as a reward to the community there will be
              an allocation of tokens that are recorded on the blockchain that
              have participated in the testnet.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}

export default Faq;
