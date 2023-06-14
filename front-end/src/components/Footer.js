import React from "react";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";

function Footer() {
  return (
    <div class="footer flex flex-nowrap ">
      <div>
        <p class="text-right">
          <i class="text-bold">Pika Foundation</i>&#169; All Right Reserved
        </p>
      </div>
      {/* <div></div> */}
      <div class="social">
        <a target="_blank" href="https://github.com/rustychainLab">
          <AiOutlineGithub size={24} color="#000" />
        </a>
        <a target="_blank" href="https://twitter.com/pikafoundation">
          <AiOutlineTwitter size={24} color="#000" />
        </a>
        <a target="_blank" href="https://discord.gg/pikabounching">
          <RiDiscordFill size={24} color="#000" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
